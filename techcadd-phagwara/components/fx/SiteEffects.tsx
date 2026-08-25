'use client'

import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import { useLenis } from '@/hooks/useLenis'
import { useReveal } from '@/hooks/useReveal'
import { loadGsap } from '@/lib/gsap'

/**
 * The decorative layers are `aria-hidden`, contribute nothing to the document
 * outline and cannot render meaningfully on the server (canvas, pointer
 * tracking). Loading them with `ssr: false` keeps them out of the server HTML
 * and out of the first JS chunk.
 *
 * `ssr: false` is only legal inside a Client Component in the App Router,
 * which is the reason this wrapper exists rather than importing them directly
 * from the page.
 */
const BackgroundFX = dynamic(() => import('./BackgroundFX'), { ssr: false })
const CursorGlow = dynamic(() => import('./CursorGlow'), { ssr: false })

/**
 * Mounts the global scroll engines once for the whole app:
 *   - Lenis smooth scrolling, synced to the GSAP ticker
 *   - the `[data-reveal]` intersection observer
 *   - a ScrollTrigger re-measure after fonts and late layout settle
 */
export default function SiteEffects() {
  useLenis()
  useReveal()

  /* Layout settles after fonts and images land — re-measure pinned triggers.
     Only relevant once gsap has actually loaded (Journey/Projects/useLenis
     may not have triggered that yet), so there is nothing to refresh before
     then and nothing lost by not forcing the import here. */
  useEffect(() => {
    let cancelled = false
    let t = 0

    const refresh = () => {
      void loadGsap().then(({ ScrollTrigger }) => {
        if (!cancelled) ScrollTrigger.refresh()
      })
    }

    void loadGsap().then(() => {
      if (cancelled) return
      t = window.setTimeout(refresh, 600)
      window.addEventListener('load', refresh)
      void document.fonts?.ready.then(refresh)
    })

    return () => {
      cancelled = true
      window.clearTimeout(t)
      window.removeEventListener('load', refresh)
    }
  }, [])

  return (
    <>
      <BackgroundFX />
      <CursorGlow />
    </>
  )
}
