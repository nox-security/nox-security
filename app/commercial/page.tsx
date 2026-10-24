import type { Metadata } from "next"
import Link from "next/link"
import { CaseStudyGrid, ContactActions, ConversionPanel, FeatureGrid, OngoingSupportStrip, PageHero, ReviewGrid, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Commercial CCTV & Security Systems | Chesterfield & Sheffield",
  "Commercial CCTV, intruder alarms and fire and security systems across Chesterfield, Sheffield, Derbyshire, Derby and South Yorkshire for offices, retail, industrial and multi-site premises.",
  "/commercial",
  { image: "/images/image-refresh/ajax-commercial-ptz.webp", imageAlt: "Ajax commercial PTZ camera for larger operational areas" },
)

const commercialSystems = [
  {
    title: "Commercial CCTV",
    text: "Coverage objectives, evidence quality, entrances, working areas, yards, recording duration, night performance and remote access planned around the site.",
    href: "/commercial/cctv",
    image: "/images/image-refresh/ajax-commercial-ptz.webp",
    alt: "Ajax commercial PTZ camera for larger operational areas",
  },
  {
    title: "Intruder Alarms",
    text: "Internal and external protection designed around access, staff use, opening hours, valuable areas, communication and monitoring requirements.",
    href: "/commercial/intruder-alarms",
    image: "/images/revisions/tan-station-ajax-keypad.jpg",
    alt: "NOX branded Ajax keypad installed at a business premises",
  },
  {
    title: "Industrial & Office Security",
    text: "Several buildings, loading areas, stock, machinery, visitor access, offices, vehicle routes and boundaries planned as one coordinated site-security project.",
    href: "/commercial/industrial-warehouse-security",
    image: "/images/revisions/commercial-cctv-industrial-building.jpg",
    alt: "Commercial CCTV and security installation at an industrial or office premises",
  },
  {
    title: "Multi-Site Security",
    text: "Consistent system design, rollout planning, user access, records, remote management and ongoing support across several premises.",
    href: "/commercial/multi-site-security",
    image: "/images/revisions/stonefirst-commercial-installation.jpg",
    alt: "NOX commercial security project supporting a multi-site rollout",
  },
  {
    title: "Integrated Fire & Security",
    text: "Fire alarms, CCTV and intruder systems coordinated through one local team while each system keeps a clear scope, handover and service route.",
    href: "/commercial/integrated-fire-security",
    image: "/images/revisions/telesis-hitachi-exterior.jpg",
    alt: "Commercial premises protected by coordinated fire and security systems",
  },
]

const ongoingSupport = [
  {
    title: "CCTV Maintenance",
    text: "Camera cleaning, image checks, recorder and storage health, playback, remote access and upgrade recommendations for suitable systems.",
    href: "/service-plans/cctv-maintenance",
    image: "/images/image-refresh/commercial-cctv-buxton-monitor.webp",
    alt: "Commercial CCTV system checked for recording and playback during maintenance",
  },
  {
    title: "Intruder Alarm Servicing",
    text: "Planned system checks covering devices, batteries, communication, sirens, event history, users and service records.",
    href: "/service-plans/alarm-maintenance",
    image: "/images/revisions/intruder-maintenance-system-takeover.jpg",
    alt: "Engineer servicing and inspecting an existing intruder alarm system",
  },
  {
    title: "Alarm Monitoring",
    text: "Professional signalling, keyholder communication and system supervision for suitable maintained alarm systems.",
    href: "/service-plans/alarm-monitoring",
    image: "/images/v4-13-2/alarm-monitoring-operator.jpg",
    alt: "Close-up of a professional alarm monitoring operator wearing a headset",
  },
  {
    title: "Repairs & Upgrades",
    text: "Fault assessment, selective replacement, recorder upgrades, access recovery and phased improvements without replacing useful equipment unnecessarily.",
    href: "/services/repairs-upgrades",
    image: "/images/image-refresh/chester-street-after.webp",
    alt: "Clear commercial CCTV views following a system upgrade",
  },
]

export default function CommercialPage() {
  return <>
    <PageHero eyebrow="Protect My Business" title="Commercial Fire and Security systems designed around working sites" intro="NOX supports retail, hospitality, offices, warehouses, industrial premises, rural businesses and multi-site organisations across Chesterfield, Sheffield, Derbyshire, Derby and South Yorkshire. Each proposal considers the operation, evidence requirement, access, future growth and ongoing support rather than adapting a residential package." image="/images/image-refresh/ajax-commercial-ptz.webp" imageAlt="Ajax commercial PTZ camera for larger operational areas">
      <ContactActions primaryLabel="Discuss Your Project" audience="Commercial" serviceCategory="Commercial Security" enquiryType="Installation" sourceLabel="commercial-hub"/>
    </PageHero>
    <TrustStrip variant="commercial"/>

    <section className="section"><div className="container">
      <SectionHeading eyebrow="Installations & larger projects" title="From a single commercial installation to a coordinated multi-site project" text="Commercial CCTV, intruder protection, industrial security, multi-site systems and integrated projects move from survey and system design through installation, handover and ongoing support."/>
      <div className="feature-grid columns-3 media-route-grid commercial-media-grid">
        {commercialSystems.map((item, index) => <article className="feature-card media-route-card" key={item.title}><img src={item.image} alt={item.alt}/><div className="media-route-card-body"><span className="feature-number">{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.text}</p><Link className="text-link" href={item.href}>Explore {item.title} →</Link></div></article>)}
      </div>
    </div></section>

    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Project planning" title="The operational requirement changes the design" text="A commercial system needs to work around the site, the people using it and the evidence or response required after an event."/><FeatureGrid columns={4} items={[
      { title: "Coverage and evidence", text: "Entrances, tills, stock, vehicle routes, production areas and yards need different camera positions and image detail." },
      { title: "Access and staff use", text: "Opening hours, user permissions, keyholders, shift patterns and restricted areas influence alarm design and control." },
      { title: "Working around the site", text: "Cable routes, access equipment, production, customers, trading and out-of-hours work are planned before installation." },
      { title: "Ongoing support", text: "Maintenance, monitoring, faults, takeovers and multi-site records can remain coordinated after the project." }
    ]}/></div></section>

    <section className="section"><div className="container">
      <SectionHeading eyebrow="Servicing & support" title="Connect existing and newly installed systems to planned support" text="Suitable existing and newly installed systems can move into planned servicing, monitoring, repairs, phased upgrades and takeover support without being forced into an unnecessary replacement."/>
      <div className="feature-grid columns-4 media-route-grid support-media-grid">
        {ongoingSupport.map((item, index) => <article className="feature-card media-route-card" key={item.title}><img src={item.image} alt={item.alt}/><div className="media-route-card-body"><span className="feature-number">{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.text}</p><Link className="text-link" href={item.href}>Explore support →</Link></div></article>)}
      </div>
    </div></section>

    <section className="section section-alt"><div className="container split-grid"><div><SectionHeading eyebrow="Fire & Compliance" title="Fire services remain clear while the project stays coordinated" text="Fire alarm installation, servicing, repairs, emergency lighting and compliance planning have their own scope and records. Where a premises also needs CCTV or intruder protection, NOX can coordinate access, installation and ongoing support through one local provider."/><div className="related-links"><Link href="/fire-compliance">Fire & Compliance →</Link><Link href="/systems/fire-safety">Fire Alarm Installation →</Link><Link href="/service-plans/fire-alarm-servicing">Fire Alarm Servicing →</Link><Link href="/service-plans/fire-compliance">Fire Compliance Plans →</Link></div></div><aside className="dark-panel"><h3>Integrated projects remain possible</h3><p>Fire, CCTV and intruder work can be planned together while design, commissioning, records and recurring service scopes remain clear.</p><Link className="button button-light" href="/commercial/integrated-fire-security">Discuss an Integrated Project</Link></aside></div></section>

    <OngoingSupportStrip context="commercial"/>

    <section className="section"><div className="container"><SectionHeading eyebrow="Commercial projects" title="Real work across hospitality, industrial, retail and larger sites" text="Genuine project photography and confirmed scopes show how NOX approaches different commercial properties and operational requirements."/><CaseStudyGrid slugs={["continue-arcade-commercial-cctv-derby","telesis-hitachi-fire-intruder-system","bottle-and-thyme-commercial-cctv-chesterfield","retford-former-bank-cctv"]}/></div></section>

    <section className="section section-alt"><div className="container split-grid"><div><SectionHeading eyebrow="Commercial guides" title="Useful answers before arranging a site survey" text="Use the guides to prepare camera requirements, understand servicing and decide what information will help produce a well-defined quotation."/><div className="related-links"><Link href="/blog/how-many-cameras-does-a-commercial-site-need">How many cameras does a commercial site need? →</Link><Link href="/blog/choosing-cctv-for-home-or-business">Choosing CCTV for a business →</Link><Link href="/blog/taking-over-an-existing-security-system">Taking over an existing security system →</Link><Link href="/blog/how-often-should-security-systems-be-serviced">How often should security systems be serviced? →</Link></div></div><aside className="dark-panel"><h3>Information that helps us quote</h3><p>Share the site type, postcode, existing equipment, required camera or alarm outcomes, access restrictions, operating hours and preferred timescale.</p><ContactActions primaryLabel="Discuss the Site" compact audience="Commercial" serviceCategory="Commercial Security" enquiryType="Installation" sourceLabel="commercial-guide-bridge"/></aside></div></section>

    <section className="section"><div className="container"><SectionHeading eyebrow="Customer feedback" title="Site-specific advice, professional installation and local follow-up"/><ReviewGrid names={["Jez S", "Nathan De La Rosa", "Rory Stirland"]}/></div></section>
    <ConversionPanel title="Discuss a commercial security project" text="Tell us the site type, location, systems involved, existing equipment and what the project needs to achieve. NOX will guide the survey and proposal route." primaryLabel="Discuss Your Project" audience="Commercial" serviceCategory="Commercial Security" enquiryType="Installation" sourceLabel="commercial-final"/>
  </>
}
