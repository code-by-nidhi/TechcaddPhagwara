import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProgramLandingPage from '@/components/pages/ProgramLandingPage'
import { after12Catalog, allAfter12Pages, findAfter12BySlug } from '@/data/after12Pages'
import { brand } from '@/data/site'
import { SITE_URL } from '@/lib/site-config'

export function generateStaticParams() {
  return allAfter12Pages.map((p) => ({ slug: p.slug }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const program = findAfter12BySlug(slug)
  if (!program) return {}

  return {
    title: program.title,
    description: program.summary,
    alternates: { canonical: `/after-12th/${program.slug}` },
    openGraph: {
      title: `${program.title} | ${brand.name} ${brand.suffix}`,
      description: program.summary,
      url: `${SITE_URL}/after-12th/${program.slug}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: program.title,
      description: program.summary,
    },
  }
}

export default async function After12ProgramPage({ params }: PageProps) {
  const { slug } = await params
  const program = findAfter12BySlug(slug)
  if (!program) notFound()

  const category = after12Catalog.find((cat) => cat.programs.some((p) => p.slug === slug))!
  const related = category.programs.filter((p) => p.slug !== slug)

  return (
    <ProgramLandingPage
      sectionLabel="After 12th"
      sectionHref="/#journey"
      categoryTitle={category.title}
      program={program}
      related={related}
      basePath="/after-12th"
      relatedTitle={`More ${category.title}`}
    />
  )
}
