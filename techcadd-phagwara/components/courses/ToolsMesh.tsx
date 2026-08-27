'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Icon from '@/components/ui/Icon'
import type { CourseContent } from '@/data/courses/types'

/**
 * The toolchain, drawn as a mesh around the course itself.
 *
 * A flat list of twelve chips reads as a specification; the same twelve
 * arranged around a centre reads as a stack that fits together, which is the
 * actual claim being made. The orbit is laid out from the tool count rather
 * than hard-coded positions, so a course with six tools and one with twelve
 * both come out balanced.
 *
 * Below a tablet the orbit collapses to a wrapped list — at 360px it
 * either overlaps or shrinks the labels past legibility.
 */
export default function ToolsMesh({ course }: { course: CourseContent }) {
  const reduced = useReducedMotion()
  const tools = course.tools.slice(0, 8)

  if (!tools.length) return null

  return (
    <section className="relative overflow-hidden bg-[#0B1739] py-16 lg:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:22px_22px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.35)_0%,rgba(11,23,57,0)_65%)]"
      />

      <div className="relative mx-auto w-full max-w-[1200px] px-5 text-center sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#93C5FD]"
        >
          The toolchain behind the craft
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mx-auto mt-4 max-w-[30rem] font-[family-name:var(--font-jakarta)] text-[clamp(1.6rem,3vw,2.35rem)] font-extrabold leading-[1.15] tracking-[-0.03em] text-white"
        >
          One course.
          <br />A mesh of real tools.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mx-auto mt-4 max-w-[30rem] text-[14px] leading-[1.75] text-white/60"
        >
          Everything below is installed on the lab machines and used on live client work, not shown
          once in a slide and forgotten.
        </motion.p>

        {/* ------------------------------------------------------- orbit -- */}
        <div className="relative mx-auto mt-14 hidden aspect-square w-full max-w-[560px] sm:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="absolute left-1/2 top-1/2 grid h-[104px] w-[104px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[linear-gradient(145deg,#2563EB,#60A5FA)] text-white shadow-[0_0_60px_-6px_rgba(37,99,235,0.9)]"
          >
            <span className="flex flex-col items-center gap-1">
              <Icon name={course.icon} size={22} />
              <span className="max-w-[76px] truncate text-[11px] font-bold">{course.label}</span>
            </span>
          </motion.div>

          {tools.map((tool, i) => {
            const angle = -90 + (i * 360) / tools.length
            const rad = (angle * Math.PI) / 180
            const x = 50 + Math.cos(rad) * 38
            const y = 50 + Math.sin(rad) * 38

            return (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.07, duration: 0.4 }}
                style={{ left: `${x}%`, top: `${y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
              >
                <motion.span
                  animate={reduced ? undefined : { y: [0, -7, 0] }}
                  transition={{
                    duration: 4 + (i % 4) * 0.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.25,
                  }}
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-3.5 py-2.5 text-[12px] font-semibold text-[#0B1739] shadow-[0_18px_38px_-20px_rgba(0,0,0,0.95)]"
                >
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
                  {tool}
                </motion.span>
              </motion.span>
            )
          })}
        </div>

        {/* Below `sm` the orbit is unreadable — the same data as a plain list. */}
        <ul className="mt-10 flex flex-wrap justify-center gap-2.5 sm:hidden">
          {course.tools.map((tool) => (
            <li
              key={tool}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-3.5 py-2.5 text-[12px] font-semibold text-[#0B1739]"
            >
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
              {tool}
            </li>
          ))}
        </ul>

        {/* The orbit shows eight; everything beyond it still has to be listed
            somewhere, and a screen reader gets the complete set either way. */}
        {course.tools.length > tools.length && (
          <ul className="mt-9 hidden flex-wrap justify-center gap-2.5 sm:flex">
            {course.tools.slice(tools.length).map((tool) => (
              <li
                key={tool}
                className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.07] px-3.5 py-1.5 text-[12.5px] font-medium text-white/80"
              >
                {tool}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
