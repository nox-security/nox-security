import type { Metadata } from "next"
import Link from "next/link"
import { ConversionPanel, PageHero, SectionHeading, TrustStrip } from "@/components/marketing"
import { planPages } from "@/lib/content"
import { pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Security & Fire Service Plans Chesterfield",
  "Annual alarm maintenance, professional monitoring, CCTV maintenance, fire alarm servicing, emergency lighting and coordinated packages across Chesterfield and Derbyshire.",
  "/service-plans"
)

const order = ["alarm-maintenance", "alarm-monitoring", "cctv-maintenance", "fire-alarm-servicing", "emergency-lighting-servicing", "total-security", "fire-compliance"]

export default function ServicePlansPage() {
  return <>
    <PageHero eyebrow="Monitoring, maintenance and compliance" title="Annual support that keeps systems useful after installation" intro="Choose a focused service or combine the agreed systems under one annual arrangement with clearer records, one point of contact and a planned renewal date." image="/images/maintenance.png" imageAlt="NOX annual security system maintenance and monitoring services"/>
    <TrustStrip/>
    <section className="section"><div className="container"><SectionHeading eyebrow="Annual plans" title="Clear residential and commercial options" text="Confirmed prices are shown where available. Fire and larger commercial packages are quoted to the system quantities, service frequency and site requirements."/><div className="plan-grid plan-grid-wide">{order.map(slug => { const plan = planPages[slug]; return <article className={`plan-card ${slug === "total-security" ? "featured" : ""}`} key={slug}><span className="micro-label">{plan.eyebrow}</span><h2>{plan.title}</h2>{(plan.residentialPrice || plan.commercialPrice) && <div className="plan-price">{plan.residentialPrice ?? plan.commercialPrice}</div>}<p>{plan.intro}</p><ul>{plan.included.slice(0,5).map(item => <li key={item}>{item}</li>)}</ul><Link className={`button ${slug === "total-security" ? "button-dark" : "button-outline"}`} href={`/service-plans/${slug}`}>View Plan Details</Link></article>})}</div></div></section>
    <section className="section section-alt"><div className="container split-grid"><div><SectionHeading eyebrow="System takeovers" title="Existing systems do not always need replacing" text="NOX can inspect suitable alarms, CCTV and fire systems, identify faults, recover access where possible and recommend repairs or upgrades only where they make sense."/><Link className="button button-outline" href="/contact">Discuss an Existing System</Link></div><aside className="dark-panel"><h3>What is normally separate?</h3><p>Replacement equipment, batteries, parts, repairs and specialist work are separate unless the written quotation or annual agreement specifically includes them.</p></aside></div></section>
    <ConversionPanel title="Choose focused servicing or a coordinated package" text="Send the system details for pricing or book a survey when the existing equipment needs to be inspected first."/>
  </>
}
