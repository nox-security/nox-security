import type { Metadata } from "next"
import Link from "next/link"
import { ConversionPanel, FeatureGrid, LocalSearchLinks, PageHero, ReviewGrid, SectionHeading, TrustStrip } from "@/components/marketing"
import { planPages } from "@/lib/content"
import { pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Security & Fire Service Plans Chesterfield",
  "Alarm maintenance, monitoring, CCTV servicing, Fire alarm servicing, emergency lighting and coordinated annual packages across Chesterfield and Derbyshire.",
  "/service-plans"
)

const securityOrder = ["alarm-maintenance", "alarm-monitoring", "cctv-maintenance", "total-security"]
const fireOrder = ["fire-alarm-servicing", "emergency-lighting-servicing", "fire-compliance"]

function PlanCard({ slug }: { slug: string }) {
  const plan = planPages[slug]
  const isFire = slug.includes("fire") || slug.includes("emergency")
  const highlighted = slug === "total-security" || slug === "fire-compliance"
  const residential = plan.residentialPrice ?? (isFire ? null : "Quoted after system review")
  const commercial = plan.commercialPrice ?? "Quoted to system and site"
  return <article className={`plan-card unified-plan-card ${highlighted ? "featured" : ""}`}>
    <span className="micro-label">{isFire ? "Commercial Fire & compliance" : "Residential and commercial support"}</span>
    <h2>{plan.eyebrow}</h2>
    <p>{plan.intro}</p>
    <div className="unified-plan-prices">
      {residential && <div><strong>Residential</strong><span>{residential}</span></div>}
      <div><strong>Commercial</strong><span>{commercial}</span></div>
    </div>
    <ul>{plan.included.slice(0,5).map(item => <li key={item}>{item}</li>)}</ul>
    <Link className={`button ${highlighted ? "button-dark" : "button-outline"}`} href={`/service-plans/${slug}`}>View Plan Details</Link>
  </article>
}

export default function ServicePlansPage() {
  return <>
    <PageHero eyebrow="Monitoring, maintenance and compliance" title="Service plans that continue after installation" intro="Choose the system first, then add the annual support that keeps it useful. NOX provides focused maintenance and monitoring plans alongside coordinated Total Security and Fire Compliance Packages." image="/images/revisions/intruder-maintenance-system-takeover.jpg" imageAlt="Real alarm system maintenance and takeover work completed by NOX"/>
    <TrustStrip/>

    <section className="section"><div className="container"><SectionHeading eyebrow="Ongoing support" title="Keep systems reliable, records clear and future repairs easier to manage" text="A system can appear operational while batteries, camera views, recording health, remote access or device condition are beginning to deteriorate. Planned servicing creates a clear route for testing, defects, renewal and future upgrades."/><FeatureGrid columns={4} items={[
      { title:"Annual engineer servicing", text:"System-health checks, device testing, cleaning, battery review, updates and service records within the agreed scope." },
      { title:"Professional monitoring", text:"Alarm handling, keyholder contact, available verification and agreed escalation procedures." },
      { title:"Fire and emergency lighting", text:"Fire alarm servicing, emergency-lighting testing, records, defect reporting and separately quoted remedial work." },
      { title:"Takeovers and repairs", text:"Suitable existing systems can be inspected before a service, repair or phased-upgrade route is recommended." }
    ]}/></div></section>

    <section className="section section-alt"><div className="container">
      <SectionHeading eyebrow="Security service plans" title="Alarm, monitoring and CCTV support without duplicate residential and commercial tabs" text="Each plan shows the confirmed residential and commercial position on one page. Customers can choose a focused service or combine eligible systems under the Total Security Package."/>
      <div className="plan-grid plan-grid-wide unified-plan-grid">{securityOrder.map(slug => <PlanCard key={slug} slug={slug}/>)}</div>
    </div></section>

    <section className="section"><div className="container">
      <SectionHeading eyebrow="Fire servicing and compliance" title="Fire alarms, emergency lighting and coordinated packages" text="Commercial Fire support is quoted to the property, device quantities and agreed services. The individual pages explain the scope before a survey or takeover inspection is arranged."/>
      <div className="plan-grid plan-grid-wide fire-plan-grid">{fireOrder.map(slug => <PlanCard key={slug} slug={slug}/>)}</div>
    </div></section>

    <section className="section section-alt"><div className="container split-grid"><div>
      <SectionHeading eyebrow="Package direction" title="Bring eligible services under one clearer renewal structure" text="The business model stays simple: install the right equipment, hand it over properly, then provide monitoring, maintenance, Fire servicing or coordinated compliance support where the customer needs it."/>
      <div className="related-links"><Link href="/service-plans/total-security">Total Security Package →</Link><Link href="/service-plans/fire-compliance">Fire Compliance Package →</Link><Link href="/service-plans/fire-alarm-servicing">Fire Alarm Servicing →</Link><Link href="/service-plans/emergency-lighting-servicing">Emergency Lighting Servicing →</Link></div>
    </div><aside className="dark-panel"><span className="eyebrow">One point of contact</span><h3>Installation, service history and future support stay connected</h3><p>Where practical, NOX can coordinate renewal dates, engineer attendance and identified remedial work across eligible systems without hiding what is included.</p><Link className="button button-light" href="/get-quote#quote-form">Request Package Pricing</Link></aside></div></section>

    <section className="section"><div className="container split-grid"><div><SectionHeading eyebrow="System takeovers" title="Existing systems do not always need replacing" text="NOX can inspect suitable alarms, CCTV and Fire systems, identify faults, recover access where possible and recommend repairs or upgrades only where they make sense."/><Link className="button button-outline" href="/get-quote#quote-form">Discuss an Existing System</Link></div><aside className="dark-panel"><h3>What is normally separate?</h3><p>Replacement equipment, batteries, parts, repairs and specialist work are separate unless the written quotation or annual agreement specifically includes them.</p></aside></div></section>
    <LocalSearchLinks slugs={["alarm-maintenance-chesterfield","alarm-monitoring-derbyshire","fire-alarm-servicing-chesterfield","emergency-lighting-testing-derbyshire","security-system-takeover"]} title="Find the right ongoing-support route"/>
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Customer reviews" title="Aftercare and support customers can come back to"/><ReviewGrid limit={3}/></div></section>
    <ConversionPanel title="Choose focused servicing or a coordinated package" text="Tell us what systems are installed and what ongoing support you need. We will confirm the most suitable inspection, plan or package route."/>
  </>
}
