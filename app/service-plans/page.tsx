import type { Metadata } from "next"
import Link from "next/link"
import { ConversionPanel, FeatureGrid, PageHero, ReviewGrid, SectionHeading, TrustStrip } from "@/components/marketing"
import { planPages } from "@/lib/content"
import { pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Security & Fire Service Plans Chesterfield",
  "Residential and commercial alarm maintenance, monitoring, CCTV servicing, Fire alarm servicing, emergency lighting and coordinated annual packages across Chesterfield and Derbyshire.",
  "/service-plans"
)

const residentialOrder = ["alarm-maintenance", "alarm-monitoring", "cctv-maintenance", "total-security"]
const commercialOrder = ["alarm-maintenance", "alarm-monitoring", "cctv-maintenance", "fire-alarm-servicing", "emergency-lighting-servicing", "fire-compliance"]

function residentialPrice(slug: string) {
  return planPages[slug].residentialPrice ?? "Quoted after system review"
}

function commercialPrice(slug: string) {
  return planPages[slug].commercialPrice ?? "Quoted to system and site"
}

function PlanCard({ slug, audience }: { slug: string, audience: "residential" | "commercial" }) {
  const plan = planPages[slug]
  const price = audience === "residential" ? residentialPrice(slug) : commercialPrice(slug)
  const highlighted = slug === "total-security" || slug === "fire-compliance"
  return <article className={`plan-card ${highlighted ? "featured" : ""}`}>
    <span className="micro-label">{audience === "residential" ? "Residential annual support" : "Commercial annual support"}</span>
    <h2>{plan.eyebrow}</h2>
    <div className="plan-price plan-price-consistent">{price}</div>
    <p>{plan.intro}</p>
    <ul>{plan.included.slice(0,5).map(item => <li key={item}>{item}</li>)}</ul>
    <Link className={`button ${highlighted ? "button-dark" : "button-outline"}`} href={`/service-plans/${slug}`}>View Plan Details</Link>
  </article>
}

export default function ServicePlansPage() {
  return <>
    <PageHero eyebrow="Monitoring, maintenance and compliance" title="Ongoing support for residential and commercial systems" intro="New installations sit in the Systems section. Service Plans are the recurring support route after handover — annual maintenance, professional monitoring, Fire servicing, emergency lighting, takeovers and coordinated packages." image="/images/editorial/home-maintenance.jpg" imageAlt="Real alarm system maintenance and takeover work completed by NOX"/>
    <TrustStrip/>

    <section className="section"><div className="container"><SectionHeading eyebrow="Why ongoing support matters" title="Keep systems reliable, records clearer and future repairs easier to manage" text="A system can appear operational while batteries, camera views, recording health, remote access or device condition are beginning to deteriorate. Planned servicing creates a clear engineer route for testing, defects and renewal."/><FeatureGrid columns={4} items={[
      { title:"Annual engineer servicing", text:"System-health checks, device testing, cleaning, battery review, updates and service records within the agreed scope." },
      { title:"Professional monitoring", text:"Alarm handling, keyholder contact, available verification and agreed escalation procedures." },
      { title:"Fire servicing and emergency lighting", text:"Ajax EN54 and suitable traditional fire systems, testing, records, defect reporting and separately quoted remedial work." },
      { title:"Takeovers and repairs", text:"Suitable existing systems can be inspected before a service, repair or phased-upgrade route is recommended." }
    ]}/></div></section>

    <section className="section section-alt"><div className="container">
      <SectionHeading eyebrow="Residential service plans" title="Clear annual support for alarms and CCTV at home" text="Confirmed residential prices are shown consistently. Customers can choose one focused service or move into the Total Security Package where the eligible systems and written scope make it better value."/>
      <div className="plan-grid plan-grid-wide residential-plan-grid">{residentialOrder.map(slug => <PlanCard key={`res-${slug}`} slug={slug} audience="residential"/>)}</div>
    </div></section>

    <section className="section"><div className="container">
      <SectionHeading eyebrow="Commercial and Fire service plans" title="Security, Fire and compliance support after installation" text="Standard commercial prices are shown where confirmed. Fire alarm servicing, emergency lighting and wider compliance packages are quoted consistently to the property, system quantities and included services."/>
      <div className="plan-grid plan-grid-wide commercial-plan-grid">{commercialOrder.map(slug => <PlanCard key={`com-${slug}`} slug={slug} audience="commercial"/>)}</div>
    </div></section>

    <section className="section section-alt"><div className="container split-grid"><div>
      <SectionHeading eyebrow="Package direction" title="Bring eligible services under one clearer renewal structure" text="The commercial model is simple: install the right equipment, hand it over properly, then provide ongoing monitoring, maintenance, Fire servicing or compliance support where the customer needs it."/>
      <div className="related-links"><Link href="/service-plans/total-security">Total Security Package →</Link><Link href="/service-plans/fire-compliance">Fire Compliance Package →</Link><Link href="/service-plans/fire-alarm-servicing">Fire Alarm Servicing →</Link><Link href="/service-plans/emergency-lighting-servicing">Emergency Lighting Servicing →</Link></div>
    </div><aside className="dark-panel"><span className="eyebrow">One point of contact</span><h3>Installation, service history and future support stay connected</h3><p>Where practical, NOX can coordinate renewal dates, engineer attendance and identified remedial work across eligible systems without hiding what is included.</p><Link className="button button-light" href="/get-quote#quote-form">Request Package Pricing</Link></aside></div></section>

    <section className="section"><div className="container split-grid"><div><SectionHeading eyebrow="System takeovers" title="Existing systems do not always need replacing" text="NOX can inspect suitable alarms, CCTV and Fire systems, identify faults, recover access where possible and recommend repairs or upgrades only where they make sense."/><Link className="button button-outline" href="/get-quote#quote-form">Discuss an Existing System</Link></div><aside className="dark-panel"><h3>What is normally separate?</h3><p>Replacement equipment, batteries, parts, repairs and specialist work are separate unless the written quotation or annual agreement specifically includes them.</p></aside></div></section>
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Customer reviews" title="Aftercare and support customers can come back to"/><ReviewGrid limit={3}/></div></section>
    <ConversionPanel title="Choose focused servicing or a coordinated package" text="Tell us what systems are installed, whether the property is residential or commercial and what ongoing support you need. We will confirm the most suitable inspection, plan or package route."/>
  </>
}
