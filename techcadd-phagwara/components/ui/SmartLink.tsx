'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from 'react'
import { isHashLink, scrollToSection } from '@/lib/scroll'

export interface SmartLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: ReactNode
}

/**
 * One link component for the whole site.
 *
 * This project is a single-page experience, so most "navigation" is really
 * in-page scrolling. Routing a `#anchor` through next/link would produce a
 * hard jump and skip the Lenis easing, so hashes keep a real <a> and are
 * intercepted here. Anything that is an actual route (`/`, `/privacy`, …)
 * goes through next/link and gets client-side navigation and prefetching.
 *
 * External URLs, `mailto:` and `tel:` pass straight through untouched.
 */
export default function SmartLink({ href, children, onClick, ...rest }: SmartLinkProps) {
  const isExternal = /^(https?:|mailto:|tel:)/.test(href)
  const pathname = usePathname()
  const router = useRouter()

  if (isHashLink(href)) {
    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault()
      /* A route with no homepage sections of its own (a course's `/[slug]`
         page) hands the hash back to `/` instead of scrolling nowhere. */
      if (pathname === '/') scrollToSection(href)
      else router.push(`/${href}`)
      onClick?.(event)
    }

    return (
      <a href={href} onClick={handleClick} {...rest}>
        {children}
      </a>
    )
  }

  if (isExternal) {
    return (
      <a href={href} onClick={onClick} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} onClick={onClick} {...rest}>
      {children}
    </Link>
  )
}
