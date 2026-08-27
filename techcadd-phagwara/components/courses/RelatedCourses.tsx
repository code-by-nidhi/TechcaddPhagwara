'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import type { CourseSummary } from '@/data/courses/types'
import { Reveal, Section, SectionHead, fadeUp } from './shared'

export default function RelatedCourses({ courses }: { courses: CourseSummary[] }) {
  if (!courses.length) return null

  return (
    <Section id="related">
      <Reveal>
        <SectionHead eyebrow="Explore more" title="Related courses" />

        <ul className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <motion.li key={course.slug} variants={fadeUp}>
              <Link
                href={`/${course.slug}`}
                className="group flex h-full flex-col rounded-[22px] border border-slate-200/80 bg-white p-6 transition-shadow duration-500 hover:shadow-[0_28px_56px_-30px_rgba(37,99,235,0.45)]"
              >
                <span className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-[#2563EB]">
                  {course.categoryTitle}
                </span>
                <h3 className="mt-3.5 font-[family-name:var(--font-jakarta)] text-[16px] font-bold text-[#0F172A]">
                  {course.label}
                </h3>
                <p className="mt-2.5 text-[13px] leading-[1.7] text-[#475569]">{course.summary}</p>

                <span className="mt-6 inline-flex items-center gap-2 text-[13px] font-bold text-[#2563EB]">
                  View course
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-[#2563EB]/10 transition-transform group-hover:translate-x-0.5">
                    <FiArrowRight size={12} />
                  </span>
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}
