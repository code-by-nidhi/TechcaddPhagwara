'use client'

import { useState, type ChangeEvent, type FormEvent } from 'react'
import Icon from '@/components/ui/Icon'
import Button from '@/components/ui/Button'
import SectionHeading from '@/components/ui/SectionHeading'
import {
  brand as staticBrand,
  courses as staticCourses,
  socials as staticSocials,
  type Brand,
  type Social,
} from '@/data/site'

interface EnquiryForm {
  name: string
  phone: string
  email: string
  course: string
  message: string
}

const EMPTY: EnquiryForm = { name: '', phone: '', email: '', course: '', message: '' }

type Status = 'idle' | 'sending' | 'sent' | 'error'

/**
 * The enquiry form and the contact panel beside it.
 *
 * `courseOptions` is what fills the "Interested in" select. It used to read
 * `courses` from `data/site.ts` — a six-item homepage grid that is not the
 * catalogue and never was, so a student could not choose most of what the
 * institute teaches. It is now the real catalogue, from the CMS, and the
 * chosen title travels to the CMS as the enquiry's course name.
 */
export interface ContactProps {
  courseOptions?: string[]
  brand?: Brand
  socials?: Social[]
}

export default function Contact({
  courseOptions = staticCourses.map((course) => course.title),
  brand = staticBrand,
  socials = staticSocials,
}: ContactProps = {}) {
  const [form, setForm] = useState<EnquiryForm>(EMPTY)
  const [status, setStatus] = useState<Status>('idle')
  const [feedback, setFeedback] = useState('')

  const update =
    (key: keyof EnquiryForm) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }))

  /**
   * Posts to the /api/enquiry Route Handler, which validates server-side and
   * forwards to whatever transport is configured (see app/api/enquiry/route.ts).
   * The legacy build only ran a setTimeout and threw the data away.
   */
  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (status === 'sending') return

    setStatus('sending')
    setFeedback('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data: { ok?: boolean; message?: string } = await res.json()

      if (!res.ok || !data.ok) {
        setStatus('error')
        setFeedback(data.message ?? 'We could not send that. Please call us instead.')
        return
      }

      setStatus('sent')
      setFeedback(data.message ?? 'Request received — a counsellor will call you within 24 hours.')
      setForm(EMPTY)
      window.setTimeout(() => {
        setStatus('idle')
        setFeedback('')
      }, 8000)
    } catch {
      setStatus('error')
      setFeedback('Network error. Please check your connection or call us directly.')
    }
  }

  return (
    <section className="contact section" id="contact">
      <div className="shell">
        <SectionHeading
          align="center"
          eyebrow="Contact"
          eyebrowIcon="send"
          title="Book a free demo class"
          highlight="this week"
          lead="Tell us where you are in your career and we will map the shortest route to the role you want — no fee, no obligation."
        />

        <div className="contact__panel">
          {/* ----------------------------------------------------- form */}
          <form className="cform" onSubmit={submit} data-reveal="left" noValidate={false}>
            <div className="cform__row">
              <div className="field">
                <label htmlFor="cf-name">Full name</label>
                <input
                  id="cf-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={update('name')}
                />
              </div>

              <div className="field">
                <label htmlFor="cf-phone">Phone number</label>
                <input
                  id="cf-phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  inputMode="tel"
                  pattern="[0-9+\s-]{10,15}"
                  placeholder="+91 00000 00000"
                  value={form.phone}
                  onChange={update('phone')}
                />
              </div>
            </div>

            <div className="cform__row">
              <div className="field">
                <label htmlFor="cf-email">Email</label>
                <input
                  id="cf-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={update('email')}
                />
              </div>

              <div className="field">
                <label htmlFor="cf-course">Interested in</label>
                <select
                  id="cf-course"
                  name="course"
                  required
                  value={form.course}
                  onChange={update('course')}
                >
                  <option value="" disabled>
                    Select a program
                  </option>
                  {courseOptions.map((course) => (
                    <option key={course} value={course}>
                      {course}
                    </option>
                  ))}
                  <option value="Not sure yet">Not sure yet — help me choose</option>
                </select>
              </div>
            </div>

            <div className="field">
              <label htmlFor="cf-message">What are you hoping to achieve?</label>
              <textarea
                id="cf-message"
                name="message"
                placeholder="e.g. I am in final year B.Tech and want an AI role by next summer."
                value={form.message}
                onChange={update('message')}
              />
            </div>

            <Button type="submit" loading={status === 'sending'} arrow block>
              {status === 'sending' ? 'Sending…' : 'Request my free demo'}
            </Button>

            {/* aria-live so the outcome is announced, not just shown */}
            <div aria-live="polite">
              {status === 'sent' && (
                <p className="cform__status" role="status">
                  <Icon name="check" />
                  {feedback}
                </p>
              )}

              {status === 'error' && (
                <p className="cform__status cform__status--error" role="alert">
                  <Icon name="x" />
                  {feedback}
                </p>
              )}
            </div>

            <p className="cform__note">
              We never share your details. By submitting you agree to be contacted about admissions.
            </p>
          </form>

          {/* ----------------------------------------------- side column */}
          <aside className="contact__side" data-reveal="right" data-reveal-delay="120">
            <a className="qcard" href={brand.phoneHref}>
              <i>
                <Icon name="phone" />
              </i>
              <div>
                <b>Call us</b>
                <span>{brand.phone}</span>
              </div>
            </a>

            <a
              className="qcard"
              href={`https://wa.me/${brand.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i>
                <Icon name="whatsapp" />
              </i>
              <div>
                <b>WhatsApp</b>
                <span>Chat with a counsellor</span>
              </div>
            </a>

            <a className="qcard" href={`mailto:${brand.email}`}>
              <i>
                <Icon name="mail" />
              </i>
              <div>
                <b>Email</b>
                <span>{brand.email}</span>
              </div>
            </a>

            <div className="qcard">
              <i>
                <Icon name="mapPin" />
              </i>
              <div>
                <b>Visit the centre</b>
                <span>{brand.address}</span>
              </div>
            </div>

            <div className="contact__map">
              <iframe
                src={brand.mapEmbed}
                title={`${brand.name} ${brand.suffix} location map`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <span className="contact__map-pin">
                <Icon name="mapPin" size={14} />
                {brand.hours}
              </span>
            </div>

            <div className="contact__socials">
              {socials.map((social, i) => (
                <a
                  key={social.key}
                  className="social"
                  href={social.href}
                  style={{ '--i': i }}
                  aria-label={social.name}
                  {...(/^https?:/.test(social.href)
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  <Icon name={social.key} />
                </a>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
