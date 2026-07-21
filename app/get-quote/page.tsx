import type { Metadata } from "next"
import Link from "next/link"
import GHLForm from "@/components/ghl-form"
import { FeatureGrid, ReviewGrid, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata, site } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Get a Fire & Security Quote",
  "Tell NOX about a residential security, commercial CCTV, fire alarm, emergency lighting, servicing, monitoring or system takeover requirement.",
  "/get-quote"
)

export default function QuotePage() {
  return <>
    <section className="quote-hero-premium premium-enquiry-hero">
      <div className="container quote-hero-grid">
        <div><span className="eyebrow">Start your NOX enquiry</span><h1>Get a fire and security quote</h1><p className="lead">Tell us about the property, site or existing system. The NOX team will review the details and guide the correct residential, fire, commercial or servicing route.</p></div>
        <div className="quote-hero-proof"><span className="micro-label">NOX Fire & Security</span><strong>Designed properly. Installed properly. Supported properly.</strong><span>Residential security · Fire & compliance · Commercial security</span><span>Installation · Servicing · Monitoring · Repairs · Takeovers</span></div>
      </div>
    </section>

    <section id="quote-form" className="embed-section embed-section-priority"><div className="container embed-grid quote-form-first"><GHLForm/><div className="embed-intro"><span className="eyebrow">Tell us what you need</span><h2>A few clear details are enough to begin.</h2><p>Select the property or business type, add the location and briefly explain whether you need a new installation, service, repair, monitoring, compliance support or help with existing equipment.</p><ul className="simple-enquiry-list"><li>Home, commercial premises or multi-site portfolio</li><li>Postcode or site location</li><li>Alarm, CCTV, fire or emergency-lighting requirement</li><li>Installation, service, fault, upgrade or takeover</li></ul><div className="contact-assurance"><strong>What happens next?</strong><span>Joseph or the NOX team will review the enquiry and contact you directly. A survey is arranged where the system needs to be designed around the property or site.</span></div></div></div></section>

    <section className="direct-contact-section"><div className="container"><SectionHeading eyebrow="Prefer to speak directly?" title="Call, WhatsApp or email the NOX team" text="The form is the quickest way to provide the project details, while direct contact remains available when you would rather speak first."/><div className="direct-contact-grid"><a href={site.phoneHref}><span>Telephone</span><strong>{site.phone}</strong></a><a href={site.whatsapp}><span>WhatsApp</span><strong>Message NOX</strong></a><a href={`mailto:${site.email}`}><span>Email</span><strong>{site.email}</strong></a></div></div></section>

    <TrustStrip/>

    <section className="section"><div className="container"><SectionHeading eyebrow="What happens after you enquire" title="A clear route from first contact to quotation"/><FeatureGrid columns={4} items={[
      { title:"The enquiry is reviewed", text:"The NOX team checks the property type, location, systems involved and the reason for the enquiry." },
      { title:"We contact you directly", text:"We clarify the important details without passing you through several departments or repeated forms." },
      { title:"A survey is arranged", text:"Designed residential systems, fire projects and larger commercial sites are surveyed where required." },
      { title:"A clear quotation follows", text:"Equipment, installation and optional monitoring, servicing or compliance support are presented clearly." }
    ]}/></div></section>

    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Choose the right starting point" title="One form, with a relevant conversation for each requirement"/><div className="audience-split-subtle"><article><span className="eyebrow">Residential</span><h2>Alarms, CCTV, garages, gates and outbuildings.</h2><p>Ajax intruder alarms, perimeter protection, home CCTV, smart security, monitoring and annual maintenance.</p></article><article><span className="eyebrow">Fire and commercial</span><h2>Fire, CCTV, intruder and ongoing compliance support.</h2><p>Commercial premises, hospitality, warehouses, industrial sites, yards, landlords and multi-site portfolios.</p></article></div></div></section>

    <section className="section"><div className="container"><SectionHeading eyebrow="Customer confidence" title="Real feedback from NOX customers"/><ReviewGrid limit={3}/><div className="button-row"><Link className="button button-outline" href="/reviews">Read More Reviews</Link></div></div></section>
  </>
}
