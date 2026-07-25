import type { Metadata } from "next"
import Link from "next/link"
import { ConversionPanel, PageHero, SectionHeading, TrustStrip } from "@/components/marketing"
import { areas } from "@/lib/content"
import { pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Areas We Cover | Fire & Security Across Derbyshire",
  "Fire alarm, CCTV, intruder alarm and emergency-lighting services from Chesterfield across Derbyshire, Sheffield, the Peak District and nearby areas.",
  "/areas-we-serve",
  { image: "/images/hero-house.webp", imageAlt: "NOX fire and security service area across Derbyshire" },
)

const primary = ["chesterfield","sheffield","derbyshire","dronfield","matlock","bakewell","baslow","buxton","hope-valley","hathersage","darley-dale","ashover"]
const wider = ["derby","nottingham","doncaster","retford","newark-on-trent","ilkeston","sutton-in-ashfield","long-eaton"]

export default function AreasPage() {
  return <>
    <PageHero eyebrow="Local coverage" title="Based in Chesterfield. Working across Derbyshire, Sheffield and surrounding areas." intro="NOX provides residential and commercial alarm, CCTV, fire safety, monitoring, maintenance and system takeover services throughout the core local area, with focused wider coverage for suitable commercial, multi-site and larger residential projects rather than an unrealistic nationwide service list." image="/images/hero-house.webp" imageAlt="Derbyshire property within the NOX Fire and Security service area"/>
    <TrustStrip variant="general"/>
    <section className="section"><div className="container"><SectionHeading eyebrow="Primary coverage" title="Local residential and commercial service areas" text="Each area page uses locally relevant wording rather than duplicating one generic location template."/><div className="area-grid">{primary.map(slug => { const area = areas[slug as keyof typeof areas]; return <Link className="area-card" href={`/areas/${slug}`} key={slug}><strong>{area.name}</strong><span>{area.county}</span><p>{area.intro}</p></Link>})}</div></div></section>
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Wider commercial coverage" title="Derby, Nottingham and connected regional centres" text="These wider locations are selected around realistic travel, commercial opportunity and the routes NOX already serves. Availability depends on project scale, access, programme and the ongoing support required."/><div className="area-grid">{wider.map(slug => { const area = areas[slug as keyof typeof areas]; return <Link className="area-card" href={`/areas/${slug}`} key={slug}><strong>{area.name}</strong><span>{area.county}</span><p>{area.intro}</p></Link>})}</div></div></section>
    <section className="section"><div className="container split-grid"><div><SectionHeading eyebrow="Not sure about your postcode?" title="Send the location and project details" text="The team can confirm whether the property is within the normal service area and whether a quotation or booked survey is the best next step."/><Link className="button button-outline" href="/get-quote">Ask About Your Area</Link></div><aside className="dark-panel"><h3>Commercial travel</h3><p>NOX can travel further for suitable commercial CCTV, fire, intruder, multi-site maintenance and portfolio work.</p><Link className="button button-light" href="/commercial">Commercial Services</Link></aside></div></section>
    <ConversionPanel/>
  </>
}
