/**
 * The website's half of the CMS preview contract.
 *
 * The CMS's copy is `cms-techcadd/frontend/src/components/preview/previewProtocol.ts`.
 * The two files must agree on the message names; they are separate only
 * because the apps do not share a module graph. `npm run check:protocol` in the
 * CMS compares them, because the failure when they drift is silent in the worst
 * way — the pane posts a draft, the frame listens for a different string, and
 * the preview simply shows nothing, with no error on either side.
 *
 * The flow
 * --------
 *   1. The CMS frames `/preview/<kind>` on this origin.
 *   2. This frame posts PREVIEW_READY once its listener is attached. Waiting
 *      for that rather than for `load` is what stops the first draft — the one
 *      the editor is looking at — from being posted into a page that is not
 *      listening yet.
 *   3. The CMS posts PREVIEW_DRAFT on every keystroke, and PREVIEW_SCROLL when
 *      the editor moves between sections of the form.
 *   4. This frame posts PREVIEW_NOTICE when the draft contains fields this
 *      site's templates do not render, so the CMS can say so above the form.
 */

export const PREVIEW_READY = 'techcadd:preview-ready'
export const PREVIEW_DRAFT = 'techcadd:preview-draft'
export const PREVIEW_SCROLL = 'techcadd:preview-scroll'
export const PREVIEW_NOTICE = 'techcadd:preview-notice'

/** The two kinds of record the CMS can preview against this site. */
export type PreviewKind = 'course' | 'page'

export const PREVIEW_KINDS: readonly PreviewKind[] = ['course', 'page'] as const

export const isPreviewKind = (value: string): value is PreviewKind =>
  (PREVIEW_KINDS as readonly string[]).includes(value)

/**
 * Where the CMS is served from, and the only origin this frame will talk to.
 *
 * Both halves of the postMessage exchange are origin-checked: an inbound
 * message from anywhere else is ignored, and every outbound one names this as
 * its `targetOrigin` rather than '*'. Without that, any page that framed
 * `/preview/course` could feed it content and read what came back.
 *
 * A comma-separated list, because the CMS's Vite server falls back through
 * 5173/5174/5175 when a port is taken — the same reason the API's CORS_ORIGIN
 * lists all three.
 */
export const CMS_ORIGINS: string[] = (
  process.env.NEXT_PUBLIC_CMS_ORIGIN ??
  'http://localhost:5173,http://localhost:5174,http://localhost:5175'
)
  .split(',')
  .map((origin) => origin.trim().replace(/\/$/, ''))
  .filter(Boolean)

export const isAllowedOrigin = (origin: string): boolean => CMS_ORIGINS.includes(origin)

/** Every message carries the kind, so two open panes cannot cross wires. */
export interface PreviewMessage {
  type?: string
  kind?: string
  payload?: unknown
  section?: string
  uneditable?: string[]
}
