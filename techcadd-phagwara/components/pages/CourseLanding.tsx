import { Fragment, type ReactNode } from 'react'
import Link from 'next/link'
import Icon, { iconRegistry, type IconName } from '@/components/ui/Icon'
import Button from '@/components/ui/Button'
import SectionHeading from '@/components/ui/SectionHeading'
import { sanitizeHtml, hasContent } from '@/lib/sanitize-html'
import type { CoursePage } from '@/data/coursePages'
import type { CmsSection } from '@/lib/cms/types'
import { isHidden, orderSections } from '@/lib/cms/course-sections'

/**
 * Every course, internship and after-12th landing page — and the CMS preview.
 *
 * Was `ProgramLandingPage`, which the two programme routes shared while
 * `/[slug]` kept its own copy of the same markup. They had already drifted by a
 * heading, and the CMS preview needed a third copy, so the two became one: the
 * only difference between them was ever the breadcrumb and the related-grid
 * heading, both of which are props.
 *
 * The extras
 * ----------
 * `extras` carries what the CMS knows about a course and the bundled catalogue
 * does not — quick facts, an overview, a curriculum, tools, careers and the
 * editor's own content blocks. Every one is optional and every section is
 * omitted entirely when its field is empty, which is what keeps the 46 imported
 * courses rendering exactly the page they rendered before any of this: they
 * have none of these fields set, so none of these sections exist for them.
 *
 * It is also the answer to a real gap. The CMS's course form has some sixty
 * fields because it was written for a branch site with a much longer template.
 * Filling one in and finding the page unchanged is the worst outcome a CMS can
 * produce, so the fields that map onto this site's design are rendered here and
 * the ones that do not are declared in `lib/cms/course-coverage.ts`, which the
 * preview reports back to the editor rather than leaving them to guess.
 */

/** A call-to-action as the CMS stores one. */
export interface CourseCta {
  text: string
  type: 'enquiry' | 'contact' | 'internal' | 'external'
  url?: string
}

export interface CourseExtras {
  badge?: string
  /** Replaces the summary as the hero paragraph when set. */
  intro?: string
  /** Free prose under the hero. One paragraph per line. */
  overview?: string
  facts?: { label: string; value: string; icon?: string; suffix?: string }[]
  syllabus?: { title: string; topics?: string[]; hours?: number; body?: string }[]
  syllabusIntro?: string
  tools?: string[]
  careers?: string[]
  eligibility?: string
  certification?: string
  ctaPrimary?: CourseCta
  ctaSecondary?: CourseCta
  /** Blocks the editor arranged, each anchored to a section. */
  sections?: CmsSection[]
  /** Generated sections to leave off this course's page, by id. */
  hiddenSections?: string[]
  /** The running order the editor arranged, by id. Empty means as written. */
  sectionOrder?: string[]
}

export interface CourseLandingProps {
  /** Second breadcrumb crumb — e.g. "Internship & Training" → `/#modes`. */
  sectionLabel: string
  sectionHref: string
  categoryTitle: string
  course: CoursePage
  related: CoursePage[]
  /** `''`, `/internship-training` or `/after-12th` — builds the related links. */
  basePath: string
  relatedTitle: string
  /** For the JSON-LD provider. Resolved from the CMS by the calling page. */
  brandName: string
  siteUrl: string
  extras?: CourseExtras
  /**
   * True inside the CMS preview frame.
   *
   * Suppresses the JSON-LD (a preview is not a page a crawler will ever see)
   * and the scroll-reveal delays, which stage content the editor is trying to
   * look at behind an IntersectionObserver that a 390px-wide frame may never
   * trigger.
   */
  preview?: boolean
}

const isIcon = (name: string | undefined): name is IconName =>
  Boolean(name && name in iconRegistry)

/** Where a CTA goes. Both self-describing types land on the contact section. */
function ctaHref(cta: CourseCta): string {
  if (cta.type === 'internal' || cta.type === 'external') return cta.url || '/#contact'
  return '/#contact'
}

export default function CourseLanding({
  sectionLabel,
  sectionHref,
  categoryTitle,
  course,
  related,
  basePath,
  relatedTitle,
  brandName,
  siteUrl,
  extras,
  preview = false,
}: CourseLandingProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.summary,
    provider: {
      '@type': 'EducationalOrganization',
      name: brandName,
      sameAs: siteUrl,
    },
  }

  /** `data-reveal-delay`, unless the preview needs everything painted at once. */
  const delay = (ms: number) => (preview ? undefined : ms)
  const reveal = (kind: string) => (preview ? undefined : kind)

  const facts = extras?.facts?.filter((fact) => fact.label && fact.value) ?? []
  const overviewParagraphs =
    extras?.overview
      ?.split(/\n+/)
      .map((line) => line.trim())
      .filter(Boolean) ?? []
  const syllabus = extras?.syllabus?.filter((module) => module.title) ?? []
  const tools = extras?.tools?.filter(Boolean) ?? []
  const careers = extras?.careers?.filter(Boolean) ?? []
  const blocks = (extras?.sections ?? []).filter(
    (block) => block.visible !== false && block.type !== 'blogs',
  )

  /*
    Every section the page can draw, by the id the CMS knows it by.

    Assembled as a map rather than written out in order, because the order is
    the editor's to choose — see `orderSections`. A section whose content is
    empty is simply absent from this map, which is what keeps the 46 imported
    courses rendering the page they always rendered: they have no overview, no
    curriculum, no tools and no careers, so none of those sections exist for
    them and nothing needs switching off.
  */
  const sections = new Map<string, ReactNode>()

  sections.set(
    'hero',
    <section className="section course-hero" id="hero" key="hero">
      <div className="shell">
        <nav className="course-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <Icon name="chevronRight" size={12} />
          <Link href={sectionHref}>{sectionLabel}</Link>
          <Icon name="chevronRight" size={12} />
          <span aria-current="page">{course.label}</span>
        </nav>

        {extras?.badge && <span className="course-badge">{extras.badge}</span>}

        <SectionHeading
          eyebrow={[categoryTitle, course.duration].filter(Boolean).join(' · ')}
          eyebrowIcon={course.icon}
          title={course.title}
          lead={extras?.intro?.trim() || course.summary}
          reveal={false}
        />

        <div className="course-hero__cta">
          <Button href={extras?.ctaPrimary ? ctaHref(extras.ctaPrimary) : '/#contact'} arrow>
            {extras?.ctaPrimary?.text || 'Book Free Demo'}
          </Button>
          <Button
            href={extras?.ctaSecondary ? ctaHref(extras.ctaSecondary) : '/#contact'}
            variant="ghost"
            icon="phone"
          >
            {extras?.ctaSecondary?.text || 'Talk to a counsellor'}
          </Button>
        </div>

        {facts.length > 0 && (
          <dl className="course-facts" data-reveal={reveal('up')}>
            {facts.map((fact) => (
              <div className="course-fact" key={`${fact.label}-${fact.value}`}>
                {isIcon(fact.icon) && (
                  <i>
                    <Icon name={fact.icon} size={15} />
                  </i>
                )}
                <div>
                  <dt>{fact.label}</dt>
                  <dd>
                    {fact.value}
                    {fact.suffix ? <em>{fact.suffix}</em> : null}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>,
  )

  if (overviewParagraphs.length > 0) {
    sections.set(
      'overview',
      <section className="section course-overview" id="overview" key="overview">
        <div className="shell">
          <h2 className="course-highlights__title">About this course</h2>
          <div className="course-prose">
            {overviewParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>,
    )
  }

  if (course.highlights.length > 0) {
    sections.set(
      'what-you-will-learn',
      <section
        className="section section--tint course-highlights"
        id="what-you-will-learn"
        key="what-you-will-learn"
      >
        <div className="shell">
          <h2 className="course-highlights__title">What you&rsquo;ll learn</h2>
          <ul className="course-highlights__list">
            {course.highlights.map((point, i) => (
              <li key={point} data-reveal={reveal('up')} data-reveal-delay={delay(i * 60)}>
                <i>
                  <Icon name="check" />
                </i>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>,
    )
  }

  if (syllabus.length > 0) {
    sections.set(
      'modules',
      <section className="section course-modules" id="modules" key="modules">
        <div className="shell">
          <h2 className="course-highlights__title">Curriculum</h2>
          {extras?.syllabusIntro?.trim() && (
            <p className="course-modules__intro">{extras.syllabusIntro.trim()}</p>
          )}

          <ol className="course-modules__list">
            {syllabus.map((module, i) => (
              <li
                className="cmodule"
                key={`${module.title}-${i}`}
                data-reveal={reveal('up')}
                data-reveal-delay={delay(i * 60)}
              >
                <span className="cmodule__index" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="cmodule__body">
                  <h3>
                    {module.title}
                    {module.hours ? <em>{module.hours} hrs</em> : null}
                  </h3>
                  {module.body?.trim() && <p>{module.body.trim()}</p>}
                  {(module.topics ?? []).length > 0 && (
                    <ul className="cmodule__topics">
                      {(module.topics ?? []).map((topic) => (
                        <li key={topic}>{topic}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>,
    )
  }

  if (tools.length > 0 || careers.length > 0) {
    sections.set(
      'tools',
      <section className="section section--tint course-meta" id="tools" key="tools">
        <div className="shell course-meta__grid">
          {tools.length > 0 && (
            <div data-reveal={reveal('up')}>
              <h2 className="course-highlights__title">Tools you&rsquo;ll use</h2>
              <ul className="course-chips">
                {tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </div>
          )}

          {careers.length > 0 && (
            <div data-reveal={reveal('up')} data-reveal-delay={delay(80)}>
              <h2 className="course-highlights__title">Where it leads</h2>
              <ul className="course-chips course-chips--accent">
                {careers.map((role) => (
                  <li key={role}>{role}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>,
    )
  }

  if (extras?.eligibility?.trim() || extras?.certification?.trim()) {
    sections.set(
      'who-can-do',
      <section className="section course-notes" id="who-can-do" key="who-can-do">
        <div className="shell course-notes__grid">
          {extras.eligibility?.trim() && (
            <div className="course-note" data-reveal={reveal('up')}>
              <i>
                <Icon name="users" />
              </i>
              <div>
                <b>Who can join</b>
                <p>{extras.eligibility.trim()}</p>
              </div>
            </div>
          )}
          {extras.certification?.trim() && (
            <div className="course-note" data-reveal={reveal('up')} data-reveal-delay={delay(80)}>
              <i>
                <Icon name="award" />
              </i>
              <div>
                <b>Certification</b>
                <p>{extras.certification.trim()}</p>
              </div>
            </div>
          )}
        </div>
      </section>,
    )
  }

  if (related.length > 0) {
    sections.set(
      'cta',
      <section className="section course-related" id="cta" key="cta">
        <div className="shell">
          <h2 className="course-related__title">{relatedTitle}</h2>
          <div className="course-related__grid">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`${basePath}/${item.slug}`}
                className="course-related__card"
              >
                <i>
                  <Icon name={item.icon} />
                </i>
                <span>{item.label}</span>
                <em>{item.duration}</em>
              </Link>
            ))}
          </div>
        </div>
      </section>,
    )
  }

  /*
    The editor's own blocks, filed under the section each was anchored to.

    The CMS's layout editor asks for exactly this — "put a video after the
    curriculum" — and stores the answer as an anchor plus before/after. Ignoring
    it and appending every block to the foot of the page would make that whole
    control a lie, and it is the one thing in the layout editor an editor is
    most likely to reach for.

    A block anchored to a section this course does not have still renders: it
    falls to the end rather than disappearing, because content an editor wrote
    going missing is worse than content in the wrong place.
  */
  const before = new Map<string, CmsSection[]>()
  const after = new Map<string, CmsSection[]>()
  const orphaned: CmsSection[] = []

  for (const block of blocks) {
    const extended = block as CmsSection & { anchor?: string; placement?: string }
    const anchor = extended.anchor
    if (!anchor || !sections.has(anchor)) {
      orphaned.push(block)
      continue
    }
    const bucket = extended.placement === 'before' ? before : after
    bucket.set(anchor, [...(bucket.get(anchor) ?? []), block])
  }

  const blockNodes = (list: CmsSection[] | undefined, at: string, side: string) =>
    (list ?? []).map((block, i) => (
      <ContentBlock key={block.id ?? `${side}-${at}-${i}`} block={block} />
    ))

  const ordered = orderSections(extras?.sectionOrder).filter(
    (id) => sections.has(id) && !isHidden(id, extras?.hiddenSections),
  )

  return (
    <main id="main">
      {ordered.map((id) => (
        <Fragment key={id}>
          {blockNodes(before.get(id), id, 'before')}
          {sections.get(id)}
          {blockNodes(after.get(id), id, 'after')}
        </Fragment>
      ))}

      {orphaned.map((block, i) => (
        <ContentBlock key={block.id ?? `orphan-${i}`} block={block} />
      ))}

      {/* JSON-LD is inert data, not executable script — safe to inline. */}
      {!preview && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </main>
  )
}

/**
 * One block an editor added, in the site's own type scale.
 *
 * Shared with the CMS-authored `/[slug]` pages, which arrange the same four
 * kinds. The body is run through `sanitizeHtml` on the way in — see the note
 * on that module for why the CMS being behind a login is not enough on its own.
 */
export function ContentBlock({ block }: { block: CmsSection }) {
  if (block.visible === false) return null

  const heading = block.title?.trim()
  const external = /^https?:\/\//i.test(block.linkUrl ?? '')
  const newTab = block.linkTarget === 'new'

  if (block.type === 'rich-text') {
    if (!hasContent(block.body)) return null
    return (
      <section className="section course-block">
        <div className="shell">
          {heading && <h2 className="course-highlights__title">{heading}</h2>}
          <div
            className="course-prose"
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(block.body) }}
          />
        </div>
      </section>
    )
  }

  if (block.type === 'image') {
    const src = block.media?.url
    if (!src) return null
    return (
      <section className="section course-block">
        <div className="shell">
          {heading && <h2 className="course-highlights__title">{heading}</h2>}
          {/*
            A plain <img>, not next/image: these files are served from the CMS's
            own origin, which is a deployment detail an editor can change and
            which would have to be listed in next.config's remotePatterns for
            the optimiser to touch it at all. `loading="lazy"` gets most of the
            benefit without making the page depend on that configuration.
          */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="course-block__image"
            src={src}
            alt={block.media?.alt ?? heading ?? ''}
            width={block.media?.width}
            height={block.media?.height}
            loading="lazy"
          />
        </div>
      </section>
    )
  }

  if (block.type === 'video') {
    if (!block.linkUrl) return null
    return (
      <section className="section course-block">
        <div className="shell">
          {heading && <h2 className="course-highlights__title">{heading}</h2>}
          <div className="course-block__video">
            <iframe
              src={toEmbedUrl(block.linkUrl)}
              title={heading || 'Course video'}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    )
  }

  if (block.type === 'cta') {
    if (!block.linkUrl || !block.linkLabel) return null
    return (
      <section className="section section--tint course-block course-block--cta">
        <div className="shell">
          {heading && <h2 className="course-highlights__title">{heading}</h2>}
          {hasContent(block.body) && (
            <div
              className="course-prose"
              dangerouslySetInnerHTML={{ __html: sanitizeHtml(block.body) }}
            />
          )}
          <Button
            href={block.linkUrl}
            arrow
            {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            {...(external && !newTab ? { rel: 'noopener' } : {})}
          >
            {block.linkLabel}
          </Button>
        </div>
      </section>
    )
  }

  return null
}

/**
 * A watch URL turned into one that can be framed.
 *
 * Editors paste the address from the browser bar, which for YouTube and Vimeo
 * is not the address an iframe can load — the frame comes back refusing to
 * connect, and the block looks broken for a link that is perfectly correct.
 * Anything unrecognised is passed through untouched.
 */
function toEmbedUrl(url: string): string {
  const youtube = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{6,})/i,
  )
  if (youtube) return `https://www.youtube.com/embed/${youtube[1]}`

  const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d+)/i)
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}`

  return url
}
