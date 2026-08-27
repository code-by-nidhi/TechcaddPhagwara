import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import Icon from '@/components/ui/Icon'
import SectionHeading from '@/components/ui/SectionHeading'
import BlogComments from '@/components/blog/BlogComments'
import { mediaUrl } from '@/lib/cms/client'
import { getBlog, getBlogSlugs, getBrand } from '@/lib/cms/content'
import { formatDate, isoDate, plainText } from '@/lib/cms/format'
import { sanitizeHtml } from '@/lib/sanitize-html'
import { SITE_URL } from '@/lib/site-config'

/**
 * One blog post.
 *
 * The body is authored in the CMS's rich-text editor and stored as HTML, so it
 * goes through `sanitizeHtml` before it reaches the DOM — see the note on that
 * module for why the CMS being behind a login is not sufficient on its own.
 */

interface PageProps {
  params: Promise<{ slug: string }>
}

/**
 * Prerendered from whatever the CMS has at build time; anything published
 * afterwards renders on demand and is cached from then on.
 *
 * Unlike the course routes there is no bundled fallback list to fall back to —
 * blog posts have only ever existed in the CMS — so an unreachable API here
 * means nothing is prerendered rather than something wrong being prerendered.
 */
export async function generateStaticParams() {
  const posts = await getBlogSlugs()
  return (posts ?? []).map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlog(slug)
  if (!post) return {}

  const description =
    post.seo?.metaDescription?.trim() || plainText(post.excerpt || post.body, 160)
  const cover = mediaUrl(post.seo?.ogImage?.url ?? post.coverImage?.url)

  return {
    title: post.seo?.metaTitle?.trim() || post.title,
    description,
    alternates: { canonical: post.seo?.canonicalUrl?.trim() || `/blogs/${post.slug}` },
    ...(post.seo?.keywords?.length ? { keywords: post.seo.keywords } : {}),
    ...(post.seo?.robotsIndex === false ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      type: 'article',
      title: post.seo?.ogTitle?.trim() || post.title,
      description: post.seo?.ogDescription?.trim() || description,
      url: `${SITE_URL}/blogs/${post.slug}`,
      ...(post.publishDate ? { publishedTime: post.publishDate } : {}),
      ...(cover ? { images: [{ url: cover }] } : {}),
    },
    twitter: { card: 'summary_large_image', title: post.title, description },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const [post, brand] = await Promise.all([getBlog(slug), getBrand()])
  if (!post) notFound()

  const cover = mediaUrl(post.coverImage?.url)
  const published = formatDate(post.publishDate ?? post.createdAt)
  const body = sanitizeHtml(post.body)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: plainText(post.excerpt || post.body, 200),
    ...(cover ? { image: cover } : {}),
    ...(post.publishDate ? { datePublished: post.publishDate } : {}),
    ...(post.updatedAt ? { dateModified: post.updatedAt } : {}),
    mainEntityOfPage: `${SITE_URL}/blogs/${post.slug}`,
    publisher: {
      '@type': 'EducationalOrganization',
      name: `${brand.name} ${brand.suffix}`,
      sameAs: SITE_URL,
    },
  }

  return (
    <main id="main">
      <section className="section course-hero">
        <div className="shell">
          <nav className="course-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <Icon name="chevronRight" size={12} />
            <Link href="/blogs">Blog</Link>
            <Icon name="chevronRight" size={12} />
            <span aria-current="page">{post.title}</span>
          </nav>

          <SectionHeading title={post.title} lead={plainText(post.excerpt, 220)} reveal={false} />

          <div className="epost__meta">
            {published && (
              <span>
                <time dateTime={isoDate(post.publishDate ?? post.createdAt)}>{published}</time>
              </span>
            )}
            {post.tags?.length > 0 && <span>{post.tags.join(' · ')}</span>}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="shell">
          {cover && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              className="epost__cover"
              src={cover}
              alt={post.coverImage?.alt ?? post.title}
              width={post.coverImage?.width}
              height={post.coverImage?.height}
            />
          )}

          <div className="course-prose" dangerouslySetInnerHTML={{ __html: body }} />

          {post.tags?.length > 0 && (
            <ul className="etags" style={{ marginTop: '2rem', marginBottom: 0 }}>
              {post.tags.map((tag) => (
                <li key={tag}>
                  <span>{tag}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/*
        Comments are a client island: the thread is read from the CMS in the
        browser and posted straight back to it. Deliberately not fetched on the
        server — a moderated thread changes independently of the post, and
        caching it alongside the post would show a stale one for an hour.
      */}
      <section className="section">
        <div className="shell">
          <h2 className="course-highlights__title">Comments</h2>
          <BlogComments slug={post.slug} />
        </div>
      </section>

      {/* JSON-LD is inert data, not executable script — safe to inline. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  )
}
