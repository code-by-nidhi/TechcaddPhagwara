/**
 * What the pages actually call.
 *
 * Each function here answers one question a page or a section asks — "what are
 * the courses?", "what does the FAQ say?", "what is the phone number?" — and
 * answers it in the *site's own* shapes, the ones already declared in
 * `data/site.ts` and `data/coursePages.ts`. Nothing downstream learns a CMS
 * type, which is what keeps the components unchanged apart from taking their
 * content as a prop instead of importing it.
 *
 * The fallback contract
 * ---------------------
 * Every resolver ends with the bundled data. `cmsGet` returns `null` for any
 * failure, and an empty list is treated the same as `null`: a CMS that answers
 * with zero courses is far more likely to be a fresh database than an editor
 * who deleted the entire catalogue, and blanking the site on that guess is not
 * a trade worth making.
 *
 * Where the CMS does answer, it answers wholesale rather than per-record. If
 * the CMS knows about courses, its list *is* the catalogue — otherwise deleting
 * a course in the CMS would leave it on the site forever, resurrected from the
 * bundled copy, which is the most confusing possible outcome of a delete.
 */

import { cmsGet, cmsList, mediaUrl, CMS_TAGS } from './client'
import { coursePath } from './segments'
import type {
  CmsBlog,
  CmsCategory,
  CmsCourse,
  CmsEvent,
  CmsFaq,
  CmsGalleryAlbum,
  CmsNavPage,
  CmsPage,
  CmsRedirect,
  CmsSegment,
  CmsSiteSettings,
  CmsTestimonial,
} from './types'

import { iconRegistry, type IconName } from '@/components/ui/Icon'
import {
  brand as staticBrand,
  faqs as staticFaqs,
  gallery as staticGallery,
  placementStats as staticPlacementStats,
  socials as staticSocials,
  testimonials as staticTestimonials,
  type Brand,
  type Faq,
  type GalleryShot,
  type Social,
  type Stat,
  type Testimonial,
} from '@/data/site'
import {
  courseCatalog as staticCourseCatalog,
  type CourseMenuCategory,
  type CoursePage,
} from '@/data/coursePages'
import {
  internshipCatalog as staticInternshipCatalog,
  type ProgramCategory,
} from '@/data/internshipPages'
import { after12Catalog as staticAfter12Catalog } from '@/data/after12Pages'

/* ------------------------------------------------------------------ */
/* Small shared conversions                                             */
/* ------------------------------------------------------------------ */

const nonEmpty = <T,>(list: T[] | null | undefined): list is T[] =>
  Array.isArray(list) && list.length > 0

/**
 * A CMS icon name, checked against the registry that actually has to draw it.
 *
 * The CMS stores free text — deliberately, since the glyph list lives here and
 * a copy over there would go stale (see migration 046). So a typo, or a name
 * borrowed from another branch's icon set, reaches this function. Falling back
 * keeps a card drawn rather than crashing the render on `REGISTRY[name]`.
 */
function toIconName(name: string | undefined, fallback: IconName): IconName {
  return name && name in iconRegistry ? (name as IconName) : fallback
}

/** Which glyph a course gets when nothing has been chosen for it. */
const CATEGORY_ICON_FALLBACK: Record<string, IconName> = {
  programming: 'code',
  'ai-data': 'brain',
  'digital-marketing': 'megaphone',
  'cyber-cloud': 'shield',
}

/**
 * "18,500+" back into the number and suffix the counter animates.
 *
 * The CMS stores a headline figure as one string because the suffix carries as
 * much meaning as the digits ("97%", "15 Yrs"). The site's `Counter` needs them
 * apart so it can count up to the number — printing the string whole would
 * silently drop the animation from four stats that have always had it.
 *
 * A value with no digits at all returns null and the caller keeps its bundled
 * stat, rather than rendering a counter that counts to zero.
 */
function parseStat(value: string, label: string): Stat | null {
  const match = value.match(/-?[\d,]*\.?\d+/)
  if (!match) return null

  const numeric = Number(match[0].replace(/,/g, ''))
  if (!Number.isFinite(numeric)) return null

  const decimals = match[0].includes('.') ? (match[0].split('.')[1]?.length ?? 0) : 0

  return {
    value: numeric,
    suffix: value.slice((match.index ?? 0) + match[0].length),
    label,
    ...(decimals > 0 ? { decimals } : {}),
  }
}

/** "Priya Sharma" → "PS". The avatar circles print initials, not photographs. */
function initialsOf(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('')
}

/* ------------------------------------------------------------------ */
/* Courses                                                              */
/* ------------------------------------------------------------------ */

/** Every published course in one segment, or null if the CMS has none. */
async function coursesIn(segment: CmsSegment): Promise<CmsCourse[] | null> {
  const all = await cmsList<CmsCourse>('/public/courses', {
    tag: CMS_TAGS.courses,
    // 46 courses shipped; the API caps a page at 100. One request rather than
    // paging, because the menus need the whole catalogue to draw at all.
    limit: 100,
  })

  if (!nonEmpty(all)) return null

  const mine = all.filter((course) => course.segment === segment)
  return mine.length > 0 ? mine : null
}

/** One CMS course as the site's own catalogue entry. */
function toCoursePage(course: CmsCourse, categoryKey: string): CoursePage {
  return {
    slug: course.slug,
    // The menu's short label. The CMS has one title, which the importer filled
    // with the page heading ("Python Course in Phagwara"), so the location
    // suffix is trimmed back off for the menu rather than making every column
    // six words wide.
    label: course.title.replace(/\s+(course|training|program(me)?)\s+in\s+.+$/i, '').trim() || course.title,
    title: course.h1?.trim() || course.title,
    duration: course.duration ?? '',
    icon: toIconName(course.icon, CATEGORY_ICON_FALLBACK[categoryKey] ?? 'code'),
    summary: course.tagline?.trim() || course.shortDescription,
    highlights: course.highlights ?? [],
  }
}

/**
 * Courses grouped under their category headings, in the CMS's own order.
 *
 * The grouping key is the category *name* the API joins in, not the id: a
 * course whose category was deleted arrives with neither, and dropping it would
 * quietly remove a live page from every menu. Those land under "Courses"
 * instead, which is visible and fixable rather than invisible.
 */
function groupByCategory(
  courses: CmsCourse[],
  categories: CmsCategory[] | null,
): CourseMenuCategory[] {
  const order = new Map((categories ?? []).map((c, i) => [c.name, c.order ?? i]))
  const accent = new Map((categories ?? []).map((c) => [c.name, c.accentColor]))
  const keyOf = new Map((categories ?? []).map((c) => [c.name, c.slug]))

  const ACCENTS: CourseMenuCategory['accent'][] = ['indigo', 'sky', 'violet', 'emerald']
  /** Hex back to the four names the mega menu's CSS understands. */
  const ACCENT_NAME: Record<string, CourseMenuCategory['accent']> = {
    '#6366f1': 'indigo',
    '#0ea5e9': 'sky',
    '#8b5cf6': 'violet',
    '#10b981': 'emerald',
  }

  const groups = new Map<string, CmsCourse[]>()
  for (const course of courses) {
    const name = course.categoryName?.trim() || 'Courses'
    groups.set(name, [...(groups.get(name) ?? []), course])
  }

  return [...groups.entries()]
    .sort((a, b) => (order.get(a[0]) ?? 999) - (order.get(b[0]) ?? 999))
    .map(([name, list], index) => {
      const key = keyOf.get(name) ?? name.toLowerCase().replace(/[^a-z0-9]+/g, '-')
      return {
        key,
        title: name,
        accent:
          ACCENT_NAME[(accent.get(name) ?? '').toLowerCase()] ??
          ACCENTS[index % ACCENTS.length] ??
          'indigo',
        courses: list.map((course) => toCoursePage(course, key)),
      }
    })
}

/** The Courses mega menu and the `/[slug]` catalogue. */
export async function getCourseCatalog(): Promise<CourseMenuCategory[]> {
  const courses = await coursesIn('courses')
  if (!courses) return staticCourseCatalog

  const categories = await cmsList<CmsCategory>('/public/categories', {
    tag: CMS_TAGS.categories,
    limit: 100,
  })

  return groupByCategory(courses, categories)
}

/**
 * The two programme catalogues.
 *
 * Same shape as the course catalogue minus the accent, which only the four-column
 * mega menu paints — the Internship and After 12th dropdowns are plain lists.
 */
async function getProgramCatalog(
  segment: CmsSegment,
  fallback: ProgramCategory[],
): Promise<ProgramCategory[]> {
  const courses = await coursesIn(segment)
  if (!courses) return fallback

  const categories = await cmsList<CmsCategory>('/public/categories', {
    tag: CMS_TAGS.categories,
    limit: 100,
  })

  return groupByCategory(courses, categories).map((group) => ({
    key: group.key,
    title: group.title,
    programs: group.courses,
  }))
}

export const getInternshipCatalog = (): Promise<ProgramCategory[]> =>
  getProgramCatalog('internship-training', staticInternshipCatalog)

export const getAfter12Catalog = (): Promise<ProgramCategory[]> =>
  getProgramCatalog('after-12th-courses', staticAfter12Catalog)

/** One resolved course page, with the category it sits under and its siblings. */
export interface ResolvedCourse {
  page: CoursePage
  categoryTitle: string
  related: CoursePage[]
  /** Straight from the CMS, for the fields the bundled shape has no room for. */
  cms?: CmsCourse
}

/**
 * A single course, from the CMS if it has one and from the bundled catalogue
 * otherwise.
 *
 * Looked up by `(segment, slug)`, the pair the CMS's unique key is on: the same
 * slug legitimately exists in two segments — `cybersecurity-course-in-phagwara`
 * is both a course and an after-12th programme — and matching on the slug alone
 * would serve whichever the database happened to return first.
 */
export async function getCourse(
  segment: CmsSegment,
  slug: string,
): Promise<ResolvedCourse | null> {
  const catalog =
    segment === 'courses'
      ? await getCourseCatalog()
      : segment === 'internship-training'
        ? (await getInternshipCatalog()).map((c) => ({ ...c, courses: c.programs }))
        : (await getAfter12Catalog()).map((c) => ({ ...c, courses: c.programs }))

  const category = catalog.find((cat) => cat.courses.some((c) => c.slug === slug))
  const page = category?.courses.find((c) => c.slug === slug)
  if (!category || !page) return null

  /*
    The detail endpoint, not the list one.

    `/public/courses` returns every course with its children, which is what the
    menus need; a single course's page also wants the fields the list has
    already loaded. Fetching it again by slug costs one request and gets the
    same record — worth it, because this is the only call that 404s honestly
    when a course was unpublished between the menu being cached and the page
    being opened.
  */
  const detail = await cmsGet<CmsCourse>(`/public/courses/${encodeURIComponent(slug)}`, {
    tag: CMS_TAGS.courses,
  })

  return {
    page,
    categoryTitle: category.title,
    related: category.courses.filter((c) => c.slug !== slug),
    ...(detail && detail.segment === segment ? { cms: detail } : {}),
  }
}

/** Every course page's path, for the sitemap and `generateStaticParams`. */
export async function getAllCoursePaths(): Promise<
  { segment: CmsSegment; slug: string; path: string }[]
> {
  const [courses, internships, after12] = await Promise.all([
    getCourseCatalog(),
    getInternshipCatalog(),
    getAfter12Catalog(),
  ])

  // Paired explicitly rather than by array position: the three catalogues have
  // three different element shapes, and a positional pairing would keep
  // typechecking while labelling every path with the wrong segment.
  const catalogs: [CmsSegment, CoursePage[]][] = [
    ['courses', courses.flatMap((g) => g.courses)],
    ['internship-training', internships.flatMap((g) => g.programs)],
    ['after-12th-courses', after12.flatMap((g) => g.programs)],
  ]

  return catalogs.flatMap(([segment, pages]) =>
    pages.map((course) => ({
      segment,
      slug: course.slug,
      path: coursePath(segment, course.slug),
    })),
  )
}

/* ------------------------------------------------------------------ */
/* Homepage sections                                                    */
/* ------------------------------------------------------------------ */

export async function getFaqs(): Promise<Faq[]> {
  const items = await cmsList<CmsFaq>('/public/faqs', { tag: CMS_TAGS.faqs, limit: 100 })
  if (!nonEmpty(items)) return staticFaqs

  return items.map((faq) => ({ q: faq.question, a: faq.answer }))
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const items = await cmsList<CmsTestimonial>('/public/testimonials', {
    tag: CMS_TAGS.testimonials,
    limit: 50,
  })
  if (!nonEmpty(items)) return staticTestimonials

  return items.map((item) => ({
    name: item.studentName,
    // The importer files the site's "AI Engineer at Cognizant" line here; a
    // testimonial added in the CMS may genuinely be a batch. Either way it is
    // the one line printed under the name.
    role: item.batch ?? '',
    initials: initialsOf(item.studentName),
    // The card draws one star per unit and the column is a TINYINT, so a value
    // outside 1–5 would render an empty or a runaway row.
    rating: Math.max(1, Math.min(5, Math.round(item.rating))),
    ...(item.videoUrl ? { video: true } : {}),
    quote: item.quote,
  }))
}

/**
 * The campus gallery.
 *
 * The bundled tiles have no photographs — they render a generated gradient,
 * which is why each carries a `hue`. A CMS album has real files, so the hue is
 * still assigned (the tile's CSS reads it for the caption's tint) but `src`
 * arrives set and the tile renders `next/image` instead. Both paths already
 * exist in the component; this only decides which one it takes.
 */
export async function getGallery(): Promise<GalleryShot[]> {
  const albums = await cmsList<CmsGalleryAlbum>('/public/gallery', {
    tag: CMS_TAGS.gallery,
    limit: 50,
  })
  if (!nonEmpty(albums)) return staticGallery

  const shots: GalleryShot[] = []

  for (const album of albums) {
    for (const image of album.images ?? []) {
      // A media row with no usable URL is skipped rather than rendered: an
      // <Image> with an empty src throws in Next rather than degrading.
      const src = mediaUrl(image.media?.url)
      if (!src) continue

      shots.push({
        title: image.caption?.trim() || album.title,
        tag: album.title,
        // Spread around the wheel so neighbouring tiles do not tint alike.
        hue: (shots.length * 47) % 360,
        src,
        alt: image.media.alt || image.caption || album.title,
      })
    }
  }

  return shots.length > 0 ? shots : staticGallery
}

/** Brand and contact details, with the CMS's settings layered over. */
export async function getBrand(): Promise<Brand> {
  const settings = await cmsGet<CmsSiteSettings>('/public/site', { tag: CMS_TAGS.site })
  if (!settings) return staticBrand

  const phone = settings.contactPhone?.trim()
  const digits = phone?.replace(/\D/g, '')

  return {
    ...staticBrand,
    ...(settings.tagline?.trim() ? { tagline: settings.tagline.trim() } : {}),
    ...(phone ? { phone, phoneHref: `tel:${phone.replace(/[^\d+]/g, '')}` } : {}),
    // The WhatsApp link wants bare digits with the country code. Derived from
    // the phone number rather than left at the bundled value, which would have
    // an edited number on the page and the old one behind the button.
    ...(digits && digits.length >= 10
      ? { whatsapp: digits.length === 10 ? `91${digits}` : digits }
      : {}),
    ...(settings.contactEmail?.trim() ? { email: settings.contactEmail.trim() } : {}),
    ...(settings.address?.trim()
      ? {
          address: settings.address.trim(),
          // The map is an embed of whatever address is set, so an edited
          // address that still pointed the map at the old one would be worse
          // than not moving it at all.
          mapEmbed: `https://www.google.com/maps?q=${encodeURIComponent(settings.address.trim())}&output=embed`,
        }
      : {}),
  }
}

/**
 * The placement counters.
 *
 * The CMS keeps one list of headline figures for the whole site. Only those it
 * can parse a number out of are used, and only if at least one survives —
 * a stat that cannot animate is worse than the bundled one that can.
 */
export async function getPlacementStats(): Promise<Stat[]> {
  const settings = await cmsGet<CmsSiteSettings>('/public/site', { tag: CMS_TAGS.site })
  if (!settings || !nonEmpty(settings.stats)) return staticPlacementStats

  const parsed = settings.stats
    .map((stat) => parseStat(stat.value, stat.label))
    .filter((stat): stat is Stat => stat !== null)
    // The row is laid out for four; more wraps into a ragged second line.
    .slice(0, staticPlacementStats.length)

  return parsed.length > 0 ? parsed : staticPlacementStats
}

/**
 * The social links in the footer and the contact panel.
 *
 * Every bundled href is `#` — they have been placeholders since the site was
 * built. A network the CMS has no address for is dropped rather than rendered
 * as a link to nowhere, so filling one in makes an icon appear.
 */
export async function getSocials(): Promise<Social[]> {
  const settings = await cmsGet<CmsSiteSettings>('/public/site', { tag: CMS_TAGS.site })
  const configured = Object.entries(settings?.social ?? {}).filter(([, href]) => href?.trim())

  if (configured.length === 0) return staticSocials

  // The settings form calls it "x"; this site's icon registry calls it twitter.
  const iconFor = (key: string): IconName => toIconName(key === 'x' ? 'twitter' : key, 'arrowUp')
  const NAMES: Record<string, string> = {
    facebook: 'Facebook',
    instagram: 'Instagram',
    linkedin: 'LinkedIn',
    youtube: 'YouTube',
    x: 'X',
    github: 'GitHub',
    website: 'Website',
  }

  return configured.map(([key, href]) => ({
    name: NAMES[key] ?? key,
    key: iconFor(key),
    href: href.trim(),
  }))
}

/* ------------------------------------------------------------------ */
/* Pages, navigation, blog and events                                   */
/* ------------------------------------------------------------------ */

/** Pages an editor asked to be linked from the site's own menus. */
export async function getNavPages(): Promise<CmsNavPage[]> {
  const result = await cmsGet<{ items: CmsNavPage[] }>('/public/nav-pages', {
    tag: CMS_TAGS.navPages,
  })
  return result?.items ?? []
}

export const getPage = (slug: string): Promise<CmsPage | null> =>
  cmsGet<CmsPage>(`/public/pages/${encodeURIComponent(slug)}`, { tag: CMS_TAGS.pages })

export const getBlogs = (limit = 50): Promise<CmsBlog[] | null> =>
  cmsList<CmsBlog>('/public/blogs', { tag: CMS_TAGS.blogs, limit })

/**
 * The same lists, read past the cache.
 *
 * Only for `generateStaticParams`, which decides what gets baked into a
 * deployment. Reading those through the cache means a build can prerender a
 * page for a post that was deleted before it started — the build's fetch cache
 * still holds the list that mentioned it, so the page is generated, shipped,
 * and served from then on as static HTML that nothing will re-check until its
 * revalidate window expires.
 *
 * It costs one uncached request per build, and it is the one place where
 * "slightly stale is fine" is not true.
 */
export const getBlogSlugs = (): Promise<CmsBlog[] | null> =>
  cmsList<CmsBlog>('/public/blogs', { tag: CMS_TAGS.blogs, limit: 200, revalidate: 0 })

export const getEventSlugs = (): Promise<CmsEvent[] | null> =>
  cmsList<CmsEvent>('/public/events', { tag: CMS_TAGS.events, limit: 200, revalidate: 0 })

export const getBlog = (slug: string): Promise<CmsBlog | null> =>
  cmsGet<CmsBlog>(`/public/blogs/${encodeURIComponent(slug)}`, { tag: CMS_TAGS.blogs })

export const getEvents = (limit = 100): Promise<CmsEvent[] | null> =>
  cmsList<CmsEvent>('/public/events', { tag: CMS_TAGS.events, limit })

export const getEvent = (slug: string): Promise<CmsEvent | null> =>
  cmsGet<CmsEvent>(`/public/events/${encodeURIComponent(slug)}`, { tag: CMS_TAGS.events })

export async function getRedirects(): Promise<CmsRedirect[]> {
  const result = await cmsGet<{ items: CmsRedirect[] }>('/public/redirects', {
    tag: CMS_TAGS.redirects,
  })
  return result?.items ?? []
}
