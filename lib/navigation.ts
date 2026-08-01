export type NavItem = {
  label: string
  href: string
}

export type NavGroup = {
  heading?: string
  items: NavItem[]
}

export type HeaderNavMenu = {
  id: "home" | "business" | "fire" | "support"
  label: string
  href: string
  featured?: NavItem
  groups: NavGroup[]
  activePrefixes: string[]
}

/**
 * Primary NOX navigation organised around the customer's situation rather
 * than the internal service catalogue. Existing URLs are reused throughout
 * so the improved journey does not create duplicate SEO pages.
 */
export const headerNavMenus: HeaderNavMenu[] = [
  {
    id: "home",
    label: "Protect My Home",
    href: "/residential",
    featured: { label: "Explore All Home Security", href: "/residential" },
    activePrefixes: [
      "/residential",
      "/systems/home-cctv",
      "/systems/intrusion-alarms",
      "/systems/perimeter-protection",
      "/systems/smart-home-cctv",
      "/systems/garages-outbuildings",
    ],
    groups: [
      {
        heading: "Home Security",
        items: [
          { label: "Home CCTV", href: "/systems/home-cctv" },
          { label: "Ajax Intruder Alarms", href: "/systems/intrusion-alarms" },
          { label: "Perimeter Protection", href: "/systems/perimeter-protection" },
          { label: "Smart Security", href: "/systems/smart-home-cctv" },
          { label: "Support for an Existing Home System", href: "/service-plans#home-system-support" },
        ],
      },
    ],
  },
  {
    id: "business",
    label: "Protect My Business",
    href: "/commercial",
    featured: { label: "View Commercial Security Overview", href: "/commercial" },
    activePrefixes: ["/commercial"],
    groups: [
      {
        heading: "Installations",
        items: [
          { label: "Commercial CCTV", href: "/commercial/cctv" },
          { label: "Commercial Intruder Alarms", href: "/commercial/intruder-alarms" },
          { label: "Industrial & Office Security", href: "/commercial/industrial-warehouse-security" },
        ],
      },
      {
        heading: "Larger Projects",
        items: [
          { label: "Multi-Site Security", href: "/commercial/multi-site-security" },
          { label: "Integrated Fire & Security", href: "/commercial/integrated-fire-security" },
        ],
      },
    ],
  },
  {
    id: "fire",
    label: "Fire & Compliance",
    href: "/fire-compliance",
    featured: { label: "View Fire & Compliance Overview", href: "/fire-compliance" },
    activePrefixes: [
      "/fire-compliance",
      "/systems/fire-safety",
      "/systems/emergency-lighting",
      "/systems/fire-risk-assessment",
      "/service-plans/fire-alarm-servicing",
      "/service-plans/emergency-lighting-servicing",
      "/service-plans/fire-compliance",
      "/services/fire-alarm-repairs-takeovers",
      "/services/fire-extinguisher-servicing",
    ],
    groups: [
      {
        heading: "Fire Alarm Systems",
        items: [
          { label: "Fire Alarm Installation", href: "/systems/fire-safety" },
          { label: "Fire Alarm Servicing", href: "/service-plans/fire-alarm-servicing" },
          { label: "Fire Alarm Repairs & Takeovers", href: "/services/fire-alarm-repairs-takeovers" },
          { label: "Multi-Site Fire Alarm Systems", href: "/fire-compliance/multi-site-fire-alarm-systems" },
        ],
      },
      {
        heading: "Emergency Lighting",
        items: [
          { label: "Emergency Lighting Installation", href: "/systems/emergency-lighting" },
          { label: "Emergency Lighting Testing & Servicing", href: "/service-plans/emergency-lighting-servicing" },
        ],
      },
      {
        heading: "Compliance",
        items: [
          { label: "Fire Risk Assessments", href: "/systems/fire-risk-assessment" },
          { label: "Fire Extinguisher Servicing", href: "/services/fire-extinguisher-servicing" },
          { label: "Fire Compliance Plans", href: "/service-plans/fire-compliance" },
        ],
      },
      {
        heading: "Integrated Projects",
        items: [
          { label: "Fire & CCTV Integration", href: "/fire-compliance/integrated-fire-cctv-systems" },
        ],
      },
    ],
  },
  {
    id: "support",
    label: "Existing System Support",
    href: "/service-plans",
    featured: { label: "View Existing System Support Overview", href: "/service-plans" },
    activePrefixes: [
      "/service-plans",
      "/services/security-system-takeover",
      "/services/repairs-upgrades",
      "/services/alarm-maintenance-chesterfield",
      "/services/alarm-monitoring-derbyshire",
    ],
    groups: [
      {
        heading: "Support Options",
        items: [
          { label: "Servicing & Maintenance", href: "/service-plans#servicing-maintenance" },
          { label: "Monitoring", href: "/service-plans/alarm-monitoring" },
          { label: "System Takeovers", href: "/services/security-system-takeover" },
          { label: "Repairs & Upgrades", href: "/services/repairs-upgrades" },
          { label: "Ongoing Support Packages", href: "/service-plans/total-security" },
        ],
      },
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
  { label: "Existing System Support Overview", href: "/service-plans" },
  { label: "Intruder Alarm Servicing", href: "/service-plans/alarm-maintenance" },
  { label: "CCTV Maintenance", href: "/service-plans/cctv-maintenance" },
  { label: "Fire Alarm Servicing", href: "/service-plans/fire-alarm-servicing" },
  { label: "Emergency Lighting Servicing", href: "/service-plans/emergency-lighting-servicing" },
  { label: "Monitoring", href: "/service-plans/alarm-monitoring" },
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

// Retained exports keep older integrations stable.
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
