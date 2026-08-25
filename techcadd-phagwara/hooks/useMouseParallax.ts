'use client'

import { useEffect, useRef, type RefObject } from 'react'

interface ParallaxOptions {
  damp?: number
}

/**
 * Publishes normalised pointer coordinates (-1 → 1) onto the container as
 * `--px` / `--py`. Children opt into parallax purely in CSS:
 *
 *   transform: translate3d(calc(var(--px) * 22px), calc(var(--py) * 18px), 0);
 */
export function useMouseParallax<T extends HTMLElement>({
  damp = 0.09,
}: ParallaxOptions = {}): RefObject<T | null> {
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

    const loop = () => {
      cx += (tx - cx) * damp
      cy += (ty - cy) * damp
      el.style.setProperty('--px', cx.toFixed(4))
      el.style.setProperty('--py', cy.toFixed(4))
      raf = requestAnimationFrame(loop)
    }

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      tx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2)
      ty = (e.clientY - (r.top + r.height / 2)) / (r.height / 2)
    }

    const onLeave = () => {
      tx = 0
      ty = 0
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    raf = requestAnimationFrame(loop)

    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [damp])

  return ref
}
