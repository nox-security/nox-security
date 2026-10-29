import type { Metadata } from "next"
import Link from "next/link"
import ProjectFilter from "@/components/project-filter"
import { ContactActions, ConversionPanel, PageHero, SectionHeading } from "@/components/marketing"
import { pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Fire & Security Projects and Case Studies",
  "Explore genuine NOX residential, fire, commercial CCTV, intruder, industrial, integrated and takeover projects across Chesterfield, Sheffield, Derbyshire and nearby areas.",
  "/case-studies",
  { image: "/images/projects/bottle-thyme-vehicles.jpg", imageAlt: "NOX Fire and Security vehicles supporting a multi-site commercial project" },
)

export default function CaseStudiesPage() {
  return <>
    <PageHero eyebrow="Real NOX projects" title="Fire & Security projects and case studies" intro="Genuine residential, commercial, fire and industrial work using actual NOX photography and confirmed project details. Each case study explains the property, customer requirement, design priorities, installed system, completed outcome and the factors that matter for a similar project." image="/images/projects/bottle-thyme-vehicles.jpg" imageAlt="NOX Fire and Security vehicles supporting a multi-site commercial project">
      <ContactActions primaryLabel="Discuss a Similar Project" serviceCategory="Project enquiry" enquiryType="Installation" sourceLabel="projects-hub"/>
    </PageHero>
    <section className="section"><div className="container"><SectionHeading eyebrow="Project portfolio" title="Filter by property and system type" text="Browse residential, Fire & Compliance, commercial CCTV, intruder, industrial, integrated and takeover work. Every project links to the relevant service, local coverage and quotation route so you can compare work similar to your own property."/><ProjectFilter/></div></section>
    <ConversionPanel title="Planning a similar project?" text="Tell us the property or site type, location, systems involved and approximate scale. NOX will confirm the appropriate residential, commercial or fire survey." primaryLabel="Discuss a Similar Project" serviceCategory="Project enquiry" enquiryType="Installation" sourceLabel="projects-final"/>
  </>
}
