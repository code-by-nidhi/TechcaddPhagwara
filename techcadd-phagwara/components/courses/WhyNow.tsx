'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiArrowRight, FiCheck } from 'react-icons/fi'
import type { CourseContent } from '@/data/courses/types'
import { Reveal, fadeUp } from './shared'

/**
 * The market-timing band, and the page's one mid-scroll call to action.
 *
 * Two claims only, both concrete — what the training actually is, and what the
 * role actually pays here. A longer list would dilute them; this section
 * exists to be the one place on the page a sceptical reader gets a number
 * before the salary card further down.
 *
 * It paints its own ground rather than using `Section`, because the dark
 * variant is a gradient with a dot grid over it rather than the flat navy the
 * shared component draws. That is also why the tone below is written out on
 * both sides instead of leaning on `.course-dark`.
 */
export default function WhyNow({
  course,
  tone = 'dark',
}: {
  course: CourseContent
  /**
   * Which band this section paints.
   *
   * Defaults to dark, which is what the course pages have always shown. The
   * After 12th pages run a strict alternation and take the light variant here
   * — see `After12Landing`.
   */
  tone?: 'light' | 'dark'
}) {
  if (!course.whyNow) return null

  const dark = tone === 'dark'

  return (
    <section
      className={`relative overflow-hidden py-16 lg:py-20 ${
        dark
          ? 'bg-[linear-gradient(120deg,#0B1739_0%,#132B6B_60%,#1D48B8_100%)]'
          : 'bg-[#F6F9FF]'
      }`}
    >
      {/* The dot grid only reads on the dark ground; on the light one it would
          be either invisible or noise, so it is dropped rather than re-tinted. */}
      {dark && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:22px_22px]"
        />
      )}

      <div className="relative mx-auto w-full max-w-[1200px] px-5 sm:px-6 lg:px-8">
        <Reveal className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <motion.span
              variants={fadeUp}
              className={`inline-flex items-center rounded-full px-3.5 py-1 text-[11px] font-semibold ${
                dark
                  ? 'border border-white/20 bg-white/10 text-white/85'
                  : 'border border-slate-200 bg-white text-[#2563EB]'
              }`}
            >
              Why now
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className={`mt-5 max-w-[26rem] font-[family-name:var(--font-jakarta)] text-[clamp(1.6rem,3vw,2.35rem)] font-extrabold leading-[1.14] tracking-[-0.025em] ${
                dark ? 'text-white' : 'text-[#0F172A]'
              }`}
            >
              {course.whyNow.title}
            </motion.h2>

            <motion.ul variants={fadeUp} className="mt-7 space-y-4">
              {course.whyNow.points.map((point) => (
                <li key={point} className="flex gap-3.5">
                  <span
                    className={`mt-1 grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full ${
                      dark
                        ? 'bg-[#60A5FA]/20 text-[#93C5FD]'
                        : 'bg-[#2563EB]/10 text-[#2563EB]'
                    }`}
                  >
                    <FiCheck size={11} strokeWidth={3} />
                  </span>
                  <span
                    className={`text-[14.5px] leading-[1.7] ${
                      dark ? 'text-white/75' : 'text-[#475569]'
                    }`}
                  >
                    {point}
                  </span>
                </li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUp}>
              <Link
                href="#enquiry"
                className={`group mt-9 inline-flex items-center gap-2.5 rounded-full py-3 pl-6 pr-3 text-[14px] font-bold transition-colors ${
                  dark
                    ? 'bg-white/10 text-white ring-1 ring-inset ring-white/20 hover:bg-white/18'
                    : 'bg-[#2563EB] text-white hover:bg-[#1D4ED8]'
                }`}
              >
                Talk to a Course Advisor
                <span
                  className={`grid h-7 w-7 place-items-center rounded-full transition-transform group-hover:translate-x-0.5 ${
                    dark ? 'bg-white text-[#0B1739]' : 'bg-white text-[#2563EB]'
                  }`}
                >
                  <FiArrowRight size={13} />
                </span>
              </Link>
            </motion.div>
          </div>

          <motion.figure
            variants={fadeUp}
            className={`relative min-h-[300px] overflow-hidden rounded-[22px] border lg:min-h-[340px] ${
              dark ? 'border-white/15' : 'border-slate-200/80'
            }`}
          >
            <Image
              src="/images/course/classroom.webp"
              alt={`A ${course.label} session at the techcadd Phagwara centre`}
              fill
              sizes="(max-width: 1024px) 100vw, 540px"
              className="object-cover"
            />
            {/* The caption sits on the photograph in both tones, so the scrim
                and its white text stay put regardless of the band behind. */}
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
