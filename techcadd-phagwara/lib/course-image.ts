import fs from 'node:fs'
import path from 'node:path'

/**
 * Resolves a course's hero artwork from `public/images/course`.
 *
 * The artwork is named for the course as a person would say it — `ML.png`,
 * `SMM.png`, `Web Design.png` — so the mapping to a slug cannot be derived by
 * string surgery and is written out below instead. A course with no entry, or
 * an entry naming a file that is not on disk, falls back to the drawn panel:
 * `CourseHeroArt` remains the default, and a photograph is an upgrade a course
 * either has or does not.
 *
 * The existence check is what makes a stale entry safe. Renaming a file in the
 * folder silently drops that course back to the drawn panel — which is a
 * cosmetic regression someone will notice — rather than shipping a 404 into
 * the largest frame above the fold.
 *
 * Read once, at module load, on the server only: this is imported by the
 * `/[slug]` page, so `fs` never reaches the browser bundle and the
 * twenty-seven pages built in one pass share a single directory listing.
 */

const DIR = path.join(process.cwd(), 'public', 'images', 'course')

/**
 * Course key (the slug without its `-course-in-phagwara` tail) → filename.
 *
 * Nine further images shipped in the same batch — Agentic, Ai_powered_courses,
 * Ai_powered_marketing, ChatGPT, Flutter, Full_Stack, GenAi, Prompt_engineer
 * and RAG — have no course to attach to yet. They are left in the folder,
 * unreferenced, for whenever those tracks launch.
 */
const ARTWORK: Readonly<Record<string, string>> = {
  /* AI & data */
  'artificial-intelligence': 'AI.png',
  'machine-learning': 'ML.png',
  'deep-learning': 'Deep_Learning.png',
  'data-science': 'Data_science.png',
  'data-analytics': 'Data_Analytics.png',
  'power-bi': 'PowerBI.png',
  tableau: 'tableau.png',

  /* Cyber, cloud & systems */
  cybersecurity: 'CyberSecurity.png',
  'ethical-hacking': 'Ethical_Hacking.png',
  'cloud-computing': 'Cloud_Computing.png',
  linux: 'Linux.png',

  /* Marketing */
  'digital-marketing': 'Digital_Marketing.png',
  'social-media-marketing': 'SMM.png',
  'google-ads': 'Google_ADS.png',
  seo: 'SEO.png',
  wordpress: 'Wordpress.png',
  shopify: 'Shopify.png',

  /* Programming & web */
  python: 'Python.png',
  java: 'Java.png',
  c: 'C.png',
  'c-plus-plus': 'C++.png',
  kotlin: 'Kotlin.png',
  'web-designing': 'Web Design.png',
  'web-development': 'Web_development.png',
  'mern-stack': 'MERN.png',
  'mean-stack': 'MEAN.png',
  'php-full-stack': 'PHP.png',
}

/** Filenames actually present, lowercased — the guard against a stale entry. */
const ON_DISK: ReadonlySet<string> = (() => {
  try {
    return new Set(fs.readdirSync(DIR).map((file) => file.toLowerCase()))
  } catch {
    return new Set<string>()
  }
})()

/** The course's short key: `python-course-in-phagwara` → `python`. */
export function courseImageKey(slug: string): string {
  return slug.replace(/-course-in-phagwara$/, '').toLowerCase()
}

/** The public URL of a course's artwork, or `undefined` if it has none. */
export function courseImage(slug: string): string | undefined {
  const file = ARTWORK[courseImageKey(slug)]
  if (!file || !ON_DISK.has(file.toLowerCase())) return undefined

  /* Spaces and `+` are legal in a path segment but not literal in a URL. */
  return `/images/course/${encodeURIComponent(file)}`
}
