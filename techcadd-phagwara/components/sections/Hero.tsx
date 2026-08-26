import Icon, { type IconName } from '@/components/ui/Icon'
import Button from '@/components/ui/Button'
import HeroVisual from './HeroVisual'

interface FeatureCard {
  icon: IconName
  title: string
  subtitle: string
}

/**
 * The registry (components/ui/Icon.tsx) has no dedicated graduation-cap
 * glyph, so "Industry Mentors" uses `users` instead — the closest existing
 * icon to "mentor".
 */
const FEATURE_CARDS: FeatureCard[] = [
  { icon: 'users', title: 'Industry Mentors', subtitle: 'Taught by working engineers' },
  { icon: 'code', title: 'Hands-on Projects', subtitle: 'Live projects & real client work' },
  { icon: 'layers', title: 'Best Placements', subtitle: '500+ active hiring partners' },
]

/**
 * Server Component — the copy, headings and CTAs are all static HTML in the
 * initial response, which is what the crawler and the LCP measurement see.
 * Only the orbit artwork and the counters hydrate.
 *
 * None of this content carries `data-reveal`: that attribute is styled
 * `opacity: 0` until the client-side IntersectionObserver in `useReveal()`
 * flips on `.is-in`, which means anything wearing it stays invisible until
 * JS hydrates. Fine for sections the visitor has to scroll to reach, but the
 * hero is what LCP/FCP measure and what every visitor sees first — it must
 * paint with the initial HTML, not wait on a scroll-reveal engine.
 */
export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="shell shell--wide">
        <div className="hero__grid">
          {/* --------------------------------------------------------- copy */}
          <div className="hero__copy">
            <span className="eyebrow hero__badge">
              <i>
                <Icon name="zap" />
              </i>
              Admissions open · Batch starting soon
            </span>

            <h1 className="hero__title">
              <span className="line">Learn the skills</span>
              <span className="line">
                that <span className="gradient-text hero__swash">AI can’t replace</span>
              </span>
              <span className="line">— and get placed.</span>
            </h1>

            <p className="hero__lead">
              Phagwara’s AI-first training institute. Live instructor-led classes,{' '}
              <b>real client projects</b>, GPU-backed AI labs and a placement cell that has moved{' '}
              <b>12,400+ students</b> into tech careers.
            </p>

            <div className="hero__cta">
              <Button href="#courses" size="lg" arrow>
                Explore Programs
              </Button>
              <Button href="#contact" variant="ghost" size="lg" icon="play">
                Book a Free Demo Class
              </Button>
            </div>
          </div>

          {/* ------------------------------------------------------- visual */}
          <HeroVisual />
        </div>

        {/* ---------------------------------------------------- feature row */}
        <div className="hero__features">
          {FEATURE_CARDS.map((card) => (
            <div className="hero__feature" key={card.title}>
              <span className="hero__feature-icon">
                <Icon name={card.icon} size={26} />
              </span>
              <div>
                <b className="hero__feature-title">{card.title}</b>
                <span className="hero__feature-subtitle">{card.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
