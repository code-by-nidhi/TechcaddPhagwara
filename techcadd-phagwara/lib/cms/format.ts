/**
 * Dates and other small formatting shared by the blog and events pages.
 *
 * In one place because a date rendered two ways on two pages of the same site
 * reads as two sites — and because the server and the client have to agree on
 * every character of it. A `toLocaleDateString()` called without a fixed locale
 * and time zone resolves against the machine it runs on, so the server prints
 * one string, the browser prints another, and React reports a hydration
 * mismatch on a page nobody touched.
 */

/** en-IN, IST — the audience and the campus are both in one place. */
const LOCALE = 'en-IN'
const TIME_ZONE = 'Asia/Kolkata'

const dayMonthYear = new Intl.DateTimeFormat(LOCALE, {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  timeZone: TIME_ZONE,
})

const monthYear = new Intl.DateTimeFormat(LOCALE, {
  month: 'long',
  year: 'numeric',
  timeZone: TIME_ZONE,
})

/** "14 Mar 2026", or '' for anything unparseable. */
export function formatDate(value: string | undefined | null): string {
  if (!value) return ''
  const date = new Date(value)
  return Number.isNaN(date.getTime()) ? '' : dayMonthYear.format(date)
}

/** "March 2026". */
export function formatMonth(value: string | undefined | null): string {
  if (!value) return ''
  const date = new Date(value)
  return Number.isNaN(date.getTime()) ? '' : monthYear.format(date)
}

/**
 * "14 Mar 2026" or "14 – 16 Mar 2026" for something spanning days.
 *
 * The end date is dropped when it matches the start, which is how the CMS
 * stores a single-day event that somebody filled both boxes in for.
 */
export function formatDateRange(start: string, end?: string): string {
  const from = formatDate(start)
  if (!end) return from

  const to = formatDate(end)
  if (!to || to === from) return from

  return `${from} – ${to}`
}

/** "10:00 – 13:00", or just the start, or ''. */
export function formatTimeRange(start?: string, end?: string): string {
  const trim = (value?: string) => value?.slice(0, 5) ?? ''
  const from = trim(start)
  if (!from) return ''
  const to = trim(end)
  return to ? `${from} – ${to}` : from
}

/**
 * ISO `YYYY-MM-DD`, for a `<time dateTime>`.
 *
 * The machine-readable half of a date that is displayed formatted — without
 * it, the only date on the page is one only a person can parse.
 */
export function isoDate(value: string | undefined | null): string | undefined {
  if (!value) return undefined
  const date = new Date(value)
  return Number.isNaN(date.getTime()) ? undefined : date.toISOString().slice(0, 10)
}

/**
 * Whether an event is still to come, judged on its last day.
 *
 * On the day itself an event counts as upcoming until midnight: a workshop
 * that starts at two o'clock should not be filed under "past" by someone
 * looking it up over breakfast.
 */
export function isUpcoming(startsOn: string, endsOn?: string, now = new Date()): boolean {
  const last = new Date(endsOn || startsOn)
  if (Number.isNaN(last.getTime())) return false
  last.setHours(23, 59, 59, 999)
  return last.getTime() >= now.getTime()
}

/** "Priya Sharma" → "PS", for the avatar circles. */
export function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('')
}

/**
 * A stable hue for a record with no picture.
 *
 * Derived from the slug so the same post keeps the same colour between renders
 * and between deploys — a random one would make the index flicker a new palette
 * on every revalidation.
 */
export function hueFor(seed: string): number {
  let hash = 0
  for (let i = 0; i < seed.length; i += 1) hash = (hash * 31 + seed.charCodeAt(i)) % 360
  return hash
}

/** Plain text from an HTML excerpt, capped. Used for meta descriptions. */
export function plainText(html: string, max = 160): string {
  const text = html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim()

  if (text.length <= max) return text
  const cut = text.slice(0, max - 1)
  const lastSpace = cut.lastIndexOf(' ')
  return `${lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut}…`
}
