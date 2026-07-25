import type { Metadata } from "next"
import Link from "next/link"
import { CaseStudyGrid, ContactActions, ConversionPanel, PageHero, ReviewGrid, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Commercial Fire Alarm Installation & Servicing | Chesterfield",
  "Commercial Fire Alarm Installation and Fire Alarm Servicing across Chesterfield, Sheffield, Derbyshire and South Yorkshire, including Ajax EN54 systems, repairs, takeovers and emergency lighting.",
  "/fire-compliance"
)

const installationRoutes = [
  { title: "Fire Alarm Installation", text: "New conventional, addressable and suitable wireless Ajax EN54 systems designed around the building, fire strategy and future maintenance route.", href: "/systems/fire-safety", image: "/images/image-refresh/en54-fire-hub.webp", alt: "Ajax EN54 Fire Hub for a commercial fire alarm installation", artwork: true },
  { title: "Emergency Lighting Installation", text: "New fittings, replacement projects and upgrades planned around escape routes, final exits and the property layout.", href: "/systems/emergency-lighting", image: "/images/image-refresh/emergency-lighting-modern.webp", alt: "Commercial emergency lighting installation and escape-route lighting", artwork: false },
]

const ongoingRoutes = [
  { title: "Fire Alarm Servicing", text: "Planned inspection and testing, service records, defect reporting, existing-system takeovers and clear remedial quotations.", href: "/service-plans/fire-alarm-servicing", image: "/images/image-refresh/fire-system-takeover-panel.webp", alt: "Traditional commercial fire alarm panel during planned servicing" },
  { title: "Fire Alarm Repairs & Takeovers", text: "Assessment of faults, panel access, documentation, supportability and the sensible repair or replacement route.", href: "/services/fire-alarm-repairs-takeovers", image: "/images/revisions/telesis-en54-fire-hub-alarm.jpg", alt: "Ajax EN54 Fire Hub showing an active alarm during system testing" },
  { title: "Emergency Lighting Testing", text: "Functional checks, annual duration testing, failed-fitting reports, records and coordinated remedial work.", href: "/service-plans/emergency-lighting-servicing", image: "/images/image-refresh/emergency-lighting-modern.webp", alt: "Emergency exit light checked during commercial testing and servicing" },
  { title: "Fire Risk Assessments", text: "A structured review of fire risks and priorities, coordinated through a competent specialist partner where required.", href: "/systems/fire-risk-assessment", image: "/images/image-refresh/fire-risk-assessment.webp", alt: "Fire action notice and manual call point reviewed during a fire risk assessment" },
  { title: "Fire Extinguisher Servicing", text: "Inspection and servicing coordinated through a competent specialist, with defects and replacement needs recorded clearly.", href: "/services/fire-extinguisher-servicing", image: "/images/fire-servicing.jpeg", alt: "Engineer carrying out commercial fire extinguisher servicing" },
  { title: "Fire Compliance Plans", text: "Bring agreed fire alarm, emergency-lighting and other fire-safety services into one clearer annual arrangement.", href: "/service-plans/fire-compliance", image: "/images/image-refresh/fire-risk-assessment.webp", alt: "Fire safety logbook and plans used for coordinated compliance support" },
]

const en54Highlights = [
  {
    title: "EN54 Fire Hub",
    text: "A 10.1-inch touchscreen control and indicating unit with Ethernet, Wi-Fi and dual-SIM communication options, plus compatible 24- or 72-hour standby batteries.",
    image: "/images/image-refresh/en54-fire-hub.webp",
    alt: "Ajax EN54 Fire Hub touchscreen control and indicating equipment",
    artwork: true,
  },
  {
    title: "Addressable detection",
    text: "Wireless smoke, heat and combined detector options can be assigned to clear fire zones and selected with sounder functions where the design requires them.",
    image: "/images/ajax-products/ajax-en54-detection.webp",
    alt: "Ajax EN54 wireless addressable fire detection devices",
    artwork: true,
  },
  {
    title: "Manual and visual warning",
    text: "Resettable manual call points, sounders and visual alarm devices form part of the complete warning strategy rather than being treated as isolated products.",
    image: "/images/image-refresh/en54-manual-call-point.webp",
    alt: "Ajax manual fire alarm call point installed at a commercial premises",
    artwork: false,
  },
  {
    title: "Larger-site coverage",
    text: "EN54 Fire ReX and compatible I/O modules can extend communication and integration options for warehouses, multi-building sites and more complex premises.",
    image: "/images/image-refresh/en54-sounder-vad.webp",
    alt: "Ajax EN54 fire system operating normally at an industrial site",
    artwork: false,
  },
]

export default function FireCompliancePage() {
  return <>
    <PageHero eyebrow="Fire & Compliance" title="Commercial fire systems supported from first design through ongoing servicing" intro="NOX provides fire alarm installation, servicing, repairs, emergency lighting and coordinated compliance support across Chesterfield, Sheffield and Derbyshire. Each service is kept clear so customers can see the initial project, recurring work and any remedials separately." image="/images/image-refresh/en54-fire-hub.webp" imageAlt="Ajax EN54 fire alarm control equipment installed by NOX">
      <ContactActions primaryLabel="Discuss Your Fire Requirements" audience="Commercial" serviceCategory="Fire & Compliance" enquiryType="General" sourceLabel="fire-compliance-hub"/>
    </PageHero>
    <TrustStrip variant="fire"/>

    <section className="section en54-overview-section"><div className="container">
      <SectionHeading eyebrow="Ajax EN54 commercial fire systems" title="A wireless addressable fire platform designed as one complete system" text="Ajax EN54 brings the control equipment, detection, manual activation, sounders, visual warnings, communications and expansion devices into one coordinated commercial fire system. NOX still starts with the building and fire-safety requirement before deciding whether Ajax EN54, a wired addressable system or a conventional system is the right solution."/>
      <div className="en54-overview-grid">{en54Highlights.map(item => <article className="en54-overview-card" key={item.title}><div className={item.artwork ? "en54-overview-media is-artwork" : "en54-overview-media"}><img src={item.image} alt={item.alt}/></div><div className="en54-overview-copy"><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div>
      <div className="section-action-row"><Link className="button button-light" href="/systems/fire-safety">Explore Fire Alarm Installation</Link><Link className="button button-outline" href="/case-studies/telesis-hitachi-fire-intruder-system">View an EN54 installation</Link></div>
    </div></section>

    <section className="section section-alt"><div className="container">
      <SectionHeading eyebrow="New projects" title="Installation and replacement work designed around the premises" text="The building, occupancy, fire information, existing equipment, access and future service route are considered before a system or fitting schedule is proposed."/>
      <div className="fire-installation-grid">{installationRoutes.map((item, index) => <article className="feature-card media-route-card" key={item.title}><div className={item.artwork ? "fire-route-media is-artwork" : "fire-route-media"}><img src={item.image} alt={item.alt}/></div><div className="media-route-card-body"><span className="feature-number">{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.text}</p><Link className="text-link" href={item.href}>Explore service →</Link></div></article>)}</div>
    </div></section>

    <section className="section"><div className="container">
      <SectionHeading eyebrow="Ongoing compliance" title="Servicing, repairs and annual support for existing systems" text="NOX supports suitable existing fire alarms and emergency lighting, including systems installed by another provider, subject to access, condition, records and parts availability."/>
      <div className="feature-grid columns-3 media-route-grid fire-support-grid">{ongoingRoutes.map((item, index) => <article className="feature-card media-route-card" key={item.title}><img src={item.image} alt={item.alt}/><div className="media-route-card-body"><span className="feature-number">{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.text}</p><Link className="text-link" href={item.href}>Explore service →</Link></div></article>)}</div>
    </div></section>

    <section className="section section-alt"><div className="container split-grid"><div>
      <SectionHeading eyebrow="Clear service scopes" title="Installation, servicing and repairs need different information" text="Whether you need a new system, an annual service or help with an existing fault, each service has a clear scope so you understand what is included and what happens next."/>
      <div className="related-links"><Link href="/blog/how-often-should-a-commercial-fire-alarm-be-serviced">How often should a commercial fire alarm be serviced? →</Link><Link href="/blog/can-a-new-company-take-over-an-existing-fire-alarm">Can a new company take over an existing fire alarm? →</Link><Link href="/blog/can-fire-alarm-and-emergency-lighting-visits-be-combined">Can visits be combined? →</Link></div>
    </div><aside className="dark-panel"><h3>Information that helps us quote</h3><p>Property use, panel make, approximate device or fitting quantities, available drawings or records, known faults, required timescales and whether the site remains operational during work.</p><ContactActions primaryLabel="Get a Fire Compliance Quote" compact audience="Commercial" serviceCategory="Fire & Compliance" enquiryType="General" sourceLabel="fire-compliance-information"/></aside></div></section>

    <section className="section"><div className="container"><SectionHeading eyebrow="Relevant NOX projects" title="Commercial fire and integrated system work" text="Genuine project photography and confirmed scopes showing fire, intruder and wider site requirements."/><CaseStudyGrid slugs={["telesis-hitachi-fire-intruder-system","tan-station-fire-security-brimington","banana-industries-fire-security"]}/></div></section>
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Customer feedback" title="Clear installation, handover and local support"/><ReviewGrid names={["Rory Stirland"]}/></div></section>
    <ConversionPanel title="Discuss a fire installation, service or takeover" text="Tell us about the premises, existing equipment and the work required. NOX will guide the enquiry into the correct installation, servicing, repair or annual-support next step." primaryLabel="Discuss Your Fire Requirements" audience="Commercial" serviceCategory="Fire & Compliance" enquiryType="General" sourceLabel="fire-compliance-final"/>
  </>
}
