import type { Metadata } from "next"
import Link from "next/link"
import { CaseStudyGrid, ConversionPanel, FeatureGrid, PageHero, ReviewGrid, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Commercial Fire & Security Systems Chesterfield & Sheffield",
  "Commercial CCTV, intruder alarms, fire alarms, emergency lighting, monitoring, maintenance, takeovers and multi-site support across Chesterfield, Sheffield and Derbyshire.",
  "/commercial"
)

const services = [
  { title: "Commercial CCTV", text: "Coverage for entrances, vehicles, yards, stock areas and operational spaces, with suitable recording, smart detection and remote viewing.", href: "/commercial/cctv" },
  { title: "Commercial Intruder Alarms", text: "Internal, external and perimeter protection planned around access, operating routines, staff use and the agreed response process.", href: "/commercial/intruder-alarms" },
  { title: "Fire & Compliance Support", text: "Fire alarm installation and servicing, emergency lighting, fire risk assessment support and coordinated annual visits.", href: "/commercial/fire-compliance" },
  { title: "Monitoring, Maintenance & Takeovers", text: "Professional alarm monitoring, planned servicing, fault resolution, existing-system takeovers and clearer annual renewals.", href: "/service-plans" }
]

export default function CommercialPage() {
  return <>
    <PageHero eyebrow="Commercial fire and security" title="Alarm, CCTV, fire and ongoing support through one local team" intro="NOX supports shops, offices, warehouses, industrial units, garages, yards, hospitality, HMOs and larger multi-system sites across Chesterfield, Sheffield and the wider region." image="/images/case-studies/install-3.png" imageAlt="Commercial CCTV system installed by NOX in Chesterfield"/>
    <TrustStrip/>
    <section className="section"><div className="container"><SectionHeading eyebrow="Joined-up commercial systems" title="Build the right arrangement around the premises" text="Start with a single installation or coordinate security, fire, monitoring and annual servicing through one accountable point of contact."/><div className="feature-grid columns-4">{services.map((service, index) => <article className="feature-card" key={service.title}><span className="feature-number">{String(index+1).padStart(2,"0")}</span><h2>{service.title}</h2><p>{service.text}</p><Link className="text-link" href={service.href}>Explore service →</Link></article>)}</div></div></section>
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Commercial sectors" title="Scaled from one premises to a wider property portfolio"/><FeatureGrid columns={4} items={[
      { title: "Retail and showrooms", text: "CCTV, intruder alarms, staff-access considerations, fire alarm work and planned servicing." },
      { title: "Warehouses and industrial", text: "Higher camera counts, yard coverage, external detection, recording, alarms and fire systems." },
      { title: "Hospitality, HMOs and landlords", text: "Security, fire alarm servicing, emergency lighting and assessment support around occupied buildings." },
      { title: "Multi-site portfolios", text: "Coordinated engineer scheduling, consistent records, one point of contact and a clearer renewal structure." }
    ]}/></div></section>
    <section className="section"><div className="container split-grid"><div><SectionHeading eyebrow="Commercial aftercare" title="Installation is only the first stage" text="Monitoring, alarm maintenance, CCTV servicing, fire alarm servicing, emergency lighting and system takeovers can be coordinated after the installation scope is understood."/><div className="related-links"><Link href="/service-plans/alarm-monitoring">Alarm monitoring →</Link><Link href="/service-plans/cctv-maintenance">CCTV maintenance →</Link><Link href="/service-plans/fire-compliance">Fire compliance package →</Link><Link href="/service-plans">All service plans →</Link></div></div><aside className="dark-panel"><h3>Existing systems welcome</h3><p>NOX can inspect suitable alarm, CCTV and fire systems, identify faults and create a sensible takeover, repair or phased-upgrade route.</p><Link className="button button-light" href="/get-quote">Request Commercial Pricing</Link></aside></div></section>
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Real commercial work" title="Confirmed NOX project examples"/><CaseStudyGrid slugs={["chesterfield-scrapyard-cctv","buxton-industrial-security","peak-electronic-security","retford-former-bank-cctv","banana-industries-fire-security","chatsworth-estate-cctv-upgrade"]}/></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="Commercial reviews" title="Professional advice, installation and support"/><ReviewGrid limit={3}/></div></section>
    <ConversionPanel title="Tell us about the site and systems involved" text="Use one commercial enquiry route for new installations, servicing, monitoring, fire support, repairs or an existing-system takeover."/>
  </>
}
