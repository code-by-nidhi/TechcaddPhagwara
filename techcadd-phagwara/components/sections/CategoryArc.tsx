'use client'

import { useEffect, useMemo, useRef } from 'react'
import Link from 'next/link'
import Icon, { type IconName } from '@/components/ui/Icon'
import {
  courseCatalog as staticCourseCatalog,
  type CourseMenuCategory,
} from '@/data/coursePages'

interface CategoryCard {
  title: string
  /** Real `/[slug]` route from `data/coursePages.ts` — see the note below. */
  slug: string
  theme: 'ai' | 'stack' | 'data' | 'security' | 'marketing' | 'cloud' | 'ml' | 'web'
  icon: IconName
  desc: string
}

/**
 * Eight cards pointing at real `courseCatalog` routes (`data/coursePages.ts`).
 * Three didn't map 1:1 onto a requested slug:
 *   - "cyber-security-course-in-phagwara" → real slug has no hyphen
 *     (`cybersecurity-course-in-phagwara`); same course, confident fix.
 *   - "Full Stack Development" has no course of that exact name. With
 *     "Web Development" its own card (claiming `web-development-course-in-phagwara`),
 *     this one points at `php-full-stack-course-in-phagwara` — the one
 *     remaining course whose own title literally contains "Full Stack".
 *     Flagged; swap the `slug` below if `mern-stack-`/`mean-stack-` was meant.
 *   - Machine Learning and Web Development both matched an existing course
 *     exactly, no correction needed.
 */
const CATEGORIES: CategoryCard[] = [
  {
    title: 'Artificial Intelligence',
    slug: 'artificial-intelligence-course-in-phagwara',
    theme: 'ai',
    icon: 'brain',
    desc: 'Build intelligent systems using AI, ML and modern tools.',
  },
  {
    title: 'Full Stack Development',
    slug: 'php-full-stack-course-in-phagwara',
    theme: 'stack',
    icon: 'code',
    desc: 'Frontend, backend, database and deployment in one track.',
  },
  {
    title: 'Data Science',
    slug: 'data-science-course-in-phagwara',
    theme: 'data',
    icon: 'chart',
    desc: 'Analyze, visualize and predict using real data.',
  },
  {
    title: 'Cyber Security',
    slug: 'cybersecurity-course-in-phagwara',
    theme: 'security',
    icon: 'shield',
    desc: 'Protect networks, systems and applications.',
  },
  {
    title: 'Digital Marketing',
    slug: 'digital-marketing-course-in-phagwara',
    theme: 'marketing',
    icon: 'megaphone',
    desc: 'SEO, ads, social media and growth strategy.',
  },
  {
    title: 'Cloud & DevOps',
    slug: 'cloud-computing-course-in-phagwara',
    theme: 'cloud',
    icon: 'cloud',
    desc: 'Cloud infrastructure, deployment and automation.',
  },
  {
    title: 'Machine Learning',
    slug: 'machine-learning-course-in-phagwara',
    theme: 'ml',
    icon: 'cpu',
    desc: 'Algorithms that learn from data and improve with use.',
  },
  {
    title: 'Web Development',
    slug: 'web-development-course-in-phagwara',
    theme: 'web',
    icon: 'monitor',
    desc: 'Modern, responsive websites from front end to back end.',
  },
]

/**
 * The cards whose course still exists.
 *
 * Every card is a link to a real course page, and the eight slugs above are
 * chosen by hand — which was fine while the catalogue was a TypeScript file
 * that changed only when this one did. Now that a course can be unpublished in
 * the CMS, a card can outlive the page it points at, and the ring would go on
 * offering a 404 with a confident description under it.
 *
 * Dropping the card is the right correction rather than pointing it somewhere
 * else: the ring is a 3D circle whose geometry is derived from how many cards
 * there are, so it closes up around a missing one and still looks deliberate.
 */
function usableCards(catalog: CourseMenuCategory[]): CategoryCard[] {
  const live = new Set(catalog.flatMap((group) => group.courses.map((course) => course.slug)))
  const kept = CATEGORIES.filter((card) => live.has(card.slug))

  /*
    Below three the ring stops being a ring — the cards face away from each
    other and the section reads as broken rather than as sparse. If that many
    have gone, the hand-picked list has drifted far enough that showing it
    unchanged is the better failure: the links may 404, but somebody will
    notice, which is the point.
  */
  return kept.length >= 3 ? kept : CATEGORIES
}

const AUTO_SPEED = 6 /* deg/sec */
const EASE_RATE = 6 /* how fast a hover-recentre closes the angular gap */

/** Shortest signed distance from `a` to `b`, in degrees, wrapped to ±180. */
const angleDelta = (a: number, b: number) => (((b - a + 180) % 360) + 360) % 360 - 180

/**
 * A true 3D ring, not a marquee: each card sits at a fixed angle on a circle
 * (`rotateY(angle) translateZ(radius)`); the shared parent rotates
 * continuously, so the whole ring turns as one rigid object — real
 * perspective, not a horizontal scroll. Rotation and each card's
 * scale/opacity are written straight to the DOM every frame via refs (the
 * same technique `useMouseParallax` uses elsewhere in this codebase),
 * never through React state, so this never triggers a re-render.
 */
export default function CategoryArc({
  courseCatalog = staticCourseCatalog,
}: { courseCatalog?: CourseMenuCategory[] } = {}) {
  const cards = useMemo(() => usableCards(courseCatalog), [courseCatalog])
  const COUNT = cards.length
  const STEP = 360 / COUNT

  /* Half a step either side of dead-centre still reads as "the front card" —
     any wider and two cards would claim the highlight at once. Derived from
     STEP, which now depends on how many cards survived, so these moved in
     here with it. */
  const FRONT_WINDOW = STEP / 2
  const NEAR_WINDOW = STEP * 1.5

  const ringRef = useRef<HTMLDivElement | null>(null)
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([])

  const rotation = useRef(0)
  const target = useRef<number | null>(null)
  const paused = useRef(false)

  useEffect(() => {
    const ring = ringRef.current
    if (!ring) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isMobile = () => window.matchMedia('(max-width: 767px)').matches

    const paint = () => {
      ring.style.setProperty('--rotation', `${rotation.current}deg`)

      cardRefs.current.forEach((el, i) => {
        if (!el) return
        const effective = (i * STEP + rotation.current) % 360
        const wrapped = Math.abs(((effective + 180) % 360 + 360) % 360 - 180)

        let scale = 0.75
        let opacity = 0.45
        let z = 1
        if (wrapped <= FRONT_WINDOW) {
          scale = 1
          opacity = 1
          z = 10
        } else if (wrapped <= NEAR_WINDOW) {
          scale = 0.9
          opacity = 0.75
          z = 5
        }

        el.style.setProperty('--sc', scale.toFixed(3))
        el.style.setProperty('--op', opacity.toFixed(3))
        el.style.zIndex = String(z)
      })
    }

    if (reduced || isMobile()) {
      paint()
      return
    }

    let raf = 0
    let last = performance.now()

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now

      if (target.current !== null) {
        const diff = angleDelta(rotation.current, target.current)
        rotation.current += diff * Math.min(dt * EASE_RATE, 1)
      } else if (!paused.current) {
        rotation.current -= AUTO_SPEED * dt
      }

      paint()
      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [STEP, FRONT_WINDOW, NEAR_WINDOW])

  const focusCard = (i: number) => {
    paused.current = true
    target.current = -i * STEP
  }
  const releaseCard = () => {
    target.current = null
  }
  const releaseStage = () => {
    paused.current = false
    target.current = null
  }

  return (
    <div className="arc" onMouseLeave={releaseStage}>
      <div className="arc__ring" ref={ringRef}>
        {cards.map((cat, i) => (
          <Link
            href={`/${cat.slug}`}
            key={cat.slug}
            ref={(el) => {
              cardRefs.current[i] = el
            }}
            className={`acard acard--${cat.theme}`}
            style={{ '--angle': `${i * STEP}deg` }}
            onMouseEnter={() => focusCard(i)}
            onMouseLeave={releaseCard}
            onFocus={() => focusCard(i)}
            onBlur={releaseCard}
          >
            <span className="acard__glow" aria-hidden="true" />
            <span className="acard__num">{String(i + 1).padStart(2, '0')}</span>
            <span className="acard__icon">
              <Icon name={cat.icon} size={20} />
            </span>
            <h3 className="acard__title">{cat.title}</h3>
            <p className="acard__desc">{cat.desc}</p>
            <span className="acard__cta">Read more</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
