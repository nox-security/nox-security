import type { Metadata } from "next"
import Link from "next/link"
import { ContactActions, ConversionPanel, PageHero, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata, site } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Contact NOX Fire & Security | Chesterfield",
  "Contact NOX Fire & Security about residential alarms, CCTV, commercial fire systems, emergency lighting, monitoring, maintenance and system takeovers.",
  "/contact",
  { image: "/images/projects/bottle-thyme-vehicles.jpg", imageAlt: "NOX Fire and Security vehicles in Chesterfield" },
)

export default function ContactPage() {
  return <>
    <PageHero eyebrow="Contact NOX" title="Speak directly to NOX Fire & Security" intro="Use the contact details below for an existing system, a fault, service support or a general question. For a new installation, the short enquiry form gives NOX the details needed to plan the right survey." image="/images/projects/bottle-thyme-vehicles.jpg" imageAlt="NOX Fire and Security vehicles outside a commercial project in Chesterfield">
      <ContactActions primaryLabel="Book a Site Survey" sourceLabel="contact-hero"/>
    </PageHero>

    <section className="direct-contact-section"><div className="container"><SectionHeading eyebrow="Direct contact" title="Telephone, WhatsApp and email" text="Speak to NOX about a current system, planned service, fault, takeover or general Fire & Security question."/><div className="direct-contact-grid"><a href={site.phoneHref}><span>Telephone</span><strong>{site.phone}</strong></a><a href={site.whatsapp}><span>WhatsApp</span><strong>Message NOX</strong></a><a href={`mailto:${site.email}`}><span>Email</span><strong>{site.email}</strong></a></div></div></section>

    <TrustStrip variant="general"/>

    <section className="section"><div className="container contact-information-grid">
      <article className="feature-card"><span className="eyebrow">Opening hours</span><h2>When to contact us</h2><p><strong>Monday–Friday:</strong> 8:00am–6:00pm</p><p><strong>Saturday:</strong> 9:00am–4:00pm</p><p>Messages received outside these hours are reviewed during the next opening period.</p></article>
      <article className="feature-card"><span className="eyebrow">Existing customers</span><h2>Service and fault support</h2><p>Share the site address, system type, panel or recorder make and a short description of the issue. Photographs of a fault display can also help us understand the next step.</p><Link className="text-link" href="/service-plans">View Service & Monitoring →</Link></article>
      <article className="feature-card"><span className="eyebrow">Service area</span><h2>Chesterfield, Sheffield and Derbyshire</h2><p>NOX covers the core local area, with wider travel for suitable commercial, industrial, multi-site and larger residential projects.</p><Link className="text-link" href="/areas-we-serve">View Areas We Cover →</Link></article>
    </div></section>

    <ConversionPanel title="Tell us what you need help with" text="Book a survey for a new installation, or use the same enquiry route for servicing, monitoring, faults and existing-system support." primaryLabel="Book a Site Survey" sourceLabel="contact-final"/>
  </>
}
