import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CTASection from "@/components/cta-section"
import StickyContactButtons from "@/components/sticky-contact-buttons"
import { Shield, CheckCircle2, Wrench, Phone, MessageCircle, ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "Alarm Maintenance Chesterfield & Derbyshire | NOX Fire & Security",
    description: "Intruder alarm maintenance and servicing across Chesterfield, Sheffield & Derbyshire. Keep your system in peak condition. Free installation with any plan. Call 07882 959 297.",
    keywords: "alarm maintenance Chesterfield, intruder alarm servicing Derbyshire, alarm service plan Sheffield, Ajax alarm maintenance, alarm takeover Chesterfield",
    alternates: { canonical: "https://nox-security.co.uk/service-plans/alarm-maintenance" },
}

const included = [
    "Annual system inspection and functional test",
    "Battery health check and replacement if needed",
    "Sensor sensitivity adjustment and calibration",
    "Control panel firmware updates",
    "App and user code review",
    "4G/SIM connectivity check",
    "Priority response to faults",
    "Written service record",
    "Manufacturer warranty support",
]

const testimonials = [
    { name: "James H.", location: "Chesterfield", text: "Absolutely superb service. The Ajax alarm installation was carried out to an excellent standard. Neat, tidy, and they explained everything on the app.", rating: 5 },
    { name: "Sarah W.", location: "Derbyshire", text: "Clear quote, no hidden extras. Engineers arrived on time and left no mess. Total peace of mind.", rating: 5 },
]

export default function AlarmMaintenancePage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Header />

            {/* Hero */}
            <section className="relative py-20 md:py-28 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.04)_0%,transparent_60%)]" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-8">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/service-plans" className="hover:text-white transition-colors">Service Plans</Link>
                        <span>/</span>
                        <span className="text-white">Alarm Maintenance</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm text-gray-300 font-medium">
                                🔧 Free installation with any service plan
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                Intruder Alarm Maintenance in Chesterfield & Derbyshire
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Keep your alarm system performing at its best. Regular servicing from our local engineers ensures your system stays reliable, up to date, and covered — with no nasty surprises.
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
                                src="/images/Maintenence.png"
                                alt="Alarm maintenance by NOX Fire & Security Chesterfield"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">What's Included</h2>
                            <p className="text-gray-300 leading-relaxed mb-8">
                                Our alarm maintenance plan covers everything needed to keep your intruder alarm running perfectly across Chesterfield, Dronfield, Eckington, Clay Cross, Bolsover, and all of Derbyshire.
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
                                        "Keeps your insurance valid — insurers often require annual servicing",
                                        "Extends the life of your equipment",
                                        "Catches issues before they become failures",
                                        "Priority callout support for plan customers",
                                        "Peace of mind that your system works when it matters",
                                        "Works with existing Ajax, Texecom, Pyronix, and other systems",
                                    ].map((b, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                                            <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                <h3 className="font-bold text-lg mb-3">Also Consider</h3>
                                <div className="space-y-2">
                                    <Link href="/service-plans/police-monitoring" className="block text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2">
                                        <ArrowRight className="h-4 w-4" /> Police Monitoring
                                    </Link>
                                    <Link href="/service-plans/cctv-maintenance" className="block text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2">
                                        <ArrowRight className="h-4 w-4" /> CCTV Maintenance
                                    </Link>
                                    <Link href="/service-plans/fire-alarm-servicing" className="block text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2">
                                        <ArrowRight className="h-4 w-4" /> Fire Alarm Servicing
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews */}
            <section className="py-16 bg-white/5 border-y border-white/10">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold mb-8 text-center">What Our Customers Say</h2>
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {testimonials.map((t, i) => (
                            <div key={i} className="bg-black border border-white/10 rounded-xl p-6">
                                <div className="flex gap-1 mb-3">
                                    {[...Array(t.rating)].map((_, j) => (
                                        <Star key={j} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-gray-300 italic mb-4">"{t.text}"</p>
                                <div className="font-bold text-white">{t.name} — {t.location}</div>
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
