/**
 * Single source of truth for all site content.
 * Replace the values here with the real copy from the existing website —
 * no component needs to be touched.
 */

import type { IconName } from '@/components/ui/Icon'
import { internshipCatalog } from './internshipPages'
import { after12Catalog } from './after12Pages'

/* ------------------------------------------------------------------ types */

export interface Brand {
  name: string
  suffix: string
  tagline: string
  phone: string
  phoneHref: string
  whatsapp: string
  email: string
  address: string
  hours: string
  mapEmbed: string
}

export interface NavDropdownItem {
  label: string
  href: string
  /** one line under the label */
  note?: string
}

export interface NavDropdownGroup {
  title: string
  items: NavDropdownItem[]
}

export interface NavLink {
  label: string
  href: string
  /** opens the four-column Courses panel */
  mega?: boolean
  /** opens a short-list dropdown */
  items?: NavDropdownItem[]
  /** opens a short-list dropdown with category sub-headers */
  groups?: NavDropdownGroup[]
  /** rendered as the gradient AI capsule instead of a plain link */
  ai?: boolean
}

export interface Stat {
  value: number
  suffix: string
  label: string
  decimals?: number
  icon?: IconName
}

export interface Pillar {
  icon: IconName
  title: string
  text: string
}

/** One tile in the About section's training-duration stat grid. */
export interface AboutStat {
  value: string
  label: string
}

export interface CourseCategory {
  id: string
  label: string
}

export interface Course {
  id: string
  /**
   * The `data/coursePages.ts` slug this card opens. Optional: three cards
   * (UI/UX, Graphic Design, AutoCAD) describe tracks that have no course
   * page yet, and a card with no slug keeps its enquiry CTA rather than
   * pointing at a course it is not about.
   */
  slug?: string
  category: string
  title: string
  blurb: string
  duration: string
  mode: string
  level: string
  popular?: boolean
  featured?: boolean
  rating: number
  learners: string
  tags: string[]
  icon: IconName
}

export interface LearningMode {
  icon: IconName
  title: string
  text: string
  points: string[]
}

export interface Benefit {
  icon: IconName
  title: string
  text: string
}

export interface AiLab {
  title: string
  text: string
  stat: string
  statLabel: string
}

export interface JourneyStep {
  icon: IconName
  title: string
  text: string
}

export interface AiTool {
  name: string
  short: string
  color: string
}

export interface SalaryCard {
  role: string
  range: string
  growth: string
  demand: string
}

export interface Certification {
  title: string
  issuer: string
  note: string
}

export interface Project {
  title: string
  stack: string
  text: string
}

export interface FacultyMember {
  name: string
  role: string
  exp: string
  focus: string
  initials: string
}

export interface GalleryShot {
  title: string
  tag: string
  hue: number
  /** Optional real photograph. When present the tile renders next/image
   *  instead of the generated gradient stand-in. */
  src?: string
  alt?: string
}

export interface Achievement {
  year: string
  title: string
  text: string
}

export interface Testimonial {
  name: string
  role: string
  initials: string
  rating: number
  video?: boolean
  quote: string
}

export interface Faq {
  q: string
  a: string
}

export interface FooterColumn {
  title: string
  /** `href` is a real route for a course page, or a `#section` on the
      homepage — `SmartLink` already tells the two apart. */
  links: { label: string; href: string }[]
}

export interface Social {
  name: string
  key: IconName
  href: string
}

/* ------------------------------------------------------------------ brand */

export const brand: Brand = {
  name: 'Techcadd',
  suffix: 'Phagwara',
  tagline: 'Computer Education',
  phone: '+91 98765 43210',
  phoneHref: 'tel:+919876543210',
  whatsapp: '919876543210',
  email: 'phagwara@techcadd.com',
  address: 'Near Bus Stand, GT Road, Phagwara, Punjab 144401',
  hours: 'Mon – Sat · 9:00 AM – 7:00 PM',
  mapEmbed: 'https://www.google.com/maps?q=Phagwara,Punjab,India&output=embed',
}

/* ---------------------------------------------------------------- nav --- */

/**
 * The branch campuses.
 *
 * Every href is `#` on purpose: each branch runs its own website and none of
 * the addresses has been supplied. Nothing here creates a page or a route —
 * the navbar renders the trigger so it opens the panel and navigates nowhere.
 * When an address arrives, replace the `#` with it:
 *
 *     { label: 'Jalandhar', href: 'https://jalandhar.techcadd.com' },
 *
 * An `http(s)` href is opened in a new tab by the dropdown; anything else is
 * treated as an in-page anchor.
 */
const branchLinks: NavDropdownItem[] = [
  { label: 'Hoshiarpur', href: '#' },
  { label: 'Jalandhar', href: '#' },
  { label: 'Amritsar', href: '#' },
  { label: 'Mohali', href: '#' },
  { label: 'Phagwara', href: '#' },
  { label: 'Ludhiana', href: '#' },
]

/**
 * Bar arrangement, labels and hierarchy mirror the Hoshiarpur navbar.
 *
 * Every destination is a section that already exists on this page: this site
 * is a single page, so the five dropdowns surface the ten sections the old
 * seven-item bar never reached rather than pointing at routes that do not
 * exist. No page, route or section content changes because of anything here.
 */
export function makeNavLinks(
  internship: NavCatalog,
  after12: NavCatalog,
  /** Pages an editor asked to be linked from the header — see /public/nav-pages. */
  extraPages: NavDropdownItem[] = [],
): NavLink[] {
  return [
    { label: 'Home', href: '#home' },
    {
      label: 'About',
      href: '#about',
      items: [
        { label: 'About Us', href: '#about', note: 'Who we are' },
        /* No founder section exists on this page, so this lands on About —
           same destination as the Founder item promoted into the bar. */
        { label: 'Founder Vision', href: '#about', note: 'Why we started' },
        { label: 'Why Techcadd', href: '#benefits', note: 'What sets us apart' },
        { label: 'Infrastructure', href: '#labs', note: 'GPU-backed AI labs' },
      ],
    },
    { label: 'Founder', href: '#about' },
    { label: 'AI', href: '#labs', ai: true },
    { label: 'Courses', href: '#courses', mega: true },
    {
      label: 'Internship',
      href: '#modes',
      groups: internship.map((cat) => ({
        title: cat.title,
        items: cat.programs.map((p) => ({
          label: p.label,
          href: `/internship-training/${p.slug}`,
          note: p.duration,
        })),
      })),
    },
    {
      label: 'After 12th',
      href: '#journey',
      groups: after12.map((cat) => ({
        title: cat.title,
        items: cat.programs.map((p) => ({
          label: p.label,
          href: `/after-12th/${p.slug}`,
          note: p.duration,
        })),
      })),
    },
    {
      label: 'Resources',
      href: '#faq',
      items: [
        { label: 'Student Stories', href: '#testimonials', note: '1,850+ Google reviews' },
        { label: 'Campus Gallery', href: '#gallery', note: 'Labs, classrooms, events' },
        { label: 'Awards & Recognition', href: '#achievements', note: '15 years of results' },
        { label: 'FAQs', href: '#faq', note: 'Fees, batches, placement' },
        /* Blog, events and any page an editor marked for the header. Filed
           under Resources rather than given top-level slots: the bar is
           already ten items wide, and content added in the CMS should not
           reflow the navigation. */
        ...extraPages,
      ],
    },
    { label: 'Branches', href: '#', items: branchLinks },
    { label: 'Contact', href: '/contact' },
  ]
}

/**
 * The shape `makeNavLinks` needs from a catalogue.
 *
 * Structurally what both `ProgramCategory` and `CourseMenuCategory` already
 * are, declared here so this file does not import from the two catalogue
 * modules it is imported *by* — `internshipPages` imports nothing from here,
 * and it should stay that way.
 */
export interface NavCatalogEntry {
  label: string
  slug: string
  duration: string
}

export type NavCatalog = { title: string; programs: NavCatalogEntry[] }[]

/**
 * The bar as it stands with no CMS behind it.
 *
 * Still exported, and still what the navbar falls back to: a checkout with no
 * CMS configured renders the menu it always rendered.
 */
export const navLinks: NavLink[] = makeNavLinks(internshipCatalog, after12Catalog)

/* The Courses mega menu now reads from `data/coursePages.ts` — its four
   categories back both the nav panel and each course's own `/[slug]` page. */

/* --------------------------------------------------------------- hero --- */

export const heroStats: Stat[] = [
  { value: 18500, suffix: '+', label: 'Students Trained' },
  { value: 96, suffix: '%', label: 'Placement Rate' },
  { value: 420, suffix: '+', label: 'Hiring Partners' },
]

/* --------------------------------------------------------------- about -- */

export const aboutPillars: Pillar[] = [
  {
    icon: 'brain',
    title: 'AI-First Curriculum',
    text: 'Every course is rebuilt around modern AI workflows — prompt engineering, copilots and automation are taught as core skills, not extras.',
  },
  {
    icon: 'code',
    title: 'Build, Don’t Memorise',
    text: 'You ship 8–12 production-grade projects before you graduate. Portfolios beat certificates in interviews, so we build both.',
  },
  {
    icon: 'users',
    title: 'Mentors From Industry',
    text: 'Trainers with 8–15 years at product companies and agencies, teaching the exact stack their teams use in production today.',
  },
  {
    icon: 'briefcase',
    title: 'Placement Built In',
    text: 'Mock interviews, ATS resume clinics, aptitude drills and direct drives with 420+ recruiting partners across North India.',
  },
]

export const aboutHighlights: string[] = [
  '15+ years of training excellence',
  'ISO certified training centre',
  'Government approved certifications',
  'Live projects with real clients',
]

/** The 2×2 training-duration grid in the About section. */
export const aboutStats: AboutStat[] = [
  { value: '45 Days', label: 'Summer & winter industrial training' },
  { value: '6 Weeks', label: 'University-mandated training' },
  { value: '6 Months', label: 'Industrial training with internship' },
  { value: '9 Months', label: 'Expert track with client-level projects' },
]

/* --------------------------------------------------------------- stats -- */

export const statistics: Stat[] = [
  { value: 18500, suffix: '+', label: 'Students Trained', icon: 'users' },
  { value: 45, suffix: '+', label: 'Expert-Led Courses', icon: 'book' },
  { value: 12400, suffix: '+', label: 'Successful Placements', icon: 'briefcase' },
  { value: 420, suffix: '+', label: 'Hiring Companies', icon: 'building' },
  { value: 4.9, suffix: '★', label: 'Google Rating', decimals: 1, icon: 'star' },
  { value: 15, suffix: ' Yrs', label: 'Industry Experience', icon: 'award' },
]

/* ------------------------------------------------------------- courses -- */

export const courseCategories: CourseCategory[] = [
  { id: 'all', label: 'All Programs' },
  { id: 'ai', label: 'AI & Data' },
  { id: 'dev', label: 'Development' },
  { id: 'design', label: 'Design' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'it', label: 'IT & Cloud' },
]

export const courses: Course[] = [
  {
    id: 'ai-ml',
    slug: 'artificial-intelligence-course-in-phagwara',
    category: 'ai',
    title: 'Artificial Intelligence & Machine Learning',
    blurb:
      'Python, deep learning, computer vision, NLP and LLM application development — ending with a deployed AI product.',
    duration: '6 Months',
    mode: 'Offline + Live Online',
    level: 'Beginner → Advanced',
    popular: true,
    featured: true,
    rating: 4.9,
    learners: '2,400+',
    tags: ['Python', 'TensorFlow', 'LLMs', 'Computer Vision'],
    icon: 'brain',
  },
  {
    id: 'data-science',
    slug: 'data-science-course-in-phagwara',
    category: 'ai',
    title: 'Data Science & Analytics',
    blurb: 'Statistics, Pandas, SQL, Power BI and predictive modelling on real business datasets.',
    duration: '6 Months',
    mode: 'Hybrid',
    level: 'Beginner',
    popular: true,
    rating: 4.8,
    learners: '1,900+',
    tags: ['SQL', 'Pandas', 'Power BI'],
    icon: 'chart',
  },
  {
    id: 'full-stack',
    slug: 'web-development-course-in-phagwara',
    category: 'dev',
    title: 'Full Stack Web Development',
    blurb:
      'HTML, CSS, JavaScript, React, Node, Express and MongoDB with deployment and Git workflows.',
    duration: '6 Months',
    mode: 'Offline + Live Online',
    level: 'Beginner → Advanced',
    featured: true,
    rating: 4.9,
    learners: '3,100+',
    tags: ['React', 'Node.js', 'MongoDB'],
    icon: 'code',
  },
  {
    id: 'python',
    slug: 'python-course-in-phagwara',
    category: 'dev',
    title: 'Python Programming',
    blurb: 'Core to advanced Python, OOP, automation scripting and API development.',
    duration: '3 Months',
    mode: 'Offline',
    level: 'Beginner',
    rating: 4.8,
    learners: '2,700+',
    tags: ['Python', 'APIs', 'Automation'],
    icon: 'terminal',
  },
  {
    id: 'digital-marketing',
    slug: 'digital-marketing-course-in-phagwara',
    category: 'marketing',
    title: 'Digital Marketing & AI Growth',
    blurb:
      'SEO, Google Ads, Meta Ads, analytics and AI content workflows with live campaign budgets.',
    duration: '4 Months',
    mode: 'Hybrid',
    level: 'Beginner',
    popular: true,
    rating: 4.8,
    learners: '2,050+',
    tags: ['SEO', 'Google Ads', 'Analytics'],
    icon: 'megaphone',
  },
  {
    id: 'uiux',
    category: 'design',
    title: 'UI / UX Design',
    blurb: 'Design thinking, Figma, prototyping, design systems and AI-assisted visual workflows.',
    duration: '3 Months',
    mode: 'Offline',
    level: 'Beginner',
    rating: 4.9,
    learners: '1,150+',
    tags: ['Figma', 'Prototyping', 'Design Systems'],
    icon: 'palette',
  },
  {
    id: 'graphic',
    category: 'design',
    title: 'Graphic Design & Motion',
    blurb:
      'Photoshop, Illustrator, After Effects and generative AI tools for brand and social content.',
    duration: '3 Months',
    mode: 'Offline',
    level: 'Beginner',
    rating: 4.7,
    learners: '1,600+',
    tags: ['Photoshop', 'Illustrator', 'Firefly'],
    icon: 'pen',
  },
  {
    id: 'cloud',
    slug: 'cloud-computing-course-in-phagwara',
    category: 'it',
    title: 'Cloud Computing with AWS',
    blurb: 'EC2, S3, IAM, networking, containers and CI/CD pipelines with certification preparation.',
    duration: '4 Months',
    mode: 'Live Online',
    level: 'Intermediate',
    rating: 4.8,
    learners: '840+',
    tags: ['AWS', 'Docker', 'CI/CD'],
    icon: 'cloud',
  },
  {
    id: 'cyber',
    slug: 'cybersecurity-course-in-phagwara',
    category: 'it',
    title: 'Cyber Security & Ethical Hacking',
    blurb: 'Network security, penetration testing labs, OWASP Top 10 and incident response drills.',
    duration: '4 Months',
    mode: 'Offline',
    level: 'Intermediate',
    rating: 4.8,
    learners: '720+',
    tags: ['Networking', 'Pen Testing', 'OWASP'],
    icon: 'shield',
  },
  {
    id: 'java',
    slug: 'java-course-in-phagwara',
    category: 'dev',
    title: 'Java & Spring Boot',
    blurb: 'Core Java, OOP, JDBC, Spring Boot REST services and microservice fundamentals.',
    duration: '4 Months',
    mode: 'Offline',
    level: 'Beginner → Advanced',
    rating: 4.7,
    learners: '1,300+',
    tags: ['Java', 'Spring Boot', 'REST'],
    icon: 'coffee',
  },
  {
    id: 'autocad',
    category: 'it',
    title: 'AutoCAD & 3D Design',
    blurb: '2D drafting, 3D modelling, Revit basics and industry drawing standards.',
    duration: '3 Months',
    mode: 'Offline',
    level: 'Beginner',
    rating: 4.7,
    learners: '980+',
    tags: ['AutoCAD', 'Revit', '3D'],
    icon: 'ruler',
  },
  {
    id: 'app-dev',
    slug: 'kotlin-course-in-phagwara',
    category: 'dev',
    title: 'Android App Development',
    blurb: 'Kotlin, Jetpack Compose, Firebase and Play Store publishing end to end.',
    duration: '4 Months',
    mode: 'Hybrid',
    level: 'Intermediate',
    rating: 4.7,
    learners: '760+',
    tags: ['Kotlin', 'Firebase', 'Compose'],
    icon: 'mobile',
  },
]

/* ------------------------------------------------------- learning modes -- */

export const learningModes: LearningMode[] = [
  {
    icon: 'building',
    title: 'Classroom Training',
    text: 'Face-to-face batches at our Phagwara centre with dedicated lab hours and doubt-clearing sessions every day.',
    points: ['Small batch sizes', 'Daily lab access', 'On-campus mentors'],
  },
  {
    icon: 'video',
    title: 'Live Online',
    text: 'Instructor-led live classes with recordings, shared screens and the same projects as the classroom track.',
    points: ['Lifetime recordings', 'Live doubt sessions', 'Learn from anywhere'],
  },
  {
    icon: 'zap',
    title: 'Hybrid Flex',
    text: 'Switch between classroom and online any week — attendance, projects and mentors stay continuous.',
    points: ['Switch anytime', 'Weekend batches', 'Flexible schedule'],
  },
  {
    icon: 'briefcase',
    title: 'Corporate Training',
    text: 'Custom upskilling programs for teams, delivered at your office or ours with role-specific curriculum.',
    points: ['Custom syllabus', 'Team assessments', 'On-site delivery'],
  },
]

/* ------------------------------------------------------------ benefits -- */

export const benefits: Benefit[] = [
  {
    icon: 'infinity',
    title: 'Lifetime Access',
    text: 'Revisit recordings, notes and updated modules forever — including future syllabus revisions.',
  },
  {
    icon: 'users',
    title: '1:1 Mentorship',
    text: 'A dedicated mentor tracks your progress weekly and unblocks you fast.',
  },
  {
    icon: 'code',
    title: 'Live Projects',
    text: 'Work on real client briefs with deadlines, reviews and version control.',
  },
  {
    icon: 'file',
    title: 'Resume & LinkedIn',
    text: 'ATS-optimised resume, portfolio site and LinkedIn rebuild before drives begin.',
  },
  {
    icon: 'mic',
    title: 'Mock Interviews',
    text: 'Technical and HR rounds simulated by industry panels with scored feedback.',
  },
  {
    icon: 'wallet',
    title: 'Easy EMI Options',
    text: 'Zero-cost EMI plans and scholarships for merit and early enrolment.',
  },
  {
    icon: 'clock',
    title: 'Flexible Batches',
    text: 'Morning, evening and weekend batches designed around college and job schedules.',
  },
  {
    icon: 'shield',
    title: 'Placement Guarantee',
    text: 'Written placement assistance agreement with unlimited interview opportunities.',
  },
]

/* -------------------------------------------------------------- AI labs -- */

export const aiLabs: AiLab[] = [
  {
    title: 'Generative AI Studio',
    text: 'Hands-on stations for prompt engineering, RAG pipelines and building assistants on top of modern LLM APIs.',
    stat: '24',
    statLabel: 'GPU-backed seats',
  },
  {
    title: 'Data & Analytics Lab',
    text: 'Real corporate datasets, warehouse tooling and BI dashboards published to live stakeholders.',
    stat: '60+',
    statLabel: 'Real datasets',
  },
  {
    title: 'Cloud Deployment Lab',
    text: 'Sandboxed AWS accounts where every student ships, monitors and scales their own deployment.',
    stat: '100%',
    statLabel: 'Cloud-deployed projects',
  },
  {
    title: 'Robotics & IoT Corner',
    text: 'Vision models on edge devices — sensors, microcontrollers and real-time inference on hardware.',
    stat: '12',
    statLabel: 'Hardware kits',
  },
]

/* ------------------------------------------------------------- journey -- */

export const journeySteps: JourneyStep[] = [
  {
    icon: 'compass',
    title: 'Discover',
    text: 'Free counselling and an aptitude session map you to the right career track.',
  },
  {
    icon: 'edit',
    title: 'Enrol',
    text: 'Pick your batch and mode, lock a scholarship or EMI plan, and get your learning kit.',
  },
  {
    icon: 'book',
    title: 'Learn',
    text: 'Live instructor-led modules with daily labs, assignments and weekly assessments.',
  },
  {
    icon: 'code',
    title: 'Build Projects',
    text: 'Ship 8–12 portfolio projects with code reviews from working engineers.',
  },
  {
    icon: 'briefcase',
    title: 'Internship',
    text: 'A 4–8 week supervised internship on a live client product with real deadlines.',
  },
  {
    icon: 'mic',
    title: 'Interview Prep',
    text: 'Aptitude drills, DSA rounds, mock panels and communication coaching.',
  },
  {
    icon: 'award',
    title: 'Certification',
    text: 'Government-approved and industry certifications verified with a public credential ID.',
  },
  {
    icon: 'handshake',
    title: 'Job Assistance',
    text: 'Direct referrals, campus drives and recruiter introductions until you are placed.',
  },
  {
    icon: 'rocket',
    title: 'Career Success',
    text: 'Alumni network, upskilling passes and salary-negotiation support for life.',
  },
]

/** Floating AI tool badges that orbit the roadmap. */
export const aiTools: AiTool[] = [
  { name: 'ChatGPT', short: 'GPT', color: '#10A37F' },
  { name: 'Gemini', short: 'GM', color: '#4285F4' },
  { name: 'Claude', short: 'CL', color: '#D97757' },
  { name: 'Midjourney', short: 'MJ', color: '#1A1A2E' },
  { name: 'Cursor', short: 'CR', color: '#4F46E5' },
  { name: 'GitHub Copilot', short: 'CP', color: '#24292F' },
  { name: 'Canva AI', short: 'CA', color: '#00C4CC' },
  { name: 'Runway', short: 'RW', color: '#7C3AED' },
  { name: 'Perplexity', short: 'PX', color: '#20808D' },
  { name: 'Notion AI', short: 'NO', color: '#111111' },
  { name: 'Leonardo AI', short: 'LE', color: '#8B5CF6' },
  { name: 'Adobe Firefly', short: 'FF', color: '#FA0F00' },
]

/* ------------------------------------------------------------ placement -- */

export const placementStats: Stat[] = [
  { value: 96, suffix: '%', label: 'Placement Success Rate' },
  { value: 12400, suffix: '+', label: 'Students Placed' },
  { value: 12.5, suffix: ' LPA', label: 'Highest Package', decimals: 1 },
  { value: 4.2, suffix: ' LPA', label: 'Average Package', decimals: 1 },
]

export const salaryCards: SalaryCard[] = [
  { role: 'AI / ML Engineer', range: '₹6 – 12.5 LPA', growth: '+38%', demand: 'Very High' },
  { role: 'Full Stack Developer', range: '₹4.5 – 9 LPA', growth: '+31%', demand: 'Very High' },
  { role: 'Data Analyst', range: '₹3.6 – 8 LPA', growth: '+27%', demand: 'High' },
  { role: 'Digital Marketing Lead', range: '₹3 – 7.5 LPA', growth: '+22%', demand: 'High' },
]

export const companies: string[] = [
  'Infosys',
  'TCS',
  'Wipro',
  'Cognizant',
  'Tech Mahindra',
  'HCL',
  'Capgemini',
  'Accenture',
  'Zoho',
  'Paytm',
  'Byju’s',
  'Josh Technology',
  'Chetu',
  'Grazitti',
  'Netsmartz',
  'SmartData',
  'Trantor',
  'Impinge',
]

/* ------------------------------------------------------ certifications -- */

export const certifications: Certification[] = [
  {
    title: 'Techcadd Professional Certificate',
    issuer: 'Techcadd Computer Education',
    note: 'Verifiable credential ID',
  },
  {
    title: 'Government Approved Diploma',
    issuer: 'Ministry recognised board',
    note: 'Valid for government roles',
  },
  {
    title: 'ISO 9001:2015 Training Quality',
    issuer: 'ISO certified centre',
    note: 'Audited curriculum standards',
  },
  {
    title: 'Industry Partner Certificates',
    issuer: 'AWS · Google · Meta tracks',
    note: 'Exam preparation included',
  },
]

/* ------------------------------------------------------------ projects -- */

export const projects: Project[] = [
  {
    title: 'AI Resume Screener',
    stack: 'Python · NLP · Streamlit',
    text: 'Ranks candidate resumes against a job description using embeddings and explainable scoring.',
  },
  {
    title: 'Smart Attendance Vision',
    stack: 'OpenCV · TensorFlow',
    text: 'Face-recognition attendance that works on low-cost edge hardware in real classrooms.',
  },
  {
    title: 'E-Commerce Platform',
    stack: 'React · Node · Mongo',
    text: 'Full storefront with payments, admin analytics and a recommendation engine.',
  },
  {
    title: 'Sales Forecast Dashboard',
    stack: 'Power BI · SQL',
    text: 'Executive BI dashboard forecasting regional revenue from four years of history.',
  },
  {
    title: 'Campus Companion App',
    stack: 'Kotlin · Firebase',
    text: 'Android app for timetables, assignments and push notifications, live on Play Store.',
  },
  {
    title: 'Brand Growth Campaign',
    stack: 'SEO · Meta Ads',
    text: 'Live campaign that lifted a local retailer’s organic traffic by 240% in 90 days.',
  },
]

/* ------------------------------------------------------------- faculty -- */

export const faculty: FacultyMember[] = [
  {
    name: 'Rajiv Mehta',
    role: 'Head of AI & Data Science',
    exp: '14 yrs',
    focus: 'ML systems, LLM applications',
    initials: 'RM',
  },
  {
    name: 'Simran Kaur',
    role: 'Lead Full Stack Mentor',
    exp: '10 yrs',
    focus: 'React, Node, cloud deployment',
    initials: 'SK',
  },
  {
    name: 'Arun Verma',
    role: 'Digital Marketing Strategist',
    exp: '11 yrs',
    focus: 'Performance marketing, SEO',
    initials: 'AV',
  },
  {
    name: 'Neha Sharma',
    role: 'Design & UX Lead',
    exp: '9 yrs',
    focus: 'Design systems, product UX',
    initials: 'NS',
  },
  {
    name: 'Harpreet Singh',
    role: 'Cloud & Security Trainer',
    exp: '12 yrs',
    focus: 'AWS, DevOps, security ops',
    initials: 'HS',
  },
  {
    name: 'Pooja Gupta',
    role: 'Placement & Career Coach',
    exp: '8 yrs',
    focus: 'Interviews, communication',
    initials: 'PG',
  },
]

/* ------------------------------------------------------------- gallery -- */

export const gallery: GalleryShot[] = [
  { title: 'AI Lab Session', tag: 'Campus', hue: 244 },
  { title: 'Project Demo Day', tag: 'Events', hue: 262 },
  { title: 'Placement Drive', tag: 'Careers', hue: 199 },
  { title: 'Hackathon Night', tag: 'Events', hue: 252 },
  { title: 'Certificate Ceremony', tag: 'Achievements', hue: 268 },
  { title: 'Industry Guest Talk', tag: 'Campus', hue: 210 },
  { title: 'Design Studio', tag: 'Campus', hue: 256 },
  { title: 'Team Workshop', tag: 'Events', hue: 240 },
]

/* -------------------------------------------------------- achievements -- */

export const achievements: Achievement[] = [
  {
    year: '2024',
    title: 'Best AI Training Institute — Punjab',
    text: 'Recognised for the highest AI placement conversion in the region.',
  },
  {
    year: '2023',
    title: '10,000+ Placements Milestone',
    text: 'Crossed ten thousand cumulative student placements across all branches.',
  },
  {
    year: '2022',
    title: 'ISO 9001:2015 Certification',
    text: 'Training quality and curriculum processes independently audited.',
  },
  {
    year: '2021',
    title: 'Excellence in Skill Development',
    text: 'State award for job-oriented vocational training outcomes.',
  },
]

/* -------------------------------------------------------- testimonials -- */

export const testimonials: Testimonial[] = [
  {
    name: 'Ankit Sharma',
    role: 'AI Engineer @ Josh Technology',
    initials: 'AS',
    rating: 5,
    video: true,
    quote:
      'I joined with zero coding background. The project-first approach meant I walked into interviews with six deployed applications — that alone got me shortlisted everywhere.',
  },
  {
    name: 'Manpreet Kaur',
    role: 'Data Analyst @ Grazitti',
    initials: 'MK',
    rating: 5,
    quote:
      'The mock interviews were harder than my actual interview. By the time I sat with the real panel, nothing surprised me. Placed within five weeks of finishing.',
  },
  {
    name: 'Rohit Bansal',
    role: 'Full Stack Developer @ Chetu',
    initials: 'RB',
    rating: 5,
    video: true,
    quote:
      'Mentors reviewed my code line by line, not just marked it complete. That habit of writing clean, reviewable code is exactly what my team values now.',
  },
  {
    name: 'Simran Jeet',
    role: 'Digital Marketing Lead @ Impinge',
    initials: 'SJ',
    rating: 5,
    quote:
      'We ran live campaigns with a real budget during the course. Handling actual ad spend as a student made my portfolio completely different from other candidates.',
  },
  {
    name: 'Karan Thakur',
    role: 'Cloud Engineer @ Netsmartz',
    initials: 'KT',
    rating: 5,
    quote:
      'The AWS lab gave every student their own sandbox account. Breaking and fixing real infrastructure taught me more than any certification video ever did.',
  },
  {
    name: 'Priya Rani',
    role: 'UI/UX Designer @ SmartData',
    initials: 'PR',
    rating: 5,
    quote:
      'From wireframes to a full design system in three months. My mentor pushed me to defend every design decision — that skill carried straight into my job.',
  },
]

/* ----------------------------------------------------------------- faq -- */

export const faqs: Faq[] = [
  {
    q: 'Do I need a technical background to join the AI course?',
    a: 'No. Our AI and Data Science tracks start from absolute fundamentals — Python basics, mathematics refreshers and logic building — before moving into machine learning. Around 60% of our AI students come from non-programming backgrounds.',
  },
  {
    q: 'What exactly does "placement assistance" include?',
    a: 'A written placement assistance agreement covering ATS resume building, portfolio review, LinkedIn optimisation, unlimited mock interviews, aptitude and DSA training, and direct interview opportunities with our 420+ hiring partners until you are placed.',
  },
  {
    q: 'Can I attend classes while studying in college or working?',
    a: 'Yes. We run morning, evening and weekend batches, and every classroom session is recorded for the Hybrid Flex track. You can switch between classroom and live online any week without losing continuity.',
  },
  {
    q: 'Are the certificates recognised by employers?',
    a: 'You receive a Techcadd professional certificate with a verifiable credential ID, plus a government-approved diploma. We also prepare you for external industry exams such as AWS, Google and Meta certifications.',
  },
  {
    q: 'Is there an EMI or scholarship option?',
    a: 'Yes. Zero-cost EMI plans are available on all long-duration programs, along with merit scholarships and early-enrolment discounts. Our counsellors will map the options to your situation during the free session.',
  },
  {
    q: 'What happens if I miss classes?',
    a: 'Every session is recorded and available for life. You also get free backup classes with the next batch for any module you need to repeat, at no additional cost.',
  },
  {
    q: 'Do you provide internships?',
    a: 'Every long-duration program includes a supervised 4–8 week internship on a live client product, with a formal internship certificate and a mentor sign-off on your contributions.',
  },
]

/* -------------------------------------------------------------- footer -- */

export const branches: string[] = [
  'Phagwara',
  'Jalandhar',
  'Hoshiarpur',
  'Ludhiana',
  'Kapurthala',
  'Nakodar',
]

export const footerLinks: FooterColumn[] = [
  {
    title: 'Programs',
    links: [
      { label: 'Artificial Intelligence', href: '/artificial-intelligence-course-in-phagwara' },
      { label: 'Data Science', href: '/data-science-course-in-phagwara' },
      { label: 'Web Development', href: '/web-development-course-in-phagwara' },
      { label: 'Digital Marketing', href: '/digital-marketing-course-in-phagwara' },
      { label: 'Web Designing', href: '/web-designing-course-in-phagwara' },
      { label: 'Cloud Computing', href: '/cloud-computing-course-in-phagwara' },
    ],
  },
  {
    title: 'Institute',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Faculty', href: '#faculty' },
      { label: 'AI Labs', href: '#labs' },
      { label: 'Gallery', href: '#gallery' },
      { label: 'Achievements', href: '#achievements' },
      { label: 'Courses', href: '#courses' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Contact Us', href: '#contact' },
      { label: 'FAQs', href: '#faq' },
      { label: 'Placement Cell', href: '#placement' },
      { label: 'Student Stories', href: '#testimonials' },
      { label: 'Learning Modes', href: '#modes' },
      { label: 'Why Techcadd', href: '#benefits' },
    ],
  },
]

export const socials: Social[] = [
  { name: 'Facebook', key: 'facebook', href: '#' },
  { name: 'Instagram', key: 'instagram', href: '#' },
  { name: 'LinkedIn', key: 'linkedin', href: '#' },
  { name: 'YouTube', key: 'youtube', href: '#' },
  { name: 'X', key: 'twitter', href: '#' },
]
