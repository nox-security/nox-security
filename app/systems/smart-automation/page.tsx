import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CTASection from "@/components/cta-section"
import StickyContactButtons from "@/components/sticky-contact-buttons"
import { Smartphone, Zap, Droplets, Thermometer, CheckCircle2, Phone, MessageCircle, ArrowRight, Star, Shield, Lightbulb, Wifi, Home, Building2, Bell, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "Smart Home Automation Chesterfield, Sheffield & Derbyshire | Ajax | NOX Fire & Security",
    description: "Ajax smart home automation — smart lighting, water leak protection, remote control, and full security integration. Chesterfield, Sheffield & Derbyshire. Free site survey.",
    keywords: "smart home automation Chesterfield, Ajax automation Derbyshire, smart lighting Sheffield, water leak protection, smart home security, Ajax smart home",
    alternates: { canonical: "https://nox-security.co.uk/systems/smart-automation" },
}

export default function SmartAutomationPage() {
    const automationProducts = [
        {
            name: "Ajax LightSwitch",
            type: "Smart Light Switch",
            desc: "Touch-sensitive smart light switches that integrate directly into your Ajax security system. Control lighting remotely, automate with scenarios, and use as a deterrent when away from home.",
            image: "/images/AjaxLightswitch.png",
        },
        {
            name: "Ajax WaterStop",
            type: "Water Shutoff Valve",
            desc: "Wireless remotely controlled water shutoff valve. Paired with LeaksProtect detectors, it can close the water supply when a leak is detected to help limit damage.",
            image: "/images/AjaxWaterstop.png",
        },
        {
            name: "Ajax LeaksProtect",
            type: "Water Leak Detector",
            desc: "Ultra-flat wireless water leak sensor. Placed under sinks, appliances, and boilers. Triggers instant app alerts and can automatically close Ajax WaterStop valves on detection.",
            image: "/images/AjaxWaterstop.png",
        },
        {
            name: "Ajax DoorBell",
            type: "Smart Video Doorbell",
            desc: "HD video doorbell with two-way audio integrated into your Ajax system. See and speak with visitors remotely, receive instant alerts, and review footage — all from the Ajax app.",
            image: "/images/AjaxDoorbell.jpeg",
        },
        {
            name: "Ajax WallSwitch",
            type: "Smart Power Relay",
            desc: "Wireless 110/230V relay to remotely control any electrical load — appliances, gates, heating systems, and more. Fully controllable via the Ajax app with automation scenarios.",
            image: "/images/AjaxAutomation.png",
        },
        {
            name: "Ajax Scenarios",
            type: "Smart Automation Engine",
            desc: "Create powerful if/then automation rules in the Ajax app. Auto-disarm when unlocking, trigger lights when motion detected, cut water when alarm activates — limitless smart automation.",
            image: "/images/AjaxAutomation.png",
        },
    ]

    const features = [
        { icon: Wifi, title: "One App Control", desc: "Manage your entire home — security, lighting, water, and access — from the Ajax Security System app on iOS or Android." },
        { icon: Zap, title: "Automation Scenarios", desc: "Set intelligent if/then rules. Lights on when disarming. Water off when alarm triggers. Heating off when you leave." },
        { icon: Droplets, title: "Water Leak Protection", desc: "LeaksProtect detectors and WaterStop valves help reduce the risk of serious water damage by reacting quickly to leaks." },
        { icon: Bell, title: "Instant Smart Alerts", desc: "Real-time push notifications for every event — motion, leak, door opened, device triggered. Know everything, instantly." },
    ]

    const ecosystemIntegrations = [
        { icon: Shield, title: "Intruder Alarm", desc: "Automation triggers based on your alarm status — arm, disarm, breach, or panic events.", href: "/systems/intrusion-alarms" },
        { icon: Settings, title: "CCTV", desc: "See who's at the door and trigger lights or unlock gates automatically from the Ajax app.", href: "/systems/cctv" },
        { icon: Thermometer, title: "Fire Safety", desc: "Fire alarm triggers automatic alerts to all connected devices and can control escape route lighting.", href: "/systems/fire-safety" },
        { icon: Lightbulb, title: "Emergency Lighting", desc: "Integrate emergency lighting with your fire alarm and automation scenarios for full life safety.", href: "/systems/emergency-lighting" },
    ]

    const testimonials = [
        { name: "James H.", location: "Chesterfield", text: "Having the alarm, CCTV, and smart lighting all in one app is genuinely brilliant. Set up scenarios so lights come on when we disarm — makes it feel like you're home even when you're not.", rating: 5 },
        { name: "Sarah W.", location: "Derbyshire", text: "The water leak sensor saved us from a burst washing machine pipe. Got the alert on my phone, closed the valve remotely, and avoided what could've been thousands in damage.", rating: 5 },
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
                        <span className="text-white">Smart Automation</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm font-medium">
                                <img src="/images/logo-ajax-authorized-installation-company-en-wh.png" alt="Ajax Authorised" className="h-4" />
                                Ajax Authorised · Smart Automation
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                Smart Home Automation in Chesterfield & Derbyshire
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Ajax smart automation brings your security system, lighting, water protection, and smart devices together in one app. One platform. Total control. Serving Chesterfield, Sheffield, and across Derbyshire.
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
                                src="https://www.youtube.com/embed/hdz927FypAE?si=HYIHZ4dn4z3FDafE"
                                title="Ajax Smart Home Automation"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute inset-0"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Strip */}
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

            {/* Automation Products */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm font-medium mb-4">
                            <img src="/images/logo-ajax-authorized-installation-company-en-wh.png" alt="Ajax" className="h-4" />
                            Ajax Comfort & Automation
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Smart Devices We Install</h2>
                        <p className="text-gray-300 leading-relaxed">Every Ajax automation device integrates seamlessly with your security system — managed from the same app as your alarms, cameras, and sensors.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {automationProducts.map((p, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-white/30 transition-colors">
                                <div className="aspect-video p-2 flex items-center justify-center overflow-hidden">
                                    <img src={p.image} alt={p.name} className="w-full h-full object-contain scale-125 transition-transform duration-500 hover:scale-150" />
                                </div>
                                <div className="p-6">
                                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">{p.type}</div>
                                    <h3 className="text-lg font-bold mb-2">{p.name}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ajax Ecosystem */}
            <section className="py-20 bg-white/5 border-y border-white/10">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">The Ajax Ecosystem</h2>
                        <p className="text-gray-300 leading-relaxed">Smart automation is most powerful when it's part of a complete security system. Ajax lets you combine intruder alarms, CCTV, fire protection, and automation — all in one platform.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {ecosystemIntegrations.map((item, i) => {
                            const Icon = item.icon
                            return (
                                <Link key={i} href={item.href} className="group">
                                    <div className="bg-black border border-white/10 rounded-xl p-6 text-center hover:border-white/40 transition-colors h-full">
                                        <div className="w-12 h-12 bg-white text-black rounded-xl flex items-center justify-center mx-auto mb-4">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <h3 className="text-base font-bold mb-2">{item.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                        <div className="flex items-center justify-center gap-1 mt-3 text-sm font-semibold text-white group-hover:gap-2 transition-all">
                                            Learn More <ArrowRight className="h-3 w-3" />
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>

                    {/* One app callout */}
                    <div className="mt-12 bg-black border border-white/10 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">One App. Every System.</h3>
                                <p className="text-gray-300 leading-relaxed mb-4">
                                    The Ajax Security System app lets you manage your intruder alarm, CCTV cameras, fire detectors, smart lighting, water sensors, and automation scenarios — all from one place on your phone.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-300">
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white flex-shrink-0" /> Arm & disarm your alarm from anywhere</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white flex-shrink-0" /> View live CCTV footage</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white flex-shrink-0" /> Control lights, switches & water remotely</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white flex-shrink-0" /> Receive instant alerts for every event</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white flex-shrink-0" /> Set automation scenarios & schedules</li>
                                </ul>
                            </div>
                            <div className="flex items-center justify-center">
                                <img src="/images/AjaxAutomation.png" alt="Ajax automation app" className="h-52 w-auto object-contain" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Install */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Install</h2>
                            <p className="text-gray-300 leading-relaxed mb-8">
                                We design and install Ajax smart automation systems for homes and businesses across Chesterfield, Sheffield, Dronfield, Matlock, Bakewell, Buxton, and throughout Derbyshire.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Ajax LightSwitch smart lighting controls",
                                    "Ajax WaterStop shutoff valves",
                                    "Ajax LeaksProtect water leak detectors",
                                    "Ajax DoorBell with two-way audio",
                                    "Ajax WallSwitch power relay",
                                    "Ajax Scenarios automation setup",
                                    "Integration with existing Ajax alarm system",
                                    "Full app setup and configuration included",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300">
                                        <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                                <h3 className="text-xl font-bold mb-4">Residential & Commercial</h3>
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <Home className="h-4 w-4 text-white" />
                                            <span className="font-semibold text-sm">Residential</span>
                                        </div>
                                        <p className="text-gray-400 text-sm leading-relaxed">Smart lighting scenarios, flood protection for kitchens & bathrooms, doorbell integration, and automatic lighting when you arrive home.</p>
                                    </div>
                                    <div className="border-t border-white/10 pt-4">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Building2 className="h-4 w-4 text-white" />
                                            <span className="font-semibold text-sm">Commercial</span>
                                        </div>
                                        <p className="text-gray-400 text-sm leading-relaxed">Remote access control, lighting automation for unoccupied areas, water protection for server rooms, and integration with existing security systems.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                                <h3 className="text-xl font-bold mb-3">Benefits</h3>
                                <ul className="space-y-2 text-sm text-gray-300">
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white" /> Help limit costly water damage</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white" /> Reduce energy waste with smart lighting</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white" /> Deter intruders with automated lighting scenarios</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white" /> Everything managed from one app</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white" /> No separate smart home hub required</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why NOX */}
            <section className="py-16 bg-white/5 border-y border-white/10">
                <div className="container mx-auto px-4 max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Why Choose NOX for Smart Automation?</h2>
                    <div className="grid sm:grid-cols-2 gap-4 text-left">
                        {[
                            "Ajax authorised installation company",
                            "Local Chesterfield-based engineers",
                            "Clean, professional installs — always",
                            "Full app setup and training included",
                            "Free site survey and no-obligation quote",
                            "Integrate with existing Ajax security systems",
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
                    <h2 className="text-2xl font-bold mb-4">Ready to Automate Your Home or Business?</h2>
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

            <CTASection />
            <Footer />
            <StickyContactButtons />
        </main>
    )
}
