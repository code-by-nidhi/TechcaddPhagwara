'use client'

import { useMemo, useState } from 'react'
import Icon from '@/components/ui/Icon'
import Button from '@/components/ui/Button'
import SectionHeading from '@/components/ui/SectionHeading'
import TiltCard from '@/components/ui/TiltCard'
import { courses, courseCategories } from '@/data/site'

/** Client Component: the category filter is interactive state. */
export default function Courses() {
  const [filter, setFilter] = useState('all')

  const visible = useMemo(
    () => (filter === 'all' ? courses : courses.filter((c) => c.category === filter)),
    [filter]
  )

  const countFor = (id: string) =>
    id === 'all' ? courses.length : courses.filter((c) => c.category === id).length

  return (
    <section className="courses section section--tint" id="courses">
      <div className="shell shell--wide">
        <div className="courses__top">
          <SectionHeading
            eyebrow="Programs"
            eyebrowIcon="layers"
            title="Pick the track that"
            highlight="matches your ambition"
            lead="Every program is project-first, mentor-led and mapped to a specific job role — with a portfolio and placement plan built into the syllabus."
          />

          <div data-reveal="right" data-reveal-delay="200">
            <Button href="#contact" variant="ghost" arrow>
              Download full syllabus
            </Button>
          </div>
        </div>

        {/* ------------------------------------------------------ filters */}
        <div className="courses__filters" role="tablist" aria-label="Course categories">
          {courseCategories.map((cat, i) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={filter === cat.id}
              className={`filter ${filter === cat.id ? 'is-on' : ''}`.trim()}
              onClick={() => setFilter(cat.id)}
              data-reveal="up"
              data-reveal-delay={i * 60}
            >
              <span>
                {cat.label}
                <em className="filter__count">{countFor(cat.id)}</em>
              </span>
            </button>
          ))}
        </div>

        {/* --------------------------------------------------- bento grid */}
        <div className="bento">
          {visible.map((course, i) => (
            <TiltCard
              key={course.id}
              className={`course glass ${course.featured ? 'course--featured' : ''}`.trim()}
              max={course.featured ? 5 : 8}
              scale={1.015}
              style={{ '--i': i }}
            >
              {course.popular && <span className="course__ribbon">Popular</span>}

              <div className="course__head">
                <span className="course__icon">
                  <Icon name={course.icon} />
                </span>
              </div>

              <h3 className="course__title">{course.title}</h3>
              <p className="course__blurb">{course.blurb}</p>

              <div className="course__tags">
                {course.tags.map((tag, t) => (
                  <span
                    key={tag}
                    className={`chip ${t % 3 === 1 ? 'chip--violet' : t % 3 === 2 ? 'chip--sky' : ''}`.trim()}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="course__meta">
                <span className="course__meta-item">
                  <Icon name="clock" size={14} />
                  {course.duration}
                </span>
                <span className="course__meta-item">
                  <Icon name="monitor" size={14} />
                  {course.mode}
                </span>
                <span className="course__meta-item">
                  <Icon name="award" size={14} />
                  Certificate
                </span>
              </div>

              <div className="course__foot">
                <span className="course__rating">
                  <Icon name="star" size={15} />
                  {course.rating}
                  <em>· {course.learners} learners</em>
                </span>
              </div>

              <div className="course__cta">
                <Button
                  href="#contact"
                  variant="soft"
                  size="sm"
                  arrow
                  aria-label={`View curriculum for ${course.title}`}
                >
                  View curriculum
                </Button>
              </div>

              <span className="course__badge" aria-hidden="true">
                <Icon name="arrowUp" />
              </span>
            </TiltCard>
          ))}

          {visible.length === 0 && (
            <p className="courses__empty">No programs in this category yet — check back soon.</p>
          )}
        </div>

        <div className="courses__foot" data-reveal="up">
          <p className="courses__foot-text">
            Can’t decide? Our counsellors map your background to the right track in 20 minutes.
          </p>
          <Button href="#contact" arrow>
            Get a free career plan
          </Button>
        </div>
      </div>
    </section>
  )
}
