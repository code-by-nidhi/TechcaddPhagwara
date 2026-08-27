/**
 * Where each kind of content ends up on the public website.
 *
 * An editor filling in a form cannot tell, from the form alone, whether they
 * are writing something that appears on the homepage, on a page of its own, or
 * nowhere at all until a developer wires it up. That gap is where "I saved it
 * and nothing happened" comes from, so it is answered here in one place and
 * shown on every form.
 *
 * Keeping it as data rather than prose in each form means a module that is not
 * yet connected has to say so explicitly, instead of quietly omitting the note.
 */

/** The public site. Set VITE_SITE_URL when it is not on the usual dev port. */
export const SITE_URL = (
  (import.meta.env.VITE_SITE_URL as string | undefined) ?? 'http://localhost:3000'
).replace(/\/$/, '')

export interface Placement {
  /** Where this content shows up, in a sentence an editor can act on. */
  where: string
  /**
   * The public URL of one record, when it has a page of its own.
   *
   * Undefined means the content appears inside other pages rather than at its
   * own address — a testimonial has no URL, a blog post does.
   */
  url?: (record: Record<string, unknown>) => string | undefined
  /**
   * Set when nothing on the website reads this yet.
   *
   * The honest alternative to leaving the module out of this map, which would
   * read as "no note needed" rather than "this goes nowhere".
   */
  notLive?: string
}

const slugUrl = (prefix: string) => (record: Record<string, unknown>) => {
  const slug = record.slug
  return typeof slug === 'string' && slug ? `${SITE_URL}${prefix}${slug}` : undefined
}

/**
 * Where a CMS course actually lives on this site.
 *
 * Not `/<segment>/<slug>`. The Phagwara site serves its course pages from the
 * root — `/python-course-in-phagwara` — because that is what its menus, its
 * carousel and every indexed URL point at, and it files after-12th programmes
 * under `/after-12th/`, not under the segment's own name. Building the link
 * from the segment string produced a "View on site" that 404'd for every
 * course in the catalogue.
 *
 * The site's own copy of this mapping is `lib/cms/segments.ts`. The two have to
 * agree; they are separate because the apps do not share a module graph.
 */
const COURSE_PREFIX: Record<string, string> = {
  courses: '',
  'internship-training': '/internship-training',
  'after-12th-courses': '/after-12th',
}

/**
 * The address a record will have, written the way a person says it.
 *
 * The slug field and the Google preview both print a prefix so an editor can
 * see the URL they are creating. Those prefixes were typed into each form by
 * hand and named the *Jalandhar* site's routes — `techcadd.com/blog/` where
 * this site serves `/blogs/`, `techcadd.com/courses/<slug>` where this site
 * serves courses from the root, and `/gallery/` and `/courses/category/` for
 * two things that have no page here at all.
 *
 * A wrong URL under a slug field is worse than no URL: it is the one place an
 * editor looks to check the address, and it was confidently showing a 404.
 *
 * Derived from SITE_URL so it follows the deployment, and defined beside the
 * `url()` builders above so the two cannot drift.
 */
const displayHost = SITE_URL.replace(/^https?:\/\//, '')

/** The prefix for a course, which depends on the section it is filed under. */
export function coursePathPrefix(segment: unknown): string {
  const prefix = COURSE_PREFIX[typeof segment === 'string' ? segment : 'courses'] ?? ''
  return `${displayHost}${prefix}/`
}

export const PATH_PREFIX = {
  blogs: `${displayHost}/blogs/`,
  events: `${displayHost}/events/`,
  pages: `${displayHost}/`,
} as const

export const SITE_MAP: Record<string, Placement> = {
  blogs: {
    where: 'The blog index at /blogs, and a page of its own.',
    url: slugUrl('/blogs/'),
  },
  courses: {
    where:
      'Its own page, the listing for its section, the course menus and the sitemap. The category you choose is the heading it is filed under.',
    url: (record) => {
      const { slug, segment } = record
      if (typeof slug !== 'string' || !slug) return undefined
      const prefix = COURSE_PREFIX[typeof segment === 'string' ? segment : 'courses'] ?? ''
      return `${SITE_URL}${prefix}/${slug}`
    },
  },
  categories: {
    where:
      'The heading a course is filed under — in the Courses mega menu, in the Internship and After 12th dropdowns, and above the heading on each course page. Its order here is the order the menu columns appear in.',
  },
  pages: {
    where:
      'A page of its own at the address below. Set its menu placement to Header or Footer to have the site link to it — a published page nobody links to is reachable only by typing its address.',
    url: slugUrl('/'),
  },
  faqs: {
    where:
      'The FAQ accordion on the homepage, in the order set here. This site has no separate /faq page, so every published question appears there.',
  },
  reviews: {
    where:
      'Nowhere on this site yet. It has no /reviews page — the homepage carousel reads Testimonials instead, which is the module to use for a student quote.',
    notLive:
      'Nothing on this site reads Reviews. Add a student quote under Testimonials instead.',
  },
  testimonials: {
    where:
      'The reviews carousel on the homepage. The batch field is printed as the line under the name, which is where a role like "AI Engineer at Cognizant" goes.',
  },
  events: {
    where:
      'The events listing at /events, linked from Resources in the main menu once there is at least one, and a page of its own. Upcoming events are shown first; once the last day has passed it moves down to the archive.',
    url: slugUrl('/events/'),
  },
  gallery: {
    where:
      'The campus gallery on the homepage. Every photo in every published album is shown, with its caption. Until an album has photos in it the section keeps its generated placeholder tiles.',
  },
  settings: {
    where:
      'Site-wide. The name, phone, email and address are used in the header, the footer, the contact panel, the WhatsApp button and the search-engine markup; the headline figures drive the placement counters; the social links decide which icons the footer shows at all.',
  },
  redirects: {
    where:
      'Applied to every visitor request, so an old address sends people to the new one. A new rule takes effect within a minute.',
  },
  enquiries: {
    where:
      'Received from the contact form and the Book a Demo popup on the website. Nothing here is published back to it.',
  },
  media: {
    where:
      'Used by whatever content references it — a blog cover, a gallery photograph, an image block on a page or a course.',
  },
  seo: {
    where:
      'Meta titles and descriptions are used on the pages they belong to. Left blank, a page keeps using its own heading and summary — which is usually what you want, because a filled-in override stops following the title when you change it.',
  },
  comments: {
    where:
      'Under the blog post they were left on, once approved here. Nothing a visitor writes appears on the site until it is.',
  },
  'ai-knowledge': {
    where:
      'Nowhere on this site. These notes are written for an assistant the Phagwara site does not currently run, so a published entry changes nothing a visitor sees.',
    notLive: 'This site has no assistant reading these yet.',
  },
}

/**
 * The public address of one record, or undefined when it has none.
 *
 * Wraps the per-module `url` above so a caller does not have to know which
 * modules have their own page — a list page can offer "View on site" wherever
 * this returns something and omit it everywhere else, without carrying its own
 * copy of the site's URL shapes.
 */
export function publicUrlFor(module: string, record: object | undefined): string | undefined {
  if (!record) return undefined
  // Callers pass their own entity types (Course, Blog, Page); the map's own
  // url() reads a couple of named fields off it and checks them, so an
  // index-signature cast here is safe and saves every caller a cast.
  return SITE_MAP[module]?.url?.(record as Record<string, unknown>)
}
