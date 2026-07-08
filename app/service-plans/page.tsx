import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CTASection from "@/components/cta-section"
import StickyContactButtons from "@/components/sticky-contact-buttons"
import ServicePlans from "@/components/service-plans"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
    title: "Service Plans | Alarm & CCTV Maintenance, Fire Servicing & Monitoring | NOX Fire & Security",
    description: "Service plans for alarm maintenance, CCTV maintenance, fire alarm servicing, emergency lighting testing and alarm monitoring across Chesterfield, Sheffield and Derbyshire.",
    keywords: "alarm service plan Chesterfield, alarm maintenance Derbyshire, CCTV maintenance Sheffield, fire alarm servicing Chesterfield, emergency lighting testing Derbyshire, monitored alarm plan, Ajax maintenance, commercial security maintenance",
    alternates: { canonical: "https://nox-security.co.uk/service-plans" },
}

const plans = [
    {
        title: "Alarm Maintenance",
        desc: "Annual inspection, battery checks, firmware updates, and priority support for your intruder alarm system.",
        href: "/service-plans/alarm-maintenance",
        icon: "🔔",
    },
    {
        title: "CCTV Maintenance",
        desc: "Camera cleaning, recorder health check, motion zone review, and storage verification.",
        href: "/service-plans/cctv-maintenance",
        icon: "📷",
    },
    {
        title: "Fire Alarm Servicing",
        desc: "BS 5839-aligned servicing with a clear service record. Often required for commercial premises and responsible persons.",
        href: "/service-plans/fire-alarm-servicing",
        icon: "🔥",
    },
    {
        title: "Emergency Lighting Servicing",
        desc: "BS 5266 annual testing, discharge test, and compliance certificate for landlords and businesses.",
        href: "/service-plans/emergency-lighting-servicing",
        icon: "💡",
    },
    {
        title: "Alarm Monitoring",
        desc: "Professional alarm monitoring with visual verification where available, keyholder contact and agreed escalation procedures.",
        href: "/service-plans/alarm-monitoring",
        icon: "📡",
    },
]

export default function ServicePlansPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Header />

            {/* Hero */}
            <section className="py-20 md:py-28 text-center">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm text-gray-300 font-medium mb-6">
                        🎁 Free install with selected service plans
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                        Service Plans
                    </h1>
                    <p className="text-xl text-gray-300 leading-relaxed mb-8">
                        Keep your alarm, CCTV, fire and emergency lighting systems working properly after installation. NOX service plans are built for residential and commercial customers who want clean installs, reliable equipment, clear aftercare and no misleading promises.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        <Link href="/get-quote">
                            <Button size="lg" className="h-14 px-8 bg-white text-black hover:bg-gray-200 font-bold animate-pulse-glow">
                                Get Quote <ArrowRight className="h-5 w-5 ml-2" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Plans Grid */}
            <section className="py-12 border-t border-white/10">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
                        {plans.map((plan, i) => (
                            <Link key={i} href={plan.href} className="group">
                                <div className="h-full bg-white/5 border border-white/10 hover:border-white rounded-xl p-6 space-y-4 transition-all duration-300 hover-lift">
                                    <div className="text-3xl">{plan.icon}</div>
                                    <h2 className="text-xl font-bold">{plan.title}</h2>
                                    <p className="text-gray-300 text-sm leading-relaxed">{plan.desc}</p>
                                    <div className="flex items-center gap-2 text-sm font-semibold text-white group-hover:gap-3 transition-all">
                                        Learn More <ArrowRight className="h-4 w-4" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Free installation CTA */}
                    <div className="bg-white text-black rounded-2xl p-8 text-center max-w-4xl mx-auto">
                        <div className="text-2xl font-bold mb-2">🎁 Free Standard Installation with Selected Service Plans</div>
                        <p className="text-gray-700 mb-6">Choose a suitable ongoing service plan and standard installation may be included. Clear pricing, no hidden costs and no pressure.</p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            {[
                                "No unnecessary contracts",
                                "You own the equipment",
                                "Local Chesterfield engineers",
                                "Quality Ajax, Hikvision & professional security equipment",
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-2 text-sm font-medium">
                                    <CheckCircle2 className="h-4 w-4 text-black" />
                                    {item}
                                </div>
                            ))}
                        </div>
                        <Link href="/get-quote" className="mt-6 inline-block">
                            <Button size="lg" className="bg-black text-white hover:bg-gray-800 font-bold h-12 px-8">
                                Ask About Free Installation →
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Monitoring tiers */}
            <div className="pt-4">
                <ServicePlans />
            </div>

            <CTASection />
            <Footer />
            <StickyContactButtons />
        </main>
    )
}
