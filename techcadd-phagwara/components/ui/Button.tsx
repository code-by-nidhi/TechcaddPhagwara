'use client'

import { useCallback, useState, type MouseEvent, type ReactNode, type RefObject } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import Icon, { type IconName } from './Icon'
import { useMagnetic } from '@/hooks/useMagnetic'
import { isHashLink, scrollToSection } from '@/lib/scroll'

type Variant = 'primary' | 'ghost' | 'soft'
type Size = 'sm' | 'lg'

export interface ButtonProps {
  variant?: Variant
  size?: Size
  href?: string
  arrow?: boolean
  icon?: IconName
  block?: boolean
  loading?: boolean
  className?: string
  children?: ReactNode
  type?: 'button' | 'submit' | 'reset'
  target?: string
  rel?: string
  'aria-label'?: string
  onClick?: (event: MouseEvent<HTMLElement>) => void
}

interface Ripple {
  id: string
  x: number
  y: number
  size: number
}

/**
 * The one button in the system: gradient fill, magnetic hover, click ripple,
 * animated arrow and an optional async loading state.
 *
 * Navigation behaviour is built in, which is why no section needs its own
 * click handler any more:
 *   - `href="#anchor"` → smooth-scrolls via Lenis (preventDefault handled here)
 *   - `href="/route"`  → renders next/link for client-side navigation
 *   - no href          → a real <button>
 */
export default function Button({
  variant = 'primary',
  size,
  href,
  arrow = false,
  icon,
  block = false,
  loading = false,
  className = '',
  children,
  type = 'button',
  onClick,
  ...rest
}: ButtonProps) {
  const magnetRef = useMagnetic<HTMLElement>({ strength: 0.28, scale: 1.03 })
  const [ripples, setRipples] = useState<Ripple[]>([])
  const pathname = usePathname()
  const router = useRouter()

  const spawnRipple = useCallback((event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const ripple: Ripple = {
      id: `${event.clientX}-${event.clientY}-${rect.top}-${Math.random()}`,
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      size,
    }
    setRipples((prev) => [...prev, ripple])
    window.setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== ripple.id)), 700)
  }, [])

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    spawnRipple(event)

    /* Same-page anchors are scrolled, never hard-navigated — but only when
       there is a page to scroll: a course's own `/[slug]` route has no
       `#contact`-style sections of its own, so the hash goes back home. */
    if (isHashLink(href)) {
      event.preventDefault()
      if (pathname === '/') scrollToSection(href)
      else router.push(`/${href}`)
    }

    onClick?.(event)
  }

  const classes = [
    'btn',
    `btn--${variant}`,
    size ? `btn--${size}` : '',
    block ? 'btn--block' : '',
    loading ? 'is-loading' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const inner = (
    <>
      <span className="btn__label">
        {icon && <Icon name={icon} />}
        {children}
        {arrow && (
          <span className="btn__arrow">
            <Icon name="arrow" />
          </span>
        )}
      </span>

      {ripples.map((r) => (
        <span
          key={r.id}
          className="btn__ripple"
          style={{ left: r.x, top: r.y, width: r.size, height: r.size }}
        />
      ))}

      {loading && <span className="btn__spinner" />}
    </>
  )

  /* Hash links and external URLs stay plain anchors; real routes use next/link. */
  if (href && (isHashLink(href) || /^(https?:|mailto:|tel:)/.test(href))) {
    return (
      <a
        ref={magnetRef as RefObject<HTMLAnchorElement>}
        href={href}
        className={classes}
        onClick={handleClick}
        aria-busy={loading || undefined}
        data-cursor="hot"
        {...rest}
      >
        {inner}
      </a>
    )
  }

  if (href) {
    return (
      <Link
        ref={magnetRef as RefObject<HTMLAnchorElement>}
        href={href}
        className={classes}
        onClick={handleClick}
        aria-busy={loading || undefined}
        data-cursor="hot"
        {...rest}
      >
        {inner}
      </Link>
    )
  }

  return (
    <button
      ref={magnetRef as RefObject<HTMLButtonElement>}
      type={type}
      className={classes}
      onClick={handleClick}
      aria-busy={loading || undefined}
      disabled={loading || undefined}
      data-cursor="hot"
      {...rest}
    >
      {inner}
    </button>
  )
}
