import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import PreviewFrame from '@/components/preview/PreviewFrame'
import { isPreviewKind, PREVIEW_KINDS } from '@/components/preview/preview-protocol'

/**
 * The page the CMS frames beside its editor.
 *
 * `/preview/course` and `/preview/page`. The CMS has been framing these since
 * its preview pane shipped; nothing answered, so the pane showed a 404 and the
 * "Connecting…" line under it never went away.
 *
 * Renders nothing on its own — everything comes in over postMessage from the
 * CMS, which is why the body is a client component. See `PreviewFrame`.
 */

export function generateStaticParams() {
  return PREVIEW_KINDS.map((kind) => ({ kind }))
}

/**
 * Never indexed.
 *
 * A preview is a blank page until an editor's browser feeds it something, so
 * what a crawler would index is the "waiting for the editor" line — under a
 * URL on the marketing site's own domain. `noindex, nofollow` rather than
 * relying on robots.txt, which asks a crawler not to fetch and does not stop
 * it listing an address it found elsewhere.
 */
export const metadata: Metadata = {
  title: 'Preview',
  robots: { index: false, follow: false, nocache: true },
}

export default async function PreviewPage({
  params,
}: {
  params: Promise<{ kind: string }>
}) {
  const { kind } = await params
  if (!isPreviewKind(kind)) notFound()

  return <PreviewFrame kind={kind} />
}
