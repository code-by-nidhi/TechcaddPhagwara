import type { Metadata } from 'next'
import Link from 'next/link'

import ContactEnquiry from '@/components/contact/ContactEnquiry'
import SupportDesks from '@/components/contact/SupportDesks'
import Icon, { type IconName } from '@/components/ui/Icon'
import SectionHeading from '@/components/ui/SectionHeading'
import { WHAT_HAPPENS_NEXT } from '@/data/contact'
import { COURSE_CONTENT } from '@/data/courses'
import { COURSE_STATS } from '@/data/courses/shared'
import { brand, companies, placementStats, socials } from '@/data/site'
import { SITE_URL } from '@/lib/site-config'

/**
 * The contact page.
 *
 * The homepage already ends in a Contact section, and this does not replace
 * it: that one catches somebody who has just finished reading about the
 * courses, and it asks for the minimum. This page is the destination for
 * somebody who arrived wanting to reach a person — from the navbar, from a
 * search result, from a card someone handed them — and the difference shows in
 * the shape. It routes by *who is asking* (a student, a college, an employer,
 * a prospective franchisee) before it asks for anything, because three of
 * those four are not looking for a demo class at all.
 */

export const metadata: Metadata = {
  title: 'Contact',
  description: `Talk to a counsellor at ${brand.name} ${brand.suffix}. Call ${brand.phone}, WhatsApp us, or book a free demo class — student support, college partnerships, placement and franchise enquiries.`,
  alternates: { canonical: '/contact' },
  openGraph: {
    title: `Contact ${brand.name} ${brand.suffix}`,
    description: `Talk to a counsellor at ${brand.name} ${brand.suffix} — course guidance, fees, batch timings, placement and college partnerships.`,
    url: `${SITE_URL}/contact`,
    type: 'website',
  },
}

/**
 * The catalogue, as the select offers it.
 *
 * The homepage form falls back to a six-item marketing grid when the CMS is
 * unreachable, which means a student cannot choose most of what is taught.
 * Here the list is the real twenty-seven-course catalogue, which is static and
 * therefore always available.
 */
const COURSE_OPTIONS = COURSE_CONTENT.map((course) => course.label)

/**
 * An icon per placement figure.
 *
 * Keyed by label rather than matched positionally: reordering `placementStats`
 * should not silently hand "Highest Package" the users icon. A figure with no
 * entry here falls back to the chart glyph rather than rendering nothing.
 */
const RECORD_ICONS: Record<string, IconName> = {
  'Placement Success Rate': 'target',
  'Students Placed': 'users',
  'Highest Package': 'trending',
  'Average Package': 'wallet',
}

export default function ContactPage() {
  const tel = brand.phoneHref

  return (
    <main id="main" className="contact-page">
      {/* ------------------------------------------------------------ hero */}
      <section className="cp-hero">
        <div className="shell">
          <nav className="course-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <Icon name="chevronRight" size={12} />
            <span aria-current="page">Contact</span>
          </nav>

          <h1 className="cp-hero__title">
            Talk to a counsellor
            <span> in {brand.suffix}</span>
          </h1>

          <p className="cp-hero__lead">
            Tell us where you are — 12th pass, mid-degree, working, or running a business. We will
            tell you honestly which track fits and which does not.
          </p>

          <div className="cp-hero__actions">
            <a className="cp-btn cp-btn--primary" href="#enquiry">
              Book a free demo class
              <Icon name="arrow" size={16} aria-hidden="true" />
            </a>
            <a className="cp-btn cp-btn--ghost" href={tel}>
              <Icon name="phone" size={15} aria-hidden="true" />
              Call {brand.phone}
            </a>
          </div>

          <ul className="cp-hero__trust">
            {COURSE_STATS.map((stat) => (
              <li key={stat.label}>
                <b>{stat.value}</b>
                <span>
                  {stat.label} <i>{stat.note}</i>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* -------------------------------------------------- support desks */}
      <section className="section" id="support">
        <div className="shell">
          <SectionHeading
            align="center"
            eyebrow="Support & assistance"
            eyebrowIcon="headphones"
            title="Reach the desk that"
            highlight="actually handles it"
            lead="Four desks, four different jobs. Pick the one that matches why you are getting in touch and you will skip a transfer."
            reveal={false}
          />

          <SupportDesks />

          <div className="cp-counselling">
            <span className="cp-counselling__icon" aria-hidden="true">
              <Icon name="video" size={20} />
            </span>
            <div>
              <b>Prefer to talk before you visit?</b>
              <p>
                Book a free 1:1 online counselling session. Pick a slot and an advisor calls you
                — screen shared, syllabus open, no obligation.
              </p>
            </div>
            <a className="cp-btn cp-btn--primary cp-btn--sm" href="#enquiry">
              Book a session
              <Icon name="arrow" size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- enquiry -- */}
      <section className="cp-enquiry" id="enquiry">
        <div className="shell cp-enquiry__grid">
          <div className="cp-enquiry__copy">
            <h2 className="cp-enquiry__title">
              Take the first step towards <span>your IT career</span> with {brand.name}{' '}
              {brand.suffix}
            </h2>

            <h3 className="cp-enquiry__sub">What happens next?</h3>
            <ol className="cp-steps">
              {WHAT_HAPPENS_NEXT.map((step, i) => (
                <li key={step.title}>
                  <span className="cp-steps__n" aria-hidden="true">
                    {i + 1}
                  </span>
                  <div>
                    <b>{step.title}</b>
                    <p>{step.copy}</p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="cp-enquiry__alt">
              Fill in the form and a counsellor will get back to you during office hours. You can
              also call <a href={tel}>{brand.phone}</a> or write to{' '}
              <a href={`mailto:${brand.email}`}>{brand.email}</a>.
            </p>

            <div className="cp-enquiry__socials">
              <span>Or find us on</span>
              {socials.map((social) => (
                <a
                  key={social.key}
                  href={social.href}
                  aria-label={social.name}
                  {...(/^https?:/.test(social.href)
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  <Icon name={social.key} size={16} />
                </a>
              ))}
            </div>
          </div>

          <ContactEnquiry courseOptions={COURSE_OPTIONS} />
        </div>
      </section>

      {/* -------------------------------------------------------- results -- */}
      <section className="section section--tint" id="results">
        <div className="shell cp-record">
          <div className="cp-record__copy">
            <p className="cp-record__eyebrow">
              <Icon name="award" size={14} aria-hidden="true" />
              Placement record
            </p>
            <h2 className="cp-record__title">
              Where our students <span className="gradient-text">actually end up</span>
            </h2>
            <p className="cp-record__lead">
              Figures across every {brand.name} branch since 2007 — not this centre alone. Ask a
              counsellor for {brand.suffix}&rsquo;s own numbers and they will give them to you
              straight, including the ones that are less flattering.
            </p>
            <a className="cp-record__link" href="#enquiry">
              Ask for the {brand.suffix} numbers
              <Icon name="arrow" size={14} aria-hidden="true" />
            </a>
          </div>

          <ul className="cp-record__grid">
            {placementStats.map((stat) => (
              <li key={stat.label}>
                <span className="cp-record__icon" aria-hidden="true">
                  <Icon name={RECORD_ICONS[stat.label] ?? 'chart'} size={16} />
                </span>
                <b>
                  {stat.decimals
                    ? stat.value.toFixed(stat.decimals)
                    : stat.value.toLocaleString('en-IN')}
                  <i>{stat.suffix}</i>
                </b>
                <span className="cp-record__label">{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Full-bleed, so it sits outside the shell. */}
        <div className="cp-partners">
          <p className="cp-partners__label">Our students have been placed at</p>
          <div className="cp-partners__viewport">
            <div className="cp-partners__track">
              {/* Two passes so the loop is seamless at translateX(-50%). The
                  second is hidden from assistive tech — it is the same list. */}
              {[0, 1].map((copy) => (
                <ul
                  className="cp-partners__set"
                  key={copy}
                  aria-hidden={copy === 1 || undefined}
                  {...(copy === 1 ? { 'data-dup': '' } : {})}
                >
                  {companies.map((company) => (
                    <li key={company}>{company}</li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------- visit / channels */}
      <section className="section" id="visit">
        <div className="shell">
          <SectionHeading
            align="center"
            eyebrow="Visit us"
            eyebrowIcon="mapPin"
            title="Come and see"
            highlight="the labs"
            lead="Walk in during office hours. No appointment needed — though a call ahead means a trainer is free when you arrive."
            reveal={false}
          />

          <div className="cp-visit">
            <div className="cp-visit__map">
              <iframe
                src={brand.mapEmbed}
                title={`${brand.name} ${brand.suffix} location map`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="cp-visit__cards">
              <div className="cp-card">
                <span className="cp-card__icon" aria-hidden="true">
                  <Icon name="mapPin" size={17} />
                </span>
                <b>Address</b>
                <p>{brand.address}</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(brand.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get directions <Icon name="arrow" size={13} aria-hidden="true" />
                </a>
              </div>

              <div className="cp-card">
                <span className="cp-card__icon" aria-hidden="true">
                  <Icon name="phone" size={17} />
                </span>
                <b>Phone</b>
                <p>{brand.phone}</p>
                <a href={tel}>
                  Call now <Icon name="arrow" size={13} aria-hidden="true" />
                </a>
              </div>

              <div className="cp-card">
                <span className="cp-card__icon" aria-hidden="true">
                  <Icon name="mail" size={17} />
                </span>
                <b>Email</b>
                <p>{brand.email}</p>
                <a href={`mailto:${brand.email}`}>
                  Send email <Icon name="arrow" size={13} aria-hidden="true" />
                </a>
              </div>

              <div className="cp-card">
                <span className="cp-card__icon" aria-hidden="true">
                  <Icon name="clock" size={17} />
                </span>
                <b>Office hours</b>
                <p>{brand.hours}</p>
                <span className="cp-card__quiet">Sunday closed</span>
              </div>

              <a
                className="cp-card cp-card--wa"
                href={`https://wa.me/${brand.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="cp-card__icon" aria-hidden="true">
                  <Icon name="whatsapp" size={17} />
                </span>
                <b>Chat on WhatsApp</b>
                <p>Instant replies during office hours</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- closing cta */}
      <section className="cp-final">
        <div className="shell cp-final__inner">
          <div>
            <h2>Ready to start your career in tech?</h2>
            <p>Book a free demo class and see the lab before you decide.</p>
          </div>
          <div className="cp-final__actions">
            <a className="cp-btn cp-btn--primary" href="#enquiry">
              Book a free demo
              <Icon name="arrow" size={16} aria-hidden="true" />
            </a>
            <a className="cp-btn cp-btn--ghost" href={tel}>
              <Icon name="phone" size={15} aria-hidden="true" />
              {brand.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
