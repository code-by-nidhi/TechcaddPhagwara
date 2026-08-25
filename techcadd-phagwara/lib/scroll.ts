/**
 * Same-page anchor navigation.
 *
 * Extracted from the old `useLenis` module so that components which only need
 * to scroll (buttons, links, the dock) do not transitively import Lenis and
 * drag it into their bundle.
 */

/** Scroll to a hash target, respecting the sticky navbar height. */
export function scrollToSection(hash: string): void {
  if (typeof document === 'undefined') return

  const el = document.querySelector(hash)
  if (!el) return

  const navH =
    parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--nav-h'),
      10
    ) || 78
  const offset = -navH - 8

  if (window.__lenis) {
    window.__lenis.scrollTo(el as HTMLElement, { offset, duration: 1.25 })
  } else {
    const top = el.getBoundingClientRect().top + window.scrollY + offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

/** Scroll back to the very top. */
export function scrollToTop(): void {
  if (typeof window === 'undefined') return

  if (window.__lenis) window.__lenis.scrollTo(0, { duration: 1.4 })
  else window.scrollTo({ top: 0, behavior: 'smooth' })
}

/** True for in-page anchors such as `#courses`. */
export const isHashLink = (href?: string): href is string =>
  typeof href === 'string' && href.startsWith('#')
