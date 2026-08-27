/**
 * The course-page catalogue, assembled from its four category files.
 *
 * A new category is one import and one spread — every route, sitemap entry and
 * related-course link follows automatically.
 */

import { courseCatalog } from '@/data/coursePages'
import { AI_DATA_COURSES } from './aiData'
import { CYBER_CLOUD_COURSES } from './cyberCloud'
import { MARKETING_COURSES } from './marketing'
import { PROGRAMMING_COURSES } from './programming'
import type { CourseContent, CourseSummary } from './types'

export const COURSE_CONTENT: CourseContent[] = [
  ...PROGRAMMING_COURSES,
  ...AI_DATA_COURSES,
  ...MARKETING_COURSES,
  ...CYBER_CLOUD_COURSES,
]

/* A duplicate slug would make one course unreachable and silently shadow the
   other in `generateStaticParams`, so fail loudly rather than at review time. */
if (process.env.NODE_ENV !== 'production') {
  const seen = new Set<string>()
  for (const course of COURSE_CONTENT) {
    if (seen.has(course.slug)) {
      throw new Error(`Duplicate course slug: ${course.slug}`)
    }
    seen.add(course.slug)
  }
}

/*
 * The Courses mega menu is a separate, client-side list (see
 * `data/coursePages`), and nothing structural ties it to the catalogue that
 * actually renders pages. A course added to one and not the other is invisible
 * either way — a menu entry with no page is a link straight to a 404, and a
 * page with no menu entry is unreachable by navigation. Both fail silently in
 * production, so they are caught here at import time in development instead.
 */
if (process.env.NODE_ENV !== 'production') {
  const pages = new Set(COURSE_CONTENT.map((c) => c.slug))
  const menu = courseCatalog.flatMap((cat) => cat.courses.map((c) => c.slug))

  const dead = menu.filter((slug) => !pages.has(slug))
  if (dead.length) {
    throw new Error(
      `Courses menu links to slugs with no page (these would 404): ${dead.join(', ')}`,
    )
  }

  const orphaned = [...pages].filter((slug) => !menu.includes(slug))
  if (orphaned.length) {
    throw new Error(
      `Course pages missing from the Courses menu (unreachable): ${orphaned.join(', ')}`,
    )
  }
}

/** Every slug the site renders a course page for — feeds the sitemap too. */
export const courseSlugs = (): string[] => COURSE_CONTENT.map((c) => c.slug)

/** One course, or undefined so the route can call `notFound()`. */
export const getCourse = (slug: string): CourseContent | undefined =>
  COURSE_CONTENT.find((c) => c.slug === slug)

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
 * Related courses for a slug.
 *
 * Returning summaries rather than whole entries matters: a `CourseContent`
 * carries twelve modules, its projects and its FAQs, and serialising six of
 * them into every page's payload would roughly triple the HTML for a rail of
 * six cards that render a label and a line of copy each.
 *
 * The current course is always excluded and the list is topped up from the
 * rest of the catalogue, so a course that declares too few never renders a
 * short or empty rail.
 */
export function getRelated(slug: string, limit = 6): CourseSummary[] {
  const course = getCourse(slug)
  if (!course) return []

  const picked = course.relatedCourses
    .filter((s) => s !== slug)
    .map(getCourse)
    .filter((c): c is CourseContent => Boolean(c))

  if (picked.length >= limit) return picked.slice(0, limit).map(toSummary)

  const filler = COURSE_CONTENT.filter(
    (c) => c.slug !== slug && !picked.some((p) => p.slug === c.slug),
  )

  return [...picked, ...filler].slice(0, limit).map(toSummary)
}

export type { CourseContent, CourseSummary }
