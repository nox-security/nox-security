import Link from "next/link"
import { Instagram } from "lucide-react"
import { commercialFooterItems, companyFooterItems, fireFooterItems, residentialFooterItems, supportFooterItems } from "@/lib/navigation"
import { site } from "@/lib/site"
import { CookieSettingsButton } from "@/components/cookie-consent"

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-conversion">
        <div>
          <span className="eyebrow">Fire · CCTV · Intruder</span>
          <h2>Start your NOX project.</h2>
          <p>New installations, existing-system support, maintenance, monitoring and larger commercial or multi-site requirements.</p>
        </div>
        <div className="button-row">
          <Link className="button button-light" href="/get-quote">Get a Quote</Link>
        </div>
      </div>
      <div className="footer-grid footer-grid-clusters">
        <div className="footer-brand">
          <Link href="/" aria-label="NOX Fire & Security home">
            <img src="/images/nox-logo-light.jpeg" alt="NOX Fire & Security" width="275" height="110" />
          </Link>
          <p>Chesterfield-based fire and security installation, servicing and maintenance for homes, commercial premises and larger projects across Derbyshire, Sheffield, South Yorkshire and Derby, with wider UK project coverage where required.</p>
          <p className="muted">Local accountability · Commercial capability · Ongoing support</p>
          <a className="footer-instagram-link" href="https://www.instagram.com/noxsecuritychesterfield" target="_blank" rel="noopener noreferrer" aria-label="Open NOX Fire & Security on Instagram at @noxsecuritychesterfield">
            <span className="footer-instagram-icon" aria-hidden="true"><Instagram size={17} strokeWidth={1.65}/></span>
            <span className="footer-instagram-copy"><small>Instagram</small><strong>@noxsecuritychesterfield</strong></span>
            <span className="footer-instagram-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
        <div>
          <h3>Fire Alarms &amp; Compliance</h3>
          {fireFooterItems.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <h3 className="footer-subheading">Commercial</h3>
          {commercialFooterItems.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </div>
        <div>
          <h3>Residential</h3>
          {residentialFooterItems.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </div>
        <div>
          <h3>Support</h3>
          {supportFooterItems.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <h3 className="footer-subheading">Company</h3>
          {companyFooterItems.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </div>
        <div>
          <h3>Contact</h3>
          <a href={site.phoneHref}>{site.phone}</a>
          <a href={site.whatsapp}>WhatsApp NOX</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span>{site.base}</span>
          <Link href="/get-quote">Website enquiry</Link>
          <h3 className="footer-subheading">Commercial Projects</h3>
          <Link href="/commercial/cctv">Commercial CCTV</Link>
          <Link href="/commercial/multi-site-security">Multi-Site Security</Link>
          <Link href="/commercial/integrated-fire-security">Integrated Fire & Security</Link>
        </div>
      </div>
      <div className="footer-local-links">
        <span>Core regions:</span>
        <Link href="/areas/chesterfield">Chesterfield</Link>
        <Link href="/areas/sheffield">Sheffield</Link>
        <Link href="/areas/sheffield">South Yorkshire</Link>
        <Link href="/areas/derbyshire">Derbyshire</Link>
        <Link href="/areas/derby">Derby</Link>
        <Link href="/areas/bakewell">Peak District</Link>
      </div>
      <div className="footer-bottom">
        <span>© 2026 NOX Fire & Security. All rights reserved.</span>
        <div><Link href="/privacy-policy">Privacy</Link><Link href="/terms-conditions">Terms</Link><Link href="/cookie-policy">Cookies</Link><CookieSettingsButton/></div>
      </div>
    </footer>
  )
}
