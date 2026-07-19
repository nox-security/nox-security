import type { Metadata } from "next"
import { CaseStudyDetails, ConversionPanel, PageHero, ReviewGrid, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "NOX Fire & Security Case Studies | Chesterfield & Derbyshire",
  "Explore factual NOX alarm, CCTV, perimeter and fire installation examples across Chesterfield, Buxton, Dronfield, Sheffield, Retford and Derbyshire.",
  "/case-studies"
)

export default function CaseStudiesPage() {
  return <>
    <PageHero eyebrow="Real NOX installations" title="Fire and security projects designed around real properties" intro="Residential and commercial examples covering CCTV, intruder alarms, perimeter protection, fire systems and upgrades. Every project below uses confirmed locations and installation scopes without invented outcomes." image="/images/case-studies/install-3.png" imageAlt="NOX commercial CCTV installation in Derbyshire"/>
    <TrustStrip/>
    <section className="section"><div className="container"><SectionHeading eyebrow="Project portfolio" title="The property and requirement come before the equipment" text="Each project is presented with the confirmed requirement, NOX delivery and installed systems. No customer names, results or technical claims have been added beyond the available project facts."/><CaseStudyDetails/></div></section>
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Customer reviews" title="The same focus on advice, workmanship and handover"/><ReviewGrid limit={3}/></div></section>
    <ConversionPanel title="Planning a similar project?" text="Tell us whether the property is residential or commercial, what systems are involved and the approximate project scale. We will guide the next step."/>
  </>
}
