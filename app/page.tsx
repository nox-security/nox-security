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
  { title: "Intruder Alarms", text: "Ajax alarms with MotionCam, door protection, touch-screen control, app access, sirens and optional professional monitoring.", image: "/images/editorial/home-intruder.jpg", alt: "Premium Ajax intruder alarm equipment selected by NOX", href: "/systems/intrusion-alarms" },
  { title: "Perimeter Protection", text: "Curtain, DualCurtain and outdoor detection planned around driveways, side access, gates, yards, windows and outbuildings.", image: "/images/editorial/home-perimeter.jpg", alt: "Ajax perimeter protection and a real NOX outdoor installation", href: "/systems/perimeter-protection" },
  { title: "CCTV Systems", text: "Ajax, Hikvision ColourVu and professional CCTV planned around useful views, recording, remote access and evidence detail.", image: "/images/cctv-systems-image.png", alt: "Professional CCTV system for a premium home or commercial property", href: "/systems/cctv" },
  { title: "Commercial Fire Systems", text: "Ajax EN54 and traditional fire alarm installation, servicing, takeovers, emergency lighting and coordinated annual support.", image: "/images/ajax-en54-fire.webp", alt: "Ajax EN54 fire alarm equipment for a commercial property", href: "/commercial/fire-compliance" },
  { title: "Professional Monitoring", text: "Alarm handling, keyholder contact, visual or image verification where available and agreed escalation procedures.", image: "/images/editorial/home-monitoring.jpg", alt: "Real NOX CCTV display and security equipment supporting monitoring", href: "/service-plans/alarm-monitoring" },
  { title: "Maintenance & Takeovers", text: "Annual alarm, CCTV and fire servicing for new systems and suitable traditional equipment, plus fault review and phased upgrades.", image: "/images/editorial/home-maintenance.jpg", alt: "Real alarm system panels inspected during NOX maintenance work", href: "/service-plans" }
]

const homeVideos = [
  { title: "Ajax intruder protection", text: "See how detection, app control and system management come together on the Ajax platform.", youtubeId: "9ffQhBwXUDg" },
  { title: "Ajax perimeter protection", text: "See how external detection can create an earlier warning layer around the property.", youtubeId: "Nm0HIK8vjso" },
  { title: "Ajax fire technology", text: "Explore modern Ajax fire technology for suitable commercial and property applications.", youtubeId: "XZDNd3ud-ck" },
  { title: "MotionCam in operation", text: "A closer look at Ajax motion detection with photo-verification capability on suitable systems.", videoUrl: "https://support.ajax.systems/wp-content/uploads/2022/10/motioncam-3-0-en.mp4" },
  { title: "KeyPad TouchScreen", text: "Modern on-site control, event information and system management through an Ajax touch-screen keypad.", videoUrl: "https://support.ajax.systems/wp-content/uploads/2023/07/kpt-events-en.mp4" }
]

const keyAreas = [
  ["Chesterfield", "/areas/chesterfield"], ["Sheffield", "/areas/sheffield"], ["Dronfield", "/areas/dronfield"],
  ["Matlock", "/areas/matlock"], ["Bakewell", "/areas/bakewell"], ["Buxton", "/areas/buxton"],
  ["Hope Valley", "/areas/hope-valley"], ["Hathersage", "/areas/hathersage"]
]

const ajaxProducts = [
  { name: "MotionCam", text: "Motion detection with photo-verification capability for suitable residential and commercial systems.", image: "/images/MotionCam.jpeg" },
  { name: "Curtain Outdoor", text: "A focused detection layer for selected approaches, openings and narrow external zones.", image: "/images/SingleCurtain.jpeg" },
  { name: "DualCurtain Outdoor", text: "Two-direction perimeter detection for longer boundaries, façades and side access routes.", image: "/images/DualCurtain.jpeg" },
  { name: "KeyPad TouchScreen", text: "A modern interface for everyday arming, users, groups and system information.", image: "/images/KeypadPlus.jpeg" },
  { name: "StreetSiren", text: "A visible and audible external warning device selected and positioned as part of the wider design.", image: "/images/StreetSiren.jpeg" },
  { name: "Ajax DoorBell & NVR", text: "Video entry, cameras and recording brought into the same Ajax environment where suitable.", image: "/images/AjaxDoorbell.jpeg" }
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

    <section className="section section-alt project-story-section"><div className="container">
      <SectionHeading eyebrow="Real NOX work" title="Every property is different. The design should be too." text="Selected residential, commercial and industrial projects showing how the brief develops around the property rather than a fixed product bundle." />
      <div className="project-story-grid">
        <article><img src="/images/resent-installation/5076E57A-3580-4C83-A1EB-090B7AF05D14.png" alt="Ajax camera installed at a Chesterfield residential property"/><div><span>Chesterfield · Premium residential</span><h3>Five Ajax 8MP cameras with intruder protection</h3><p>A premium residential property secured through one joined-up design, combining Ajax CCTV and intruder protection around the home, driveway and everyday routines.</p><Link href="/case-studies#project-chesterfield-residential-ajax">View the project →</Link></div></article>
        <article><img src="/images/resent-installation/F5B46861-7E5F-416A-BD90-69C544691E7A.png" alt="NOX van at a Buxton industrial security project"/><div><span>Buxton · Industrial</span><h3>Ajax alarm and nine-camera CCTV system</h3><p>What began as a site-security requirement became one connected commercial installation, combining intruder protection with nine CCTV cameras.</p><Link href="/case-studies#project-buxton-industrial-security">View the project →</Link></div></article>
        <article><img src="/images/resent-installation/B563DA1D-D64B-4DF3-8058-BC6E01154EC3.png" alt="NOX external Ajax siren installed for perimeter protection"/><div><span>Dronfield · Perimeter protection</span><h3>An earlier warning layer around a working timber site</h3><p>External Ajax detection and sirens were used to protect approaches around the site before an intruder reached the main building.</p><Link href="/case-studies#project-dronfield-timber-perimeter">View the project →</Link></div></article>
      </div>
    </div></section>

    <section className="section"><div className="container">
      <SectionHeading eyebrow="Complete Fire & Security" title="Installation, monitoring, servicing and aftercare through one local team" text="NOX designs around the property first, selects the correct technology and keeps support clear after handover." />
      <div className="solution-grid solution-grid-six">{solutions.map(item => <article className="solution-card premium-solution-card" key={item.title}><img src={item.image} alt={item.alt}/><div className="solution-card-body"><h3>{item.title}</h3><p>{item.text}</p><Link className="text-link" href={item.href}>Explore {item.title} →</Link></div></article>)}</div>
    </div></section>

    <section className="section ajax-editorial-section"><div className="container">
      <div className="ajax-editorial-grid">
        <div className="ajax-editorial-media"><img src="/images/editorial/ajax-technology.jpg" alt="Ajax MotionCam, curtain detection, keypad, video doorbell and NVR products"/></div>
        <div className="ajax-home-copy"><span className="eyebrow">Rule Your Space</span><img className="ajax-authorised-logo" src="/images/logo-ajax-authorized-installation-company-en-wh.png" alt="Ajax Authorised Installation Company"/><h2>Ajax technology, designed into the property rather than added as a package</h2><p>Ajax is our preferred smart-security platform for premium intruder protection, photo verification, external detection, CCTV, video entry and modern commercial fire systems. NOX selects the equipment after the property, risks, routines and required response have been understood.</p><div className="button-row"><Link className="button button-light" href="/systems/intrusion-alarms">Explore Ajax Alarms</Link><Link className="button button-outline" href="/systems/perimeter-protection">Explore Perimeter Protection</Link></div></div>
      </div>
      <div className="ajax-product-rail">{ajaxProducts.map(product => <article key={product.name}><div><img src={product.image} alt={`Ajax ${product.name}`}/></div><h3>{product.name}</h3><p>{product.text}</p></article>)}</div>
    </div></section>

    <VideoShowcase videos={homeVideos} eyebrow="Ajax technology in motion" title="More ways to see how the system works before the survey" />

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

    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Selected projects" title="More real installations across homes and commercial sites" text="Confirmed locations, equipment scopes and property types — without invented outcomes or generic stock-project claims."/><CaseStudyGrid limit={6}/><div className="button-row"><Link className="button button-outline" href="/case-studies">Explore All Case Studies</Link></div></div></section>

    <section className="section"><div className="container"><SectionHeading eyebrow="Customer reviews" title="Real feedback about advice, workmanship and aftercare" text="Verified review wording from residential and commercial NOX customers."/><ReviewGrid limit={3}/><div className="button-row"><Link className="button button-outline" href="/reviews">Read More Customer Reviews</Link><a className="button button-light" href="https://g.page/r/CUdyqRh0RFeXEAE/review" target="_blank" rel="noreferrer">View Google Reviews</a></div></div></section>

    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Areas we cover" title="Local service from Chesterfield across Derbyshire and Sheffield" text="Residential and commercial support across our core area, with wider travel for suitable commercial, industrial and multi-system projects."/><div className="home-area-grid">{keyAreas.map(([name, href]) => <Link href={href} key={name}><span>{name}</span><small>View local services →</small></Link>)}</div><div className="button-row"><Link className="button button-outline" href="/areas-we-serve">See Every Area We Cover</Link></div></div></section>

    <section className="section"><div className="container"><SectionHeading eyebrow="Practical advice" title="Clear information before and after installation" text="Maintenance, system takeovers, CCTV planning and fire-safety support explained in plain English."/><BlogGrid limit={3}/></div></section>
    <ConversionPanel title="Request your free security survey" text="Tell us about the property and what you need. NOX will review the details, contact you directly and arrange the right survey or quotation route." />
  </>
}
