import type { Metadata } from "next"
import Link from "next/link"
import { CaseStudyGrid, ContactActions, ConversionPanel, FeatureGrid, PageHero, ReviewGrid, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Existing Fire & Security System Support | Chesterfield & Sheffield",
  "Servicing, monitoring, repairs, upgrades and system takeovers for existing CCTV, intruder, fire alarm and emergency-lighting systems across Chesterfield, Sheffield, Derbyshire, Derby and South Yorkshire.",
  "/service-plans",
  { image: "/images/v4-10/servicing-monitoring-hero.jpeg", imageAlt: "NOX servicing and supporting an existing Fire and Security system" },
)

const supportRoutes = [
  { title: "Servicing & Maintenance", text: "Planned alarm, CCTV, fire-alarm and emergency-lighting visits with clear testing, records, identified defects and next actions.", href: "/service-plans#servicing-maintenance", image: "/images/v4-10/servicing-monitoring-hero.jpeg", alt: "NOX engineer attending a planned Fire and Security service visit" },
  { title: "Monitoring", text: "Professional alarm signalling, keyholder communication and agreed escalation for suitable maintained residential and commercial systems.", href: "/service-plans/alarm-monitoring", image: "/images/v4-13-2/alarm-monitoring-operator.jpg", alt: "Professional alarm monitoring operator supporting an existing security system" },
  { title: "System Takeovers", text: "Existing alarms, CCTV and fire systems assessed for access, condition, documentation, faults and a practical ongoing-support route.", href: "/services/security-system-takeover", image: "/images/image-refresh/commercial-old-camera.webp", alt: "Existing CCTV equipment assessed during a security system takeover" },
  { title: "Repairs & Upgrades", text: "Fault finding, camera or recorder replacement, alarm expansion, obsolete-equipment replacement and phased improvements.", href: "/services/repairs-upgrades", image: "/images/image-refresh/chester-street-after.webp", alt: "Improved CCTV live views following a system repair and upgrade" },
  { title: "Ongoing Support Packages", text: "Bring suitable monitoring, alarm servicing, CCTV maintenance and planned visits under one clearer renewal and point of contact.", href: "/service-plans/total-security", image: "/images/resent-installation/E6B4D998-0805-4B7E-8532-CC491C881B57.jpeg", alt: "Coordinated alarm monitoring and CCTV maintenance support package" },
]

const maintenanceRoutes = [
  { title: "Intruder Alarm Servicing", text: "Devices, batteries, sirens, communication, user settings, event history and service records.", href: "/service-plans/alarm-maintenance" },
  { title: "CCTV Maintenance", text: "Camera cleaning, image quality, recording, storage, playback, remote access and upgrade recommendations.", href: "/service-plans/cctv-maintenance" },
  { title: "Fire Alarm Servicing", text: "Planned commercial testing, records, defect reporting, takeover inspections and remedial quotations.", href: "/service-plans/fire-alarm-servicing" },
  { title: "Emergency Lighting Servicing", text: "Functional checks, annual duration testing, failed-fitting reports, records and coordinated remedials.", href: "/service-plans/emergency-lighting-servicing" },
]

export default function ServicePlansPage() {
  return <>
    <PageHero eyebrow="Existing System Support" title="Servicing, monitoring, takeovers and upgrades for systems already installed" intro="Customers should not need to diagnose whether an existing system needs maintenance, a repair, monitoring, a takeover or replacement before contacting NOX. We review the property, equipment, access, condition and required outcome, then guide the enquiry into the correct next step across Chesterfield, Sheffield, Derbyshire, Derby and South Yorkshire." image="/images/v4-10/servicing-monitoring-hero.jpeg" imageAlt="NOX Fire and Security van outside an existing-system support visit" imagePosition="center 68%">
      <ContactActions primaryLabel="Get Support for an Existing System" audience="Residential & Commercial" serviceCategory="Existing System Support" enquiryType="Takeover" sourceLabel="existing-system-support-hub"/>
    </PageHero>
    <TrustStrip variant="servicing"/>

    <section className="section" id="home-system-support"><div className="container">
      <SectionHeading eyebrow="Choose the outcome" title="One clear starting point for existing Fire and Security systems" text="Start with the support route that feels closest to the problem. NOX will confirm whether the next step is a service visit, compatibility check, takeover assessment, repair quotation or a wider upgrade plan."/>
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

    <section className="section section-alt"><div className="container split-grid"><div>
      <SectionHeading eyebrow="Monitoring" title="Professional alarm handling can sit alongside planned maintenance" text="Suitable residential and commercial intruder alarms can be connected to professional monitoring with agreed keyholders and escalation. Compatibility, signalling, system condition and the maintenance route are confirmed before activation."/>
      <div className="related-links"><Link href="/service-plans/alarm-monitoring">Residential and commercial alarm monitoring →</Link><Link href="/blog/app-alerts-versus-professional-alarm-monitoring">App alerts versus professional monitoring →</Link></div>
    </div><aside className="dark-panel"><h3>Keep contacts and systems current</h3><p>Monitoring works best when the alarm remains maintained and keyholder information stays accurate. These responsibilities are explained clearly rather than hidden inside a package.</p><ContactActions primaryLabel="Request a Monitoring Quote" compact audience="Residential & Commercial" serviceCategory="Alarm Monitoring" enquiryType="Monitoring" sourceLabel="support-monitoring-route"/></aside></div></section>

    <section className="section"><div className="container">
      <SectionHeading eyebrow="Ongoing Support Packages" title="A natural route for customers who want suitable systems looked after properly" text="Eligible alarm monitoring, intruder servicing, CCTV maintenance, planned visits and selected fire services can be coordinated under a clearer support arrangement. The written proposal confirms what is included, what remains separate and how renewals are managed."/>
      <FeatureGrid columns={4} items={[
        { title: "Planned visits", text: "Service frequencies and access are arranged around the property, systems and operating requirements." },
        { title: "Consolidated dates", text: "Suitable visits and renewals can be aligned where practical without mixing the technical service records." },
        { title: "One point of contact", text: "Questions, faults, quotations and future upgrades remain easier to coordinate across the agreed systems." },
        { title: "Clear scope", text: "Included systems, exclusions, parts, repairs and response routes are confirmed before the agreement begins." },
      ]}/>
      <div className="button-row"><Link className="button button-light" href="/service-plans/total-security">Explore Ongoing Support Packages</Link><Link className="button button-outline" href="/service-plans/fire-compliance">Explore Fire Compliance Plans</Link></div>
    </div></section>

    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Before ongoing support" title="Condition, access and responsibilities are made clear first"/><FeatureGrid columns={4} items={[
      { title: "System make and age", text: "Panels, devices, cameras, recorders, communication routes and parts support need to be understood." },
      { title: "Access and ownership", text: "Engineer codes, app accounts, recorder passwords and available documentation affect the takeover route." },
      { title: "Faults and remedials", text: "Known issues, disabled devices, storage faults and battery condition are separated from routine service work." },
      { title: "Written agreement", text: "Included visits, exclusions, parts, response route and renewal terms are confirmed before ongoing support starts." },
    ]}/></div></section>

    <section className="section"><div className="container"><SectionHeading eyebrow="Relevant projects" title="Takeovers, upgrades and systems moving into ongoing support" text="Real NOX projects showing older equipment, phased improvements and installations designed with future servicing in mind."/><CaseStudyGrid slugs={["retford-former-bank-cctv","chatsworth-estate-cctv-upgrade","telesis-hitachi-fire-intruder-system"]}/></div></section>
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Customer feedback" title="Local support backed by real installation experience"/><ReviewGrid names={["Jeremy Bunting", "Ryan Hargreaves", "Rory Stirland"]}/></div></section>
    <ConversionPanel title="Get support for an existing Fire or Security system" text="Tell us what is installed, the property or site, any known faults, available access and the outcome required. NOX will confirm the correct inspection, service, monitoring or takeover next step." primaryLabel="Get Support for an Existing System" audience="Residential & Commercial" serviceCategory="Existing System Support" enquiryType="Takeover" sourceLabel="existing-system-support-final"/>
  </>
}
