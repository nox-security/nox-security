import type { Metadata } from "next"
import Link from "next/link"
import { CaseStudyGrid, ContactActions, ConversionPanel, FeatureGrid, OngoingSupportStrip, PageHero, ReviewGrid, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Fire & Security Service and Monitoring | Chesterfield & Sheffield",
  "Fire alarm and intruder monitoring, planned maintenance, repairs, upgrades and system takeovers across Chesterfield, Sheffield, Derbyshire, Derby and the Peak District.",
  "/service-plans",
  { image: "/images/v4-10/servicing-monitoring-hero.jpeg", imageAlt: "NOX servicing and supporting an existing Fire and Security system" },
)

const supportRoutes = [
  { title: "Servicing & Maintenance", text: "Planned alarm, CCTV, fire-alarm and emergency-lighting visits with clear testing, records, identified defects and next actions.", href: "/service-plans#servicing-maintenance", image: "/images/v4-10/servicing-monitoring-hero.jpeg", alt: "NOX engineer attending a planned Fire and Security service visit" },
  { title: "Intruder Alarm Monitoring", text: "Professional alarm signalling, keyholder communication and agreed escalation for suitable maintained residential and commercial systems.", href: "/service-plans/alarm-monitoring", image: "/images/v4-13-41/intruder-monitoring-main.webp", alt: "Professional security monitoring centre handling intruder alarms and CCTV verification" },
  { title: "Fire Alarm Monitoring", text: "Professional signalling and agreed escalation for suitable maintained commercial fire alarm systems.", href: "/service-plans/fire-alarm-monitoring", image: "/images/revisions/intruder-alarm-monitoring-centre.jpg", alt: "Professional monitoring centre receiving commercial alarm signals" },
  { title: "System Takeovers", text: "Existing alarms, CCTV and fire systems assessed for access, condition, documentation, faults and a practical ongoing-support route.", href: "/services/security-system-takeover", image: "/images/image-refresh/commercial-old-camera.webp", alt: "Existing CCTV equipment assessed during a security system takeover" },
  { title: "Repairs & Upgrades", text: "Fault finding, camera or recorder replacement, alarm expansion, obsolete-equipment replacement and phased improvements.", href: "/services/repairs-upgrades", image: "/images/image-refresh/chester-street-after.webp", alt: "Improved CCTV live views following a system repair and upgrade" },
  { title: "Ongoing Support Packages", text: "Bring suitable monitoring, alarm servicing, CCTV maintenance and planned visits under one planned renewal and point of contact.", href: "/service-plans/total-security", image: "/images/resent-installation/E6B4D998-0805-4B7E-8532-CC491C881B57.jpeg", alt: "Coordinated alarm monitoring and CCTV maintenance support package" },
]

const maintenanceRoutes = [
  { title: "Fire Alarm Service & Maintenance", text: "Planned commercial testing, maintenance records, defect reporting, takeover inspections and remedial quotations.", href: "/service-plans/fire-alarm-servicing" },
  { title: "CCTV Maintenance", text: "Camera cleaning, image quality, recording, storage, playback, remote access and upgrade recommendations.", href: "/service-plans/cctv-maintenance" },
  { title: "Intruder Alarm Servicing", text: "Devices, batteries, sirens, communication, user settings, event history and service records.", href: "/service-plans/alarm-maintenance" },
  { title: "Emergency Lighting Servicing", text: "Functional checks, annual duration testing, failed-fitting reports, records and coordinated remedials.", href: "/service-plans/emergency-lighting-servicing" },
]

export default function ServicePlansPage() {
  return <>
    <PageHero eyebrow="Service & Monitoring" title="Fire alarm servicing, monitoring and planned maintenance" intro="Fire alarm service and maintenance is presented first, followed by CCTV and intruder support. Start with the outcome you need. NOX will review the property, equipment, access, condition and required response, then confirm whether the next step is monitoring, a planned service visit, takeover assessment, repair or upgrade across Chesterfield, Sheffield, Derbyshire, Derby and the Peak District." image="/images/v4-10/servicing-monitoring-hero.jpeg" imageAlt="NOX Fire and Security van outside an existing-system support visit" imagePosition="center 68%">
      <ContactActions primaryLabel="Discuss an Existing System" audience="Residential & Commercial" serviceCategory="Existing System Support" enquiryType="Takeover" sourceLabel="existing-system-support-hub"/>
    </PageHero>
    <TrustStrip variant="servicing"/>

    <section className="section" id="home-system-support"><div className="container">
      <SectionHeading eyebrow="Choose the outcome" title="Start with the outcome the system needs" text="Choose the option closest to the requirement. NOX will confirm whether the next step is monitoring, a service visit, compatibility check, takeover assessment, repair quotation or wider upgrade plan."/>
      <div className="feature-grid columns-3 media-route-grid support-media-grid">{supportRoutes.map((item, index) => <article className="feature-card media-route-card" key={item.title}><img src={item.image} alt={item.alt}/><div className="media-route-card-body"><span className="feature-number">{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.text}</p><Link className="text-link" href={item.href}>Explore support →</Link></div></article>)}</div>
    </div></section>

    <section className="section section-alt" id="servicing-maintenance"><div className="container">
      <SectionHeading eyebrow="Servicing & Maintenance" title="Choose the system that needs planned support" text="Each system keeps its own testing scope and records. Customers managing several systems can still coordinate suitable visits, renewals and reporting where practical."/>
      <div className="support-route-grid">{maintenanceRoutes.map((item, index) => <article className="support-route-card" key={item.title}><span className="feature-number">{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.text}</p><Link className="text-link" href={item.href}>View service →</Link></article>)}</div>
    </div></section>

    <section className="section"><div className="container split-grid"><div>
      <SectionHeading eyebrow="System takeovers" title="Assess what can be retained before recommending replacement" text="A takeover starts with system access, ownership, documentation, faults, age, supportability and the outcome the customer needs. Useful equipment can be retained where practical, with repairs or selective upgrades separated clearly from routine servicing."/>
      <div className="related-links"><Link href="/services/security-system-takeover">System takeover assessments →</Link><Link href="/services/repairs-upgrades">Repairs & phased upgrades →</Link><Link href="/blog/taking-over-an-existing-security-system">Guide to taking over an existing system →</Link></div>
    </div><aside className="dark-panel"><h3>Residential and commercial systems</h3><p>NOX can assess suitable intruder alarms, CCTV, fire alarms and connected equipment installed by another company. Access, condition and parts support are confirmed before ongoing responsibility is accepted.</p><ContactActions primaryLabel="Discuss a System Takeover" compact audience="Residential & Commercial" serviceCategory="Existing System Support" enquiryType="Takeover" sourceLabel="support-takeover-route"/></aside></div></section>

    

    

    


    <section className="section"><div className="container"><SectionHeading eyebrow="Relevant projects" title="Takeovers, upgrades and systems moving into ongoing support" text="Real NOX projects showing older equipment, phased improvements and installations designed with future servicing in mind."/><CaseStudyGrid slugs={["david-malin-kitchens-sheffield-ajax-fire-cctv-intruder","steve-foster-cranes-derby-hikvision-cctv-monitoring","retford-former-bank-cctv"]}/></div></section>
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Customer feedback" title="Local support backed by real installation experience"/><ReviewGrid names={["Jeremy Bunting", "Ryan Hargreaves", "Rory Stirland"]}/></div></section>
    <ConversionPanel title="Discuss monitoring, maintenance or an existing system" text="Tell us what is installed, the property or site, any known faults, available access and the outcome required. NOX will confirm the correct inspection, service, monitoring or takeover next step." primaryLabel="Discuss an Existing System" audience="Residential & Commercial" serviceCategory="Existing System Support" enquiryType="Takeover" sourceLabel="existing-system-support-final"/>
  </>
}
