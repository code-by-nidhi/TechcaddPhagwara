'use client'

import { useEffect, useRef } from 'react'
import Icon, { type IconName } from '@/components/ui/Icon'
import SectionHeading from '@/components/ui/SectionHeading'
import { loadGsap } from '@/lib/gsap'
import { projects } from '@/data/site'

const GLYPHS: IconName[] = ['brain', 'monitor', 'code', 'chart', 'mobile', 'megaphone']

/**
 * Pinned horizontal rail — the section holds still while the project track
 * scrolls sideways. Below 900px it degrades to a normal swipe rail.
 */
export default function Projects() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let cancelled = false
    let mm: ReturnType<typeof import('gsap').gsap.matchMedia> | undefined

    void loadGsap().then(({ gsap, ScrollTrigger }) => {
      if (cancelled) return

      mm = gsap.matchMedia()

      mm.add('(min-width: 900px) and (prefers-reduced-motion: no-preference)', () => {
        const track = trackRef.current
        const section = sectionRef.current
        if (!track || !section) return

        const distance = () => track.scrollWidth - window.innerWidth + 80

        const tween = gsap.to(track, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        })

        return () => {
          tween.kill()
        }
      })

      ScrollTrigger.refresh()
    })

    return () => {
      cancelled = true
      mm?.revert()
    }
  }, [])

  return (
    <section className="projects section section--soft" id="projects" ref={sectionRef}>
      <div className="shell">
        <SectionHeading
          eyebrow="Student Projects"
          eyebrowIcon="code"
          title="Portfolios built here,"
          highlight="shipped to production"
          lead="A sample of what recent batches delivered — each one code-reviewed, deployed and defended in a demo day."
        />
      </div>

      <div className="projects__viewport">
        <div className="projects__track" ref={trackRef}>
          {/* no data-reveal here: off-screen cards on the horizontal rail would
              never intersect the viewport and would stay invisible */}
          {projects.map((project, i) => (
            <article className="project glass" key={project.title} style={{ '--i': i }}>
              <div className="project__visual">
                <span className="project__glyph">
                  <Icon name={GLYPHS[i % GLYPHS.length] ?? 'code'} />
                </span>
              </div>

              <span className="project__stack">{project.stack}</span>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="shell">
        <p className="projects__hint">
          Scroll to explore the rail
          <Icon name="arrow" />
        </p>
      </div>
    </section>
  )
}
