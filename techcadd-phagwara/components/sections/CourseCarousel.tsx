'use client'

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
  type TouchEvent,
} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Icon, { type IconName } from '@/components/ui/Icon'
import {
  courseCatalog as staticCourseCatalog,
  type CourseMenuCategory,
} from '@/data/coursePages'

interface CarouselCard {
  slug: string
  /** The display title as requested — close to but not always identical to
      the catalog's own short `label` (e.g. "MERN Stack Development" vs the
      menu's "MERN Stack"), so it's kept explicit here rather than derived. */
  title: string
  category: string
  summary: string
  icon: IconName
  image: string
}

/**
 * One illustration per course, from the existing `public/images/course`
 * asset set. Keyed by slug rather than title so it survives the catalogue's
 * own copy edits; anything not covered here (a course added to the catalogue
 * without a matching illustration) falls back to a generic dev-workspace shot
 * rather than rendering a broken image.
 */
const COURSE_IMAGES: Record<string, string> = {
  'python-course-in-phagwara': '/images/course/Python.png',
  'java-course-in-phagwara': '/images/course/Java.png',
  'c-course-in-phagwara': '/images/course/C.png',
  'c-plus-plus-course-in-phagwara': '/images/course/C%2B%2B.png',
  'kotlin-course-in-phagwara': '/images/course/Kotlin.png',
  'web-designing-course-in-phagwara': '/images/course/Web%20Design.png',
  'web-development-course-in-phagwara': '/images/course/Full_Stack.png',
  'mern-stack-course-in-phagwara': '/images/course/MERN.png',
  'mean-stack-course-in-phagwara': '/images/course/MEAN.png',
  'php-full-stack-course-in-phagwara': '/images/course/PHP.png',
  'artificial-intelligence-course-in-phagwara': '/images/course/AI.png',
  'machine-learning-course-in-phagwara': '/images/course/ML.png',
  'deep-learning-course-in-phagwara': '/images/course/Deep_Learning.png',
  'data-science-course-in-phagwara': '/images/course/Data_science.png',
  'data-analytics-course-in-phagwara': '/images/course/Data_Analytics.png',
  'power-bi-course-in-phagwara': '/images/course/PowerBI.png',
  'tableau-course-in-phagwara': '/images/course/tableau.png',
  'digital-marketing-course-in-phagwara': '/images/course/Digital_Marketing.png',
  'social-media-marketing-course-in-phagwara': '/images/course/SMM.png',
  'google-ads-course-in-phagwara': '/images/course/Google_ADS.png',
  'seo-course-in-phagwara': '/images/course/SEO.png',
  'wordpress-course-in-phagwara': '/images/course/Wordpress.png',
  'shopify-course-in-phagwara': '/images/course/Shopify.png',
  'cybersecurity-course-in-phagwara': '/images/course/CyberSecurity.png',
  'ethical-hacking-course-in-phagwara': '/images/course/Ethical_Hacking.png',
  'cloud-computing-course-in-phagwara': '/images/course/Cloud_Computing.png',
  'linux-course-in-phagwara': '/images/course/Linux.png',
}

const DEFAULT_COURSE_IMAGE = '/images/course/Web_development.png'

const courseImage = (slug: string) => COURSE_IMAGES[slug] ?? DEFAULT_COURSE_IMAGE

/**
 * The ten courses the ring shows.
 *
 * The slugs are named rather than taken off the top of the catalogue: this is
 * an editorial choice about what to lead with, and "whatever the CMS returns
 * first" is not one. The description, icon and category badge still come from
 * the catalogue itself, so nothing here can drift from the course's own page.
 *
 * The titles are the one thing kept explicit — the ring's cards want
 * "MERN Stack Development" where the menu column wants "MERN Stack".
 */
const FEATURED: { slug: string; title: string }[] = [
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

/**
 * The featured slugs, resolved against whatever catalogue is in play.
 *
 * A named course that the CMS no longer has is dropped rather than rendered
 * with an empty description pointing at a 404 — which is exactly what would
 * happen the first time someone unpublished one of these ten. If enough of
 * them go that the ring would be threadbare, the rest of the catalogue backs
 * it up to eight so the carousel still reads as a carousel.
 */
function buildCards(catalog: CourseMenuCategory[]): CarouselCard[] {
  const bySlug = new Map(
    catalog.flatMap((cat) => cat.courses.map((c) => [c.slug, { ...c, category: cat.title }])),
  )

  const cards: CarouselCard[] = []

  for (const { slug, title } of FEATURED) {
    const entry = bySlug.get(slug)
    if (!entry) continue
    cards.push({
      slug,
      title,
      category: entry.category,
      summary: entry.summary,
      icon: entry.icon,
      image: courseImage(slug),
    })
  }

  const MIN_CARDS = 8
  if (cards.length < MIN_CARDS) {
    const taken = new Set(cards.map((card) => card.slug))
    for (const [slug, entry] of bySlug) {
      if (cards.length >= MIN_CARDS) break
      if (taken.has(slug)) continue
      cards.push({
        slug,
        title: entry.title,
        category: entry.category,
        summary: entry.summary,
        icon: entry.icon,
        image: courseImage(slug),
      })
    }
  }

  return cards
}

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

export default function CourseCarousel({
  courseCatalog = staticCourseCatalog,
}: { courseCatalog?: CourseMenuCategory[] } = {}) {
  const CARDS = useMemo(() => buildCards(courseCatalog), [courseCatalog])
  const COUNT = CARDS.length

  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchX = useRef<number | null>(null)

  const next = useCallback(() => setActive((a) => (a + 1) % COUNT), [COUNT])
  const prev = useCallback(() => setActive((a) => (a - 1 + COUNT) % COUNT), [COUNT])
  const goTo = useCallback((i: number) => setActive(i), [])

  /*
    The catalogue can shrink under a mounted carousel — a revalidation after an
    editor unpublishes a featured course re-renders this with fewer cards, and
    an `active` index left pointing past the end shows an empty ring.
  */
  useEffect(() => {
    setActive((a) => (a < COUNT ? a : 0))
  }, [COUNT])

  /* autoplay — every 3s, paused on hover/focus and under reduced motion */
  useEffect(() => {
    if (paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (COUNT < 2) return
    const id = window.setInterval(next, AUTOPLAY_MS)
    return () => window.clearInterval(id)
  }, [paused, next, COUNT])

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
                    <Image
                      src={card.image}
                      alt=""
                      fill
                      sizes="280px"
                      className="ccard__photo"
                    />
                    <span className="ccard__icon" aria-hidden="true">
                      <Icon name={card.icon} size={18} />
                    </span>
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
