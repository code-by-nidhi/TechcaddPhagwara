'use client'

import { useEffect, useRef, type RefObject } from 'react'

interface MagneticOptions {
  strength?: number
  scale?: number
}

/**
 * Magnetic hover — the element leans toward the cursor while it is nearby and
 * springs back on leave. Disabled on touch/coarse pointers and reduced motion.
 */
export function useMagnetic<T extends HTMLElement>({
  strength = 0.32,
  scale = 1.04,
}: MagneticOptions = {}): RefObject<T | null> {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = 0
    let tx = 0
    let ty = 0
    let cx = 0
    let cy = 0
    let hovering = false

    const loop = () => {
      cx += (tx - cx) * 0.16
      cy += (ty - cy) * 0.16
      el.style.transform = `translate3d(${cx.toFixed(2)}px, ${cy.toFixed(2)}px, 0) scale(${
        hovering ? scale : 1
      })`
      if (Math.abs(tx - cx) > 0.1 || Math.abs(ty - cy) > 0.1) {
        raf = requestAnimationFrame(loop)
      } else {
        raf = 0
      }
    }

    const kick = () => {
      if (!raf) raf = requestAnimationFrame(loop)
    }

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      tx = (e.clientX - (r.left + r.width / 2)) * strength
      ty = (e.clientY - (r.top + r.height / 2)) * strength
      kick()
    }

    const onEnter = () => {
      hovering = true
      kick()
    }

    const onLeave = () => {
      hovering = false
      tx = 0
      ty = 0
      kick()
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseenter', onEnter)
    el.addEventListener('mouseleave', onLeave)

    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseenter', onEnter)
      el.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [strength, scale])

  return ref
}
