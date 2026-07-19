import type { Metadata } from "next"
import Link from "next/link"
import { CaseStudyGrid, ConversionPanel, FeatureGrid, PageHero, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Commercial Fire & Security Systems Chesterfield & Sheffield",
  "Commercial CCTV, intruder alarms, fire alarms, emergency lighting, monitoring, maintenance and multi-site support across Chesterfield, Sheffield and Derbyshire.",
  "/commercial"
)

const services = [
  { title: "Commercial CCTV", text: "Coverage for entrances, vehicles, yards, stock areas and operational spaces, with suitable recording and remote viewing.", href: "/commercial/cctv" },
  { title: "Commercial Intruder Alarms", text: "Internal, external and perimeter protection for shops, offices, warehouses, garages and industrial units.", href: "/commercial/intruder-alarms" },
  { title: "Fire & Compliance Support", text: "Fire alarm work, emergency lighting, risk assessment support and coordinated annual servicing.", href: "/commercial/fire-compliance" },
  { title: "Monitoring & Maintenance", text: "Professional alarm monitoring, planned servicing, system takeovers, fault resolution and annual renewal support.", href: "/service-plans" }
]

export default function CommercialPage() {
  return <>
    <PageHero eyebrow="Commercial fire and security" title="One local team across alarm, CCTV, fire and ongoing support" intro="NOX supports shops, offices, warehouses, industrial units, garages, yards, hospitality, HMOs and larger multi-system sites across Chesterfield, Sheffield and the wider region." image="/images/case-studies/install-3.png" imageAlt="Commercial CCTV system installed by NOX in Chesterfield"/>
    <TrustStrip/>
    <section className="section"><div className="container"><SectionHeading eyebrow="Joined-up systems" title="Build the right commercial arrangement around the site" text="Start with one system or coordinate security, fire and annual servicing through one point of contact."/><div className="feature-grid columns-4">{services.map((service, index) => <article className="feature-card" key={service.title}><span className="feature-number">{String(index+1).padStart(2,"0")}</span><h2>{service.title}</h2><p>{service.text}</p><Link className="text-link" href={service.href}>Explore service →</Link></article>)}</div></div></section>
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Commercial sectors" title="Scaled from a single premises to a wider property portfolio"/><FeatureGrid columns={4} items={[
      { title: "Retail and showrooms", text: "CCTV, intruder alarms, staff access considerations, fire alarm work and planned servicing." },
      { title: "Warehouses and industrial", text: "Higher camera counts, yard coverage, external detection, recording, alarms and fire systems." },
      { title: "Hospitality and HMOs", text: "Security, fire alarm servicing, emergency lighting and assessment support around occupied buildings." },
      { title: "Multi-site portfolios", text: "Coordinated engineer scheduling, consistent records, one point of contact and a clearer renewal structure." }
    ]}/></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="Real commercial work" title="Confirmed NOX project examples"/><CaseStudyGrid slugs={["chesterfield-scrapyard-cctv","buxton-industrial-security","peak-electronic-security","retford-former-bank-cctv","banana-industries-fire-security","chatsworth-estate-cctv-upgrade"]}/></div></section>
    <section className="section section-alt"><div className="container split-grid"><div><SectionHeading eyebrow="Commercial customer journey" title="Survey, quotation, installation, handover and annual support" text="The website naturally introduces monitoring, maintenance and fire compliance after installation without making them compulsory."/><Link className="button button-outline" href="/book-security-survey">Book a Commercial Survey</Link></div><aside className="dark-panel"><h3>Existing systems welcome</h3><p>NOX can inspect suitable existing alarm, CCTV and fire systems, identify faults and create a sensible takeover, repair or upgrade route.</p><Link className="button button-light" href="/get-quote">Request Takeover Pricing</Link></aside></div></section>
    <ConversionPanel title="Arrange a commercial quotation or site survey" text="Send the initial details now, or book a survey directly when the site needs to be assessed first."/>
  </>
}
