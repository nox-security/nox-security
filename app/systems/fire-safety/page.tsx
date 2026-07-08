import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CTASection from "@/components/cta-section"
import ServiceFAQ from "@/components/service-faq"
import CommercialSectors from "@/components/commercial-sectors"
import StickyContactButtons from "@/components/sticky-contact-buttons"
import { Flame, Thermometer, Smartphone, CheckCircle2, Phone, MessageCircle, ArrowRight, Star, Shield, Wifi, Home, Building2, Bell, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "Fire Alarm Systems Chesterfield, Sheffield & Derbyshire | NOX Fire & Security",
    description: "Interlinked fire & CO detection with instant app alerts. Wired, wireless and EN54 options for homes and businesses across Chesterfield, Sheffield & Derbyshire. Free site survey.",
    keywords: "fire alarm installation Chesterfield, fire alarm systems Derbyshire, Ajax fire alarm Sheffield, smoke detector installation Chesterfield, fire safety systems Derbyshire",
    alternates: { canonical: "https://nox-security.co.uk/systems/fire-safety" },
}

export default function FireSafetyPage() {
    const ajaxFireProducts = [
        {
            name: "FireProtect",
            type: "Smoke & Heat Detector",
            desc: "Wireless optical smoke detector with heat sensor. Correct detector selection helps reduce unwanted activations from steam. EN54 certified. Instant app alert on detection.",
            image: "/images/FireProtect.jpeg",
        },
        {
            name: "Sounder, VAD",
            type: "Wireless Addressable Fire Alarm",
            desc: "Fusion of signature Ajax user experience and EN 54-certified reliability. Within three seconds of a fire alarm, they deliver audible, visual, or combined alerts.",
            image: "/images/FireProtectPlus.jpeg",
        },
        {
            name: "EN54 Fire Hub",
            type: "Commercial Fire Panel",
            desc: "EN54-certified wireless control panel for commercial fire alarm systems. Supports up to 100 fire devices. Addressable, wireless, and app-connected.",
            image: "/images/EN54FireHub.jpeg",
        },
        {
            name: "Manual Call Point",
            type: "Break-Glass Station",
            desc: "Wireless resettable manual call point. Available in red, blue, green, yellow, and white. No wiring required. Instant alarm trigger with full app notification.",
            image: "/images/ManualCallPointFireAlarm.jpeg",
        },
    ]

    const monitoringOptions = [
        {
            icon: Smartphone,
            title: "App Alerts",
            desc: "Instant push notifications to your phone the moment any fire, heat, or CO sensor triggers. Know which room and which device — from anywhere in the world.",
        },
        {
            icon: Shield,
            title: "24/7 Monitoring",
            desc: "Professional monitoring options with agreed escalation steps, keyholder contact and clear response procedures for the premises.",
        },
        {
            icon: Bell,
            title: "Interlinked Sounders",
            desc: "When one detector triggers, every sounder in the system activates simultaneously — ensuring everyone is alerted immediately, no matter where they are.",
        },
    ]

    const features = [
        { icon: Flame, title: "Early Detection", desc: "Correct detector selection helps reduce unwanted activations from cooking steam while maintaining reliable fire detection." },
        { icon: Thermometer, title: "Smoke, Heat & Carbon Monoxide", desc: "Smoke, heat and carbon monoxide detection options specified around the risk and layout of the property." },
        { icon: Smartphone, title: "Instant App Alerts", desc: "Know exactly which room triggered the alarm, from anywhere in the world." },
        { icon: Wifi, title: "Wired or Wireless Ajax Systems", desc: "Ajax fire systems can be wired or wireless depending on building requirements." },
    ]

    const whatWeInstall = [
        "Interlinked smoke detectors (optical & ionisation)",
        "Heat detectors for kitchens and garages",
        "Carbon monoxide (CO) detectors",
        "Ajax FireProtect & FireProtect Plus devices",
        "Manual call points (break glass)",
        "Sounders and visual warning devices",
        "EN54-grade commercial fire alarm panels",
        "Conventional and addressable systems",
        "Wireless & hybrid system options",
    ]

    const benefits = [
        "Early warning saves lives — every second counts",
        "App alerts even when you're not home",
        "Interlinked system — all sounders activate together",
        "Correct detector selection to help reduce unwanted activations",
        "EN54 options available where the building or specification requires them",
        "Suitable for homes, offices, care homes, retail, and warehouses",
    ]

    const testimonials = [
        { name: "James H.", location: "Chesterfield", text: "Absolutely superb service. Ajax system working perfectly. They explained everything clearly and left the place spotless.", rating: 5 },
        { name: "Sarah W.", location: "Derbyshire", text: "Clear quote with no hidden extras. Engineers were friendly, arrived on time, and left no mess. Highly recommend.", rating: 5 },
    ]

    return (
        <main className="min-h-screen bg-black text-white">
            <Header />

            {/* Hero */}
            <section className="relative py-20 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.04)_0%,transparent_60%)]" />
                <div className="container mx-auto px-4 z-10 relative">
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-8">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/systems" className="hover:text-white transition-colors">Security Systems</Link>
                        <span>/</span>
                        <span className="text-white">Fire Alarm Systems</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm font-medium">
                                <img src="/images/logo-ajax-authorized-installation-company-en-wh.png" alt="Ajax Authorised" className="h-4" />
                                Ajax Authorised · Fire Alarm Options
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                Fire Alarm Systems in Chesterfield & Derbyshire
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Advanced fire and carbon monoxide detection for homes and businesses. Interlinked sensors that alert you instantly on your phone — even if you're miles away. Serving Chesterfield, Sheffield, and all of Derbyshire.
                            </p>
                            <div className="flex flex-wrap gap-3 pt-2">
                                <Link href="/get-quote">
                                    <Button size="lg" className="h-14 px-8 bg-white text-black hover:bg-gray-200 font-bold animate-pulse-glow">
                                        Free Security Survey <ArrowRight className="h-5 w-5 ml-2" />
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
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/XZDNd3ud-ck?si=udKSeXalyrpo7vHN"
                                title="Ajax Fire Protection System"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute inset-0"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-16 bg-white/5 border-y border-white/10">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        {features.map((f, i) => {
                            const Icon = f.icon
                            return (
                                <div key={i} className="p-6">
                                    <Icon className="w-12 h-12 mx-auto mb-4 text-white" />
                                    <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{f.desc}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Ajax Fire Products */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm font-medium mb-4">
                            <img src="/images/logo-ajax-authorized-installation-company-en-wh.png" alt="Ajax" className="h-4" />
                            Ajax Fire & Life Safety
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ajax Fire Detection Options</h2>
                        <p className="text-gray-300 leading-relaxed">Where EN54 equipment is required, we can specify suitable Ajax Fire devices in wired, wireless or hybrid configurations depending on the building requirements. The aim is simple: reliable fire detection, clear alerts and a system that suits the premises.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {ajaxFireProducts.map((p, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-white/30 transition-colors">
                                <div className="aspect-square p-2 flex items-center justify-center overflow-hidden">
                                    <img src={p.image} alt={p.name} className="w-full h-full object-contain scale-125 transition-transform duration-500 hover:scale-150" />
                                </div>
                                <div className="p-5">
                                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">{p.type}</div>
                                    <h3 className="text-base font-bold mb-2">{p.name}</h3>
                                    <p className="text-gray-400 text-xs leading-relaxed">{p.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Monitoring Options */}
            <section className="py-20 bg-white/5 border-y border-white/10">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Smart Alerts & Monitoring</h2>
                        <p className="text-gray-300">Know instantly when any fire, heat, or CO event is detected — wherever you are.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {monitoringOptions.map((opt, i) => {
                            const Icon = opt.icon
                            return (
                                <div key={i} className="bg-black border border-white/10 rounded-xl p-8 text-center hover:border-white/30 transition-colors">
                                    <div className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Icon className="h-7 w-7" />
                                    </div>
                                    <h3 className="text-lg font-bold mb-3">{opt.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{opt.desc}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* What We Install + Benefits */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Install</h2>
                            <p className="text-gray-300 leading-relaxed mb-8">
                                We design and install residential and commercial fire alarm systems across Chesterfield, Sheffield, Dronfield, Clay Cross, Bolsover, Matlock, Bakewell, Buxton, Worksop, and all of Derbyshire.
                            </p>
                            <ul className="space-y-3">
                                {whatWeInstall.map((item, i) => (
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
                                    {benefits.map((b, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                                            <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                                <h3 className="text-xl font-bold mb-3">Upgrades Available</h3>
                                <ul className="space-y-2 text-sm text-gray-300">
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white" /> App-based control and real-time alerts</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white" /> Professional monitoring with agreed escalation steps</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white" /> Integration with intruder alarm system</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white" /> Emergency lighting integration</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white" /> Annual fire alarm servicing plan</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Residential & Commercial */}
            <section className="py-16 bg-white/5 border-y border-white/10">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold mb-4">Residential & Commercial Fire Systems</h2>
                        <p className="text-gray-300">Tailored fire alarm solutions for homes, landlords, and commercial premises.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-black border border-white/10 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-white text-black rounded-lg flex items-center justify-center">
                                    <Home className="h-5 w-5" />
                                </div>
                                <h3 className="text-xl font-bold">Residential</h3>
                            </div>
                            <ul className="space-y-3 text-sm text-gray-300">
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white flex-shrink-0" /> Interlinked smoke & CO detectors</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white flex-shrink-0" /> Kitchen-suitable heat detection to help reduce unwanted activations</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white flex-shrink-0" /> App alerts even when you're not home</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white flex-shrink-0" /> Suitable for houses, flats & HMOs</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white flex-shrink-0" /> Integrates with Ajax intruder alarm</li>
                            </ul>
                        </div>
                        <div className="bg-black border border-white/10 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-white text-black rounded-lg flex items-center justify-center">
                                    <Building2 className="h-5 w-5" />
                                </div>
                                <h3 className="text-xl font-bold">Commercial</h3>
                            </div>
                            <ul className="space-y-3 text-sm text-gray-300">
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white flex-shrink-0" /> EN54 addressable systems</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white flex-shrink-0" /> Manual call points & visual alarms</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white flex-shrink-0" /> Professional monitoring with agreed escalation steps</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white flex-shrink-0" /> Suitable for offices, care homes & retail</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white flex-shrink-0" /> Linked to emergency lighting system</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Image */}
            <section className="py-8">
                <div className="container mx-auto px-4">
                    <div className="rounded-xl overflow-hidden max-w-4xl mx-auto border border-white/10">
                        <img
                            src="/images/fire-life-safety.png"
                            alt="Fire alarm system installed by NOX Fire & Security Chesterfield Derbyshire"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Why NOX */}
            <section className="py-16 bg-white/5 border-y border-white/10">
                <div className="container mx-auto px-4 max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Why Choose NOX for Fire Safety?</h2>
                    <div className="grid sm:grid-cols-2 gap-4 text-left">
                        {[
                            "No unnecessary contracts — you own your system",
                            "Local Chesterfield-based fire safety engineers",
                            "EN54 options where required",
                            "Ajax-authorised installers",
                            "Linked to fire alarm servicing plans",
                            "Free install with selected service plans",
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-black border border-white/10 rounded-lg p-4">
                                <Shield className="h-5 w-5 text-white flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reviews */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold mb-8 text-center">Customer Reviews</h2>
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {testimonials.map((t, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
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

            {/* Internal links */}
            <section className="py-8 text-center">
                <div className="container mx-auto px-4">
                    <p className="text-gray-300 mb-4">Also see our related services:</p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        <Link href="/systems/fire-risk-assessment">
                            <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-black">Fire Risk Assessments</Button>
                        </Link>
                        <Link href="/service-plans/fire-alarm-servicing">
                            <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-black">Fire Alarm Servicing</Button>
                        </Link>
                        <Link href="/systems/emergency-lighting">
                            <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-black">Emergency Lighting</Button>
                        </Link>
                    </div>
                </div>
            </section>

            <CommercialSectors />
            <ServiceFAQ faqs={[
                { q: "Is a fire alarm legally required for my property?", a: "Commercial premises, HMOs, houses of multiple occupation, and most businesses legally require a fire detection system under the Regulatory Reform (Fire Safety) Order 2005. Domestic properties don't have a strict legal requirement, but landlords and rental properties have their own obligations. We advise you honestly on what's required." },
                { q: "What is an EN54-certified fire alarm?", a: "EN54 is the European standard for fire detection and alarm system components. Ajax FireProtect sensors and professional fire hubs include EN54-certified options. Where compliance requirements apply, we specify the correct devices and confirm suitability during the survey." },
                { q: "How much does a fire alarm system cost?", a: "A domestic wireless fire alarm system starts from around £400–£700 installed. Commercial systems depend heavily on property size and type. We provide free site surveys and clear, itemised quotes — no surprises." },
                { q: "What is the difference between smoke, heat, and CO detectors?", a: "Smoke detectors detect airborne particles from smouldering or flaming fires. Heat detectors are better for kitchens where smoke detectors would false-trigger. CO (carbon monoxide) detectors protect against silent gas leaks from boilers and appliances. A suitable system often uses a combination — we specify the right mix for your property." },
                { q: "Can I have my fire alarm monitored 24/7?", a: "Where appropriate, we can discuss monitored fire alarm options and the correct escalation route for your premises. We keep this clear during the survey so the response plan matches the system, the property and any insurer or responsible-person requirements." },
                { q: "Do you service existing fire alarms?", a: "Yes. We offer annual fire alarm servicing and can take over maintenance of your existing system. We'll assess the current installation, carry out testing to BS 5839, and provide a full service report. Contact us for a takeover quote." },
            ]} />
            <CTASection />
            <Footer />
            <StickyContactButtons />
        </main>
    )
}
