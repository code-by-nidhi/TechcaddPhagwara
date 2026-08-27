'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiArrowRight, FiCheck } from 'react-icons/fi'
import { CERTIFICATION_POINTS } from '@/data/courses/shared'
import type { CourseContent } from '@/data/courses/types'
import { Reveal, fadeUp } from './shared'

/**
 * One of the two certificates, drawn rather than photographed.
 *
 * There is no certificate artwork in this project's assets, and a stock
 * certificate image would be worse than useless here — it would be a picture
 * of somebody else's document on a page promising ours. Drawing it keeps the
 * real logo and the real wording, stays sharp at any density, and costs
 * nothing to ship.
 */
function CertificateCard({ title, className = '' }: { title: string; className?: string }) {
  return (
    <div
      aria-hidden
      className={`relative overflow-hidden rounded-[10px] border border-amber-200/70 bg-[#FDFBF4] p-4 shadow-[0_28px_60px_-28px_rgba(0,0,0,0.65)] sm:p-5 ${className}`}
    >
      {/* Double rule, the way a printed certificate carries one. */}
      <div className="pointer-events-none absolute inset-[7px] rounded-[6px] border border-amber-300/60" />
      <div className="pointer-events-none absolute inset-[11px] rounded-[4px] border border-amber-200/50" />

      <div className="relative flex flex-col items-center px-3 py-4 text-center">
        <Image
          src="/images/techcadd-logo-navy.png"
          alt=""
          width={899}
          height={242}
          className="h-[15px] w-auto opacity-90"
        />

        <p className="mt-3 text-[7.5px] font-semibold uppercase tracking-[0.24em] text-slate-400">
          Techcadd Computer Education
        </p>

        <p className="mt-2.5 font-[family-name:var(--font-jakarta)] text-[13px] font-extrabold uppercase tracking-[0.14em] text-[#0B1739]">
          Certificate
        </p>
        <p className="mt-0.5 text-[7.5px] italic text-slate-500">{title}</p>

        <p className="mt-3 border-b border-slate-300 pb-1 text-[9px] font-semibold text-slate-600">
          Student Name
        </p>

        {/* Ruled lines standing in for the body copy. */}
        <span className="mt-3.5 block h-[3px] w-[78%] rounded-full bg-slate-200" />
        <span className="mt-1.5 block h-[3px] w-[64%] rounded-full bg-slate-200" />

        <div className="mt-4 flex w-full items-end justify-between px-1">
          <span className="block h-[2px] w-10 rounded-full bg-slate-300" />
          <span className="grid h-6 w-6 place-items-center rounded-full bg-amber-300/80 text-[7px] font-bold text-amber-900">
            ★
          </span>
          <span className="block h-[2px] w-10 rounded-full bg-slate-300" />
        </div>
      </div>
    </div>
  )
}

export default function Certification({ course }: { course: CourseContent }) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(140deg,#0B1739_0%,#14295E_55%,#1B3F8F_100%)] py-16 lg:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-25 [background-image:radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:22px_22px]"
      />

      <div className="relative mx-auto w-full max-w-[1200px] px-5 sm:px-6 lg:px-8">
        <Reveal className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-[11px] font-semibold text-white/85"
            >
              Certification
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mt-5 max-w-[20rem] font-[family-name:var(--font-jakarta)] text-[clamp(1.6rem,3vw,2.35rem)] font-extrabold leading-[1.14] tracking-[-0.025em] text-white"
            >
              Get Certified in {course.label}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-[30rem] text-[14.5px] leading-[1.8] text-white/65"
            >
              Complete the course with a portfolio of live projects and receive an
              industry-recognised certificate, plus a documented internship letter accepted by
              Punjab universities.
            </motion.p>

            <motion.ul variants={fadeUp} className="mt-8 grid gap-3 sm:grid-cols-2">
              {CERTIFICATION_POINTS.map((point) => (
                <li
                  key={point.title}
                  className="rounded-2xl border border-white/12 bg-white/[0.06] p-4"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="grid h-[22px] w-[22px] shrink-0 place-items-center rounded-md bg-[#60A5FA]/25 text-[#BFDBFE]">
                      <FiCheck size={12} strokeWidth={3} />
                    </span>
                    <span className="text-[13.5px] font-bold text-white">{point.title}</span>
                  </span>
                  <p className="mt-2 text-[12.5px] leading-[1.6] text-white/55">{point.copy}</p>
                </li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUp}>
              <Link
                href="#enquiry"
                className="group mt-9 inline-flex items-center gap-2.5 rounded-full bg-white py-3 pl-6 pr-3 text-[14px] font-bold text-[#0B1739] transition-transform hover:-translate-y-0.5"
              >
                Download Brochure
                <span className="grid h-7 w-7 place-items-center rounded-full bg-[#2563EB] text-white transition-transform group-hover:translate-x-0.5">
                  <FiArrowRight size={13} />
                </span>
              </Link>
            </motion.div>
          </div>

          {/* ------------------------------------------------ certificates -- */}
          <motion.div variants={fadeUp}>
            <div className="relative mx-auto aspect-[4/3.2] w-full max-w-[440px]">
              <CertificateCard
                title="of Project Excellence"
                className="absolute right-0 top-0 w-[74%] rotate-[3deg]"
              />
              <CertificateCard
                title="of Course Completion"
                className="absolute bottom-0 left-0 w-[80%] -rotate-[3deg]"
              />
            </div>
            <p className="mx-auto mt-6 max-w-[26rem] text-center text-[12.5px] leading-[1.7] text-white/50">
              Two certificates on completion — the course certificate and a separate capstone
              project certificate.
            </p>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}
