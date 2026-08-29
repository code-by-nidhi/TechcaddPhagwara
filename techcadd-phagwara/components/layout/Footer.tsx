import Image from 'next/image'
import Icon from '@/components/ui/Icon'
import SmartLink from '@/components/ui/SmartLink'
import NewsletterForm from './NewsletterForm'
import {
  brand as staticBrand,
  branches,
  footerLinks,
  socials as staticSocials,
  type Brand,
  type Social,
} from '@/data/site'
import type { CmsNavPage } from '@/lib/cms/types'

/**
 * Server Component. Only <NewsletterForm /> is interactive, so the rest of
 * the footer costs zero client JavaScript.
 *
 * Content arrives as props with bundled defaults, so the footer renders on its
 * own wherever it is used without a CMS behind it — see the note on Navbar.
 */
export interface FooterProps {
  brand?: Brand
  socials?: Social[]
  /** Pages written in the CMS and marked for the footer. */
  navPages?: CmsNavPage[]
}

export default function Footer({
  brand = staticBrand,
  socials = staticSocials,
  navPages = [],
}: FooterProps = {}) {
  return (
    <footer className="footer">
      <div className="shell">
        {/* ------------------------------------------------- newsletter */}
        <div className="newsletter" data-reveal="scale">
          <div>
            <h2>Get the batch calendar &amp; free AI toolkit</h2>
            <p>
              One email a month: upcoming batches, scholarship windows and a curated AI tool stack
              for students. No spam, unsubscribe anytime.
            </p>
          </div>

          <NewsletterForm />
        </div>

        {/* ----------------------------------------------------- columns */}
        <div className="footer__grid">
          <div className="footer__brand" data-reveal="up">
            {/* The navy lockup rather than the navbar's white one: the footer
                gradient ends near-white, so the reversed mark would disappear
                into it. Not `priority` — this sits below every fold there is. */}
            <SmartLink className="footer__logo" href="#home" aria-label={`${brand.name} — home`}>
              <Image
                src="/images/techcadd-logo-navy.png"
                alt={`${brand.name} — ${brand.suffix}`}
                width={899}
                height={242}
                className="footer__logo-img"
              />
            </SmartLink>

            <p>
              {brand.tagline} — training students in AI, data and development since 2009, with a
              placement cell that stays with you until you sign an offer.
            </p>

            <div className="footer__socials">
              {socials.map((social, i) => (
                <a
                  key={social.key}
                  className="social"
                  href={social.href}
                  style={{ '--i': i }}
                  aria-label={social.name}
                  /*
                    A social profile is somewhere else. These used to be `#`
                    placeholders where the attributes did not matter; now that
                    the CMS can put a real address here, they do.
                  */
                  {...(/^https?:/.test(social.href)
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  <Icon name={social.key} />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((col, i) => (
            <div
              className="footer__col"
              key={col.title}
              data-reveal="up"
              data-reveal-delay={(i + 1) * 90}
            >
              <h3>{col.title}</h3>
              <ul>
                {col.links.map((link) => (
                  <li key={link}>
                    <SmartLink href="#courses">{link}</SmartLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/*
            Pages an editor wrote and asked to be linked from the footer.

            Its own column rather than folded into one of the four above: those
            are hand-written groupings with hand-written headings, and dropping
            a privacy policy into "Popular Courses" would be worse than giving
            it a heading of its own. The column simply does not exist until an
            editor sets a page's placement to Footer.
          */}
          {navPages.length > 0 && (
            <div
              className="footer__col"
              data-reveal="up"
              data-reveal-delay={(footerLinks.length + 1) * 90}
            >
              <h3>More</h3>
              <ul>
                {navPages.map((page) => (
                  <li key={page.slug}>
                    <SmartLink href={`/${page.slug}`}>{page.label}</SmartLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* ---------------------------------------------------- branches */}
        <div className="footer__branches">
          <h3>Our branches</h3>
          {branches.map((city) => (
            <SmartLink className="branch" href="#contact" key={city}>
              <Icon name="mapPin" size={13} />
              {city}
            </SmartLink>
          ))}
        </div>

        <div className="footer__divider" aria-hidden="true" />

        <div className="footer__base">
          <p>
            © {new Date().getFullYear()} {brand.name} {brand.tagline}, {brand.suffix}. All rights
            reserved.
          </p>
          <nav aria-label="Legal">
            <SmartLink href="#faq">Privacy Policy</SmartLink>
            <SmartLink href="#faq">Terms of Service</SmartLink>
            <SmartLink href="#faq">Refund Policy</SmartLink>
            <SmartLink href="#contact">Sitemap</SmartLink>
          </nav>
        </div>
      </div>
    </footer>
  )
}
