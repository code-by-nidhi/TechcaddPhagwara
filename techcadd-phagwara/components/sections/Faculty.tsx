import Icon from '@/components/ui/Icon'
import SectionHeading from '@/components/ui/SectionHeading'
import TiltCard from '@/components/ui/TiltCard'
import { faculty } from '@/data/site'

/** Server Component — only the tilt shells hydrate. */
export default function Faculty() {
  return (
    <section className="faculty section" id="faculty">
      <div className="shell">
        <SectionHeading
          align="center"
          eyebrow="Faculty"
          eyebrowIcon="users"
          title="Mentors who still"
          highlight="build for a living"
          lead="Our trainers come from product teams and agencies — they teach the stack they shipped with last quarter, not the one they learned a decade ago."
        />

        <div className="faculty__grid">
          {faculty.map((person, index) => (
            <TiltCard
              key={person.name}
              className="mentor glass"
              max={7}
              scale={1.02}
              reveal={index % 3 === 1 ? 'blur' : 'up'}
              revealDelay={(index % 3) * 110}
            >
              <span className="mentor__exp">{person.exp}</span>

              <span className="mentor__avatar" aria-hidden="true">
                {person.initials}
              </span>

              <h3>{person.name}</h3>
              <span className="mentor__role">{person.role}</span>

              <p className="mentor__focus">
                <Icon name="target" size={15} />
                {person.focus}
              </p>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
