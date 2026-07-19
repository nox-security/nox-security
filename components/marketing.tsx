import Link from "next/link"
import { caseStudies, verifiedReviews, type PlanPageData, type ServicePageData } from "@/lib/content"
import { blogPosts } from "@/lib/blog"
import { site } from "@/lib/site"

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export function PageHero({ eyebrow, title, intro, image, imageAlt, children }: { eyebrow: string; title: string; intro: string; image?: string; imageAlt?: string; children?: React.ReactNode }) {
  return (
    <section className={`page-hero ${image ? "page-hero-split" : ""}`}>
      <div className="container page-hero-grid">
        <div className="page-hero-copy">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p className="lead">{intro}</p>
          {children ?? <DualButtons />}
        </div>
        {image && <div className="page-hero-media"><img src={image} alt={imageAlt ?? "NOX Fire & Security"} /></div>}
      </div>
    </section>
  )
}

/** Kept under the old name so the existing page templates remain stable. */
export function DualButtons({ quoteLabel = "Get a Free Quote" }: { quoteLabel?: string; surveyLabel?: string }) {
  return <div className="button-row"><Link className="button button-light" href="/get-quote">{quoteLabel}</Link></div>
}

export function TrustStrip() {
  const items = ["Chesterfield-based team", "Residential & commercial", "Fire, security & aftercare", "Clean, professional installs", "Verified customer reviews"]
  return <section className="trust-strip"><div className="container trust-strip-grid">{items.map(item => <span key={item}>✓ {item}</span>)}</div></section>
}

export function ReviewSummaryStrip() {
  return <section className="review-summary-strip"><div className="container review-summary-inner"><div><span className="stars" aria-label="5 out of 5 stars">★★★★★</span><strong>Verified customer reviews</strong><span>Real feedback from residential and commercial NOX customers.</span></div><a className="text-link" href="https://g.page/r/CUdyqRh0RFeXEAE/review" target="_blank" rel="noreferrer">View Google reviews →</a></div></section>
}

export function SectionHeading({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return <div className="section-heading">{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h2>{title}</h2>{text && <p>{text}</p>}</div>
}

export function FeatureGrid({ items, columns = 3 }: { items: { title: string; text: string }[]; columns?: 2 | 3 | 4 }) {
  return <div className={`feature-grid columns-${columns}`}>{items.map((item, i) => <article className="feature-card" key={item.title}><span className="feature-number">{String(i + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
}

export function Checklist({ items }: { items: string[] }) {
  return <ul className="checklist">{items.map(item => <li key={item}>✓ <span>{item}</span></li>)}</ul>
}

export function CaseStudyGrid({ limit, slugs }: { limit?: number; slugs?: string[] }) {
  let list = slugs?.length ? caseStudies.filter(item => slugs.includes(item.slug)) : caseStudies
  if (typeof limit === "number") list = list.slice(0, limit)
  return <div className="case-grid">{list.map(item => <article id={item.slug} className="case-card" key={item.slug}><img src={item.image} alt={item.alt} /><div className="case-card-body"><span className="micro-label">{item.category} · {item.location}</span><h3>{item.title}</h3><p>{item.summary}</p><div className="case-scope"><strong>Project scope</strong><span>{item.requirement}</span></div><ul>{item.systems.map(system => <li key={system}>{system}</li>)}</ul><Link href={`/case-studies#project-${item.slug}`}>View project details →</Link></div></article>)}</div>
}

export function CaseStudyDetails() {
  return <div className="case-detail-list">{caseStudies.map((item, index) => <article id={`project-${item.slug}`} className="case-detail" key={item.slug}><div className="case-detail-media"><img src={item.image} alt={item.alt}/><span>{String(index + 1).padStart(2, "0")}</span></div><div className="case-detail-copy"><span className="micro-label">{item.category} · {item.location}</span><h2>{item.title}</h2><p className="lead-small">{item.summary}</p><div className="case-detail-facts"><div><strong>Requirement</strong><p>{item.requirement}</p></div><div><strong>NOX delivery</strong><p>{item.delivery}</p></div></div><div className="sector-tags">{item.systems.map(system => <span key={system}>{system}</span>)}</div><Link className="button button-outline" href="/get-quote">Discuss a Similar Project</Link></div></article>)}</div>
}

export function ReviewGrid({ limit }: { limit?: number }) {
  const list = typeof limit === "number" ? verifiedReviews.slice(0, limit) : verifiedReviews
  return <div className="review-grid">{list.map(item => <article className="review-card" key={item.name}><span className="stars" aria-label={`${item.rating} out of 5 stars`}>{"★".repeat(item.rating)}</span><blockquote>“{item.text}”</blockquote><strong>{item.name}</strong><span>{item.service}</span></article>)}</div>
}

export function BlogGrid({ limit }: { limit?: number }) {
  const list = typeof limit === "number" ? blogPosts.slice(0, limit) : blogPosts
  return <div className="blog-grid">{list.map(post => <article className="blog-card" key={post.slug}><img src={post.image} alt={post.imageAlt}/><div><span className="micro-label">{post.category}</span><h3>{post.title}</h3><p>{post.excerpt}</p><Link className="text-link" href={`/blog/${post.slug}`}>Read guide →</Link></div></article>)}</div>
}

export function ConversionPanel({ title = "Start with one simple enquiry", text = "Tell us about the property and what you need. The NOX team will review the details, advise on the right next step and arrange a survey where the property needs to be assessed." }: { title?: string; text?: string }) {
  return <section className="conversion-panel"><div className="container conversion-panel-grid"><div><span className="eyebrow">Next step</span><h2>{title}</h2><p>{text}</p></div><DualButtons /></div></section>
}

function FaqSection({ faq }: { faq: { q: string; a: string }[] }) {
  return <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Common questions" title="Clear answers before you commit"/><div className="faq-list">{faq.map(item => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></div></section>
}

export function ServiceLanding({ data }: { data: ServicePageData }) {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: data.faq.map(item => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) }
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: data.title, description: data.intro, provider: { "@type": "LocalBusiness", name: site.name, url: site.url }, areaServed: ["Chesterfield", "Sheffield", "Derbyshire"], url: `${site.url}/systems/${data.slug}` }
  return <>
    <JsonLd data={faqSchema} />
    <JsonLd data={serviceSchema} />
    <PageHero eyebrow={data.eyebrow} title={data.title} intro={data.intro} image={data.image} imageAlt={data.imageAlt} />
    <TrustStrip />
    <section className="section"><div className="container split-grid"><div><SectionHeading eyebrow="The customer problem" title={data.problemTitle} text={data.problemText}/><Checklist items={data.benefits}/></div><aside className="dark-panel"><h3>Suitable for</h3><Checklist items={data.suitableFor}/><DualButtons quoteLabel="Get a Tailored Quote" /></aside></div></section>
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="How it works" title="From first conversation to ongoing support"/><FeatureGrid items={data.process} columns={4}/></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="Residential and commercial" title="Installation, handover and ongoing support"/><FeatureGrid items={data.details} columns={data.details.length === 4 ? 4 : 3}/></div></section>
    <section className="section service-plan-feature"><div className="container split-grid"><div><SectionHeading eyebrow="Aftercare and servicing" title="Keep the system healthy after installation" text="Monitoring, annual maintenance, fire alarm servicing, emergency lighting testing and suitable system takeovers are available through the local NOX team."/><div className="related-links"><Link href="/service-plans">View all service plans →</Link><Link href="/service-plans/alarm-maintenance">Alarm maintenance →</Link><Link href="/service-plans/fire-alarm-servicing">Fire alarm servicing →</Link></div></div><aside className="dark-panel"><h3>One clear renewal route</h3><p>Where suitable, residential and commercial customers can coordinate agreed servicing and support under a clearer annual arrangement.</p><DualButtons quoteLabel="Request Service-Plan Pricing"/></aside></div></section>
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Relevant NOX work" title="Real installation examples" text="Confirmed project locations and system scopes, with no invented outcomes or customer claims."/><CaseStudyGrid slugs={data.caseStudySlugs}/></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="Customer reviews" title="Trusted for clear advice, tidy work and proper handover"/><ReviewGrid limit={3}/><div className="related-links"><strong>Related services:</strong>{data.related.map(item => <Link key={item.href} href={item.href}>{item.label} →</Link>)}<Link href="/reviews">More customer reviews →</Link></div></div></section>
    <FaqSection faq={data.faq}/>
    <ConversionPanel />
  </>
}

export function PlanLanding({ data }: { data: PlanPageData }) {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: data.faq.map(item => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) }
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: data.title, description: data.intro, provider: { "@type": "LocalBusiness", name: site.name, url: site.url }, areaServed: ["Chesterfield", "Sheffield", "Derbyshire"], url: `${site.url}/service-plans/${data.slug}` }
  return <>
    <JsonLd data={faqSchema}/><JsonLd data={serviceSchema}/>
    <PageHero eyebrow={data.eyebrow} title={data.title} intro={data.intro} image={data.image} imageAlt={data.imageAlt}/>
    <TrustStrip/>
    <section className="section"><div className="container plan-intro-grid"><div><SectionHeading eyebrow="What is included" title="A clear annual service scope"/><Checklist items={data.included}/></div><aside className="price-panel"><span className="eyebrow">Annual pricing</span>{data.residentialPrice && <div className="price-line"><strong>Residential</strong><span>{data.residentialPrice}</span></div>}{data.commercialPrice && <div className="price-line"><strong>Commercial</strong><span>{data.commercialPrice}</span></div>}{data.priceNote && <p>{data.priceNote}</p>}<DualButtons quoteLabel="Request Plan Pricing" /></aside></div></section>
    <section className="section section-alt"><div className="container split-grid"><div><SectionHeading eyebrow="Suitable systems" title="New NOX installations and suitable takeovers"/><Checklist items={data.suitableFor}/></div><aside className="dark-panel"><h3>Clear service boundaries</h3><p>Only confirmed prices and benefits are shown. Parts, repairs, replacement equipment and unlisted contractual benefits are excluded unless the written quotation or agreement includes them.</p></aside></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="How the plan works" title="From system review to annual renewal"/><FeatureGrid items={data.process} columns={4}/></div></section>
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="The value" title="Keep systems healthy and support easier to manage"/><FeatureGrid items={data.details}/></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="Customer reviews" title="Local aftercare backed by real customer feedback"/><ReviewGrid limit={3}/><div className="related-links"><strong>Related services:</strong>{data.related.map(item => <Link key={item.href} href={item.href}>{item.label} →</Link>)}<Link href="/blog/how-often-should-security-systems-be-serviced">Read the maintenance guide →</Link></div></div></section>
    <FaqSection faq={data.faq}/>
    <ConversionPanel title="Choose the right annual support" text="Tell us what systems are installed and what support you need. We will confirm whether pricing can be provided from the details or whether an inspection is the sensible next step."/>
  </>
}
