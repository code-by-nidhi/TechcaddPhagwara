'use client'

import { motion } from 'framer-motion'
import Icon, { type IconName } from '@/components/ui/Icon'
import type { CourseContent } from '@/data/courses/types'
import { Reveal, Section, SectionHead, fadeUp } from './shared'

/**
 * The numbered "what you'll learn" band on an After 12th page.
 *
 * The course pages never drew this: `learningOutcomes` reached the page only
 * as `teaches` in the JSON-LD, so the one place a reader could see the same
 * list was the curriculum accordion, several screens further down. The After
 * 12th template puts it directly under the overview, which is where a school
 * leaver deciding between two programmes actually looks.
 *
 * Why it is drawn as a node diagram
 * ---------------------------------
 * The outcomes are not a sequence — you do not finish one before starting the
 * next — they are facets of the same programme. Staggering them either side of
 * a converging point says that, where a numbered column would imply an order
 * the course does not have.
 *
 * The connectors are geometry, not measurement. Cards sit in a two-column grid
 * whose position is known from the index, so each line runs from a computed
 * percentage anchor to the centre of the same coordinate space. Nothing reads
 * the DOM, so there is no resize observer and no layout thrash — and below
 * `lg`, where the columns collapse, the whole overlay is dropped rather than
 * redrawn.
 */

/** Title and copy from one authored sentence — see the note on `split`. */
function split(outcome: string): { title: string; copy: string } {
  /* An em dash with spaces around it, which is how these are written. A
     hyphen is left alone: it turns up inside "hands-on" and "on-device", and
     splitting there would cut a card in half mid-word. */
  const at = outcome.indexOf(' — ')
  if (at === -1) return { title: outcome, copy: '' }

  return { title: outcome.slice(0, at).trim(), copy: outcome.slice(at + 3).trim() }
}

/** The glyph each card carries, by position — see `ROW_ICONS` in `WhoCanJoin`. */
const CARD_ICONS: IconName[] = [
  'layers',
  'cloud',
  'shield',
  'rocket',
  'target',
  'cpu',
  'chart',
  'award',
  'compass',
]

export default function WhatYouWillLearn({ course }: { course: CourseContent }) {
  const outcomes = course.learningOutcomes ?? []
  if (outcomes.length === 0) return null

  const rowCount = Math.ceil(outcomes.length / 2)

  /**
   * Where a card sits in the 0–100 space the connectors are drawn in.
   *
   * The x inset keeps the line short enough to read as a tether rather than a
   * diagonal across the whole band; the y is the centre of the card's row.
   */
  const anchor = (i: number) => ({
    x: i % 2 === 0 ? 27 : 73,
    y: ((Math.floor(i / 2) + 0.5) / rowCount) * 100,
  })

  return (
    <Section id="what-you-will-learn" tone="dark">
      <Reveal>
        <SectionHead
          title="What You’ll Learn"
          sub="Every module ends in something you have built and a trainer has reviewed, so the list below is work you will have done rather than topics you will have heard about."
        />

        <div className="relative mt-12">
          {/* ------------------------------------------------ connectors -- */}
          {/*
            Decorative, and only drawn where the two-column grid it is derived
            from actually exists. `preserveAspectRatio="none"` lets the 0–100
            space stretch to the container; `vector-effect` keeps the strokes
            hairline-thin regardless of how far it stretches.
          */}
          <svg
            aria-hidden
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
          >
            {outcomes.map((outcome, i) => {
              const { x, y } = anchor(i)
              return (
                <line
                  key={outcome}
                  x1={x}
                  y1={y}
                  x2={50}
                  y2={50}
                  stroke="rgba(252,211,77,0.28)"
                  strokeWidth={1}
                  vectorEffect="non-scaling-stroke"
                />
              )
            })}
            <circle cx={50} cy={50} r={1.2} fill="rgb(252,211,77)" vectorEffect="non-scaling-stroke" />
          </svg>

          {/* ----------------------------------------------------- cards -- */}
          <ul className="relative grid gap-4 sm:grid-cols-2 lg:gap-x-40 lg:gap-y-6">
            {outcomes.map((outcome, i) => {
              const { title, copy } = split(outcome)

              return (
                <motion.li
                  key={outcome}
                  variants={fadeUp}
                  /* The right-hand column drops half a card so the two sides
                     interleave rather than sitting in tidy rows — which is
                     what makes the connectors read as a mesh. */
                  className={`rounded-[20px] border border-slate-200/80 bg-white p-6 ${
                    i % 2 === 1 ? 'lg:mt-14' : ''
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span
                      aria-hidden
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#2563EB]/10 text-[#2563EB]"
                    >
                      <Icon name={CARD_ICONS[i % CARD_ICONS.length] as IconName} size={17} />
                    </span>
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-amber-300 font-[family-name:var(--font-jakarta)] text-[10.5px] font-bold text-[#0B1739]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="mt-4 font-[family-name:var(--font-jakarta)] text-[15px] font-bold leading-[1.4] text-[#0F172A]">
                    {title}
                  </h3>
                  {copy && (
                    <p className="mt-2.5 text-[13.5px] leading-[1.75] text-[#475569]">{copy}</p>
                  )}
                </motion.li>
              )
            })}
          </ul>
        </div>
      </Reveal>
    </Section>
  )
}
