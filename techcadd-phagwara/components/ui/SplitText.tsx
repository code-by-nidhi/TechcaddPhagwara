import type { ElementType } from 'react'

export interface SplitTextProps {
  text: string
  as?: ElementType
  /** Offsets the stagger index so two SplitTexts in one heading read as one animation. */
  start?: number
  className?: string
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
}: SplitTextProps) {
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
