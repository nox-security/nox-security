import type { Metadata } from "next"
import { Suspense } from "react"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import MobileConversionBar from "@/components/mobile-conversion-bar"
import CtaTracking from "@/components/cta-tracking"
import Analytics from "@/components/analytics"
import CookieConsent from "@/components/cookie-consent"
import { JsonLd } from "@/components/marketing"
import { site } from "@/lib/site"
import { localBusinessId, organisationId, websiteId } from "@/lib/schema"

const isPreview = process.env.VERCEL_ENV === "preview"

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "CCTV, Fire Alarm & Security Systems | NOX", template: "%s | NOX Fire & Security" },
  description: "Professional CCTV installation, commercial fire alarm installation and servicing, intruder alarms and emergency lighting across Chesterfield, Sheffield, Derbyshire and South Yorkshire.",
  applicationName: site.name,
  category: "Fire and security systems",
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
    description: "Professional CCTV, fire alarms, intruder systems and emergency lighting designed, installed and maintained across Chesterfield, Sheffield and Derbyshire.",
    images: [{ url: site.defaultSocialImage, width: 1200, height: 630, alt: "NOX Fire & Security local installations" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NOX Fire & Security",
    description: "CCTV, fire alarms, intruder systems and emergency lighting across Chesterfield, Sheffield and Derbyshire.",
    images: [site.defaultSocialImage],
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organisationGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organisationId,
        name: site.name,
        url: site.url,
        logo: { "@type": "ImageObject", url: `${site.url}/images/nox-logo-light.jpeg` },
        sameAs: [site.instagram],
        email: site.email,
        telephone: "+447882959297",
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer enquiries",
          telephone: "+447882959297",
          email: site.email,
          availableLanguage: "English",
          areaServed: "GB",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": localBusinessId,
        name: site.name,
        url: site.url,
        telephone: "+447882959297",
        email: site.email,
        image: `${site.url}/images/nox-og-v3.jpg`,
        logo: `${site.url}/images/nox-logo-light.jpeg`,
        sameAs: [site.instagram],
        parentOrganization: { "@id": organisationId },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Chesterfield",
          addressRegion: "Derbyshire",
          addressCountry: "GB",
        },
        areaServed: [
          { "@type": "City", name: "Chesterfield" },
          { "@type": "City", name: "Sheffield" },
          { "@type": "AdministrativeArea", name: "Derbyshire" },
          { "@type": "AdministrativeArea", name: "South Yorkshire" },
          { "@type": "AdministrativeArea", name: "Nottinghamshire" },
        ],
        knowsAbout: [
          "CCTV installation",
          "Commercial fire alarm installation",
          "Fire alarm servicing",
          "Intruder alarm installation",
          "Emergency lighting installation and testing",
          "Alarm monitoring",
          "Security system maintenance and takeovers",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Fire and security services",
          itemListElement: [
            "CCTV installation",
            "Fire alarm installation",
            "Fire alarm servicing",
            "Intruder alarm installation",
            "Emergency lighting",
            "Monitoring and maintenance",
          ].map(name => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
        },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: site.url,
        name: site.name,
        publisher: { "@id": organisationId },
        inLanguage: "en-GB",
      },
    ],
  }

  return (
    <html lang="en-GB">
      <body>
        <JsonLd data={organisationGraph}/>
        <Suspense fallback={null}><Analytics/></Suspense>
        <CtaTracking/>
        <Header/>
        <main id="main-content">{children}</main>
        <Footer/>
        <MobileConversionBar/>
        <CookieConsent/>
      </body>
    </html>
  )
}
