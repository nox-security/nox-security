import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import MobileConversionBar from "@/components/mobile-conversion-bar"
import { JsonLd } from "@/components/marketing"
import { site } from "@/lib/site"

const isPreview = process.env.VERCEL_ENV === "preview"

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "NOX Fire & Security | Chesterfield, Sheffield & Derbyshire", template: "%s | NOX Fire & Security" },
  description: "Ajax intruder alarms, CCTV, commercial fire alarms, emergency lighting, servicing and monitoring across Chesterfield, Sheffield and Derbyshire.",
  icons: { icon: "/images/nox-logo-light.jpeg" },
  robots: isPreview
    ? { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false, noimageindex: true } }
    : { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: site.name,
    url: site.url,
    title: "NOX Fire & Security",
    description: "Fire and security systems designed, installed and supported by one local team.",
    images: [{ url: "/images/nox-logo-light.jpeg", alt: "NOX Fire & Security" }],
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organisationGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organisation`,
        name: site.name,
        url: site.url,
        logo: `${site.url}/images/nox-logo-light.jpeg`,
        email: site.email,
        telephone: "+447882959297",
      },
      {
        "@type": ["LocalBusiness", "SecuritySystemSupplier"],
        "@id": `${site.url}/#localbusiness`,
        name: site.name,
        url: site.url,
        telephone: "+447882959297",
        email: site.email,
        image: `${site.url}/images/nox-logo-light.jpeg`,
        parentOrganization: { "@id": `${site.url}/#organisation` },
        address: { "@type": "PostalAddress", addressLocality: "Chesterfield", addressRegion: "Derbyshire", addressCountry: "GB" },
        areaServed: ["Chesterfield", "Sheffield", "Derbyshire", "South Yorkshire", "Nottinghamshire"],
      },
    ],
  }
  return <html lang="en-GB"><body><JsonLd data={organisationGraph}/><Header/><main id="main-content">{children}</main><Footer/><MobileConversionBar/></body></html>
}
