import type { IconName } from '@/components/ui/Icon'
import type { CourseVideoData } from '@/components/pages/CourseVideo'

/* ==========================================================================
   Rich course-page content

   `data/coursePages.ts` stays the catalogue — the 27 entries that back the
   mega menu, the sitemap and every course route. This file carries only the
   long-form copy a course page renders below its hero, keyed by the same
   slug, so adding a course to the catalogue never means filling in fifteen
   sections before the page will build.

   Every field is optional and every section is skipped when its field is
   absent (see `app/[slug]/page.tsx`). A course with no entry here still
   renders eleven sections from its catalogue data and the shared site data;
   a course with a full entry renders all seventeen.
   ========================================================================== */

export interface CourseModule {
  title: string
  points: string[]
}

export interface CoursePersona {
  title: string
  text: string
}

export interface CourseProjectItem {
  title: string
  text: string
  tags: string[]
}

/** One market's band for the role, plus where it sits on the shared scale. */
export interface CourseSalaryMarket {
  market: string
  fresher: string
  experienced: string
  /** 0–1, drawn on the same scale in every market so the bars compare. */
  scale: number
}

export interface CourseSalary {
  role: string
  blurb: string
  starting: string
  after2: string
  markets: CourseSalaryMarket[]
  hiring: string[]
}

export interface CourseQa {
  q: string
  a: string
}

export interface CourseContent {
  /**
   * Real hero artwork, once it exists in `public/images/`. Absent — which is
   * the case for all twenty-seven courses today — and the hero draws the
   * generated icon mesh from `tools` instead (see `CourseHeroVisual`).
   */
  heroImage?: { src: string; alt: string }
  /** Two or three paragraphs' worth of prose for the overview section. */
  overview?: string
  /**
   * The video panel under the overview prose. Present but with no
   * `youtubeId`/`src` renders the panel as artwork; add either and the same
   * panel becomes a click-to-load player.
   */
  video?: CourseVideoData
  /** The three facts that sit beside `duration` in the hero strip. */
  mode?: string
  eligibility?: string
  includes?: string
  whatYouGet?: string[]
  personas?: CoursePersona[]
  whyNow?: { title: string; points: string[] }
  syllabusIntro?: string
  modules?: CourseModule[]
  tools?: { name: string; icon: IconName }[]
  salary?: CourseSalary
  projects?: CourseProjectItem[]
  faqs?: CourseQa[]
}

/*
 * Shared fallbacks. These are true of every track we run, so they belong to
 * the page template rather than to twenty-seven near-identical entries — a
 * course only overrides one when its own answer differs.
 */
export const courseDefaults = {
  mode: 'Classroom, Weekend & 1-on-1',
  eligibility: '12th Pass Onward',
  includes: 'Internship Letter',
  whatYouGet: [
    '100% practical, project-based learning',
    'AI tools integrated into every module',
    'Live client projects under trainer supervision',
    'Internship letter and placement support',
    'Small batches with daily doubt clearing',
  ],
} as const

/*
 * Python is the worked example — every optional field filled, so the page
 * template can be judged at full length. The remaining twenty-six courses
 * render the same layout minus the sections whose copy has not been written
 * yet; drop a new key in here and those sections appear with no code change.
 */
export const courseContent: Record<string, CourseContent> = {
  'python-course-in-phagwara': {
    /* No `youtubeId` yet — the panel renders, and goes live the moment one
       is added here. */
    video: { title: 'Inside the Python lab at techcadd Phagwara' },

    overview:
      'techcadd’s Python course in Phagwara is aimed at students, graduates and working professionals who want to write code that does real work, whether or not they have programmed before. The early weeks cover syntax, data types and control flow, then move into functions, modules and virtual environments so projects are organised the way a working developer keeps them. From there you take on object-oriented programming, error handling, and reading and writing files in JSON and CSV. The second half is where it turns practical: SQLite and PostgreSQL for storing data, Flask and FastAPI for building APIs, automation scripting and web scraping, then NumPy and Pandas for data work. You work in VS Code with Git throughout, the way a team actually does. Each module ends in something you have built and a trainer has reviewed, so you finish with a portfolio, a CV built around it and interview practice for Python Developer, Backend Developer or Data Analyst roles.',

    personas: [
      {
        title: 'Students after 12th',
        text: 'Join from any stream. You start from fundamentals with no assumed knowledge, and most students run the course alongside a degree at a Phagwara college using the weekday or weekend batch.',
      },
      {
        title: 'Graduates and final-year students',
        text: 'If you are finishing a BA, BBA, B.Com, BCA or B.Tech, this is the shortest route from degree to salary. Enter placement season with project work in hand instead of a blank CV.',
      },
      {
        title: 'Working professionals',
        text: 'The weekend batch exists for people already earning. Career switchers typically become interview-ready for Python Developer roles within five to six months without leaving their current job.',
      },
      {
        title: 'Non-technical backgrounds',
        text: 'Commerce, arts and science graduates all sit in the same batch. Python is the language we start career-changers on precisely because it reads closest to plain English.',
      },
      {
        title: 'Analysts and reporting staff',
        text: 'If your day is spent in spreadsheets, the automation, NumPy and Pandas modules replace the repetitive half of that work and move you toward Data Analyst roles.',
      },
      {
        title: 'Founders and freelancers',
        text: 'Build and maintain your own scripts, scrapers and small APIs instead of paying for every change. The client-handling module covers scoping and pricing the work too.',
      },
    ],

    whyNow: {
      title: 'Python Is Powering the Next Generation of Industry Leaders',
      points: [
        'Live client work from week one, supervised by a trainer, not slides, not simulations.',
        'Python Developer roles in Punjab start around ₹18,000 – ₹30,000 a month for a fresher with a working portfolio.',
        'It is the first requirement on almost every AI, automation and data listing we see from hiring partners.',
      ],
    },

    syllabusIntro:
      'The syllabus is arranged so every module produces an asset rather than a set of notes. You will cover syntax, data types and control flow, functions, modules and virtual environments, object-oriented programming and error handling, file handling, JSON and CSV processing, databases with SQLite and PostgreSQL, and finish with a live project built on Python 3, VS Code and Git. Modules run in the order a real project runs: foundations first, then the core skills, then applied work under supervision, then the portfolio and interview preparation that turn all of it into an offer letter.',

    modules: [
      {
        title: 'Foundations',
        points: [
          'Syntax, data types and control flow',
          'Functions, modules and virtual environments',
        ],
      },
      {
        title: 'Core Skills',
        points: [
          'File handling, JSON and CSV processing',
          'Databases with SQLite and PostgreSQL',
          'APIs with Flask and FastAPI',
        ],
      },
      {
        title: 'Applied Work',
        points: ['Automation scripting and web scraping', 'NumPy and Pandas for data work'],
      },
      {
        title: 'Live Project & Placement Prep',
        points: [
          'A live client project you keep in your portfolio',
          'Documented internship on real work',
        ],
      },
    ],

    tools: [
      { name: 'Python 3', icon: 'code' },
      { name: 'VS Code', icon: 'terminal' },
      { name: 'Jupyter', icon: 'book' },
      { name: 'Git', icon: 'repeat' },
      { name: 'Pandas', icon: 'chart' },
      { name: 'PostgreSQL', icon: 'database' },
      { name: 'Flask', icon: 'layers' },
      { name: 'FastAPI', icon: 'zap' },
    ],

    salary: {
      role: 'Python Developer',
      blurb: 'Builds backend services, automation scripts and data pipelines in Python.',
      starting: '₹2.2 – 4 LPA',
      after2: '₹4.5 – 8 LPA',
      markets: [
        {
          market: 'Punjab / Tricity',
          fresher: '₹2.2 – 4 LPA',
          experienced: '₹4.5 – 8 LPA',
          scale: 0.4,
        },
        {
          market: 'Delhi NCR',
          fresher: '₹3 – 5.5 LPA',
          experienced: '₹6 – 12 LPA',
          scale: 0.62,
        },
        {
          market: 'Remote / Freelance',
          fresher: '₹3 – 6 LPA',
          experienced: '₹7 – 15 LPA',
          scale: 0.78,
        },
      ],
      hiring: [
        'AI/ML startups and research labs',
        'IT services companies across Tricity',
        'Fintech and analytics firms',
        'Remote backend and automation roles',
      ],
    },

    projects: [
      {
        title: 'Python Fundamentals Build',
        text: 'Your first working piece, applying syntax, data types and control flow and functions, modules and virtual environments end to end rather than as isolated exercises.',
        tags: ['Python 3', 'VS Code'],
      },
      {
        title: 'Real-World Data Challenge',
        text: 'Work with messy, real inputs — file handling, JSON and CSV processing and databases with SQLite and PostgreSQL — and defend the choices you made to a trainer.',
        tags: ['Git', 'Flask'],
      },
      {
        title: 'Live Client Brief',
        text: 'A genuine requirement from techcadd’s delivery pipeline, scoped, built and shipped under supervision. This is the one interviewers ask about.',
        tags: ['Live work', 'Supervised'],
      },
      {
        title: 'Portfolio Capstone',
        text: 'A Python project you specify yourself, covering automation scripting and web scraping and deployment, and present as your final piece.',
        tags: ['FastAPI', 'Presentation'],
      },
    ],

    faqs: [
      {
        q: 'What is the duration of the Python course in Phagwara?',
        a: 'techcadd runs Python over 3 months depending on the track you choose. Weekday, evening and weekend batches cover the same syllabus, and 1-on-1 training is available if you would rather set your own pace. Every class runs for 2 hours, whichever format you choose.',
      },
      {
        q: 'What is the fee for the Python course in Phagwara?',
        a: 'Fees depend on the batch format and whether you take the course on its own or as part of a longer track. Counselling is free and there is no obligation — call the centre and you will get the current figure, the EMI options and any running scholarship in one conversation.',
      },
      {
        q: 'Who can join the Python course?',
        a: 'Anyone from 12th pass onward. No programming background is assumed: the first module starts at syntax and the batch is deliberately mixed, with school leavers, graduates and working professionals in the same room.',
      },
      {
        q: 'What jobs can I get after the Python course?',
        a: 'Graduates move into Python Developer, Automation Engineer, Data Analyst and Backend Developer roles. Python sits under data work, automation and backend services, so it is the first requirement on most analyst and developer listings in the region.',
      },
      {
        q: 'Is placement guaranteed after the Python course?',
        a: 'No honest institute guarantees placement. What we do is run CV reviews, mock interviews and hiring drives repeatedly until you are placed, and keep calling after a rejection rather than closing your file.',
      },
      {
        q: 'Which tools and software will I learn?',
        a: 'Python 3, VS Code and Git throughout, then Jupyter, NumPy and Pandas for data work, SQLite and PostgreSQL for storage, and Flask and FastAPI for APIs. All of them are installed on the lab machines and used on live work.',
      },
      {
        q: 'Will I get a certificate and internship letter?',
        a: 'Yes — two documents. An industry-recognised course certificate, and a separate internship letter based on real client work, which is accepted for university industrial training requirements.',
      },
      {
        q: 'Do you work on real projects or only theory?',
        a: 'Every module ends in something you have built. Four of those are substantial: a fundamentals build, a data challenge, a live client brief from our delivery pipeline, and a capstone you specify yourself.',
      },
      {
        q: 'Are weekend and evening batches available?',
        a: 'Yes. The weekend batch exists specifically for people already working, and evening batches suit students running the course alongside a degree at a Phagwara college.',
      },
    ],
  },
}

/** Rich copy for a slug, or an empty object when none has been written yet. */
export const getCourseContent = (slug: string): CourseContent => courseContent[slug] ?? {}
