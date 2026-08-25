import { ImageResponse } from 'next/og'
import { OG_IMAGE_ALT, OG_IMAGE_SIZE } from '@/lib/site-config'

/* Next.js reads these three exports to build the og:image / twitter:image tags. */
export const alt = OG_IMAGE_ALT
export const size = OG_IMAGE_SIZE
export const contentType = 'image/png'

/**
 * The legacy index.html pointed og:image at /og-image.jpg — a file that never
 * existed in the repo, so every social share fell back to a blank card.
 * Generating it here means the asset is always present and always matches the
 * live copy, with no binary to keep in version control.
 *
 * Rendered by Satori: every element holding more than one child must declare
 * `display: flex` explicitly, which is why the markup below is flex all the
 * way down. No external font is fetched, so the build works offline.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: 'linear-gradient(135deg, #0d47a1 0%, #1565c0 45%, #2196f3 100%)',
          fontFamily: 'sans-serif',
          color: '#ffffff',
        }}
      >
        {/* soft highlight, mirrors the --grad-mesh treatment on the site */}
        <div
          style={{
            position: 'absolute',
            top: -260,
            right: -180,
            width: 760,
            height: 760,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(144,202,249,0.38), rgba(144,202,249,0))',
            display: 'flex',
          }}
        />

        {/* ------------------------------------------------------- brand */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              width: 76,
              height: 76,
              borderRadius: 22,
              background: 'rgba(255,255,255,0.16)',
              border: '1px solid rgba(255,255,255,0.34)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 42,
              fontWeight: 800,
            }}
          >
            T
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 24 }}>
            <div style={{ fontSize: 34, fontWeight: 800, letterSpacing: -0.5 }}>Techcadd</div>
            <div style={{ fontSize: 22, opacity: 0.82 }}>Computer Education · Phagwara</div>
          </div>
        </div>

        {/* ------------------------------------------------------ headline */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: -2,
              maxWidth: 900,
            }}
          >
            Learn the skills AI can’t replace
          </div>
          <div style={{ fontSize: 30, opacity: 0.86, marginTop: 22, maxWidth: 820 }}>
            AI · Data Science · Full Stack · Digital Marketing — with live labs, real projects and
            placement assistance.
          </div>
        </div>

        {/* --------------------------------------------------------- stats */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {[
            ['18,500+', 'Students trained'],
            ['96%', 'Placement rate'],
            ['420+', 'Hiring partners'],
            ['4.9 / 5', 'Google rating'],
          ].map(([value, label]) => (
            <div
              key={label}
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginRight: 64,
              }}
            >
              <div style={{ fontSize: 42, fontWeight: 800 }}>{value}</div>
              <div style={{ fontSize: 20, opacity: 0.78, marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
