import type { Metadata } from "next"
import { BlogGrid, ConversionPanel, PageHero, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Fire & Security Advice and Guides | NOX",
  "Practical NOX guides covering CCTV planning, alarm and CCTV maintenance, fire alarm servicing, emergency lighting and existing-system takeovers.",
  "/blog"
)

export default function BlogPage() {
  return <>
    <PageHero eyebrow="NOX advice and guides" title="Clear information before and after installation" intro="Practical guidance for homeowners, landlords and businesses considering new systems, ongoing servicing, fire-safety support or an existing-system takeover." image="/images/editorial/blog-servicing.jpg" imageAlt="Real NOX alarm and CCTV servicing work"/>
    <TrustStrip/>
    <section className="section"><div className="container"><SectionHeading eyebrow="Latest guides" title="Fire, security and aftercare explained in plain English" text="These guides introduce the questions to consider before requesting a quotation. The correct system or service scope still depends on the individual property."/><BlogGrid/></div></section>
    <ConversionPanel title="Need advice about your own property?" text="Use the single NOX enquiry form and tell us what system or service you are considering."/>
  </>
}
