import { site } from "@/lib/site"

export const organisationId = `${site.url}/#organisation`
export const localBusinessId = `${site.url}/#localbusiness`
export const websiteId = `${site.url}/#website`

export const coreServiceAreas = [
  { "@type": "City", name: "Chesterfield" },
  { "@type": "City", name: "Sheffield" },
  { "@type": "AdministrativeArea", name: "Derbyshire" },
  { "@type": "AdministrativeArea", name: "South Yorkshire" },
  { "@type": "AdministrativeArea", name: "Nottinghamshire" },
]

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  }
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(item => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  }
}

export function serviceSchema({
  name,
  description,
  path,
  serviceType,
  areaServed = coreServiceAreas,
  audience,
  image,
}: {
  name: string
  description: string
  path: string
  serviceType?: string | string[]
  areaServed?: object[] | string | object
  audience?: string
  image?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}${path}#service`,
    name,
    description,
    url: `${site.url}${path}`,
    mainEntityOfPage: `${site.url}${path}`,
    serviceType: serviceType ?? name,
    provider: { "@id": localBusinessId },
    areaServed,
    ...(audience ? { audience: { "@type": "Audience", audienceType: audience } } : {}),
    ...(image ? { image: `${site.url}${image}` } : {}),
  }
}

export function webPageSchema({
  name,
  description,
  path,
  image,
  type = "WebPage",
}: {
  name: string
  description: string
  path: string
  image?: string
  type?: "WebPage" | "CollectionPage" | "AboutPage" | "ContactPage"
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${site.url}${path}#webpage`,
    url: `${site.url}${path}`,
    name,
    description,
    isPartOf: { "@id": websiteId },
    about: { "@id": localBusinessId },
    ...(image ? { primaryImageOfPage: { "@type": "ImageObject", url: `${site.url}${image}` } } : {}),
  }
}
