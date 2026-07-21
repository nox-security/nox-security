"use client"

import Link from "next/link"
import { useState } from "react"
import { headerDirectNavItems, headerNavMenus, type HeaderNavMenu } from "@/lib/navigation"

function DesktopDropdown({ menu }: { menu: HeaderNavMenu }) {
  return (
    <div className={`nav-dropdown header-nav-dropdown header-nav-dropdown-${menu.id}`}>
      <Link href={menu.href} className="header-nav-trigger">
        <span>{menu.label}</span>
        <span className="nav-chevron" aria-hidden="true" />
      </Link>
      <div className={`dropdown-panel header-dropdown-panel header-dropdown-panel-${menu.id}`}>
        {menu.featured && (
          <Link className="header-dropdown-featured" href={menu.featured.href}>
            <span>{menu.featured.label}</span>
            <span aria-hidden="true">→</span>
          </Link>
        )}
        <div className={`header-dropdown-groups header-dropdown-groups-${menu.id}`}>
          {menu.groups.map((group, groupIndex) => (
            <div className="header-dropdown-group" key={`${menu.id}-${groupIndex}`}>
              {group.heading && <span className="header-dropdown-heading">{group.heading}</span>}
              {group.items.map(item => (
                <Link key={`${menu.id}-${item.label}-${item.href}`} href={item.href}>{item.label}</Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null)

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
          {headerNavMenus.map(menu => <DesktopDropdown key={menu.id} menu={menu} />)}
          {headerDirectNavItems.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>

        <div className="header-actions">
          <Link className="button button-light button-small" href="/get-quote#quote-form">Get a Quote</Link>
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
            const panelId = `mobile-${menu.id}-panel`
            return (
              <div className={`mobile-nav-accordion ${isOpen ? "is-open" : ""}`} key={menu.id}>
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
                      <Link className="mobile-nav-featured" onClick={closeMobileNavigation} href={menu.featured.href}>
                        {menu.featured.label}
                      </Link>
                    )}
                    {menu.groups.map((group, groupIndex) => (
                      <div className="mobile-nav-subgroup" key={`${menu.id}-mobile-${groupIndex}`}>
                        {group.heading && <span className="mobile-nav-subheading">{group.heading}</span>}
                        {group.items.map(item => (
                          <Link onClick={closeMobileNavigation} key={`${menu.id}-${item.label}-${item.href}`} href={item.href}>
                            {item.label}
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
            {headerDirectNavItems.map(item => (
              <Link onClick={closeMobileNavigation} key={item.href} href={item.href}>{item.label}</Link>
            ))}
          </div>

          <div className="mobile-nav-actions">
            <Link onClick={closeMobileNavigation} className="button button-light" href="/get-quote#quote-form">Get a Quote</Link>
          </div>
        </nav>
      )}
    </header>
  )
}
