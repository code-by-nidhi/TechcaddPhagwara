import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import Button from '@/components/ui/Button'
import Icon, { iconRegistry, type IconName } from '@/components/ui/Icon'
import SectionHeading from '@/components/ui/SectionHeading'
import { mediaUrl } from '@/lib/cms/client'
import { getBrand, getEvent, getEventSlugs } from '@/lib/cms/content'
import {
  formatDateRange,
  formatTimeRange,
  initials,
  isoDate,
  isUpcoming,
  plainText,
} from '@/lib/cms/format'
import { sanitizeHtml, hasContent } from '@/lib/sanitize-html'
import { SITE_URL } from '@/lib/site-config'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const events = await getEventSlugs()
  return (events ?? []).map((event) => ({ slug: event.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const event = await getEvent(slug)
  if (!event) return {}

  const description = event.seo?.metaDescription?.trim() || plainText(event.summary, 160)
  const cover = mediaUrl(event.seo?.ogImage?.url ?? event.coverImage?.url)

  return {
    title: event.seo?.metaTitle?.trim() || event.title,
    description,
    alternates: { canonical: event.seo?.canonicalUrl?.trim() || `/events/${event.slug}` },
    ...(event.seo?.robotsIndex === false ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      type: 'article',
      title: event.seo?.ogTitle?.trim() || event.title,
      description: event.seo?.ogDescription?.trim() || description,
      url: `${SITE_URL}/events/${event.slug}`,
      ...(cover ? { images: [{ url: cover }] } : {}),
    },
    twitter: { card: 'summary_large_image', title: event.title, description },
  }
}

const isIcon = (name: string): name is IconName => name in iconRegistry

export default async function EventPage({ params }: PageProps) {
  const { slug } = await params
  const [event, brand] = await Promise.all([getEvent(slug), getBrand()])
  if (!event) notFound()

  const upcoming = isUpcoming(event.startsOn, event.endsOn)
  const cover = mediaUrl(event.coverImage?.url)
  const time = formatTimeRange(event.startTime, event.endTime)
  const body = sanitizeHtml(event.body)

  /** The "when and where" strip. Only the facts that were actually filled in. */
  const facts: { icon: IconName; label: string; value: string }[] = [
    { icon: 'clock', label: 'Date', value: formatDateRange(event.startsOn, event.endsOn) },
    ...(time ? [{ icon: 'clock' as const, label: 'Time', value: time }] : []),
    ...(event.venueName || event.city
      ? [
          {
            icon: 'mapPin' as const,
            label: 'Where',
            value: [event.venueName, event.city].filter(Boolean).join(', '),
          },
        ]
      : []),
    ...(event.mode ? [{ icon: 'monitor' as const, label: 'Format', value: event.mode }] : []),
    ...(event.hostName ? [{ icon: 'handshake' as const, label: 'With', value: event.hostName }] : []),
    ...(event.seats ? [{ icon: 'users' as const, label: 'Seats', value: String(event.seats) }] : []),
  ]

  const highlights = (event.highlights ?? []).filter((item) => item.text?.trim())
  const agenda = (event.agenda ?? []).filter((item) => item.title?.trim())
  const speakers = (event.speakers ?? []).filter((person) => person.name?.trim())
  const photos = (event.images ?? []).filter((photo) => photo.media?.url)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    description: plainText(event.summary, 200),
    startDate: event.startsOn,
    ...(event.endsOn ? { endDate: event.endsOn } : {}),
    eventAttendanceMode:
      event.mode === 'online'
        ? 'https://schema.org/OnlineEventAttendanceMode'
        : event.mode === 'hybrid'
          ? 'https://schema.org/MixedEventAttendanceMode'
          : 'https://schema.org/OfflineEventAttendanceMode',
    /*
      EventScheduled either way, and deliberately.

      Schema.org has no "finished" status — its alternatives are Cancelled,
      Postponed, Rescheduled and MovedOnline, all of which say something untrue
      about an event that took place as planned. What tells a crawler an event
      is over is its endDate, which is already above.
    */
    eventStatus: 'https://schema.org/EventScheduled',
    ...(event.venueName || event.venueAddress
      ? {
          location: {
            '@type': 'Place',
            name: event.venueName || `${brand.name} ${brand.suffix}`,
            address: event.venueAddress || brand.address,
          },
        }
      : {}),
    ...(cover ? { image: cover } : {}),
    organizer: {
      '@type': 'EducationalOrganization',
      name: `${brand.name} ${brand.suffix}`,
      url: SITE_URL,
    },
    ...(event.registrationUrl ? { url: event.registrationUrl } : {}),
  }

  return (
    <main id="main">
      <section className="section course-hero">
        <div className="shell">
          <nav className="course-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <Icon name="chevronRight" size={12} />
            <Link href="/events">Events</Link>
            <Icon name="chevronRight" size={12} />
            <span aria-current="page">{event.title}</span>
          </nav>

          <span className={`event-status event-status--${upcoming ? 'upcoming' : 'past'}`}>
            {upcoming ? 'Upcoming' : 'This event has finished'}
          </span>

          <SectionHeading
            eyebrow={event.eventType}
            eyebrowIcon="mic"
            title={event.title}
            lead={event.summary}
            reveal={false}
          />

          <div className="course-hero__cta">
            {/*
              Registration is offered only while it can be acted on.

              A "Register" button on a seminar that finished in March takes
              somebody to a closed form, which is worse than not offering it.
            */}
            {upcoming && event.registrationUrl && (
              <Button href={event.registrationUrl} arrow target="_blank" rel="noopener noreferrer">
                Register
              </Button>
            )}
            <Button href="/#contact" variant={upcoming ? 'ghost' : 'primary'} icon="phone">
              {upcoming ? 'Ask a counsellor' : 'Tell me about the next one'}
            </Button>
            {event.mapUrl && (
              <Button href={event.mapUrl} variant="ghost" icon="mapPin" target="_blank" rel="noopener noreferrer">
                Directions
              </Button>
            )}
          </div>

          <dl className="course-facts event-facts">
            {facts.map((fact) => (
              <div className="course-fact" key={fact.label}>
                <i>
                  <Icon name={isIcon(fact.icon) ? fact.icon : 'clock'} size={15} />
                </i>
                <div>
                  <dt>{fact.label}</dt>
                  <dd>
                    {fact.label === 'Date' ? (
                      <time dateTime={isoDate(event.startsOn)}>{fact.value}</time>
                    ) : (
                      fact.value
                    )}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {cover && (
        <section className="section section--tint">
          <div className="shell">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="epost__cover"
              src={cover}
              alt={event.coverImage?.alt ?? event.title}
              width={event.coverImage?.width}
              height={event.coverImage?.height}
              style={{ marginBottom: 0 }}
            />
          </div>
        </section>
      )}

      {hasContent(event.body) && (
        <section className="section">
          <div className="shell">
            <div className="course-prose" dangerouslySetInnerHTML={{ __html: body }} />
          </div>
        </section>
      )}

      {highlights.length > 0 && (
        <section className="section section--tint course-highlights">
          <div className="shell">
            <h2 className="course-highlights__title">What you&rsquo;ll take away</h2>
            <ul className="course-highlights__list">
              {highlights.map((item) => (
                <li key={item.id ?? item.text}>
                  <i>
                    <Icon name="check" />
                  </i>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {agenda.length > 0 && (
        <section className="section">
          <div className="shell">
            <h2 className="course-highlights__title">Running order</h2>
            <ol className="event-agenda">
              {agenda.map((item, i) => (
                <li key={item.id ?? `${item.title}-${i}`}>
                  <b>{item.timeLabel || `Item ${i + 1}`}</b>
                  <h3>{item.title}</h3>
                  {item.detail?.trim() && <p>{item.detail.trim()}</p>}
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {speakers.length > 0 && (
        <section className="section section--tint">
          <div className="shell">
            <h2 className="course-highlights__title">Speaking</h2>
            <div className="event-speakers">
              {speakers.map((person) => {
                const photo = mediaUrl(person.photo?.url)
                return (
                  <div className="espeaker" key={person.id ?? person.name}>
                    <span className="espeaker__avatar" aria-hidden="true">
                      {photo ? (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img src={photo} alt="" loading="lazy" />
                      ) : (
                        initials(person.name)
                      )}
                    </span>
                    <div>
                      <b>{person.name}</b>
                      {(person.role || person.org) && (
                        <span>{[person.role, person.org].filter(Boolean).join(' · ')}</span>
                      )}
                      {person.bio?.trim() && <p>{person.bio.trim()}</p>}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {photos.length > 0 && (
        <section className="section gallery">
          <div className="shell">
            <h2 className="course-highlights__title">From the day</h2>
            <div className="gallery__grid">
              {photos.map((photo, i) => (
                <figure className="shot" key={photo.id ?? i} style={{ '--hue': (i * 47) % 360 }}>
                  {/* `.shot` is `position: relative` with the caption veil
                      layered over it; next/image's `fill` used to supply this
                      positioning, so a plain <img> has to bring its own. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="shot__img"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
                    src={mediaUrl(photo.media.url)}
                    alt={photo.media.alt || photo.caption || event.title}
                    loading="lazy"
                  />
                  {photo.caption && (
                    <figcaption className="shot__veil">
                      <b>{photo.caption}</b>
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* JSON-LD is inert data, not executable script — safe to inline. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  )
}
