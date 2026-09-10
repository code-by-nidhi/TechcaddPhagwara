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
 *
 * Colour is written out, not inherited
 * ------------------------------------
 * Every other section on these pages leans on the `.course-dark` rules in
 * `styles/tailwind.css` to invert itself. This one cannot: its cards are
 * translucent white over the band, and its open state is an accent fill rather
 * than a text colour, so there is nothing for those rules to map. Both tones
 * are therefore spelled out below. Leaving the dark values in place while
 * passing `tone="light"` renders white questions on a white card — which is
 * exactly what happened on the After 12th pages before this was fixed.
 */
export default function CourseFaq({
  course,
  tone = 'dark',
  eyebrow = 'Got questions?',
  title = 'Frequently Asked Questions',
  sub,
  center = false,
}: {
  course: CourseContent
  /**
   * Which band this section paints.
   *
   * Defaults to the tone the course pages have always used. The After 12th
   * pages run a strict dark/light alternation (see `After12Landing`), so they
   * pass the opposite value.
   */
  tone?: 'light' | 'dark'
  eyebrow?: string
  title?: string
  sub?: string
  /** Centres the heading block, as the After 12th template does. */
  center?: boolean
}) {
  const [open, setOpen] = useState<string | null>(course.faqs[0]?.q ?? null)

  if (!course.faqs.length) return null

  const dark = tone === 'dark'

  const columns = [
    course.faqs.filter((_, i) => i % 2 === 0),
    course.faqs.filter((_, i) => i % 2 === 1),
  ]

  return (
    <Section id="faq" tone={tone}>
      <Reveal>
        <SectionHead center={center} eyebrow={eyebrow} title={title} sub={sub} />

        <motion.div variants={fadeUp} className="mt-11 grid gap-4 md:grid-cols-2 md:items-start">
          {columns.map((column, ci) => (
            <ul key={ci} className="space-y-4">
              {column.map((faq) => {
                const on = open === faq.q
                const panelId = `faq-panel-${ci}-${column.indexOf(faq)}`

                return (
                  <li
                    key={faq.q}
                    className={`overflow-hidden rounded-[18px] transition-colors ${
                      dark
                        ? on
                          ? 'border border-amber-300/40 bg-white/[0.09]'
                          : 'border border-white/12 bg-white/[0.05]'
                        : on
                          ? 'bg-[#E4ECFB] shadow-[0_12px_34px_-24px_rgba(15,23,42,0.5)]'
                          : 'bg-[#EEF2FB]'
                    }`}
                  >
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpen(on ? null : faq.q)}
                        aria-expanded={on}
                        aria-controls={panelId}
                        className="flex w-full items-center justify-between gap-4 p-5 text-left"
                      >
                        <span
                          className={`text-[13.5px] font-bold leading-snug ${
                            dark ? 'text-white' : 'text-[#0F172A]'
                          }`}
                        >
                          {faq.q}
                        </span>
                        <span
                          aria-hidden
                          className={`grid h-6 w-6 shrink-0 place-items-center rounded-full transition-colors ${
                            dark
                              ? on
                                ? 'bg-amber-300 text-[#0B1739]'
                                : 'bg-white/10 text-white/70'
                              : on
                                ? 'bg-[#2563EB] text-white'
                                : 'bg-white text-[#2563EB]'
                          }`}
                        >
                          {on ? <FiMinus size={12} /> : <FiPlus size={12} />}
                        </span>
                      </button>
                    </h3>

                    <AnimatePresence initial={false}>
                      {on && (
                        <motion.div
                          id={panelId}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <p
                            className={`px-5 pb-5 text-[13px] leading-[1.75] ${
                              dark ? 'text-white/65' : 'text-[#475569]'
                            }`}
                          >
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
