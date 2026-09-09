import { permanentRedirect } from 'next/navigation'

import { allAfter12Pages } from '@/data/after12Pages'
import { AFTER12_CONTENT } from '@/data/after12'

/**
 * The old After 12th addresses, kept alive as redirects.
 *
 * These programmes used to live under `/after-12th/<slug>`. They now sit at
 * the site root alongside every other After 12th page, each slug carrying its
 * own `after-12th-` prefix — see `data/after12/index.ts` for why the section
 * moved. The old addresses are indexed and linked from outside, so they answer
 * with a 308 rather than a 404.
 *
 * Why a table rather than string surgery
 * --------------------------------------
 * Most of the new slugs are the old one with the prefix added, but four are
 * not: `ai-and-data-science` became `ai-data-science`, and three others lost an
 * "and-" the same way. Deriving the target would silently 404 exactly those
 * four, so the mapping is written out and checked against the catalogue at
 * import time in development.
 */
const MOVED: Readonly<Record<string, string>> = {
  'digital-marketing-and-communication-course-in-phagwara':
    'after-12th-digital-marketing-communication-course-in-phagwara',
  'python-programming-course-in-phagwara': 'after-12th-python-programming-course-in-phagwara',
  'machine-learning-and-ai-course-in-phagwara':
    'after-12th-machine-learning-ai-course-in-phagwara',
  'cybersecurity-course-in-phagwara': 'after-12th-cybersecurity-course-in-phagwara',
  'generative-ai-course-in-phagwara': 'after-12th-generative-ai-course-in-phagwara',
  'cloud-computing-and-devops-course-in-phagwara':
    'after-12th-cloud-computing-devops-course-in-phagwara',
  'ai-and-data-science-course-in-phagwara': 'after-12th-ai-data-science-course-in-phagwara',
  'machine-learning-and-deep-learning-course-in-phagwara':
    'after-12th-machine-learning-deep-learning-course-in-phagwara',
  'cybersecurity-and-ethical-hacking-course-in-phagwara':
    'after-12th-cybersecurity-ethical-hacking-course-in-phagwara',
  'autocad-course-in-phagwara': 'after-12th-autocad-course-in-phagwara',
  'solidworks-course-in-phagwara': 'after-12th-solidworks-course-in-phagwara',
  '3ds-max-course-in-phagwara': 'after-12th-3ds-max-course-in-phagwara',
  'revit-course-in-phagwara': 'after-12th-revit-course-in-phagwara',
}

/*
  Both halves of the table, checked.

  A redirect pointing at a slug that does not render is a 404 dressed up as a
  301, and an old address left out of the table is a 404 outright. Neither
  fails visibly in production, so both are caught here at import time.
*/
if (process.env.NODE_ENV !== 'production') {
  const live = new Set(AFTER12_CONTENT.map((p) => p.slug))

  const broken = Object.values(MOVED).filter((slug) => !live.has(slug))
  if (broken.length) {
    throw new Error(`After 12th redirects point at slugs with no page: ${broken.join(', ')}`)
  }

  const unmapped = allAfter12Pages.map((p) => p.slug).filter((slug) => !(slug in MOVED))
  if (unmapped.length) {
    throw new Error(`Old After 12th slugs with no redirect: ${unmapped.join(', ')}`)
  }
}

/** One redirect per old address, prerendered like the pages they replaced. */
export function generateStaticParams() {
  return Object.keys(MOVED).map((slug) => ({ slug }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function After12RedirectPage({ params }: PageProps) {
  const { slug } = await params

  /* An unknown slug redirects to the section rather than 404ing: this prefix
     never served anything else, so the homepage's After 12th section is a
     better answer than a dead end. */
  permanentRedirect(MOVED[slug] ? `/${MOVED[slug]}` : '/#journey')
}
