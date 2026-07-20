export type NavItem = {
  label: string
  href: string
}

export type NavGroup = {
  heading?: string
  items: NavItem[]
}

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
      { label: "Residential Security", href: "/residential" },
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
