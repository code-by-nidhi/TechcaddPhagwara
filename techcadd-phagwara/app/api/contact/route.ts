import { NextResponse } from 'next/server'
import { clean, isEmail, isNonEmpty, isPhone } from '@/lib/validation'

/**
 * Enquiry endpoint for the Contact form.
 *
 * In the Vite build the form ran `await new Promise(r => setTimeout(r, 1200))`
 * and discarded everything the student typed. This handler validates the
 * payload server-side and forwards it to whatever transport is configured.
 *
 * TRANSPORT: set ENQUIRY_WEBHOOK_URL to a CRM/Zapier/Make endpoint, or replace
 * the `forward()` body with a direct email send (Resend, SendGrid, Nodemailer).
 * With no webhook configured the enquiry is logged to the server console so
 * local development still exercises the full round trip.
 */

interface EnquiryPayload {
  name: string
  phone: string
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
 * deters casual spam but is not a real rate limiter. For production, put
 * Upstash/Redis or the platform's WAF in front of this route.
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

/* ------------------------------------------------------------ transport -- */

async function forward(payload: EnquiryPayload): Promise<void> {
  const webhook = process.env.ENQUIRY_WEBHOOK_URL

  if (!webhook) {
    console.info('[enquiry] no ENQUIRY_WEBHOOK_URL configured — logging instead', {
      ...payload,
      receivedAt: new Date().toISOString(),
    })
    return
  }

  const res = await fetch(webhook, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
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

  const data = body as Partial<Record<keyof EnquiryPayload, unknown>>
  const errors: string[] = []

  if (!isNonEmpty(data.name, 120)) errors.push('a valid name')
  if (!isPhone(data.phone)) errors.push('a valid phone number')
  if (!isEmail(data.email)) errors.push('a valid email address')
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
    email: clean(data.email as string, 254).toLowerCase(),
    course: clean(data.course as string, 160),
    message: typeof data.message === 'string' ? clean(data.message, 2000) : '',
  }

  try {
    await forward(payload)
  } catch (error) {
    console.error('[enquiry] delivery failed', error)
    return NextResponse.json(
      {
        ok: false,
        message: 'We could not submit that right now. Please call us on +91 98765 43210.',
      },
      { status: 502 }
    )
  }

  return NextResponse.json({
    ok: true,
    message: 'Request received — a counsellor will call you within 24 hours.',
  })
}

/** Anything other than POST is not meaningful here. */
export async function GET() {
  return NextResponse.json({ ok: false, message: 'Method not allowed.' }, { status: 405 })
}
