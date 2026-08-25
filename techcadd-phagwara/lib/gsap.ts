/**
 * GSAP + ScrollTrigger, loaded on demand.
 *
 * Every consumer only ever touches gsap inside a `useEffect` — none of it is
 * needed for the initial render or SSR output. A static top-level import here
 * used to pull the full library into the critical bundle for every route
 * (it showed up eagerly in the root layout's JS, duplicated across two
 * separate chunks). `loadGsap()` defers that fetch to the moment a consumer's
 * effect actually runs, and memoizes the result so four different call sites
 * share one in-flight import instead of each triggering their own.
 */
let cached: Promise<{ gsap: typeof import('gsap').gsap; ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger }> | null = null

export function loadGsap() {
  if (!cached) {
    cached = Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(
      ([gsapMod, scrollTriggerMod]) => {
        const { gsap } = gsapMod
        const { ScrollTrigger } = scrollTriggerMod
        gsap.registerPlugin(ScrollTrigger)
        return { gsap, ScrollTrigger }
      }
    )
  }
  return cached
}

/** Respect the OS motion preference across every GSAP-driven effect. */
export const prefersReducedMotion = (): boolean =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches
