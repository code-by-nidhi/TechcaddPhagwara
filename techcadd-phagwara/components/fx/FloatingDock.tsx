'use client'

import { useEffect, useState } from 'react'
import Icon from '@/components/ui/Icon'
import { brand } from '@/data/site'
import { scrollToTop } from '@/lib/scroll'

/** Persistent WhatsApp / call / back-to-top actions. */
export default function FloatingDock() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="dock">
      <a
        className="dock__btn dock__btn--wa"
        href={`https://wa.me/${brand.whatsapp}?text=Hi%20Techcadd%20Phagwara%2C%20I%20want%20course%20details`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <Icon name="whatsapp" />
      </a>

      <a
        className="dock__btn dock__btn--call"
        href={brand.phoneHref}
        aria-label="Call the institute"
      >
        <Icon name="phone" />
      </a>

      <button
        type="button"
        className={`dock__btn dock__btn--top ${showTop ? 'is-on' : ''}`.trim()}
        onClick={scrollToTop}
        aria-label="Back to top"
        aria-hidden={!showTop}
        tabIndex={showTop ? 0 : -1}
      >
        <Icon name="chevronDown" style={{ transform: 'rotate(180deg)' }} />
      </button>
    </div>
  )
}
