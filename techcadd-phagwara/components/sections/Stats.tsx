import Icon from '@/components/ui/Icon'
import Counter from '@/components/ui/Counter'
import SplitText from '@/components/ui/SplitText'
import { statistics } from '@/data/site'

/** Server Component — only the six counters hydrate. */
export default function Stats() {
  return (
    <section className="stats" aria-label="Institute statistics">
      <div className="shell shell--wide">
        <div className="stats__plate" data-reveal="scale">
          <div className="stats__mesh" aria-hidden="true" />

          <div className="stats__head">
            <h2>
              <SplitText text="Numbers earned over 15 years" />
            </h2>
            <p data-reveal="up" data-reveal-delay="200">
              Every figure below is tracked per batch and audited annually — not marketing rounding.
            </p>
          </div>

          <div className="stats__grid">
            {statistics.map((stat, i) => (
              <div className="stats__cell" key={stat.label} data-reveal="up" data-reveal-delay={i * 90}>
                <span className="stats__icon">
                  <Icon name={stat.icon ?? 'zap'} />
                </span>
                <Counter
                  className="stats__value"
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals ?? 0}
                />
                <span className="stats__label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
