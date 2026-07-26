import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { GuideLinks, Breadcrumbs, ContactActions, ConversionPanel, EnquiryPreparation, FeatureGrid, JsonLd, PageHero, ReviewGrid, SectionHeading, TrustStrip } from "@/components/marketing"
import { areas, caseStudies } from "@/lib/content"
import { pageMetadata } from "@/lib/site"
import { breadcrumbSchema, faqSchema, serviceSchema, webPageSchema } from "@/lib/schema"

export function generateStaticParams() { return Object.keys(areas).map(slug => ({ slug })) }

const areaProjects: Record<string, string[]> = {
  chesterfield: ["bottle-and-thyme-commercial-cctv-chesterfield", "buxton-industrial-security", "chesterfield-home-ajax-cctv-intruder"],
  sheffield: ["sheffield-residential-security", "telesis-hitachi-fire-intruder-system"],
  derbyshire: ["telesis-hitachi-fire-intruder-system", "banana-industries-fire-security", "chatsworth-estate-cctv-upgrade"],
  dronfield: ["dronfield-timber-perimeter"],
  buxton: ["peak-electronic-security"],
  retford: ["retford-former-bank-cctv"],
}

function guideSlugs(slug: string) {
  if (slug === "chesterfield" || slug === "sheffield") return ["choosing-cctv-for-home-or-business", "what-information-is-needed-for-a-fire-alarm-quote", "how-much-does-an-ajax-alarm-cost"]
  return ["choosing-cctv-for-home-or-business", "taking-over-an-existing-security-system", "how-often-should-security-systems-be-serviced"]
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const area = areas[slug as keyof typeof areas]
  if (!area) return {}
  return pageMetadata(
    `Security Systems ${area.name} | CCTV, Alarms & Fire`,
    `CCTV, intruder alarms, fire alarms, emergency lighting and servicing in ${area.name}, ${area.county}, from NOX Fire & Security. Surveys and quotes available.`,
    `/areas/${slug}`,
    {
      image: "/images/hero-house.webp",
      imageAlt: `Fire and security systems across ${area.name}`,
    },
  )
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const area = areas[slug as keyof typeof areas]
  if (!area) notFound()

  const path = `/areas/${slug}`
  const title = `Fire and security systems in ${area.name}`
  const description = `${area.intro} NOX provides tailored installation, servicing, maintenance and suitable system takeovers.`
  const faqs = [
    { q: `Does NOX install CCTV and alarms in ${area.name}?`, a: `Yes. NOX surveys and installs suitable CCTV, intruder alarm and perimeter-protection systems for homes and businesses in ${area.name} and nearby areas including ${area.nearby}.` },
    { q: `Can NOX service an existing fire or security system in ${area.name}?`, a: "Suitable existing alarm, CCTV, fire alarm and emergency-lighting systems can be inspected for condition, access, compatibility, records and parts availability before a takeover or servicing scope is confirmed." },
    { q: `Do I need a survey before receiving a quotation in ${area.name}?`, a: "A survey is recommended where device positions, cable routes, fire information, access, several buildings or an existing system affect the design. Clear photographs and system details can help NOX decide the correct first step." },
    { q: `Which areas near ${area.name} do you cover?`, a: `Local coverage includes ${area.nearby}. Project suitability depends on the service, site access and scale of work.` },
  ]

  const structuredData = [
    serviceSchema({ name: title, description, path, serviceType: ["CCTV installation", "Intruder alarms", "Fire alarms", "Emergency lighting", "System servicing"], areaServed: { "@type": "AdministrativeArea", name: area.name }, image: "/images/hero-house.webp" }),
    webPageSchema({ name: title, description, path, image: "/images/hero-house.webp" }),
    faqSchema(faqs),
    breadcrumbSchema([{ name: "Home", path: "" }, { name: "Areas We Serve", path: "/areas-we-serve" }, { name: area.name, path }]),
  ]

  const projects = caseStudies.filter(project => (areaProjects[slug] ?? []).includes(project.slug))

  return <>
    {structuredData.map((data, index) => <JsonLd data={data} key={index}/>)}
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Areas We Serve", href: "/areas-we-serve" }, { label: area.name }]}/>
    <PageHero eyebrow={`${area.name}, ${area.county}`} title={`CCTV, intruder alarms and fire systems in ${area.name}`} intro={area.intro} image="/images/hero-house.webp" imageAlt={`Home and business security systems in ${area.name}`}>
      <ContactActions primaryLabel={`Get a Quote in ${area.name}`} serviceCategory="Fire and security systems" enquiryType="General" sourceLabel={`area-${slug}`}/>
    </PageHero>
    <TrustStrip variant="general"/>

    <section className="section"><div className="container split-grid"><div><SectionHeading eyebrow="Local system design" title={`Security surveys, installation and servicing around ${area.name}`} text={area.focus}/><p className="lead-small">Nearby coverage includes {area.nearby}. Every proposal is based on the property, existing equipment, access and the required outcome rather than a fixed equipment list.</p></div><aside className="dark-panel"><h3>Start with one clear enquiry</h3><p>Share the postcode, property type, service required and any existing system details. NOX will confirm whether the next step is a survey, service visit, takeover assessment or quotation.</p><ContactActions primaryLabel={`Discuss a Project in ${area.name}`} compact serviceCategory="Fire and security systems" sourceLabel={`area-${slug}-intro`}/></aside></div></section>

    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Residential services" title={`Home CCTV and alarm systems in ${area.name}`} text="Protection is planned around entrances, driveways, garages, outbuildings, family routines and the preferred method of control."/><FeatureGrid columns={4} items={[
      { title:"Intruder alarms", text:"Ajax wireless and suitable hybrid alarm options with app control, keypads, fobs, sirens and photo verification where appropriate." },
      { title:"Home CCTV", text:"Driveway, entrance, garden and outbuilding coverage with professional recording, remote viewing and carefully planned camera positions." },
      { title:"Perimeter protection", text:"External detection and earlier warning can be considered where the layout, range, pets, access and surrounding movement make it suitable." },
      { title:"Maintenance and monitoring", text:"Alarm monitoring, annual servicing, CCTV maintenance and takeover support for suitable new and existing systems." },
    ]}/></div></section>

    <section className="section"><div className="container"><SectionHeading eyebrow="Commercial services" title={`Commercial fire and security support in ${area.name}`} text={area.commercial}/><FeatureGrid columns={4} items={[
      { title:"Commercial CCTV", text:"High-resolution systems for retail, offices, hospitality, yards, warehouses and industrial premises, designed around evidence and operating conditions." },
      { title:"Commercial intruder alarms", text:"Internal, external and perimeter detection planned around access points, staff routines, zones, outbuildings and keyholder requirements." },
      { title:"Fire and emergency lighting", text:"New installations, suitable takeovers, servicing, testing, defect reporting and coordinated support within the agreed scope." },
      { title:"Recurring support", text:"Monitoring, maintenance, planned visits and clearer service records for businesses that need dependable ongoing support." },
    ]}/></div></section>

    <section className="section section-alt"><div className="container split-grid"><div><SectionHeading eyebrow="Service routes" title={`Choose the right service for a property in ${area.name}`} text="Each core service page explains the design process, suitable systems, quotation factors, relevant projects and ongoing support."/><div className="related-links"><Link href="/systems/cctv">CCTV installation →</Link><Link href="/systems/intrusion-alarms">Intruder alarm installation →</Link><Link href="/systems/fire-safety">Fire alarm installation →</Link><Link href="/systems/emergency-lighting">Emergency lighting →</Link><Link href="/service-plans">Servicing, monitoring and maintenance →</Link><Link href="/services">Local service landing pages →</Link></div></div><aside className="dark-panel"><h3>Existing system in the building?</h3><p>NOX can assess suitable existing alarms, CCTV, fire alarms and emergency lighting, identify the condition and recommend a practical takeover, repair or upgrade route.</p><Link className="button button-light" href="/get-quote?enquiry_type=Takeover#quote-form">Discuss a System Takeover</Link></aside></div></section>

    {!!projects.length && <section className="section"><div className="container"><SectionHeading eyebrow="Local proof" title={`Relevant NOX projects in and around ${area.name}`} text="Read genuine project details showing the property type, systems, customer requirement and work completed."/><div className="guide-link-grid">{projects.map(project => <Link href={`/case-studies/${project.slug}`} key={project.slug}><span>{project.category} · {project.location}</span><strong>{project.title}</strong><small>{project.summary}</small></Link>)}</div></div></section>}

    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Local guides" title={`Answers for fire and security customers in ${area.name}`} text="Useful information for comparing systems, preparing a quotation and deciding whether existing equipment can be retained."/><GuideLinks slugs={guideSlugs(slug)}/></div></section>
    <EnquiryPreparation topic="fire or security system" commercial/>

    <section className="section"><div className="container"><SectionHeading eyebrow="Customer reviews" title="Local advice, workmanship and ongoing support"/><ReviewGrid names={slug === "chesterfield" ? ["Jez S", "Ryan Hargreaves", "Rory Stirland"] : slug === "sheffield" ? ["Sasha Brailsford", "Nathan De La Rosa", "Jeremy Bunting"] : ["Jeremy Bunting", "Jez S", "Rory Stirland"]}/></div></section>

    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Common questions" title={`Fire and security services in ${area.name}`}/><div className="faq-list">{faqs.map(item => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></div></section>
    <ConversionPanel title={`Request a tailored quote in ${area.name}`} text="Tell NOX about the property, existing equipment, system required and preferred timescale. The team will confirm the correct survey, servicing or quotation route." primaryLabel={`Get a Quote in ${area.name}`} serviceCategory="Fire and security systems" enquiryType="General" sourceLabel={`area-${slug}-final`}/>
  </>
}
