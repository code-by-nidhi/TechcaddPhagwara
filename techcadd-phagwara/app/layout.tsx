import type { ReactNode } from 'react'
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Manrope } from 'next/font/google'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SiteEffects from '@/components/fx/SiteEffects'
import FloatingDock from '@/components/fx/FloatingDock'
import { makeNavLinks, type NavDropdownItem } from '@/data/site'
import {
  getAfter12Catalog,
  getBlogs,
  getBrand,
  getCourseCatalog,
  getEvents,
  getInternshipCatalog,
  getNavPages,
  getSocials,
} from '@/lib/cms/content'
import {
  OG_IMAGE_URL,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
  THEME_COLOR,
} from '@/lib/site-config'

/* --------------------------------------------------------------------------
   Global stylesheets.

   Order is load-bearing: base.css declares the design tokens every other file
   consumes, ui.css defines the shared primitives, then the section files.
   In the Vite build each component imported its own stylesheet, which left the
   final cascade order up to the bundler. Importing them here, in one place,
   makes it deterministic — and is the reason the section components no longer
   carry `import '@/styles/*.css'` lines.

   swiper's stylesheets sit *before* testimonials.css so our overrides win.
   -------------------------------------------------------------------------- */
import '@/styles/base.css'
import '@/styles/ui.css'
import 'swiper/css'
import 'swiper/css/pagination'
import '@/styles/navbar.css'
import '@/styles/hero.css'
import '@/styles/about.css'
import '@/styles/how.css'
import '@/styles/categories.css'
import '@/styles/courseCarousel.css'
import '@/styles/programs.css'
import '@/styles/journey.css'
import '@/styles/placement.css'
import '@/styles/showcase.css'
import '@/styles/testimonials.css'
import '@/styles/faq.css'
import '@/styles/contact.css'
import '@/styles/footer.css'
import '@/styles/coursePage.css'
import '@/styles/courseCms.css'
import '@/styles/editorial.css'
import '@/styles/bookDemoModal.css'
/* Last, so its `:has(.preview-root)` overrides land on top of everything the
   preview frame is trying to correct. Inert on every other route. */
import '@/styles/preview.css'

/* --------------------------------------------------------------------------
   Fonts. Self-hosted and preloaded by next/font, which removes the two
   render-blocking requests to fonts.googleapis.com that the old index.html
   made, and eliminates the layout shift when the webfont swapped in.
   The CSS variables are consumed by --font-display / --font-body in base.css.
   -------------------------------------------------------------------------- */
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
  fallback: ['system-ui', 'Segoe UI', 'sans-serif'],
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
  fallback: ['system-ui', 'Segoe UI', 'sans-serif'],
})

/* ------------------------------------------------------------------ SEO -- */

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [{ name: 'Techcadd Computer Education' }],
  creator: 'Techcadd Computer Education',
  publisher: 'Techcadd Computer Education',
  applicationName: SITE_NAME,
  category: 'education',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    siteName: SITE_NAME,
    title: 'Techcadd Phagwara | AI & Tech Training Institute',
    description:
      'Learn AI, Data Science and Full Stack Development with live labs, real projects and guaranteed placement assistance.',
    /* og:image comes from app/opengraph-image.tsx via the file convention. */
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Techcadd Phagwara | AI & Tech Training Institute',
    description:
      'Learn AI, Data Science and Full Stack Development with live labs, real projects and guaranteed placement assistance.',
    /* twitter:image falls back to the generated opengraph-image. */
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: THEME_COLOR,
}

/* ------------------------------------------------------- structured data -- */

/**
 * The organisation card, built from whatever the CMS knows.
 *
 * Was a module constant reading the bundled `brand`. That put the placeholder
 * phone number and address into the structured data on every page — the copy
 * Google reads and may print in a knowledge panel — and left them there however
 * many times someone corrected them in the CMS. It is a function now for the
 * same reason the footer takes props.
 */
function organisationJsonLd(brand: {
  name: string
  suffix: string
  tagline: string
  email: string
  phone: string
  address: string
}) {
  /*
    "Near Bus Stand, GT Road, Phagwara, Punjab 144401" back into a PostalAddress.

    The CMS stores an address as one line, because that is how it is written on
    a contact page. Schema.org wants it in parts, and the parts were hard-coded
    here — so an edited address changed the visible page and not the markup a
    crawler reads. Split from the end, which is the only end with a reliable
    shape: a PIN code, then the state, then the locality.
  */
  const parts = brand.address.split(',').map((part) => part.trim()).filter(Boolean)
  const last = parts.at(-1) ?? ''
  const pin = last.match(/\b(\d{6})\b/)?.[1]
  const region = pin ? last.replace(pin, '').trim() : last
  const locality = parts.at(pin || region ? -2 : -1) ?? ''
  const street = parts.slice(0, Math.max(0, parts.length - (pin || region ? 2 : 1))).join(', ')

  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: `${brand.name} ${brand.tagline} — ${brand.suffix}`,
    url: SITE_URL,
    description:
      'AI, Data Science and Full Stack training institute offering job-oriented courses with placement assistance.',
    image: OG_IMAGE_URL,
    address: {
      '@type': 'PostalAddress',
      ...(street ? { streetAddress: street } : {}),
      ...(locality ? { addressLocality: locality } : {}),
      ...(region ? { addressRegion: region } : {}),
      ...(pin ? { postalCode: pin } : {}),
      addressCountry: 'IN',
    },
    telephone: brand.phone.replace(/\s+/g, '-'),
    email: brand.email,
    openingHours: 'Mo-Sa 09:00-19:00',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1850',
    },
  }
}

/* ----------------------------------------------------------------- root -- */

export default async function RootLayout({ children }: { children: ReactNode }) {
  /*
    One round of CMS reads for the whole shell, in parallel.

    Every one of these is cached and tagged (see lib/cms/client.ts), so this is
    a cache read on all but the first request after an editor saves — and each
    falls back to the bundled data on its own, so a CMS that is down costs the
    chrome nothing.
  */
  const [brand, courseCatalog, internship, after12, navPages, socials, blogs, events] =
    await Promise.all([
      getBrand(),
      getCourseCatalog(),
      getInternshipCatalog(),
      getAfter12Catalog(),
      getNavPages(),
      getSocials(),
      // Only to decide whether to advertise the sections at all — see below.
      getBlogs(1),
      getEvents(1),
    ])

  /*
    What goes into the Resources menu.

    The blog and the events listing are offered only once the CMS has something
    to show. A menu item leading to "no posts yet" is a worse first impression
    than no menu item, and both sections are new — they will be empty until
    somebody writes the first post or announces the first seminar. The pages
    themselves stay reachable by address either way.
  */
  const headerPages: NavDropdownItem[] = [
    ...(blogs && blogs.length > 0
      ? [{ label: 'Blog', href: '/blogs', note: 'Guides and career advice' }]
      : []),
    ...(events && events.length > 0
      ? [{ label: 'Events', href: '/events', note: 'Seminars and workshops' }]
      : []),
    ...navPages
      .filter((page) => page.placement === 'header')
      .map((page) => ({ label: page.label, href: `/${page.slug}` })),
  ]

  const navLinks = makeNavLinks(internship, after12, headerPages)

  return (
    <html lang="en" className={`${jakarta.variable} ${manrope.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to main content
        </a>

        <SiteEffects />

        <Navbar navLinks={navLinks} courseCatalog={courseCatalog} brand={brand} />

        {children}

        <Footer
          brand={brand}
          socials={socials}
          navPages={navPages.filter((page) => page.placement === 'footer')}
        />
        <FloatingDock brand={brand} />

        {/* JSON-LD is inert data, not executable script — safe to inline. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationJsonLd(brand)) }}
        />
      </body>
    </html>
  )
}
