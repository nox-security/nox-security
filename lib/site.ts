import type { Metadata } from "next"

export const site = {
  name: "NOX Fire & Security",
  url: "https://www.nox-security.co.uk",
  phone: "07882 959 297",
  phoneHref: "tel:+447882959297",
  whatsapp: "https://wa.me/447882959297",
  email: "info@nox-security.co.uk",
  base: "Chesterfield, Derbyshire",
  formId: "8FchnjOrpZ4ufh1TiW8k",
  googleReviews: "https://g.page/r/CUdyqRh0RFeXEAE/review",
  instagram: "https://www.instagram.com/noxsecuritychesterfield/",
  instagramHandle: "@noxsecuritychesterfield",
  defaultSocialImage: "/images/nox-og-v3.jpg",
}

type PageMetadataOptions = {
  image?: string
  imageAlt?: string
  noIndex?: boolean
  type?: "website" | "article"
}

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  options: PageMetadataOptions = {},
): Metadata {
  const canonical = `${site.url}${path}`
  const image = options.image ?? site.defaultSocialImage
  const imageUrl = image.startsWith("http") ? image : `${site.url}${image}`
  const imageAlt = options.imageAlt ?? "NOX Fire & Security systems and genuine local installations"

  return {
    title: { absolute: title },
    description,
    alternates: { canonical, languages: { "en-GB": canonical } },
    robots: options.noIndex
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: site.name,
      locale: "en_GB",
      type: options.type ?? "website",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: imageAlt }],
    },
    twitter: { card: "summary_large_image", title, description, images: [imageUrl] },
  }
}
