'use client'

import { useState } from 'react'
import Icon from '@/components/ui/Icon'
import { SUPPORT_DESKS } from '@/data/contact'
import { brand } from '@/data/site'

/**
 * The four support desks, one visible at a time.
 *
 * A tablist rather than four stacked cards: the desks differ by *who* you are
 * — a student, a college, an employer, a prospective franchisee — and only one
 * of those is ever the reader. Showing all four at once asks everybody to skim
 * past three that are not for them.
 *
 * Implemented as a real ARIA tablist with arrow-key roving focus, because the
 * alternative that looks identical — four buttons and a conditional — leaves a
 * keyboard user tabbing through every desk to reach the panel.
 */
export default function SupportDesks() {
  const [active, setActive] = useState(0)
  const desk = SUPPORT_DESKS[active]!

  const phone = desk.phone ?? brand.phone
  const email = desk.email ?? brand.email
  const tel = `tel:${phone.replace(/[^\d+]/g, '')}`

  /* Left/Right move between tabs, Home/End jump to the ends — the pattern a
     screen-reader user expects the moment they hear "tab, 1 of 4". */
  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const last = SUPPORT_DESKS.length - 1
    let next: number | null = null

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = active === last ? 0 : active + 1
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = active === 0 ? last : active - 1
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = last

    if (next === null) return
    event.preventDefault()
    setActive(next)
    document.getElementById(`desk-tab-${next}`)?.focus()
  }

  return (
    <div className="desks">
      <div className="desks__tabs" role="tablist" aria-label="Support desks" onKeyDown={onKeyDown}>
        {SUPPORT_DESKS.map((item, i) => (
          <button
            key={item.key}
            id={`desk-tab-${i}`}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-controls={`desk-panel-${i}`}
            tabIndex={i === active ? 0 : -1}
            className={`desks__tab${i === active ? ' is-active' : ''}`}
            onClick={() => setActive(i)}
          >
            <i aria-hidden="true">
              <Icon name={item.icon} size={17} />
            </i>
            {item.label}
          </button>
        ))}
      </div>

      <div
        className="desks__panel"
        id={`desk-panel-${active}`}
        role="tabpanel"
        aria-labelledby={`desk-tab-${active}`}
        tabIndex={0}
      >
        <div className="desks__head">
          <span className="desks__avatar" aria-hidden="true">
            {desk.initials}
          </span>
          <div>
            <h3 className="desks__name">{desk.desk}</h3>
            <p className="desks__role">{desk.label}</p>
          </div>
        </div>

        <p className="desks__blurb">{desk.blurb}</p>

        <ul className="desks__handles">
          {desk.handles.map((item) => (
            <li key={item}>
              <Icon name="check" size={13} aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>

        <dl className="desks__lines">
          <div>
            <dt>
              <Icon name="phone" size={14} aria-hidden="true" />
              <span className="sr-only">Phone</span>
            </dt>
            <dd>
              <a href={tel}>{phone}</a>
            </dd>
          </div>
          <div>
            <dt>
              <Icon name="mail" size={14} aria-hidden="true" />
              <span className="sr-only">Email</span>
            </dt>
            <dd>
              <a href={`mailto:${email}`}>{email}</a>
            </dd>
          </div>
          <div>
            <dt>
              <Icon name="mapPin" size={14} aria-hidden="true" />
              <span className="sr-only">Address</span>
            </dt>
            <dd>{brand.address}</dd>
          </div>
        </dl>

        <div className="desks__actions">
          <a className="desks__btn desks__btn--call" href={tel}>
            <Icon name="phone" size={14} aria-hidden="true" />
            Call now
          </a>
          <a
            className="desks__btn desks__btn--wa"
            href={`https://wa.me/${brand.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="whatsapp" size={14} aria-hidden="true" />
            WhatsApp
          </a>
          <a className="desks__btn desks__btn--mail" href={`mailto:${email}`}>
            <Icon name="mail" size={14} aria-hidden="true" />
            Email
          </a>
        </div>
      </div>
    </div>
  )
}
