'use client'

import type { CSSProperties, ReactNode } from 'react'
import { useTilt } from '@/hooks/useTilt'

export interface TiltCardProps {
  className?: string
  /** vanilla-tilt max angle in degrees. */
  max?: number
  /** vanilla-tilt hover scale. */
  scale?: number
  /** Value for the `data-reveal` attribute picked up by the global observer. */
  reveal?: 'up' | 'left' | 'right' | 'scale' | 'blur' | 'flip' | 'split'
  revealDelay?: number
  style?: CSSProperties
  children: ReactNode
}

/**
 * A tilt-reactive `<article>`.
 *
 * The legacy build repeated this same wrapper five times (About pillars,
 * course cards, certificates, mentor cards, salary cards) — each with its own
 * `useTilt` call and near-identical markup. Consolidating it here means the
 * surrounding sections can stay Server Components: their content is passed in
 * as `children` and rendered on the server, while only this thin interactive
 * shell hydrates.
 */
export default function TiltCard({
  className = '',
  max = 8,
  scale = 1.02,
  reveal,
  revealDelay,
  style,
  children,
}: TiltCardProps) {
  const tiltRef = useTilt<HTMLElement>({ max, scale })

  return (
    <article
      ref={tiltRef}
      className={className}
      style={style}
      data-reveal={reveal}
      data-reveal-delay={revealDelay}
    >
      {children}
    </article>
  )
}
