import Icon from '@/components/ui/Icon'
import Button from '@/components/ui/Button'
import SectionHeading from '@/components/ui/SectionHeading'
import { learningModes } from '@/data/site'

/**
 * Sticky-stack section: each mode card decks up over the previous one.
 * Fully static — Server Component.
 */
export default function LearningModes() {
  return (
    <section className="modes section" id="modes">
      <div className="shell">
        <div className="modes__layout">
          <div className="modes__intro">
            <SectionHeading
              eyebrow="Learning Modes"
              eyebrowIcon="repeat"
              title="Four ways to learn,"
              highlight="one standard of quality"
              lead="Classroom, live online, hybrid or corporate — same mentors, same projects, same placement support. Choose the format that fits your week, not the other way round."
            />

            <div className="modes__cta" data-reveal="up" data-reveal-delay="260">
              <Button href="#contact" variant="ghost" arrow>
                Check batch timings
              </Button>
            </div>
          </div>

          <div className="modes__stack">
            {learningModes.map((mode, i) => (
              <article className="mode glass" key={mode.title} style={{ '--i': i }} data-reveal="up">
                <span className="mode__num">{String(i + 1).padStart(2, '0')}</span>

                <span className="icon-bubble">
                  <Icon name={mode.icon} />
                </span>

                <div className="mode__body">
                  <h3>{mode.title}</h3>
                  <p>{mode.text}</p>

                  <div className="mode__points">
                    {mode.points.map((point) => (
                      <span className="mode__tag" key={point}>
                        <Icon name="check" size={13} />
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
