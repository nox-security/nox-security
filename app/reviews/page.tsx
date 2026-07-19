import type { Metadata } from "next"
import { ConversionPanel, PageHero, ReviewGrid, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "NOX Customer Reviews & Trust | Fire & Security Chesterfield",
  "Learn how NOX uses verified customer feedback and trust messaging without publishing invented reviews, names or unsupported promises.",
  "/reviews"
)

export default function ReviewsPage() {
  return <>
    <PageHero eyebrow="Reviews and trust" title="Verified feedback, clear scope and no invented testimonials" intro="NOX values genuine customer reviews. Until verified review text and profile links are supplied in the project, this website uses general trust references rather than creating fake names, quotations or outcomes." image="/images/hero-house.webp" imageAlt="NOX residential fire and security installation in Derbyshire"/>
    <TrustStrip/>
    <section className="section"><div className="container"><SectionHeading eyebrow="What customers can expect" title="A professional process from survey to support"/><ReviewGrid/></div></section>
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Trust messaging" title="Accurate wording and clear service boundaries" text="The v2.6 content uses only supportable service descriptions and avoids invented credentials, customer quotations or performance guarantees."/><div className="feature-grid columns-3"><article className="feature-card"><span className="feature-number">01</span><h2>Accurate credentials</h2><p>Only qualifications, standards and service capabilities that can be supported are included in the website copy.</p></article><article className="feature-card"><span className="feature-number">02</span><h2>Clear monitoring wording</h2><p>Monitoring is described through alarm handling, keyholder contact, available verification and agreed escalation procedures.</p></article><article className="feature-card"><span className="feature-number">03</span><h2>No unprovable guarantees</h2><p>Response times, product performance and contractual benefits are only stated when they are confirmed in writing.</p></article></div></div></section>
    <ConversionPanel/>
  </>
}
