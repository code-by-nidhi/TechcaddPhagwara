import type { ReactNode } from 'react'
import Icon, { type IconName } from './Icon'
import SplitText from './SplitText'

export interface SectionHeadingProps {
  eyebrow?: string
  eyebrowIcon?: IconName
  title: string
  /** Trailing words rendered in the brand gradient, continuing the stagger. */
  highlight?: string
  lead?: string
  align?: 'left' | 'center'
  children?: ReactNode
}

/**
 * Shared section header. Pure — renders on the server, ships no JavaScript.
 */
export default function SectionHeading({
  eyebrow,
  eyebrowIcon = 'zap',
  title,
  highlight,
  lead,
  align = 'left',
  children,
}: SectionHeadingProps) {
  const titleWords = String(title).split(' ').length

  return (
    <header className={`sec-head ${align === 'center' ? 'sec-head--center' : ''}`.trim()}>
      {eyebrow && (
        <span className="eyebrow" data-reveal="up">
          <i>
            <Icon name={eyebrowIcon} />
          </i>
          {eyebrow}
        </span>
      )}

      <h2 className="sec-head__title">
        <SplitText text={title} />
        {highlight && (
          <>
            {' '}
            <SplitText text={highlight} className="gradient-text" start={titleWords} />
          </>
        )}
      </h2>

      {lead && (
        <p className="sec-head__lead" data-reveal="up" data-reveal-delay="160">
          {lead}
        </p>
      )}

      {children}
    </header>
  )
}
