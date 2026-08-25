'use client'

import {
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
import { brand, testimonials } from '@/data/site'

/**
 * `ssr:false` in Navbar.tsx guarantees this only ever runs client-side, so
 * `document` is always safe here — no hydration mismatch to guard against.
 */

const COURSE_OPTIONS = [
  'Python Programming',
  'Java Programming',
  'MERN Stack',
  'Data Science',
  'AI & ML',
  'Digital Marketing',
  'Cyber Security',
  'Cloud Computing',
  'Web Development',
  'Other',
]

interface FormState {
  course: string
  name: string
  phone: string
  email: string
}

const EMPTY_FORM: FormState = { course: '', name: '', phone: '', email: '' }

type FieldErrors = Partial<Record<keyof FormState, string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(form: FormState): FieldErrors {
  const errors: FieldErrors = {}
  if (!form.course) errors.course = 'Select a course'
  if (!form.name.trim()) errors.name = 'Enter your full name'
  if (!/^\d{10}$/.test(form.phone.trim())) errors.phone = 'Enter a 10-digit phone number'
  if (!EMAIL_RE.test(form.email.trim())) errors.email = 'Enter a valid email address'
  return errors
}

/** Focusable elements the trap cycles Tab/Shift+Tab through. */
const FOCUSABLE = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'

export interface BookDemoModalProps {
  open: boolean
  onClose: () => void
}

export default function BookDemoModal({ open, onClose }: BookDemoModalProps) {
  /* `render` keeps the modal mounted for the fade-out; `visible` drives the
     transition class. Split so closing can animate instead of vanishing. */
  const [render, setRender] = useState(open)
  const [visible, setVisible] = useState(false)
  const [form, setForm] = useState<FormState>(EMPTY_FORM)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle')
  const [serverError, setServerError] = useState('')
  const [toast, setToast] = useState<string | null>(null)

  const panelRef = useRef<HTMLDivElement | null>(null)
  const firstFieldRef = useRef<HTMLSelectElement | null>(null)
  const restoreFocusRef = useRef<HTMLElement | null>(null)

  const featured = useMemo(() => testimonials[0], [])

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
    const nextErrors = validate(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0 || status === 'sending') return

    setStatus('sending')
    setServerError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          course: form.course,
          message: 'Requested a free demo via the navbar popup.',
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
                <span className="demo-modal__badge">
                  <Icon name="sparkles" size={13} />
                  Free counselling session
                </span>

                <h2 id="demo-modal-title" className="demo-modal__title">
                  Still exploring? Let us help
                </h2>
                <p className="demo-modal__lead">
                  Talk to a counsellor and we&rsquo;ll map the shortest route from where you are
                  to the job you want.
                </p>

                {featured && (
                  <blockquote className="demo-modal__quote">
                    <Icon name="message" size={16} className="demo-modal__quote-mark" />
                    <p>&ldquo;{featured.quote}&rdquo;</p>
                    <footer>
                      <b>{featured.name}</b>
                      <span>{featured.role}</span>
                    </footer>
                  </blockquote>
                )}

                <div className="demo-modal__rating">
                  <div className="demo-modal__stars" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon key={i} name="star" size={14} />
                    ))}
                  </div>
                  <div>
                    <b>4.9 / 5 · Google Verified</b>
                    <span>1,850+ student reviews</span>
                  </div>
                </div>

                <a className="demo-modal__support" href={`mailto:${brand.email}`}>
                  <Icon name="mail" size={14} />
                  {brand.email}
                </a>
              </div>

              {/* -------------------------------------------------------- form */}
              <form className="demo-form" onSubmit={submit} noValidate>
                <div className="demo-field">
                  <label htmlFor="demo-course">Select course</label>
                  <select
                    id="demo-course"
                    ref={firstFieldRef}
                    value={form.course}
                    onChange={update('course')}
                    aria-invalid={Boolean(errors.course)}
                    aria-describedby={errors.course ? 'demo-course-err' : undefined}
                  >
                    <option value="" disabled>
                      Choose a course
                    </option>
                    {COURSE_OPTIONS.map((c) => (
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
                  <label htmlFor="demo-name">Full name</label>
                  <input
                    id="demo-name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your full name"
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
                  <label htmlFor="demo-phone">Contact number</label>
                  <input
                    id="demo-phone"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel"
                    placeholder="10-digit mobile number"
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

                <div className="demo-field">
                  <label htmlFor="demo-email">Email address</label>
                  <input
                    id="demo-email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={update('email')}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'demo-email-err' : undefined}
                  />
                  {errors.email && (
                    <span className="demo-field__error" id="demo-email-err">
                      {errors.email}
                    </span>
                  )}
                </div>

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
