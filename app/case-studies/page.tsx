import type { Metadata } from "next"
import { CaseStudyGrid, ConversionPanel, PageHero, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "NOX Fire & Security Case Studies | Chesterfield & Derbyshire",
  "View factual NOX installation examples including CCTV, Ajax alarms, perimeter protection and fire systems across Chesterfield, Buxton, Dronfield, Sheffield and Retford.",
  "/case-studies"
)

export default function CaseStudiesPage() {
  return <>
    <PageHero eyebrow="Real NOX installations" title="Residential and commercial project examples" intro="These case-study cards use confirmed project locations, system types and equipment quantities only. They do not invent customer names, review wording or performance outcomes." image="/images/case-studies/install-3.png" imageAlt="NOX commercial CCTV installation in Derbyshire"/>
    <TrustStrip/>
    <section className="section"><div className="container"><SectionHeading eyebrow="Project portfolio" title="Alarm, CCTV, perimeter and fire work" text="From residential security to higher-camera-count commercial sites, each project starts with the property and agreed requirement."/><div className="case-study-list"><CaseStudyGrid/></div></div></section>
    <ConversionPanel title="Planning a similar project?" text="Send the initial details for a quotation or book a free survey directly when the property needs to be assessed first."/>
  </>
}
