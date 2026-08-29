import { revalidateTag } from 'next/cache'
import { NextResponse } from 'next/server'

import { CMS_TAGS } from '@/lib/cms/client'

/**
 * The CMS's end of the "an editor just saved something" signal.
 *
 * Reads from the CMS are cached for an hour (see `lib/cms/client.ts`), which
 * is the right window for a marketing site right up until somebody fixes a
 * typo and refreshes to find it unchanged — at which point the natural
 * conclusion is that the save failed, and the second natural move is to save
 * it again. This endpoint is what makes the edit appear immediately instead.
 *
 * The API calls it after every successful mutation, debounced so a multi-step
 * save arrives as one request: `cms-techcadd/backend/src/http/revalidate.ts`.
 *
 * Authentication is a shared secret in a header, matching what the API sends.
 * That is enough for what this does — it can only drop caches, never read or
 * write content — but it is not nothing: without it, anyone could force the
 * site to re-fetch the entire catalogue on demand.
 */

/* Cache invalidation must run per request; there is nothing here to prerender. */
export const dynamic = 'force-dynamic'

/** Every tag the site reads under, for the case where we are not told which. */
const ALL_TAGS = Object.values(CMS_TAGS)

export async function POST(request: Request) {
  const expected = process.env.REVALIDATE_SECRET

  /*
    An unset secret disables the endpoint rather than opening it.

    The alternative — treating "no secret configured" as "no check needed" —
    turns a missing environment variable into a public cache-buster, and does
    it silently, on exactly the deployment least likely to be watched.
  */
  if (!expected) {
    console.warn('[revalidate] REVALIDATE_SECRET is not set — refusing to revalidate.')
    return NextResponse.json(
      { revalidated: false, message: 'Revalidation is not configured.' },
      { status: 503 },
    )
  }

  const provided =
    request.headers.get('x-revalidate-secret') ??
    // Also accepted as a query parameter, which is what a browser address bar
    // and most webhook UIs can manage when a custom header is not an option.
    new URL(request.url).searchParams.get('secret')

  if (provided !== expected) {
    // Deliberately vague: a response that distinguished "wrong secret" from
    // "no secret" would confirm to a prober that the endpoint is live.
    return NextResponse.json({ revalidated: false, message: 'Not authorised.' }, { status: 401 })
  }

  /*
    Which tags to drop.

    The API's webhook sends no body — its middleware sees only the HTTP method,
    so it genuinely does not know what changed and says so by saying nothing.
    Everything is dropped in that case. A caller that *does* know can send
    `{ "tags": ["cms:courses"] }` and have only that re-fetched; the endpoint
    accepts it so a more precise webhook is a change on one side, not both.
  */
  let tags: string[] = ALL_TAGS

  try {
    const body = (await request.json()) as { tags?: unknown; tag?: unknown }
    const asked = Array.isArray(body?.tags)
      ? body.tags
      : typeof body?.tag === 'string'
        ? [body.tag]
        : []

    const known = asked.filter(
      (tag): tag is string => typeof tag === 'string' && (ALL_TAGS as string[]).includes(tag),
    )
    if (known.length > 0) tags = known
  } catch {
    // No body, or not JSON. That is the ordinary case — fall through to all.
  }

  for (const tag of tags) revalidateTag(tag)

  return NextResponse.json({
    revalidated: true,
    tags,
    at: new Date().toISOString(),
  })
}

/**
 * A GET is how someone checks the endpoint exists.
 *
 * It answers without revalidating and without the secret, because the useful
 * thing to learn here is "is this wired up at all" — which is precisely what
 * the API's own 404 warning tells its operator to come and find out.
 */
export async function GET() {
  return NextResponse.json({
    ok: true,
    configured: Boolean(process.env.REVALIDATE_SECRET),
    message: 'POST here with the x-revalidate-secret header to drop the CMS caches.',
  })
}
