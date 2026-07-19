import type { Metadata } from "next"
import Link from "next/link"
import { ConversionPanel, FeatureGrid, PageHero, ReviewGrid, SectionHeading, TrustStrip } from "@/components/marketing"
import { planPages } from "@/lib/content"
import { pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Security & Fire Service Plans Chesterfield",
  "Annual maintenance for new and traditional alarm, CCTV and fire systems, professional monitoring, emergency lighting and coordinated packages across Chesterfield and Derbyshire.",
  "/service-plans"
)

const order = ["alarm-maintenance", "alarm-monitoring", "cctv-maintenance", "fire-alarm-servicing", "emergency-lighting-servicing", "total-security", "fire-compliance"]

export default function ServicePlansPage() {
  return <>
    <PageHero eyebrow="Monitoring, maintenance and compliance" title="Local aftercare that keeps systems useful after installation" intro="NOX supports new NOX installations and suitable traditional alarms, CCTV and fire systems with annual servicing, professional monitoring, emergency lighting, takeovers and coordinated packages." image="/images/editorial/home-maintenance.jpg" imageAlt="Real alarm system maintenance and takeover work completed by NOX"/>
    <TrustStrip/>
    <section className="section"><div className="container"><SectionHeading eyebrow="Why ongoing support matters" title="Protection should remain reliable, current and easy to manage" text="A system can appear operational while batteries, camera views, recording health, remote access or device condition are beginning to deteriorate. Planned servicing gives customers a clearer route for testing, records, defects and future support."/><FeatureGrid columns={4} items={[
      { title:"Annual engineer servicing", text:"System-health checks, device testing, cleaning, battery review, updates and service records within the agreed scope." },
      { title:"Professional monitoring", text:"Alarm handling, keyholder contact, available verification and agreed escalation procedures." },
      { title:"Fire alarm servicing and emergency lighting", text:"Ajax EN54 and suitable traditional fire systems, testing, records, defect reporting and separately quoted remedial work." },
      { title:"Takeovers and repairs", text:"Suitable existing systems can be inspected before a service, repair or upgrade route is recommended." }
    ]}/></div></section>
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Annual plans" title="Clear residential and commercial options" text="Confirmed prices are shown where available. Fire and larger commercial packages are quoted to the system quantities, visit scope and property requirements."/><div className="plan-grid plan-grid-wide">{order.map(slug => { const plan = planPages[slug]; return <article className={`plan-card ${slug === "total-security" ? "featured" : ""}`} key={slug}><span className="micro-label">{plan.eyebrow}</span><h2>{plan.title}</h2>{(plan.residentialPrice || plan.commercialPrice) && <div className="plan-price">{plan.residentialPrice ?? plan.commercialPrice}</div>}<p>{plan.intro}</p><ul>{plan.included.slice(0,5).map(item => <li key={item}>{item}</li>)}</ul><Link className={`button ${slug === "total-security" ? "button-dark" : "button-outline"}`} href={`/service-plans/${slug}`}>View Plan Details</Link></article>})}</div></div></section>
    <section className="section"><div className="container split-grid"><div><SectionHeading eyebrow="Residential aftercare" title="Straightforward support for alarms and CCTV at home" text="Annual servicing, monitoring and CCTV maintenance can be chosen individually or brought together where the confirmed package offers better value and simpler renewal."/><div className="related-links"><Link href="/service-plans/alarm-maintenance">Alarm maintenance →</Link><Link href="/service-plans/alarm-monitoring">Alarm monitoring →</Link><Link href="/service-plans/cctv-maintenance">CCTV maintenance →</Link></div></div><aside className="dark-panel"><span className="eyebrow">Commercial aftercare</span><h3>Security, fire and compliance support</h3><p>Commercial customers can coordinate agreed alarm, CCTV, fire alarm and emergency-lighting work, with one point of contact and clearer renewal dates where practical.</p><Link className="button button-light" href="/commercial">Explore Commercial Support</Link></aside></div></section>
    <section className="section section-alt"><div className="container split-grid"><div><SectionHeading eyebrow="System takeovers" title="Existing systems do not always need replacing" text="NOX can inspect suitable alarms, CCTV and fire systems, identify faults, recover access where possible and recommend repairs or upgrades only where they make sense."/><Link className="button button-outline" href="/get-quote#quote-form">Discuss an Existing System</Link></div><aside className="dark-panel"><h3>What is normally separate?</h3><p>Replacement equipment, batteries, parts, repairs and specialist work are separate unless the written quotation or annual agreement specifically includes them.</p></aside></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="Customer reviews" title="Aftercare and support customers can come back to"/><ReviewGrid limit={3}/></div></section>
    <ConversionPanel title="Choose focused servicing or a coordinated package" text="Tell us what systems are installed, whether the property is residential or commercial and what support you need. We will confirm the most suitable next step."/>
  </>
}
