/**
 * Puts the Phagwara website's own content into the Phagwara CMS.
 *
 * Why this exists
 * ---------------
 * The website ships its entire catalogue as TypeScript: 51 course and
 * programme pages across `data/coursePages.ts`, `data/internshipPages.ts` and
 * `data/after12Pages.ts`, plus the FAQs, testimonials, headline figures and
 * contact details in `data/site.ts`. Every one of those has a live page or a
 * live section, and none of it could be touched without a developer and a
 * deploy — which is the thing a CMS exists to stop.
 *
 * This reads those files directly, so there is one source of truth for what
 * the catalogue contains rather than a second copy typed into the CMS by hand
 * and drifting from the first. After it runs, the CMS is the editing surface
 * for the whole site: the website prefers the CMS's copy of anything it finds
 * there and falls back to these same files when the API is unreachable, so an
 * edit here reaches the page and an outage does not blank it.
 *
 * Idempotent. Courses are matched on `segment` + `slug` — the pair the site
 * routes by, and the pair the unique key is on. An existing row is left exactly
 * as it is: this seeds what is missing, it never overwrites an editor's work.
 * The same holds for categories (by slug), FAQs (by question), testimonials (by
 * name and quote) and the settings row (only blank fields are filled).
 *
 * Usage
 * -----
 *   cd cms-techcadd/backend
 *   npm run db:import-phagwara
 *
 *   DRY_RUN=1 npm run db:import-phagwara     # report only, write nothing
 *
 * The imports below reach out of this project into the website's checkout.
 * That is deliberate and is the whole point — see the note at the top. Every
 * one of those files' own imports is either relative or `import type`, so tsx
 * erases the `@/` alias rather than having to resolve it.
 */

import { randomUUID } from 'node:crypto'

import { execute, queryOne, pool, type Row } from '../src/db/pool.js'
import { courseCatalog } from '../../../techcadd-phagwara/data/coursePages.js'
import { internshipCatalog } from '../../../techcadd-phagwara/data/internshipPages.js'
import { after12Catalog } from '../../../techcadd-phagwara/data/after12Pages.js'
import {
  brand,
  faqs as siteFaqs,
  statistics,
  socials,
  testimonials as siteTestimonials,
} from '../../../techcadd-phagwara/data/site.js'

const DRY_RUN = process.env.DRY_RUN === '1'

/* ------------------------------------------------------------------ */
/* Shared helpers                                                       */
/* ------------------------------------------------------------------ */

/** Fits text to a column, ending on a character rather than mid-word. */
function fit(text: string, max: number): string {
  const trimmed = text.trim()
  if (trimmed.length <= max) return trimmed
  const cut = trimmed.slice(0, max - 1)
  const lastSpace = cut.lastIndexOf(' ')
  return `${lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut}…`
}

/**
 * The four accents the mega menu paints its columns with, as hex.
 *
 * The website names them; `categories.accent_color` is a CHAR(7), so the value
 * has to arrive resolved. Taken from the same custom properties the menu uses
 * so an editor opening the category sees the colour the column actually is.
 */
const ACCENT_HEX: Record<string, string> = {
  indigo: '#6366f1',
  violet: '#8b5cf6',
  sky: '#0ea5e9',
  emerald: '#10b981',
}

interface Counts {
  created: number
  skipped: number
}

const tally = (): Counts => ({ created: 0, skipped: 0 })

const report = (label: string, counts: Counts): void => {
  console.log(
    `  ${label.padEnd(14)} ${String(counts.created).padStart(3)} created, ` +
      `${counts.skipped} already there`,
  )
}

/* ------------------------------------------------------------------ */
/* Categories                                                           */
/* ------------------------------------------------------------------ */

/**
 * One category per heading in the three catalogues.
 *
 * Matched on slug rather than name: the name is what an editor renames, and
 * matching on it would create a duplicate the first time somebody tidied the
 * wording. Returns the id for every heading, existing or new, so the course
 * import can file each course under its own.
 */
async function importCategories(): Promise<Map<string, string>> {
  const headings: { name: string; slug: string; accent?: string; order: number }[] = []
  let order = 0

  for (const category of courseCatalog) {
    headings.push({ name: category.title, slug: category.key, accent: category.accent, order: order++ })
  }
  for (const category of internshipCatalog) {
    headings.push({ name: category.title, slug: `internship-${category.key}`, order: order++ })
  }
  for (const category of after12Catalog) {
    headings.push({ name: category.title, slug: `after-12th-${category.key}`, order: order++ })
  }

  const byName = new Map<string, string>()
  const counts = tally()

  for (const heading of headings) {
    const existing = await queryOne<Row>('SELECT id FROM categories WHERE slug = ? LIMIT 1', [
      heading.slug,
    ])

    if (existing) {
      byName.set(heading.name, existing.id as string)
      counts.skipped += 1
      continue
    }

    const id = randomUUID()
    byName.set(heading.name, id)
    counts.created += 1

    if (DRY_RUN) continue

    await execute(
      `INSERT INTO categories
         (id, name, slug, accent_color, sort_order, status, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, 'published', NOW(3), NOW(3))`,
      [
        id,
        heading.name,
        heading.slug,
        heading.accent ? (ACCENT_HEX[heading.accent] ?? null) : null,
        heading.order,
      ],
    )
  }

  report('categories', counts)
  return byName
}

/* ------------------------------------------------------------------ */
/* Courses                                                              */
/* ------------------------------------------------------------------ */

/** What every catalogue entry has in common, whichever file it came from. */
interface CatalogEntry {
  slug: string
  label: string
  title: string
  duration: string
  icon: string
  summary: string
  highlights: string[]
}

/**
 * The three catalogues, flattened to (segment, category, entry).
 *
 * `after-12th-courses` rather than the site's `/after-12th` URL prefix: the
 * segment is the CMS's own value and is shared with the other branch CMSes,
 * and the website maps it back to its route. Changing it here to match one
 * site's URL would break the others.
 */
function allCourses(): { segment: string; category: string; entry: CatalogEntry }[] {
  const out: { segment: string; category: string; entry: CatalogEntry }[] = []

  for (const category of courseCatalog) {
    for (const entry of category.courses) out.push({ segment: 'courses', category: category.title, entry })
  }
  for (const category of internshipCatalog) {
    for (const entry of category.programs) {
      out.push({ segment: 'internship-training', category: category.title, entry })
    }
  }
  for (const category of after12Catalog) {
    for (const entry of category.programs) {
      out.push({ segment: 'after-12th-courses', category: category.title, entry })
    }
  }

  return out
}

async function importCourses(categoryIds: Map<string, string>): Promise<void> {
  const counts = tally()

  for (const { segment, category, entry } of allCourses()) {
    const existing = await queryOne<Row>(
      'SELECT id FROM courses WHERE segment = ? AND slug = ? LIMIT 1',
      [segment, entry.slug],
    )

    if (existing) {
      counts.skipped += 1
      continue
    }

    counts.created += 1
    if (DRY_RUN) {
      console.log(`    would create  ${segment}/${entry.slug}`)
      continue
    }

    const id = randomUUID()

    await execute(
      `INSERT INTO courses
         (id, title, h1, slug, segment, icon, category_id, eyebrow,
          short_description, tagline, description, duration,
          careers, tools, hidden_sections, section_order, meta_keywords,
          status, published_at, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
               ?, ?, ?, ?, ?,
               'published', NOW(3), NOW(3), NOW(3))`,
      [
        id,
        // The catalogue's `title` is the page's own <h1> and <title> — the
        // full "Python Course in Phagwara", not the menu's "Python". Both are
        // kept: `title` is what the CMS lists, `h1` is what the page prints.
        fit(entry.title, 200),
        fit(entry.title, 200),
        entry.slug,
        segment,
        entry.icon,
        categoryIds.get(category) ?? null,
        // The course page prints "<category> · <duration>" above the heading.
        fit(category, 80),
        fit(entry.summary, 255),
        fit(entry.summary, 300),
        // Empty on purpose. The page builds its body from the summary and the
        // highlights; generating prose here would look hand-written and invite
        // an editor to rewrite copy that nothing renders.
        '',
        fit(entry.duration, 80),
        JSON.stringify([]),
        JSON.stringify([]),
        JSON.stringify([]),
        JSON.stringify([]),
        JSON.stringify([]),
        /*
          The SEO overrides are left NULL, deliberately.

          Filling them with what the page's <title> and description already are
          looks helpful and is a trap: they are *overrides*, so once set they
          win over the title forever. An editor who then renames the course
          watches the heading change and the browser tab, the search result and
          the social card keep the old name — with nothing on screen explaining
          why, because the SEO field they would have to clear is showing the
          right text.

          The CMS's own SEO card already handles blank properly: it renders the
          live title as the fallback and says "Blank means the page keeps doing
          what it does now."
        */
      ],
    )

    for (const [position, value] of entry.highlights.entries()) {
      await execute(
        'INSERT INTO course_highlights (course_id, value, position) VALUES (?, ?, ?)',
        [id, fit(value, 160), position],
      )
    }

    // The one fact every catalogue entry carries. The site already prints it,
    // so it arrives as an editable row rather than as something only the
    // `duration` column knows.
    await execute(
      `INSERT INTO course_facts (id, course_id, label, value, icon, position)
       VALUES (?, ?, 'Duration', ?, 'clock', 0)`,
      [randomUUID(), id, fit(entry.duration, 120)],
    )
  }

  report('courses', counts)
}

/* ------------------------------------------------------------------ */
/* FAQs                                                                 */
/* ------------------------------------------------------------------ */

/**
 * The homepage's questions, under one heading.
 *
 * `faqs.category_id` is NOT NULL, so a category has to exist first. One rather
 * than a guessed taxonomy: the website renders a single flat accordion, and
 * inventing "Fees" and "Placement" headings would put a structure on the page
 * that the page does not have.
 */
async function importFaqs(): Promise<void> {
  const counts = tally()

  let categoryId = (
    await queryOne<Row>('SELECT id FROM faq_categories WHERE slug = ? LIMIT 1', ['general'])
  )?.id as string | undefined

  if (!categoryId) {
    categoryId = randomUUID()
    if (!DRY_RUN) {
      await execute(
        `INSERT INTO faq_categories (id, name, slug, description, sort_order, active, created_at, updated_at)
         VALUES (?, 'General', 'general', ?, 0, 1, NOW(3), NOW(3))`,
        [categoryId, 'The questions the homepage FAQ section answers.'],
      )
    }
  }

  for (const [index, faq] of siteFaqs.entries()) {
    const existing = await queryOne<Row>('SELECT id FROM faqs WHERE question = ? LIMIT 1', [faq.q])

    if (existing) {
      counts.skipped += 1
      continue
    }

    counts.created += 1
    if (DRY_RUN) continue

    await execute(
      `INSERT INTO faqs (id, question, answer, category_id, sort_order, featured, status, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, 1, 'published', NOW(3), NOW(3))`,
      [randomUUID(), fit(faq.q, 300), faq.a, categoryId, index],
    )
  }

  report('faqs', counts)
}

/* ------------------------------------------------------------------ */
/* Testimonials                                                         */
/* ------------------------------------------------------------------ */

/**
 * The reviews carousel.
 *
 * The website's `role` ("AI Engineer at Cognizant") has no column of its own
 * and is not a batch, but it is the line printed under every name, so it goes
 * into `batch` — which is the field the site reads back for that line. Named
 * for what it usually holds rather than for this, but a second column carrying
 * the same one line would be worse.
 */
async function importTestimonials(): Promise<void> {
  const counts = tally()

  for (const testimonial of siteTestimonials) {
    const existing = await queryOne<Row>(
      'SELECT id FROM testimonials WHERE student_name = ? AND quote = ? LIMIT 1',
      [testimonial.name, fit(testimonial.quote, 500)],
    )

    if (existing) {
      counts.skipped += 1
      continue
    }

    counts.created += 1
    if (DRY_RUN) continue

    await execute(
      `INSERT INTO testimonials
         (id, student_name, batch, rating, quote, video_url, featured, status, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, 'published', NOW(3), NOW(3))`,
      [
        randomUUID(),
        fit(testimonial.name, 120),
        fit(testimonial.role, 60),
        testimonial.rating,
        fit(testimonial.quote, 500),
        // The site marks a few as video reviews but has no URL for any of them:
        // the button opens nothing today. Left null rather than invented, so
        // the site keeps its current behaviour until someone pastes a real one.
        null,
        testimonial.video ? 1 : 0,
      ],
    )
  }

  report('testimonials', counts)
}

/* ------------------------------------------------------------------ */
/* Settings                                                             */
/* ------------------------------------------------------------------ */

/**
 * Brand, contact details, socials and the headline figures.
 *
 * The only importer that touches an existing row, because settings is a
 * singleton created by migration 009 rather than something an editor adds. It
 * still refuses to overwrite: every field is written only where the current
 * value is blank, so running this after someone has corrected the phone number
 * does not put the placeholder back.
 */
async function importSettings(): Promise<void> {
  const current = await queryOne<Row>('SELECT * FROM settings WHERE id = 1 LIMIT 1')

  if (!current) {
    console.log('  settings       no row — run npm run db:migrate first')
    return
  }

  const parse = <T,>(value: unknown, fallback: T): T => {
    if (value === null || value === undefined) return fallback
    if (typeof value !== 'string') return value as T
    try {
      return JSON.parse(value) as T
    } catch {
      return fallback
    }
  }

  /**
   * Treats the schema's own placeholder as unset.
   *
   * Migration 009 seeds `site_name` as 'TechCADD' so the column's NOT NULL has
   * something to hold — it is the migration's placeholder, not a decision
   * anyone made, and leaving it would have this branch's CMS calling itself by
   * the group's name. Anything else, including a 'TechCADD' someone typed back
   * in deliberately, is left alone on the next run.
   */
  const PLACEHOLDERS = new Set(['TechCADD'])

  const blank = (value: unknown) =>
    value === null ||
    value === undefined ||
    value === '' ||
    (typeof value === 'string' && PLACEHOLDERS.has(value))

  const existingStats = parse<{ value: string; label: string }[]>(current.stats, [])
  const existingSocial = parse<Record<string, string>>(current.social, {})

  const updates: { column: string; value: unknown }[] = []
  const set = (column: string, value: unknown) => {
    if (blank(current[column])) updates.push({ column, value })
  }

  set('site_name', `${brand.name} ${brand.suffix}`)
  set('tagline', brand.tagline)
  set('contact_email', brand.email)
  set('contact_phone', brand.phone)
  set('address', brand.address)

  if (existingStats.length === 0) {
    updates.push({
      column: 'stats',
      // The site prints "18,500+" from a number and a suffix; the CMS stores
      // one string, so they are joined here the way the counter renders them.
      value: JSON.stringify(
        statistics.map((stat) => ({
          value: `${stat.decimals ? stat.value.toFixed(stat.decimals) : stat.value.toLocaleString('en-IN')}${stat.suffix}`,
          label: stat.label,
        })),
      ),
    })
  }

  if (Object.keys(existingSocial).length === 0) {
    // The site's icon names are the CMS's keys for all but one — its "twitter"
    // glyph is the network the settings form calls "x".
    const keyFor = (key: string) => (key === 'twitter' ? 'x' : key)
    const links = Object.fromEntries(
      socials
        .filter((social) => social.href && social.href !== '#')
        .map((social) => [keyFor(social.key), social.href]),
    )

    /*
      Every one of the site's five social hrefs is '#' — the footer and the
      contact panel have been rendering placeholder links since the site was
      built. There is nothing to import, so nothing is written: an empty object
      is not blank to the check above, and writing one made this report
      "1 filled (social)" on every run forever after.

      Filling them in is now a Settings edit rather than a code change, which
      is the point.
    */
    if (Object.keys(links).length > 0) {
      updates.push({ column: 'social', value: JSON.stringify(links) })
    }
  }

  const integrations = parse<Record<string, unknown>>(current.integrations, {})
  if (!integrations.whatsappNumber) {
    updates.push({
      column: 'integrations',
      value: JSON.stringify({ ...integrations, whatsappNumber: brand.whatsapp }),
    })
  }

  if (updates.length === 0) {
    console.log('  settings         0 filled, all already set')
    return
  }

  if (!DRY_RUN) {
    await execute(
      `UPDATE settings SET ${updates.map((u) => `${u.column} = ?`).join(', ')}, updated_at = NOW(3)
        WHERE id = 1`,
      updates.map((u) => u.value),
    )
  }

  console.log(
    `  settings       ${String(updates.length).padStart(3)} filled ` +
      `(${updates.map((u) => u.column).join(', ')})`,
  )
}

/* ------------------------------------------------------------------ */

async function main(): Promise<void> {
  console.log(`\n${DRY_RUN ? '[dry run] ' : ''}Importing the Phagwara site's content\n`)

  const categoryIds = await importCategories()
  await importCourses(categoryIds)
  await importFaqs()
  await importTestimonials()
  await importSettings()

  console.log(
    '\nThe gallery is not imported: the website renders generated gradient tiles ' +
      'because it has no campus photographs yet, and the CMS stores a gallery as ' +
      'real files in the media library. Upload them in Gallery and the site uses ' +
      'them in place of the gradients.\n',
  )

  await pool.end()
}

await main()
