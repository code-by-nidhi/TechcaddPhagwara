import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,

  /* Swiper 11 ships untranspiled modern ESM; letting Next compile it avoids the
     "Unexpected token 'export'" failures that otherwise show up in production. */
  transpilePackages: ['swiper'],

  images: {
    /* AVIF first, WebP fallback — both far smaller than JPEG/PNG. */
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 420, 640, 750, 828, 1080, 1200, 1440, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    /* Add remote hosts here if campus photos are ever served from a CDN/CMS. */
    remotePatterns: [],
  },

  /* Tree-shake the icon barrels so only the glyphs actually referenced ship. */
  experimental: {
    optimizePackageImports: ['react-icons', 'react-icons/fi', 'react-icons/fa6'],
  },

  poweredByHeader: false,
  compress: true,

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
        ],
      },
      /* `/_next/static/*` (JS, CSS, next/font's self-hosted font files) is
         already content-hashed and served immutable by Next itself — nothing
         to add here. `/public` files are not hashed, so `next start` doesn't
         cache them nearly as aggressively by default. The two logo PNGs and
         the favicon change rarely enough, and are small enough, that a long
         max-age with revalidation is the right trade — a real edit still
         reaches visitors (browsers revalidate on reload), it just skips the
         re-download on every repeat visit in between. */
      {
        source: '/images/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=604800, must-revalidate' }],
      },
      {
        source: '/favicon.svg',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=604800, must-revalidate' }],
      },
    ]
  },
}

export default nextConfig
