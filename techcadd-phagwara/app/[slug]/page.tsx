import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import CourseHero from '@/components/courses/CourseHero'
import CourseOverview from '@/components/courses/CourseOverview'
import IndustryReady from '@/components/courses/IndustryReady'
import WhoCanJoin from '@/components/courses/WhoCanJoin'
import WhyProgram from '@/components/courses/WhyProgram'
import WhyNow from '@/components/courses/WhyNow'
import CourseModules from '@/components/courses/CourseModules'
import DurationTiers from '@/components/courses/DurationTiers'
import ToolsMesh from '@/components/courses/ToolsMesh'
import Certification from '@/components/courses/Certification'
import CareerOutcomes from '@/components/courses/CareerOutcomes'
import Projects from '@/components/courses/Projects'
import WorkingLoop from '@/components/courses/WorkingLoop'
import Comparison from '@/components/courses/Comparison'
import Reviews from '@/components/courses/Reviews'
import CourseFaq from '@/components/courses/CourseFaq'
import CourseCta from '@/components/courses/CourseCta'
import RelatedCourses from '@/components/courses/RelatedCourses'
import CourseEnquiry from '@/components/courses/CourseEnquiry'
import StickyEnrolBar from '@/components/courses/StickyEnrolBar'
import After12Landing from '@/components/courses/After12Landing'

import { COURSE_CONTENT, getCourse, getRelated } from '@/data/courses'
import { AFTER12_CONTENT, getAfter12, getAfter12Related } from '@/data/after12'
import { brand } from '@/data/site'
import { courseImage } from '@/lib/course-image'
import { SITE_URL } from '@/lib/site-config'

/** One static page per course and programme — nothing is generated for an unknown slug. */
export function generateStaticParams() {
  return [...COURSE_CONTENT, ...AFTER12_CONTENT].map((course) => ({ slug: course.slug }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

/**
 * The two catalogues this route serves, behind one lookup.
 *
 * Courses and After 12th programmes share a content type and a component set,
 * but not a layout: a course renders the sections in this file, an After 12th
 * programme renders `After12Landing`, which arranges the same components in the
 * branch template's order and dark/light alternation. `kind` is what the page
 * branches on, and it is returned here so the decision is made once.
 *
 * Courses are looked up first. A slug in both would otherwise resolve by
 * whichever array happened to be searched first, and the After 12th slugs all
 * carry an `after-12th-` prefix precisely so the case cannot arise silently.
 */
function resolveSlug(slug: string) {
  const course = getCourse(slug)
  if (course) {
    return {
      kind: 'course' as const,
      course,
      related: getRelated(slug),
      breadcrumb: { label: 'Courses', href: '/#courses' },
      relatedTitle: 'Related courses',
    }
  }

  const program = getAfter12(slug)
  if (program) {
    return {
      kind: 'after-12th' as const,
      course: program,
      related: getAfter12Related(slug),
      breadcrumb: { label: 'After 12th', href: '/#journey' },
      relatedTitle: 'Popular courses',
    }
  }

  return null
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const resolved = resolveSlug(slug)
  if (!resolved) return {}

  const { course } = resolved
  const url = `${SITE_URL}/${course.slug}`

  return {
    title: course.title,
    description: course.summary,
    keywords: course.keywords,
    alternates: { canonical: `/${course.slug}` },
    openGraph: {
      title: `${course.title} | ${brand.name} ${brand.suffix}`,
      description: course.summary,
      url,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: course.title,
      description: course.summary,
    },
  }
}

export default async function CoursePage({ params }: PageProps) {
  const { slug } = await params
  const resolved = resolveSlug(slug)
  if (!resolved) notFound()

  const { kind, course, related, breadcrumb, relatedTitle } = resolved
  const url = `${SITE_URL}/${course.slug}`

  /*
   * Three graphs in one script: the Course itself, the breadcrumb trail, and
   * the FAQ. A @graph keeps them in a single tag and lets them reference one
   * another by @id.
   *
   * No `aggregateRating`: the reviews on the page are reviews of the centre,
   * not of this syllabus, and claiming a per-course score in structured data
   * would be a rich result the page does not actually support.
   */
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Course',
        '@id': `${url}#course`,
        name: course.title,
        description: course.overview,
        url,
        inLanguage: 'en',
        educationalLevel: course.level,
        teaches: course.learningOutcomes,
        provider: {
          '@type': 'EducationalOrganization',
          name: `${brand.name} ${brand.suffix}`,
          sameAs: SITE_URL,
        },
        offers: {
          '@type': 'Offer',
          category: 'Paid',
          availability: 'https://schema.org/InStock',
          url,
        },
        hasCourseInstance: {
          '@type': 'CourseInstance',
          courseMode: 'Onsite',
          courseWorkload: course.duration,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          {
            '@type': 'ListItem',
            position: 2,
            name: breadcrumb.label,
            item: `${SITE_URL}${breadcrumb.href.replace(/^\//, '/')}`,
          },
          { '@type': 'ListItem', position: 3, name: course.label, item: url },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: course.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      },
    ],
  }

  return (
    <>
      {/*
       * Every section on this page reveals on scroll, which means framer-motion
       * writes `style="opacity:0"` into the server HTML and only clears it once
       * hydrated. With scripting off that leaves the whole page blank even
       * though the text is all present, so the reveal is undone here. The
       * inline style has to be beaten with `!important`.
       */}
      <noscript>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '#main [style*="opacity:0"]{opacity:1!important;transform:none!important}',
          }}
        />
      </noscript>

      {kind === 'after-12th' ? (
        /* The branch template — same components, the branch's own order and
           dark/light alternation. See `After12Landing` for why it is a separate
           arrangement rather than a prop on the list below. */
        <After12Landing course={course} related={related} relatedTitle={relatedTitle} />
      ) : (
        <main id="main">
          <CourseHero course={course} image={courseImage(course.slug)} breadcrumb={breadcrumb} />
          <CourseOverview course={course} />
          <IndustryReady course={course} />
          <WhoCanJoin course={course} />
          <WhyProgram course={course} />
          <WhyNow course={course} />
          <CourseModules course={course} />
          <DurationTiers course={course} />
          <ToolsMesh course={course} />
          <Certification course={course} />
          <CareerOutcomes course={course} />
          <Projects course={course} />
          <WorkingLoop course={course} />
          <Reviews course={course} />
          <Comparison course={course} />
          <CourseFaq course={course} />
          <CourseCta course={course} />
          <RelatedCourses courses={related} title={relatedTitle} />
          <CourseEnquiry course={course} />
        </main>
      )}

      <StickyEnrolBar course={course} />

      {/* JSON-LD is inert data, not executable script — safe to inline. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}
