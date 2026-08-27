/**
 * The catalogue factory.
 *
 * Every course page needs an audience grid, a "why this programme" argument,
 * an instructor panel, student reviews and four standard FAQs — and for almost
 * every track those are identical, because they describe the Phagwara centre
 * rather than the syllabus. Routing them through here means a catalogue entry
 * carries only what is genuinely specific to that course, and a change to the
 * batch formats or the placement promise is made in one place instead of
 * twenty-seven.
 *
 * A course that does have its own version of any of them passes it in and the
 * default is skipped.
 */

import {
  COMMON_AUDIENCE,
  COMMON_FAQS,
  COMMON_REVIEWS,
  COMMON_WHY,
  DEFAULT_INSTRUCTOR,
} from './shared'
import type {
  ComparisonRow,
  CourseCapability,
  CourseContent,
  CourseDuration,
  CourseFaq,
  CourseInstructor,
  CourseModule,
  CourseProject,
  CourseReview,
  CourseSalary,
  CourseMode,
} from './types'
import type { IconName } from '@/components/ui/Icon'

export interface CourseSpec {
  slug: string
  label: string
  title: string
  category: string
  categoryTitle: string
  icon: IconName
  duration: string
  level: string
  eligibility: string
  mode?: CourseMode

  summary: string
  overview: string
  /**
   * One sentence on why this specific skill is in demand locally. It is the
   * lead of the "Why this programme is worth your year" band and is quoted
   * again in the career Q&A, so it has to stand alone as a claim.
   */
  demand: string

  modules: CourseModule[]
  outcomes: string[]
  tools: string[]

  roles: string[]
  roleDetails?: { role: string; copy: string }[]
  hiring: string[]
  nextSteps: string[]
  industries: string[]
  salary?: CourseSalary
  careerFaqs?: CourseFaq[]

  projects: CourseProject[]
  whyNow?: { title: string; points: string[] }
  relatedCourses: string[]
  keywords: string[]

  /* Sections only some courses carry. Each renders nothing when absent. */
  industryReady?: { title: string; copy: string }[]
  whyTechcadd?: { title: string; copy: string }[]
  workingLoop?: { title: string; copy: string; artefact?: string }[]
  comparison?: { rows: ComparisonRow[]; note: string }
  durations?: CourseDuration[]
  capabilities?: CourseCapability[]
  durationNote?: string

  /* Optional overrides for anything the shared defaults get wrong. */
  audience?: { label: string; copy: string }[]
  whyChooseUs?: { title: string; copy: string }[]
  instructor?: CourseInstructor
  reviews?: CourseReview[]
  /** Course-specific questions, shown before the four every course answers. */
  extraFaqs?: CourseFaq[]
}

export function makeCourse(s: CourseSpec): CourseContent {
  return {
    slug: s.slug,
    label: s.label,
    title: s.title,
    category: s.category,
    categoryTitle: s.categoryTitle,
    icon: s.icon,
    duration: s.duration,
    level: s.level,
    mode: s.mode ?? 'Classroom, Weekend & 1-on-1',
    eligibility: s.eligibility,

    summary: s.summary,
    overview: s.overview,
    demand: s.demand,

    audience: s.audience ?? COMMON_AUDIENCE,
    whyChooseUs: s.whyChooseUs ?? COMMON_WHY,
    whyNow: s.whyNow,

    modules: s.modules,
    learningOutcomes: s.outcomes,
    tools: s.tools,

    careerOutcomes: {
      roles: s.roles,
      ...(s.roleDetails ? { roleDetails: s.roleDetails } : {}),
      hiring: s.hiring,
      nextSteps: s.nextSteps,
      industries: s.industries,
    },
    salary: s.salary,
    careerFaqs: s.careerFaqs,

    projects: s.projects,
    industryReady: s.industryReady,
    whyTechcadd: s.whyTechcadd,
    workingLoop: s.workingLoop,
    comparison: s.comparison,
    durations: s.durations,
    capabilities: s.capabilities,
    durationNote: s.durationNote,
    instructor: s.instructor ?? DEFAULT_INSTRUCTOR,
    reviews: s.reviews ?? COMMON_REVIEWS,
    /* Course-specific questions first: someone who opens the FAQ is usually
       looking for the fee or the duration, not the placement policy. */
    faqs: [...(s.extraFaqs ?? []), ...COMMON_FAQS],
    relatedCourses: s.relatedCourses,
    keywords: s.keywords,
  }
}
