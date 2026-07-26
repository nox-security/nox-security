import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Breadcrumbs, ContactActions, ConversionPanel, JsonLd, PageHero, TrustStrip } from "@/components/marketing"
import { blogPosts, getBlogPost } from "@/lib/blog"
import { pageMetadata, site } from "@/lib/site"

export function generateStaticParams() {
  return blogPosts.map(post => ({ slug: post.slug }))
}

function guideContext(category: string) {
  const value = category.toLowerCase()
  if (value.includes("fire")) return { label: "Discuss My Fire Requirements", service: "Fire & Compliance", audience: "Commercial" as const }
  if (value.includes("emergency")) return { label: "Book Emergency Lighting Testing", service: "Emergency Lighting", audience: "Commercial" as const }
  if (value.includes("cctv")) return { label: "Get a CCTV Recommendation", service: "CCTV", audience: "Residential & Commercial" as const }
  if (value.includes("intruder")) return { label: "Plan My Ajax Alarm", service: "Intruder Alarms", audience: "Residential & Commercial" as const }
  return { label: "Discuss My Existing System", service: "Servicing & Monitoring", audience: "Residential & Commercial" as const }
}

function localGuideContent(category: string, title: string) {
  const value = category.toLowerCase()
  const topic = title.replace(/[?!.]+$/, "")
  if (value.includes("fire") || value.includes("emergency")) return {
    heading: `${topic} — guidance for Chesterfield and Derbyshire`,
    paragraphs: [
      "Commercial buildings vary widely in layout, occupancy, existing equipment and available records. The useful answer therefore starts with the premises rather than a fixed package or a generic device list.",
      "NOX supports businesses, landlords, hospitality venues, offices, warehouses and industrial premises across Chesterfield and Derbyshire. Share the building use, location, system photographs, known faults and required timescale so the enquiry can be directed to installation, servicing, repair, testing or takeover support."
    ],
    faq: [
      { q: "Does NOX cover fire alarm and emergency-lighting work in Chesterfield and Derbyshire?", a: "Yes. NOX covers commercial fire alarm and emergency-lighting enquiries across Chesterfield, Derbyshire and nearby areas, subject to the premises, system type and required scope." },
      { q: "Will the system need a site visit before a quotation?", a: "New installations, larger alterations and poorly documented existing systems normally need a survey or initial inspection. Clear photographs and records help confirm the correct first step." }
    ]
  }
  if (value.includes("cctv")) return {
    heading: `${topic} — guidance for properties in Chesterfield and Derbyshire`,
    paragraphs: [
      "Useful CCTV depends on the views required, lighting, mounting positions, recording, remote access and the level of detail expected from footage. Homes, shops, hospitality venues, yards and industrial sites should not be treated as the same camera-count exercise.",
      "NOX designs and maintains CCTV across Chesterfield and Derbyshire. A short description of the property, the areas to cover and any existing cameras or recorder helps establish whether the next step is a survey, maintenance visit, takeover or upgrade quotation."
    ],
    faq: [
      { q: "Does NOX provide CCTV advice and installation in Chesterfield and Derbyshire?", a: "Yes. The recommendation is based on the property, required views, lighting, recording and existing equipment rather than a fixed camera package." },
      { q: "Can existing CCTV be retained or upgraded?", a: "Often yes. Camera type, recorder access, cabling, storage, image quality and parts support are reviewed before reuse or replacement is recommended." }
    ]
  }
  if (value.includes("intruder")) return {
    heading: `${topic} — guidance for homes and businesses in Chesterfield and Derbyshire`,
    paragraphs: [
      "Intruder protection should reflect the entrances, rooms, routines, external approaches, garages and outbuildings that matter at the property. Device choice comes after the coverage and operating requirement are understood.",
      "NOX installs and supports suitable alarm systems across Chesterfield and Derbyshire, including Ajax alarms, external detection, app control, monitoring options and takeovers of suitable existing equipment."
    ],
    faq: [
      { q: "Does NOX install and support intruder alarms in Chesterfield and Derbyshire?", a: "Yes. NOX surveys residential and commercial properties across the area and recommends the alarm, external protection or support route around the actual building." },
      { q: "Can alarms, CCTV and perimeter detection be planned together?", a: "Yes. They solve different parts of the requirement and can be designed as separate layers within one clear proposal." }
    ]
  }
  return {
    heading: `${topic} — local support across Chesterfield and Derbyshire`,
    paragraphs: [
      "The right maintenance, monitoring, repair or takeover route depends on the system make, condition, access details, available records and known faults.",
      "NOX supports suitable residential and commercial systems across Chesterfield and Derbyshire. Sending photographs, approximate equipment quantities and a brief fault or service history helps NOX confirm the most useful first visit."
    ],
    faq: [
      { q: "Does NOX provide system servicing and takeover support in Chesterfield and Derbyshire?", a: "Yes, subject to the system type, access, condition and parts support. An initial inspection may be needed before ongoing support is confirmed." },
      { q: "Can NOX support a system installed by another company?", a: "Often yes. Existing equipment is assessed before servicing, monitoring, repairs or a phased upgrade are agreed." }
    ]
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}
  return pageMetadata(post.metaTitle, post.metaDescription, `/blog/${post.slug}`, { image: post.image, imageAlt: post.imageAlt, type: "article" })
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()
  const context = guideContext(post.category)
  const localContent = localGuideContent(post.category, post.title)
  const combinedFaq = Array.from(new Map([...(post.faq ?? []), ...localContent.faq].map(item => [item.q, item])).values())
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
    image: `${site.url}${post.image}`
  }
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Guides", item: `${site.url}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${site.url}/blog/${post.slug}` }
    ]
  }
  const faqSchema = combinedFaq.length ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: combinedFaq.map(item => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } }))
  } : null

  return <>
    <JsonLd data={articleSchema}/><JsonLd data={breadcrumbSchema}/>{faqSchema && <JsonLd data={faqSchema}/>} 
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Guides", href: "/blog" }, { label: post.title }]}/>
    <PageHero eyebrow={post.category} title={post.title} intro={post.excerpt} image={post.image} imageAlt={post.imageAlt} imagePosition={post.imagePosition}>
      <ContactActions primaryLabel={context.label} audience={context.audience} serviceCategory={context.service} enquiryType="General" sourceLabel={post.slug}/>
    </PageHero>
    <TrustStrip variant="general"/>
    <article className="section blog-article"><div className="container blog-article-inner">
      {post.sections.map(section => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}{section.points && <ul>{section.points.map(point => <li key={point}>{point}</li>)}</ul>}</section>)}
      <section className="guide-local-section"><h2>{localContent.heading}</h2>{localContent.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</section>
      {!!combinedFaq.length && <section className="guide-faq"><h2>Common questions</h2><div className="faq-list">{combinedFaq.map(item => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></section>}
      <div className="related-links"><strong>Related NOX services and projects:</strong>{post.related.map(item => <Link key={item.href} href={item.href}>{item.label} →</Link>)}</div>
    </div></article>
    <ConversionPanel title="Discuss your own property or system" text="This guide provides general information. Share the building, existing equipment and the work you are considering for property-specific advice, servicing or a quotation." primaryLabel={context.label} audience={context.audience} serviceCategory={context.service} enquiryType="General" sourceLabel={`${post.slug}-final`}/>
  </>
}
