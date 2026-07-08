import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CTASection from "@/components/cta-section"
import StickyContactButtons from "@/components/sticky-contact-buttons"
import ServicePlans from "@/components/service-plans"
import { Eye, CheckCircle2, Phone, MessageCircle, ArrowRight, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "Alarm Monitoring Chesterfield & Derbyshire | 24/7 Monitored Alarms | NOX Fire & Security",
    description: "Professional alarm monitoring for homes and businesses across Chesterfield, Sheffield and Derbyshire, with visual verification options, keyholder contact and clear escalation procedures.",
    keywords: "alarm monitoring Chesterfield, monitored alarm Derbyshire, professional alarm monitoring Sheffield, Ajax alarm monitoring, keyholder response Chesterfield, visual verification alarms Derbyshire, residential alarm monitoring, commercial alarm monitoring",
    alternates: { canonical: "https://nox-security.co.uk/service-plans/alarm-monitoring" },
}

const included = [
    "24/7 professional alarm monitoring through a trusted monitoring partner",
    "Visual image verification where compatible devices are installed",
    "Keyholder notification following agreed escalation steps",
    "SMS and push notification alerts",
    "Keyholder contact management",
    "Event logging and reporting",
    "Priority support line",
    "CCTV/video verification options available where suitable",
]

const howItWorks = [
    { step: "1", title: "Alarm Triggered", desc: "Your Ajax system detects movement and captures a verification photo." },
    { step: "2", title: "Alarm Reviewed", desc: "The monitoring centre reviews the event and any available verification to help confirm what has happened." },
    { step: "3", title: "Escalation Started", desc: "Agreed keyholders and escalation steps are followed, based on the response plan set up for your property." },
    { step: "4", title: "You Stay Informed", desc: "You still receive Ajax app alerts, event history and live system information where available." },
]

export default function AlarmMonitoringPage() {
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
                        <span className="text-white">Alarm Monitoring</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm text-gray-300 font-medium">
                                🔧 Free install with selected service plans
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                24/7 Alarm Monitoring in Chesterfield & Derbyshire
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                An extra layer of support for homes, shops, offices, warehouses and commercial units that need more than app alerts. Our monitored alarm options combine Ajax alerts, visual verification where available, keyholder contact and agreed escalation steps, with clear wording on exactly what is included for each site.
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
                                src="/images/Monitoring.png"
                                alt="Professional alarm monitoring options by NOX Fire & Security Chesterfield"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-16 bg-white/5 border-y border-white/10">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-10 text-center">How Professional Alarm Monitoring Works</h2>
                    <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {howItWorks.map((step, i) => (
                            <div key={i} className="text-center p-6">
                                <div className="w-12 h-12 rounded-full bg-white text-black font-bold text-xl flex items-center justify-center mx-auto mb-4">{step.step}</div>
                                <h3 className="font-bold mb-2">{step.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">What's Included</h2>
                            <p className="text-gray-300 leading-relaxed mb-8">
                                NOX designs and installs the alarm system, sets up the correct users and keyholders, and connects compatible systems to a professional monitoring partner where required. The wording is kept clear: monitoring, verification, keyholder contact and agreed escalation, with no overpromising on response routes that have not been agreed for the site.
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
                                        "Agreed keyholders and escalation steps are built into the response plan",
                                        "Visual verification helps operators and keyholders understand what triggered the alarm",
                                        "Useful for businesses, empty properties, commercial units and high-value homes",
                                        "Extra support when you are away, busy or unable to respond",
                                        "Alarm events are handled by trained operators rather than relying only on phone notifications",
                                        "Suitable for residential, commercial and mixed alarm/CCTV sites",
                                    ].map((b, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                                            <Shield className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                <h3 className="font-bold text-lg mb-3">Upgrade Your System</h3>
                                <p className="text-gray-300 text-sm mb-3">Monitoring works best when the alarm is designed properly from day one: correct sensors, clear keyholders, strong connectivity and a clean handover.</p>
                                <Link href="/systems/intrusion-alarms">
                                    <Button className="bg-white text-black hover:bg-gray-200 font-bold w-full">
                                        View Intruder Alarm Systems →
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ServicePlans />
            <CTASection />
            <Footer />
            <StickyContactButtons />
        </main>
    )
}
