import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { AreaLinks, GuideLinks, Breadcrumbs, CaseStudyGrid, Checklist, ContactActions, ConversionPanel, EnquiryPreparation, FeatureGrid, JsonLd, PageHero, ReviewGrid, SectionHeading, TrustStrip, guideSlugsFor } from "@/components/marketing"
import { pageMetadata } from "@/lib/site"
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema"

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
  visuals?: { src: string; alt: string; caption: string; product?: boolean }[]
  visualEyebrow?: string
  visualTitle?: string
  visualText?: string
  platformTitle?: string
  platformText?: string
  products?: { name: string; description: string; image: string; imageAlt: string }[]
}

const pages: Record<string, CommercialPage> = {
  cctv: {
    title: "Commercial CCTV Installation in Chesterfield, Sheffield and Derbyshire",
    eyebrow: "Commercial CCTV installation",
    intro: "NOX provides Commercial CCTV Installation for shops, hospitality, offices, warehouses, yards, garages and industrial premises across Chesterfield, Sheffield, Derbyshire and South Yorkshire. Coverage, evidence quality, night performance, storage and remote access are planned around the site.",
    metaTitle: "Commercial CCTV Installation Sheffield & Derbyshire | NOX",
    metaDescription: "Commercial CCTV Installation across Chesterfield, Sheffield, Derbyshire and South Yorkshire with site-specific cameras, NVR recording, remote viewing, upgrades and maintenance.",
    image: "/images/resent-installation/E6B4D998-0805-4B7E-8532-CC491C881B57.jpeg",
    alt: "Coordinated alarm monitoring and CCTV maintenance package from NOX",
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
    ctaLabel: "Plan a CCTV System"
  },
  "intruder-alarms": {
    title: "Commercial Intruder Alarm Installation in Chesterfield and Sheffield",
    eyebrow: "Commercial intruder alarm installation",
    intro: "NOX provides Commercial Intruder Alarm Installation across Chesterfield, Sheffield, Derbyshire and South Yorkshire, designing internal, external and perimeter protection around access, staff use, opening hours and monitoring requirements.",
    metaTitle: "Commercial Intruder Alarm Installation | Chesterfield & Sheffield",
    metaDescription: "Commercial Intruder Alarm Installation across Chesterfield, Sheffield, Derbyshire and South Yorkshire with internal detection, perimeter protection, monitoring and maintenance.",
    image: "/images/v4-12-9/residential-intruder-main.jpg",
    alt: "Black Ajax outdoor detector used for commercial intruder protection",
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
    cases: ["telesis-hitachi-fire-intruder-system", "dronfield-timber-perimeter", "buxton-industrial-security", "banana-industries-fire-security"],
    visuals: [
      { src: "/images/image-refresh/intruder-entry-exit-delay.webp", alt: "Ajax door protection supporting commercial entry and exit routines", caption: "Entry and exit protection configured around staff access, opening and closing procedures." },
      { src: "/images/image-refresh/intruder-app-alerts.webp", alt: "Ajax alarm event displayed on a smartphone", caption: "Clear event information helps authorised users understand which area or device has activated." },
      { src: "/images/image-refresh/intruder-keypad-touchscreen.webp", alt: "Ajax touchscreen keypad for commercial alarm control", caption: "Visual keypad control supports areas, individual users and straightforward daily operation." },
      { src: "/images/image-refresh/intruder-scheduled-arming.webp", alt: "Ajax scheduled arming for commercial premises", caption: "Schedules and scenarios can support consistent protection around trading hours and staff routines." }
    ],
    platformTitle: "Commercial Ajax protection designed around the site",
    platformText: "The same Ajax platform used for high-quality residential systems can be configured for shops, offices, hospitality, warehouses and industrial premises. Device choice, areas, permissions, signalling and external protection are planned around how the business operates.",
    products: [
      { name: "Ajax Hub and system control", description: "The control centre, communication route and user setup are configured around the premises, staff responsibilities and required response.", image: "/images/image-refresh/intruder-simple-control.webp", imageAlt: "Ajax hub providing commercial intruder alarm control" },
      { name: "MotionCam photo verification", description: "Motion detection with image verification can help keyholders or monitoring staff understand what caused an alarm before deciding the next step.", image: "/images/image-refresh/intruder-motioncam-verification.webp", imageAlt: "Ajax MotionCam detector with photo verification" },
      { name: "Door and window protection", description: "Opening detectors protect entrance doors, staff doors, stock rooms, offices and other access points that matter to the business.", image: "/images/image-refresh/intruder-doorprotect.webp", imageAlt: "Ajax DoorProtect installed on a commercial door" },
      { name: "Touchscreen keypad control", description: "Clear visual controls, areas and individual permissions make opening, closing and managing several parts of the site easier for authorised staff.", image: "/images/image-refresh/intruder-keypad-touchscreen.webp", imageAlt: "Ajax touchscreen keypad with clear commercial controls" },
      { name: "Outdoor and perimeter detection", description: "Suitable external detectors can add earlier warning around yards, approaches, loading areas or exposed routes after environmental risks are assessed.", image: "/images/image-refresh/intruder-outdoor-false-alarm.webp", imageAlt: "Ajax outdoor detector with photo verification" },
      { name: "App alerts and event history", description: "Authorised users can receive clear notifications and review the relevant area or event without giving every employee unnecessary access.", image: "/images/image-refresh/intruder-app-alerts.webp", imageAlt: "Ajax commercial alarm alert on a smartphone" },
      { name: "Scheduled arming and scenarios", description: "Suitable systems can follow schedules and automation rules around opening hours, shifts or specific areas while keeping manual control available.", image: "/images/image-refresh/intruder-scheduled-arming.webp", imageAlt: "Ajax scheduled arming notification for a business" },
      { name: "NOX external siren", description: "A professionally positioned external siren provides visible deterrence and a clear local warning as part of the wider intruder alarm design.", image: "/images/image-refresh/residential-bellbox.webp", imageAlt: "NOX branded Ajax external siren" }
    ],
    ctaLabel: "Discuss an Intruder Alarm"
  },
  "industrial-warehouse-security": {
    title: "Industrial & office security for larger operational sites",
    eyebrow: "Industrial & office security",
    intro: "NOX plans CCTV, intruder and perimeter protection around several buildings, loading areas, stock, machinery, office access, vehicle routes, boundaries and the way the site operates. Fire requirements can be coordinated through the separate Fire & Compliance route.",
    metaTitle: "Industrial & Office Security Derbyshire | NOX",
    metaDescription: "Industrial and office CCTV, intruder alarms, perimeter protection and ongoing support across Chesterfield, Sheffield and Derbyshire.",
    image: "/images/revisions/commercial-cctv-industrial-building.jpg",
    alt: "Commercial CCTV and security installation at an industrial or office premises",
    requirementTitle: "Larger sites need a joined-up plan for buildings, external areas and operations",
    requirementText: "Warehouses and industrial sites often combine long cable routes, several structures, vehicle movements, loading zones, high mounting positions, limited network coverage and out-of-hours risks. The design must be coordinated before equipment is selected.",
    included: ["Warehouse, industrial and office CCTV", "Loading-bay and vehicle-route coverage", "Internal and external intruder detection", "Yard and boundary protection", "Reception, office and staff-access control planning", "Recorder and network design", "Several buildings and phased projects", "Monitoring and keyholder routes", "Maintenance and system takeovers"],
    propertyTypes: ["Warehouses", "Manufacturing", "Industrial units", "Distribution", "Engineering sites", "Storage yards", "Offices", "Multi-building premises"],
    process: [
      { title: "Site-wide survey", text: "Buildings, boundaries, routes, operations, existing systems, networks and access equipment are reviewed together." },
      { title: "Risk and coverage plan", text: "CCTV views, alarm areas, perimeter layers, recording and communication are mapped to actual site priorities." },
      { title: "Phased or coordinated delivery", text: "Work is scheduled around operations, access, health and safety, height and any required enabling work." },
      { title: "Handover and support", text: "Users, playback, alarm areas, monitoring, records and planned maintenance are coordinated after installation." }
    ],
    details: [
      { title: "Several buildings", text: "Each building may need separate power, network or radio consideration while remaining part of one operational system." },
      { title: "External areas", text: "Yards, gates, loading zones and boundaries can use CCTV, lighting and suitable external detection as complementary layers." },
      { title: "Office and staff areas", text: "Reception, offices, stores and restricted rooms can need a different level of visibility, user access and alarm control than the operational floor." },
      { title: "Recording and evidence", text: "Larger camera counts require deliberate storage, playback, user permissions and incident-search planning." },
      { title: "Network and reliability", text: "Long cable routes, wireless bridges, outbuildings and bandwidth requirements need to be confirmed before equipment is selected." },
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
    ctaLabel: "Discuss an Industrial Site",
    visualEyebrow: "Industrial & office security in detail",
    visualTitle: "Coverage for offices, working areas, yards and multi-building sites",
    visualText: "The system is designed around evidence quality, staff use, visitor access, loading zones, stock areas and the practical realities of larger sites.",
    visuals: [
      { src: "/images/revisions/commercial-cctv-industrial-building.jpg", alt: "Commercial CCTV cameras on an industrial building", caption: "External cameras positioned around a larger industrial or office building." },
      { src: "/images/revisions/nox-commercial-installation-engineer.jpg", alt: "NOX engineer carrying out a commercial installation", caption: "Installation planned around access, equipment height and the operating environment." },
      { src: "/images/revisions/buxton-commercial-cctv-monitor.jpg", alt: "Commercial CCTV live view at a business premises", caption: "Live views and playback arranged around the areas managers need to review." },
      { src: "/images/image-refresh/cctv-vehicle-detection.webp", alt: "Vehicle detection analytics for CCTV", caption: "Vehicle routes, loading areas and yards can be supported with suitable analytics." }
    ],
    platformTitle: "System options for industrial and office security",
    platformText: "A larger site often combines several camera types, internal and external detection, user control and remote access rather than relying on one device or one simple layout.",
    products: [
      { name: "Commercial CCTV", description: "A mix of fixed, dome or PTZ cameras can be selected around offices, entrances, loading bays, production areas and external routes.", image: "/images/image-refresh/ajax-commercial-ptz.webp", imageAlt: "Ajax PTZ camera for commercial coverage" },
      { name: "Intruder detection", description: "Internal movement detection can protect offices, stores, corridors and working areas around opening hours and occupancy.", image: "/images/ajax-products/ajax-motioncam.webp", imageAlt: "Ajax MotionCam device used on commercial intruder systems" },
      { name: "Perimeter layers", description: "Suitable external detection can protect exposed approaches, yard edges and building perimeters where earlier warning is needed.", image: "/images/ajax-products/ajax-dualcurtain.webp", imageAlt: "Ajax DualCurtain Outdoor device for perimeter protection" },
      { name: "User control", description: "Managers, staff and keyholders can be given structured access through keypads, tags and app permissions that reflect the operating routine.", image: "/images/ajax-products/ajax-keypad-plus.webp", imageAlt: "Ajax KeyPad Plus for user access and system control" }
    ]
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
    cases: ["dronfield-timber-perimeter", "chesterfield-scrapyard-cctv", "buxton-industrial-security"],
    ctaLabel: "Discuss a Yard or Perimeter"
  },
  "multi-site-security": {
    title: "Multi-site security systems and coordinated ongoing support",
    eyebrow: "Multi-site security",
    intro: "NOX supports suitable businesses and property portfolios that need consistent CCTV, intruder, fire or servicing arrangements across several locations. The project focuses on standards, user access, rollout, records and a practical route for ongoing support.",
    metaTitle: "Multi-Site Security Systems Derbyshire & Sheffield | NOX",
    metaDescription: "Multi-site CCTV, intruder, fire and maintenance planning across Chesterfield, Sheffield and Derbyshire with coordinated surveys, rollout, users, records and service schedules.",
    image: "/images/revisions/stonefirst-commercial-installation.jpg",
    alt: "NOX commercial security project supporting a multi-site rollout",
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
      { title: "Rollout planning", text: "Open sites, priority branches, legacy equipment and contractor access can all affect the order in which work is delivered." },
      { title: "Phased investment", text: "Priority sites, failed equipment and new openings can be addressed first while the wider plan remains visible." },
      { title: "Central administration", text: "Managers often need a practical way to view sites, add users, review faults and keep service records organised." },
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
    ctaLabel: "Request a Multi-Site Proposal",
    visualEyebrow: "Multi-site security in practice",
    visualTitle: "Consistent standards across several sites without losing local detail",
    visualText: "Portfolio security still has to work at ground level. These images reflect rollout, installation standards, camera coverage and user-facing equipment across live commercial sites.",
    visuals: [
      { src: "/images/revisions/stonefirst-commercial-installation.jpg", alt: "Commercial installation project supporting a multi-site rollout", caption: "A repeatable installation standard helps create more consistent delivery across the estate." },
      { src: "/images/revisions/continue-arcade-cctv-live-view.jpg", alt: "Commercial CCTV live view from a branch site", caption: "Managers still need site-by-site live views and evidence quality that suit the property." },
      { src: "/images/revisions/tan-station-ajax-keypad.jpg", alt: "Ajax keypad installed on a commercial site", caption: "Structured user access and day-to-day operation matter just as much as the hardware standard." },
      { src: "/images/revisions/nox-commercial-installation-engineer.jpg", alt: "NOX engineer carrying out a commercial installation", caption: "A coordinated rollout still needs practical local installation planning, access and handover." }
    ],
    platformTitle: "What a multi-site plan usually needs",
    platformText: "The right portfolio structure is usually a mix of common equipment standards, clear user access, consistent records and sensible support arrangements rather than simply copying one site to every location.",
    products: [
      { name: "Shared CCTV platform", description: "Where suitable, several sites can be aligned around common cameras, recorders and viewing methods so management is simpler.", image: "/images/ajax-products/ajax-cctv-system.webp", imageAlt: "Ajax CCTV system used as part of a multi-site platform" },
      { name: "Structured alarm control", description: "Managers and keyholders can be given site-specific or portfolio-wide permissions using a more consistent alarm platform.", image: "/images/ajax-products/ajax-hub.webp", imageAlt: "Ajax Hub used within a multi-site intruder system" },
      { name: "Remote oversight", description: "Suitable systems can support remote checks, event review and site-by-site administration without removing the need for local surveys and maintenance.", image: "/images/v4-13-2/alarm-monitoring-operator.jpg", imageAlt: "Monitoring operator for remote support and oversight" },
      { name: "Coordinated support", description: "The practical value often comes from clear records, scheduled servicing and one route for faults, users and upgrades across the estate.", image: "/images/v4-10/servicing-monitoring-hero.jpeg", imageAlt: "NOX van at a commercial site during servicing and support" }
    ]
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
      { title: "Shared enabling work", text: "Cable routes, access equipment, working-at-height activity and other enabling work can be coordinated so the project runs more smoothly." },
      { title: "Efficient site access", text: "Surveys, access equipment, cable routes and operational constraints can be coordinated across the project." },
      { title: "Consistent handover", text: "Users receive a clearer overview of controls, records, apps, contacts and future service dates." },
      { title: "Future servicing", text: "Fire servicing, emergency-lighting testing, alarm monitoring and CCTV maintenance can be arranged as clear follow-on services." },
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
    ctaLabel: "Discuss an Integrated Project",
    visualEyebrow: "Integrated project examples",
    visualTitle: "Fire, CCTV and intruder planned as one coordinated commercial project",
    visualText: "The systems remain separate in scope, but the on-site delivery, cable routes, access and handover can be organised through one clearer project plan.",
    visuals: [
      { src: "/images/revisions/telesis-hitachi-exterior.jpg", alt: "Commercial property with integrated fire and security systems", caption: "Integrated projects often start with a clear site-wide plan for fire, CCTV and intrusion." },
      { src: "/images/projects/tan-station-fire-first-fix.jpg", alt: "First-fix fire alarm work at a commercial premises", caption: "Early-stage fire work can be coordinated with wider security cabling and installation access." },
      { src: "/images/projects/tan-station-camera-internal-1.jpg", alt: "Internal CCTV camera at a commercial premises", caption: "Internal camera coverage can be aligned with entrance routes, reception and daily operation." },
      { src: "/images/projects/tan-station-camera-external-1.jpg", alt: "External CCTV camera at a commercial premises", caption: "External security coverage and the fire route can be delivered through one coordinated programme." }
    ],
    platformTitle: "Systems often included in an integrated project",
    platformText: "The customer benefits from one clearer project route, while each system still keeps its own correct design, records and service requirements.",
    products: [
      { name: "Fire alarm control and detection", description: "Commercial fire alarm design is based on the premises, circulation, zoning, cause and effect, records and future servicing requirements.", image: "/images/v4-10/fire-alarm-installation-hero.jpeg", imageAlt: "Fire alarm control panel and zone plan" },
      { name: "Commercial CCTV", description: "Camera coverage is planned around entrances, working areas, yards, evidence quality and the live views managers need each day.", image: "/images/image-refresh/ajax-commercial-domes.webp", imageAlt: "Commercial dome cameras" },
      { name: "Commercial intruder alarms", description: "Detection, keypads, user permissions and monitoring are configured around how the premises opens, closes and operates.", image: "/images/v4-12-9/residential-intruder-main.jpg", imageAlt: "Ajax detector used for intruder protection" },
      { name: "Emergency lighting coordination", description: "Where required, emergency-lighting installation or servicing can be coordinated alongside the wider project with clear separate scope.", image: "/images/v4-12-3/emergency-lighting-testing-servicing.jpg", imageAlt: "Emergency exit light during servicing" }
    ]
  }
}

export function generateStaticParams() {
  return Object.keys(pages).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const page = pages[slug]
  if (!page) return {}
  return pageMetadata(page.metaTitle, page.metaDescription, `/commercial/${slug}`, { image: page.image, imageAlt: page.alt })
}

export default async function CommercialDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = pages[slug]
  if (!page) notFound()

  const faqStructuredData = faqSchema(page.faq)
  const serviceStructuredData = serviceSchema({
    name: page.title,
    description: page.intro,
    path: `/commercial/${slug}`,
    serviceType: page.eyebrow,
    audience: "Commercial",
    image: page.image,
  })
  const commercialReviewNames = slug === "cctv"
    ? ["Jez S", "Nathan De La Rosa", "Jeremy Bunting"]
    : slug === "fire-compliance" || slug === "integrated-fire-security"
      ? ["Rory Stirland", "Nathan De La Rosa", "Jez S"]
      : slug === "intruder-alarms" || slug === "yard-perimeter-security"
        ? ["Nathan De La Rosa", "Jez S", "Rory Stirland"]
        : ["Jez S", "Rory Stirland", "Jeremy Bunting"]
  const breadcrumbStructuredData = breadcrumbSchema([
    { name: "Home", path: "" },
    { name: "Commercial Security", path: "/commercial" },
    { name: page.title, path: `/commercial/${slug}` },
  ])

  return <>
    <JsonLd data={faqStructuredData}/><JsonLd data={serviceStructuredData}/><JsonLd data={breadcrumbStructuredData}/>
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Commercial Security", href: "/commercial" }, { label: page.title }]}/>
    <PageHero eyebrow={page.eyebrow} title={page.title} intro={page.intro} image={page.image} imageAlt={page.alt}>
      <ContactActions primaryLabel={page.ctaLabel} audience="Commercial" serviceCategory={page.eyebrow} enquiryType="Installation" sourceLabel={`commercial-${slug}`}/>
    </PageHero>
    <TrustStrip variant="commercial"/>
    {!!page.visuals?.length && <section className="section section-alt"><div className="container"><SectionHeading eyebrow={page.visualEyebrow || "System visuals"} title={page.visualTitle || "Project and product detail"} text={page.visualText || "Relevant visuals that help show how the system is planned and used."}/><div className="system-visual-gallery">{page.visuals.map(item => <figure className={`system-visual-card ${item.product ? "is-product" : ""}`} key={item.src}><img src={item.src} alt={item.alt}/><figcaption>{item.caption}</figcaption></figure>)}</div></div></section>}
    {slug === "cctv" && <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Commercial CCTV in practice" title="Modern cameras, live views and intelligent event detection" text="The system is selected around evidence quality, operating conditions, coverage and the way staff need to review footage."/><div className="commercial-proof-grid"><figure><img src="/images/image-refresh/ajax-commercial-ptz.webp" alt="Ajax commercial PTZ camera"/><figcaption>Premium commercial camera coverage for larger operational areas.</figcaption></figure><figure><img src="/images/image-refresh/ajax-commercial-domes.webp" alt="Ajax commercial dome cameras"/><figcaption>Discreet dome cameras for entrances, circulation and working areas.</figcaption></figure><figure><img src="/images/image-refresh/cctv-person-detection.webp" alt="CCTV person detection analytics"/><figcaption>Intelligent person detection helps surface relevant activity.</figcaption></figure><figure><img src="/images/image-refresh/cctv-vehicle-detection.webp" alt="CCTV vehicle detection analytics"/><figcaption>Vehicle detection supports driveways, yards and loading areas.</figcaption></figure></div></div></section>}

    <section className="section"><div className="container split-grid"><div><SectionHeading eyebrow="Site requirement" title={page.requirementTitle} text={page.requirementText}/><Checklist items={page.included}/></div><aside className="dark-panel"><h3>Suitable for</h3><Checklist items={page.propertyTypes}/><ContactActions primaryLabel={page.ctaLabel} compact audience="Commercial" serviceCategory={page.eyebrow} enquiryType="Installation" sourceLabel={`commercial-${slug}-property-types`}/></aside></div></section>
    {!!page.products?.length && <section className="section ajax-product-section"><div className="container"><div className="platform-intro"><div><span className="eyebrow">Products and system options</span><h2>{page.platformTitle}</h2><p>{page.platformText}</p></div><img src="/images/logo-ajax-authorized-installation-company-en-wh.png" alt="Ajax Authorised Installation Company" /></div><div className="product-detail-grid">{page.products.map(product => <article className="product-detail-card" key={product.name}><div className="product-detail-image product-detail-photo"><img src={product.image} alt={product.imageAlt}/></div><div><h3>{product.name}</h3><p>{product.description}</p></div></article>)}</div></div></section>}
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Project process" title="Survey, design, installation and ongoing support"/><FeatureGrid columns={4} items={page.process}/></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="What the design needs to solve" title="System decisions linked to the operational requirement"/><FeatureGrid columns={4} items={page.details}/></div></section>
    <section className="section section-alt"><div className="container split-grid"><div><SectionHeading eyebrow="Pricing factors" title="What affects the commercial quotation" text="The final price reflects the site, system, access and operational requirements confirmed during the survey."/><Checklist items={page.pricingFactors}/></div><aside className="dark-panel"><h3>Prepare for the survey</h3><p>Site plans, current camera or device quantities, existing equipment, network information, known faults, required recording, operating hours and project timescales all help produce a clearer proposal.</p><Link className="text-link" href={page.guide.href}>{page.guide.label} →</Link></aside></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="Relevant NOX projects" title="Real commercial and industrial work" text="Genuine property and installation photography with confirmed service scopes."/><CaseStudyGrid slugs={page.cases}/></div></section>
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Commercial guides" title={`Plan ${page.eyebrow.toLowerCase()} with clearer information`} text="Detailed answers for decision-makers comparing systems, preparing a site survey or planning ongoing servicing."/><GuideLinks slugs={guideSlugsFor(`${slug} ${page.eyebrow}`)}/></div></section>
    <AreaLinks title={`${page.eyebrow} across Chesterfield, Sheffield and Derbyshire`}/>
    <EnquiryPreparation topic={page.eyebrow.toLowerCase()} commercial/>
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Customer feedback" title="Professional planning, installation and local support"/><ReviewGrid names={commercialReviewNames}/><div className="related-links"><strong>Related services:</strong>{page.related.map(item => <Link key={item.href} href={item.href}>{item.label} →</Link>)}</div></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="Common questions" title="Answers before a commercial survey"/><div className="faq-list">{page.faq.map(item => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></div></section>
    <ConversionPanel title={page.ctaLabel} text="Tell us the site type, location, existing systems, approximate project scale and what the new system needs to achieve. NOX will guide the survey and proposal route." primaryLabel={page.ctaLabel} audience="Commercial" serviceCategory={page.eyebrow} enquiryType="Installation" sourceLabel={`commercial-${slug}-final`}/>
  </>
}
