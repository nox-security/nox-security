import type { Metadata } from "next"
import Link from "next/link"
import { CaseStudyGrid, ContactActions, ConversionPanel, FeatureGrid, PageHero, ReviewGrid, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Home CCTV & Ajax Alarm Installation | Chesterfield & Sheffield",
  "Home CCTV installation, Ajax intruder alarms and perimeter protection across Chesterfield, Sheffield, Derbyshire and South Yorkshire, with monitoring and maintenance available.",
  "/residential"
)

const residentialSystems = [
  { title: "Home CCTV", text: "Recorder-based CCTV for driveways, entrances, gardens, vehicles, garages and outbuildings with remote viewing and playback.", href: "/systems/home-cctv", image: "/images/image-refresh/home-cctv-live-view.webp", alt: "Home CCTV cameras installed beneath a residential roofline" },
  { title: "Ajax Intruder Alarms", text: "MotionCam, door protection, internal detection, user-friendly control, sirens, monitoring and future expansion.", href: "/systems/intrusion-alarms", image: "/images/image-refresh/residential-nox-siren.webp", alt: "Ajax alarm equipment prepared for a NOX home installation" },
  { title: "Perimeter Protection", text: "Suitable external detection for approaches, gates, boundaries and areas where earlier warning is useful.", href: "/systems/perimeter-protection", image: "/images/image-refresh/home-perimeter-motioncam.webp", alt: "External Ajax perimeter detector installed at a property" },
  { title: "Garages & Outbuildings", text: "Protection for detached garages, workshops, garden rooms, gated approaches and properties with several buildings.", href: "/systems/garages-outbuildings", image: "/images/image-refresh/garages-outbuildings-engineer.webp", alt: "NOX engineer installing security on a home with external areas" },
  { title: "Smart Security", text: "Eufy cameras, video doorbells, solar or battery products and app-led security for customers prioritising convenience and subscription-free options.", href: "/systems/smart-home-cctv", image: "/images/image-refresh/smart-home-eufy-installed.webp", alt: "Eufy smart security camera installed at a home" },
  { title: "Alarm & CCTV Packages", text: "Coordinate the alarm, cameras, perimeter and optional annual support around one whole-property design.", href: "/service-plans/residential-security-packages", image: "/images/image-refresh/smart-home-package.webp", alt: "NOX van outside a completed residential security installation" },
]

export default function ResidentialPage() {
  return <>
    <PageHero eyebrow="Residential Security" title="Ajax alarms, home CCTV and perimeter protection designed around the property" intro="NOX protects semi-detached homes, family houses, larger properties, renovations, rural sites, garages, gates and outbuildings across Chesterfield, Sheffield and Derbyshire. The system is shaped around the property and daily routine rather than the customer being forced into a fixed kit." image="/images/image-refresh/homepage-hero-nox-property.webp" imageAlt="Residential property protected by NOX Fire and Security">
      <ContactActions primaryLabel="Get a Home Security Quote" audience="Residential" serviceCategory="Residential Security" enquiryType="Installation" sourceLabel="residential-hub"/>
    </PageHero>
    <TrustStrip variant="residential"/>

    <section className="section"><div className="container">
      <SectionHeading eyebrow="Residential systems" title="Choose the requirement first, then the technology" text="Intruder alarms, CCTV, perimeter detection and smart cameras solve different parts of the property. NOX can design one system or combine several without unnecessary duplication."/>
      <div className="system-route-grid residential-system-grid">{residentialSystems.map(item => <article className="system-route-card" key={item.title}><img src={item.image} alt={item.alt}/><div><span className="eyebrow">Residential</span><h2>{item.title}</h2><p>{item.text}</p><Link className="text-link" href={item.href}>Explore {item.title} →</Link></div></article>)}</div>
    </div></section>

    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Property types" title="From a normal family home to a property with several external areas" text="The same property-led approach works for a normal family home, a renovation, a larger house or a site with several external areas. The specification reflects the building and how it is used."/><FeatureGrid columns={4} items={[
      { title: "Family homes", text: "Protection planned around pets, children, bedrooms, extensions, night mode and everyday entry routes." },
      { title: "Driveways and vehicles", text: "CCTV and suitable detection for approaches, parking areas, gates and vulnerable side access." },
      { title: "Garages and outbuildings", text: "Detached spaces assessed for distance, construction, power, network and system communication." },
      { title: "Larger and rural properties", text: "Longer boundaries, several buildings and higher camera counts planned as one project or delivered in phases." }
    ]}/></div></section>

    <section className="section"><div className="container split-grid"><div>
      <SectionHeading eyebrow="Existing systems" title="Takeovers, faults and sensible upgrades" text="NOX can assess suitable wired, wireless, hybrid and CCTV systems installed by another company. The inspection identifies access, condition, compatibility and whether service, repair, selective upgrade or replacement is the sensible next step."/>
      <div className="related-links"><Link href="/services/security-system-takeover">Residential system takeovers →</Link><Link href="/services/repairs-upgrades">Repairs & upgrades →</Link><Link href="/service-plans/alarm-maintenance">Intruder alarm servicing →</Link><Link href="/service-plans/cctv-maintenance">CCTV maintenance →</Link></div>
    </div><aside className="dark-panel"><h3>Ongoing support after installation</h3><p>Professional monitoring, annual alarm servicing, CCTV maintenance and coordinated Total Security Plans remain optional and are shown separately from the installation quotation.</p><Link className="button button-light" href="/service-plans">Explore Servicing & Monitoring</Link></aside></div></section>

    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Residential projects" title="Real NOX installations across the region" text="Genuine homes, equipment and installation photography show how NOX approaches different residential requirements."/><CaseStudyGrid slugs={["chesterfield-home-ajax-cctv-intruder","sheffield-residential-security","eufy-smart-home-cctv-chesterfield"]}/></div></section>

    <section className="section"><div className="container split-grid"><div><SectionHeading eyebrow="Residential guides" title="Questions to answer before choosing a system"/><div className="related-links"><Link href="/blog/how-much-does-an-ajax-alarm-cost">How much does an Ajax alarm cost? →</Link><Link href="/blog/how-many-cctv-cameras-does-a-house-need">How many CCTV cameras does a house need? →</Link><Link href="/blog/can-an-alarm-protect-a-garage-or-outbuilding">Can an alarm protect a garage or outbuilding? →</Link><Link href="/blog/app-alerts-versus-professional-alarm-monitoring">App alerts versus professional monitoring →</Link></div></div><aside className="dark-panel"><h3>Start with the property</h3><p>Tell us about the entrances, driveway, vehicles, external buildings, current equipment and how you want to use the system.</p><ContactActions primaryLabel="Discuss My Property" compact audience="Residential" serviceCategory="Residential Security" enquiryType="Installation" sourceLabel="residential-guide-bridge"/></aside></div></section>

    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Customer feedback" title="Clear advice, tidy work and a proper handover"/><ReviewGrid names={["Ryan Hargreaves"]}/></div></section>
    <ConversionPanel title="Plan the right security for your home" text="Tell us what you want to protect and whether you are considering an alarm, CCTV, a garage or outbuilding, smart security or an existing-system takeover." primaryLabel="Get a Home Security Quote" audience="Residential" serviceCategory="Residential Security" enquiryType="Installation" sourceLabel="residential-final"/>
  </>
}
