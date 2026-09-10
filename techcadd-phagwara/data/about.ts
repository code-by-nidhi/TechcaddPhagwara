import type { IconName } from '@/components/ui/Icon'
import { allCoursePages, courseCatalog } from '@/data/coursePages'
import { achievements, statistics } from '@/data/site'

/**
 * The content of `/about`.
 *
 * Split out of the page for the same reason `data/contact.ts` is: the page is
 * a long editorial scroll, and thirteen bands of prose inlined into JSX makes
 * the layout impossible to read and the copy impossible to edit.
 *
 * On the numbers and the claims
 * -----------------------------
 * Nothing here asserts anything the site did not already assert. Every figure
 * is pulled from `statistics`/`achievements` in `data/site.ts` rather than
 * retyped, so the About page cannot drift away from the homepage — and the
 * credentials below are the ones already in `aboutHighlights`. Where the
 * reference layout named a founder, a founding year or a partner university,
 * this page says nothing instead: those facts are not recorded anywhere in
 * this codebase for the Phagwara centre, and an About page is the worst
 * possible place to guess.
 */

/* ---------------------------------------------------------------- hero -- */

export interface AboutStatCell {
  value: string
  label: string
}

/**
 * Four figures, taken from the homepage's own set.
 *
 * Looked up by label rather than by index so that reordering `statistics`
 * reorders this too instead of silently relabelling it. A label that stops
 * existing drops out of the row rather than rendering `undefined`.
 */
const STAT_LABELS: [string, string][] = [
  ['Industry Experience', 'Years of Excellence'],
  ['Students Trained', 'Students Trained'],
  ['Expert-Led Courses', 'Expert-Led Courses'],
  ['Successful Placements', 'Students Placed'],
]

export const ABOUT_HERO_STATS: AboutStatCell[] = STAT_LABELS.flatMap(([key, label]) => {
  const stat = statistics.find((s) => s.label === key)
  if (!stat) return []

  /* 18500 reads as 18,500 in a headline slot; a rating keeps its decimal. */
  const value =
    stat.decimals != null ? stat.value.toFixed(stat.decimals) : stat.value.toLocaleString('en-IN')

  return [{ value: `${value}${stat.suffix ?? ''}`, label }]
})

/* --------------------------------------------------------- who we are -- */

export const ABOUT_STORY: string[] = [
  'Techcadd Computer Education has been training students since 2007, and the Phagwara centre carries that work into Kapurthala district. It exists to close one gap — the distance between what a syllabus covers and what a hiring team actually asks for — by combining practical exposure, emerging technologies, project-based learning and career-oriented training.',
  'From Artificial Intelligence, Data Science and Machine Learning to Cyber Security, Cloud Computing, Full Stack Development, Python, Web Development, Digital Marketing and design, Techcadd Phagwara gives a learner several different ways into the digital economy — and a counsellor who will say honestly which one fits.',
]

/**
 * The subject chips.
 *
 * The real catalogue rather than a written list: twenty-seven courses are
 * taught here, and a hand-maintained list would start advertising courses that
 * had been retired the first time the catalogue changed.
 */
export const ABOUT_TEACH_CHIPS: string[] = allCoursePages.map((course) => course.label)

/* ----------------------------------------------------------- ecosystem -- */

export const ABOUT_ECOSYSTEM: string[] = [
  'At Techcadd, technology education is designed to go beyond textbooks and conventional classroom learning. The focus is on helping learners learn, implement and grow by pairing conceptual understanding with practical application.',
  'Students work on assignments, live projects, industrial training and internship-oriented learning that show how a technology is actually used on a team — six-week, 45-day, six-month and nine-month tracks all end in something built rather than something memorised.',
]

/* ------------------------------------------------------- why it matters -- */

export const ABOUT_WHY: string[] = [
  'Technology is evolving quickly. Artificial Intelligence, automation, cloud platforms, cybersecurity, data and software development keep changing how businesses operate, and what a job description asked for three years ago is rarely what it asks for today.',
  'Techcadd keeps its curriculum aligned with that change by introducing learners to emerging technologies and industry-relevant tools, and by teaching the adaptability needed to keep learning long after a course has finished.',
]

export const ABOUT_WHY_PULL =
  'The objective is not simply to teach a technology, but to develop the ability to understand problems, build solutions, use technology effectively and keep upgrading one’s skills.'

/* ------------------------------------------------------------ learners -- */

export interface AboutPoint {
  title: string
  text: string
}

export const ABOUT_LEARNERS: AboutPoint[] = [
  {
    title: 'School & College Students',
    text: 'Looking to develop technology skills early, alongside a degree.',
  },
  {
    title: 'Graduates & Job Seekers',
    text: 'Preparing for a first technology role, and a portfolio to show for it.',
  },
  {
    title: 'Engineering & IT Students',
    text: 'Seeking practical exposure and university-mandated industrial training.',
  },
  {
    title: 'Working Professionals',
    text: 'Looking to upgrade, specialise or diversify an existing skill set.',
  },
  {
    title: 'Career Switchers',
    text: 'Moving into the technology sector from another field entirely.',
  },
  {
    title: 'Entrepreneurs & Freelancers',
    text: 'Building the digital and technical capability their own work depends on.',
  },
]

/* ---------------------------------------------------------------- loop -- */

export const ABOUT_LOOP: AboutPoint[] = [
  { title: 'Learn', text: 'Understand the concepts and the fundamentals properly.' },
  { title: 'Practice', text: 'Apply that knowledge through hands-on exercises and guided labs.' },
  { title: 'Build', text: 'Work on projects and practical applications with real constraints.' },
  { title: 'Grow', text: 'Develop the professional confidence and career-oriented skills to match.' },
]

export const ABOUT_LOOP_NOTE =
  'This practical orientation runs through everything on offer here — live projects, industrial training programmes and internship tracks.'

/* ---------------------------------------------------------- difference -- */

export const ABOUT_DIFFERENCE: AboutPoint[] = [
  {
    title: 'Industry-Oriented Curriculum',
    text: 'Training is designed around the practical skills and technologies relevant to today’s digital workplace.',
  },
  {
    title: 'Hands-On Learning',
    text: 'Students get the chance to apply concepts rather than rely solely on theoretical instruction.',
  },
  {
    title: 'Emerging Technology Programs',
    text: 'Learners can explore AI, Machine Learning, Data Science, Cyber Security, Cloud Computing and other modern domains.',
  },
  {
    title: 'Projects & Industrial Exposure',
    text: 'Project-based learning and industrial training connect classroom concepts to practical applications.',
  },
  {
    title: 'Experienced Trainers & Mentors',
    text: 'Guidance from trainers who have worked with these technical concepts in real-world settings.',
  },
  {
    title: 'Career Guidance',
    text: 'Support with course selection, skill development, resumes, interviews and career pathways.',
  },
  {
    title: 'Placement Assistance',
    text: 'Techcadd provides placement assistance and career support to eligible learners; actual hiring decisions remain with the recruiting organisations.',
  },
  {
    title: 'Modern Learning Infrastructure',
    text: 'Technology-focused classrooms and labs built to support practical training and hands-on work.',
  },
  {
    title: 'Industry & Academic Engagement',
    text: 'Workshops, training initiatives and activities with educational institutions keep academic learning and industry-oriented skills connected.',
  },
]

/* ------------------------------------------------------------- domains -- */

export interface AboutDomain {
  title: string
  courses: string[]
  /** How many the category actually holds, so a trimmed card can say so. */
  total: number
}

/**
 * The four catalogue categories, as the mega menu already groups them.
 *
 * Capped at eight names apiece: Programming alone has ten, and a card that
 * simply lists everything stops being a summary. `total` travels with the card
 * so a trimmed one can say how many were left out rather than quietly
 * under-selling the catalogue.
 */
export const ABOUT_DOMAINS: AboutDomain[] = courseCatalog.map((category) => ({
  title: category.title,
  courses: category.courses.slice(0, 8).map((course) => course.label),
  total: category.courses.length,
}))

export const ABOUT_DOMAINS_LEAD =
  'Whether a learner wants to code an application, analyse data, build an AI solution, secure a network, manage cloud infrastructure, design a digital experience or grow a business online, there is a pathway here for it.'

/* ------------------------------------------------------------ approach -- */

export const ABOUT_APPROACH: AboutPoint[] = [
  {
    title: 'Relevance',
    text: 'Learn the technologies and skills that connect to what the industry is actually hiring for.',
  },
  {
    title: 'Application',
    text: 'Turn concepts into practical skills through projects, exercises and hands-on learning.',
  },
  {
    title: 'Growth',
    text: 'Develop the mindset and adaptability to keep learning in a fast-changing technology landscape.',
  },
]

/* ------------------------------------------------------------ industry -- */

export const ABOUT_INDUSTRY: string[] = [
  'A large part of what Techcadd does sits outside the classroom: campus placement activity, technology workshops and joint initiatives with educational institutions, all of which put students in front of the people who hire.',
  'These interactions are what stop the bridge between what a student learns and how the technology is applied professionally from becoming theoretical.',
]

/* --------------------------------------------------------- recognition -- */

export interface AboutCredential {
  icon: IconName
  title: string
  text: string
}

/**
 * Credentials, not milestones — the dated awards belong to the timeline
 * further down the page and are deliberately not repeated here.
 */
export const ABOUT_CREDENTIALS: AboutCredential[] = [
  {
    icon: 'shield',
    title: 'ISO Certified Training Centre',
    text: 'Training quality and curriculum processes are independently audited under ISO 9001:2015.',
  },
  {
    icon: 'award',
    title: 'Government-Approved Certifications',
    text: 'Course completion is certified against government-approved programmes, not an in-house document alone.',
  },
  {
    icon: 'handshake',
    title: 'Industry–Academia Engagement',
    text: 'Hiring partners run drives here, and colleges across the region send students for university-mandated training.',
  },
  {
    icon: 'sparkles',
    title: 'Technology & Innovation Initiatives',
    text: 'AI-focused workshops and demonstrations keep both trainers and students in contact with what is changing.',
  },
]

export const ABOUT_CREDENTIALS_NOTE =
  'The credentials above describe the Techcadd network of which the Phagwara centre is part.'

/* ------------------------------------------------------------- journey -- */

export interface AboutMilestone {
  year: string
  title: string
  text: string
}

/**
 * The timeline.
 *
 * The founding entry, then `achievements` oldest-first — that array is
 * newest-first because the homepage's Achievements section reads downward from
 * the most recent, and a timeline has to read the other way.
 */
export const ABOUT_MILESTONES: AboutMilestone[] = [
  {
    year: '2007',
    title: 'Techcadd Computer Education begins',
    text: 'Training starts on one conviction — that a student should leave with something built, not just a certificate.',
  },
  ...[...achievements].reverse().map((item) => ({
    year: item.year,
    title: item.title,
    text: item.text,
  })),
]

/* -------------------------------------------------------------- belief -- */

export const ABOUT_BELIEF_LINES: string[] = [
  'Technology changes.',
  'Skills evolve.',
  'Learning never stops.',
]

export const ABOUT_BELIEF: string[] = [
  'Meaningful technology education should not end when a course does.',
  'It should leave a learner with the knowledge to understand, the skills to build, the confidence to perform and the curiosity to keep going.',
]

export const ABOUT_TODAY =
  'With a focus on practical technology education, emerging skills, industry engagement and career development, Techcadd Phagwara keeps working towards a stronger ecosystem of future-ready technology professionals.'
