import type { Metadata } from "next"
import Link from "next/link"
import { CaseStudyGrid, ConversionPanel, LocalSearchLinks, PageHero, ReviewGrid, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Security System Design Chesterfield | Residential & Commercial",
  "Choose residential security or commercial Fire & Security system design in Chesterfield, Sheffield and Derbyshire, followed by the right monitoring, maintenance or compliance plan.",
  "/systems"
)

const residentialSystems = [
  {
    title: "Ajax Intruder Alarms",
    text: "Wireless or hybrid alarm design with MotionCam photo verification, DoorProtect, user controls, sirens, app access and external detection where the survey supports it.",
    href: "/systems/intrusion-alarms",
    image: "/images/revisions/ajax-intruder-alarm-workbench.jpg",
    alt: "Ajax keypad installed in a Chesterfield home"
  },
  {
    title: "Perimeter Protection",
    text: "Ajax external detection for driveways, side access, garages, outbuildings, yards and selected approaches, designed as a separate early-warning layer.",
    href: "/systems/perimeter-protection",
    image: "/images/editorial/home-perimeter.jpg",
    alt: "Ajax perimeter protection installed around a residential property"
  },
  {
    title: "Professional Residential CCTV",
    text: "Fixed cameras with a dedicated recorder for stronger whole-property coverage, continuous or scheduled recording, playback and remote viewing across driveways, entrances, gardens, garages and outbuildings.",
    href: "/systems/cctv",
    image: "/images/revisions/residential-vigi-cctv-pair.jpg",
    alt: "Residential CCTV cameras installed by NOX in Chesterfield"
  },
  {
    title: "Smart Home Security",
    text: "App-led solar, battery, floodlight and doorbell cameras for homes that prioritise convenience, straightforward notifications and a lower-disruption installation.",
    href: "/systems/smart-home-cctv",
    image: "/images/revisions/eufy-smart-home-security-camera.jpg",
    alt: "Solar smart-home CCTV camera installed in Chesterfield"
  }
]

const commercialSystems = [
  {
    title: "Commercial Fire Alarm Systems",
    text: "New Ajax EN54 and suitable traditional fire-alarm installations, followed by testing, servicing, records and coordinated compliance support.",
    href: "/commercial/fire-compliance",
    image: "/images/revisions/ajax-en54-fire-control-panel.jpg",
    alt: "Ajax EN54 commercial fire alarm system"
  },
  {
    title: "Commercial CCTV",
    text: "Multi-camera systems for shops, offices, hospitality, yards, warehouses and industrial premises with NVR recording, playback and remote viewing.",
    href: "/commercial/cctv",
    image: "/images/revisions/commercial-cctv-industrial-building.jpg",
    alt: "Ten-camera commercial CCTV system in Retford"
  },
  {
    title: "Commercial Intruder Alarms",
    text: "Internal and external detection planned around access, staff use, opening hours, valuable areas and the agreed monitoring or keyholder process.",
    href: "/commercial/intruder-alarms",
    image: "/images/resent-installation/B563DA1D-D64B-4DF3-8058-BC6E01154EC3.png",
    alt: "External Ajax detection at an industrial site in Dronfield"
  },
  {
    title: "Emergency Lighting & Fire Risk Support",
    text: "Emergency-lighting installation and testing, plus fire-risk-assessment routes for landlords, HMOs, hospitality and operational commercial sites.",
    href: "/systems/emergency-lighting",
    image: "/images/revisions/emergency-lighting-exit-sign.jpg",
    alt: "Emergency lighting fitting for commercial installation and testing"
  }
]

export default function SystemsPage() {
  return <>
    <PageHero eyebrow="System design" title="Fire & Security systems for homes and businesses" intro="Start with the system you need — intruder, perimeter protection, CCTV or Fire — then see how the design changes for residential and commercial properties. Ongoing monitoring, maintenance and compliance remain available through the Service Plans section." image="/images/revisions/nox-engineer-cctv-wiring.jpg" imageAlt="Professional Ajax security technology and real NOX installation work"/>
    <TrustStrip/>

    <section className="section"><div className="container">
      <SectionHeading eyebrow="Residential systems" title="Intruder alarms, perimeter protection and CCTV designed around the home" text="NOX works with semi-detached houses, family homes, larger detached properties, rural sites, garages, gates and outbuildings. A well-designed system is considered and installed properly, whether it protects a semi-detached home, a larger detached property or several external areas."/>
      <div className="system-route-grid residential-system-grid">
        {residentialSystems.map(item => <article className="system-route-card" key={item.title}><img src={item.image} alt={item.alt}/><div><span className="eyebrow">Residential system</span><h2>{item.title}</h2><p>{item.text}</p><Link className="text-link" href={item.href}>Explore {item.title} →</Link></div></article>)}
      </div>
      <div className="button-row"><Link className="button button-outline" href="/residential">View Residential System Design</Link></div>
    </div></section>

    <section className="section section-alt"><div className="container">
      <SectionHeading eyebrow="Commercial systems" title="Fire, CCTV and intruder systems for commercial premises" text="Commercial work is led by fire-alarm installation and servicing, CCTV, intruder protection, emergency lighting and property-specific risk or compliance requirements."/>
      <div className="system-route-grid commercial-system-route-grid">
        {commercialSystems.map(item => <article className="system-route-card" key={item.title}><img src={item.image} alt={item.alt}/><div><span className="eyebrow">Commercial system</span><h2>{item.title}</h2><p>{item.text}</p><Link className="text-link" href={item.href}>Explore {item.title} →</Link></div></article>)}
      </div>
      <div className="button-row"><Link className="button button-outline" href="/commercial">View Commercial System Design</Link></div>
    </div></section>

    <section className="section ongoing-support-bridge"><div className="container split-grid"><div>
      <SectionHeading eyebrow="After installation" title="Move into the right service plan, monitoring or compliance package" text="Recurring support is kept separate from the new-system design so the customer can see exactly what they are buying. Residential customers can combine alarm, monitoring and CCTV maintenance; commercial customers can add Fire servicing, emergency lighting and coordinated compliance support."/>
      <div className="related-links"><Link href="/service-plans/alarm-maintenance">Alarm maintenance →</Link><Link href="/service-plans/alarm-monitoring">Alarm monitoring →</Link><Link href="/service-plans/cctv-maintenance">CCTV maintenance →</Link><Link href="/service-plans/fire-alarm-servicing">Fire alarm servicing →</Link><Link href="/service-plans/fire-compliance">Fire Compliance Package →</Link></div>
    </div><aside className="dark-panel"><span className="eyebrow">Packages and annual support</span><h3>One point of contact after handover</h3><p>Where the confirmed scope allows, services can be coordinated under one renewal structure with clearer records, planned engineer visits and a direct route for repairs or upgrades.</p><Link className="button button-light" href="/service-plans">Compare All Service Plans</Link></aside></div></section>

    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Real NOX work" title="Residential and commercial installations in the field"/><CaseStudyGrid slugs={["chesterfield-home-ajax-cctv-intruder","bottle-and-thyme-commercial-cctv-chesterfield","tan-station-fire-security-brimington","retford-former-bank-cctv"]}/></div></section>
    <LocalSearchLinks slugs={["security-systems-chesterfield","cctv-installation-chesterfield","ajax-alarm-installer-chesterfield","commercial-fire-security-systems"]} title="Focused routes for high-intent enquiries"/>
    <section className="section"><div className="container"><SectionHeading eyebrow="Customer reviews" title="Professional advice, installation and aftercare"/><ReviewGrid limit={3}/></div></section>
    <ConversionPanel title="Tell us whether the property is residential or commercial" text="From there, NOX can guide the enquiry into the right new-system design or ongoing support route without sending customers through unnecessary pages."/>
  </>
}
