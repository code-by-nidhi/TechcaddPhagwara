'use client'

import { motion } from 'framer-motion'
import type { CourseContent } from '@/data/courses/types'
import { Ordinal, Reveal, Section, SectionHead, fadeUp } from './shared'

/**
 * The numbered "what you'll learn" band on an After 12th page.
 *
 * The course pages never drew this: `learningOutcomes` reached the page only
 * as `teaches` in the JSON-LD, so the one place a reader could see the same
 * list was the curriculum accordion, several screens further down. The After
 * 12th template puts it directly under the overview, which is where a school
 * leaver deciding between two programmes actually looks.
 *
 * Title and copy from one string
 * ------------------------------
 * An outcome is authored as a single sentence, and most carry their own
 * headline before an em dash — "Security is taught early — IAM, MFA and
 * CloudTrail before EC2". Splitting there gives the card a bold lead and a
 * supporting line without asking every one of the forty-two programmes to
 * restate its outcomes as pairs. One with no dash is simply a bold line on its
 * own, which is why the copy below is optional rather than padded.
 */
function split(outcome: string): { title: string; copy: string } {
  /* An em dash with spaces around it, which is how these are written. A
     hyphen is left alone: it turns up inside "hands-on" and "on-device", and
     splitting there would cut a card in half mid-word. */
  const at = outcome.indexOf(' — ')
  if (at === -1) return { title: outcome, copy: '' }

  return { title: outcome.slice(0, at).trim(), copy: outcome.slice(at + 3).trim() }
}

export default function WhatYouWillLearn({ course }: { course: CourseContent }) {
  const outcomes = course.learningOutcomes ?? []
  if (outcomes.length === 0) return null

  return (
    <Section id="what-you-will-learn" tone="dark">
      <Reveal>
        <SectionHead
          title="What You’ll Learn"
          sub="Every module ends in something you have built and a trainer has reviewed, so the list below is work you will have done rather than topics you will have heard about."
        />

        <ul className="mt-11 grid gap-4 sm:grid-cols-2">
          {outcomes.map((outcome, i) => {
            const { title, copy } = split(outcome)

            return (
              <motion.li
                key={outcome}
                variants={fadeUp}
                className="rounded-[22px] border border-slate-200/80 bg-white p-6 sm:p-7"
              >
                <Ordinal i={i} />
                <h3 className="mt-3 font-[family-name:var(--font-jakarta)] text-[16px] font-bold leading-[1.4] text-[#0F172A]">
                  {title}
                </h3>
                {copy && (
                  <p className="mt-2.5 text-[13.5px] leading-[1.75] text-[#475569]">{copy}</p>
                )}
              </motion.li>
            )
          })}
        </ul>
      </Reveal>
    </Section>
  )
}
