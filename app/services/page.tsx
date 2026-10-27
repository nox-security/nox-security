import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs, ConversionPanel, PageHero, ReviewGrid, SectionHeading, TrustStrip } from "@/components/marketing"
import { landingPageList } from "@/lib/landing"
import { pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Fire Alarm, CCTV & Security Services | NOX",
  "Explore Fire Alarm Installation, servicing and maintenance first, followed by commercial CCTV, home CCTV, Intruder Alarm Installation, monitoring and system takeovers from NOX.",
  "/services",
  { image: "/images/projects/bottle-thyme-vehicles.jpg", imageAlt: "NOX Fire and Security service vehicles in Chesterfield" },
)

export default function ServicesHubPage() {
  const priority = (page: (typeof landingPageList)[number]) => {
    const value = `${page.serviceType} ${page.title}`.toLowerCase()
    if (value.includes("fire alarm")) return 0
    if (value.includes("commercial cctv")) return 1
    if (value.includes("cctv")) return 2
    if (value.includes("intruder") || value.includes("alarm")) return 3
    return 4
  }
  const commercial = landingPageList.filter(page => page.audience !== "Residential").sort((a, b) => priority(a) - priority(b))
  const residential = landingPageList.filter(page => page.audience !== "Commercial").sort((a, b) => priority(a) - priority(b))
  return <>
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Local Services" }]}/>
    <PageHero eyebrow="Fire & Security services" title="Fire Alarm, CCTV and Intruder Alarm services from one local team" intro="Start with fire alarm installation, servicing and maintenance, followed by commercial CCTV, home CCTV, intruder alarms, emergency lighting, monitoring, repairs and takeovers across the NOX service area." image="/images/projects/bottle-thyme-vehicles.jpg" imageAlt="NOX Fire and Security vehicles at a Chesterfield project"/>
    <TrustStrip variant="general"/>
    <section className="section"><div className="container"><SectionHeading eyebrow="Commercial and compliance services" title="Fire, CCTV, emergency lighting and planned support"/><div className="local-search-link-grid">{commercial.map(page => <Link href={`/services/${page.slug}`} key={`${page.slug}-commercial`}><span>{page.audience}</span><strong>{page.title}</strong><small>{page.location}</small></Link>)}</div></div></section>
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Residential and mixed properties" title="Security systems, CCTV, Ajax alarms and ongoing support"/><div className="local-search-link-grid">{residential.map(page => <Link href={`/services/${page.slug}`} key={page.slug}><span>{page.audience}</span><strong>{page.title}</strong><small>{page.location}</small></Link>)}</div></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="Customer reviews" title="Real feedback about surveys, installation and aftercare"/><ReviewGrid names={["Jeremy Bunting", "Rory Stirland", "Nathan De La Rosa"]}/></div></section>
    <ConversionPanel title="Start with one clear enquiry" text="Tell us the property type, location and whether you need a new system, servicing, monitoring, compliance support or a takeover. NOX will confirm the right next step."/>
  </>
}
