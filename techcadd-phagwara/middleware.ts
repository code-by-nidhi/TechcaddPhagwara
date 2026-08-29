import { NextResponse, type NextRequest } from 'next/server'

/**
 * Applies the redirects an editor set up in the CMS's SEO module.
 *
 * That module has always stored them and the API has always served them at
 * `/api/public/redirects` — with a note saying the site "can apply them in
 * middleware". Nothing did, so a rule an editor added moved nobody: the old
 * address kept returning the same 404 it always had, and the CMS said the
 * redirect was enabled.
 *
 * Why the rules are fetched rather than compiled in
 * -------------------------------------------------
 * A redirect exists to be added the day an address breaks, which is not the
 * day of the next deploy. Compiling them into `next.config.ts` would make
 * every rule a code change, and the CMS screen a form that writes to nothing.
 *
 * The cost of fetching them is paid once per cache window, not once per
 * request: the response is cached by Next under `cms:redirects` and dropped
 * when the CMS says something changed. On a miss this is one call to the API
 * before the response goes out, and if that call fails the request is passed
 * straight through — a redirect that does not happen is a page not found, and
 * a middleware that throws is every page not found.
 */

const CMS_API_URL = (process.env.CMS_API_URL ?? '').replace(/\/$/, '')

interface Redirect {
  from: string
  to: string
  type: number
}

/**
 * A short window, deliberately shorter than the content cache.
 *
 * Redirects are added in response to something being broken right now, and
 * `revalidateTag` — which is what makes the rest of the CMS content appear
 * instantly — cannot be called from middleware's runtime. A minute is the
 * compromise: short enough that a new rule takes effect while the person who
 * added it is still watching, long enough that this is not a fetch per hit.
 */
const CACHE_SECONDS = 60

/**
 * Paths this never has to think about.
 *
 * Static assets and Next's own internals outnumber page requests, and none of
 * them can be the subject of an editor's redirect. Also excluded is the API,
 * because a redirected POST loses its body.
 */
export const config = {
  matcher: ['/((?!_next/|api/|favicon|images/|robots.txt|sitemap.xml|opengraph-image).*)'],
}

async function loadRedirects(): Promise<Redirect[]> {
  if (!CMS_API_URL) return []

  const controller = new AbortController()
  // Tighter than the general CMS timeout: this one runs before the response
  // starts, so it is latency every visitor pays.
  const timer = setTimeout(() => controller.abort(), 2000)

  try {
    const response = await fetch(`${CMS_API_URL}/public/redirects`, {
      signal: controller.signal,
      next: { revalidate: CACHE_SECONDS },
    })
    if (!response.ok) return []

    const body = (await response.json()) as { items?: Redirect[] }
    return body.items ?? []
  } catch {
    // Silent. This runs on every uncached request, and a CMS that is down
    // would otherwise fill the log with one line per visitor.
    return []
  } finally {
    clearTimeout(timer)
  }
}

/** Trailing slashes are not a difference anyone means. */
const normalise = (path: string) => (path.length > 1 ? path.replace(/\/+$/, '') : path)

export async function middleware(request: NextRequest) {
  if (!CMS_API_URL) return NextResponse.next()

  const rules = await loadRedirects()
  if (rules.length === 0) return NextResponse.next()

  const from = normalise(request.nextUrl.pathname)
  const match = rules.find((rule) => normalise(rule.from) === from)
  if (!match) return NextResponse.next()

  const target = new URL(match.to, request.nextUrl.origin)

  /*
    A rule that points at itself is dropped, not followed.

    An editor typing the same path into both boxes is an easy mistake, and the
    result without this check is a redirect loop that takes the page down —
    the browser gives up after twenty hops and shows an error, on an address
    that worked before the rule was added.
  */
  if (normalise(target.pathname) === from && target.origin === request.nextUrl.origin) {
    return NextResponse.next()
  }

  // The query string belongs to the request, not the rule: a campaign's
  // ?utm_source should survive being redirected.
  if (!target.search) target.search = request.nextUrl.search

  return NextResponse.redirect(target, match.type === 302 ? 302 : 301)
}
