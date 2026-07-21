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

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}
  return pageMetadata(post.metaTitle, post.metaDescription, `/blog/${post.slug}`)
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()
  const context = guideContext(post.category)
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
  const faqSchema = post.faq?.length ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map(item => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } }))
  } : null

  return <>
    <JsonLd data={articleSchema}/><JsonLd data={breadcrumbSchema}/>{faqSchema && <JsonLd data={faqSchema}/>} 
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Guides", href: "/blog" }, { label: post.title }]}/>
    <PageHero eyebrow={post.category} title={post.title} intro={post.excerpt} image={post.image} imageAlt={post.imageAlt}>
      <ContactActions primaryLabel={context.label} audience={context.audience} serviceCategory={context.service} enquiryType="General" sourceLabel={post.slug}/>
    </PageHero>
    <TrustStrip/>
    <article className="section blog-article"><div className="container blog-article-inner">
      {post.sections.map(section => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}{section.points && <ul>{section.points.map(point => <li key={point}>{point}</li>)}</ul>}</section>)}
      {!!post.faq?.length && <section className="guide-faq"><h2>Common questions</h2><div className="faq-list">{post.faq.map(item => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></section>}
      <div className="related-links"><strong>Related NOX services and projects:</strong>{post.related.map(item => <Link key={item.href} href={item.href}>{item.label} →</Link>)}</div>
    </div></article>
    <ConversionPanel title="Discuss your own property or system" text="This guide provides general information. Share the building, existing equipment and the work you are considering for a property-specific survey, service or quotation route." primaryLabel={context.label} audience={context.audience} serviceCategory={context.service} enquiryType="General" sourceLabel={`${post.slug}-final`}/>
  </>
}
