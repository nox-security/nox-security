import type { Metadata } from "next"
import Link from "next/link"
import { CaseStudyGrid, ContactActions, ConversionPanel, FeatureGrid, PageHero, ReviewGrid, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "CCTV, Alarm & Fire Servicing | Chesterfield & Sheffield",
  "CCTV maintenance, intruder alarm servicing and monitoring, Fire Alarm Servicing, emergency lighting, repairs and system takeovers across Chesterfield, Sheffield and Derbyshire.",
  "/service-plans"
)

const primarySupport = [
  { title: "Intruder Alarm Servicing", text: "Annual system health checks, device testing, batteries, communication, sirens, event history and service records.", href: "/service-plans/alarm-maintenance", image: "/images/revisions/intruder-maintenance-system-takeover.jpg", alt: "Engineer servicing and inspecting an intruder alarm system" },
  { title: "Alarm Monitoring", text: "Professional signalling, keyholder communication and system supervision for suitable maintained alarm systems.", href: "/service-plans/alarm-monitoring", image: "/images/revisions/intruder-alarm-monitoring-centre.jpg", alt: "Professional alarm monitoring operator handling security signals" },
  { title: "CCTV Maintenance", text: "Camera cleaning, image checks, recorder and storage health, playback, remote access and upgrade recommendations.", href: "/service-plans/cctv-maintenance", image: "/images/image-refresh/commercial-cctv-buxton-monitor.webp", alt: "Commercial CCTV system checked for recording and playback during maintenance" },
  { title: "System Takeovers", text: "Assessment of access, faults, condition, compatibility and the practical route into ongoing support.", href: "/services/security-system-takeover", image: "/images/image-refresh/commercial-old-camera.webp", alt: "Older CCTV equipment removed during a security system takeover" },
  { title: "Repairs & Upgrades", text: "Fault assessment, selective replacement, recorder upgrades, access recovery and phased system improvement.", href: "/services/repairs-upgrades", image: "/images/image-refresh/chester-street-after.webp", alt: "Clear live CCTV views after a commercial garage system upgrade" },
]

export default function ServicePlansPage() {
  return <>
    <PageHero eyebrow="Servicing & Monitoring" title="Keep alarm, CCTV and fire systems useful after installation" intro="NOX supports systems installed by NOX and suitable systems installed by another company. Planned servicing, professional monitoring, faults, repairs, upgrades and takeovers are kept clear so customers understand the visit, exclusions and next steps." image="/images/revisions/intruder-maintenance-system-takeover.jpg" imageAlt="Engineer maintaining an existing security system">
      <ContactActions primaryLabel="Get a Maintenance Quote" audience="Residential & Commercial" serviceCategory="Servicing & Monitoring" enquiryType="Servicing" sourceLabel="servicing-hub"/>
    </PageHero>
    <TrustStrip variant="servicing"/>

    <section className="section"><div className="container"><SectionHeading eyebrow="Security support" title="Servicing, monitoring, takeovers and repairs" text="Choose the service that matches the current need. A customer with a fault should not be forced through the same route as somebody arranging annual maintenance."/><div className="feature-grid columns-3 media-route-grid support-media-grid">{primarySupport.map((item, index) => <article className="feature-card media-route-card" key={item.title}><img src={item.image} alt={item.alt}/><div className="media-route-card-body"><span className="feature-number">{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.text}</p><Link className="text-link" href={item.href}>Explore support →</Link></div></article>)}</div></div></section>

    <section className="section section-alt"><div className="container split-grid"><div><SectionHeading eyebrow="Fire servicing" title="Fire alarm and emergency-lighting support remains inside Fire & Compliance" text="Fire alarm and emergency-lighting work has its own scope and records, while remaining easy to coordinate for customers managing several systems or annual visits."/><div className="related-links"><Link href="/service-plans/fire-alarm-servicing">Fire Alarm Servicing →</Link><Link href="/services/fire-alarm-repairs-takeovers">Fire Alarm Repairs & Takeovers →</Link><Link href="/service-plans/emergency-lighting-servicing">Emergency Lighting Testing & Servicing →</Link><Link href="/services/fire-extinguisher-servicing">Fire Extinguisher Servicing →</Link><Link href="/service-plans/fire-compliance">Fire Compliance Plans →</Link></div></div><aside className="dark-panel"><h3>Coordinate visits where practical</h3><p>Fire alarm, emergency-lighting and other agreed services can be planned around the site, access and reporting needs without pretending every service is automatically included.</p><Link className="button button-light" href="/fire-compliance">Explore Fire & Compliance</Link></aside></div></section>

    <section className="section"><div className="container"><SectionHeading eyebrow="Annual plans" title="Bring suitable services under one clearer renewal" text="Once the systems and support requirement are understood, eligible alarm, CCTV and fire services can be coordinated under a straightforward annual arrangement."/><FeatureGrid columns={3} items={[
      { title: "Residential Security Packages", text: "Coordinate a new Ajax alarm, home CCTV, perimeter protection and optional ongoing support around one property design." },
      { title: "Total Security Plans", text: "Bring eligible alarm monitoring, alarm servicing and CCTV maintenance under a clearer annual arrangement." },
      { title: "Fire Compliance Plans", text: "Coordinate agreed fire alarm, emergency-lighting, extinguisher and risk-assessment support for commercial premises." }
    ]}/><div className="commercial-route-links"><Link href="/service-plans/residential-security-packages">Residential Security Packages →</Link><Link href="/service-plans/total-security">Total Security Plans →</Link><Link href="/service-plans/fire-compliance">Fire Compliance Plans →</Link></div></div></section>

    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Existing systems" title="Condition and access are reviewed before an ongoing plan is accepted"/><FeatureGrid columns={4} items={[
      { title: "System make and age", text: "Panel, devices, cameras, recorder, communication and parts support need to be understood." },
      { title: "Access and ownership", text: "Engineer codes, app accounts, recorder passwords and available documentation affect the takeover route." },
      { title: "Faults and remedials", text: "Known issues, disabled devices, storage faults and battery condition are separated from the routine service scope." },
      { title: "Clear agreement", text: "Included visits, exclusions, parts, response route and renewal terms are confirmed in writing." }
    ]}/></div></section>

    <section className="section"><div className="container"><SectionHeading eyebrow="Relevant projects" title="Takeovers, upgrades and ongoing-support routes"/><CaseStudyGrid slugs={["retford-former-bank-cctv","chatsworth-estate-cctv-upgrade","telesis-hitachi-fire-intruder-system"]}/></div></section>
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Customer feedback" title="Local support backed by real installation experience"/><ReviewGrid names={["Jeremy Bunting"]}/></div></section>
    <ConversionPanel title="Arrange servicing, monitoring or a system assessment" text="Tell us what is installed, the property or site, any known faults and the available service history. NOX will confirm the correct inspection or pricing next step." primaryLabel="Get a Maintenance Quote" audience="Residential & Commercial" serviceCategory="Servicing & Monitoring" enquiryType="Servicing" sourceLabel="servicing-final"/>
  </>
}
