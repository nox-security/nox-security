"use client"

import Link from "next/link"
import { useState } from "react"
import { companyNavItems, servicePlanNavGroups, systemNavGroups } from "@/lib/navigation"

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="NOX Fire & Security home">
          <img src="/images/nox-logo-light.jpeg" alt="NOX Fire & Security" width="275" height="110" />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <div className="nav-dropdown nav-dropdown-wide">
            <Link href="/systems">Systems</Link>
            <div className="dropdown-panel solutions-dropdown grouped-solutions-dropdown concise-dropdown">
              {systemNavGroups.map((group, groupIndex) => (
                <div className="solution-menu-group" key={`systems-${groupIndex}`}>
                  {group.heading && <span className="solution-menu-heading">{group.heading}</span>}
                  {group.items.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}
                </div>
              ))}
              <div className="solution-menu-footer"><Link href="/systems"><strong>View all systems</strong></Link></div>
            </div>
          </div>
          <div className="nav-dropdown nav-dropdown-plans">
            <Link href="/service-plans">Service Plans</Link>
            <div className="dropdown-panel plan-menu-panel concise-dropdown">
              {servicePlanNavGroups.map((group, groupIndex) => (
                <div className="solution-menu-group" key={`plans-${groupIndex}`}>
                  {group.heading && <span className="solution-menu-heading">{group.heading}</span>}
                  {group.items.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}
                </div>
              ))}
              <div className="solution-menu-footer"><Link href="/service-plans"><strong>View all service plans</strong></Link></div>
            </div>
          </div>
          {companyNavItems.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <div className="header-actions">
          <Link className="button button-light button-small" href="/get-quote#quote-form">Request Free Survey</Link>
        </div>
        <button className="menu-button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span></span><span></span><span></span>
        </button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <Link onClick={() => setOpen(false)} href="/">Home</Link>
          {systemNavGroups.map((group, groupIndex) => <div className="mobile-nav-group" key={`mobile-systems-${groupIndex}`}>
            {group.heading && <span className="mobile-nav-heading">{group.heading}</span>}
            {group.items.map(item => <Link onClick={() => setOpen(false)} key={item.href} href={item.href}>{item.label}</Link>)}
          </div>)}
          {servicePlanNavGroups.map((group, groupIndex) => <div className="mobile-nav-group" key={`mobile-plans-${groupIndex}`}>
            {group.heading && <span className="mobile-nav-heading">{group.heading}</span>}
            {group.items.map(item => <Link onClick={() => setOpen(false)} key={item.href} href={item.href}>{item.label}</Link>)}
          </div>)}
          {companyNavItems.map(item => <Link onClick={() => setOpen(false)} key={item.href} href={item.href}>{item.label}</Link>)}
          <Link onClick={() => setOpen(false)} href="/reviews">Customer Reviews</Link>
          <div className="mobile-nav-actions">
            <Link onClick={() => setOpen(false)} className="button button-light" href="/get-quote#quote-form">Request Free Survey</Link>
          </div>
        </nav>
      )}
    </header>
  )
}
