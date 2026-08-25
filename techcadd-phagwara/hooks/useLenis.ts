'use client'

import { useEffect } from 'react'
import { loadGsap } from '@/lib/gsap'

/**
 * Lenis smooth scrolling, driven by GSAP's ticker so ScrollTrigger stays in
 * perfect sync (no double RAF loop). Exposes `window.__lenis` for anchor
 * navigation (see lib/scroll.ts).
 *
 * Lenis and gsap are both imported dynamically inside the effect: neither
 * runs during SSR and neither sits in the initial JS chunk.
 */
export function useLenis(): void {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let cancelled = false
    let cleanup: (() => void) | undefined

    void Promise.all([import('lenis'), loadGsap()]).then(([{ default: Lenis }, { gsap, ScrollTrigger }]) => {
      if (cancelled) return

      const lenis = new Lenis({
        duration: 1.15,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 1.6,
      })

      window.__lenis = lenis
      document.documentElement.classList.add('lenis-active')

      const onScroll = () => ScrollTrigger.update()
      lenis.on('scroll', onScroll)

      const tick = (time: number) => lenis.raf(time * 1000)
      gsap.ticker.add(tick)
      gsap.ticker.lagSmoothing(0)

      cleanup = () => {
        gsap.ticker.remove(tick)
        lenis.destroy()
        delete window.__lenis
        document.documentElement.classList.remove('lenis-active')
      }
    })

    return () => {
      cancelled = true
      cleanup?.()
    }
  }, [])
}
