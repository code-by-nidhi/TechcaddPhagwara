'use client'

import Icon, { type IconName } from '@/components/ui/Icon'
import { useMouseParallax } from '@/hooks/useMouseParallax'

/** Satellites riding the orbit rings — angle in degrees, radius in %. */
const SATELLITES: { icon: IconName; angle: number; radius: number }[] = [
  { icon: 'code', angle: 0, radius: 46 },
  { icon: 'chart', angle: 72, radius: 46 },
  { icon: 'palette', angle: 144, radius: 46 },
  { icon: 'cloud', angle: 216, radius: 46 },
  { icon: 'megaphone', angle: 288, radius: 46 },
  { icon: 'terminal', angle: 40, radius: 30 },
  { icon: 'shield', angle: 160, radius: 30 },
  { icon: 'mobile', angle: 275, radius: 30 },
]

/**
 * The orbiting hero artwork. Client-side only because it tracks the pointer
 * to publish `--px` / `--py` for the CSS parallax.
 */
export default function HeroVisual() {
  const visualRef = useMouseParallax<HTMLDivElement>({ damp: 0.08 })

  return (
    <div className="hero__visual" ref={visualRef} data-reveal="scale" data-reveal-delay="220">
      <div className="hero__orbits">
        <span className="hero__ring hero__ring--spin" />
        <span className="hero__ring hero__ring--2 hero__ring--spin-rev" />
        <span className="hero__ring hero__ring--3 hero__ring--spin" />

        {SATELLITES.map((sat, i) => (
          <span className="hero__sat" key={`${sat.icon}-${i}`}>
            <i
              style={{
                transform: `rotate(${sat.angle}deg) translate(${
                  sat.radius * 4.4
                }px) rotate(-${sat.angle}deg)`,
                animation: `float-y ${6 + (i % 4)}s var(--ease-soft) ${i * 0.4}s infinite`,
              }}
            >
              <Icon name={sat.icon} />
            </i>
          </span>
        ))}
      </div>

      <div className="hero__core">
        <span className="hero__core-label">AI</span>
        <span className="hero__core-sub">Powered Learning</span>
      </div>

      {/* floating glass cards */}
      <div className="hero__card hero__card--a">
        <i>
          <Icon name="brain" />
        </i>
        <div>
          <b>AI &amp; ML Track</b>
          <span>6 months · Live + Lab</span>
        </div>
      </div>

      <div className="hero__card hero__card--b">
        <i>
          <Icon name="trending" />
        </i>
        <div>
          <b>96% Placed</b>
          <span>Batch of 2025</span>
        </div>
      </div>

      <div className="hero__card hero__card--c">
        <i>
          <Icon name="award" />
        </i>
        <div>
          <b>Govt. Certified</b>
          <span>ISO 9001:2015</span>
        </div>
      </div>

      <div className="hero__card hero__card--pill">
        <span className="hero__pulse" />
        <div>
          <b>142 seats live</b>
        </div>
      </div>
    </div>
  )
}
