'use client'

import { useEffect, useRef, useState } from 'react'
import Icon from '@/components/ui/Icon'
import Counter from '@/components/ui/Counter'

const R = 130
const CIRC = 2 * Math.PI * R

/** The 96% placement dial — fills once when it scrolls into view. */
export default function SuccessRing() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [filled, setFilled] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        setFilled(true)
        io.disconnect()
      },
      { threshold: 0.35 }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div className="ring" ref={ref} data-reveal="scale">
      <svg className="ring__svg" viewBox="0 0 300 300" aria-hidden="true">
        <defs>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2196F3" />
            <stop offset="55%" stopColor="#0D47A1" />
            <stop offset="100%" stopColor="#90CAF9" />
          </linearGradient>
        </defs>
        <circle className="ring__track" cx="150" cy="150" r={R} />
        <circle
          className="ring__value"
          cx="150"
          cy="150"
          r={R}
          strokeDasharray={CIRC}
          strokeDashoffset={filled ? CIRC * (1 - 0.96) : CIRC}
        />
      </svg>

      <div className="ring__core">
        <div>
          <b>
            <Counter value={96} suffix="%" />
          </b>
          <span>Placement success rate</span>
        </div>
      </div>

      <span className="ring__badge ring__badge--a">
        <Icon name="briefcase" size={14} />
        420+ partners
      </span>
      <span className="ring__badge ring__badge--b">
        <Icon name="trending" size={14} />
        ₹12.5 LPA highest
      </span>
      <span className="ring__badge ring__badge--c">
        <Icon name="users" size={14} />
        12,400+ placed
      </span>
    </div>
  )
}
