"use client"

import Link from "next/link"
import { useState } from "react"

const residentialSystems = [
  ["Residential System Design", "/residential", "Ajax alarms, CCTV and smart-home security designed around the home"],
  ["Ajax Intruder Alarms", "/systems/intrusion-alarms", "MotionCam, DoorProtect, keypads, sirens and app control"],
  ["Residential CCTV", "/systems/cctv", "Ajax, Hikvision ColourVu and professional recording"],
  ["Smart Home CCTV", "/systems/smart-home-cctv", "Solar, floodlight, wireless and video-doorbell options"]
]

const commercialSystems = [
  ["Commercial System Design", "/commercial", "Joined-up Fire & Security for operational premises"],
  ["Fire Alarm Installation", "/commercial/fire-compliance", "Ajax EN54 and suitable traditional commercial fire systems"],
  ["Commercial CCTV", "/commercial/cctv", "Multi-camera systems, NVR recording and remote viewing"],
  ["Commercial Intruder Alarms", "/commercial/intruder-alarms", "Internal and external protection for business premises"],
  ["Emergency Lighting & FRA", "/systems/emergency-lighting", "Emergency lighting, testing and fire-risk-assessment routes"]
]

const residentialPlans = [
  ["Alarm Maintenance", "/service-plans/alarm-maintenance", "£225/year residential"],
  ["Alarm Monitoring", "/service-plans/alarm-monitoring", "£595/year residential"],
  ["CCTV Maintenance", "/service-plans/cctv-maintenance", "£225/year residential"],
  ["Total Security Package", "/service-plans/total-security", "From £795/year residential"]
]

const commercialPlans = [
  ["Commercial Alarm Maintenance", "/service-plans/alarm-maintenance", "From £295/year"],
  ["Commercial Alarm Monitoring", "/service-plans/alarm-monitoring", "From £695/year"],
  ["Commercial CCTV Maintenance", "/service-plans/cctv-maintenance", "From £295/year"],
  ["Fire Alarm Servicing", "/service-plans/fire-alarm-servicing", "Quoted to system and site"],
  ["Emergency Lighting Servicing", "/service-plans/emergency-lighting-servicing", "Quoted to fitting quantities"],
  ["Fire Compliance Package", "/service-plans/fire-compliance", "Quoted to site and included services"]
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
                <span className="solution-menu-heading">Residential installations</span>
                {residentialSystems.map(([label, href, detail]) => <Link key={`${label}-${href}`} href={href}><strong>{label}</strong><span>{detail}</span></Link>)}
              </div>
              <div className="solution-menu-group">
                <span className="solution-menu-heading">Commercial installations</span>
                {commercialSystems.map(([label, href, detail]) => <Link key={`${label}-${href}`} href={href}><strong>{label}</strong><span>{detail}</span></Link>)}
              </div>
              <div className="solution-menu-footer"><Link href="/systems"><strong>View all system-design routes</strong><span>Choose residential or commercial first, then the relevant system</span></Link></div>
            </div>
          </div>
          <div className="nav-dropdown nav-dropdown-plans">
            <Link href="/service-plans">Service Plans</Link>
            <div className="dropdown-panel plan-menu-panel">
              <div className="solution-menu-group">
                <span className="solution-menu-heading">Residential aftercare</span>
                {residentialPlans.map(([label, href, detail]) => <Link key={`${label}-${href}`} href={href}><strong>{label}</strong><span>{detail}</span></Link>)}
              </div>
              <div className="solution-menu-group">
                <span className="solution-menu-heading">Commercial & compliance</span>
                {commercialPlans.map(([label, href, detail]) => <Link key={`${label}-${href}`} href={href}><strong>{label}</strong><span>{detail}</span></Link>)}
              </div>
              <div className="solution-menu-footer"><Link href="/service-plans"><strong>Compare every plan and package</strong><span>Clear annual pricing where confirmed; site-specific services quoted consistently</span></Link></div>
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
          <span className="mobile-nav-heading">Residential installations</span>
          {residentialSystems.map(([label, href]) => <Link onClick={() => setOpen(false)} key={`${label}-${href}`} href={href}>{label}</Link>)}
          <span className="mobile-nav-heading">Commercial installations</span>
          {commercialSystems.map(([label, href]) => <Link onClick={() => setOpen(false)} key={`${label}-${href}`} href={href}>{label}</Link>)}
          <span className="mobile-nav-heading">Residential service plans</span>
          {residentialPlans.map(([label, href]) => <Link onClick={() => setOpen(false)} key={`${label}-${href}`} href={href}>{label}</Link>)}
          <span className="mobile-nav-heading">Commercial & fire support</span>
          {commercialPlans.map(([label, href]) => <Link onClick={() => setOpen(false)} key={`${label}-${href}`} href={href}>{label}</Link>)}
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
