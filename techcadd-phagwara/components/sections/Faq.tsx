'use client'

import { useState } from 'react'
import Icon from '@/components/ui/Icon'
import SectionHeading from '@/components/ui/SectionHeading'
import { brand, faqs } from '@/data/site'

/** Client Component: accordion open/close state. */
export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section className="faq section section--tint" id="faq">
      <div className="shell">
        <div className="faq__layout">
          <div className="faq__intro">
            <SectionHeading
              eyebrow="FAQs"
              eyebrowIcon="message"
              title="Questions students"
              highlight="always ask first"
              lead="If your question is not here, our counsellors answer on WhatsApp within a few minutes during working hours."
            />

            <div className="faq__helper" data-reveal="up" data-reveal-delay="220">
              <i>
                <Icon name="headphones" />
              </i>
              <div>
                <b>Still unsure about something?</b>
                <a href={brand.phoneHref}>Call {brand.phone}</a>
              </div>
            </div>
          </div>

          <div className="faq__list">
            {faqs.map((item, i) => {
              const isOpen = open === i
              return (
                <div
                  className={`qa ${isOpen ? 'is-open' : ''}`.trim()}
                  key={item.q}
                  data-reveal="up"
                  data-reveal-delay={i * 70}
                >
                  <button
                    type="button"
                    className="qa__q"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-button-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span>{item.q}</span>
                    <span className="qa__mark" aria-hidden="true" />
                  </button>

                  <div
                    className="qa__panel"
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-button-${i}`}
                  >
                    <div>
                      <p className="qa__a">{item.a}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
