'use client'

import Image from 'next/image'
import { useCallback, useEffect, useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { FiCheck, FiRefreshCw } from 'react-icons/fi'
import type { CourseContent } from '@/data/courses/types'
import { Reveal, fadeUp } from './shared'

type Status = 'idle' | 'sending' | 'sent' | 'error'

/** A fresh sum for the spam check. */
const newSum = () => ({
  a: 1 + Math.floor(Math.random() * 9),
  b: 1 + Math.floor(Math.random() * 9),
})

/**
 * The course-specific enquiry form.
 *
 * Posts to the same `/api/contact` handler the site's Contact section uses —
 * a second endpoint would mean a second rate limiter and a second place for
 * the webhook configuration to drift. The course field is filled in and
 * read-only, because the whole point of a per-course form is that the
 * counsellor knows which page the enquiry came from.
 *
 * The arithmetic check is generated in an effect rather than during render:
 * `Math.random()` on the server would produce one sum in the HTML and a
 * different one after hydration, which React reports as a mismatch.
 */
export default function CourseEnquiry({ course }: { course: CourseContent }) {
  const [sum, setSum] = useState<{ a: number; b: number } | null>(null)
  const [answer, setAnswer] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [feedback, setFeedback] = useState('')

  const refresh = useCallback(() => {
    setSum(newSum())
    setAnswer('')
  }, [])

  useEffect(refresh, [refresh])

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (status === 'sending' || !sum) return

    /* Captured before the first await: React clears `currentTarget` once the
       handler returns, so reaching for it again after the fetch is null. */
    const form = event.currentTarget
    const data = new FormData(form)

    if (Number(answer) !== sum.a + sum.b) {
      setStatus('error')
      setFeedback('That security answer is not right — please try the sum again.')
      refresh()
      return
    }

    setStatus('sending')
    setFeedback('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          phone: data.get('phone'),
          email: '',
          course: course.label,
          message: data.get('message'),
        }),
      })

      const json: { ok?: boolean; message?: string } = await res.json()

      if (!res.ok || !json.ok) {
        setStatus('error')
        setFeedback(json.message ?? 'We could not send that. Please call us instead.')
        refresh()
        return
      }

      setStatus('sent')
      setFeedback(json.message ?? 'Request received — a counsellor will call you within 24 hours.')
      form.reset()
      refresh()
    } catch {
      setStatus('error')
      setFeedback('Network error. Please check your connection or call us directly.')
    }
  }

  const field =
    'w-full rounded-xl border border-white/15 bg-white/[0.07] px-4 py-3 text-[14px] text-white placeholder:text-white/35 outline-none transition-colors focus:border-[#60A5FA] focus:bg-white/[0.12]'

  return (
    <section id="enquiry" className="relative overflow-hidden bg-[#0B1739] py-16 lg:py-20">
      <Image
        src="/images/course/form.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(115deg,#0B1739_10%,rgba(11,23,57,0.82)_55%,rgba(11,23,57,0.94)_100%)]"
      />

      <div className="relative mx-auto w-full max-w-[1200px] px-5 sm:px-6 lg:px-8">
        <Reveal className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-[11px] font-semibold text-white/85"
            >
              Course information
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mt-5 max-w-[16rem] font-[family-name:var(--font-jakarta)] text-[clamp(1.6rem,3vw,2.35rem)] font-extrabold leading-[1.14] tracking-[-0.025em] text-white"
            >
              Ask about {course.label}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-[26rem] text-[14px] leading-[1.8] text-white/60"
            >
              Send your question and a counsellor will call you back about batch timings, fees, EMI
              options, placement record, or whether this course fits your degree.
            </motion.p>

            <motion.ul variants={fadeUp} className="mt-7 space-y-3">
              {[
                'Free counselling and demo class',
                'Weekday, evening, weekend or 1-on-1, all 2-hour classes',
                'Internship letter and placement support',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[13.5px] text-white/70">
                  <span className="grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-[#60A5FA]/20 text-[#93C5FD]">
                    <FiCheck size={10} strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* -------------------------------------------------------- form -- */}
          <motion.form
            variants={fadeUp}
            onSubmit={submit}
            className="rounded-[24px] border border-white/12 bg-white/[0.06] p-6 backdrop-blur-sm sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-[12.5px] font-semibold text-white/75">
                  Your name
                </span>
                <input
                  name="name"
                  required
                  maxLength={120}
                  autoComplete="name"
                  placeholder="Enter your full name"
                  className={field}
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-[12.5px] font-semibold text-white/75">
                  Phone number
                </span>
                <input
                  name="phone"
                  required
                  type="tel"
                  inputMode="tel"
                  pattern="[0-9+\s()-]{10,20}"
                  autoComplete="tel"
                  placeholder="10-digit mobile number"
                  className={field}
                />
              </label>
            </div>

            <label className="mt-4 block">
              <span className="mb-2 block text-[12.5px] font-semibold text-white/75">
                Course or service
              </span>
              <input
                readOnly
                value={course.label}
                aria-label="Course or service"
                className={`${field} cursor-default text-white/70`}
              />
            </label>

            <label className="mt-4 block">
              <span className="mb-2 block text-[12.5px] font-semibold text-white/75">
                Your message
              </span>
              <textarea
                name="message"
                rows={4}
                maxLength={2000}
                placeholder="Ask about batch timings, fees or anything else"
                className={`${field} resize-y`}
              />
            </label>

            <div className="mt-5">
              <span className="mb-2 block text-[12.5px] font-semibold text-white/75">
                Security check
              </span>
              <div className="flex items-center gap-2.5">
                <span
                  aria-hidden
                  className="select-none rounded-xl border border-white/15 bg-white/[0.12] px-4 py-3 text-[14px] font-bold tracking-wider text-white"
                >
                  {sum ? `${sum.a} + ${sum.b} = ?` : ' '}
                </span>
                <input
                  required
                  inputMode="numeric"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  aria-label={sum ? `What is ${sum.a} plus ${sum.b}?` : 'Security check'}
                  placeholder="Answer"
                  className={field}
                />
                <button
                  type="button"
                  onClick={refresh}
                  aria-label="Show a different sum"
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/15 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <FiRefreshCw size={14} />
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-6 w-full rounded-xl bg-[linear-gradient(100deg,#2563EB,#60A5FA)] py-3.5 text-[13px] font-bold uppercase tracking-[0.14em] text-white transition-opacity disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>

            {/* `role="status"` rather than an alert: a counsellor callback
                confirmation is not urgent enough to interrupt, but it must be
                announced — the visual feedback alone would be missed. */}
            <p
              role="status"
              aria-live="polite"
              className={`mt-4 text-center text-[12.5px] leading-relaxed ${
                status === 'error' ? 'text-red-300' : 'text-white/50'
              }`}
            >
              {feedback || 'We never share your number. Expect a call within working hours.'}
            </p>
          </motion.form>
        </Reveal>
      </div>
    </section>
  )
}
