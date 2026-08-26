import Icon, { type IconName } from '@/components/ui/Icon'

interface Step {
  icon: IconName
  title: string
  text: string
}

/**
 * The four step titles were given verbatim; no body copy came with them, so
 * these one-line descriptions are authored here to match the site's voice —
 * flagged for review same as any other new copy would be.
 */
const STEPS: Step[] = [
  {
    icon: 'target',
    title: 'Career Counselling',
    text: 'A free session that maps your background to the right track before you commit.',
  },
  {
    icon: 'book',
    title: 'Classroom & Lab',
    text: 'Live instructor-led classes with hands-on lab time every single day.',
  },
  {
    icon: 'code',
    title: 'Live Projects',
    text: 'Ship real, portfolio-ready projects reviewed by working engineers.',
  },
  {
    icon: 'briefcase',
    title: 'Placement Support',
    text: "Mock interviews, resume reviews and direct drives until you're placed.",
  },
]

/**
 * Server Component — everything here is static HTML; no client JS at all.
 * The connecting line is pure CSS (`transform: scaleX` / `scaleY`, driven by
 * the existing `[data-reveal]` engine) — no GSAP.
 */
export default function HowItWorks() {
  return (
    <section className="how section" id="how-it-works">
      <div className="shell shell--wide">
        <div className="how__head">
          <span className="how__badge" data-reveal="up">
            How It Works
          </span>
          <h2 className="how__heading" data-reveal="up" data-reveal-delay="80">
            Four steps from curious to hired
          </h2>
        </div>

        <div className="how__track" data-reveal="up" data-reveal-delay="140">
          <span className="how__line how__line--h" aria-hidden="true">
            <span className="how__line-fill" />
          </span>
          <span className="how__line how__line--v" aria-hidden="true">
            <span className="how__line-fill" />
          </span>

          {STEPS.map((step, i) => (
            <article className="how__card" key={step.title} style={{ '--i': i }}>
              <span className="how__num">{String(i + 1).padStart(2, '0')}</span>
              <span className="how__icon">
                <Icon name={step.icon} />
              </span>
              <h3 className="how__title">{step.title}</h3>
              <p className="how__desc">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
