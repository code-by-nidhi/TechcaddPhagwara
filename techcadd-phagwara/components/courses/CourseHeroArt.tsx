'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Icon from '@/components/ui/Icon'
import type { CourseContent } from '@/data/courses/types'

/**
 * The hero's artwork, generated from the course's own data.
 *
 * The sibling site ships a bespoke illustration per course. Only seventeen of
 * those exist, and this catalogue has twenty-seven tracks — the ten without
 * one would have fallen back to a generic stock frame that says nothing about
 * the course. Drawing the panel instead means every course gets artwork that
 * is actually about it: the course icon at the centre, ringed by the first
 * five tools it teaches.
 *
 * It also costs no image bytes and stays sharp at any density, which matters
 * more here than anywhere else on the page — this is the largest thing above
 * the fold.
 */
export default function CourseHeroArt({ course }: { course: CourseContent }) {
  const reduced = useReducedMotion()
  const chips = course.tools.slice(0, 5)

  return (
    <div className="relative mx-auto aspect-[4/3.4] w-full max-w-[520px]">
      {/* Glow behind the core. */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.55)_0%,rgba(59,130,246,0)_70%)] blur-xl"
      />

      {/* The dashed orbit the chips are pinned to. */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[74%] w-[74%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/15"
      />

      {/* ------------------------------------------------------------ core */}
      <motion.div
        animate={reduced ? undefined : { y: [0, -9, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-1/2 top-1/2 grid h-[122px] w-[122px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[32px] border border-white/20 bg-[linear-gradient(145deg,#2563EB,#1D4ED8)] text-white shadow-[0_24px_60px_-20px_rgba(37,99,235,0.85)]"
      >
        <Icon name={course.icon} size={52} />
      </motion.div>

      {/* ----------------------------------------------------------- chips */}
      {chips.map((tool, i) => {
        /* Five chips spread over the orbit, starting at the top and skipping
           the bottom sixth so nothing collides with the core's shadow. */
        const angle = -90 + (i * 360) / (chips.length + 1)
        const rad = (angle * Math.PI) / 180
        const x = 50 + Math.cos(rad) * 43
        const y = 50 + Math.sin(rad) * 41

        return (
          <motion.div
            key={tool}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35 + i * 0.09, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            style={{ left: `${x}%`, top: `${y}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
          >
            <motion.span
              animate={reduced ? undefined : { y: [0, -6, 0] }}
              transition={{
                duration: 4.5 + i * 0.4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.3,
              }}
              className="inline-flex max-w-[9.5rem] items-center gap-2 rounded-2xl border border-white/15 bg-white/95 px-3 py-2 text-[12px] font-semibold leading-tight text-[#0B1739] shadow-[0_16px_34px_-18px_rgba(0,0,0,0.9)]"
            >
              <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563EB]" />
              {tool}
            </motion.span>
          </motion.div>
        )
      })}
    </div>
  )
}
