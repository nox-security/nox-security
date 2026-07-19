import type { Metadata } from "next"
import Link from "next/link"
import { CaseStudyGrid, ConversionPanel, FeatureGrid, PageHero, ReviewGrid, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Residential Security Systems Chesterfield | Ajax Alarms & CCTV",
  "Ajax intruder alarms, residential CCTV, smart-home cameras, monitoring, maintenance and system takeovers for homes across Chesterfield, Sheffield and Derbyshire.",
  "/residential"
)

const newSystems = [
  { title: "Ajax Intruder Alarms", text: "MotionCam photo verification, DoorProtect, internal detection, keypads, sirens, app control and carefully selected external protection.", href: "/systems/intrusion-alarms", image: "/images/projects/chesterfield-home-keypad.jpg", alt: "Ajax keypad installed at a residential property in Chesterfield" },
  { title: "Residential CCTV", text: "Professional camera coverage for entrances, driveways, vehicles, garages, gardens, gates and outbuildings with suitable recording and remote viewing.", href: "/systems/cctv", image: "/images/projects/chesterfield-home-cameras.jpg", alt: "Residential CCTV cameras installed by NOX in Chesterfield" },
  { title: "Smart Home CCTV", text: "Solar, floodlight, wireless and app-led camera options where a lower-disruption system suits the home and the recording requirement.", href: "/systems/smart-home-cctv", image: "/images/projects/eufy-solar-camera-2.jpg", alt: "Smart-home solar CCTV camera installed in Chesterfield" }
]

export default function ResidentialPage() {
  return <>
    <PageHero eyebrow="Residential security system design" title="Professional security for normal family homes, larger properties and everything between" intro="NOX designs Ajax alarms, CCTV and smart-home security around the way the property is used. The same care applies whether it is a semi-detached house, a detached family home, a renovation, a rural property or a larger site with gates, garages and outbuildings." image="/images/projects/chesterfield-home-exterior.jpg" imageAlt="Chesterfield home protected by a NOX Ajax alarm and CCTV system"/>
    <TrustStrip/>

    <section className="section"><div className="container">
      <SectionHeading eyebrow="New residential installations" title="Start with the areas you want to protect" text="The survey looks at entrances, movement routes, sleeping areas, vehicles, gardens, garages, outbuildings and everyday routines before equipment is selected."/>
      <div className="system-route-grid residential-system-grid">
        {newSystems.map(item => <article className="system-route-card" key={item.title}><img src={item.image} alt={item.alt}/><div><span className="eyebrow">Residential system</span><h2>{item.title}</h2><p>{item.text}</p><Link className="text-link" href={item.href}>Explore {item.title} →</Link></div></article>)}
      </div>
    </div></section>

    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Designed around daily life" title="Premium is the standard of the design and installation — not the size of the house" text="NOX aims for considered device placement, clean workmanship, straightforward control and a system that remains useful after handover."/><FeatureGrid columns={4} items={[
      { title: "Family homes", text: "Protection can be planned around children, pets, bedrooms, extensions, night mode and the household’s normal entry and exit routes." },
      { title: "Driveways and vehicles", text: "CCTV and suitable external detection can cover approaches, parked vehicles, gates and vulnerable side access." },
      { title: "Garages and outbuildings", text: "Detached spaces can be added where communication, power, system capacity and the property layout allow." },
      { title: "Larger and rural properties", text: "Longer approaches, multiple buildings, boundaries and higher camera counts can be designed as one joined-up system or delivered in phases." }
    ]}/></div></section>

    <section className="section residential-aftercare-section"><div className="container split-grid"><div>
      <SectionHeading eyebrow="Ongoing support" title="Move from installation into monitoring, maintenance or a package" text="New installations are priced separately from recurring support. After handover, homeowners can choose focused annual services or combine eligible systems under a simpler package and renewal date."/>
      <div className="related-links"><Link href="/service-plans/alarm-maintenance">Alarm Maintenance — £225/year →</Link><Link href="/service-plans/alarm-monitoring">Alarm Monitoring — £595/year →</Link><Link href="/service-plans/cctv-maintenance">CCTV Maintenance — £225/year →</Link><Link href="/service-plans/total-security">Total Security Package — from £795/year →</Link></div>
    </div><aside className="dark-panel"><span className="eyebrow">Existing systems</span><h3>Takeovers, faults and sensible upgrades</h3><p>NOX can inspect suitable wired, wireless, hybrid and CCTV systems installed by another company. We will explain whether servicing, repair, access recovery, partial upgrade or replacement is the sensible route.</p><Link className="button button-light" href="/get-quote#quote-form">Discuss an Existing System</Link></aside></div></section>

    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Residential installations" title="Real NOX work on homes across the region" text="Genuine installation photography shows the standard of the finish, device positioning and the types of homes NOX protects."/><CaseStudyGrid slugs={["chesterfield-home-ajax-cctv-intruder","sheffield-residential-security","eufy-smart-home-cctv-chesterfield"]}/></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="Customer reviews" title="Clear advice, tidy work and a proper handover"/><ReviewGrid limit={3}/></div></section>
    <ConversionPanel title="Tell us about your home and what you want to protect" text="One short enquiry can cover a new Ajax alarm, CCTV, smart-home cameras, monitoring, maintenance or an existing-system takeover."/>
  </>
}
