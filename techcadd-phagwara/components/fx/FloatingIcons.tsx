import Icon, { type IconName } from '@/components/ui/Icon'

interface FloatItem {
  name: IconName
  top: string
  left?: string
  right?: string
  dur: string
  delay: string
}

const PRESETS: Record<'a' | 'b' | 'c', FloatItem[]> = {
  a: [
    { name: 'code', top: '12%', left: '5%', dur: '14s', delay: '0s' },
    { name: 'brain', top: '68%', left: '3%', dur: '17s', delay: '1.4s' },
    { name: 'chart', top: '22%', right: '6%', dur: '15s', delay: '0.7s' },
    { name: 'cpu', top: '78%', right: '8%', dur: '19s', delay: '2.1s' },
  ],
  b: [
    { name: 'palette', top: '16%', right: '4%', dur: '16s', delay: '0.4s' },
    { name: 'cloud', top: '72%', left: '6%', dur: '18s', delay: '1.8s' },
    { name: 'terminal', top: '40%', left: '2%', dur: '13s', delay: '0.9s' },
  ],
  c: [
    { name: 'rocket', top: '10%', left: '8%', dur: '15s', delay: '0.2s' },
    { name: 'award', top: '62%', right: '5%', dur: '17s', delay: '1.1s' },
    { name: 'database', top: '30%', right: '3%', dur: '20s', delay: '2.4s' },
    { name: 'zap', top: '84%', left: '12%', dur: '14s', delay: '1.6s' },
  ],
}

export interface FloatingIconsProps {
  preset?: keyof typeof PRESETS
}

/**
 * Decorative glass icons that drift inside a section.
 * Purely ornamental, so the container is aria-hidden. Static — server rendered.
 */
export default function FloatingIcons({ preset = 'a' }: FloatingIconsProps) {
  const items = PRESETS[preset] ?? PRESETS.a

  return (
    <div className="float-icons" aria-hidden="true">
      {items.map((item, i) => (
        <span
          key={`${item.name}-${i}`}
          className="float-icons__item"
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            '--dur': item.dur,
            '--delay': item.delay,
          }}
        >
          <Icon name={item.name} />
        </span>
      ))}
    </div>
  )
}
