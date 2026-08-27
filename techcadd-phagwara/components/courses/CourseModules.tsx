'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiClock } from 'react-icons/fi'
import type { CourseContent, CourseModule } from '@/data/courses/types'
import { Chip, Reveal, Section, fadeUp } from './shared'

/**
 * The four stages a course runs in, in the order a real project does:
 * fundamentals, then the core skills, then applied work under supervision,
 * then the portfolio and interview preparation that turn all of it into an
 * offer letter.
 */
const STAGES = [
  {
    title: 'Foundations',
    blurb: 'The groundwork every later module assumes.',
  },
  {
    title: 'Core Skills',
    blurb: 'The working knowledge the job description actually lists.',
  },
  {
    title: 'Applied Work',
    blurb: 'Real requirements, built under supervision.',
  },
  {
    title: 'Live Project & Placement Prep',
    blurb: 'A portfolio you own, and the interview practice to defend it.',
  },
] as const

interface Stage {
  title: string
  blurb: string
  modules: CourseModule[]
}

/**
 * Distribute the syllabus across the four stages.
 *
 * Deliberately proportional rather than fixed-size: catalogue entries run from
 * five modules to twelve, and slicing at hard indices would leave a short
 * course with two empty stages and a long one with everything crammed into the
 * last. Rounding by position keeps every stage non-empty for any count of four
 * or more, and a course with fewer than four modules renders only the stages
 * it can fill.
 */
function toStages(modules: CourseModule[]): Stage[] {
  const n = modules.length

  return STAGES.map((stage, i) => ({
    ...stage,
    modules: modules.slice(
      Math.round((i * n) / STAGES.length),
      Math.round(((i + 1) * n) / STAGES.length),
    ),
  })).filter((stage) => stage.modules.length > 0)
}

/** Arrow-key step for a roving tablist, or 0 for any other key. */
function arrowDelta(key: string): number {
  if (key === 'ArrowDown' || key === 'ArrowRight') return 1
  if (key === 'ArrowUp' || key === 'ArrowLeft') return -1
  return 0
}

export default function CourseModules({ course }: { course: CourseContent }) {
  const stages = useMemo(() => toStages(course.modules), [course.modules])
  const [active, setActive] = useState(1)

  if (!stages.length) return null

  /* A short catalogue entry can yield fewer than four stages, so the default
     selection has to be clamped rather than assumed to exist. */
  const current = stages[Math.min(active, stages.length - 1)]
  const currentIndex = Math.min(active, stages.length - 1)

  const topics = current.modules.flatMap((m) => m.topics)

  return (
    <Section id="syllabus" tint>
      <Reveal>
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-14">
          <div>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full bg-[#2563EB]/10 px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.16em] text-[#2563EB]">
                Syllabus
              </span>
              <span className="inline-flex items-center rounded-full bg-[#2563EB]/10 px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.16em] text-[#2563EB]">
                Hands-on
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="mt-5 font-[family-name:var(--font-jakarta)] text-[clamp(1.7rem,3.2vw,2.6rem)] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#0F172A]"
            >
              What you will
              <br />
              actually <em className="font-[family-name:var(--font-manrope)] italic">build</em>
            </motion.h2>
          </div>

          <motion.p variants={fadeUp} className="text-[14px] leading-[1.85] text-[#475569]">
            The syllabus is arranged so every module produces an asset rather than a set of notes.
            You will cover{' '}
            {course.modules
              .slice(0, 4)
              .map((m) => m.title.toLowerCase())
              .join(', ')}
            , and finish with a live project built on {course.tools.slice(0, 3).join(', ')}. Modules
            run in the order a real project runs: foundations first, then the core skills, then
            applied work under supervision, then the portfolio and interview preparation that turn
            all of it into an offer letter.
          </motion.p>
        </div>

        <motion.div
          variants={fadeUp}
          className="mt-11 grid gap-5 rounded-[26px] border border-slate-200/80 bg-white p-4 sm:p-5 lg:grid-cols-[0.92fr_1.08fr]"
        >
          {/* ------------------------------------------------- stage list -- */}
          {/*
           * A tablist, not a set of disclosures: all four buttons drive the one
           * panel beside them, so `aria-expanded` on each would announce four
           * simultaneously-open regions. Roving `tabIndex` keeps the group a
           * single tab stop, with arrow keys moving between stages.
           */}
          <div role="tablist" aria-label="Course stages" className="flex flex-col gap-2.5">
            {stages.map((stage, i) => {
              const on = i === currentIndex
              return (
                <button
                  key={stage.title}
                  type="button"
                  role="tab"
                  id={`stage-tab-${i}`}
                  aria-selected={on}
                  aria-controls="stage-detail"
                  tabIndex={on ? 0 : -1}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => {
                    const delta = arrowDelta(e.key)
                    if (!delta) return
                    e.preventDefault()
                    const next = (currentIndex + delta + stages.length) % stages.length
                    setActive(next)
                    document.getElementById(`stage-tab-${next}`)?.focus()
                  }}
                  className={`w-full rounded-[18px] p-5 text-left transition-colors ${
                    on ? 'bg-[#101E52] text-white' : 'bg-[#F6F9FF] hover:bg-[#EDF3FF]'
                  }`}
                >
                  <span
                    className={`text-[11px] font-bold tracking-[0.18em] ${
                      on ? 'text-white/45' : 'text-[#94A3B8]'
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={`mt-2 block font-[family-name:var(--font-jakarta)] text-[15.5px] font-bold ${
                      on ? 'text-white' : 'text-[#0F172A]'
                    }`}
                  >
                    {stage.title}
                  </span>
                  <span
                    className={`mt-2 block text-[12.5px] leading-[1.65] ${
                      on ? 'text-white/60' : 'text-[#64748B]'
                    }`}
                  >
                    {stage.modules.map((m) => m.title).join(' • ')}
                  </span>
                </button>
              )
            })}
          </div>

          {/* ----------------------------------------------------- detail -- */}
          <div
            id="stage-detail"
            role="tabpanel"
            aria-labelledby={`stage-tab-${currentIndex}`}
            tabIndex={0}
            className="flex flex-col gap-5 rounded-[18px] bg-[#F6F9FF] p-6 sm:p-8"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-[#2563EB]">
                    {course.label}
                  </span>
                  <span className="text-[11px] font-bold tracking-[0.14em] text-[#94A3B8]">
                    {String(currentIndex + 1).padStart(2, '0')}/
                    {String(stages.length).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="mt-4 font-[family-name:var(--font-jakarta)] text-[clamp(1.3rem,2.2vw,1.7rem)] font-extrabold tracking-[-0.02em] text-[#0F172A]">
                  {current.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-[1.7] text-[#475569]">{current.blurb}</p>

                <ul className="mt-6 space-y-3.5">
                  {current.modules.map((m) => (
                    <li key={m.title} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563EB]"
                      />
                      <div>
                        <p className="text-[14px] font-semibold leading-snug text-[#0F172A]">
                          {m.title}
                        </p>
                        <p className="mt-1 text-[13px] leading-[1.65] text-[#475569]">
                          {m.summary}
                        </p>
                        {m.duration && (
                          <p className="mt-1.5 inline-flex items-center gap-1.5 text-[11.5px] font-medium text-[#94A3B8]">
                            <FiClock size={11} />
                            {m.duration}
                            {m.lessons ? ` · ${m.lessons} sessions` : ''}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>

                {topics.length > 0 && (
                  <div className="mt-7 border-t border-slate-200 pt-6">
                    <p className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-[#94A3B8]">
                      Topics covered
                    </p>
                    <div className="mt-3.5 flex flex-wrap gap-2">
                      {topics.map((t) => (
                        <Chip key={t}>{t}</Chip>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </Reveal>
    </Section>
  )
}
