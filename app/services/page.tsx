import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs, ConversionPanel, PageHero, ReviewGrid, SectionHeading, TrustStrip } from "@/components/marketing"
import { landingPageList } from "@/lib/landing"
import { pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Fire & Security Services | NOX Chesterfield",
  "Residential and commercial CCTV, Ajax alarms, fire alarm installation, servicing, emergency lighting, monitoring, maintenance and system takeovers.",
  "/services"
)

export default function ServicesHubPage() {
  const residential = landingPageList.filter(page => page.audience !== "Commercial")
  const commercial = landingPageList.filter(page => page.audience !== "Residential")
  return <>
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Local Services" }]}/>
    <PageHero eyebrow="Fire & Security services" title="Installation, servicing and system support from one local team" intro="Explore residential security, commercial systems, fire and compliance work, maintenance, monitoring, repairs and takeovers across the NOX service area." image="/images/projects/bottle-thyme-vehicles.jpg" imageAlt="NOX Fire and Security vehicles at a Chesterfield project"/>
    <TrustStrip variant="general"/>
    <section className="section"><div className="container"><SectionHeading eyebrow="Residential and mixed properties" title="Security systems, CCTV, Ajax alarms and ongoing support"/><div className="local-search-link-grid">{residential.map(page => <Link href={`/services/${page.slug}`} key={page.slug}><span>{page.audience}</span><strong>{page.title}</strong><small>{page.location}</small></Link>)}</div></div></section>
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Commercial and compliance services" title="Fire, CCTV, emergency lighting and planned support"/><div className="local-search-link-grid">{commercial.map(page => <Link href={`/services/${page.slug}`} key={`${page.slug}-commercial`}><span>{page.audience}</span><strong>{page.title}</strong><small>{page.location}</small></Link>)}</div></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="Customer reviews" title="Real feedback about surveys, installation and aftercare"/><ReviewGrid names={["Jeremy Bunting"]}/></div></section>
    <ConversionPanel title="Start with one clear enquiry" text="Tell us the property type, location and whether you need a new system, servicing, monitoring, compliance support or a takeover. NOX will confirm the right next step."/>
  </>
}
