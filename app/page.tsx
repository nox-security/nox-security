import type { Metadata } from "next"
import Link from "next/link"
import { BlogGrid, CaseStudyGrid, ConversionPanel, DualButtons, FeatureGrid, JsonLd, ReviewGrid, ReviewSummaryStrip, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata, site } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Fire & Security Systems Designed Around Your Property",
  "Professional intruder alarms, CCTV, fire alarms, monitoring, servicing and system takeovers for homes and businesses across Chesterfield, Sheffield and Derbyshire.",
  "/"
)

const solutions = [
  { title: "Intruder Alarms", text: "Smart wired, wireless and hybrid protection for homes, commercial premises, outbuildings and external areas.", image: "/images/intrusion-alarms.png", alt: "Ajax intruder alarm system installed for a property in Chesterfield", href: "/systems/intrusion-alarms" },
  { title: "CCTV Systems", text: "High-resolution CCTV planned around entrances, vehicles, boundaries, working areas and the footage you need.", image: "/images/cctv-systems.png", alt: "Professional CCTV camera for a home or business in Derbyshire", href: "/systems/cctv" },
  { title: "Fire & Life Safety", text: "Fire alarm installation and servicing, emergency lighting and coordinated commercial fire-safety support.", image: "/images/fire-safety.png", alt: "Fire alarm equipment for a commercial property", href: "/systems/fire-safety" },
  { title: "Service Plans & Aftercare", text: "Monitoring, maintenance, fire servicing, takeovers and annual support through one local point of contact.", image: "/images/maintenance.png", alt: "Security and fire system servicing by NOX", href: "/service-plans" }
]

export default function HomePage() {
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Fire and security system installation and servicing", provider: { "@type": "LocalBusiness", name: site.name }, areaServed: ["Chesterfield", "Sheffield", "Derbyshire"], serviceType: ["Intruder alarms", "CCTV", "Fire alarms", "Monitoring", "Maintenance", "System takeovers"] }
  return <>
    <JsonLd data={serviceSchema}/>
    <section className="home-hero">
      <div className="home-hero-bg"><img src="/images/hero-house.webp" alt="Modern home protected by NOX Fire & Security in Derbyshire" /></div>
      <div className="container home-hero-content">
        <span className="eyebrow">Chesterfield · Sheffield · Derbyshire</span>
        <h1>Professional fire and security systems designed around your property.</h1>
        <p className="lead">Intruder alarms, CCTV, fire safety and ongoing support for homes and businesses — designed properly, installed properly and supported properly.</p>
        <DualButtons quoteLabel="Get a Free Quote" />
        <div className="hero-proof"><span>Residential & commercial</span><span>Fire, alarm & CCTV</span><span>Monitoring & maintenance</span><span>Local, direct aftercare</span></div>
      </div>
    </section>
    <ReviewSummaryStrip />
    <TrustStrip />

    <section className="section"><div className="container">
      <SectionHeading eyebrow="One simple way to get started" title="Tell us what you need. We will guide the next step." text="Use one enquiry form for residential, commercial, installation, servicing, repairs or system takeovers. We will review the details and arrange a site survey when the property needs to be assessed." />
      <div className="single-route-panel">
        <div><span className="route-number">ONE ENQUIRY · EVERY SERVICE</span><h2>Get a free, tailored quote</h2><p>Choose residential or commercial, tell us whether the enquiry is for alarms, CCTV, fire safety or ongoing servicing, and add any existing-system details you already know.</p></div>
        <Link className="button button-dark" href="/get-quote">Start Your Enquiry →</Link>
      </div>
    </div></section>

    <section className="section section-alt"><div className="container">
      <SectionHeading eyebrow="Complete fire and security" title="Installation, servicing and aftercare through one local team" text="NOX designs the system around the property first, then keeps support clear after handover." />
      <div className="solution-grid">{solutions.map(item => <article className="solution-card" key={item.title}><img src={item.image} alt={item.alt}/><div className="solution-card-body"><h3>{item.title}</h3><p>{item.text}</p><Link className="text-link" href={item.href}>Explore {item.title} →</Link></div></article>)}</div>
      <DualButtons quoteLabel="Request a Tailored Quote" />
    </div></section>

    <section className="section"><div className="container">
      <SectionHeading eyebrow="Homes and businesses" title="The same professional standard, shaped around different needs" text="Residential protection should be simple to live with. Commercial systems need to support people, premises, records and ongoing responsibilities." />
      <div className="commercial-band">
        <div><span className="eyebrow">Residential</span><h2>Security that fits around your home and daily life.</h2><p>From alarm replacements and driveway CCTV to whole-home protection, garages, outbuildings and perimeter detection. The system is kept straightforward to use and the installation is completed with care.</p><div className="sector-tags"><span>Homes</span><span>Driveways</span><span>Garages</span><span>Outbuildings</span><span>Landlords</span></div><Link className="button button-dark" href="/residential">Residential Fire & Security</Link></div>
        <div><span className="eyebrow">Commercial</span><h2>Alarm, CCTV, fire and annual support in one place.</h2><p>Joined-up security and fire support for shops, offices, warehouses, industrial units, garages, yards, hospitality, HMOs and larger multi-system sites.</p><div className="sector-tags"><span>Retail</span><span>Offices</span><span>Industrial</span><span>Hospitality</span><span>Multi-site</span></div><Link className="button button-light" href="/commercial">Commercial Fire & Security</Link></div>
      </div>
    </div></section>

    <section className="section section-alt"><div className="container">
      <SectionHeading eyebrow="Why choose NOX" title="Designed properly. Installed properly. Supported properly." text="A local, independent approach with honest advice, clean workmanship, clear handover and direct support from the people responsible for the project."/>
      <FeatureGrid columns={4} items={[
        { title: "Designed around the property", text: "The building, access points, routine, risks and existing equipment are understood before products are selected." },
        { title: "Clean, considered installation", text: "Devices, cameras and cable routes are planned carefully, fitted professionally and the work area is left tidy." },
        { title: "Clear handover", text: "Apps, users, playback, operating modes and practical next steps are explained without unnecessary jargon." },
        { title: "Local aftercare", text: "Monitoring, servicing, repairs, fire support, takeovers and future upgrades remain available through the NOX team." }
      ]}/>
    </div></section>

    <section className="section service-plan-showcase"><div className="container">
      <SectionHeading eyebrow="Servicing, maintenance and aftercare" title="Protection does not end when the installation is finished" text="Systems need to remain healthy, current and easy to manage. NOX supports new installations and suitable existing systems with clear annual servicing and local follow-up." />
      <div className="service-plan-grid">
        <article><span>01</span><h3>Alarm Maintenance</h3><p>Engineer servicing, system health checks, device testing, battery review, cleaning, updates and service records.</p><Link href="/service-plans/alarm-maintenance">View alarm maintenance →</Link></article>
        <article><span>02</span><h3>Alarm Monitoring</h3><p>Professional alarm handling, keyholder contact, available verification and agreed escalation procedures.</p><Link href="/service-plans/alarm-monitoring">Explore monitoring →</Link></article>
        <article><span>03</span><h3>CCTV Maintenance</h3><p>Camera cleaning, recorder and hard-drive checks, playback tests, firmware review and remote-viewing checks.</p><Link href="/service-plans/cctv-maintenance">View CCTV maintenance →</Link></article>
        <article><span>04</span><h3>Fire & Compliance Support</h3><p>Fire alarm servicing, emergency lighting, records, defect reporting and coordinated annual packages.</p><Link href="/service-plans/fire-compliance">Explore fire support →</Link></article>
      </div>
      <div className="service-plan-callout"><div><h3>One local point of contact after handover</h3><p>Focused servicing or a coordinated annual package can simplify support, records and renewal dates for homes, businesses and property portfolios.</p></div><Link className="button button-light" href="/service-plans">View All Service Plans</Link></div>
    </div></section>

    <section className="section section-alt"><div className="container">
      <SectionHeading eyebrow="How the process works" title="From first enquiry to long-term support"/>
      <FeatureGrid columns={4} items={[
        { title: "One clear enquiry", text: "Tell us about the property, whether it is residential or commercial and which systems or services are involved." },
        { title: "Survey and quotation", text: "We arrange a survey where needed, then set out equipment, installation and optional support clearly." },
        { title: "Installation and handover", text: "The system is installed, tested and explained properly before the project is closed." },
        { title: "Aftercare and renewal", text: "Choose monitoring, maintenance, fire servicing or compliance support where it adds genuine value." }
      ]}/>
    </div></section>

    <section className="section"><div className="container"><SectionHeading eyebrow="Recent work" title="Real NOX installations across the region" text="Residential and commercial project examples using confirmed locations and system scopes."/><CaseStudyGrid limit={3}/><div className="button-row"><Link className="button button-outline" href="/case-studies">Explore All Case Studies</Link></div></div></section>

    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Customer reviews" title="Real feedback about advice, workmanship and aftercare" text="Verified review wording from NOX customers, including residential and commercial installations."/><ReviewGrid limit={3}/><div className="button-row"><Link className="button button-outline" href="/reviews">Read More Customer Reviews</Link><a className="button button-light" href="https://g.page/r/CUdyqRh0RFeXEAE/review" target="_blank" rel="noreferrer">View Google Reviews</a></div></div></section>

    <section className="section"><div className="container"><SectionHeading eyebrow="Advice and guides" title="Helpful information before and after installation" text="Practical guidance on CCTV planning, system servicing, fire-safety support and taking over existing equipment."/><BlogGrid limit={3}/><div className="button-row"><Link className="button button-outline" href="/blog">View All Guides</Link></div></div></section>

    <section className="section section-alt"><div className="container split-grid"><div><SectionHeading eyebrow="Local coverage" title="Based in Chesterfield. Working across Sheffield, Derbyshire and surrounding areas." text="Core coverage includes Chesterfield, Sheffield, Dronfield, Matlock, Bakewell, Buxton and the surrounding towns and villages. NOX also travels further for commercial and larger projects."/><Link className="button button-outline" href="/areas-we-serve">See All Areas We Cover</Link></div><aside className="dark-panel"><h3>Local fire and security support</h3><div className="related-links"><Link href="/areas/chesterfield">Security systems Chesterfield →</Link><Link href="/areas/sheffield">CCTV and alarms Sheffield →</Link><Link href="/areas/derbyshire">Fire and security Derbyshire →</Link><Link href="/commercial/fire-compliance">Commercial fire support →</Link></div></aside></div></section>
    <ConversionPanel />
  </>
}
