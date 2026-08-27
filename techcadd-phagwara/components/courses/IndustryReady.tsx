'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiArrowRight, FiCheck } from 'react-icons/fi'
import { COURSE_BENEFITS, COURSE_TILES } from '@/data/courses/shared'
import type { CourseContent } from '@/data/courses/types'
import { Reveal, fadeUp } from './shared'

/**
 * The "what you actually get" band: a captioned photograph beside the
 * checklist and the four headline figures.
 *
 * The figures are site-wide (`COURSE_TILES`), and so is the checklist unless a
 * course supplies its own — most tracks make the same promise, and repeating
 * it per course would only create twenty-seven places for it to drift.
 */
export default function IndustryReady({ course }: { course: CourseContent }) {
  const benefits = course.industryReady ?? COURSE_BENEFITS.map((copy) => ({ title: copy, copy: '' }))

  return (
    <section className="bg-[#F6F9FF] py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 lg:px-8">
        <Reveal className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-7">
          {/* ------------------------------------------------------ photo -- */}
          <motion.div
            variants={fadeUp}
            className="relative min-h-[320px] overflow-hidden rounded-[24px] bg-[#0B1739] lg:min-h-[420px]"
          >
            <Image
              src="/images/course/campus1.webp"
              alt={`The techcadd Phagwara campus, where the ${course.label} batches run`}
              fill
              sizes="(max-width: 1024px) 100vw, 660px"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(160deg,rgba(11,23,57,0.35)_0%,rgba(11,23,57,0.92)_78%)]"
            />

            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
              <span className="inline-flex items-center rounded-full border border-amber-300/35 bg-amber-300/10 px-3 py-1 text-[11px] font-semibold text-amber-200">
                AI-Powered Curriculum
              </span>
              <h2 className="mt-4 max-w-[22rem] font-[family-name:var(--font-jakarta)] text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold leading-[1.15] tracking-[-0.02em] text-white">
                Industry-Ready Training in {course.label}
              </h2>
              <Link
                href="#enquiry"
                className="group mt-6 inline-flex items-center gap-2.5 rounded-full bg-white/12 py-2.5 pl-5 pr-2.5 text-[13.5px] font-bold text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                Get Started
                <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-[#0B1739] transition-transform group-hover:translate-x-0.5">
                  <FiArrowRight size={13} />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* ------------------------------------------------- checklist -- */}
          <div className="flex flex-col gap-6">
            <motion.div
              variants={fadeUp}
              className="rounded-[24px] border border-slate-200/80 bg-white p-7 shadow-[0_14px_36px_-28px_rgba(15,23,42,0.55)] sm:p-8"
            >
              <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#2563EB]">
                What you get
              </h3>
              <ul className="mt-6 space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit.title} className="flex gap-3.5">
                    <span className="mt-0.5 grid h-[22px] w-[22px] shrink-0 place-items-center rounded-md bg-[#2563EB]/10 text-[#2563EB]">
                      <FiCheck size={13} strokeWidth={3} />
                    </span>
                    <span>
                      <span className="block text-[14px] font-semibold leading-[1.5] text-[#0F172A]">
                        {benefit.title}
                      </span>
                      {benefit.copy && (
                        <span className="mt-1 block text-[13px] leading-[1.65] text-[#475569]">
                          {benefit.copy}
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.dl
              variants={fadeUp}
              className="grid flex-1 grid-cols-2 gap-x-6 gap-y-7 rounded-[24px] bg-[linear-gradient(135deg,#1D48B8_0%,#2563EB_100%)] p-7 sm:p-8"
            >
              {/*
               * `flex-col-reverse` so the term stays before its description in
               * the DOM — which is what a description list requires — while the
               * value still reads on top.
               *
               * The earlier version carried the label twice: once visible, and
               * once in a visually-hidden <dt>, so a screen reader announced it
               * twice. Hiding it also pulled in a Tailwind utility whose name
               * `base.css` already defines, which then shadowed the project's
               * own rule on every page of the site.
               */}
              {COURSE_TILES.map((tile) => (
                <div key={tile.label} className="flex flex-col-reverse gap-2">
                  <dt className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-white/65">
                    {tile.label}
                  </dt>
                  <dd className="font-[family-name:var(--font-jakarta)] text-[clamp(1.4rem,2.4vw,1.85rem)] font-extrabold leading-none tracking-[-0.02em] text-white">
                    {tile.value}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
