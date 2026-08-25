/**
 * Tiny hand-rolled validators shared by the Route Handlers.
 *
 * Deliberately dependency-free: adding zod for six fields would put ~14 kB
 * into the server bundle for something this size. If the form grows, swapping
 * these for a schema library is a contained change.
 */

export const isNonEmpty = (v: unknown, max = 500): v is string =>
  typeof v === 'string' && v.trim().length > 0 && v.trim().length <= max

/** Pragmatic email shape check — the real validation is the confirmation mail. */
export const isEmail = (v: unknown): v is string =>
  typeof v === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) && v.trim().length <= 254

/** Accepts Indian and international formats: digits, spaces, dashes, +. */
export const isPhone = (v: unknown): v is string =>
  typeof v === 'string' && /^[0-9+\s()-]{10,20}$/.test(v.trim())

/** Strip control characters so log output and downstream payloads stay clean. */
export const clean = (v: string, max = 2000): string =>
  // eslint-disable-next-line no-control-regex
  v.trim().replace(/[\u0000-\u001F\u007F]/g, '').slice(0, max)
