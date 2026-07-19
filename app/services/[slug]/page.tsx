import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Breadcrumbs, CaseStudyGrid, Checklist, ContactActions, ConversionPanel, FeatureGrid, JsonLd, PageHero, ReviewGrid, SectionHeading, TrustStrip } from "@/components/marketing"
import { localLandingPages } from "@/lib/landing"
import { pageMetadata, site } from "@/lib/site"

export function generateStaticParams() {
  return Object.keys(localLandingPages).map(slug => ({ slug }))
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

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    description: page.metaDescription,
    serviceType: page.serviceType,
    provider: { "@type": "LocalBusiness", name: site.name, url: site.url, telephone: site.phone },
    areaServed: page.location,
    audience: page.audience,
    keywords: page.searchKeywords.join(", "),
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
      { "@type": "ListItem", position: 2, name: "Local Services", item: `${site.url}/services` },
      { "@type": "ListItem", position: 3, name: page.title, item: `${site.url}/services/${page.slug}` }
    ]
  }

  return <>
    <JsonLd data={serviceSchema}/><JsonLd data={faqSchema}/><JsonLd data={breadcrumbSchema}/>
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Local Services", href: "/services" }, { label: page.title }]}/>
    <PageHero eyebrow={`${page.eyebrow} · ${page.audience}`} title={page.title} intro={page.intro} image={page.image} imageAlt={page.imageAlt}/>
    <TrustStrip/>
    <section className="section"><div className="container split-grid"><div><SectionHeading eyebrow="Designed around the property" title={page.problemTitle} text={page.problemText}/><Checklist items={page.included}/></div><aside className="dark-panel"><span className="eyebrow">Local route</span><h3>{page.location}</h3><p>One enquiry can cover a new installation, servicing, monitoring, a takeover or a package. NOX will direct it to the right residential or commercial route.</p><ContactActions primaryLabel="Request Your Free Security Survey" compact/></aside></div></section>
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="How the project moves forward" title="Survey, design, delivery and support"/><FeatureGrid items={page.process} columns={4}/></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="Real NOX projects" title="Relevant installation experience" text="Genuine local work connected to the service you are researching."/><CaseStudyGrid slugs={page.caseStudySlugs}/></div></section>
    <section className="section section-alt"><div className="container split-grid"><div><SectionHeading eyebrow="Related routes" title="Move between systems, service plans and local pages"/><div className="related-links">{page.related.map(item => <Link href={item.href} key={item.href}>{item.label} →</Link>)}</div></div><aside className="dark-panel"><h3>Search terms this page answers</h3><div className="sector-tags">{page.searchKeywords.map(keyword => <span key={keyword}>{keyword}</span>)}</div></aside></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="Customer reviews" title="Trusted for clear advice, tidy installation and local support"/><ReviewGrid limit={3}/></div></section>
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Common questions" title="Clear information before you enquire"/><div className="faq-list">{page.faq.map(item => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></div></section>
    <ConversionPanel title="Tell NOX what you need to protect" text="Share the property type, location, current system and required service. The team will review the details and arrange the correct survey, inspection or quotation route."/>
  </>
}
