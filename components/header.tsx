"use client"

import Link from "next/link"
import { useState } from "react"

const coreSystems = [
  ["Intruder Alarms", "/systems/intrusion-alarms", "Ajax alarms, MotionCam, app control, sirens and professional installation"],
  ["Perimeter Protection", "/systems/perimeter-protection", "External detection for driveways, side access, yards and outbuildings"],
  ["CCTV Systems", "/systems/cctv", "Ajax, Hikvision ColourVu and professional recording for homes and businesses"],
  ["Fire Alarm Systems", "/systems/fire-safety", "Commercial fire alarm installation, Ajax EN54 and suitable traditional systems"]
]

const propertyRoutes = [
  ["Residential Security", "/residential", "Intruder alarms, CCTV, smart-home security, takeovers and aftercare"],
  ["Commercial Fire & Security", "/commercial", "Fire, CCTV, intruder and joined-up systems for operational premises"],
  ["Emergency Lighting", "/systems/emergency-lighting", "Installation, testing and ongoing servicing"],
  ["Fire Risk Assessments", "/systems/fire-risk-assessment", "Practical assessment routes for landlords and businesses"]
]

const securitySupport = [
  ["Alarm Maintenance", "/service-plans/alarm-maintenance", "Annual servicing for new and suitable traditional systems"],
  ["Alarm Monitoring", "/service-plans/alarm-monitoring", "Professional alarm handling, keyholder contact and agreed escalation"],
  ["CCTV Maintenance & Takeovers", "/service-plans/cctv-maintenance", "Camera, recorder, playback and remote-viewing support"]
]

const fireAndPackages = [
  ["Fire Alarm Servicing", "/service-plans/fire-alarm-servicing", "Ajax EN54, conventional, addressable and suitable existing systems"],
  ["Emergency Lighting Servicing", "/service-plans/emergency-lighting-servicing", "Routine testing, records and identified remedial work"],
  ["Plans & Packages", "/service-plans", "Total Security, Fire Compliance and coordinated annual support"]
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
          <div className="nav-dropdown nav-dropdown-wide">
            <Link href="/systems">Systems</Link>
            <div className="dropdown-panel solutions-dropdown grouped-solutions-dropdown">
              <div className="solution-menu-group">
                <span className="solution-menu-heading">Core systems</span>
                {coreSystems.map(([label, href, detail]) => <Link key={`${label}-${href}`} href={href}><strong>{label}</strong><span>{detail}</span></Link>)}
              </div>
              <div className="solution-menu-group">
                <span className="solution-menu-heading">Property and Fire routes</span>
                {propertyRoutes.map(([label, href, detail]) => <Link key={`${label}-${href}`} href={href}><strong>{label}</strong><span>{detail}</span></Link>)}
              </div>
              <div className="solution-menu-footer"><Link href="/systems"><strong>Explore all Fire & Security systems</strong><span>Start with the system or property type that best matches the enquiry</span></Link></div>
            </div>
          </div>
          <div className="nav-dropdown nav-dropdown-plans">
            <Link href="/service-plans">Service Plans</Link>
            <div className="dropdown-panel plan-menu-panel">
              <div className="solution-menu-group">
                <span className="solution-menu-heading">Security support</span>
                {securitySupport.map(([label, href, detail]) => <Link key={`${label}-${href}`} href={href}><strong>{label}</strong><span>{detail}</span></Link>)}
              </div>
              <div className="solution-menu-group">
                <span className="solution-menu-heading">Fire and packages</span>
                {fireAndPackages.map(([label, href, detail]) => <Link key={`${label}-${href}`} href={href}><strong>{label}</strong><span>{detail}</span></Link>)}
              </div>
              <div className="solution-menu-footer"><Link href="/service-plans"><strong>Compare service plans and packages</strong><span>Pricing remains on the individual pages, not in the navigation</span></Link></div>
            </div>
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
          <span className="mobile-nav-heading">Core systems</span>
          {coreSystems.map(([label, href]) => <Link onClick={() => setOpen(false)} key={`${label}-${href}`} href={href}>{label}</Link>)}
          <span className="mobile-nav-heading">Residential and commercial</span>
          {propertyRoutes.map(([label, href]) => <Link onClick={() => setOpen(false)} key={`${label}-${href}`} href={href}>{label}</Link>)}
          <span className="mobile-nav-heading">Service plans and support</span>
          {securitySupport.map(([label, href]) => <Link onClick={() => setOpen(false)} key={`${label}-${href}`} href={href}>{label}</Link>)}
          {fireAndPackages.map(([label, href]) => <Link onClick={() => setOpen(false)} key={`${label}-${href}`} href={href}>{label}</Link>)}
          <Link onClick={() => setOpen(false)} href="/case-studies">Case Studies</Link>
          <Link onClick={() => setOpen(false)} href="/areas-we-serve">Areas We Cover</Link>
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
