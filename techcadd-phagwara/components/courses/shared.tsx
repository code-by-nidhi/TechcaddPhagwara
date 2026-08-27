'use client'

import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

/**
 * One rhythm, one heading treatment, used by every section of a course page.
 *
 * The course pages are the one part of this site written in Tailwind utilities
 * (see `styles/tailwind.css` for why that is scoped rather than global). The
 * font variables, though, are the project's own — `--font-jakarta` and
 * `--font-manrope` from `app/layout.tsx` — so type on a course page matches
 * the homepage rather than introducing a third family.
 */

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

export const CARD =
  'rounded-[22px] border border-slate-200/80 bg-white shadow-[0_14px_36px_-28px_rgba(15,23,42,0.55)]'

/**
 * The dark band colour every `tone="dark"` Section paints.
 *
 * Deliberately NOT the hero's colour: the hero picks up the homepage's own
 * navy, while the bands further down sit a shade deeper so they read as
 * sections rather than as a repeat of the header.
 */
export const DARK = '#101E52'

export function Section({
  id,
  tint = false,
  tone = 'light',
  children,
  className = '',
}: {
  id?: string
  /** Soft blue-grey ground, for alternating bands. */
  tint?: boolean
  /**
   * "dark" paints the section brand navy and adds `course-dark`, which
   * re-tints the headings, body copy, cards and borders inside it. That colour
   * inversion lives in `styles/tailwind.css` rather than in every child
   * component, so a band can be flipped by changing this one prop.
   */
  tone?: 'light' | 'dark'
  children: ReactNode
  className?: string
}) {
  const dark = tone === 'dark'

  return (
    <section
      id={id}
      style={dark ? { backgroundColor: DARK } : undefined}
      className={`relative overflow-x-clip py-16 lg:py-20 ${
        dark ? 'course-dark' : tint ? 'bg-[#F6F9FF]' : 'bg-white'
      } ${className}`}
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}

export function SectionHead({
  eyebrow,
  title,
  sub,
  center = false,
}: {
  eyebrow?: string
  title: ReactNode
  sub?: string
  center?: boolean
}) {
  return (
    <motion.div variants={fadeUp} className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold text-[#2563EB]">
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-[family-name:var(--font-jakarta)] text-[clamp(1.6rem,2.8vw,2.4rem)] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#0F172A] ${
          eyebrow ? 'mt-4' : ''
        }`}
      >
        {title}
      </h2>
      {sub && <p className="mt-3 text-[14.5px] leading-[1.8] text-[#475569]">{sub}</p>}
    </motion.div>
  )
}

/** Wraps a block so its children stagger in once scrolled to. */
export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/** Small labelled pill used for tools, topics and tech lists. */
export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[12.5px] font-medium text-[#334155]">
      {children}
    </span>
  )
}

/** The numbered "01 / 02" label every card grid on the page leads with. */
export function Ordinal({ i }: { i: number }) {
  return (
    <span className="font-[family-name:var(--font-jakarta)] text-[11px] font-bold tracking-[0.18em] text-[#2563EB]">
      {String(i + 1).padStart(2, '0')}
    </span>
  )
}
