import type { Metadata } from 'next'
import Link from 'next/link'

import Icon from '@/components/ui/Icon'
import SectionHeading from '@/components/ui/SectionHeading'
import { mediaUrl } from '@/lib/cms/client'
import { getEvents } from '@/lib/cms/content'
import { formatDateRange, hueFor, isoDate, isUpcoming, plainText } from '@/lib/cms/format'
import { SITE_URL } from '@/lib/site-config'
import type { CmsEvent } from '@/lib/cms/types'

/**
 * Seminars, workshops and guest lectures.
 *
 * The API returns the whole published set in one response, newest first, and
 * leaves it to the site to decide which side of today each one falls on — its
 * own note explains why: two endpoints would put that judgement in two places
 * that have to agree.
 */

export const metadata: Metadata = {
  title: 'Events',
  description:
    'Seminars, workshops, guest lectures and hackathons at Techcadd Phagwara — what is coming up, and what we have run.',
  alternates: { canonical: '/events' },
  openGraph: { title: 'Events', url: `${SITE_URL}/events`, type: 'website' },
}

/**
 * Rendered per request rather than cached with the page.
 *
 * "Upcoming" is a comparison against the current date, so a statically
 * rendered index would keep an event in the upcoming column until something
 * else caused a revalidation — which, for a page nobody is editing, could be
 * weeks after the event finished.
 */
export const dynamic = 'force-dynamic'

export default async function EventsIndexPage() {
  const events = (await getEvents(200)) ?? []

  const now = new Date()
  const upcoming = events
    .filter((event) => isUpcoming(event.startsOn, event.endsOn, now))
    // Soonest first: the API sorts newest-date-first, which for things that
    // have not happened yet is furthest-away-first — the wrong end.
    .sort((a, b) => a.startsOn.localeCompare(b.startsOn))

  const past = events
    .filter((event) => !isUpcoming(event.startsOn, event.endsOn, now))
    .sort((a, b) => b.startsOn.localeCompare(a.startsOn))

  return (
    <main id="main">
      <section className="section course-hero">
        <div className="shell">
          <nav className="course-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <Icon name="chevronRight" size={12} />
            <span aria-current="page">Events</span>
          </nav>

          <SectionHeading
            eyebrow="On campus"
            eyebrowIcon="mic"
            title="Seminars, workshops"
            highlight="and guest lectures"
            lead="Open sessions run at the Phagwara centre and with partner colleges. Most are free, and students from any institute are welcome."
            reveal={false}
          />
        </div>
      </section>

      {events.length === 0 ? (
        <section className="section section--tint">
          <div className="shell">
            <p className="editorial__empty">
              Nothing scheduled at the moment. Batch start dates and one-off sessions are announced
              here first — or ask a counsellor on <Link href="/#contact">the contact form</Link> to
              be told about the next one.
            </p>
          </div>
        </section>
      ) : (
        <>
          {upcoming.length > 0 && (
            <section className="section section--tint">
              <div className="shell">
                <h2 className="course-highlights__title">Coming up</h2>
                <div className="editorial__grid">
                  {upcoming.map((event) => (
                    <EventCard key={event.id} event={event} upcoming />
                  ))}
                </div>
              </div>
            </section>
          )}

          {past.length > 0 && (
            <section className={`section ${upcoming.length > 0 ? '' : 'section--tint'}`.trim()}>
              <div className="shell">
                <h2 className="course-highlights__title">
                  {upcoming.length > 0 ? 'Previously' : 'What we have run'}
                </h2>
                <div className="editorial__grid">
                  {past.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </main>
  )
}

function EventCard({ event, upcoming = false }: { event: CmsEvent; upcoming?: boolean }) {
  const cover = mediaUrl(event.coverImage?.url)

  return (
    <Link href={`/events/${event.slug}`} className="ecard">
      <div className="ecard__media">
        {cover ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img src={cover} alt={event.coverImage?.alt ?? ''} loading="lazy" />
        ) : (
          <span className="ecard__art" style={{ '--hue': hueFor(event.slug) }} aria-hidden="true" />
        )}
      </div>

      <div className="ecard__body">
        <div className="ecard__meta">
          <span className={`event-status event-status--${upcoming ? 'upcoming' : 'past'}`}>
            {upcoming ? 'Upcoming' : 'Past'}
          </span>
          <time dateTime={isoDate(event.startsOn)}>
            {formatDateRange(event.startsOn, event.endsOn)}
          </time>
        </div>

        <h3 className="ecard__title">{event.title}</h3>
        <p className="ecard__excerpt">{plainText(event.summary, 150)}</p>

        <span className="ecard__more">
          {upcoming ? 'Details and registration' : 'How it went'}
          <Icon name="arrow" size={14} />
        </span>
      </div>
    </Link>
  )
}
