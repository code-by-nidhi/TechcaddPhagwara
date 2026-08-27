/**
 * The sections a course page is made of, in the order a visitor meets them.
 *
 * One list, read by three things that used to keep three of their own:
 * `PAGE_SECTIONS` in courseSchema (which anchors blocks), `ORDERABLE_SECTIONS`
 * in SectionOrderEditor (which reorders them), and the backend's
 * `HIDEABLE_SECTIONS` (which validates what may be switched off). Three copies
 * of the same vocabulary is three chances to disagree, and they already did.
 *
 * Matched to the website
 * ----------------------
 * These ids are the DOM ids `components/pages/CourseLanding.tsx` gives its
 * sections, and its `lib/cms/course-sections.ts` is the authority — the website
 * is what does or does not draw a section. The list here used to name fifteen,
 * inherited from the branch site this CMS was written for: a comparison table,
 * a pricing ladder, a "why techcadd" panel, a reviews strip. None of them exist
 * on this site, so switching one off did nothing and dragging them into a new
 * order rearranged a list of names against a page that had none of them.
 *
 * A file of its own, and not just for tidiness: exporting a constant beside a
 * component breaks Fast Refresh, which is what `react-refresh/only-export-components`
 * was reporting on SectionOrderEditor.
 */

export interface PageSectionMeta {
  id: string
  label: string
  /** False for the section the page cannot be without. */
  hideable: boolean
}

export const PAGE_SECTIONS: readonly PageSectionMeta[] = [
  { id: 'hero', label: 'Hero', hideable: false },
  { id: 'overview', label: 'About this course', hideable: true },
  { id: 'what-you-will-learn', label: "What you'll learn", hideable: true },
  { id: 'modules', label: 'Curriculum', hideable: true },
  { id: 'tools', label: 'Tools and careers', hideable: true },
  { id: 'who-can-do', label: 'Who can join, and the certificate', hideable: true },
  { id: 'cta', label: 'More courses like this', hideable: true },
] as const

/** Where a block may be anchored — every section, including the fixed one. */
export const SECTION_ANCHORS = PAGE_SECTIONS.map((section) => section.id)

/**
 * What the running-order editor offers.
 *
 * The hero is left out: it carries the heading, the breadcrumb and the enquiry
 * buttons, and the website pins it to the front regardless, so offering it as
 * draggable would be offering a control that does nothing.
 */
export const ORDERABLE_SECTIONS = PAGE_SECTIONS.filter((section) => section.id !== 'hero')

export const SECTION_LABELS = new Map(
  PAGE_SECTIONS.map((section) => [section.id, section.label]),
)

/** The order they are written in, which is what a course starts with. */
export const DEFAULT_SECTION_ORDER = ORDERABLE_SECTIONS.map((section) => section.id)
