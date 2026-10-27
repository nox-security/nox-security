import Link from "next/link"
import { Instagram } from "lucide-react"
import { commercialFooterItems, companyFooterItems, fireFooterItems, residentialFooterItems, supportFooterItems } from "@/lib/navigation"
import { site } from "@/lib/site"
import { CookieSettingsButton } from "@/components/cookie-consent"

export default function Footer() {
  return (
    <footer className="site-footer site-footer-streamlined">
      <div className="footer-grid footer-grid-streamlined">
        <div className="footer-brand">
          <Link href="/" aria-label="NOX Fire & Security home" className="footer-brand-logo">
            <img src="/images/nox-logo-light.jpeg" alt="NOX Fire & Security" />
          </Link>
          <div className="footer-brand-contact">
            <a href={site.phoneHref}>{site.phone}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <span>{site.base}</span>
          </div>
          <a className="footer-instagram-link" href="https://www.instagram.com/noxsecuritychesterfield" target="_blank" rel="noopener noreferrer" aria-label="Open NOX Fire & Security on Instagram at @noxsecuritychesterfield">
            <span className="footer-instagram-icon" aria-hidden="true"><Instagram size={17} strokeWidth={1.65}/></span>
            <span className="footer-instagram-copy"><small>Instagram</small><strong>@noxsecuritychesterfield</strong></span>
            <span className="footer-instagram-arrow" aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="footer-nav-column">
          <h3>Fire</h3>
          {fireFooterItems.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </div>

        <div className="footer-nav-column">
          <h3>Commercial</h3>
          {commercialFooterItems.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </div>

        <div className="footer-nav-column">
          <h3>Residential</h3>
          {residentialFooterItems.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </div>

        <div className="footer-nav-column">
          <h3>Support</h3>
          {supportFooterItems.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </div>

        <div className="footer-nav-column">
          <h3>Company</h3>
          {companyFooterItems.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </div>
      </div>

      <div className="footer-bottom footer-bottom-streamlined">
        <span>© 2026 NOX Fire & Security. All rights reserved.</span>
        <div>
          <Link href="/privacy-policy">Privacy</Link>
          <Link href="/terms-conditions">Terms</Link>
          <Link href="/cookie-policy">Cookies</Link>
          <CookieSettingsButton/>
        </div>
      </div>
    </footer>
  )
}
