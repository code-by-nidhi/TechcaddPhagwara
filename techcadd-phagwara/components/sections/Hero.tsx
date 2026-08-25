import Icon from '@/components/ui/Icon'
import Button from '@/components/ui/Button'
import Counter from '@/components/ui/Counter'
import HeroVisual from './HeroVisual'
import { heroStats, companies } from '@/data/site'

/**
 * Server Component — the copy, headings and CTAs are all static HTML in the
 * initial response, which is what the crawler and the LCP measurement see.
 * Only the orbit artwork and the counters hydrate.
 */
export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="shell shell--wide">
        <div className="hero__grid">
          {/* --------------------------------------------------------- copy */}
          <div className="hero__copy">
            <span className="eyebrow hero__badge" data-reveal="up">
              <i>
                <Icon name="zap" />
              </i>
              Admissions open · Batch starting soon
            </span>

            <h1 className="hero__title">
              <span className="line" data-reveal="up" data-reveal-delay="80">
                Learn the skills
              </span>
              <span className="line" data-reveal="up" data-reveal-delay="160">
                that <span className="gradient-text hero__swash">AI can’t replace</span>
              </span>
              <span className="line" data-reveal="up" data-reveal-delay="240">
                — and get placed.
              </span>
            </h1>

            <p className="hero__lead" data-reveal="up" data-reveal-delay="320">
              Phagwara’s AI-first training institute. Live instructor-led classes,{' '}
              <b>real client projects</b>, GPU-backed AI labs and a placement cell that has moved{' '}
              <b>12,400+ students</b> into tech careers.
            </p>

            <div className="hero__cta" data-reveal="up" data-reveal-delay="400">
              <Button href="#courses" size="lg" arrow>
                Explore Programs
              </Button>
              <Button href="#contact" variant="ghost" size="lg" icon="play">
                Book a Free Demo Class
              </Button>
            </div>

            <div className="hero__proof" data-reveal="up" data-reveal-delay="480">
              <div className="hero__rating">
                <div className="hero__avatars" aria-hidden="true">
                  <span>AS</span>
                  <span>MK</span>
                  <span>RB</span>
                  <span>+</span>
                </div>
                <div>
                  <div className="hero__stars" role="img" aria-label="Rated 4.9 out of 5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon key={i} name="star" style={{ fill: 'currentColor' }} />
                    ))}
                  </div>
                  <p className="hero__rating-text">
                    <b>4.9 / 5</b>
                    1,850+ Google reviews
                  </p>
                </div>
              </div>

              <div className="hero__stats">
                {heroStats.map((stat) => (
                  <div className="hero__stat" key={stat.label}>
                    <b>
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </b>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------- visual */}
          <HeroVisual />
        </div>

        {/* ------------------------------------------------------- marquee */}
        <div className="hero__marquee" data-reveal="up" data-reveal-delay="120" aria-hidden="true">
          <div className="hero__marquee-track">
            {[...companies, ...companies].map((name, i) => (
              <span className="hero__marquee-item" key={`${name}-${i}`}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
