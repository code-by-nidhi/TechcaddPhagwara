'use client'

import { useEffect } from 'react'

/**
 * Global scroll-reveal engine.
 *
 * Observes every `[data-reveal]` element in the document (including nodes added
 * later, via a MutationObserver) and toggles `.is-in` when it enters the
 * viewport. Stagger is expressed declaratively with `data-reveal-delay`.
 */
export function useReveal(): void {
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const seen = new WeakSet<Element>()

    if (reduced) {
      document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-in'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          const delay = el.dataset.revealDelay
          if (delay) el.style.setProperty('--reveal-delay', `${delay}ms`)
          el.classList.add('is-in')
          io.unobserve(el)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )

    const scan = () => {
      document.querySelectorAll('[data-reveal]:not(.is-in)').forEach((el) => {
        if (seen.has(el)) return
        seen.add(el)
        io.observe(el)
      })
    }

    scan()

    const mo = new MutationObserver(scan)
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])
}
