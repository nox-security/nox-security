import type { Metadata } from "next"
import Link from "next/link"
import {
  AreaLinks,
  Breadcrumbs,
  CaseStudyGrid,
  ContactActions,
  ConversionPanel,
  FeatureGrid,
  JsonLd,
  ReviewGrid,
  SectionHeading,
  TrustStrip,
} from "@/components/marketing"
import { pageMetadata } from "@/lib/site"
import { breadcrumbSchema, faqSchema, serviceSchema, webPageSchema } from "@/lib/schema"

const pagePath = "/ajax-authorised-installer"
const pageDescription = "Ajax Authorised Installation Company for EN54 commercial fire alarm systems, CCTV and intruder alarms across Chesterfield, Sheffield, South Yorkshire, Derbyshire, Derby and the Peak District."

export const metadata: Metadata = pageMetadata(
  "Ajax Authorised Installer Chesterfield & Sheffield | NOX",
  pageDescription,
  pagePath,
  {
    image: "/images/ajax-products/ajax-cctv-system.webp",
    imageAlt: "Ajax professional security technology installed and supported by NOX Fire & Security",
  },
)

const whyAjax = [
  {
    title: "One connected platform",
    text: "Intruder alarms, cameras, video doorbells, fire devices and suitable automation can be managed through the Ajax platform while each part of the system is still designed around the property.",
  },
  {
    title: "Professional app control",
    text: "Users can arm and disarm, review events, view cameras, manage permissions and receive alerts through Ajax apps without losing the need for a proper survey, handover and support route.",
  },
  {
    title: "Residential and commercial scale",
    text: "Ajax can protect a home, showroom, office, warehouse, industrial site, rural estate or multi-building property using equipment selected around access, risk and daily operation.",
  },
  {
    title: "Designed to grow",
    text: "Additional detection, cameras, users, automation and monitoring can be considered later when the original system has been planned with expansion and ongoing support in mind.",
  },
]

const intruderProducts = [
  {
    name: "Ajax hubs and communication",
    description: "The hub manages the system, connected devices, users, alarms and communication. The correct model is selected around the property, internet options, mobile backup and the level of photo verification required.",
    image: "/images/image-refresh/intruder-simple-control.webp",
    alt: "Ajax hub and app control imagery used on the residential intruder alarm page",
    position: "center 48%",
  },
  {
    name: "MotionCam photo verification",
    description: "MotionCam devices can provide visual confirmation when an alarm is triggered, helping users and monitoring teams understand what caused the event without turning the alarm into continuous indoor CCTV.",
    image: "/images/image-refresh/intruder-motioncam-verification.webp",
    alt: "Ajax MotionCam photo verification shown in residential intruder alarm imagery",
    position: "center 48%",
  },
  {
    name: "Door, window and perimeter protection",
    description: "Opening contacts, internal detectors, curtain protection and suitable outdoor detection can be layered around entrances, driveways, yards, garages and external approaches.",
    image: "/images/image-refresh/intruder-doorprotect.webp",
    alt: "Ajax door and window protection shown in residential intruder alarm imagery",
    position: "center 48%",
  },
  {
    name: "Keypads, sirens and user control",
    description: "Keypads, tags, app permissions and external sirens are configured around the people using the property, opening and closing routines, night modes and agreed response procedures.",
    image: "/images/image-refresh/intruder-keypad-touchscreen.webp",
    alt: "Ajax touchscreen keypad shown in residential intruder alarm imagery",
    position: "center 48%",
  },
]

const cctvRoutes = [
  {
    title: "Ajax 5MP and 8MP cameras",
    text: "Fixed camera types and lens options are selected around the scene, identification distance, lighting and evidence required rather than using one camera specification everywhere.",
    image: "/images/image-refresh/ajax-commercial-domes.webp",
    alt: "Ajax commercial dome cameras used for professional CCTV installation",
    href: "/systems/cctv",
    position: "center",
  },
  {
    title: "NVR recording and playback",
    text: "Ajax NVR systems provide a structured route for recording, live viewing and playback, with storage planned around camera quantity, retention expectations and how incidents will be reviewed.",
    image: "/images/v4-13-10/peak-electronic/nine-camera-live-view.jpg",
    alt: "Nine-camera commercial CCTV live view installed by NOX",
    href: "/commercial/cctv",
    position: "center 45%",
  },
  {
    title: "AI-assisted event detection",
    text: "Compatible Ajax cameras can support object recognition and event tools that help users review people, vehicles and defined activity more efficiently across larger or busier properties.",
    image: "/images/v4-13-15/chatsworth-estate/live-view-testing.jpg",
    alt: "Ajax CCTV live view and AI event testing at a rural estate",
    href: "/case-studies/chatsworth-estate-cctv-upgrade",
    position: "center",
  },
  {
    title: "Commercial and rural coverage",
    text: "The same platform can be planned around offices, workshops, industrial units, showrooms, estates, farms and multi-building sites with camera positions designed around real operational routes.",
    image: "/images/v4-13-15/chatsworth-estate/ajax-camera-stone-wall.jpg",
    alt: "Ajax 8MP CCTV camera installed at a large rural estate",
    href: "/commercial/industrial-warehouse-security",
    position: "center 40%",
  },
]

const en54Products = [
  {
    title: "EN54 Fire Hub",
    text: "The Ajax EN54 Fire Hub provides the central control and indication point for a wireless commercial fire alarm system, with clear alarm, fault, zone and system information for responsible users.",
    image: "/images/v4-10/fire-alarm-installation-hero.jpeg",
    alt: "Ajax EN54 Fire Hub installed below a commercial fire alarm zone plan",
    position: "center 48%",
  },
  {
    title: "Smoke and heat detection",
    text: "Addressable smoke, heat and combined detector options are selected around the rooms, ceiling conditions, fire zones and warning strategy established for the premises.",
    image: "/images/v4-10/fire-smoke-detector.jpeg",
    alt: "Ajax EN54 smoke and heat detector installed on a commercial ceiling",
    position: "center 42%",
  },
  {
    title: "Manual activation",
    text: "Manual call points are positioned along suitable escape routes and exits so staff and occupants can raise the fire alarm clearly when required.",
    image: "/images/v4-10/fire-manual-call-point.jpeg",
    alt: "Ajax EN54 manual fire alarm call point installed by NOX",
    position: "center 42%",
  },
  {
    title: "Sounders and visual warning",
    text: "Sounders and visual alarm devices are specified and positioned around the building so the warning method suits the environment, occupancy and fire alarm design.",
    image: "/images/v4-10/fire-sounder.jpeg",
    alt: "Ajax EN54 fire alarm sounder and visual warning device",
    position: "center 38%",
  },
]

const faqs = [
  {
    q: "Is NOX an official Ajax partner?",
    a: "Yes. NOX is an Ajax Authorised Installation Company and official Ajax partner. We install and support Ajax security products while keeping the survey, system design, installation quality and ongoing customer support under NOX responsibility.",
  },
  {
    q: "Where does NOX install Ajax alarms?",
    a: "NOX installs Ajax systems across Chesterfield, Sheffield, South Yorkshire, Derbyshire, Derby and the Peak District, with wider travel for suitable commercial, industrial, multi-site and larger residential projects.",
  },
  {
    q: "Can Ajax intruder alarms and CCTV work together?",
    a: "Yes. Ajax intruder protection and Ajax video surveillance can be managed within the wider Ajax platform. The alarm design, camera layout, recording method and user permissions still need to be planned separately around the property and required outcome.",
  },
  {
    q: "Does Ajax make commercial fire alarm systems?",
    a: "Yes. The Ajax EN54 Line is designed for wireless commercial fire detection and alarm systems. NOX specifies Ajax EN54 where it is suitable for the building, fire strategy, zoning, warning coverage and future servicing requirements.",
  },
  {
    q: "Can NOX take over or upgrade an existing Ajax system?",
    a: "Suitable existing Ajax systems can be assessed for ownership, administrator access, device condition, communication, app setup, faults, expansion and future support. A takeover survey confirms what can be retained and what should be corrected or upgraded.",
  },
  {
    q: "Is Ajax suitable for both homes and businesses?",
    a: "Yes. Ajax can be designed for homes, offices, showrooms, warehouses, industrial sites, rural estates and other commercial premises. The equipment and system structure should follow the property, the risk and the people using it.",
  },
]

export default function AjaxAuthorisedInstallerPage() {
  const structuredData = [
    serviceSchema({
      name: "Ajax alarm, CCTV and EN54 fire system installation",
      description: pageDescription,
      path: pagePath,
      serviceType: ["Ajax EN54 fire alarm installation", "Ajax fire alarm servicing and maintenance", "Ajax commercial CCTV installation", "Ajax home CCTV installation", "Ajax intruder alarm installation", "Ajax system upgrades and takeovers"],
      audience: "Residential and Commercial",
      image: "/images/ajax-products/ajax-cctv-system.webp",
    }),
    webPageSchema({
      name: "Official Ajax Partner and Ajax Authorised Installer",
      description: pageDescription,
      path: pagePath,
      image: "/images/ajax-products/ajax-cctv-system.webp",
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Ajax Authorised Installer", path: pagePath },
    ]),
    faqSchema(faqs),
  ]

  return <>
    {structuredData.map((data, index) => <JsonLd data={data} key={index}/>)}
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Ajax Authorised Installer" }]}/>

    <section className="page-hero page-hero-split ajax-partner-hero">
      <div className="container page-hero-grid">
        <div className="page-hero-copy">
          <span className="eyebrow">Official Ajax Partner</span>
          <h1>Official Ajax partner for alarms, CCTV and EN54 fire systems</h1>
          <p className="lead">NOX is an Ajax Authorised Installation Company providing suitable EN54 commercial fire alarm systems, professional CCTV and Ajax intruder alarms across Chesterfield, Sheffield, South Yorkshire, Derbyshire, Derby and the Peak District.</p>
          <ContactActions primaryLabel="Discuss an Ajax System" audience="Residential & Commercial" serviceCategory="Ajax Systems" enquiryType="Installation" sourceLabel="ajax-authorised-installer-hero"/>
        </div>
        <aside className="page-hero-media ajax-authorisation-hero-card">
          <img src="/images/logo-ajax-authorized-installation-company-en-wh.png" alt="Ajax Authorised Installation Company"/>
          <span className="micro-label">NOX Fire & Security</span>
          <h2>Authorised Ajax installation, configured around the property</h2>
          <p>Ajax provides the professional security platform and product ecosystem. NOX remains responsible for the survey, system design, installation, commissioning, handover and ongoing local support.</p>
          <div className="ajax-authorisation-tags"><span>EN54 Fire</span><span>CCTV</span><span>Intruder</span><span>Perimeter</span></div>
        </aside>
      </div>
    </section>

    <TrustStrip variant="general"/>

    <section className="section ajax-partner-status-section"><div className="container split-grid ajax-partner-status-grid">
      <div>
        <SectionHeading eyebrow="How our Ajax partnership works" title="Ajax technology with NOX design, installation and local accountability" text="NOX is an Ajax Authorised Installation Company. That gives us a recognised professional route into the Ajax ecosystem, product training and technical knowledge, while the responsibility for your survey, design, installation, commissioning, handover and ongoing support remains with NOX."/>
        <div className="feature-grid columns-2 ajax-partner-mini-grid">
          <article className="feature-card ajax-certificate-feature"><span className="feature-number">01</span><h3>Official authorised status</h3><p>NOX is recognised within the Ajax professional installer network and uses genuine Ajax equipment selected around the property and required outcome.</p></article>
          <article className="feature-card ajax-certificate-feature ajax-certificate-feature-intrusion"><span className="feature-number">02</span><h3>Training and product knowledge</h3><p>Ajax Academy training supports correct setup across intrusion and video systems, backed by continued product and platform development from Ajax.</p><span className="ajax-certificate-proof">Ajax Academy · Intrusion & Video</span></article>
          <article className="feature-card ajax-certificate-feature"><span className="feature-number">03</span><h3>NOX designs the finished system</h3><p>We survey the building, choose device positions, configure users and communications, commission the system and explain the finished setup at handover.</p></article>
          <article className="feature-card ajax-certificate-feature"><span className="feature-number">04</span><h3>Local support after installation</h3><p>Monitoring, servicing, CCTV maintenance, additions, faults and takeover support stay connected to the same local NOX service route after installation.</p></article>
        </div>
      </div>
      <aside className="ajax-partner-logo-card">
        <img src="/images/logo-ajax-authorized-installation-company-en-wh.png" alt="Official Ajax Authorised Installation Company logo"/>
        <span>Official installer status</span>
        <h2>Ajax Authorised Installation Company</h2>
        <p>Professional Ajax systems installed around the property — not sold as a generic equipment bundle.</p>
        <Link className="button button-light" href="/case-studies">View Real Ajax Projects</Link>
      </aside>
    </div></section>

    <section className="section section-alt"><div className="container">
      <SectionHeading eyebrow="Why Ajax systems?" title="Modern security technology is most effective when the design starts with the property" text="Ajax gives NOX a broad professional platform for fire, video, intrusion and suitable automation. The system still succeeds or fails on the survey, device positions, communication, user setup and ongoing support."/>
      <FeatureGrid items={whyAjax} columns={4}/>
    </div></section>

    <section className="section en54-overview-section"><div className="container">
      <SectionHeading eyebrow="Ajax EN54 fire alarm systems" title="Wireless commercial fire detection with clear control, zoning and future servicing" text="The Ajax EN54 Line can provide a professional wireless fire-alarm route for suitable commercial premises. NOX assesses the building, fire strategy, zones, detector types, warning coverage, communication and future maintenance before confirming whether Ajax EN54 is the correct system."/>
      <div className="en54-overview-grid">{en54Products.map(item => <article className="en54-overview-card" key={item.title}><div className="en54-overview-media"><img src={item.image} alt={item.alt} style={{ objectPosition: item.position }}/></div><div className="en54-overview-copy"><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div>
      <div className="section-action-row"><Link className="button button-light" href="/systems/fire-safety">Explore Ajax EN54 Fire Alarms</Link><Link className="button button-outline" href="/case-studies/telesis-hitachi-fire-intruder-system">View an EN54 Project</Link></div>
    </div></section>

    <section className="section section-alt"><div className="container">
      <SectionHeading eyebrow="Ajax CCTV systems" title="Professional Ajax CCTV for homes, commercial premises and rural sites" text="Camera quality is only one part of a useful CCTV system. NOX plans the views, identification detail, lighting, recording, network, playback and event tools around the areas the customer genuinely needs to see."/>
      <div className="feature-grid columns-2 media-route-grid ajax-partner-media-grid">{cctvRoutes.map((item, index) => <article className="feature-card media-route-card" key={item.title}><img src={item.image} alt={item.alt} style={{ objectPosition: item.position }}/><div className="media-route-card-body"><span className="feature-number">{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.text}</p><Link className="text-link" href={item.href}>Explore this route →</Link></div></article>)}</div>
      <div className="section-action-row"><Link className="button button-light" href="/commercial/cctv">Commercial Ajax CCTV</Link><Link className="button button-outline" href="/systems/home-cctv">Home CCTV Installation</Link></div>
    </div></section>

    <section className="section ajax-product-section"><div className="container">
      <div className="platform-intro">
        <div><span className="eyebrow">Ajax intruder alarms</span><h2>Smart intruder protection for homes, businesses and larger sites</h2><p>NOX combines the correct hub, opening protection, movement detection, photo verification, external detection, keypads and sirens around the way the property is entered, occupied, armed and responded to.</p></div>
        <img src="/images/logo-ajax-authorized-installation-company-en-wh.png" alt="Ajax Authorised Installation Company"/>
      </div>
      <div className="product-detail-grid">{intruderProducts.map(product => <article className="product-detail-card" key={product.name}><div className="product-detail-image product-detail-photo ajax-intruder-premium-image"><img src={product.image} alt={product.alt} style={{ objectPosition: product.position }}/></div><div><h3>{product.name}</h3><p>{product.description}</p></div></article>)}</div>
      <div className="section-action-row"><Link className="button button-light" href="/systems/intrusion-alarms">Explore Ajax Intruder Alarms</Link><Link className="button button-outline" href="/systems/perimeter-protection">Explore Perimeter Protection</Link></div>
    </div></section>

    <section className="section section-alt"><div className="container">
      <SectionHeading eyebrow="Real Ajax installations" title="Ajax fire systems, CCTV, alarms and perimeter protection installed by NOX" text="These are genuine NOX projects using real installation photography. Each page explains the property, original requirement, system design, equipment and completed outcome."/>
      <CaseStudyGrid slugs={["chesterfield-home-ajax-cctv-intruder", "dronfield-timber-perimeter", "peak-electronic-security", "telesis-hitachi-fire-intruder-system", "chesterfield-kitchen-showroom", "chatsworth-estate-cctv-upgrade"]}/>
      <div className="section-action-row"><Link className="button button-outline" href="/case-studies">View All NOX Projects</Link></div>
    </div></section>

    <section className="section"><div className="container split-grid ajax-support-grid">
      <div><SectionHeading eyebrow="After installation" title="Monitoring, servicing, takeovers and long-term Ajax support" text="An Ajax system should not become unsupported after handover. NOX supports suitable monitoring, planned intruder servicing, CCTV maintenance, faults, device additions, user changes and existing-system takeover assessments."/><div className="related-links"><Link href="/service-plans/alarm-monitoring">Ajax alarm monitoring →</Link><Link href="/service-plans/alarm-maintenance">Intruder alarm servicing →</Link><Link href="/service-plans/cctv-maintenance">CCTV maintenance →</Link><Link href="/services/security-system-takeover">Ajax system takeovers →</Link></div></div>
      <aside className="dark-panel"><h3>Already have an Ajax system?</h3><p>Share the hub model, property postcode, administrator-access position, devices installed, known faults and the support you need. NOX can confirm whether a takeover, service, repair or upgrade survey is the correct next step.</p><ContactActions primaryLabel="Discuss an Existing Ajax System" compact audience="Residential & Commercial" serviceCategory="Ajax Systems" enquiryType="Takeover" sourceLabel="ajax-authorised-installer-support"/></aside>
    </div></section>

    <section className="section section-alt"><div className="container split-grid ajax-local-search-grid">
      <div><SectionHeading eyebrow="Local Ajax installation and support" title="Ajax systems across Chesterfield, Sheffield, South Yorkshire, Derbyshire, Derby and the Peak District" text="Customers searching locally for Ajax alarms, Ajax CCTV, perimeter protection or Ajax EN54 fire systems can use this page as the starting point, then move directly into the relevant NOX service, area or real-project page."/><div className="related-links"><Link href="/systems/fire-safety">Ajax EN54 fire alarms →</Link><Link href="/service-plans/fire-alarm-servicing">Fire alarm service & maintenance →</Link><Link href="/commercial/cctv">Ajax commercial CCTV →</Link><Link href="/systems/home-cctv">Home CCTV →</Link><Link href="/systems/intrusion-alarms">Ajax intruder alarms →</Link><Link href="/systems/perimeter-protection">Ajax perimeter protection →</Link></div></div>
      <aside className="dark-panel"><h3>Looking for a local Ajax installer?</h3><p>Share the property postcode, whether it is residential or commercial, the areas that need protecting and whether you are considering alarms, cameras, fire detection or support for an existing Ajax system.</p><ContactActions primaryLabel="Book an Ajax Survey" compact audience="Residential & Commercial" serviceCategory="Ajax Systems" enquiryType="Installation" sourceLabel="ajax-authorised-installer-local"/></aside>
    </div></section>

    <AreaLinks slugs={["chesterfield", "sheffield", "derbyshire", "dronfield", "buxton", "bakewell"]} title="Ajax fire alarm, CCTV and intruder installation across the NOX service area"/>

    <section className="section section-alt"><div className="container">
      <SectionHeading eyebrow="Ajax installer FAQs" title="Questions about Ajax alarms, cameras, fire systems and authorised installation" text="Clear answers for customers comparing Ajax products, looking for an official local partner or planning an upgrade to an existing system."/>
      <div className="faq-list">{faqs.map(item => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div>
    </div></section>

    <section className="section"><div className="container"><SectionHeading eyebrow="Customer experience" title="Professional installation supported by clear advice and local aftercare"/><ReviewGrid names={["Ryan Hargreaves", "Sasha Brailsford", "Rory Stirland"]}/></div></section>

    <ConversionPanel title="Discuss an Ajax system with an authorised local installer" text="Tell NOX whether the property is residential or commercial, which areas need protection and whether you are considering an alarm, CCTV, perimeter detection, EN54 fire system or an upgrade to existing Ajax equipment." primaryLabel="Get an Ajax System Quote" audience="Residential & Commercial" serviceCategory="Ajax Systems" enquiryType="Installation" sourceLabel="ajax-authorised-installer-final"/>
  </>
}
