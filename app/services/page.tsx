import Header from "@/components/header"
import Services from "@/components/services"
import ServicePlans from "@/components/service-plans"
import Footer from "@/components/footer"
import CTASection from "@/components/cta-section"
import StickyContactButtons from "@/components/sticky-contact-buttons"

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-black">
            <Header />
            <div className="pt-20">
                <Services />
                <ServicePlans />
            </div>
            <CTASection />
            <Footer />
            <StickyContactButtons />
        </main>
    )
}
