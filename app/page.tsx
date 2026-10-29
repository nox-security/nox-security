import type { Metadata } from "next"
import Link from "next/link"
import { CaseStudyGrid, JsonLd, SectionHeading } from "@/components/marketing"
import { pageMetadata } from "@/lib/site"
import { serviceSchema, webPageSchema } from "@/lib/schema"

export const metadata: Metadata = pageMetadata(
  "Fire Alarm Installation, CCTV & Security | Chesterfield & Sheffield",
  "Fire alarm installation, servicing and maintenance, CCTV and intruder alarms across Chesterfield, Sheffield, South Yorkshire, Derbyshire, Derby and the Peak District.",
  "/",
  { image: "/images/v4-13-54/homepage-hero-nox-unit-van-desktop.webp", imageAlt: "NOX Fire & Security van parked outside a commercial unit" },
)

const coreServices = [
  {
    title: "Fire Alarms",
    text: "Commercial fire alarm installation, servicing and maintenance, with a clear route into emergency lighting and fire risk assessment support.",
    href: "/systems/fire-safety",
    image: "/images/image-refresh/en54-fire-hub.webp",
    alt: "Ajax EN54 commercial fire alarm control equipment used on the NOX Fire & Compliance overview",
    links: [
      { href: "/systems/fire-safety", label: "Installation" },
      { href: "/service-plans/fire-alarm-servicing", label: "Servicing" },
      { href: "/systems/fire-risk-assessment", label: "Risk Assessments" },
      { href: "/systems/emergency-lighting", label: "Emergency Lighting" },
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
      { href: "/systems/smart-home-cctv", label: "Smart Home Security" },
    ],
  },
]

export default function HomePage() {
  const serviceStructuredData = serviceSchema({
    name: "Fire alarm installation, CCTV and intruder alarms",
    description: "Fire alarm installation, servicing and maintenance, CCTV and intruder alarms across Chesterfield, Sheffield, South Yorkshire, Derbyshire, Derby and the Peak District, with emergency lighting, monitoring and risk-assessment support available through the relevant service pages.",
    path: "/",
    serviceType: ["Fire alarm installation", "Fire alarm servicing and maintenance", "Emergency lighting", "Fire risk assessments", "CCTV installation", "CCTV maintenance", "Intruder alarm installation", "Alarm monitoring"],
    image: "/images/v4-13-54/homepage-hero-nox-unit-van-desktop.webp",
  })
  const homepageStructuredData = webPageSchema({
    name: "NOX Fire & Security",
    description: "Complete Fire & Security solutions including fire alarm installation and maintenance, CCTV and intruder alarms across Chesterfield, Sheffield, South Yorkshire, Derbyshire, Derby and the Peak District.",
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
        <p className="ref-home-lead">Fire alarm installation, fire alarm maintenance, CCTV and intruder alarm systems across Chesterfield, Sheffield, South Yorkshire, Derbyshire, Derby and the Peak District.</p>
        <div className="ref-home-actions">
          <Link className="ref-home-button ref-home-button-primary" href="/book-security-survey">Book Your Site Survey <span aria-hidden="true">→</span></Link>
        </div>
        <a className="ref-home-call" href="tel:07882959297">Call NOX <strong>07882 959297</strong></a>
      </div>
    </section>

    <section className="home-trust-band" aria-label="NOX customer reviews and authorised installer status">
      <div className="container home-trust-band-inner">
        <Link className="home-trust-proof home-trust-proof-google" href="/reviews">
          <div>
            <span className="home-trust-stars" aria-label="5 out of 5 stars">★★★★★</span>
            <strong>5-Star Google Reviews</strong>
          </div>
        </Link>
        <span className="home-trust-divider" aria-hidden="true"/>
        <Link className="home-trust-proof home-trust-proof-ajax" href="/ajax-authorised-installer">
          <img src="/images/logo-ajax-authorized-installation-company-en-wh.png" alt="Ajax Authorised Installation Company"/>
          <div>
            <strong>Official Ajax Partner</strong>
            <small>Authorised Installation Company</small>
          </div>
        </Link>
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
          </div>
        </article>)}
      </div>
    </section>




    <section className="section section-alt home-featured-projects"><div className="container">
      <div className="home-featured-projects-head"><SectionHeading eyebrow="Selected NOX work" title="Fire & Security Projects" text="From integrated commercial systems to discreet protection for homes. Explore genuine projects and the services behind them."/><Link className="text-link" href="/case-studies">View all projects →</Link></div>
      <CaseStudyGrid slugs={["david-malin-kitchens-sheffield-ajax-fire-cctv-intruder", "steve-foster-cranes-derby-hikvision-cctv-monitoring", "chesterfield-bungalow-renovation-ajax-intruder-cctv", "bakewell-residential-ajax-perimeter-protection"]}/>
    </div></section>

    <section className="ref-final-cta">
      <div className="container ref-final-cta-grid">
        <div>
          <p className="ref-section-kicker">Fire · CCTV · Intruder <span/></p>
          <h2>Start Your NOX Project</h2>
          <p>One enquiry route for a new installation, an existing system, planned servicing, maintenance or monitoring.</p>
        </div>
        <Link className="ref-final-link" href="/get-quote#quote-form">Start Your Project</Link>
      </div>
    </section>
  </>
}
