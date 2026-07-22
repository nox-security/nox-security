import type { Metadata } from "next"
import Link from "next/link"
import { CaseStudyGrid, ConversionPanel, FeatureGrid, JsonLd, ReviewGrid, ReviewSummaryStrip, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata, site } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "NOX Fire & Security | Home Security, Commercial Fire & CCTV",
  "Ajax intruder alarms, home CCTV, commercial CCTV, fire alarm installation, emergency lighting, servicing and monitoring across Chesterfield, Sheffield and Derbyshire.",
  "/"
)

const residentialRoutes = [
  { title: "Ajax Intruder Alarms", text: "MotionCam, door protection, keypads, sirens, app control and external detection selected around the home.", href: "/systems/intrusion-alarms", image: "/images/revisions/ajax-intruder-alarm-workbench.jpg", alt: "Ajax intruder alarm equipment prepared by NOX" },
  { title: "Home CCTV", text: "Recorder-based CCTV for driveways, doors, gardens, garages and outbuildings, with clear playback and remote viewing.", href: "/systems/home-cctv", image: "/images/revisions/residential-vigi-cctv-pair.jpg", alt: "Residential CCTV cameras installed by NOX" },
  { title: "Perimeter Protection", text: "Protection for gates, driveways, detached garages, workshops and separate buildings, planned as one connected system.", href: "/systems/perimeter-protection", image: "/images/revisions/residential-cctv-installation-engineer.jpg", alt: "NOX engineer installing residential perimeter security" },
]

const fireRoutes = [
  { title: "Fire Alarm Installation", text: "Conventional, addressable and suitable wireless systems designed around the premises and future servicing.", href: "/systems/fire-safety", image: "/images/revisions/ajax-en54-fire-control-panel.jpg", alt: "Ajax EN54 fire alarm control panel used for a commercial installation" },
  { title: "Fire Alarm Servicing", text: "Planned testing, existing-system takeovers, records, defect reporting and clear remedial quotations.", href: "/service-plans/fire-alarm-servicing", image: "/images/revisions/fire-alarm-maintenance-panel.jpg", alt: "Commercial fire alarm panel inspected during planned servicing" },
  { title: "Emergency Lighting", text: "New installations, testing, annual duration checks, failed-fitting reports and coordinated remedials.", href: "/systems/emergency-lighting", image: "/images/revisions/emergency-lighting-exit-sign.jpg", alt: "Emergency exit lighting installed at a commercial premises" },
]

const commercialRoutes = [
  { title: "Commercial CCTV", text: "Coverage, recording, evidence quality and remote access for hospitality, retail, offices, warehouses and industrial sites.", href: "/commercial/cctv", image: "/images/revisions/continue-arcade-cctv-live-view.jpg", alt: "Commercial CCTV live view installed by NOX at a Derby venue" },
  { title: "Commercial Intruder Alarms", text: "Internal and external detection designed around access, staff use, valuable areas, opening hours and monitoring requirements.", href: "/commercial/intruder-alarms", image: "/images/revisions/tan-station-ajax-keypad.jpg", alt: "NOX branded Ajax keypad installed at a commercial premises" },
  { title: "Industrial & Multi-Site Security", text: "Several buildings, yards, loading areas and operational requirements planned as one coordinated security project.", href: "/commercial/industrial-warehouse-security", image: "/images/revisions/nox-commercial-cctv-installation.jpg", alt: "NOX engineer and van during an industrial security installation" },
]

export default function HomePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Residential and commercial Fire & Security installation and servicing",
    provider: { "@type": "LocalBusiness", name: site.name },
    areaServed: ["Chesterfield", "Sheffield", "Derbyshire"],
    serviceType: ["Ajax intruder alarms", "Home CCTV", "Commercial CCTV", "Commercial fire alarms", "Emergency lighting", "Monitoring", "Maintenance", "System takeovers"]
  }

  return <>
    <JsonLd data={serviceSchema}/>
    <section className="home-hero home-hero-premium home-hero-choice">
      <div className="home-hero-bg home-hero-split">
        <img src="/images/revisions/protection-belongs-home.jpg" alt="NOX residential security installation at a Chesterfield home" />
        <img src="/images/revisions/nox-commercial-cctv-installation.jpg" alt="NOX engineer and branded van at an industrial security installation" />
      </div>
      <div className="nox-mark-watermark" aria-hidden="true"><img src="/images/revisions/nox-padlock-watermark.jpg" alt="" /></div>
      <div className="container home-hero-content">
        <div className="premium-kicker"><span>NOX Fire & Security</span><span>Chesterfield · Sheffield · Derbyshire</span></div>
        <h1>Fire and security systems designed around your home or business.</h1>
        <p className="lead">Ajax intruder alarms, professional CCTV, commercial fire alarms, emergency lighting, servicing and monitoring — designed, installed and supported by one local team.</p>
        <div className="button-row home-audience-actions home-contact-actions">
          <Link className="button button-light" href="/get-quote#quote-form">Get a Quote</Link>
          <a className="button button-outline" href={site.phoneHref}>Call</a>
          <a className="button button-outline" href={site.whatsapp}>WhatsApp</a>
        </div>
        <div className="hero-secondary-actions home-journey-links" aria-label="Choose a service route">
          <Link href="/residential">Home Security →</Link>
          <Link href="/commercial">Commercial Security →</Link>
          <Link href="/fire-compliance">Fire & Compliance →</Link>
          <Link href="/service-plans">Existing Systems →</Link>
        </div>
      </div>
    </section>

    <ReviewSummaryStrip />
    <TrustStrip variant="general" />

    <section className="section premium-client-section"><div className="container">
      <SectionHeading eyebrow="Residential Security" title="Protect the home, driveway, garage and everything around it" text="NOX designs alarms, CCTV and external protection around the property, the people using it and the areas that matter." />
      <div className="system-route-grid residential-system-grid">
        {residentialRoutes.map(item => <article className="system-route-card" key={item.title}><img src={item.image} alt={item.alt}/><div><span className="eyebrow">Residential</span><h2>{item.title}</h2><p>{item.text}</p><Link className="text-link" href={item.href}>Explore {item.title} →</Link></div></article>)}
      </div>
      <div className="button-row"><Link className="button button-dark" href="/residential">Explore Residential Security</Link><Link className="button button-outline" href="/get-quote?customer_type=Residential&enquiry_type=Installation#quote-form">Get a Home Security Quote</Link></div>
    </div></section>

    <section className="section section-alt fire-home-section"><div className="container">
      <div className="split-grid fire-home-intro"><div><SectionHeading eyebrow="Fire & Compliance" title="Installation, servicing and ongoing compliance support" text="New fire alarms, planned servicing, repairs, takeovers, emergency lighting and coordinated annual support for commercial premises."/></div><aside className="dark-panel"><h3>Discuss your fire requirements</h3><p>Tell us about the premises, existing system and work required. Risk assessments and extinguisher servicing can be coordinated through competent specialist partners where needed.</p><Link className="button button-light" href="/get-quote?customer_type=Commercial&service_category=Fire%20%26%20Compliance#quote-form">Discuss Your Fire Requirements</Link></aside></div>
      <div className="feature-grid columns-3 fire-route-grid media-route-grid">{fireRoutes.map((item, index) => <article className="feature-card media-route-card" key={item.title}><img src={item.image} alt={item.alt}/><div className="media-route-card-body"><span className="feature-number">{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.text}</p><Link className="text-link" href={item.href}>View service →</Link></div></article>)}</div>
      <div className="button-row"><Link className="button button-outline" href="/fire-compliance">Explore Fire & Compliance</Link></div>
    </div></section>

    <section className="section"><div className="container">
      <SectionHeading eyebrow="Commercial Security" title="CCTV, intruder protection and coordinated systems for working sites" text="Site-specific systems planned around operations, access, evidence requirements, several buildings and ongoing support."/>
      <div className="feature-grid columns-3 media-route-grid commercial-media-grid">{commercialRoutes.map((item, index) => <article className="feature-card media-route-card" key={item.title}><img src={item.image} alt={item.alt}/><div className="media-route-card-body"><span className="feature-number">{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.text}</p><Link className="text-link" href={item.href}>Explore service →</Link></div></article>)}</div>
      <div className="button-row"><Link className="button button-dark" href="/commercial">Explore Commercial Security</Link><Link className="button button-outline" href="/get-quote?customer_type=Commercial&enquiry_type=Installation#quote-form">Book a Commercial Site Survey</Link></div>
    </div></section>

    <section className="section project-story-section"><div className="container">
      <SectionHeading eyebrow="Selected Projects" title="Real properties, real equipment and real NOX workmanship" text="A selection of residential, hospitality, industrial and fire projects using genuine installation photography."/>
      <CaseStudyGrid slugs={["continue-arcade-commercial-cctv-derby","telesis-hitachi-fire-intruder-system","chesterfield-home-ajax-cctv-intruder"]}/>
      <div className="button-row"><Link className="button button-outline" href="/case-studies">View Fire & Security Projects</Link></div>
    </div></section>

    <section className="section section-alt"><div className="container">
      <SectionHeading eyebrow="Why NOX" title="Designed properly. Installed properly. Supported properly." text="A local, independent team combining modern technology with property-led advice, careful workmanship, clear handover and direct aftercare."/>
      <FeatureGrid columns={4} items={[
        { title: "Property-led design", text: "The building, access, routines, risks and existing equipment are understood before products are selected." },
        { title: "Careful installation", text: "Device positions, cameras, panels and cable routes are planned around performance and the finish of the property." },
        { title: "Clear handover", text: "Apps, playback, users, controls and practical next steps are explained without unnecessary jargon." },
        { title: "Long-term local support", text: "Monitoring, servicing, repairs, takeovers and future upgrades remain connected to the same local team." }
      ]}/>
    </div></section>

    <section className="section"><div className="container"><SectionHeading eyebrow="Customer reviews" title="Feedback from residential and commercial customers" text="Genuine feedback about advice, workmanship, communication and handover."/><ReviewGrid names={["Ryan Hargreaves", "Jez S"]}/><div className="button-row"><Link className="button button-outline" href="/reviews">Read Customer Reviews</Link></div></div></section>

    <ConversionPanel title="Tell us about the property, site or existing system" text="Use one clear enquiry for a new installation, servicing, monitoring, a fault or a takeover. The NOX team will guide the right next step." primaryLabel="Get a Quote" sourceLabel="homepage"/>
  </>
}
