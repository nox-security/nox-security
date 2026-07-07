import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Testimonials from "@/components/testimonials"
import CTASection from "@/components/cta-section"
import StickyContactButtons from "@/components/sticky-contact-buttons"

export const metadata: Metadata = {
    title: "Customer Reviews | NOX Fire & Security | Chesterfield & Derbyshire",
    description: "Read genuine reviews from NOX Fire & Security customers across Chesterfield, Sheffield, and Derbyshire. 5-star Google rated.",
    alternates: { canonical: "https://nox-security.co.uk/reviews" },
}

export default function ReviewsPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Header />
            <div className="pt-10">
                <Testimonials />
            </div>
            <CTASection />
            <Footer />
            <StickyContactButtons />
        </main>
    )
}
