'use client'

import { useState, type FormEvent } from 'react'
import Button from '@/components/ui/Button'

type Status = 'idle' | 'sending' | 'done' | 'error'

/**
 * The only interactive part of the footer, split out so the rest of the
 * footer stays a Server Component and ships no JavaScript.
 */
export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')

  const subscribe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email || status === 'sending') return

    setStatus('sending')

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data: { ok?: boolean; message?: string } = await res.json()

      if (!res.ok || !data.ok) {
        setStatus('error')
        setMessage(data.message ?? 'Something went wrong. Please try again.')
        return
      }

      setStatus('done')
      setMessage(data.message ?? 'You are on the list — check your inbox.')
      setEmail('')
    } catch {
      setStatus('error')
      setMessage('Network error. Please try again.')
    }

    window.setTimeout(() => {
      setStatus('idle')
      setMessage('')
    }, 6000)
  }

  return (
    <div>
      <form className="newsletter__form" onSubmit={subscribe}>
        <input
          type="email"
          required
          placeholder="Enter your email address"
          aria-label="Email address"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit" variant="ghost" size="sm" arrow loading={status === 'sending'}>
          Subscribe
        </Button>
      </form>

      {(status === 'done' || status === 'error') && (
        <p className="newsletter__done" role="status">
          {status === 'done' ? '✓ ' : ''}
          {message}
        </p>
      )}
    </div>
  )
}
