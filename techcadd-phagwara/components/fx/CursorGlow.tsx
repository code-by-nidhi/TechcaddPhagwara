'use client'

import { useEffect, useRef } from 'react'

/**
 * Two-layer cursor: a hard dot that tracks 1:1 and a soft glow that lags
 * behind. Elements marked `data-cursor="hot"` expand the dot on hover.
 * Skipped entirely on touch devices and under reduced-motion.
 */
export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement | null>(null)
  const dotRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const glow = glowRef.current
    const dot = dotRef.current
    if (!glow || !dot) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = 0
    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let gx = mx
    let gy = my

    const loop = () => {
      gx += (mx - gx) * 0.12
      gy += (my - gy) * 0.12
      glow.style.transform = `translate3d(${gx}px, ${gy}px, 0)`
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0)`
      raf = requestAnimationFrame(loop)
    }

    const onMove = (e: PointerEvent) => {
      mx = e.clientX
      my = e.clientY
      glow.classList.add('is-on')
      dot.classList.add('is-on')
    }

    const onOver = (e: PointerEvent) => {
      const target = e.target as Element | null
      const hot = target?.closest?.('[data-cursor="hot"], a, button')
      dot.classList.toggle('is-hot', Boolean(hot))
    }

    const onLeave = () => {
      glow.classList.remove('is-on')
      dot.classList.remove('is-on')
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerover', onOver, { passive: true })
    document.addEventListener('pointerleave', onLeave)
    raf = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerover', onOver)
      document.removeEventListener('pointerleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={glowRef} className="cursor-glow" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  )
}
