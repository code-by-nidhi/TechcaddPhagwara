'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiArrowRight, FiCode } from 'react-icons/fi'
import type { CourseContent, SalaryMarket } from '@/data/courses/types'
import { Reveal, Section, SectionHead, fadeUp } from './shared'

/**
 * One market's two bars.
 *
 * Widths come from `scale` — the band midpoint in LPA — measured against one
 * maximum shared by every market on the card, which is what makes the three
 * columns comparable at a glance. Reading a width off the formatted label
 * instead would mean parsing "₹2.2–4 LPA" and would still get a monthly figure
 * wrong. The bars are decorative: the numbers beside them carry the value, so
 * they are hidden from assistive tech rather than given a redundant label.
 */
function MarketRow({ market, max }: { market: SalaryMarket; max: number }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
      <p className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-white/45">
        {market.name}
      </p>

      {(
        [
          { label: 'Fresher', value: market.fresher, scale: market.scale.fresher },
          { label: 'After 2 years', value: market.after2, scale: market.scale.after2 },
        ] as const
      ).map((row) => (
        <div key={row.label} className="mt-4 first:mt-5">
          <div className="flex items-baseline justify-between gap-3">
            <span className="text-[12.5px] text-white/60">{row.label}</span>
            <span className="text-[12.5px] font-bold text-white">{row.value}</span>
          </div>
          <div aria-hidden className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: `${Math.min(100, (row.scale / max) * 100)}%` }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="block h-full rounded-full bg-[linear-gradient(90deg,#2563EB,#60A5FA)]"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default function CareerOutcomes({ course }: { course: CourseContent }) {
  const { salary, careerOutcomes, careerFaqs } = course

  /* One scale across every market and both experience levels, so a taller bar
     always means more money regardless of which column it is in. */
  const max = salary
    ? Math.max(...salary.markets.flatMap((m) => [m.scale.fresher, m.scale.after2]))
    : 0

  return (
    <Section id="careers" tint>
      <Reveal>
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-16">
          <SectionHead
            eyebrow="Future scope"
            title={
              <>
                Where this course
                <br />
                takes you
              </>
            }
          />
          <motion.p variants={fadeUp} className="text-[14px] leading-[1.85] text-[#475569]">
            The roles this opens, what they pay in Punjab and beyond, and who is hiring for them —
            drawn from published job-market listings on one comparable scale, not a brochure number.
          </motion.p>
        </div>

        {/* ------------------------------------------------------ salary -- */}
        {salary && (
          <motion.div
            variants={fadeUp}
            className="mt-11 overflow-hidden rounded-[26px] bg-[linear-gradient(140deg,#0B1739_0%,#14295E_60%,#1B3F8F_100%)] p-6 sm:p-9"
          >
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/10 text-[#93C5FD]">
                  <FiCode size={18} />
                </span>
                <div>
                  <p className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-[#93C5FD]">
                    Salary outlook
                  </p>
                  <h3 className="mt-1.5 font-[family-name:var(--font-jakarta)] text-[clamp(1.25rem,2.2vw,1.6rem)] font-extrabold tracking-[-0.02em] text-white">
                    {salary.role}
                  </h3>
                  <p className="mt-2 max-w-[24rem] text-[13px] leading-[1.65] text-white/55">
                    {salary.summary}
                  </p>
                </div>
              </div>

              <dl className="flex gap-3">
                <div className="rounded-2xl border border-white/12 bg-white/[0.06] px-5 py-4">
                  <dt className="text-[9.5px] font-bold uppercase tracking-[0.14em] text-white/45">
                    Starting package
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
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {salary.markets.map((market) => (
                <MarketRow key={market.name} market={market} max={max} />
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-between gap-5 border-t border-white/10 pt-6">
              <p className="max-w-[40rem] text-[11.5px] leading-[1.7] text-white/40">
                Indicative ranges for {salary.role} roles, compiled from public job-market listings
                and drawn on the same scale in every market. Actual offers vary by employer, skillset
                and interview performance — Punjab pay typically reaches 2× the fresher ceiling
                within two years of delivery experience.
              </p>
              <Link
                href="#enquiry"
                className="group inline-flex shrink-0 items-center gap-2.5 rounded-full bg-white/10 py-2.5 pl-5 pr-2.5 text-[13px] font-bold text-white ring-1 ring-inset ring-white/20 transition-colors hover:bg-white/18"
              >
                Talk about your target role
                <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-[#0B1739] transition-transform group-hover:translate-x-0.5">
                  <FiArrowRight size={12} />
                </span>
              </Link>
            </div>
          </motion.div>
        )}

        {/* ----------------------------------------------------- hiring -- */}
        <motion.div
          variants={fadeUp}
          className="mt-6 rounded-[26px] border border-slate-200/80 bg-white p-6 sm:p-8"
        >
          <h3 className="text-[15px] font-bold text-[#0F172A]">
            Where {salary?.role ?? course.label} graduates get hired
          </h3>
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

        {/* ------------------------------------------------- career Q&A -- */}
        {careerFaqs && careerFaqs.length > 0 && (
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {careerFaqs.map((faq, i) => (
              <motion.li
                key={faq.q}
                variants={fadeUp}
                className="rounded-[22px] border border-slate-200/80 bg-white p-6"
              >
                <span className="text-[11px] font-bold tracking-[0.18em] text-[#94A3B8]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h4 className="mt-3.5 font-[family-name:var(--font-jakarta)] text-[15px] font-bold leading-snug text-[#0F172A]">
                  {faq.q}
                </h4>
                <p className="mt-2.5 text-[13.5px] leading-[1.7] text-[#475569]">{faq.a}</p>
              </motion.li>
            ))}
          </ul>
        )}
      </Reveal>
    </Section>
  )
}
