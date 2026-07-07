import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CTASection from "@/components/cta-section"
import StickyContactButtons from "@/components/sticky-contact-buttons"
import { Bell, Camera, Flame, Lightbulb, ClipboardCheck, ArrowRight, Zap } from "lucide-react"

export const metadata: Metadata = {
    title: "Security Systems Chesterfield & Derbyshire | Alarms, CCTV, Fire & Smart Automation | NOX Fire & Security",
    description: "Professional Ajax intruder alarms, CCTV, fire safety, emergency lighting, smart automation and fire risk assessments across Chesterfield, Sheffield & Derbyshire. Ajax Authorised.",
    keywords: "security systems Chesterfield, CCTV Derbyshire, intruder alarms Sheffield, fire alarms Chesterfield, emergency lighting Derbyshire, fire risk assessment Chesterfield",
    alternates: { canonical: "https://nox-security.co.uk/systems" },
}

const systems = [
    {
        icon: Bell,
        title: "Intruder Alarms",
        desc: "Grade 2 & 3 wireless Ajax systems with app control, photo verification, pet immunity, and 4G SIM backup. Police & insurer recognised.",
        href: "/systems/intrusion-alarms",
        image: "/images/intrusion-alarms.png",
    },
    {
        icon: Camera,
        title: "CCTV Systems",
        desc: "4K–8K Hikvision & Ajax cameras with full colour night vision, AI smart detection, Ajax DoorBell & NVR — all in one app.",
        href: "/systems/cctv",
        image: "/images/cctv-systems-image.png",
    },
    {
        icon: Flame,
        title: "Fire Alarm Systems",
        desc: "EN54-certified wireless Ajax fire detection. Interlinked smoke, heat, and CO detectors with instant app alerts for homes and businesses.",
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
                        Ajax Authorised · Hikvision Accredited
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">Security Systems</h1>
                    <p className="text-xl text-gray-300 leading-relaxed mb-4">
                        Professional security and fire safety systems for homes, businesses, and commercial properties across Chesterfield, Sheffield, and Derbyshire. Ajax authorised. Hikvision accredited. Installed properly.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        Intruder alarms, CCTV, fire protection, smart automation, and emergency lighting — all in one place, all from one trusted installer.
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

            <CTASection />
            <Footer />
            <StickyContactButtons />
        </main>
    )
}
