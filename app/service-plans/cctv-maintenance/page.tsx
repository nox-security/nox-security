import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CTASection from "@/components/cta-section"
import StickyContactButtons from "@/components/sticky-contact-buttons"
import { Camera, CheckCircle2, Phone, MessageCircle, ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "CCTV Maintenance & Servicing Chesterfield & Derbyshire | NOX Fire & Security",
    description: "CCTV maintenance and servicing across Chesterfield, Sheffield and Derbyshire. Camera cleaning, NVR health checks, remote viewing, recording checks, smart detection and commercial CCTV support.",
    keywords: "CCTV maintenance Chesterfield, CCTV servicing Derbyshire, security camera maintenance Sheffield, NVR maintenance, Hikvision maintenance, Ajax CCTV maintenance, commercial CCTV servicing, camera cleaning",
    alternates: { canonical: "https://nox-security.co.uk/service-plans/cctv-maintenance" },
}

const included = [
    "Annual on-site inspection of all cameras",
    "Camera lens cleaning and repointing if needed",
    "Recorder health check and drive inspection",
    "Firmware and software updates",
    "Remote access verification and app testing",
    "Motion detection zone review",
    "Storage capacity check",
    "Night vision / IR test",
    "Written service record provided",
]

export default function CCTVMaintenancePage() {
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
                        <span className="text-white">CCTV Maintenance</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm text-gray-300 font-medium">
                                🔧 Free install with selected service plans
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                CCTV Maintenance in Chesterfield & Derbyshire
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Your CCTV system is only as good as its last service. Our maintenance plan keeps cameras running cleanly, footage recording properly, and remote access working — so when you need it, it works.
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
                                src="/images/cctv-systems-image.png"
                                alt="CCTV maintenance by NOX Fire & Security Chesterfield Derbyshire"
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
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">What's Included in Our CCTV Maintenance Plan</h2>
                            <p className="text-gray-300 leading-relaxed mb-8">
                                We maintain Ajax, Hikvision, Dahua and other professional CCTV systems across Chesterfield, Dronfield, Sheffield, Matlock, Bakewell, Buxton and Derbyshire, including NVRs, PoE cameras, remote viewing and smart detection settings.
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
                                        "Cameras that actually work when you need them",
                                        "Longer equipment lifespan",
                                        "Clear service records for customers who need maintenance evidence",
                                        "Evidence quality maintained for incidents and insurance",
                                        "Faults caught early before full failure",
                                        "Priority support for plan customers",
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
                                    <Link href="/service-plans/alarm-maintenance" className="block text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2">
                                        <ArrowRight className="h-4 w-4" /> Alarm Maintenance
                                    </Link>
                                    <Link href="/service-plans/alarm-monitoring" className="block text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2">
                                        <ArrowRight className="h-4 w-4" /> Alarm Monitoring
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
