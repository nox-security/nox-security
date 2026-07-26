import type { Metadata } from "next"
import Link from "next/link"
import GHLForm from "@/components/ghl-form"
import { ReviewGrid, ReviewSummaryStrip, SectionHeading, TrustStrip } from "@/components/marketing"
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
        <div><span className="eyebrow">Start your NOX enquiry</span><h1>Get a Fire & Security quote</h1><p className="lead">Tell us about the property, site or existing system. A few clear details are enough for NOX to understand the requirement and contact you directly.</p></div>
        <div className="quote-hero-proof"><span className="micro-label">NOX Fire & Security</span><strong>Designed properly. Installed properly. Supported properly.</strong><span>Residential security · Fire & compliance · Commercial security</span></div>
      </div>
    </section>

    <ReviewSummaryStrip/>

    <section id="quote-form" className="embed-section embed-section-priority"><div className="container embed-grid quote-form-first"><GHLForm/><div className="embed-intro"><span className="eyebrow">Website Enquiry</span><h2>A few clear details are enough to begin.</h2><p>Add the property or business type, location and a short description of the system or service you need.</p><div className="contact-assurance"><strong>What happens next?</strong><span>NOX reviews the enquiry, contacts you directly and arranges a survey where the system needs to be designed around the property or site.</span></div><div className="button-row button-row-compact"><a className="button button-whatsapp" href={site.whatsapp}>WhatsApp</a><a className="button button-outline" href={site.phoneHref}>Call {site.phone}</a></div></div></div></section>

    <TrustStrip variant="general"/>

    <section className="section"><div className="container"><SectionHeading eyebrow="Customer feedback" title="Residential and commercial customers" text="Genuine feedback about communication, advice, workmanship and handover."/><ReviewGrid names={["Jeremy Bunting", "Ryan Hargreaves", "Jez S"]}/><div className="button-row"><Link className="button button-outline" href="/reviews">Read More Reviews</Link></div></div></section>
  </>
}
