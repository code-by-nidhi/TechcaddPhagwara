/**
 * What `/api/public` actually sends back.
 *
 * Hand-written rather than shared with the CMS: the two apps are separate
 * deployments with separate builds and no common module graph, so a shared
 * package would have to be published and versioned to be worth anything. These
 * mirror `cms-techcadd/frontend/src/types/entities.ts`, narrowed to the fields
 * the public endpoints send and this site renders — the CMS's internal notes,
 * audit columns and workflow fields are deliberately absent because the public
 * router does not return them.
 *
 * Everything optional is optional here too. The API omits a key rather than
 * sending null for most absent values, and a type that promised otherwise
 * would push a lie one layer deeper.
 */

export interface CmsMedia {
  id: string
  url: string
  alt: string
  width?: number
  height?: number
}

export interface CmsSeo {
  metaTitle?: string
  metaDescription?: string
  keywords?: string[]
  ogTitle?: string
  ogDescription?: string
  ogImage?: CmsMedia | null
  canonicalUrl?: string
  robotsIndex?: boolean
  inSitemap?: boolean
}

/**
 * Which part of the site a course belongs to.
 *
 * The CMS's own vocabulary, shared with the other branch CMSes — note that
 * `after-12th-courses` is not this site's `/after-12th` URL prefix. See
 * `lib/cms/segments.ts` for the mapping, and the note on why it is a mapping
 * rather than a rename.
 */
export type CmsSegment = 'courses' | 'internship-training' | 'after-12th-courses'

export interface CmsFact {
  label: string
  value: string
  icon?: string
  suffix?: string
}

export interface CmsCourse {
  id: string
  title: string
  slug: string
  segment: CmsSegment
  /** A name from this site's icon registry — see migration 046_course_icon. */
  icon?: string
  categoryId?: string
  categoryName?: string
  categorySlug?: string
  shortDescription: string
  tagline?: string
  description: string
  /** Overrides the generated overview. One paragraph per line. */
  overview?: string
  duration?: string
  level?: string
  mode?: string
  /** The page's own <h1>, when the editor set one different from the title. */
  h1?: string
  /** The line above the heading. Imported as the category name. */
  eyebrow?: string
  intro?: string
  highlights: string[]
  facts?: CmsFact[]
  careers?: string[]
  tools?: string[]
  thumbnail?: CmsMedia | null
  featured: boolean
  seo?: CmsSeo
}

export interface CmsCategory {
  id: string
  name: string
  slug: string
  icon?: string
  accentColor?: string
  description?: string
  order: number
}

export interface CmsFaq {
  id: string
  question: string
  answer: string
  category?: string
  featured: boolean
  order: number
}

export interface CmsTestimonial {
  id: string
  studentName: string
  /** The line under the name. The importer files the site's `role` here. */
  batch?: string
  rating: number
  quote: string
  videoUrl?: string
  googleReviewUrl?: string
  photo?: CmsMedia | null
  featured: boolean
}

export interface CmsGalleryImage {
  id: string
  media: CmsMedia
  caption?: string
  linkUrl?: string
  order: number
}

export interface CmsGalleryAlbum {
  id: string
  title: string
  slug: string
  description?: string
  eventDate?: string
  cover?: CmsMedia | null
  images: CmsGalleryImage[]
}

export interface CmsSiteSettings {
  siteName: string
  tagline?: string
  contactEmail?: string
  contactPhone?: string
  address?: string
  stats: { value: string; label: string }[]
  social: Record<string, string>
}

/** One block of a CMS-authored page or the body of a course section. */
export interface CmsSection {
  id?: string
  type: 'rich-text' | 'image' | 'video' | 'cta' | 'blogs'
  title?: string
  body?: string
  media?: CmsMedia | null
  linkUrl?: string
  linkLabel?: string
  linkTarget?: 'same' | 'new'
  visible?: boolean
}

export interface CmsPage {
  id: string
  title: string
  slug: string
  template: string
  content: string
  sections: CmsSection[]
  publishDate?: string
  seo?: CmsSeo
}

export interface CmsNavPage {
  slug: string
  label: string
  placement: 'header' | 'footer'
}

export interface CmsBlog {
  id: string
  title: string
  slug: string
  excerpt: string
  body: string
  tags: string[]
  categoryId?: string
  coverImage?: CmsMedia | null
  publishDate?: string
  createdAt?: string
  updatedAt?: string
  seo?: CmsSeo
}

export interface CmsEventSpeaker {
  id?: string
  name: string
  role?: string
  org?: string
  bio?: string
  photo?: CmsMedia | null
  order: number
}

export interface CmsEventAgendaItem {
  id?: string
  timeLabel?: string
  title: string
  detail?: string
  order: number
}

export interface CmsEvent {
  id: string
  title: string
  slug: string
  eventType: string
  mode: string
  summary: string
  body: string
  coverImage?: CmsMedia | null
  /** ISO date. `endsOn` is set only for a multi-day event. */
  startsOn: string
  endsOn?: string
  startTime?: string
  endTime?: string
  venueName?: string
  venueAddress?: string
  city?: string
  mapUrl?: string
  hostName?: string
  registrationUrl?: string
  seats?: number | null
  tags: string[]
  highlights: { id?: string; text: string; order: number }[]
  agenda: CmsEventAgendaItem[]
  speakers: CmsEventSpeaker[]
  images: { id?: string; media: CmsMedia; caption?: string; order: number }[]
  featured: boolean
  seo?: CmsSeo
}

export interface CmsRedirect {
  from: string
  to: string
  type: number
}
