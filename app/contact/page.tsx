import type { Metadata } from "next"
import Link from "next/link"
import GHLForm from "@/components/ghl-form"
import { FeatureGrid, ReviewGrid, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata, site } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Contact NOX Fire & Security | Chesterfield",
  "Contact NOX Fire & Security for premium residential and commercial alarms, CCTV, fire systems, monitoring, maintenance, service plans and system takeovers.",
  "/contact"
)

export default function ContactPage() {
  return <>
    <section className="contact-hero-premium"><div className="container contact-premium-grid"><div><span className="eyebrow">Contact NOX</span><h1>Speak to the local team responsible for the project</h1><p className="lead">Use the enquiry form for a new system, servicing, Fire support, a repair or an existing-system takeover. Your details are reviewed directly by NOX rather than passed through a national call centre.</p></div><div className="contact-image-panel"><img src="/images/projects/bottle-thyme-vehicles.jpg" alt="NOX Fire and Security vehicles outside a commercial project in Chesterfield"/><div className="contact-image-caption"><strong>NOX Fire & Security</strong><span>{site.base}</span><span>Ajax security · Commercial Fire systems · Local aftercare</span></div></div></div></section>

    <section id="website-enquiry" className="embed-section embed-section-priority"><div className="container embed-grid quote-form-first"><GHLForm/><div className="embed-intro"><span className="eyebrow">Request your free security survey</span><h2>Start with the property. We will guide the detail.</h2><p>The same form covers residential and commercial alarms, CCTV, Fire systems, servicing, monitoring, repairs and takeovers.</p><p>A postcode, property type and short description are enough to begin. You do not need to choose devices or design the final system yourself.</p><div className="contact-assurance"><strong>One enquiry. One accountable team.</strong><span>NOX will review the details and contact you directly to confirm the next step.</span></div></div></div></section>

    <section className="direct-contact-section"><div className="container"><SectionHeading eyebrow="Direct contact" title="Telephone, WhatsApp and email" text="These options sit after the enquiry form on mobile so customers can start the survey request without searching through contact details first."/><div className="direct-contact-grid"><a href={site.phoneHref}><span>Telephone</span><strong>{site.phone}</strong></a><a href={site.whatsapp}><span>WhatsApp</span><strong>Message the team</strong></a><a href={`mailto:${site.email}`}><span>Email</span><strong>{site.email}</strong></a></div></div></section>

    <TrustStrip/>

    <section className="section"><div className="container"><SectionHeading eyebrow="What happens next" title="Professional, straightforward and easy to follow"/><FeatureGrid columns={4} items={[
      { title:"Your enquiry is reviewed", text:"We identify the property type, service required and anything that needs clarifying." },
      { title:"We contact you", text:"Call, email or WhatsApp is used to understand the project without sending you through more forms." },
      { title:"Survey and quotation", text:"Where a site visit is needed, it is arranged before the tailored quotation is prepared." },
      { title:"Installation and aftercare", text:"The system is installed and handed over properly, with maintenance, monitoring or Fire support available afterward." }
    ]}/></div></section>

    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Customer reviews" title="Trusted for communication, professional work and proper handover"/><ReviewGrid limit={3}/><div className="button-row"><Link className="button button-outline" href="/reviews">Read More Customer Reviews</Link></div></div></section>
  </>
}
