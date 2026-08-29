'use client'

import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Keyboard, A11y } from 'swiper/modules'
import type { Swiper as SwiperClass } from 'swiper'
import Icon from '@/components/ui/Icon'
import SectionHeading from '@/components/ui/SectionHeading'
import { testimonials as staticTestimonials, type Testimonial } from '@/data/site'

/* Swiper's stylesheets are imported in app/layout.tsx, before
   styles/testimonials.css — importing them here instead would place them
   after it in the cascade and undo our overrides. */

/**
 * Client Component: Swiper needs the DOM. Loaded as its own chunk (see page.tsx).
 *
 * The reviews arrive as a prop so the homepage can hand over whatever the CMS
 * has; the bundled set is the default, which is what renders when there is no
 * CMS or it is unreachable.
 */
export default function Testimonials({
  testimonials = staticTestimonials,
}: { testimonials?: Testimonial[] } = {}) {
  const swiperRef = useRef<SwiperClass | null>(null)

  /*
    Swiper's loop mode duplicates slides to fake the wrap-around, and needs
    more slides than it shows to do it. At the widest breakpoint it shows
    three, so with three or fewer it silently disables looping and leaves a
    carousel that stops dead at the last card. An editor publishing two
    testimonials should not discover that as a bug.
  */
  const loop = testimonials.length > 3

  return (
    <section className="reviews section" id="testimonials">
      <div className="shell">
        <div className="reviews__head">
          <SectionHeading
            eyebrow="Student Voices"
            eyebrowIcon="message"
            title="1,850 reviews."
            highlight="Here are a few."
            lead="Unedited words from students who finished the program and are now working in the roles they trained for."
          />

          <div className="reviews__nav" data-reveal="right">
            <button
              type="button"
              className="reviews__arrow"
              aria-label="Previous testimonial"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <Icon name="chevronLeft" />
            </button>
            <button
              type="button"
              className="reviews__arrow"
              aria-label="Next testimonial"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <Icon name="chevronRight" />
            </button>
          </div>
        </div>

        <div data-reveal="up">
          <Swiper
            className="reviews__swiper"
            modules={[Autoplay, Pagination, Keyboard, A11y]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
            spaceBetween={20}
            slidesPerView={1}
            loop={loop}
            keyboard={{ enabled: true }}
            autoplay={{
              delay: 3600,
              disableOnInteraction: false,
              pauseOnMouseEnter: true, // hover pause
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              680: { slidesPerView: 2 },
              1100: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((review) => (
              <SwiperSlide key={`${review.name}-${review.quote.slice(0, 24)}`} style={{ height: 'auto' }}>
                <article className="review glass">
                  <span className="review__quote" aria-hidden="true">
                    &rdquo;
                  </span>

                  {review.video && (
                    <button
                      type="button"
                      className="review__video"
                      aria-label={`Play video review by ${review.name}`}
                    >
                      <span className="review__label">
                        <Icon name="video" size={11} />
                        Video review
                      </span>
                      <span className="review__play">
                        <Icon name="play" style={{ fill: 'currentColor' }} />
                      </span>
                    </button>
                  )}

                  <div
                    className="review__stars"
                    role="img"
                    aria-label={`${review.rating} out of 5 stars`}
                  >
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Icon key={i} name="star" style={{ '--s': i }} />
                    ))}
                  </div>

                  <p className="review__text">{review.quote}</p>

                  <div className="review__person">
                    <span className="review__avatar" aria-hidden="true">
                      {review.initials}
                    </span>
                    <div>
                      <b>{review.name}</b>
                      <span>{review.role}</span>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="reviews__plate" data-reveal="up" data-reveal-delay="120">
          <div>
            <b>4.9 / 5</b>
            <span>Google rating</span>
          </div>
          <div>
            <b>1,850+</b>
            <span>Verified reviews</span>
          </div>
          <div>
            <b>96%</b>
            <span>Would recommend</span>
          </div>
          <div>
            <b>320+</b>
            <span>Video testimonials</span>
          </div>
        </div>
      </div>
    </section>
  )
}
