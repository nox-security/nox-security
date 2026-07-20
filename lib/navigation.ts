export type NavItem = {
  label: string
  href: string
}

export type NavGroup = {
  heading?: string
  items: NavItem[]
}

export type HeaderNavMenu = {
  id: "commercial" | "residential" | "servicing"
  label: string
  href: string
  featured?: NavItem
  groups: NavGroup[]
}

/**
 * Header-only navigation structure.
 * Existing URLs are reused so the menu can be reorganised without creating
 * duplicate pages or changing any page metadata.
 */
export const headerNavMenus: HeaderNavMenu[] = [
  {
    id: "commercial",
    label: "Commercial",
    href: "/commercial",
    featured: { label: "Commercial Fire & Security", href: "/commercial" },
    groups: [
      {
        heading: "Security",
        items: [
          { label: "Commercial Intruder Alarms", href: "/commercial/intruder-alarms" },
          { label: "Commercial CCTV Systems", href: "/commercial/cctv" },
          { label: "Total Security Packages", href: "/service-plans/total-security" },
        ],
      },
      {
        heading: "Fire & Compliance",
        items: [
          { label: "Fire Alarm Installation", href: "/commercial/fire-compliance" },
          { label: "Fire Alarm Servicing", href: "/service-plans/fire-alarm-servicing" },
          { label: "Emergency Lighting", href: "/systems/emergency-lighting" },
          { label: "Fire Compliance Packages", href: "/service-plans/fire-compliance" },
        ],
      },
    ],
  },
  {
    id: "residential",
    label: "Residential",
    href: "/residential",
    groups: [
      {
        items: [
          { label: "Premium Intruder Alarms", href: "/systems/intrusion-alarms" },
          { label: "CCTV Systems", href: "/systems/cctv" },
          { label: "Smart Home Security", href: "/systems/smart-home-cctv" },
          { label: "Perimeter Protection", href: "/systems/perimeter-protection" },
          { label: "Total Security Packages", href: "/service-plans/total-security" },
        ],
      },
    ],
  },
  {
    id: "servicing",
    label: "Servicing & Monitoring",
    href: "/service-plans",
    groups: [
      {
        items: [
          { label: "Intruder Alarm Monitoring", href: "/service-plans/alarm-monitoring" },
          { label: "Intruder Alarm Maintenance", href: "/service-plans/alarm-maintenance" },
          { label: "CCTV Maintenance", href: "/service-plans/cctv-maintenance" },
          { label: "System Takeovers", href: "/services/security-system-takeover" },
        ],
      },
    ],
  },
]

export const headerDirectNavItems: NavItem[] = [
  { label: "Case Studies", href: "/case-studies" },
  { label: "About NOX", href: "/about-us" },
  { label: "Contact", href: "/contact" },
]

// Existing shared navigation exports are retained for the footer and all
// other current website components. This keeps the requested change limited
// to the header and mobile navigation only.
export const systemNavGroups: NavGroup[] = [
  {
    items: [
      { label: "Intruder Alarms", href: "/systems/intrusion-alarms" },
      { label: "CCTV Systems", href: "/systems/cctv" },
      { label: "Fire Alarm Systems", href: "/systems/fire-safety" },
    ],
  },
  {
    items: [
      { label: "Perimeter Protection", href: "/systems/perimeter-protection" },
      { label: "Smart Home Security", href: "/systems/smart-home-cctv" },
      { label: "Commercial Fire & Security", href: "/commercial" },
    ],
  },
]

export const servicePlanNavGroups: NavGroup[] = [
  {
    items: [
      { label: "Alarm Maintenance", href: "/service-plans/alarm-maintenance" },
      { label: "Alarm Monitoring", href: "/service-plans/alarm-monitoring" },
      { label: "CCTV Maintenance", href: "/service-plans/cctv-maintenance" },
      { label: "Fire Alarm Servicing", href: "/service-plans/fire-alarm-servicing" },
    ],
  },
  {
    items: [
      { label: "Emergency Lighting Servicing", href: "/service-plans/emergency-lighting-servicing" },
      { label: "Fire Compliance Packages", href: "/service-plans/fire-compliance" },
      { label: "Total Security Packages", href: "/service-plans/total-security" },
      { label: "System Takeovers", href: "/services/security-system-takeover" },
    ],
  },
]

export const systemNavItems: NavItem[] = systemNavGroups.flatMap(group => group.items)
export const servicePlanNavItems: NavItem[] = servicePlanNavGroups.flatMap(group => group.items)

export const companyNavItems: NavItem[] = [
  { label: "Case Studies", href: "/case-studies" },
  { label: "Areas We Cover", href: "/areas-we-serve" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact" },
]
