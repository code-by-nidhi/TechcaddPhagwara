'use client'

import { motion } from 'framer-motion'
import { FiCheck } from 'react-icons/fi'
import type { CourseContent } from '@/data/courses/types'
import { Reveal, Section, SectionHead, fadeUp } from './shared'

/**
 * "How techcadd compares."
 *
 * Two presentations of one dataset rather than a table that reflows badly: a
 * real `<table>` from `md` up, and the same rows as stacked cards below it. A
 * nine-row three-column table squeezed into 360px is unreadable however it is
 * scrolled, and a horizontal scroller hides the right-hand column — which is
 * half the comparison.
 *
 * The right column is deliberately framed as a market pattern, not a rival
 * institute; `note` carries that disclaimer and is not optional.
 */
export default function Comparison({ course }: { course: CourseContent }) {
  const data = course.comparison
  if (!data?.rows.length) return null

  return (
    <Section id="compare" tint>
      <Reveal>
        <SectionHead
          eyebrow="Side by side"
          title="How techcadd compares"
          sub={`Choosing a ${course.label} course should be about more than a certificate. If the goal is a career, the things worth comparing are the coding practice, the projects, the trainer support and the skills you can actually apply.`}
        />

        {/* ------------------------------------------------------- table -- */}
        <motion.div
          variants={fadeUp}
          className="mt-11 hidden overflow-hidden rounded-[22px] border border-slate-200/80 bg-white md:block"
        >
          {/* `aria-label` rather than a visually-hidden <caption>: hiding one
              would pull in a Tailwind utility whose class name `base.css`
              already defines, shadowing the project's own rule site-wide. */}
          <table
            className="w-full border-collapse text-left"
            aria-label={`${course.label} at techcadd compared with what institutes commonly offer`}
          >
            <thead>
              <tr className="bg-[#101E52]">
                <th
                  scope="col"
                  className="w-[26%] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-white/55"
                >
                  Feature
                </th>
                <th
                  scope="col"
                  className="w-[38%] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-amber-300"
                >
                  techcadd
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-white/55"
                >
                  What institutes commonly offer
                </th>
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row) => (
                <tr key={row.feature} className="border-t border-slate-200/80 align-top">
                  <th
                    scope="row"
                    className="px-6 py-5 text-[13.5px] font-bold text-[#0F172A]"
                  >
                    {row.feature}
                  </th>
                  <td className="bg-[#2563EB]/[0.04] px-6 py-5">
                    <span className="flex gap-2.5">
                      <span className="mt-0.5 grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-[#2563EB]/12 text-[#2563EB]">
                        <FiCheck size={10} strokeWidth={3} />
                      </span>
                      <span className="text-[13.5px] leading-[1.7] text-[#334155]">
                        {row.techcadd}
                      </span>
                    </span>
                  </td>
                  <td className="px-6 py-5 text-[13.5px] leading-[1.7] text-[#94A3B8]">
                    {row.others}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* -------------------------------------------------------- cards -- */}
        <div className="mt-9 space-y-3.5 md:hidden">
          {data.rows.map((row) => (
            <motion.div
              key={row.feature}
              variants={fadeUp}
              className="overflow-hidden rounded-[18px] border border-slate-200/80 bg-white"
            >
              <p className="bg-[#101E52] px-5 py-3 text-[13px] font-bold text-white">
                {row.feature}
              </p>
              <div className="px-5 py-4">
                <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#2563EB]">
                  techcadd
                </p>
                <p className="mt-1.5 text-[13.5px] leading-[1.7] text-[#334155]">{row.techcadd}</p>
              </div>
              <div className="border-t border-slate-200/80 px-5 py-4">
                <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#94A3B8]">
                  Commonly offered
                </p>
                <p className="mt-1.5 text-[13.5px] leading-[1.7] text-[#94A3B8]">{row.others}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          variants={fadeUp}
          className="mt-7 max-w-[52rem] text-[12.5px] leading-[1.8] text-[#94A3B8]"
        >
          {data.note}
        </motion.p>
      </Reveal>
    </Section>
  )
}
