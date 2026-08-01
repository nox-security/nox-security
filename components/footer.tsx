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
          <span className="eyebrow">Start with the property, site or existing system</span>
          <h2>Tell NOX what needs protecting, installing or supporting.</h2>
          <p>New residential and commercial systems, fire compliance, planned maintenance, monitoring, takeovers and larger multi-site projects.</p>
        </div>
        <div className="button-row">
          <Link className="button button-light" href="/get-quote">Request a Quotation</Link>
        </div>
      </div>
      <div className="footer-grid footer-grid-clusters">
        <div className="footer-brand">
          <Link href="/" aria-label="NOX Fire & Security home">
            <img src="/images/nox-logo-light.jpeg" alt="NOX Fire & Security" width="275" height="110" />
          </Link>
          <p>Premium residential and commercial Fire & Security installation and support across Chesterfield, Sheffield, Derbyshire, Derby and the Peak District.</p>
          <p className="muted">Local accountability · Commercial capability · Ongoing support</p>
          <a className="footer-instagram-link" href="https://www.instagram.com/noxsecuritychesterfield" target="_blank" rel="noopener noreferrer" aria-label="Open NOX Fire & Security on Instagram at @noxsecuritychesterfield">
            <span className="footer-instagram-icon" aria-hidden="true"><Instagram size={17} strokeWidth={1.65}/></span>
            <span className="footer-instagram-copy"><small>Instagram</small><strong>@noxsecuritychesterfield</strong></span>
            <span className="footer-instagram-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
        <div>
          <h3>Protect My Home</h3>
          {residentialFooterItems.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </div>
        <div>
          <h3>Fire Alarms &amp; Compliance</h3>
          {fireFooterItems.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <h3 className="footer-subheading">Protect My Business</h3>
          {commercialFooterItems.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </div>
        <div>
          <h3>Existing System Support</h3>
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
        <span>Primary areas:</span>
        <Link href="/areas/chesterfield">Chesterfield</Link>
        <Link href="/areas/sheffield">Sheffield</Link>
        <Link href="/areas/sheffield">Dore &amp; Totley</Link>
        <Link href="/areas/sheffield">Ecclesall, Fulwood &amp; Ranmoor</Link>
        <Link href="/areas/derbyshire">Derbyshire</Link>
        <Link href="/areas/derby">Derby</Link>
        <Link href="/areas/derby">Duffield &amp; Quarndon</Link>
        <Link href="/areas/dronfield">Dronfield</Link>
        <Link href="/areas/matlock">Matlock</Link>
        <Link href="/areas/bakewell">Bakewell</Link>
        <Link href="/areas/baslow">Baslow</Link>
        <Link href="/areas/hope-valley">Hope Valley</Link>
        <Link href="/areas/ashover">Ashover</Link>
        <Link href="/areas/buxton">Buxton</Link>
        <Link href="/areas/hathersage">Hathersage</Link>
      </div>
      <div className="footer-bottom">
        <span>© 2026 NOX Fire & Security. All rights reserved.</span>
        <div><Link href="/privacy-policy">Privacy</Link><Link href="/terms-conditions">Terms</Link><Link href="/cookie-policy">Cookies</Link><CookieSettingsButton/></div>
      </div>
    </footer>
  )
}
