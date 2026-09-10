'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMinus, FiPlus } from 'react-icons/fi'
import type { CourseContent } from '@/data/courses/types'
import { Reveal, Section, SectionHead, fadeUp } from './shared'

/**
 * "Where this course takes you", as the branch template draws it.
 *
 * The course pages lead this section with a salary card and list the roles
 * beneath it. The branch inverts that: the roles come first as an accordion,
 * one open by default, because a school-leaver is choosing between job titles
 * before they are comparing pay bands.
 *
 * The salary card is kept below rather than dropped. The section's own standfirst
 * promises "what they pay", and every programme already carries researched
 * bands — removing them would leave the sentence above making a promise the
 * section no longer keeps.
 *
 * Roles without a description
 * ---------------------------
 * `roleDetails` is optional and, where present, usually covers only the first
 * few of `roles`. A role with no copy still gets a row, rendered as a plain
 * item rather than a control that opens onto nothing.
 */
export default function After12Careers({ course }: { course: CourseContent }) {
  const { careerOutcomes, salary } = course
  const details = careerOutcomes.roleDetails ?? []

  /* Every role, with its description where one was written. Ordered by
     `roleDetails` first so the rows that open are the ones at the top. */
  const rows = [
    ...details.map((d) => ({ role: d.role, copy: d.copy })),
    ...careerOutcomes.roles
      .filter((role) => !details.some((d) => d.role === role))
      .map((role) => ({ role, copy: '' })),
  ]

  /* The first row starts open: an accordion where everything is shut reads as
     a list of headings and hides the one answer most readers came for. */
  const [open, setOpen] = useState(0)

  if (rows.length === 0) return null

  return (
    <Section id="careers" tint>
      <Reveal>
        <SectionHead
          center
          eyebrow="Future scope"
          title="Where this course takes you"
          sub="The roles this opens, what they pay in Punjab and beyond, and who is hiring for them — drawn from published job-market listings, not a brochure number."
        />

        <ul className="mx-auto mt-11 grid max-w-[900px] gap-3">
          {rows.map((row, i) => {
            const on = i === open
            const ordinal = String(i + 1).padStart(2, '0')

            /* A role with no description is not a disclosure — there is
               nothing to disclose — so it renders as a static row. */
            if (!row.copy) {
              return (
                <motion.li
                  key={row.role}
                  variants={fadeUp}
                  className="flex items-center gap-4 rounded-[18px] border border-slate-200/80 bg-white px-5 py-4"
                >
                  <span className="text-[11px] font-bold tracking-[0.18em] text-[#94A3B8]">
                    {ordinal}
                  </span>
                  <span className="text-[14.5px] font-bold text-[#0F172A]">{row.role}</span>
                </motion.li>
              )
            }

            return (
              <motion.li
                key={row.role}
                variants={fadeUp}
                className={`overflow-hidden rounded-[18px] border transition-colors ${
                  on
                    ? 'border-[#2563EB]/30 bg-[#EEF4FF]'
                    : 'border-slate-200/80 bg-white hover:border-slate-300'
                }`}
              >
                <h3>
                  <button
                    type="button"
                    /* Collapsing the open row is allowed — a reader who has
                       finished with it should be able to shut it again. */
                    onClick={() => setOpen(on ? -1 : i)}
                    aria-expanded={on}
                    aria-controls={`career-panel-${i}`}
                    id={`career-tab-${i}`}
                    className="flex w-full items-center gap-4 px-5 py-4 text-left"
                  >
                    <span
                      className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-[10.5px] font-bold transition-colors ${
                        on ? 'bg-[#2563EB] text-white' : 'bg-slate-100 text-[#64748B]'
                      }`}
                    >
                      {ordinal}
                    </span>
                    <span className="flex-1 text-[14.5px] font-bold text-[#0F172A]">
                      {row.role}
                    </span>
                    <span
                      aria-hidden
                      className={`grid h-7 w-7 shrink-0 place-items-center rounded-full transition-colors ${
                        on ? 'bg-[#2563EB] text-white' : 'bg-slate-100 text-[#475569]'
                      }`}
                    >
                      {on ? <FiMinus size={13} /> : <FiPlus size={13} />}
                    </span>
                  </button>
                </h3>

                <div
                  id={`career-panel-${i}`}
                  role="region"
                  aria-labelledby={`career-tab-${i}`}
                  hidden={!on}
                  /* Aligned under the title on wide screens, flush on narrow
                     ones — a 4rem indent costs a phone most of its line. */
                  className="px-5 pb-5 sm:pl-16"
                >
                  <p className="text-[13.5px] leading-[1.75] text-[#475569]">{row.copy}</p>
                </div>
              </motion.li>
            )
          })}
        </ul>

        {/* ------------------------------------------------------ salary -- */}
        {salary && (
          <motion.div
            variants={fadeUp}
            className="mx-auto mt-6 max-w-[900px] overflow-hidden rounded-[22px] bg-[linear-gradient(140deg,#0B1739_0%,#14295E_60%,#1B3F8F_100%)] p-6 sm:p-8"
          >
            <p className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-[#93C5FD]">
              Salary outlook — {salary.role}
            </p>
            <p className="mt-2.5 max-w-[46rem] text-[13px] leading-[1.7] text-white/60">
              {salary.summary}
            </p>

            <dl className="mt-6 flex flex-wrap gap-3">
              <div className="rounded-2xl border border-white/12 bg-white/[0.06] px-5 py-4">
                <dt className="text-[9.5px] font-bold uppercase tracking-[0.14em] text-white/45">
                  Starting
                </dt>
                <dd className="mt-2 font-[family-name:var(--font-jakarta)] text-[17px] font-extrabold text-white">
                  {salary.starting}
                </dd>
              </div>
              <div className="rounded-2xl border border-[#60A5FA]/40 bg-[#2563EB]/20 px-5 py-4">
                <dt className="text-[9.5px] font-bold uppercase tracking-[0.14em] text-white/55">
                  After 2 years
                </dt>
                <dd className="mt-2 font-[family-name:var(--font-jakarta)] text-[17px] font-extrabold text-[#BFDBFE]">
                  {salary.after2}
                </dd>
              </div>
            </dl>

            <p className="mt-6 border-t border-white/10 pt-5 text-[11.5px] leading-[1.7] text-white/40">
              Indicative ranges compiled from public job-market listings. Actual offers vary by
              employer, skillset and interview performance.
            </p>
          </motion.div>
        )}

        {/* ------------------------------------------------------ hiring -- */}
        <motion.div
          variants={fadeUp}
          className="mx-auto mt-6 max-w-[900px] rounded-[22px] border border-slate-200/80 bg-white p-6 sm:p-8"
        >
          <h3 className="text-[15px] font-bold text-[#0F172A]">Who is hiring for this</h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {careerOutcomes.hiring.map((where) => (
              <li
                key={where}
                className="flex items-center gap-3 rounded-xl bg-[#F6F9FF] px-4 py-3.5 text-[13.5px] text-[#334155]"
              >
                <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563EB]" />
                {where}
              </li>
            ))}
          </ul>
        </motion.div>
      </Reveal>
    </Section>
  )
}
