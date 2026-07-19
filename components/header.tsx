"use client"

import Link from "next/link"
import { useState } from "react"

const solutions = [
  ["Intruder Alarms", "/systems/intrusion-alarms"],
  ["CCTV Systems", "/systems/cctv"],
  ["Fire Alarm Systems", "/systems/fire-safety"],
  ["Emergency Lighting", "/systems/emergency-lighting"],
  ["Fire Risk Assessments", "/systems/fire-risk-assessment"]
]

const plans = [
  ["Alarm Maintenance", "/service-plans/alarm-maintenance"],
  ["Alarm Monitoring", "/service-plans/alarm-monitoring"],
  ["CCTV Maintenance", "/service-plans/cctv-maintenance"],
  ["Fire Alarm Servicing", "/service-plans/fire-alarm-servicing"],
  ["Emergency Lighting Servicing", "/service-plans/emergency-lighting-servicing"],
  ["Total Security Package", "/service-plans/total-security"],
  ["Fire Compliance", "/service-plans/fire-compliance"]
]

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
          <div className="nav-dropdown">
            <Link href="/systems">Solutions</Link>
            <div className="dropdown-panel">{solutions.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>
          </div>
          <div className="nav-dropdown">
            <Link href="/service-plans">Service Plans</Link>
            <div className="dropdown-panel">{plans.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>
          </div>
          <Link href="/commercial">Commercial</Link>
          <Link href="/areas-we-serve">Areas</Link>
          <Link href="/about-us">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="header-actions">
          <Link className="button button-outline button-small" href="/get-quote">Request a Free Quote</Link>
          <Link className="button button-light button-small" href="/book-security-survey">Book a Free Survey</Link>
        </div>
        <button className="menu-button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span></span><span></span><span></span>
        </button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <Link onClick={() => setOpen(false)} href="/">Home</Link>
          <Link onClick={() => setOpen(false)} href="/systems">All Solutions</Link>
          {solutions.map(([label, href]) => <Link onClick={() => setOpen(false)} key={href} href={href}>{label}</Link>)}
          <Link onClick={() => setOpen(false)} href="/service-plans">Service Plans</Link>
          <Link onClick={() => setOpen(false)} href="/commercial">Commercial</Link>
          <Link onClick={() => setOpen(false)} href="/areas-we-serve">Areas We Cover</Link>
          <Link onClick={() => setOpen(false)} href="/case-studies">Case Studies</Link>
          <Link onClick={() => setOpen(false)} href="/reviews">Reviews</Link>
          <Link onClick={() => setOpen(false)} href="/about-us">About Us</Link>
          <Link onClick={() => setOpen(false)} href="/contact">Contact</Link>
          <div className="mobile-nav-actions">
            <Link onClick={() => setOpen(false)} className="button button-outline" href="/get-quote">Request a Free Quote</Link>
            <Link onClick={() => setOpen(false)} className="button button-light" href="/book-security-survey">Book a Free Survey</Link>
          </div>
        </nav>
      )}
    </header>
  )
}
