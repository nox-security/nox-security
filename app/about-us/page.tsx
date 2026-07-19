import type { Metadata } from "next"
import Link from "next/link"
import { CaseStudyGrid, ConversionPanel, FeatureGrid, PageHero, ReviewGrid, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "About NOX Fire & Security | Local Chesterfield Installers",
  "Meet NOX Fire & Security, a local independent Chesterfield company led by Joseph Robb and James Rigby, serving homes and businesses across Derbyshire and Sheffield.",
  "/about-us"
)

export default function AboutPage() {
  return <>
    <PageHero eyebrow="Local. Independent. Accountable." title="We are NOX Fire & Security" intro="A Chesterfield-based fire and security company built around honest advice, tailored system design, clean installation and direct ongoing support." image="/images/hero-house.webp" imageAlt="NOX Fire and Security serving homes and businesses from Chesterfield"/>
    <TrustStrip/>
    <section className="section"><div className="container local-copy"><SectionHeading eyebrow="Our story" title="Designed properly. Installed properly. Supported properly."/><p>NOX Fire & Security was founded with a clear purpose: to do security properly. Too often, customers are pushed towards rigid packages or equipment that does not match the property, the risk or the way the building is used.</p><p>NOX takes a different approach. Every project starts with an honest conversation and, where required, a site survey. The team considers the property, access points, operating routines, existing equipment and the customer’s priorities before recommending the right alarm, CCTV, fire or ongoing service arrangement.</p><p>Ajax is the preferred smart security platform for many alarm and CCTV projects, but NOX does not assume every property needs the same equipment. The design comes first.</p></div></section>
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="The team" title="Direct contact with the people responsible for the work"/><div className="team-grid"><article className="team-card"><img src="/images/joseph-robb.jpeg" alt="Joseph Robb, Sales Director at NOX Fire and Security"/><div className="team-card-body"><span className="team-role">Joseph Robb · Co-Founder & Sales Director</span><h2>Consultations, quotations and customer relationships</h2><p>Joseph leads customer consultations, quoting, sales and business relationships. His role is to understand the property and requirement, explain the options clearly and keep communication straightforward from first enquiry through to handover and ongoing support.</p></div></article><article className="team-card"><img src="/images/james-rigby.webp" alt="James Rigby, Operations Director at NOX Fire and Security"/><div className="team-card-body"><span className="team-role">James Rigby · Co-Founder & Operations Director</span><h2>Installations, technical quality and fire operations</h2><p>James leads installations, operations, technical quality and the fire side of the business. He is responsible for ensuring projects are delivered properly, systems are tested and handed over clearly, and ongoing service work is coordinated to the expected standard.</p></div></article></div></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="How NOX works" title="A complete customer journey without unnecessary pressure"/><FeatureGrid columns={4} items={[
      { title:"Enquiry or survey", text:"Request a quote with the project details or book a security survey directly into the calendar." },
      { title:"Design and quotation", text:"The system is designed around the property and presented with optional monitoring or maintenance explained separately." },
      { title:"Installation and handover", text:"The work is completed cleanly, tested properly and handed over in plain English." },
      { title:"Ongoing support", text:"Monitoring, annual servicing, fire compliance packages, takeovers, repairs and future upgrades remain available." }
    ]}/></div></section>
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Real work" title="Residential and commercial installations by NOX"/><CaseStudyGrid limit={6}/></div></section>
    <section className="section"><div className="container split-grid"><div><SectionHeading eyebrow="Trust" title="No generic call centre and no invented claims" text="The website avoids unsupported credentials, blanket guarantees and fake customer quotations."/><ReviewGrid/></div><aside className="dark-panel"><h3>Based in Chesterfield</h3><p>Core coverage includes Chesterfield, Sheffield, Dronfield, Matlock, Bakewell, Baslow, Buxton, Hope Valley, Hathersage, Darley Dale, Ashover and wider Derbyshire.</p><Link className="button button-light" href="/areas-we-serve">View Areas We Cover</Link></aside></div></section>
    <ConversionPanel title="Talk directly to the NOX team" text="Send the initial details for a tailored quote, or book a free security survey directly into the diary."/>
  </>
}
