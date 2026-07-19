import type { Metadata } from "next"
import Link from "next/link"
import GHLForm from "@/components/ghl-form"
import { FeatureGrid, ReviewGrid, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata, site } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Request Your Free Security Survey | NOX Fire & Security",
  "Request a free residential or commercial security survey for alarms, CCTV, fire systems, servicing, monitoring, takeovers and annual support across Chesterfield and Derbyshire.",
  "/get-quote"
)

export default function QuotePage() {
  return <>
    <section className="quote-hero-premium premium-enquiry-hero">
      <div className="container quote-hero-grid">
        <div><span className="eyebrow">Your first step with NOX</span><h1>Request your free security survey</h1><p className="lead">Tell us about the property and the support you need. The NOX team will review the enquiry directly and guide the correct residential, commercial, Fire or servicing route.</p></div>
        <div className="quote-hero-proof"><span className="micro-label">NOX Fire & Security</span><strong>Designed around the property.</strong><span>Premium residential · Commercial Fire & Security</span><span>Installation · Servicing · Monitoring · Takeovers</span></div>
      </div>
    </section>

    <section id="quote-form" className="embed-section embed-section-priority"><div className="container embed-grid quote-form-first"><GHLForm/><div className="embed-intro"><span className="eyebrow">Start your enquiry</span><h2>A few property details are enough.</h2><p>Select whether the enquiry is residential or commercial, add the location and tell us whether you need an alarm, CCTV, Fire system, servicing or help with existing equipment.</p><ul className="simple-enquiry-list"><li>Residential or commercial property</li><li>Postcode or site location</li><li>New installation, service, repair or takeover</li><li>A short description of what you need</li></ul><div className="contact-assurance"><strong>What happens next?</strong><span>Joseph or the NOX team will review the details and contact you directly. A site survey is arranged where the system needs to be designed around the property.</span></div></div></div></section>

    <section className="direct-contact-section"><div className="container"><SectionHeading eyebrow="Prefer to speak directly?" title="Call, WhatsApp or email the NOX team" text="The form is the quickest way to give us the property details, but direct contact remains available when you would rather speak first."/><div className="direct-contact-grid"><a href={site.phoneHref}><span>Telephone</span><strong>{site.phone}</strong></a><a href={site.whatsapp}><span>WhatsApp</span><strong>Message NOX</strong></a><a href={`mailto:${site.email}`}><span>Email</span><strong>{site.email}</strong></a></div></div></section>

    <TrustStrip/>

    <section className="section"><div className="container"><SectionHeading eyebrow="What happens after you enquire" title="A clear route from first contact to quotation"/><FeatureGrid columns={4} items={[
      { title:"The enquiry is reviewed", text:"The NOX team checks the property type, location, systems involved and the reason for the enquiry." },
      { title:"We contact you directly", text:"We clarify the important details without passing you through several departments or forms." },
      { title:"A survey is arranged", text:"For designed systems, premium homes and larger commercial sites, we arrange a suitable property survey." },
      { title:"A clear quotation follows", text:"Equipment, installation and optional monitoring, servicing or compliance support are presented clearly." }
    ]}/></div></section>

    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Residential and commercial" title="One form, with the right conversation for each property"/><div className="audience-split-subtle"><article><span className="eyebrow">Premium residential</span><h2>Homes, garages, outbuildings and driveways.</h2><p>Intruder alarms, Ajax MotionCam, perimeter protection, CCTV, app control, monitoring and annual maintenance.</p></article><article><span className="eyebrow">Commercial & Fire</span><h2>Alarm, CCTV, Fire and ongoing support.</h2><p>Retail, offices, hospitality, warehouses, industrial units, landlords, HMOs and multi-system sites.</p></article></div></div></section>

    <section className="section"><div className="container"><SectionHeading eyebrow="Customer confidence" title="Real feedback from NOX customers"/><ReviewGrid limit={3}/><div className="button-row"><Link className="button button-outline" href="/reviews">Read More Reviews</Link></div></div></section>
  </>
}
