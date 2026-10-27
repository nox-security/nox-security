import type { Metadata } from "next"
import Link from "next/link"
import { CaseStudyGrid, ConversionPanel, FeatureGrid, JsonLd, OngoingSupportStrip, ReviewGrid, SectionHeading } from "@/components/marketing"
import { pageMetadata } from "@/lib/site"
import { serviceSchema, webPageSchema } from "@/lib/schema"

export const metadata: Metadata = pageMetadata(
  "Fire Alarms, CCTV & Security Systems | Derbyshire & Sheffield",
  "Fire alarm installation, servicing and maintenance, commercial CCTV, home CCTV and intruder systems across Chesterfield, Sheffield, Derbyshire, Derby and the Peak District.",
  "/",
  { image: "/images/image-refresh/homepage-hero-nox-property.webp", imageAlt: "NOX Fire & Security van at a protected commercial property" },
)

const deliveryJourney = [
  { number: "01", eyebrow: "Understand", title: "Survey the property", text: "We start with the premises, access points, existing equipment, risks and the way the system needs to be used." },
  { number: "02", eyebrow: "Design", title: "Build the right system", text: "Fire, commercial CCTV, home CCTV, intruder and support options are brought into one clear proposal with the reasons behind the design." },
  { number: "03", eyebrow: "Deliver", title: "Install and hand over", text: "Equipment placement, cable routes, testing, user setup and practical handover are treated as part of the finished job." },
  { number: "04", eyebrow: "Continue", title: "Maintain, monitor and expand", text: "Servicing, monitoring, repairs and future additions remain connected through the same local point of contact." },
]

const residentialRoutes = [
  { title: "Home CCTV", text: "Recorder-based CCTV for driveways, doors, gardens, garages and outbuildings, with clear playback and remote viewing.", href: "/systems/home-cctv", image: "/images/image-refresh/home-cctv-live-view.webp", alt: "Residential CCTV live view showing full-property coverage" },
  { title: "Ajax Intruder Alarms", text: "MotionCam, door protection, keypads, sirens, app control and external detection selected around the home.", href: "/systems/intrusion-alarms", image: "/images/v4-12-9/residential-intruder-main.jpg", alt: "Black Ajax outdoor detector shown as the main image for residential intruder alarms" },
  { title: "Perimeter Protection", text: "Protection for gates, driveways, detached garages, workshops and separate buildings, planned as one connected system.", href: "/systems/perimeter-protection", image: "/images/v4-12-6/perimeter-main-white-devices.png", alt: "Ajax perimeter protection devices presented together for residential security" },
  { title: "Smart Home Security", text: "App-led cameras, video doorbells, floodlight cameras and subscription-free options designed around convenient everyday use.", href: "/systems/smart-home-cctv", image: "/images/image-refresh/smart-home-eufy-installed.webp", alt: "Eufy dual-lens smart security camera installed at a home" },
]

const fireRoutes = [
  { title: "Fire Alarm Installation", text: "Conventional, addressable and suitable wireless systems designed around the premises and future servicing.", href: "/systems/fire-safety", image: "/images/v4-10/fire-alarm-installation-hero.jpeg", alt: "Ajax EN54 fire alarm control panel installed beside a fire alarm zone plan and manual call point" },
  { title: "Fire Alarm Service & Maintenance", text: "Planned servicing, testing, existing-system takeovers, maintenance records, defect reporting and clear remedial quotations.", href: "/service-plans/fire-alarm-servicing", image: "/images/v4-10/fire-alarm-servicing.jpeg", alt: "Commercial fire alarm control panel inspected during planned servicing" },
  { title: "Fire Alarm Monitoring", text: "Professional signalling and agreed escalation for suitable maintained commercial fire systems.", href: "/service-plans/fire-alarm-monitoring", image: "/images/revisions/intruder-alarm-monitoring-centre.jpg", alt: "Professional monitoring centre receiving alarm signals" },
  { title: "Emergency Lighting", text: "New installations, testing, annual duration checks, failed-fitting reports and coordinated remedials.", href: "/systems/emergency-lighting", image: "/images/image-refresh/emergency-lighting-modern.webp", alt: "Emergency exit lighting installed at a commercial premises" },
]

const commercialRoutes = [
  { title: "Commercial CCTV", text: "Coverage, recording, evidence quality and remote access for hospitality, retail, offices, warehouses and industrial sites.", href: "/commercial/cctv", image: "/images/resent-installation/E6B4D998-0805-4B7E-8532-CC491C881B57.jpeg", alt: "Coordinated alarm monitoring and CCTV maintenance package from NOX" },
  { title: "Commercial Intruder Alarms", text: "Internal and external detection designed around access, staff use, valuable areas, opening hours and monitoring requirements.", href: "/commercial/intruder-alarms", image: "/images/revisions/tan-station-ajax-keypad.jpg", alt: "NOX branded Ajax keypad installed at a commercial premises" },
  { title: "Industrial & Multi-Site Security", text: "Several buildings, yards, loading areas and operational requirements planned as one coordinated security project.", href: "/commercial/industrial-warehouse-security", image: "/images/revisions/nox-commercial-cctv-installation.jpg", alt: "NOX engineer and van during an industrial security installation" },
]

const supportRoutes = [
  { title: "Servicing & Maintenance", text: "Planned alarm, CCTV, fire-alarm and emergency-lighting visits with clear testing, records and recommendations.", href: "/service-plans#servicing-maintenance", image: "/images/v4-10/servicing-monitoring-hero.jpeg", alt: "NOX servicing visit supporting an existing Fire and Security system" },
  { title: "Intruder Alarm Monitoring", text: "Professional alarm signalling, keyholder contact and agreed escalation for suitable maintained systems.", href: "/service-plans/alarm-monitoring", image: "/images/v4-13-2/alarm-monitoring-operator.jpg", alt: "Professional alarm monitoring operator handling security signals" },
  { title: "System Takeovers & Upgrades", text: "Existing systems assessed for access, faults, condition, repair, selective upgrades or replacement where appropriate.", href: "/services/security-system-takeover", image: "/images/image-refresh/commercial-old-camera.webp", alt: "Existing CCTV equipment assessed during a system takeover" },
  { title: "Ongoing Support Packages", text: "Bring suitable monitoring, alarm servicing, CCTV maintenance and planned visits under one support arrangement.", href: "/service-plans/total-security", image: "/images/resent-installation/E6B4D998-0805-4B7E-8532-CC491C881B57.jpeg", alt: "Coordinated monitoring and maintenance support package from NOX" },
]

const priorityServices = [
  { eyebrow: "Fire & Compliance", title: "Fire Alarms", text: "Installation, servicing, maintenance and remedial work for commercial premises and suitable residential properties.", href: "/fire-compliance", image: "/images/v4-10/fire-alarm-installation-hero.jpeg", alt: "Commercial fire alarm installation by NOX Fire & Security" },
  { eyebrow: "Commercial Security", title: "Commercial CCTV", text: "Professional CCTV designed around evidence quality, site operations, remote access and ongoing support.", href: "/commercial/cctv", image: "/images/revisions/nox-commercial-cctv-installation.jpg", alt: "NOX commercial CCTV installation with branded service vehicle" },
  { eyebrow: "Residential Security", title: "Home CCTV", text: "Recorder-based home CCTV for driveways, entrances, gardens, garages and outbuildings with remote viewing.", href: "/systems/home-cctv", image: "/images/image-refresh/home-cctv-installed-white.webp", alt: "Professional home CCTV camera installation" },
  { eyebrow: "Residential Security", title: "Home Intruder", text: "Ajax intruder alarms with app control, internal detection, perimeter protection and monitored options where required.", href: "/systems/intrusion-alarms", image: "/images/v4-12-9/residential-intruder-main.jpg", alt: "Ajax residential intruder alarm detector installed by NOX" },
]

const homeProofPoints = [
  { kicker: "Installation", title: "Expert installation" },
  { kicker: "Fire", title: "Compliance focused" },
  { kicker: "Support", title: "Ongoing maintenance" },
  { kicker: "Monitoring", title: "24/7 options" },
  { kicker: "Coverage", title: "Residential & commercial" },
]

const homeAreas = [
  ["Chesterfield", "/areas/chesterfield"],
  ["Sheffield", "/areas/sheffield"],
  ["Derbyshire", "/areas/derbyshire"],
  ["Dronfield", "/areas/dronfield"],
  ["Mansfield", "/areas/mansfield"],
  ["Doncaster", "/areas/doncaster"],
] as const

export default function HomePage() {
  const serviceStructuredData = serviceSchema({
    name: "Fire Alarms, CCTV and intruder system installation and servicing",
    description: "Fire alarm installation, servicing and maintenance, commercial CCTV, home CCTV, intruder systems and emergency-lighting services across Chesterfield, Sheffield, Derbyshire, Derby and the Peak District.",
    path: "/",
    serviceType: ["Fire alarm installation", "Fire alarm servicing and maintenance", "Commercial CCTV installation", "Home CCTV installation", "Home intruder alarm installation", "Emergency lighting", "Monitoring and maintenance"],
    image: "/images/image-refresh/homepage-hero-nox-property.webp",
  })
  const homepageStructuredData = webPageSchema({
    name: "NOX Fire & Security",
    description: "Fire alarm installation, servicing and maintenance, commercial CCTV, home CCTV, intruder alarms and emergency-lighting services across the NOX service area.",
    path: "/",
    image: "/images/image-refresh/homepage-hero-nox-property.webp",
  })

  return <>
    <JsonLd data={serviceStructuredData}/><JsonLd data={homepageStructuredData}/>
    <section className="home-hero modern-home-hero">
      <div className="home-hero-bg modern-home-hero-media">
        <img src="/images/image-refresh/homepage-hero-nox-property.webp" alt="NOX Fire & Security van at a protected commercial property" />
      </div>
      <div className="container home-hero-content modern-home-hero-content">
        <div className="modern-home-kicker"><span>NOX Fire &amp; Security</span><span>Chesterfield · Sheffield · Derby · South Yorkshire</span></div>
        <h1><span>Fire Alarm Installation,</span><span>CCTV &amp; Intruder Systems</span></h1>
        <p className="lead">Fire alarm installation, servicing and maintenance first — followed by commercial CCTV, home CCTV and intruder systems across Derbyshire and South Yorkshire.</p>
        <div className="button-row modern-home-actions">
          <Link className="button button-light" href="/get-quote#quote-form">Book a Site Survey <span aria-hidden="true">→</span></Link>
          <Link className="button button-outline" href="/get-quote#quote-form">Get a Quote <span aria-hidden="true">→</span></Link>
        </div>
        <div className="modern-home-route-links" aria-label="Choose a service route">
          <Link href="/fire-compliance">Fire &amp; Compliance</Link>
          <Link href="/commercial">Commercial</Link>
          <Link href="/residential">Residential</Link>
          <Link href="/service-plans">Service &amp; Monitoring</Link>
        </div>
      </div>
    </section>

    <section className="home-priority-services" aria-label="Core NOX services">
      <div className="container home-priority-grid">
        {priorityServices.map((item, index) => <Link className="home-priority-card" href={item.href} key={item.title}>
          <div className="home-priority-image"><img src={item.image} alt={item.alt}/></div>
          <div className="home-priority-copy"><span className="home-priority-index">{String(index + 1).padStart(2, "0")}</span><span className="eyebrow">{item.eyebrow}</span><h2>{item.title}</h2><p>{item.text}</p><span className="home-priority-arrow" aria-hidden="true">→</span></div>
        </Link>)}
      </div>
    </section>

    <section className="home-proof-rail" aria-label="Why customers choose NOX"><div className="container home-proof-grid">
      {homeProofPoints.map(item => <div key={item.title}><span>{item.kicker}</span><strong>{item.title}</strong></div>)}
    </div></section>

    <section className="section home-delivery-journey"><div className="container">
      <div className="home-delivery-header">
        <div><span className="eyebrow">The NOX approach</span><h2>One clear journey from survey to ongoing support</h2></div>
        <Link className="text-link" href="/about-us">How NOX works →</Link>
      </div>
      <div className="home-delivery-grid">
        {deliveryJourney.map(item => <article className="home-delivery-step" key={item.title}><div className="home-delivery-step-top"><span className="home-delivery-number">{item.number}</span><span className="eyebrow">{item.eyebrow}</span></div><h3>{item.title}</h3><p>{item.text}</p></article>)}
      </div>
    </div></section>

    <section className="section section-alt fire-home-section"><div className="container">
      <div className="split-grid fire-home-intro"><div><SectionHeading eyebrow="Fire & Compliance" title="Installation, servicing and ongoing compliance support" text="New fire alarms, planned servicing, repairs, takeovers, emergency lighting and coordinated annual support for commercial premises."/></div><aside className="dark-panel"><h3>Discuss your fire requirements</h3><p>Tell us about the premises, existing system and work required. Risk assessments and extinguisher servicing can be coordinated through competent specialist partners where needed.</p><Link className="button button-light" href="/get-quote?customer_type=Commercial&service_category=Fire%20%26%20Compliance#quote-form">Arrange a Fire Alarm Survey</Link></aside></div>
      <div className="feature-grid columns-4 fire-route-grid media-route-grid">{fireRoutes.map((item, index) => <article className="feature-card media-route-card" key={item.title}><img src={item.image} alt={item.alt}/><div className="media-route-card-body"><span className="feature-number">{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.text}</p><Link className="text-link" href={item.href}>View service →</Link></div></article>)}</div>
      <div className="button-row"><Link className="button button-outline" href="/fire-compliance">Explore Fire & Compliance</Link></div>
    </div></section>

    <section className="section"><div className="container">
      <SectionHeading eyebrow="Commercial CCTV & Security" title="CCTV, intruder protection and coordinated systems for working sites" text="Commercial CCTV is planned around evidence quality, operations, access, several buildings and ongoing support, with intruder protection added where the site requires it."/>
      <div className="feature-grid columns-3 media-route-grid commercial-media-grid">{commercialRoutes.map((item, index) => <article className="feature-card media-route-card" key={item.title}><img src={item.image} alt={item.alt}/><div className="media-route-card-body"><span className="feature-number">{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.text}</p><Link className="text-link" href={item.href}>Explore service →</Link></div></article>)}</div>
      <div className="button-row"><Link className="button button-dark" href="/commercial">Explore Commercial Security</Link><Link className="button button-outline" href="/get-quote?customer_type=Commercial&enquiry_type=Installation#quote-form">Discuss Your Project</Link></div>
    </div></section>

    <section className="section premium-client-section"><div className="container">
      <SectionHeading eyebrow="Residential CCTV & Security" title="Professional CCTV, Ajax alarms and external protection for the property" text="NOX starts with the views, access points and external areas that matter, then recommends the right combination of CCTV, intruder detection and perimeter protection." />
      <div className="system-route-grid residential-system-grid">
        {residentialRoutes.map(item => <article className="system-route-card" key={item.title}><img src={item.image} alt={item.alt}/><div><span className="eyebrow">Residential</span><h2>{item.title}</h2><p>{item.text}</p><Link className="text-link" href={item.href}>Explore {item.title} →</Link></div></article>)}
      </div>
      <div className="button-row"><Link className="button button-dark" href="/residential">Explore Home Security</Link><Link className="button button-outline" href="/get-quote?customer_type=Residential&enquiry_type=Installation#quote-form">Book a Home Security Survey</Link></div>
    </div></section>

    <section className="section section-alt home-support-section"><div className="container">
      <SectionHeading eyebrow="Service & Monitoring" title="Keep systems working, monitored and ready for future changes" text="Start here for monitoring, maintenance, takeovers, fault support or a planned upgrade. NOX will confirm the next step around the system and property."/>
      <div className="feature-grid columns-4 media-route-grid support-media-grid">{supportRoutes.map((item, index) => <article className="feature-card media-route-card" key={item.title}><img src={item.image} alt={item.alt}/><div className="media-route-card-body"><span className="feature-number">{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.text}</p><Link className="text-link" href={item.href}>Explore support →</Link></div></article>)}</div>
      <div className="button-row"><Link className="button button-light" href="/service-plans">Explore Service &amp; Monitoring</Link><Link className="button button-outline" href="/get-quote?enquiry_type=Takeover#quote-form">Get Support for an Existing System</Link></div>
    </div></section>

    <OngoingSupportStrip context="commercial"/>

    <section className="section integrated-home-route"><div className="container split-grid"><div>
      <SectionHeading eyebrow="Larger commercial projects" title="One coordinated strategy for fire, CCTV, intruder and continued support" text="Businesses do not need separate providers and renewal dates for every system. NOX can plan surveillance, detection, fire systems, monitoring and maintenance around the site or wider property portfolio."/>
      <div className="button-row"><Link className="button button-dark" href="/commercial/integrated-fire-security">Explore Integrated Site Security</Link><Link className="button button-outline" href="/get-quote?customer_type=Commercial&enquiry_type=Installation#quote-form">Discuss a Commercial Project</Link></div>
    </div><aside className="dark-panel"><h3>More than an installation</h3><p>Monitoring, planned maintenance and future expansion can be considered while the system is being designed, then continued after handover through the same local point of contact.</p><Link className="text-link" href="/service-plans/total-security">View ongoing support packages →</Link></aside></div></section>

    <section className="section project-story-section"><div className="container">
      <SectionHeading eyebrow="Selected Projects" title="Real properties, real equipment and real NOX workmanship" text="A selection of residential, hospitality, industrial and fire projects using genuine installation photography."/>
      <CaseStudyGrid slugs={["continue-arcade-commercial-cctv-derby","telesis-hitachi-fire-intruder-system","chesterfield-home-ajax-cctv-intruder"]}/>
      <div className="button-row"><Link className="button button-outline" href="/case-studies">View Fire & Security Projects</Link></div>
    </div></section>

    <section className="section section-alt"><div className="container">
      <SectionHeading eyebrow="Why NOX" title="Designed properly. Installed properly. Supported properly." text="NOX is a Chesterfield-based Fire & Security company combining local accountability with the experience and standards required for commercial, industrial and larger-scale projects. Advice, quotation, installation and ongoing support remain connected throughout."/>
      <FeatureGrid columns={3} items={[
        { title: "Property before products", text: "Entrances, routines, risks, appearance, existing equipment and future support are understood before the final device list is selected." },
        { title: "A quotation with reasons", text: "Important cameras, detectors, panels and service options are explained around the job they need to do rather than hidden inside a fixed package." },
        { title: "Careful installation finish", text: "Positions, cable routes, equipment colour, communication range and access for future maintenance are considered as part of the finished property." },
        { title: "Usable handover", text: "Apps, playback, users, operating modes, records and practical limitations are explained clearly before the project is signed off." },
        { title: "Connected support after installation", text: "Monitoring, servicing, repairs, takeovers and future upgrades stay connected to the same local business instead of disappearing into separate departments." },
        { title: "Real evidence, not stock claims", text: "Genuine project photography, detailed case studies and verified customer reviews show the type of work NOX has actually delivered." }
      ]}/>
      <div className="button-row"><Link className="button button-dark" href="/about-us">Meet NOX</Link><Link className="button button-outline" href="/case-studies">View Real Projects</Link></div>
    </div></section>

    <section className="home-local-band"><div className="container home-local-grid">
      <div className="home-local-copy"><span className="eyebrow">Our service areas</span><h2>Local experts.<br/>Wider coverage.</h2><p>Based in Chesterfield, NOX provides fire and security services across Derbyshire, Sheffield, South Yorkshire, Derby and the Peak District.</p><div className="home-area-pills">{homeAreas.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}</div></div>
      <div className="home-local-map"><img src="/images/chesterfield-coverage.png" alt="NOX Fire & Security coverage around Chesterfield, Sheffield, Derbyshire and surrounding areas"/><Link className="button button-light" href="/areas-we-serve">View All Areas <span aria-hidden="true">→</span></Link></div>
    </div></section>

    <section className="section"><div className="container"><SectionHeading eyebrow="Customer reviews" title="Feedback from residential and commercial customers" text="Genuine feedback about advice, workmanship, communication and handover."/><ReviewGrid names={["Ryan Hargreaves", "Rory Stirland", "Jez S"]}/><div className="button-row"><Link className="button button-outline" href="/reviews">Read Customer Reviews</Link></div></div></section>

    <ConversionPanel title="Tell us about the property, site or existing system" text="Use one clear enquiry for a new installation, servicing, monitoring, a fault or a takeover. NOX will guide the right next step." primaryLabel="Book a Site Survey" sourceLabel="homepage"/>
  </>
}
