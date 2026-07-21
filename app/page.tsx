import type { Metadata } from "next"
import Link from "next/link"
import { BlogGrid, CaseStudyGrid, ConversionPanel, FeatureGrid, JsonLd, ReviewGrid, ReviewSummaryStrip, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata, site } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "NOX Fire & Security | Home Security, Commercial Fire & CCTV",
  "Ajax intruder alarms, home CCTV, commercial CCTV, fire alarm installation, emergency lighting, servicing and monitoring across Chesterfield, Sheffield and Derbyshire.",
  "/"
)

const keyAreas = [
  ["Chesterfield", "/areas/chesterfield"], ["Sheffield", "/areas/sheffield"], ["Derbyshire", "/areas/derbyshire"],
  ["Dronfield", "/areas/dronfield"], ["Matlock", "/areas/matlock"], ["Bakewell", "/areas/bakewell"],
  ["Buxton", "/areas/buxton"], ["Hope Valley", "/areas/hope-valley"]
]

const residentialRoutes = [
  { title: "Ajax Intruder Alarms", text: "MotionCam, door protection, keypads, sirens, app control, monitoring and carefully selected external detection.", href: "/systems/intrusion-alarms", image: "/images/revisions/ajax-intruder-alarm-workbench.jpg", alt: "Ajax intruder alarm equipment prepared by NOX" },
  { title: "Home CCTV", text: "Recorder-based CCTV for driveways, doors, gardens, garages and outbuildings, with clear playback and remote viewing.", href: "/systems/home-cctv", image: "/images/revisions/residential-vigi-cctv-pair.jpg", alt: "Residential CCTV cameras installed by NOX" },
  { title: "Perimeter & Outbuildings", text: "Protection for gates, longer driveways, detached garages, workshops and separate buildings where range and layout need proper planning.", href: "/systems/garages-outbuildings", image: "/images/revisions/residential-cctv-installation-engineer.jpg", alt: "NOX engineer installing security at a residential property" },
]

const fireRoutes = [
  { title: "Fire Alarm Installation", text: "Conventional, addressable and suitable wireless EN54 systems designed around the premises and future maintenance route.", href: "/systems/fire-safety" },
  { title: "Fire Alarm Servicing", text: "Planned testing, existing-system takeovers, records, defect reporting and clear remedial quotations.", href: "/service-plans/fire-alarm-servicing" },
  { title: "Repairs & Takeovers", text: "Assessment of faults, access, documentation, parts availability and the sensible repair or replacement route.", href: "/services/fire-alarm-repairs-takeovers" },
  { title: "Emergency Lighting", text: "New installations, testing, annual duration checks, failed-fitting reports and coordinated remedials.", href: "/systems/emergency-lighting" },
  { title: "Fire Compliance Plans", text: "Coordinate agreed fire alarm, emergency-lighting, extinguisher and risk-assessment support under a clearer annual plan.", href: "/service-plans/fire-compliance" },
]

const commercialRoutes = [
  { title: "Commercial CCTV", text: "Coverage, recording, evidence quality and remote access for retail, hospitality, offices, warehouses, yards and industrial sites.", href: "/commercial/cctv" },
  { title: "Commercial Intruder Alarms", text: "Internal and external detection designed around access, staff use, valuable areas, opening hours and monitoring requirements.", href: "/commercial/intruder-alarms" },
  { title: "Industrial & Warehouse Security", text: "Larger camera counts, several buildings, loading areas, machinery, boundaries and operational constraints planned as one project.", href: "/commercial/industrial-warehouse-security" },
  { title: "Multi-Site & Integrated Projects", text: "Coordinated fire, CCTV and intruder systems with clearer records, rollout planning and ongoing support across several premises.", href: "/commercial/multi-site-security" },
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
        <img src="/images/revisions/telesis-hitachi-exterior.jpg" alt="Commercial premises supported by NOX Fire and Security" />
      </div>
      <div className="nox-mark-watermark" aria-hidden="true"><img src="/images/revisions/nox-padlock-watermark.jpg" alt="" /></div>
      <div className="container home-hero-content">
        <div className="premium-kicker"><span>NOX Fire & Security</span><span>Chesterfield · Sheffield · Derbyshire</span></div>
        <h1>Security for your home. Fire and security for your business.</h1>
        <p className="lead">Ajax intruder alarms, professional CCTV, commercial fire alarms, emergency lighting, servicing and monitoring — designed, installed and supported by one local team.</p>
        <div className="button-row home-audience-actions">
          <Link className="button button-light" href="/residential">Protect My Home</Link>
          <Link className="button button-outline" href="/commercial">Protect My Business</Link>
        </div>
        <div className="hero-secondary-actions">
          <Link href="/fire-compliance">Fire Alarm Enquiry →</Link>
          <Link href="/service-plans">Servicing or Takeover →</Link>
        </div>
        <div className="hero-proof"><span>Ajax Authorised Installation Company</span><span>Real local installations</span><span>Monitoring & maintenance</span><span>Fire servicing & compliance</span></div>
      </div>
    </section>

    <ReviewSummaryStrip />
    <TrustStrip />

    <section className="section premium-client-section"><div className="container">
      <SectionHeading eyebrow="Residential Security" title="Protect the home, driveway, garage and everything around it" text="Start with the areas that matter. NOX then designs the alarm, CCTV and external protection around the property rather than forcing it into a fixed kit." />
      <div className="system-route-grid residential-system-grid">
        {residentialRoutes.map(item => <article className="system-route-card" key={item.title}><img src={item.image} alt={item.alt}/><div><span className="eyebrow">Residential</span><h2>{item.title}</h2><p>{item.text}</p><Link className="text-link" href={item.href}>Explore {item.title} →</Link></div></article>)}
      </div>
      <div className="button-row"><Link className="button button-dark" href="/residential">Explore Residential Security</Link><Link className="button button-outline" href="/get-quote?customer_type=Residential&enquiry_type=Installation#quote-form">Get a Home Security Quote</Link></div>
    </div></section>

    <section className="section section-alt fire-home-section"><div className="container">
      <div className="split-grid fire-home-intro"><div><SectionHeading eyebrow="Fire & Compliance" title="From a new fire alarm to the ongoing servicing it creates" text="NOX separates installation, servicing, repairs, emergency lighting and annual support so the responsible person can see what has been completed, what remains and what happens next."/></div><aside className="dark-panel"><h3>Commercial fire support</h3><p>New systems, existing systems, faults, takeovers, planned servicing, emergency lighting, extinguisher servicing and coordinated compliance plans.</p><Link className="button button-light" href="/get-quote?customer_type=Commercial&service_category=Fire%20%26%20Compliance#quote-form">Discuss Your Fire Requirements</Link></aside></div>
      <div className="feature-grid columns-3 fire-route-grid">{fireRoutes.map((item, index) => <article className="feature-card" key={item.title}><span className="feature-number">{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.text}</p><Link className="text-link" href={item.href}>View service →</Link></article>)}</div>
    </div></section>

    <section className="section"><div className="container">
      <SectionHeading eyebrow="Commercial Security" title="CCTV, intruder protection and coordinated systems for working sites" text="Commercial pages focus on operational requirements, evidence, access, several buildings, larger camera counts and the ongoing support needed after handover."/>
      <FeatureGrid columns={4} items={commercialRoutes}/>
      <div className="commercial-route-links">{commercialRoutes.map(item => <Link key={item.href} href={item.href}>{item.title} →</Link>)}</div>
      <div className="button-row"><Link className="button button-dark" href="/commercial">Explore Commercial Security</Link><Link className="button button-outline" href="/get-quote?customer_type=Commercial&enquiry_type=Installation#quote-form">Book a Commercial Site Survey</Link></div>
    </div></section>

    <section className="section section-alt core-systems-section"><div className="container">
      <SectionHeading eyebrow="Core systems" title="Intruder. CCTV. Fire." text="Three recognised starting points, connected to the residential, commercial and ongoing-support route that fits the property." />
      <div className="core-system-grid">
        <article className="core-system-card"><img src="/images/revisions/ajax-intruder-alarm-workbench.jpg" alt="Ajax intruder alarm equipment prepared by NOX"/><div><span className="eyebrow">Intruder alarms</span><h2>Ajax alarms designed around daily use</h2><p>Door protection, MotionCam, internal detection, keypads, sirens, app control, monitoring and external protection where suitable.</p><div className="related-links"><Link href="/systems/intrusion-alarms">Explore Ajax Intruder Alarms →</Link><Link href="/commercial/intruder-alarms">Commercial Intruder Alarms →</Link></div></div></article>
        <article className="core-system-card"><img src="/images/revisions/ajax-cctv-system-nvr-cameras.jpg" alt="Ajax CCTV cameras and network video recorder"/><div><span className="eyebrow">CCTV systems</span><h2>Coverage and recording selected for the site</h2><p>Home and commercial CCTV designed around useful views, night performance, evidence quality, storage and remote access.</p><div className="related-links"><Link href="/systems/home-cctv">Home CCTV →</Link><Link href="/commercial/cctv">Commercial CCTV →</Link></div></div></article>
        <article className="core-system-card"><img src="/images/revisions/ajax-en54-fire-control-panel.jpg" alt="Ajax EN54 fire alarm control equipment"/><div><span className="eyebrow">Fire alarm systems</span><h2>Installation planned with future servicing in mind</h2><p>Conventional, addressable and suitable wireless EN54 systems with commissioning, handover and a clear maintenance route.</p><div className="related-links"><Link href="/systems/fire-safety">Fire Alarm Installation →</Link><Link href="/service-plans/fire-alarm-servicing">Fire Alarm Servicing →</Link></div></div></article>
      </div>
    </div></section>

    <section className="section ongoing-support-bridge"><div className="container split-grid"><div>
      <SectionHeading eyebrow="Servicing, monitoring and takeovers" title="Support for NOX installations and suitable existing systems" text="Planned servicing, professional monitoring, faults, repairs, upgrades and system takeovers remain available for modern and suitable traditional systems."/>
      <div className="related-links"><Link href="/service-plans/alarm-maintenance">Intruder alarm servicing →</Link><Link href="/service-plans/alarm-monitoring">Alarm monitoring →</Link><Link href="/service-plans/cctv-maintenance">CCTV maintenance →</Link><Link href="/services/security-system-takeover">System takeovers →</Link><Link href="/services/repairs-upgrades">Repairs & upgrades →</Link></div>
    </div><aside className="dark-panel"><span className="eyebrow">Coordinated annual support</span><h3>Keep service dates, faults and future work easier to manage</h3><p>Eligible services can be placed under a clearer annual plan without hiding parts, remedials or excluded work inside a vague promise.</p><Link className="button button-light" href="/service-plans">Explore Servicing & Monitoring</Link></aside></div></section>

    <section className="section project-story-section"><div className="container">
      <SectionHeading eyebrow="Selected Projects" title="Real properties, real equipment and real NOX workmanship" text="Residential, hospitality, industrial and fire projects using genuine local photography and confirmed installation details."/>
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

    <section className="section"><div className="container"><SectionHeading eyebrow="Customer reviews" title="Feedback about advice, workmanship and aftercare" text="Genuine review wording from residential and commercial NOX customers."/><ReviewGrid limit={3}/><div className="button-row"><Link className="button button-outline" href="/reviews">Read Customer Reviews</Link></div></div></section>

    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Latest Guides" title="Useful answers before installation, servicing or a takeover" text="Detailed guidance around fire alarms, emergency lighting, CCTV, intruder systems and ongoing maintenance."/><BlogGrid limit={3}/><div className="button-row"><Link className="button button-outline" href="/blog">Explore Fire & Security Guides</Link></div></div></section>

    <section className="section"><div className="container"><SectionHeading eyebrow="Areas covered" title="Local service from Chesterfield across Sheffield and Derbyshire" text="Strong local support across the core area, with wider travel for suitable commercial, industrial, multi-site and larger residential projects."/><div className="home-area-grid">{keyAreas.map(([name, href]) => <Link href={href} key={name}><span>{name}</span><small>View local services →</small></Link>)}</div><div className="button-row"><Link className="button button-outline" href="/areas-we-serve">See Areas We Cover</Link></div></div></section>

    <ConversionPanel title="Tell us about the property, site or existing system" text="One enquiry can cover a new installation, servicing, monitoring, a fault, a takeover or coordinated annual support. The NOX team will guide the right next step." primaryLabel="Get a Quote" sourceLabel="homepage"/>
  </>
}
