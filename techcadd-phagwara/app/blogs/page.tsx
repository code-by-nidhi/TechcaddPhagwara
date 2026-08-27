import type { Metadata } from 'next'
import Link from 'next/link'

import Icon from '@/components/ui/Icon'
import SectionHeading from '@/components/ui/SectionHeading'
import { mediaUrl } from '@/lib/cms/client'
import { getBlogs } from '@/lib/cms/content'
import { formatDate, hueFor, isoDate, plainText } from '@/lib/cms/format'
import { SITE_URL } from '@/lib/site-config'

/**
 * The blog index.
 *
 * The CMS has had a Blogs module since its first migration, and its own map
 * said posts appear at "/blogs, and a page of its own". Neither route existed
 * on this site, so a post an editor wrote and published was readable at no
 * address at all.
 *
 * Deliberately quiet when there is nothing to show. An index that renders a
 * heading and an empty grid looks broken; one that says so does not, and this
 * is a new section that will be empty until somebody writes the first post.
 */

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Guides, career advice and industry notes from the trainers at Techcadd Phagwara — on AI, data, development, design and getting placed.',
  alternates: { canonical: '/blogs' },
  openGraph: { title: 'Blog', url: `${SITE_URL}/blogs`, type: 'website' },
}

export default async function BlogIndexPage() {
  const posts = await getBlogs(100)

  return (
    <main id="main">
      <section className="section course-hero">
        <div className="shell">
          <nav className="course-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <Icon name="chevronRight" size={12} />
            <span aria-current="page">Blog</span>
          </nav>

          <SectionHeading
            eyebrow="From the campus"
            eyebrowIcon="edit"
            title="Notes from"
            highlight="our trainers"
            lead="Guides, career advice and what we are seeing in hiring — written by the people teaching the courses."
            reveal={false}
          />
        </div>
      </section>

      <section className="section section--tint">
        <div className="shell">
          {!posts || posts.length === 0 ? (
            <p className="editorial__empty">
              No posts yet. Our trainers are writing the first ones — in the meantime, the{' '}
              <Link href="/#faq">FAQs</Link> answer the questions students ask most, and a
              counsellor will happily talk anything else through.
            </p>
          ) : (
            <div className="editorial__grid">
              {posts.map((post) => {
                const cover = mediaUrl(post.coverImage?.url)
                const published = formatDate(post.publishDate ?? post.createdAt)

                return (
                  <Link key={post.id} href={`/blogs/${post.slug}`} className="ecard">
                    <div className="ecard__media">
                      {cover ? (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img src={cover} alt={post.coverImage?.alt ?? ''} loading="lazy" />
                      ) : (
                        /* The same generated stand-in the gallery uses when
                           there is no photograph — see showcase.css. */
                        <span
                          className="ecard__art"
                          style={{ '--hue': hueFor(post.slug) }}
                          aria-hidden="true"
                        />
                      )}
                    </div>

                    <div className="ecard__body">
                      <div className="ecard__meta">
                        {published && (
                          <>
                            <i>
                              <Icon name="clock" size={12} />
                            </i>
                            <time dateTime={isoDate(post.publishDate ?? post.createdAt)}>
                              {published}
                            </time>
                          </>
                        )}
                        {post.tags?.[0] && <span>{post.tags[0]}</span>}
                      </div>

                      <h2 className="ecard__title">{post.title}</h2>
                      <p className="ecard__excerpt">{plainText(post.excerpt, 150)}</p>

                      <span className="ecard__more">
                        Read the post
                        <Icon name="arrow" size={14} />
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
