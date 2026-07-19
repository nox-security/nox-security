import type { Metadata } from "next"
import Link from "next/link"
import { BlogGrid, CaseStudyGrid, ContactActions, ConversionPanel, FeatureGrid, JsonLd, LocalSearchLinks, ReviewGrid, ReviewSummaryStrip, SectionHeading, TrustStrip, VideoShowcase } from "@/components/marketing"
import { pageMetadata, site } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "NOX Fire & Security | Systems Designed Around Your Property",
  "Residential Ajax alarms, CCTV, commercial fire alarm installation, servicing, monitoring and compliance support across Chesterfield, Sheffield and Derbyshire.",
  "/"
)

const homeVideos = [
  { title: "Ajax intruder protection", text: "See how professional detection, app control and everyday system management come together on the Ajax platform.", youtubeId: "9ffQhBwXUDg" },
  { title: "Ajax perimeter protection", text: "See how external detection can create an earlier warning layer around driveways, boundaries and approaches.", youtubeId: "Nm0HIK8vjso" },
  { title: "Ajax fire technology", text: "Explore modern Ajax fire technology for suitable commercial properties and professionally planned systems.", youtubeId: "XZDNd3ud-ck" }
]

const keyAreas = [
  ["Chesterfield", "/areas/chesterfield"], ["Sheffield", "/areas/sheffield"], ["Dronfield", "/areas/dronfield"],
  ["Matlock", "/areas/matlock"], ["Bakewell", "/areas/bakewell"], ["Buxton", "/areas/buxton"],
  ["Hope Valley", "/areas/hope-valley"], ["Hathersage", "/areas/hathersage"]
]

const ajaxProducts = [
  { name: "MotionCam", text: "Motion detection with photo verification on compatible systems, selected around room layout, permissions and the way the property is used.", image: "/images/2Motioncam.jpg" },
  { name: "KeyPad TouchScreen", text: "A clear 5-inch control interface for arming, groups and scenarios, with compatible access by smartphone, Pass, Tag or code.", image: "/images/projects/chesterfield-home-keypad.jpg" },
  { name: "Hub 2 Plus", text: "The control centre connecting detectors, users, communication channels, app control and compatible visual-verification devices.", image: "/images/Ajax-Hub-2-Plus.webp" },
  { name: "DoorProtect", text: "Opening detection for doors and windows, positioned around real entry routes, night mode and household routines.", image: "/images/2Doorprotect.jpg" },
  { name: "Curtain Outdoor", text: "Narrow-beam external detection for selected approaches, side access and boundary routes where the survey supports it.", image: "/images/SingleCurtain.jpeg" },
  { name: "StreetSiren", text: "A visible external warning device, professionally positioned and available with NOX branding as part of a complete alarm design.", image: "/images/projects/chesterfield-home-bellbox.jpg" }
]

export default function HomePage() {
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Fire & Security system installation and servicing", provider: { "@type": "LocalBusiness", name: site.name }, areaServed: ["Chesterfield", "Sheffield", "Derbyshire"], serviceType: ["Intruder alarms", "Perimeter protection", "CCTV", "Fire alarms", "Monitoring", "Maintenance", "System takeovers"] }
  return <>
    <JsonLd data={serviceSchema}/>
    <section className="home-hero home-hero-premium">
      <div className="home-hero-bg"><img src="/images/projects/chesterfield-home-exterior.jpg" alt="Chesterfield home protected by a NOX Ajax alarm and CCTV system" /></div>
      <div className="nox-mark-watermark" aria-hidden="true"><img src="/images/nox-logo-dark.png" alt="" /></div>
      <div className="container home-hero-content">
        <div className="premium-kicker"><span>NOX Fire & Security</span><span>Chesterfield · Sheffield · Derbyshire</span></div>
        <h1>Fire & Security systems, designed around your property.</h1>
        <p className="lead">Modern Ajax security, professional CCTV, commercial fire systems and dependable aftercare for homes and businesses — designed properly, installed properly and supported properly.</p>
        <ContactActions primaryLabel="Request Your Free Security Survey" />
        <div className="hero-proof"><span>Ajax Authorised Installation Company</span><span>Premium residential protection</span><span>Commercial Fire & Security</span><span>Monitoring, servicing & compliance</span></div>
      </div>
    </section>
    <ReviewSummaryStrip />
    <TrustStrip />

    <section className="section premium-client-section"><div className="container">
      <SectionHeading eyebrow="Who we protect" title="A more considered standard for homes and businesses" text="NOX is built for customers who value proper design, clean installation and reliable ongoing support rather than a rushed, off-the-shelf package." />
      <div className="premium-client-grid">
        <article className="premium-client-card residential-card"><img src="/images/projects/chesterfield-home-exterior.jpg" alt="NOX residential Ajax intruder and CCTV installation at a Chesterfield home"/><div><span className="eyebrow">Residential security</span><h2>Security designed to belong in the property.</h2><p>Discreet Ajax alarms, professional CCTV, app control, monitoring and annual maintenance for semi-detached homes, family properties, larger houses, garages, gates, driveways and outbuildings.</p><Link className="text-link" href="/residential">Explore Residential Security →</Link></div></article>
        <article className="premium-client-card commercial-card"><img src="/images/projects/tan-station-exterior.jpg" alt="The Tan Station commercial Fire and Security project in Brimington"/><div><span className="eyebrow">Commercial & compliance</span><h2>Joined-up Fire & Security support.</h2><p>Commercial alarms, CCTV, Ajax EN54 fire systems, servicing, emergency lighting and coordinated compliance packages for operational premises and portfolios.</p><Link className="text-link" href="/commercial">Explore Commercial Systems →</Link></div></article>
      </div>
    </div></section>

    <section className="section section-alt project-story-section"><div className="container">
      <div className="home-project-intro"><SectionHeading eyebrow="Recent NOX projects" title="Real properties. Real systems. Real local workmanship." text="Commercial CCTV in Chesterfield and Retford, black CCTV and fire first-fix in Brimington, and Ajax residential security designed around a Chesterfield home."/><div className="portfolio-logo-panel"><img src="/images/projects/logo-nox-fire-security.jpg" alt="NOX Fire and Security logo"/></div></div>
      <CaseStudyGrid slugs={["bottle-and-thyme-commercial-cctv-chesterfield","tan-station-fire-security-brimington","retford-former-bank-cctv","chesterfield-home-ajax-cctv-intruder"]}/>
      <div className="button-row"><Link className="button button-outline" href="/case-studies">Explore the NOX Project Portfolio</Link></div>
    </div></section>

    <section className="section service-path-section"><div className="container">
      <SectionHeading eyebrow="New system design" title="Residential security and commercial Fire & Security — kept clear from ongoing support" text="Choose the property route first. NOX then designs the right new installation before monitoring, maintenance or a compliance package is introduced as a separate ongoing service." />
      <div className="service-path-primary">
        <article><img src="/images/projects/chesterfield-home-exterior.jpg" alt="Chesterfield home protected by a NOX Ajax alarm and CCTV system"/><div><span>Residential installations</span><h3>Ajax intruder alarms, CCTV and smart-home security</h3><p>For semi-detached homes, family properties, larger houses, renovations, garages, gates and outbuildings. The premium element is the design, installation and aftercare — not a minimum property size.</p><div className="service-path-links"><Link href="/residential">Residential system design</Link><Link href="/systems/intrusion-alarms">Ajax intruder alarms</Link><Link href="/systems/cctv">Residential CCTV</Link><Link href="/systems/smart-home-cctv">Smart Home CCTV</Link></div></div></article>
        <article><img src="/images/projects/tan-station-exterior.jpg" alt="Commercial Fire and Security project completed by NOX in Brimington"/><div><span>Commercial installations</span><h3>Fire alarms, CCTV, intruder and emergency lighting</h3><p>New system design for shops, hospitality, offices, landlords, HMOs, warehouses, industrial units, garages, yards and larger sites — with Fire installation and servicing as a central NOX route.</p><div className="service-path-links"><Link href="/commercial">Commercial system design</Link><Link href="/commercial/fire-compliance">Fire alarm installation</Link><Link href="/commercial/cctv">Commercial CCTV</Link><Link href="/commercial/intruder-alarms">Commercial intruder</Link></div></div></article>
      </div>
      <div className="service-path-support">
        <article><span>01</span><h3>Residential Service Plans</h3><p>Alarm maintenance from £225/year, monitoring from £595/year, CCTV maintenance from £225/year and the Total Security Package from £795/year.</p><Link href="/service-plans">Compare residential plans →</Link></article>
        <article><span>02</span><h3>Commercial Maintenance</h3><p>Alarm and CCTV servicing from confirmed annual prices, with monitoring, takeover inspections, repairs and phased upgrades available separately.</p><Link href="/service-plans">Compare commercial support →</Link></article>
        <article><span>03</span><h3>Fire & Compliance Packages</h3><p>Fire alarm servicing, emergency-lighting visits and agreed compliance support quoted consistently to the system, site and included services.</p><Link href="/service-plans/fire-compliance">Explore Fire compliance support →</Link></article>
      </div>
    </div></section>

    <section className="section ajax-editorial-section"><div className="container">
      <div className="ajax-editorial-grid">
        <div className="ajax-editorial-media ajax-property-media"><img src="/images/projects/chesterfield-home-cameras.jpg" alt="Black residential security cameras installed by NOX on a Chesterfield home"/></div>
        <div className="ajax-home-copy"><span className="eyebrow">Rule Your Space</span><img className="ajax-authorised-logo" src="/images/logo-ajax-authorized-installation-company-en-wh.png" alt="Ajax Authorised Installation Company"/><h2>Ajax technology selected around the home — not sold as a fixed kit</h2><p>Ajax is NOX's preferred residential intruder platform for app control, MotionCam photo verification, door and window protection, user-friendly keypads, sirens and suitable external detection. CCTV, NVR and video-entry options can be brought into the wider system where they are the right technical fit.</p><div className="button-row"><Link className="button button-light" href="/systems/intrusion-alarms">Explore Ajax Intruder Alarms</Link><Link className="button button-outline" href="/residential">View Residential System Design</Link></div></div>
      </div>
      <div className="ajax-product-rail ajax-product-rail-clean">{ajaxProducts.map(product => <article key={product.name}><div><img loading="lazy" src={product.image} alt={`Ajax ${product.name}`}/></div><h3>{product.name}</h3><p>{product.text}</p></article>)}</div>
      <div className="ajax-video-integration-panel">
        <div className="ajax-video-integration-media"><img src="/images/projects/bottle-thyme-monitor-wide.jpg" alt="Professional CCTV recording and live viewing installed by NOX in Chesterfield"/></div>
        <div><span className="eyebrow">Video, recording and entry</span><h3>Ajax video devices, NVR recording and DoorBell options — introduced only where they suit the design</h3><p>NOX can integrate Ajax cameras, compatible third-party IP cameras, network video recording and video entry into the wider security platform. Recording capacity, Wi-Fi, network condition, user permissions and the actual coverage requirement are confirmed before equipment is specified.</p><div className="button-row"><Link className="button button-outline" href="/systems/cctv">Explore CCTV Systems</Link><Link className="button button-light" href="/services/cctv-installation-chesterfield">CCTV Installation Chesterfield</Link></div></div>
      </div>
    </div></section>

    <VideoShowcase videos={homeVideos} eyebrow="Ajax technology in motion" title="See how Ajax protection works around the property" />

    <section className="section section-alt"><div className="container">
      <SectionHeading eyebrow="Why choose NOX" title="Designed properly. Installed properly. Supported properly." text="A local, independent company combining premium technology with honest advice, careful workmanship, clear handover and direct aftercare."/>
      <FeatureGrid columns={4} items={[
        { title: "Property-led design", text: "The building, access points, routines, risks and existing equipment are understood before products are selected." },
        { title: "Professional installation", text: "Devices, cameras, panels and cable routes are planned carefully, fitted properly and presented cleanly." },
        { title: "Clear handover", text: "Apps, users, playback, operating modes and practical next steps are explained without unnecessary jargon." },
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

    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Selected projects" title="More real installations across homes and commercial sites" text="Confirmed locations, equipment scopes and property types, written in the same clear, project-led style used across NOX social updates."/><CaseStudyGrid limit={8}/><div className="button-row"><Link className="button button-outline" href="/case-studies">Explore All Case Studies</Link></div></div></section>

    <section className="section"><div className="container"><SectionHeading eyebrow="Customer reviews" title="Real feedback about advice, workmanship and aftercare" text="Verified review wording from residential and commercial NOX customers."/><ReviewGrid limit={3}/><div className="button-row"><Link className="button button-outline" href="/reviews">Read More Customer Reviews</Link><a className="button button-light" href="https://g.page/r/CUdyqRh0RFeXEAE/review" target="_blank" rel="noreferrer">View Google Reviews</a></div></div></section>

    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Areas we cover" title="Local service from Chesterfield across Derbyshire and Sheffield" text="Residential and commercial support across our core area, with wider travel for suitable commercial, industrial and multi-system projects."/><div className="home-area-grid">{keyAreas.map(([name, href]) => <Link href={href} key={name}><span>{name}</span><small>View local services →</small></Link>)}</div><div className="button-row"><Link className="button button-outline" href="/areas-we-serve">See Every Area We Cover</Link></div></div></section>

    <LocalSearchLinks slugs={["security-systems-chesterfield","cctv-installation-chesterfield","ajax-alarm-installer-chesterfield","fire-alarm-installation-chesterfield","alarm-maintenance-chesterfield","commercial-fire-security-systems"]} title="Find the exact NOX service you are searching for"/>
    <section className="section"><div className="container"><SectionHeading eyebrow="Practical advice" title="Clear information before and after installation" text="Maintenance, system takeovers, CCTV planning and fire-safety support explained in plain English."/><BlogGrid limit={3}/></div></section>
    <ConversionPanel title="Request your free security survey" text="Tell us about the property and what you need. NOX will review the details, contact you directly and arrange the right survey or quotation route." />
  </>
}
