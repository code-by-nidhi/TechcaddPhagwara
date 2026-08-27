'use client'

import Image from 'next/image'
import { Fragment, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import type { CourseContent } from '@/data/courses/types'
import { Reveal, Section, SectionHead, fadeUp } from './shared'

/**
 * Emphasise every tool the course teaches wherever it appears in the prose.
 *
 * The overview is one long paragraph, and the names inside it — Android
 * Studio, Jetpack Compose, Room — are the part a reader actually scans for.
 * Marking them in the copy itself would mean carrying markup in the data and
 * keeping it in step with the tool list; deriving it from `course.tools`
 * cannot drift, because there is only one list.
 *
 * Longest-first matching stops a short name swallowing a longer one that
 * contains it ("Java" inside "JavaScript"), and the word boundaries stop a
 * name matching mid-word.
 */
function emphasise(text: string, tools: string[]): ReactNode[] {
  const names = [...tools]
    .filter((t) => t.length > 2)
    .sort((a, b) => b.length - a.length)
    .map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))

  if (names.length === 0) return [text]

  const pattern = new RegExp(`(?<![\\w-])(${names.join('|')})(?![\\w-])`, 'gi')

  return text.split(pattern).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-bold text-[#0F172A]">
        {part}
      </strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  )
}

export default function CourseOverview({ course }: { course: CourseContent }) {
  return (
    <Section id="overview">
      <Reveal>
        <SectionHead eyebrow="Overview" title="Course overview" />

        <motion.p
          variants={fadeUp}
          className="mt-7 max-w-[62rem] text-[15.5px] leading-[1.9] text-[#475569]"
        >
          {emphasise(course.overview, course.tools)}
        </motion.p>

        <motion.figure
          variants={fadeUp}
          className="relative mt-12 aspect-[16/7] w-full overflow-hidden rounded-[24px] bg-[#0B1739]"
        >
          <Image
            src="/images/course/lab.webp"
            alt={`Students working through the ${course.label} track in the techcadd Phagwara lab`}
            fill
            sizes="(max-width: 1200px) 100vw, 1136px"
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,23,57,0.15)_0%,rgba(11,23,57,0.75)_100%)]"
          />
          <figcaption className="absolute inset-x-0 bottom-0 p-6 text-[13.5px] font-medium text-white/85 sm:p-8">
            Every module ends in a working piece a trainer reviews with you — not a quiz.
          </figcaption>
        </motion.figure>
      </Reveal>
    </Section>
  )
}
