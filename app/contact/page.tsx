import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import QuoteForm from "@/components/quote-form"
import { Phone, Mail, MapPin, MessageCircle, Shield, Clock, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import StickyContactButtons from "@/components/sticky-contact-buttons"

export const metadata: Metadata = {
    title: "Contact Us | NOX Fire & Security | Chesterfield & Derbyshire",
    description: "Contact NOX Fire & Security for CCTV, alarms, fire safety & security systems across Chesterfield, Sheffield, and Derbyshire. Call 07882 959 297 or WhatsApp us.",
    alternates: { canonical: "https://nox-security.co.uk/contact" },
}

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Header />

            <section className="py-20 md:py-32">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16 animate-fade-in-up">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            CCTV, alarms, fire safety & security systems across Chesterfield, Sheffield, and Derbyshire. We respond within 2 hours.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Quote Form */}
                        <div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                                <h2 className="text-2xl font-bold mb-2">Request Your Free Security Survey</h2>
                                <p className="text-gray-300 mb-6">No obligation. Honest advice. Response within 2 hours.</p>
                                <QuoteForm />
                            </div>
                        </div>

                        {/* Contact methods */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-4 hover-lift p-5 rounded-xl bg-white/5 border border-white/10">
                                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Phone className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">Phone</h3>
                                    <p className="text-gray-400 mb-2 text-sm">Call us for a chat about your security needs.</p>
                                    <a href="tel:07882959297" className="text-xl font-bold hover:text-gray-300 transition-colors">
                                        07882 959 297
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 hover-lift p-5 rounded-xl bg-white/5 border border-white/10">
                                <div className="w-12 h-12 bg-[#25D366] rounded-lg flex items-center justify-center flex-shrink-0">
                                    <MessageCircle className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">WhatsApp</h3>
                                    <p className="text-gray-400 mb-2 text-sm">Prefer WhatsApp? Message us and we'll respond fast.</p>
                                    <a
                                        href="https://wa.me/447882959297?text=Hi%20NOX%20%E2%80%94%20I'd%20like%20a%20free%20quote%20please"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm"
                                    >
                                        <MessageCircle className="h-4 w-4" />
                                        WhatsApp Us Now
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 hover-lift p-5 rounded-xl bg-white/5 border border-white/10">
                                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Mail className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">Email</h3>
                                    <p className="text-gray-400 mb-2 text-sm">Send us an email and we'll get back to you.</p>
                                    <a href="mailto:info@nox-security.co.uk" className="text-lg font-semibold hover:text-gray-300 transition-colors">
                                        info@nox-security.co.uk
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 hover-lift p-5 rounded-xl bg-white/5 border border-white/10">
                                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <MapPin className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">Location</h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">Based in <strong>Chesterfield, Derbyshire</strong>.</p>
                                    <p className="text-gray-400 text-sm mt-1">Serving Chesterfield · Sheffield · Derbyshire as our core area, plus wider commercial coverage across South Yorkshire, Nottinghamshire &amp; the East Midlands.</p>
                                    <Link href="/areas-we-serve" className="text-sm text-white underline hover:text-gray-300 transition-colors mt-2 block">View all areas we cover →</Link>
                                </div>
                            </div>

                            {/* Trust badges */}
                            <div className="grid grid-cols-3 gap-3 text-center pt-2">
                                <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                                    <Shield className="h-5 w-5 mx-auto mb-1 text-white" />
                                    <div className="text-xs text-gray-400">Monitoring Available</div>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                                    <Clock className="h-5 w-5 mx-auto mb-1 text-white" />
                                    <div className="text-xs text-gray-400">&lt; 2hr Response</div>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                                    <CheckCircle2 className="h-5 w-5 mx-auto mb-1 text-white" />
                                    <div className="text-xs text-gray-400">Free Surveys</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <StickyContactButtons />
        </main>
    )
}