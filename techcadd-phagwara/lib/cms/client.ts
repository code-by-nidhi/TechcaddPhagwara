/**
 * The website's half of the CMS contract.
 *
 * Everything the site reads from the CMS goes through `cmsGet`. It is the one
 * place that knows the API's address, how long a response may be cached, which
 * tag invalidates it, and — most importantly — what to do when the CMS is not
 * there.
 *
 * The failure rule is the whole design
 * ------------------------------------
 * A marketing site must not go blank because an admin API is restarting. Every
 * read here returns `null` on any failure rather than throwing, and every
 * caller in `lib/cms/content.ts` falls back to the same `data/*.ts` files the
 * site shipped with. So:
 *
 *   - CMS up      → the page renders what an editor last saved.
 *   - CMS down    → the page renders exactly what it rendered before any of
 *                   this existed. Not an error page, not an empty section.
 *
 * That is also why `CMS_API_URL` being unset is not an error. A checkout with
 * no `.env.local` runs the site standalone, which is how it behaved before the
 * CMS existed and is what `npm run dev` should do for someone who only wants
 * to work on the CSS.
 */

/** No trailing slash, so `${CMS_API_URL}/public/courses` is well-formed. */
const CMS_API_URL = (process.env.CMS_API_URL ?? '').replace(/\/$/, '')

/** True when a CMS has been configured for this deployment at all. */
export const cmsConfigured = CMS_API_URL.length > 0

/**
 * The same API, as the *browser* is allowed to know it.
 *
 * Everything else here runs on the server, where `CMS_API_URL` is a private
 * variable that never reaches a bundle. One thing does not: the comment thread
 * on a blog post is read and written from the visitor's browser, straight to
 * the API.
 *
 * That is the CMS's own design, not a shortcut — its `CORS_ORIGIN` lists this
 * site's origin with the note "comments are posted from a visitor's browser on
 * :3000 straight to this API". Proxying them through a route handler here
 * would look tidier and would break the thing that matters: the API rate-limits
 * and de-duplicates comments on the submitter's IP address, and behind a proxy
 * every visitor would arrive wearing this server's, sharing one bucket between
 * all of them.
 *
 * Falls back to CMS_API_URL so a deployment that sets only the private one
 * still works — they are the same address in every setup where the API is
 * reachable from outside at all.
 */
export const CMS_PUBLIC_API_URL = (
  process.env.NEXT_PUBLIC_CMS_API_URL ?? CMS_API_URL
).replace(/\/$/, '')

/**
 * How long a CMS read may be served from Next's data cache.
 *
 * An hour, not a minute: the CMS calls `/api/revalidate` the moment an editor
 * saves (see `http/revalidate.ts` in the API), so this is not how fast a change
 * appears — it is only the backstop for when that call is lost. Tuning it down
 * to make edits appear sooner would be solving a problem the webhook already
 * solves, at the cost of hitting the API on every cold page.
 */
const REVALIDATE_SECONDS = Number(process.env.CMS_REVALIDATE_SECONDS ?? 3600)

/**
 * A slow CMS must not become a slow website.
 *
 * Without a deadline, a hung API turns every uncached page render into a hang
 * of its own — the site stays up but stops responding, which is worse than
 * falling back to the bundled content, because at least the fallback renders.
 */
const TIMEOUT_MS = Number(process.env.CMS_TIMEOUT_MS ?? 5000)

/**
 * Cache tags, so a save invalidates only what it touched.
 *
 * The CMS's webhook does not say what changed — it fires once per save burst
 * from a middleware that sees only the HTTP method. So `/api/revalidate`
 * invalidates all of these together. They are still separate tags because the
 * endpoint accepts a specific one when it is told, and because a tag per
 * resource is what lets a future, more precise webhook do less work.
 */
export const CMS_TAGS = {
  courses: 'cms:courses',
  categories: 'cms:categories',
  faqs: 'cms:faqs',
  testimonials: 'cms:testimonials',
  reviews: 'cms:reviews',
  gallery: 'cms:gallery',
  site: 'cms:site',
  pages: 'cms:pages',
  navPages: 'cms:nav-pages',
  blogs: 'cms:blogs',
  events: 'cms:events',
  redirects: 'cms:redirects',
} as const

export type CmsTag = (typeof CMS_TAGS)[keyof typeof CMS_TAGS]

/** The shape every list endpoint on `/api/public` returns. */
export interface CmsList<T> {
  items: T[]
  total: number
}

interface GetOptions {
  /** Which tag `/api/revalidate` should drop this response under. */
  tag: CmsTag
  /** Overrides the default cache window. `0` opts out of caching entirely. */
  revalidate?: number
}

/**
 * One GET against the CMS's public API.
 *
 * Returns `null` for every failure — unreachable, timed out, non-2xx, or
 * unparseable. Callers treat `null` as "use the bundled content", so the
 * distinction between the failures does not change what the page renders; it
 * only changes what gets logged.
 */
export async function cmsGet<T>(path: string, options: GetOptions): Promise<T | null> {
  if (!cmsConfigured) return null

  const url = `${CMS_API_URL}${path.startsWith('/') ? path : `/${path}`}`
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)

  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: { Accept: 'application/json' },
      next: {
        revalidate: options.revalidate ?? REVALIDATE_SECONDS,
        tags: [options.tag],
      },
    })

    if (!response.ok) {
      // A 404 from a slug lookup is ordinary — the page will 404 too. Anything
      // else means the CMS answered but could not do the job, which is worth a
      // line in the log even though the page recovers.
      if (response.status !== 404) {
        console.warn(`[cms] ${url} responded ${response.status}`)
      }
      return null
    }

    return (await response.json()) as T
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error)
    console.warn(`[cms] ${url} unreachable (${reason}) — using bundled content.`)
    return null
  } finally {
    clearTimeout(timer)
  }
}

/** `cmsGet` for the list endpoints, flattened to just the items. */
export async function cmsList<T>(
  path: string,
  options: GetOptions & { limit?: number },
): Promise<T[] | null> {
  const query = options.limit ? `${path.includes('?') ? '&' : '?'}limit=${options.limit}` : ''
  const result = await cmsGet<CmsList<T>>(`${path}${query}`, options)
  return result?.items ?? null
}

/**
 * Absolute URL for a file in the CMS's media library.
 *
 * The API stores and returns `/uploads/<uuid>.png` — a path on the API's own
 * origin, not the site's. Rendered as-is the browser would ask the website for
 * it and get a 404, which is the single easiest way for an integration like
 * this to end up full of broken images.
 */
export function mediaUrl(url: string | undefined | null): string | undefined {
  if (!url) return undefined
  if (/^(https?:)?\/\//i.test(url) || url.startsWith('data:')) return url
  if (!cmsConfigured) return undefined

  // CMS_API_URL ends in `/api`; uploads are served from the origin above it.
  const origin = CMS_API_URL.replace(/\/api$/, '')
  return `${origin}${url.startsWith('/') ? url : `/${url}`}`
}
