import Link from "next/link"
import { site } from "@/lib/site"

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-conversion">
        <div>
          <span className="eyebrow">One clear next step</span>
          <h2>Tell us about the property and what you need.</h2>
          <p>Use the same enquiry route for residential, commercial, installation, servicing, repairs and system takeovers.</p>
        </div>
        <div className="button-row">
          <Link className="button button-light" href="/get-quote">Get a Free Quote</Link>
        </div>
      </div>
      <div className="footer-grid">
        <div className="footer-brand">
          <img src="/images/nox-logo-light.jpeg" alt="NOX Fire & Security" width="275" height="110" />
          <p>Professional fire and security systems designed around homes, businesses and property portfolios across Chesterfield, Sheffield, Derbyshire and surrounding areas.</p>
          <p className="muted">Designed properly · Installed properly · Supported properly</p>
        </div>
        <div>
          <h3>Residential</h3>
          <Link href="/residential">Residential Overview</Link>
          <Link href="/systems/intrusion-alarms">Intruder Alarms</Link>
          <Link href="/systems/cctv">CCTV Systems</Link>
          <Link href="/service-plans/alarm-monitoring">Alarm Monitoring</Link>
          <Link href="/service-plans">Aftercare & Service Plans</Link>
        </div>
        <div>
          <h3>Commercial</h3>
          <Link href="/commercial">Commercial Overview</Link>
          <Link href="/commercial/cctv">Commercial CCTV</Link>
          <Link href="/commercial/intruder-alarms">Commercial Alarms</Link>
          <Link href="/commercial/fire-compliance">Fire & Compliance</Link>
          <Link href="/service-plans">Maintenance & Annual Support</Link>
        </div>
        <div>
          <h3>Company</h3>
          <Link href="/about-us">About NOX</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/reviews">Customer Reviews</Link>
          <Link href="/blog">Advice & Guides</Link>
          <Link href="/areas-we-serve">Areas We Cover</Link>
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
