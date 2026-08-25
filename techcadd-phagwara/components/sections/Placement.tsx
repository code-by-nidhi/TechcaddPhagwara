import Icon from '@/components/ui/Icon'
import Counter from '@/components/ui/Counter'
import SectionHeading from '@/components/ui/SectionHeading'
import TiltCard from '@/components/ui/TiltCard'
import SuccessRing from './SuccessRing'
import { placementStats, salaryCards, companies } from '@/data/site'

const BAR_WIDTHS = ['86%', '74%', '64%', '58%']

/** Server Component — the ring, counters and tilt shells are the only client bits. */
export default function Placement() {
  return (
    <section className="placement section section--tint" id="placement">
      <div className="shell">
        <div className="placement__top">
          <SuccessRing />

          <div>
            <SectionHeading
              eyebrow="Placement"
              eyebrowIcon="briefcase"
              title="A placement cell that"
              highlight="works until you sign"
              lead="Dedicated placement officers, weekly drives and a partner network built over 15 years. Support does not end when the course does — it ends when you have an offer."
            />

            <div className="placement__stats">
              {placementStats.map((stat, i) => (
                <div className="pstat" key={stat.label} data-reveal="up" data-reveal-delay={i * 90}>
                  <b>
                    <Counter value={stat.value} suffix={stat.suffix} decimals={stat.decimals ?? 0} />
                  </b>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ------------------------------------------------ salary cards */}
        <div className="salaries">
          {salaryCards.map((card, index) => (
            <TiltCard
              key={card.role}
              className="salary glass"
              max={9}
              scale={1.02}
              reveal="flip"
              revealDelay={index * 100}
            >
              <h3 className="salary__role">{card.role}</h3>
              <span className="salary__range">{card.range}</span>

              <div className="salary__meta">
                <span className="salary__growth">
                  <Icon name="trending" size={14} />
                  {card.growth} demand
                </span>
                <span className="salary__demand">
                  Hiring: <b>{card.demand}</b>
                </span>
              </div>

              <span className="salary__bar">
                <i style={{ '--w': BAR_WIDTHS[index % BAR_WIDTHS.length] }} />
              </span>
            </TiltCard>
          ))}
        </div>

        {/* --------------------------------------------- hiring partners */}
        <div className="partners">
          <h3 className="partners__head" data-reveal="up">
            420+ hiring partners
          </h3>

          <div className="partners__rail" aria-hidden="true">
            <div className="partners__track">
              {[...companies, ...companies].map((name, i) => (
                <span className="partner" key={`a-${name}-${i}`}>
                  {name}
                </span>
              ))}
            </div>
          </div>

          <div className="partners__rail" aria-hidden="true">
            <div className="partners__track partners__track--rev">
              {[...companies.slice().reverse(), ...companies.slice().reverse()].map((name, i) => (
                <span className="partner" key={`b-${name}-${i}`}>
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
