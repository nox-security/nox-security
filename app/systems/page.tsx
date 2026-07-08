import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CTASection from "@/components/cta-section"
import StickyContactButtons from "@/components/sticky-contact-buttons"
import { Bell, Camera, Flame, Lightbulb, ClipboardCheck, ArrowRight, Zap, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
    title: "Security Systems Chesterfield & Derbyshire | Alarms, CCTV, Fire & Automation | NOX Fire & Security",
    description: "Alarm, CCTV and fire security systems for residential and commercial properties across Chesterfield, Sheffield and Derbyshire. Ajax alarms, CCTV cameras, fire alarms, emergency lighting, monitoring and service plans.",
    keywords: "security systems Chesterfield, alarm installation Derbyshire, CCTV installation Sheffield, Ajax alarms Chesterfield, commercial security systems, residential security systems, fire alarm systems Derbyshire, CCTV maintenance, alarm monitoring, emergency lighting servicing",
    alternates: { canonical: "https://nox-security.co.uk/systems" },
}

const systems = [
    {
        icon: Bell,
        title: "Intruder Alarms",
        desc: "Wireless Ajax intruder alarms with app control, photo verification, pet immunity and 4G SIM backup, designed around your home or business.",
        href: "/systems/intrusion-alarms",
        image: "/images/intrusion-alarms.png",
    },
    {
        icon: Camera,
        title: "CCTV Systems",
        desc: "Hikvision and Ajax camera systems with clear image quality, smart detection, NVR storage and remote viewing from one app.",
        href: "/systems/cctv",
        image: "/images/cctv-systems-image.png",
    },
    {
        icon: Flame,
        title: "Fire Alarm Systems",
        desc: "Wired, wireless and compliant fire detection options, including interlinked smoke, heat and CO protection for homes, HMOs and businesses.",
        href: "/systems/fire-safety",
        image: "/images/fire-life-safety.png",
    },
    {
        icon: Lightbulb,
        title: "Emergency Lighting",
        desc: "BS 5266 compliant emergency luminaires and exit signs. Required for most commercial premises. Linked to your fire alarm system.",
        href: "/systems/emergency-lighting",
        image: "/images/EmergencyLighting.jpeg",
    },
    {
        icon: ClipboardCheck,
        title: "Fire Risk Assessments",
        desc: "Legally required for most businesses. Qualified assessors, written report, and full action plan with prioritised recommendations.",
        href: "/systems/fire-risk-assessment",
        image: "/images/fire-life-safety.png",
    },
    {
        icon: Zap,
        title: "Smart Automation",
        desc: "Ajax smart lighting, water leak protection, DoorBell, and automation scenarios — fully integrated with your security system in one app.",
        href: "/systems/smart-automation",
        image: "/images/AjaxAutomation.png",
    },
]

export default function SystemsIndexPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Header />

            <section className="py-20 md:py-28 text-center">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <img src="/images/logo-ajax-authorized-installation-company-en-wh.png" alt="Ajax Authorised" className="h-4" />
                        Ajax Authorised · Hikvision & Other CCTV Systems
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">Security Systems</h1>
                    <p className="text-xl text-gray-300 leading-relaxed mb-4">
                        Professional alarm, CCTV and fire safety systems for homes, businesses and commercial properties across Chesterfield, Sheffield and Derbyshire. Designed properly, installed cleanly and supported afterwards.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        Intruder alarms, CCTV cameras, fire alarm packages, emergency lighting, monitoring options and ongoing service plans — designed around the property rather than sold as a one-size-fits-all package.
                    </p>
                </div>
            </section>

            <section className="pb-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {systems.map((sys, i) => {
                            const Icon = sys.icon
                            return (
                                <Link key={i} href={sys.href} className="group">
                                    <div className="h-full bg-white/5 border border-white/10 hover:border-white rounded-xl overflow-hidden transition-all duration-300 hover-lift">
                                        <div className="aspect-video overflow-hidden">
                                            <img
                                                src={sys.image}
                                                alt={`${sys.title} by NOX Fire & Security Chesterfield`}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="p-6 space-y-3">
                                            <div className="w-10 h-10 bg-white text-black rounded-lg flex items-center justify-center">
                                                <Icon className="h-5 w-5" />
                                            </div>
                                            <h2 className="text-xl font-bold">{sys.title}</h2>
                                            <p className="text-gray-300 text-sm leading-relaxed">{sys.desc}</p>
                                            <div className="flex items-center gap-2 text-sm font-semibold text-white group-hover:gap-3 transition-all pt-2">
                                                Learn More <ArrowRight className="h-4 w-4" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white/5 border-y border-white/10">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Built Around How NOX Works</h2>
                        <p className="text-gray-300 leading-relaxed">
                            NOX is built around long-term residential and commercial security: design the right system, install it cleanly, support it afterwards and make clear exactly what is included. Alarm, CCTV and fire packages can be kept separate or combined into one joined-up security plan.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: "Residential Packages", items: ["Ajax intruder alarms", "Driveway and perimeter CCTV", "Doorbell, app control and family users", "Optional maintenance and monitoring"] },
                            { title: "Commercial Packages", items: ["Alarm, CCTV and fire system design", "Warehouses, shops, offices, HMOs and yards", "NVR recording, keyholder access and handover", "Service plans for ongoing support"] },
                            { title: "Fire & Compliance Support", items: ["Fire alarm installation and servicing", "Emergency lighting testing", "Fire risk assessment support", "Clear records and practical recommendations"] },
                        ].map((card) => (
                            <div key={card.title} className="bg-black border border-white/10 rounded-xl p-6">
                                <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                                <ul className="space-y-3 text-sm text-gray-300">
                                    {card.items.map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <CheckCircle2 className="h-4 w-4 text-white flex-shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
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
