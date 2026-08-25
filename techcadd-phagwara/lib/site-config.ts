/**
 * Deployment-level constants. Everything that depends on *where* the site is
 * hosted lives here so metadata, sitemap, robots and JSON-LD stay consistent.
 */

import { brand } from '@/data/site'

/** Canonical origin. Override per-environment with NEXT_PUBLIC_SITE_URL. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.techcadd.com'
).replace(/\/$/, '')

/** The page this app serves. The legacy site lived at /phagwara. */
export const SITE_PATH = '/'

export const SITE_NAME = `${brand.name} ${brand.suffix}`

export const SITE_TITLE =
  'Techcadd Phagwara | AI, Data Science & Full Stack Training Institute'

export const SITE_DESCRIPTION =
  'Techcadd Computer Education Phagwara — industry-led training in Artificial Intelligence, Data Science, Full Stack Development, Digital Marketing and Design. Live AI labs, real projects, internships and 100% placement assistance.'

export const SITE_KEYWORDS = [
  'AI training institute Phagwara',
  'data science course Phagwara',
  'full stack development course',
  'python training Punjab',
  'digital marketing course Phagwara',
  'placement training Punjab',
  'computer institute Phagwara',
  'machine learning course',
]

/**
 * The social card is generated at build time by app/opengraph-image.tsx.
 * Next.js wires the og:image and twitter:image tags automatically from that
 * file convention, so nothing here needs to be passed into `metadata`.
 */
export const OG_IMAGE_SIZE = { width: 1200, height: 630 }

export const OG_IMAGE_ALT = `${SITE_NAME} — AI, Data Science and Full Stack training institute`

/** Absolute URL of the generated card, for JSON-LD. */
export const OG_IMAGE_URL = `${SITE_URL}/opengraph-image`

export const THEME_COLOR = '#2196f3'

/** Section anchors on the single-page app, used to build the sitemap. */
export const SECTION_IDS = [
  'home',
  'about',
  'courses',
  'modes',
  'benefits',
  'labs',
  'journey',
  'placement',
  'certifications',
  'projects',
  'faculty',
  'testimonials',
  'gallery',
  'achievements',
  'faq',
  'contact',
] as const

export type SectionId = (typeof SECTION_IDS)[number]
