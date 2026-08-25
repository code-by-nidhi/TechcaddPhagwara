import Icon from '@/components/ui/Icon'
import SectionHeading from '@/components/ui/SectionHeading'
import FloatingIcons from '@/components/fx/FloatingIcons'
import { benefits } from '@/data/site'

/** Fully static — Server Component, zero client JavaScript. */
export default function Benefits() {
  return (
    <section className="benefits section section--soft" id="benefits">
      <FloatingIcons preset="c" />

      <div className="shell">
        <SectionHeading
          align="center"
          eyebrow="Student Benefits"
          eyebrowIcon="gift"
          title="Everything included."
          highlight="Nothing sold separately."
          lead="One fee covers the classes, the labs, the mentorship, the projects and the entire placement process — from resume to offer letter."
        />

        <div className="benefits__grid">
          {benefits.map((benefit, i) => (
            <article
              className="benefit"
              key={benefit.title}
              data-reveal={i % 2 === 0 ? 'up' : 'blur'}
              data-reveal-delay={(i % 4) * 90}
            >
              <span className="benefit__icon">
                <Icon name={benefit.icon} />
              </span>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
