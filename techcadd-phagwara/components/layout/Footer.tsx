import Icon from '@/components/ui/Icon'
import SmartLink from '@/components/ui/SmartLink'
import NewsletterForm from './NewsletterForm'
import { brand, branches, footerLinks, socials } from '@/data/site'

/**
 * Server Component. Only <NewsletterForm /> is interactive, so the rest of
 * the footer costs zero client JavaScript.
 */
export default function Footer() {
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
            <SmartLink className="nav__logo" href="#home">
              <span className="nav__mark">T</span>
              <span className="nav__name">
                <b>{brand.name}</b>
                <span>{brand.suffix}</span>
              </span>
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
