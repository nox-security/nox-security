import type { Metadata } from "next"
import Link from "next/link"
import { CaseStudyGrid, ConversionPanel, FeatureGrid, JsonLd, ReviewGrid, ReviewSummaryStrip, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata, site } from "@/lib/site"
import { serviceSchema, webPageSchema } from "@/lib/schema"

export const metadata: Metadata = pageMetadata(
  "Fire Alarms, CCTV & Security Systems | Derbyshire & Sheffield",
  "Commercial and premium residential Fire Alarms, CCTV and intruder systems across Chesterfield, Sheffield, Derbyshire, Derby and the Peak District.",
  "/",
  { image: "/images/image-refresh/homepage-hero-cameras.jpg", imageAlt: "NOX CCTV camera range product hero image" },
)

const journeyRoutes = [
  { number: "01", eyebrow: "Residential", title: "Protect My Home", text: "Premium CCTV, Ajax alarms, perimeter detection and smart security designed around the home, driveway, garage and outbuildings.", href: "/residential", link: "Explore Home Security" },
  { number: "02", eyebrow: "Commercial", title: "Protect My Business", text: "Commercial CCTV, intruder protection, industrial security and coordinated systems for working premises and larger projects.", href: "/commercial", link: "Explore Commercial Security" },
  { number: "03", eyebrow: "Life safety", title: "Fire Alarms & Compliance", text: "Fire alarm installation and servicing, emergency lighting, risk-assessment support and clearer annual compliance planning.", href: "/fire-compliance", link: "Explore Fire & Compliance" },
  { number: "04", eyebrow: "Existing systems", title: "Existing System Support", text: "Servicing, monitoring, takeovers, fault finding, upgrades and ongoing packages for systems already installed.", href: "/service-plans", link: "Get Support for an Existing System" },
]

const residentialRoutes = [
  { title: "Home CCTV", text: "Recorder-based CCTV for driveways, doors, gardens, garages and outbuildings, with clear playback and remote viewing.", href: "/systems/home-cctv", image: "/images/image-refresh/home-cctv-live-view.webp", alt: "Residential CCTV live view showing full-property coverage" },
  { title: "Ajax Intruder Alarms", text: "MotionCam, door protection, keypads, sirens, app control and external detection selected around the home.", href: "/systems/intrusion-alarms", image: "/images/v4-12-9/residential-intruder-main.jpg", alt: "Black Ajax outdoor detector shown as the main image for residential intruder alarms" },
  { title: "Perimeter Protection", text: "Protection for gates, driveways, detached garages, workshops and separate buildings, planned as one connected system.", href: "/systems/perimeter-protection", image: "/images/v4-12-6/perimeter-main-white-devices.png", alt: "Ajax perimeter protection devices shown in a premium product presentation" },
  { title: "Smart Home Security", text: "App-led cameras, video doorbells, floodlight cameras and subscription-free options designed around convenient everyday use.", href: "/systems/smart-home-cctv", image: "/images/image-refresh/smart-home-eufy-installed.webp", alt: "Eufy dual-lens smart security camera installed at a home" },
]

const fireRoutes = [
  { title: "Fire Alarm Installation", text: "Conventional, addressable and suitable wireless systems designed around the premises and future servicing.", href: "/systems/fire-safety", image: "/images/v4-10/fire-alarm-installation-hero.jpeg", alt: "Ajax EN54 fire alarm control panel installed beside a fire alarm zone plan and manual call point" },
  { title: "Fire Alarm Servicing", text: "Planned testing, existing-system takeovers, records, defect reporting and clear remedial quotations.", href: "/service-plans/fire-alarm-servicing", image: "/images/v4-10/fire-alarm-servicing.jpeg", alt: "Commercial fire alarm control panel inspected during planned servicing" },
  { title: "Emergency Lighting", text: "New installations, testing, annual duration checks, failed-fitting reports and coordinated remedials.", href: "/systems/emergency-lighting", image: "/images/image-refresh/emergency-lighting-modern.webp", alt: "Emergency exit lighting installed at a commercial premises" },
]

const commercialRoutes = [
  { title: "Commercial CCTV", text: "Coverage, recording, evidence quality and remote access for hospitality, retail, offices, warehouses and industrial sites.", href: "/commercial/cctv", image: "/images/resent-installation/E6B4D998-0805-4B7E-8532-CC491C881B57.jpeg", alt: "Coordinated alarm monitoring and CCTV maintenance package from NOX" },
  { title: "Commercial Intruder Alarms", text: "Internal and external detection designed around access, staff use, valuable areas, opening hours and monitoring requirements.", href: "/commercial/intruder-alarms", image: "/images/revisions/tan-station-ajax-keypad.jpg", alt: "NOX branded Ajax keypad installed at a commercial premises" },
  { title: "Industrial & Multi-Site Security", text: "Several buildings, yards, loading areas and operational requirements planned as one coordinated security project.", href: "/commercial/industrial-warehouse-security", image: "/images/revisions/nox-commercial-cctv-installation.jpg", alt: "NOX engineer and van during an industrial security installation" },
]

const supportRoutes = [
  { title: "Servicing & Maintenance", text: "Planned alarm, CCTV, fire-alarm and emergency-lighting visits with clear testing, records and recommendations.", href: "/service-plans#servicing-maintenance", image: "/images/v4-10/servicing-monitoring-hero.jpeg", alt: "NOX servicing visit supporting an existing Fire and Security system" },
  { title: "Monitoring", text: "Professional alarm signalling, keyholder contact and agreed escalation for suitable maintained systems.", href: "/service-plans/alarm-monitoring", image: "/images/v4-13-2/alarm-monitoring-operator.jpg", alt: "Professional alarm monitoring operator handling security signals" },
  { title: "System Takeovers & Upgrades", text: "Existing systems assessed for access, faults, condition, repair, selective upgrades or replacement where appropriate.", href: "/services/security-system-takeover", image: "/images/image-refresh/commercial-old-camera.webp", alt: "Existing CCTV equipment assessed during a system takeover" },
  { title: "Ongoing Support Packages", text: "Bring suitable monitoring, alarm servicing, CCTV maintenance and planned visits under one clearer support arrangement.", href: "/service-plans/total-security", image: "/images/resent-installation/E6B4D998-0805-4B7E-8532-CC491C881B57.jpeg", alt: "Coordinated monitoring and maintenance support package from NOX" },
]

export default function HomePage() {
  const serviceStructuredData = serviceSchema({
    name: "Fire Alarms, CCTV and intruder system installation and servicing",
    description: "Commercial and premium residential Fire Alarm, CCTV, intruder and emergency-lighting services across Chesterfield, Sheffield, Derbyshire, Derby and the Peak District.",
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
        <div className="premium-kicker"><span>NOX Fire & Security</span><span>Chesterfield · Sheffield · Derby · South Yorkshire</span></div>
        <h1>Fire Alarms, CCTV &amp; Intruder Systems</h1>
        <p className="lead">Commercial and premium residential Fire Alarms, CCTV and Intruder Systems designed, installed and maintained across Chesterfield, Sheffield, Derbyshire, Derby and the Peak District.</p>
        <div className="button-row home-audience-actions home-contact-actions">
          <Link className="button button-light" href="/get-quote#quote-form">Book a Site Survey</Link>
          <a className="button button-outline" href={site.phoneHref}>Call</a>
          <a className="button button-outline" href={site.whatsapp}>WhatsApp</a>
        </div>
        <div className="hero-secondary-actions home-journey-links" aria-label="Choose a service route">
          <Link href="/residential">Protect My Home</Link>
          <Link href="/commercial">Protect My Business</Link>
          <Link href="/fire-compliance">Fire Alarms &amp; Compliance</Link>
          <Link href="/service-plans">Existing System Support</Link>
        </div>
        <div className="home-ajax-partner-mark">
          <Link href="/ajax-authorised-installer" aria-label="Official Ajax Partner and Ajax Authorised Installation Company">
            <img src="/images/logo-ajax-authorized-installation-company-en-wh.png" alt="Ajax Authorised Installation Company" />
          </Link>
        </div>
      </div>
    </section>

    <ReviewSummaryStrip label="46+ Google Reviews" />
    <TrustStrip variant="general" reviewTitle="46+ Google Reviews" />

    <section className="section home-customer-journeys"><div className="container">
      <SectionHeading eyebrow="Choose the right starting point" title="A clearer route from first visit to the right NOX service" text="Start with the property or situation. Each overview page explains the options, while direct service links remain available for customers who already know what they need."/>
      <div className="home-journey-grid">
        {journeyRoutes.map(item => <article className="home-journey-card" key={item.title}><span className="home-journey-number">{item.number}</span><span className="eyebrow">{item.eyebrow}</span><h2>{item.title}</h2><p>{item.text}</p><Link className="text-link" href={item.href}>{item.link} →</Link></article>)}
      </div>
    </div></section>

    <section className="section premium-client-section"><div className="container">
      <SectionHeading eyebrow="Residential CCTV & Security" title="Professional CCTV, Ajax alarms and external protection for the property" text="NOX starts with the views, access points and external areas that matter, then recommends the right combination of CCTV, intruder detection and perimeter protection." />
      <div className="system-route-grid residential-system-grid">
        {residentialRoutes.map(item => <article className="system-route-card" key={item.title}><img src={item.image} alt={item.alt}/><div><span className="eyebrow">Residential</span><h2>{item.title}</h2><p>{item.text}</p><Link className="text-link" href={item.href}>Explore {item.title} →</Link></div></article>)}
      </div>
      <div className="button-row"><Link className="button button-dark" href="/residential">Explore Home Security</Link><Link className="button button-outline" href="/get-quote?customer_type=Residential&enquiry_type=Installation#quote-form">Book a Home Security Survey</Link></div>
    </div></section>

    <section className="section section-alt fire-home-section"><div className="container">
      <div className="split-grid fire-home-intro"><div><SectionHeading eyebrow="Fire & Compliance" title="Installation, servicing and ongoing compliance support" text="New fire alarms, planned servicing, repairs, takeovers, emergency lighting and coordinated annual support for commercial premises."/></div><aside className="dark-panel"><h3>Discuss your fire requirements</h3><p>Tell us about the premises, existing system and work required. Risk assessments and extinguisher servicing can be coordinated through competent specialist partners where needed.</p><Link className="button button-light" href="/get-quote?customer_type=Commercial&service_category=Fire%20%26%20Compliance#quote-form">Arrange a Fire Alarm Survey</Link></aside></div>
      <div className="feature-grid columns-3 fire-route-grid media-route-grid">{fireRoutes.map((item, index) => <article className="feature-card media-route-card" key={item.title}><img src={item.image} alt={item.alt}/><div className="media-route-card-body"><span className="feature-number">{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.text}</p><Link className="text-link" href={item.href}>View service →</Link></div></article>)}</div>
      <div className="button-row"><Link className="button button-outline" href="/fire-compliance">Explore Fire & Compliance</Link></div>
    </div></section>

    <section className="section"><div className="container">
      <SectionHeading eyebrow="Commercial CCTV & Security" title="CCTV, intruder protection and coordinated systems for working sites" text="Commercial CCTV is planned around evidence quality, operations, access, several buildings and ongoing support, with intruder protection added where the site requires it."/>
      <div className="feature-grid columns-3 media-route-grid commercial-media-grid">{commercialRoutes.map((item, index) => <article className="feature-card media-route-card" key={item.title}><img src={item.image} alt={item.alt}/><div className="media-route-card-body"><span className="feature-number">{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.text}</p><Link className="text-link" href={item.href}>Explore service →</Link></div></article>)}</div>
      <div className="button-row"><Link className="button button-dark" href="/commercial">Explore Commercial Security</Link><Link className="button button-outline" href="/get-quote?customer_type=Commercial&enquiry_type=Installation#quote-form">Discuss Your Project</Link></div>
    </div></section>

    <section className="section section-alt home-support-section"><div className="container">
      <SectionHeading eyebrow="Existing System Support" title="Servicing, monitoring and upgrades that create a clearer long-term support route" text="Customers with an existing system can start here without needing to know whether the answer is maintenance, monitoring, a takeover, a repair or a phased upgrade."/>
      <div className="feature-grid columns-4 media-route-grid support-media-grid">{supportRoutes.map((item, index) => <article className="feature-card media-route-card" key={item.title}><img src={item.image} alt={item.alt}/><div className="media-route-card-body"><span className="feature-number">{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.text}</p><Link className="text-link" href={item.href}>Explore support →</Link></div></article>)}</div>
      <div className="button-row"><Link className="button button-light" href="/service-plans">Explore Existing System Support</Link><Link className="button button-outline" href="/get-quote?enquiry_type=Takeover#quote-form">Get Support for an Existing System</Link></div>
    </div></section>

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

    <section className="section"><div className="container"><SectionHeading eyebrow="Customer reviews" title="Feedback from residential and commercial customers" text="Genuine feedback about advice, workmanship, communication and handover."/><ReviewGrid names={["Ryan Hargreaves", "Rory Stirland", "Jez S"]}/><div className="button-row"><Link className="button button-outline" href="/reviews">Read Customer Reviews</Link></div></div></section>

    <ConversionPanel title="Tell us about the property, site or existing system" text="Use one clear enquiry for a new installation, servicing, monitoring, a fault or a takeover. NOX will guide the right next step." primaryLabel="Request a Quotation" sourceLabel="homepage"/>
  </>
}
