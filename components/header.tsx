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
        <span className="nav-chevron" aria-hidden="true" />
      </Link>
      <div className={`dropdown-panel header-dropdown-panel header-dropdown-panel-${menu.id}`}>
        {menu.featured && (
          <Link className={`header-dropdown-featured ${isCurrentLink(pathname, menu.featured.href) ? "is-current" : ""}`} aria-current={isCurrentLink(pathname, menu.featured.href) ? "page" : undefined} href={menu.featured.href}>
            <span>{menu.featured.label}</span>
            <span aria-hidden="true">→</span>
          </Link>
        )}
        <div className={`header-dropdown-groups header-dropdown-groups-${menu.id}`}>
          {menu.groups.map((group, groupIndex) => (
            <div className="header-dropdown-group" key={`${menu.id}-${groupIndex}`}>
              {group.heading && <span className="header-dropdown-heading">{group.heading}</span>}
              {group.items.map(item => (
                <Link className={isCurrentLink(pathname, item.href) ? "is-current" : undefined} aria-current={isCurrentLink(pathname, item.href) ? "page" : undefined} key={`${menu.id}-${item.label}-${item.href}`} href={item.href}>{item.label}<span aria-hidden="true">→</span></Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
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
    <header className="site-header">
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
          <Link className="button button-light button-small header-quote-button" href="/get-quote#quote-form">Get a Quote</Link>
        </div>

        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation"
          aria-controls="mobile-navigation"
          aria-expanded={open}
          onClick={toggleMobileNavigation}
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      {open && (
        <nav id="mobile-navigation" className="mobile-nav mobile-accordion-nav" aria-label="Mobile navigation">
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
                    {menu.featured && (
                      <Link className={`mobile-nav-featured ${isCurrentLink(pathname, menu.featured.href) ? "is-current" : ""}`} aria-current={isCurrentLink(pathname, menu.featured.href) ? "page" : undefined} onClick={closeMobileNavigation} href={menu.featured.href}>
                        <span>{menu.featured.label}</span><span aria-hidden="true">→</span>
                      </Link>
                    )}
                    {menu.groups.map((group, groupIndex) => (
                      <div className="mobile-nav-subgroup" key={`${menu.id}-mobile-${groupIndex}`}>
                        {group.heading && <span className="mobile-nav-subheading">{group.heading}</span>}
                        {group.items.map(item => (
                          <Link className={isCurrentLink(pathname, item.href) ? "is-current" : undefined} aria-current={isCurrentLink(pathname, item.href) ? "page" : undefined} onClick={closeMobileNavigation} key={`${menu.id}-${item.label}-${item.href}`} href={item.href}>
                            <span>{item.label}</span><span aria-hidden="true">→</span>
                          </Link>
                        ))}
                      </div>
                    ))}
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
            <Link onClick={closeMobileNavigation} className="button button-light" href="/get-quote#quote-form">Get a Quote</Link>
          </div>
        </nav>
      )}
    </header>
  )
}
