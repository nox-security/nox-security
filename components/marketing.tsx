import Link from "next/link"
import { caseStudies, verifiedReviews, type PlanPageData, type ServicePageData } from "@/lib/content"
import { blogPosts } from "@/lib/blog"
import { site } from "@/lib/site"
import { localLandingPages } from "@/lib/landing"

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

type ContactActionProps = {
  primaryLabel?: string
  dark?: boolean
  compact?: boolean
  audience?: "Residential" | "Commercial" | "Residential & Commercial"
  serviceCategory?: string
  enquiryType?: "Installation" | "Servicing" | "Repair" | "Monitoring" | "Takeover" | "General"
  sourceLabel?: string
}

export function ContactActions({
  primaryLabel = "Get a Quote",
  dark = false,
  compact = false,
  audience,
  serviceCategory,
  enquiryType = "General",
  sourceLabel,
}: ContactActionProps) {
  const params = new URLSearchParams()
  if (audience) params.set("customer_type", audience)
  if (serviceCategory) params.set("service_category", serviceCategory)
  if (enquiryType) params.set("enquiry_type", enquiryType)
  if (sourceLabel) params.set("source_page", sourceLabel)
  const query = params.toString()
  const quoteHref = `/get-quote${query ? `?${query}` : ""}#quote-form`
  return <div className={`button-row contact-action-row ${compact ? "button-row-compact" : ""}`}>
    <Link className={`button ${dark ? "button-dark" : "button-light"}`} href={quoteHref}>{primaryLabel}</Link>
    <a className="button button-whatsapp" href={site.whatsapp} aria-label="WhatsApp NOX Fire and Security">WhatsApp NOX</a>
    <a className="button button-outline" href={site.phoneHref} aria-label={`Call NOX on ${site.phone}`}>Call {site.phone}</a>
  </div>
}


export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return <nav className="breadcrumbs" aria-label="Breadcrumb"><div className="container breadcrumbs-inner">{items.map((item, index) => <span key={`${item.label}-${index}`}>{item.href ? <Link href={item.href}>{item.label}</Link> : <strong aria-current="page">{item.label}</strong>}{index < items.length - 1 && <i aria-hidden="true">/</i>}</span>)}</div></nav>
}

export function LocalSearchLinks({ slugs, title = "Popular local service pages" }: { slugs: string[]; title?: string }) {
  const pages = slugs.map(slug => localLandingPages[slug]).filter(Boolean)
  if (!pages.length) return null
  return <section className="section local-search-links-section"><div className="container"><SectionHeading eyebrow="Local search routes" title={title} text="Focused pages for the services customers search for most, connected back to real NOX projects, relevant plans and one simple enquiry route."/><div className="local-search-link-grid">{pages.map(page => <Link href={`/services/${page.slug}`} key={page.slug}><span>{page.audience}</span><strong>{page.title}</strong><small>{page.location}</small></Link>)}</div></div></section>
}

export function PageHero({ eyebrow, title, intro, image, imageAlt, children }: { eyebrow: string; title: string; intro: string; image?: string; imageAlt?: string; children?: React.ReactNode }) {
  return (
    <section className={`page-hero ${image ? "page-hero-split" : ""}`}>
      <div className="container page-hero-grid">
        <div className="page-hero-copy">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p className="lead">{intro}</p>
          {children ?? <ContactActions />}
        </div>
        {image && <div className="page-hero-media"><img src={image} alt={imageAlt ?? "NOX Fire & Security"} /></div>}
      </div>
    </section>
  )
}

/** Kept under the old name so existing page imports remain stable. */
export function DualButtons({ quoteLabel = "Get a Fire & Security Quote" }: { quoteLabel?: string; surveyLabel?: string }) {
  return <ContactActions primaryLabel={quoteLabel} />
}

export function TrustStrip() {
  const items = [
    { kicker: "Local and founder-led", title: "Chesterfield based", text: "The same local team remains accountable from survey to aftercare." },
    { kicker: "Residential protection", title: "Designed around the property", text: "Ajax alarms, CCTV and perimeter protection without a fixed package." },
    { kicker: "Commercial Fire & Security", title: "Installation through compliance", text: "Fire systems, CCTV, servicing and coordinated annual support." },
    { kicker: "Preferred smart platform", title: "Ajax authorised", text: "MotionCam, external detection, video and modern system control." },
    { kicker: "Proven customer experience", title: "Verified reviews", text: "Real feedback about advice, installation quality and local support." }
  ]
  return <section className="trust-strip trust-strip-premium"><div className="container trust-strip-grid">{items.map(item => <article key={item.title}><span>{item.kicker}</span><strong>{item.title}</strong><small>{item.text}</small></article>)}</div></section>
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

export function ProductShowcase({ data }: { data: ServicePageData }) {
  if (!data.products?.length) return null
  return <section className="section ajax-product-section"><div className="container">
    <div className="platform-intro">
      <div><span className="eyebrow">Products and system options</span><h2>{data.platformTitle ?? "Equipment selected around the property"}</h2><p>{data.platformText}</p></div>
      <img src="/images/logo-ajax-authorized-installation-company-en-wh.png" alt="Ajax Authorised Installation Company" />
    </div>
    <div className="product-detail-grid">{data.products.map(product => <article className="product-detail-card" key={product.name}><div className="product-detail-image"><img src={product.image} alt={product.imageAlt}/></div><div><h3>{product.name}</h3><p>{product.description}</p></div></article>)}</div>
  </div></section>
}

export function VideoShowcase({ videos, title = "See the technology in action", eyebrow = "Product videos" }: { videos?: { title: string; text: string; youtubeId?: string; videoUrl?: string }[]; title?: string; eyebrow?: string }) {
  if (!videos?.length) return null
  return <section className="section section-alt video-showcase"><div className="container"><SectionHeading eyebrow={eyebrow} title={title} text="Explore the Ajax platform and individual products in motion. Final device selection still follows the property survey and the way the site will be used."/><div className={`video-grid video-columns-${Math.min(videos.length, 3)}`}>{videos.map((video, index) => <article className="video-card" key={video.youtubeId ?? video.videoUrl ?? index}><div className="video-frame">{video.youtubeId ? <iframe src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`} title={video.title} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /> : <video controls playsInline preload="metadata" aria-label={video.title}><source src={video.videoUrl} type="video/mp4"/></video>}</div><div><h3>{video.title}</h3><p>{video.text}</p></div></article>)}</div></div></section>
}

export function CaseStudyGrid({ limit, slugs }: { limit?: number; slugs?: string[] }) {
  let list = slugs?.length ? caseStudies.filter(item => slugs.includes(item.slug)) : caseStudies
  if (typeof limit === "number") list = list.slice(0, limit)
  return <div className="case-grid">{list.map(item => <article id={item.slug} className="case-card" key={item.slug}><img src={item.image} alt={item.alt} /><div className="case-card-body"><span className="micro-label">{item.category} · {item.location}</span><h3>{item.title}</h3><p>{item.story ?? item.summary}</p><div className="case-scope"><strong>Installed by NOX</strong><span>{item.systems.join(" · ")}</span></div><Link href={`/case-studies/${item.slug}`}>Read the project story →</Link></div></article>)}</div>
}

export function CaseStudyDetails() {
  return <div className="case-detail-list">{caseStudies.map((item, index) => <article id={`project-${item.slug}`} className="case-detail" key={item.slug}><div className="case-detail-media"><img src={item.image} alt={item.alt}/><span>{String(index + 1).padStart(2, "0")}</span></div><div className="case-detail-copy"><span className="micro-label">{item.category} · {item.location}</span><h2>{item.title}</h2><p className="lead-small">{item.summary}</p><div className="case-detail-facts"><div><strong>Requirement</strong><p>{item.requirement}</p></div><div><strong>NOX delivery</strong><p>{item.delivery}</p></div></div><div className="sector-tags">{item.systems.map(system => <span key={system}>{system}</span>)}</div><div className="button-row"><Link className="button button-outline" href={`/case-studies/${item.slug}`}>View Full Case Study</Link><Link className="button button-dark" href="/get-quote#quote-form">Discuss a Similar Project</Link></div></div></article>)}</div>
}

export function ReviewGrid({ limit }: { limit?: number }) {
  const list = typeof limit === "number" ? verifiedReviews.slice(0, limit) : verifiedReviews
  return <div className="review-grid">{list.map(item => <article className="review-card" key={item.name}><span className="stars" aria-label={`${item.rating} out of 5 stars`}>{"★".repeat(item.rating)}</span><blockquote>“{item.text}”</blockquote><strong>{item.name}</strong><span>{item.service}</span></article>)}</div>
}

export function BlogGrid({ limit }: { limit?: number }) {
  const list = typeof limit === "number" ? blogPosts.slice(0, limit) : blogPosts
  return <div className="blog-grid">{list.map(post => <article className="blog-card" key={post.slug}><img src={post.image} alt={post.imageAlt}/><div><span className="micro-label">{post.category}</span><h3>{post.title}</h3><p>{post.excerpt}</p><Link className="text-link" href={`/blog/${post.slug}`}>Read guide →</Link></div></article>)}</div>
}

export function ConversionPanel({
  title = "Tell NOX what you need",
  text = "Share the property, site or existing-system details and the NOX team will guide the right survey, service or quotation route.",
  primaryLabel = "Get a Quote",
  audience,
  serviceCategory,
  enquiryType = "General",
  sourceLabel,
}: {
  title?: string
  text?: string
  primaryLabel?: string
  audience?: ContactActionProps["audience"]
  serviceCategory?: string
  enquiryType?: ContactActionProps["enquiryType"]
  sourceLabel?: string
}) {
  return <section className="conversion-panel"><div className="container conversion-panel-grid"><div><span className="eyebrow">Next step</span><h2>{title}</h2><p>{text}</p></div><ContactActions primaryLabel={primaryLabel} audience={audience} serviceCategory={serviceCategory} enquiryType={enquiryType} sourceLabel={sourceLabel}/></div></section>
}

function FaqSection({ faq }: { faq: { q: string; a: string }[] }) {
  return <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Common questions" title="Clear answers before you commit"/><div className="faq-list">{faq.map(item => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></div></section>
}

export function ServiceLanding({ data }: { data: ServicePageData }) {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: data.faq.map(item => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) }
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: data.title, description: data.intro, provider: { "@type": "LocalBusiness", name: site.name, url: site.url }, areaServed: ["Chesterfield", "Sheffield", "Derbyshire"], url: `${site.url}/systems/${data.slug}` }
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: site.url },
    { "@type": "ListItem", position: 2, name: "Systems", item: `${site.url}/systems` },
    { "@type": "ListItem", position: 3, name: data.title, item: `${site.url}/systems/${data.slug}` }
  ] }
  const aftercareLinks = data.slug === "fire-safety"
    ? [{ href: "/service-plans/fire-alarm-servicing", label: "Fire alarm servicing" }, { href: "/service-plans/fire-compliance", label: "Fire Compliance Package" }, { href: "/service-plans/emergency-lighting-servicing", label: "Emergency lighting servicing" }]
    : data.slug === "cctv"
      ? [{ href: "/service-plans/cctv-maintenance", label: "CCTV maintenance" }, { href: "/service-plans/total-security", label: "Total Security Package" }]
      : [{ href: "/service-plans/alarm-maintenance", label: "Alarm maintenance" }, { href: "/service-plans/alarm-monitoring", label: "Alarm monitoring" }, { href: "/service-plans/total-security", label: "Total Security Package" }]
  const localSearchSlugs = data.slug === "intrusion-alarms"
    ? ["intruder-alarm-installation-chesterfield", "ajax-alarm-installer-chesterfield", "alarm-monitoring-derbyshire"]
    : data.slug === "cctv"
      ? ["cctv-installation-chesterfield", "cctv-installation-derbyshire", "commercial-cctv-sheffield"]
      : data.slug === "fire-safety"
        ? ["fire-alarm-installation-chesterfield", "fire-alarm-servicing-chesterfield", "commercial-fire-security-systems"]
        : data.slug === "emergency-lighting"
          ? ["emergency-lighting-testing-derbyshire", "fire-alarm-servicing-chesterfield"]
          : data.slug === "fire-risk-assessment"
            ? ["fire-risk-assessment-chesterfield", "commercial-fire-security-systems"]
            : data.slug === "smart-home-cctv"
              ? ["cctv-installation-chesterfield", "security-systems-chesterfield"]
              : ["security-systems-chesterfield", "ajax-alarm-installer-chesterfield"]
  return <>
    <JsonLd data={faqSchema} />
    <JsonLd data={serviceSchema} />
    <JsonLd data={breadcrumbSchema} />
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Systems", href: "/systems" }, { label: data.title }]} />
    <PageHero eyebrow={data.eyebrow} title={data.title} intro={data.intro} image={data.image} imageAlt={data.imageAlt}>
      <ContactActions primaryLabel={data.ctaLabel ?? "Get a Quote"} audience={data.audience} serviceCategory={data.serviceCategory ?? data.title} enquiryType={data.enquiryType ?? "Installation"} sourceLabel={data.slug}/>
    </PageHero>
    <TrustStrip />
    <section className="section"><div className="container split-grid"><div><SectionHeading eyebrow="Designed around the property" title={data.problemTitle} text={data.problemText}/><Checklist items={data.benefits}/></div><aside className="dark-panel"><h3>Suitable for</h3><Checklist items={data.suitableFor}/><ContactActions primaryLabel={data.ctaLabel ?? "Discuss This System"} compact audience={data.audience} serviceCategory={data.serviceCategory ?? data.title} enquiryType={data.enquiryType ?? "Installation"} sourceLabel={data.slug}/></aside></div></section>
    <ProductShowcase data={data}/>
    <VideoShowcase videos={data.videos}/>
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="How NOX delivers the project" title="From survey to handover and ongoing support"/><FeatureGrid items={data.process} columns={4}/></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="More detail" title="Installation, operation and long-term support"/><FeatureGrid items={data.details} columns={data.details.length === 4 ? 4 : 3}/></div></section>
    {!!data.pricingFactors?.length && <section className="section section-alt"><div className="container split-grid"><div><SectionHeading eyebrow="Pricing factors" title="What affects the final quotation" text="The correct price depends on the property, system and work required. NOX confirms the scope before presenting equipment and installation costs."/><Checklist items={data.pricingFactors}/></div><aside className="dark-panel"><h3>No invented starting prices</h3><p>The quotation is based on the real survey, existing equipment, access and performance requirement rather than a generic package that may not suit the property.</p>{data.guide && <Link className="text-link" href={data.guide.href}>{data.guide.label} →</Link>}</aside></div></section>}
    <section className="section service-plan-feature"><div className="container split-grid"><div><SectionHeading eyebrow="Servicing, maintenance and aftercare" title={data.slug === "fire-safety" ? "Fire alarm servicing should be planned from day one" : "Keep the system healthy after installation"} text={data.slug === "fire-safety" ? "NOX services modern Ajax EN54 fire systems and suitable traditional conventional, addressable and established wireless systems. Ongoing support can include inspection, testing, records, defect reporting and coordinated emergency-lighting visits." : "NOX supports new installations and suitable traditional or existing systems with health checks, testing, cleaning, battery or recorder review, firmware where supported and clear service records."}/><div className="related-links">{aftercareLinks.map(item => <Link key={item.href} href={item.href}>{item.label} →</Link>)}</div></div><aside className="dark-panel"><h3>New and traditional systems</h3><p>Existing systems are assessed for condition, access, compatibility and parts availability before NOX confirms a takeover or annual maintenance scope.</p><ContactActions primaryLabel={data.enquiryType === "Installation" ? "Discuss Ongoing Support" : (data.ctaLabel ?? "Request Servicing Pricing")} compact audience={data.audience} serviceCategory={data.serviceCategory ?? data.title} enquiryType={data.enquiryType === "Installation" ? "Servicing" : (data.enquiryType ?? "Servicing")} sourceLabel={data.slug}/></aside></div></section>
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Relevant NOX work" title="Real installation examples" text="Confirmed project locations and system scopes, with no invented outcomes or customer claims."/><CaseStudyGrid slugs={data.caseStudySlugs}/></div></section>
    <LocalSearchLinks slugs={localSearchSlugs} title="Related local service searches"/>
    <section className="section"><div className="container"><SectionHeading eyebrow="Customer reviews" title="Trusted for clear advice, tidy work and proper handover"/><ReviewGrid limit={3}/><div className="related-links"><strong>Related services:</strong>{data.related.map(item => <Link key={item.href} href={item.href}>{item.label} →</Link>)}{data.guide && <Link href={data.guide.href}>{data.guide.label} →</Link>}<Link href="/reviews">More customer reviews →</Link></div>{data.serviceAreaText && <p className="service-area-note"><strong>Service area:</strong> {data.serviceAreaText}</p>}</div></section>
    <FaqSection faq={data.faq}/>
    <ConversionPanel title={data.ctaLabel ?? "Discuss the right system with NOX"} text="Tell us about the property, existing equipment and what you need the system to achieve. We will guide the correct survey and quotation route." primaryLabel={data.ctaLabel ?? "Get a Quote"} audience={data.audience} serviceCategory={data.serviceCategory ?? data.title} enquiryType={data.enquiryType ?? "Installation"} sourceLabel={data.slug}/>
  </>
}

export function PlanLanding({ data }: { data: PlanPageData }) {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: data.faq.map(item => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) }
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: data.title, description: data.intro, provider: { "@type": "LocalBusiness", name: site.name, url: site.url }, areaServed: ["Chesterfield", "Sheffield", "Derbyshire"], url: `${site.url}/service-plans/${data.slug}` }
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: site.url },
    { "@type": "ListItem", position: 2, name: "Service Plans", item: `${site.url}/service-plans` },
    { "@type": "ListItem", position: 3, name: data.title, item: `${site.url}/service-plans/${data.slug}` }
  ] }
  const isFirePlan = data.slug.includes("fire") || data.slug.includes("emergency")
  const localSearchSlugs = data.slug === "alarm-maintenance"
    ? ["alarm-maintenance-chesterfield", "security-system-takeover", "alarm-monitoring-derbyshire"]
    : data.slug === "alarm-monitoring"
      ? ["alarm-monitoring-derbyshire", "intruder-alarm-installation-chesterfield"]
      : data.slug === "cctv-maintenance"
        ? ["cctv-installation-chesterfield", "security-system-takeover"]
        : data.slug === "fire-alarm-servicing"
          ? ["fire-alarm-servicing-chesterfield", "fire-alarm-installation-chesterfield", "commercial-fire-security-systems"]
          : data.slug === "emergency-lighting-servicing"
            ? ["emergency-lighting-testing-derbyshire", "fire-alarm-servicing-chesterfield"]
            : data.slug === "fire-compliance"
              ? ["commercial-fire-security-systems", "fire-alarm-servicing-chesterfield", "emergency-lighting-testing-derbyshire"]
              : ["security-systems-chesterfield", "security-system-takeover"]
  const residentialPrice = isFirePlan ? null : (data.residentialPrice ?? "Quoted after system review")
  const commercialPrice = data.commercialPrice ?? "Quoted to system and site"
  return <>
    <JsonLd data={faqSchema}/><JsonLd data={serviceSchema}/><JsonLd data={breadcrumbSchema}/>
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Service Plans", href: "/service-plans" }, { label: data.title }]} />
    <PageHero eyebrow={data.eyebrow} title={data.title} intro={data.intro} image={data.image} imageAlt={data.imageAlt}>
      <ContactActions primaryLabel={data.ctaLabel ?? "Get a Maintenance Quote"} audience={data.audience} serviceCategory={data.serviceCategory ?? data.title} enquiryType={data.enquiryType ?? "Servicing"} sourceLabel={data.slug}/>
    </PageHero>
    <TrustStrip/>
    <section className="section"><div className="container plan-intro-grid"><div><SectionHeading eyebrow="What is included" title="A clear annual service scope"/><Checklist items={data.included}/></div><aside className="price-panel"><span className="eyebrow">Annual pricing</span>{residentialPrice && <div className="price-line"><strong>Residential</strong><span>{residentialPrice}</span></div>}<div className="price-line"><strong>Commercial</strong><span>{commercialPrice}</span></div>{data.priceNote && <p>{data.priceNote}</p>}<ContactActions primaryLabel={data.ctaLabel ?? "Request Service Pricing"} compact audience={data.audience} serviceCategory={data.serviceCategory ?? data.title} enquiryType={data.enquiryType ?? "Servicing"} sourceLabel={data.slug}/></aside></div></section>
    <section className="section section-alt"><div className="container split-grid"><div><SectionHeading eyebrow="Suitable systems" title="New installations, traditional systems and suitable takeovers" text={isFirePlan ? "NOX supports modern Ajax EN54 fire systems alongside suitable conventional, addressable and established wireless fire alarms." : "NOX supports new Ajax and professional systems alongside suitable traditional wired, wireless, hybrid, analogue and networked equipment."}/><Checklist items={data.suitableFor}/></div><aside className="dark-panel"><h3>Initial system review</h3><p>Existing systems may need an inspection before the ongoing scope can be confirmed. Parts, repairs and replacement equipment remain separate unless the written agreement includes them.</p></aside></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="How the plan works" title="From system review to annual renewal"/><FeatureGrid items={data.process} columns={4}/></div></section>
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="The value" title="Keep systems healthy and support easier to manage"/><FeatureGrid items={data.details}/></div></section>
    {!!data.pricingFactors?.length && <section className="section"><div className="container split-grid"><div><SectionHeading eyebrow="Pricing factors" title="What affects the service or maintenance cost" text="NOX prices the actual system, site and visit requirements rather than inventing a starting figure that may not apply."/><Checklist items={data.pricingFactors}/></div><aside className="dark-panel"><h3>Existing-system review</h3><p>Access, faults, documentation, parts availability and system condition may need to be confirmed before an ongoing agreement is accepted.</p>{data.guide && <Link className="text-link" href={data.guide.href}>{data.guide.label} →</Link>}</aside></div></section>}
    {isFirePlan && <section className="section fire-service-push"><div className="container split-grid"><div><SectionHeading eyebrow="Fire servicing and maintenance" title="Keep inspection dates, defects and remedial work visible" text="Routine fire alarm and emergency-lighting visits create a clearer record of system condition. NOX can coordinate agreed services for single premises, landlords, HMOs and multi-site customers."/></div><aside className="dark-panel"><h3>Need a takeover inspection?</h3><p>Send the panel make, approximate device count, property type and any known faults. We will confirm the next step.</p><ContactActions primaryLabel="Request a Fire Service Survey" compact/></aside></div></section>}
    <LocalSearchLinks slugs={localSearchSlugs} title="Related maintenance, monitoring and compliance searches"/>
    <section className="section"><div className="container"><SectionHeading eyebrow="Customer reviews" title="Local aftercare backed by real customer feedback"/><ReviewGrid limit={3}/><div className="related-links"><strong>Related services:</strong>{data.related.map(item => <Link key={item.href} href={item.href}>{item.label} →</Link>)}<Link href="/blog/how-often-should-security-systems-be-serviced">Read the maintenance guide →</Link></div></div></section>
    <FaqSection faq={data.faq}/>
    <ConversionPanel title={data.ctaLabel ?? "Request the right ongoing support"} text="Tell us what system is installed, whether it is new or existing and what service history or known faults are available. We will confirm the inspection, takeover or pricing route." primaryLabel={data.ctaLabel ?? "Get a Maintenance Quote"} audience={data.audience} serviceCategory={data.serviceCategory ?? data.title} enquiryType={data.enquiryType ?? "Servicing"} sourceLabel={data.slug}/>
  </>
}
