import type { Metadata } from "next"
import Header from "@/components/header"
import Hero from "@/components/hero"
import TrustBar from "@/components/trust-bar"
import Services from "@/components/services"
import AjaxEcosystem from "@/components/ajax-ecosystem"
import CommercialSectors from "@/components/commercial-sectors"
import TrustSignals from "@/components/trust-signals"

import InstallGallery from "@/components/install-gallery"
import Testimonials from "@/components/testimonials"
import ServiceAreas from "@/components/service-areas"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import StickyContactButtons from "@/components/sticky-contact-buttons"

export const metadata: Metadata = {
  title: "NOX Fire & Security | Fire & Security Systems | Chesterfield, Sheffield & Derbyshire",
  description: "Professional fire and security systems designed around homes and businesses across Chesterfield, Sheffield and Derbyshire. Intruder alarms, CCTV, fire safety and ongoing support from NOX Fire & Security.",
  keywords: "CCTV installation Chesterfield, alarm systems Sheffield, security systems Derbyshire, fire alarms Chesterfield, intruder alarms Sheffield, CCTV Matlock, security Bakewell, CCTV Buxton, alarm installation Mansfield, CCTV Worksop, Ajax alarm systems Chesterfield, Hikvision CCTV Sheffield, fire risk assessment Derbyshire, emergency lighting Chesterfield, monitored alarms Derbyshire, NOX Security Chesterfield",
  alternates: { canonical: "https://nox-security.co.uk" },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustBar />
      <Services />
      <AjaxEcosystem />
      <CommercialSectors />

      <InstallGallery />
      <Testimonials />
      <ServiceAreas />
      <TrustSignals />
      <CTASection />
      <Footer />
      <StickyContactButtons />
    </main>
  )
}
