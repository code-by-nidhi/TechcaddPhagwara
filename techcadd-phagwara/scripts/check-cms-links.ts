/**
 * Does every hand-picked slug on this site still point at a real course?
 *
 * Two sections name courses explicitly rather than taking whatever the
 * catalogue returns first, because which courses to lead with is an editorial
 * decision: the homepage carousel's ten, and the category ring's eight. That
 * was safe while the catalogue was a TypeScript file next to them. It is not
 * safe now — a course can be unpublished in the CMS, and a card that outlives
 * its page is a confident description linking to a 404.
 *
 * Both components already degrade at runtime (the carousel drops a missing
 * card and backfills; the ring closes up around one). This is how someone
 * finds out *before* a visitor does.
 *
 * Run: npm run check:cms                      — against the bundled catalogue
 *      CMS_API_URL=... npm run check:cms      — and against the live CMS
 *
 * Exits non-zero only when a slug is missing from the bundled catalogue, which
 * is a code-level mistake. A slug missing only from the CMS is reported and
 * tolerated: it means somebody unpublished a course, which is their right, and
 * failing a build over it would be the site refusing an editorial decision.
 */
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

import { courseCatalog } from '../data/coursePages'

/*
  The site's package.json has no `"type": "module"`, so tsx compiles this to
  CommonJS — where top-level `await` is a syntax error and `import.meta` does
  not exist. Both are worked around here rather than fixed by adding the field,
  which would change how every other file in the project is loaded in order to
  make one check script tidier. Hence `__dirname` and the `main()` at the end.
*/
const ROOT = join(__dirname, '..')

/** Every `slug: '...'` in a component — how both lists happen to be written. */
function slugsIn(relativePath: string): string[] {
  const source = readFileSync(join(ROOT, relativePath), 'utf8')
  return [...source.matchAll(/slug: '([^']+)'/g)].map((match) => match[1]!)
}

const SOURCES = [
  { label: 'CourseCarousel', path: 'components/sections/CourseCarousel.tsx' },
  { label: 'CategoryArc', path: 'components/sections/CategoryArc.tsx' },
]

const CMS_API_URL = (process.env.CMS_API_URL ?? '').replace(/\/+$/, '')

async function main(): Promise<void> {
  let failed = false

  /* ---------------------------------------------------------------- */
  /* Against the bundled catalogue — the fallback the site ships with  */
  /* ---------------------------------------------------------------- */

  const bundled = new Set(courseCatalog.flatMap((group) => group.courses.map((c) => c.slug)))

  for (const source of SOURCES) {
    const wanted = slugsIn(source.path)
    const missing = wanted.filter((slug) => !bundled.has(slug))

    if (missing.length === 0) {
      console.log(`PASS  ${source.label}: all ${wanted.length} slugs are in data/coursePages.ts`)
    } else {
      failed = true
      console.log(`FAIL  ${source.label}: ${missing.length} of ${wanted.length} slugs do not exist`)
      for (const slug of missing) console.log(`        ${slug}`)
    }
  }

  /* ---------------------------------------------------------------- */
  /* Against the live CMS, when one is configured                      */
  /* ---------------------------------------------------------------- */

  if (!CMS_API_URL) {
    console.log('\nSKIP  no CMS_API_URL set — checked against the bundled catalogue only.')
    if (failed) process.exitCode = 1
    return
  }

  try {
    const response = await fetch(`${CMS_API_URL}/public/courses?limit=100`)
    if (!response.ok) throw new Error(`responded ${response.status}`)

    const body = (await response.json()) as {
      items: { slug: string; segment: string; categoryName?: string }[]
    }

    const live = new Set(
      body.items.filter((course) => course.segment === 'courses').map((course) => course.slug),
    )

    console.log(`\n${live.size} published courses in the CMS's "courses" section.`)

    for (const source of SOURCES) {
      const missing = slugsIn(source.path).filter((slug) => !live.has(slug))
      if (missing.length === 0) {
        console.log(`PASS  ${source.label}: every slug is published in the CMS`)
      } else {
        console.log(
          `WARN  ${source.label}: ${missing.length} slug(s) are not published in the CMS — ` +
            'the card is dropped at runtime, but the list should be updated:',
        )
        for (const slug of missing) console.log(`        ${slug}`)
      }
    }

    /*
      A course whose category was deleted lands under a fallback heading in the
      menus. Worth naming: it is invisible in the CMS and visible on the site,
      which is the wrong way round.
    */
    const uncategorised = body.items.filter((course) => !course.categoryName)
    if (uncategorised.length > 0) {
      console.log(
        `\nWARN  ${uncategorised.length} published course(s) have no category and are filed ` +
          'under "Courses" in the menus:',
      )
      for (const course of uncategorised) console.log(`        ${course.segment}/${course.slug}`)
    }
  } catch (error) {
    console.log(
      `\nSKIP  could not reach ${CMS_API_URL} ` +
        `(${error instanceof Error ? error.message : String(error)}).`,
    )
  }

  if (failed) process.exitCode = 1
}

void main()
