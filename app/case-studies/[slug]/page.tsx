import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { caseStudies } from "@/lib/content"
import { Breadcrumbs, ContactActions, ConversionPanel, JsonLd, ReviewGrid, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata, site } from "@/lib/site"

export function generateStaticParams() {
  return caseStudies.map(project => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = caseStudies.find(item => item.slug === slug)
  if (!project) return {}
  return pageMetadata(
    project.metaTitle ?? `${project.title} | NOX Fire & Security`,
    project.metaDescription ?? project.summary,
    `/case-studies/${project.slug}`
  )
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = caseStudies.find(item => item.slug === slug)
  if (!project) notFound()

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.title,
    description: project.metaDescription ?? project.summary,
    image: [`${site.url}${project.image}`, ...(project.gallery ?? []).map(item => `${site.url}${item.src}`)],
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name, logo: { "@type": "ImageObject", url: `${site.url}/images/projects/logo-nox-fire-security.jpg` } },
    about: project.systems,
    keywords: project.searchKeywords?.join(", "),
    mainEntityOfPage: `${site.url}/case-studies/${project.slug}`
  }


  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Case Studies", item: `${site.url}/case-studies` },
      { "@type": "ListItem", position: 3, name: project.title, item: `${site.url}/case-studies/${project.slug}` }
    ]
  }
  return <>
    <JsonLd data={schema}/><JsonLd data={breadcrumbSchema}/>
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Case Studies", href: "/case-studies" }, { label: project.title }]} />
    <section className="project-hero">
      <div className="project-hero-media"><img src={project.image} alt={project.alt}/></div>
      <div className="project-hero-overlay"/>
      <div className="container project-hero-copy">
        <span className="eyebrow">{project.category} · {project.location}</span>
        <h1>{project.title}</h1>
        <p className="lead">{project.summary}</p>
        <ContactActions primaryLabel="Request a Similar Security Survey"/>
      </div>
    </section>
    <TrustStrip/>

    <section className="section"><div className="container project-story-grid">
      <div>
        <SectionHeading eyebrow="The project" title="Security designed around the premises" text={project.story ?? project.summary}/>
        <div className="case-detail-facts project-facts">
          <div><strong>Customer requirement</strong><p>{project.requirement}</p></div>
          <div><strong>NOX delivery</strong><p>{project.delivery}</p></div>
        </div>
      </div>
      <aside className="dark-panel project-scope-panel">
        <h3>Project scope</h3>
        <div className="sector-tags">{project.systems.map(item => <span key={item}>{item}</span>)}</div>
        <p>Planning a similar residential or commercial project? Send the property details and the NOX team will guide the right survey and quotation route.</p>
        <ContactActions primaryLabel="Request Your Free Security Survey" compact/>
      </aside>
    </div></section>

    {!!project.gallery?.length && <section className="section section-alt"><div className="container">
      <SectionHeading eyebrow="Real installation photography" title="The project from property to handover" text="Genuine NOX project images showing the premises, equipment and completed installation."/>
      <div className="project-gallery">{project.gallery.map((image, index) => <figure key={image.src} className={index === 0 ? "project-gallery-feature" : ""}><img src={image.src} alt={image.alt}/></figure>)}</div>
    </div></section>}

    {!!project.searchKeywords?.length && <section className="section"><div className="container search-intent-section">
      <SectionHeading eyebrow="Local expertise" title={`Fire & Security work in ${project.location}`} text={`NOX supports homes and businesses with property-led surveys, installation and ongoing service across ${project.location} and surrounding areas.`}/>
      <div className="sector-tags">{project.searchKeywords.map(keyword => <span key={keyword}>{keyword}</span>)}</div>
      <div className="related-links"><Link href="/systems/cctv">CCTV systems →</Link><Link href="/systems/intrusion-alarms">Intruder alarms →</Link><Link href="/service-plans">Monitoring & maintenance →</Link><Link href="/areas-we-serve">Areas we cover →</Link></div>
    </div></section>}

    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Verified feedback" title="Trusted for advice, workmanship and handover"/><ReviewGrid limit={3}/></div></section>
    <ConversionPanel title="Discuss a similar project with NOX" text="Tell us about the property, the systems involved and what you need to achieve. We will review the details and arrange the right survey or quotation route."/>
  </>
}
