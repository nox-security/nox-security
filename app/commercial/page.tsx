import type { Metadata } from "next"
import Link from "next/link"
import { CaseStudyGrid, ConversionPanel, FeatureGrid, LocalSearchLinks, PageHero, ReviewGrid, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Commercial Fire & Security Systems Chesterfield & Sheffield",
  "Commercial fire alarm installation, CCTV, intruder alarms, emergency lighting, fire risk assessments, servicing and compliance packages across Chesterfield, Sheffield and Derbyshire.",
  "/commercial"
)

const newSystems = [
  { title: "Commercial Fire Alarm Installation", text: "Ajax EN54 and suitable traditional fire-alarm systems designed around the premises, available fire information, occupancy, zones and ongoing service requirements.", href: "/commercial/fire-compliance", image: "/images/ajax-en54-fire.webp", alt: "Ajax EN54 commercial fire alarm system" },
  { title: "Commercial CCTV", text: "Multi-camera coverage for entrances, stock, vehicles, yards and working areas with NVR recording, playback, remote viewing and maintenance options.", href: "/commercial/cctv", image: "/images/projects/retford-monitor-final.jpg", alt: "Commercial multi-camera CCTV system installed in Retford" },
  { title: "Commercial Intruder Alarms", text: "Internal and external detection planned around access, staff use, opening hours, valuable areas and the agreed keyholder or monitoring route.", href: "/commercial/intruder-alarms", image: "/images/resent-installation/B563DA1D-D64B-4DF3-8058-BC6E01154EC3.png", alt: "External Ajax detection at an industrial site in Dronfield" },
  { title: "Emergency Lighting & Fire Risk Assessment", text: "Emergency-lighting installation and testing, plus fire-risk-assessment support for landlords, HMOs, hospitality, offices and operational commercial sites.", href: "/systems/emergency-lighting", image: "/images/EmergencyLighting.jpeg", alt: "Emergency lighting fitting for commercial testing and installation" }
]

export default function CommercialPage() {
  return <>
    <PageHero eyebrow="Commercial system design" title="Fire, CCTV and intruder systems with a clear route into ongoing compliance support" intro="NOX supports shops, offices, hospitality, warehouses, industrial units, garages, yards, HMOs, landlords and multi-system sites. New installations are designed first; servicing, monitoring and annual packages follow as a separate, clearly defined scope." image="/images/projects/tan-station-exterior.jpg" imageAlt="The Tan Station commercial Fire and Security project in Brimington"/>
    <TrustStrip/>

    <section className="section"><div className="container">
      <SectionHeading eyebrow="New commercial installations" title="Build the system around the premises and operational requirement" text="Commercial work begins with the building, occupancy, access, valuable areas, existing systems and required records — not a fixed equipment bundle."/>
      <div className="system-route-grid commercial-system-route-grid">
        {newSystems.map(item => <article className="system-route-card" key={item.title}><img src={item.image} alt={item.alt}/><div><span className="eyebrow">Commercial system</span><h2>{item.title}</h2><p>{item.text}</p><Link className="text-link" href={item.href}>Explore {item.title} →</Link></div></article>)}
      </div>
    </div></section>

    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Commercial sectors" title="Scaled from one premises to a wider property portfolio"/><FeatureGrid columns={4} items={[
      { title: "Retail and showrooms", text: "CCTV, intruder alarms, staff access, Fire alarm work and planned servicing for customer-facing premises." },
      { title: "Warehouses and industrial", text: "Higher camera counts, yards, external detection, recording, intruder alarms and commercial Fire systems." },
      { title: "Hospitality, HMOs and landlords", text: "Fire alarm installation and servicing, emergency lighting, CCTV, access considerations and assessment support around occupied buildings." },
      { title: "Multi-site portfolios", text: "Coordinated engineer scheduling, consistent service records, one point of contact and clearer renewal planning." }
    ]}/></div></section>

    <section className="section commercial-fire-band"><div className="container split-grid"><div>
      <SectionHeading eyebrow="Commercial Fire is a core NOX service" title="Installation, servicing and compliance packages planned together" text="NOX supports new Ajax EN54 projects and suitable conventional, addressable and established wireless systems. The long-term route can include fire alarm servicing, emergency-lighting visits, defect reporting and separately quoted remedial work."/>
      <div className="related-links"><Link href="/commercial/fire-compliance">Commercial Fire Alarm Systems →</Link><Link href="/service-plans/fire-alarm-servicing">Fire Alarm Servicing →</Link><Link href="/service-plans/emergency-lighting-servicing">Emergency Lighting Servicing →</Link><Link href="/service-plans/fire-compliance">Fire Compliance Package →</Link></div>
    </div><aside className="fire-product-preview"><img src="/images/EN54FireHub.jpeg" alt="Ajax EN54 Fire Hub commercial fire alarm panel"/><div><strong>Ajax EN54 and traditional-system expertise</strong><span>Fire Hub, wireless detection and manual activation devices where suitable, plus ongoing support for established systems.</span></div></aside></div></section>

    <section className="section section-alt commercial-aftercare-section"><div className="container split-grid"><div>
      <SectionHeading eyebrow="Ongoing commercial support" title="Service plans create the recurring support structure after installation" text="Commercial systems can move into focused annual services or a coordinated package. Confirmed standard prices are shown where available; Fire and larger-site work is quoted consistently to system quantities and scope."/>
      <div className="related-links"><Link href="/service-plans/alarm-maintenance">Alarm Maintenance — from £295/year →</Link><Link href="/service-plans/alarm-monitoring">Alarm Monitoring — from £695/year →</Link><Link href="/service-plans/cctv-maintenance">CCTV Maintenance — from £295/year →</Link><Link href="/service-plans/fire-alarm-servicing">Fire Alarm Servicing — quoted to system →</Link><Link href="/service-plans/fire-compliance">Fire Compliance Package — quoted to site →</Link></div>
    </div><aside className="dark-panel"><span className="eyebrow">Existing commercial systems</span><h3>Takeover, repair or phased upgrade</h3><p>NOX can inspect suitable alarm, CCTV and Fire systems, identify access or condition issues and set out a sensible route for maintenance, repair or replacement.</p><Link className="button button-light" href="/get-quote#quote-form">Request a Commercial Survey</Link></aside></div></section>

    <section className="section"><div className="container"><SectionHeading eyebrow="Real commercial work" title="Confirmed NOX projects across hospitality, retail and industrial sites"/><CaseStudyGrid slugs={["bottle-and-thyme-commercial-cctv-chesterfield","tan-station-fire-security-brimington","retford-former-bank-cctv","dronfield-timber-perimeter","buxton-industrial-security","banana-industries-fire-security"]}/></div></section>
    <LocalSearchLinks slugs={["commercial-fire-security-systems","commercial-cctv-sheffield","fire-alarm-installation-chesterfield","fire-alarm-servicing-chesterfield","emergency-lighting-testing-derbyshire","fire-risk-assessment-chesterfield"]} title="Popular commercial Fire & Security searches"/>
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Commercial reviews" title="Professional advice, installation and ongoing support"/><ReviewGrid limit={3}/></div></section>
    <ConversionPanel title="Request a survey for your commercial site" text="Use one enquiry route for a new installation, Fire servicing, monitoring, maintenance, compliance support or an existing-system takeover."/>
  </>
}
