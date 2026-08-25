'use client'

import { useState } from 'react'
import Icon from '@/components/ui/Icon'
import SectionHeading from '@/components/ui/SectionHeading'
import { aiLabs } from '@/data/site'

interface TerminalLine {
  u?: string
  b?: string
  t?: string
  e?: string
}

const TERMINAL: TerminalLine[] = [
  { u: '# lab-03 · retrieval augmented assistant' },
  { b: 'techcadd@lab', t: ' ~ % python train.py --model campus-rag' },
  { u: 'loading 12,480 documents ......... ok' },
  { u: 'building embeddings ............. ok' },
  { e: '✔ eval accuracy  94.2%   latency 118ms' },
  { b: 'techcadd@lab', t: ' ~ % deploy --target aws' },
  { e: '✔ live at students.techcadd.dev' },
]

/** Client Component: hovering/focusing a lab swaps the terminal title. */
export default function AILabs() {
  const [active, setActive] = useState(0)
  const activeLab = aiLabs[active] ?? aiLabs[0]

  return (
    <section className="labs section" id="labs">
      <div className="shell">
        <SectionHeading
          align="center"
          eyebrow="AI Labs"
          eyebrowIcon="cpu"
          title="Labs where students"
          highlight="ship real systems"
          lead="Not simulations. Every lab ends with something deployed, monitored and defensible in an interview."
        />

        <div className="labs__panel">
          <div className="labs__list" data-reveal="left">
            {aiLabs.map((lab, i) => (
              <article
                key={lab.title}
                className={`lab ${active === i ? 'is-on' : ''}`.trim()}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                tabIndex={0}
                aria-label={`${lab.title}. ${lab.stat} ${lab.statLabel}. ${lab.text}`}
              >
                <span className="lab__stat">{lab.stat}</span>
                <div>
                  <h3>{lab.title}</h3>
                  <p>{lab.text}</p>
                  <span className="lab__stat-label">{lab.statLabel}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="labs__visual" data-reveal="right" data-reveal-delay="140">
            <div className="labwin">
              <div className="labwin__bar">
                <i />
                <i />
                <i />
                <span>{activeLab?.title}</span>
              </div>

              <div className="labwin__body">
                {TERMINAL.map((line, i) => (
                  <div key={i}>
                    {line.u && <u>{line.u}</u>}
                    {line.b && (
                      <>
                        <b>{line.b}</b>
                        {line.t}
                      </>
                    )}
                    {line.e && <em>{line.e}</em>}
                  </div>
                ))}
                <div>
                  <span className="labwin__caret" />
                </div>
              </div>
            </div>

            <span className="labs__float labs__float--a">
              <Icon name="cpu" />
              GPU cluster online
            </span>

            <span className="labs__float labs__float--b">
              <Icon name="check" />
              100% projects deployed
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
