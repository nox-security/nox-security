import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Breadcrumbs, CaseStudyGrid, Checklist, ContactActions, ConversionPanel, FeatureGrid, JsonLd, PageHero, ReviewGrid, SectionHeading, TrustStrip } from "@/components/marketing"
import { localLandingPages } from "@/lib/landing"
import { pageMetadata, site } from "@/lib/site"

export function generateStaticParams() {
  return Object.keys(localLandingPages).map(slug => ({ slug }))
}

function contextFor(slug: string, serviceType: string, audience: "Residential" | "Commercial" | "Residential & Commercial") {
  const value = `${slug} ${serviceType}`.toLowerCase()
  if (value.includes("fire-alarm-servicing")) return { label: "Arrange Fire Alarm Servicing", type: "Servicing" as const }
  if (value.includes("fire-alarm-repair")) return { label: "Discuss a Fire Alarm Takeover", type: "Takeover" as const }
  if (value.includes("fire-alarm-install")) return { label: "Request Fire Alarm Pricing", type: "Installation" as const }
  if (value.includes("emergency-lighting")) return { label: value.includes("testing") ? "Book Emergency Lighting Testing" : "Request Emergency Lighting Pricing", type: value.includes("testing") ? "Servicing" as const : "Installation" as const }
  if (value.includes("monitoring")) return { label: "Request Monitoring Pricing", type: "Monitoring" as const }
  if (value.includes("maintenance")) return { label: "Get a Maintenance Quote", type: "Servicing" as const }
  if (value.includes("takeover")) return { label: "Discuss an Existing System", type: "Takeover" as const }
  if (value.includes("repair") || value.includes("upgrade")) return { label: "Report a System Fault", type: "Repair" as const }
  if (value.includes("cctv")) return { label: audience === "Residential" ? "Get a Home CCTV Recommendation" : "Plan a CCTV System", type: "Installation" as const }
  if (value.includes("alarm") || value.includes("security")) return { label: audience === "Residential" ? "Plan My Ajax Alarm" : "Book a Site Survey", type: "Installation" as const }
  return { label: "Get a Quote", type: "General" as const }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const page = localLandingPages[slug]
  if (!page) return {}
  return pageMetadata(page.metaTitle, page.metaDescription, `/services/${page.slug}`)
}

export default async function LocalServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = localLandingPages[slug]
  if (!page) notFound()
  const context = contextFor(page.slug, page.serviceType, page.audience)

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    description: page.metaDescription,
    serviceType: page.serviceType,
    provider: { "@type": "LocalBusiness", name: site.name, url: site.url, telephone: site.phone },
    areaServed: page.location,
    audience: page.audience,
    url: `${site.url}/services/${page.slug}`
  }
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map(item => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } }))
  }
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
      { "@type": "ListItem", position: 3, name: page.title, item: `${site.url}/services/${page.slug}` }
    ]
  }

  return <>
    <JsonLd data={serviceSchema}/><JsonLd data={faqSchema}/><JsonLd data={breadcrumbSchema}/>
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: page.title }]}/>
    <PageHero eyebrow={`${page.eyebrow} · ${page.audience}`} title={page.title} intro={page.intro} image={page.image} imageAlt={page.imageAlt}>
      <ContactActions primaryLabel={context.label} audience={page.audience} serviceCategory={page.serviceType} enquiryType={context.type} sourceLabel={page.slug}/>
    </PageHero>
    <TrustStrip variant={page.serviceType.toLowerCase().includes("fire") || page.serviceType.toLowerCase().includes("emergency") ? "fire" : page.audience === "Commercial" ? "commercial" : "servicing"}/>
    <section className="section"><div className="container split-grid"><div><SectionHeading eyebrow="What the service needs to solve" title={page.problemTitle} text={page.problemText}/><Checklist items={page.included}/></div><aside className="dark-panel"><span className="eyebrow">Service area</span><h3>{page.location}</h3><p>The property, existing equipment, access, system condition and required outcome are reviewed before NOX confirms the survey, inspection or quotation route.</p><ContactActions primaryLabel={context.label} compact audience={page.audience} serviceCategory={page.serviceType} enquiryType={context.type} sourceLabel={`${page.slug}-local-route`}/></aside></div></section>
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="How the work moves forward" title="Enquiry, assessment, delivery and ongoing support"/><FeatureGrid items={page.process} columns={4}/></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="Relevant NOX projects" title="Genuine installation and takeover experience" text="Real work connected to the system, property type or service being researched."/><CaseStudyGrid slugs={page.caseStudySlugs}/></div></section>
    <section className="section section-alt"><div className="container split-grid"><div><SectionHeading eyebrow="Related routes" title="Continue into the right system, plan or guide"/><div className="related-links">{page.related.map(item => <Link href={item.href} key={item.href}>{item.label} →</Link>)}</div></div><aside className="dark-panel"><h3>What affects the quotation</h3><p>Property or site size, equipment quantities, existing faults, access, cable routes, required recording or monitoring, several buildings and remedial work can all change the scope.</p></aside></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="Customer feedback" title="Advice, workmanship and local support"/><ReviewGrid names={page.serviceType.toLowerCase().includes("fire") || page.serviceType.toLowerCase().includes("emergency") ? ["Rory Stirland"] : ["Jeremy Bunting"]}/></div></section>
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Common questions" title="Clear information before you enquire"/><div className="faq-list">{page.faq.map(item => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></div></section>
    <ConversionPanel title={context.label} text="Share the property or site, existing system, known faults and the work required. NOX will confirm the correct survey, service, repair or takeover next step." primaryLabel={context.label} audience={page.audience} serviceCategory={page.serviceType} enquiryType={context.type} sourceLabel={`${page.slug}-final`}/>
  </>
}
