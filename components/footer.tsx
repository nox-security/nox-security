import Link from "next/link"
import { site } from "@/lib/site"

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-conversion">
        <div>
          <span className="eyebrow">Request your free security survey</span>
          <h2>Tell us what you want to protect and the NOX team will guide the next step.</h2>
          <p>Use one simple route for a new system, servicing, repairs, monitoring or a takeover — with phone and WhatsApp available too.</p>
        </div>
        <div className="button-row">
          <Link className="button button-light" href="/get-quote">Request Your Free Security Survey</Link>
        </div>
      </div>
      <div className="footer-grid">
        <div className="footer-brand">
          <img src="/images/nox-logo-light.jpeg" alt="NOX Fire & Security" width="275" height="110" />
          <p>Premium Fire & Security systems designed around homes, businesses and property portfolios across Chesterfield, Sheffield, Derbyshire and surrounding areas.</p>
          <p className="muted">Designed properly · Installed properly · Supported properly</p>
        </div>
        <div>
          <h3>Residential</h3>
          <Link href="/residential">Residential System Design</Link>
          <Link href="/systems/intrusion-alarms">Ajax Intruder Alarms</Link>
          <Link href="/systems/cctv">Residential CCTV</Link>
          <Link href="/systems/smart-home-cctv">Smart Home CCTV</Link>
          <Link href="/service-plans/alarm-monitoring">Alarm Monitoring</Link>
          <Link href="/service-plans">Residential Service Plans</Link>
        </div>
        <div>
          <h3>Commercial</h3>
          <Link href="/commercial">Commercial System Design</Link>
          <Link href="/commercial/fire-compliance">Fire Alarm Installation</Link>
          <Link href="/systems/emergency-lighting">Emergency Lighting</Link>
          <Link href="/systems/fire-risk-assessment">Fire Risk Assessments</Link>
          <Link href="/commercial/cctv">Commercial CCTV</Link>
          <Link href="/commercial/intruder-alarms">Commercial Intruder Alarms</Link>
          <Link href="/service-plans">Commercial Service Plans</Link>
        </div>
        <div>
          <h3>Company</h3>
          <Link href="/about-us">About NOX</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/reviews">Customer Reviews</Link>
          <Link href="/blog">Advice & Guides</Link>
          <Link href="/areas-we-serve">Areas We Cover</Link>
          <Link href="/services">Local Service Pages</Link>
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
