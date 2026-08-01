"use client"

import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { usePathname } from "next/navigation"
import { getPageCtaContext } from "@/lib/cta-context"
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

function LinkCue() {
  return <span className="nav-link-cue" aria-hidden="true"><span /></span>
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
        <span className="nav-chevron" aria-hidden="true" />
      </Link>

      <div className={`dropdown-panel header-dropdown-panel header-dropdown-panel-${menu.id}`}>
        <div className={`header-dropdown-groups header-dropdown-groups-${menu.id}`}>
          {menu.groups.map((group, groupIndex) => (
            <div className="header-dropdown-group" key={`${menu.id}-${groupIndex}`}>
              {group.heading && <span className="header-dropdown-heading">{group.heading}</span>}
              {group.items.map(item => {
                const current = isCurrentLink(pathname, item.href)
                return (
                  <Link
                    className={current ? "is-current" : undefined}
                    aria-current={current ? "page" : undefined}
                    key={`${menu.id}-${item.label}-${item.href}`}
                    href={item.href}
                  >
                    <span>{item.label}</span>
                    <LinkCue />
                  </Link>
                )
              })}
            </div>
          ))}
        </div>

        {menu.featured && (
          <Link
            className={`header-dropdown-featured ${isCurrentLink(pathname, menu.featured.href) ? "is-current" : ""}`}
            aria-current={isCurrentLink(pathname, menu.featured.href) ? "page" : undefined}
            href={menu.featured.href}
          >
            <span>
              <small>Overview</small>
              <strong>{menu.featured.label}</strong>
            </span>
            <LinkCue />
          </Link>
        )}
      </div>
    </div>
  )
}

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [renderMobileNav, setRenderMobileNav] = useState(false)
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null)
  const cta = getPageCtaContext(pathname)

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
      if (current) {
        setOpenMobileSection(null)
        return false
      }
      setOpenMobileSection(activeMenuId ?? "home")
      return true
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
            href={cta.href}
            data-cta="quote"
            data-source-page={`header:${pathname}`}
          >
            {cta.compactLabel}
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
          <b className="menu-button-label">{open ? "Close" : "Menu"}</b>
          <span className="menu-button-icon" aria-hidden="true"><i></i><i></i><i></i></span>
        </button>
      </div>

      {renderMobileNav && <button className={`mobile-nav-backdrop ${open ? "is-visible" : "is-closing"}`} type="button" aria-label="Close navigation" tabIndex={open ? 0 : -1} onClick={closeMobileNavigation} />}

      {renderMobileNav && (
        <nav id="mobile-navigation" className={`mobile-nav mobile-accordion-nav ${open ? "is-visible" : "is-closing"}`} aria-label="Mobile navigation" aria-hidden={!open}>
          <div className="mobile-nav-intro">
            <span>Navigation</span>
            <small>Choose an area, then select the service you need.</small>
          </div>

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
                  <div className="mobile-nav-accordion-inner">
                    {menu.groups.map((group, groupIndex) => (
                      <div className="mobile-nav-subgroup" key={`${menu.id}-mobile-${groupIndex}`}>
                        {group.heading && <span className="mobile-nav-subheading">{group.heading}</span>}
                        {group.items.map(item => {
                          const current = isCurrentLink(pathname, item.href)
                          return (
                            <Link
                              className={current ? "is-current" : undefined}
                              aria-current={current ? "page" : undefined}
                              onClick={closeMobileNavigation}
                              key={`${menu.id}-${item.label}-${item.href}`}
                              href={item.href}
                            >
                              <span>{item.label}</span>
                              <LinkCue />
                            </Link>
                          )
                        })}
                      </div>
                    ))}

                    {menu.featured && (
                      <Link
                        className={`mobile-nav-featured ${isCurrentLink(pathname, menu.featured.href) ? "is-current" : ""}`}
                        aria-current={isCurrentLink(pathname, menu.featured.href) ? "page" : undefined}
                        onClick={closeMobileNavigation}
                        href={menu.featured.href}
                      >
                        <span><small>Overview</small><strong>{menu.featured.label}</strong></span>
                        <LinkCue />
                      </Link>
                    )}
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
              href={cta.href}
              data-cta="quote"
              data-source-page={`mobile-menu:${pathname}`}
            >
              {cta.fullLabel}
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
