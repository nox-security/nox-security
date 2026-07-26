import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  AreaLinks,
  Breadcrumbs,
  CaseStudyGrid,
  Checklist,
  ContactActions,
  ConversionPanel,
  EnquiryPreparation,
  FeatureGrid,
  GuideLinks,
  JsonLd,
  PageHero,
  ReviewGrid,
  SectionHeading,
  TrustStrip,
} from "@/components/marketing"
import { pageMetadata } from "@/lib/site"
import { breadcrumbSchema, faqSchema, serviceSchema, webPageSchema } from "@/lib/schema"

type FireProjectPage = {
  title: string
  eyebrow: string
  intro: string
  metaTitle: string
  metaDescription: string
  image: string
  imageAlt: string
  imagePosition?: string
  requirementTitle: string
  requirementText: string
  included: string[]
  suitableFor: string[]
  process: { title: string; text: string }[]
  priorities: { title: string; text: string }[]
  pricingFactors: string[]
  proofTitle: string
  proofText: string
  proof: { image: string; alt: string; caption: string; position?: string }[]
  faq: { q: string; a: string }[]
  guides: string[]
  cases: string[]
  related: { href: string; label: string }[]
  ctaLabel: string
  ctaText: string
}

const pages: Record<string, FireProjectPage> = {
  "multi-site-fire-alarm-systems": {
    title: "Multi-Site Fire Alarm Systems & Servicing",
    eyebrow: "Multi-site fire alarm programmes",
    intro: "NOX helps organisations plan fire alarm installation, takeover, servicing and remedial work across several premises in Chesterfield, Sheffield, Derbyshire and the wider operating area. Each building keeps its own fire strategy, records and system requirements, while the estate receives a clearer programme, reporting structure and route for prioritising work.",
    metaTitle: "Multi-Site Fire Alarm Systems & Servicing | NOX",
    metaDescription: "Multi-site fire alarm installation, servicing, takeovers and remedial programmes across Chesterfield, Sheffield and Derbyshire with clear site records and coordinated reporting.",
    image: "/images/projects/bottle-thyme-vehicles.jpg",
    imageAlt: "NOX Fire and Security vehicles supporting a coordinated multi-site fire alarm programme",
    imagePosition: "center 50%",
    requirementTitle: "Consistency across the estate without treating every building as identical",
    requirementText: "A useful multi-site programme standardises the information, reporting and service route where practical, but still respects the occupancy, layout, fire strategy, existing panel, device quantities and operational restrictions at each address. The goal is clearer control of the estate, not a copied specification that ignores individual sites.",
    included: [
      "Estate-level discovery and site schedule",
      "Individual premises surveys and system records",
      "New fire alarm installation programmes",
      "Existing-system takeovers and access checks",
      "Planned servicing and visit coordination",
      "Defect grading and remedial priorities",
      "Panel, device and zone information capture",
      "Clear reporting for responsible people and managers",
    ],
    suitableFor: [
      "Retail and hospitality groups",
      "Offices and professional premises",
      "Warehouses and industrial units",
      "Property managers",
      "Businesses with regional branches",
      "Organisations inheriting mixed fire systems",
    ],
    process: [
      { title: "Estate review", text: "Confirm the site list, responsible contacts, current providers, available records, known faults and the required installation or servicing outcome." },
      { title: "Site-by-site assessment", text: "Each premises is reviewed for system type, access, device quantities, condition, records and any local operational restrictions." },
      { title: "Programme and priorities", text: "Installation, takeover, service and remedial work is grouped into a practical sequence with urgent issues separated from planned improvements." },
      { title: "Ongoing reporting", text: "Completed visits, defects, quotations, service dates and site-specific records remain clear so the estate can be managed with less uncertainty." },
    ],
    priorities: [
      { title: "Mixed existing systems", text: "Different panels, ages, records and parts availability may need separate support routes rather than one assumed maintenance method." },
      { title: "Consistent information", text: "Site contacts, panel details, device counts, known defects and visit outcomes should be recorded in a repeatable format across the estate." },
      { title: "Phased replacement", text: "Sites can be prioritised around condition, supportability, operational risk and available budget instead of forcing unnecessary wholesale replacement." },
      { title: "Service continuity", text: "Visit planning, access arrangements and clear follow-up quotations help reduce missed services and unresolved defects across several premises." },
    ],
    pricingFactors: [
      "Number and location of premises",
      "New installation, takeover or servicing scope",
      "Panel types and approximate device quantities",
      "Available drawings, zone plans and service records",
      "Access restrictions and operational hours",
      "Travel and visit coordination",
      "Known faults and remedial requirements",
      "Reporting and account-management requirements",
    ],
    proofTitle: "One programme can cover very different commercial environments",
    proofText: "Industrial, hospitality, office and customer-facing sites may need different equipment and access arrangements. The consistent part is the quality of the survey, records, service reporting and follow-up route.",
    proof: [
      { image: "/images/revisions/telesis-hitachi-exterior.jpg", alt: "Industrial premises receiving a NOX fire alarm installation", caption: "Industrial premises with operational access, warning and evacuation requirements.", position: "center 72%" },
      { image: "/images/v4-10/fire-alarm-installation-hero.jpeg", alt: "Ajax EN54 fire alarm panel and zone plan", caption: "Modern addressable control, clear zoning and a usable handover at each site.", position: "center 48%" },
      { image: "/images/v4-10/fire-alarm-servicing.jpeg", alt: "Existing commercial fire alarm panel during servicing", caption: "Suitable existing systems can be inspected, serviced and brought into a clearer support programme.", position: "center 40%" },
      { image: "/images/revisions/fire-safety-logbook.jpg", alt: "Fire alarm records and logbook", caption: "Records, service outcomes and remedial priorities remain visible to the people managing the estate.", position: "center" },
    ],
    faq: [
      { q: "Can NOX service fire alarms across several business locations?", a: "Yes, subject to location, system access, condition, records and parts availability. Each premises is assessed individually before the wider visit and reporting programme is confirmed." },
      { q: "Do all sites need to use the same fire alarm system?", a: "No. Standardisation can be useful where it genuinely improves support, but each building still needs a suitable system for its layout, occupancy, fire strategy and existing infrastructure." },
      { q: "Can new installations and existing-system servicing sit under one programme?", a: "Yes. New installations, takeovers, routine servicing and remedial work can be coordinated while keeping the scope and records for every site clear." },
      { q: "Can replacement work be phased across the estate?", a: "Often yes. Condition, faults, supportability, operational risk and budget can be used to prioritise sites and build a sensible phased programme." },
      { q: "What information is needed to quote a multi-site fire alarm programme?", a: "A site list, property use, approximate panel and device details, current service dates, known faults, available records, access restrictions and the required timescale are a strong starting point." },
      { q: "Will each site receive its own service records?", a: "Yes. Each premises needs its own appropriate records and defect information, even where reporting is also summarised for a regional or central contact." },
    ],
    guides: [
      "what-information-is-needed-for-a-fire-alarm-quote",
      "how-often-should-a-commercial-fire-alarm-be-serviced",
      "can-a-new-company-take-over-an-existing-fire-alarm",
    ],
    cases: ["telesis-hitachi-fire-intruder-system", "tan-station-fire-security-brimington", "banana-industries-fire-security"],
    related: [
      { href: "/systems/fire-safety", label: "Fire Alarm Installation" },
      { href: "/service-plans/fire-alarm-servicing", label: "Fire Alarm Servicing" },
      { href: "/services/fire-alarm-repairs-takeovers", label: "Fire Alarm Repairs & Takeovers" },
      { href: "/service-plans/fire-compliance", label: "Fire Compliance Plans" },
    ],
    ctaLabel: "Plan a Multi-Site Fire Programme",
    ctaText: "Share the site list, locations, existing panels, current service position and the installation or maintenance outcome you need. NOX will confirm the right discovery and survey route.",
  },
  "integrated-fire-cctv-systems": {
    title: "Integrated Fire & CCTV Systems",
    eyebrow: "Coordinated fire and CCTV projects",
    intro: "NOX coordinates fire alarm and CCTV installation for commercial premises through one considered project route. The life-safety and security systems remain technically separate, with their own design, commissioning, records and servicing, while surveys, access, cable planning and customer communication are organised more efficiently.",
    metaTitle: "Integrated Fire & CCTV Systems | Commercial Projects | NOX",
    metaDescription: "Coordinated commercial fire alarm and CCTV installation across Chesterfield, Sheffield and Derbyshire with separate compliant scopes, clear records and one local project team.",
    image: "/images/projects/retford-camera-fire-bell.jpg",
    imageAlt: "Commercial CCTV camera positioned beside fire alarm warning equipment",
    imagePosition: "center 34%",
    requirementTitle: "One coordinated project, with two clearly defined systems",
    requirementText: "Fire detection and CCTV solve different problems. The fire alarm protects life and supports the building's fire arrangements; CCTV provides recorded evidence, visibility and operational oversight. Coordinating the project can improve access, sequencing and handover, but the system purposes and documentation must never be blurred.",
    included: [
      "Fire alarm survey and system design",
      "CCTV coverage and evidence planning",
      "Coordinated access and installation programme",
      "Clear cable-route and equipment-position planning",
      "Separate commissioning and system records",
      "User handover for fire controls and CCTV playback",
      "Fire alarm servicing options",
      "CCTV maintenance and upgrade support",
    ],
    suitableFor: [
      "Commercial refurbishments",
      "Hospitality and leisure premises",
      "Retail and showroom environments",
      "Warehouses and industrial units",
      "Offices and mixed-use buildings",
      "Premises replacing several older systems",
    ],
    process: [
      { title: "Combined site survey", text: "Fire information, coverage requirements, existing equipment, access, ceilings, cable routes and operational restrictions are reviewed together." },
      { title: "Separate system designs", text: "The fire alarm and CCTV specification remain distinct, with each device, camera, panel, recorder and service route explained around its purpose." },
      { title: "Coordinated installation", text: "Access equipment, cable work, first-fix timing, commissioning and customer communication are sequenced to reduce avoidable disruption." },
      { title: "Clear handover and aftercare", text: "Fire controls, records, CCTV live view, playback, user access and future service dates are handed over without mixing the responsibilities of the two systems." },
    ],
    priorities: [
      { title: "Life safety remains separate", text: "CCTV does not replace fire detection, manual activation, warning devices, zoning, commissioning or the required fire-system records." },
      { title: "Useful CCTV views", text: "Entrances, tills, stock, circulation, yards and vehicle routes need camera positions selected around evidence quality rather than convenience alone." },
      { title: "Shared project planning", text: "Scaffolding, lifts, ceiling access, cable routes and operational shutdowns can be coordinated where practical without compromising either design." },
      { title: "Different maintenance needs", text: "Fire alarm servicing and CCTV maintenance remain separate technical scopes, even when visits and account support are coordinated." },
    ],
    pricingFactors: [
      "Fire alarm category, system type and device quantities",
      "CCTV camera count and evidence requirements",
      "Recorder, storage and remote-access requirements",
      "Existing panels, cameras, cabling and records",
      "Shared and separate cable routes",
      "Access equipment and ceiling work",
      "Operational or out-of-hours constraints",
      "Future servicing and maintenance requirements",
    ],
    proofTitle: "Fire protection and recorded security can sit naturally within one property project",
    proofText: "The strongest result is not a forced technical connection. It is a coordinated survey, careful equipment positioning, clean installation and a handover that makes both systems straightforward to manage.",
    proof: [
      { image: "/images/projects/retford-camera-fire-bell.jpg", alt: "CCTV camera installed beside fire alarm warning equipment", caption: "CCTV and fire equipment positioned around their separate purposes within the same commercial environment.", position: "center 34%" },
      { image: "/images/v4-10/fire-alarm-installation-hero.jpeg", alt: "Ajax EN54 fire alarm control panel and zone plan", caption: "Clear fire control, zoning, manual activation and records remain central to the life-safety system.", position: "center 48%" },
      { image: "/images/image-refresh/commercial-cctv-arcade-monitor.webp", alt: "Commercial CCTV live view on a dedicated monitor", caption: "Recorded coverage and practical playback are designed around the way the premises operates.", position: "center" },
      { image: "/images/projects/tan-station-camera-external-1.jpg", alt: "Black external CCTV camera installed during a coordinated fire and security project", caption: "Equipment finish, camera positions and fire first-fix work can be coordinated during a commercial fit-out.", position: "center" },
    ],
    faq: [
      { q: "Does integrated mean the fire alarm and CCTV become one system?", a: "No. The fire alarm and CCTV remain separate systems with different functions, standards, commissioning and records. The survey, installation programme and customer support are coordinated." },
      { q: "Can NOX install fire alarms and CCTV during the same project?", a: "Yes, for suitable commercial premises. Each scope is surveyed and quoted clearly, while access, cable routes and installation timing are planned together where practical." },
      { q: "Can an existing fire alarm or CCTV system be retained?", a: "Potentially. Access, condition, compatibility, records, cabling and supportability need to be assessed before any existing equipment is included in the new proposal." },
      { q: "Can the project be phased?", a: "Yes. First-fix work, fire installation, CCTV installation and later commissioning can be sequenced around a refurbishment or operational programme where the site allows it." },
      { q: "Can fire servicing and CCTV maintenance be coordinated later?", a: "Visits can sometimes be coordinated for convenience, but the testing, records, defects and quotations for each system remain clear and separate." },
      { q: "Does CCTV replace any part of the fire alarm design?", a: "No. CCTV may provide useful visual information for security or incident review, but it does not replace fire detection, warning, manual call points, zoning or any required fire-safety arrangements." },
    ],
    guides: [
      "what-information-is-needed-for-a-fire-alarm-quote",
      "how-many-cameras-does-a-commercial-site-need",
      "can-fire-alarm-and-emergency-lighting-visits-be-combined",
    ],
    cases: ["tan-station-fire-security-brimington", "retford-former-bank-cctv", "telesis-hitachi-fire-intruder-system"],
    related: [
      { href: "/systems/fire-safety", label: "Fire Alarm Installation" },
      { href: "/commercial/cctv", label: "Commercial CCTV" },
      { href: "/service-plans/fire-alarm-servicing", label: "Fire Alarm Servicing" },
      { href: "/service-plans/cctv-maintenance", label: "CCTV Maintenance" },
    ],
    ctaLabel: "Discuss a Fire & CCTV Project",
    ctaText: "Tell us about the premises, existing fire and CCTV equipment, project stage, required coverage and available fire information. NOX will guide the survey and proposal route.",
  },
}

export function generateStaticParams() {
  return Object.keys(pages).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const page = pages[slug]
  if (!page) return {}
  return pageMetadata(page.metaTitle, page.metaDescription, `/fire-compliance/${slug}`, { image: page.image, imageAlt: page.imageAlt })
}

export default async function FireProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = pages[slug]
  if (!page) notFound()

  const path = `/fire-compliance/${slug}`
  const structuredData = [
    serviceSchema({ name: page.title, description: page.intro, path, serviceType: page.eyebrow, audience: "Commercial", image: page.image }),
    webPageSchema({ name: page.title, description: page.intro, path, image: page.image }),
    faqSchema(page.faq),
    breadcrumbSchema([
      { name: "Home", path: "" },
      { name: "Fire & Compliance", path: "/fire-compliance" },
      { name: page.title, path },
    ]),
  ]

  return <>
    {structuredData.map((data, index) => <JsonLd data={data} key={index}/>)}
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Fire & Compliance", href: "/fire-compliance" }, { label: page.title }]}/>
    <PageHero eyebrow={page.eyebrow} title={page.title} intro={page.intro} image={page.image} imageAlt={page.imageAlt} imagePosition={page.imagePosition}>
      <ContactActions primaryLabel={page.ctaLabel} audience="Commercial" serviceCategory={page.eyebrow} enquiryType="Installation" sourceLabel={`fire-${slug}`}/>
    </PageHero>
    <TrustStrip variant="fire"/>

    <section className="section"><div className="container split-grid"><div>
      <SectionHeading eyebrow="Project requirement" title={page.requirementTitle} text={page.requirementText}/>
      <Checklist items={page.included}/>
    </div><aside className="dark-panel"><h3>Suitable for</h3><Checklist items={page.suitableFor}/><ContactActions primaryLabel={page.ctaLabel} compact audience="Commercial" serviceCategory={page.eyebrow} enquiryType="Installation" sourceLabel={`fire-${slug}-property-types`}/></aside></div></section>

    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Project route" title="Survey, programme, delivery and ongoing support" text="The project is organised around clear site information, separate technical scopes and a practical route into future servicing or maintenance."/><FeatureGrid columns={4} items={page.process}/></div></section>

    <section className="section"><div className="container"><SectionHeading eyebrow="Design priorities" title="The details that keep the project useful after installation" text="Good project coordination should improve clarity and delivery without reducing the technical standard or records required for each premises and system."/><FeatureGrid columns={4} items={page.priorities}/></div></section>

    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Real system environments" title={page.proofTitle} text={page.proofText}/><div className="commercial-proof-grid fire-project-proof-grid">{page.proof.map(item => <figure key={item.caption}><img src={item.image} alt={item.alt} style={item.position ? { objectPosition: item.position } : undefined}/><figcaption>{item.caption}</figcaption></figure>)}</div></div></section>

    <section className="section"><div className="container split-grid"><div><SectionHeading eyebrow="Quotation factors" title="What affects the project scope and price" text="A useful proposal separates known requirements from assumptions and makes clear where a site survey or records review is still needed."/><Checklist items={page.pricingFactors}/></div><aside className="dark-panel"><h3>Prepare the enquiry</h3><p>Share property addresses, system photographs, available drawings or records, known faults, project timescales, operating hours and the outcome the business needs.</p><Link className="text-link" href="/blog/what-information-is-needed-for-a-fire-alarm-quote">What information is needed for a fire alarm quote? →</Link></aside></div></section>

    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Relevant NOX work" title="Commercial fire, CCTV and coordinated installation projects" text="These projects show the equipment, site conditions and installation standards that support the wider service approach. They are not presented as one customer's multi-site estate unless the case study states that directly."/><CaseStudyGrid slugs={page.cases}/></div></section>

    <section className="section"><div className="container"><SectionHeading eyebrow="Planning guides" title="Useful answers before a site survey or programme review" text="Prepare the right system information, understand the separate service requirements and make the first conversation more productive."/><GuideLinks slugs={page.guides}/></div></section>

    <AreaLinks title={`${page.eyebrow} across Chesterfield, Sheffield and Derbyshire`}/>
    <EnquiryPreparation topic={page.eyebrow.toLowerCase()} commercial/>

    <section className="section"><div className="container"><SectionHeading eyebrow="Customer feedback" title="Clear planning, careful installation and local support"/><ReviewGrid names={["Rory Stirland", "Nathan De La Rosa", "Jez S"]}/><div className="related-links"><strong>Related services:</strong>{page.related.map(item => <Link href={item.href} key={item.href}>{item.label} →</Link>)}</div></div></section>

    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Common questions" title="Clear answers before the project begins"/><div className="faq-list">{page.faq.map(item => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></div></section>

    <ConversionPanel title={page.ctaLabel} text={page.ctaText} primaryLabel={page.ctaLabel} audience="Commercial" serviceCategory={page.eyebrow} enquiryType="Installation" sourceLabel={`fire-${slug}-final`}/>
  </>
}
