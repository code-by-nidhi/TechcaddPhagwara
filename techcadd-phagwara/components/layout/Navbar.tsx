'use client'

import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { usePathname, useRouter } from 'next/navigation'
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent,
} from 'react'
import Icon from '@/components/ui/Icon'
import Button from '@/components/ui/Button'
import {
  brand as staticBrand,
  navLinks as staticNavLinks,
  type Brand,
  type NavDropdownGroup,
  type NavDropdownItem,
  type NavLink,
} from '@/data/site'
import {
  courseCatalog as staticCourseCatalog,
  type CourseMenuCategory,
} from '@/data/coursePages'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { isHashLink, scrollToSection } from '@/lib/scroll'


/*
 * The modal has no meaningful server-rendered output (it's closed on first
 * paint) and touches `document.body` via a portal, so it is both `ssr:false`
 * and never even requested until the CTA is actually clicked once — see
 * `demoMounted` below.
 */
const BookDemoModal = dynamic(() => import('./BookDemoModal'), { ssr: false })

/** True for a trigger that opens a panel rather than going anywhere. */
const isTrigger = (href: string) => href === '#'

/** True for a branch site or any other absolute URL. */
const isExternal = (href: string) => /^https?:/.test(href)

/** Every item that owns a panel — the Courses mega menu or a short list. */
const hasPanel = (link: NavLink) => Boolean(link.mega || link.items || link.groups)

/** One shape for the drawer's nested accordion, whatever the source. */
interface AccordionGroup {
  key: string
  title: string
  items: { key: string; label: string; href: string }[]
}

/** Courses' four columns and a `groups`-bearing link's own groups both
    reduce to the same shape, so the drawer only needs one accordion. */
const accordionGroupsFor = (
  link: NavLink,
  courseCatalog: CourseMenuCategory[],
): AccordionGroup[] | undefined => {
  if (link.mega) {
    return courseCatalog.map((cat) => ({
      key: cat.key,
      title: cat.title,
      items: cat.courses.map((c) => ({ key: c.slug, label: c.label, href: `/${c.slug}` })),
    }))
  }
  if (link.groups) {
    return link.groups.map((g) => ({
      key: g.title,
      title: g.title,
      items: g.items.map((i) => ({ key: i.href, label: i.label, href: i.href })),
    }))
  }
  return undefined
}

export interface NavbarProps {
  /**
   * The bar, built from whatever the CMS knows about the catalogue.
   *
   * Every one of these has a bundled default, so the navbar still renders on
   * its own — which is what the CMS preview frame and any checkout without a
   * configured API rely on.
   */
  navLinks?: NavLink[]
  courseCatalog?: CourseMenuCategory[]
  brand?: Brand
}

export default function Navbar({
  navLinks = staticNavLinks,
  courseCatalog = staticCourseCatalog,
  brand = staticBrand,
}: NavbarProps = {}) {
  /*
    Derived, not module scope.

    This used to be computed once beside the imports, which was fine while the
    bar was a constant. Now that it arrives as a prop it has to be recomputed
    when the bar changes — and it still has to keep a stable identity between
    renders, because `useScrollSpy` re-subscribes its observer whenever this
    array changes. `useMemo` gives both.
  */
  const sectionIds = useMemo<readonly string[]>(
    () => [
      ...new Set(
        navLinks
          .map((l) => l.href)
          .filter((h) => h.startsWith('#') && h.length > 1)
          .map((h) => h.slice(1)),
      ),
    ],
    [navLinks],
  )

  const [stuck, setStuck] = useState(false)
  const [drawer, setDrawer] = useState(false)
  /** Label of the open desktop panel, or null. */
  const [openPanel, setOpenPanel] = useState<string | null>(null)
  /** Label of the expanded drawer sub-list, or null. */
  const [drawerSub, setDrawerSub] = useState<string | null>(null)
  /** Which category is expanded inside the Courses drawer accordion. */
  const [openCategory, setOpenCategory] = useState<string | null>(null)
  /**
   * Panels start unmounted so the first paint stays lean, but they are
   * preloaded in the background right after that paint (see effect below)
   * rather than on first hover — a visitor's pointer takes far longer than
   * that idle window to reach a nav item, so every dropdown — Courses,
   * Internship & Training, After 12th — opens instantly instead of paying
   * a mount cost on its first use.
   */
  const [mountedPanels, setMountedPanels] = useState<ReadonlySet<string>>(new Set())
  /** Whether the demo modal is currently shown. */
  const [demoOpen, setDemoOpen] = useState(false)
  /** Whether it has ever been opened — gates loading the modal's chunk at all. */
  const [demoMounted, setDemoMounted] = useState(false)

  const panelTimer = useRef<number>(0)
  const active = useScrollSpy(sectionIds, 140)
  const pathname = usePathname()
  const router = useRouter()

  /* sticky state ---------------------------------------------------------- */
  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 28)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* lock body scroll while the drawer is open ----------------------------- */
  useEffect(() => {
    document.body.style.overflow = drawer ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [drawer])

  /* escape closes everything ---------------------------------------------- */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      setDrawer(false)
      setOpenPanel(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  /* preload every dropdown/mega-menu panel once the browser is idle ------- */
  useEffect(() => {
    const labels = navLinks.filter(hasPanel).map((link) => link.label)
    const mountAll = () => setMountedPanels(new Set(labels))

    if (typeof window.requestIdleCallback === 'function') {
      const id = window.requestIdleCallback(mountAll, { timeout: 1000 })
      return () => window.cancelIdleCallback(id)
    }
    const id = window.setTimeout(mountAll, 200)
    return () => window.clearTimeout(id)
  }, [navLinks])

  const go = useCallback(
    (event: MouseEvent<HTMLElement>, href: string) => {
      event.preventDefault()
      /* A `#` trigger has no destination — it exists to open its panel. */
      if (isTrigger(href)) return
      setDrawer(false)
      setOpenPanel(null)
      /* A course page (or any other real route) has no `#about`-style
         sections of its own — hand the hash back to the homepage instead
         of silently no-op'ing against a selector that doesn't exist here. */
      if (pathname === '/') scrollToSection(href)
      else router.push(`/${href}`)
    },
    [pathname, router]
  )

  /* small grace period so the pointer can travel into the open panel ------ */
  const holdPanel = (label: string | null) => {
    window.clearTimeout(panelTimer.current)
    if (label) {
      setOpenPanel(label)
      setMountedPanels((prev) => (prev.has(label) ? prev : new Set(prev).add(label)))
    } else {
      panelTimer.current = window.setTimeout(() => setOpenPanel(null), 160)
    }
  }

  const openDemo = () => {
    setDemoMounted(true)
    setDemoOpen(true)
    setDrawer(false)
    setOpenPanel(null)
  }

  return (
    <>
      <header className={`nav ${stuck ? 'is-stuck' : ''}`.trim()}>
        <div className="shell shell--wide">
          <nav className="nav__bar" aria-label="Primary">
            <a className="nav__logo" href="#home" aria-label="Techcadd — home" onClick={(e) => go(e, '#home')}>
              <Image
                src="/images/techcadd-logo-white.png"
                alt={`${brand.name} — ${brand.suffix}`}
                width={899}
                height={242}
                priority
                className="nav__logo-img"
              />
            </a>

            <ul className="nav__links">
              {navLinks.map((link) => {
                const id = link.href.replace('#', '')
                const isActive = active === id && !isTrigger(link.href)
                const panel = hasPanel(link)
                return (
                  <li
                    key={link.label}
                    className={[
                      'nav__item',
                      isActive ? 'is-active' : '',
                      panel && openPanel === link.label ? 'is-open' : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                    onMouseEnter={panel ? () => holdPanel(link.label) : undefined}
                    onMouseLeave={panel ? () => holdPanel(null) : undefined}
                  >
                    <a
                      className={`nav__link ${link.ai ? 'nav__link--ai' : ''}`.trim()}
                      href={link.href}
                      aria-current={isActive ? 'true' : undefined}
                      aria-expanded={panel ? openPanel === link.label : undefined}
                      onClick={(e) => go(e, link.href)}
                      onFocus={panel ? () => holdPanel(link.label) : undefined}
                    >
                      <span>{link.label}</span>
                      {/* the sparkle carries the affordance on the AI capsule,
                          which is why it takes no chevron */}
                      {link.ai && (
                        <i className="nav__ai-mark">
                          <Icon name="sparkles" size={14} />
                        </i>
                      )}
                      {panel && <Icon name="chevronDown" className="nav__caret" size={15} />}
                    </a>

                    {link.mega && mountedPanels.has(link.label) && (
                      <MegaMenu
                        onSelect={() => setOpenPanel(null)}
                        onNavigate={go}
                        onMouseEnter={() => holdPanel(link.label)}
                        onMouseLeave={() => holdPanel(null)}
                        courseCatalog={courseCatalog}
                      />
                    )}
                    {link.groups && mountedPanels.has(link.label) && (
                      <GroupedMegaMenu
                        label={link.label}
                        groups={link.groups}
                        quote={link.label === 'Internship' ? MEGA_QUOTE : undefined}
                        cta={{
                          label:
                            link.label === 'Internship'
                              ? 'See all training formats'
                              : 'Browse After 12th courses',
                          href: link.href,
                        }}
                        onSelect={() => setOpenPanel(null)}
                        onNavigate={go}
                        onMouseEnter={() => holdPanel(link.label)}
                        onMouseLeave={() => holdPanel(null)}
                      />
                    )}
                    {link.items && !link.groups && mountedPanels.has(link.label) && (
                      <NavDropdown
                        label={link.label}
                        items={link.items}
                        onNavigate={go}
                        onSelect={() => setOpenPanel(null)}
                      />
                    )}
                  </li>
                )
              })}
            </ul>

            <div className="nav__actions">
              {/* The number lives in the drawer footer and the site footer —
                  ten labels plus the CTA already use every pixel the bar has,
                  and the chip was the first thing to push them off it. */}
              <Button onClick={openDemo} variant="primary" size="sm">
                Book Demo
              </Button>

              <button
                type="button"
                className="nav__burger"
                onClick={() => setDrawer(true)}
                aria-label="Open navigation menu"
                aria-expanded={drawer}
              >
                <Icon name="menu" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* -------------------------------------------------- mobile drawer */}
      <div
        className={`drawer ${drawer ? 'is-open' : ''}`.trim()}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
        aria-hidden={!drawer}
      >
        <div className="drawer__scrim" onClick={() => setDrawer(false)} />

        <div className="drawer__panel">
          <div className="drawer__head">
            <a className="nav__logo" href="#home" aria-label="Techcadd — home" onClick={(e) => go(e, '#home')}>
              <Image
                src="/images/techcadd-logo-white.png"
                alt={`${brand.name} — ${brand.suffix}`}
                width={899}
                height={242}
                priority
                className="nav__logo-img"
              />
            </a>
            <button
              type="button"
              className="drawer__close"
              onClick={() => setDrawer(false)}
              aria-label="Close menu"
            >
              <Icon name="x" />
            </button>
          </div>

          <nav aria-label="Mobile">
            {navLinks.map((link, i) => {
              const id = link.href.replace('#', '')
              /* Flat (ungrouped) items render via the plain sub-list below;
                 Courses and any `groups`-bearing link get the nested
                 category accordion instead. */
              const sub = link.mega || link.groups ? undefined : link.items
              const groupedAccordion = accordionGroupsFor(link, courseCatalog)
              const isOpenSub = drawerSub === link.label
              const opensAccordion = Boolean(groupedAccordion) || Boolean(sub)

              return (
                <div key={link.label}>
                  <a
                    className={[
                      'drawer__link',
                      active === id && !isTrigger(link.href) ? 'is-active' : '',
                      link.ai ? 'drawer__link--ai' : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                    href={link.href}
                    style={{ '--i': i } as CSSProperties}
                    aria-expanded={opensAccordion ? isOpenSub : undefined}
                    onClick={(e) => {
                      if (opensAccordion) {
                        e.preventDefault()
                        setDrawerSub((v) => (v === link.label ? null : link.label))
                        return
                      }
                      go(e, link.href)
                    }}
                  >
                    <span className="drawer__label">
                      {link.label}
                      {link.ai && (
                        <i className="nav__ai-mark">
                          <Icon name="sparkles" size={14} />
                        </i>
                      )}
                    </span>
                    {opensAccordion && (
                      <Icon
                        name="chevronDown"
                        style={{
                          transform: isOpenSub ? 'rotate(180deg)' : 'none',
                          transition: 'transform .3s',
                        }}
                      />
                    )}
                  </a>

                  {/* Courses, Internship & Training, After 12th: a nested
                      accordion — one row per category, each expanding to
                      its own link list, so a large catalog never has to
                      render as one long flat scroll. */}
                  {groupedAccordion && isOpenSub && (
                    <div className="drawer__sub drawer__sub--categories">
                      {groupedAccordion.map((cat) => {
                        const catOpen = openCategory === cat.key
                        return (
                          <div key={cat.key} className="drawer__category">
                            <button
                              type="button"
                              className="drawer__category-toggle"
                              aria-expanded={catOpen}
                              onClick={() => setOpenCategory((v) => (v === cat.key ? null : cat.key))}
                            >
                              {cat.title}
                              <Icon
                                name="chevronDown"
                                style={{
                                  transform: catOpen ? 'rotate(180deg)' : 'none',
                                  transition: 'transform .3s',
                                }}
                              />
                            </button>

                            {catOpen && (
                              <div className="drawer__sub">
                                {cat.items.map((entry) =>
                                  isHashLink(entry.href) ? (
                                    <a
                                      key={entry.key}
                                      href={entry.href}
                                      onClick={(e) => go(e, entry.href)}
                                      aria-disabled={isTrigger(entry.href) || undefined}
                                    >
                                      {entry.label}
                                    </a>
                                  ) : (
                                    <Link
                                      key={entry.key}
                                      href={entry.href}
                                      onClick={() => {
                                        setDrawer(false)
                                        setDrawerSub(null)
                                        setOpenCategory(null)
                                      }}
                                    >
                                      {entry.label}
                                    </Link>
                                  )
                                )}
                              </div>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  )}

                  {sub && isOpenSub && (
                    <div className="drawer__sub">
                      {sub.map((item) =>
                        isExternal(item.href) ? (
                          <a
                            key={item.label}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.label}
                          </a>
                        ) : (
                          <a
                            key={item.label}
                            href={item.href}
                            onClick={(e) => go(e, item.href)}
                            aria-disabled={isTrigger(item.href) || undefined}
                          >
                            {item.label}
                          </a>
                        )
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </nav>

          <div className="drawer__foot">
            <a className="drawer__contact" href={brand.phoneHref}>
              <Icon name="phone" />
              {brand.phone}
            </a>
            <a className="drawer__contact" href={`mailto:${brand.email}`}>
              <Icon name="mail" />
              {brand.email}
            </a>
            <Button block arrow onClick={openDemo}>
              Book Free Demo
            </Button>
          </div>
        </div>
      </div>

      {demoMounted && (
        <BookDemoModal
          open={demoOpen}
          onClose={() => setDemoOpen(false)}
          catalogTitles={courseCatalog.flatMap((cat) => cat.courses.map((c) => c.title))}
          brand={brand}
        />
      )}
    </>
  )
}

/* --------------------------------------------------------- short dropdown -- */

interface NavDropdownProps {
  label: string
  items?: NavDropdownItem[]
  /** Category-grouped items — a sub-header per group instead of one flat list. */
  groups?: NavDropdownGroup[]
  onNavigate: (event: MouseEvent<HTMLElement>, href: string) => void
  /** A real route (e.g. a program page) just needs the panel closed. */
  onSelect: () => void
}

function NavDropdown({ label, items, groups, onNavigate, onSelect }: NavDropdownProps) {
  /* Ungrouped callers (About Us, Branches, Resources) become one untitled
     group, so the rest of the render only has to know about one shape. */
  const effectiveGroups: NavDropdownGroup[] = groups ?? [{ title: '', items: items ?? [] }]
  const wide = groups !== undefined

  return (
    <div className={`drop ${wide ? 'drop--grouped' : ''}`.trim()} role="menu" aria-label={label}>
      {effectiveGroups.map((group) => (
        <div className="drop__group" key={group.title || 'ungrouped'}>
          {group.title && <h3 className="drop__group-title">{group.title}</h3>}
          {group.items.map((item) =>
            isExternal(item.href) ? (
              <a
                key={item.label}
                className="drop__link"
                href={item.href}
                role="menuitem"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="drop__label">{item.label}</span>
                {item.note && <span className="drop__note">{item.note}</span>}
                <Icon name="arrowUp" className="drop__go" size={14} />
              </a>
            ) : isHashLink(item.href) ? (
              <a
                key={item.label}
                className="drop__link"
                href={item.href}
                role="menuitem"
                aria-disabled={isTrigger(item.href) || undefined}
                onClick={(e) => onNavigate(e, item.href)}
              >
                <span className="drop__label">{item.label}</span>
                {item.note && <span className="drop__note">{item.note}</span>}
                <Icon name="chevronRight" className="drop__go" size={14} />
              </a>
            ) : (
              <Link
                key={item.label}
                className="drop__link"
                href={item.href}
                role="menuitem"
                onClick={onSelect}
              >
                <span className="drop__label">{item.label}</span>
                {item.note && <span className="drop__note">{item.note}</span>}
                <Icon name="chevronRight" className="drop__go" size={14} />
              </Link>
            )
          )}
        </div>
      ))}
    </div>
  )
}

/* ------------------------------------------------------------- mega menu -- */

/** The one footer quote every white mega panel shares (Courses, Internship
    & Training) — kept in one place so it can't drift between them. */
const MEGA_QUOTE = {
  text: 'Everybody should learn to program a computer, because it teaches you how to think.',
  author: 'Steve Jobs',
}

interface MegaMenuProps {
  /** Course links are real routes — every trigger here just needs to close
      the panel afterwards. */
  onSelect: () => void
  /** Same hash-aware navigation the rest of the nav uses, for the footer's
      "Browse all courses" → `#courses`. */
  onNavigate: (event: MouseEvent<HTMLElement>, href: string) => void
  /**
   * The panel is centered on the viewport via `position: fixed` rather than
   * anchored under its trigger, so on screen it usually sits outside the
   * `<li>`'s own box — moving the pointer into it would otherwise read as
   * "left the nav item" and start the close timer. Mirroring the `<li>`'s
   * own hover-hold here keeps it open while the cursor is over the panel.
   */
  onMouseEnter: () => void
  onMouseLeave: () => void
  /** The catalogue the four columns are drawn from — CMS-backed, or bundled. */
  courseCatalog: CourseMenuCategory[]
}

function MegaMenu({
  onSelect,
  onNavigate,
  onMouseEnter,
  onMouseLeave,
  courseCatalog,
}: MegaMenuProps) {
  return (
    <div
      className="mega"
      role="menu"
      aria-label="Courses"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="mega__grid">
        {courseCatalog.map((cat, i) => (
          <div key={cat.key} className="mega__col">
            <div className="mega__col-head">
              <span className="mega__col-num">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mega__col-title">{cat.title}</h3>
            </div>
            {cat.courses.map((course) => (
              <Link
                key={course.slug}
                className="mega__card"
                href={`/${course.slug}`}
                role="menuitem"
                onClick={onSelect}
              >
                <span className="mega__card-icon" aria-hidden="true">
                  <Icon name={course.icon} size={15} />
                </span>
                <span className="mega__card-label">{course.label}</span>
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="mega__foot">
        <blockquote className="mega__quote">
          <p>“{MEGA_QUOTE.text}”</p>
          <cite>— {MEGA_QUOTE.author}</cite>
        </blockquote>

        <a
          className="mega__browse"
          href="#courses"
          onClick={(e) => {
            onNavigate(e, '#courses')
            onSelect()
          }}
        >
          Browse all courses
          <Icon name="arrow" size={16} />
        </a>
      </div>
    </div>
  )
}

/* ---------------------------------------------------- grouped mega menu -- */

interface MegaCta {
  label: string
  href: string
}

interface GroupedMegaMenuProps {
  /** Panel `aria-label` — the triggering link's own label. */
  label: string
  /** Internship & Training and After 12th already carry this exact shape
      for the old compact dropdown (see `data/site.ts`) — reused as-is, just
      rendered into the wider white panel instead. */
  groups: NavDropdownGroup[]
  /** Only Internship & Training carries the shared footer quote; After 12th
      is CTA-only, per the reference design for each. */
  quote?: { text: string; author: string }
  cta: MegaCta
  onSelect: () => void
  onNavigate: (event: MouseEvent<HTMLElement>, href: string) => void
  /** See `MegaMenuProps` above — same fixed-position detachment applies. */
  onMouseEnter: () => void
  onMouseLeave: () => void
}

function GroupedMegaMenu({
  label,
  groups,
  quote,
  cta,
  onSelect,
  onNavigate,
  onMouseEnter,
  onMouseLeave,
}: GroupedMegaMenuProps) {
  return (
    <div
      className="mega mega--fit"
      role="menu"
      aria-label={label}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="mega__grid mega__grid--3">
        {groups.map((group, i) => (
          <div key={group.title} className="mega__col">
            <div className="mega__col-head">
              <span className="mega__col-num">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mega__col-title">{group.title}</h3>
            </div>
            {group.items.map((item) =>
              isExternal(item.href) ? (
                <a
                  key={item.label}
                  className="mega__link"
                  href={item.href}
                  role="menuitem"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </a>
              ) : isHashLink(item.href) ? (
                <a
                  key={item.label}
                  className="mega__link"
                  href={item.href}
                  role="menuitem"
                  aria-disabled={isTrigger(item.href) || undefined}
                  onClick={(e) => {
                    onNavigate(e, item.href)
                    onSelect()
                  }}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  className="mega__link"
                  href={item.href}
                  role="menuitem"
                  onClick={onSelect}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        ))}
      </div>

      <div className="mega__foot">
        {quote ? (
          <blockquote className="mega__quote">
            <p>“{quote.text}”</p>
            <cite>— {quote.author}</cite>
          </blockquote>
        ) : (
          <span />
        )}

        <a
          className="mega__browse"
          href={cta.href}
          onClick={(e) => {
            onNavigate(e, cta.href)
            onSelect()
          }}
        >
          {cta.label}
          <Icon name="arrow" size={16} />
        </a>
      </div>
    </div>
  )
}
