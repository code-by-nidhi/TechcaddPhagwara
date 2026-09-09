/**
 * Defaults the After 12th programmes inherit.
 *
 * The course catalogue at `data/courses` has its own shared block, and most of
 * it is right here too — the trainers, the batch formats, the certificate are
 * the same centre. What differs is who is in the room. A course page addresses
 * six audiences from school-leaver to business owner; an After 12th page is
 * read almost entirely by one person, usually with a parent beside them, and
 * usually a few weeks after a board result.
 *
 * So the audience grid, the "why us" case and the standing FAQs are rewritten
 * here for that reader — the questions actually asked at the counter are about
 * degrees, about whether a non-science stream can cope, and about what the
 * first salary looks like. The rest is imported from the course catalogue
 * rather than copied, so a change to the placement promise is still made once.
 */

import type { CourseFaq, CourseInstructor, CourseReview } from '@/data/courses/types'

/* -------------------------------------------------------------- audience -- */

/**
 * The four readers of an After 12th page.
 *
 * Deliberately four rather than the catalogue's six: the freelancer and
 * business-owner blocks describe people who are not choosing between this and
 * a degree, and including them dilutes a page whose whole job is to answer one
 * school-leaver's question.
 */
export const AFTER12_AUDIENCE = [
  {
    label: 'Students straight after 12th',
    copy: 'Any stream — science, commerce, arts. Nothing here assumes you took computer science at school, and the first weeks are built for someone who has never written a line of code. Most students run this alongside a degree using the weekday or evening batch.',
  },
  {
    label: 'Graduates and final-year students',
    copy: 'If you are finishing a BA, BCA, B.Sc, BBA or B.Tech, this is the part your degree does not cover. You enter placement season with project work in hand rather than a blank CV and a percentage.',
  },
  {
    label: 'Career changers on the weekend batch',
    copy: 'The weekend batch exists for people already working or studying full-time. Same syllabus, same projects, same trainer — spread across Saturdays and Sundays so you do not have to leave anything to start.',
  },
  {
    label: 'Anyone curious with no IT background',
    copy: 'No prior experience is required and none is assumed. If you can use a laptop and you are willing to practise between classes, the course is built to take you the rest of the way.',
  },
]

/* ------------------------------------------------------------------ why -- */

/** "Why students choose techcadd" — written for a school-leaver's page. */
export const AFTER12_WHY_TECHCADD = [
  {
    title: 'Starts from zero, honestly',
    copy: 'Not "beginner-friendly" as a marketing line. The first module assumes nothing, every term is defined the first time it appears, and no one moves on because the calendar says so.',
  },
  {
    title: 'You practise on the real thing',
    copy: 'Licensed software and real accounts, not screenshots or a simulator. The environment you learn in is the environment you will be hired to work in.',
  },
  {
    title: 'Projects, not just a certificate',
    copy: 'Every stage of the course ends in something that runs. You finish with a portfolio of work you built and can explain, which is the first thing an interviewer asks to see.',
  },
  {
    title: 'A route in without an engineering degree',
    copy: 'The roles this course targets hire on demonstrated skill. We are direct with students and parents about which ones do and do not ask for a degree, and what the first year actually pays.',
  },
  {
    title: 'Trainers who still do the work',
    copy: 'Your trainer delivers client projects for techcadd’s services arm rather than lecturing full-time, so the examples in class are current rather than a case study from five years ago.',
  },
  {
    title: 'Since 2007, 25,000+ students',
    copy: 'Nearly two decades of hiring relationships in Punjab is why a call from our placement cell gets answered and why local employers know what our certificate means.',
  },
]

/** The four-panel "what you get" block, framed for a first qualification. */
export const AFTER12_INDUSTRY_READY = [
  {
    title: 'Built for a first qualification',
    copy: 'The syllabus is ordered so one idea lands before the next one needs it. Nothing is assumed, and nothing is skipped because it is inconvenient to teach.',
  },
  {
    title: 'Learn by building, from week one',
    copy: 'You spend more time building than watching. Each module produces something that works, reviewed by a trainer while the decisions are still easy to change.',
  },
  {
    title: 'A portfolio, not a folder of notes',
    copy: 'Every project is yours to keep, publish and talk through. That portfolio is what turns "I did a course" into an interview that goes somewhere.',
  },
  {
    title: 'Certificate, internship letter and placement support',
    copy: 'You finish with an industry-recognised certificate, a documented internship letter accepted by Punjab universities, CV help and mock interviews.',
  },
]

/** The three-step project loop, in the language a first-year student uses. */
export const AFTER12_WORKING_LOOP = [
  {
    title: 'Understand',
    copy: 'Take a real requirement apart before touching a tool — what is being asked, what it needs, and which part to build first.',
  },
  {
    title: 'Build',
    copy: 'Work hands-on with your trainer watching the screen, so a wrong turn is caught in the same session rather than three weeks later.',
  },
  {
    title: 'Present',
    copy: 'Walk through what you built and why you built it that way. This is the interview rehearsal, run against every project rather than once at the end.',
  },
]

/* ----------------------------------------------------------- instructor -- */

export const AFTER12_INSTRUCTOR: CourseInstructor = {
  heading: 'Why learn with us?',
  intro:
    'Starting a technical course straight after school works when the teaching is patient and the practice is real. Both are the point here: trainers who still ship production work, and a batch small enough that nobody is left quietly behind.',
  points: [
    {
      title: 'Nothing assumed on day one',
      copy: 'Every term is explained the first time it is used. Students join from science, commerce and arts streams and finish the same course.',
    },
    {
      title: 'Practitioners, not presenters',
      copy: 'Sessions are run by people working on live client projects, so the examples come from real work rather than a textbook.',
    },
    {
      title: 'Progress on readiness, not the calendar',
      copy: 'A concept gets the time it needs. Lab hours run outside class and doubt sessions continue until it lands.',
    },
    {
      title: 'Support that outlasts the certificate',
      copy: 'Doubt sessions, CV reviews and placement drives continue after the course ends, repeated after a rejection rather than dropped.',
    },
  ],
}

/* ----------------------------------------------------------------- faqs -- */

/**
 * The questions asked at the counter by a school-leaver or their parent.
 *
 * These sit *between* a programme's own questions and the four every course
 * answers identically — `makeAfter12` splices them in, so the running order is
 * "about this course", then "about starting after 12th", then "about the
 * centre". Someone opening the FAQ is usually working down exactly that path.
 */
export const AFTER12_FAQS: CourseFaq[] = [
  {
    q: 'I have just finished 12th — is this too advanced for me?',
    a: 'No. The course is designed for exactly that starting point. The first module assumes no programming, no IT background and no computer-science stream at school, and every term is explained the first time it appears. Students join from arts and commerce streams every batch and finish the same syllabus as everyone else.',
  },
  {
    q: 'Can I do this alongside my degree or college?',
    a: 'Yes, and most students do. Weekday, evening and weekend batches all cover the same syllabus, so you can pick the one that fits your college timetable. The weekend batch in particular exists for students and working people who cannot commit on weekdays.',
  },
  {
    q: 'Does my stream in 12th matter?',
    a: 'It does not. There is no maths or science prerequisite for the software tracks, and the design tracks need drawing sense rather than a physics background. What matters far more is practising between classes.',
  },
]

/* -------------------------------------------------------------- reviews -- */

/**
 * Reviews from students who joined straight after school.
 *
 * A separate set from the catalogue's: the reassurance a school-leaver needs
 * is that someone with their background got through it, and a testimonial from
 * a working professional does not carry that.
 */
export const AFTER12_REVIEWS: CourseReview[] = [
  {
    name: 'Harmanpreet Singh',
    initials: 'HS',
    rating: 5,
    role: 'Joined after 12th (Arts) · Phagwara',
    quote:
      'I did arts in school and thought this would be out of my depth. The trainer started from absolute basics and never made me feel slow for asking twice.',
  },
  {
    name: 'Jasleen Kaur',
    initials: 'JK',
    rating: 5,
    role: 'Joined after 12th (Commerce) · Banga',
    quote:
      'My parents wanted me to only do a degree. I did both — evening batch here, college in the morning — and I had projects to show before my friends had started theirs.',
  },
  {
    name: 'Manpreet Sandhu',
    initials: 'MS',
    rating: 5,
    role: 'First job at 19 · Jalandhar',
    quote:
      'The projects were the whole interview. He barely looked at my certificate, he just asked me to explain what I had built and how.',
  },
  {
    name: 'Gurpreet Kaur',
    initials: 'GK',
    rating: 5,
    role: 'Student · Kapurthala',
    quote:
      'Small batch meant the trainer knew exactly where I was stuck. In school nobody would have noticed for a month.',
  },
  {
    name: 'Sahil Verma',
    initials: 'SV',
    rating: 5,
    role: 'Joined after 12th (Non-medical) · Phagwara',
    quote:
      'I came in with zero coding and left with something running that I could actually show people. That gap closed faster than I expected.',
  },
  {
    name: 'Ramanjit Kaur',
    initials: 'RK',
    rating: 5,
    role: 'Placed · Ludhiana',
    quote:
      'They kept calling me for drives even after two rejections. That is the part I did not expect and the part that got me placed.',
  },
]

/* --------------------------------------------------------- comparison ---- */

/** The comparison table, framed against the alternative a school-leaver has. */
export const AFTER12_COMPARISON_NOTE =
  'The honest comparison for a student after 12th is not against another institute — it is against spending three years on a degree alone and starting the skills afterwards. This runs alongside one.'
