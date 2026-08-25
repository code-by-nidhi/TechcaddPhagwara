import type { ReactNode } from 'react'
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Manrope } from 'next/font/google'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SiteEffects from '@/components/fx/SiteEffects'
import FloatingDock from '@/components/fx/FloatingDock'
import { brand } from '@/data/site'
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
import '@/styles/stats.css'
import '@/styles/courses.css'
import '@/styles/programs.css'
import '@/styles/journey.css'
import '@/styles/placement.css'
import '@/styles/showcase.css'
import '@/styles/testimonials.css'
import '@/styles/faq.css'
import '@/styles/contact.css'
import '@/styles/footer.css'
import '@/styles/coursePage.css'
import '@/styles/bookDemoModal.css'

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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: `${brand.name} ${brand.tagline} — ${brand.suffix}`,
  url: SITE_URL,
  description:
    'AI, Data Science and Full Stack training institute offering job-oriented courses with placement assistance.',
  image: OG_IMAGE_URL,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Near Bus Stand, GT Road',
    addressLocality: 'Phagwara',
    addressRegion: 'Punjab',
    postalCode: '144401',
    addressCountry: 'IN',
  },
  telephone: '+91-98765-43210',
  email: brand.email,
  openingHours: 'Mo-Sa 09:00-19:00',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '1850',
  },
}

/* ----------------------------------------------------------------- root -- */

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${manrope.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to main content
        </a>

        <SiteEffects />

        <Navbar />

        {children}

        <Footer />
        <FloatingDock />

        {/* JSON-LD is inert data, not executable script — safe to inline. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
