import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Icon from '@/components/ui/Icon'
import Button from '@/components/ui/Button'
import SectionHeading from '@/components/ui/SectionHeading'
import { allCoursePages, courseCatalog, findCourseBySlug } from '@/data/coursePages'
import { brand } from '@/data/site'
import { SITE_URL } from '@/lib/site-config'

/** One static page per course — no route is generated for an unknown slug. */
export function generateStaticParams() {
  return allCoursePages.map((course) => ({ slug: course.slug }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const course = findCourseBySlug(slug)
  if (!course) return {}

  return {
    title: course.title,
    description: course.summary,
    alternates: { canonical: `/${course.slug}` },
    openGraph: {
      title: `${course.title} | ${brand.name} ${brand.suffix}`,
      description: course.summary,
      url: `${SITE_URL}/${course.slug}`,
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
  const course = findCourseBySlug(slug)
  if (!course) notFound()

  const category = courseCatalog.find((cat) => cat.courses.some((c) => c.slug === slug))!
  const related = category.courses.filter((c) => c.slug !== slug).slice(0, 6)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.summary,
    provider: {
      '@type': 'EducationalOrganization',
      name: `${brand.name} ${brand.suffix}`,
      sameAs: SITE_URL,
    },
  }

  return (
    <main id="main">
      <section className="section course-hero">
        <div className="shell">
          <nav className="course-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <Icon name="chevronRight" size={12} />
            <Link href="/#courses">Courses</Link>
            <Icon name="chevronRight" size={12} />
            <span aria-current="page">{course.label}</span>
          </nav>

          <SectionHeading
            eyebrow={`${category.title} · ${course.duration}`}
            eyebrowIcon={course.icon}
            title={course.title}
            lead={course.summary}
          />

          <div className="course-hero__cta" data-reveal="up">
            <Button href="/#contact" arrow>
              Book Free Demo
            </Button>
            <Button href="/#contact" variant="ghost" icon="phone">
              Talk to a counsellor
            </Button>
          </div>
        </div>
      </section>

      <section className="section section--tint course-highlights">
        <div className="shell">
          <h2 className="course-highlights__title">What you&rsquo;ll learn</h2>
          <ul className="course-highlights__list">
            {course.highlights.map((point, i) => (
              <li key={point} data-reveal="up" data-reveal-delay={i * 60}>
                <i>
                  <Icon name="check" />
                </i>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section course-related">
          <div className="shell">
            <h2 className="course-related__title">
              More {category.title} courses
            </h2>
            <div className="course-related__grid">
              {related.map((c) => (
                <Link key={c.slug} href={`/${c.slug}`} className="course-related__card">
                  <i>
                    <Icon name={c.icon} />
                  </i>
                  <span>{c.label}</span>
                  <em>{c.duration}</em>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* JSON-LD is inert data, not executable script — safe to inline. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  )
}
