'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  r: number
  vx: number
  vy: number
  a: number
  c: string
}

/**
 * Site-wide fixed backdrop: gradient mesh, drifting blur balls, animated grid,
 * gradient wave and a lightweight 2D-canvas particle field.
 *
 * The particle field is intentionally canvas-2D rather than WebGL — it costs a
 * fraction of the frame budget and never blocks first paint.
 */
export default function BackgroundFX() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const palette = ['33,150,243', '13,71,161', '144,202,249', '227,242,253']

    let w = 0
    let h = 0
    let raf = 0
    let particles: Particle[] = []
    const pointer = { x: -9999, y: -9999 }

    const seed = () => {
      // scale count with viewport area, capped so low-end devices stay smooth
      const count = Math.min(Math.round((w * h) / 26000), 90)
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 2.2 + 0.7,
        vx: (Math.random() - 0.5) * 0.24,
        vy: (Math.random() - 0.5) * 0.24,
        a: Math.random() * 0.35 + 0.12,
        c: palette[(Math.random() * palette.length) | 0] as string,
      }))
    }

    const resize = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      seed()
    }

    const frame = () => {
      ctx.clearRect(0, 0, w, h)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy

        // wrap around the edges
        if (p.x < -12) p.x = w + 12
        if (p.x > w + 12) p.x = -12
        if (p.y < -12) p.y = h + 12
        if (p.y > h + 12) p.y = -12

        // gentle repulsion from the cursor
        const dx = p.x - pointer.x
        const dy = p.y - pointer.y
        const dist = Math.hypot(dx, dy)
        if (dist < 130 && dist > 0.01) {
          const push = (130 - dist) / 130
          p.x += (dx / dist) * push * 1.6
          p.y += (dy / dist) * push * 1.6
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.c},${p.a})`
        ctx.fill()
      }

      // constellation links between near neighbours
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]!
          const b = particles[j]!
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d > 128) continue
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.strokeStyle = `rgba(99,102,241,${(1 - d / 128) * 0.13})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      }

      raf = requestAnimationFrame(frame)
    }

    const onPointer = (e: PointerEvent) => {
      pointer.x = e.clientX
      pointer.y = e.clientY
    }

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf)
        raf = 0
      } else if (!raf) {
        raf = requestAnimationFrame(frame)
      }
    }

    resize()
    raf = requestAnimationFrame(frame)
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onPointer, { passive: true })
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onPointer)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <div className="bg-fx" aria-hidden="true">
      <div className="bg-fx__mesh" />
      <div className="bg-fx__grid" />
      <span className="bg-fx__ball bg-fx__ball--a" />
      <span className="bg-fx__ball bg-fx__ball--b" />
      <span className="bg-fx__ball bg-fx__ball--c" />
      <span className="bg-fx__line" style={{ left: '18%', animationDelay: '0s' }} />
      <span className="bg-fx__line" style={{ left: '52%', animationDelay: '3.2s' }} />
      <span className="bg-fx__line" style={{ left: '81%', animationDelay: '6s' }} />
      <canvas ref={canvasRef} className="bg-fx__canvas" />
      <div className="bg-fx__wave" />
    </div>
  )
}
