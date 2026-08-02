"use client"

import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { usePathname } from "next/navigation"
import { headerDirectNavItems, headerNavMenus, type HeaderNavMenu } from "@/lib/navigation"

function matchesPrefix(pathname: string, prefix: string) {
  return pathname === prefix || pathname.startsWith(`${prefix}/`)
}

function linkPath(href: string) {
  return href.split("#")[0].split("?")[0] || "/"
}

function isCurrentLink(pathname: string, href: string) {
  if (href.includes("#")) return false
  return pathname === linkPath(href)
}

function DesktopDropdown({ menu, active, pathname }: { menu: HeaderNavMenu; active: boolean; pathname: string }) {
  return (
    <div className={`nav-dropdown header-nav-dropdown header-nav-dropdown-${menu.id} ${active ? "is-active" : ""}`}>
      <Link
        href={menu.href}
        className="header-nav-trigger"
        aria-current={pathname === menu.href ? "page" : undefined}
      >
        <span>{menu.label}</span>
        <span className="nav-indicator" aria-hidden="true" />
      </Link>

      <div className={`dropdown-panel header-dropdown-panel header-dropdown-panel-${menu.id}`}>
        <div className="mega-menu-intro">
          <span>{menu.label}</span>
          <h2>{menu.heading}</h2>
          <p>{menu.intro}</p>
          <Link className="mega-menu-overview" href={menu.href}>{menu.overviewLabel}</Link>
        </div>

        <div className="mega-menu-routes">
          {menu.routes.map(item => {
            const current = isCurrentLink(pathname, item.href)
            return (
              <Link
                className={`mega-menu-route ${current ? "is-current" : ""}`}
                aria-current={current ? "page" : undefined}
                key={`${menu.id}-${item.label}`}
                href={item.href}
              >
                <strong>{item.label}</strong>
                <span>{item.description}</span>
              </Link>
            )
          })}
        </div>

        <aside className="mega-menu-aside">
          <Link className="mega-menu-visual" href={menu.routes[0].href}>
            <img src={menu.image} alt={menu.imageAlt}/>
            <span>{menu.imageLabel}</span>
          </Link>
          <div className="mega-menu-secondary" aria-label={`${menu.label} related services`}>
            {menu.secondary.map(item => <Link key={`${menu.id}-${item.label}`} href={item.href}>{item.label}</Link>)}
          </div>
          <Link className="button button-light mega-menu-cta" href={menu.cta.href} data-cta="quote" data-source-page={`navigation:${menu.id}`}>{menu.cta.label}</Link>
        </aside>
      </div>
    </div>
  )
}

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [renderMobileNav, setRenderMobileNav] = useState(false)
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null)

  const activeMenuId = useMemo(() => {
    const matches = headerNavMenus.flatMap(menu =>
      menu.activePrefixes
        .filter(prefix => matchesPrefix(pathname, prefix))
        .map(prefix => ({ id: menu.id, length: prefix.length })),
    )
    return matches.sort((a, b) => b.length - a.length)[0]?.id ?? null
  }, [pathname])

  useEffect(() => {
    setOpen(false)
    setOpenMobileSection(null)
  }, [pathname])

  useEffect(() => {
    if (open) {
      setRenderMobileNav(true)
      return
    }
    const timeout = window.setTimeout(() => setRenderMobileNav(false), 340)
    return () => window.clearTimeout(timeout)
  }, [open])

  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    document.body.classList.add("mobile-navigation-open")
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false)
        setOpenMobileSection(null)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.body.classList.remove("mobile-navigation-open")
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [open])

  const closeMobileNavigation = () => {
    setOpen(false)
    setOpenMobileSection(null)
  }

  const toggleMobileNavigation = () => {
    setOpen(current => {
      if (current) setOpenMobileSection(null)
      return !current
    })
  }

  const toggleMobileSection = (id: string) => {
    setOpenMobileSection(current => current === id ? null : id)
  }

  return (
    <header className={`site-header ${open ? "mobile-menu-is-open" : ""}`}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="NOX Fire & Security home">
          <img src="/images/nox-logo-light.jpeg" alt="NOX Fire & Security" width="275" height="110" />
        </Link>

        <nav className="desktop-nav header-primary-nav" aria-label="Main navigation">
          {headerNavMenus.map(menu => <DesktopDropdown key={menu.id} menu={menu} active={activeMenuId === menu.id} pathname={pathname} />)}
          {headerDirectNavItems.map(item => {
            const active = matchesPrefix(pathname, item.href)
            return <Link className={active ? "is-active" : undefined} aria-current={active ? "page" : undefined} key={item.href} href={item.href}>{item.label}</Link>
          })}
        </nav>

        <div className="header-actions">
          <Link
            className="button button-light button-small header-quote-button"
            href="/get-quote#quote-form"
            data-cta="quote"
            data-source-page={`header:${pathname}`}
          >
            Book a Site Survey
          </Link>
        </div>

        <button
          className={`menu-button ${open ? "is-open" : ""}`}
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-controls="mobile-navigation"
          aria-expanded={open}
          onClick={toggleMobileNavigation}
        >
          <span className="menu-button-icon" aria-hidden="true"><i></i><i></i><i></i></span>
        </button>
      </div>

      {renderMobileNav && <button className={`mobile-nav-backdrop ${open ? "is-visible" : "is-closing"}`} type="button" aria-label="Close navigation" tabIndex={open ? 0 : -1} onClick={closeMobileNavigation} />}

      {renderMobileNav && (
        <nav id="mobile-navigation" className={`mobile-nav mobile-accordion-nav ${open ? "is-visible" : "is-closing"}`} aria-label="Mobile navigation" aria-hidden={!open}>
          {headerNavMenus.map(menu => {
            const isOpen = openMobileSection === menu.id
            const isActive = activeMenuId === menu.id
            const panelId = `mobile-${menu.id}-panel`
            return (
              <div className={`mobile-nav-accordion ${isOpen ? "is-open" : ""} ${isActive ? "is-active" : ""}`} key={menu.id}>
                <button
                  type="button"
                  className="mobile-nav-accordion-trigger"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleMobileSection(menu.id)}
                >
                  <span>{menu.label}</span>
                  <span className="mobile-nav-chevron" aria-hidden="true" />
                </button>
                <div id={panelId} className="mobile-nav-accordion-panel">
                  <div className="mobile-nav-accordion-inner mobile-mega-menu">
                    <div className="mobile-mega-intro">
                      <h2>{menu.heading}</h2>
                      <p>{menu.intro}</p>
                    </div>
                    <div className="mobile-mega-visual"><img src={menu.image} alt={menu.imageAlt}/><span>{menu.imageLabel}</span></div>
                    <div className="mobile-mega-routes">
                      {menu.routes.map(item => {
                        const current = isCurrentLink(pathname, item.href)
                        return (
                          <Link
                            className={current ? "is-current" : undefined}
                            aria-current={current ? "page" : undefined}
                            onClick={closeMobileNavigation}
                            key={`${menu.id}-${item.label}`}
                            href={item.href}
                          >
                            <strong>{item.label}</strong>
                            <span>{item.description}</span>
                          </Link>
                        )
                      })}
                    </div>
                    <div className="mobile-mega-secondary">
                      {menu.secondary.map(item => <Link onClick={closeMobileNavigation} key={`${menu.id}-secondary-${item.label}`} href={item.href}>{item.label}</Link>)}
                    </div>
                    <div className="mobile-mega-actions">
                      <Link onClick={closeMobileNavigation} className="mobile-mega-overview" href={menu.href}>{menu.overviewLabel}</Link>
                      <Link onClick={closeMobileNavigation} className="button button-light" href={menu.cta.href} data-cta="quote" data-source-page={`mobile-navigation:${menu.id}`}>{menu.cta.label}</Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}

          <div className="mobile-nav-direct-links">
            {headerDirectNavItems.map(item => {
              const active = matchesPrefix(pathname, item.href)
              return <Link className={active ? "is-active" : undefined} aria-current={active ? "page" : undefined} onClick={closeMobileNavigation} key={item.href} href={item.href}>{item.label}</Link>
            })}
          </div>

          <div className="mobile-nav-actions">
            <Link
              onClick={closeMobileNavigation}
              className="button button-light"
              href="/get-quote#quote-form"
              data-cta="quote"
              data-source-page={`mobile-menu:${pathname}`}
            >
              Book a Site Survey
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
