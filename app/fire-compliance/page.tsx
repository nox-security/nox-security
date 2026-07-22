import type { Metadata } from "next"
import Link from "next/link"
import { CaseStudyGrid, ContactActions, ConversionPanel, FeatureGrid, PageHero, ReviewGrid, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Fire & Compliance Chesterfield, Sheffield & Derbyshire",
  "Commercial fire alarm installation, servicing, repairs, emergency lighting, fire risk assessments, extinguisher servicing and annual compliance support from NOX.",
  "/fire-compliance"
)

const installationRoutes = [
  { title: "Fire Alarm Installation", text: "New conventional, addressable and suitable wireless EN54 systems designed around the building and future maintenance route.", href: "/systems/fire-safety", image: "/images/revisions/ajax-en54-fire-control-panel.jpg", alt: "Ajax EN54 fire alarm control equipment for a commercial installation" },
  { title: "Emergency Lighting Installation", text: "New fittings, replacement projects and upgrades planned around escape routes, exits and the property layout.", href: "/systems/emergency-lighting", image: "/images/EmergencyLighting.jpeg", alt: "Commercial emergency lighting installation and escape-route lighting" },
  { title: "Fire Risk Assessments", text: "A structured assessment of fire risks and priorities, coordinated through a competent specialist partner where required.", href: "/systems/fire-risk-assessment", image: "/images/revisions/telesis-hitachi-exterior.jpg", alt: "Commercial premises reviewed as part of fire risk and compliance planning" },
]

const ongoingRoutes = [
  { title: "Fire Alarm Servicing", text: "Planned testing, records, defect reporting, existing-system takeovers and clear remedial quotations.", href: "/service-plans/fire-alarm-servicing", image: "/images/revisions/fire-alarm-maintenance-panel.jpg", alt: "Traditional commercial fire alarm panel during planned servicing" },
  { title: "Fire Alarm Repairs & Takeovers", text: "Assessment of faults, access, documentation, supportability and the sensible repair or replacement route.", href: "/services/fire-alarm-repairs-takeovers", image: "/images/revisions/telesis-en54-fire-hub-alarm.jpg", alt: "Fire alarm control hub showing an active alarm during fault and takeover testing" },
  { title: "Emergency Lighting Testing", text: "Functional checks, annual duration testing, failed-fitting reports, records and coordinated remedials.", href: "/service-plans/emergency-lighting-servicing", image: "/images/revisions/emergency-lighting-exit-sign.jpg", alt: "Emergency exit light checked during commercial testing and servicing" },
  { title: "Fire Extinguisher Servicing", text: "Extinguisher inspection and servicing coordinated through a competent specialist, with defects and replacement needs recorded clearly.", href: "/services/fire-extinguisher-servicing", image: "/images/fire-servicing.jpeg", alt: "Engineer carrying out commercial fire extinguisher servicing" },
  { title: "Fire Compliance Plans", text: "Bring agreed fire alarm, emergency-lighting and other fire-safety services into one clearer annual arrangement.", href: "/service-plans/fire-compliance", image: "/images/revisions/fire-safety-logbook.jpg", alt: "Fire safety logbook and plans used for coordinated compliance support" },
]

export default function FireCompliancePage() {
  return <>
    <PageHero eyebrow="Fire & Compliance" title="Commercial fire systems supported from first design through ongoing servicing" intro="NOX provides fire alarm installation, servicing, repairs, emergency lighting and coordinated compliance support across Chesterfield, Sheffield and Derbyshire. Each service is kept clear so customers can see the initial project, recurring work and any remedials separately." image="/images/revisions/ajax-en54-fire-control-panel.jpg" imageAlt="Ajax EN54 fire alarm control equipment installed by NOX">
      <ContactActions primaryLabel="Discuss Your Fire Requirements" audience="Commercial" serviceCategory="Fire & Compliance" enquiryType="General" sourceLabel="fire-compliance-hub"/>
    </PageHero>
    <TrustStrip variant="fire"/>

    <section className="section"><div className="container">
      <SectionHeading eyebrow="New projects" title="Installation and replacement work designed around the premises" text="The building, occupancy, fire information, existing equipment, access and future service route are considered before a system or fitting schedule is proposed."/>
      <div className="feature-grid columns-3 media-route-grid">{installationRoutes.map((item, index) => <article className="feature-card media-route-card" key={item.title}><img src={item.image} alt={item.alt}/><div className="media-route-card-body"><span className="feature-number">{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.text}</p><Link className="text-link" href={item.href}>Explore service →</Link></div></article>)}</div>
      <div className="commercial-route-links">{installationRoutes.map(item => <Link key={item.href} href={item.href}>{item.title} →</Link>)}</div>
    </div></section>

    <section className="section section-alt"><div className="container">
      <SectionHeading eyebrow="Ongoing compliance" title="Servicing, repairs and annual support for existing systems" text="NOX supports suitable existing fire alarms and emergency lighting, including systems installed by another provider, subject to access, condition, records and parts availability."/>
      <div className="feature-grid columns-3 media-route-grid">{ongoingRoutes.map((item, index) => <article className="feature-card media-route-card" key={item.title}><img src={item.image} alt={item.alt}/><div className="media-route-card-body"><span className="feature-number">{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.text}</p><Link className="text-link" href={item.href}>Explore service →</Link></div></article>)}</div>
    </div></section>

    <section className="section"><div className="container split-grid"><div>
      <SectionHeading eyebrow="Clear service scopes" title="Installation, servicing and repairs need different information" text="Whether you need a new system, an annual service or help with an existing fault, each service has a clear scope so you understand what is included and what happens next."/>
      <div className="related-links"><Link href="/blog/how-often-should-a-commercial-fire-alarm-be-serviced">How often should a commercial fire alarm be serviced? →</Link><Link href="/blog/can-a-new-company-take-over-an-existing-fire-alarm">Can a new company take over an existing fire alarm? →</Link><Link href="/blog/can-fire-alarm-and-emergency-lighting-visits-be-combined">Can visits be combined? →</Link></div>
    </div><aside className="dark-panel"><h3>Information that helps us quote</h3><p>Property use, panel make, approximate device or fitting quantities, available drawings or records, known faults, required timescales and whether the site remains operational during work.</p><ContactActions primaryLabel="Get a Fire Compliance Quote" compact audience="Commercial" serviceCategory="Fire & Compliance" enquiryType="General" sourceLabel="fire-compliance-information"/></aside></div></section>

    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Relevant NOX projects" title="Commercial fire and integrated system work" text="Genuine project photography and confirmed scopes showing fire, intruder and wider site requirements."/><CaseStudyGrid slugs={["telesis-hitachi-fire-intruder-system","tan-station-fire-security-brimington","banana-industries-fire-security"]}/></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="Customer feedback" title="Clear installation, handover and local support"/><ReviewGrid names={["Rory Stirland"]}/></div></section>
    <ConversionPanel title="Discuss a fire installation, service or takeover" text="Tell us about the premises, existing equipment and the work required. NOX will guide the enquiry into the correct installation, servicing, repair or annual-support next step." primaryLabel="Discuss Your Fire Requirements" audience="Commercial" serviceCategory="Fire & Compliance" enquiryType="General" sourceLabel="fire-compliance-final"/>
  </>
}
