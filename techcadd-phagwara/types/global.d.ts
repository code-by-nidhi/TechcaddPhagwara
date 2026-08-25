import type Lenis from 'lenis'

/**
 * The design system drives a lot of its animation from inline CSS custom
 * properties (`style={{ '--i': index }}`). React's built-in `CSSProperties`
 * rejects unknown keys, so we widen it once here instead of casting at every
 * call site — this is why no component in this project needs
 * `as React.CSSProperties`.
 */
declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined
  }
}

declare global {
  interface Window {
    /** Set by `useLenis` so anchor navigation can drive the smooth-scroll instance. */
    __lenis?: Lenis
  }

  interface HTMLElement {
    /** Attached by vanilla-tilt when a node is initialised. */
    vanillaTilt?: { destroy: () => void }
  }
}

export {}
