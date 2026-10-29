import type { Metadata } from "next"
import Link from "next/link"
import { CaseStudyGrid, ContactActions, ConversionPanel, FeatureGrid, OngoingSupportStrip, PageHero, ReviewGrid, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Commercial CCTV & Security Systems | Chesterfield & Sheffield",
  "Commercial fire alarm installation and servicing, CCTV, intruder alarms and coordinated security systems across Chesterfield, Sheffield, Derbyshire, Derby and South Yorkshire.",
  "/commercial",
  { image: "/images/image-refresh/ajax-commercial-ptz.webp", imageAlt: "Ajax commercial PTZ camera for larger operational areas" },
)

const commercialSystems = [
  {
    title: "Fire Alarm Installation, Service & Maintenance",
    text: "Commercial fire alarm installation, planned servicing, maintenance records, repairs and compliance support coordinated around the premises.",
    href: "/fire-compliance",
    image: "/images/v4-10/fire-alarm-installation-hero.jpeg",
    alt: "Commercial fire alarm installation and ongoing servicing by NOX",
  },
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
    title: "CCTV & Fire Protection",
    text: "For one commercial premises needing both CCTV and fire protection, with optional intruder alarms and coordinated ongoing support.",
    href: "/commercial/integrated-fire-security",
    image: "/images/revisions/telesis-hitachi-exterior.jpg",
    alt: "Commercial premises protected by coordinated fire and security systems",
  },
  {
    title: "Security Across Multiple Sites",
    text: "For businesses with two or more locations: coordinate CCTV, alarm users, service visits and reporting across different addresses.",
    href: "/commercial/multi-site-security",
    image: "/images/revisions/stonefirst-commercial-installation.jpg",
    alt: "NOX commercial security project supporting a multi-site rollout",
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
    <PageHero eyebrow="Protect My Business" title="Commercial Fire and Security systems designed around working sites" intro="NOX supports commercial premises with fire alarm installation, servicing and maintenance first, followed by CCTV, intruder protection and coordinated site security across Chesterfield, Sheffield, Derbyshire, Derby and South Yorkshire." image="/images/image-refresh/ajax-commercial-ptz.webp" imageAlt="Ajax commercial PTZ camera for larger operational areas">
      <ContactActions primaryLabel="Discuss Your Project" audience="Commercial" serviceCategory="Commercial Security" enquiryType="Installation" sourceLabel="commercial-hub"/>
    </PageHero>
    <TrustStrip variant="commercial"/>

    <section className="section"><div className="container">
      <SectionHeading eyebrow="Installations & larger projects" title="Fire alarm, CCTV and security systems for working sites" text="Fire alarm installation, servicing and maintenance lead the commercial offer, followed by CCTV, intruder protection, industrial security, multi-site systems and integrated projects."/>
      <div className="feature-grid columns-3 media-route-grid commercial-media-grid">
        {commercialSystems.map((item, index) => <article className="feature-card media-route-card" key={item.title}><img src={item.image} alt={item.alt}/><div className="media-route-card-body"><span className="feature-number">{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.text}</p><Link className="text-link" href={item.href}>Explore {item.title} →</Link></div></article>)}
      </div>
    </div></section>

    

    <section className="section"><div className="container">
      <SectionHeading eyebrow="Servicing & support" title="Connect existing and newly installed systems to planned support" text="Suitable existing and newly installed systems can move into planned servicing, monitoring, repairs, phased upgrades and takeover support without being forced into an unnecessary replacement."/>
      <div className="feature-grid columns-3 media-route-grid commercial-media-grid">{ongoingSupport.map(item => <article className="feature-card media-route-card" key={item.title}><img src={item.image} alt={item.alt}/><div className="media-route-card-body"><h3>{item.title}</h3><p>{item.text}</p><Link className="text-link" href={item.href}>View service →</Link></div></article>)}</div>
    </div></section>

    


    <section className="section"><div className="container"><SectionHeading eyebrow="Commercial projects" title="Real work across hospitality, industrial, retail and larger sites" text="Genuine project photography and confirmed scopes show how NOX approaches different commercial properties and operational requirements."/><CaseStudyGrid slugs={["david-malin-kitchens-sheffield-ajax-fire-cctv-intruder","steve-foster-cranes-derby-hikvision-cctv-monitoring","rotherham-scrapyard-ajax-fire-hikvision-ptz-cctv","sheffield-industrial-unit-ajax-cctv-installation"]}/></div></section>

    

    <section className="section"><div className="container"><SectionHeading eyebrow="Customer feedback" title="Site-specific advice, professional installation and local follow-up"/><ReviewGrid names={["Jez S", "Nathan De La Rosa", "Rory Stirland"]}/></div></section>
    <ConversionPanel title="Discuss a commercial security project" text="Tell us the site type, location, systems involved, existing equipment and what the project needs to achieve. NOX will guide the survey and proposal route." primaryLabel="Discuss Your Project" audience="Commercial" serviceCategory="Commercial Security" enquiryType="Installation" sourceLabel="commercial-final"/>
  </>
}
