/**
 * The course-page content model.
 *
 * Everything the `/[slug]` landing page renders is described here, so adding a
 * course is a data change and never a UI change. Optional fields degrade
 * gracefully — a section whose data is missing simply does not render, which
 * is what lets a newly-added course go live before its reviews or salary
 * research exist.
 *
 * This sits alongside `data/coursePages.ts` rather than replacing it: that
 * file describes the Courses *mega menu* (four categories, a label and a slug
 * each) and is read at module scope by the Navbar. Keeping the heavy page
 * content out of it means the nav never pulls twenty-seven courses' modules,
 * projects and FAQs into the client bundle.
 */

import type { IconName } from '@/components/ui/Icon'

export type CourseMode = 'Online' | 'Offline' | 'Hybrid' | 'Classroom, Weekend & 1-on-1'

/** One syllabus stage in the roadmap accordion. */
export interface CourseModule {
  title: string
  summary: string
  topics: string[]
  /** e.g. "3 weeks" */
  duration?: string
  lessons?: number
}

export interface CourseProject {
  name: string
  summary: string
  tech: string[]
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  skills: string[]
}

export interface CourseReview {
  name: string
  /** Rendered in the avatar chip when there is no photo. */
  initials: string
  rating: number
  quote: string
  role?: string
}

export interface CourseFaq {
  q: string
  a: string
}

export interface CourseInstructor {
  heading: string
  intro: string
  points: { title: string; copy: string }[]
}

/**
 * One market's pay band for the headline role.
 *
 * `fresher` and `after2` are the *label* — "₹2.2–4 LPA" — while `scale` is the
 * midpoint of that band in LPA. The bars in the salary card are drawn from
 * `scale` against one shared maximum across every market, which is the only
 * way three side-by-side markets stay honestly comparable; deriving a width
 * from the label string would need parsing and would still get "₹18,000 a
 * month" wrong.
 */
export interface SalaryMarket {
  name: string
  fresher: string
  after2: string
  scale: { fresher: number; after2: number }
}

export interface CourseSalary {
  /** The headline role this band describes, e.g. "Android Developer". */
  role: string
  summary: string
  starting: string
  after2: string
  markets: SalaryMarket[]
}

/** One row of the "How Techcadd compares" table. */
export interface ComparisonRow {
  feature: string
  techcadd: string
  others: string
}

/**
 * One length the course can be taken at.
 *
 * The tiers are nested rather than parallel — the six-month track contains the
 * three-month one — which is why `capabilities` below is a matrix rather than
 * a list per tier: the interesting information is where a capability *starts*.
 */
export interface CourseDuration {
  length: string
  tier: string
  heading: string
  blurb: string
  skills: string[]
  recommendedFor: string
  /**
   * The syllabus this tier adds, where a course states one. Because the tiers
   * are nested, the second and third list only what is *new* at that level —
   * which is the same reason `capabilities` is a matrix rather than three
   * lists. Omitted renders no list, which is right for shorter courses.
   */
  covers?: string[]
}

/** One capability, and the tiers that include it (index-aligned to `durations`). */
export interface CourseCapability {
  capability: string
  included: boolean[]
}

export interface CourseContent {
  slug: string
  /** Short label as it appears in the mega menu and on related-course cards. */
  label: string
  /** Page `<h1>`. */
  title: string
  /** Category key, matching `courseCatalog` in `data/coursePages.ts`. */
  category: string
  categoryTitle: string
  icon: IconName
  duration: string
  level: string
  mode: CourseMode
  eligibility: string

  /** One or two sentences — the hero lead and the meta description. */
  summary: string
  /** The long "Course overview" paragraph. */
  overview: string
  /**
   * One sentence on why this specific skill is in demand locally. It leads
   * the "Why this programme is worth your year" band and is quoted again in
   * the career Q&A, so it has to stand alone as a claim.
   */
  demand: string

  audience: { label: string; copy: string }[]
  whyChooseUs: { title: string; copy: string }[]
  /** The "Why now" band: the market argument for this specific skill. */
  whyNow?: { title: string; points: string[] }

  modules: CourseModule[]
  learningOutcomes: string[]
  tools: string[]

  careerOutcomes: {
    roles: string[]
    roleDetails?: { role: string; copy: string }[]
    /** "Where X graduates get hired" — four employer types. */
    hiring: string[]
    nextSteps: string[]
    industries: string[]
  }
  salary?: CourseSalary
  /** The four career questions answered under the salary card. */
  careerFaqs?: CourseFaq[]

  projects: CourseProject[]
  instructor: CourseInstructor
  /** Real testimonials only — an empty array renders no reviews section. */
  reviews: CourseReview[]
  faqs: CourseFaq[]
  /**
   * Per-course override for the site-wide "What you get" checklist and the
   * "Why students choose techcadd" case. Both default to the shared copy in
   * `./shared`, which is right for most tracks — a course only sets these
   * where its own argument is genuinely different.
   */
  industryReady?: { title: string; copy: string }[]
  whyTechcadd?: { title: string; copy: string }[]

  /**
   * Per-course override for the three-step project loop.
   *
   * `artefact` is the deliverable named under each step. Without an override
   * the loop falls back to the shared copy and annotates each step with the
   * course's own project of that index instead.
   */
  workingLoop?: { title: string; copy: string; artefact?: string }[]

  /** The "How Techcadd compares" table. Omitted renders no table. */
  comparison?: { rows: ComparisonRow[]; note: string }

  /** Duration tiers and the capability matrix across them. */
  durations?: CourseDuration[]
  capabilities?: CourseCapability[]
  /** The paragraph under the duration tiers explaining they are nested. */
  durationNote?: string

  /** Slugs; the current course is filtered out at render time. */
  relatedCourses: string[]
  keywords: string[]
}

/** What a related-course card renders — see `getRelated` in `./index`. */
export type CourseSummary = Pick<
  CourseContent,
  'slug' | 'label' | 'title' | 'summary' | 'category' | 'categoryTitle' | 'duration' | 'icon'
>
