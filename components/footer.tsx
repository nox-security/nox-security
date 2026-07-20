import Link from "next/link"
import { companyNavItems, servicePlanNavItems, systemNavItems } from "@/lib/navigation"
import { site } from "@/lib/site"

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-conversion">
        <div>
          <span className="eyebrow">Request your free security survey</span>
          <h2>Tell us what you want to protect and the NOX team will guide the next step.</h2>
          <p>One simple enquiry for a new system, monitoring, maintenance, repairs or a suitable takeover.</p>
        </div>
        <div className="button-row">
          <Link className="button button-light" href="/get-quote">Request Your Free Security Survey</Link>
        </div>
      </div>
      <div className="footer-grid footer-grid-matched footer-grid-navigation-aligned">
        <div className="footer-brand">
          <img src="/images/nox-logo-light.jpeg" alt="NOX Fire & Security" width="275" height="110" />
          <p>Fire & Security systems designed around homes and businesses across Chesterfield, Sheffield, Derbyshire and surrounding areas.</p>
          <p className="muted">Designed properly · Installed properly · Supported properly</p>
        </div>
        <div>
          <h3>Systems</h3>
          {systemNavItems.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </div>
        <div>
          <h3>Service Plans</h3>
          {servicePlanNavItems.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </div>
        <div>
          <h3>Company</h3>
          <Link href="/">Home</Link>
          {companyNavItems.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <Link href="/reviews">Customer Reviews</Link>
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
        <span>Key areas:</span>
        <Link href="/areas/chesterfield">Chesterfield</Link>
        <Link href="/areas/sheffield">Sheffield</Link>
        <Link href="/areas/derbyshire">Derbyshire</Link>
        <Link href="/areas/dronfield">Dronfield</Link>
        <Link href="/areas/matlock">Matlock</Link>
        <Link href="/areas/buxton">Buxton</Link>
        <Link href="/services/cctv-installation-chesterfield">CCTV Chesterfield</Link>
        <Link href="/services/fire-alarm-servicing-chesterfield">Fire Servicing Chesterfield</Link>
      </div>
      <div className="footer-bottom">
        <span>© 2026 NOX Fire & Security. All rights reserved.</span>
        <div><Link href="/privacy-policy">Privacy</Link><Link href="/terms-conditions">Terms</Link><Link href="/cookie-policy">Cookies</Link></div>
      </div>
    </footer>
  )
}
