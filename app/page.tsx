import type { Metadata } from "next"
import Link from "next/link"
import { CaseStudyGrid, ContactActions, ConversionPanel, FeatureGrid, JsonLd, ReviewGrid, ReviewSummaryStrip, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata, site } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "NOX Fire & Security | Systems Designed Around Your Property",
  "Residential Ajax alarms, CCTV, commercial fire alarm installation, servicing, monitoring and compliance support across Chesterfield, Sheffield and Derbyshire.",
  "/"
)

const keyAreas = [
  ["Chesterfield", "/areas/chesterfield"], ["Sheffield", "/areas/sheffield"], ["Dronfield", "/areas/dronfield"],
  ["Matlock", "/areas/matlock"], ["Bakewell", "/areas/bakewell"], ["Buxton", "/areas/buxton"],
  ["Hope Valley", "/areas/hope-valley"], ["Hathersage", "/areas/hathersage"]
]

const coreSystems = [
  {
    eyebrow: "Intruder alarms",
    title: "Ajax protection designed around how the property is used",
    text: "MotionCam, door and window protection, user-friendly control, sirens, monitoring and optional perimeter detection for homes and commercial premises.",
    image: "/images/resent-installation/8DEEA5A9-CCAA-45D5-AD31-8414923CFB73.png",
    alt: "Black Ajax keypad installed by NOX as part of a residential intruder alarm",
    href: "/systems/intrusion-alarms",
    secondaryHref: "/systems/perimeter-protection",
    secondaryLabel: "Perimeter Protection"
  },
  {
    eyebrow: "CCTV systems",
    title: "Cameras planned around the view and evidence you need",
    text: "Ajax, Hikvision ColourVu and other professional CCTV systems with suitable recording, remote viewing and smart event detection for homes and businesses.",
    image: "/images/projects/bottle-thyme-monitor-wide.jpg",
    alt: "Commercial CCTV system installed by NOX at Bottle and Thyme in Chesterfield",
    href: "/systems/cctv",
    secondaryHref: "/service-plans/cctv-maintenance",
    secondaryLabel: "CCTV Maintenance"
  },
  {
    eyebrow: "Fire alarm systems",
    title: "Commercial Fire installation with servicing planned from day one",
    text: "Ajax EN54 and suitable traditional fire systems supported by testing, service records, emergency lighting and coordinated compliance packages.",
    image: "/images/projects/tan-station-exterior.jpg",
    alt: "Commercial premises in Brimington where NOX installed CCTV and completed fire-alarm first-fix work",
    href: "/systems/fire-safety",
    secondaryHref: "/service-plans/fire-compliance",
    secondaryLabel: "Fire Compliance Packages"
  }
]

export default function HomePage() {
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Fire & Security system installation and servicing", provider: { "@type": "LocalBusiness", name: site.name }, areaServed: ["Chesterfield", "Sheffield", "Derbyshire"], serviceType: ["Intruder alarms", "Perimeter protection", "CCTV", "Fire alarms", "Monitoring", "Maintenance", "System takeovers"] }
  return <>
    <JsonLd data={serviceSchema}/>
    <section className="home-hero home-hero-premium">
      <div className="home-hero-bg home-hero-split">
        <img src="/images/resent-installation/B17CAA16-7E26-4342-BD6F-B777359E2BEB.png" alt="NOX Fire and Security completing a residential installation" />
        <img src="/images/projects/bottle-thyme-vehicles.jpg" alt="NOX Fire and Security vehicles outside a completed commercial project in Chesterfield" />
      </div>
      <div className="nox-mark-watermark" aria-hidden="true"><img src="/images/nox-logo-dark.png" alt="" /></div>
      <div className="container home-hero-content">
        <div className="premium-kicker"><span>NOX Fire & Security</span><span>Chesterfield · Sheffield · Derbyshire</span></div>
        <h1>Fire & Security systems, designed around your property.</h1>
        <p className="lead">Ajax intruder alarms, professional CCTV and commercial fire systems — designed properly, installed properly and supported by one local team.</p>
        <ContactActions primaryLabel="Request Your Free Security Survey" />
        <div className="hero-proof"><span>Ajax Authorised Installation Company</span><span>Residential & commercial</span><span>Monitoring & maintenance</span><span>Fire servicing & compliance</span></div>
      </div>
    </section>
    <ReviewSummaryStrip />
    <TrustStrip />

    <section className="section premium-client-section"><div className="container">
      <SectionHeading eyebrow="Residential and commercial" title="The same standard of design, shaped around different properties" text="Residential work is led by intruder alarms and CCTV. Commercial work brings Fire, CCTV and intruder protection together with the ongoing support each site needs." />
      <div className="premium-client-grid">
        <article className="premium-client-card residential-card"><img src="/images/resent-installation/B563DA1D-D64B-4DF3-8058-BC6E01154EC3.png" alt="NOX branded external alarm siren installed on a residential property"/><div><span className="eyebrow">Residential security</span><h2>Protection that belongs in the home.</h2><p>For semi-detached houses, family homes, larger properties, garages, gates, driveways and outbuildings — without forcing every customer into the same package.</p><Link className="text-link" href="/residential">Explore Residential Security →</Link></div></article>
        <article className="premium-client-card commercial-card"><img src="/images/projects/bottle-thyme-vehicles.jpg" alt="NOX Fire and Security vehicles outside a commercial project in Chesterfield"/><div><span className="eyebrow">Commercial Fire & Security</span><h2>Joined-up systems and ongoing support.</h2><p>Fire alarms, CCTV, intruder protection, emergency lighting, servicing and compliance support for operational premises and property portfolios.</p><Link className="text-link" href="/commercial">Explore Commercial Fire & Security →</Link></div></article>
      </div>
    </div></section>

    <section className="section section-alt core-systems-section"><div className="container">
      <SectionHeading eyebrow="Core systems" title="Intruder. CCTV. Fire." text="Three clear starting points, with the residential, commercial and ongoing-support detail available inside the relevant page." />
      <div className="core-system-grid">{coreSystems.map(item => <article className="core-system-card" key={item.title}><img src={item.image} alt={item.alt}/><div><span className="eyebrow">{item.eyebrow}</span><h2>{item.title}</h2><p>{item.text}</p><div className="related-links"><Link href={item.href}>Explore the system →</Link><Link href={item.secondaryHref}>{item.secondaryLabel} →</Link></div></div></article>)}</div>
    </div></section>

    <section className="section project-story-section"><div className="container">
      <div className="home-project-intro"><SectionHeading eyebrow="Recent NOX projects" title="Real properties, systems and local workmanship" text="A focused selection of residential, hospitality, industrial and larger commercial projects completed by NOX."/><div className="portfolio-logo-panel"><img src="/images/projects/logo-nox-fire-security.jpg" alt="NOX Fire and Security logo"/></div></div>
      <CaseStudyGrid slugs={["bottle-and-thyme-commercial-cctv-chesterfield","tan-station-fire-security-brimington","chesterfield-home-ajax-cctv-intruder"]}/>
      <div className="button-row"><Link className="button button-outline" href="/case-studies">Explore the NOX Project Portfolio</Link></div>
    </div></section>

    <section className="section ajax-editorial-section"><div className="container">
      <div className="ajax-editorial-grid">
        <div className="ajax-editorial-media ajax-property-media"><img src="/images/projects/chesterfield-home-cameras.jpg" alt="Black Ajax cameras installed around a residential property in Chesterfield"/></div>
        <div className="ajax-home-copy"><span className="eyebrow">Rule Your Space</span><img className="ajax-authorised-logo" src="/images/logo-ajax-authorized-installation-company-en-wh.png" alt="Ajax Authorised Installation Company"/><h2>Ajax technology selected around the property — not sold as a fixed kit</h2><p>NOX uses Ajax as its preferred smart intruder platform while keeping the survey, property and customer requirement at the centre of the design. Detailed product choices sit on the Intruder Alarm and Perimeter Protection pages rather than overwhelming the homepage.</p><div className="button-row"><Link className="button button-light" href="/systems/intrusion-alarms">Explore Ajax Intruder Alarms</Link><Link className="button button-outline" href="/systems/perimeter-protection">View Perimeter Protection</Link></div></div>
      </div>
    </div></section>

    <section className="section service-plan-showcase"><div className="container">
      <SectionHeading eyebrow="Monitoring, maintenance and compliance" title="Ongoing support without duplicating the installation journey" text="Choose the system first, then add the servicing, monitoring, takeover or package that keeps it useful after handover." />
      <div className="service-plan-grid service-plan-grid-compact">
        <article><span>01</span><h3>Alarm Support</h3><p>Maintenance for new and suitable traditional systems, professional monitoring, takeover inspections and future upgrades.</p><Link href="/service-plans/alarm-maintenance">Alarm plans and monitoring →</Link></article>
        <article><span>02</span><h3>CCTV Support</h3><p>Camera cleaning, image checks, recorder and hard-drive health, playback, remote viewing and suitable system takeovers.</p><Link href="/service-plans/cctv-maintenance">CCTV maintenance and takeovers →</Link></article>
        <article className="fire-plan-emphasis"><span>03</span><h3>Fire & Compliance</h3><p>Fire alarm servicing, emergency-lighting testing, risk-assessment routes and coordinated Fire Compliance Packages.</p><Link href="/service-plans/fire-compliance">Fire servicing and packages →</Link></article>
      </div>
      <div className="service-plan-callout"><div><h3>Total Security and Fire Compliance Packages</h3><p>Bring eligible services together under a clearer annual arrangement, with pricing and exact inclusions shown on the relevant plan pages.</p></div><Link className="button button-dark" href="/service-plans">View All Service Plans</Link></div>
    </div></section>

    <section className="section section-alt"><div className="container">
      <SectionHeading eyebrow="Why choose NOX" title="Designed properly. Installed properly. Supported properly." text="A local, independent company combining modern technology with honest advice, careful workmanship, clear handover and direct aftercare."/>
      <FeatureGrid columns={4} items={[
        { title: "Property-led design", text: "The building, access points, routines, risks and existing equipment are understood before products are selected." },
        { title: "Professional installation", text: "Devices, cameras, panels and cable routes are planned carefully, fitted properly and presented cleanly." },
        { title: "Clear handover", text: "Apps, users, playback, operating modes and practical next steps are explained without unnecessary jargon." },
        { title: "Local long-term support", text: "Monitoring, servicing, Fire maintenance, takeovers, repairs and future upgrades remain available through NOX." }
      ]}/>
    </div></section>

    <section className="section"><div className="container"><SectionHeading eyebrow="Customer reviews" title="Real feedback about advice, workmanship and aftercare" text="Verified review wording from residential and commercial NOX customers."/><ReviewGrid limit={3}/><div className="button-row"><Link className="button button-outline" href="/reviews">Read More Customer Reviews</Link><a className="button button-light" href="https://g.page/r/CUdyqRh0RFeXEAE/review" target="_blank" rel="noreferrer">View Google Reviews</a></div></div></section>

    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Areas we cover" title="Local service from Chesterfield across Derbyshire and Sheffield" text="Residential and commercial support across our core area, with wider travel for suitable commercial, industrial and multi-system projects."/><div className="home-area-grid">{keyAreas.map(([name, href]) => <Link href={href} key={name}><span>{name}</span><small>View local services →</small></Link>)}</div><div className="button-row"><Link className="button button-outline" href="/areas-we-serve">See Every Area We Cover</Link></div></div></section>

    <ConversionPanel title="Request your free security survey" text="Tell us about the property and what you need. NOX will guide the enquiry into the right system, service plan or takeover route without sending you through unnecessary pages." />
  </>
}
