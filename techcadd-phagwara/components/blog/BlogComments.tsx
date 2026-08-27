'use client'

import { useCallback, useEffect, useState, type FormEvent } from 'react'

import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import { CMS_PUBLIC_API_URL } from '@/lib/cms/client'
import { formatDate, isoDate } from '@/lib/cms/format'

/**
 * The comment thread on a blog post.
 *
 * Talks to the CMS directly from the browser rather than through this site's
 * server — see the note on `CMS_PUBLIC_API_URL` for why that is the design and
 * not a shortcut. The API moderates everything: a submitted comment is stored
 * with `status: 'pending'` and answered `202`, so nothing a visitor writes
 * appears until somebody in the CMS approves it. The form says so, because a
 * comment that vanishes on submit reads as a comment that was lost.
 */

interface Comment {
  id: string
  authorName: string
  isStaff: boolean
  body: string
  createdAt: string
  replies: Comment[]
}

type Phase = 'idle' | 'sending' | 'sent' | 'error'

const EMPTY = { authorName: '', authorEmail: '', body: '', website: '' }

export default function BlogComments({ slug }: { slug: string }) {
  const [thread, setThread] = useState<Comment[] | null>(null)
  const [form, setForm] = useState(EMPTY)
  const [phase, setPhase] = useState<Phase>('idle')
  const [message, setMessage] = useState('')

  const load = useCallback(async () => {
    if (!CMS_PUBLIC_API_URL) {
      // No CMS configured for the browser: render the post without a thread
      // rather than an error about a service the visitor cannot see.
      setThread([])
      return
    }

    try {
      const response = await fetch(
        `${CMS_PUBLIC_API_URL}/public/blogs/${encodeURIComponent(slug)}/comments`,
        { headers: { Accept: 'application/json' } },
      )
      if (!response.ok) {
        setThread([])
        return
      }
      const body = (await response.json()) as { items?: Comment[] }
      setThread(body.items ?? [])
    } catch {
      setThread([])
    }
  }, [slug])

  useEffect(() => {
    void load()
  }, [load])

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (phase === 'sending') return

    if (form.authorName.trim().length < 2 || form.body.trim().length < 2) {
      setPhase('error')
      setMessage('Please add your name and a comment.')
      return
    }

    if (!CMS_PUBLIC_API_URL) {
      setPhase('error')
      setMessage('Comments are not available right now. Please try again later.')
      return
    }

    setPhase('sending')
    setMessage('')

    try {
      const response = await fetch(
        `${CMS_PUBLIC_API_URL}/public/blogs/${encodeURIComponent(slug)}/comments`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            authorName: form.authorName.trim(),
            authorEmail: form.authorEmail.trim(),
            body: form.body.trim(),
            // The honeypot. A person never sees this field; a bot that fills
            // every input gives itself away, and the API answers as though the
            // comment were accepted so it learns nothing.
            website: form.website,
          }),
        },
      )

      if (!response.ok) {
        const body = (await response.json().catch(() => ({}))) as { message?: string }
        setPhase('error')
        setMessage(body.message ?? 'We could not post that. Please try again shortly.')
        return
      }

      setPhase('sent')
      setMessage('Thanks — your comment is with our team and appears once it is approved.')
      setForm(EMPTY)
    } catch {
      setPhase('error')
      setMessage('Network error. Please check your connection and try again.')
    }
  }

  const update = (key: keyof typeof EMPTY) => (event: { target: { value: string } }) =>
    setForm((current) => ({ ...current, [key]: event.target.value }))

  return (
    <>
      {thread === null ? (
        <p className="editorial__empty">Loading comments…</p>
      ) : thread.length === 0 ? (
        <p className="editorial__empty">No comments yet. Be the first to say something.</p>
      ) : (
        <div className="ecomments">
          {thread.map((comment) => (
            <CommentNode key={comment.id} comment={comment} />
          ))}
        </div>
      )}

      <form className="ecomment-form cform" onSubmit={submit}>
        <div className="ecomment-form__row">
          <div className="field">
            <label htmlFor="comment-name">Your name</label>
            <input
              id="comment-name"
              name="authorName"
              type="text"
              required
              maxLength={80}
              autoComplete="name"
              value={form.authorName}
              onChange={update('authorName')}
            />
          </div>

          <div className="field">
            <label htmlFor="comment-email">Email (not published)</label>
            <input
              id="comment-email"
              name="authorEmail"
              type="email"
              maxLength={254}
              autoComplete="email"
              value={form.authorEmail}
              onChange={update('authorEmail')}
            />
          </div>
        </div>

        <div className="field">
          <label htmlFor="comment-body">Comment</label>
          <textarea
            id="comment-body"
            name="body"
            required
            maxLength={4000}
            value={form.body}
            onChange={update('body')}
          />
        </div>

        {/* aria-hidden and tabIndex -1 so no person can reach it by any route */}
        <div className="ecomment-form__trap" aria-hidden="true">
          <label htmlFor="comment-website">Leave this field empty</label>
          <input
            id="comment-website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={update('website')}
          />
        </div>

        <Button type="submit" loading={phase === 'sending'} arrow>
          {phase === 'sending' ? 'Posting…' : 'Post comment'}
        </Button>

        <div aria-live="polite">
          {phase === 'sent' && (
            <p className="cform__status" role="status">
              <Icon name="check" />
              {message}
            </p>
          )}
          {phase === 'error' && (
            <p className="cform__status cform__status--error" role="alert">
              <Icon name="x" />
              {message}
            </p>
          )}
        </div>

        <p className="cform__note">
          Comments are read by our team before they appear. Your email is never published.
        </p>
      </form>
    </>
  )
}

/** One comment and its replies. The CMS's threads are one level deep. */
function CommentNode({ comment, reply = false }: { comment: Comment; reply?: boolean }) {
  return (
    <>
      <article className={`ecomment ${reply ? 'ecomment--reply' : ''}`.trim()}>
        <div className="ecomment__head">
          <b>{comment.authorName}</b>
          {comment.isStaff && <span className="ecomment__staff">Techcadd</span>}
          <time dateTime={isoDate(comment.createdAt)}>{formatDate(comment.createdAt)}</time>
        </div>
        {/* Plain text, not markup: the comment box is a <textarea> and the API
            stores exactly what was typed. Rendering it as HTML would make every
            unmoderated comment a script tag waiting for approval. */}
        <p>{comment.body}</p>
      </article>

      {comment.replies?.map((child) => (
        <CommentNode key={child.id} comment={child} reply />
      ))}
    </>
  )
}
