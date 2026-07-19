import type { Metadata } from "next"
import Link from "next/link"
import { BlogGrid, CaseStudyGrid, ContactActions, ConversionPanel, FeatureGrid, JsonLd, ReviewGrid, ReviewSummaryStrip, SectionHeading, TrustStrip, VideoShowcase } from "@/components/marketing"
import { pageMetadata, site } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "NOX Fire & Security | Premium Systems Designed Around Your Property",
  "Premium residential and commercial Ajax alarms, CCTV, fire alarms, servicing, monitoring and compliance support across Chesterfield, Sheffield and Derbyshire.",
  "/"
)

const solutions = [
  { title: "Intruder Alarms", text: "Ajax alarms with MotionCam, door protection, keypads, app control, sirens, monitoring and ongoing maintenance.", image: "/images/intrusion-alarms.png", alt: "Ajax intruder alarm system for a premium residential or commercial property", href: "/systems/intrusion-alarms" },
  { title: "Perimeter Protection", text: "Curtain and outdoor detection designed for driveways, side access, yards, windows, doors and outbuildings.", image: "/images/perimeter.jpg", alt: "Ajax perimeter protection detector installed outside a property", href: "/systems/perimeter-protection" },
  { title: "CCTV Systems", text: "Ajax, Hikvision ColourVu and professional CCTV planned around the views, recording and evidence detail the property requires.", image: "/images/cctv-systems.png", alt: "Professional CCTV camera for a residential or commercial property", href: "/systems/cctv" },
  { title: "Commercial Fire Systems", text: "Ajax EN54 and traditional fire alarm installation, servicing, takeovers and coordinated annual support.", image: "/images/ajax-en54-fire.webp", alt: "Ajax EN54 fire alarm equipment for a commercial property", href: "/commercial/fire-compliance" },
  { title: "Service Plans & Aftercare", text: "Monitoring, alarm maintenance, CCTV servicing, fire servicing and annual support through one local team.", image: "/images/resent-installation/6D03473F-95E6-4883-91F2-C24367A665B2.jpeg", alt: "NOX engineer working on an existing security system", href: "/service-plans" }
]

const homeVideos = [
  { title: "Ajax intruder protection", text: "See how detection, app control and system management come together on the Ajax platform.", youtubeId: "9ffQhBwXUDg" },
  { title: "Ajax perimeter protection", text: "See how external detection can create an earlier warning layer around the property.", youtubeId: "Nm0HIK8vjso" },
  { title: "Ajax fire technology", text: "Explore modern Ajax fire technology for suitable commercial and property applications.", youtubeId: "XZDNd3ud-ck" }
]

const keyAreas = [
  ["Chesterfield", "/areas/chesterfield"], ["Sheffield", "/areas/sheffield"], ["Dronfield", "/areas/dronfield"],
  ["Matlock", "/areas/matlock"], ["Bakewell", "/areas/bakewell"], ["Buxton", "/areas/buxton"],
  ["Hope Valley", "/areas/hope-valley"], ["Hathersage", "/areas/hathersage"]
]

export default function HomePage() {
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Premium Fire & Security system installation and servicing", provider: { "@type": "LocalBusiness", name: site.name }, areaServed: ["Chesterfield", "Sheffield", "Derbyshire"], serviceType: ["Intruder alarms", "Perimeter protection", "CCTV", "Fire alarms", "Monitoring", "Maintenance", "System takeovers"] }
  return <>
    <JsonLd data={serviceSchema}/>
    <section className="home-hero home-hero-premium">
      <div className="home-hero-bg"><img src="/images/hero-house.webp" alt="Premium residential property protected by NOX Fire & Security" /></div>
      <div className="nox-mark-watermark" aria-hidden="true"><img src="/images/nox-logo-dark.png" alt="" /></div>
      <div className="container home-hero-content">
        <div className="premium-kicker"><span>NOX Fire & Security</span><span>Chesterfield · Sheffield · Derbyshire</span></div>
        <h1>Premium Fire & Security systems, designed around your property.</h1>
        <p className="lead">Modern Ajax security, professional CCTV, commercial fire systems and long-term aftercare for high-value homes and businesses — designed properly, installed properly and supported properly.</p>
        <ContactActions primaryLabel="Request Your Free Security Survey" />
        <div className="hero-proof"><span>Ajax Authorised Installation Company</span><span>Premium residential</span><span>Commercial Fire & Security</span><span>Monitoring, servicing & compliance</span></div>
      </div>
    </section>
    <ReviewSummaryStrip />
    <TrustStrip />

    <section className="section premium-client-section"><div className="container">
      <SectionHeading eyebrow="Who we protect" title="A more considered standard for homes and businesses" text="NOX is built for customers who value proper design, clean installation and reliable ongoing support rather than a rushed, off-the-shelf package." />
      <div className="premium-client-grid">
        <article className="premium-client-card residential-card"><img src="/images/hero-house.webp" alt="Premium residential property security by NOX"/><div><span className="eyebrow">Premium residential</span><h2>Security that belongs in the property.</h2><p>Discreet Ajax alarms, CCTV, perimeter protection, app control, monitoring and annual maintenance for homes, garages, gates, driveways and outbuildings.</p><Link className="text-link" href="/residential">Explore Residential Security →</Link></div></article>
        <article className="premium-client-card commercial-card"><img src="/images/resent-installation/F5B46861-7E5F-416A-BD90-69C544691E7A.png" alt="NOX commercial Fire and Security team attending an industrial site"/><div><span className="eyebrow">Commercial & compliance</span><h2>Joined-up Fire & Security support.</h2><p>Commercial alarms, CCTV, Ajax EN54 fire systems, servicing, emergency lighting and coordinated compliance packages for operational premises and portfolios.</p><Link className="text-link" href="/commercial">Explore Commercial Systems →</Link></div></article>
      </div>
    </div></section>

    <section className="section section-alt"><div className="container">
      <SectionHeading eyebrow="One clear way to get started" title="Request your free security survey" text="Use one simple enquiry route for a new installation, servicing, repairs, monitoring, compliance support or a system takeover. The NOX team will review the property and guide the correct next step." />
      <div className="single-route-panel premium-route-panel">
        <div><span className="route-number">ONE ENQUIRY · EVERY NOX SERVICE</span><h2>Start with the property, not a fixed package</h2><p>Tell us whether the property is residential or commercial, where it is and what you would like help with. We will contact you directly, arrange a survey where needed and prepare the right quotation route.</p></div>
        <ContactActions primaryLabel="Request Your Free Security Survey" dark compact />
      </div>
    </div></section>

    <section className="section"><div className="container">
      <SectionHeading eyebrow="Complete Fire & Security" title="Installation, servicing and aftercare through one local team" text="NOX designs around the property first, selects the correct technology and keeps support clear after handover." />
      <div className="solution-grid solution-grid-five">{solutions.map(item => <article className="solution-card premium-solution-card" key={item.title}><img src={item.image} alt={item.alt}/><div className="solution-card-body"><h3>{item.title}</h3><p>{item.text}</p><Link className="text-link" href={item.href}>Explore {item.title} →</Link></div></article>)}</div>
    </div></section>

    <section className="section ajax-home-feature"><div className="container ajax-home-grid">
      <div className="ajax-home-copy"><span className="eyebrow">Rule Your Space</span><img className="ajax-authorised-logo" src="/images/logo-ajax-authorized-installation-company-en-wh.png" alt="Ajax Authorised Installation Company"/><h2>Ajax technology, professionally designed and installed by NOX</h2><p>Ajax is our preferred smart-security platform for premium intruder protection, MotionCam verification, external detection, CCTV integration, automation and modern fire technology. Equipment is selected after the property, risks and routines are understood.</p><div className="premium-spec-grid"><div><strong>MotionCam</strong><span>Visual context after selected alarm events</span></div><div><strong>KeyPad TouchScreen</strong><span>Modern control for homes and staff</span></div><div><strong>Curtain Outdoor</strong><span>Focused external detection zones</span></div><div><strong>EN54 Fire Hub</strong><span>Commercial fire control and indication</span></div></div><div className="button-row"><Link className="button button-light" href="/systems/intrusion-alarms">Explore Ajax Alarms</Link><Link className="button button-outline" href="/commercial/fire-compliance">Explore Ajax EN54 Fire</Link></div></div>
      <div className="ajax-home-products"><article><img src="/images/MotionCam.jpeg" alt="Ajax MotionCam detector"/><div><h3>MotionCam</h3><p>Motion detection with photo-verification capability on suitable systems.</p></div></article><article><img src="/images/SingleCurtain.jpeg" alt="Ajax Curtain Outdoor detector"/><div><h3>Curtain Outdoor</h3><p>A narrow external protection layer for selected approaches and openings.</p></div></article><article><img src="/images/EN54FireHub.jpeg" alt="Ajax EN54 Fire Hub"/><div><h3>EN54 Fire Hub</h3><p>Modern control equipment for suitable Ajax EN54 commercial fire systems.</p></div></article></div>
    </div></section>

    <VideoShowcase videos={homeVideos} eyebrow="Technology in motion" title="See Ajax alarms, perimeter protection and fire technology in action" />

    <section className="section section-alt"><div className="container">
      <SectionHeading eyebrow="Why choose NOX" title="Designed properly. Installed properly. Supported properly." text="A local, independent company combining premium technology with honest advice, careful workmanship, clear handover and direct aftercare."/>
      <FeatureGrid columns={4} items={[
        { title: "Property-led design", text: "The building, access points, routines, risks and existing equipment are understood before products are selected." },
        { title: "Premium installation", text: "Devices, cameras, panels and cable routes are planned carefully, fitted properly and presented cleanly." },
        { title: "Clear professional handover", text: "Apps, users, playback, operating modes and practical next steps are explained without unnecessary jargon." },
        { title: "Local long-term support", text: "Monitoring, servicing, fire maintenance, takeovers, repairs and future upgrades remain available through NOX." }
      ]}/>
    </div></section>

    <section className="section service-plan-showcase"><div className="container">
      <SectionHeading eyebrow="Servicing, compliance and aftercare" title="Protect the investment after installation" text="NOX maintains new systems and suitable traditional alarms, CCTV and Fire systems. Annual support keeps testing, system health, records, faults and renewal dates easier to manage." />
      <div className="service-plan-grid">
        <article><span>01</span><h3>Alarm Maintenance</h3><p>Ajax and traditional wired, wireless or hybrid systems: health checks, testing, cleaning, battery review, firmware where supported and service records.</p><Link href="/service-plans/alarm-maintenance">View Alarm Maintenance →</Link></article>
        <article><span>02</span><h3>Alarm Monitoring</h3><p>Professional alarm handling, keyholder contact, available visual verification and agreed escalation procedures.</p><Link href="/service-plans/alarm-monitoring">Explore Monitoring →</Link></article>
        <article><span>03</span><h3>CCTV Maintenance</h3><p>New and traditional CCTV: camera cleaning, recorder and hard-drive checks, playback tests, image checks and remote-viewing support.</p><Link href="/service-plans/cctv-maintenance">View CCTV Maintenance →</Link></article>
        <article className="fire-plan-emphasis"><span>04</span><h3>Fire Alarm Servicing</h3><p>Ajax EN54, conventional, addressable and suitable established fire systems with testing, records, defects and takeover support.</p><Link href="/service-plans/fire-alarm-servicing">View Fire Alarm Servicing →</Link></article>
      </div>
      <div className="service-plan-callout"><div><h3>Fire Compliance and Total Security Packages</h3><p>Coordinate agreed alarm, CCTV, Fire alarm and emergency-lighting services under a clearer annual arrangement with one local point of contact.</p></div><Link className="button button-dark" href="/service-plans">View All Service Plans</Link></div>
    </div></section>

    <section className="section section-alt"><div className="container">
      <SectionHeading eyebrow="How the process works" title="From free survey to long-term support"/>
      <FeatureGrid columns={4} items={[
        { title: "Request your survey", text: "Tell us about the property and the system or service you need using one simple form, phone call or WhatsApp." },
        { title: "Survey and quotation", text: "We assess the property where needed, then set out equipment, installation and optional support clearly." },
        { title: "Installation and handover", text: "The system is installed, tested and explained properly before the project is closed." },
        { title: "Aftercare and renewal", text: "Monitoring, annual maintenance, Fire servicing or compliance support can then be added where useful." }
      ]}/>
    </div></section>

    <section className="section"><div className="container"><SectionHeading eyebrow="Selected projects" title="Real NOX installations, presented properly" text="Premium residential, commercial and industrial work using confirmed locations and system scopes."/><CaseStudyGrid limit={6}/><div className="button-row"><Link className="button button-outline" href="/case-studies">Explore All Case Studies</Link></div></div></section>

    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Customer reviews" title="Real feedback about advice, workmanship and aftercare" text="Verified review wording from residential and commercial NOX customers."/><ReviewGrid limit={3}/><div className="button-row"><Link className="button button-outline" href="/reviews">Read More Customer Reviews</Link><a className="button button-light" href="https://g.page/r/CUdyqRh0RFeXEAE/review" target="_blank" rel="noreferrer">View Google Reviews</a></div></div></section>

    <section className="section"><div className="container"><SectionHeading eyebrow="Areas we cover" title="Local service from Chesterfield across Derbyshire and Sheffield" text="Residential and commercial support across our core area, with wider travel for suitable commercial, industrial and multi-system projects."/><div className="home-area-grid">{keyAreas.map(([name, href]) => <Link href={href} key={name}><span>{name}</span><small>View local services →</small></Link>)}</div><div className="button-row"><Link className="button button-outline" href="/areas-we-serve">See Every Area We Cover</Link></div></div></section>

    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Advice and guides" title="Useful information before and after installation" text="Practical guidance on Ajax alarms, CCTV planning, Fire alarm servicing, maintenance, monitoring and system takeovers."/><BlogGrid limit={3}/><div className="button-row"><Link className="button button-outline" href="/blog">View All Guides</Link></div></div></section>
    <ConversionPanel title="Request your free security survey" text="Tell us about the property and what you need. NOX will review the details, contact you directly and arrange the right survey or quotation route." />
  </>
}
