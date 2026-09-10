'use client'

import { useRef, useState, type FormEvent } from 'react'

type Status = 'idle' | 'sending' | 'done' | 'error'

/**
 * The callback request that closes `/about`.
 *
 * Why it asks twice
 * -----------------
 * The reference layout offers a single box for a mobile number, which is the
 * right amount to ask of somebody who has just read three thousand words and
 * is not yet sure they want to talk. But `/api/contact` requires a name — it
 * writes into the same `enquiries` table a counsellor works from, and a row
 * with no name is a row nobody can act on. Putting a placeholder there would
 * be worse than asking.
 *
 * So the number is asked for first and the name only afterwards, once the
 * visitor has already committed to the first field. At rest the form is one
 * box, as designed; the second step appears in place rather than as a new
 * screen, and the number entered is kept.
 *
 * The navbar's Book Demo modal is not reused here: its open state is local to
 * `Navbar` with no way in from outside, and giving it a global event bus for
 * one button on one page is more machinery than this needs.
 */
export default function AboutCallback() {
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  /** Whether the name field has been revealed. */
  const [asking, setAsking] = useState(false)
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')

  const nameRef = useRef<HTMLInputElement | null>(null)

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (status === 'sending') return

    /* Mirrors `isPhone` in lib/validation.ts, so the second step is never
       revealed for a number the server is about to reject anyway. */
    if (!/^[0-9+\s()-]{10,20}$/.test(phone.trim())) {
      setStatus('error')
      setMessage('Please enter a valid mobile number.')
      return
    }

    if (!asking) {
      setAsking(true)
      setStatus('idle')
      setMessage('')
      /* Focus has to wait for the field to exist. */
      window.setTimeout(() => nameRef.current?.focus(), 60)
      return
    }

    if (!name.trim()) {
      setStatus('error')
      setMessage('Please add your name so a counsellor knows who to ask for.')
      nameRef.current?.focus()
      return
    }

    setStatus('sending')
    setMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          /*
            `course` is required by the route, and this form deliberately does
            not ask for one — somebody requesting a callback from the About
            page has usually not chosen yet. Saying so plainly is more use to
            a counsellor than naming a course the visitor never picked.
          */
          course: 'Career counselling — course not chosen yet',
          formType: 'about-callback',
          message: 'Requested a callback from the About page.',
        }),
      })

      /* Guarded — an empty body should read as a form error, not as an
         uncaught "Unexpected end of JSON input". */
      const data: { ok?: boolean; message?: string } = await res.json().catch(() => ({}))

      if (!res.ok || !data.ok) {
        setStatus('error')
        setMessage(data.message ?? 'Something went wrong. Please call us instead.')
        return
      }

      setStatus('done')
      setMessage(data.message ?? 'Thank you — a counsellor will call you shortly.')
      setPhone('')
      setName('')
      setAsking(false)
    } catch {
      setStatus('error')
      setMessage('Network error. Please try again, or call us directly.')
    }
  }

  return (
    <div className="ap-callback">
      <form className="ap-callback__form" onSubmit={submit} noValidate>
        <div className="ap-callback__row">
          <input
            className="ap-callback__input"
            type="tel"
            inputMode="tel"
            name="phone"
            placeholder="Your mobile number"
            aria-label="Your mobile number"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button className="ap-callback__go" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : asking ? 'Request callback' : 'Book Demo'}
          </button>
        </div>

        {asking && (
          <div className="ap-callback__row ap-callback__row--second">
            <input
              className="ap-callback__input"
              ref={nameRef}
              type="text"
              name="name"
              placeholder="And your name?"
              aria-label="Your name"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}
      </form>

      {message && (
        <p
          className={`ap-callback__msg ${status === 'error' ? 'is-error' : 'is-done'}`}
          role="status"
        >
          {message}
        </p>
      )}
    </div>
  )
}
