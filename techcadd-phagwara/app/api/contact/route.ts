import { NextResponse } from 'next/server'
import { clean, isEmail, isNonEmpty, isPhone } from '@/lib/validation'
import { recordEnquiry } from '@/lib/enquiries'

/**
 * Enquiry endpoint for the Contact form and the navbar's Book Demo modal.
 *
 * Where an enquiry goes
 * ---------------------
 * Straight into the `enquiries` table in MySQL — the CMS's own table, so a
 * counsellor opens the CMS Enquiries screen and the lead is there to assign,
 * annotate and move through the pipeline. Before this, submissions went to a
 * webhook if one was configured and to the server console if not, so in the
 * default configuration a student filling in this form reached nobody.
 *
 * The write is direct rather than a POST to the CMS's `/public/enquiries`,
 * which means a visitor can book a demo whether or not the Express API happens
 * to be running. The trade is that the duplicate thresholds and the column
 * list now live in two codebases; `lib/enquiries.ts` mirrors the CMS's public
 * router deliberately, and the two have to be changed together. The schema
 * itself is still the CMS's — its migrations create the table, this only ever
 * inserts rows.
 *
 * The webhook is kept and still fires. Some deployments do forward to a CRM,
 * and removing it would trade one integration for another. Both are attempted;
 * the database is the one whose failure the visitor is told about, because it
 * is the one that records the lead.
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
 * deters casual spam but is not a real rate limiter. The check that actually
 * holds is the duplicate test in `lib/enquiries.ts`, because it counts rows in
 * the database rather than requests in one process's memory.
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

  const filed = await recordEnquiry(payload, context)

  /*
    The webhook is fired regardless and its failure is logged, not surfaced.

    It is a secondary destination: if the row was written, the enquiry is safe,
    and telling the student to phone instead because a Zapier hook was down
    would be wrong. If it was *not* written, the branch below has already
    decided what to tell them.
  */
  const webhook = forwardToWebhook(payload).catch((error: unknown) => {
    console.error('[enquiry] webhook delivery failed', error)
  })

  if (filed.kind === 'duplicate') {
    await webhook
    return NextResponse.json({
      ok: true,
      message: 'We already have your enquiry. A counsellor will call you shortly.',
    })
  }

  if (filed.kind === 'failed') {
    console.error(`[enquiry] the database did not record this lead: ${filed.detail}`)
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

  if (filed.kind === 'unconfigured') {
    console.info('[enquiry] no database configured — nothing recorded this lead', {
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
