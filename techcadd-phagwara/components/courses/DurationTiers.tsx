'use client'

import { motion } from 'framer-motion'
import { FiCheck, FiMinus } from 'react-icons/fi'
import type { CourseContent } from '@/data/courses/types'
import { Reveal, Section, SectionHead, fadeUp } from './shared'

/**
 * The duration tiers, and what each one adds.
 *
 * The matrix is the point of this section. The tiers are nested — the six
 * month track contains the three month one — so listing each tier's syllabus
 * separately would repeat the foundation three times and bury the only thing a
 * reader is actually deciding between: where each capability *starts*.
 *
 * Below `md` the matrix becomes one block per capability with the tiers as
 * chips. A ten-row four-column grid at 360px is unreadable, and putting it in
 * a horizontal scroller hides the tier headers that give the ticks meaning.
 */
export default function DurationTiers({ course }: { course: CourseContent }) {
  const { durations, capabilities } = course
  if (!durations?.length) return null

  return (
    <Section id="durations">
      <Reveal>
        <SectionHead
          eyebrow="Programme length"
          title="Choose the duration that suits you"
          sub={`The ${course.label} course runs as three nested levels. Each one builds on the last, so you can start at the foundation and continue later without repeating anything.`}
        />

        {/* -------------------------------------------------------- tiers -- */}
        <ul className="mt-11 grid gap-4 lg:grid-cols-3">
          {durations.map((d) => (
            <motion.li
              key={d.length}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              className="flex flex-col rounded-[22px] border border-slate-200/80 bg-[#F6F9FF] p-6 sm:p-7"
            >
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-[family-name:var(--font-jakarta)] text-[22px] font-extrabold tracking-[-0.02em] text-[#0F172A]">
                  {d.length}
                </span>
                <span className="rounded-full bg-[#2563EB]/10 px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#2563EB]">
                  {d.tier}
                </span>
              </div>

              <h3 className="mt-4 font-[family-name:var(--font-jakarta)] text-[15.5px] font-bold leading-snug text-[#0F172A]">
                {d.heading}
              </h3>
              <p className="mt-2.5 text-[13.5px] leading-[1.7] text-[#475569]">{d.blurb}</p>

              <div className="mt-6">
                <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#94A3B8]">
                  Skills &amp; tools
                </p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {d.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full bg-white px-2.5 py-1 text-[11.5px] font-medium text-[#334155]"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto border-t border-slate-200/80 pt-5">
                <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#94A3B8]">
                  Recommended for
                </p>
                <p className="mt-2 text-[13px] leading-[1.65] text-[#475569]">{d.recommendedFor}</p>
              </div>
            </motion.li>
          ))}
        </ul>

        {/* ------------------------------------------------------ matrix -- */}
        {capabilities && capabilities.length > 0 && (
          <>
            <motion.h3
              variants={fadeUp}
              className="mt-14 font-[family-name:var(--font-jakarta)] text-[clamp(1.2rem,2vw,1.55rem)] font-extrabold tracking-[-0.02em] text-[#0F172A]"
            >
              What changes with each duration
            </motion.h3>

            <motion.div
              variants={fadeUp}
              className="mt-6 hidden overflow-hidden rounded-[22px] border border-slate-200/80 bg-white md:block"
            >
              <table
                className="w-full border-collapse text-left"
                aria-label={`Capabilities included in each ${course.label} duration`}
              >
                <thead>
                  <tr className="bg-[#101E52]">
                    <th
                      scope="col"
                      className="w-[46%] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-white/55"
                    >
                      Capability
                    </th>
                    {durations.map((d) => (
                      <th
                        key={d.length}
                        scope="col"
                        className="px-6 py-4 text-center text-[11px] font-bold uppercase tracking-[0.14em] text-white/85"
                      >
                        {d.length}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {capabilities.map((row) => (
                    <tr key={row.capability} className="border-t border-slate-200/80">
                      <th
                        scope="row"
                        className="px-6 py-3.5 text-[13.5px] font-medium text-[#334155]"
                      >
                        {row.capability}
                      </th>
                      {row.included.map((on, i) => (
                        <td key={durations[i]?.length ?? i} className="px-6 py-3.5 text-center">
                          {on ? (
                            <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-[#2563EB]/12 text-[#2563EB]">
                              <FiCheck size={12} strokeWidth={3} role="img" aria-label="Included" />
                            </span>
                          ) : (
                            <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-slate-100 text-slate-300">
                              <FiMinus size={12} role="img" aria-label="Not included" />
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            {/* One block per capability below `md`. */}
            <div className="mt-6 space-y-2.5 md:hidden">
              {capabilities.map((row) => (
                <motion.div
                  key={row.capability}
                  variants={fadeUp}
                  className="rounded-2xl border border-slate-200/80 bg-white p-4"
                >
                  <p className="text-[13.5px] font-bold text-[#0F172A]">{row.capability}</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {row.included.map((on, i) => (
                      <li
                        key={durations[i]?.length ?? i}
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11.5px] font-semibold ${
                          on
                            ? 'bg-[#2563EB]/10 text-[#2563EB]'
                            : 'bg-slate-100 text-slate-400 line-through'
                        }`}
                      >
                        {on ? <FiCheck size={10} strokeWidth={3} /> : <FiMinus size={10} />}
                        {durations[i]?.length}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </>
        )}

        {course.durationNote && (
          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-[52rem] text-[13.5px] leading-[1.8] text-[#475569]"
          >
            {course.durationNote}
          </motion.p>
        )}
      </Reveal>
    </Section>
  )
}
