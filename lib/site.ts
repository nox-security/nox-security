import type { Metadata } from "next"

export const site = {
  name: "NOX Fire & Security",
  url: "https://nox-security.co.uk",
  phone: "07882 959 297",
  phoneHref: "tel:+447882959297",
  whatsapp: "https://wa.me/447882959297",
  email: "info@nox-security.co.uk",
  base: "Chesterfield, Derbyshire",
  formId: "8FchnjOrpZ4ufh1TiW8k",
  surveyUrl: "https://api.leadconnectorhq.com/widget/booking/B5fG9AjxC9oRHpsTTzuF"
}

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const canonical = `${site.url}${path}`
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: site.name,
      locale: "en_GB",
      type: "website",
      images: [{ url: `${site.url}/images/hero-house.webp`, width: 1024, height: 602, alt: "NOX Fire & Security installation in Derbyshire" }]
    },
    twitter: { card: "summary_large_image", title, description, images: [`${site.url}/images/hero-house.webp`] }
  }
}
