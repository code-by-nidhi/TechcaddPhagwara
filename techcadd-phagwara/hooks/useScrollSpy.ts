'use client'

import { useEffect, useState } from 'react'

/**
 * Tracks which section owns the viewport so the navbar can move its active
 * indicator. Picks the section whose top is closest to just below the navbar,
 * which behaves better than a pure IntersectionObserver for tall sections.
 */
export function useScrollSpy(ids: readonly string[], offset = 120): string {
  const [active, setActive] = useState<string>(ids[0] ?? '')

  useEffect(() => {
    let raf = 0

    const evaluate = () => {
      raf = 0
      let current = ids[0] ?? ''

      /* The section whose top is nearest above the line wins — not simply the
         last match in `ids`. The navbar's order no longer follows the page's
         (a dropdown can point anywhere), and taking the last match made the
         active item depend on the order the links happen to be listed in. */
      let nearest = -Infinity
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        const top = el.getBoundingClientRect().top - offset
        if (top <= 0 && top > nearest) {
          nearest = top
          current = id
        }
      }

      // pin the last section once the page is scrolled to the bottom
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 40) {
        current = ids[ids.length - 1] ?? current
      }

      setActive((prev) => (prev === current ? prev : current))
    }

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(evaluate)
    }

    evaluate()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [ids, offset])

  return active
}
