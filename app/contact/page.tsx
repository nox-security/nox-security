import type { Metadata } from "next"
import Link from "next/link"
import GHLForm from "@/components/ghl-form"
import { FeatureGrid, PageHero, ReviewGrid, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata, site } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Contact NOX Fire & Security | Chesterfield",
  "Contact NOX Fire & Security in Chesterfield for residential and commercial alarms, CCTV, fire systems, monitoring, maintenance, service plans and system takeovers.",
  "/contact"
)

export default function ContactPage() {
  return <>
    <PageHero eyebrow="Contact NOX" title="Start a conversation with the local team responsible for your project" intro="Use one clear enquiry route for residential, commercial, installation, servicing, repairs or an existing-system takeover. You can also call, WhatsApp or email us directly." image="/images/resent-installation/0AED4F55-020E-40A5-8823-5BC499AA2015.png" imageAlt="Professional NOX fire and security installation in Derbyshire"><div className="contact-cards"><a href={site.phoneHref}>Call {site.phone}</a><a href={site.whatsapp}>WhatsApp NOX</a><a href={`mailto:${site.email}`}>{site.email}</a><div>{site.base}</div></div></PageHero>
    <TrustStrip/>

    <section className="section"><div className="container"><SectionHeading eyebrow="Residential or commercial" title="The same enquiry form, with the right questions for your property" text="Choose the route that best describes the enquiry, then include the location, system type and any useful details about the property or existing equipment."/><div className="commercial-band contact-choice-band"><div><span className="eyebrow">Residential enquiry</span><h2>Home alarms, CCTV, garages, outbuildings and aftercare.</h2><p>Tell us what you want to protect, whether there is an existing system and which areas matter most.</p><div className="sector-tags"><span>Intruder alarms</span><span>CCTV</span><span>Perimeter</span><span>Monitoring</span><span>Maintenance</span></div><Link className="button button-dark" href="#website-enquiry">Start Residential Enquiry</Link></div><div><span className="eyebrow">Commercial enquiry</span><h2>Alarm, CCTV, fire, compliance and multi-system support.</h2><p>Include the site type, systems involved, approximate scale and whether the project is a new installation, service or takeover.</p><div className="sector-tags"><span>Retail</span><span>Offices</span><span>Industrial</span><span>Hospitality</span><span>Portfolios</span></div><Link className="button button-light" href="#website-enquiry">Start Commercial Enquiry</Link></div></div></div></section>

    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="What happens next" title="A clear process from enquiry to quotation"/><FeatureGrid columns={4} items={[
      { title:"We review the details", text:"Joseph or the NOX team reviews the property, location, services involved and any existing-system information." },
      { title:"We contact you", text:"We clarify anything missing and explain whether pricing can be prepared or whether a site survey is the sensible next step." },
      { title:"You receive a quotation", text:"The proposed equipment, installation and any optional monitoring or servicing are set out clearly." },
      { title:"You choose how to proceed", text:"There is no need to navigate several forms or book before the project has been understood." }
    ]}/></div></section>

    <section id="website-enquiry" className="embed-section"><div className="container embed-grid"><div className="embed-intro"><span className="eyebrow">Get a free quote</span><h2>Tell us about the property and what you need.</h2><p>Use this form for alarms, CCTV, fire safety, service plans, repairs, system takeovers and commercial packages.</p><p>Useful details include the postcode, residential or commercial use, approximate camera or device quantities, existing equipment and any known faults.</p><div className="contact-assurance"><strong>One enquiry. One local team.</strong><span>We will arrange a survey when the property needs to be assessed before quotation.</span></div></div><GHLForm/></div></section>

    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Customer reviews" title="Trusted for clear communication and professional work"/><ReviewGrid limit={3}/><div className="button-row"><Link className="button button-outline" href="/reviews">Read More Customer Reviews</Link></div></div></section>
  </>
}
