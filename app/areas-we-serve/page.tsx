import type { Metadata } from "next"
import Header from "@/components/header"
import ServiceAreas from "@/components/service-areas"
import Footer from "@/components/footer"
import CTASection from "@/components/cta-section"
import StickyContactButtons from "@/components/sticky-contact-buttons"

export const metadata: Metadata = {
    title: "Areas We Cover | NOX Fire & Security | Chesterfield & Derbyshire",
    description: "NOX Fire & Security covers Chesterfield, Sheffield, Matlock, Bakewell, Buxton, Dronfield, Mansfield, Worksop, Rotherham, Doncaster and across Derbyshire, Yorkshire & Nottinghamshire.",
    alternates: { canonical: "https://nox-security.co.uk/areas-we-serve" },
}

export default function AreasWeServePage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Header />
            <div className="pt-20">
                <ServiceAreas />
            </div>
            <CTASection />
            <Footer />
            <StickyContactButtons />
        </main>
    )
}
