'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiArrowRight, FiCheck } from 'react-icons/fi'
import type { CourseContent } from '@/data/courses/types'
import { Reveal, fadeUp } from './shared'

/**
 * The market-timing band.
 *
 * Two claims only, both concrete — what the training actually is, and what the
 * role actually pays here. A longer list would dilute them; this section
 * exists to be the one place on the page a sceptical reader gets a number
 * before the salary card further down.
 */
export default function WhyNow({ course }: { course: CourseContent }) {
  if (!course.whyNow) return null

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(120deg,#0B1739_0%,#132B6B_60%,#1D48B8_100%)] py-16 lg:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:22px_22px]"
      />

      <div className="relative mx-auto w-full max-w-[1200px] px-5 sm:px-6 lg:px-8">
        <Reveal className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-[11px] font-semibold text-white/85"
            >
              Why now
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mt-5 max-w-[26rem] font-[family-name:var(--font-jakarta)] text-[clamp(1.6rem,3vw,2.35rem)] font-extrabold leading-[1.14] tracking-[-0.025em] text-white"
            >
              {course.whyNow.title}
            </motion.h2>

            <motion.ul variants={fadeUp} className="mt-7 space-y-4">
              {course.whyNow.points.map((point) => (
                <li key={point} className="flex gap-3.5">
                  <span className="mt-1 grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-[#60A5FA]/20 text-[#93C5FD]">
                    <FiCheck size={11} strokeWidth={3} />
                  </span>
                  <span className="text-[14.5px] leading-[1.7] text-white/75">{point}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUp}>
              <Link
                href="#enquiry"
                className="group mt-9 inline-flex items-center gap-2.5 rounded-full bg-white/10 py-3 pl-6 pr-3 text-[14px] font-bold text-white ring-1 ring-inset ring-white/20 transition-colors hover:bg-white/18"
              >
                Talk to a Course Advisor
                <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-[#0B1739] transition-transform group-hover:translate-x-0.5">
                  <FiArrowRight size={13} />
                </span>
              </Link>
            </motion.div>
          </div>

          <motion.figure
            variants={fadeUp}
            className="relative min-h-[300px] overflow-hidden rounded-[22px] border border-white/15 lg:min-h-[340px]"
          >
            <Image
              src="/images/course/classroom.webp"
              alt={`A ${course.label} session at the techcadd Phagwara centre`}
              fill
              sizes="(max-width: 1024px) 100vw, 540px"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,23,57,0.12)_40%,rgba(11,23,57,0.85)_100%)]"
            />
            <figcaption className="absolute inset-x-0 bottom-0 p-6 text-[10.5px] font-bold uppercase tracking-[0.16em] text-white/70">
              Reviewed by mentors. Built for interviews.
            </figcaption>
          </motion.figure>
        </Reveal>
      </div>
    </section>
  )
}
