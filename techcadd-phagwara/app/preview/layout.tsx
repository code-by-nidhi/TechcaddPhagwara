import type { ReactNode } from 'react'

/**
 * The preview frame's wrapper.
 *
 * The point of framing the real site is that the preview cannot drift from the
 * page, so this deliberately does *not* strip the site's chrome — a nested
 * layout composes inside the root one, and the navbar and footer an editor sees
 * here are the navbar and footer a visitor will see.
 *
 * What it exists for is the handful of things that are wrong specifically
 * inside a 390px iframe pinned beside a form: the floating dock, which covers
 * the corner of every device size, and the scroll-reveal engine's staging,
 * which holds content at `opacity: 0` until an IntersectionObserver fires — in
 * a frame the editor never scrolls, that reads as a preview showing nothing.
 *
 * Both are handled by CSS scoped to this wrapper (see `styles/preview.css`),
 * rather than by teaching the root layout what a preview is — which would put
 * a `pathname.startsWith('/preview')` branch into the one component every page
 * on the site renders through.
 */
export default function PreviewLayout({ children }: { children: ReactNode }) {
  return <div className="preview-root">{children}</div>
}
