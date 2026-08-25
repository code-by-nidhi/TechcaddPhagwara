import Icon from '@/components/ui/Icon'
import Button from '@/components/ui/Button'
import SectionHeading from '@/components/ui/SectionHeading'
import TiltCard from '@/components/ui/TiltCard'
import FloatingIcons from '@/components/fx/FloatingIcons'
import { aboutPillars, aboutHighlights } from '@/data/site'

const DIRECTIONS = ['right', 'left', 'right', 'left'] as const

/** Server Component — only the tilt shells and the CTA button hydrate. */
export default function About() {
  return (
    <section className="about section" id="about">
      <FloatingIcons preset="b" />

      <div className="shell">
        <div className="about__grid">
          {/* sticky intro column */}
          <div className="about__intro">
            <SectionHeading
              eyebrow="Why Techcadd"
              eyebrowIcon="target"
              title="A training institute built"
              highlight="for the AI era"
              lead="We rebuilt every syllabus around how work actually happens now — with copilots, automation and real deadlines. You leave with a portfolio, not just a certificate."
            />

            <ul className="about__checks">
              {aboutHighlights.map((item, i) => (
                <li
                  className="about__check"
                  key={item}
                  data-reveal="left"
                  data-reveal-delay={200 + i * 80}
                >
                  <i>
                    <Icon name="check" />
                  </i>
                  {item}
                </li>
              ))}
            </ul>

            <div className="about__plate" data-reveal="up" data-reveal-delay="420">
              <div>
                <b>2009</b>
                <span>Established</span>
              </div>
              <div>
                <b>6</b>
                <span>Branches</span>
              </div>
              <div>
                <b>45+</b>
                <span>Programs</span>
              </div>
            </div>

            <div className="about__cta" data-reveal="up" data-reveal-delay="500">
              <Button href="#journey" variant="ghost" arrow>
                See how the journey works
              </Button>
            </div>
          </div>

          {/* zig-zag pillar rail */}
          <div className="about__rail">
            {aboutPillars.map((pillar, i) => (
              <TiltCard
                key={pillar.title}
                className="about__pillar glass"
                max={5}
                scale={1.01}
                reveal={DIRECTIONS[i % DIRECTIONS.length]}
                revealDelay={i * 110}
              >
                <span className="about__pillar-index">{String(i + 1).padStart(2, '0')}</span>
                <span className="icon-bubble">
                  <Icon name={pillar.icon} />
                </span>
                <div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
