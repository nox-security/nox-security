"use client"

import Link from "next/link"
import { useState } from "react"

const residential = [
  ["Residential Overview", "/residential", "Premium alarms, CCTV and external protection for homes"],
  ["Ajax Intruder Alarms", "/systems/intrusion-alarms", "MotionCam, app control, keypads and sirens"],
  ["Perimeter Protection", "/systems/perimeter-protection", "Curtain and outdoor detection around approaches"],
  ["Residential CCTV", "/systems/cctv", "Ajax, Hikvision ColourVu and professional recording"]
]

const commercial = [
  ["Commercial Overview", "/commercial", "Joined-up Fire & Security for operational premises"],
  ["Commercial Fire Systems", "/commercial/fire-compliance", "Installation, servicing and compliance packages"],
  ["Commercial CCTV", "/commercial/cctv", "Cameras, NVR, remote viewing and larger sites"],
  ["Commercial Intruder Alarms", "/commercial/intruder-alarms", "Intruder protection, monitoring and maintenance"]
]

const plans = [
  ["Service Plan Overview", "/service-plans"],
  ["Alarm Maintenance", "/service-plans/alarm-maintenance"],
  ["Alarm Monitoring", "/service-plans/alarm-monitoring"],
  ["CCTV Maintenance", "/service-plans/cctv-maintenance"],
  ["Fire Alarm Servicing", "/service-plans/fire-alarm-servicing"],
  ["Emergency Lighting", "/service-plans/emergency-lighting-servicing"],
  ["Total Security Package", "/service-plans/total-security"],
  ["Fire Compliance Package", "/service-plans/fire-compliance"]
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
          <div className="nav-dropdown nav-dropdown-wide">
            <Link href="/systems">Solutions</Link>
            <div className="dropdown-panel solutions-dropdown grouped-solutions-dropdown">
              <div className="solution-menu-group"><span className="solution-menu-heading">Residential</span>{residential.map(([label, href, detail]) => <Link key={`${label}-${href}`} href={href}><strong>{label}</strong><span>{detail}</span></Link>)}</div>
              <div className="solution-menu-group"><span className="solution-menu-heading">Commercial</span>{commercial.map(([label, href, detail]) => <Link key={`${label}-${href}`} href={href}><strong>{label}</strong><span>{detail}</span></Link>)}</div>
              <div className="solution-menu-footer"><Link href="/service-plans"><strong>Monitoring, maintenance and compliance</strong><span>Continue into the right annual support or service-plan route</span></Link></div>
            </div>
          </div>
          <div className="nav-dropdown">
            <Link href="/service-plans">Service Plans</Link>
            <div className="dropdown-panel">{plans.map(([label, href]) => <Link key={`${label}-${href}`} href={href}>{label}</Link>)}</div>
          </div>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/areas-we-serve">Areas</Link>
          <Link href="/about-us">About</Link>
          <Link href="/contact">Contact</Link>
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
          <span className="mobile-nav-heading">Residential</span>
          {residential.map(([label, href]) => <Link onClick={() => setOpen(false)} key={`${label}-${href}`} href={href}>{label}</Link>)}
          <span className="mobile-nav-heading">Commercial</span>
          {commercial.map(([label, href]) => <Link onClick={() => setOpen(false)} key={`${label}-${href}`} href={href}>{label}</Link>)}
          <span className="mobile-nav-heading">Ongoing support</span>
          <Link onClick={() => setOpen(false)} href="/service-plans">Service Plans</Link>
          <Link onClick={() => setOpen(false)} href="/service-plans/fire-alarm-servicing">Fire Alarm Servicing</Link>
          <Link onClick={() => setOpen(false)} href="/areas-we-serve">Areas We Cover</Link>
          <Link onClick={() => setOpen(false)} href="/case-studies">Case Studies</Link>
          <Link onClick={() => setOpen(false)} href="/reviews">Reviews</Link>
          <Link onClick={() => setOpen(false)} href="/about-us">About Us</Link>
          <Link onClick={() => setOpen(false)} href="/contact">Contact</Link>
          <div className="mobile-nav-actions">
            <Link onClick={() => setOpen(false)} className="button button-light" href="/get-quote#quote-form">Request Free Survey</Link>
          </div>
        </nav>
      )}
    </header>
  )
}
