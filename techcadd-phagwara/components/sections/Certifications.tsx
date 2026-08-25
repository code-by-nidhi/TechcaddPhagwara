import Icon, { type IconName } from '@/components/ui/Icon'
import SectionHeading from '@/components/ui/SectionHeading'
import TiltCard from '@/components/ui/TiltCard'
import { certifications } from '@/data/site'

const SEALS: IconName[] = ['award', 'shield', 'check', 'star']

/** Server Component — only the tilt shells hydrate. */
export default function Certifications() {
  return (
    <section className="certs section" id="certifications">
      <div className="shell">
        <SectionHeading
          align="center"
          eyebrow="Certifications"
          eyebrowIcon="award"
          title="Credentials that"
          highlight="actually get verified"
          lead="Each certificate carries a public credential ID recruiters can check — plus preparation for the external industry exams that matter in your track."
        />

        <div className="certs__grid">
          {certifications.map((cert, i) => (
            <TiltCard
              key={cert.title}
              className="cert glass"
              max={11}
              scale={1.03}
              reveal="scale"
              revealDelay={i * 100}
            >
              <span className="cert__seal">
                <Icon name={SEALS[i % SEALS.length] ?? 'award'} />
              </span>
              <h3>{cert.title}</h3>
              <p className="cert__issuer">{cert.issuer}</p>
              <span className="cert__note">
                <Icon name="check" size={12} />
                {cert.note}
              </span>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
