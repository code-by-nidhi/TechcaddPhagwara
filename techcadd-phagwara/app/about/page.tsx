import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import AboutCallback from '@/components/about/AboutCallback'
import Icon from '@/components/ui/Icon'
import {
  ABOUT_APPROACH,
  ABOUT_BELIEF,
  ABOUT_BELIEF_LINES,
  ABOUT_CREDENTIALS,
  ABOUT_CREDENTIALS_NOTE,
  ABOUT_DIFFERENCE,
  ABOUT_DOMAINS,
  ABOUT_DOMAINS_LEAD,
  ABOUT_ECOSYSTEM,
  ABOUT_HERO_STATS,
  ABOUT_INDUSTRY,
  ABOUT_LEARNERS,
  ABOUT_LOOP,
  ABOUT_LOOP_NOTE,
  ABOUT_MILESTONES,
  ABOUT_STORY,
  ABOUT_TEACH_CHIPS,
  ABOUT_TODAY,
  ABOUT_WHY,
  ABOUT_WHY_PULL,
} from '@/data/about'
import { brand } from '@/data/site'
import { SITE_URL } from '@/lib/site-config'

/**
 * `/about` — the institute, at length.
 *
 * The homepage already has an `#about` band, and this does not replace it:
 * that one is a paragraph and a stat grid for somebody scrolling past on their
 * way to the courses. This page is for somebody who stopped and asked who runs
 * this place, and it answers in the order that question is usually meant —
 * who we are, what we do, who we teach, how we teach it, what we can show for
 * it, and how to reach a person.
 *
 * Written as plain CSS in `styles/aboutPage.css`, prefixed `ap-`. Tailwind's
 * scanner only walks `components/courses` and `app/[slug]` (see tailwind.css),
 * so a utility class written here would never be generated — the same reason
 * `/contact` has its own stylesheet.
 *
 * Bands alternate light and dark down the page. That rhythm is the structure:
 * with thirteen sections and no dividers between them, a reader loses their
 * place within two screens.
 */

export const metadata: Metadata = {
  title: 'About Us',
  description: `${brand.name} ${brand.suffix} — an IT training and skill-development institute teaching AI, data, development, cloud, cyber security and digital marketing. Our story, our approach and how we turn skills into careers.`,
  alternates: { canonical: '/about' },
  openGraph: {
    title: `About ${brand.name} ${brand.suffix}`,
    description: `Who we are, who we teach and how ${brand.name} ${brand.suffix} turns skills into careers.`,
    url: `${SITE_URL}/about`,
    type: 'website',
  },
}

/** `01`, `02`, … — the numbering used by four separate bands below. */
const n = (i: number) => String(i + 1).padStart(2, '0')

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* ------------------------------------------------------------ hero */}
      <section className="ap-hero">
        {/*
          Atmosphere, not content — dimmed and blurred by `.ap-hero__bg img`,
          so it is decorative and carries no alt text. `priority` because it is
          the largest paint above the fold and lazy-loading it would show the
          flat navy first and then swap.
        */}
        <div className="ap-hero__bg">
          <Image
            src="/images/course/lab.webp"
            alt=""
            fill
            priority
            sizes="100vw"
          />
        </div>

        <div className="shell">
          <p className="ap-hero__badge">About us</p>

          <h1 className="ap-hero__title" data-reveal="up">
            Learn about our people,
            <br />
            our story and <em>how we</em>
            <br />
            <em>turn skills into careers.</em>
          </h1>

          {ABOUT_HERO_STATS.length > 0 && (
            <ul className="ap-hero__stats" data-reveal="up" data-reveal-delay="120">
              {ABOUT_HERO_STATS.map((stat) => (
                <li key={stat.label}>
                  <b>{stat.value}</b>
                  <span>{stat.label}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* ------------------------------------------------------ who we are */}
      <section className="ap-band ap-who" id="story">
        <div className="shell ap-who__grid">
          <div className="ap-who__copy">
            <p className="ap-eyebrow">Who we are</p>
            <h2 className="ap-title" data-reveal="up">
              Empowering Skills. Enabling Careers. <em>Building the Future.</em>
            </h2>

            {ABOUT_STORY.map((para) => (
              <p className="ap-prose" key={para.slice(0, 32)}>
                {para}
              </p>
            ))}

            <div className="ap-teach">
              <h3>What we teach</h3>
              <p>
                Twenty-seven courses across four disciplines — every one of them running at the
                Phagwara centre.
              </p>
              <ul className="ap-chips">
                {ABOUT_TEACH_CHIPS.map((chip) => (
                  <li key={chip}>{chip}</li>
                ))}
              </ul>
            </div>

            <p className="ap-who__foot">{brand.address}</p>
          </div>

          {/*
            Three photographs of the centre — the only real ones there are.
            Sized rather than `fill` so the browser reserves the box before the
            image arrives and the prose beside it does not reflow.
          */}
          <div className="ap-shots" data-reveal="up" data-reveal-delay="100">
            <figure className="ap-shots__lead">
              <Image
                src="/images/course/campus1.webp"
                alt="Students at the Techcadd Phagwara centre"
                width={880}
                height={560}
                sizes="(max-width: 900px) 100vw, 46vw"
              />
              <figcaption>Team Techcadd</figcaption>
            </figure>
            <figure>
              <Image
                src="/images/course/lab.webp"
                alt="A training lab at the centre"
                width={440}
                height={330}
                sizes="(max-width: 900px) 50vw, 23vw"
              />
            </figure>
            <figure>
              <Image
                src="/images/course/classroom.webp"
                alt="A classroom session in progress"
                width={440}
                height={330}
                sizes="(max-width: 900px) 50vw, 23vw"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- ecosystem */}
      <section className="ap-band ap-band--dark ap-eco">
        <div className="shell ap-eco__grid">
          <div>
            <p className="ap-eyebrow">More than training</p>
            <h2 className="ap-title" data-reveal="up">
              A skill-building ecosystem.
            </h2>
            {ABOUT_ECOSYSTEM.map((para) => (
              <p className="ap-prose" key={para.slice(0, 32)}>
                {para}
              </p>
            ))}
          </div>

          <div className="ap-eco__shots" data-reveal="up" data-reveal-delay="100">
            <figure>
              <Image
                src="/images/course/form.webp"
                alt="A trainer working with students"
                width={520}
                height={340}
                sizes="(max-width: 900px) 60vw, 26vw"
              />
            </figure>
            <figure>
              <Image
                src="/images/course/campus1.webp"
                alt="A certificate presentation at the centre"
                width={520}
                height={340}
                sizes="(max-width: 900px) 60vw, 26vw"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ why it matters */}
      <section className="ap-band ap-why">
        <div className="shell ap-narrow">
          <p className="ap-eyebrow ap-center">Why it matters</p>
          <h2 className="ap-title ap-center" data-reveal="up">
            Preparing learners for a changing digital world
          </h2>

          {ABOUT_WHY.map((para) => (
            <p className="ap-prose ap-center" key={para.slice(0, 32)}>
              {para}
            </p>
          ))}

          <blockquote className="ap-pull" data-reveal="up">
            {ABOUT_WHY_PULL}
          </blockquote>
        </div>
      </section>

      {/* ---------------------------------------------------------- learners */}
      <section className="ap-band ap-band--dark ap-learners" id="who-we-teach">
        <div className="shell">
          <p className="ap-eyebrow">Who we teach</p>
          <h2 className="ap-title" data-reveal="up">
            Learning for every stage
            <br />
            of the career journey
          </h2>
          <p className="ap-prose ap-prose--lead">
            Techcadd’s training is built for a deliberately mixed room, including:
          </p>

          <ul className="ap-grid ap-grid--3">
            {ABOUT_LEARNERS.map((item, i) => (
              <li className="ap-card" key={item.title} data-reveal="up" data-reveal-delay={i * 60}>
                <span className="ap-card__n">{n(i)}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* -------------------------------------------------------------- loop */}
      <section className="ap-band ap-loop">
        <div className="shell">
          <p className="ap-eyebrow ap-center">From classroom to practical experience</p>
          <h2 className="ap-title ap-center" data-reveal="up">
            Learn <i aria-hidden="true">→</i> Practice <i aria-hidden="true">→</i> Build{' '}
            <i aria-hidden="true">→</i> Grow
          </h2>

          <ol className="ap-loop__steps">
            {ABOUT_LOOP.map((step, i) => (
              <li key={step.title} data-reveal="up" data-reveal-delay={i * 90}>
                <span className="ap-loop__n">{n(i)}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>

          <p className="ap-note ap-center">{ABOUT_LOOP_NOTE}</p>
        </div>
      </section>

      {/* -------------------------------------------------------- difference */}
      <section className="ap-band ap-band--dark ap-diff" id="why-techcadd">
        <div className="shell">
          <p className="ap-eyebrow">The difference</p>
          <h2 className="ap-title" data-reveal="up">
            What makes Techcadd different?
          </h2>

          <ul className="ap-diff__list">
            {ABOUT_DIFFERENCE.map((item, i) => (
              <li key={item.title} data-reveal="up" data-reveal-delay={(i % 3) * 80}>
                <Icon name="check" size={16} aria-hidden="true" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ----------------------------------------------------------- domains */}
      <section className="ap-band ap-domains">
        <div className="shell">
          <p className="ap-eyebrow">What you can learn</p>
          <h2 className="ap-title" data-reveal="up">
            Building skills across
            <br />
            technology domains
          </h2>
          <p className="ap-prose ap-prose--lead">{ABOUT_DOMAINS_LEAD}</p>

          <ul className="ap-grid ap-grid--4">
            {ABOUT_DOMAINS.map((domain, i) => (
              <li
                className="ap-domain"
                key={domain.title}
                data-reveal="up"
                data-reveal-delay={i * 70}
              >
                <h3>{domain.title}</h3>
                <ul>
                  {domain.courses.map((course) => (
                    <li key={course}>{course}</li>
                  ))}
                </ul>
                {domain.total > domain.courses.length && (
                  <p className="ap-domain__more">
                    +{domain.total - domain.courses.length} more in this track
                  </p>
                )}
              </li>
            ))}
          </ul>

          <Link className="ap-link" href="/#courses">
            Browse the full catalogue
            <Icon name="arrow" size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* ---------------------------------------------------------- approach */}
      <section className="ap-band ap-band--dark ap-approach">
        <div className="shell">
          <p className="ap-eyebrow ap-center">Our approach</p>
          <h2 className="ap-title ap-center" data-reveal="up">
            Practical. Future-Focused. <em>Career-Oriented.</em>
          </h2>
          <p className="ap-prose ap-center">Three principles, and everything else follows them.</p>

          <ul className="ap-approach__grid">
            {ABOUT_APPROACH.map((item, i) => (
              <li key={item.title} data-reveal="up" data-reveal-delay={i * 90}>
                <span className="ap-card__n">{n(i)}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------------------------------------------------- industry */}
      <section className="ap-band ap-industry">
        <div className="shell ap-industry__grid">
          <figure className="ap-industry__shot" data-reveal="up">
            <Image
              src="/images/course/form.webp"
              alt="An industry workshop hosted at the centre"
              width={720}
              height={520}
              sizes="(max-width: 900px) 100vw, 40vw"
            />
          </figure>

          <div>
            <p className="ap-eyebrow">Industry engagement</p>
            <h2 className="ap-title" data-reveal="up">
              Connecting education with industry
            </h2>
            {ABOUT_INDUSTRY.map((para) => (
              <p className="ap-prose" key={para.slice(0, 32)}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- recognition */}
      <section className="ap-band ap-cred" id="recognition">
        <div className="shell">
          <p className="ap-eyebrow ap-center">Awards, recognition &amp; accreditation</p>
          <h2 className="ap-title ap-center" data-reveal="up">
            Recognition built through learning,
            <br />
            innovation and industry engagement
          </h2>

          <ul className="ap-grid ap-grid--2">
            {ABOUT_CREDENTIALS.map((item, i) => (
              <li className="ap-cred__card" key={item.title} data-reveal="up" data-reveal-delay={i * 70}>
                <span className="ap-cred__icon">
                  <Icon name={item.icon} size={18} aria-hidden="true" />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <p className="ap-note ap-center">{ABOUT_CREDENTIALS_NOTE}</p>
        </div>
      </section>

      {/* ----------------------------------------------------------- journey */}
      <section className="ap-band ap-band--dark ap-journey" id="journey">
        <div className="shell">
          <p className="ap-eyebrow ap-center">Our journey</p>
          <h2 className="ap-title ap-center" data-reveal="up">
            Built one batch at a time
          </h2>
          <p className="ap-prose ap-center">
            What started in 2007 has become a technology-focused training ecosystem — and the focus
            keeps moving towards AI, automation, cloud, cyber security and modern software
            development.
          </p>

          <ol className="ap-timeline">
            {ABOUT_MILESTONES.map((item, i) => (
              <li key={item.year} data-reveal={i % 2 ? 'right' : 'left'}>
                <span className="ap-timeline__year">{item.year}</span>
                <div className="ap-timeline__card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ------------------------------------------------------------ belief */}
      <section className="ap-band ap-belief">
        <div className="shell">
          <div className="ap-belief__grid">
            <div>
              <p className="ap-eyebrow">Our belief</p>
              <ul className="ap-belief__lines" data-reveal="up">
                {ABOUT_BELIEF_LINES.map((line, i) => (
                  <li key={line} className={i === ABOUT_BELIEF_LINES.length - 1 ? 'is-accent' : ''}>
                    {line}
                  </li>
                ))}
              </ul>
            </div>

            <div className="ap-belief__note">
              {ABOUT_BELIEF.map((para) => (
                <p key={para.slice(0, 32)}>{para}</p>
              ))}
            </div>
          </div>

          <div className="ap-today" data-reveal="up">
            <p className="ap-eyebrow ap-center">Techcadd today</p>
            <p className="ap-today__trio">
              <b>Learn.</b>
              <b>Implement.</b>
              <b>Grow.</b>
            </p>
            <p className="ap-today__text">{ABOUT_TODAY}</p>
            <p className="ap-today__sign">
              <span>Your skill &amp; technology partner</span>
              <b>
                {brand.name} {brand.suffix}
              </b>
            </p>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------- cta */}
      <section className="ap-band ap-cta" id="enquiry">
        <div className="shell ap-narrow">
          <p className="ap-eyebrow ap-center">Ready to get started?</p>
          <h2 className="ap-title ap-center" data-reveal="up">
            Start building your career today.
          </h2>
          <p className="ap-prose ap-center">
            Talk to a counsellor. One call is usually enough to know which track fits your degree,
            your schedule and the job you want.
          </p>

          <AboutCallback />

          <a className="ap-cta__call" href={brand.phoneHref}>
            <Icon name="phone" size={16} aria-hidden="true" />
            <span>
              <i>Call now</i>
              <b>{brand.phone}</b>
            </span>
          </a>

          <ul className="ap-cta__ticks">
            <li>
              <Icon name="check" size={13} aria-hidden="true" /> Free career counselling
            </li>
            <li>
              <Icon name="check" size={13} aria-hidden="true" /> No registration fee
            </li>
            <li>
              <Icon name="check" size={13} aria-hidden="true" /> Placement support included
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}
