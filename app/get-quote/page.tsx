import type { Metadata } from "next"
import GHLForm from "@/components/ghl-form"
import { PageHero, TrustStrip } from "@/components/marketing"
import { pageMetadata, site } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Request a Free Fire & Security Quote | NOX Chesterfield",
  "Send one website enquiry to NOX for intruder alarms, CCTV, fire safety, monitoring, maintenance, system takeovers and commercial packages.",
  "/get-quote"
)

export default function QuotePage() {
  return <>
    <PageHero eyebrow="Route 01 · Website enquiry" title="Request a free tailored quote" intro="Tell us about the property, system and location using the one NOX Website Enquiry form. The details go directly into the NOX follow-up system."><div className="contact-cards"><a href={site.phoneHref}>Call {site.phone}</a><a href={site.whatsapp}>WhatsApp the NOX team</a><a href={`mailto:${site.email}`}>{site.email}</a></div></PageHero>
    <TrustStrip/>
    <section className="embed-section"><div className="container embed-grid"><div className="embed-intro"><span className="eyebrow">One form for every enquiry</span><h2>Alarm, CCTV, fire, servicing or takeover.</h2><p>Use the same form for residential and commercial enquiries. NOX can add more specialist forms later without complicating the customer journey now.</p><p>Need the property assessed first? Use the separate booking route and choose a survey time directly.</p><a className="button button-outline" href="/book-security-survey">Book a Free Security Survey</a></div><GHLForm/></div></section>
  </>
}
