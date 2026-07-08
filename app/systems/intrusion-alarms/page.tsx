import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CTASection from "@/components/cta-section"
import ServiceFAQ from "@/components/service-faq"
import CommercialSectors from "@/components/commercial-sectors"
import StickyContactButtons from "@/components/sticky-contact-buttons"
import { Check, Shield, Smartphone, Zap, CheckCircle2, Phone, MessageCircle, ArrowRight, Star, Home, Building2, Bell, Wifi, Volume2, Radio } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "Intruder Alarm Installation Chesterfield, Sheffield & Derbyshire | NOX Fire & Security",
    description: "Ajax intruder alarm installation for homes and businesses across Chesterfield, Sheffield and Derbyshire. Wireless alarms, app control, photo verification, external detection, maintenance plans and monitoring options.",
    keywords: "intruder alarm installation Chesterfield, Ajax alarm Derbyshire, wireless burglar alarm Sheffield, home alarm system Chesterfield, commercial alarm system Derbyshire, alarm maintenance Chesterfield, monitored alarm system, Ajax installer Chesterfield",
    alternates: { canonical: "https://nox-security.co.uk/systems/intrusion-alarms" },
}

export default function IntrusionAlarmsPage() {
    const features = [
        { icon: Shield, title: "Designed Around the Risk", desc: "Residential and commercial alarm designs built around the property, the layout and any insurance requirements you tell us about." },
        { icon: Zap, title: "Wireless Technology", desc: "No messy cables. Fast, clean installation with reliable wireless sensors." },
        { icon: Smartphone, title: "App Control", desc: "Arm, disarm, and get instant alerts from anywhere in the world." },
        { icon: CheckCircle2, title: "Image Verification", desc: "MotionCam sensors capture a photo on trigger so you can see what caused the alarm quickly." },
    ]

    const whatWeInstall = [
        "Ajax Hub 2 Plus wireless control panels",
        "MotionProtect motion detectors (PIR)",
        "MotionCam photo-verification sensors",
        "DoorProtect door & window contacts",
        "Ajax Keypad and KeyPad Plus",
        "Ajax Rex range extenders",
        "Pet-immune sensors (up to 20kg)",
        "External sounders and sirens",
        "SIM-based 4G communication backup",
        "Panic buttons and personal alarms",
    ]

    const benefits = [
        "Deters intruders before entry with visible warning devices and properly placed detection",
        "App alerts the moment a sensor triggers",
        "Pet immunity to help reduce unwanted activations from animals",
        "No landline needed, with 4G SIM backup options",
        "Designed with insurance requirements in mind where needed",
        "Suitable for homes, businesses, commercial units, and rental properties",
    ]

    const productBreakdown = [
        { icon: Shield, label: "Ajax Hub 2 Plus", desc: "Central control panel. Wi-Fi, Ethernet & dual SIM 4G backup. Supports up to 100 devices." },
        { icon: Smartphone, label: "MotionCam", desc: "PIR sensor with built-in camera. Takes a photo on trigger so you can quickly check what caused the alarm." },
        { icon: CheckCircle2, label: "DoorProtect", desc: "Wireless reed-switch sensor for doors and windows. Instant alert on opening. Ultra-thin design." },
        { icon: Zap, label: "KeyPad TouchScreen", desc: "Touch-screen keypad with proximity card reader. Arm/disarm with PIN, card, or key fob." },
        { icon: Volume2, label: "StreetSiren", desc: "110dB external siren with tamper detection and built-in backup battery. Visible deterrent." },
        { icon: Radio, label: "SIM 4G Backup", desc: "Dual SIM 4G/2G communication fallback. System stays connected even if broadband is cut." },
    ]

    const monitoringOptions = [
        {
            icon: Smartphone,
            title: "Ajax App Self-Monitoring",
            desc: "Instant push alerts to your phone the moment any sensor triggers. Arm, disarm, and view system status from anywhere on iOS or Android.",
        },
        {
            icon: Shield,
            title: "Professional Alarm Monitoring",
            desc: "Optional monitoring with visual verification where available, keyholder contact and agreed escalation support when an alarm needs attention.",
        },
        {
            icon: Bell,
            title: "Smart Notifications",
            desc: "Real-time alerts for every system event — arm, disarm, sensor trigger, tamper detection, and low battery. Know everything, instantly.",
        },
    ]

    const testimonials = [
        { name: "James H.", location: "Chesterfield", text: "Absolutely superb service. The Ajax alarm installation was carried out to an excellent standard. Neat, tidy, and they took the time to explain everything on the app.", rating: 5 },
        { name: "Mark T.", location: "Sheffield", text: "Very professional from survey to installation. Highly recommend them for any home security needs.", rating: 5 },
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
                        <span className="text-white">Intruder Alarms</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                Intruder Alarm Installation in Chesterfield & Derbyshire
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Ajax intruder alarms designed around your property, with app control, photo verification, pet-friendly options, perimeter protection, service plans and clean professional installation across Chesterfield, Sheffield and Derbyshire.
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
                                src="https://www.youtube.com/embed/9ffQhBwXUDg?si=Pw0A-mpz-2CIICsE"
                                title="Ajax Alarm System by NOX Fire & Security Chesterfield"
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

            {/* What We Install + Benefits */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Install</h2>
                            <p className="text-gray-300 leading-relaxed mb-8">
                                We design and install wireless Ajax alarm systems for homes and businesses across Chesterfield, Sheffield, Dronfield, Eckington, Clay Cross, Bolsover, Matlock, Bakewell, Buxton, and throughout Derbyshire.
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
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white" /> App control (Ajax app — iOS & Android)</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white" /> Professional alarm monitoring options</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white" /> Video doorbell integration</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white" /> Smart home automation (lights, plugs, heating)</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white" /> Perimeter protection (outdoor beams)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Breakdown */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm font-medium mb-4">
                            <img src="/images/logo-ajax-authorized-installation-company-en-wh.png" alt="Ajax Authorised" className="h-4" />
                            Ajax Authorised Installation
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ajax System Components</h2>
                        <p className="text-gray-300 leading-relaxed">Every component is purpose-built, encrypted and tamper-protected, with reliable equipment selected to suit the property, risk and usage.</p>
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

            {/* Product Images */}
            <section className="py-16 bg-white/5 border-y border-white/10">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">Ajax Alarm System Components</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="bg-black border border-white/10 rounded-xl p-8 flex flex-col hover:border-white/30 transition-colors">
                            <div className="aspect-square rounded-lg flex items-center justify-center mb-6 overflow-hidden">
                                <img src="/images/Hub2Plus.jpeg" alt="Ajax Hub 2 Plus Control Panel" className="w-full h-full object-contain scale-125 transition-transform duration-500 hover:scale-150" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Hub 2 Plus</h3>
                            <div className="text-sm font-semibold text-[#FBBC05] mb-4 uppercase tracking-wider">Control Panel</div>
                            <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                                The brain of the system. Controls all devices, collects data, and communicates with your smartphone and, where used, the monitoring provider via Ethernet, Wi-Fi and dual 4G SIM cards.
                            </p>
                        </div>

                        <div className="bg-black border border-white/10 rounded-xl p-8 flex flex-col hover:border-white/30 transition-colors">
                            <div className="aspect-square rounded-lg flex items-center justify-center mb-6 overflow-hidden">
                                <img src="/images/MotionCam.jpeg" alt="Ajax MotionCam Photo-Verification Sensor" className="w-full h-full object-contain scale-125 transition-transform duration-500 hover:scale-150" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">MotionCam</h3>
                            <div className="text-sm font-semibold text-[#FBBC05] mb-4 uppercase tracking-wider">Photo Verification</div>
                            <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                                Detects human motion and immediately takes an animated series of photos. Gives you visual confirmation of what triggered the alarm and helps reduce false alarms. Pet-immune up to 20kg.
                            </p>
                        </div>

                        <div className="bg-black border border-white/10 rounded-xl p-8 flex flex-col hover:border-white/30 transition-colors">
                            <div className="aspect-square rounded-lg flex items-center justify-center mb-6 overflow-hidden">
                                <img src="/images/Doorprotect.jpeg" alt="Ajax DoorProtect Door & Window Sensor" className="w-full h-full object-contain scale-125 transition-transform duration-500 hover:scale-150" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">DoorProtect</h3>
                            <div className="text-sm font-semibold text-[#FBBC05] mb-4 uppercase tracking-wider">Door & Window Sensor</div>
                            <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                                Wireless magnetic opening detector. Installs on all types of doors and windows to instantly notify you of the first signs of intrusion. Lasts up to 7 years on a pre-installed battery.
                            </p>
                        </div>

                        <div className="bg-black border border-white/10 rounded-xl p-8 flex flex-col hover:border-white/30 transition-colors">
                            <div className="aspect-square rounded-lg flex items-center justify-center mb-6 overflow-hidden">
                                <img src="/images/Ajax-KeyPad.jpeg" alt="Ajax KeyPad Touch Control Keypad" className="w-full h-full object-contain scale-125 transition-transform duration-500 hover:scale-150" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">KeyPad TouchScreen</h3>
                            <div className="text-sm font-semibold text-[#FBBC05] mb-4 uppercase tracking-wider">Control Keypad</div>
                            <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                                Sleek touch keypad for arming and disarming the system. Supports contactless access using cards, tags, or smartphones via Bluetooth. Includes a silent panic code.
                            </p>
                        </div>

                        <div className="bg-black border border-white/10 rounded-xl p-8 flex flex-col hover:border-white/30 transition-colors">
                            <div className="aspect-square rounded-lg flex items-center justify-center mb-6 overflow-hidden">
                                <img src="/images/DualCurtain.jpeg" alt="Ajax DualCurtain Outdoor Sensor" className="w-full h-full object-contain scale-125 transition-transform duration-500 hover:scale-150" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">DualCurtain Outdoor</h3>
                            <div className="text-sm font-semibold text-[#FBBC05] mb-4 uppercase tracking-wider">Perimeter Protection</div>
                            <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                                Wireless outdoor bidirectional curtain motion detector. Protects your property perimeter, windows, and doors from the outside while allowing free movement indoors.
                            </p>
                        </div>

                        <div className="bg-black border border-white/10 rounded-xl p-8 flex flex-col hover:border-white/30 transition-colors">
                            <div className="aspect-square rounded-lg flex items-center justify-center mb-6 overflow-hidden">
                                <img src="/images/AjaxDoorbell.jpeg" alt="Ajax DoorBell" className="w-full h-full object-contain scale-125 transition-transform duration-500 hover:scale-150" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Ajax Video DoorBell</h3>
                            <div className="text-sm font-semibold text-[#FBBC05] mb-4 uppercase tracking-wider">Smart Access</div>
                            <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                                See and speak to visitors from anywhere via the Ajax app. Features built-in AI to help distinguish people from animals, reducing unwanted notifications. Integrates cleanly with the Ajax alarm system.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Monitoring Options */}
            <section className="py-20 bg-white/5 border-y border-white/10">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Monitoring Options</h2>
                        <p className="text-gray-300">From app self-monitoring to professional alarm handling, choose the level of support that suits how you use the property.</p>
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

            {/* App Control */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-4">Ajax App — Full Control</h2>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    The Ajax Security System app gives you complete control of your alarm from anywhere in the world. Arm, disarm, check status, view photos, and receive instant alerts — all on iOS or Android.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        "Arm & disarm remotely from anywhere",
                                        "Instant push alerts on any sensor event",
                                        "View MotionCam verification photos",
                                        "Share access with family or keyholders",
                                        "Full system status at a glance",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                                            <CheckCircle2 className="h-4 w-4 text-white flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex items-center justify-center">
                                <img src="/images/Hub2Plus.jpeg" alt="Ajax Hub 2 Plus control panel" className="h-52 w-auto object-contain" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Residential & Commercial */}
            <section className="py-16 bg-white/5 border-y border-white/10">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold mb-4">Residential & Commercial Alarms</h2>
                        <p className="text-gray-300">Ajax alarm systems are flexible enough for homes, shops, offices, warehouses, HMOs, yards and commercial units — with the design matched to the risk and how the property is used.</p>
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
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white flex-shrink-0" /> Wireless Ajax systems for homes, flats and rental properties</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white flex-shrink-0" /> Pet immunity up to 20kg to help reduce unwanted activations</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white flex-shrink-0" /> App control for arm/disarm/alerts</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white flex-shrink-0" /> Suitable for houses, flats & rental properties</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white flex-shrink-0" /> Integrates with CCTV & smart automation</li>
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
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white flex-shrink-0" /> Stronger commercial alarm designs where the risk is higher</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white flex-shrink-0" /> Insurance-conscious system design</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white flex-shrink-0" /> Professional monitoring options</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white flex-shrink-0" /> Suitable for offices, warehouses & retail</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white flex-shrink-0" /> Alarm, CCTV, fire detection and maintenance support from one company</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* System Add-ons */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">System Add-ons</h2>
                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <div className="space-y-4">
                            <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 shadow-lg">
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/pbD3b2awVG0?si=mOupU2K4S7X0A4wl" title="Ajax Video Doorbell" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0"></iframe>
                            </div>
                            <h3 className="text-xl font-bold text-center">Video Doorbell</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 shadow-lg">
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/VN6aPF8a3Gc?si=TkpUGd717Sj5GlWE" title="Ajax Touch Keypad" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0"></iframe>
                            </div>
                            <h3 className="text-xl font-bold text-center">Touch Keypad</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why NOX */}
            <section className="py-16 bg-white/5 border-y border-white/10">
                <div className="container mx-auto px-4 max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Why Choose NOX for Intruder Alarms?</h2>
                    <div className="grid sm:grid-cols-2 gap-4 text-left">
                        {[
                            "No unnecessary contracts — you own the system",
                            "Local Chesterfield-based engineers",
                            "Clean, hidden cable installs — always",
                            "Ajax-authorised installers",
                            "Free site survey and no-obligation quote",
                            "Free installation with any alarm maintenance plan",
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
                    <h2 className="text-2xl font-bold mb-4">Ready to Get the Right Alarm System Designed?</h2>
                    <p className="text-gray-300 mb-6">Free site survey, clear advice and a no-obligation quote from a local NOX engineer.</p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        <Link href="/get-quote">
                            <Button size="lg" className="h-14 px-8 bg-white text-black hover:bg-gray-200 font-bold">
                                Free Security Survey <ArrowRight className="h-5 w-5 ml-2" />
                            </Button>
                        </Link>
                        <a href="https://wa.me/447882959297" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="h-14 px-6 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold">
                                <MessageCircle className="h-5 w-5 mr-2" /> WhatsApp Us
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <CommercialSectors />
            <ServiceFAQ faqs={[
                { q: "How much does an Ajax alarm system cost?", a: "A typical home Ajax alarm installation starts from around £500–£800 depending on the size of the property and number of sensors required. Commercial systems vary based on complexity. We provide free, no-obligation site surveys and transparent quotes — call or WhatsApp us for a fast estimate." },
                { q: "How long does installation take?", a: "Most domestic Ajax alarm installations take 4–6 hours for a standard 3–4 bedroom property. Larger or commercial systems may take a full day. We leave no mess and fully brief you on the app and system operation before we leave." },
                { q: "Do I need a contract?", a: "No. You own your system outright from day one. We offer optional ongoing service plans for monitoring, maintenance, and warranty extension — but these are entirely your choice. No lock-ins." },
                { q: "Is the app easy to use?", a: "Yes. The Ajax Security System app (iOS and Android) is extremely intuitive. You can arm, disarm, check sensor status, view event history, and receive instant push alerts. We walk you through it fully on install day." },
                { q: "Can you provide professional monitoring?", a: "Yes. Where required, we can provide professional monitoring through our monitoring partner. Photo verification can help confirm what has triggered the alarm and reduce unnecessary call-outs." },
                { q: "Can you take over an existing alarm system?", a: "In many cases yes — especially if it's already an Ajax system. For non-Ajax systems, we assess the existing installation and advise whether to retrofit, upgrade, or replace. We'll always give you honest advice." },
                { q: "Are Ajax systems suitable for commercial properties?", a: "Yes, Ajax can be a strong option for many commercial properties when the system is designed correctly. We install across warehouses, offices, shops, industrial units, HMOs and farms, and we always ask about insurance requirements before recommending the final design." },
            ]} />
            <CTASection />
            <Footer />
            <StickyContactButtons />
        </main>
    )
}
