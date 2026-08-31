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
  /**
   * False for a heading that's already in the initial viewport — a page
   * hero (course/internship/after-12th detail pages) rather than a section
   * the visitor scrolls to. Skips the scroll-triggered fade/word-mask so the
   * heading paints with the rest of the initial HTML. Every other section
   * on the homepage sits below the fold, so their default (true) is correct
   * and unchanged.
   */
  reveal?: boolean
  /**
   * The heading level this renders at. Sections are `h2` under the page's
   * own `h1`, which is the default — but a detail page's hero heading IS
   * the page title, and a course page that ranks for "Python Course in
   * Phagwara" should not ship without an `h1`.
   */
  as?: 'h1' | 'h2'
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
  reveal = true,
  as: Title = 'h2',
}: SectionHeadingProps) {
  const titleWords = String(title).split(' ').length

  return (
    <header className={`sec-head ${align === 'center' ? 'sec-head--center' : ''}`.trim()}>
      {eyebrow && (
        <span className="eyebrow" data-reveal={reveal ? 'up' : undefined}>
          <i>
            <Icon name={eyebrowIcon} />
          </i>
          {eyebrow}
        </span>
      )}

      <Title className="sec-head__title">
        <SplitText text={title} reveal={reveal} />
        {highlight && (
          <>
            {' '}
            <SplitText text={highlight} className="gradient-text" start={titleWords} reveal={reveal} />
          </>
        )}
      </Title>

      {lead && (
        <p className="sec-head__lead" data-reveal={reveal ? 'up' : undefined} data-reveal-delay={reveal ? '160' : undefined}>
          {lead}
        </p>
      )}

      {children}
    </header>
  )
}
