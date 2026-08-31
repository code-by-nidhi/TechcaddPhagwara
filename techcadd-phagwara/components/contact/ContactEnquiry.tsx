'use client'

import { useCallback, useState, type ChangeEvent, type FormEvent } from 'react'
import Icon from '@/components/ui/Icon'
import { brand } from '@/data/site'

/**
 * The contact page's enquiry form.
 *
 * Longer than the navbar's Book Demo popup on purpose. The popup interrupts
 * someone mid-page and has to earn thirty seconds, so it asks for a name, a
 * number and a course. Someone who has navigated to /contact has already
 * decided to get in touch, and the extra two fields — an email and what they
 * are actually trying to achieve — are what let a counsellor prepare before
 * ringing rather than starting cold.
 *
 * Both post to the same `/api/contact`, which files the lead in MySQL. The
 * `formType` is what tells them apart in the CMS.
 */

interface FormState {
  name: string
  phone: string
  email: string
  course: string
  message: string
  answer: string
}

const EMPTY: FormState = { name: '', phone: '', email: '', course: '', message: '', answer: '' }

type FieldErrors = Partial<Record<keyof FormState, string>>

/** A fresh single-digit sum. Same challenge the popup uses. */
const newCaptcha = () => ({
  a: 1 + Math.floor(Math.random() * 9),
  b: 1 + Math.floor(Math.random() * 9),
})

function validate(form: FormState, expected: number): FieldErrors {
  const errors: FieldErrors = {}
  if (!form.name.trim()) errors.name = 'Enter your full name'
  if (!/^\d{10}$/.test(form.phone.trim())) errors.phone = 'Enter a 10-digit mobile number'
  /* Email is optional here — the server treats it the same way. Only a value
     that was typed and is wrong is worth stopping someone for. */
  if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) {
    errors.email = 'Enter a valid email address'
  }
  if (!form.course) errors.course = 'Select a course'
  if (Number(form.answer.trim()) !== expected) errors.answer = 'That answer is not correct'
  return errors
}

export default function ContactEnquiry({ courseOptions }: { courseOptions: string[] }) {
  const [form, setForm] = useState<FormState>(EMPTY)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [feedback, setFeedback] = useState('')
  const [captcha, setCaptcha] = useState(newCaptcha)

  const refreshCaptcha = useCallback(() => {
    setCaptcha(newCaptcha())
    setForm((f) => ({ ...f, answer: '' }))
  }, [])

  const update =
    (key: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const value =
        key === 'phone' ? e.target.value.replace(/\D/g, '').slice(0, 10) : e.target.value
      setForm((f) => ({ ...f, [key]: value }))
      setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev))
    }

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (status === 'sending') return

    const nextErrors = validate(form, captcha.a + captcha.b)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      /* A wrong answer gets a fresh sum — re-using the one they just failed
         only invites guessing. */
      if (nextErrors.answer) refreshCaptcha()
      return
    }

    setStatus('sending')
    setFeedback('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          course: form.course,
          message: form.message,
          formType: 'contact-page',
        }),
      })

      const data: { ok?: boolean; message?: string } = await res.json().catch(() => ({}))

      if (!res.ok || !data.ok) {
        setStatus('error')
        setFeedback(data.message ?? 'We could not submit that. Please call us instead.')
        refreshCaptcha()
        return
      }

      setStatus('sent')
      setFeedback(data.message ?? 'Request received — a counsellor will call you within 24 hours.')
      setForm(EMPTY)
      setCaptcha(newCaptcha())
    } catch {
      setStatus('error')
      setFeedback('Network error. Please check your connection or call us directly.')
      refreshCaptcha()
    }
  }

  /* The success state replaces the form rather than sitting under it: leaving
     six filled-in fields on screen invites a second, duplicate submission. */
  if (status === 'sent') {
    return (
      <div className="cpform cpform--done" role="status" aria-live="polite">
        <span className="cpform__tick" aria-hidden="true">
          <Icon name="check" size={26} />
        </span>
        <h3>Thank you — that reached us.</h3>
        <p>{feedback}</p>
        <p className="cpform__done-note">
          In a hurry? Call <a href={brand.phoneHref}>{brand.phone}</a> and ask for the student
          desk.
        </p>
        <button type="button" className="cpform__again" onClick={() => setStatus('idle')}>
          Send another enquiry
        </button>
      </div>
    )
  }

  return (
    <form className="cpform" onSubmit={submit} noValidate id="enquiry-form">
      <h3 className="cpform__title">Tell us your goal. We&rsquo;ll build the training around it.</h3>

      <div className="cpfield">
        <label htmlFor="cp-name">Full name*</label>
        <input
          id="cp-name"
          type="text"
          autoComplete="name"
          placeholder="Your full name"
          value={form.name}
          onChange={update('name')}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'cp-name-err' : undefined}
        />
        {errors.name && (
          <span className="cpfield__error" id="cp-name-err">
            {errors.name}
          </span>
        )}
      </div>

      <div className="cpfield">
        <label htmlFor="cp-phone">Mobile number*</label>
        <div className="cpfield__phone">
          <span aria-hidden="true">+91</span>
          <input
            id="cp-phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            placeholder="10-digit number"
            value={form.phone}
            onChange={update('phone')}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'cp-phone-err' : undefined}
          />
        </div>
        {errors.phone && (
          <span className="cpfield__error" id="cp-phone-err">
            {errors.phone}
          </span>
        )}
      </div>

      <div className="cpfield">
        <label htmlFor="cp-email">Email address</label>
        <input
          id="cp-email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={update('email')}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'cp-email-err' : undefined}
        />
        {errors.email && (
          <span className="cpfield__error" id="cp-email-err">
            {errors.email}
          </span>
        )}
      </div>

      <div className="cpfield">
        <label htmlFor="cp-course">Course of interest*</label>
        <select
          id="cp-course"
          value={form.course}
          onChange={update('course')}
          aria-invalid={Boolean(errors.course)}
          aria-describedby={errors.course ? 'cp-course-err' : undefined}
        >
          <option value="" disabled>
            Select a course
          </option>
          {courseOptions.map((course) => (
            <option key={course} value={course}>
              {course}
            </option>
          ))}
          <option value="Not sure yet">Not sure yet — help me choose</option>
        </select>
        {errors.course && (
          <span className="cpfield__error" id="cp-course-err">
            {errors.course}
          </span>
        )}
      </div>

      <div className="cpfield">
        <label htmlFor="cp-message">Your message / career goal</label>
        <textarea
          id="cp-message"
          rows={3}
          placeholder="e.g. Final-year B.Tech, want a data role by next summer."
          value={form.message}
          onChange={update('message')}
        />
      </div>

      <div className="cpfield">
        <label htmlFor="cp-answer">
          Security check — what is {captcha.a} + {captcha.b}?
        </label>
        <div className="cpfield__captcha">
          <span className="cpfield__sum" aria-hidden="true">
            {captcha.a} + {captcha.b} = ?
          </span>
          <button
            type="button"
            className="cpfield__refresh"
            onClick={refreshCaptcha}
            aria-label="Get a new security question"
          >
            <Icon name="repeat" size={14} />
          </button>
          <input
            id="cp-answer"
            type="text"
            inputMode="numeric"
            placeholder="Answer"
            value={form.answer}
            onChange={update('answer')}
            aria-invalid={Boolean(errors.answer)}
            aria-describedby={errors.answer ? 'cp-answer-err' : undefined}
          />
        </div>
        {errors.answer && (
          <span className="cpfield__error" id="cp-answer-err">
            {errors.answer}
          </span>
        )}
      </div>

      <div aria-live="polite">
        {status === 'error' && (
          <p className="cpform__error" role="alert">
            <Icon name="x" size={14} />
            {feedback}
          </p>
        )}
      </div>

      <button type="submit" className="cpform__submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Submitting…' : 'Submit enquiry'}
        {status !== 'sending' && <Icon name="arrow" size={16} />}
      </button>

      <p className="cpform__note">
        <Icon name="shield" size={13} aria-hidden="true" />A counsellor replies during office
        hours — {brand.hours}.
      </p>
    </form>
  )
}
