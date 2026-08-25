'use client'

import { useEffect, useRef, type RefObject } from 'react'

interface TiltOptions {
  max?: number
  speed?: number
  scale?: number
  perspective?: number
  glare?: boolean
  'max-glare'?: number
  gyroscope?: boolean
}

/**
 * 3D tilt on cards. Also publishes the pointer position as `--mx` / `--my`
 * CSS variables so a card can render a spotlight that tracks the cursor.
 *
 * vanilla-tilt is loaded dynamically so it never evaluates during SSR and is
 * excluded from the initial bundle — it is only needed on fine-pointer devices.
 */
export function useTilt<T extends HTMLElement>(
  options: TiltOptions = {}
): RefObject<T | null> {
  const ref = useRef<T | null>(null)
  /* Options are re-created on every render by callers; freeze the first value
     so the effect does not thrash. */
  const optsRef = useRef(options)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let cancelled = false

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      el.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`)
      el.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`)
    }

    void import('vanilla-tilt').then(({ default: VanillaTilt }) => {
      if (cancelled) return

      VanillaTilt.init(el, {
        max: 8,
        speed: 700,
        glare: true,
        'max-glare': 0.14,
        scale: 1.02,
        perspective: 1100,
        gyroscope: false,
        ...optsRef.current,
      })

      el.addEventListener('mousemove', onMove)
    })

    return () => {
      cancelled = true
      el.removeEventListener('mousemove', onMove)
      el.vanillaTilt?.destroy()
    }
  }, [])

  return ref
}
