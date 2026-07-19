import type { Metadata } from "next"
import Link from "next/link"
import GHLForm from "@/components/ghl-form"
import { ContactActions, FeatureGrid, ReviewGrid, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata, site } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Contact NOX Fire & Security | Chesterfield",
  "Contact NOX Fire & Security for residential and commercial alarms, CCTV, fire systems, monitoring, maintenance, service plans and system takeovers.",
  "/contact"
)

export default function ContactPage() {
  return <>
    <section className="contact-hero-premium"><div className="container contact-premium-grid"><div><span className="eyebrow">Contact NOX</span><h1>Speak directly to the local team responsible for your project</h1><p className="lead">Request a survey online, call us or send a WhatsApp message. We keep the first step simple whether you need a new installation, servicing, a repair or help with an existing system.</p><ContactActions /></div><div className="contact-image-panel"><img src="/images/resent-installation/0AED4F55-020E-40A5-8823-5BC499AA2015.png" alt="Premium NOX Fire and Security installation at a customer property"/><div className="contact-image-caption"><strong>NOX Fire & Security</strong><span>{site.base}</span><a href={site.phoneHref}>{site.phone}</a><a href={`mailto:${site.email}`}>{site.email}</a></div></div></div></section>

    <section id="website-enquiry" className="embed-section embed-section-priority"><div className="container embed-grid"><div className="embed-intro"><span className="eyebrow">Request your survey</span><h2>Tell us the basics. We will ask the right questions next.</h2><p>The form is for residential and commercial alarms, CCTV, Fire safety, monitoring, maintenance, repairs and system takeovers.</p><p>A postcode, system type and short description are enough to start. You do not need to design the system yourself.</p><div className="contact-assurance"><strong>One enquiry. One local team.</strong><span>Joseph or the NOX team will review the details and contact you directly.</span></div></div><GHLForm/></div></section>

    <TrustStrip/>

    <section className="section"><div className="container"><SectionHeading eyebrow="What happens next" title="Professional, straightforward and easy to follow"/><FeatureGrid columns={4} items={[
      { title:"Your enquiry is reviewed", text:"We identify the property type, service required and anything that needs clarifying." },
      { title:"We contact you", text:"Call, email or WhatsApp is used to understand the project without sending you through more forms." },
      { title:"Survey and quotation", text:"Where a site visit is needed, it is arranged before the tailored quotation is prepared." },
      { title:"Installation and aftercare", text:"The system is installed and handed over properly, with maintenance or monitoring available afterward." }
    ]}/></div></section>

    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Customer reviews" title="Trusted for communication, professional work and proper handover"/><ReviewGrid limit={3}/><div className="button-row"><Link className="button button-outline" href="/reviews">Read More Customer Reviews</Link></div></div></section>
  </>
}
