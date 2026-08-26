'use client'

import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type TouchEvent } from 'react'
import Link from 'next/link'
import Icon, { type IconName } from '@/components/ui/Icon'
import { courseCatalog } from '@/data/coursePages'

interface CarouselCard {
  slug: string
  /** The display title as requested — close to but not always identical to
      the catalog's own short `label` (e.g. "MERN Stack Development" vs the
      menu's "MERN Stack"), so it's kept explicit here rather than derived. */
  title: string
  category: string
  summary: string
  icon: IconName
}

/**
 * Ten real course pages, pulled live from `courseCatalog`
 * (`data/coursePages.ts`) rather than hand-copied — the description,
 * icon and category badge on every card are the same data the mega menu
 * and each course's own landing page already use, so there's nothing here
 * that can drift out of sync with the real catalog.
 */
const FEATURED_SLUGS: { slug: string; title: string }[] = [
  { slug: 'mern-stack-course-in-phagwara', title: 'MERN Stack Development' },
  { slug: 'python-course-in-phagwara', title: 'Python Programming' },
  { slug: 'java-course-in-phagwara', title: 'Java Programming' },
  { slug: 'data-science-course-in-phagwara', title: 'Data Science' },
  { slug: 'artificial-intelligence-course-in-phagwara', title: 'Artificial Intelligence' },
  { slug: 'machine-learning-course-in-phagwara', title: 'Machine Learning' },
  { slug: 'power-bi-course-in-phagwara', title: 'Power BI' },
  { slug: 'digital-marketing-course-in-phagwara', title: 'Digital Marketing' },
  { slug: 'web-development-course-in-phagwara', title: 'Full Stack Web Development' },
  { slug: 'cybersecurity-course-in-phagwara', title: 'Cyber Security' },
]

const CATALOG_BY_SLUG = new Map(
  courseCatalog.flatMap((cat) => cat.courses.map((c) => [c.slug, { ...c, category: cat.title }]))
)

const CARDS: CarouselCard[] = FEATURED_SLUGS.map(({ slug, title }) => {
  const entry = CATALOG_BY_SLUG.get(slug)
  return {
    slug,
    title,
    category: entry?.category ?? '',
    summary: entry?.summary ?? '',
    icon: entry?.icon ?? 'code',
  }
})

interface FeatureBarItem {
  icon: IconName
  title: string
  text: string
}

const FEATURES: FeatureBarItem[] = [
  { icon: 'users', title: 'Industry Mentors', text: 'Learn from working professionals' },
  { icon: 'code', title: 'Hands-on Projects', text: 'Build real-world applications' },
  { icon: 'award', title: 'Certificate & Recognition', text: 'Industry-recognized certificates' },
  { icon: 'briefcase', title: 'Placement Support', text: '500+ hiring partners' },
]

const COUNT = CARDS.length
const AUTOPLAY_MS = 3000
const SWIPE_THRESHOLD = 40

/** Shortest signed distance from `active` to `i` around the N-card ring. */
const ringOffset = (i: number, active: number, n: number) => {
  let d = i - active
  if (d > n / 2) d -= n
  if (d < -n / 2) d += n
  return d
}

const tierClass = (offset: number) => {
  if (offset === 0) return 'is-active'
  const side = offset > 0 ? 'right' : 'left'
  const tier = Math.min(Math.abs(offset), 4)
  return tier >= 4 ? 'is-hidden' : `is-${side}-${tier}`
}

export default function CourseCarousel() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchX = useRef<number | null>(null)

  const next = useCallback(() => setActive((a) => (a + 1) % COUNT), [])
  const prev = useCallback(() => setActive((a) => (a - 1 + COUNT) % COUNT), [])
  const goTo = useCallback((i: number) => setActive(i), [])

  /* autoplay — every 3s, paused on hover/focus and under reduced motion */
  useEffect(() => {
    if (paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(next, AUTOPLAY_MS)
    return () => window.clearInterval(id)
  }, [paused, next])

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      next()
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      prev()
    }
  }

  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchX.current = e.touches[0]?.clientX ?? null
  }

  const onTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (touchX.current === null) return
    const dx = (e.changedTouches[0]?.clientX ?? touchX.current) - touchX.current
    touchX.current = null
    if (dx > SWIPE_THRESHOLD) prev()
    else if (dx < -SWIPE_THRESHOLD) next()
  }

  return (
    <section className="carousel section" id="courses">
      <span className="carousel__fx" aria-hidden="true">
        <span className="carousel__grid" />
        <span className="carousel__glow" />
      </span>

      <div className="shell shell--wide">
        <div className="carousel__head">
          <span className="carousel__eyebrow">Explore Our Courses</span>
          <h2 className="carousel__heading">
            Build Your Future With <span className="carousel__accent">Advanced IT Skills</span>
          </h2>
          <p className="carousel__lead">
            Industry-focused programs designed for careers that actually hire.
          </p>
        </div>

        <div
          className="carousel__stage"
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="Courses"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onKeyDown={onKeyDown}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button type="button" className="carousel__arrow carousel__arrow--prev" onClick={prev} aria-label="Previous course">
            <Icon name="chevronLeft" size={20} />
          </button>

          <div className="carousel__track">
            {CARDS.map((card, i) => {
              const offset = ringOffset(i, active, COUNT)
              const tier = tierClass(offset)
              const isActive = tier === 'is-active'

              return (
                <Link
                  href={`/${card.slug}`}
                  key={card.slug}
                  className={`ccard ${tier}`}
                  aria-hidden={!isActive || undefined}
                  tabIndex={isActive ? undefined : -1}
                >
                  <span className="ccard__glow" aria-hidden="true" />

                  <span className="ccard__image">
                    <Icon name={card.icon} size={30} />
                  </span>

                  <span className="ccard__category">{card.category}</span>
                  <h3 className="ccard__title">{card.title}</h3>
                  <p className="ccard__desc">{card.summary}</p>

                  <span className="ccard__cta">
                    Explore Course
                    <Icon name="arrow" size={14} />
                  </span>
                </Link>
              )
            })}
          </div>

          <button type="button" className="carousel__arrow carousel__arrow--next" onClick={next} aria-label="Next course">
            <Icon name="chevronRight" size={20} />
          </button>
        </div>

        <div className="carousel__dots" role="tablist" aria-label="Choose a course">
          {CARDS.map((card, i) => (
            <button
              key={card.slug}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={card.title}
              className={`carousel__dot ${i === active ? 'is-on' : ''}`.trim()}
              onClick={() => goTo(i)}
            />
          ))}
        </div>

        {/* ------------------------------------------------------ feature bar */}
        <div className="carousel__features">
          {FEATURES.map((item) => (
            <div className="cfeature" key={item.title}>
              <span className="cfeature__icon">
                <Icon name={item.icon} size={22} />
              </span>
              <div>
                <b className="cfeature__title">{item.title}</b>
                <span className="cfeature__text">{item.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
