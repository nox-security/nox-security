import type { Metadata } from "next"
import Link from "next/link"
import { CaseStudyGrid, ContactActions, ConversionPanel, FeatureGrid, PageHero, ReviewGrid, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Commercial Security Chesterfield & Sheffield | CCTV & Alarms",
  "Commercial CCTV, intruder alarms, industrial and warehouse security, yard protection, multi-site systems and integrated Fire & Security projects across Chesterfield and Sheffield.",
  "/commercial"
)

const routes = [
  { title: "Commercial CCTV", text: "Coverage objectives, evidence quality, entrances, working areas, yards, recording duration, night performance and remote access.", href: "/commercial/cctv" },
  { title: "Commercial Intruder Alarms", text: "Internal and external protection around opening hours, staff access, valuable areas, communication and monitoring requirements.", href: "/commercial/intruder-alarms" },
  { title: "Industrial, Warehouse & Yard Security", text: "Several buildings, loading areas, stock, machinery, vehicle routes, yards, boundaries and larger camera or detector quantities planned as one site.", href: "/commercial/industrial-warehouse-security" },
  { title: "Multi-Site Security", text: "Consistent system design, rollout planning, user access, records and ongoing support across several premises.", href: "/commercial/multi-site-security" },
  { title: "Integrated Fire & Security", text: "Fire, CCTV and intruder projects coordinated through one local team while each system keeps a clear scope and handover.", href: "/commercial/integrated-fire-security" },
]

export default function CommercialPage() {
  return <>
    <PageHero eyebrow="Commercial Security" title="CCTV, intruder and integrated systems designed around working sites" intro="NOX supports retail, hospitality, offices, garages, warehouses, industrial units, yards and multi-site businesses across Chesterfield, Sheffield and Derbyshire. The design considers the operation, site layout, evidence requirement, access and ongoing support rather than adapting a residential package." image="/images/revisions/commercial-cctv-industrial-building.jpg" imageAlt="Commercial CCTV installed by NOX at an industrial property">
      <ContactActions primaryLabel="Book a Commercial Site Survey" audience="Commercial" serviceCategory="Commercial Security" enquiryType="Installation" sourceLabel="commercial-hub"/>
    </PageHero>
    <TrustStrip variant="commercial"/>

    <section className="section"><div className="container"><SectionHeading eyebrow="Commercial systems" title="Choose the site requirement, not a generic bundle" text="Commercial pages focus on coverage, operations, several users, larger systems, several buildings and the support required after handover."/><div className="feature-grid columns-3">{routes.map((item, index) => <article className="feature-card" key={item.title}><span className="feature-number">{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.text}</p><Link className="text-link" href={item.href}>Explore service →</Link></article>)}</div></div></section>

    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Commercial project planning" title="The operational requirement changes the design"/><FeatureGrid columns={4} items={[
      { title: "Coverage and evidence", text: "Entrances, tills, stock, vehicle routes, production areas and yards need different camera positions and image detail." },
      { title: "Access and staff use", text: "Opening hours, user permissions, keyholders, shift patterns and restricted areas influence alarm design and control." },
      { title: "Working around the site", text: "Cable routes, access equipment, production, customers, trading and out-of-hours work are planned before installation." },
      { title: "Ongoing support", text: "Maintenance, monitoring, faults, takeovers and multi-site records can remain coordinated after the project." }
    ]}/></div></section>

    <section className="section"><div className="container split-grid"><div><SectionHeading eyebrow="Fire & Compliance" title="Commercial fire services have a clear, dedicated section" text="Fire alarm installation, servicing, repairs, emergency lighting and compliance planning are separated from general security so the customer can reach the correct service immediately."/><div className="related-links"><Link href="/fire-compliance">Fire & Compliance overview →</Link><Link href="/systems/fire-safety">Fire Alarm Installation →</Link><Link href="/service-plans/fire-alarm-servicing">Fire Alarm Servicing →</Link><Link href="/service-plans/fire-compliance">Fire Compliance Plans →</Link></div></div><aside className="dark-panel"><h3>Integrated projects remain possible</h3><p>NOX can coordinate fire, CCTV and intruder work on the same premises while keeping design, commissioning, records and recurring service scopes clear.</p><Link className="button button-light" href="/commercial/integrated-fire-security">View Integrated Projects</Link></aside></div></section>

    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Commercial projects" title="Real work across hospitality, industrial, retail and larger sites"/><CaseStudyGrid slugs={["continue-arcade-commercial-cctv-derby","telesis-hitachi-fire-intruder-system","bottle-and-thyme-commercial-cctv-chesterfield","retford-former-bank-cctv"]}/></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="Customer feedback" title="Site-specific advice, professional installation and local follow-up"/><ReviewGrid names={["Jez S"]}/></div></section>
    <ConversionPanel title="Discuss a commercial security project" text="Tell us the site type, location, systems involved, existing equipment and what the project needs to achieve. NOX will guide the survey and proposal route." primaryLabel="Book a Commercial Site Survey" audience="Commercial" serviceCategory="Commercial Security" enquiryType="Installation" sourceLabel="commercial-final"/>
  </>
}
