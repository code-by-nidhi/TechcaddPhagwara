import type { ElementType } from 'react'

export interface SplitTextProps {
  text: string
  as?: ElementType
  /** Offsets the stagger index so two SplitTexts in one heading read as one animation. */
  start?: number
  className?: string
  /**
   * Set false for a heading that's visible without scrolling (a page hero).
   * The `.split-text .word > span` rule masks every word below its box
   * (`translateY(105%)`) *by class*, independent of `data-reveal` — it only
   * lifts once the reveal observer adds `.is-in`, which it only ever does
   * for `[data-reveal]` elements. So dropping just the attribute would leave
   * the mask permanently on; skipping the split-word markup entirely is what
   * actually renders the heading immediately. Default true keeps the
   * word-by-word scroll-in animation for headings the visitor scrolls to.
   */
  reveal?: boolean
}

/**
 * Splits a string into per-word masks so each word slides up in sequence.
 * `.is-in` is applied by the global reveal observer.
 *
 * Pure and stateless — renders on the server, ships no JavaScript.
 */
export default function SplitText({
  text,
  as: Tag = 'span',
  start = 0,
  className = '',
  reveal = true,
}: SplitTextProps) {
  if (!reveal) return <Tag className={className}>{text}</Tag>

  const words = String(text).split(' ')

  return (
    <Tag className={`split-text ${className}`.trim()} data-reveal="split">
      {words.map((word, i) => (
        /* `display: contents` so this wrapper (needed only for the React
           key) takes no part in layout — the space text node below sits in
           normal inline flow instead of as the trailing child of `.word`'s
           `overflow: hidden` box, where it was collapsing to zero width and
           running every multi-word heading on the site together. */
        <span key={`${word}-${i}`} style={{ display: 'contents' }}>
          <span className="word">
            <span style={{ '--i': start + i }}>{word}</span>
          </span>
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </Tag>
  )
}
