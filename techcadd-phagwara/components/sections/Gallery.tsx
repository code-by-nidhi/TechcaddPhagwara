import Image from 'next/image'
import Icon from '@/components/ui/Icon'
import SectionHeading from '@/components/ui/SectionHeading'
import { gallery as staticGallery, type GalleryShot } from '@/data/site'

/**
 * Bento gallery — Server Component.
 *
 * The legacy build had no photographs at all: every tile rendered a generated
 * gradient (`.shot__art`) as a stand-in. That behaviour is preserved, but each
 * tile now also accepts a real `src` in `data/site.ts`. When one is present the
 * tile renders next/image instead of the gradient, so dropping in campus
 * photos is a data edit rather than a component change.
 *
 * `sizes` matches the bento breakpoints so the optimiser serves a
 * correctly-scaled AVIF/WebP rather than a full-width original.
 */
export default function Gallery({
  gallery = staticGallery,
}: { gallery?: GalleryShot[] } = {}) {
  return (
    <section className="gallery section section--soft" id="gallery">
      <div className="shell">
        <SectionHeading
          eyebrow="Campus Life"
          eyebrowIcon="image"
          title="Inside the"
          highlight="Phagwara campus"
          lead="Labs, demo days, hackathon nights and placement drives — a look at where the work actually happens."
        />

        <div className="gallery__grid">
          {gallery.map((shot, i) => (
            <figure
              className="shot"
              key={`${shot.title}-${i}`}
              style={{ '--hue': shot.hue }}
              data-reveal="scale"
              data-reveal-delay={(i % 4) * 80}
            >
              {shot.src ? (
                <Image
                  className="shot__img"
                  src={shot.src}
                  alt={shot.alt ?? shot.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 25vw"
                  /* the first row is above the fold on tall screens */
                  loading={i < 2 ? 'eager' : 'lazy'}
                  priority={i === 0}
                />
              ) : (
                <span className="shot__art" aria-hidden="true" />
              )}

              <span className="shot__zoom" aria-hidden="true">
                <Icon name="search" size={15} />
              </span>

              <figcaption className="shot__veil">
                <span>{shot.tag}</span>
                <b>{shot.title}</b>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
