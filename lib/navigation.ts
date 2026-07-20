export type NavItem = {
  label: string
  href: string
}

export type NavGroup = {
  heading: string
  items: NavItem[]
}

export const systemNavGroups: NavGroup[] = [
  {
    heading: "Core systems",
    items: [
      { label: "Intruder Alarms", href: "/systems/intrusion-alarms" },
      { label: "Perimeter Protection", href: "/systems/perimeter-protection" },
      { label: "CCTV Systems", href: "/systems/cctv" },
      { label: "Fire Alarm Systems", href: "/systems/fire-safety" },
    ],
  },
  {
    heading: "Property design",
    items: [
      { label: "Residential Security", href: "/residential" },
      { label: "Commercial Fire & Security", href: "/commercial" },
    ],
  },
  {
    heading: "Fire compliance",
    items: [
      { label: "Emergency Lighting", href: "/systems/emergency-lighting" },
      { label: "Fire Risk Assessments", href: "/systems/fire-risk-assessment" },
    ],
  },
]

export const servicePlanNavGroups: NavGroup[] = [
  {
    heading: "Security support",
    items: [
      { label: "Alarm Maintenance", href: "/service-plans/alarm-maintenance" },
      { label: "Alarm Monitoring", href: "/service-plans/alarm-monitoring" },
      { label: "CCTV Maintenance & Takeovers", href: "/service-plans/cctv-maintenance" },
      { label: "Total Security Package", href: "/service-plans/total-security" },
    ],
  },
  {
    heading: "Fire & compliance",
    items: [
      { label: "Fire Alarm Servicing", href: "/service-plans/fire-alarm-servicing" },
      { label: "Emergency Lighting Servicing", href: "/service-plans/emergency-lighting-servicing" },
      { label: "Fire Compliance Package", href: "/service-plans/fire-compliance" },
    ],
  },
]

export const companyNavItems: NavItem[] = [
  { label: "Case Studies", href: "/case-studies" },
  { label: "Areas We Cover", href: "/areas-we-serve" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact" },
]
