import type { Metadata } from "next"
import Link from "next/link"
import { CaseStudyGrid, ConversionPanel, DualButtons, FeatureGrid, JsonLd, ReviewGrid, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata, site } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Alarms, CCTV & Fire Safety in Chesterfield, Sheffield & Derbyshire",
  "Tailored intruder alarms, CCTV, fire alarm systems, monitoring, maintenance and takeovers for homes and businesses across Chesterfield, Sheffield and Derbyshire.",
  "/"
)

const solutions = [
  { title: "Intruder Alarms", text: "Smart wired, wireless and hybrid protection for homes, commercial premises and external areas.", image: "/images/intrusion-alarms.png", alt: "Black Ajax intruder alarm system installed in Chesterfield", href: "/systems/intrusion-alarms" },
  { title: "CCTV Systems", text: "High-resolution CCTV planned around entrances, vehicles, boundaries and the evidence you need.", image: "/images/cctv-systems.png", alt: "Black professional CCTV camera for a Derbyshire property", href: "/systems/cctv" },
  { title: "Fire & Compliance", text: "Fire alarm installation, servicing, emergency lighting and coordinated commercial compliance support.", image: "/images/fire-safety.png", alt: "Fire alarm equipment for a commercial premises", href: "/systems/fire-safety" },
  { title: "Service Plans", text: "Monitoring, maintenance, system takeovers and annual packages with one reliable point of contact.", image: "/images/maintenance.png", alt: "Security and fire system maintenance by NOX", href: "/service-plans" }
]

export default function HomePage() {
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Fire and security system installation", provider: { "@type": "LocalBusiness", name: site.name }, areaServed: ["Chesterfield", "Sheffield", "Derbyshire"], serviceType: ["Intruder alarms", "CCTV", "Fire alarms", "Monitoring", "Maintenance"] }
  return <>
    <JsonLd data={serviceSchema}/>
    <section className="home-hero">
      <div className="home-hero-bg"><img src="/images/hero-house.webp" alt="Modern home protected by NOX Fire & Security in Derbyshire" /></div>
      <div className="container home-hero-content">
        <span className="eyebrow">Chesterfield · Sheffield · Derbyshire</span>
        <h1>Security systems built around your property, not a package.</h1>
        <p className="lead">Intruder alarms, CCTV and fire safety for homes and businesses — designed properly, installed cleanly and supported long after handover.</p>
        <DualButtons />
        <div className="hero-proof"><span>Residential & commercial</span><span>Monitoring & maintenance</span><span>System takeovers</span><span>Local, direct support</span></div>
      </div>
    </section>
    <TrustStrip />

    <section className="section"><div className="container">
      <SectionHeading eyebrow="Choose your route" title="Get the right next step without the usual back-and-forth" text="Know roughly what you need? Send an enquiry for a tailored quote. Need us to assess the property? Book a free security survey directly." />
      <div className="route-grid">
        <article className="route-card"><span className="route-number">ROUTE 01</span><div><h3>Request a Free Quote</h3><p>Best when you can describe the system, property and number of cameras or devices required. Your enquiry goes directly into the NOX team’s follow-up system.</p><Link className="button button-light" href="/get-quote">Start Website Enquiry →</Link></div></article>
        <article className="route-card light"><span className="route-number">ROUTE 02</span><div><h3>Book a Free Security Survey</h3><p>Choose an available appointment for us to assess the property, understand the risks and design the right solution without pressure.</p><Link className="button button-dark" href="/book-security-survey">View Survey Times →</Link></div></article>
      </div>
    </div></section>

    <section className="section section-alt"><div className="container">
      <SectionHeading eyebrow="Complete fire and security" title="One local team across installation, monitoring and ongoing service" text="Residential and commercial systems designed to work together, with clear ownership and support." />
      <div className="solution-grid">{solutions.map(item => <article className="solution-card" key={item.title}><img src={item.image} alt={item.alt}/><div className="solution-card-body"><h3>{item.title}</h3><p>{item.text}</p><Link className="text-link" href={item.href}>Explore {item.title} →</Link></div></article>)}</div>
      <DualButtons quoteLabel="Request a Solution Quote" surveyLabel="Book a Security Survey"/>
    </div></section>

    <section className="section"><div className="container">
      <SectionHeading eyebrow="Homes and businesses" title="The same professional standard, scaled to the property" />
      <div className="commercial-band">
        <div><span className="eyebrow">Residential</span><h2>Protection that fits around daily life.</h2><p>From simple alarm replacements and driveway CCTV to whole-home security, outbuildings and perimeter detection. We keep the system easy to use and the installation tidy.</p><div className="sector-tags"><span>Homes</span><span>Landlords</span><span>HMOs</span><span>Rural properties</span><span>Holiday lets</span></div><Link className="button button-dark" href="/systems">Residential solutions</Link></div>
        <div><span className="eyebrow">Commercial</span><h2>Security, fire and compliance with one point of contact.</h2><p>Commercial CCTV, intruder alarms, fire systems, monitoring, maintenance and coordinated annual packages for single sites and growing portfolios.</p><div className="sector-tags"><span>Retail</span><span>Offices</span><span>Industrial</span><span>Hospitality</span><span>Multi-site</span></div><Link className="button button-light" href="/commercial">Commercial solutions</Link></div>
      </div>
    </div></section>

    <section className="section section-alt"><div className="container">
      <SectionHeading eyebrow="Why choose NOX" title="Designed properly. Installed properly. Supported properly." text="A local, independent approach that keeps the advice clear and the system tailored to the property."/>
      <FeatureGrid columns={4} items={[
        { title: "Property-first design", text: "The layout, risks, operating routine and existing equipment are assessed before products are selected." },
        { title: "Clean installation", text: "Devices, cameras and cable routes are planned carefully and the working area is left tidy." },
        { title: "Clear handover", text: "Users, apps, playback, operating modes and next steps are explained before the job is closed." },
        { title: "Direct ongoing support", text: "Monitoring, maintenance, takeovers, repairs and future upgrades remain available through the NOX team." }
      ]}/>
    </div></section>

    <section className="section"><div className="container">
      <SectionHeading eyebrow="How the process works" title="From first enquiry to annual support"/>
      <FeatureGrid columns={4} items={[
        { title: "Enquiry or survey", text: "Send the project details for a quote or book a free security survey directly into the calendar." },
        { title: "Tailored quotation", text: "Equipment, installation and optional ongoing support are set out clearly." },
        { title: "Installation and handover", text: "The system is installed, tested and explained properly." },
        { title: "Monitoring and renewal", text: "Choose monitoring, maintenance or compliance support where it adds value." }
      ]}/>
    </div></section>

    <section className="section section-alt"><div className="container">
      <SectionHeading eyebrow="After installation" title="Monitoring, maintenance and takeovers that keep systems useful" text="A security or fire system should stay healthy, current and easy to manage. We can support new NOX installations and suitable existing systems." />
      <div className="feature-grid columns-3">
        <article className="feature-card"><span className="feature-number">01</span><h3>24/7 Monitoring</h3><p>Alarm signalling, keyholder notification and system supervision options for residential and commercial properties.</p><Link className="text-link" href="/service-plans/alarm-monitoring">Explore monitoring →</Link></article>
        <article className="feature-card"><span className="feature-number">02</span><h3>Annual Maintenance</h3><p>Engineer servicing, device testing, battery and system health checks, cleaning, updates and service records.</p><Link className="text-link" href="/service-plans">View service plans →</Link></article>
        <article className="feature-card"><span className="feature-number">03</span><h3>System Takeovers</h3><p>Inspection, fault review, remote access recovery, servicing and sensible upgrade plans for suitable existing systems.</p><Link className="text-link" href="/contact">Discuss a takeover →</Link></article>
      </div>
    </div></section>

    <section className="section"><div className="container"><SectionHeading eyebrow="Recent work" title="Real installations across Derbyshire and surrounding areas" text="A selection of residential and commercial projects delivered by NOX."/><CaseStudyGrid limit={3}/></div></section>

    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Customer confidence" title="Trusted for clear advice and proper workmanship"/><ReviewGrid limit={3}/><div className="button-row"><Link className="button button-outline" href="/reviews">Read Customer Reviews</Link><Link className="button button-light" href="/case-studies">View Case Studies</Link></div></div></section>

    <section className="section"><div className="container split-grid"><div><SectionHeading eyebrow="Local coverage" title="Based in Chesterfield. Working across Sheffield, Derbyshire and beyond." text="Our core area includes Chesterfield, Sheffield, Dronfield, Matlock, Bakewell, Buxton and surrounding towns. We also travel further for commercial and larger projects."/><Link className="button button-outline" href="/areas-we-serve">See All Areas We Cover</Link></div><aside className="dark-panel"><h3>Popular local searches</h3><div className="related-links"><Link href="/areas/chesterfield">Security systems Chesterfield →</Link><Link href="/areas/sheffield">CCTV Sheffield →</Link><Link href="/areas/derbyshire">Alarm installers Derbyshire →</Link><Link href="/commercial/fire-compliance">Commercial fire compliance →</Link></div></aside></div></section>
    <ConversionPanel />
  </>
}
