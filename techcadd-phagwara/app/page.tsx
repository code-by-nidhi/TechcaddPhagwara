import dynamic from 'next/dynamic'

import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Stats from '@/components/sections/Stats'
import Courses from '@/components/sections/Courses'
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

/**
 * Testimonials pulls in Swiper (~40 kB gzipped), sits well below the fold and
 * is the heaviest single dependency on the page. Splitting it into its own
 * chunk keeps it out of the main bundle. `ssr` is left at its default (true),
 * so the reviews are still in the server-rendered HTML for crawlers — this is
 * a code-splitting boundary, not a client-only escape hatch.
 */
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'))

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <About />
      <Stats />
      <Courses />
      <LearningModes />
      <Benefits />
      <AILabs />
      <Journey />
      <Placement />
      <Certifications />
      <Projects />
      <Faculty />
      <Testimonials />
      <Gallery />
      <Achievements />
      <Faq />
      <Contact />
    </main>
  )
}
