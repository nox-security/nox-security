import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CTASection from "@/components/cta-section"
import ServiceFAQ from "@/components/service-faq"
import CommercialSectors from "@/components/commercial-sectors"
import StickyContactButtons from "@/components/sticky-contact-buttons"
import { Eye, HardDrive, Smartphone, Sun, CheckCircle2, Phone, MessageCircle, ArrowRight, Star, Shield, Camera, Car, Cpu, Bell, Wifi, Home, Building2, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "CCTV Installation Chesterfield & Derbyshire | NOX Fire & Security",
    description: "CCTV installation for homes and businesses across Chesterfield, Sheffield and Derbyshire. Ajax, Hikvision, ColourVu, PoE, NVR, 4K cameras, smart detection, remote viewing and maintenance plans.",
    keywords: "CCTV installation Chesterfield, CCTV systems Derbyshire, security camera installation Sheffield, Ajax CCTV, Hikvision CCTV, ColourVu CCTV, 4K CCTV Chesterfield, PoE CCTV, NVR installation, commercial CCTV Derbyshire, home CCTV Chesterfield, CCTV maintenance",
    alternates: { canonical: "https://nox-security.co.uk/systems/cctv" },
}

export default function CCTVPage() {
    const productBreakdown = [
        { icon: Monitor, label: "4K Ultra HD", desc: "Crystal-clear 4K resolution. Every plate, face, and detail captured — day or night." },
        { icon: Sun, label: "Colour Night Vision", desc: "ColourVu delivers full-colour footage in complete darkness. No washed-out IR." },
        { icon: Cpu, label: "AI Detection", desc: "Human and vehicle smart alerts designed to reduce unwanted notifications from animals, leaves and shadows." },
        { icon: Camera, label: "PTZ Cameras", desc: "Pan-tilt-zoom coverage for large areas, car parks, yards, and wide open perimeters." },
        { icon: Car, label: "ANPR", desc: "Automatic number plate recognition for entrances, driveways & commercial car parks." },
        { icon: HardDrive, label: "NVR Systems", desc: "Network Video Recorder with encrypted local storage and optional cloud backup." },
    ]

    const ajaxVideoProducts = [
        {
            name: "Ajax Cameras",
            type: "Indoor & Outdoor IP Cameras",
            desc: "Full HD resolution, night vision, and smart motion detection — integrated with your Ajax alarm system in one app. Real-time alerts, live view, and playback from anywhere.",
            image: "/images/AjaxCamera.jpeg",
        },
        {
            name: "Ajax DoorBell",
            type: "Smart Video Doorbell",
            desc: "HD video doorbell with two-way audio and instant push alerts. See and speak with visitors from anywhere in the world via the Ajax Security System app.",
            image: "/images/AjaxDoorbell.jpeg",
        },
        {
            name: "Ajax NVR",
            type: "Network Video Recorder",
            desc: "Ajax NVR for encrypted local video storage. Supports multiple Ajax cameras. Managed from the same Ajax app alongside your alarms, sensors, and automation devices.",
            image: "/images/AjaxNVR.jpeg",
        },
    ]

    const monitoringOptions = [
        {
            icon: Smartphone,
            title: "Self-Monitoring App",
            desc: "Instant push notifications via Hik-Connect or the Ajax app. View live footage and review playback from anywhere in the world.",
        },
        {
            icon: Shield,
            title: "Professional Visual Verification",
            desc: "Where suitable, camera events can support alarm verification and agreed keyholder escalation, without overpromising a response that has not been approved for the site.",
        },
        {
            icon: Bell,
            title: "Smart Alert Filtering",
            desc: "AI detection helps filter unwanted alerts so genuine human and vehicle events are easier to spot.",
        },
    ]

    const features = [
        { icon: Eye, title: "24/7 Recording", desc: "Continuous or motion-triggered recording planned around what you actually need to see." },
        { icon: Sun, title: "Full Colour Night Vision", desc: "ColourVu and low-light camera options for usable footage after dark." },
        { icon: Smartphone, title: "Smart Alerts", desc: "Human and vehicle detection to reduce pointless notifications." },
        { icon: HardDrive, title: "Reliable Storage", desc: "NVR storage, playback setup and retention configured properly during installation." },
    ]

    const whatWeInstall = [
        "8MP & 5MP dome and bullet cameras",
        "ColourVu colour night vision cameras",
        "PTZ (pan-tilt-zoom) cameras for large areas",
        "ANPR (number plate recognition) cameras",
        "Ajax IP cameras integrated with alarm system",
        "Ajax DoorBell with two-way audio",
        "NVR (Network Video Recorder) systems",
        "Wireless and PoE wired systems",
        "Remote viewing app setup (Hik-Connect / Ajax app)",
    ]

    const benefits = [
        "Deters break-ins before they happen",
        "Full colour evidence day and night",
        "Useful evidence for incidents, deliveries, vehicles and attempted break-ins",
        "Monitor your property from anywhere",
        "Human & vehicle detection — fewer false alerts",
        "Suitable for homes, businesses, car parks, and warehouses",
    ]

    const testimonials = [
        { name: "Mark T.", location: "Sheffield", text: "Very professional from survey to installation. The CCTV works brilliantly and the picture quality is outstanding. Highly recommend.", rating: 5 },
        { name: "Sarah W.", location: "Derbyshire", text: "Fantastic experience! Clear quote, no hidden extras. Left no mess. A proper job from start to finish.", rating: 5 },
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
                        <span className="text-white">CCTV Systems</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm font-medium">
                                <img src="/images/logo-ajax-authorized-installation-company-en-wh.png" alt="Ajax Authorised" className="h-4" />
                                Ajax Authorised · Hikvision & Other CCTV Systems
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                CCTV Installation in Chesterfield & Derbyshire
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Clear CCTV coverage designed around your property, with smart detection, reliable recording, remote viewing and neatly planned camera positions across Chesterfield, Sheffield and Derbyshire.
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
                                src="https://www.youtube.com/embed/Mwxe-dN9QeM?si=ornNrce-emvseoNH"
                                title="CCTV Security System by NOX Fire & Security"
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

            {/* Product Breakdown */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">CCTV Technology Breakdown</h2>
                        <p className="text-gray-300 leading-relaxed">Good CCTV is not just about the camera. We plan the angles, recording, alerts and remote access so the system works properly in real life.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {productBreakdown.map((item, i) => {
                            const Icon = item.icon
                            return (
                                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-white/30 transition-colors">
                                    <div className="w-12 h-12 bg-white text-black rounded-xl flex items-center justify-center mb-4">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">{item.label}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Ajax Video Surveillance */}
            <section className="py-20 bg-white/5 border-y border-white/10">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm font-medium mb-4">
                            <img src="/images/logo-ajax-authorized-installation-company-en-wh.png" alt="Ajax" className="h-4" />
                            Ajax Video Surveillance
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Cameras, DoorBell & NVR — All in One App</h2>
                        <p className="text-gray-300 leading-relaxed">Ajax's video surveillance range integrates directly with your Ajax alarm system. Manage cameras, recordings, and your intruder alarm from a single platform — live view, smart alerts, and total control.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {ajaxVideoProducts.map((p, i) => (
                            <div key={i} className="bg-black border border-white/10 rounded-xl overflow-hidden hover:border-white/30 transition-colors">
                                <div className="aspect-square p-2 flex items-center justify-center overflow-hidden">
                                    <img src={p.image} alt={p.name} className="w-full h-full object-contain scale-110 transition-transform duration-500 hover:scale-125" />
                                </div>
                                <div className="p-6">
                                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">{p.type}</div>
                                    <h3 className="text-lg font-bold mb-2">{p.name}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-10 bg-black border border-white/10 rounded-xl p-6 md:p-8 max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-6">
                        <div className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center flex-shrink-0">
                            <Wifi className="h-7 w-7" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-1">One App. Total Control.</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">Manage your Ajax cameras, NVR, doorbell, and intruder alarm all from the Ajax Security System app on iOS or Android. Live view, smart alerts, and instant access — anywhere in the world.</p>
                        </div>
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
                                We design and install professional CCTV systems for homes and businesses across Chesterfield, Sheffield, Dronfield, Matlock, Bakewell, Buxton, Worksop, Mansfield, and throughout Derbyshire.
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
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white" /> ColourVu full colour night vision upgrade</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white" /> AI-powered human & vehicle detection</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white" /> Alarm-linked visual verification where suitable</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white" /> Ajax DoorBell with two-way audio</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white" /> Cloud backup storage</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white" /> ANPR (number plate recognition)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Monitoring Options */}
            <section className="py-20 bg-white/5 border-y border-white/10">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Monitoring Options</h2>
                        <p className="text-gray-300">From self-monitoring to alarm-linked visual verification, we set up the right alert and recording options for how the site is used.</p>
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

            {/* CCTV Image */}
            <section className="py-8">
                <div className="container mx-auto px-4">
                    <div className="rounded-xl overflow-hidden max-w-4xl mx-auto border border-white/10">
                        <img
                            src="/images/cctv-systems-image.png"
                            alt="Hikvision CCTV system installed by NOX Fire & Security Chesterfield"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* App Control */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-4">Full App Control</h2>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    View live footage, receive smart alerts, and manage your entire CCTV system from your phone — anywhere, any time. The Ajax Security System app and Hik-Connect mean you always have eyes on your property.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        "Live view from any camera — instant access",
                                        "Smart motion alerts (human & vehicle only)",
                                        "Playback and review recorded footage",
                                        "Share access with family, staff, or keyholders",
                                        "Available on iOS & Android",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                                            <CheckCircle2 className="h-4 w-4 text-white flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex items-center justify-center">
                                <img src="/images/Ajax camera.webp" alt="Ajax app CCTV control" className="h-52 w-auto object-contain" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Residential & Commercial */}
            <section className="py-16 bg-white/5 border-y border-white/10">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold mb-4">Residential & Commercial CCTV</h2>
                        <p className="text-gray-300">Tailored CCTV solutions designed for every property type and budget.</p>
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
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white flex-shrink-0" /> Scalable home CCTV systems of any size</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white flex-shrink-0" /> Ajax DoorBell with two-way audio</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white flex-shrink-0" /> Driveway, garden & front door coverage</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white flex-shrink-0" /> Discreet, clean hidden-cable installs</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white flex-shrink-0" /> Integrated with Ajax intruder alarm system</li>
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
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white flex-shrink-0" /> Multi-camera business systems</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white flex-shrink-0" /> PTZ cameras for car parks & large areas</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white flex-shrink-0" /> ANPR for vehicle tracking & evidence</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white flex-shrink-0" /> NVR recording, remote viewing and staff/keyholder access</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white flex-shrink-0" /> CCTV can be combined with intruder alarms, fire systems and service plans</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why NOX */}
            <section className="py-16 bg-white/5 border-y border-white/10">
                <div className="container mx-auto px-4 max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Why Choose NOX for CCTV?</h2>
                    <div className="grid sm:grid-cols-2 gap-4 text-left">
                        {[
                            "No unnecessary contracts — you own the system",
                            "Local Chesterfield-based engineers",
                            "Clean, hidden cable installs — always",
                            "Ajax authorised installers · Hikvision CCTV installers",
                            "Free site survey and no-obligation quote",
                            "Free installation with any CCTV maintenance plan",
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

            {/* Mid CTA */}
            <section className="py-12 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold mb-4">Ready to Get CCTV Installed in Chesterfield or Derbyshire?</h2>
                    <p className="text-gray-300 mb-6">Free site survey, clear advice and a no-obligation quote from a local NOX engineer.</p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        <Link href="/get-quote">
                            <Button size="lg" className="h-14 px-8 bg-white text-black hover:bg-gray-200 font-bold">
                                Free Security Survey <ArrowRight className="h-5 w-5 ml-2" />
                            </Button>
                        </Link>
                        <a href="tel:07882959297">
                            <Button size="lg" className="h-14 px-6 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold">
                                <Phone className="h-5 w-5 mr-2" /> 07882 959 297
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <CommercialSectors />
            <ServiceFAQ faqs={[
                { q: "How much does CCTV installation cost?", a: "A typical home CCTV system with 4 cameras and an NVR starts from around £600–£1,000 installed. Commercial systems with more cameras, PTZ, or ANPR vary in price. We provide free site surveys and transparent quotes — no hidden costs." },
                { q: "What's the difference between Hikvision and Ajax cameras?", a: "Hikvision cameras such as ColourVu and AcuSense are strong options for resolution, night vision and smart detection — ideal for many CCTV installs. Ajax cameras integrate directly with your Ajax alarm system in one app. We advise which is right for your situation." },
                { q: "Will I be able to view cameras on my phone?", a: "Yes. Hikvision cameras use the Hik-Connect app (iOS and Android) for remote live viewing, playback, and alerts. Ajax cameras are managed within the Ajax Security System app alongside your alarm. We set everything up and brief you fully on install day." },
                { q: "How long is footage kept?", a: "Storage duration depends on your NVR capacity and the number of cameras. A typical 2TB NVR with 4 cameras in motion-trigger mode stores 4–8 weeks of footage. We can configure motion-only or continuous recording based on your preference." },
                { q: "Do CCTV cameras work at night?", a: "Yes. All our ColourVu cameras deliver full-colour footage in near-darkness using advanced low-light sensors — no washed-out black-and-white IR images. Ajax cameras also support night vision. We always match the right camera to the environment." },
                { q: "Can you install CCTV in a commercial property?", a: "Absolutely. We install CCTV across warehouses, offices, retail units, industrial premises, car parks, and farms. We provide multi-camera NVR systems with PTZ and ANPR where required. Commercial surveying is available — contact us." },
                { q: "Is CCTV footage legally compliant?", a: "CCTV installations in the UK must comply with GDPR and the ICO guidelines. For commercial systems we advise on signage, data retention policies, and notification requirements. We help you set the system up correctly and advise on the key points you need to consider." },
            ]} />
            <CTASection />
            <Footer />
            <StickyContactButtons />
        </main>
    )
}
