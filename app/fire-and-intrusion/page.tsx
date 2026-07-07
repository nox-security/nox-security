import Header from "@/components/header"
import Services from "@/components/services"
import Footer from "@/components/footer"
import CTASection from "@/components/cta-section"
import StickyContactButtons from "@/components/sticky-contact-buttons"

export default function FireIntrusionPage() {
    return (
        <main className="min-h-screen bg-black">
            <Header />
            <div className="pt-20">
                <div className="container mx-auto px-4 py-12 text-center">
                    <h1 className="text-4xl font-bold mb-4">Fire & Intrusion Systems</h1>
                    <p className="text-gray-70 max-w-2xl mx-auto">Expert fire detection and intrusion alarm systems for your safety.</p>
                </div>
                <Services />
            </div>
            <CTASection />
            <Footer />
            <StickyContactButtons />
        </main>
    )
}
