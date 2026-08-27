'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { scrollToSection } from '@/lib/scroll'

/**
 * Restores the top-of-page scroll position after a client-side route change.
 *
 * Lenis (see `useLenis`) replaces native scrolling with its own animated
 * offset, and it is mounted once for the whole app — it never learns that the
 * App Router swapped the page underneath it. Next's own scroll restoration
 * calls `window.scrollTo(0, 0)`, but Lenis's RAF loop immediately writes its
 * stale `animatedScroll` back, so clicking a course in the mega menu from a
 * scrolled homepage rendered the new page *below* the fold: the URL changed
 * and nothing appeared to happen. Typing the same URL by hand worked only
 * because a full document load starts Lenis from zero.
 *
 * So the reset has to go through Lenis itself (`immediate`/`force` write both
 * `targetScroll` and `animatedScroll`), with the native call kept as the
 * fallback for reduced-motion visitors, where Lenis never mounts at all.
 */
export default function ScrollReset() {
  const pathname = usePathname()
  /* The browser already restores scroll on a hard load/refresh — only an
     in-app navigation needs correcting. */
  const firstRun = useRef(true)

  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false
      return
    }

    /* One frame of grace so the incoming page's DOM exists — a `/#contact`
       style target cannot be measured before it is mounted. */
    const raf = window.requestAnimationFrame(() => {
      const { hash } = window.location

      if (hash.length > 1 && document.querySelector(hash)) {
        scrollToSection(hash)
        return
      }

      window.__lenis?.scrollTo(0, { immediate: true, force: true })
      window.scrollTo(0, 0)
    })

    return () => window.cancelAnimationFrame(raf)
  }, [pathname])

  return null
}
