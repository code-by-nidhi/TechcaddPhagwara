import { NextResponse } from 'next/server'
import { clean, isEmail, isNonEmpty, isPhone } from '@/lib/validation'

/**
 * Enquiry endpoint for the Contact form and the navbar's Book Demo modal.
 *
 * Where an enquiry goes
 * ---------------------
 * Into the CMS, which is what the CMS's Enquiries module is for: a counsellor
 * opens the list, sees the lead, assigns it, adds a note and moves it through
 * the pipeline. Before this, the form's submissions went to a webhook if one
 * was configured and to the server console if not — so in the default
 * configuration a student filling in this form reached nobody, and the CMS's
 * Enquiries screen sat empty next to a form that was collecting leads.
 *
 * The webhook is kept and still fires. Some deployments do forward to a CRM,
 * and removing it to add the CMS would be trading one integration for another
 * rather than finishing this one. Both are attempted; the CMS is the one whose
 * failure the visitor is told about, because it is the one that records the
 * lead.
 *
 * Why the site still stands in front of the API
 * ---------------------------------------------
 * The CMS's `/api/public/enquiries` is reachable directly and defends itself —
 * it rate-limits, it refuses duplicates, and it takes a deliberately narrow
 * schema so a form cannot file a lead as already-converted. This route is not
 * a substitute for any of that. It exists because the browser should not need
 * to know the CMS's address, because the visitor's IP and user-agent are only
 * knowable here, and because a validation message written for this form reads
 * better than a Zod error.
 */

interface EnquiryPayload {
  name: string
  phone: string
  /** Optional — the navbar's Book Demo modal collects a phone number and a
      captcha instead of an email, so this is only ever populated by the
      full Contact section form. */
  email: string
  course: string
  message: string
}

/* Never statically optimised — this route must run per request. */
export const dynamic = 'force-dynamic'

/* ------------------------------------------------------- rate limiting -- */

/**
 * Best-effort in-process throttle: 5 submissions per IP per 10 minutes.
 *
 * NOTE: this Map lives in a single server instance's memory. On Vercel or any
 * multi-instance deployment it is per-lambda and resets on cold start, so it
 * deters casual spam but is not a real rate limiter. The CMS's own limiter is
 * the one that actually holds, because it sits in front of a single database
 * — see the enquiry limiter in the API's public router.
 */
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 5
const hits = new Map<string, number[]>()

function rateLimited(ip: string): boolean {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)

  /* keep the map from growing without bound */
  if (hits.size > 5000) hits.clear()

  return recent.length > MAX_PER_WINDOW
}

/* ------------------------------------------------------------ transports -- */

const CMS_API_URL = (process.env.CMS_API_URL ?? '').replace(/\/$/, '')

/** What the CMS answered, in terms this route can act on. */
type CmsResult =
  | { kind: 'recorded' }
  /** The CMS has this lead already and says so with a message for the student. */
  | { kind: 'duplicate'; message: string }
  | { kind: 'unconfigured' }
  | { kind: 'failed'; detail: string }

/**
 * Files the enquiry in the CMS.
 *
 * `source: 'website'` and `formType` tell a counsellor where the lead came
 * from without them having to guess from the wording of the message.
 */
async function fileWithCms(
  payload: EnquiryPayload,
  context: { ip: string; userAgent: string; sourceUrl: string; formType: string },
): Promise<CmsResult> {
  if (!CMS_API_URL) return { kind: 'unconfigured' }

  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), 8000)

  try {
    const response = await fetch(`${CMS_API_URL}/public/enquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal,
      // A lead is never cached, and Next would otherwise be free to try.
      cache: 'no-store',
      body: JSON.stringify({
        studentName: payload.name,
        phone: payload.phone,
        email: payload.email,
        courseName: payload.course,
        message: payload.message,
        source: 'website',
        formType: context.formType,
        sourceUrl: context.sourceUrl,
        // The CMS de-duplicates on phone and IP. It only ever sees this
        // server, so the visitor's address has to be passed explicitly or
        // every lead from every visitor would look like one busy address.
        ...(context.ip !== 'unknown' ? { ip: context.ip } : {}),
        ...(context.userAgent ? { userAgent: context.userAgent } : {}),
      }),
    })

    if (response.status === 429) {
      /*
        Not an error. 429 here means the CMS already has this number from
        today and is declining to record it twice — the student is not doing
        anything wrong and should be reassured, not asked to try again.
      */
      const body = (await response.json().catch(() => ({}))) as { message?: string }
      return {
        kind: 'duplicate',
        message: body.message ?? 'We already have your enquiry. A counsellor will call you shortly.',
      }
    }

    if (!response.ok) {
      const body = (await response.text().catch(() => '')).slice(0, 200)
      return { kind: 'failed', detail: `CMS responded ${response.status} ${body}` }
    }

    return { kind: 'recorded' }
  } catch (error) {
    return { kind: 'failed', detail: error instanceof Error ? error.message : String(error) }
  } finally {
    clearTimeout(timer)
  }
}

/** The optional CRM/Zapier hand-off, unchanged. */
async function forwardToWebhook(payload: EnquiryPayload): Promise<void> {
  const webhook = process.env.ENQUIRY_WEBHOOK_URL
  if (!webhook) return

  const res = await fetch(webhook, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    cache: 'no-store',
    body: JSON.stringify({
      ...payload,
      source: 'techcadd-phagwara-website',
      notify: process.env.ENQUIRY_NOTIFY_EMAIL,
      receivedAt: new Date().toISOString(),
    }),
  })

  if (!res.ok) throw new Error(`Webhook responded ${res.status}`)
}

/* ----------------------------------------------------------------- POST -- */

export async function POST(request: Request) {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    request.headers.get('x-real-ip') ??
    'unknown'

  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, message: 'Too many requests. Please try again shortly, or call us directly.' },
      { status: 429 }
    )
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, message: 'Malformed request.' }, { status: 400 })
  }

  const data = body as Partial<Record<keyof EnquiryPayload | 'formType', unknown>>
  const errors: string[] = []

  if (!isNonEmpty(data.name, 120)) errors.push('a valid name')
  if (!isPhone(data.phone)) errors.push('a valid phone number')
  /* email is optional — only validated when the caller actually sends one */
  if (data.email !== undefined && data.email !== '' && !isEmail(data.email)) {
    errors.push('a valid email address')
  }
  if (!isNonEmpty(data.course, 160)) errors.push('a program selection')

  if (errors.length > 0) {
    return NextResponse.json(
      { ok: false, message: `Please provide ${errors.join(', ')}.` },
      { status: 422 }
    )
  }

  const payload: EnquiryPayload = {
    name: clean(data.name as string, 120),
    phone: clean(data.phone as string, 20),
    email: typeof data.email === 'string' ? clean(data.email, 254).toLowerCase() : '',
    course: clean(data.course as string, 160),
    message: typeof data.message === 'string' ? clean(data.message, 2000) : '',
  }

  const context = {
    ip,
    userAgent: (request.headers.get('user-agent') ?? '').slice(0, 255),
    sourceUrl: (request.headers.get('referer') ?? '').slice(0, 500),
    // Which form it came from, so a counsellor can tell a considered enquiry
    // from a two-field demo request. The modal sends 'book-demo'.
    formType: typeof data.formType === 'string' ? clean(data.formType, 32) : 'contact',
  }

  const cms = await fileWithCms(payload, context)

  /*
    The webhook is fired regardless and its failure is logged, not surfaced.

    It is a secondary destination: if the CMS recorded the lead, the enquiry is
    safe, and telling the student to phone instead because a Zapier hook was
    down would be wrong. If the CMS did *not* record it, the branch below has
    already decided what to tell them.
  */
  const webhook = forwardToWebhook(payload).catch((error: unknown) => {
    console.error('[enquiry] webhook delivery failed', error)
  })

  if (cms.kind === 'duplicate') {
    await webhook
    return NextResponse.json({ ok: true, message: cms.message })
  }

  if (cms.kind === 'failed') {
    console.error(`[enquiry] the CMS did not record this lead: ${cms.detail}`)
    await webhook

    /*
      Only an error if there is nowhere else it could have gone.

      With a webhook configured the enquiry has still reached someone, so the
      student is told it worked — because it did. With neither, it reached
      nobody, and saying "we'll call you" would be a lie that costs the
      institute a student.
    */
    if (process.env.ENQUIRY_WEBHOOK_URL) {
      return NextResponse.json({
        ok: true,
        message: 'Request received — a counsellor will call you within 24 hours.',
      })
    }

    return NextResponse.json(
      {
        ok: false,
        message: `We could not submit that right now. Please call us on ${
          process.env.ENQUIRY_FALLBACK_PHONE ?? '+91 98765 43210'
        }.`,
      },
      { status: 502 }
    )
  }

  if (cms.kind === 'unconfigured') {
    console.info('[enquiry] no CMS_API_URL configured — nothing recorded this lead', {
      ...payload,
      receivedAt: new Date().toISOString(),
    })
  }

  await webhook

  return NextResponse.json({
    ok: true,
    message: 'Request received — a counsellor will call you within 24 hours.',
  })
}

/** Anything other than POST is not meaningful here. */
export async function GET() {
  return NextResponse.json({ ok: false, message: 'Method not allowed.' }, { status: 405 })
}
