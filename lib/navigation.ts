export type NavItem = {
  label: string
  href: string
}

export type NavRoute = NavItem & {
  description: string
}

export type HeaderNavMenu = {
  id: "home" | "business" | "fire" | "support"
  label: string
  href: string
  heading: string
  intro: string
  overviewLabel: string
  routes: NavRoute[]
  secondary: NavItem[]
  image: string
  imageAlt: string
  imageLabel: string
  cta: NavItem
  activePrefixes: string[]
}

/**
 * Premium customer journeys: keep the top level focused on what the customer
 * is trying to protect. Deep SEO landing pages stay live and are linked from
 * the relevant overview pages rather than being exposed as separate departments.
 */
export const headerNavMenus: HeaderNavMenu[] = [
  {
    id: "fire",
    label: "Fire",
    href: "/fire-compliance",
    heading: "Fire alarms & compliance",
    intro: "Install, maintain and monitor commercial fire systems through one connected route.",
    overviewLabel: "Fire & Compliance Overview",
    routes: [
      { label: "Fire Alarm Installation", href: "/systems/fire-safety", description: "New systems, extensions and upgrades planned around the building and required fire strategy." },
      { label: "Service & Maintenance", href: "/service-plans/fire-alarm-servicing", description: "Planned testing, service records, defect reporting and ongoing maintenance." },
      { label: "Fire Alarm Monitoring", href: "/service-plans/fire-alarm-monitoring", description: "Professional signalling with agreed contacts and escalation for suitable systems." },
      { label: "Emergency Lighting", href: "/systems/emergency-lighting", description: "Installation, testing and planned support kept within the wider fire-compliance journey." },
    ],
    secondary: [
      { label: "Repairs & Takeovers", href: "/services/fire-alarm-repairs-takeovers" },
      { label: "Fire Risk Assessments", href: "/systems/fire-risk-assessment" },
      { label: "Fire Compliance Plans", href: "/service-plans/fire-compliance" },
      { label: "Extinguisher Servicing", href: "/services/fire-extinguisher-servicing" },
    ],
    image: "/images/image-refresh/en54-fire-hub.webp",
    imageAlt: "Ajax EN54 fire alarm control equipment installed by NOX",
    imageLabel: "Commercial fire systems",
    cta: { label: "Book Fire Survey", href: "/get-quote?customer_type=Commercial&service_category=Fire%20Alarms%20%26%20Compliance#quote-form" },
    activePrefixes: [
      "/fire-compliance",
      "/systems/fire-safety",
      "/systems/emergency-lighting",
      "/systems/fire-risk-assessment",
      "/service-plans/fire-alarm-servicing",
      "/service-plans/fire-alarm-monitoring",
      "/service-plans/emergency-lighting-servicing",
      "/service-plans/fire-compliance",
      "/services/fire-alarm-repairs-takeovers",
      "/services/fire-extinguisher-servicing",
    ],
  },
  {
    id: "business",
    label: "Commercial",
    href: "/commercial",
    heading: "Commercial security",
    intro: "CCTV, intruder protection and integrated site security planned around how the premises operates.",
    overviewLabel: "Commercial Overview",
    routes: [
      { label: "Commercial CCTV", href: "/commercial/cctv", description: "Professional surveillance for offices, retail, industrial sites, yards and larger premises." },
      { label: "Intruder & Perimeter", href: "/commercial/intruder-alarms", description: "Internal and external detection designed around access, risk and site boundaries." },
      { label: "Integrated & Multi-Site", href: "/commercial/integrated-fire-security", description: "Coordinate fire, CCTV, intruder and wider site requirements under one project route." },
    ],
    secondary: [
      { label: "Multi-Site Security", href: "/commercial/multi-site-security" },
      { label: "Monitoring & Maintenance", href: "/service-plans" },
      { label: "Existing-System Takeovers", href: "/services/security-system-takeover" },
    ],
    image: "/images/revisions/nox-commercial-cctv-installation.jpg",
    imageAlt: "NOX engineer installing commercial CCTV at an industrial unit",
    imageLabel: "Commercial security systems",
    cta: { label: "Book Site Survey", href: "/get-quote?customer_type=Commercial&enquiry_type=Installation#quote-form" },
    activePrefixes: [
      "/commercial",
      "/services/security-system-takeover",
    ],
  },
  {
    id: "home",
    label: "Residential",
    href: "/residential",
    heading: "Home security",
    intro: "Choose the protection first, then add only the monitoring and maintenance your property needs.",
    overviewLabel: "Residential Overview",
    routes: [
      { label: "Home CCTV", href: "/systems/home-cctv", description: "Recorded coverage for entrances, driveways, gardens, garages and outbuildings." },
      { label: "Ajax Home Alarms", href: "/systems/intrusion-alarms", description: "Smart intruder detection, app control, sirens and visual verification where suitable." },
      { label: "Smart Home Security", href: "/systems/smart-home-cctv", description: "App-led cameras, video doorbells and smart security for homes wanting a simpler connected route." },
    ],
    secondary: [
      { label: "Perimeter & Outbuildings", href: "/systems/perimeter-protection" },
      { label: "Monitoring & Servicing", href: "/service-plans#home-system-support" },
      { label: "Existing-System Support", href: "/services/security-system-takeover" },
    ],
    image: "/images/v4-12-9/residential-intruder-main.jpg",
    imageAlt: "Ajax security detector installed at a residential property",
    imageLabel: "Residential security",
    cta: { label: "Book Home Survey", href: "/get-quote?customer_type=Residential&enquiry_type=Installation#quote-form" },
    activePrefixes: [
      "/residential",
      "/systems/home-cctv",
      "/systems/intrusion-alarms",
      "/systems/perimeter-protection",
      "/systems/smart-home-cctv",
      "/systems/garages-outbuildings",
      "/systems/residential-security-packages",
    ],
  },
]

/* Footer navigation deliberately shows only the main customer routes.
   Deeper SEO pages remain live and connected from their parent overview pages. */
export const fireFooterItems: NavItem[] = [
  { label: "Fire & Compliance Overview", href: "/fire-compliance" },
  { label: "Fire Alarm Installation", href: "/systems/fire-safety" },
  { label: "Service & Maintenance", href: "/service-plans/fire-alarm-servicing" },
  { label: "Fire Alarm Monitoring", href: "/service-plans/fire-alarm-monitoring" },
  { label: "Repairs & Takeovers", href: "/services/fire-alarm-repairs-takeovers" },
  { label: "Fire Risk Assessments", href: "/systems/fire-risk-assessment" },
  { label: "Emergency Lighting & Compliance", href: "/service-plans/fire-compliance" },
  { label: "Extinguisher Servicing", href: "/services/fire-extinguisher-servicing" },
]

export const commercialFooterItems: NavItem[] = [
  { label: "Commercial Overview", href: "/commercial" },
  { label: "Commercial CCTV", href: "/commercial/cctv" },
  { label: "Intruder & Perimeter", href: "/commercial/intruder-alarms" },
  { label: "Integrated & Multi-Site", href: "/commercial/integrated-fire-security" },
  { label: "Monitoring & Maintenance", href: "/service-plans" },
]

export const residentialFooterItems: NavItem[] = [
  { label: "Residential Overview", href: "/residential" },
  { label: "Home CCTV", href: "/systems/home-cctv" },
  { label: "Ajax Home Alarms", href: "/systems/intrusion-alarms" },
  { label: "Smart Home Security", href: "/systems/smart-home-cctv" },
  { label: "Monitoring & Servicing", href: "/service-plans#home-system-support" },
]

export const supportFooterItems: NavItem[] = [
  { label: "Support Overview", href: "/service-plans" },
  { label: "Fire Alarm Support", href: "/service-plans/fire-alarm-servicing" },
  { label: "Security Maintenance", href: "/service-plans#servicing-maintenance" },
  { label: "Monitoring", href: "/service-plans/alarm-monitoring" },
  { label: "Takeovers & Repairs", href: "/services/security-system-takeover" },
]

export const companyFooterItems: NavItem[] = [
  { label: "Why NOX", href: "/about-us" },
  { label: "Projects", href: "/case-studies" },
  { label: "Reviews", href: "/reviews" },
  { label: "Areas We Cover", href: "/areas-we-serve" },
  { label: "Ajax Authorised Installer", href: "/ajax-authorised-installer" },
  { label: "Guides", href: "/blog" },
]

export type NavGroup = { heading?: string; items: NavItem[] }

/* Comprehensive internal indexes remain broader than the visible header/footer. */
export const systemNavGroups: NavGroup[] = [
  { heading: "Residential", items: [
    { label: "Home CCTV", href: "/systems/home-cctv" },
    { label: "Ajax Intruder Alarms", href: "/systems/intrusion-alarms" },
    { label: "Perimeter Protection", href: "/systems/perimeter-protection" },
    { label: "Smart Home Security", href: "/systems/smart-home-cctv" },
    { label: "Garages & Outbuildings", href: "/systems/garages-outbuildings" },
    { label: "Residential Security Packages", href: "/systems/residential-security-packages" },
  ] },
  { heading: "Commercial", items: [
    { label: "Commercial CCTV", href: "/commercial/cctv" },
    { label: "Commercial Intruder Alarms", href: "/commercial/intruder-alarms" },
    { label: "Industrial & Office Security", href: "/commercial/industrial-warehouse-security" },
    { label: "Yard & Perimeter Security", href: "/commercial/yard-perimeter-security" },
    { label: "Multi-Site Security", href: "/commercial/multi-site-security" },
    { label: "Integrated Fire & Security", href: "/commercial/integrated-fire-security" },
  ] },
]
export const servicePlanNavGroups: NavGroup[] = [
  { heading: "Service & Monitoring", items: [
    { label: "Fire Alarm Service & Maintenance", href: "/service-plans/fire-alarm-servicing" },
    { label: "Fire Alarm Monitoring", href: "/service-plans/fire-alarm-monitoring" },
    { label: "CCTV Maintenance", href: "/service-plans/cctv-maintenance" },
    { label: "Intruder Alarm Servicing", href: "/service-plans/alarm-maintenance" },
    { label: "Intruder Alarm Monitoring", href: "/service-plans/alarm-monitoring" },
    { label: "Emergency Lighting Servicing", href: "/service-plans/emergency-lighting-servicing" },
    { label: "Ongoing Support Packages", href: "/service-plans/total-security" },
  ] },
  { heading: "Fire Compliance", items: [
    { label: "Emergency Lighting", href: "/systems/emergency-lighting" },
    { label: "Fire Risk Assessments", href: "/systems/fire-risk-assessment" },
    { label: "Fire Extinguisher Servicing", href: "/services/fire-extinguisher-servicing" },
    { label: "Fire Compliance Plans", href: "/service-plans/fire-compliance" },
    { label: "Multi-Site Fire Alarm Systems", href: "/fire-compliance/multi-site-fire-alarm-systems" },
    { label: "Integrated Fire & CCTV", href: "/fire-compliance/integrated-fire-cctv-systems" },
  ] },
]
export const systemNavItems: NavItem[] = systemNavGroups.flatMap(group => group.items)
export const servicePlanNavItems: NavItem[] = servicePlanNavGroups.flatMap(group => group.items)
export const companyNavItems: NavItem[] = companyFooterItems
