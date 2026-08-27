import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import CourseLanding from '@/components/pages/CourseLanding'
import CmsPageBody from '@/components/pages/CmsPageBody'
import { getBrand, getCourse, getPage } from '@/lib/cms/content'
import { courseExtras } from '@/lib/cms/course-view'
import { SEGMENT_ANCHOR, SEGMENT_LABEL } from '@/lib/cms/segments'
import { allCoursePages } from '@/data/coursePages'
import { SITE_URL } from '@/lib/site-config'

/**
 * A course page, or — failing that — a page written in the CMS.
 *
 * This route has always served the course catalogue at the site's root, which
 * is where every existing link and every indexed URL points. The CMS's Pages
 * module publishes to `/<slug>` as well, so rather than giving CMS pages a
 * prefix nobody asked for (and that the CMS's own "view on site" link would
 * then have to know about), the two share this route: a slug is a course if
 * one matches, and a page otherwise.
 *
 * Courses win the tie. They are what the menus, the carousel and the sitemap
 * link to, so a page created with a colliding slug should be the thing that is
 * unreachable — and the CMS refuses a duplicate course slug within a segment,
 * which is the collision that would actually hurt.
 */

/**
 * Prerendered from the bundled catalogue only.
 *
 * Not from the CMS, deliberately. `generateStaticParams` runs at build time, so
 * pulling the list from the API would bake whatever the CMS happened to contain
 * during the build into the deployment — and a course added afterwards would
 * 404 until someone redeployed. Next renders unlisted slugs on demand instead
 * (`dynamicParams` defaults to true), so a course created in the CMS has a page
 * within one request. This list only decides what is prerendered.
 */
export function generateStaticParams() {
  return allCoursePages.map((course) => ({ slug: course.slug }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const [resolved, brand] = await Promise.all([getCourse('courses', slug), getBrand()])

  if (resolved) {
    const { page, cms } = resolved
    const title = cms?.seo?.metaTitle?.trim() || page.title
    const description = cms?.seo?.metaDescription?.trim() || page.summary

    return {
      title,
      description,
      alternates: { canonical: cms?.seo?.canonicalUrl?.trim() || `/${page.slug}` },
      ...(cms?.seo?.keywords?.length ? { keywords: cms.seo.keywords } : {}),
      ...(cms?.seo?.robotsIndex === false ? { robots: { index: false, follow: true } } : {}),
      openGraph: {
        title: cms?.seo?.ogTitle?.trim() || `${page.title} | ${brand.name} ${brand.suffix}`,
        description: cms?.seo?.ogDescription?.trim() || description,
        url: `${SITE_URL}/${page.slug}`,
        type: 'website',
      },
      twitter: { card: 'summary_large_image', title, description },
    }
  }

  const cmsPage = await getPage(slug)
  if (!cmsPage) return {}

  const title = cmsPage.seo?.metaTitle?.trim() || cmsPage.title
  const description = cmsPage.seo?.metaDescription?.trim() ?? ''

  return {
    title,
    ...(description ? { description } : {}),
    alternates: { canonical: cmsPage.seo?.canonicalUrl?.trim() || `/${cmsPage.slug}` },
    ...(cmsPage.seo?.robotsIndex === false ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      title: cmsPage.seo?.ogTitle?.trim() || `${cmsPage.title} | ${brand.name} ${brand.suffix}`,
      ...(cmsPage.seo?.ogDescription?.trim() || description
        ? { description: cmsPage.seo?.ogDescription?.trim() || description }
        : {}),
      url: `${SITE_URL}/${cmsPage.slug}`,
      type: 'article',
    },
  }
}

export default async function CourseOrPage({ params }: PageProps) {
  const { slug } = await params
  const resolved = await getCourse('courses', slug)

  if (!resolved) {
    const cmsPage = await getPage(slug)
    if (!cmsPage) notFound()

    const brand = await getBrand()
    return <CmsPageBody page={cmsPage} brandName={`${brand.name} ${brand.suffix}`} />
  }

  const brand = await getBrand()

  return (
    <CourseLanding
      sectionLabel={SEGMENT_LABEL.courses}
      sectionHref={SEGMENT_ANCHOR.courses}
      categoryTitle={resolved.categoryTitle}
      course={resolved.page}
      // The template's grid is built for six; the mega menu's biggest category
      // has fourteen, and printing all of them turns the footer of a course
      // page into a second navigation.
      related={resolved.related.slice(0, 6)}
      basePath=""
      relatedTitle={`More ${resolved.categoryTitle} courses`}
      brandName={`${brand.name} ${brand.suffix}`}
      siteUrl={SITE_URL}
      {...(courseExtras(resolved.cms) ? { extras: courseExtras(resolved.cms) } : {})}
    />
  )
}
