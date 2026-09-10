/**
 * The After 12th catalogue.
 *
 * A sibling of `data/courses`, not a part of it. The two are deliberately
 * separate arrays even though they share a content type and render through the
 * same components, for two reasons:
 *
 *  - `data/courses/index.ts` asserts at import time that its slugs and the
 *    Courses mega menu match exactly. Folding thirty-odd After 12th programmes
 *    into it would trip that check on every one of them.
 *  - A slug may legitimately exist in both catalogues. `getCourse` looks in the
 *    course catalogue first and this one second, so a collision resolves the
 *    same way every time rather than by array order.
 *
 * Both are served from the site root — an After 12th slug carries its own
 * `after-12th-` prefix, which is what keeps the two namespaces apart without a
 * route segment to separate them.
 */

import type { CourseContent, CourseSummary } from '@/data/courses/types'
import { AFTER12_THREE_MONTH } from './threeMonth'
import { AFTER12_SIX_MONTH } from './sixMonth'
import { AFTER12_NINE_MONTH } from './nineMonth'
import { AFTER12_CERTIFICATES } from './certificates'

export const AFTER12_CONTENT: CourseContent[] = [
  ...AFTER12_THREE_MONTH,
  ...AFTER12_SIX_MONTH,
  ...AFTER12_NINE_MONTH,
  ...AFTER12_CERTIFICATES,
]

/* Same guard as the course catalogue: a duplicate slug makes one programme
   unreachable and silently shadows the other in `generateStaticParams`. */
if (process.env.NODE_ENV !== 'production') {
  const seen = new Set<string>()
  for (const program of AFTER12_CONTENT) {
    if (seen.has(program.slug)) {
      throw new Error(`Duplicate After 12th slug: ${program.slug}`)
    }
    seen.add(program.slug)
  }

  /*
    Every programme's slug carries the section prefix.

    It is what separates this catalogue's namespace from the course catalogue's
    at the site root. A slug that loses the prefix would still render, but it
    would sit in the courses' namespace and collide there silently — so it is
    caught here rather than at review time.
  */
  const unprefixed = AFTER12_CONTENT.filter((p) => !p.slug.startsWith('after-12th-'))
  if (unprefixed.length) {
    throw new Error(
      `After 12th slugs must start with "after-12th-": ${unprefixed.map((p) => p.slug).join(', ')}`,
    )
  }
}

/** Every After 12th slug the site renders a page for — feeds the sitemap too. */
export const after12Slugs = (): string[] => AFTER12_CONTENT.map((p) => p.slug)

/** One programme, or undefined so the route can call `notFound()`. */
export const getAfter12 = (slug: string): CourseContent | undefined =>
  AFTER12_CONTENT.find((p) => p.slug === slug)

const toSummary = (c: CourseContent): CourseSummary => ({
  slug: c.slug,
  label: c.label,
  title: c.title,
  summary: c.summary,
  category: c.category,
  categoryTitle: c.categoryTitle,
  duration: c.duration,
  icon: c.icon,
})

/**
 * Related programmes for a slug.
 *
 * Same contract as the course catalogue's `getRelated`: summaries rather than
 * whole entries, the current programme always excluded, and the list topped up
 * from the rest of the catalogue so a rail is never short. A `relatedCourses`
 * entry naming a programme that does not exist yet is skipped rather than
 * throwing — the three tracks reference each other, and one can land before
 * its siblings do.
 */
export function getAfter12Related(slug: string, limit = 6): CourseSummary[] {
  const program = getAfter12(slug)
  if (!program) return []

  const picked = program.relatedCourses
    .filter((s) => s !== slug)
    .map(getAfter12)
    .filter((c): c is CourseContent => Boolean(c))

  if (picked.length >= limit) return picked.slice(0, limit).map(toSummary)

  const filler = AFTER12_CONTENT.filter(
    (c) => c.slug !== slug && !picked.some((p) => p.slug === c.slug),
  )

  return [...picked, ...filler].slice(0, limit).map(toSummary)
}

/**
 * The After 12th menu, grouped by track.
 *
 * Derived from the catalogue rather than maintained beside it: a programme
 * added to `AFTER12_CONTENT` appears in the navigation on the same commit,
 * which is the failure mode `data/courses/index.ts` has an import-time
 * invariant to catch. Here it cannot arise.
 *
 * Each entry states its own `href` because these pages are served from the
 * site root, not from the `/after-12th/` prefix the older programmes use —
 * see the note on `NavCatalogEntry` in `data/site.ts`.
 */
export function after12NavCatalog(): {
  title: string
  programs: {
    label: string
    slug: string
    duration: string
    href: string
    icon: CourseContent['icon']
  }[]
}[] {
  const order = [
    '3-month-programs',
    '6-month-certificates',
    '9-month-diplomas',
    'after-12th-courses',
    'civil-mechanical',
  ]

  return order
    .map((key) => {
      const programs = AFTER12_CONTENT.filter((p) => p.category === key)
      return {
        title: programs[0]?.categoryTitle ?? key,
        programs: programs.map((p) => ({
          label: p.label,
          slug: p.slug,
          duration: p.duration,
          href: `/${p.slug}`,
          icon: p.icon,
        })),
      }
    })
    .filter((group) => group.programs.length > 0)
}
