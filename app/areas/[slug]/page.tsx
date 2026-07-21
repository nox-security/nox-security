import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ConversionPanel, FeatureGrid, JsonLd, PageHero, SectionHeading, TrustStrip } from "@/components/marketing"
import { areas } from "@/lib/content"
import { pageMetadata, site } from "@/lib/site"
import { indexableAreaSlugs } from "@/lib/seo"

export function generateStaticParams() { return Object.keys(areas).map(slug => ({ slug })) }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const area = areas[slug as keyof typeof areas]
  if (!area) return {}
  const title = `Security Systems ${area.name} | Alarms, CCTV & Fire`
  const description = `${area.intro} Request a tailored quote from NOX Fire & Security.`
  const metadata = pageMetadata(title, description, `/areas/${slug}`)
  if (!indexableAreaSlugs.has(slug)) metadata.robots = { index: false, follow: true }
  return metadata
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const area = areas[slug as keyof typeof areas]
  if (!area) notFound()
  const schema = { "@context":"https://schema.org", "@type":"Service", name:`Fire and security systems in ${area.name}`, description:area.intro, provider:{"@type":"LocalBusiness",name:site.name,url:site.url}, areaServed:{"@type":"AdministrativeArea",name:area.name}, url:`${site.url}/areas/${slug}` }
  return <>
    <JsonLd data={schema}/>
    <PageHero eyebrow={`${area.name}, ${area.county}`} title={`Alarm, CCTV and fire security services in ${area.name}`} intro={area.intro} image="/images/hero-house.webp" imageAlt={`Home and business security systems in ${area.name}`}/>
    <TrustStrip/>
    <section className="section"><div className="container split-grid"><div><SectionHeading eyebrow="Local system design" title={`Security surveys and installations around ${area.name}`} text={area.focus}/><p className="lead">Nearby coverage includes {area.nearby}.</p></div><aside className="dark-panel"><h3>One clear enquiry route</h3><p>Send the initial project details for a tailored quotation. The NOX team will arrange a survey when the property needs to be assessed first.</p><div className="button-row"><Link className="button button-light" href="/get-quote">Get a Fire & Security Quote</Link></div></aside></div></section>
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Residential services" title={`Home security in ${area.name}`} text="Systems are designed around the property, access points, daily routines and the customer's preferred level of control."/><FeatureGrid columns={4} items={[
      { title:"Intruder alarms", text:"Ajax wireless, wired or hybrid alarm options with app, keypad, fob and suitable verification features." },
      { title:"CCTV", text:"Driveway, entrance, garden and outbuilding coverage with professional recording and remote viewing." },
      { title:"Perimeter protection", text:"External detection and sirens can be considered where layout, range and site conditions are suitable." },
      { title:"Annual support", text:"Professional monitoring, alarm maintenance, CCTV servicing and suitable system takeovers." }
    ]}/></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="Commercial services" title={`Commercial fire and security support in ${area.name}`} text={area.commercial}/><FeatureGrid columns={4} items={[
      { title:"Commercial CCTV", text:"High-resolution camera systems for retail, offices, yards, garages, warehouses and industrial premises." },
      { title:"Commercial alarms", text:"Internal, external and perimeter detection designed around the site's operating routine." },
      { title:"Fire and emergency lighting", text:"Installation, servicing, testing, takeover and coordinated annual support within the agreed scope." },
      { title:"Monitoring and maintenance", text:"Professional monitoring, keyholder contact, planned servicing, records and renewal support." }
    ]}/></div></section>
    <section className="section section-alt"><div className="container split-grid"><div><SectionHeading eyebrow="Useful local searches" title={`Find the right NOX service in ${area.name}`}/><div className="related-links"><Link href="/systems/intrusion-alarms">Intruder alarm installation →</Link><Link href="/systems/cctv">CCTV installation →</Link><Link href="/systems/fire-safety">Fire alarm installation and servicing →</Link><Link href="/service-plans">Monitoring and maintenance →</Link></div></div><aside className="dark-panel"><h3>Existing system?</h3><p>NOX can inspect suitable existing alarms, CCTV and fire systems, identify faults and recommend a practical takeover or upgrade route.</p><Link className="button button-light" href="/get-quote">Discuss a System Takeover</Link></aside></div></section>
    <ConversionPanel title={`Request a tailored quote in ${area.name}`} text="Use one enquiry route for residential, commercial, installation, servicing or existing-system support."/>
  </>
}
