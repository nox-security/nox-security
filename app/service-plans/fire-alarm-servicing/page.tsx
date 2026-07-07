import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CTASection from "@/components/cta-section"
import StickyContactButtons from "@/components/sticky-contact-buttons"
import { Flame, CheckCircle2, Phone, MessageCircle, ArrowRight, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "Fire Alarm Servicing Chesterfield & Derbyshire | NOX Fire & Security",
    description: "BS 5839 compliant fire alarm servicing across Chesterfield, Sheffield & Derbyshire. Regular testing keeps you legally compliant. Free installation with any plan. Call 07882 959 297.",
    keywords: "fire alarm servicing Chesterfield, fire alarm maintenance Derbyshire, BS 5839 compliance, fire alarm service Sheffield, fire alarm testing Derbyshire",
    alternates: { canonical: "https://nox-security.co.uk/service-plans/fire-alarm-servicing" },
}

const included = [
    "6-monthly or annual service visits (to BS 5839)",
    "Full functional test of all detection devices",
    "Control panel test and log review",
    "Sounder and strobe test",
    "Call point activation test",
    "Battery backup test",
    "Visual inspection of all system components",
    "Written service report and certificate",
    "Fault diagnosis and remedial recommendations",
]

export default function FireAlarmServicingPage() {
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
                        <span className="text-white">Fire Alarm Servicing</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm text-gray-300 font-medium">
                                🔧 Free installation with any service plan
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                Fire Alarm Servicing in Chesterfield & Derbyshire
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                BS 5839-compliant fire alarm servicing for businesses, landlords, and commercial properties across Chesterfield, Sheffield, and Derbyshire. Keep your system legally compliant and your people safe.
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
                        <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                            <img
                                src="/images/FireAlaramServicingImage.jpeg"
                                alt="Fire alarm servicing by NOX Fire & Security Chesterfield"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">What's Included in Our Fire Alarm Service</h2>
                            <p className="text-gray-300 leading-relaxed mb-8">
                                We service fire alarm systems to BS 5839 standards across Chesterfield, Dronfield, Clay Cross, Bolsover, Matlock, Sheffield, and throughout Derbyshire and South Yorkshire.
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
                                        "BS 5839 compliant — legally required for most commercial premises",
                                        "Certificate and service record provided",
                                        "Reduces risk of false alarms",
                                        "Maintains insurance validity",
                                        "Protects building occupants",
                                        "Identifies faults before they become emergencies",
                                    ].map((b, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                                            <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                <h3 className="font-bold text-lg mb-2">Also Relevant</h3>
                                <div className="space-y-2 mt-3">
                                    <Link href="/service-plans/emergency-lighting-servicing" className="block text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2">
                                        <ArrowRight className="h-4 w-4" /> Emergency Lighting Servicing
                                    </Link>
                                    <Link href="/systems/fire-risk-assessment" className="block text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2">
                                        <ArrowRight className="h-4 w-4" /> Fire Risk Assessments
                                    </Link>
                                    <Link href="/systems/fire-safety" className="block text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2">
                                        <ArrowRight className="h-4 w-4" /> Fire Alarm Systems
                                    </Link>
                                </div>
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
