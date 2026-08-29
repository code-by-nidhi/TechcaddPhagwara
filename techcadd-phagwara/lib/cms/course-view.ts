/**
 * A CMS course, as the landing template wants it.
 *
 * One place, so the three course routes and the preview frame all read a CMS
 * record the same way. When they each did their own mapping, "the preview does
 * not match the page" was a bug waiting to be written three times.
 */

import type { CourseExtras } from '@/components/pages/CourseLanding'
import type { CmsCourse } from './types'

/**
 * The fields the CMS's course form has that this site's template does not draw.
 *
 * The form was written for a branch site with a much longer course template —
 * an audience grid, a comparison table, a plans/pricing ladder, per-section
 * imagery. Those have no place in this site's design, and adding one for each
 * would be redesigning the page rather than connecting it.
 *
 * They are named here rather than passed over in silence: the preview frame
 * reports this list back to the CMS, which shows it above the form. An editor
 * who fills in a comparison table is then told it will not appear, instead of
 * saving, refreshing and concluding the CMS is broken.
 */
export const UNRENDERED_COURSE_FIELDS: { field: keyof CmsCourse | string; label: string }[] = [
  { field: 'audience', label: 'Who this is for' },
  { field: 'benefits', label: 'What you get' },
  { field: 'careerRoles', label: 'Career roles with salaries' },
  { field: 'projects', label: 'Projects' },
  { field: 'workflow', label: 'How it works' },
  { field: 'whyPoints', label: 'Why TechCADD' },
  { field: 'comparisonRows', label: 'Comparison table' },
  { field: 'toolItems', label: 'Tools with logos and links' },
  { field: 'plans', label: 'Plans and pricing' },
  { field: 'demand', label: 'Industry demand' },
  { field: 'salary', label: 'Salary range' },
  { field: 'videoUrl', label: 'Course video' },
  { field: 'faqIds', label: 'Chosen FAQs' },
  { field: 'reviewIds', label: 'Chosen reviews' },
  { field: 'relatedIds', label: 'Chosen related courses' },
  { field: 'whyImage', label: 'Section images' },
]

/**
 * Which of those the editor has actually filled in.
 *
 * Only the ones with something in them are reported: a notice listing sixteen
 * fields on every course would be wallpaper, and wallpaper is not read. A
 * notice that appears the moment you type into one of them is.
 */
export function unrenderedFieldsIn(record: Record<string, unknown> | undefined): string[] {
  if (!record) return []

  return UNRENDERED_COURSE_FIELDS.filter(({ field }) => {
    const value = record[field as string]
    if (value === null || value === undefined || value === '') return false
    if (Array.isArray(value)) return value.length > 0
    if (typeof value === 'object') return Object.keys(value).length > 0
    return true
  }).map(({ label }) => label)
}

/**
 * The optional sections of the landing template, from a CMS record.
 *
 * `careers` and `tools` are the plain string lists the CMS stores alongside the
 * richer `careerRoles`/`toolItems` it also has. The simple lists are what this
 * site's chip rows can draw; the rich ones are in the list above.
 */
export function courseExtras(course: CmsCourse | undefined): CourseExtras | undefined {
  if (!course) return undefined

  const extras: CourseExtras = {
    ...(course.eyebrow?.trim() ? {} : {}),
    ...(course.intro?.trim() ? { intro: course.intro.trim() } : {}),
    ...(course.overview?.trim() ? { overview: course.overview.trim() } : {}),
    ...(course.facts?.length ? { facts: course.facts } : {}),
    ...(course.careers?.length ? { careers: course.careers } : {}),
    ...(course.tools?.length ? { tools: course.tools } : {}),
  }

  // The record carries more than `CmsCourse` declares — the detail endpoint
  // returns the whole course, including fields this site had no use for until
  // the optional sections existed. Read through an index signature rather than
  // widening the type, which would imply the public endpoint guarantees them.
  const extended = course as unknown as Record<string, unknown>

  const badge = extended.badge
  if (typeof badge === 'string' && badge.trim()) extras.badge = badge.trim()

  const eligibility = extended.eligibility
  if (typeof eligibility === 'string' && eligibility.trim()) {
    extras.eligibility = eligibility.trim()
  }

  const certification = extended.certification
  if (typeof certification === 'string' && certification.trim()) {
    extras.certification = certification.trim()
  }

  const syllabusIntro = extended.syllabusIntro
  if (typeof syllabusIntro === 'string' && syllabusIntro.trim()) {
    extras.syllabusIntro = syllabusIntro.trim()
  }

  const syllabus = extended.syllabus
  if (Array.isArray(syllabus) && syllabus.length > 0) {
    extras.syllabus = syllabus as CourseExtras['syllabus']
  }

  const sections = extended.sections
  if (Array.isArray(sections) && sections.length > 0) {
    extras.sections = sections as CourseExtras['sections']
  }

  /*
    The Page layout tab's two answers.

    Both are plain string arrays of section ids, and both are filtered against
    what this site actually renders — see lib/cms/course-sections.ts. An id the
    site does not know is ignored rather than trusted, which matters because
    the CMS's list is shared with the branch installs and may name a section
    this template has never had.
  */
  const hiddenSections = extended.hiddenSections
  if (Array.isArray(hiddenSections) && hiddenSections.length > 0) {
    extras.hiddenSections = hiddenSections.filter((id): id is string => typeof id === 'string')
  }

  const sectionOrder = extended.sectionOrder
  if (Array.isArray(sectionOrder) && sectionOrder.length > 0) {
    extras.sectionOrder = sectionOrder.filter((id): id is string => typeof id === 'string')
  }

  for (const key of ['ctaPrimary', 'ctaSecondary'] as const) {
    const cta = extended[key]
    if (cta && typeof cta === 'object' && typeof (cta as { text?: unknown }).text === 'string') {
      const text = (cta as { text: string }).text.trim()
      if (text) extras[key] = cta as CourseExtras['ctaPrimary']
    }
  }

  return Object.keys(extras).length > 0 ? extras : undefined
}
