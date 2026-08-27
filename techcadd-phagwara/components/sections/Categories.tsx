import Link from 'next/link'
import Icon from '@/components/ui/Icon'
import CategoryArc from './CategoryArc'
import {
  courseCatalog as staticCourseCatalog,
  type CourseMenuCategory,
} from '@/data/coursePages'

/**
 * Server Component — the header (badge, heading, CTA) and the background fx
 * are static HTML. `CategoryArc` is the one client leaf: the 3D ring needs a
 * continuous per-frame rotation and hover-driven "bring to front" easing,
 * neither of which a CSS keyframe animation can do — see that file for how
 * it stays off React's render loop.
 */
export default function Categories({
  courseCatalog = staticCourseCatalog,
}: { courseCatalog?: CourseMenuCategory[] } = {}) {
  return (
    <section className="categories section" id="categories">
      <span className="categories__fx" aria-hidden="true">
        <span className="categories__grid" />
        <span className="categories__glow categories__glow--a" />
        <span className="categories__glow categories__glow--b" />
        <span className="categories__node" style={{ top: '18%', left: '6%' }} />
        <span className="categories__node" style={{ top: '68%', left: '14%' }} />
        <span className="categories__node" style={{ top: '30%', right: '10%' }} />
        <span className="categories__node" style={{ top: '78%', right: '20%' }} />
      </span>

      <div className="shell shell--wide categories__top">
        <div className="categories__intro">
          <span className="categories__badge" data-reveal="up">
            Categories
          </span>

          <h2 className="categories__heading" data-reveal="up" data-reveal-delay="80">
            Crafting careers with
            <br />
            technology
            <br />
            that works for you
          </h2>
        </div>

        <Link href="#courses" className="categories__all" data-reveal="up" data-reveal-delay="120">
          All categories
          <span className="categories__all-arrow">
            <Icon name="arrow" size={16} />
          </span>
        </Link>
      </div>

      <CategoryArc courseCatalog={courseCatalog} />
    </section>
  )
}
