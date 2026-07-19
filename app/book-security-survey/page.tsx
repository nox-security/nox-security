import type { Metadata } from "next"
import SurveyCalendar from "@/components/survey-calendar"
import { PageHero, TrustStrip } from "@/components/marketing"
import { pageMetadata, site } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Book a Free Security Survey | NOX Chesterfield",
  "Book a free NOX security survey directly using the live calendar for alarm, CCTV, fire and commercial security projects across Chesterfield and Derbyshire.",
  "/book-security-survey"
)

export default function SurveyPage() {
  return <>
    <PageHero eyebrow="Route 02 · Live booking calendar" title="Book a free security survey directly" intro="Choose an available appointment without completing the website enquiry form first. The survey helps NOX understand the property, risks and right system design."><div className="contact-cards"><a href={site.phoneHref}>Call {site.phone}</a><a href={site.whatsapp}>WhatsApp the NOX team</a></div></PageHero>
    <TrustStrip/>
    <section className="embed-section"><div className="container embed-grid"><div className="embed-intro"><span className="eyebrow">What the survey covers</span><h2>Property, risks, system options and next steps.</h2><p>The survey can cover intruder alarms, CCTV, perimeter protection, fire systems, emergency lighting, monitoring, maintenance or takeover of suitable existing equipment.</p><p>After the visit, NOX can prepare a tailored quotation for the agreed equipment and installation.</p><a className="button button-outline" href="/get-quote">Prefer to Send an Enquiry?</a></div><SurveyCalendar/></div></section>
  </>
}
