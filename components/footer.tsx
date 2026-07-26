import Link from "next/link"
import { commercialFooterItems, fireFooterItems, residentialFooterItems, supportFooterItems } from "@/lib/navigation"
import { site } from "@/lib/site"

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-conversion">
        <div>
          <span className="eyebrow">Start with the property or site</span>
          <h2>Tell NOX what you need and we will guide the right survey, service or takeover route.</h2>
          <p>Residential alarms and CCTV, commercial Fire & Security, planned servicing, monitoring, repairs and annual support.</p>
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
          <p>Residential security, commercial Fire & Security and ongoing support across Chesterfield, Sheffield, Derbyshire and surrounding areas.</p>
          <p className="muted">Designed properly · Installed properly · Supported properly</p>
        </div>
        <div>
          <h3>Residential</h3>
          {residentialFooterItems.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </div>
        <div>
          <h3>Fire & Compliance</h3>
          {fireFooterItems.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <h3 className="footer-subheading">Commercial Security</h3>
          {commercialFooterItems.slice(0, 3).map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </div>
        <div>
          <h3>Support & Company</h3>
          {supportFooterItems.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </div>
        <div>
          <h3>Contact</h3>
          <a href={site.phoneHref}>{site.phone}</a>
          <a href={site.whatsapp}>WhatsApp the team</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span>{site.base}</span>
          <Link href="/get-quote">Website enquiry</Link>
        </div>
      </div>
      <div className="footer-local-links">
        <span>Primary areas:</span>
        <Link href="/areas/chesterfield">Chesterfield</Link>
        <Link href="/areas/sheffield">Sheffield</Link>
        <Link href="/areas/derbyshire">Derbyshire</Link>
        <Link href="/areas/dronfield">Dronfield</Link>
        <Link href="/areas/matlock">Matlock</Link>
        <Link href="/areas/bakewell">Bakewell</Link>
        <Link href="/areas/baslow">Baslow</Link>
        <Link href="/areas/hope-valley">Hope Valley</Link>
        <Link href="/areas/ashover">Ashover</Link>
        <Link href="/areas/buxton">Buxton</Link>
        <Link href="/areas/hathersage">Hathersage</Link>
        <Link href="/areas/derby">Derby</Link>
      </div>
      <div className="footer-bottom">
        <span>© 2026 NOX Fire & Security. All rights reserved.</span>
        <div><Link href="/privacy-policy">Privacy</Link><Link href="/terms-conditions">Terms</Link><Link href="/cookie-policy">Cookies</Link></div>
      </div>
    </footer>
  )
}
