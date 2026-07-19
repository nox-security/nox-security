import type { Metadata } from "next"
import Link from "next/link"
import { BlogGrid, CaseStudyGrid, ContactActions, ConversionPanel, FeatureGrid, JsonLd, ReviewGrid, ReviewSummaryStrip, SectionHeading, TrustStrip, VideoShowcase } from "@/components/marketing"
import { pageMetadata, site } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Fire & Security Systems Designed Around Your Property",
  "Professional Ajax alarms, CCTV, fire alarms, monitoring, servicing and system takeovers for homes and businesses across Chesterfield, Sheffield and Derbyshire.",
  "/"
)

const solutions = [
  { title: "Intruder Alarms", text: "Ajax alarms with MotionCam, door protection, keypads, app control, sirens, monitoring and ongoing maintenance.", image: "/images/intrusion-alarms.png", alt: "Ajax intruder alarm system installed for a property in Chesterfield", href: "/systems/intrusion-alarms" },
  { title: "Perimeter Protection", text: "Curtain and outdoor detection for driveways, side access, yards, windows, doors and outbuildings.", image: "/images/perimeter.jpg", alt: "Ajax perimeter protection detector at a property", href: "/systems/perimeter-protection" },
  { title: "CCTV Systems", text: "Ajax, Hikvision ColourVu and professional CCTV planned around the views, recording and detail you need.", image: "/images/cctv-systems.png", alt: "Professional CCTV camera for a home or business in Derbyshire", href: "/systems/cctv" },
  { title: "Fire & Life Safety", text: "Ajax EN54 and traditional fire alarm installation, servicing, takeovers and coordinated compliance support.", image: "/images/Ajax-EN54-Fire .webp", alt: "Ajax EN54 fire alarm equipment for a commercial property", href: "/systems/fire-safety" },
  { title: "Service Plans & Aftercare", text: "Monitoring, alarm maintenance, CCTV servicing, fire servicing and annual support through one local team.", image: "/images/maintenance.png", alt: "Security and fire system servicing by NOX", href: "/service-plans" }
]

const homeVideos = [
  { title: "Ajax intruder protection", text: "See how detection, app control and system management come together on the Ajax platform.", youtubeId: "9ffQhBwXUDg" },
  { title: "Ajax perimeter protection", text: "See how external detection can create an earlier warning layer around the property.", youtubeId: "Nm0HIK8vjso" },
  { title: "Ajax fire protection", text: "Explore modern Ajax fire technology for suitable commercial and property applications.", youtubeId: "XZDNd3ud-ck" }
]

export default function HomePage() {
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Fire & Security system installation and servicing", provider: { "@type": "LocalBusiness", name: site.name }, areaServed: ["Chesterfield", "Sheffield", "Derbyshire"], serviceType: ["Intruder alarms", "Perimeter protection", "CCTV", "Fire alarms", "Monitoring", "Maintenance", "System takeovers"] }
  return <>
    <JsonLd data={serviceSchema}/>
    <section className="home-hero">
      <div className="home-hero-bg"><img src="/images/hero-house.webp" alt="Modern home protected by NOX Fire & Security in Derbyshire" /></div>
      <div className="container home-hero-content">
        <span className="eyebrow">Chesterfield · Sheffield · Derbyshire</span>
        <h1>Professional Fire & Security systems designed around your property.</h1>
        <p className="lead">Ajax intruder alarms, CCTV, Fire safety and long-term aftercare for homes and businesses — designed properly, installed properly and supported properly.</p>
        <ContactActions primaryLabel="Request Your Free Security Survey" />
        <div className="hero-proof"><span>Ajax Authorised Installation Company</span><span>Residential & commercial</span><span>Monitoring & maintenance</span><span>Local, direct aftercare</span></div>
      </div>
    </section>
    <ReviewSummaryStrip />
    <TrustStrip />

    <section className="section"><div className="container">
      <SectionHeading eyebrow="One clear way to get started" title="Request your security survey and let NOX guide the next step" text="Use one simple enquiry route for a new installation, servicing, repairs, monitoring or a system takeover. Tell us what you need and we will contact you directly." />
      <div className="single-route-panel">
        <div><span className="route-number">ONE ENQUIRY · EVERY SERVICE</span><h2>Start with the property, not a fixed package</h2><p>Choose residential or commercial, add the service you need and give us the basic property details. We will confirm whether we can prepare pricing or arrange a site survey.</p></div>
        <ContactActions primaryLabel="Request Your Security Survey" dark compact />
      </div>
    </div></section>

    <section className="section section-alt"><div className="container">
      <SectionHeading eyebrow="Complete Fire & Security" title="Installation, servicing and aftercare through one local team" text="NOX designs around the property first, selects the right equipment and keeps support clear after handover." />
      <div className="solution-grid solution-grid-five">{solutions.map(item => <article className="solution-card" key={item.title}><img src={item.image} alt={item.alt}/><div className="solution-card-body"><h3>{item.title}</h3><p>{item.text}</p><Link className="text-link" href={item.href}>Explore {item.title} →</Link></div></article>)}</div>
    </div></section>

    <section className="section ajax-home-feature"><div className="container ajax-home-grid">
      <div className="ajax-home-copy"><span className="eyebrow">Rule Your Space</span><img className="ajax-authorised-logo" src="/images/logo-ajax-authorized-installation-company-en-wh.png" alt="Ajax Authorised Installation Company"/><h2>Ajax smart security, professionally designed and installed by NOX</h2><p>Ajax is our preferred smart security platform for intruder alarms, MotionCam verification, external detection, selected CCTV, automation and modern fire technology. The system still starts with the property and the customer requirement.</p><div className="sector-tags"><span>MotionCam</span><span>KeyPad TouchScreen</span><span>Curtain Outdoor</span><span>StreetSiren</span><span>Ajax CCTV</span><span>EN54 Fire Hub</span></div><div className="button-row"><Link className="button button-light" href="/systems/intrusion-alarms">Explore Ajax Alarms</Link><Link className="button button-outline" href="/systems/fire-safety">Explore Ajax EN54 Fire</Link></div></div>
      <div className="ajax-home-products"><article><img src="/images/MotionCam.jpeg" alt="Ajax MotionCam detector"/><div><h3>MotionCam</h3><p>Motion detection with photo verification capabilities on suitable systems.</p></div></article><article><img src="/images/SingleCurtain.jpeg" alt="Ajax Curtain Outdoor detector"/><div><h3>Curtain Outdoor</h3><p>A narrow external detection layer for selected approaches and openings.</p></div></article><article><img src="/images/EN54FireHub.jpeg" alt="Ajax EN54 Fire Hub"/><div><h3>EN54 Fire Hub</h3><p>Modern control equipment for suitable Ajax EN54 commercial fire systems.</p></div></article></div>
    </div></section>

    <VideoShowcase videos={homeVideos} eyebrow="Watch the systems" title="See Ajax alarms, perimeter protection and fire technology in action" />

    <section className="section"><div className="container">
      <SectionHeading eyebrow="Homes and businesses" title="One professional standard, adapted subtly to the property" text="Home security should be simple to live with. Commercial Fire & Security needs to support people, premises, records and ongoing responsibilities." />
      <div className="audience-split-subtle">
        <article><span className="eyebrow">Residential</span><h2>Protection that fits around home life.</h2><p>Intruder alarms, CCTV, garages, outbuildings, perimeter protection, app control, monitoring and annual maintenance.</p><Link className="text-link" href="/residential">Explore residential systems →</Link></article>
        <article><span className="eyebrow">Commercial</span><h2>Joined-up systems and ongoing support.</h2><p>Alarm, CCTV, Fire alarms, emergency lighting, servicing, compliance support and larger multi-system sites.</p><Link className="text-link" href="/commercial">Explore commercial systems →</Link></article>
      </div>
    </div></section>

    <section className="section section-alt"><div className="container">
      <SectionHeading eyebrow="Why choose NOX" title="Designed properly. Installed properly. Supported properly." text="A local, independent approach with honest advice, clean workmanship, clear handover and direct support from the people responsible for the project."/>
      <FeatureGrid columns={4} items={[
        { title: "Designed around the property", text: "The building, access points, routines, risks and existing equipment are understood before products are selected." },
        { title: "Professional installation", text: "Devices, cameras and cable routes are planned carefully, fitted properly and the work area is left tidy." },
        { title: "Clear handover", text: "Apps, users, playback, operating modes and practical next steps are explained without unnecessary jargon." },
        { title: "Local aftercare", text: "Monitoring, servicing, fire maintenance, takeovers, repairs and future upgrades remain available through NOX." }
      ]}/>
    </div></section>

    <section className="section service-plan-showcase"><div className="container">
      <SectionHeading eyebrow="Servicing, maintenance and aftercare" title="Protection does not end when the installation is finished" text="NOX maintains new systems and suitable traditional alarms, CCTV and Fire systems. Annual support keeps testing, system health, records, faults and renewal dates easier to manage." />
      <div className="service-plan-grid">
        <article><span>01</span><h3>Alarm Maintenance</h3><p>Ajax and traditional wired, wireless or hybrid systems: health checks, testing, cleaning, battery review, firmware where supported and service records.</p><Link href="/service-plans/alarm-maintenance">View alarm maintenance →</Link></article>
        <article><span>02</span><h3>Alarm Monitoring</h3><p>Professional alarm handling, keyholder contact, available visual verification and agreed escalation procedures.</p><Link href="/service-plans/alarm-monitoring">Explore monitoring →</Link></article>
        <article><span>03</span><h3>CCTV Maintenance</h3><p>New and traditional CCTV: camera cleaning, recorder and hard-drive checks, playback tests, image checks and remote-viewing support.</p><Link href="/service-plans/cctv-maintenance">View CCTV maintenance →</Link></article>
        <article className="fire-plan-emphasis"><span>04</span><h3>Fire Alarm Servicing</h3><p>Ajax EN54, conventional, addressable and suitable established fire systems with testing, records, defects and takeover support.</p><Link href="/service-plans/fire-alarm-servicing">View fire alarm servicing →</Link></article>
      </div>
      <div className="service-plan-callout"><div><h3>Fire Compliance and Total Security Packages</h3><p>Coordinate agreed alarm, CCTV, Fire alarm and emergency-lighting services under a clearer annual arrangement with one local point of contact.</p></div><Link className="button button-light" href="/service-plans">View All Service Plans</Link></div>
    </div></section>

    <section className="section section-alt"><div className="container">
      <SectionHeading eyebrow="How the process works" title="From first enquiry to long-term support"/>
      <FeatureGrid columns={4} items={[
        { title: "Request your survey", text: "Tell us about the property and the system or service you need using one simple form, phone call or WhatsApp." },
        { title: "Survey and quotation", text: "We assess the property where needed, then set out equipment, installation and optional support clearly." },
        { title: "Installation and handover", text: "The system is installed, tested and explained properly before the project is closed." },
        { title: "Aftercare and renewal", text: "Monitoring, annual maintenance, Fire servicing or compliance support can then be added where useful." }
      ]}/>
    </div></section>

    <section className="section"><div className="container"><SectionHeading eyebrow="Recent work" title="Real NOX installations across the region" text="Residential and commercial project examples using confirmed locations and system scopes."/><CaseStudyGrid limit={3}/><div className="button-row"><Link className="button button-outline" href="/case-studies">Explore All Case Studies</Link></div></div></section>

    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Customer reviews" title="Real feedback about advice, workmanship and aftercare" text="Verified review wording from NOX customers, including residential and commercial installations."/><ReviewGrid limit={3}/><div className="button-row"><Link className="button button-outline" href="/reviews">Read More Customer Reviews</Link><a className="button button-light" href="https://g.page/r/CUdyqRh0RFeXEAE/review" target="_blank" rel="noreferrer">View Google Reviews</a></div></div></section>

    <section className="section"><div className="container"><SectionHeading eyebrow="Advice and guides" title="Helpful information before and after installation" text="Practical guidance on Ajax alarms, CCTV planning, Fire alarm servicing, maintenance, monitoring and system takeovers."/><BlogGrid limit={3}/><div className="button-row"><Link className="button button-outline" href="/blog">View All Guides</Link></div></div></section>

    <section className="section section-alt"><div className="container split-grid"><div><SectionHeading eyebrow="Local coverage" title="Based in Chesterfield. Working across Sheffield, Derbyshire and surrounding areas." text="Core coverage includes Chesterfield, Sheffield, Dronfield, Matlock, Bakewell, Buxton and surrounding towns and villages. NOX also travels further for commercial and larger projects."/><Link className="button button-outline" href="/areas-we-serve">See All Areas We Cover</Link></div><aside className="dark-panel"><h3>Local Fire & Security support</h3><div className="related-links"><Link href="/areas/chesterfield">Security systems Chesterfield →</Link><Link href="/areas/sheffield">CCTV and alarms Sheffield →</Link><Link href="/areas/derbyshire">Fire & Security Derbyshire →</Link><Link href="/commercial/fire-compliance">Commercial Fire support →</Link></div></aside></div></section>
    <ConversionPanel />
  </>
}
