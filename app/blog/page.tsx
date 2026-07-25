import type { Metadata } from "next"
import GuideFilter from "@/components/guide-filter"
import { ContactActions, ConversionPanel, PageHero, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Fire & Security Guides and FAQs",
  "Detailed NOX guides covering fire alarms, emergency lighting, CCTV, Ajax intruder alarms, monitoring, maintenance, repairs and system takeovers.",
  "/blog",
  { image: "/images/image-refresh/fire-system-takeover-panel.webp", imageAlt: "NOX fire and security guides" },
)

export default function BlogPage() {
  return <>
    <PageHero eyebrow="Fire & Security Guides" title="Fire & Security guides and FAQs" intro="Detailed guidance for homeowners, responsible persons and businesses researching installation, servicing, repairs, monitoring or an existing-system takeover." image="/images/revisions/nox-commercial-cctv-installation.jpg" imageAlt="NOX engineer and branded van at an industrial security installation">
      <ContactActions primaryLabel="Ask About My Property or System" serviceCategory="Guide enquiry" enquiryType="General" sourceLabel="guides-hub"/>
    </PageHero>
    <TrustStrip variant="general"/>
    <section className="section"><div className="container"><SectionHeading eyebrow="Browse by topic" title="Full guides for larger questions, short FAQs inside the relevant service page" text="Each guide answers a genuine customer question, explains the practical points to consider and connects you to the most relevant NOX service or project."/><GuideFilter/></div></section>
    <ConversionPanel title="Need an answer about your own building or system?" text="Use the guide as a starting point, then share the property, existing equipment and the work you are considering. NOX will confirm the most appropriate survey, service or quotation." primaryLabel="Discuss My Requirement" serviceCategory="Guide enquiry" enquiryType="General" sourceLabel="guides-final"/>
  </>
}
