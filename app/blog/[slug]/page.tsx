import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ConversionPanel, JsonLd, PageHero, TrustStrip } from "@/components/marketing"
import { blogPosts, getBlogPost } from "@/lib/blog"
import { pageMetadata, site } from "@/lib/site"

export function generateStaticParams() { return blogPosts.map(post => ({ slug: post.slug })) }

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
  const articleSchema = { "@context":"https://schema.org", "@type":"Article", headline:post.title, description:post.excerpt, author:{"@type":"Organization",name:site.name}, publisher:{"@type":"Organization",name:site.name}, mainEntityOfPage:`${site.url}/blog/${post.slug}`, image:`${site.url}${post.image}` }
  return <>
    <JsonLd data={articleSchema}/>
    <PageHero eyebrow={post.category} title={post.title} intro={post.excerpt} image={post.image} imageAlt={post.imageAlt}/>
    <TrustStrip/>
    <article className="section blog-article"><div className="container blog-article-inner">{post.sections.map(section => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}{section.points && <ul>{section.points.map(point => <li key={point}>{point}</li>)}</ul>}</section>)}<div className="related-links"><strong>Related NOX services:</strong>{post.related.map(item => <Link key={item.href} href={item.href}>{item.label} →</Link>)}</div></div></article>
    <ConversionPanel title="Discuss your own system or property" text="The guide provides general information. Use the NOX enquiry form for a property-specific quotation or service recommendation."/>
  </>
}
