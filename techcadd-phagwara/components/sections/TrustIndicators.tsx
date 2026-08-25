import Icon, { type IconName } from '@/components/ui/Icon'

interface TrustCard {
  icon: IconName
  title: string
  subtitle: string
}

/**
 * The registry (components/ui/Icon.tsx) has no dedicated graduation-cap
 * glyph, so "Industry Mentors" uses `users` instead — the closest existing
 * icon to "mentor". The other two match the reference exactly (`code` for
 * the project icon, `layers` for placement).
 */
const TRUST_CARDS: TrustCard[] = [
  { icon: 'users', title: 'Industry Mentors', subtitle: 'Taught by working engineers' },
  { icon: 'code', title: 'Hands-on Projects', subtitle: 'Live projects & real client work' },
  { icon: 'layers', title: 'Best Placements', subtitle: '500+ active hiring partners' },
]

/**
 * Server Component — sits directly below Hero and slightly overlaps its
 * bottom edge (negative margin), so like Hero itself this is above-the-fold
 * on most screens. That's why the entrance animation is a plain CSS
 * `@keyframes` on each card rather than the site's usual `[data-reveal]` +
 * IntersectionObserver engine — that engine holds content at `opacity: 0`
 * until React hydrates and the observer fires, which is exactly the
 * "text/content appears late" problem Hero itself was fixed for earlier.
 * A CSS animation starts the moment the stylesheet paints, no JS required.
 */
export default function TrustIndicators() {
  return (
    <section className="trust" aria-label="Why students choose Techcadd">
      <div className="shell shell--wide trust__grid">
        {TRUST_CARDS.map((card, i) => (
          <div className="trust__card" key={card.title} style={{ '--i': i }}>
            <span className="trust__icon">
              <Icon name={card.icon} size={26} />
            </span>
            <div>
              <h3 className="trust__title">{card.title}</h3>
              <p className="trust__subtitle">{card.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
