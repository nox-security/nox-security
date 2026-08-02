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
 * The logo is the homepage link. The visible navigation stays focused on the
 * four customer journeys, with detailed SEO pages connected beneath them.
 */
export const headerNavMenus: HeaderNavMenu[] = [
  {
    id: "home",
    label: "Protect My Home",
    href: "/residential",
    heading: "Security designed around the home",
    intro: "Plan CCTV, smart intruder protection and earlier warning around the property, driveway and outbuildings.",
    overviewLabel: "Explore home security",
    routes: [
      { label: "Home CCTV", href: "/systems/home-cctv", description: "Discreet camera systems with app access and local recording." },
      { label: "Smart Intruder Alarms", href: "/systems/intrusion-alarms", description: "Ajax alarm systems designed around the home and daily routine." },
      { label: "Perimeter Protection", href: "/systems/perimeter-protection", description: "Outdoor detection for driveways, gardens, garages and outbuildings." },
      { label: "Home Security Packages", href: "/residential#home-security-packages", description: "CCTV, intruder protection and ongoing support planned together." },
    ],
    secondary: [
      { label: "Alarm monitoring", href: "/service-plans/alarm-monitoring" },
      { label: "Alarm maintenance", href: "/service-plans/alarm-maintenance" },
      { label: "CCTV maintenance", href: "/service-plans/cctv-maintenance" },
      { label: "Existing-system takeovers", href: "/services/security-system-takeover" },
    ],
    image: "/images/v4-12-9/residential-intruder-main.jpg",
    imageAlt: "Ajax security detector installed at a residential property",
    imageLabel: "Residential security",
    cta: { label: "Plan Your Home Security", href: "/get-quote?customer_type=Residential&enquiry_type=Installation#quote-form" },
    activePrefixes: [
      "/residential",
      "/systems/home-cctv",
      "/systems/intrusion-alarms",
      "/systems/perimeter-protection",
      "/systems/smart-home-cctv",
      "/systems/garages-outbuildings",
    ],
  },
  {
    id: "business",
    label: "Protect My Business",
    href: "/commercial",
    heading: "Protection planned around the site",
    intro: "Connect surveillance, detection and ongoing support around operations, risk and future growth.",
    overviewLabel: "Explore commercial security",
    routes: [
      { label: "Commercial CCTV", href: "/commercial/cctv", description: "Professional surveillance for offices, retail, industrial and operational sites." },
      { label: "Commercial Intruder Alarms", href: "/commercial/intruder-alarms", description: "Detection designed around the premises, staff access and risk." },
      { label: "Perimeter & Site Protection", href: "/commercial/yard-perimeter-security", description: "Outdoor detection for yards, compounds and larger boundaries." },
      { label: "Integrated Site Security", href: "/commercial/integrated-fire-security", description: "CCTV, intruder, fire and ongoing support under one plan." },
    ],
    secondary: [
      { label: "Multi-site systems", href: "/commercial/multi-site-security" },
      { label: "Monitoring", href: "/service-plans/alarm-monitoring" },
      { label: "Maintenance", href: "/service-plans" },
      { label: "Existing-system takeovers", href: "/services/security-system-takeover" },
    ],
    image: "/images/v4-13-15/chatsworth-estate/main.jpg",
    imageAlt: "NOX CCTV upgrade at a large rural estate",
    imageLabel: "Commercial and estate security",
    cta: { label: "Discuss a Commercial Project", href: "/get-quote?customer_type=Commercial&enquiry_type=Installation#quote-form" },
    activePrefixes: ["/commercial"],
  },
  {
    id: "fire",
    label: "Fire & Compliance",
    href: "/fire-compliance",
    heading: "Fire systems and continued compliance",
    intro: "Plan installation, servicing, emergency lighting and coordinated support around the premises.",
    overviewLabel: "Explore fire and compliance",
    routes: [
      { label: "Fire Alarm Installation", href: "/systems/fire-safety", description: "New commercial fire alarm systems, extensions and upgrades." },
      { label: "Fire Alarm Servicing & Monitoring", href: "/service-plans/fire-alarm-servicing", description: "Planned servicing, fault support and monitoring where suitable." },
      { label: "Emergency Lighting", href: "/systems/emergency-lighting", description: "Installation, testing and ongoing maintenance." },
      { label: "Fire Compliance Packages", href: "/service-plans/fire-compliance", description: "Fire alarm, emergency lighting and wider compliance support." },
    ],
    secondary: [
      { label: "Fire alarm monitoring", href: "/service-plans/fire-alarm-monitoring" },
      { label: "Existing fire-system takeovers", href: "/services/fire-alarm-repairs-takeovers" },
      { label: "Fire risk assessments", href: "/systems/fire-risk-assessment" },
      { label: "Fire extinguisher servicing", href: "/services/fire-extinguisher-servicing" },
    ],
    image: "/images/v4-10/fire-alarm-installation-hero.jpeg",
    imageAlt: "Ajax EN54 fire alarm control panel installed by NOX",
    imageLabel: "Commercial fire systems",
    cta: { label: "Arrange a Fire Survey", href: "/get-quote?customer_type=Commercial&service_category=Fire%20Alarms%20%26%20Compliance#quote-form" },
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
    id: "support",
    label: "Service & Monitoring",
    href: "/service-plans",
    heading: "Keep existing systems working as intended",
    intro: "Start with the outcome you need. NOX will confirm the right monitoring, maintenance, repair or takeover route.",
    overviewLabel: "Explore service and monitoring",
    routes: [
      { label: "Fire Alarm Monitoring", href: "/service-plans/fire-alarm-monitoring", description: "Professional signalling and agreed response for suitable commercial fire systems." },
      { label: "Intruder Alarm Monitoring", href: "/service-plans/alarm-monitoring", description: "Continuous protection with keyholder and agreed escalation options." },
      { label: "Planned Maintenance", href: "/service-plans#servicing-maintenance", description: "Fire alarm, intruder, CCTV and emergency-lighting servicing." },
      { label: "System Takeovers", href: "/services/security-system-takeover", description: "Assessment, repair and continued support for existing systems." },
    ],
    secondary: [
      { label: "CCTV maintenance", href: "/service-plans/cctv-maintenance" },
      { label: "Fire alarm servicing", href: "/service-plans/fire-alarm-servicing" },
      { label: "Emergency-lighting testing", href: "/service-plans/emergency-lighting-servicing" },
      { label: "Ongoing support packages", href: "/service-plans/total-security" },
    ],
    image: "/images/v4-13-2/alarm-monitoring-operator.jpg",
    imageAlt: "Professional alarm monitoring operator handling signals",
    imageLabel: "Monitoring and planned support",
    cta: { label: "Discuss Ongoing Support", href: "/get-quote?enquiry_type=Monitoring&service_category=Service%20%26%20Monitoring#quote-form" },
    activePrefixes: [
      "/service-plans",
      "/services/security-system-takeover",
      "/services/repairs-upgrades",
      "/services/alarm-maintenance-chesterfield",
      "/services/alarm-monitoring-derbyshire",
    ],
  },
]

export const headerDirectNavItems: NavItem[] = [
  { label: "Projects", href: "/case-studies" },
  { label: "About", href: "/about-us" },
]

export const residentialFooterItems: NavItem[] = [
  { label: "Residential Security Overview", href: "/residential" },
  { label: "Home CCTV", href: "/systems/home-cctv" },
  { label: "Ajax Intruder Alarms", href: "/systems/intrusion-alarms" },
  { label: "Perimeter Protection", href: "/systems/perimeter-protection" },
  { label: "Smart Security", href: "/systems/smart-home-cctv" },
  { label: "Garages & Outbuildings", href: "/systems/garages-outbuildings" },
  { label: "Existing Home System Support", href: "/service-plans#home-system-support" },
]

export const commercialFooterItems: NavItem[] = [
  { label: "Commercial Security Overview", href: "/commercial" },
  { label: "Commercial CCTV", href: "/commercial/cctv" },
  { label: "Commercial Intruder Alarms", href: "/commercial/intruder-alarms" },
  { label: "Industrial & Office Security", href: "/commercial/industrial-warehouse-security" },
  { label: "Yard & Perimeter Security", href: "/commercial/yard-perimeter-security" },
  { label: "Multi-Site Security", href: "/commercial/multi-site-security" },
  { label: "Integrated Fire & Security", href: "/commercial/integrated-fire-security" },
]

export const fireFooterItems: NavItem[] = [
  { label: "Fire & Compliance Overview", href: "/fire-compliance" },
  { label: "Fire Alarm Installation", href: "/systems/fire-safety" },
  { label: "Fire Alarm Servicing", href: "/service-plans/fire-alarm-servicing" },
  { label: "Fire Alarm Monitoring", href: "/service-plans/fire-alarm-monitoring" },
  { label: "Fire Alarm Repairs & Takeovers", href: "/services/fire-alarm-repairs-takeovers" },
  { label: "Multi-Site Fire Alarm Systems", href: "/fire-compliance/multi-site-fire-alarm-systems" },
  { label: "Emergency Lighting Installation", href: "/systems/emergency-lighting" },
  { label: "Emergency Lighting Testing", href: "/service-plans/emergency-lighting-servicing" },
  { label: "Fire Risk Assessments", href: "/systems/fire-risk-assessment" },
  { label: "Fire Extinguisher Servicing", href: "/services/fire-extinguisher-servicing" },
  { label: "Fire Compliance Plans", href: "/service-plans/fire-compliance" },
  { label: "Fire & CCTV Integration", href: "/fire-compliance/integrated-fire-cctv-systems" },
]

export const supportFooterItems: NavItem[] = [
  { label: "Service & Monitoring Overview", href: "/service-plans" },
  { label: "Intruder Alarm Monitoring", href: "/service-plans/alarm-monitoring" },
  { label: "Fire Alarm Monitoring", href: "/service-plans/fire-alarm-monitoring" },
  { label: "Intruder Alarm Servicing", href: "/service-plans/alarm-maintenance" },
  { label: "CCTV Maintenance", href: "/service-plans/cctv-maintenance" },
  { label: "Fire Alarm Servicing", href: "/service-plans/fire-alarm-servicing" },
  { label: "Emergency Lighting Servicing", href: "/service-plans/emergency-lighting-servicing" },
  { label: "System Takeovers", href: "/services/security-system-takeover" },
  { label: "Repairs & Upgrades", href: "/services/repairs-upgrades" },
  { label: "Ongoing Support Packages", href: "/service-plans/total-security" },
]

export const companyFooterItems: NavItem[] = [
  { label: "All Fire & Security Systems", href: "/systems" },
  { label: "Service Directory", href: "/services" },
  { label: "Projects", href: "/case-studies" },
  { label: "Guides", href: "/blog" },
  { label: "About NOX", href: "/about-us" },
  { label: "Contact", href: "/contact" },
  { label: "Reviews", href: "/reviews" },
  { label: "Areas We Cover", href: "/areas-we-serve" },
  { label: "Official Ajax Partner", href: "/ajax-authorised-installer" },
]

export type NavGroup = { heading?: string; items: NavItem[] }
export const systemNavGroups: NavGroup[] = [
  { items: residentialFooterItems.slice(1) },
  { items: commercialFooterItems.slice(1) },
]
export const servicePlanNavGroups: NavGroup[] = [
  { items: supportFooterItems.slice(1) },
  { items: fireFooterItems.slice(2) },
]
export const systemNavItems: NavItem[] = systemNavGroups.flatMap(group => group.items)
export const servicePlanNavItems: NavItem[] = servicePlanNavGroups.flatMap(group => group.items)
export const companyNavItems: NavItem[] = companyFooterItems
