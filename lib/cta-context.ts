export type PageCtaContext = {
  compactLabel: string
  fullLabel: string
  href: string
  serviceCategory: string
  enquiryType: "Installation" | "Servicing" | "Repair" | "Monitoring" | "Takeover" | "General"
}

function quoteHref(serviceCategory: string, enquiryType: PageCtaContext["enquiryType"], audience?: "Residential" | "Commercial") {
  const params = new URLSearchParams()
  if (audience) params.set("customer_type", audience)
  params.set("service_category", serviceCategory)
  params.set("enquiry_type", enquiryType)
  return `/get-quote?${params.toString()}#quote-form`
}

/**
 * Keeps the persistent enquiry action aligned with the page a visitor is
 * currently reading. The route remains one enquiry form; only the wording and
 * pre-filled context change.
 */
export function getPageCtaContext(pathname: string): PageCtaContext {
  const path = pathname.toLowerCase()

  const fireRoute =
    path.startsWith("/fire-compliance") ||
    path.includes("fire-safety") ||
    path.includes("fire-alarm") ||
    path.includes("emergency-lighting") ||
    path.includes("fire-risk") ||
    path.includes("fire-extinguisher")

  if (fireRoute) {
    const monitoring = path.includes("monitoring")
    const servicing = path.includes("servic")
    return {
      compactLabel: monitoring ? "Fire Monitoring" : servicing ? "Fire Service" : "Fire Survey",
      fullLabel: monitoring ? "Discuss Fire Alarm Monitoring" : servicing ? "Request a Fire Service Visit" : "Arrange a Fire Survey",
      href: quoteHref("Fire Alarms & Compliance", monitoring ? "Monitoring" : servicing ? "Servicing" : "Installation", "Commercial"),
      serviceCategory: "Fire Alarms & Compliance",
      enquiryType: monitoring ? "Monitoring" : servicing ? "Servicing" : "Installation",
    }
  }

  if (path.startsWith("/commercial")) {
    return {
      compactLabel: "Commercial Survey",
      fullLabel: "Book a Commercial Survey",
      href: quoteHref("Commercial Security", "Installation", "Commercial"),
      serviceCategory: "Commercial Security",
      enquiryType: "Installation",
    }
  }

  if (path === "/systems/cctv" || path.startsWith("/systems/cctv/")) {
    return {
      compactLabel: "CCTV Survey",
      fullLabel: "Book a CCTV Site Survey",
      href: quoteHref("CCTV", "Installation"),
      serviceCategory: "CCTV",
      enquiryType: "Installation",
    }
  }

  if (path.startsWith("/service-plans") || path.startsWith("/services/")) {
    const monitoring = path.includes("monitoring")
    const takeover = path.includes("takeover")
    const repair = path.includes("repair") || path.includes("upgrade")
    const enquiryType: PageCtaContext["enquiryType"] = monitoring ? "Monitoring" : takeover ? "Takeover" : repair ? "Repair" : "Servicing"
    return {
      compactLabel: monitoring ? "Monitoring Quote" : takeover ? "System Takeover" : repair ? "System Support" : "Service Quote",
      fullLabel: monitoring ? "Request a Monitoring Quote" : takeover ? "Discuss a System Takeover" : repair ? "Get Support for Your System" : "Request a Service Quote",
      href: quoteHref("Existing System Support", enquiryType),
      serviceCategory: "Existing System Support",
      enquiryType,
    }
  }

  if (
    path.startsWith("/residential") ||
    path.includes("home-cctv") ||
    path.includes("intrusion-alarms") ||
    path.includes("perimeter-protection") ||
    path.includes("smart-home") ||
    path.includes("garages-outbuildings")
  ) {
    return {
      compactLabel: "Home Survey",
      fullLabel: "Book a Home Security Survey",
      href: quoteHref("Residential Security", "Installation", "Residential"),
      serviceCategory: "Residential Security",
      enquiryType: "Installation",
    }
  }

  if (path.startsWith("/case-studies")) {
    return {
      compactLabel: "Discuss Project",
      fullLabel: "Discuss a Similar Project",
      href: quoteHref("Project Enquiry", "General"),
      serviceCategory: "Project Enquiry",
      enquiryType: "General",
    }
  }

  if (path.startsWith("/ajax-authorised-installer")) {
    return {
      compactLabel: "Ajax Survey",
      fullLabel: "Book an Ajax System Survey",
      href: quoteHref("Ajax Systems", "Installation"),
      serviceCategory: "Ajax Systems",
      enquiryType: "Installation",
    }
  }

  return {
    compactLabel: "Site Survey",
    fullLabel: "Book a Site Survey",
    href: quoteHref("Fire & Security", "General"),
    serviceCategory: "Fire & Security",
    enquiryType: "General",
  }
}
