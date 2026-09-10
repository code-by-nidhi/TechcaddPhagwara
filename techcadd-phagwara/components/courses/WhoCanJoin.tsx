'use client'

import { motion } from 'framer-motion'
import Icon, { type IconName } from '@/components/ui/Icon'
import type { CourseContent } from '@/data/courses/types'
import { Ordinal, Reveal, Section, SectionHead, fadeUp } from './shared'

/**
 * The eligibility band.
 *
 * Numbered rather than icon-led: the blocks are different people, and a
 * repeated user glyph on each says nothing the heading does not. The count is
 * the useful signal — it tells a reader arriving from an unusual starting
 * point that theirs is probably one of the listed few.
 *
 * Two layouts
 * -----------
 * The course pages use a three-column card grid. The After 12th template
 * stacks the same blocks as full-width rows with a glyph on the right, which
 * suits its shorter list: four rows read as four doors into the course, where
 * four cards in a three-column grid leave an obvious hole.
 */

/**
 * The glyph each row carries, by position.
 *
 * Positional rather than matched to the label, because the labels differ per
 * programme and a lookup table keyed on them would silently fall through to a
 * default the day one is reworded. The order tracks how the audience blocks are
 * written across the catalogue — school leaver, graduate, switcher, working —
 * and cycles for the longer lists the course pages carry.
 */
const ROW_ICONS: IconName[] = ['users', 'book', 'briefcase', 'building', 'target', 'compass']

export default function WhoCanJoin({
  course,
  tone = 'dark',
  layout = 'grid',
}: {
  course: CourseContent
  /**
   * Which band this section paints.
   *
   * Defaults to the tone the course pages have always used. The After 12th
   * pages run a strict dark/light alternation (see `After12Landing`), so they
   * pass the opposite value — which is a prop rather than a fork because the
   * `.course-dark` rules in `styles/tailwind.css` already invert everything
   * inside a `Section`.
   */
  tone?: 'light' | 'dark'
  /** `rows` is the After 12th treatment; `grid` is the course pages'. */
  layout?: 'grid' | 'rows'
}) {
  if (!course.audience.length) return null

  const rows = layout === 'rows'

  return (
    <Section id="eligibility" tone={tone}>
      <Reveal>
        <SectionHead
          eyebrow="Eligibility"
          title={
            rows ? (
              'Who can do this course'
            ) : (
              <>
                Who can do
                <br />
                this course
              </>
            )
          }
          sub={
            rows
              ? undefined
              : `The ${course.label} course is built for people at six different starting points, and the batch is deliberately mixed. What matters far more than your background is turning up consistently and finishing what each module asks you to build.`
          }
        />

        {rows ? (
          /*
            The stack.

            Each row sticks a little lower than the one before it, so scrolling
            slides them up over one another and leaves a sliver of each showing
            — the cards "overlap upward" rather than scrolling away. It is pure
            CSS: no scroll listener, no measurement, and nothing to recalculate
            on resize.

            Three things it depends on, all of which are easy to break:
              - an opaque card background, or the row beneath shows through;
              - no `overflow: hidden` on any ancestor — see the note on `body`
                in `styles/base.css`, which is why that rule uses `clip`;
              - room to scroll, which is why the offsets are small.

            Only from `lg`: on a phone the rows are tall enough that stacking
            would bury most of the copy, so there they scroll normally.
          */
          <ul className="mt-11 grid gap-4">
            {course.audience.map((a, i) => (
              <motion.li
                key={a.label}
                variants={fadeUp}
                /* Same offset convention as `.mode` in `styles/programs.css`,
                   which decks its cards the same way — so the two sections
                   stack at the same rhythm rather than each inventing one. */
                style={{ top: `calc(var(--nav-h) + 2.5rem + ${i * 18}px)` }}
                className="flex items-center gap-6 rounded-[22px] bg-[#EEF2FB] p-6 shadow-[0_12px_34px_-24px_rgba(15,23,42,0.5)] sm:p-7 lg:sticky"
              >
                <div className="min-w-0 flex-1">
                  <Ordinal i={i} />
                  <h3 className="mt-2.5 font-[family-name:var(--font-jakarta)] text-[15.5px] font-bold text-[#0F172A]">
                    {a.label}
                  </h3>
                  <p className="mt-2 max-w-[46rem] text-[13.5px] leading-[1.75] text-[#475569]">
                    {a.copy}
                  </p>
                </div>

                {/* Decorative: the row is already titled and numbered, so the
                    glyph is hidden rather than given a redundant label. */}
                <span
                  aria-hidden
                  className="hidden h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-[#2563EB] shadow-[0_4px_12px_-6px_rgba(15,23,42,0.4)] sm:grid"
                >
                  <Icon name={ROW_ICONS[i % ROW_ICONS.length] as IconName} size={19} />
                </span>
              </motion.li>
            ))}
          </ul>
        ) : (
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {course.audience.map((a, i) => (
              <motion.li
                key={a.label}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="rounded-[22px] border border-slate-200/80 bg-white p-6"
              >
                <span className="inline-grid h-8 w-8 place-items-center rounded-lg bg-[#2563EB]/10">
                  <Ordinal i={i} />
                </span>
                <h3 className="mt-5 font-[family-name:var(--font-jakarta)] text-[15.5px] font-bold text-[#0F172A]">
                  {a.label}
                </h3>
                <p className="mt-2 text-[13.5px] leading-[1.7] text-[#475569]">{a.copy}</p>
              </motion.li>
            ))}
          </ul>
        )}
      </Reveal>
    </Section>
  )
}
