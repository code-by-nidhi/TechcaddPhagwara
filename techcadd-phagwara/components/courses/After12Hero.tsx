'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiArrowRight, FiStar } from 'react-icons/fi'
import { COURSE_STATS } from '@/data/courses/shared'
import type { CourseContent } from '@/data/courses/types'
import { fadeUp, stagger } from './shared'

/**
 * The After 12th hero.
 *
 * Distinct from `CourseHero` in three ways, each of which is the reason it is a
 * separate component rather than another prop on that one:
 *
 *  - the subject inside the headline is picked out in amber, so a reader
 *    skimming a search-results tab sees the course before the boilerplate;
 *  - the Google rating sits beside the headline rather than in a stat band
 *    under it, which is what makes the first screen an argument rather than a
 *    list of figures;
 *  - a summary card carries the four facts a school-leaver actually decides on
 *    — duration, eligibility, mode and what is included — above the fold,
 *    instead of leaving them to a spec strip further down.
 *
 * Every figure here already exists in the site's own data. `COURSE_STATS`
 * supplies the rating and review count; the rest is the programme's own record.
 */

/**
 * The headline with the programme's own name lifted out of it.
 *
 * A title reads "Best After 12th 3-Month Cloud Computing Program in Phagwara"
 * and the label is "Cloud Computing", so the label is found inside the title
 * rather than assumed to sit at either end. A title that does not contain its
 * own label — which no programme currently has — simply renders plain, because
 * a highlight in the wrong place is worse than none.
 */
function Headline({ title, label }: { title: string; label: string }) {
  const at = title.indexOf(label)
  if (at === -1) return <>{title}</>

  return (
    <>
      {title.slice(0, at)}
      <span className="text-amber-300 underline decoration-amber-300/45 decoration-2 underline-offset-[6px]">
        {label}
      </span>
      {title.slice(at + label.length)}
    </>
  )
}

export default function After12Hero({ course }: { course: CourseContent }) {
  const rating = COURSE_STATS.find((s) => s.label === 'Google rating')

  const highlights = [
    { label: 'Duration', value: course.duration },
    { label: 'Eligibility', value: course.eligibility },
    { label: 'Mode', value: course.mode },
    { label: 'Includes', value: 'Certificate + Placement Support' },
  ]

  return (
    <section className="relative overflow-hidden bg-[#0B1739]">
      {/* Ground: a wide blue wash from the right over a dot grid, matching the
          course pages so the two templates read as one site. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_100%_at_85%_40%,rgba(37,99,235,0.55)_0%,rgba(11,23,57,0)_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:radial-gradient(rgba(255,255,255,0.13)_1px,transparent_1px)] [background-size:22px_22px]"
      />

      <div className="relative mx-auto w-full max-w-[1200px] px-5 pb-16 pt-[calc(var(--nav-h)+3rem)] sm:px-6 lg:px-8 lg:pb-20">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.nav
            variants={fadeUp}
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-[12.5px] text-white/55"
          >
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <span aria-hidden>/</span>
            <Link href="/#journey" className="transition-colors hover:text-white">
              After 12th Courses
            </Link>
            <span aria-hidden>/</span>
            <span aria-current="page" className="text-white/85">
              {course.label}
            </span>
          </motion.nav>

          <div className="mt-7 grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-start lg:gap-12">
            <motion.h1
              variants={fadeUp}
              className="font-[family-name:var(--font-jakarta)] text-[clamp(1.9rem,4.4vw,3.1rem)] font-extrabold leading-[1.12] tracking-[-0.03em] text-white"
            >
              <Headline title={course.title} label={course.label} />
            </motion.h1>

            {/* The rating, as a quiet panel rather than a badge — it is
                corroboration for the headline beside it, not a claim of its own. */}
            {rating && (
              <motion.div
                variants={fadeUp}
                className="justify-self-start rounded-[18px] border border-white/15 bg-white/[0.06] px-6 py-5 text-center lg:justify-self-end"
              >
                <span className="block text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white/55">
                  Rated on Google
                </span>
                <span className="mt-2 flex items-center justify-center gap-1.5">
                  <span className="font-[family-name:var(--font-jakarta)] text-[2rem] font-extrabold leading-none text-white">
                    {rating.value.replace('★', '')}
                  </span>
                  <FiStar className="fill-amber-300 text-amber-300" size={18} aria-hidden />
                </span>
                <span className="mt-2 block text-[11.5px] text-white/55">{rating.note}</span>
              </motion.div>
            )}
          </div>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-[42rem] text-[14.5px] leading-[1.8] text-white/70"
          >
            {course.summary}
          </motion.p>

          {/* ------------------------------------------------ summary card -- */}
          <motion.div
            variants={fadeUp}
            className="mt-9 rounded-[22px] border border-white/12 bg-white/[0.05] p-6 backdrop-blur-sm sm:p-8"
          >
            <h2 className="font-[family-name:var(--font-jakarta)] text-[clamp(1.1rem,2vw,1.4rem)] font-bold leading-[1.3] text-white">
              {course.label} Course in Phagwara
            </h2>

            <p className="mt-3 max-w-[52rem] text-[13.5px] leading-[1.8] text-white/65">
              {course.overview.split('\n')[0]}
            </p>

            <p className="mt-6 text-[12px] font-bold uppercase tracking-[0.14em] text-amber-300">
              Key Highlights
            </p>

            <dl className="mt-4 grid gap-x-10 gap-y-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item.label} className="flex items-baseline gap-2.5">
                  <span
                    aria-hidden
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300"
                  />
                  <dt className="text-[13.5px] font-bold text-white">{item.label}:</dt>
                  <dd className="text-[13.5px] text-white/70">{item.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="#enquiry"
                className="group inline-flex items-center gap-2.5 rounded-full bg-amber-300 py-3 pl-6 pr-3 text-[14px] font-bold text-[#0B1739] transition-transform hover:-translate-y-0.5"
              >
                Enrol Now
                <span className="grid h-7 w-7 place-items-center rounded-full bg-[#0B1739] text-amber-300 transition-transform group-hover:translate-x-0.5">
                  <FiArrowRight size={13} />
                </span>
              </Link>
              <Link
                href="#enquiry"
                className="inline-flex items-center rounded-full border border-white/25 bg-white/[0.06] px-6 py-3 text-[14px] font-bold text-white transition-colors hover:bg-white/12"
              >
                Book a Free Demo
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
