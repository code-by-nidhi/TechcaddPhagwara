'use client'

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
  type KeyboardEvent as ReactKeyboardEvent,
} from 'react'
import { createPortal } from 'react-dom'
import Icon from '@/components/ui/Icon'
import { brand as staticBrand, type Brand } from '@/data/site'

/**
 * `ssr:false` in Navbar.tsx guarantees this only ever runs client-side, so
 * `document` is always safe here — no hydration mismatch to guard against.
 */

/**
 * The short list the popup offers when it has nothing better.
 *
 * The modal is a two-field, thirty-second interruption, so a shortlist is the
 * right shape for it — a forty-six-item select is not. When the navbar hands
 * over the real catalogue this is still what seeds the list, with the
 * catalogue's own titles matched against it, so the popup keeps its length and
 * stops offering courses the institute may no longer run.
 */
const FALLBACK_COURSES = [
  'Python Programming',
  'Java Programming',
  'MERN Stack',
  'Data Science',
  'AI & ML',
  'Digital Marketing',
  'Cyber Security',
  'Cloud Computing',
  'Web Development',
]

/** 'Other' is always last and always offered — it is not a course. */
const OTHER = 'Other'

/**
 * The shortlist, kept to the courses that still exist.
 *
 * Matched loosely because the two vocabularies differ by wording rather than
 * by meaning: the popup says "AI & ML" where the catalogue says "Artificial
 * Intelligence Course in Phagwara". A shortlist entry with no match anywhere
 * in the catalogue is dropped, which is the whole point — a student should not
 * be able to request a demo for something that is not taught.
 */
function shortlist(catalogTitles: string[] | undefined): string[] {
  if (!catalogTitles || catalogTitles.length === 0) return [...FALLBACK_COURSES, OTHER]

  const haystack = catalogTitles.map((title) => title.toLowerCase())
  const words = (text: string) =>
    text.toLowerCase().split(/[^a-z0-9]+/).filter((word) => word.length > 2)

  const kept = FALLBACK_COURSES.filter((option) => {
    const needles = words(option)
    if (needles.length === 0) return false
    return haystack.some((title) => needles.every((word) => title.includes(word)))
  })

  return kept.length > 0 ? [...kept, OTHER] : [...FALLBACK_COURSES, OTHER]
}

interface FormState {
  course: string
  name: string
  phone: string
  answer: string
}

const EMPTY_FORM: FormState = { course: '', name: '', phone: '', answer: '' }

type FieldErrors = Partial<Record<keyof FormState, string>>

function validate(form: FormState, expected: number): FieldErrors {
  const errors: FieldErrors = {}
  if (!form.course) errors.course = 'Select a course'
  if (!form.name.trim()) errors.name = 'Enter your full name'
  if (!/^\d{10}$/.test(form.phone.trim())) errors.phone = 'Enter a 10-digit phone number'
  if (Number(form.answer.trim()) !== expected) errors.answer = 'That answer is not correct'
  return errors
}

/** Focusable elements the trap cycles Tab/Shift+Tab through. */
const FOCUSABLE = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'

/** A fresh single-digit addition problem — the refresh button calls this again. */
const newCaptcha = () => ({
  a: 1 + Math.floor(Math.random() * 9),
  b: 1 + Math.floor(Math.random() * 9),
})

export interface BookDemoModalProps {
  open: boolean
  onClose: () => void
  /** Every published course title, so the shortlist can be checked against it. */
  catalogTitles?: string[]
  brand?: Brand
}

export default function BookDemoModal({
  open,
  onClose,
  catalogTitles,
  brand = staticBrand,
}: BookDemoModalProps) {
  const courseOptions = useMemo(() => shortlist(catalogTitles), [catalogTitles])
  /* `render` keeps the modal mounted for the fade-out; `visible` drives the
     transition class. Split so closing can animate instead of vanishing. */
  const [render, setRender] = useState(open)
  const [visible, setVisible] = useState(false)
  const [form, setForm] = useState<FormState>(EMPTY_FORM)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle')
  const [serverError, setServerError] = useState('')
  const [toast, setToast] = useState<string | null>(null)
  const [captcha, setCaptcha] = useState(newCaptcha)

  const panelRef = useRef<HTMLDivElement | null>(null)
  const firstFieldRef = useRef<HTMLSelectElement | null>(null)
  const restoreFocusRef = useRef<HTMLElement | null>(null)

  const refreshCaptcha = useCallback(() => {
    setCaptcha(newCaptcha())
    setForm((f) => ({ ...f, answer: '' }))
  }, [])

  /* open/close lifecycle -------------------------------------------------- */
  useEffect(() => {
    if (open) {
      restoreFocusRef.current = document.activeElement as HTMLElement | null
      setRender(true)
      const raf = requestAnimationFrame(() => setVisible(true))
      return () => cancelAnimationFrame(raf)
    }

    setVisible(false)
    const t = window.setTimeout(() => setRender(false), 300)
    return () => window.clearTimeout(t)
  }, [open])

  /* reset form state once the close transition has actually finished */
  useEffect(() => {
    if (!render) {
      setForm(EMPTY_FORM)
      setErrors({})
      setStatus('idle')
      setServerError('')
      setCaptcha(newCaptcha())
    }
  }, [render])

  /* focus the first field on open, return focus to the trigger on close */
  useEffect(() => {
    if (visible) {
      firstFieldRef.current?.focus()
    } else if (!open) {
      restoreFocusRef.current?.focus()
    }
  }, [visible, open])

  /* body scroll lock -------------------------------------------------------*/
  useEffect(() => {
    if (!render) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [render])

  /* Escape closes -----------------------------------------------------------*/
  useEffect(() => {
    if (!render) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [render, onClose])

  /* auto-dismiss the success toast */
  useEffect(() => {
    if (!toast) return
    const t = window.setTimeout(() => setToast(null), 4500)
    return () => window.clearTimeout(t)
  }, [toast])

  const update =
    (key: keyof FormState) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const value = key === 'phone' ? e.target.value.replace(/\D/g, '').slice(0, 10) : e.target.value
      setForm((f) => ({ ...f, [key]: value }))
      setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev))
    }

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const nextErrors = validate(form, captcha.a + captcha.b)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0 || status === 'sending') {
      /* a wrong answer gets a fresh problem, same as any other captcha —
         re-using the one they already failed just invites guessing */
      if (nextErrors.answer) refreshCaptcha()
      return
    }

    setStatus('sending')
    setServerError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          course: form.course,
          message: 'Requested a free demo via the navbar popup.',
          /* Recorded on the enquiry so a counsellor can tell a two-field demo
             request from a considered contact-form enquiry. */
          formType: 'book-demo',
        }),
      })

      const data: { ok?: boolean; message?: string } = await res.json().catch(() => ({}))

      if (!res.ok || !data.ok) {
        setStatus('error')
        setServerError(data.message ?? 'We could not submit that. Please call us instead.')
        return
      }

      setToast(data.message ?? 'Request received — a counsellor will call you within 24 hours.')
      onClose()
    } catch {
      setStatus('error')
      setServerError('Network error. Please check your connection or call us directly.')
    }
  }

  /* keep Tab inside the panel while it's open */
  const trapTab = (e: ReactKeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'Tab' || !panelRef.current) return
    const nodes = panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)
    if (nodes.length === 0) return
    const first = nodes[0]!
    const last = nodes[nodes.length - 1]!

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault()
      last.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault()
      first.focus()
    }
  }

  if (!render && !toast) return null

  return createPortal(
    <>
      {render && (
        <div
          className={`demo-modal ${visible ? 'is-open' : ''}`.trim()}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onClose()
          }}
        >
          <div
            ref={panelRef}
            className="demo-modal__panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="demo-modal-title"
            onKeyDown={trapTab}
          >
            <button
              type="button"
              className="demo-modal__close"
              onClick={onClose}
              aria-label="Close dialog"
            >
              <Icon name="x" size={18} />
            </button>

            <div className="demo-modal__scroll">
              {/* -------------------------------------------------- branding */}
              <div className="demo-modal__brand">
                <h2 id="demo-modal-title" className="demo-modal__title">
                  <span aria-hidden="true">👋</span> Still exploring? Let us help
                </h2>
                <p className="demo-modal__lead">
                  Talk to a counsellor and we&rsquo;ll map the shortest route from where you are
                  to the job you want.
                </p>

                <blockquote className="demo-modal__quote">
                  <p>&ldquo;AI is the new electricity for modern computing.&rdquo;</p>
                  <footer>
                    <span className="demo-modal__quote-mark" aria-hidden="true">
                      <Icon name="zap" size={16} />
                    </span>
                    <span>
                      <b>Jensen Huang</b>
                      <span>CEO, NVIDIA Corporation</span>
                    </span>
                  </footer>
                </blockquote>

                <div className="demo-modal__rating">
                  <span className="demo-modal__g" aria-hidden="true">
                    G
                  </span>
                  <span className="demo-modal__rating-label">
                    Google Verified
                    <Icon name="check" size={13} className="demo-modal__verified" />
                  </span>
                  <div className="demo-modal__stars" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon key={i} name="star" size={13} />
                    ))}
                  </div>
                </div>

                <p className="demo-modal__support">
                  You can also share your requirements at{' '}
                  <a href={`mailto:${brand.email}`}>{brand.email}</a>, and our team will get back
                  to you right away.
                </p>
              </div>

              {/* -------------------------------------------------------- form */}
              <form className="demo-form" onSubmit={submit} noValidate>
                <h3 className="demo-form__title">Tell us your goal. We&rsquo;ll code it into reality.</h3>

                <div className="demo-field">
                  <label htmlFor="demo-course" className="sr-only">
                    Select your course of interest
                  </label>
                  <select
                    id="demo-course"
                    ref={firstFieldRef}
                    value={form.course}
                    onChange={update('course')}
                    aria-invalid={Boolean(errors.course)}
                    aria-describedby={errors.course ? 'demo-course-err' : undefined}
                  >
                    <option value="" disabled>
                      Select Your Course of Interest*
                    </option>
                    {courseOptions.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  {errors.course && (
                    <span className="demo-field__error" id="demo-course-err">
                      {errors.course}
                    </span>
                  )}
                </div>

                <div className="demo-field">
                  <label htmlFor="demo-name" className="sr-only">
                    Full name
                  </label>
                  <input
                    id="demo-name"
                    type="text"
                    autoComplete="name"
                    placeholder="Full Name*"
                    value={form.name}
                    onChange={update('name')}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'demo-name-err' : undefined}
                  />
                  {errors.name && (
                    <span className="demo-field__error" id="demo-name-err">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="demo-field">
                  <label htmlFor="demo-phone" className="sr-only">
                    Contact number
                  </label>
                  <input
                    id="demo-phone"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel"
                    placeholder="Contact Number (10 Digits)*"
                    value={form.phone}
                    onChange={update('phone')}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? 'demo-phone-err' : undefined}
                  />
                  {errors.phone && (
                    <span className="demo-field__error" id="demo-phone-err">
                      {errors.phone}
                    </span>
                  )}
                </div>

                <div className="demo-captcha">
                  <span className="demo-captcha__label">Security verification</span>
                  <span className="demo-captcha__pill" aria-hidden="true">
                    {captcha.a} + {captcha.b} = ?
                  </span>
                  <button
                    type="button"
                    className="demo-captcha__refresh"
                    onClick={refreshCaptcha}
                    aria-label="Get a new verification question"
                  >
                    <Icon name="repeat" size={15} />
                  </button>
                </div>

                <div className="demo-field">
                  <label htmlFor="demo-answer" className="sr-only">
                    Answer to {captcha.a} + {captcha.b}
                  </label>
                  <input
                    id="demo-answer"
                    type="text"
                    inputMode="numeric"
                    placeholder="Answer"
                    value={form.answer}
                    onChange={update('answer')}
                    aria-invalid={Boolean(errors.answer)}
                    aria-describedby={errors.answer ? 'demo-answer-err' : undefined}
                  />
                  {errors.answer && (
                    <span className="demo-field__error" id="demo-answer-err">
                      {errors.answer}
                    </span>
                  )}
                </div>

                <p className="demo-trust">
                  <Icon name="check" size={13} />
                  Expert response within 5 minutes.
                </p>

                {serverError && <p className="demo-form__server-error">{serverError}</p>}

                <button type="submit" className="demo-form__submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Submitting…' : 'Submit'}
                  {status !== 'sending' && <Icon name="arrow" size={16} />}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {toast && (
        <div className="demo-toast" role="status" aria-live="polite">
          <Icon name="check" size={16} />
          {toast}
        </div>
      )}
    </>,
    document.body
  )
}
