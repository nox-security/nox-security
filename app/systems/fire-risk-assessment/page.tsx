import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CTASection from "@/components/cta-section"
import StickyContactButtons from "@/components/sticky-contact-buttons"
import { ClipboardCheck, CheckCircle2, Building2, Shield, Phone, MessageCircle, ArrowRight, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "Fire Risk Assessment Chesterfield, Sheffield & Derbyshire | NOX Fire & Security",
    description: "Professional fire risk assessments for businesses, landlords & commercial premises across Chesterfield, Sheffield & Derbyshire. Fully compliant, documented, affordable.",
    description: "Professional fire risk assessments for businesses across Chesterfield, Sheffield & Derbyshire. Legally required for most commercial premises. Call 07882 959 297.",
    keywords: "fire risk assessment Chesterfield, fire risk assessment Derbyshire, fire safety assessment Sheffield, commercial fire risk, legal fire assessment, Regulatory Reform Fire Safety Order",
    alternates: { canonical: "https://nox-security.co.uk/systems/fire-risk-assessment" },
}

const whatsCovered = [
    "Assessment of fire hazards and sources of ignition",
    "Evaluation of people at risk within the premises",
    "Review of existing fire detection & warning systems",
    "Assessment of fire escape routes and exits",
    "Fire extinguisher suitability and placement",
    "Emergency lighting assessment",
    "Staff fire safety training evaluation",
    "Written assessment report with action plan",
    "Recommendations for improvements",
    "Compliance with the Regulatory Reform (Fire Safety) Order 2005",
]

const whoNeeds = [
    "Offices and commercial premises",
    "Retail shops and restaurants",
    "Warehouses and industrial units",
    "HMOs and houses of multiple occupation",
    "Care homes and supported living",
    "Schools and educational buildings",
    "Hotels and holiday lets",
    "Any building where employees or public are present",
]

export default function FireRiskAssessmentPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Header />

            {/* Hero */}
            <section className="relative py-20 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.04)_0%,transparent_60%)]" />
                <div className="container mx-auto px-4 relative z-10">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-8">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/systems" className="hover:text-white transition-colors">Security Systems</Link>
                        <span>/</span>
                        <span className="text-white">Fire Risk Assessments</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/40 px-4 py-2 rounded-full text-sm text-red-300 font-medium">
                                <AlertTriangle className="h-4 w-4" />
                                Legally required for most commercial premises
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                Fire Risk Assessments in Chesterfield & Derbyshire
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Under the Regulatory Reform (Fire Safety) Order 2005, most businesses and landlords are legally required to have a documented fire risk assessment. Our qualified assessors cover Chesterfield, Sheffield, Dronfield, Matlock, and all of Derbyshire.
                            </p>
                            <div className="flex flex-wrap gap-3 pt-2">
                                <Link href="/get-quote">
                                    <Button size="lg" className="h-14 px-8 bg-white text-black hover:bg-gray-200 font-bold animate-pulse-glow">
                                        Book Assessment <ArrowRight className="h-5 w-5 ml-2" />
                                    </Button>
                                </Link>
                                <a href="tel:07882959297">
                                    <Button size="lg" className="h-14 px-6 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold">
                                        <Phone className="h-5 w-5 mr-2" /> Call Now
                                    </Button>
                                </a>
                                <a href="https://wa.me/447882959297" target="_blank" rel="noopener noreferrer">
                                    <Button size="lg" className="h-14 px-6 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold">
                                        <MessageCircle className="h-5 w-5 mr-2" /> WhatsApp
                                    </Button>
                                </a>
                            </div>
                        </div>
                        <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                            <img
                                src="/images/FireAlaramServicingImage.jpeg"
                                alt="Fire risk assessment by NOX Fire & Security Chesterfield Derbyshire"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* What's Covered */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">What's Covered in Our Assessment</h2>
                            <p className="text-gray-300 leading-relaxed mb-8">
                                Our qualified fire risk assessors conduct a thorough on-site inspection and produce a comprehensive written report, including an action plan with prioritised recommendations to bring your premises into full compliance.
                            </p>
                            <ul className="space-y-3">
                                {whatsCovered.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-300">
                                        <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                                <h3 className="text-xl font-bold mb-4">Who Needs a Fire Risk Assessment?</h3>
                                <ul className="space-y-3">
                                    {whoNeeds.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                                            <Building2 className="h-4 w-4 text-white flex-shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                                <h3 className="font-bold text-lg mb-2 text-red-300">Don't Risk It</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Failing to carry out a fire risk assessment can result in unlimited fines and imprisonment. Don't delay — contact us today for a no-obligation quote.
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                                <h3 className="text-xl font-bold mb-3">Benefits</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Legal compliance — avoids prosecution",
                                        "Protects employees, tenants, and visitors",
                                        "May reduce insurance premiums",
                                        "Identifies hazards before they cause harm",
                                        "Full written report and action plan supplied",
                                        "Recommendations for fire system upgrades",
                                    ].map((b, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                                            <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why NOX */}
            <section className="py-16 bg-white/5 border-y border-white/10">
                <div className="container mx-auto px-4 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6">Why Choose NOX for Your Fire Risk Assessment?</h2>
                    <div className="grid sm:grid-cols-2 gap-4 text-left">
                        {[
                            "Qualified, experienced fire safety assessors",
                            "Local to Chesterfield & Derbyshire — fast availability",
                            "Clear, jargon-free reports",
                            "Full action plan with prioritised recommendations",
                            "Honest advice — no upselling",
                            "Linked to fire alarm installation if required",
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-black border border-white/10 rounded-lg p-4">
                                <Shield className="h-5 w-5 text-white flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
            <Footer />
            <StickyContactButtons />
        </main>
    )
}
