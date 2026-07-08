import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CTASection from "@/components/cta-section"
import StickyContactButtons from "@/components/sticky-contact-buttons"
import { Lightbulb, CheckCircle2, Building2, Shield, Phone, MessageCircle, ArrowRight, FileCheck, Clock, Zap, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "Emergency Lighting Installation Chesterfield, Sheffield & Derbyshire | NOX Fire & Security",
    description: "Professional emergency lighting installation and servicing across Chesterfield, Sheffield & Derbyshire. BS 5266 compliant. Free site survey. Call 07882 959 297.",
    keywords: "emergency lighting Chesterfield, emergency lighting Derbyshire, EEL installation Sheffield, BS 5266 compliance, emergency exit lights, emergency lighting servicing",
    alternates: { canonical: "https://nox-security.co.uk/systems/emergency-lighting" },
}

const features = [
    {
        icon: Lightbulb,
        title: "BS 5266 Compliant",
        desc: "Emergency lighting designed and installed in line with BS 5266 requirements for commercial and business properties.",
    },
    {
        icon: Building2,
        title: "Commercial & Residential",
        desc: "From offices and retail units to rental properties and HMOs — we design and install the right system for your building.",
    },
    {
        icon: Shield,
        title: "Annual Testing & Certification",
        desc: "We carry out mandatory monthly and annual tests and provide full certification records for your compliance file.",
    },
    {
        icon: FileCheck,
        title: "Full Documentation",
        desc: "Every installation includes a commissioning certificate, as-fitted drawings, and a maintenance logbook for your records.",
    },
    {
        icon: Clock,
        title: "3-Hour Battery Duration",
        desc: "BS 5266 requires emergency luminaires to operate for a minimum of 3 hours. We specify equipment that meets or exceeds this standard.",
    },
    {
        icon: Zap,
        title: "Integrated Testing Systems",
        desc: "Self-test luminaires and automated test systems can reduce manual testing time and help keep clearer records.",
    },
]

const whatWeInstall = [
    "Maintained emergency luminaires",
    "Non-maintained emergency luminaires",
    "Central battery systems",
    "Self-contained emergency fittings",
    "Exit signs & escape route lighting",
    "Open area (anti-panic) lighting",
    "High-risk task area lighting",
    "Emergency lighting test systems",
]

export default function EmergencyLightingPage() {
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
                        <span className="text-white">Emergency Lighting</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 px-4 py-2 rounded-full text-sm text-amber-300 font-medium">
                                <Lightbulb className="h-4 w-4" />
                                BS 5266 Legal Compliance
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                Emergency Lighting Installation in Chesterfield & Derbyshire
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Clean installs, certification and practical compliance support. We design and install emergency lighting systems in line with BS 5266 requirements for businesses, landlords and commercial properties across Chesterfield, Sheffield and Derbyshire.
                            </p>
                            <div className="flex flex-wrap gap-3 pt-2">
                                <Link href="/get-quote">
                                    <Button size="lg" className="h-14 px-8 bg-white text-black hover:bg-gray-200 font-bold animate-pulse-glow">
                                        Free Security Survey <ArrowRight className="h-5 w-5 ml-2" />
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
                        <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                            <img
                                src="/images/EmergencyLighting.jpeg"
                                alt="Emergency Lighting Installation Chesterfield Derbyshire"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-16 bg-white/5 border-y border-white/10">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((f, i) => {
                            const Icon = f.icon
                            return (
                                <div key={i} className="p-6 text-center">
                                    <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center mx-auto mb-4">
                                        <Icon className="h-7 w-7" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{f.desc}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* What We Install */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Install</h2>
                            <p className="text-gray-300 leading-relaxed mb-8">
                                Our engineers design and install emergency lighting systems tailored to your building layout, occupancy type, and compliance requirements. We serve businesses across Chesterfield, Sheffield, Dronfield, Clay Cross, Bolsover, Matlock, and throughout Derbyshire.
                            </p>
                            <ul className="space-y-3">
                                {whatWeInstall.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300">
                                        <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                                <h3 className="text-xl font-bold mb-4">Benefits</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Supports compliance records and responsible-person duties",
                                        "Protects building occupants during power failures",
                                        "Clear evacuation routes in an emergency",
                                        "Documentation & certification supplied",
                                        "Linked to your fire alarm system if required",
                                        "Suitable for landlords, HMOs, offices, retail, and warehouses",
                                    ].map((b, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-300">
                                            <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                                <h3 className="text-xl font-bold mb-3">Service Plans Available</h3>
                                <p className="text-gray-300 text-sm mb-4">
                                    Keep your emergency lighting compliant year-round with our maintenance plan — includes mandatory annual testing and certification.
                                </p>
                                <Link href="/service-plans/emergency-lighting-servicing">
                                    <Button className="bg-white text-black hover:bg-gray-200 font-bold w-full">
                                        View Servicing Plans
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Integration with Fire Safety */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold mb-4">Part of Your Complete Fire Safety System</h2>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    Emergency lighting works alongside your fire alarm to create a complete life safety system. When a fire alarm activates, emergency lighting automatically illuminates escape routes — guiding occupants to safety even in total darkness or smoke.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        "Linked to Ajax EN54 fire alarm system",
                                        "Automatic activation on power failure or alarm trigger",
                                        "Clearly illuminated escape routes and exit signs",
                                        "Combined fire alarm + emergency lighting service plan",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                                            <CheckCircle2 className="h-4 w-4 text-white flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-6">
                                    <Link href="/systems/fire-safety">
                                        <Button className="bg-white text-black hover:bg-gray-200 font-bold">
                                            View Fire Alarm Systems <ArrowRight className="h-4 w-4 ml-2" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <img src="/images/emergencyLighting.jpeg" alt="Fire alarm and emergency lighting integration" className="rounded-xl border border-white/10 w-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why NOX */}
            <section className="py-16 bg-white/5 border-y border-white/10">
                <div className="container mx-auto px-4 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6">Why NOX for Emergency Lighting?</h2>
                    <div className="grid sm:grid-cols-2 gap-4 text-left">
                        {[
                            "No unnecessary contracts — you own the system",
                            "Local Chesterfield-based engineers",
                            "Clean, professional installs — always",
                            "Premium equipment only",
                            "Full certification and documentation",
                            "Free install with selected service plans",
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-black border border-white/10 rounded-lg p-4">
                                <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0" />
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
