import type { Metadata } from "next"
import Link from "next/link"
import GHLForm from "@/components/ghl-form"
import { ContactActions, FeatureGrid, ReviewGrid, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata, site } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Request Your Free Security Survey | NOX Fire & Security",
  "Request a residential or commercial security survey for alarms, CCTV, fire systems, monitoring, maintenance, takeovers and annual service packages across Chesterfield and Derbyshire.",
  "/get-quote"
)

export default function QuotePage() {
  return <>
    <section className="quote-hero-premium">
      <div className="container quote-hero-grid">
        <div><span className="eyebrow">One simple enquiry</span><h1>Request your free security survey</h1><p className="lead">Tell us what you want to protect, where the property is and whether the enquiry is residential or commercial. The NOX team will contact you directly and guide the quotation or survey route.</p><div className="contact-cards"><a href={site.phoneHref}>Call {site.phone}</a><a href={site.whatsapp}>WhatsApp NOX</a><a href={`mailto:${site.email}`}>{site.email}</a></div></div>
        <div className="quote-hero-proof"><strong>Designed around your property</strong><span>Alarm · CCTV · Fire · Servicing · Takeovers</span><span>Chesterfield · Sheffield · Derbyshire</span></div>
      </div>
    </section>

    <section id="quote-form" className="embed-section embed-section-priority"><div className="container embed-grid"><div className="embed-intro"><span className="eyebrow">Start here</span><h2>A quick enquiry is enough.</h2><p>Add the basic property details and the service you are interested in. You do not need to know camera quantities, device names or the final system design.</p><ul className="simple-enquiry-list"><li>Residential or commercial</li><li>Postcode or area</li><li>Alarm, CCTV, Fire, servicing or takeover</li><li>A short description of what you need</li></ul><div className="contact-assurance"><strong>Prefer to speak first?</strong><span>Call or WhatsApp the NOX team and we will take the details directly.</span></div><div className="button-row button-row-compact"><a className="button button-whatsapp" href={site.whatsapp}>WhatsApp NOX</a><a className="button button-outline" href={site.phoneHref}>Call {site.phone}</a></div></div><GHLForm/></div></section>

    <TrustStrip/>

    <section className="section"><div className="container"><SectionHeading eyebrow="What happens after you enquire" title="A clear route from first contact to quotation"/><FeatureGrid columns={4} items={[
      { title:"We review the enquiry", text:"The NOX team checks the property type, location and service needed." },
      { title:"We contact you directly", text:"We clarify the important details without making you complete several forms." },
      { title:"Survey where needed", text:"For designed systems and larger projects, we arrange a suitable property or site survey." },
      { title:"Clear quotation", text:"Equipment, installation and optional monitoring or servicing are presented clearly." }
    ]}/></div></section>

    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Residential and commercial" title="One form, with a different conversation for each property"/><div className="audience-split-subtle"><article><span className="eyebrow">Residential</span><h2>Homes, garages, outbuildings and driveways.</h2><p>Intruder alarms, Ajax MotionCam, perimeter protection, CCTV, app control, monitoring and annual maintenance.</p></article><article><span className="eyebrow">Commercial</span><h2>Alarm, CCTV, Fire and ongoing support.</h2><p>Retail, offices, hospitality, warehouses, industrial units, landlords, HMOs and multi-system sites.</p></article></div></div></section>

    <section className="section"><div className="container"><SectionHeading eyebrow="Customer confidence" title="Real feedback from NOX customers"/><ReviewGrid limit={3}/><div className="button-row"><Link className="button button-outline" href="/reviews">Read More Reviews</Link></div></div></section>
  </>
}
