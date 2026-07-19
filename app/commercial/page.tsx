import type { Metadata } from "next"
import Link from "next/link"
import { CaseStudyGrid, ConversionPanel, FeatureGrid, PageHero, ReviewGrid, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Commercial Fire & Security Systems Chesterfield & Sheffield",
  "Premium commercial CCTV, intruder alarms, Ajax EN54 fire alarms, emergency lighting, monitoring, maintenance, takeovers and multi-site support.",
  "/commercial"
)

const services = [
  { title: "Commercial CCTV", text: "Coverage for entrances, vehicles, yards, stock areas and operational spaces, with suitable recording, smart detection and remote viewing.", href: "/commercial/cctv" },
  { title: "Commercial Intruder Alarms", text: "Internal, external and perimeter protection planned around access, operating routines, staff use and the agreed response process.", href: "/commercial/intruder-alarms" },
  { title: "Ajax EN54 Fire Systems", text: "Modern commercial fire-alarm technology, manual call points, detection, servicing, takeovers and coordinated annual support.", href: "/commercial/fire-compliance" },
  { title: "Servicing & Compliance Packages", text: "Alarm monitoring, CCTV maintenance, fire servicing, emergency lighting and clearer annual renewals through one local team.", href: "/service-plans" }
]

export default function CommercialPage() {
  return <>
    <PageHero eyebrow="Commercial Fire & Security" title="Premium systems and long-term support for operational premises" intro="NOX supports shops, offices, warehouses, industrial units, garages, yards, hospitality, HMOs and larger multi-system sites across Chesterfield, Sheffield and the wider region." image="/images/resent-installation/F5B46861-7E5F-416A-BD90-69C544691E7A.png" imageAlt="NOX Fire and Security van attending a commercial industrial site"/>
    <TrustStrip/>
    <section className="section"><div className="container"><SectionHeading eyebrow="Joined-up commercial systems" title="Build the right arrangement around the premises" text="Start with a single installation or coordinate security, Fire, monitoring and annual servicing through one accountable point of contact."/><div className="feature-grid columns-4 commercial-service-grid">{services.map((service, index) => <article className="feature-card" key={service.title}><span className="feature-number">{String(index+1).padStart(2,"0")}</span><h2>{service.title}</h2><p>{service.text}</p><Link className="text-link" href={service.href}>Explore Service →</Link></article>)}</div></div></section>
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Commercial sectors" title="Scaled from one premises to a wider property portfolio"/><FeatureGrid columns={4} items={[
      { title: "Retail and showrooms", text: "CCTV, intruder alarms, staff-access considerations, Fire alarm work and planned servicing." },
      { title: "Warehouses and industrial", text: "Higher camera counts, yard coverage, external detection, recording, alarms and commercial Fire systems." },
      { title: "Hospitality, HMOs and landlords", text: "Security, Fire alarm servicing, emergency lighting and assessment support around occupied buildings." },
      { title: "Multi-site portfolios", text: "Coordinated engineer scheduling, consistent records, one point of contact and a clearer renewal structure." }
    ]}/></div></section>
    <section className="section commercial-fire-band"><div className="container split-grid"><div><SectionHeading eyebrow="Commercial Fire systems" title="Ajax EN54, traditional systems and planned servicing" text="NOX supports new Ajax EN54 commercial fire-alarm projects and suitable conventional, addressable and established wireless systems. Installation, routine servicing, emergency lighting and agreed annual packages can be coordinated clearly."/><div className="related-links"><Link href="/commercial/fire-compliance">Explore Commercial Fire Systems →</Link><Link href="/service-plans/fire-alarm-servicing">Fire Alarm Servicing →</Link><Link href="/service-plans/fire-compliance">Fire Compliance Package →</Link></div></div><aside className="fire-product-preview"><img src="/images/EN54FireHub.jpeg" alt="Ajax EN54 Fire Hub commercial fire alarm panel"/><div><strong>Ajax EN54 Fire Hub</strong><span>Control, detection and manual activation devices selected as part of a complete commercial design.</span></div></aside></div></section>
    <section className="section section-alt"><div className="container split-grid"><div><SectionHeading eyebrow="Commercial aftercare" title="Installation is only the first stage" text="Monitoring, alarm maintenance, CCTV servicing, Fire alarm servicing, emergency lighting and system takeovers can be coordinated after the installation scope is understood."/><div className="related-links"><Link href="/service-plans/alarm-monitoring">Alarm Monitoring →</Link><Link href="/service-plans/cctv-maintenance">CCTV Maintenance →</Link><Link href="/service-plans/fire-compliance">Fire Compliance Package →</Link><Link href="/service-plans">All Service Plans →</Link></div></div><aside className="dark-panel"><h3>Existing systems welcome</h3><p>NOX can inspect suitable alarm, CCTV and Fire systems, identify faults and create a sensible takeover, repair or phased-upgrade route.</p><Link className="button button-light" href="/get-quote#quote-form">Request a Commercial Survey</Link></aside></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="Real commercial work" title="Confirmed NOX project examples"/><CaseStudyGrid slugs={["chesterfield-scrapyard-cctv","buxton-industrial-security","peak-electronic-security","retford-former-bank-cctv","banana-industries-fire-security","chatsworth-estate-cctv-upgrade"]}/></div></section>
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Commercial reviews" title="Professional advice, installation and support"/><ReviewGrid limit={3}/></div></section>
    <ConversionPanel title="Request a survey for your commercial site" text="Use one commercial enquiry route for new installations, servicing, monitoring, Fire support, repairs or an existing-system takeover."/>
  </>
}
