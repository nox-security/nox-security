import type { Metadata } from "next"
import Link from "next/link"
import { BlogGrid, CaseStudyGrid, ContactActions, ConversionPanel, FeatureGrid, ReviewGrid, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "About NOX Fire & Security | Our Story",
  "Discover the NOX Fire & Security journey, meet Joseph Robb and James Rigby, and learn how the Chesterfield company approaches system design, installation and long-term support.",
  "/about-us"
)

export default function AboutPage() {
  return <>
    <section className="about-hero-premium"><div className="container about-hero-grid"><div><span className="eyebrow">The NOX journey</span><h1>Built to deliver Fire & Security properly</h1><p className="lead">NOX Fire & Security is a Chesterfield-based independent company created around a straightforward belief: understand the property first, install the system properly and remain accountable after handover.</p><ContactActions /></div><div className="about-hero-media"><img src="/images/hero-house.webp" alt="NOX Fire and Security protecting homes and businesses across Derbyshire"/><div className="story-quote"><span className="eyebrow">Our message</span><blockquote>“Designed properly. Installed properly. Supported properly.”</blockquote></div></div></div></section>
    <TrustStrip/>

    <section className="section"><div className="container about-story-grid">
      <div><SectionHeading eyebrow="How NOX began" title="A more personal and accountable alternative"/><p>Joseph and James built NOX after spending years inside the security industry and seeing where the customer experience often became disconnected. Too many systems were shaped around rigid packages, sales targets or the easiest product to sell rather than the way the property was actually used.</p><p>They also saw what happened after installation. Customers could be left unsure who was responsible for faults, changes, servicing or monitoring. The original salesperson, installer and support team might all be different people, with no single person owning the full experience.</p><p>NOX was formed to bring those stages back together. The initial conversation, survey, quotation, installation, handover and ongoing support are treated as one customer journey rather than separate transactions.</p></div>
      <aside className="dark-panel about-principles"><h3>What that means in practice</h3><ul className="checklist"><li>✓ <span>The property and customer needs come before the product list.</span></li><li>✓ <span>Quotations explain the system rather than hiding behind a fixed package.</span></li><li>✓ <span>Installations are planned, tested and handed over clearly.</span></li><li>✓ <span>Monitoring, maintenance, Fire servicing and upgrades remain available locally.</span></li></ul></aside>
    </div></section>

    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="The journey today" title="From local security installations to complete Fire & Security support" text="NOX now supports homes, businesses, landlords and larger operational sites with Ajax alarms, perimeter protection, CCTV, Fire alarms, emergency lighting, monitoring, maintenance and takeovers."/><div className="journey-timeline"><article><span>01</span><h3>Customer-first security</h3><p>NOX began with honest consultations and systems designed around real residential and commercial requirements.</p></article><article><span>02</span><h3>Professional installation</h3><p>Clean workmanship, practical device placement and clear system handover became central to the NOX standard.</p></article><article><span>03</span><h3>Fire & ongoing support</h3><p>The business expanded into Fire alarm installation and servicing, emergency lighting, monitoring and maintenance.</p></article><article><span>04</span><h3>A long-term local partner</h3><p>The next stage is coordinated annual support, system takeovers, multi-system commercial work and continued customer relationships.</p></article></div></div></section>

    <section className="section"><div className="container"><SectionHeading eyebrow="Who leads NOX" title="Direct contact with the people responsible for the business" text="Joseph and James lead different areas, but the project remains joined up from first enquiry to installation and ongoing support."/><div className="team-grid">
      <article className="team-card"><img src="/images/joseph-robb.jpeg" alt="Joseph Robb, Co-Founder and Managing Director at NOX Fire and Security"/><div className="team-card-body"><span className="team-role">Joseph Robb · Co-Founder & Managing Director</span><h2>Consultations, strategy and customer relationships</h2><p>Joseph leads the overall direction of NOX together with customer consultations, quotations, system proposals, business development and long-term relationships. His role is to understand what the customer needs to protect, make the available options clear and ensure the whole experience remains straightforward from the first conversation through to handover, renewal and future support.</p></div></article>
      <article className="team-card"><img src="/images/james-rigby.webp" alt="James Rigby, Co-Founder and Operations Director at NOX Fire and Security"/><div className="team-card-body"><span className="team-role">James Rigby · Co-Founder & Operations Director</span><h2>Installations, technical quality and Fire operations</h2><p>James leads installations, operations, technical quality and the Fire side of the business. He is responsible for making sure projects are delivered properly, systems are tested and handed over clearly, and servicing, fault work and remedials are coordinated to the standard NOX expects.</p></div></article>
    </div></div></section>

    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="What NOX stands for" title="Premium service without the national call-centre experience"/><FeatureGrid columns={4} items={[
      { title:"Honest system design", text:"The property, routines, existing equipment and priorities come before the choice of products." },
      { title:"Professional workmanship", text:"Installations are planned carefully, completed tidily and tested before handover." },
      { title:"Clear communication", text:"Options, costs, controls, records and next steps are explained in plain English." },
      { title:"Long-term local support", text:"Monitoring, maintenance, Fire servicing, takeovers, repairs and upgrades remain available through NOX." }
    ]}/></div></section>

    <section className="section"><div className="container"><SectionHeading eyebrow="Real work" title="Residential and commercial installations by NOX"/><CaseStudyGrid limit={6}/><div className="button-row"><Link className="button button-outline" href="/case-studies">View All Case Studies</Link></div></div></section>
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Customer reviews" title="What customers say about the NOX experience"/><ReviewGrid limit={3}/><div className="button-row"><Link className="button button-outline" href="/reviews">Read More Reviews</Link></div></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="Advice from the team" title="Useful guides for property owners and businesses"/><BlogGrid limit={3}/></div></section>
    <ConversionPanel title="Speak directly to the NOX team" text="Tell us what you want to protect or which system needs attention. We will review the details and guide the survey, quotation or servicing route."/>
  </>
}
