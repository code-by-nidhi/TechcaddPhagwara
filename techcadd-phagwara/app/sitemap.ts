import type { MetadataRoute } from 'next'
import { allCoursePages } from '@/data/coursePages'
import { allInternshipPages } from '@/data/internshipPages'
import { allAfter12Pages } from '@/data/after12Pages'
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
    ...allCoursePages.map((course) => ({
      url: `${SITE_URL}/${course.slug}`,
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
    ...allAfter12Pages.map((p) => ({
      url: `${SITE_URL}/after-12th/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
