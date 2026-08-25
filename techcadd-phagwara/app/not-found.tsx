import type { Metadata } from 'next'
import Button from '@/components/ui/Button'
import SectionHeading from '@/components/ui/SectionHeading'

export const metadata: Metadata = {
  title: 'Page not found',
  description: 'The page you were looking for does not exist.',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <main id="main">
      <section className="section notfound">
        <div className="shell">
          <SectionHeading
            align="center"
            eyebrow="404"
            eyebrowIcon="compass"
            title="We could not find"
            highlight="that page"
            lead="The link may be out of date. Everything about our programs, placements and admissions lives on the main page."
          />

          <div className="notfound__cta">
            <Button href="/" size="lg" arrow>
              Back to home
            </Button>
            <Button href="/#contact" variant="ghost" size="lg" icon="phone">
              Talk to a counsellor
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
