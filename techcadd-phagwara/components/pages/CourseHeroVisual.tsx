import Image from 'next/image'
import Icon, { type IconName } from '@/components/ui/Icon'

/*
 * The artwork beside a course hero.
 *
 * The reference design puts a rendered illustration here, one per course.
 * There are twenty-seven courses and `public/images/` holds two logos, so
 * this draws the same idea from data the catalogue already has: the course's
 * own icon at the centre, ringed by the tools that course actually teaches.
 * It costs no assets, is correct for every course the day it is added, and
 * is a pure server component — twenty-seven static pages ship no JavaScript
 * for it (unlike the homepage's pointer-parallax `HeroVisual`).
 *
 * When real artwork does exist, set `heroImage` on the course's entry in
 * `data/courseContent.ts` and it is rendered instead, no code change.
 */

/** Fallback satellites per catalogue category, for a course whose own
    `tools` have not been written yet. */
const CATEGORY_TOOLS: Record<string, IconName[]> = {
  programming: ['code', 'terminal', 'database', 'repeat', 'layers', 'cpu', 'monitor', 'cloud'],
  'ai-data': ['brain', 'chart', 'database', 'cpu', 'code', 'infinity', 'target', 'cloud'],
  'digital-marketing': ['megaphone', 'chart', 'target', 'search', 'palette', 'mail', 'mobile', 'trending'],
  'cyber-cloud': ['shield', 'cloud', 'database', 'terminal', 'cpu', 'layers', 'monitor', 'code'],
}

const FALLBACK: IconName[] = ['code', 'database', 'cloud', 'cpu', 'chart', 'layers', 'terminal', 'shield']

export interface CourseHeroVisualProps {
  /** The course's own icon — sits in the centre disc. */
  icon: IconName
  /** Catalogue category key, used to pick satellites when `tools` is empty. */
  categoryKey: string
  /** The course's real toolchain, when its copy has been written. */
  tools?: { name: string; icon: IconName }[]
  /** Real artwork, once it exists — replaces the generated mesh entirely. */
  image?: { src: string; alt: string }
}

export default function CourseHeroVisual({
  icon,
  categoryKey,
  tools,
  image,
}: CourseHeroVisualProps) {
  if (image) {
    return (
      <div className="chero__art">
        <Image
          src={image.src}
          alt={image.alt}
          width={720}
          height={620}
          priority
          className="chero__art-img"
        />
      </div>
    )
  }

  const icons: IconName[] = (
    tools?.length ? tools.map((t) => t.icon) : CATEGORY_TOOLS[categoryKey] ?? FALLBACK
  ).slice(0, 8)

  return (
    <div className="chero__art" aria-hidden="true">
      <div className="chero__orbit">
        <span className="chero__ring" />
        <span className="chero__ring chero__ring--2" />

        <span className="chero__core">
          <Icon name={icon} size={40} />
        </span>

        {icons.map((name, i) => {
          /* Evenly spaced around the ring; the inner/outer alternation keeps
             eight tiles from reading as a single flat circle. */
          const angle = (360 / icons.length) * i
          const radius = i % 2 === 0 ? 168 : 128
          return (
            <span
              key={`${name}-${i}`}
              className="chero__sat"
              style={{
                transform: `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`,
                animationDelay: `${i * 0.45}s`,
              }}
            >
              <Icon name={name} size={20} />
            </span>
          )
        })}
      </div>
    </div>
  )
}
