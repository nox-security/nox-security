import type { Metadata } from "next"
import { ContactActions, ConversionPanel, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "About NOX Fire & Security | Built in Chesterfield",
  "Meet NOX Fire & Security, a Chesterfield-based fire and security company delivering residential, commercial, industrial and multi-site projects with professional installation and ongoing support.",
  "/about-us",
  { image: "/images/projects/logo-nox-fire-security.jpg", imageAlt: "NOX Fire and Security logo" },
)

export default function AboutPage() {
  return <div className="about-page">
    <section className="about-hero-premium about-hero-editorial"><div className="container about-hero-grid"><div><span className="eyebrow">About NOX</span><h1>Built in Chesterfield. Professional standards at every scale.</h1><p className="lead">NOX is a Chesterfield-based fire and security company delivering carefully planned systems for homes, commercial premises, industrial sites and larger multi-site projects.</p><ContactActions primaryLabel="Discuss Your Requirements" /></div><div className="about-brand-panel"><img src="/images/projects/logo-nox-fire-security.jpg" alt="NOX Fire & Security logo mark"/><span>Chesterfield · Sheffield · Derbyshire</span><blockquote>Designed with purpose.<br/>Installed professionally.<br/>Supported long-term.</blockquote></div></div></section>
    <TrustStrip variant="general"/>

    <section className="section about-story-section"><div className="container about-origin-grid">
      <div><span className="eyebrow">Why NOX</span><h2>Local roots. Serious project capability.</h2></div>
      <div className="about-long-copy">
        <p>NOX Fire & Security was founded in Chesterfield to provide a more considered approach to fire and security: systems designed around the property, the people using it and the outcome the customer actually needs.</p>
        <p>Our work now spans residential security, commercial CCTV, intruder protection, fire alarms, monitoring, servicing and ongoing compliance support. The business has grown through completed projects, repeat customers and long-term relationships rather than a one-size-fits-all sales model.</p>
        <p>Chesterfield remains our base and a key part of who we are, while our team and project experience allow us to support larger commercial, phased and multi-site requirements across a wider footprint when the project is the right fit.</p>
      </div>
    </div></section>

    <section className="section section-alt leadership-section"><div className="container"><SectionHeading eyebrow="Leadership" title="Meet the Directors of NOX" text="Joseph and James lead complementary sides of the business, keeping commercial planning, technical delivery and ongoing support connected under one accountable team."/>
      <div className="founder-profile-grid">
        <article className="founder-profile"><div className="founder-profile-image"><img src="/images/v4-13-46/joseph-robb-director.webp" alt="Joseph Robb, Managing Director at NOX Fire and Security"/></div><div><span className="team-role">Joseph Robb</span><h2>Managing Director</h2><p className="founder-remit">Commercial strategy, client relationships and business growth</p><p>Joseph leads the commercial direction of NOX, overseeing key client relationships, surveys, proposals and business development. His focus is to ensure every recommendation is commercially clear, technically appropriate and built around how the property or organisation actually operates.</p><p>He also leads the company’s growth, finance and marketing strategy, with particular focus on long-term customer relationships and larger commercial and multi-site opportunities. His role is to keep the client brief, project scope and ongoing support route connected from the first conversation through to completion.</p></div></article>
        <article className="founder-profile"><div className="founder-profile-image"><img src="/images/v4-13-46/james-rigby-director.webp" alt="James Rigby, Operations Director at NOX Fire and Security"/></div><div><span className="team-role">James Rigby</span><h2>Operations Director</h2><p className="founder-remit">Operations, technical delivery and installation standards</p><p>James leads the operational and technical delivery of NOX projects, coordinating work from preparation through installation, commissioning and handover. He oversees installation standards, project planning, equipment, documentation, servicing and technical support.</p><p>He also leads the delivery of NOX fire alarm and compliance work, ensuring systems are installed cleanly, tested correctly and supported after completion. His focus is consistent workmanship, practical site management and reliable long-term system performance.</p></div></article>
      </div>
    </div></section>

    <section className="section"><div className="container"><SectionHeading eyebrow="How we work" title="One connected standard from survey to support"/><div className="about-editorial-columns">
      <article><span>Design</span><h3>Start with the property and the required outcome.</h3><p>We review the site, risks, routines, existing equipment and future requirements before finalising the specification.</p></article>
      <article><span>Delivery</span><h3>Install with the finished property in mind.</h3><p>Positioning, cabling, setup, testing and presentation are treated as part of the overall quality of the project, not separate tasks.</p></article>
      <article><span>Support</span><h3>Keep the relationship connected after handover.</h3><p>Servicing, monitoring, maintenance, upgrades and remedial work remain available through the same business as requirements develop.</p></article>
    </div></div></section>

    <ConversionPanel title="Start a project with NOX" text="Talk to us about a new installation, an existing system or ongoing support and we will guide you to the right next step."/>
  </div>
}
