/**
 * Defaults every course inherits unless it overrides them.
 *
 * This is what keeps a catalogue entry to the parts that genuinely differ
 * between programmes. Anything written here is true of every track at the
 * Phagwara centre — the batch formats, the certificate, the trainers — so
 * repeating it per course would only create twenty-seven places for the same
 * fact to drift out of date.
 */

import type { CourseFaq, CourseInstructor, CourseReview } from './types'

/** The stat band under the hero. Site-wide figures, not per-course. */
export const COURSE_STATS = [
  { value: '25,000+', label: 'Students trained', note: 'since 2007' },
  { value: '4.9★', label: 'Google rating', note: '556+ reviews' },
  { value: '100%', label: 'Practical training', note: 'live client work' },
] as const

/** The hero chips — what every programme includes. */
export const COURSE_INCLUDES = [
  'Live client projects',
  'Practitioner trainers',
  'Placement support',
  'Certificate + internship',
] as const

/** The "What you get" checklist beside the industry-ready panel. */
export const COURSE_BENEFITS = [
  '100% practical, project-based learning',
  'AI tools integrated into every module',
  'Live client projects under trainer supervision',
  'Internship letter and placement support',
  'Small batches with daily doubt clearing',
] as const

/** The stat tiles inside the industry-ready panel. */
export const COURSE_TILES = [
  { value: '25K+', label: 'Students' },
  { value: '4.9★', label: 'Google rating' },
  { value: '2007', label: 'Estd.' },
  { value: '100%', label: 'Practical' },
] as const

/** The three-step loop every project moves through. */
export const WORKING_LOOP = [
  {
    title: 'Understand',
    copy: 'Break a real requirement into a clear plan and the right tools.',
  },
  {
    title: 'Build',
    copy: 'Work hands-on with trainer feedback while the decisions are still easy to change.',
  },
  {
    title: 'Present',
    copy: 'Turn the finished work into a portfolio story you can defend in an interview.',
  },
] as const

/** "Why students choose techcadd" — the six-point case, identical everywhere. */
export const WHY_TECHCADD = [
  {
    title: 'Trainers who still do the work',
    copy: 'Your trainer is not a full-time lecturer. They deliver client projects for techcadd’s services arm, so examples in class are current rather than a case study from five years ago.',
  },
  {
    title: 'Live projects, real consequences',
    copy: 'You work on genuine client requirements under supervision. This is where a portfolio comes from, and it is the first thing an interviewer asks to see.',
  },
  {
    title: 'Small batches and open lab hours',
    copy: 'Batches stay small enough that a trainer sees your screen daily. Lab time runs outside class hours and doubt sessions continue until the concept lands.',
  },
  {
    title: 'Internship letter and certificate',
    copy: 'Every student finishes with an industry-recognised certificate and a documented internship on real work, accepted for university industrial training requirements.',
  },
  {
    title: 'A placement cell that persists',
    copy: 'Mock interviews, CV reviews and drives with hiring partners across Phagwara, Jalandhar and Ludhiana, repeated after a rejection, not abandoned.',
  },
  {
    title: 'Since 2007, 25,000+ students',
    copy: 'Nearly two decades of hiring relationships in Punjab is why a call from our placement cell gets answered and why local employers know what our certificate means.',
  },
] as const

/** The four certificates and supports every programme ends with. */
export const CERTIFICATION_POINTS = [
  {
    title: 'Industry Certificate',
    copy: 'Recognised by employers across Punjab and beyond',
  },
  {
    title: 'Internship Letter',
    copy: 'Based on real client work, not a simulation',
  },
  {
    title: 'Portfolio of Projects',
    copy: 'Live work you can show in any interview',
  },
  {
    title: 'Placement Support',
    copy: 'CV review, mock interviews and hiring drives',
  },
] as const

/* -------------------------------------------------------------- audience -- */

/** Audience blocks reused across the more general programmes. */
export const AUDIENCE = {
  after12: {
    label: 'Students after 12th',
    copy: 'Join from any stream. You start from fundamentals with no assumed knowledge, and most students run the course alongside a degree at a Phagwara college using the weekday or weekend batch.',
  },
  graduates: {
    label: 'Graduates and final-year students',
    copy: 'If you are finishing a BA, BBA, B.Com, BCA or B.Tech, this is the shortest route from degree to salary. Enter placement season with project work in hand instead of a blank CV.',
  },
  professionals: {
    label: 'Working professionals',
    copy: 'The weekend batch exists for people already earning. Career switchers typically become interview-ready within five to six months without leaving their current job.',
  },
  freelancers: {
    label: 'Freelancers and consultants',
    copy: 'Skills you can bill for, plus the delivery habits clients expect — scoping, revisions and handover done the way an agency does them.',
  },
  business: {
    label: 'Business owners',
    copy: 'Enough hands-on depth to build the work yourself, or to brief and judge it properly when you hire someone else to.',
  },
  switchers: {
    label: 'Career switchers',
    copy: 'A structured route in from another field, with honest guidance on how to position the move and what the first year actually pays.',
  },
} as const

/** The default six-block audience grid. */
export const COMMON_AUDIENCE = [
  AUDIENCE.after12,
  AUDIENCE.graduates,
  AUDIENCE.professionals,
  AUDIENCE.freelancers,
  AUDIENCE.business,
  AUDIENCE.switchers,
]

/* ------------------------------------------------------------------ why -- */

/** "Why this programme" cards most courses share. */
export const COMMON_WHY = [
  {
    title: 'Industry-oriented curriculum',
    copy: 'Built backwards from live job descriptions and rewritten as the stack moves.',
  },
  {
    title: 'Hands-on from day one',
    copy: 'You spend more time building than watching. Every concept lands in working code.',
  },
  {
    title: 'Mentor guidance',
    copy: 'Small batches, direct access to your trainer, and reviews on the work you produce.',
  },
  {
    title: 'Real-world tools',
    copy: 'The same editors, version control and deployment tooling teams use in production.',
  },
  {
    title: 'Interview preparation',
    copy: 'Mock rounds, portfolio review and the questions this particular role gets asked.',
  },
  {
    title: 'Career-focused outcome',
    copy: 'The programme ends with work you can show and a plan for the roles you are targeting.',
  },
]

/* ----------------------------------------------------------- instructor -- */

export const DEFAULT_INSTRUCTOR: CourseInstructor = {
  heading: 'Why learn with us?',
  intro:
    'Every trainer here still ships production code. That is the whole basis of the teaching: answers come from current practice rather than from a slide deck written three years ago.',
  points: [
    {
      title: 'Practitioners, not presenters',
      copy: 'Sessions are run by engineers working on live systems, so the examples come from real codebases.',
    },
    {
      title: 'Project-based from week one',
      copy: 'You build as you learn. Each module ends in something that runs, not in a quiz.',
    },
    {
      title: 'Personalised guidance',
      copy: 'Small batches mean your mentor knows what you are stuck on and what you are aiming at.',
    },
    {
      title: 'Doubt support that continues',
      copy: 'Doubt sessions and mentor hours carry on after the certificate is printed.',
    },
  ],
}

/* ----------------------------------------------------------------- faqs -- */

/** Questions every course answers the same way. */
export const COMMON_FAQS: CourseFaq[] = [
  {
    q: 'Is placement guaranteed after the course?',
    a: 'No honest institute guarantees a job. What we guarantee is the process: a portfolio of live work, CV and interview preparation, and drives with hiring partners across Phagwara, Jalandhar and Ludhiana, repeated until you are placed rather than dropped after one rejection.',
  },
  {
    q: 'Will I get a certificate and internship letter?',
    a: 'Yes — two documents. An industry-recognised course completion certificate, and a separate internship letter documenting the live client work you did, which universities accept for industrial training requirements.',
  },
  {
    q: 'Do you work on real projects or only theory?',
    a: 'Real projects. From the second half of the course you work on genuine client requirements from techcadd’s delivery pipeline, scoped and reviewed by a trainer. That work is what an interviewer inspects.',
  },
  {
    q: 'Are weekend and evening batches available?',
    a: 'Yes. Weekday, evening and weekend batches cover the same syllabus, and 1-on-1 training is available if you would rather set your own pace. Every class runs for 2 hours whichever format you choose.',
  },
]

/* -------------------------------------------------------------- reviews -- */

/**
 * The Phagwara student reviews rail.
 *
 * Deliberately shared: these are reviews of the centre rather than of one
 * syllabus, and a course-specific set would mean inventing testimonials for
 * twenty-seven tracks. A course that collects its own overrides this.
 */
export const COMMON_REVIEWS: CourseReview[] = [
  {
    name: 'Karan Mehta',
    initials: 'KM',
    rating: 5,
    role: 'B.Tech Student · Phagwara',
    quote:
      'What made it click for me was the lab time. You can sit after class and someone will still explain it until you get it.',
  },
  {
    name: 'Arshdeep Singh',
    initials: 'AS',
    rating: 5,
    role: 'Trainee Engineer · Adampur',
    quote:
      'I travelled in for the weekend batch and it was worth every trip. Small batch, real work, no time wasted on theory nobody uses.',
  },
  {
    name: 'Pooja Rani',
    initials: 'PR',
    rating: 5,
    role: 'Graduate · Kartarpur',
    quote:
      'The course got me interview-ready faster than I expected. My interviewer asked to see my project and that was the whole conversation.',
  },
  {
    name: 'Simran Kaur',
    initials: 'SK',
    rating: 5,
    role: 'Career Switcher · Phagwara',
    quote:
      'I was switching careers and worried I would be behind. Half the batch was doing the same thing, and nobody made it awkward.',
  },
  {
    name: 'Rohit Sharma',
    initials: 'RS',
    rating: 5,
    role: 'BCA Student · Banga',
    quote:
      'I joined with almost no background and finished with a project I could actually show. The trainer never rushed the basics.',
  },
  {
    name: 'Navjot Kaur',
    initials: 'NK',
    rating: 5,
    role: 'Placed · Jalandhar',
    quote:
      'techcadd’s placement cell kept calling me for drives until I was placed. That persistence mattered more than anything else.',
  },
]
