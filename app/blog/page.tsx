import type { Metadata } from "next"
import GuideFilter from "@/components/guide-filter"
import { ContactActions, ConversionPanel, PageHero, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Fire & Security Guides and FAQs",
  "Detailed NOX guides covering fire alarms, emergency lighting, CCTV, Ajax intruder alarms, monitoring, maintenance, repairs and system takeovers.",
  "/blog"
)

export default function BlogPage() {
  return <>
    <PageHero eyebrow="Fire & Security Guides" title="Fire & Security guides and FAQs" intro="Detailed guidance for homeowners, responsible persons and businesses researching installation, servicing, repairs, monitoring or an existing-system takeover." image="/images/revisions/fire-safety-logbook.jpg" imageAlt="Fire safety logbook and system plans used in NOX guidance">
      <ContactActions primaryLabel="Ask About My Property or System" serviceCategory="Guide enquiry" enquiryType="General" sourceLabel="guides-hub"/>
    </PageHero>
    <TrustStrip/>
    <section className="section"><div className="container"><SectionHeading eyebrow="Browse by topic" title="Full guides for larger questions, short FAQs inside the relevant service page" text="The guides below answer research questions in depth and connect to a real NOX service or project. They are not thin articles created only to target a phrase."/><GuideFilter/></div></section>
    <ConversionPanel title="Need an answer about your own building or system?" text="Use the guide as a starting point, then share the property, existing equipment and the work you are considering. NOX will guide the correct survey, service or quotation route." primaryLabel="Discuss My Requirement" serviceCategory="Guide enquiry" enquiryType="General" sourceLabel="guides-final"/>
  </>
}
