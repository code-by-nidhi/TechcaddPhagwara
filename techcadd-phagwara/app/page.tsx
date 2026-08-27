import dynamic from 'next/dynamic'

import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import HowItWorks from '@/components/sections/HowItWorks'
import Categories from '@/components/sections/Categories'
import CourseCarousel from '@/components/sections/CourseCarousel'
import LearningModes from '@/components/sections/LearningModes'
import Benefits from '@/components/sections/Benefits'
import AILabs from '@/components/sections/AILabs'
import Journey from '@/components/sections/Journey'
import Placement from '@/components/sections/Placement'
import Certifications from '@/components/sections/Certifications'
import Projects from '@/components/sections/Projects'
import Faculty from '@/components/sections/Faculty'
import Gallery from '@/components/sections/Gallery'
import Achievements from '@/components/sections/Achievements'
import Faq from '@/components/sections/Faq'
import Contact from '@/components/sections/Contact'

import {
  getBrand,
  getCourseCatalog,
  getFaqs,
  getGallery,
  getPlacementStats,
  getSocials,
  getTestimonials,
} from '@/lib/cms/content'

/**
 * Testimonials pulls in Swiper (~40 kB gzipped), sits well below the fold and
 * is the heaviest single dependency on the page. Splitting it into its own
 * chunk keeps it out of the main bundle. `ssr` is left at its default (true),
 * so the reviews are still in the server-rendered HTML for crawlers — this is
 * a code-splitting boundary, not a client-only escape hatch.
 */
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'))

/**
 * The homepage.
 *
 * A Server Component now, because the sections that an editor can change read
 * their content from here instead of importing it. Every fetch is cached and
 * tagged and every one falls back to the bundled data on its own, so this stays
 * a static render in practice — and renders the page it always rendered when
 * there is no CMS to ask.
 *
 * The sections not listed below take no props on purpose. Their copy — the
 * benefits, the AI labs, the journey steps, the certifications, the faculty,
 * the awards — is hand-written prose with a layout built around it, and the
 * CMS has no module that means any of it. Wiring them to something that
 * half-fits would be worse than leaving them where an editor can be told they
 * live in the code.
 */
export default async function HomePage() {
  const [courseCatalog, testimonials, faqs, gallery, placementStats, brand, socials] =
    await Promise.all([
      getCourseCatalog(),
      getTestimonials(),
      getFaqs(),
      getGallery(),
      getPlacementStats(),
      getBrand(),
      getSocials(),
    ])

  /*
    What the enquiry form offers.

    Every published course, deduped by title and in catalogue order. It used to
    be the six cards in the homepage grid, so a student who wanted any of the
    other forty had to pick "Not sure yet".
  */
  const courseOptions = [
    ...new Set(courseCatalog.flatMap((category) => category.courses.map((c) => c.title))),
  ]

  return (
    <main id="main">
      <Hero />
      <About />
      <HowItWorks />
      <Categories courseCatalog={courseCatalog} />
      <CourseCarousel courseCatalog={courseCatalog} />
      <LearningModes />
      <Benefits />
      <AILabs />
      <Journey />
      <Placement placementStats={placementStats} />
      <Certifications />
      <Projects />
      <Faculty />
      <Testimonials testimonials={testimonials} />
      <Gallery gallery={gallery} />
      <Achievements />
      <Faq faqs={faqs} brand={brand} />
      <Contact courseOptions={courseOptions} brand={brand} socials={socials} />
    </main>
  )
}
