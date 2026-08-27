import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import CourseLanding from '@/components/pages/CourseLanding'
import { getBrand, getCourse } from '@/lib/cms/content'
import { courseExtras } from '@/lib/cms/course-view'
import { SEGMENT_ANCHOR, SEGMENT_LABEL } from '@/lib/cms/segments'
import { allAfter12Pages } from '@/data/after12Pages'
import { SITE_URL } from '@/lib/site-config'

/* Prerendered from the bundled catalogue; CMS-only slugs render on demand.
   See the longer note on the same decision in app/[slug]/page.tsx. */
export function generateStaticParams() {
  return allAfter12Pages.map((program) => ({ slug: program.slug }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const [resolved, brand] = await Promise.all([
    getCourse('after-12th-courses', slug),
    getBrand(),
  ])
  if (!resolved) return {}

  const { page, cms } = resolved
  const title = cms?.seo?.metaTitle?.trim() || page.title
  const description = cms?.seo?.metaDescription?.trim() || page.summary

  return {
    title,
    description,
    alternates: { canonical: cms?.seo?.canonicalUrl?.trim() || `/after-12th/${page.slug}` },
    ...(cms?.seo?.keywords?.length ? { keywords: cms.seo.keywords } : {}),
    ...(cms?.seo?.robotsIndex === false ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      title: cms?.seo?.ogTitle?.trim() || `${page.title} | ${brand.name} ${brand.suffix}`,
      description: cms?.seo?.ogDescription?.trim() || description,
      url: `${SITE_URL}/after-12th/${page.slug}`,
      type: 'website',
    },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default async function After12ProgramPage({ params }: PageProps) {
  const { slug } = await params
  const resolved = await getCourse('after-12th-courses', slug)
  if (!resolved) notFound()

  const brand = await getBrand()
  const extras = courseExtras(resolved.cms)

  return (
    <CourseLanding
      sectionLabel={SEGMENT_LABEL['after-12th-courses']}
      sectionHref={SEGMENT_ANCHOR['after-12th-courses']}
      categoryTitle={resolved.categoryTitle}
      course={resolved.page}
      related={resolved.related.slice(0, 6)}
      basePath="/after-12th"
      relatedTitle={`More ${resolved.categoryTitle}`}
      brandName={`${brand.name} ${brand.suffix}`}
      siteUrl={SITE_URL}
      {...(extras ? { extras } : {})}
    />
  )
}
