import type { Metadata } from "next"
import Link from "next/link"
import { CaseStudyGrid, ConversionPanel, FeatureGrid, PageHero, ReviewGrid, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Residential Fire & Security Systems Chesterfield & Derbyshire",
  "Residential intruder alarms, CCTV, perimeter protection, app control, monitoring and maintenance for homes across Chesterfield, Sheffield and Derbyshire.",
  "/residential"
)

const services = [
  { title: "Intruder alarms", text: "Ajax wireless alarms, door and movement detection, keypads, fobs, app control and suitable photo verification.", href: "/systems/intrusion-alarms" },
  { title: "Home CCTV", text: "Professional camera coverage for entrances, driveways, vehicles, garages, gardens and outbuildings.", href: "/systems/cctv" },
  { title: "Perimeter protection", text: "External detection around approaches, side access, garages, yards and suitable boundary areas.", href: "/systems/intrusion-alarms" },
  { title: "Monitoring and maintenance", text: "Professional alarm monitoring, annual servicing, system health checks, repairs and takeover support.", href: "/service-plans" }
]

export default function ResidentialPage() {
  return <>
    <PageHero eyebrow="Residential fire and security" title="Security designed around your home, routine and property" intro="From a straightforward alarm replacement to joined-up CCTV, external detection and ongoing aftercare, NOX keeps residential protection professional, tidy and easy to use." image="/images/House-Full-HD-1024x602.webp" imageAlt="Residential property protected by NOX Fire and Security"/>
    <TrustStrip/>
    <section className="section"><div className="container"><SectionHeading eyebrow="Residential solutions" title="Protection for the areas that matter most" text="The system is designed around the home first, with equipment selected to suit the property rather than forcing every customer into the same kit."/><div className="feature-grid columns-4">{services.map((service, index) => <article className="feature-card" key={service.title}><span className="feature-number">{String(index + 1).padStart(2,"0")}</span><h2>{service.title}</h2><p>{service.text}</p><Link className="text-link" href={service.href}>Explore service →</Link></article>)}</div></div></section>
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Designed around daily life" title="Simple control without compromising the installation"/><FeatureGrid columns={4} items={[
      { title: "Homes and extensions", text: "Internal protection can be planned around doors, rooms, pets, sleeping areas and the way the household uses the property." },
      { title: "Driveways and vehicles", text: "CCTV and suitable external detection can help cover vehicles, entrances and approaches." },
      { title: "Garages and outbuildings", text: "Detached and secondary areas can be included where communication, power and the property layout allow." },
      { title: "App and user control", text: "Keypads, fobs, app access, alerts and suitable verification options are set up around the agreed users." }
    ]}/></div></section>
    <section className="section"><div className="container split-grid"><div><SectionHeading eyebrow="Aftercare" title="Local support after the system is handed over" text="Alarm monitoring, annual maintenance, battery and device checks, CCTV servicing, repairs and suitable system takeovers are available without forcing every homeowner into the same arrangement."/><div className="related-links"><Link href="/service-plans/alarm-maintenance">Alarm maintenance →</Link><Link href="/service-plans/alarm-monitoring">Alarm monitoring →</Link><Link href="/service-plans/cctv-maintenance">CCTV maintenance →</Link></div></div><aside className="dark-panel"><h3>Already have a system?</h3><p>NOX can inspect suitable existing alarms and CCTV, review faults or lost access and explain whether repair, servicing or upgrade is the sensible route.</p><Link className="button button-light" href="/get-quote">Discuss an Existing System</Link></aside></div></section>
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Residential installations" title="Real NOX home-security projects"/><CaseStudyGrid slugs={["sheffield-residential-security","chesterfield-residential-ajax"]}/></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="Customer reviews" title="Clear advice, tidy work and proper handover"/><ReviewGrid limit={3}/></div></section>
    <ConversionPanel title="Tell us about your home and what you want to protect" text="Use the single NOX enquiry form for alarms, CCTV, perimeter protection, monitoring, maintenance or an existing-system takeover."/>
  </>
}
