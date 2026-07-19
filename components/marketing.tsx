import Link from "next/link"
import { caseStudies, reviewThemes, type PlanPageData, type ServicePageData } from "@/lib/content"
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

export function DualButtons({ quoteLabel = "Request a Free Quote", surveyLabel = "Book a Free Security Survey" }: { quoteLabel?: string; surveyLabel?: string }) {
  return <div className="button-row"><Link className="button button-light" href="/get-quote">{quoteLabel}</Link><Link className="button button-outline" href="/book-security-survey">{surveyLabel}</Link></div>
}

export function TrustStrip() {
  const items = ["Chesterfield-based team", "Residential & commercial", "Monitoring and maintenance", "Clean, professional installs", "Verified customer feedback"]
  return <section className="trust-strip"><div className="container trust-strip-grid">{items.map(item => <span key={item}>✓ {item}</span>)}</div></section>
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
  return <div className="case-grid">{list.map(item => <article id={item.slug} className="case-card" key={item.slug}><img src={item.image} alt={item.alt} /><div className="case-card-body"><span className="micro-label">{item.location}</span><h3>{item.title}</h3><p>{item.summary}</p><ul>{item.systems.map(system => <li key={system}>{system}</li>)}</ul><Link href={`/case-studies#${item.slug}`}>View project →</Link></div></article>)}</div>
}

export function ReviewGrid({ limit }: { limit?: number }) {
  const list = typeof limit === "number" ? reviewThemes.slice(0, limit) : reviewThemes
  return <div className="review-grid">{list.map(item => <article className="review-card" key={item.title}><span className="micro-label">Verified review profile</span><h3>{item.title}</h3><p>{item.text}</p><Link className="text-link" href="/reviews">Review and trust information →</Link></article>)}</div>
}

export function ConversionPanel({ title = "Two simple ways to get started", text = "Send the details for a tailored quote, or choose a convenient time for a free security survey." }: { title?: string; text?: string }) {
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
    <section className="section"><div className="container split-grid"><div><SectionHeading eyebrow="The customer problem" title={data.problemTitle} text={data.problemText}/><Checklist items={data.benefits}/></div><aside className="dark-panel"><h3>Suitable for</h3><Checklist items={data.suitableFor}/><DualButtons quoteLabel="Get a Tailored Quote" surveyLabel="Book a Site Survey" /></aside></div></section>
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="How it works" title="From first conversation to ongoing support"/><FeatureGrid items={data.process} columns={4}/></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="Residential and commercial" title="Installation, handover and ongoing support"/><FeatureGrid items={data.details} columns={data.details.length === 4 ? 4 : 3}/></div></section>
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Relevant NOX work" title="Real installation examples" text="These examples use only confirmed project facts and do not invent outcomes or customer quotations."/><CaseStudyGrid slugs={data.caseStudySlugs}/></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="Trust" title="Local advice, proper workmanship and a clear handover"/><ReviewGrid/><div className="related-links"><strong>Related services:</strong>{data.related.map(item => <Link key={item.href} href={item.href}>{item.label} →</Link>)}</div></div></section>
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
    <section className="section"><div className="container plan-intro-grid"><div><SectionHeading eyebrow="What is included" title="A clear annual service scope"/><Checklist items={data.included}/></div><aside className="price-panel"><span className="eyebrow">Annual pricing</span>{data.residentialPrice && <div className="price-line"><strong>Residential</strong><span>{data.residentialPrice}</span></div>}{data.commercialPrice && <div className="price-line"><strong>Commercial</strong><span>{data.commercialPrice}</span></div>}{data.priceNote && <p>{data.priceNote}</p>}<DualButtons quoteLabel="Request Plan Pricing" surveyLabel="Book a Survey"/></aside></div></section>
    <section className="section section-alt"><div className="container split-grid"><div><SectionHeading eyebrow="Suitable systems" title="New NOX installations and suitable takeovers"/><Checklist items={data.suitableFor}/></div><aside className="dark-panel"><h3>Important pricing note</h3><p>Only confirmed prices are shown. Parts, repairs, replacement equipment and unlisted contractual benefits are excluded unless the written quotation or agreement specifically includes them.</p></aside></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="How the plan works" title="From system review to annual renewal"/><FeatureGrid items={data.process} columns={4}/></div></section>
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="The value" title="Keep systems healthy and support easier to manage"/><FeatureGrid items={data.details}/></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="Trust" title="Straightforward scope, records and follow-up"/><ReviewGrid/><div className="related-links"><strong>Related services:</strong>{data.related.map(item => <Link key={item.href} href={item.href}>{item.label} →</Link>)}</div></div></section>
    <FaqSection faq={data.faq}/>
    <ConversionPanel title="Choose the right annual support" text="Request a tailored service-plan quotation or book a survey when the systems need to be inspected first."/>
  </>
}
