import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { caseStudies } from "@/lib/content"
import { Breadcrumbs, ContactActions, ConversionPanel, JsonLd, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata, site } from "@/lib/site"

export function generateStaticParams() {
  return caseStudies.map(project => ({ slug: project.slug }))
}

function relatedRoute(project: (typeof caseStudies)[number]) {
  const value = `${project.category} ${project.systems.join(" ")}`.toLowerCase()
  if (value.includes("fire")) return { service: { href: "/fire-compliance", label: "Fire & Compliance" }, guide: { href: "/blog/what-is-included-in-a-fire-alarm-service", label: "What is included in a fire alarm service?" }, cta: "Discuss a Fire Project" }
  if (value.includes("cctv") && (value.includes("industrial") || value.includes("commercial") || value.includes("hospitality") || value.includes("estate"))) return { service: { href: "/commercial/cctv", label: "Commercial CCTV" }, guide: { href: "/blog/how-many-cameras-does-a-commercial-site-need", label: "How many cameras does a commercial site need?" }, cta: "Plan a CCTV System" }
  if (value.includes("residential") || value.includes("home") || value.includes("eufy")) return { service: { href: "/residential", label: "Residential Security" }, guide: { href: "/blog/how-many-cctv-cameras-does-a-house-need", label: "How many CCTV cameras does a house need?" }, cta: "Discuss My Property" }
  if (value.includes("perimeter")) return { service: { href: "/commercial/yard-perimeter-security", label: "Yard & Perimeter Protection" }, guide: { href: "/blog/can-an-alarm-protect-a-garage-or-outbuilding", label: "Can an alarm protect a garage or outbuilding?" }, cta: "Discuss Perimeter Protection" }
  return { service: { href: "/commercial", label: "Commercial Security" }, guide: { href: "/blog/app-alerts-versus-professional-alarm-monitoring", label: "App alerts versus professional monitoring" }, cta: "Discuss a Similar Project" }
}


function projectArea(project: (typeof caseStudies)[number]) {
  const location = project.location.toLowerCase()
  if (location.includes("chesterfield") || location.includes("brimington")) return { href: "/areas/chesterfield", label: "Fire and security services in Chesterfield" }
  if (location.includes("sheffield")) return { href: "/areas/sheffield", label: "Fire and security services in Sheffield" }
  if (location.includes("dronfield")) return { href: "/areas/dronfield", label: "Fire and security services in Dronfield" }
  if (location.includes("buxton")) return { href: "/areas/buxton", label: "Fire and security services in Buxton" }
  if (location.includes("retford")) return { href: "/areas/retford", label: "Fire and security services in Retford" }
  if (location.includes("derby,")) return { href: "/areas/derby", label: "Fire and security services in Derby" }
  if (location.includes("chatsworth")) return { href: "/areas/bakewell", label: "Fire and security services around Chatsworth and Bakewell" }
  return { href: "/areas/derbyshire", label: "Fire and security services across Derbyshire" }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = caseStudies.find(item => item.slug === slug)
  if (!project) return {}
  return pageMetadata(
    project.metaTitle ?? `${project.title} | NOX Fire & Security`,
    project.metaDescription ?? project.summary,
    `/case-studies/${project.slug}`,
    { image: project.image, imageAlt: project.alt, type: "article" }
  )
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = caseStudies.find(item => item.slug === slug)
  if (!project) notFound()
  const related = relatedRoute(project)
  const area = projectArea(project)
  const caseFaqs = project.faq ?? []

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
    articleSection: project.category,
    contentLocation: { "@type": "Place", name: project.location },
    mainEntityOfPage: `${site.url}/case-studies/${project.slug}`
  }
  const faqStructuredData = caseFaqs.length ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: caseFaqs.map(item => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a }
    }))
  } : null
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Projects", item: `${site.url}/case-studies` },
      { "@type": "ListItem", position: 3, name: project.title, item: `${site.url}/case-studies/${project.slug}` }
    ]
  }

  return <>
    <JsonLd data={schema}/><JsonLd data={breadcrumbSchema}/>{faqStructuredData && <JsonLd data={faqStructuredData}/>}
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Projects", href: "/case-studies" }, { label: project.title }]}/>
    <section className="project-hero">
      <div className="project-hero-media"><img src={project.image} alt={project.alt}/></div>
      <div className="project-hero-overlay"/>
      <div className="container project-hero-copy">
        <span className="eyebrow">{project.category} · {project.location}</span>
        <h1>{project.title}</h1>
        <p className="lead">{project.summary}</p>
        <ContactActions primaryLabel={related.cta} serviceCategory={project.category} enquiryType="Installation" sourceLabel={project.slug}/>
      </div>
    </section>
    <TrustStrip variant={project.category.toLowerCase().includes("fire") ? "fire" : project.category.toLowerCase().includes("residential") ? "residential" : "commercial"}/>

    <section className="section"><div className="container project-story-grid">
      <div>
        <SectionHeading eyebrow="The project" title="What the property or business required" text={project.story ?? project.summary}/>
        <div className="case-detail-facts project-facts">
          <div><strong>Customer requirement</strong><p>{project.requirement}</p></div>
          <div><strong>NOX delivery</strong><p>{project.delivery}</p></div>
        </div>
      </div>
      <aside className="dark-panel project-scope-panel">
        <h3>Project scope</h3>
        <div className="sector-tags">{project.systems.map(item => <span key={item}>{item}</span>)}</div>
        <p>The scope reflects the confirmed project information available, including the property, equipment and work delivered by NOX.</p>
        <ContactActions primaryLabel={related.cta} compact serviceCategory={project.category} enquiryType="Installation" sourceLabel={`${project.slug}-scope`}/>
      </aside>
    </div></section>

    {!!project.gallery?.length && <section className="section section-alt"><div className="container">
      <SectionHeading eyebrow="Real installation photography" title="The project from premises to equipment and handover" text="Genuine NOX images showing the building, system components and completed installation where available."/>
      <div className="project-gallery">{project.gallery.map((image, index) => <figure key={image.src} className={index === 0 ? "project-gallery-feature" : ""}><img src={image.src} alt={image.alt}/></figure>)}</div>
    </div></section>}

    <section className="section"><div className="container">
      <SectionHeading eyebrow="Design and delivery" title={`How NOX approached this ${project.category.toLowerCase()} project`} text="The installed equipment matters, but the positions, property layout, operating routine and handover determine whether the finished system is genuinely useful."/>
      <div className="feature-grid columns-3">{(project.designPriorities ?? [project.requirement, project.delivery, "Plan clear handover and ongoing support around the people using the property."]).map((item, index) => <article className="feature-card" key={item}><span className="feature-number">{String(index + 1).padStart(2, "0")}</span><h3>{index === 0 ? "Coverage and requirement" : index === 1 ? "Installation planning" : "Control and handover"}</h3><p>{item}</p></article>)}</div>
    </div></section>

    <section className="section section-alt"><div className="container split-grid"><div><SectionHeading eyebrow="Completed outcome" title={`What was delivered at ${project.location}`} text={project.outcome ?? project.delivery}/><p className="lead-small">{project.localContext ?? `A similar project in ${project.location} should begin with a site survey covering access, existing equipment, required coverage and ongoing support.`}</p><div className="related-links"><Link href={area.href}>{area.label} →</Link><Link href={related.service.href}>{related.service.label} →</Link><Link href={related.guide.href}>{related.guide.label} →</Link><Link href="/case-studies">More NOX projects →</Link></div></div><aside className="dark-panel"><h3>Preparing a similar quotation</h3><p>Share the property type, postcode, entrances or areas to cover, existing system details, known faults, approximate scale and preferred timescale. Photographs or plans can help define the correct survey.</p><ContactActions primaryLabel={related.cta} compact serviceCategory={project.category} enquiryType="Installation" sourceLabel={`${project.slug}-outcome`}/></aside></div></section>

    {!!caseFaqs.length && <section className="section"><div className="container"><SectionHeading eyebrow="Project questions" title={`Questions about similar ${project.category.toLowerCase()} work`}/><div className="faq-list">{caseFaqs.map(item => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></div></section>}

    <ConversionPanel title="Discuss a similar project with NOX" text={`Tell us about the property in ${project.location.split(",")[0]}, the existing systems and what the project needs to achieve. NOX will confirm the right survey and quotation process.`} primaryLabel={related.cta} serviceCategory={project.category} enquiryType="Installation" sourceLabel={`${project.slug}-final`}/>
  </>
}
