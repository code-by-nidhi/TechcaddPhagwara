import { NextResponse } from 'next/server'
import { clean, isEmail } from '@/lib/validation'
import { recordSubscriber } from '@/lib/newsletter'

/**
 * Newsletter subscription endpoint for the footer form.
 *
 * Two destinations, in the same arrangement the contact form uses: the address
 * is written to `newsletter_subscribers` in MySQL, and `NEWSLETTER_WEBHOOK_URL`
 * — Mailchimp, Brevo, Buttondown, or a Zapier hook in front of any of them —
 * is fired as a secondary if one is configured.
 *
 * The database is the destination that matters. It is under our own control,
 * it survives a provider being swapped, and it means the footer form collects
 * something on a deployment that has no mailing-list provider at all.
 *
 * The CMS is deliberately not involved: it has no newsletter module — no
 * table, no API, no screen — so there is nowhere in it for an address to land.
 * `scripts/newsletter-standalone.sql` therefore defines this table rather than
 * mirroring a CMS migration, unlike the enquiries one.
 *
 * The messages below say only what is true. An earlier version logged to the
 * console and answered "You are on the list — check your inbox", promising a
 * confirmation email that nothing was going to send, to a person who had been
 * added to no list.
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

  const address = clean(email, 254).toLowerCase()

  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    request.headers.get('x-real-ip') ??
    'unknown'

  const filed = await recordSubscriber(
    { email: address },
    {
      ip,
      userAgent: (request.headers.get('user-agent') ?? '').slice(0, 255),
      sourceUrl: (request.headers.get('referer') ?? '').slice(0, 500),
      source: 'footer',
    },
  )

  /*
    The webhook is a secondary destination and its failure is logged, not
    surfaced — the same rule the contact route follows. If the row was written
    the address is safe, and telling a visitor their signup failed because a
    third-party list provider was briefly down would be untrue.
  */
  const outcome = await subscribe(address)

  if (filed.kind === 'failed') {
    console.error('[newsletter] database write failed', filed.detail)
  }

  /*
    Recorded somewhere, by either route, is a success.

    A duplicate counts: the visitor is on the list, which is what they were
    asking for, and telling them otherwise invites them to try again.
  */
  const stored = filed.kind === 'recorded' || filed.kind === 'duplicate'

  if (!stored && outcome !== 'subscribed') {
    return NextResponse.json(
      { ok: false, message: 'Could not subscribe right now. Please try again later.' },
      { status: 502 }
    )
  }

  return NextResponse.json({
    ok: true,
    message:
      filed.kind === 'duplicate'
        ? 'You are already on the list — we will keep you posted.'
        : 'You are on the list — we will keep you posted.',
  })
}

export async function GET() {
  return NextResponse.json({ ok: false, message: 'Method not allowed.' }, { status: 405 })
}
