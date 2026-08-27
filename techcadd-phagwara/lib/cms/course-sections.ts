/**
 * The sections a course page is made of, by the id the CMS knows them by.
 *
 * This is the shared vocabulary between the two apps: the CMS's Page layout
 * editor offers these to reorder and switch off, its blocks anchor "before" or
 * "after" one of them, and `CourseLanding` renders them under exactly these
 * DOM ids so the preview can scroll to the one being edited.
 *
 * The CMS's own copy is `frontend/src/features/courses/pageSections.ts`. They
 * are separate because the apps do not share a module graph, and this file is
 * the authority: the website is what does or does not draw a section.
 *
 * Narrower than the CMS's list used to be. It offered fifteen — a comparison
 * table, a pricing ladder, a "why techcadd" panel and the rest — because it was
 * written for the branch site with that template. Switching one off here did
 * nothing, and reordering them reordered a list of names against a page that
 * has none of them.
 */

/** Always first, and not something an editor arranges. */
export const FIXED_FIRST = 'hero'

export interface CourseSectionMeta {
  id: string
  /** How the CMS's layout editor names it. */
  label: string
  /** False for the two the page cannot be without. */
  hideable: boolean
}

/**
 * In the order a visitor meets them, which is the order a course starts with.
 *
 * `cta` is the related-courses grid at the foot of the page — named for the
 * role it plays rather than its content, and kept as `cta` because that is the
 * id the CMS's block anchors already use.
 */
export const COURSE_SECTIONS: CourseSectionMeta[] = [
  { id: FIXED_FIRST, label: 'Hero', hideable: false },
  { id: 'overview', label: 'About this course', hideable: true },
  { id: 'what-you-will-learn', label: "What you'll learn", hideable: true },
  { id: 'modules', label: 'Curriculum', hideable: true },
  { id: 'tools', label: 'Tools and careers', hideable: true },
  { id: 'who-can-do', label: 'Who can join, and the certificate', hideable: true },
  { id: 'cta', label: 'More courses like this', hideable: true },
]

export const COURSE_SECTION_IDS = COURSE_SECTIONS.map((section) => section.id)

const KNOWN = new Set(COURSE_SECTION_IDS)

/**
 * The running order for one course.
 *
 * Starts from the editor's arrangement, drops anything this site does not
 * render, then appends whatever they did not mention — so a section added to
 * this file later appears on every existing course in its natural place
 * instead of vanishing from all of them until each is re-saved.
 *
 * The hero is pinned to the front regardless. It carries the heading, the
 * breadcrumb and the enquiry buttons, and a course page whose first screen is
 * the curriculum is not a decision worth being able to make by accident.
 */
export function orderSections(sectionOrder: string[] | undefined): string[] {
  const asked = (sectionOrder ?? []).filter((id) => KNOWN.has(id) && id !== FIXED_FIRST)
  const seen = new Set(asked)
  const rest = COURSE_SECTION_IDS.filter((id) => id !== FIXED_FIRST && !seen.has(id))

  return [FIXED_FIRST, ...asked, ...rest]
}

/** Whether a section should be drawn at all. The hero always is. */
export function isHidden(id: string, hiddenSections: string[] | undefined): boolean {
  if (id === FIXED_FIRST) return false
  return (hiddenSections ?? []).includes(id)
}
