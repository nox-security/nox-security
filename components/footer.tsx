import Link from "next/link"
import { site } from "@/lib/site"

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-conversion">
        <div>
          <span className="eyebrow">Ready to move forward?</span>
          <h2>Tell us what you need, or book a survey straight into the diary.</h2>
        </div>
        <div className="button-row">
          <Link className="button button-outline" href="/get-quote">Request a Free Quote</Link>
          <Link className="button button-light" href="/book-security-survey">Book a Free Security Survey</Link>
        </div>
      </div>
      <div className="footer-grid">
        <div className="footer-brand">
          <img src="/images/nox-logo-light.jpeg" alt="NOX Fire & Security" width="275" height="110" />
          <p>Fire and security systems for homes, businesses and property portfolios across Chesterfield, Sheffield, Derbyshire and surrounding areas.</p>
          <p className="muted">Residential and commercial installation · Monitoring · Maintenance · System takeovers · Fire compliance</p>
        </div>
        <div>
          <h3>Solutions</h3>
          <Link href="/systems/intrusion-alarms">Intruder Alarms</Link>
          <Link href="/systems/cctv">CCTV Systems</Link>
          <Link href="/systems/fire-safety">Fire Alarm Systems</Link>
          <Link href="/commercial">Commercial Security</Link>
          <Link href="/service-plans">Service Plans</Link>
        </div>
        <div>
          <h3>Company</h3>
          <Link href="/about-us">About NOX</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/reviews">Customer Reviews</Link>
          <Link href="/areas-we-serve">Areas We Cover</Link>
          <Link href="/contact">Contact</Link>
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
      </div>
      <div className="footer-bottom">
        <span>© 2026 NOX Fire & Security. All rights reserved.</span>
        <div><Link href="/privacy-policy">Privacy</Link><Link href="/terms-conditions">Terms</Link><Link href="/cookie-policy">Cookies</Link></div>
      </div>
    </footer>
  )
}
