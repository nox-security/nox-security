import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Breadcrumbs, CaseStudyGrid, Checklist, ContactActions, ConversionPanel, FeatureGrid, JsonLd, PageHero, ReviewGrid, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata, site } from "@/lib/site"

type CommercialPage = {
  title: string
  eyebrow: string
  intro: string
  metaTitle: string
  metaDescription: string
  image: string
  alt: string
  requirementTitle: string
  requirementText: string
  included: string[]
  propertyTypes: string[]
  process: { title: string; text: string }[]
  details: { title: string; text: string }[]
  pricingFactors: string[]
  faq: { q: string; a: string }[]
  related: { href: string; label: string }[]
  guide: { href: string; label: string }
  cases: string[]
  ctaLabel: string
}

const pages: Record<string, CommercialPage> = {
  cctv: {
    title: "Commercial CCTV Installation in Chesterfield, Sheffield and Derbyshire",
    eyebrow: "Commercial CCTV installation",
    intro: "NOX provides Commercial CCTV Installation for shops, hospitality, offices, warehouses, yards, garages and industrial premises across Chesterfield, Sheffield, Derbyshire and South Yorkshire. Coverage, evidence quality, night performance, storage and remote access are planned around the site.",
    metaTitle: "Commercial CCTV Installation Sheffield & Derbyshire | NOX",
    metaDescription: "Commercial CCTV Installation across Chesterfield, Sheffield, Derbyshire and South Yorkshire with site-specific cameras, NVR recording, remote viewing, upgrades and maintenance.",
    image: "/images/revisions/ajax-cctv-system-nvr-cameras.jpg",
    alt: "Ajax commercial CCTV cameras and network video recorder",
    requirementTitle: "Each camera needs a clear operational or evidence purpose",
    requirementText: "Entrances, exits, tills, vehicle routes, loading areas, stock, working zones and external yards need different views. Mounting position, lighting, network, recording duration and who needs access all affect the system design.",
    included: ["Site-specific coverage design", "High-resolution camera options", "Night image and lighting review", "NVR recording and storage planning", "Live viewing and remote access", "User permissions and playback handover", "Existing-system upgrades", "Planned CCTV maintenance"],
    propertyTypes: ["Retail and showrooms", "Hospitality and leisure", "Offices", "Warehouses", "Industrial units", "Garages and workshops", "Yards and compounds", "Multi-site businesses"],
    process: [
      { title: "Site survey", text: "We identify critical views, operational restrictions, existing equipment, network availability and recording expectations." },
      { title: "Camera and storage design", text: "The quotation sets out positions, camera type, recorder, storage, remote access and any enabling work." },
      { title: "Installation around operations", text: "Cabling, access equipment and commissioning are planned to reduce disruption to staff and customers." },
      { title: "Handover and maintenance", text: "Live view, playback, search, user access and the ongoing maintenance options are explained clearly." }
    ],
    details: [
      { title: "Evidence quality", text: "A wide overview and a detailed identification view are different requirements. Lens, distance, resolution and lighting must match the purpose." },
      { title: "Recording duration", text: "Camera quantity, resolution, frame rate, movement and storage capacity affect how long footage can be retained." },
      { title: "Night performance", text: "External lighting, reflections, colour-at-night technology and camera placement influence usable footage after dark." },
      { title: "Existing-system upgrades", text: "Suitable analogue, hybrid and IP systems can be assessed for camera, recorder, storage and remote-access improvements." }
    ],
    pricingFactors: ["Number and purpose of cameras", "Image detail and night-performance requirements", "Recorder and storage duration", "Cable routes and network work", "Camera height and access equipment", "Operational or out-of-hours installation", "Existing cameras, cabling and recorder", "Number of buildings or sites"],
    faq: [
      { q: "How many cameras does a commercial site need?", a: "The answer depends on entrances, evidence requirements, vehicle routes, stock, working areas, blind spots and site layout. A survey defines useful views before a camera count is proposed." },
      { q: "How long should commercial CCTV footage be stored?", a: "There is no single answer for every site. The business purpose, data policy, incident discovery time, camera count, resolution and storage capacity all affect the design." },
      { q: "Can NOX upgrade an existing commercial CCTV system?", a: "Often yes. Camera technology, recorder compatibility, cabling, storage, remote access and current faults need to be assessed first." },
      { q: "Can cameras be installed while the business remains open?", a: "Usually, subject to access, safety, cable routes and the type of premises. Work can be planned around operations or quoted for out-of-hours attendance where required." },
      { q: "Do you provide CCTV maintenance?", a: "Yes. Suitable systems can receive camera cleaning, image checks, recorder and storage review, playback testing and remote-access support." },
      { q: "Can several sites be viewed from one place?", a: "Suitable platforms can support central or remote viewing, but user permissions, network security, recorder configuration and the customer’s operating model need to be designed properly." }
    ],
    related: [
      { href: "/service-plans/cctv-maintenance", label: "CCTV maintenance" },
      { href: "/commercial/industrial-warehouse-security", label: "Industrial & warehouse security" },
      { href: "/commercial/multi-site-security", label: "Multi-site security" },
      { href: "/services/repairs-upgrades", label: "CCTV repairs and upgrades" }
    ],
    guide: { href: "/blog/how-many-cameras-does-a-commercial-site-need", label: "How many cameras does a commercial site need?" },
    cases: ["continue-arcade-commercial-cctv-derby", "chesterfield-scrapyard-cctv", "buxton-industrial-security", "retford-former-bank-cctv"],
    ctaLabel: "Plan a Commercial CCTV System"
  },
  "intruder-alarms": {
    title: "Commercial Intruder Alarm Installation in Chesterfield and Sheffield",
    eyebrow: "Commercial intruder alarm installation",
    intro: "NOX provides Commercial Intruder Alarm Installation across Chesterfield, Sheffield, Derbyshire and South Yorkshire, designing internal, external and perimeter protection around access, staff use, opening hours and monitoring requirements.",
    metaTitle: "Commercial Intruder Alarm Installation | Chesterfield & Sheffield",
    metaDescription: "Commercial Intruder Alarm Installation across Chesterfield, Sheffield, Derbyshire and South Yorkshire with internal detection, perimeter protection, monitoring and maintenance.",
    image: "/images/revisions/tan-station-ajax-keypad.jpg",
    alt: "NOX branded Ajax keypad installed at a commercial premises",
    requirementTitle: "The alarm must reflect how the premises opens, closes and operates",
    requirementText: "Staff routes, delivery doors, offices, stock, workshops, yards, pets, machinery, shift patterns and out-of-hours access all affect detection, arming areas, user control and the response plan.",
    included: ["Door and window protection", "Internal movement detection", "Photo verification where suitable", "External and perimeter detection", "Keypads, tags and user permissions", "App control and event history", "Professional monitoring options", "Maintenance and takeover support"],
    propertyTypes: ["Retail", "Offices", "Hospitality", "Warehouses", "Industrial units", "Garages and workshops", "Yards", "Multi-site businesses"],
    process: [
      { title: "Operational survey", text: "We review access, staff use, valuable areas, external routes, current systems and the required response." },
      { title: "Detection and control design", text: "Zones, devices, arming areas, user permissions, communication and monitoring are planned together." },
      { title: "Installation and configuration", text: "Devices are positioned, commissioned and tested around realistic opening, closing and occupied conditions." },
      { title: "Handover and annual support", text: "Users, keyholders, apps, event history, monitoring and maintenance are explained clearly." }
    ],
    details: [
      { title: "Internal protection", text: "Doors, movement routes, offices, stock and vulnerable areas are protected around the way the premises is occupied." },
      { title: "External detection", text: "Suitable perimeter devices can provide earlier warning around approaches, yards or exposed external areas after false-alarm risks are assessed." },
      { title: "Monitoring", text: "Professional monitoring is different from an app notification. Suitable maintained systems can signal agreed events through a confirmed route." },
      { title: "Takeovers and upgrades", text: "Existing wired, wireless and hybrid systems can be inspected for access, faults, parts availability and a practical maintenance plan." }
    ],
    pricingFactors: ["Number of doors, areas and devices", "Internal, external and perimeter detection", "Building construction and radio coverage", "User, partition and access requirements", "Monitoring and communication equipment", "Existing system and cabling", "Several buildings or sites", "Out-of-hours installation"],
    faq: [
      { q: "Can a commercial alarm be monitored?", a: "Suitable systems can use professional monitoring, subject to compatibility, communication, maintenance and the agreed keyholder response process." },
      { q: "Can an alarm protect a yard or external area?", a: "Yes, where suitable external detection can be positioned around the site and normal movement, animals, vehicles and boundaries have been considered." },
      { q: "Can staff have different access permissions?", a: "Suitable systems can use individual users, tags, app permissions and partitions so access and event history are clearer." },
      { q: "Can NOX take over an existing commercial alarm?", a: "Often yes, subject to system make, access, condition, documentation, compatibility and parts availability." },
      { q: "Do commercial alarms need servicing?", a: "Planned servicing helps check devices, batteries, communication, sirens, event history and system condition. Monitoring arrangements may also require an agreed maintenance route." },
      { q: "Can the alarm and CCTV be designed together?", a: "Yes. The systems remain separate in function but can be surveyed and planned together around the same site priorities." }
    ],
    related: [
      { href: "/service-plans/alarm-monitoring", label: "Alarm monitoring" },
      { href: "/service-plans/alarm-maintenance", label: "Intruder alarm servicing" },
      { href: "/commercial/yard-perimeter-security", label: "Yard & perimeter protection" },
      { href: "/services/security-system-takeover", label: "Commercial system takeovers" }
    ],
    guide: { href: "/blog/app-alerts-versus-professional-alarm-monitoring", label: "App alerts versus professional monitoring" },
    cases: ["telesis-hitachi-fire-intruder-system", "dronfield-outdoor-detectors", "buxton-industrial-security", "banana-industries-fire-security"],
    ctaLabel: "Discuss a Commercial Alarm"
  },
  "industrial-warehouse-security": {
    title: "Industrial and warehouse security for larger operational sites",
    eyebrow: "Industrial & warehouse security",
    intro: "NOX plans CCTV, intruder and perimeter protection around several buildings, loading areas, stock, machinery, vehicle routes, boundaries and the way the site operates. Fire requirements can be coordinated through the separate Fire & Compliance route.",
    metaTitle: "Industrial & Warehouse Security Derbyshire | NOX",
    metaDescription: "Industrial and warehouse CCTV, intruder alarms, perimeter protection and ongoing support across Chesterfield, Sheffield and Derbyshire.",
    image: "/images/revisions/nox-commercial-cctv-installation.jpg",
    alt: "NOX commercial security installation at an industrial unit",
    requirementTitle: "Larger sites need a joined-up plan for buildings, external areas and operations",
    requirementText: "Warehouses and industrial sites often combine long cable routes, several structures, vehicle movements, loading zones, high mounting positions, limited network coverage and out-of-hours risks. The design must be coordinated before equipment is selected.",
    included: ["Warehouse and production-area CCTV", "Loading-bay and vehicle-route coverage", "Internal and external intruder detection", "Yard and boundary protection", "Recorder and network design", "Several buildings and phased projects", "Monitoring and keyholder routes", "Maintenance and system takeovers"],
    propertyTypes: ["Warehouses", "Manufacturing", "Industrial units", "Distribution", "Engineering sites", "Storage yards", "Workshops", "Multi-building premises"],
    process: [
      { title: "Site-wide survey", text: "Buildings, boundaries, routes, operations, existing systems, networks and access equipment are reviewed together." },
      { title: "Risk and coverage plan", text: "CCTV views, alarm areas, perimeter layers, recording and communication are mapped to actual site priorities." },
      { title: "Phased or coordinated delivery", text: "Work is scheduled around operations, access, health and safety, height and any required enabling work." },
      { title: "Handover and support", text: "Users, playback, alarm areas, monitoring, records and planned maintenance are coordinated after installation." }
    ],
    details: [
      { title: "Several buildings", text: "Each building may need separate power, network or radio consideration while remaining part of one operational system." },
      { title: "External areas", text: "Yards, gates, loading zones and boundaries can use CCTV, lighting and suitable external detection as complementary layers." },
      { title: "Recording and evidence", text: "Larger camera counts require deliberate storage, playback, user permissions and incident-search planning." },
      { title: "Long-term support", text: "Maintenance, faults, upgrades and multi-site records are planned so the site remains supportable after handover." }
    ],
    pricingFactors: ["Site size and number of buildings", "Camera and detector quantities", "Cable, fibre or wireless links", "Network and recorder capacity", "Height access and equipment", "Operational and health-and-safety constraints", "Monitoring requirements", "Phased or out-of-hours work"],
    faq: [
      { q: "Can NOX secure several buildings on one industrial site?", a: "Yes. Power, network, cable routes, radio conditions and user requirements are assessed for each building and the site as a whole." },
      { q: "Can CCTV cover loading bays and vehicle routes?", a: "Yes. Camera position, lens, night lighting and evidence requirements need to match the speed, distance and direction of movement." },
      { q: "Can the project be delivered in phases?", a: "Yes, where the core design, capacity, network and future routes are planned from the beginning." },
      { q: "Do you maintain industrial CCTV and alarms?", a: "Yes, suitable systems can move into planned CCTV and intruder maintenance after installation or a takeover assessment." },
      { q: "Can fire and security work be coordinated?", a: "Yes. The project can be coordinated through one team while fire design, commissioning, records and servicing remain clearly defined." }
    ],
    related: [
      { href: "/commercial/cctv", label: "Commercial CCTV" },
      { href: "/commercial/intruder-alarms", label: "Commercial intruder alarms" },
      { href: "/commercial/yard-perimeter-security", label: "Yard & perimeter protection" },
      { href: "/commercial/integrated-fire-security", label: "Integrated Fire & Security" }
    ],
    guide: { href: "/blog/how-many-cameras-does-a-commercial-site-need", label: "How many cameras does a commercial site need?" },
    cases: ["telesis-hitachi-fire-intruder-system", "buxton-industrial-security", "chesterfield-scrapyard-cctv"],
    ctaLabel: "Discuss an Industrial Site"
  },
  "yard-perimeter-security": {
    title: "Yard and perimeter protection for commercial and industrial sites",
    eyebrow: "Yard & perimeter protection",
    intro: "NOX combines suitable external detection, CCTV and internal protection around vehicle yards, compounds, gates, loading areas and exposed boundaries. The design considers normal site movement and false-alarm risks before devices are positioned.",
    metaTitle: "Yard & Perimeter Security Systems Derbyshire | NOX",
    metaDescription: "Commercial yard CCTV, perimeter detection and intruder protection across Chesterfield, Sheffield and Derbyshire for compounds, gates and industrial sites.",
    image: "/images/resent-installation/B563DA1D-D64B-4DF3-8058-BC6E01154EC3.png",
    alt: "External Ajax perimeter detector installed at a commercial site",
    requirementTitle: "Earlier warning is useful only when normal movement and the boundary are understood",
    requirementText: "Vehicles, staff, wildlife, public access, vegetation, neighbouring activity, lighting and the shape of the site can all affect external detection. CCTV and perimeter devices should be layered around the actual route of approach.",
    included: ["Gate and entrance coverage", "Yard and compound CCTV", "Suitable external motion detection", "Boundary and approach review", "Vehicle-route consideration", "External sirens and warning devices", "Alarm monitoring options", "Maintenance and seasonal checks"],
    propertyTypes: ["Vehicle yards", "Industrial compounds", "Storage sites", "Garages", "Rural commercial premises", "Building-material yards", "Multi-building sites", "Gated business premises"],
    process: [
      { title: "Boundary and movement survey", text: "We review routes, gates, public areas, vehicles, animals, vegetation, lighting and the current security layers." },
      { title: "Layered design", text: "CCTV, external detection, internal alarms and user response are selected to complement one another." },
      { title: "Positioning and testing", text: "Devices are installed and tested around realistic movement, approach direction and site conditions." },
      { title: "Review and maintenance", text: "Users are shown event handling, and external devices can be included in planned servicing and seasonal checks." }
    ],
    details: [
      { title: "External detection", text: "Suitable devices can identify movement before the building is reached, but correct positioning is essential to reduce unwanted activations." },
      { title: "CCTV verification", text: "Live and recorded views help staff or keyholders understand what happened and which area requires attention." },
      { title: "Lighting and visibility", text: "Existing or planned lighting affects camera performance and the ability to capture useful detail after dark." },
      { title: "Monitoring and response", text: "The customer’s keyholder process and suitable professional monitoring route should be clear before the system is commissioned." }
    ],
    pricingFactors: ["Boundary length and number of approaches", "External detector quantities", "Camera positions and night lighting", "Gates, vehicles and normal movement", "Power, network and communication", "Mounting and access", "Monitoring route", "Several buildings or phases"],
    faq: [
      { q: "Can perimeter detection protect a commercial yard?", a: "Yes, where the site can be surveyed and devices positioned around normal movement, vehicles, animals and boundaries." },
      { q: "Does perimeter detection replace CCTV?", a: "No. Detection alerts to movement; CCTV provides visual context and recorded evidence. They often work best as separate layers." },
      { q: "Can the system distinguish every person from an animal?", a: "Technology can reduce unwanted activations, but no design should promise perfect classification in every external condition. Position and site management remain important." },
      { q: "Can yard alarms be professionally monitored?", a: "Suitable systems can use professional signalling, subject to compatibility, maintenance and the agreed response route." },
      { q: "Do external detectors need maintenance?", a: "Yes. Device condition, alignment, obstruction, vegetation and event history should be reviewed as part of planned maintenance." }
    ],
    related: [
      { href: "/systems/perimeter-protection", label: "Perimeter protection overview" },
      { href: "/commercial/cctv", label: "Commercial CCTV" },
      { href: "/commercial/intruder-alarms", label: "Commercial intruder alarms" },
      { href: "/service-plans/alarm-monitoring", label: "Alarm monitoring" }
    ],
    guide: { href: "/blog/what-is-perimeter-protection", label: "What is perimeter protection?" },
    cases: ["dronfield-outdoor-detectors", "chesterfield-scrapyard-cctv", "buxton-industrial-security"],
    ctaLabel: "Discuss a Yard or Perimeter"
  },
  "multi-site-security": {
    title: "Multi-site security systems and coordinated ongoing support",
    eyebrow: "Multi-site security",
    intro: "NOX supports suitable businesses and property portfolios that need consistent CCTV, intruder, fire or servicing arrangements across several locations. The project focuses on standards, user access, rollout, records and a practical route for ongoing support.",
    metaTitle: "Multi-Site Security Systems Derbyshire & Sheffield | NOX",
    metaDescription: "Multi-site CCTV, intruder, fire and maintenance planning across Chesterfield, Sheffield and Derbyshire with coordinated surveys, rollout, users, records and service schedules.",
    image: "/images/projects/bottle-thyme-vehicles.jpg",
    alt: "NOX Fire and Security vehicles supporting a commercial project",
    requirementTitle: "Consistency matters, but every site still needs its own survey",
    requirementText: "A common platform, user structure and reporting approach can simplify a portfolio, but building layouts, networks, existing equipment, opening hours and local risks remain different. NOX creates a repeatable standard without pretending every site is identical.",
    included: ["Portfolio and site inventory", "Common design standards", "Site-specific surveys", "User and permission planning", "Phased rollout", "Remote viewing and administration", "Coordinated servicing", "One point of contact and clear records"],
    propertyTypes: ["Retail groups", "Hospitality portfolios", "Property managers", "Landlords", "Offices", "Industrial businesses", "Several warehouses", "Franchise or branch networks"],
    process: [
      { title: "Portfolio discovery", text: "We identify locations, systems, priorities, standards, users, service dates and existing contracts or records." },
      { title: "Pilot and standard", text: "A suitable site can establish the equipment, user, reporting and handover standard before wider rollout." },
      { title: "Site-by-site delivery", text: "Each premises receives its own survey and quotation within the agreed portfolio approach." },
      { title: "Coordinated support", text: "Maintenance, faults, user changes and renewals can be scheduled and reported more consistently." }
    ],
    details: [
      { title: "Common user experience", text: "Where suitable, platforms and permission structures can be standardised so managers do not learn a different system at every site." },
      { title: "Site-specific exceptions", text: "Network, fire, access and property differences are recorded rather than hidden inside a one-size-fits-all specification." },
      { title: "Phased investment", text: "Priority sites, failed equipment and new openings can be addressed first while the wider plan remains visible." },
      { title: "Service coordination", text: "Visit dates, asset information, defects and recurring support can be managed under a clearer portfolio schedule." }
    ],
    pricingFactors: ["Number and location of sites", "Systems and assets at each premises", "Survey and rollout schedule", "Common platform or mixed legacy equipment", "Network and remote-access requirements", "User and reporting structure", "Service frequencies", "Travel and access arrangements"],
    faq: [
      { q: "Can every site use the same equipment?", a: "Sometimes, but each premises still needs a survey. Building, network, fire and operational differences may require documented exceptions." },
      { q: "Can existing systems be included in a multi-site plan?", a: "Yes, subject to inspection, access, compatibility and parts availability. Some sites may remain on existing equipment while others are upgraded." },
      { q: "Can managers view several sites remotely?", a: "Suitable systems can support central access, but permissions, cybersecurity, network availability and data responsibilities need to be planned." },
      { q: "Can servicing share one renewal date?", a: "Where operationally practical and clearly agreed, visits and renewals can be coordinated across the portfolio." },
      { q: "Can fire and security systems be managed together?", a: "The relationship can be coordinated, but each system keeps its own correct scope, records and servicing requirements." }
    ],
    related: [
      { href: "/commercial/cctv", label: "Commercial CCTV" },
      { href: "/commercial/integrated-fire-security", label: "Integrated Fire & Security" },
      { href: "/service-plans/fire-compliance", label: "Fire Compliance Plans" },
      { href: "/service-plans/total-security", label: "Total Security Plans" }
    ],
    guide: { href: "/blog/what-information-is-needed-for-a-fire-alarm-quote", label: "Information that helps prepare a site quotation" },
    cases: ["telesis-hitachi-fire-intruder-system", "retford-former-bank-cctv", "bottle-and-thyme-commercial-cctv-chesterfield"],
    ctaLabel: "Request a Multi-Site Proposal"
  },
  "integrated-fire-security": {
    title: "Integrated fire and security projects for commercial premises",
    eyebrow: "Integrated Fire & Security",
    intro: "NOX can coordinate commercial fire alarms, CCTV, intruder protection and ongoing support through one project team. The systems remain correctly separated in design, commissioning and records while the customer benefits from clearer planning and accountability.",
    metaTitle: "Integrated Fire & Security Projects Derbyshire | NOX",
    metaDescription: "Coordinated commercial fire alarm, CCTV and intruder projects across Chesterfield, Sheffield and Derbyshire with clear system scopes, installation planning and ongoing support.",
    image: "/images/revisions/telesis-hitachi-exterior.jpg",
    alt: "Commercial premises with integrated fire and security systems installed by NOX",
    requirementTitle: "One project team does not mean one blurred system scope",
    requirementText: "Fire, CCTV and intruder systems answer different requirements. NOX coordinates surveys, access, installation sequencing and customer communication while keeping fire design, commissioning, security operation and future service records clear.",
    included: ["Commercial fire alarm installation", "Commercial CCTV", "Commercial intruder alarms", "Emergency lighting coordination", "Shared project planning", "Clear system-by-system quotations", "Handover and user training", "Ongoing fire and security support"],
    propertyTypes: ["Industrial units", "Warehouses", "Hospitality", "Retail", "Offices", "New commercial premises", "Refurbishments", "Multi-site projects"],
    process: [
      { title: "Combined site review", text: "The property, fire information, security risks, existing systems, operations and programme are reviewed together." },
      { title: "Separate system designs", text: "Fire, CCTV, intruder and emergency-lighting scopes are specified clearly, with shared enabling work identified." },
      { title: "Coordinated installation", text: "Access, cabling, commissioning and handover are sequenced to reduce conflict and unnecessary disruption." },
      { title: "Ongoing support plan", text: "Fire servicing, emergency lighting, alarm monitoring and CCTV maintenance are offered as clear recurring services after handover." }
    ],
    details: [
      { title: "Clear accountability", text: "The customer has one local project contact while each system retains the correct technical and documentary scope." },
      { title: "Efficient site access", text: "Surveys, access equipment, cable routes and operational constraints can be coordinated across the project." },
      { title: "Consistent handover", text: "Users receive a clearer overview of controls, records, apps, contacts and future service dates." },
      { title: "Recurring support", text: "Installation can lead into fire servicing, emergency-lighting testing, alarm monitoring and CCTV maintenance without hiding the separate costs." }
    ],
    pricingFactors: ["Number and type of systems", "Building size and fire information", "Camera and alarm device quantities", "Shared and separate cable routes", "Existing equipment", "Programme and operational constraints", "Commissioning and documentation", "Ongoing service requirements"],
    faq: [
      { q: "Does integrated mean the fire alarm and intruder alarm become one system?", a: "No. They remain separate systems with different functions and requirements. The project planning and customer support are coordinated." },
      { q: "Can NOX install fire, CCTV and intruder at the same premises?", a: "Yes, for suitable projects. Each scope is surveyed, quoted, installed and handed over clearly." },
      { q: "Can existing systems be retained?", a: "Potentially. Access, condition, compatibility, records and supportability determine what can be reused or taken over." },
      { q: "Can ongoing service visits be coordinated?", a: "Yes, where practical, fire, emergency-lighting and security visits can be planned under clear individual or combined arrangements." },
      { q: "Is this suitable for a refurbishment?", a: "Yes. Early coordination is particularly useful where cable routes, ceilings, access, builders and other trades are involved." }
    ],
    related: [
      { href: "/fire-compliance", label: "Fire & Compliance" },
      { href: "/commercial/cctv", label: "Commercial CCTV" },
      { href: "/commercial/intruder-alarms", label: "Commercial intruder alarms" },
      { href: "/service-plans/fire-compliance", label: "Fire Compliance Plans" }
    ],
    guide: { href: "/blog/can-fire-alarm-and-emergency-lighting-visits-be-combined", label: "Can fire and emergency-lighting visits be combined?" },
    cases: ["telesis-hitachi-fire-intruder-system", "tan-station-fire-security-brimington", "banana-industries-fire-security"],
    ctaLabel: "Discuss an Integrated Project"
  }
}

export function generateStaticParams() {
  return Object.keys(pages).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const page = pages[slug]
  if (!page) return {}
  return pageMetadata(page.metaTitle, page.metaDescription, `/commercial/${slug}`)
}

export default async function CommercialDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = pages[slug]
  if (!page) notFound()

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: page.faq.map(item => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) }
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: page.title, description: page.intro, serviceType: page.eyebrow, provider: { "@type": "LocalBusiness", name: site.name, url: site.url }, areaServed: ["Chesterfield", "Sheffield", "Derbyshire"], url: `${site.url}/commercial/${slug}` }
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: site.url },
    { "@type": "ListItem", position: 2, name: "Commercial Security", item: `${site.url}/commercial` },
    { "@type": "ListItem", position: 3, name: page.title, item: `${site.url}/commercial/${slug}` }
  ] }

  return <>
    <JsonLd data={faqSchema}/><JsonLd data={serviceSchema}/><JsonLd data={breadcrumbSchema}/>
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Commercial Security", href: "/commercial" }, { label: page.title }]}/>
    <PageHero eyebrow={page.eyebrow} title={page.title} intro={page.intro} image={page.image} imageAlt={page.alt}>
      <ContactActions primaryLabel={page.ctaLabel} audience="Commercial" serviceCategory={page.eyebrow} enquiryType="Installation" sourceLabel={`commercial-${slug}`}/>
    </PageHero>
    <TrustStrip variant="commercial"/>

    <section className="section"><div className="container split-grid"><div><SectionHeading eyebrow="Site requirement" title={page.requirementTitle} text={page.requirementText}/><Checklist items={page.included}/></div><aside className="dark-panel"><h3>Suitable for</h3><Checklist items={page.propertyTypes}/><ContactActions primaryLabel={page.ctaLabel} compact audience="Commercial" serviceCategory={page.eyebrow} enquiryType="Installation" sourceLabel={`commercial-${slug}-property-types`}/></aside></div></section>
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Project process" title="Survey, design, installation and ongoing support"/><FeatureGrid columns={4} items={page.process}/></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="What the design needs to solve" title="System decisions linked to the operational requirement"/><FeatureGrid columns={4} items={page.details}/></div></section>
    <section className="section section-alt"><div className="container split-grid"><div><SectionHeading eyebrow="Pricing factors" title="What affects the commercial quotation" text="The final price reflects the site, system, access and operational requirements confirmed during the survey."/><Checklist items={page.pricingFactors}/></div><aside className="dark-panel"><h3>Prepare for the survey</h3><p>Site plans, current camera or device quantities, existing equipment, network information, known faults, required recording, operating hours and project timescales all help produce a clearer proposal.</p><Link className="text-link" href={page.guide.href}>{page.guide.label} →</Link></aside></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="Relevant NOX projects" title="Real commercial and industrial work" text="Genuine property and installation photography with confirmed service scopes."/><CaseStudyGrid slugs={page.cases}/></div></section>
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Customer feedback" title="Professional planning, installation and local support"/><ReviewGrid names={["Jez S"]}/><div className="related-links"><strong>Related services:</strong>{page.related.map(item => <Link key={item.href} href={item.href}>{item.label} →</Link>)}</div></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="Common questions" title="Answers before a commercial survey"/><div className="faq-list">{page.faq.map(item => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></div></section>
    <ConversionPanel title={page.ctaLabel} text="Tell us the site type, location, existing systems, approximate project scale and what the new system needs to achieve. NOX will guide the survey and proposal route." primaryLabel={page.ctaLabel} audience="Commercial" serviceCategory={page.eyebrow} enquiryType="Installation" sourceLabel={`commercial-${slug}-final`}/>
  </>
}
