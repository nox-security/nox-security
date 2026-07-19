import type { Metadata } from "next"
import Link from "next/link"
import { BlogGrid, CaseStudyGrid, ContactActions, ConversionPanel, FeatureGrid, JsonLd, ReviewGrid, ReviewSummaryStrip, SectionHeading, TrustStrip, VideoShowcase } from "@/components/marketing"
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
  { name: "MotionCam", text: "Motion detection with photo verification capability for suitable homes, businesses and monitored systems.", image: "/images/MotionCam.jpeg" },
  { name: "Curtain Outdoor", text: "Focused detection for windows, passages, side access and selected external approaches.", image: "/images/SingleCurtain.jpeg" },
  { name: "DualCurtain Outdoor", text: "Two-direction perimeter detection for longer façades, boundaries and access routes.", image: "/images/DualCurtain.jpeg" },
  { name: "KeyPad TouchScreen", text: "A modern interface for users, groups, arming modes and clear on-site system control.", image: "/images/KeypadPlus.jpeg" },
  { name: "StreetSiren", text: "Visible and audible external warning, positioned as part of the wider security design.", image: "/images/StreetSiren.jpeg" },
  { name: "Ajax DoorBell & NVR", text: "Video entry, Ajax cameras and recording brought into one connected environment where suitable.", image: "/images/AjaxDoorbell.jpeg" }
]

export default function HomePage() {
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Fire & Security system installation and servicing", provider: { "@type": "LocalBusiness", name: site.name }, areaServed: ["Chesterfield", "Sheffield", "Derbyshire"], serviceType: ["Intruder alarms", "Perimeter protection", "CCTV", "Fire alarms", "Monitoring", "Maintenance", "System takeovers"] }
  return <>
    <JsonLd data={serviceSchema}/>
    <section className="home-hero home-hero-premium">
      <div className="home-hero-bg"><img src="/images/hero-house.webp" alt="Residential property protected by NOX Fire & Security" /></div>
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
        <article className="premium-client-card residential-card"><img src="/images/resent-installation/B17CAA16-7E26-4342-BD6F-B777359E2BEB.png" alt="NOX residential security installation at a home in Sheffield"/><div><span className="eyebrow">Premium residential</span><h2>Security designed to belong in the property.</h2><p>Discreet Ajax alarms, CCTV, perimeter protection, app control, monitoring and annual maintenance for homes, garages, gates, driveways and outbuildings.</p><Link className="text-link" href="/residential">Explore Residential Security →</Link></div></article>
        <article className="premium-client-card commercial-card"><img src="/images/resent-installation/F5B46861-7E5F-416A-BD90-69C544691E7A.png" alt="NOX commercial Fire and Security team attending an industrial site"/><div><span className="eyebrow">Commercial & compliance</span><h2>Joined-up Fire & Security support.</h2><p>Commercial alarms, CCTV, Ajax EN54 fire systems, servicing, emergency lighting and coordinated compliance packages for operational premises and portfolios.</p><Link className="text-link" href="/commercial">Explore Commercial Systems →</Link></div></article>
      </div>
    </div></section>

    <section className="section section-alt project-story-section"><div className="container">
      <SectionHeading eyebrow="Real NOX installations" title="Designed around the site. Delivered by the same local team." text="Selected residential, commercial and industrial projects across Chesterfield, Sheffield and Derbyshire, showing how each scope develops around the property rather than a fixed product bundle." />
      <div className="project-story-grid project-story-grid-four">
        <article><img src="/images/resent-installation/5076E57A-3580-4C83-A1EB-090B7AF05D14.png" alt="Ajax 8MP CCTV camera installed at a Chesterfield residential property"/><div><span>Chesterfield · Residential security</span><h3>Five Ajax 8MP cameras with intruder protection</h3><p>A joined-up home-security design combining Ajax CCTV and intruder protection around the property, driveway and everyday routine.</p><Link href="/case-studies#project-chesterfield-residential-ajax">View the project →</Link></div></article>
        <article><img src="/images/resent-installation/F5B46861-7E5F-416A-BD90-69C544691E7A.png" alt="NOX van at a Buxton industrial CCTV and intruder alarm project"/><div><span>Buxton · Industrial Fire & Security</span><h3>Ajax alarm and nine-camera CCTV system</h3><p>One connected commercial installation combining Ajax intruder protection with nine professionally positioned CCTV cameras.</p><Link href="/case-studies#project-buxton-industrial-security">View the project →</Link></div></article>
        <article><img src="/images/resent-installation/B563DA1D-D64B-4DF3-8058-BC6E01154EC3.png" alt="NOX external Ajax siren installed for perimeter protection in Dronfield"/><div><span>Dronfield · Perimeter protection</span><h3>An earlier warning layer around a timber site</h3><p>External Ajax detection and sirens protecting key approaches before movement reached the main building.</p><Link href="/case-studies#project-dronfield-timber-perimeter">View the project →</Link></div></article>
        <article><img src="/images/resent-installation/5565AAD0-9F37-4C18-9E4A-1147A4389378.png" alt="8MP AI turret CCTV camera installed at a Chesterfield scrapyard"/><div><span>Chesterfield · Commercial CCTV</span><h3>Thirteen 8MP AI turret cameras across a working yard</h3><p>A larger commercial CCTV installation planned around vehicle routes, operational areas and the wider scrapyard site.</p><Link href="/case-studies#project-chesterfield-scrapyard-cctv">View the project →</Link></div></article>
      </div>
    </div></section>

    <section className="section service-path-section"><div className="container">
      <SectionHeading eyebrow="Fire & Security through one local team" title="Start with the property, then follow the right route" text="Residential protection and commercial Fire & Security are the two main routes. Monitoring, maintenance and compliance support follow naturally from the system and the customer requirement." />
      <div className="service-path-primary">
        <article><img src="/images/House-Full-HD-1024x602.webp" alt="Ajax residential alarm and app-control technology"/><div><span>Residential</span><h3>Ajax alarms, perimeter protection and CCTV</h3><p>Smart, discreet protection for homes, garages, driveways and outbuildings, with MotionCam, Curtain Outdoor, app control, video and optional professional monitoring.</p><div className="service-path-links"><Link href="/systems/intrusion-alarms">Intruder alarms</Link><Link href="/systems/perimeter-protection">Perimeter protection</Link><Link href="/systems/cctv">Residential CCTV</Link></div></div></article>
        <article><img src="/images/ajax-en54-fire.webp" alt="Ajax EN54 commercial fire alarm system"/><div><span>Commercial</span><h3>Fire alarms, CCTV, intruder and compliance support</h3><p>Installation, servicing and coordinated annual support for shops, hospitality, offices, warehouses, industrial units, landlords and larger sites.</p><div className="service-path-links"><Link href="/commercial/fire-compliance">Commercial fire systems</Link><Link href="/commercial/cctv">Commercial CCTV</Link><Link href="/commercial">Commercial overview</Link></div></div></article>
      </div>
      <div className="service-path-support">
        <article><span>01</span><h3>Professional Monitoring</h3><p>Alarm handling, keyholder contact and visual or image verification where the selected system and service support it.</p><Link href="/service-plans/alarm-monitoring">Explore monitoring →</Link></article>
        <article><span>02</span><h3>Maintenance & Takeovers</h3><p>Annual servicing for new systems and suitable traditional alarms, CCTV and fire systems, plus fault review and phased upgrades.</p><Link href="/service-plans">Explore servicing →</Link></article>
        <article><span>03</span><h3>Fire Compliance Packages</h3><p>Coordinate fire alarm servicing, emergency lighting and agreed compliance support under one clearer annual arrangement.</p><Link href="/service-plans/fire-compliance">Explore compliance support →</Link></article>
      </div>
    </div></section>

    <section className="section ajax-editorial-section"><div className="container">
      <div className="ajax-editorial-grid">
        <div className="ajax-editorial-media ajax-property-media"><img src="/images/House-Full-HD-1024x602.webp" alt="Ajax smart security system designed around a residential property"/></div>
        <div className="ajax-home-copy"><span className="eyebrow">Rule Your Space</span><img className="ajax-authorised-logo" src="/images/logo-ajax-authorized-installation-company-en-wh.png" alt="Ajax Authorised Installation Company"/><h2>Ajax technology, designed into the property rather than added as a package</h2><p>Ajax is our preferred smart-security platform for premium intruder protection, photo verification, external detection, CCTV, video entry and suitable commercial fire systems. NOX selects the equipment after the property, risks, routines and required response have been understood.</p><div className="button-row"><Link className="button button-light" href="/systems/intrusion-alarms">Explore Ajax Alarms</Link><Link className="button button-outline" href="/systems/perimeter-protection">Explore Perimeter Protection</Link></div></div>
      </div>
      <div className="ajax-product-rail">{ajaxProducts.map(product => <article key={product.name}><div><img src={product.image} alt={`Ajax ${product.name}`}/></div><h3>{product.name}</h3><p>{product.text}</p></article>)}</div>
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

    <section className="section"><div className="container"><SectionHeading eyebrow="Practical advice" title="Clear information before and after installation" text="Maintenance, system takeovers, CCTV planning and fire-safety support explained in plain English."/><BlogGrid limit={3}/></div></section>
    <ConversionPanel title="Request your free security survey" text="Tell us about the property and what you need. NOX will review the details, contact you directly and arrange the right survey or quotation route." />
  </>
}
