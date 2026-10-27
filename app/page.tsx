import type { Metadata } from "next"
import Link from "next/link"
import { JsonLd } from "@/components/marketing"
import { pageMetadata } from "@/lib/site"
import { serviceSchema, webPageSchema } from "@/lib/schema"

export const metadata: Metadata = pageMetadata(
  "Fire Alarm Installation, CCTV & Security | Chesterfield & Sheffield",
  "Fire alarm installation, servicing and maintenance, CCTV and intruder alarms across Chesterfield, Sheffield, Derbyshire and South Yorkshire.",
  "/",
  { image: "/images/v4-13-54/homepage-hero-nox-unit-van-desktop.webp", imageAlt: "NOX Fire & Security van parked outside a commercial unit" },
)

const coreServices = [
  {
    title: "Fire Alarms",
    text: "Commercial fire alarm installation, servicing and maintenance, with a clear route into emergency lighting and fire risk assessment support.",
    href: "/systems/fire-safety",
    image: "/images/v4-10/fire-alarm-installation-hero.jpeg",
    alt: "Ajax EN54 fire alarm control panel installed beside a fire alarm zone plan and manual call point",
    links: [
      { href: "/systems/fire-safety", label: "Installation" },
      { href: "/service-plans/fire-alarm-servicing", label: "Servicing" },
      { href: "/systems/emergency-lighting", label: "Emergency Lighting" },
      { href: "/systems/fire-risk-assessment", label: "Risk Assessments" },
    ],
  },
  {
    title: "CCTV Systems",
    text: "Commercial and home CCTV installation with clear routes into monitoring, planned maintenance and wider site coverage.",
    href: "/systems/cctv",
    image: "/images/image-refresh/home-cctv-live-view.webp",
    alt: "Residential CCTV live view showing full-property camera coverage",
    links: [
      { href: "/systems/cctv", label: "Commercial CCTV" },
      { href: "/systems/home-cctv", label: "Home CCTV" },
      { href: "/service-plans/cctv-maintenance", label: "Maintenance" },
      { href: "/service-plans/alarm-monitoring", label: "Monitoring" },
    ],
  },
  {
    title: "Intruder Alarms",
    text: "Ajax intruder alarm systems for homes and businesses, with app control, monitoring and ongoing maintenance options.",
    href: "/systems/intrusion-alarms",
    image: "/images/v4-12-9/residential-intruder-main.jpg",
    alt: "Black Ajax outdoor detector installed for perimeter intruder protection",
    links: [
      { href: "/systems/intrusion-alarms", label: "Installation" },
      { href: "/service-plans/alarm-maintenance", label: "Maintenance" },
      { href: "/service-plans/alarm-monitoring", label: "Monitoring" },
      { href: "/systems/residential-security-packages", label: "Home Security" },
    ],
  },
]

const proofPoints = [
  ["installation", "Specialist", "Installation"],
  ["support", "Ongoing", "Support"],
  ["compliance", "Compliance", "Focused"],
  ["monitoring", "24/7", "Monitoring"],
  ["property", "Homes", "& Business"],
] as const

function ProofIcon({ type }: { type: string }) {
  if (type === "installation") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/><circle cx="12" cy="12" r="4"/></svg>
  if (type === "support") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l7 3v5c0 4.6-2.8 8-7 10-4.2-2-7-5.4-7-10V6l7-3z"/><path d="M9 12l2 2 4-5"/></svg>
  if (type === "compliance") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h8l4 4v14H7z"/><path d="M15 3v5h5M10 12h6M10 16h6"/></svg>
  if (type === "monitoring") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.7-6 10-6 10 6 10 6-3.7 6-10 6S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10l8-6 8 6v10H4z"/><path d="M9 20v-6h6v6"/></svg>
}

export default function HomePage() {
  const serviceStructuredData = serviceSchema({
    name: "Fire alarm installation, CCTV and intruder alarms",
    description: "Fire alarm installation, servicing and maintenance, CCTV and intruder alarms for homes and businesses across Chesterfield, Sheffield, Derbyshire and South Yorkshire, with emergency lighting, monitoring and risk-assessment support available through the relevant service pages.",
    path: "/",
    serviceType: ["Fire alarm installation", "Fire alarm servicing and maintenance", "Emergency lighting", "Fire risk assessments", "CCTV installation", "CCTV maintenance", "Intruder alarm installation", "Alarm monitoring"],
    image: "/images/v4-13-54/homepage-hero-nox-unit-van-desktop.webp",
  })
  const homepageStructuredData = webPageSchema({
    name: "NOX Fire & Security",
    description: "Complete Fire & Security solutions including fire alarm installation and maintenance, CCTV and intruder alarms across Chesterfield, Derbyshire and South Yorkshire.",
    path: "/",
    image: "/images/v4-13-54/homepage-hero-nox-unit-van-desktop.webp",
  })

  return <>
    <JsonLd data={serviceStructuredData}/><JsonLd data={homepageStructuredData}/>

    <section className="ref-home-hero">
      <div className="ref-home-hero-media"><picture><source media="(max-width: 760px)" srcSet="/images/v4-13-54/homepage-hero-nox-unit-van-mobile.webp" /><img src="/images/v4-13-54/homepage-hero-nox-unit-van-desktop.webp" alt="NOX Fire & Security van parked outside a commercial unit"/></picture></div>
      <div className="ref-home-hero-overlay"/>
      <div className="container ref-home-hero-copy">
        <p className="ref-home-kicker">Protecting homes<br/>and businesses across<br/>Chesterfield, Derbyshire<br/>and South Yorkshire</p>
        <span className="ref-home-rule" aria-hidden="true"/>
        <h1>Complete<br/><span>Fire &amp; Security</span><br/>Solutions</h1>
        <p className="ref-home-lead">Fire alarm installation, fire alarm maintenance, CCTV and intruder alarm systems for homes and businesses across Chesterfield, Sheffield, Derbyshire and South Yorkshire.</p>
        <div className="ref-home-actions">
          <Link className="ref-home-button ref-home-button-primary" href="/get-quote#quote-form">Get a Quote <span aria-hidden="true">→</span></Link>
        </div>
      </div>
    </section>

    <section className="ref-service-strip" aria-label="Core NOX services">
      <div className="container ref-service-grid">
        {coreServices.map(service => <article className="ref-service-card" key={service.title}>
          <Link className="ref-service-image" href={service.href}><img src={service.image} alt={service.alt}/></Link>
          <div className="ref-service-body">
            <span className="ref-service-rule" aria-hidden="true"/>
            <h2><Link href={service.href}>{service.title}</Link></h2>
            <p>{service.text}</p>
            <div className="ref-service-links">
              {service.links.map(link => <Link key={link.href} href={link.href} className="ref-service-link">{link.label}</Link>)}
            </div>
            <Link className="ref-service-arrow" href={service.href} aria-label={`Explore ${service.title}`}>→</Link>
          </div>
        </article>)}
      </div>
    </section>

    <section className="ref-proof-strip" aria-label="NOX service standards">
      <div className="container ref-proof-grid">
        {proofPoints.map(([type, line1, line2]) => <div className="ref-proof-item" key={type}>
          <ProofIcon type={type}/>
          <strong>{line1}<br/>{line2}</strong>
        </div>)}
      </div>
    </section>

    <section className="ref-area-band">
      <div className="ref-area-media"><img src="/images/chesterfield-coverage.png" alt="NOX service coverage centred around Chesterfield"/></div>
      <div className="ref-area-overlay"/>
      <div className="container ref-area-content">
        <div className="ref-area-copy">
          <p className="ref-section-kicker">Our service areas <span/></p>
          <h2>Chesterfield Based.<br/>Regional Coverage.</h2>
          <p>Based in Chesterfield, we provide fire and security solutions across Derbyshire, South Yorkshire, Sheffield, Mansfield, Doncaster, Newark, Wirksworth, Ripley and surrounding areas.</p>
          <Link className="ref-area-link" href="/areas-we-serve">Explore all service areas <span aria-hidden="true">→</span></Link>
        </div>
      </div>
    </section>

    <section className="ref-final-cta">
      <div className="container ref-final-cta-grid">
        <div>
          <p className="ref-section-kicker">Fire · CCTV · Intruder <span/></p>
          <h2>Installation &amp; Ongoing Support</h2>
          <p>New systems, servicing, maintenance and monitoring — planned around your property, site and existing equipment.</p>
        </div>
        <Link className="ref-final-link" href="/get-quote#quote-form">Start Your Enquiry <span aria-hidden="true">→</span></Link>
      </div>
    </section>
  </>
}
