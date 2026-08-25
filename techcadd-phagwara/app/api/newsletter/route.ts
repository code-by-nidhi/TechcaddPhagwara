import { NextResponse } from 'next/server'
import { clean, isEmail } from '@/lib/validation'

/**
 * Newsletter subscription endpoint for the footer form.
 *
 * Same shape as /api/contact: validate, then hand off to a transport. Point
 * NEWSLETTER_WEBHOOK_URL at Mailchimp/Brevo/Buttondown, or replace `subscribe()`
 * with a direct list-API call. Without one configured the address is logged so
 * the UI round trip still works in development.
 */

export const dynamic = 'force-dynamic'

async function subscribe(email: string): Promise<void> {
  const webhook = process.env.NEWSLETTER_WEBHOOK_URL

  if (!webhook) {
    console.info('[newsletter] no NEWSLETTER_WEBHOOK_URL configured — logging instead', {
      email,
      receivedAt: new Date().toISOString(),
    })
    return
  }

  const res = await fetch(webhook, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
      source: 'techcadd-phagwara-footer',
      receivedAt: new Date().toISOString(),
    }),
  })

  if (!res.ok) throw new Error(`Webhook responded ${res.status}`)
}

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, message: 'Malformed request.' }, { status: 400 })
  }

  const email = (body as { email?: unknown }).email

  if (!isEmail(email)) {
    return NextResponse.json(
      { ok: false, message: 'Please enter a valid email address.' },
      { status: 422 }
    )
  }

  try {
    await subscribe(clean(email, 254).toLowerCase())
  } catch (error) {
    console.error('[newsletter] subscribe failed', error)
    return NextResponse.json(
      { ok: false, message: 'Could not subscribe right now. Please try again later.' },
      { status: 502 }
    )
  }

  return NextResponse.json({
    ok: true,
    message: 'You are on the list — check your inbox.',
  })
}

export async function GET() {
  return NextResponse.json({ ok: false, message: 'Method not allowed.' }, { status: 405 })
}
