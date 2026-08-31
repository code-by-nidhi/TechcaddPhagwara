'use client'

import { useState } from 'react'
import Image from 'next/image'
import Icon from '@/components/ui/Icon'

/**
 * The video panel in a course overview.
 *
 * A click-to-load facade rather than an embed: nothing from YouTube is
 * requested until someone actually presses play, so twenty-seven static
 * course pages do not each carry a third-party player (and its cookies)
 * for a video most visitors never start.
 *
 * With neither `youtubeId` nor `src` set, the panel still renders — it is
 * part of the section's design — but as inert artwork rather than a play
 * button that does nothing. Add either field in `data/courseContent.ts`
 * and the same panel becomes a real player.
 */

export interface CourseVideoData {
  /** YouTube id — loaded from the no-cookie domain, on click only. */
  youtubeId?: string
  /** Or a self-hosted file under `public/`. Takes precedence if both are set. */
  src?: string
  /** Poster frame under `public/`. Without one the panel uses the gradient. */
  poster?: string
  /** Accessible name, and the caption under the panel. */
  title?: string
}

export interface CourseVideoProps {
  video: CourseVideoData
  /** Course label, for a sensible fallback title. */
  label: string
}

export default function CourseVideo({ video, label }: CourseVideoProps) {
  const [playing, setPlaying] = useState(false)

  const title = video.title ?? `Inside the ${label} lab at techcadd`
  const playable = Boolean(video.src || video.youtubeId)

  return (
    <figure className="course-video">
      <div className="course-video__frame">
        {/* A self-hosted video should carry a <track kind="captions"> once
            there is a real file to caption. */}
        {playing && video.src && (
          <video className="course-video__media" src={video.src} controls autoPlay playsInline />
        )}

        {playing && !video.src && video.youtubeId && (
          <iframe
            className="course-video__media"
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}

        {!playing && (
          <>
            {video.poster && (
              <Image
                className="course-video__poster"
                src={video.poster}
                alt=""
                fill
                sizes="(max-width: 900px) 100vw, 760px"
              />
            )}

            {playable ? (
              <button
                type="button"
                className="course-video__play"
                onClick={() => setPlaying(true)}
                aria-label={`Play: ${title}`}
              >
                <Icon name="play" size={26} />
              </button>
            ) : (
              /* No source yet — the same mark, but decoration, not a control. */
              <span className="course-video__play is-idle" aria-hidden="true">
                <Icon name="play" size={26} />
              </span>
            )}
          </>
        )}
      </div>

      {video.title && <figcaption>{video.title}</figcaption>}
    </figure>
  )
}
