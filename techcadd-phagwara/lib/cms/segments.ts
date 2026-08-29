/**
 * Where each CMS course segment lives on *this* site.
 *
 * The CMS files a course under one of three segments and the Jalandhar site
 * routes them as `/courses/<slug>`, `/internship-training/<slug>` and
 * `/after-12th-courses/<slug>`. This site does not: its course pages sit at the
 * root (`/python-course-in-phagwara`, which is what the mega menu, the carousel
 * and every existing inbound link point at), and its after-12th programmes are
 * under `/after-12th/`, not `/after-12th-courses/`.
 *
 * So the segment is mapped, not renamed. Renaming it in the CMS would fix this
 * site and break the other two branches that share the database schema and the
 * `uq_courses_segment_slug` key; changing this site's URLs to match the CMS
 * would silently 404 every existing link and every indexed page for the sake of
 * an internal enum. Neither is a trade worth making for a lookup table.
 */

import type { CmsSegment } from './types'

/** The three segments, in the order the site presents them. */
export const CMS_SEGMENTS: readonly CmsSegment[] = [
  'courses',
  'internship-training',
  'after-12th-courses',
] as const

/**
 * URL prefix per segment. `''` means the site's root.
 *
 * Kept as a total record rather than a lookup with a fallback: a segment added
 * to the CMS without a decision about where it goes on this site should fail
 * the typecheck here, not quietly land on the homepage.
 */
const ROUTE_PREFIX: Record<CmsSegment, string> = {
  courses: '',
  'internship-training': '/internship-training',
  'after-12th-courses': '/after-12th',
}

/** The path this site serves a course at, e.g. `/python-course-in-phagwara`. */
export function coursePath(segment: CmsSegment, slug: string): string {
  return `${ROUTE_PREFIX[segment]}/${slug}`
}

/** The route prefix alone, for building a "more like this" grid's links. */
export function segmentBasePath(segment: CmsSegment): string {
  return ROUTE_PREFIX[segment]
}

/**
 * The segment a route prefix belongs to, or undefined.
 *
 * Used by the preview route, which is handed a slug and a segment by the CMS,
 * and by the redirect middleware.
 */
export function segmentFromPath(pathname: string): CmsSegment {
  if (pathname.startsWith('/internship-training/')) return 'internship-training'
  if (pathname.startsWith('/after-12th/')) return 'after-12th-courses'
  return 'courses'
}

/** How each segment is described in breadcrumbs and section labels. */
export const SEGMENT_LABEL: Record<CmsSegment, string> = {
  courses: 'Courses',
  'internship-training': 'Internship & Training',
  'after-12th-courses': 'After 12th',
}

/** The homepage anchor each segment's pages link back up to. */
export const SEGMENT_ANCHOR: Record<CmsSegment, string> = {
  courses: '/#courses',
  'internship-training': '/#modes',
  'after-12th-courses': '/#journey',
}
