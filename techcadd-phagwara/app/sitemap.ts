import type { MetadataRoute } from 'next'

import { getAllCoursePaths, getBlogs, getEvents, getNavPages } from '@/lib/cms/content'
import { SITE_URL } from '@/lib/site-config'

/**
 * The homepage is a single indexable document — section anchors (#courses,
 * #placement, …) are deliberately omitted, since search engines discard URL
 * fragments when crawling and listing them would just duplicate the same
 * page. Every course and programme has a real slug route, so those are
 * listed individually.
 *
 * Built from the CMS now rather than from the bundled catalogue. That is the
 * point of the connection: a course an editor publishes is in the sitemap
 * within one revalidation, and a course they unpublish leaves it — where
 * before, both took a deploy, and the second one never happened, so the
 * sitemap kept advertising pages that had been taken down.
 *
 * Falls back to the bundled catalogue with everything else — `getAllCoursePaths`
 * resolves through the same fallback as the menus, so a CMS outage produces the
 * sitemap this file always produced rather than an empty one.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [courses, navPages, blogs, events] = await Promise.all([
    getAllCoursePaths(),
    getNavPages(),
    getBlogs(200),
    getEvents(200),
  ])

  const now = new Date()

  /** Courses at the root outrank the programme pages, as they always have. */
  const priorityFor = (segment: string) => (segment === 'courses' ? 0.8 : 0.7)

  const entries: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...courses.map((course) => ({
      url: `${SITE_URL}${course.path}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: priorityFor(course.segment),
    })),
    ...navPages.map((page) => ({
      url: `${SITE_URL}/${page.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
  ]

  if (blogs && blogs.length > 0) {
    entries.push(
      {
        url: `${SITE_URL}/blogs`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 0.6,
      },
      ...blogs.map((post) => ({
        url: `${SITE_URL}/blogs/${post.slug}`,
        // A post's own date, so a crawler can tell an edit from a re-crawl.
        lastModified: post.updatedAt ? new Date(post.updatedAt) : now,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      })),
    )
  }

  if (events && events.length > 0) {
    entries.push(
      {
        url: `${SITE_URL}/events`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 0.6,
      },
      ...events.map((event) => ({
        url: `${SITE_URL}/events/${event.slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.5,
      })),
    )
  }

  /*
    Deduped on the URL.

    A CMS page and a course can only collide if someone gives a page the slug
    of a course — the route resolves that in the course's favour, and listing
    the address twice would have a crawler report the sitemap as malformed for
    something that is merely untidy.
  */
  const seen = new Set<string>()
  return entries.filter((entry) => {
    if (seen.has(entry.url)) return false
    seen.add(entry.url)
    return true
  })
}
