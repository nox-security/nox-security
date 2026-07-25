import type { Metadata } from "next"
import Link from "next/link"
import { CaseStudyGrid, ConversionPanel, FeatureGrid, JsonLd, ReviewGrid, ReviewSummaryStrip, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata, site } from "@/lib/site"
import { serviceSchema, webPageSchema } from "@/lib/schema"

export const metadata: Metadata = pageMetadata(
  "CCTV, Fire Alarm & Security Systems | Derbyshire & South Yorkshire",
  "CCTV, fire alarm and intruder alarm installation and servicing across Chesterfield, Sheffield, Derbyshire and South Yorkshire for homes and businesses.",
  "/",
  { image: "/images/image-refresh/homepage-hero-cameras.jpg", imageAlt: "NOX CCTV camera range product hero image" },
)

const residentialRoutes = [
  { title: "Home CCTV", text: "Recorder-based CCTV for driveways, doors, gardens, garages and outbuildings, with clear playback and remote viewing.", href: "/systems/home-cctv", image: "/images/image-refresh/home-cctv-live-view.webp", alt: "Residential CCTV live view showing full-property coverage" },
  { title: "Ajax Intruder Alarms", text: "MotionCam, door protection, keypads, sirens, app control and external detection selected around the home.", href: "/systems/intrusion-alarms", image: "/images/image-refresh/residential-nox-siren.webp", alt: "NOX branded Ajax external siren for residential intruder protection" },
  { title: "Perimeter Protection", text: "Protection for gates, driveways, detached garages, workshops and separate buildings, planned as one connected system.", href: "/systems/perimeter-protection", image: "/images/image-refresh/home-perimeter-motioncam.webp", alt: "Ajax outdoor MotionCam protecting a residential garden and side access" },
  { title: "Smart Home Security", text: "App-led cameras, video doorbells, floodlight cameras and subscription-free options designed around convenient everyday use.", href: "/systems/smart-home-cctv", image: "/images/image-refresh/smart-home-eufy-installed.webp", alt: "Eufy dual-lens smart security camera installed at a home" },
]

const fireRoutes = [
  { title: "Fire Alarm Installation", text: "Conventional, addressable and suitable wireless systems designed around the premises and future servicing.", href: "/systems/fire-safety", image: "/images/image-refresh/en54-fire-hub.webp", alt: "Ajax EN54 fire alarm control panel used for a commercial installation" },
  { title: "Fire Alarm Servicing", text: "Planned testing, existing-system takeovers, records, defect reporting and clear remedial quotations.", href: "/service-plans/fire-alarm-servicing", image: "/images/image-refresh/fire-system-takeover-panel.webp", alt: "Commercial fire alarm panel inspected during planned servicing" },
  { title: "Emergency Lighting", text: "New installations, testing, annual duration checks, failed-fitting reports and coordinated remedials.", href: "/systems/emergency-lighting", image: "/images/image-refresh/emergency-lighting-modern.webp", alt: "Emergency exit lighting installed at a commercial premises" },
]

const commercialRoutes = [
  { title: "Commercial CCTV", text: "Coverage, recording, evidence quality and remote access for hospitality, retail, offices, warehouses and industrial sites.", href: "/commercial/cctv", image: "/images/image-refresh/commercial-cctv-arcade-monitor.webp", alt: "Commercial CCTV live view installed by NOX at a Derby venue" },
  { title: "Commercial Intruder Alarms", text: "Internal and external detection designed around access, staff use, valuable areas, opening hours and monitoring requirements.", href: "/commercial/intruder-alarms", image: "/images/revisions/tan-station-ajax-keypad.jpg", alt: "NOX branded Ajax keypad installed at a commercial premises" },
  { title: "Industrial & Multi-Site Security", text: "Several buildings, yards, loading areas and operational requirements planned as one coordinated security project.", href: "/commercial/industrial-warehouse-security", image: "/images/revisions/nox-commercial-cctv-installation.jpg", alt: "NOX engineer and van during an industrial security installation" },
]

export default function HomePage() {
  const serviceStructuredData = serviceSchema({
    name: "CCTV, fire alarm and intruder alarm installation and servicing",
    description: "Professional CCTV, fire alarm, intruder alarm and emergency-lighting services for homes and businesses across Chesterfield, Sheffield, Derbyshire and South Yorkshire.",
    path: "/",
    serviceType: ["CCTV installation", "Fire alarm installation and servicing", "Intruder alarm installation", "Emergency lighting", "Monitoring and maintenance"],
    image: "/images/image-refresh/homepage-hero-cameras.jpg",
  })
  const homepageStructuredData = webPageSchema({
    name: "NOX Fire & Security",
    description: "CCTV, fire alarm, intruder alarm and emergency-lighting installation and servicing across the NOX service area.",
    path: "/",
    image: "/images/image-refresh/homepage-hero-cameras.jpg",
  })

  return <>
    <JsonLd data={serviceStructuredData}/><JsonLd data={homepageStructuredData}/>
    <section className="home-hero home-hero-premium home-hero-choice">
      <div className="home-hero-bg home-hero-single home-hero-camera">
        <img src="/images/image-refresh/homepage-hero-cameras.jpg" alt="NOX CCTV camera range displayed as the homepage background hero image" />
      </div>
      <div className="nox-mark-watermark" aria-hidden="true"><img src="/images/revisions/nox-padlock-watermark.jpg" alt="" /></div>
      <div className="container home-hero-content">
        <div className="premium-kicker"><span>NOX Fire & Security</span><span>Chesterfield · Sheffield · Derbyshire</span></div>
        <h1>Fire Alarm, CCTV &amp; Intruder Systems</h1>
        <p className="lead">Professional CCTV, Fire Alarms and Intruder Systems designed, installed and maintained for homes and businesses across Chesterfield, Sheffield, Derbyshire and South Yorkshire.</p>
        <div className="button-row home-audience-actions home-contact-actions">
          <Link className="button button-light" href="/get-quote#quote-form">Get a Quote</Link>
          <a className="button button-outline" href={site.phoneHref}>Call</a>
          <a className="button button-outline" href={site.whatsapp}>WhatsApp</a>
        </div>
        <div className="hero-secondary-actions home-journey-links" aria-label="Choose a service route">
          <Link href="/systems/home-cctv">Home CCTV →</Link>
          <Link href="/fire-compliance">Fire Alarm Systems →</Link>
          <Link href="/systems/intrusion-alarms">Intruder Alarms →</Link>
          <Link href="/service-plans">Servicing &amp; Monitoring →</Link>
        </div>
      </div>
    </section>

    <ReviewSummaryStrip />
    <TrustStrip variant="general" />

    <section className="section premium-client-section"><div className="container">
      <SectionHeading eyebrow="Residential CCTV & Security" title="Professional CCTV, Ajax alarms and external protection for the property" text="NOX starts with the views, access points and external areas that matter, then recommends the right combination of CCTV, intruder detection and perimeter protection." />
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
      <SectionHeading eyebrow="Commercial CCTV & Security" title="CCTV, intruder protection and coordinated systems for working sites" text="Commercial CCTV is planned around evidence quality, operations, access, several buildings and ongoing support, with intruder protection added where the site requires it."/>
      <div className="feature-grid columns-3 media-route-grid commercial-media-grid">{commercialRoutes.map((item, index) => <article className="feature-card media-route-card" key={item.title}><img src={item.image} alt={item.alt}/><div className="media-route-card-body"><span className="feature-number">{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.text}</p><Link className="text-link" href={item.href}>Explore service →</Link></div></article>)}</div>
      <div className="button-row"><Link className="button button-dark" href="/commercial">Explore Commercial Security</Link><Link className="button button-outline" href="/get-quote?customer_type=Commercial&enquiry_type=Installation#quote-form">Book a Site Survey</Link></div>
    </div></section>

    <section className="section project-story-section"><div className="container">
      <SectionHeading eyebrow="Selected Projects" title="Real properties, real equipment and real NOX workmanship" text="A selection of residential, hospitality, industrial and fire projects using genuine installation photography."/>
      <CaseStudyGrid slugs={["continue-arcade-commercial-cctv-derby","telesis-hitachi-fire-intruder-system","chesterfield-home-ajax-cctv-intruder"]}/>
      <div className="button-row"><Link className="button button-outline" href="/case-studies">View Fire & Security Projects</Link></div>
    </div></section>

    <section className="section section-alt"><div className="container">
      <SectionHeading eyebrow="Why NOX" title="Designed properly. Installed properly. Supported properly." text="NOX is a founder-led local Fire & Security company. The advice, quotation, installation standard and ongoing support remain connected, so customers know who is accountable for the finished system."/>
      <FeatureGrid columns={3} items={[
        { title: "Property before products", text: "Entrances, routines, risks, appearance, existing equipment and future support are understood before the final device list is selected." },
        { title: "A quotation with reasons", text: "Important cameras, detectors, panels and service options are explained around the job they need to do rather than hidden inside a fixed package." },
        { title: "Careful installation finish", text: "Positions, cable routes, equipment colour, communication range and access for future maintenance are considered as part of the finished property." },
        { title: "Usable handover", text: "Apps, playback, users, operating modes, records and practical limitations are explained clearly before the project is signed off." },
        { title: "One team after installation", text: "Monitoring, servicing, repairs, takeovers and future upgrades stay connected to the same local business instead of disappearing into separate departments." },
        { title: "Real evidence, not stock claims", text: "Genuine project photography, detailed case studies and verified customer reviews show the type of work NOX has actually delivered." }
      ]}/>
      <div className="button-row"><Link className="button button-dark" href="/about-us">Meet NOX</Link><Link className="button button-outline" href="/case-studies">View Real Projects</Link></div>
    </div></section>

    <section className="section"><div className="container"><SectionHeading eyebrow="Customer reviews" title="Feedback from residential and commercial customers" text="Genuine feedback about advice, workmanship, communication and handover."/><ReviewGrid names={["Ryan Hargreaves", "Rory Stirland", "Jez S"]}/><div className="button-row"><Link className="button button-outline" href="/reviews">Read Customer Reviews</Link></div></div></section>

    <ConversionPanel title="Tell us about the property, site or existing system" text="Use one clear enquiry for a new installation, servicing, monitoring, a fault or a takeover. The NOX team will guide the right next step." primaryLabel="Get a Quote" sourceLabel="homepage"/>
  </>
}
