/**
 * Slug-routed catalog for Internship & Training — powers the navbar dropdown
 * and every `/internship-training/[slug]` landing page.
 */

import type { IconName } from '@/components/ui/Icon'

export interface ProgramPage {
  slug: string
  /** Short label as it appears in the dropdown / drawer accordion. */
  label: string
  /** Page `<h1>` and `<title>`. */
  title: string
  duration: string
  icon: IconName
  summary: string
  highlights: string[]
}

export interface ProgramCategory {
  key: string
  title: string
  programs: ProgramPage[]
}

export const internshipCatalog: ProgramCategory[] = [
  {
    key: 'short-term',
    title: 'Short Term',
    programs: [
      {
        slug: '45-days-training-in-phagwara',
        label: '45 Days Training',
        title: '45 Days Training in Phagwara',
        duration: '45 Days',
        icon: 'zap',
        summary:
          'A fast, focused sprint for students who need a real skill and a certificate in under two months — evenings and weekends included.',
        highlights: [
          'One focused track: pick your tool or language on day one',
          'Daily hands-on lab time, not just lecture slides',
          'A finished mini-project by the end of week 6',
          'Resume and LinkedIn profile review',
          'Certificate of completion',
        ],
      },
      {
        slug: '6-weeks-training-in-phagwara',
        label: '6 Weeks Training',
        title: '6 Weeks Training in Phagwara',
        duration: '6 Weeks',
        icon: 'clock',
        summary:
          'The classic summer-break training slot — enough time to go from fundamentals to a working project without a semester-long commitment.',
        highlights: [
          'Fundamentals through to one applied project',
          'Small batch sizes for direct mentor time',
          'Daily lab access on campus',
          'A project demo day in the final week',
          'Certificate of completion',
        ],
      },
    ],
  },
  {
    key: 'long-term',
    title: 'Long Term',
    programs: [
      {
        slug: '4-months-training-in-phagwara',
        label: '4 Months Training',
        title: '4 Months Training in Phagwara',
        duration: '4 Months',
        icon: 'layers',
        summary:
          'Enough runway to go deep on one stack — real syllabus depth, multiple projects, and mock interviews before you finish.',
        highlights: [
          'Full syllabus depth, not a condensed version',
          'Three or more applied projects across the term',
          'Mid-program assessment and mentor feedback',
          'Interview preparation in the final month',
          'Certificate of completion',
        ],
      },
      {
        slug: '6-months-training-in-phagwara',
        label: '6 Months Training',
        title: '6 Months Training in Phagwara',
        duration: '6 Months',
        icon: 'layers',
        summary:
          'Our deepest training track — a full stack or specialisation, a capstone project, and direct placement-cell support at the end.',
        highlights: [
          'Complete track depth across every core module',
          'A capstone project built to portfolio standard',
          'Placement-cell onboarding from month four',
          'Mock interviews and resume workshops',
          'Certificate of completion',
        ],
      },
    ],
  },
  {
    key: 'programmes',
    title: 'Programmes',
    programs: [
      {
        slug: 'industrial-training-in-phagwara',
        label: 'Industrial Training',
        title: 'Industrial Training in Phagwara',
        duration: 'Flexible',
        icon: 'building',
        summary:
          'Structured, college-recognised industrial training with real project work — built for students who need it as part of their degree.',
        highlights: [
          'Aligned with university industrial-training requirements',
          'Real project work, not shadowing',
          'A supervisor-signed training report and certificate',
          'Flexible duration to match your college calendar',
          'Optional extension into a longer internship',
        ],
      },
      {
        slug: 'internship-program-in-phagwara',
        label: 'Internship Program',
        title: 'Internship Program in Phagwara',
        duration: 'Flexible',
        icon: 'briefcase',
        summary:
          'Work on live client and product briefs alongside our team — the closest thing to a first job before you actually start one.',
        highlights: [
          'Live client or product briefs, not simulations',
          'Direct mentorship from working professionals',
          'A completion letter and performance review',
          'Strong candidates get fast-tracked to placement',
          'Flexible start dates throughout the year',
        ],
      },
    ],
  },
]

export const allInternshipPages: ProgramPage[] = internshipCatalog.flatMap((c) => c.programs)

export const findInternshipBySlug = (slug: string): ProgramPage | undefined =>
  allInternshipPages.find((p) => p.slug === slug)
