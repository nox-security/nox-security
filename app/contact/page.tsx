import type { Metadata } from "next"
import Link from "next/link"
import { PageHero, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata, site } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Contact NOX Fire & Security | Chesterfield",
  "Contact NOX Fire & Security about residential alarms, CCTV, commercial fire systems, emergency lighting, monitoring, maintenance and system takeovers.",
  "/contact",
  { image: "/images/projects/bottle-thyme-vehicles.jpg", imageAlt: "NOX Fire and Security vehicles in Chesterfield" },
)

export default function ContactPage() {
  return <>
    <PageHero eyebrow="Contact NOX" title="Speak directly to the local Fire & Security team" intro="Use the contact details below for an existing system, a fault, service support or a general question. For a new quotation, the short enquiry form gives the team the details needed to respond properly." image="/images/projects/bottle-thyme-vehicles.jpg" imageAlt="NOX Fire and Security vehicles outside a commercial project in Chesterfield">
      <div className="button-row"><Link className="button button-light" href="/get-quote#quote-form">Get a Quote</Link><a className="button button-whatsapp" href={site.whatsapp}>WhatsApp NOX</a><a className="button button-outline" href={site.phoneHref}>Call {site.phone}</a></div>
    </PageHero>

    <section className="direct-contact-section"><div className="container"><SectionHeading eyebrow="Direct contact" title="Telephone, WhatsApp and email" text="Speak to NOX about a current system, planned service, fault, takeover or general Fire & Security question."/><div className="direct-contact-grid"><a href={site.phoneHref}><span>Telephone</span><strong>{site.phone}</strong></a><a href={site.whatsapp}><span>WhatsApp</span><strong>Message the team</strong></a><a href={`mailto:${site.email}`}><span>Email</span><strong>{site.email}</strong></a></div></div></section>

    <TrustStrip variant="general"/>

    <section className="section"><div className="container contact-information-grid">
      <article className="feature-card"><span className="eyebrow">Opening hours</span><h2>When to contact us</h2><p><strong>Monday–Friday:</strong> 8:00am–6:00pm</p><p><strong>Saturday:</strong> 9:00am–4:00pm</p><p>Messages received outside these hours are reviewed when the team is next available.</p></article>
      <article className="feature-card"><span className="eyebrow">Existing customers</span><h2>Service and fault support</h2><p>Share the site address, system type, panel or recorder make and a short description of the issue. Photographs of a fault display can also help us understand the next step.</p><Link className="text-link" href="/service-plans">View Servicing & Monitoring →</Link></article>
      <article className="feature-card"><span className="eyebrow">Service area</span><h2>Chesterfield, Sheffield and Derbyshire</h2><p>NOX covers the core local area, with wider travel for suitable commercial, industrial, multi-site and larger residential projects.</p><Link className="text-link" href="/areas-we-serve">View Areas We Cover →</Link></article>
    </div></section>

    <section className="conversion-panel"><div className="container conversion-panel-grid"><div><span className="eyebrow">New enquiry</span><h2>Ready to request a quotation?</h2><p>Use the short Website Enquiry form and tell us about the property, location and work required.</p></div><div className="button-row"><Link className="button button-dark" href="/get-quote#quote-form">Get a Quote</Link></div></div></section>
  </>
}
