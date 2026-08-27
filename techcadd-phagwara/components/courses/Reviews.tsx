'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'
import AutoScroll from 'embla-carousel-auto-scroll'
import useEmblaCarousel from 'embla-carousel-react'
import type { CourseContent, CourseReview } from '@/data/courses/types'
import { DARK, Reveal, SectionHead } from './shared'

function ReviewCard({ review }: { review: CourseReview }) {
  return (
    <li className="w-[300px] shrink-0 rounded-[20px] border border-slate-200/80 bg-white p-5 sm:w-[330px]">
      <div className="flex items-center justify-between gap-3">
        <span className="flex gap-0.5 text-amber-400" aria-label={`${review.rating} out of 5`}>
          {Array.from({ length: review.rating }, (_, i) => (
            <FiStar key={i} size={13} fill="currentColor" aria-hidden />
          ))}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-md bg-[#F6F9FF] px-2 py-1 text-[10px] font-bold text-[#64748B]">
          <span aria-hidden className="text-[#2563EB]">
            G
          </span>
          Google
        </span>
      </div>

      <blockquote className="mt-4 text-[13.5px] leading-[1.7] text-[#475569]">
        {review.quote}
      </blockquote>

      <div className="mt-5 flex items-center gap-3">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#2563EB]/10 text-[11px] font-bold text-[#2563EB]">
          {review.initials}
        </span>
        <span>
          <span className="block text-[13px] font-bold text-[#0F172A]">{review.name}</span>
          {review.role && (
            <span className="block text-[11.5px] text-[#94A3B8]">{review.role}</span>
          )}
        </span>
      </div>
    </li>
  )
}

/**
 * One continuously scrolling row.
 *
 * `loop` needs enough slides to fill the viewport twice or Embla refuses to
 * wrap and the row simply stops at the end, so the list is doubled before it
 * is handed over. The duplicate is `aria-hidden` — a screen reader should hear
 * six reviews, not twelve.
 */
function Rail({ reviews, direction }: { reviews: CourseReview[]; direction: 1 | -1 }) {
  const reduced = useReducedMotion()

  const [ref] = useEmblaCarousel(
    { loop: true, dragFree: true, align: 'start', watchDrag: true },
    reduced
      ? []
      : [
          AutoScroll({
            speed: 0.7,
            direction: direction === 1 ? 'forward' : 'backward',
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ],
  )

  return (
    <div className="overflow-hidden" ref={ref}>
      <ul className="flex gap-4">
        {reviews.map((review) => (
          <ReviewCard key={review.name} review={review} />
        ))}
        {reviews.map((review) => (
          <div key={`dup-${review.name}`} aria-hidden className="contents">
            <ReviewCard review={review} />
          </div>
        ))}
      </ul>
    </div>
  )
}

export default function Reviews({ course }: { course: CourseContent }) {
  if (!course.reviews.length) return null

  /* Two rails moving against each other read as a wall of reviews rather than
     one queue. Splitting rather than repeating the same six twice means a
     reader scanning either row sees different cards. */
  const half = Math.ceil(course.reviews.length / 2)
  const top = course.reviews.slice(0, half)
  const bottom = course.reviews.slice(half)

  return (
    /* Not the shared `Section`: the rails have to bleed past the 1200px
       container to read as a marquee rather than as a boxed carousel, so only
       the heading sits inside one. */
    <section
      id="reviews"
      style={{ backgroundColor: DARK }}
      className="course-dark overflow-hidden py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHead
            eyebrow="Student reviews"
            title={
              <>
                What our students
                <br />
                in Phagwara say
              </>
            }
          />
        </Reveal>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55 }}
        className="mt-11 space-y-4"
      >
        <Rail reviews={top} direction={1} />
        {bottom.length > 0 && <Rail reviews={bottom} direction={-1} />}
      </motion.div>
    </section>
  )
}
