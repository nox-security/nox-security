import type { Metadata } from "next"
import GuideFilter from "@/components/guide-filter"
import { ContactActions, ConversionPanel, FeatureGrid, PageHero, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Fire & Security Guides and FAQs",
  "Detailed NOX guides covering fire alarms, emergency lighting, CCTV, Ajax intruder alarms, monitoring, maintenance, repairs and system takeovers.",
  "/blog",
  { image: "/images/v4-10/fire-alarm-installation-hero.jpeg", imageAlt: "NOX fire and security guides" },
)

export default function BlogPage() {
  return <>
    <PageHero eyebrow="Fire & Security Guides" title="Fire & Security guides and FAQs" intro="Detailed guidance for homeowners, responsible persons and businesses researching fire alarms, emergency lighting, CCTV, intruder alarms, monitoring, servicing, repairs and existing-system takeovers across Chesterfield, Sheffield and Derbyshire." image="/images/v4-10/fire-alarm-installation-hero.jpeg" imageAlt="Ajax fire alarm control panel installed beside a fire alarm zone plan and manual call point">
      <ContactActions primaryLabel="Ask About My Property or System" serviceCategory="Guide enquiry" enquiryType="General" sourceLabel="guides-hub"/>
    </PageHero>
    <TrustStrip variant="general"/>
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="What the guides help you decide" title="Practical answers before you book a survey, service or takeover visit" text="Use the guides to compare system types, understand servicing, prepare the right information for a quotation and decide whether existing equipment can be retained, repaired or upgraded."/><FeatureGrid columns={4} items={[{ title: "Fire alarms", text: "Understand installation, servicing, records, takeovers and the information that helps prepare a clearer fire-alarm quote." }, { title: "Emergency lighting", text: "Learn what routine testing involves, when fittings may need replacing and how lighting work can be coordinated with wider compliance support." }, { title: "CCTV & intruder", text: "Compare coverage, control, evidence quality, app use, monitoring and the practical factors that shape a better security layout." }, { title: "Servicing & takeovers", text: "See how NOX approaches annual maintenance, monitoring, repairs, upgrades and suitable takeover support for existing systems." }]}/></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="Browse by topic" title="Full guides for larger questions, short FAQs inside the relevant service page" text="Each guide answers a genuine customer question, explains the practical points to consider and connects you to the most relevant NOX service or project."/><GuideFilter/></div></section>
    <ConversionPanel title="Need an answer about your own building or system?" text="Use the guide as a starting point, then share the property, existing equipment and the work you are considering. NOX will confirm the most appropriate survey, service or quotation." primaryLabel="Discuss My Requirement" serviceCategory="Guide enquiry" enquiryType="General" sourceLabel="guides-final"/>
  </>
}
