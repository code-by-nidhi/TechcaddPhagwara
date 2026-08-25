import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProgramLandingPage from '@/components/pages/ProgramLandingPage'
import { allInternshipPages, findInternshipBySlug, internshipCatalog } from '@/data/internshipPages'
import { brand } from '@/data/site'
import { SITE_URL } from '@/lib/site-config'

export function generateStaticParams() {
  return allInternshipPages.map((p) => ({ slug: p.slug }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const program = findInternshipBySlug(slug)
  if (!program) return {}

  return {
    title: program.title,
    description: program.summary,
    alternates: { canonical: `/internship-training/${program.slug}` },
    openGraph: {
      title: `${program.title} | ${brand.name} ${brand.suffix}`,
      description: program.summary,
      url: `${SITE_URL}/internship-training/${program.slug}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: program.title,
      description: program.summary,
    },
  }
}

export default async function InternshipProgramPage({ params }: PageProps) {
  const { slug } = await params
  const program = findInternshipBySlug(slug)
  if (!program) notFound()

  const category = internshipCatalog.find((cat) => cat.programs.some((p) => p.slug === slug))!
  const related = category.programs.filter((p) => p.slug !== slug)

  return (
    <ProgramLandingPage
      sectionLabel="Internship & Training"
      sectionHref="/#modes"
      categoryTitle={category.title}
      program={program}
      related={related}
      basePath="/internship-training"
      relatedTitle={`More ${category.title} programmes`}
    />
  )
}
