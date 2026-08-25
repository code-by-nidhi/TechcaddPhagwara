import Link from 'next/link'
import Icon from '@/components/ui/Icon'
import Button from '@/components/ui/Button'
import SectionHeading from '@/components/ui/SectionHeading'
import { brand } from '@/data/site'
import { SITE_URL } from '@/lib/site-config'
import type { ProgramPage } from '@/data/internshipPages'

export interface ProgramLandingProps {
  /** Second breadcrumb crumb — e.g. "Internship & Training" → `/#modes`. */
  sectionLabel: string
  sectionHref: string
  categoryTitle: string
  program: ProgramPage
  related: ProgramPage[]
  /** `/internship-training` or `/after-12th` — used to build related links. */
  basePath: string
  relatedTitle: string
}

/**
 * Shared by every `/internship-training/[slug]` and `/after-12th/[slug]`
 * page — same shape as the Courses `/[slug]` template (breadcrumb, hero,
 * highlights, related grid), parameterised so neither route duplicates the
 * markup.
 */
export default function ProgramLandingPage({
  sectionLabel,
  sectionHref,
  categoryTitle,
  program,
  related,
  basePath,
  relatedTitle,
}: ProgramLandingProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: program.title,
    description: program.summary,
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
            <Link href={sectionHref}>{sectionLabel}</Link>
            <Icon name="chevronRight" size={12} />
            <span aria-current="page">{program.label}</span>
          </nav>

          <SectionHeading
            eyebrow={`${categoryTitle} · ${program.duration}`}
            eyebrowIcon={program.icon}
            title={program.title}
            lead={program.summary}
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
            {program.highlights.map((point, i) => (
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
            <h2 className="course-related__title">{relatedTitle}</h2>
            <div className="course-related__grid">
              {related.map((p) => (
                <Link key={p.slug} href={`${basePath}/${p.slug}`} className="course-related__card">
                  <i>
                    <Icon name={p.icon} />
                  </i>
                  <span>{p.label}</span>
                  <em>{p.duration}</em>
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
