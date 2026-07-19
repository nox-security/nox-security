import type { Metadata } from "next"
import Link from "next/link"
import GHLForm from "@/components/ghl-form"
import { PageHero, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata, site } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Contact NOX Fire & Security | Chesterfield",
  "Contact NOX Fire & Security in Chesterfield for alarms, CCTV, fire systems, monitoring, maintenance, service plans and system takeovers.",
  "/contact"
)

export default function ContactPage() {
  return <>
    <PageHero eyebrow="Contact NOX" title="Speak to the local team responsible for your project" intro="Call, WhatsApp or email NOX, send the website enquiry form, or book a security survey directly into the calendar." image="/images/joseph-robb.jpeg" imageAlt="Joseph Robb from NOX Fire and Security in Chesterfield"><div className="contact-cards"><a href={site.phoneHref}>{site.phone}</a><a href={site.whatsapp}>WhatsApp NOX</a><a href={`mailto:${site.email}`}>{site.email}</a><div>{site.base}</div></div></PageHero>
    <TrustStrip/>
    <section className="section"><div className="container"><SectionHeading eyebrow="Choose the right route" title="Quote enquiry or direct survey booking"/><div className="route-grid"><article className="route-card"><span className="route-number">ROUTE 01</span><div><h2>Request a Free Quote</h2><p>Use the one Website Enquiry form for alarm, CCTV, fire, service plans, repairs, takeovers and commercial work.</p><Link className="button button-light" href="#website-enquiry">Open Website Enquiry</Link></div></article><article className="route-card light"><span className="route-number">ROUTE 02</span><div><h2>Book a Free Security Survey</h2><p>Choose an available survey time directly. You do not need to complete the enquiry form first.</p><Link className="button button-dark" href="/book-security-survey">Open Booking Calendar</Link></div></article></div></div></section>
    <section id="website-enquiry" className="embed-section section-alt"><div className="container embed-grid"><div className="embed-intro"><span className="eyebrow">Website enquiry</span><h2>Tell us about the property and what you need.</h2><p>Include the location, residential or commercial use, the systems involved and any existing equipment or known faults.</p></div><GHLForm compact/></div></section>
  </>
}
