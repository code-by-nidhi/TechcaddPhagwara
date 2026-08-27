'use client'

import { motion } from 'framer-motion'
import type { CourseContent } from '@/data/courses/types'
import { Ordinal, Reveal, Section, SectionHead, fadeUp } from './shared'

/**
 * The eligibility band.
 *
 * Numbered rather than icon-led: the six blocks are six different people, and
 * a repeated user glyph on each says nothing the heading does not. The count
 * is the useful signal — it tells a reader arriving from an unusual starting
 * point that theirs is probably one of the six.
 */
export default function WhoCanJoin({ course }: { course: CourseContent }) {
  if (!course.audience.length) return null

  return (
    <Section id="eligibility" tone="dark">
      <Reveal>
        <SectionHead
          eyebrow="Eligibility"
          title={
            <>
              Who can do
              <br />
              this course
            </>
          }
          sub={`The ${course.label} course is built for people at six different starting points, and the batch is deliberately mixed. What matters far more than your background is turning up consistently and finishing what each module asks you to build.`}
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {course.audience.map((a, i) => (
            <motion.li
              key={a.label}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              className="rounded-[22px] border border-slate-200/80 bg-white p-6"
            >
              <span className="inline-grid h-8 w-8 place-items-center rounded-lg bg-[#2563EB]/10">
                <Ordinal i={i} />
              </span>
              <h3 className="mt-5 font-[family-name:var(--font-jakarta)] text-[15.5px] font-bold text-[#0F172A]">
                {a.label}
              </h3>
              <p className="mt-2 text-[13.5px] leading-[1.7] text-[#475569]">{a.copy}</p>
            </motion.li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}
