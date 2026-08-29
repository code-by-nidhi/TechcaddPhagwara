import Link from 'next/link'

import Icon from '@/components/ui/Icon'
import SectionHeading from '@/components/ui/SectionHeading'
import { ContentBlock } from '@/components/pages/CourseLanding'
import { hasContent, sanitizeHtml } from '@/lib/sanitize-html'
import type { CmsPage } from '@/lib/cms/types'

/**
 * A page written entirely in the CMS.
 *
 * Before this, the CMS's Pages module had nowhere to publish to: an editor
 * could write a page, mark it published, and it existed at no address on this
 * site. The module's own note in the CMS said it appeared "at the address
 * below" — which was true of the branch site the CMS was built for, and not of
 * this one.
 *
 * Deliberately plain. A page here is a privacy policy, a fees page, an
 * admissions note — prose, sometimes with a picture or a button. It gets the
 * site's heading treatment and the shared prose scale so it belongs to the
 * site, and nothing else, because there is no design for "arbitrary page" that
 * is not just prose with the site's type on it.
 *
 * Shared with the preview frame, so what an editor sees while typing is this
 * component and not an approximation of it.
 */
export default function CmsPageBody({
  page,
  brandName,
  preview = false,
}: {
  page: CmsPage
  brandName: string
  /** Inside the CMS preview frame: no breadcrumb to a page that is not live. */
  preview?: boolean
}) {
  const blocks = (page.sections ?? []).filter((block) => block.visible !== false)

  /*
    The legacy body, rendered only when there are no blocks.

    Pages predate the block editor and still carry a single `content` field.
    The CMS's own type says the blocks win when a page has them — rendering
    both would print the old draft underneath the new one.
  */
  const legacy = blocks.length === 0 && hasContent(page.content) ? sanitizeHtml(page.content) : ''

  return (
    <main id="main">
      <section className="section course-hero" id="hero">
        <div className="shell">
          {!preview && (
            <nav className="course-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <Icon name="chevronRight" size={12} />
              <span aria-current="page">{page.title}</span>
            </nav>
          )}

          <SectionHeading
            title={page.title}
            {...(page.seo?.metaDescription?.trim()
              ? { lead: page.seo.metaDescription.trim() }
              : {})}
            reveal={false}
          />
        </div>
      </section>

      {legacy && (
        <section className="section course-block">
          <div className="shell">
            <div className="course-prose" dangerouslySetInnerHTML={{ __html: legacy }} />
          </div>
        </section>
      )}

      {blocks.map((block, i) => (
        <ContentBlock key={block.id ?? `${block.type}-${i}`} block={block} />
      ))}

      {blocks.length === 0 && !legacy && (
        <section className="section course-block">
          <div className="shell">
            <p className="course-prose">
              {preview
                ? 'Nothing to show yet — add a block and it appears here.'
                : `This page has no content yet. Please check back, or contact ${brandName}.`}
            </p>
          </div>
        </section>
      )}
    </main>
  )
}
