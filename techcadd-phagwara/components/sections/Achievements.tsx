import SectionHeading from '@/components/ui/SectionHeading'
import FloatingIcons from '@/components/fx/FloatingIcons'
import { achievements } from '@/data/site'

/** Fully static — Server Component, zero client JavaScript. */
export default function Achievements() {
  return (
    <section className="achievements section" id="achievements">
      <FloatingIcons preset="a" />

      <div className="shell">
        <SectionHeading
          eyebrow="Achievements"
          eyebrowIcon="award"
          title="Recognition that"
          highlight="followed the results"
          lead="Awards matter less than outcomes — but they are a useful check that the outcomes are real."
        />

        <div className="timeline">
          {achievements.map((item, i) => (
            <article
              className="tl-item glass"
              key={item.year}
              data-reveal="left"
              data-reveal-delay={i * 120}
            >
              <span className="tl-year">{item.year}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
