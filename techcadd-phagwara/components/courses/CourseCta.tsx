'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiArrowRight, FiPhone } from 'react-icons/fi'
import { brand } from '@/data/site'
import type { CourseContent } from '@/data/courses/types'

/**
 * The mid-page conversion band.
 *
 * A phone number and a demo booking, nothing else — every other link on this
 * page competes for the same click, and a reader who has scrolled this far has
 * already decided they want to talk to somebody.
 */
export default function CourseCta({ course }: { course: CourseContent }) {
  return (
    <section className="bg-white pb-4 pt-16 lg:pb-6 lg:pt-20">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-between gap-8 rounded-[26px] bg-[linear-gradient(120deg,#0B1739_0%,#14295E_50%,#1D48B8_100%)] p-8 sm:p-10"
        >
          <div>
            <span className="inline-flex items-center rounded-full border border-amber-300/35 bg-amber-300/10 px-3.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.14em] text-amber-200">
              Get started today
            </span>
            <h2 className="mt-4 max-w-[26rem] font-[family-name:var(--font-jakarta)] text-[clamp(1.35rem,2.5vw,1.9rem)] font-extrabold leading-[1.18] tracking-[-0.025em] text-white">
              Not sure if {course.label} is the right fit?
            </h2>
            <p className="mt-3 max-w-[26rem] text-[13.5px] leading-[1.7] text-white/60">
              One call with a counsellor is usually enough to find out. Book a free demo class and
              see the lab before you decide.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={brand.phoneHref}
              className="group inline-flex items-center gap-3 rounded-full bg-white py-2.5 pl-5 pr-2.5 text-[14px] font-bold text-[#0B1739] transition-transform hover:-translate-y-0.5"
            >
              <FiPhone size={14} className="text-[#2563EB]" />
              {brand.phone}
              <span className="grid h-8 w-8 place-items-center rounded-full bg-amber-300 text-[#0B1739] transition-transform group-hover:translate-x-0.5">
                <FiArrowRight size={14} />
              </span>
            </a>
            <Link
              href="#enquiry"
              className="inline-flex items-center rounded-full border border-white/25 px-6 py-3 text-[14px] font-bold text-white transition-colors hover:bg-white/10"
            >
              Book a free demo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
