import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import MobileConversionBar from "@/components/mobile-conversion-bar"
import { JsonLd } from "@/components/marketing"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "NOX Fire & Security | Chesterfield, Sheffield & Derbyshire", template: "%s | NOX Fire & Security" },
  description: "Intruder alarms, CCTV, fire safety, monitoring, maintenance and system takeovers for homes and businesses across Chesterfield, Sheffield and Derbyshire.",
  icons: { icon: "/images/nox-logo-light.jpeg" }
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SecuritySystemSupplier"],
    name: site.name,
    url: site.url,
    telephone: "+447882959297",
    email: site.email,
    image: `${site.url}/images/nox-logo-light.jpeg`,
    address: { "@type": "PostalAddress", addressLocality: "Chesterfield", addressRegion: "Derbyshire", addressCountry: "GB" },
    areaServed: ["Chesterfield", "Sheffield", "Derbyshire", "South Yorkshire", "Nottinghamshire"],
    sameAs: []
  }
  return <html lang="en-GB"><body><JsonLd data={localBusiness}/><Header/><main id="main-content">{children}</main><Footer/><MobileConversionBar/></body></html>
}
