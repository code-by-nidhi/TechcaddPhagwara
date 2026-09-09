/**
 * The After 12th factory — `makeCourse` with this section's defaults applied.
 *
 * Wrapping rather than forking: an After 12th programme renders the same
 * `CourseContent` the `/[slug]` pages do, through the same components, so the
 * two must not drift into two shapes. What this adds is the framing — the
 * school-leaver audience grid, the reviews from students who started there,
 * the "why us" case aimed at someone choosing this over waiting for a degree —
 * and the FAQ ordering that follows from it.
 *
 * Anything a programme states for itself wins. The defaults are for the parts
 * that are true of all thirteen.
 */

import { makeCourse, type CourseSpec } from '@/data/courses/factory'
import { COMMON_FAQS } from '@/data/courses/shared'
import type { CourseContent } from '@/data/courses/types'
import {
  AFTER12_AUDIENCE,
  AFTER12_FAQS,
  AFTER12_INDUSTRY_READY,
  AFTER12_INSTRUCTOR,
  AFTER12_REVIEWS,
  AFTER12_WHY_TECHCADD,
  AFTER12_WORKING_LOOP,
} from './shared'

/**
 * An After 12th programme's own content.
 *
 * `category`, `categoryTitle` and `eligibility` are dropped from the spec:
 * all three are fixed by which group the programme sits in and by the section
 * itself, and asking thirteen entries to restate "12th Pass (Any Stream)" is
 * thirteen chances to write it differently.
 */
export type After12Spec = Omit<
  CourseSpec,
  'category' | 'categoryTitle' | 'eligibility' | 'mode'
> & {
  /** Matching a key in `after12Catalog` — checked at import time in `./index`. */
  category: string
  categoryTitle: string
  eligibility?: string
}

export function makeAfter12(s: After12Spec): CourseContent {
  const course = makeCourse({
    ...s,
    eligibility: s.eligibility ?? '12th Pass (Any Stream)',
    audience: s.audience ?? AFTER12_AUDIENCE,
    instructor: s.instructor ?? AFTER12_INSTRUCTOR,
    reviews: s.reviews ?? AFTER12_REVIEWS,
    industryReady: s.industryReady ?? AFTER12_INDUSTRY_READY,
    whyTechcadd: s.whyTechcadd ?? AFTER12_WHY_TECHCADD,
    workingLoop: s.workingLoop ?? AFTER12_WORKING_LOOP,
  })

  /*
    The FAQ order, rebuilt.

    `makeCourse` composes `[own questions, ...COMMON_FAQS]`, which is right for
    a course page. Here the three After-12th questions belong in between — a
    school-leaver reads down from "what is this course" to "can I do it" to
    "what does the centre promise", and burying "is this too advanced for me?"
    under the placement policy answers it after they have stopped reading.
  */
  return {
    ...course,
    faqs: [...(s.extraFaqs ?? []), ...AFTER12_FAQS, ...COMMON_FAQS],
  }
}
