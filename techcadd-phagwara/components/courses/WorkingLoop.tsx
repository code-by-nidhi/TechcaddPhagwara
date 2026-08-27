'use client'

import { motion } from 'framer-motion'
import { WHY_TECHCADD, WORKING_LOOP } from '@/data/courses/shared'
import type { CourseContent } from '@/data/courses/types'
import { Reveal, fadeUp } from './shared'

/**
 * Two bands that belong together: the loop every project runs through, and the
 * case for the centre itself.
 *
 * The loop's three steps are annotated with a deliverable, which is the only
 * thing tying an otherwise generic process to the page it is on — a reader
 * sees their own capstone named under "Present" rather than a slogan. A course
 * that names its own artefacts supplies them; otherwise they fall back to that
 * course's projects, in order.
 */
export default function WorkingLoop({ course }: { course: CourseContent }) {
  const why = course.whyTechcadd ?? WHY_TECHCADD
  const loop = course.workingLoop ?? WORKING_LOOP

  return (
    <>
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 lg:px-8">
          <Reveal className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <motion.div variants={fadeUp}>
              <p className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#2563EB]">
                The working loop
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-jakarta)] text-[clamp(1.4rem,2.6vw,2rem)] font-extrabold leading-[1.2] tracking-[-0.025em] text-[#0F172A]">
                Learn it. Build it. Make it yours.
              </h2>
              <p className="mt-4 max-w-[24rem] text-[14px] leading-[1.8] text-[#475569]">
                Every project moves through the same loop: understand the brief, build with
                guidance, then explain the decisions behind your work.
              </p>
            </motion.div>

            <motion.ol variants={fadeUp} className="grid gap-8 sm:grid-cols-3">
              {loop.map((step, i) => (
                <li key={step.title} className="sm:border-l sm:border-slate-200 sm:pl-6 sm:first:border-0 sm:first:pl-0">
                  <span className="text-[11px] font-bold tracking-[0.18em] text-[#2563EB]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-3 font-[family-name:var(--font-jakarta)] text-[15px] font-bold text-[#0F172A]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.7] text-[#475569]">{step.copy}</p>
                  {('artefact' in step ? step.artefact : course.projects[i]?.name) && (
                    <p className="mt-4 text-[12px] font-medium text-[#94A3B8]">
                      {'artefact' in step ? step.artefact : course.projects[i]?.name}
                    </p>
                  )}
                </li>
              ))}
            </motion.ol>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(150deg,#0B1739_0%,#14295E_60%,#1B3F8F_100%)] py-16 lg:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-25 [background-image:radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:22px_22px]"
        />

        <div className="relative mx-auto w-full max-w-[1200px] px-5 sm:px-6 lg:px-8">
          <Reveal>
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center rounded-full border border-amber-300/35 bg-amber-300/10 px-3.5 py-1 text-[11px] font-semibold text-amber-200"
            >
              Why techcadd
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mt-5 max-w-[20rem] font-[family-name:var(--font-jakarta)] text-[clamp(1.6rem,3vw,2.35rem)] font-extrabold leading-[1.14] tracking-[-0.025em] text-white"
            >
              Why students choose techcadd
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-[46rem] text-[14.5px] leading-[1.85] text-white/60"
            >
              There are many places to learn this in Phagwara and the brochure syllabus looks
              similar at all of them. What differs is who teaches, whether you ever touch real work,
              and whether anyone picks up the phone after you have paid. techcadd has trained
              students across Punjab since 2007 on the same model: small batches, working
              practitioners as trainers, client projects as coursework.
            </motion.p>

            <ul className="mt-12 grid gap-x-10 gap-y-9 md:grid-cols-3">
              {why.map((item) => (
                <motion.li
                  key={item.title}
                  variants={fadeUp}
                  className="border-t border-white/12 pt-5"
                >
                  <h3 className="font-[family-name:var(--font-jakarta)] text-[14.5px] font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[13px] leading-[1.75] text-white/55">{item.copy}</p>
                </motion.li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  )
}
