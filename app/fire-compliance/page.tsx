import type { Metadata } from "next"
import Link from "next/link"
import { CaseStudyGrid, ContactActions, ConversionPanel, JsonLd, PageHero, ReviewGrid, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata } from "@/lib/site"
import { serviceSchema, webPageSchema } from "@/lib/schema"

export const metadata: Metadata = pageMetadata(
  "Commercial Fire Alarm Installation & Servicing | Chesterfield",
  "Commercial fire alarm installation, servicing, multi-site fire programmes, integrated fire and CCTV projects, emergency lighting and compliance support across Chesterfield, Sheffield and Derbyshire.",
  "/fire-compliance",
  { image: "/images/image-refresh/en54-fire-hub.webp", imageAlt: "Ajax EN54 commercial fire alarm control equipment" },
)

const fireSystemRoutes = [
  { title: "Fire Alarm Installation", text: "New conventional, addressable and suitable wireless Ajax EN54 systems designed around the building, fire strategy and future maintenance route.", href: "/systems/fire-safety", image: "/images/v4-10/fire-alarm-installation-hero.jpeg", alt: "Ajax EN54 fire alarm panel, zone plan and manual call point installed at a commercial property", position: "center 48%" },
  { title: "Fire Alarm Servicing", text: "Planned inspection and testing, service records, defect reporting and clear remedial quotations for suitable existing systems.", href: "/service-plans/fire-alarm-servicing", image: "/images/v4-10/fire-alarm-servicing.jpeg", alt: "Commercial fire alarm control panel during planned servicing", position: "center 40%" },
  { title: "Fire Alarm Repairs & Takeovers", text: "Assessment of faults, panel access, documentation, supportability and the sensible repair, takeover or replacement route.", href: "/services/fire-alarm-repairs-takeovers", image: "/images/v4-12-3/fire-alarm-repairs-takeovers.jpg", alt: "Fire alarm equipment base and cabling during a repair or takeover assessment", position: "center 55%" },
  { title: "Multi-Site Fire Alarm Systems", text: "Installation, takeover, servicing and remedial programmes organised across several premises with clearer site records and reporting.", href: "/fire-compliance/multi-site-fire-alarm-systems", image: "/images/projects/bottle-thyme-vehicles.jpg", alt: "NOX Fire and Security vehicles supporting a coordinated multi-site fire alarm programme", position: "center 50%" },
  { title: "Integrated Fire & CCTV Systems", text: "Fire alarm and CCTV projects coordinated through one survey and installation route while both systems keep clear designs, records and maintenance scopes.", href: "/fire-compliance/integrated-fire-cctv-systems", image: "/images/projects/retford-camera-fire-bell.jpg", alt: "Commercial CCTV camera positioned beside fire alarm warning equipment", position: "center 34%" },
]

const complianceRoutes = [
  { title: "Emergency Lighting Installation", text: "New fittings, replacement projects and upgrades planned around escape routes, final exits and the property layout.", href: "/systems/emergency-lighting", image: "/images/image-refresh/emergency-lighting-modern.webp", alt: "Commercial emergency lighting installation and escape-route lighting", position: "center" },
  { title: "Emergency Lighting Testing & Servicing", text: "Functional checks, annual duration testing, failed-fitting reports, records and coordinated remedial work.", href: "/service-plans/emergency-lighting-servicing", image: "/images/v4-12-3/emergency-lighting-testing-servicing.jpg", alt: "Emergency exit light tested during planned servicing", position: "center 36%" },
  { title: "Fire Risk Assessments", text: "A structured review of fire risks and priorities, coordinated through a competent specialist partner where required.", href: "/systems/fire-risk-assessment", image: "/images/image-refresh/fire-risk-assessment.webp", alt: "Fire action notice and manual call point reviewed during a fire risk assessment", position: "center" },
  { title: "Fire Extinguisher Servicing", text: "Inspection and servicing coordinated through a competent specialist, with defects and replacement needs recorded clearly.", href: "/services/fire-extinguisher-servicing", image: "/images/v4-12-3/fire-extinguisher-servicing.jpg", alt: "Fire extinguishers positioned in a commercial premises for servicing and compliance support", position: "center 58%" },
  { title: "Fire Compliance Plans", text: "Bring agreed fire alarm, emergency-lighting and other fire-safety services into one clearer annual arrangement.", href: "/service-plans/fire-compliance", image: "/images/revisions/fire-safety-logbook.jpg", alt: "Fire safety logbook and records used for coordinated compliance support", position: "center" },
]

const en54Highlights = [
  {
    title: "Fire Alarm Control Panel",
    text: "The Ajax EN54 Fire Hub controls the fire alarm system, shows alarm and fault information clearly and supports the communication and standby-power options required for the installation.",
    image: "/images/image-refresh/en54-fire-hub.webp",
    alt: "Ajax EN54 commercial fire alarm control panel",
    position: "center 46%",
  },
  {
    title: "Smoke & Heat Detectors",
    text: "Smoke, heat and combined fire detectors are selected around each room, ceiling condition and fire zone so the system provides the right type of detection throughout the premises.",
    image: "/images/v4-10/fire-smoke-detector.jpeg",
    alt: "Ajax EN54 smoke and heat detector installed on a ceiling",
    position: "center 42%",
  },
  {
    title: "Manual Call Point",
    text: "Manual call points are positioned on escape routes and at suitable exits so staff and occupants can raise the fire alarm quickly and clearly.",
    image: "/images/v4-10/fire-manual-call-point.jpeg",
    alt: "Ajax EN54 manual fire alarm call point installed beside fire safety signage",
    position: "center 40%",
  },
  {
    title: "Fire Alarm Sounders & Beacons",
    text: "Fire alarm sounders and visual warning devices are selected and positioned to provide clear warning across the building, including louder or more visible areas where required.",
    image: "/images/v4-10/fire-sounder.jpeg",
    alt: "Ajax EN54 fire alarm sounder installed above a doorway",
    position: "center 36%",
  },
]

export default function FireCompliancePage() {
  const description = "Commercial fire alarm installation, servicing, multi-site fire programmes, integrated fire and CCTV projects, emergency lighting and compliance support across Chesterfield, Sheffield and Derbyshire."
  const structuredData = [
    serviceSchema({ name: "Commercial fire alarm installation and servicing", description, path: "/fire-compliance", serviceType: ["Fire alarm installation", "Fire alarm servicing", "Multi-site fire alarm systems", "Integrated fire and CCTV systems", "Emergency lighting", "Fire alarm takeovers"], audience: "Commercial", image: "/images/image-refresh/en54-fire-hub.webp" }),
    webPageSchema({ name: "Fire & Compliance", description, path: "/fire-compliance", image: "/images/image-refresh/en54-fire-hub.webp" }),
  ]
  return <>
    {structuredData.map((data, index) => <JsonLd data={data} key={index}/>)}
    <PageHero eyebrow="Fire & Compliance" title="Commercial fire systems supported from first design through ongoing servicing" intro="NOX provides fire alarm installation, servicing, repairs, multi-site fire programmes, coordinated fire and CCTV projects, emergency lighting and compliance support across Chesterfield, Sheffield and Derbyshire. Each service keeps a clear scope, quotation and route into future support." image="/images/image-refresh/en54-fire-hub.webp" imageAlt="Ajax EN54 fire alarm control equipment installed by NOX">
      <ContactActions primaryLabel="Discuss Your Fire Requirements" audience="Commercial" serviceCategory="Fire & Compliance" enquiryType="General" sourceLabel="fire-compliance-hub"/>
    </PageHero>
    <TrustStrip variant="fire"/>

    <section className="section en54-overview-section"><div className="container">
      <SectionHeading eyebrow="Commercial fire alarm systems" title="Fire alarm control, smoke and heat detection, call points and sounders" text="A complete commercial fire alarm system brings the control panel, smoke and heat detectors, manual call points, sounders and visual warnings together as one clear design. NOX starts with the building and fire-safety requirements before recommending Ajax EN54, a wired addressable system or a conventional fire alarm."/>
      <div className="en54-overview-grid">{en54Highlights.map(item => <article className="en54-overview-card" key={item.title}><div className="en54-overview-media"><img src={item.image} alt={item.alt} style={{ objectPosition: item.position }}/></div><div className="en54-overview-copy"><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div>
      <div className="section-action-row"><Link className="button button-light" href="/systems/fire-safety">Explore Fire Alarm Installation</Link><Link className="button button-outline" href="/case-studies/telesis-hitachi-fire-intruder-system">View an EN54 installation</Link></div>
    </div></section>

    <section className="section section-alt"><div className="container">
      <SectionHeading eyebrow="Fire alarm systems" title="Five clear routes from a single premises to a wider estate" text="Installation, servicing, takeovers, multi-site programmes and coordinated Fire and CCTV projects each have a distinct scope. The right route depends on the building, existing equipment, responsible people and the outcome the business needs."/>
      <div className="feature-grid columns-3 media-route-grid fire-balanced-grid">{fireSystemRoutes.map((item, index) => <article className="feature-card media-route-card" key={item.title}><img src={item.image} alt={item.alt} style={{ objectPosition: item.position }}/><div className="media-route-card-body"><span className="feature-number">{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.text}</p><Link className="text-link" href={item.href}>Explore service →</Link></div></article>)}</div>
    </div></section>

    <section className="section"><div className="container">
      <SectionHeading eyebrow="Compliance support" title="Five supporting services kept clear and easy to coordinate" text="Emergency lighting, risk assessment, extinguisher servicing and annual planning remain separate professional scopes while staying easier for the customer to organise through one local Fire & Security team."/>
      <div className="feature-grid columns-3 media-route-grid fire-balanced-grid">{complianceRoutes.map((item, index) => <article className="feature-card media-route-card" key={item.title}><img src={item.image} alt={item.alt} style={{ objectPosition: item.position }}/><div className="media-route-card-body"><span className="feature-number">{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.text}</p><Link className="text-link" href={item.href}>Explore service →</Link></div></article>)}</div>
    </div></section>

    <section className="section section-alt"><div className="container split-grid"><div>
      <SectionHeading eyebrow="Clear service scopes" title="Installation, servicing and repairs need different information" text="Whether you need a new system, an annual service or help with an existing fault, each service has a clear scope so you understand what is included and what happens next."/>
      <div className="related-links"><Link href="/blog/how-often-should-a-commercial-fire-alarm-be-serviced">How often should a commercial fire alarm be serviced? →</Link><Link href="/blog/can-a-new-company-take-over-an-existing-fire-alarm">Can a new company take over an existing fire alarm? →</Link><Link href="/blog/can-fire-alarm-and-emergency-lighting-visits-be-combined">Can visits be combined? →</Link></div>
    </div><aside className="dark-panel"><h3>Information that helps us quote</h3><p>Property use, panel make, approximate device or fitting quantities, available drawings or records, known faults, required timescales and whether the site remains operational during work.</p><ContactActions primaryLabel="Get a Fire Compliance Quote" compact audience="Commercial" serviceCategory="Fire & Compliance" enquiryType="General" sourceLabel="fire-compliance-information"/></aside></div></section>

    <section className="section"><div className="container"><SectionHeading eyebrow="Relevant NOX projects" title="Commercial fire and integrated system work" text="Genuine project photography and confirmed scopes showing fire, intruder and wider site requirements."/><CaseStudyGrid slugs={["telesis-hitachi-fire-intruder-system","tan-station-fire-security-brimington","banana-industries-fire-security"]}/></div></section>
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Customer feedback" title="Clear installation, handover and local support"/><ReviewGrid names={["Rory Stirland", "Nathan De La Rosa", "Jez S"]}/></div></section>
    <ConversionPanel title="Discuss a fire installation, service or takeover" text="Tell us about the premises, existing equipment and the work required. NOX will guide the enquiry into the correct installation, servicing, repair or annual-support next step." primaryLabel="Discuss Your Fire Requirements" audience="Commercial" serviceCategory="Fire & Compliance" enquiryType="General" sourceLabel="fire-compliance-final"/>
  </>
}
