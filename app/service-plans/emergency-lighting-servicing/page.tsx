import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CTASection from "@/components/cta-section"
import StickyContactButtons from "@/components/sticky-contact-buttons"
import { Lightbulb, CheckCircle2, Phone, MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "Emergency Lighting Servicing Chesterfield & Derbyshire | NOX Fire & Security",
    description: "Annual emergency lighting testing and servicing across Chesterfield, Sheffield & Derbyshire. BS 5266 compliant certificates provided. Call 07882 959 297.",
    keywords: "emergency lighting servicing Chesterfield, emergency lighting maintenance Derbyshire, BS 5266 testing, emergency light annual test Sheffield",
    alternates: { canonical: "https://nox-security.co.uk/service-plans/emergency-lighting-servicing" },
}

const included = [
    "Monthly test indicator check (remote or on-site)",
    "Annual full discharge test (3-hour)",
    "Inspection of all luminaires and exit signs",
    "Battery and charging circuit test",
    "Lux level measurement if required",
    "Fault identification and reporting",
    "BS 5266 compliance certificate",
    "Written logbook entry",
]

export default function EmergencyLightingServicingPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Header />

            <section className="relative py-20 md:py-28 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.04)_0%,transparent_60%)]" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-8">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/service-plans" className="hover:text-white transition-colors">Service Plans</Link>
                        <span>/</span>
                        <span className="text-white">Emergency Lighting Servicing</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm text-gray-300 font-medium">
                                🔧 Free install with selected service plans
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                Emergency Lighting Servicing in Chesterfield & Derbyshire
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                BS 5266-compliant emergency lighting testing, certification, and annual servicing for commercial premises across Chesterfield, Sheffield, and Derbyshire. We make compliance straightforward.
                            </p>
                            <div className="flex flex-wrap gap-3 pt-2">
                                <Link href="/get-quote">
                                    <Button size="lg" className="h-14 px-8 bg-white text-black hover:bg-gray-200 font-bold animate-pulse-glow">
                                        Get Quote <ArrowRight className="h-5 w-5 ml-2" />
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
                                alt="Emergency lighting servicing by NOX Fire & Security"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">What's Included</h2>
                            <p className="text-gray-300 leading-relaxed mb-8">
                                We provide full emergency lighting testing and certification to BS 5266 for businesses across Chesterfield, Dronfield, Sheffield, Matlock, and throughout Derbyshire.
                            </p>
                            <ul className="space-y-3">
                                {included.map((item, i) => (
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
                                        "BS 5266 compliant certificate for your records",
                                        "Supports responsible-person duties and compliance records",
                                        "Ensures lights work in a real emergency",
                                        "Maintains building insurance validity",
                                        "Suitable for offices, retail, HMOs, care homes",
                                        "Combined with fire alarm servicing for best value",
                                    ].map((b, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                                            <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                <h3 className="font-bold text-lg mb-3">Bundle & Save</h3>
                                <p className="text-gray-300 text-sm mb-3">Combine emergency lighting servicing with fire alarm servicing for the best value compliance package.</p>
                                <Link href="/service-plans/fire-alarm-servicing">
                                    <Button className="bg-white text-black hover:bg-gray-200 font-bold w-full">
                                        View Fire Alarm Servicing →
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />
            <Footer />
            <StickyContactButtons />
        </main>
    )
}
