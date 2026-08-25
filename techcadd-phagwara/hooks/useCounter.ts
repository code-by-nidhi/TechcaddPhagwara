'use client'

import { useEffect, useRef, useState, type RefObject } from 'react'

interface CounterOptions {
  duration?: number
  decimals?: number
}

interface CounterResult {
  ref: RefObject<HTMLSpanElement | null>
  display: string
}

/**
 * Counts from 0 → `end` the first time the element scrolls into view.
 * Uses an eased RAF ramp rather than a linear tick so the number "lands".
 */
export function useCounter(
  end: number,
  { duration = 2000, decimals = 0 }: CounterOptions = {}
): CounterResult {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [value, setValue] = useState(0)
  const done = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(end)
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || done.current) return
        done.current = true
        io.disconnect()

        const start = performance.now()
        const step = (now: number) => {
          const p = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - p, 4) // easeOutQuart
          setValue(end * eased)
          if (p < 1) requestAnimationFrame(step)
          else setValue(end)
        }
        requestAnimationFrame(step)
      },
      { threshold: 0.4 }
    )

    io.observe(node)
    return () => io.disconnect()
  }, [end, duration])

  const display =
    decimals > 0 ? value.toFixed(decimals) : Math.round(value).toLocaleString('en-IN')

  return { ref, display }
}
