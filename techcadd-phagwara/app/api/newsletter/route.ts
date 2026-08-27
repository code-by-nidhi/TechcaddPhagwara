import { NextResponse } from 'next/server'
import { clean, isEmail } from '@/lib/validation'

/**
 * Newsletter subscription endpoint for the footer form.
 *
 * Unlike the contact form, this one does NOT go to the CMS: the CMS has no
 * newsletter module — no table, no API, no screen — so there is nowhere in it
 * for an address to land. (The older shared `techcadd_cms` database has a
 * `newsletter_subscribers` table, which is where the idea came from, but this
 * CMS's schema never gained one.)
 *
 * So the only destination is `NEWSLETTER_WEBHOOK_URL` — Mailchimp, Brevo,
 * Buttondown, or a Zapier hook in front of any of them. Until one is set, an
 * address typed into the footer is recorded nowhere.
 *
 * That last sentence used to be invisible. The handler logged to the console
 * and answered "You are on the list — check your inbox", which promised a
 * confirmation email that nothing was going to send, to a person who had been
 * added to no list. The messages below say only what is true, and the log line
 * says loudly what an operator needs to do about it.
 */

export const dynamic = 'force-dynamic'

type Outcome = 'subscribed' | 'unconfigured' | 'failed'

async function subscribe(email: string): Promise<Outcome> {
  const webhook = process.env.NEWSLETTER_WEBHOOK_URL

  if (!webhook) {
    console.warn(
      '[newsletter] NEWSLETTER_WEBHOOK_URL is not set — this address was NOT recorded anywhere: ' +
        `${email}. Point it at your mailing-list provider, or the footer form collects nothing.`,
    )
    return 'unconfigured'
  }

  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), 8000)

  try {
    const response = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal,
      cache: 'no-store',
      body: JSON.stringify({
        email,
        source: 'techcadd-phagwara-footer',
        receivedAt: new Date().toISOString(),
      }),
    })

    if (!response.ok) {
      console.error(`[newsletter] webhook responded ${response.status} for ${email}`)
      return 'failed'
    }

    return 'subscribed'
  } catch (error) {
    console.error('[newsletter] webhook unreachable', error)
    return 'failed'
  } finally {
    clearTimeout(timer)
  }
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

  const outcome = await subscribe(clean(email, 254).toLowerCase())

  if (outcome === 'failed') {
    return NextResponse.json(
      { ok: false, message: 'Could not subscribe right now. Please try again later.' },
      { status: 502 }
    )
  }

  /*
    Two different truths, and the visitor is told the right one.

    With a provider configured they are on a list and will get a confirmation.
    Without one, they are not on any list — so they are pointed at the way to
    reach us that does work, rather than being thanked for joining something
    that does not exist.
  */
  return NextResponse.json({
    ok: true,
    message:
      outcome === 'subscribed'
        ? 'You are on the list — check your inbox.'
        : 'Thanks! Our mailing list is not open yet — use the contact form and a counsellor will keep you posted.',
  })
}

export async function GET() {
  return NextResponse.json({ ok: false, message: 'Method not allowed.' }, { status: 405 })
}
