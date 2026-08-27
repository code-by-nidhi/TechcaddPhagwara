'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMinus, FiPlus } from 'react-icons/fi'
import type { CourseContent } from '@/data/courses/types'
import { Reveal, Section, SectionHead, fadeUp } from './shared'

/**
 * The FAQ, split into two columns.
 *
 * Columns are filled by alternating rather than by halving the list: an
 * open answer changes its column's height, and with a straight split the
 * longest answers all land in the left column and it ends up twice as tall as
 * the right. Alternating spreads them.
 *
 * Only one panel is open at a time — with fourteen questions, allowing several
 * open turns the section into a wall of prose and the remaining questions
 * scroll off.
 */
export default function CourseFaq({ course }: { course: CourseContent }) {
  const [open, setOpen] = useState<string | null>(course.faqs[0]?.q ?? null)

  if (!course.faqs.length) return null

  const columns = [
    course.faqs.filter((_, i) => i % 2 === 0),
    course.faqs.filter((_, i) => i % 2 === 1),
  ]

  return (
    <Section id="faq" tone="dark">
      <Reveal>
        <SectionHead eyebrow="Got questions?" title="Frequently Asked Questions" />

        <motion.div variants={fadeUp} className="mt-11 grid gap-4 md:grid-cols-2 md:items-start">
          {columns.map((column, ci) => (
            <ul key={ci} className="space-y-4">
              {column.map((faq) => {
                const on = open === faq.q
                return (
                  <li
                    key={faq.q}
                    className={`overflow-hidden rounded-[18px] border transition-colors ${
                      on
                        ? 'border-amber-300/40 bg-white/[0.09]'
                        : 'border-white/12 bg-white/[0.05]'
                    }`}
                  >
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpen(on ? null : faq.q)}
                        aria-expanded={on}
                        className="flex w-full items-center justify-between gap-4 p-5 text-left"
                      >
                        <span className="text-[13.5px] font-bold leading-snug text-white">
                          {faq.q}
                        </span>
                        <span
                          className={`grid h-6 w-6 shrink-0 place-items-center rounded-full transition-colors ${
                            on ? 'bg-amber-300 text-[#0B1739]' : 'bg-white/10 text-white/70'
                          }`}
                        >
                          {on ? <FiMinus size={12} /> : <FiPlus size={12} />}
                        </span>
                      </button>
                    </h3>

                    <AnimatePresence initial={false}>
                      {on && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <p className="px-5 pb-5 text-[13px] leading-[1.75] text-white/65">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                )
              })}
            </ul>
          ))}
        </motion.div>
      </Reveal>
    </Section>
  )
}
