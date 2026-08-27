'use client'

import { motion } from 'framer-motion'
import type { CourseContent, CourseProject } from '@/data/courses/types'
import { Reveal, Section, SectionHead, fadeUp } from './shared'

function ProjectCard({
  project,
  index,
  tall = false,
}: {
  project: CourseProject
  index: number
  /** Pushes the body to the bottom of a full-height cell. */
  tall?: boolean
}) {
  /* Early pieces are described by the stack they use; the later, heavier ones
     by what you demonstrate — which is what an interviewer asks about. */
  const tags = tall ? project.skills : project.tech

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className={`rounded-[22px] border border-slate-200/80 bg-white p-6 ${
        tall ? 'flex h-full flex-col' : ''
      }`}
    >
      <span className="inline-flex w-fit items-center rounded-full border border-amber-300/40 bg-amber-300/10 px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.14em] text-amber-600">
        Project {String(index + 1).padStart(2, '0')}
      </span>

      <div className={tall ? 'mt-auto pt-12' : 'mt-4'}>
        <h3 className="font-[family-name:var(--font-jakarta)] text-[16px] font-bold leading-snug text-[#0F172A]">
          {project.name}
        </h3>
        <p className="mt-2.5 text-[13.5px] leading-[1.7] text-[#475569]">{project.summary}</p>

        {tags.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2">
            {tags.slice(0, 2).map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-[#F6F9FF] px-3 py-1.5 text-[11.5px] font-medium text-[#334155]"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.article>
  )
}

/**
 * The portfolio band.
 *
 * With three or more projects the grid goes asymmetric — the two lighter
 * exercises stacked in one column, the live brief and capstone given a full
 * column each — because those last two are the ones worth dwelling on.
 *
 * Eleven of the twenty-seven catalogue entries only carry two projects, and
 * that layout collapses to an empty right-hand column for them, so those fall
 * back to an even grid instead of rendering a hole.
 */
export default function Projects({ course }: { course: CourseContent }) {
  const projects = course.projects
  if (!projects.length) return null

  /* The asymmetric layout needs one column for the stacked pair plus one per
     heavier project. Hard-coding three columns leaves a hole on a course that
     carries exactly three, so the track count follows the data. */
  const asymmetric = projects.length >= 3
  const columns = projects.length >= 4 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'

  return (
    <Section id="projects" tone="dark">
      <Reveal>
        <SectionHead
          eyebrow="Portfolio"
          title={
            <>
              Hands-on projects
              <br />
              you will ship
            </>
          }
        />

        {asymmetric ? (
          <div className={`mt-11 grid gap-4 ${columns}`}>
            <div className="flex flex-col gap-4">
              {projects.slice(0, 2).map((project, i) => (
                <ProjectCard key={project.name} project={project} index={i} />
              ))}
            </div>

            {projects.slice(2, 4).map((project, i) => (
              <ProjectCard key={project.name} project={project} index={i + 2} tall />
            ))}
          </div>
        ) : (
          <div className="mt-11 grid gap-4 sm:grid-cols-2">
            {projects.map((project, i) => (
              <ProjectCard key={project.name} project={project} index={i} />
            ))}
          </div>
        )}
      </Reveal>
    </Section>
  )
}
