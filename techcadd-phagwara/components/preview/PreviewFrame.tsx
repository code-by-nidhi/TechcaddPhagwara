'use client'

import { useEffect, useMemo, useState } from 'react'

import CourseLanding, { type CourseExtras } from '@/components/pages/CourseLanding'
import CmsPageBody from '@/components/pages/CmsPageBody'
import { iconRegistry, type IconName } from '@/components/ui/Icon'
import { unrenderedFieldsIn } from '@/lib/cms/course-view'
import { SEGMENT_ANCHOR, SEGMENT_LABEL, segmentBasePath } from '@/lib/cms/segments'
import type { CmsPage, CmsSection, CmsSegment } from '@/lib/cms/types'
import type { CoursePage } from '@/data/coursePages'
import {
  CMS_ORIGINS,
  isAllowedOrigin,
  PREVIEW_DRAFT,
  PREVIEW_NOTICE,
  PREVIEW_READY,
  PREVIEW_SCROLL,
  type PreviewKind,
  type PreviewMessage,
} from './preview-protocol'

/**
 * What the CMS sees while an editor types.
 *
 * Renders the real templates — `CourseLanding` and `CmsPageBody`, the same
 * components the published pages use — against form state that has never been
 * saved. Nothing about the page is described twice, so the preview cannot fall
 * out of step with the thing it is previewing, which is the failure mode of
 * every preview built as a separate approximation.
 *
 * The draft arrives by postMessage rather than through the database, which is
 * what keeps unsaved work unsaved: an editor can try a headline, see it, and
 * close the tab without ever having written it down.
 */

/** The draft the CMS sends for a course. Its half is `coursePreview.ts`. */
interface CourseDraft {
  title?: string
  slug?: string
  segment?: string
  categoryName?: string
  tagline?: string
  duration?: string
  highlights?: string[]
  h1?: string
  eyebrow?: string
  badge?: string
  intro?: string
  overview?: string
  eligibility?: string
  certification?: string
  syllabusIntro?: string
  facts?: CourseExtras['facts']
  syllabus?: { title?: string; topics?: string[]; hours?: number; body?: string }[]
  tools?: string[]
  careers?: string[]
  ctaPrimary?: CourseExtras['ctaPrimary']
  ctaSecondary?: CourseExtras['ctaSecondary']
  sections?: CmsSection[]
  hiddenSections?: string[]
  sectionOrder?: string[]
  [key: string]: unknown
}

/** The draft the CMS sends for a page. */
interface PageDraft {
  title?: string
  slug?: string
  content?: string
  sections?: CmsSection[]
  seo?: { metaTitle?: string; metaDescription?: string }
  [key: string]: unknown
}

const isIcon = (name: unknown): name is IconName =>
  typeof name === 'string' && name in iconRegistry

/** A CMS segment string, or the default. Drafts are untrusted input. */
function toSegment(value: unknown): CmsSegment {
  return value === 'internship-training' || value === 'after-12th-courses' ? value : 'courses'
}

/**
 * The label the menu column would show.
 *
 * Same rule `lib/cms/content.ts` applies when it builds the catalogue, so the
 * breadcrumb in the preview reads the way the breadcrumb on the page will.
 */
const menuLabel = (title: string): string =>
  title.replace(/\s+(course|training|program(me)?)\s+in\s+.+$/i, '').trim() || title

export default function PreviewFrame({ kind }: { kind: PreviewKind }) {
  const [draft, setDraft] = useState<CourseDraft | PageDraft | null>(null)
  const [connected, setConnected] = useState(false)

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      // Only the CMS may drive this frame — see the note on CMS_ORIGINS.
      if (!isAllowedOrigin(event.origin)) return

      const data = event.data as PreviewMessage | undefined
      if (!data || data.kind !== kind) return

      if (data.type === PREVIEW_DRAFT) {
        setDraft((data.payload ?? null) as CourseDraft | PageDraft | null)
        setConnected(true)
        return
      }

      if (data.type === PREVIEW_SCROLL && data.section) {
        /*
          The form's section, scrolled to in the rendered page.

          `CourseLanding` gives its sections the same DOM ids the CMS's
          COURSE_SECTIONS map names — hero, overview, modules, who-can-do, cta
          — so selecting a section in the form brings the matching part of the
          page into view instead of leaving the editor to find it.

          A section that is not rendered for this draft has no element, and
          nothing happens. That is the honest outcome: there is nothing to
          scroll to, and jumping somewhere arbitrary would suggest otherwise.
        */
        document.getElementById(data.section)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

    window.addEventListener('message', onMessage)

    /*
      Greet the parent once the listener above is attached, not on load.

      The CMS holds its first draft until this arrives. Posting it any earlier
      would race React's mount, and the message that went missing would be the
      one carrying what the editor is currently looking at.

      Posted to every configured CMS origin rather than '*': the frame does not
      know which port Vite settled on, and naming a specific origin that is not
      the parent's is simply dropped by the browser.
    */
    const parent = window.parent
    if (parent && parent !== window) {
      for (const origin of CMS_ORIGINS) {
        try {
          parent.postMessage({ type: PREVIEW_READY, kind }, origin)
        } catch {
          // A targetOrigin that is not the parent's throws. Expected — the
          // right one is in the same list.
        }
      }
    }

    return () => window.removeEventListener('message', onMessage)
  }, [kind])

  /** Fields in the draft that this site's template has no place for. */
  const uneditable = useMemo(
    () => (kind === 'course' ? unrenderedFieldsIn(draft as Record<string, unknown>) : []),
    [draft, kind],
  )

  useEffect(() => {
    const parent = window.parent
    if (!connected || !parent || parent === window) return

    for (const origin of CMS_ORIGINS) {
      try {
        parent.postMessage({ type: PREVIEW_NOTICE, kind, uneditable }, origin)
      } catch {
        // See above.
      }
    }
  }, [connected, kind, uneditable])

  if (!draft) {
    return (
      <main id="main" className="section">
        <div className="shell">
          <p className="course-prose">
            Waiting for the editor… if this stays, check that the CMS and this site agree on
            each other&rsquo;s addresses.
          </p>
        </div>
      </main>
    )
  }

  if (kind === 'page') {
    const page = draft as PageDraft
    return (
      <CmsPageBody
        preview
        brandName="Techcadd"
        page={
          {
            id: 'preview',
            title: page.title?.trim() || 'Untitled page',
            slug: page.slug ?? '',
            template: 'default',
            content: page.content ?? '',
            sections: page.sections ?? [],
            ...(page.seo ? { seo: page.seo } : {}),
          } as CmsPage
        }
      />
    )
  }

  const course = draft as CourseDraft
  const segment = toSegment(course.segment)
  const title = course.h1?.trim() || course.title?.trim() || 'Untitled course'

  const page: CoursePage = {
    slug: course.slug ?? '',
    label: menuLabel(course.title?.trim() || title),
    title,
    duration: course.duration ?? '',
    icon: isIcon(course.icon) ? course.icon : 'code',
    summary: course.tagline?.trim() || '',
    highlights: (course.highlights ?? []).filter(Boolean),
  }

  const extras: CourseExtras = {
    ...(course.badge?.trim() ? { badge: course.badge.trim() } : {}),
    ...(course.intro?.trim() ? { intro: course.intro.trim() } : {}),
    ...(course.overview?.trim() ? { overview: course.overview.trim() } : {}),
    ...(course.facts?.length ? { facts: course.facts } : {}),
    ...(course.syllabus?.length
      ? {
          syllabus: course.syllabus
            .filter((module) => module.title)
            .map((module) => ({
              title: module.title as string,
              ...(module.topics ? { topics: module.topics } : {}),
              ...(module.hours ? { hours: module.hours } : {}),
              ...(module.body ? { body: module.body } : {}),
            })),
        }
      : {}),
    ...(course.syllabusIntro?.trim() ? { syllabusIntro: course.syllabusIntro.trim() } : {}),
    ...(course.tools?.length ? { tools: course.tools } : {}),
    ...(course.careers?.length ? { careers: course.careers } : {}),
    ...(course.eligibility?.trim() ? { eligibility: course.eligibility.trim() } : {}),
    ...(course.certification?.trim() ? { certification: course.certification.trim() } : {}),
    ...(course.ctaPrimary?.text ? { ctaPrimary: course.ctaPrimary } : {}),
    ...(course.ctaSecondary?.text ? { ctaSecondary: course.ctaSecondary } : {}),
    ...(course.sections?.length ? { sections: course.sections } : {}),
    // The Page layout tab, so rearranging or switching off a section shows in
    // the pane as it is dragged rather than only after a save.
    ...(course.hiddenSections?.length ? { hiddenSections: course.hiddenSections } : {}),
    ...(course.sectionOrder?.length ? { sectionOrder: course.sectionOrder } : {}),
  }

  return (
    <CourseLanding
      preview
      sectionLabel={SEGMENT_LABEL[segment]}
      sectionHref={SEGMENT_ANCHOR[segment]}
      categoryTitle={course.categoryName?.trim() || course.eyebrow?.trim() || 'Courses'}
      course={page}
      /*
        No related grid.

        The CMS's draft carries chosen related courses as ids, and the preview
        has no list to resolve them against — see the note at the bottom of
        coursePreview.ts. An empty array omits the section, which is honest;
        inventing six neighbours would show the editor a block that will not
        look like that.
      */
      related={[]}
      basePath={segmentBasePath(segment)}
      relatedTitle=""
      brandName="Techcadd"
      siteUrl=""
      extras={extras}
    />
  )
}
