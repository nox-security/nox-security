import type { Metadata } from "next"
import Link from "next/link"
import {
  Breadcrumbs,
  CaseStudyGrid,
  ContactActions,
  ConversionPanel,
  FeatureGrid,
  JsonLd,
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
      serviceType: ["Ajax EN54 fire alarm installation", "Ajax commercial CCTV installation", "Ajax home CCTV installation", "Ajax intruder alarm installation", "Ajax system upgrades and takeovers"],
      audience: "Residential and Commercial",
      image: "/images/ajax-products/ajax-cctv-system.webp",
    }),
    webPageSchema({ name: "Official Ajax Partner and Ajax Authorised Installer", description: pageDescription, path: pagePath, image: "/images/ajax-products/ajax-cctv-system.webp" }),
    breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Ajax Authorised Installer", path: pagePath }]),
    faqSchema(faqs.slice(0, 4)),
  ]

  const authorisedPoints = [
    { title: "Official authorised status", text: "NOX is an Ajax Authorised Installation Company and official Ajax partner, using genuine professional Ajax equipment within properly surveyed systems." },
    { title: "NOX remains accountable", text: "Ajax supplies the technology platform; NOX remains responsible for the survey, design, installation, commissioning, handover and ongoing customer support." },
    { title: "Specified around the property", text: "We select the hub, devices, cameras, fire equipment and communication route around the property, risk and required outcome rather than selling a fixed equipment bundle." },
    { title: "Support after handover", text: "Servicing, monitoring, CCTV maintenance, additions, faults and suitable system takeovers stay connected to the same NOX support route." },
  ]

  const systemRoutes = [
    { title: "Ajax EN54 Fire", text: "Wireless commercial fire alarm systems for suitable premises, designed around zoning, detection, warning coverage and future servicing.", href: "/systems/fire-safety", image: "/images/image-refresh/en54-fire-hub.webp", alt: "Ajax EN54 commercial fire alarm control equipment" },
    { title: "Ajax CCTV", text: "Professional CCTV for homes, commercial premises and larger sites, with recording, playback and remote viewing planned around the areas that matter.", href: "/systems/cctv", image: "/images/image-refresh/ajax-commercial-domes.webp", alt: "Ajax professional CCTV cameras" },
    { title: "Ajax Intruder & Perimeter", text: "Smart intrusion, photo verification, external detection, sirens and user control for residential, commercial and perimeter-led security.", href: "/systems/intrusion-alarms", image: "/images/v4-12-9/residential-intruder-main.jpg", alt: "Ajax intruder detector installed by NOX" },
  ]

  return <>
    {structuredData.map((data, index) => <JsonLd data={data} key={index}/>)}
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Ajax Authorised Installer" }]}/>

    <section className="page-hero page-hero-split ajax-partner-hero">
      <div className="container page-hero-grid">
        <div className="page-hero-copy">
          <span className="eyebrow">Official Ajax Partner</span>
          <h1>Ajax technology. NOX design, installation and support.</h1>
          <p className="lead">NOX is an Ajax Authorised Installation Company for professional fire, CCTV and intruder systems. We use the Ajax platform where it is the right technical fit, while keeping the survey, design, installation and long-term support under one accountable NOX team.</p>
          <ContactActions primaryLabel="Discuss an Ajax System" audience="Residential & Commercial" serviceCategory="Ajax Systems" enquiryType="Installation" sourceLabel="ajax-authorised-installer-hero"/>
        </div>
        <aside className="page-hero-media ajax-authorisation-hero-card">
          <img src="/images/logo-ajax-authorized-installation-company-en-wh.png" alt="Ajax Authorised Installation Company"/>
          <span className="micro-label">Authorised Installation Company</span>
          <h2>Professional Ajax systems installed around the property</h2>
          <p>Ajax provides the platform and product ecosystem. NOX turns that technology into a finished system designed around the site, the people using it and the support required afterwards.</p>
        </aside>
      </div>
    </section>

    <TrustStrip variant="general"/>

    <section className="section"><div className="container">
      <SectionHeading eyebrow="What our authorisation means" title="A recognised Ajax route with clear NOX responsibility" text="Authorisation matters, but the finished result still depends on the company surveying, installing and supporting the system. These are the parts NOX takes responsibility for."/>
      <FeatureGrid items={authorisedPoints} columns={4}/>
    </div></section>

    <section className="section section-alt"><div className="container">
      <SectionHeading eyebrow="Where Ajax fits" title="Fire, CCTV and intruder systems through one professional platform" text="Ajax gives NOX a strong professional ecosystem across fire, video and intrusion. Each system is still scoped separately around the property and the required outcome."/>
      <div className="feature-grid columns-3 media-route-grid ajax-partner-media-grid">{systemRoutes.map(item => <article className="feature-card media-route-card" key={item.title}><img src={item.image} alt={item.alt}/><div className="media-route-card-body"><h3>{item.title}</h3><p>{item.text}</p><Link className="text-link" href={item.href}>Explore this route →</Link></div></article>)}</div>
    </div></section>

    <section className="section"><div className="container">
      <SectionHeading eyebrow="Real Ajax projects" title="Installed by NOX across homes, commercial sites and larger properties" text="Our case studies use genuine NOX project photography and show how Ajax equipment has been applied across different properties and security requirements."/>
      <CaseStudyGrid slugs={["david-malin-kitchens-sheffield-ajax-fire-cctv-intruder", "chesterfield-bungalow-renovation-ajax-intruder-cctv", "bakewell-residential-ajax-perimeter-protection", "telesis-hitachi-fire-intruder-system"]}/>
      <div className="section-action-row"><Link className="button button-outline" href="/case-studies">View All NOX Projects</Link></div>
    </div></section>

    <section className="section section-alt"><div className="container split-grid ajax-support-grid">
      <div><SectionHeading eyebrow="After installation" title="Monitoring, servicing and long-term Ajax support" text="NOX supports suitable monitoring, planned intruder servicing, CCTV maintenance, faults, device additions and takeover assessments after the original installation."/><div className="related-links"><Link href="/service-plans/alarm-monitoring">Alarm monitoring →</Link><Link href="/service-plans/alarm-maintenance">Intruder servicing →</Link><Link href="/service-plans/cctv-maintenance">CCTV maintenance →</Link><Link href="/services/security-system-takeover">System takeovers →</Link></div></div>
      <aside className="dark-panel"><h3>Already have an Ajax system?</h3><p>Share the hub model, property type, administrator-access position and the support you need. We can confirm whether a service, takeover, repair or upgrade is the correct next step.</p><ContactActions primaryLabel="Discuss an Existing Ajax System" compact audience="Residential & Commercial" serviceCategory="Ajax Systems" enquiryType="Takeover" sourceLabel="ajax-authorised-installer-support"/></aside>
    </div></section>

    <section className="section"><div className="container">
      <SectionHeading eyebrow="Ajax installer FAQs" title="Common questions about authorised Ajax installation"/>
      <div className="faq-list">{faqs.slice(0,4).map(item => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div>
    </div></section>

    <ConversionPanel title="Start an Ajax project with NOX" text="Tell us whether the property is residential or commercial and whether you are considering fire, CCTV, intruder protection or support for an existing Ajax system." primaryLabel="Get an Ajax Quote" audience="Residential & Commercial" serviceCategory="Ajax Systems" enquiryType="Installation" sourceLabel="ajax-authorised-installer-final"/>
  </>
}
