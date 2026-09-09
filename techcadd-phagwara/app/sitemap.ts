import type { MetadataRoute } from 'next'
import { courseSlugs } from '@/data/courses'
import { after12Slugs } from '@/data/after12'
import { allInternshipPages } from '@/data/internshipPages'
import { SITE_URL } from '@/lib/site-config'

/**
 * The homepage is a single indexable document — section anchors (#courses,
 * #placement, …) are deliberately omitted, since search engines discard URL
 * fragments when crawling and listing them would just duplicate the same
 * page. Every course and programme now has a real slug route, so those are
 * listed here individually.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    /* Read from the course-content catalogue, which is also what
       `generateStaticParams` builds from — so the sitemap can never list a
       course route that does not render. */
    ...courseSlugs().map((slug) => ({
      url: `${SITE_URL}/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    /* After 12th programmes are served from the root alongside the courses,
       so they are listed the same way — see `data/after12/index.ts` for why
       the two catalogues stay separate arrays. */
    ...after12Slugs().map((slug) => ({
      url: `${SITE_URL}/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...allInternshipPages.map((p) => ({
      url: `${SITE_URL}/internship-training/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
