import type { Metadata } from "next"
import Link from "next/link"
import { BlogGrid, CaseStudyGrid, ContactActions, ConversionPanel, FeatureGrid, ReviewGrid, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "About NOX Fire & Security | Our Story",
  "Meet the people behind NOX Fire & Security and discover the journey from security-industry experience to premium local Fire & Security installation, servicing and aftercare.",
  "/about-us"
)

export default function AboutPage() {
  return <>
    <section className="about-hero-premium about-hero-editorial"><div className="container about-hero-grid"><div><span className="eyebrow">The NOX story</span><h1>A local Fire & Security company built around accountability.</h1><p className="lead">NOX was created to offer a more personal, professional alternative: understand the property properly, recommend the right system, deliver a clean installation and remain available after handover.</p><ContactActions primaryLabel="Request Your Free Security Survey" /></div><div className="about-hero-media"><img src="/images/team/E7DC4C2A-A4F8-4EC4-B483-2F49343BD8C7.webp" alt="The NOX Fire and Security team"/><div className="nox-mark-panel" aria-hidden="true"><img src="/images/nox-logo-dark.png" alt=""/></div><div className="story-quote"><span className="eyebrow">The NOX standard</span><blockquote>Designed properly.<br/>Installed properly.<br/>Supported properly.</blockquote></div></div></div></section>
    <TrustStrip/>

    <section className="section"><div className="container about-story-grid">
      <div><SectionHeading eyebrow="Why NOX was started" title="The full customer journey should feel joined up"/><p>Joseph and James built NOX after years in the security industry, where they saw excellent technology too often undermined by a disconnected customer experience. Systems could be selected around rigid packages or sales targets before anyone had properly understood the property, its risks or the way it was used.</p><p>They also saw the gap after installation. The person who sold the system, the engineer who fitted it and the team responsible for faults or servicing could all be different. Customers were left unsure who owned the outcome.</p><p>NOX was formed to bring those stages back together. The first conversation, site survey, quotation, installation, handover, monitoring, servicing and future upgrades are treated as one long-term relationship rather than separate transactions.</p></div>
      <aside className="dark-panel about-principles"><span className="eyebrow">What that means</span><h3>One accountable local team</h3><ul className="checklist"><li>✓ <span>The property and customer requirement come before the product list.</span></li><li>✓ <span>Quotations explain the proposed system and optional ongoing support clearly.</span></li><li>✓ <span>Installations are planned, tested, presented cleanly and handed over properly.</span></li><li>✓ <span>Monitoring, maintenance, Fire servicing, repairs and upgrades remain available locally.</span></li></ul></aside>
    </div></section>

    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Our journey" title="From residential security to complete Fire & Security support" text="NOX continues to grow around the needs of its customers rather than adding services simply to fill a list."/><div className="journey-editorial">
      <article><span>01</span><div><h3>Security-industry experience</h3><p>Joseph and James developed their commercial, customer and technical experience inside the security industry before creating NOX.</p></div></article>
      <article><span>02</span><div><h3>NOX is founded in Chesterfield</h3><p>The company begins with honest consultations, premium residential systems and commercial installations designed around each property.</p></div></article>
      <article><span>03</span><div><h3>Fire, servicing and aftercare expand</h3><p>Fire alarm work, emergency lighting, monitoring, maintenance and system takeovers become a larger part of the joined-up NOX offer.</p></div></article>
      <article><span>04</span><div><h3>A long-term regional partner</h3><p>NOX now supports high-value homes, businesses, landlords, industrial sites and multi-system commercial customers across the region.</p></div></article>
    </div></div></section>

    <section className="section leadership-section"><div className="container"><SectionHeading eyebrow="Leadership" title="Direct contact with the people responsible for NOX" text="The business remains founder-led. Joseph and James own different responsibilities, while the customer experience stays connected from enquiry to installation and ongoing support."/><div className="team-grid premium-team-grid">
      <article className="team-card"><img src="/images/joseph-robb.jpeg" alt="Joseph Robb, Co-Founder and Managing Director at NOX Fire and Security"/><div className="team-card-body"><span className="team-role">Joseph Robb · Co-Founder & Managing Director</span><h2>Customer strategy, consultations and growth</h2><p>Joseph leads the direction of NOX and the customer-facing side of the business. He oversees consultations, quotations, system proposals, commercial relationships and business development, making sure each customer understands the options and receives a solution that fits the property rather than a generic package.</p></div></article>
      <article className="team-card"><img src="/images/james-rigby.webp" alt="James Rigby, Co-Founder and Operations Director at NOX Fire and Security"/><div className="team-card-body"><span className="team-role">James Rigby · Co-Founder & Operations Director</span><h2>Operations, installation quality and Fire systems</h2><p>James leads installations, day-to-day operations, technical quality and the Fire side of NOX. He is responsible for project delivery, testing, handover, servicing, fault resolution and ensuring the standard promised during the consultation is carried through on site.</p></div></article>
    </div></div></section>

    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Our position" title="Premium technology. Local accountability. Clear advice."/><div className="premium-values-grid">
      <article><span>Property first</span><h3>System design before product selection</h3><p>We consider access, routines, existing equipment, appearance, risk and future support before recommending devices.</p></article>
      <article><span>Professional delivery</span><h3>Workmanship that respects the property</h3><p>Device positions, cable routes, panel locations and final presentation are planned carefully and explained clearly.</p></article>
      <article><span>Ajax authorised</span><h3>Modern smart security installed properly</h3><p>NOX is an Ajax Authorised Installation Company while remaining free to recommend other suitable professional equipment where the property requires it.</p></article>
      <article><span>Long-term support</span><h3>Installation is the beginning, not the end</h3><p>Monitoring, annual servicing, Fire maintenance, takeovers, repairs and system development remain available through the same local company.</p></article>
    </div></div></section>

    <section className="section"><div className="container"><SectionHeading eyebrow="Real work" title="Residential and commercial installations by NOX" text="A selection of confirmed projects across homes, showrooms, industrial sites, estates and commercial premises."/><CaseStudyGrid limit={6}/><div className="button-row"><Link className="button button-outline" href="/case-studies">View All Case Studies</Link></div></div></section>
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Customer reviews" title="What customers say about the NOX experience"/><ReviewGrid limit={3}/><div className="button-row"><Link className="button button-outline" href="/reviews">Read More Reviews</Link></div></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="Guidance from NOX" title="Useful advice for property owners and businesses"/><BlogGrid limit={3}/></div></section>
    <ConversionPanel title="Discuss your property with NOX" text="Tell us what you want to protect or which system needs attention. We will review the details and guide the survey, quotation or servicing route."/>
  </>
}
