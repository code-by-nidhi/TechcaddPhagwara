import type { IconName } from '@/components/ui/Icon'

/**
 * The contact page's own content.
 *
 * Kept out of `data/site.ts` because none of it is used anywhere else: the
 * homepage's Contact section is a single form and a phone number, while this
 * page routes an enquiry to whichever desk actually handles it.
 *
 * Every desk falls back to the branch's main phone and inbox. That is honest
 * rather than lazy — the Phagwara centre publishes one number today. When a
 * desk gets a direct line, give it `phone`/`email` here and the card picks it
 * up; nothing else needs touching.
 */

export interface SupportDesk {
  /** Tab label, kept short enough not to wrap on a phone. */
  key: string
  label: string
  icon: IconName
  /** Heading on the card itself. */
  desk: string
  /** The two-letter monogram in the card's avatar. */
  initials: string
  blurb: string
  /** What this desk is the right place for — three or four items. */
  handles: string[]
  phone?: string
  email?: string
}

export const SUPPORT_DESKS: SupportDesk[] = [
  {
    key: 'student',
    label: 'Student Support',
    icon: 'users',
    desk: 'Student Desk',
    initials: 'SD',
    blurb: 'Course guidance, fees, batch timings and everything before you enrol.',
    handles: [
      'Which course fits your background',
      'Fees, instalments and scholarships',
      'Batch timings and weekend options',
      'Demo class bookings',
    ],
  },
  {
    key: 'college',
    label: 'College Support',
    icon: 'building',
    desk: 'Institutional Desk',
    initials: 'CD',
    blurb: 'For colleges and universities arranging training for their students.',
    handles: [
      'MoUs and campus partnerships',
      'Industrial visits and workshops',
      'Six-week and six-month training batches',
      'Bulk enrolment for a department',
    ],
  },
  {
    key: 'placement',
    label: 'Placement Cell',
    icon: 'briefcase',
    desk: 'Placement Desk',
    initials: 'PD',
    blurb: 'For current students, alumni and companies hiring from our batches.',
    handles: [
      'Resume and portfolio reviews',
      'Mock interviews and aptitude prep',
      'Interview opportunities with hiring partners',
      'Employers looking to hire our students',
    ],
  },
  {
    key: 'franchise',
    label: 'Franchise Enquiry',
    icon: 'handshake',
    desk: 'Franchise Desk',
    initials: 'FD',
    blurb: 'For anyone looking to run a techcadd centre in their own city.',
    handles: [
      'Territory availability',
      'Investment and setup support',
      'Trainer onboarding and curriculum',
      'Marketing and admissions support',
    ],
  },
]

/** What actually happens after the form is submitted — in order. */
export const WHAT_HAPPENS_NEXT: { title: string; copy: string }[] = [
  {
    title: 'A counsellor calls you back',
    copy: 'A senior career counsellor calls during office hours — not a sales script, and not a bot.',
  },
  {
    title: 'We go through where you actually are',
    copy: 'Your background, your budget and where you want to end up — including whether a course is the wrong move for you right now.',
  },
  {
    title: 'You get a roadmap and a batch',
    copy: 'A course plan and a batch that fits around your week. Free, and with no obligation to enrol.',
  },
]

/** The reasons a visitor might reach us that are not an enquiry form. */
export interface ContactChannel {
  icon: IconName
  label: string
  /** Rendered as the card's body — a phone number, an address, a time. */
  value: string
  /** The link's own words, e.g. "Get directions". Omitted renders no link. */
  action?: string
  href?: string
  external?: boolean
}
