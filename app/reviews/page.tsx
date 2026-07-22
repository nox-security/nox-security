import type { Metadata } from "next"
import { ConversionPanel, PageHero, ReviewGrid, ReviewSummaryStrip, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "NOX Customer Reviews | Fire & Security Chesterfield",
  "Read verified customer feedback about NOX Fire & Security installations, advice, workmanship, handover and aftercare across Chesterfield, Sheffield and Derbyshire.",
  "/reviews"
)

export default function ReviewsPage() {
  return <>
    <PageHero eyebrow="Verified customer reviews" title="Real feedback from residential and commercial NOX customers" intro="Customers regularly mention honest advice, professional installation, tidy workmanship, clear explanations and support after the system has been handed over." image="/images/resent-installation/57E4FDA7-0863-4C16-B327-DD248E0E2D9C.png" imageAlt="Professional NOX security installation completed for a customer in Derbyshire"/>
    <ReviewSummaryStrip/>
    <TrustStrip variant="general"/>
    <section className="section"><div className="container"><SectionHeading eyebrow="Customer feedback" title="What customers say about working with NOX" text="Read genuine feedback from customers who have used NOX for residential and commercial Fire & Security work."/><ReviewGrid/><div className="button-row"><a className="button button-light" href="https://g.page/r/CUdyqRh0RFeXEAE/review" target="_blank" rel="noreferrer">View Google Reviews</a></div></div></section>
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="The experience behind the reviews" title="Clear advice, proper workmanship and local aftercare"/><div className="feature-grid columns-4"><article className="feature-card"><span className="feature-number">01</span><h2>Property-first advice</h2><p>The proposed system is based on the property and requirement rather than a rigid package.</p></article><article className="feature-card"><span className="feature-number">02</span><h2>Professional installation</h2><p>Equipment placement, cable routes, setup and testing are treated as part of the finished result.</p></article><article className="feature-card"><span className="feature-number">03</span><h2>Clear handover</h2><p>Apps, users, controls, playback and practical next steps are explained before the job is closed.</p></article><article className="feature-card"><span className="feature-number">04</span><h2>Support afterwards</h2><p>Monitoring, servicing, faults, takeovers and future upgrades remain available through the local team.</p></article></div></div></section>
    <ConversionPanel title="Start your own NOX project" text="Use one enquiry form for residential or commercial fire, security, servicing and existing-system support."/>
  </>
}
