import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import QuoteForm from "@/components/quote-form"
import TrustSignals from "@/components/trust-signals"
import { Shield, Clock, CheckCircle2, Phone, MessageCircle } from "lucide-react"
import StickyContactButtons from "@/components/sticky-contact-buttons"

export const metadata: Metadata = {
    title: "Free Security Survey | NOX Fire & Security | Chesterfield & Derbyshire",
    description: "Request your free, no-obligation security survey from NOX Fire & Security. CCTV, alarms, fire safety & more across Chesterfield, Sheffield, and Derbyshire. Response within 2 hours.",
    alternates: { canonical: "https://nox-security.co.uk/get-quote" },
}

export default function GetQuotePage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Header />
            <section className="py-20 md:py-32 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Left: Form */}
                        <div>
                            <div className="bg-white/5 p-8 md:p-12 rounded-2xl border border-white/10 animate-fade-in-up">
                                <div className="inline-flex items-center gap-2 bg-white text-black px-4 py-1.5 rounded-full text-xs font-bold mb-5">
                                    <Shield className="h-3.5 w-3.5" /> Free · No Obligation · Local Specialists
                                </div>
                                <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white">Request Your Free<br />Security Survey</h1>
                                <p className="text-gray-300 mb-8 text-base">Tell us what you need — we'll be in touch within 2 hours with honest advice and a transparent quote.</p>
                                <QuoteForm />
                            </div>
                        </div>

                        {/* Right: Trust & Contact */}
                        <div className="space-y-6 lg:pt-4">
                            <div>
                                <h2 className="text-2xl font-bold mb-4">Why Choose NOX?</h2>
                                <ul className="space-y-3">
                                    {[
                                        "Local Chesterfield-based team — fast response",
                                        "No pressure, no unnecessary contracts",
                                        "You own your system outright",
                                        "Premium Ajax & Hikvision equipment",
                                        "Clean, tidy installs — always",
                                        "Free installation with any service plan",
                                        "Professional monitoring available",
                                        "5-star Google rated",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-300">
                                            <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Quick contact */}
                            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
                                <h3 className="font-bold text-lg">Prefer to Talk?</h3>
                                <a
                                    href="tel:07882959297"
                                    className="flex items-center gap-3 p-4 rounded-lg bg-white text-black hover:bg-gray-100 transition-colors font-bold"
                                >
                                    <Phone className="h-5 w-5" />
                                    Call: 07882 959 297
                                </a>
                                <a
                                    href="https://wa.me/447882959297?text=Hi%20NOX%20%E2%80%94%20I'd%20like%20a%20free%20quote%20please"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-4 rounded-lg bg-[#25D366] hover:bg-[#128C7E] text-white transition-colors font-bold"
                                >
                                    <MessageCircle className="h-5 w-5" />
                                    WhatsApp Us
                                </a>
                            </div>

                            {/* Trust badges */}
                            <div className="grid grid-cols-3 gap-4 text-center">
                                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                                    <Shield className="h-6 w-6 mx-auto mb-2 text-white" />
                                    <div className="text-sm font-semibold text-white">Monitoring Available</div>
                                    <div className="text-xs text-gray-400 mt-1">Certified engineers</div>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                                    <Clock className="h-6 w-6 mx-auto mb-2 text-white" />
                                    <div className="text-sm font-semibold text-white">&lt; 2hr Response</div>
                                    <div className="text-xs text-gray-400 mt-1">During business hours</div>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                                    <CheckCircle2 className="h-6 w-6 mx-auto mb-2 text-white" />
                                    <div className="text-sm font-semibold text-white">Free Surveys</div>
                                    <div className="text-xs text-gray-400 mt-1">No obligation</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <TrustSignals />
            <Footer />
            <StickyContactButtons />
        </main>
    )
}
