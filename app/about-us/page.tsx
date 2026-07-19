import type { Metadata } from "next"
import Link from "next/link"
import { BlogGrid, CaseStudyGrid, ConversionPanel, FeatureGrid, PageHero, ReviewGrid, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "About NOX Fire & Security | Local Chesterfield Company",
  "Meet NOX Fire & Security, a local independent Chesterfield company led by Joseph Robb and James Rigby, serving homes and businesses across Derbyshire and Sheffield.",
  "/about-us"
)

export default function AboutPage() {
  return <>
    <PageHero eyebrow="Local. Independent. Accountable." title="We are NOX Fire & Security" intro="A Chesterfield-based company built to provide honest advice, systems designed around the property, clean installation and proper support after handover." image="/images/hero-house.webp" imageAlt="NOX Fire and Security serving homes and businesses from Chesterfield"/>
    <TrustStrip/>

    <section className="section"><div className="container about-story-grid">
      <div><SectionHeading eyebrow="Our story" title="A better way to deliver fire and security"/><p>NOX Fire & Security was founded with a clear purpose: to do security properly. After years in the industry, Joseph and James saw the same problems repeatedly — rigid packages, unclear pricing, equipment selected before the property was understood and customers left unsure who to contact once the installation was complete.</p><p>NOX was created to offer a more personal and accountable alternative. Every project begins with an honest conversation about the property, the risks, how the building is used and what the customer genuinely wants to achieve. The system is then designed around those requirements rather than forcing the customer into a standard kit.</p><p>Based in Chesterfield, NOX supports residential and commercial customers across Sheffield, Derbyshire and surrounding areas with intruder alarms, CCTV, fire systems, monitoring, maintenance, takeovers and upgrades.</p></div>
      <aside className="story-quote"><span className="eyebrow">The NOX message</span><blockquote>“Designed properly. Installed properly. Supported properly.”</blockquote><p>That means careful system design, professional workmanship, a clear handover and local aftercare that remains available when the customer needs it.</p></aside>
    </div></section>

    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Who leads NOX" title="Direct contact with the people responsible for the work" text="Joseph and James lead different sides of the business, but the customer journey remains joined up from first enquiry to installation and ongoing support."/><div className="team-grid">
      <article className="team-card"><img src="/images/joseph-robb.jpeg" alt="Joseph Robb, Co-Founder and Managing Director at NOX Fire and Security"/><div className="team-card-body"><span className="team-role">Joseph Robb · Co-Founder & Managing Director</span><h2>Consultations, quotations and customer relationships</h2><p>Joseph leads the commercial direction of NOX together with customer consultations, quoting, system proposals and long-term relationships. His role is to understand what the customer is trying to protect, explain the available options clearly and make sure the project feels straightforward from the first conversation through to handover and ongoing support.</p></div></article>
      <article className="team-card"><img src="/images/james-rigby.webp" alt="James Rigby, Co-Founder and Operations Director at NOX Fire and Security"/><div className="team-card-body"><span className="team-role">James Rigby · Co-Founder & Operations Director</span><h2>Installations, technical quality and fire operations</h2><p>James leads installations, operations, technical quality and the fire side of the business. He is responsible for making sure projects are delivered properly, systems are tested and handed over clearly, and servicing or remedial work is coordinated to the standard NOX expects.</p></div></article>
    </div></div></section>

    <section className="section"><div className="container"><SectionHeading eyebrow="What NOX stands for" title="The system should fit the property — and the support should fit the customer"/><FeatureGrid columns={4} items={[
      { title:"Honest system design", text:"The property, use, existing equipment and customer priorities come before the choice of products." },
      { title:"Professional workmanship", text:"Installations are planned carefully, completed tidily and tested before the handover." },
      { title:"Clear communication", text:"Options, costs, controls, records and next steps are explained in plain English." },
      { title:"Long-term local support", text:"Monitoring, maintenance, fire servicing, takeovers, repairs and upgrades remain available through NOX." }
    ]}/></div></section>

    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="From installation to aftercare" title="A complete customer journey without unnecessary pressure"/><FeatureGrid columns={4} items={[
      { title:"One enquiry", text:"Residential and commercial customers use the same clear enquiry route for installations, servicing or existing-system support." },
      { title:"Survey and quotation", text:"Where a site visit is needed, NOX arranges the survey before presenting the tailored equipment and installation scope." },
      { title:"Installation and handover", text:"The work is completed cleanly, tested properly and explained before the project is closed." },
      { title:"Ongoing support", text:"Monitoring, annual servicing, fire packages, repairs and future upgrades are introduced where they add real value." }
    ]}/></div></section>

    <section className="section"><div className="container"><SectionHeading eyebrow="Real work" title="Residential and commercial installations by NOX"/><CaseStudyGrid limit={6}/><div className="button-row"><Link className="button button-outline" href="/case-studies">View All Case Studies</Link></div></div></section>
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Customer reviews" title="What customers say about the NOX experience"/><ReviewGrid limit={3}/><div className="button-row"><Link className="button button-outline" href="/reviews">Read More Reviews</Link></div></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="Advice from the team" title="Useful guides for property owners and businesses"/><BlogGrid limit={3}/></div></section>
    <ConversionPanel title="Speak directly to the NOX team" text="Tell us whether the enquiry is residential or commercial and which systems or services are involved. We will review the details and guide the next step."/>
  </>
}
