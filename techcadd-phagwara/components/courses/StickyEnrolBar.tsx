'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiArrowRight, FiPhone } from 'react-icons/fi'
import { brand } from '@/data/site'
import type { CourseContent } from '@/data/courses/types'

/**
 * The persistent call-to-action, shown once the hero has scrolled away.
 *
 * Hidden again over the enquiry form itself: the bar would otherwise cover the
 * submit button on a phone, which is exactly where a reader is when they most
 * want it out of the way.
 */
export default function StickyEnrolBar({ course }: { course: CourseContent }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const form = document.getElementById('enquiry')

    const onScroll = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.85
      const overForm = form
        ? form.getBoundingClientRect().top < window.innerHeight &&
          form.getBoundingClientRect().bottom > 0
        : false

      setShow(pastHero && !overForm)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          /* Clear of the floating dock and the WhatsApp bubble on the right. */
          className="fixed inset-x-0 bottom-0 z-[900] border-t border-white/10 bg-[#0B1739]/95 backdrop-blur-md lg:inset-x-6 lg:bottom-6 lg:rounded-2xl lg:border"
        >
          <div className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-between gap-4 px-5 py-3.5 pr-20 sm:px-6 lg:pr-6">
            <div className="min-w-0">
              <p className="truncate text-[13.5px] font-bold text-white">{course.label}</p>
              <p className="truncate text-[12px] text-white/50">
                {course.duration} · {course.mode}
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2.5">
              <a
                href={brand.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-[13px] font-bold text-white transition-colors hover:bg-white/10"
              >
                <FiPhone size={13} />
                <span className="hidden sm:inline">Call</span>
              </a>
              <Link
                href="#enquiry"
                className="group inline-flex items-center gap-2 rounded-full bg-white py-2 pl-4 pr-2 text-[13px] font-bold text-[#0B1739]"
              >
                Book free demo
                <span className="grid h-7 w-7 place-items-center rounded-full bg-[#2563EB] text-white transition-transform group-hover:translate-x-0.5">
                  <FiArrowRight size={12} />
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
