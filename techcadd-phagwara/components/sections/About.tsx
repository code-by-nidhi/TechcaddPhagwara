import Button from '@/components/ui/Button'
import { aboutStats, brand } from '@/data/site'

/**
 * Server Component — badge, heading, paragraph, stats and CTAs are all
 * static HTML; only the two `Button`s hydrate. The image collage is CSS-only
 * (see the `.about__shot-art` note below), so nothing else in this section
 * needs the client.
 */
export default function About() {
  return (
    <section className="about section" id="about">
      <div className="shell">
        <div className="about__grid">
          {/* --------------------------------------------------- content */}
          <div className="about__content">
            <span className="about__badge">About Us</span>

            <h2 className="about__heading" data-reveal="up">
              Two decades of turning students into engineers
            </h2>

            <p className="about__lead" data-reveal="up" data-reveal-delay="80">
              We rebuilt every syllabus around how work actually happens now — with copilots,
              automation and real deadlines. You leave with a portfolio, not just a certificate.
            </p>

            <div className="about__stats" data-reveal="up" data-reveal-delay="160">
              {aboutStats.map((stat) => (
                <div className="about__stat" key={stat.value}>
                  <b>{stat.value}</b>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="about__cta" data-reveal="up" data-reveal-delay="240">
              <Button href="#courses" arrow>
                Find your course
              </Button>

              <a className="about__counsellor" href={brand.phoneHref}>
                <span className="about__counsellor-label">Talk to a counsellor</span>
                <span className="about__counsellor-phone">{brand.phone}</span>
              </a>
            </div>
          </div>

          {/* ----------------------------------------------------- media */}
          {/*
            No campus photography exists in `public/images` yet (only the two
            logo files) — these three tiles reuse the same generated-gradient
            stand-in Gallery already relies on for the same reason (see
            `.shot__art` in showcase.css / `data.site.gallery`). Drop real
            photos into `public/images` and swap these `<span>`s for
            `next/image` — same treatment Gallery gives `shot.src` — whenever
            they're available.
          */}
          <div className="about__media" data-reveal="right" data-reveal-delay="120">
            <figure className="about__shot about__shot--main">
              <span className="about__shot-art" style={{ '--hue': 218 }} aria-hidden="true" />
              <span className="about__shot-tag">Team Techcadd</span>
            </figure>

            <div className="about__media-row">
              <figure className="about__shot">
                <span className="about__shot-art" style={{ '--hue': 252 }} aria-hidden="true" />
              </figure>
              <figure className="about__shot">
                <span className="about__shot-art" style={{ '--hue': 200 }} aria-hidden="true" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
