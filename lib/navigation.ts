export type NavItem = {
  label: string
  href: string
}

export type NavGroup = {
  heading?: string
  items: NavItem[]
}

export type HeaderNavMenu = {
  id: "residential" | "fire" | "commercial" | "servicing"
  label: string
  href: string
  featured?: NavItem
  groups: NavGroup[]
}

/**
 * Primary NOX navigation. Existing customer-facing routes are reused so the
 * menu remains clear without creating duplicate pages.
 */
export const headerNavMenus: HeaderNavMenu[] = [
  {
    id: "residential",
    label: "Residential",
    href: "/residential",
    featured: { label: "Residential Security", href: "/residential" },
    groups: [
      {
        items: [
          { label: "Home CCTV", href: "/systems/home-cctv" },
          { label: "Ajax Intruder Alarms", href: "/systems/intrusion-alarms" },
          { label: "Perimeter Protection", href: "/systems/perimeter-protection" },
          { label: "Smart Security", href: "/systems/smart-home-cctv" },
          { label: "Intruder Alarm Servicing", href: "/service-plans/alarm-maintenance" },
          { label: "Existing System Takeovers", href: "/services/security-system-takeover" },
        ],
      },
    ],
  },
  {
    id: "fire",
    label: "Fire & Compliance",
    href: "/fire-compliance",
    featured: { label: "Fire & Compliance", href: "/fire-compliance" },
    groups: [
      {
        heading: "Fire alarm systems",
        items: [
          { label: "Fire Alarm Installation", href: "/systems/fire-safety" },
          { label: "Fire Alarm Servicing", href: "/service-plans/fire-alarm-servicing" },
          { label: "Fire Alarm Repairs & Takeovers", href: "/services/fire-alarm-repairs-takeovers" },
          { label: "Multi-Site Fire Alarm Systems", href: "/fire-compliance/multi-site-fire-alarm-systems" },
          { label: "Integrated Fire & CCTV Systems", href: "/fire-compliance/integrated-fire-cctv-systems" },
        ],
      },
      {
        heading: "Compliance support",
        items: [
          { label: "Emergency Lighting Installation", href: "/systems/emergency-lighting" },
          { label: "Emergency Lighting Testing & Servicing", href: "/service-plans/emergency-lighting-servicing" },
          { label: "Fire Risk Assessments", href: "/systems/fire-risk-assessment" },
          { label: "Fire Extinguisher Servicing", href: "/services/fire-extinguisher-servicing" },
          { label: "Fire Compliance Plans", href: "/service-plans/fire-compliance" },
        ],
      },
    ],
  },
  {
    id: "commercial",
    label: "Commercial Security",
    href: "/commercial",
    featured: { label: "Commercial Security", href: "/commercial" },
    groups: [
      {
        heading: "Systems",
        items: [
          { label: "Commercial CCTV", href: "/commercial/cctv" },
          { label: "Commercial Intruder Alarms", href: "/commercial/intruder-alarms" },
          { label: "Industrial, Warehouse & Yard Security", href: "/commercial/industrial-warehouse-security" },
        ],
      },
      {
        heading: "Larger projects",
        items: [
          { label: "Multi-Site Security", href: "/commercial/multi-site-security" },
          { label: "Integrated Fire & Security Projects", href: "/commercial/integrated-fire-security" },
          { label: "Commercial System Takeovers", href: "/services/security-system-takeover" },
        ],
      },
    ],
  },
  {
    id: "servicing",
    label: "Servicing & Monitoring",
    href: "/service-plans",
    featured: { label: "Servicing & Monitoring", href: "/service-plans" },
    groups: [
      {
        items: [
          { label: "Intruder Alarm Servicing", href: "/service-plans/alarm-maintenance" },
          { label: "Alarm Monitoring", href: "/service-plans/alarm-monitoring" },
          { label: "CCTV Maintenance", href: "/service-plans/cctv-maintenance" },
          { label: "Security System Takeovers", href: "/services/security-system-takeover" },
          { label: "Repairs & Upgrades", href: "/services/repairs-upgrades" },
          { label: "Total Security Plan", href: "/service-plans/total-security" },
        ],
      },
    ],
  },
]

export const headerDirectNavItems: NavItem[] = [
  { label: "Projects", href: "/case-studies" },
  { label: "Guides", href: "/blog" },
]

export const residentialFooterItems: NavItem[] = [
  { label: "Residential Security", href: "/residential" },
  { label: "Home CCTV", href: "/systems/home-cctv" },
  { label: "Ajax Intruder Alarms", href: "/systems/intrusion-alarms" },
  { label: "Perimeter Protection", href: "/systems/perimeter-protection" },
  { label: "Smart Security", href: "/systems/smart-home-cctv" },
]

export const fireFooterItems: NavItem[] = [
  { label: "Fire & Compliance", href: "/fire-compliance" },
  { label: "Fire Alarm Installation", href: "/systems/fire-safety" },
  { label: "Fire Alarm Servicing", href: "/service-plans/fire-alarm-servicing" },
  { label: "Multi-Site Fire Alarm Systems", href: "/fire-compliance/multi-site-fire-alarm-systems" },
  { label: "Integrated Fire & CCTV Systems", href: "/fire-compliance/integrated-fire-cctv-systems" },
  { label: "Emergency Lighting", href: "/systems/emergency-lighting" },
  { label: "Fire Compliance Plans", href: "/service-plans/fire-compliance" },
]

export const commercialFooterItems: NavItem[] = [
  { label: "Commercial Security", href: "/commercial" },
  { label: "Commercial CCTV", href: "/commercial/cctv" },
  { label: "Commercial Intruder Alarms", href: "/commercial/intruder-alarms" },
  { label: "Industrial, Warehouse & Yard Security", href: "/commercial/industrial-warehouse-security" },
  { label: "Multi-Site Security", href: "/commercial/multi-site-security" },
]

export const supportFooterItems: NavItem[] = [
  { label: "Servicing & Monitoring", href: "/service-plans" },
  { label: "System Takeovers", href: "/services/security-system-takeover" },
  { label: "Projects", href: "/case-studies" },
  { label: "Guides", href: "/blog" },
  { label: "About NOX", href: "/about-us" },
  { label: "Contact", href: "/contact" },
  { label: "Reviews", href: "/reviews" },
  { label: "Areas We Cover", href: "/areas-we-serve" },
]

// Retained exports keep older components stable while the footer and header
// use the clearer cluster-specific arrays above.
export const systemNavGroups: NavGroup[] = [
  { items: residentialFooterItems.slice(1) },
  { items: commercialFooterItems.slice(1) },
]
export const servicePlanNavGroups: NavGroup[] = [
  { items: supportFooterItems.slice(0, 2) },
  { items: fireFooterItems.slice(2) },
]
export const systemNavItems: NavItem[] = systemNavGroups.flatMap(group => group.items)
export const servicePlanNavItems: NavItem[] = servicePlanNavGroups.flatMap(group => group.items)
export const companyNavItems: NavItem[] = supportFooterItems.slice(2)
