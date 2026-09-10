import After12Hero from './After12Hero'
import CourseOverview from './CourseOverview'
import WhatYouWillLearn from './WhatYouWillLearn'
import CourseModules from './CourseModules'
import ToolsMesh from './ToolsMesh'
import WhoCanJoin from './WhoCanJoin'
import WhyProgram from './WhyProgram'
import WhyNow from './WhyNow'
import Certification from './Certification'
import After12Careers from './After12Careers'
import Projects from './Projects'
import WorkingLoop from './WorkingLoop'
import RelatedCourses from './RelatedCourses'
import CourseFaq from './CourseFaq'
import CourseCta from './CourseCta'
import CourseEnquiry from './CourseEnquiry'

import type { CourseContent, CourseSummary } from '@/data/courses/types'

/**
 * The After 12th page, in the branch template's running order.
 *
 * Same components as a course page and a different arrangement, which is the
 * whole of the difference between the two templates. Three things are worth
 * knowing before editing it.
 *
 * The alternation is the design
 * -----------------------------
 * Sections run dark, light, dark, light down the page, and that rhythm is what
 * makes the template recognisable rather than any single band. Several
 * components therefore take a `tone` prop whose default is the *course* page's
 * tone and whose value here is the opposite — `WhoCanJoin`, `WhyProgram`,
 * `WhyNow`, `RelatedCourses` and `CourseFaq`. Reordering a section without
 * re-checking its neighbours' tones is how the rhythm breaks.
 *
 * `WorkingLoop` renders two bands, light then dark, so it satisfies two rows
 * of the alternation on its own. `RelatedCourses` following it is the one
 * place two dark bands sit together — deliberately, because that is what the
 * reference does.
 *
 * What is deliberately absent
 * ---------------------------
 * `IndustryReady`, `DurationTiers`, `Reviews` and `Comparison`
 * are on the course pages and not here. They have no counterpart in this
 * template, and the point of it is to match rather than to be a superset.
 * `data/courses/types.ts` still carries their fields because the course pages
 * draw them; a programme setting `comparison` or `durations` simply has data
 * this template does not read.
 */
export default function After12Landing({
  course,
  related,
  relatedTitle,
}: {
  course: CourseContent
  related: CourseSummary[]
  relatedTitle: string
}) {
  return (
    <main id="main">
      {/* 01 — dark */}
      <After12Hero course={course} />

      {/* 02 — light */}
      <CourseOverview course={course} media={false} />

      {/* 03 — dark */}
      <WhatYouWillLearn course={course} />

      {/* 04 — light (tinted) */}
      <CourseModules course={course} title="Course Curriculum" />

      {/* 05 — dark */}
      <ToolsMesh course={course} eyebrow="The toolchain" title="Tools you will actually work in" />

      {/* 06 — light */}
      <WhoCanJoin course={course} tone="light" layout="rows" />

      {/* 07 — dark */}
      <WhyProgram course={course} tone="dark" />

      {/* 08 — light */}
      <WhyNow course={course} tone="light" />

      {/* 09 — dark */}
      <Certification course={course} />

      {/* 10 — light (tinted) */}
      <After12Careers course={course} />

      {/* 11 — dark */}
      <Projects course={course} layout="grid" />

      {/* 12 light, then 13 dark — both from this one component */}
      <WorkingLoop course={course} layout="stacked" />

      {/* 14 — dark */}
      <RelatedCourses courses={related} title={relatedTitle} tone="dark" />

      {/* 15 — light */}
      <CourseFaq
        course={course}
        tone="light"
        center
        eyebrow="FAQs"
        title="Frequently asked questions"
        sub="Find answers to the questions students ask before enrolling."
      />

      {/* 16 — dark */}
      <CourseEnquiry course={course} />

      {/* 17 — dark, divided from the form above rather than a separate band */}
      <CourseCta course={course} closing />
    </main>
  )
}
