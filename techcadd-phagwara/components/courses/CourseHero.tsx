'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiArrowRight, FiCheck } from 'react-icons/fi'
import Icon from '@/components/ui/Icon'
import { COURSE_INCLUDES, COURSE_STATS } from '@/data/courses/shared'
import type { CourseContent } from '@/data/courses/types'
import { fadeUp, stagger } from './shared'
import CourseHeroArt from './CourseHeroArt'

/**
 * The course page's opening band.
 *
 * Three stacked pieces on one navy ground: the pitch and its calls to action,
 * the four-column specification strip (duration, mode, eligibility, includes),
 * and the centre-wide stat band. They share a section so the gradient runs
 * behind all three without a seam.
 */
export default function CourseHero({
  course,
  image,
}: {
  course: CourseContent
  /** Public URL of the course's artwork; the drawn panel stands in without it. */
  image?: string
}) {
  return (
    <section className="relative overflow-hidden bg-[#0B1739]">
      {/* Ground: a wide blue wash from the lower right, over a dot grid. The
          grid is drawn rather than shipped as an image so it stays crisp at
          any density. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_100%_at_85%_40%,rgba(37,99,235,0.55)_0%,rgba(11,23,57,0)_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:radial-gradient(rgba(255,255,255,0.13)_1px,transparent_1px)] [background-size:22px_22px]"
      />

      <div className="relative mx-auto w-full max-w-[1200px] px-5 pb-14 pt-[calc(var(--nav-h)+3.5rem)] sm:px-6 lg:px-8 lg:pb-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12"
        >
          {/* ------------------------------------------------------ copy -- */}
          <div>
            <motion.nav
              variants={fadeUp}
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-[13px] text-white/55"
            >
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
              <span aria-hidden>/</span>
              <Link href="/#courses" className="transition-colors hover:text-white">
                Courses
              </Link>
              <span aria-hidden>/</span>
              <span aria-current="page" className="text-white/85">
                {course.label}
              </span>
            </motion.nav>

            <motion.div variants={fadeUp} className="mt-7 flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[13px] font-semibold text-white">
                {course.label}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/35 bg-amber-300/10 px-4 py-1.5 text-[13px] font-semibold text-amber-200">
                <Icon name="sparkles" size={13} />
                AI-Powered Curriculum
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-6 font-[family-name:var(--font-jakarta)] text-[clamp(2.1rem,5.2vw,3.6rem)] font-extrabold leading-[1.06] tracking-[-0.03em] text-white"
            >
              {course.title}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-[34rem] text-[15.5px] leading-[1.75] text-white/70"
            >
              {course.summary}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="#enquiry"
                className="group inline-flex items-center gap-3 rounded-full bg-white py-3 pl-6 pr-3 text-[14.5px] font-bold text-[#0B1739] transition-transform hover:-translate-y-0.5"
              >
                Book a free demo class
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#2563EB] text-white transition-transform group-hover:translate-x-0.5">
                  <FiArrowRight size={15} />
                </span>
              </Link>
              <Link
                href="#enquiry"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-[14.5px] font-bold text-white transition-colors hover:bg-white/10"
              >
                Talk to a counsellor
              </Link>
            </motion.div>

            <motion.ul variants={fadeUp} className="mt-8 flex flex-wrap gap-2.5">
              {COURSE_INCLUDES.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.07] py-1.5 pl-1.5 pr-4 text-[13px] font-medium text-white/85"
                >
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-amber-300 text-[#0B1739]">
                    <FiCheck size={13} strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* -------------------------------------------------------- art -- */}
          <motion.div variants={fadeUp} className="lg:pl-4">
            {image ? (
              /* The illustration is decorative — the course name it carries is
                 already the <h1> a few inches to the left, so repeating it in
                 alt text would have a screen reader read the title twice. */
              <div className="relative mx-auto aspect-[3/2] w-full max-w-[560px] overflow-hidden rounded-[28px] border border-white/15 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.75)]">
                <Image
                  src={image}
                  alt=""
                  fill
                  priority
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover"
                />
              </div>
            ) : (
              <CourseHeroArt course={course} />
            )}
          </motion.div>
        </motion.div>

        {/* ------------------------------------------------ specification -- */}
        <motion.dl
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 grid gap-8 border-t border-white/12 pt-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            { k: 'Duration', v: course.duration },
            { k: 'Mode', v: course.mode },
            { k: 'Eligibility', v: course.eligibility },
            { k: 'Includes', v: 'Internship Letter' },
          ].map((row) => (
            <div key={row.k}>
              <dt className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/45">
                {row.k}
              </dt>
              <dd className="mt-2.5 font-[family-name:var(--font-jakarta)] text-[19px] font-bold leading-snug text-white">
                {row.v}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>

      {/* -------------------------------------------------------- stats -- */}
      <div className="relative border-t border-white/10 bg-[linear-gradient(100deg,#0B1739_0%,#132B6B_55%,#1D48B8_100%)]">
        <div className="mx-auto grid w-full max-w-[1200px] gap-8 px-5 py-12 sm:px-6 md:grid-cols-3 lg:px-8 lg:py-14">
          {COURSE_STATS.map((stat) => (
            <div key={stat.label}>
              <p className="font-[family-name:var(--font-jakarta)] text-[clamp(2rem,4vw,2.9rem)] font-extrabold leading-none tracking-[-0.03em] text-amber-300">
                {stat.value}
              </p>
              <p className="mt-3 text-[15px] font-bold text-white">{stat.label}</p>
              <p className="mt-1 text-[13px] text-white/55">{stat.note}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
