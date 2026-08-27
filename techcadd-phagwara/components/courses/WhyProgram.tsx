'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import type { CourseContent } from '@/data/courses/types'
import { Ordinal, Reveal, Section, SectionHead, fadeUp } from './shared'

/**
 * The honest-argument band: why a year of this beats the alternatives.
 *
 * The lead card carries `course.demand` — the one claim that is specific to
 * this track's local market — and the two columns underneath make the case
 * that applies to every course. Splitting it that way keeps the specific
 * claim short enough to be checkable, which is the only reason it persuades.
 */
export default function WhyProgram({ course }: { course: CourseContent }) {
  return (
    <Section id="why">
      <Reveal>
        <SectionHead
          eyebrow="The case for it"
          title={
            <>
              Why this programme
              <br />
              is worth your year
            </>
          }
        />

        <div className="mt-11 grid gap-6 lg:grid-cols-2">
          <motion.blockquote
            variants={fadeUp}
            className="flex items-center rounded-[22px] border border-slate-200/80 bg-white p-8 sm:p-10"
          >
            <p className="text-[15px] leading-[1.85] text-[#475569]">
              {course.demand} That gap is the whole argument for this course: there is local
              demand, there are budgets, and there are very few trained people to hand the work to.
            </p>
          </motion.blockquote>

          <motion.figure
            variants={fadeUp}
            className="relative min-h-[280px] overflow-hidden rounded-[22px] border-2 border-[#2563EB] bg-[#0B1739]"
          >
            <Image
              src="/images/course/classroom.webp"
              alt="A session running at the techcadd Phagwara centre"
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,23,57,0.1)_35%,rgba(11,23,57,0.88)_100%)]"
            />
            <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
              <span className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-white/55">
                The case for it
              </span>
              <p className="mt-2 max-w-[20rem] font-[family-name:var(--font-jakarta)] text-[17px] font-bold leading-snug text-white">
                Build skills that hold up beyond the classroom.
              </p>
            </figcaption>
          </motion.figure>
        </div>

        <motion.div
          variants={fadeUp}
          className="mt-9 grid gap-6 text-[14.5px] leading-[1.85] text-[#475569] lg:grid-cols-2 lg:gap-10"
        >
          <div className="space-y-5">
            <p>
              What separates this from a playlist of tutorials is supervision on real work. From the
              second half of the course you build on live client projects with a trainer beside you,
              make decisions that have consequences, and correct them the following week. That loop
              is the skill. No employer in Phagwara will take your word for it without work they can
              inspect.
            </p>
            <p>
              Be realistic about the money. A fresher who finishes with a working portfolio starts
              near the bottom of the band and moves quickly; someone who finishes with a certificate
              and nothing to show does not. The difference is entirely what you built.
            </p>
          </div>

          <div className="space-y-5">
            <p>
              The alternative is what most people try first: free videos, a cheap online course, six
              months of drifting, and knowledge you cannot demonstrate. A structured programme with
              live projects, a mentor who corrects you, an internship letter and a placement cell
              that actually calls employers is the difference between knowing the subject and being
              hired to do it.
            </p>
            <p>
              Students reach the Phagwara centre from Banga, Nakodar, Kartarpur and the university
              belt, and the weekend batch exists so a job or a degree does not have to be paused to
              attend.
            </p>
          </div>
        </motion.div>

        {/* The specific reasons, where a course states its own. */}
        {course.whyChooseUs.length > 0 && (
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {course.whyChooseUs.map((reason, i) => (
              <motion.li
                key={reason.title}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="rounded-[22px] border border-slate-200/80 bg-white p-6 shadow-[0_14px_36px_-28px_rgba(15,23,42,0.55)]"
              >
                <span className="inline-grid h-8 w-8 place-items-center rounded-lg bg-[#2563EB]/10">
                  <Ordinal i={i} />
                </span>
                <h3 className="mt-5 font-[family-name:var(--font-jakarta)] text-[15.5px] font-bold leading-snug text-[#0F172A]">
                  {reason.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-[1.7] text-[#475569]">{reason.copy}</p>
              </motion.li>
            ))}
          </ul>
        )}
      </Reveal>
    </Section>
  )
}
