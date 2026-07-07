import Link from "next/link"
import { ArrowRight, Bell, Camera, Flame, Zap, Smartphone, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = [
    {
        icon: Bell,
        label: "Intruder",
        desc: "Grade 2 & 3 wireless alarms with photo verification and app control.",
        href: "/systems/intrusion-alarms",
    },
    {
        icon: Camera,
        label: "CCTV",
        desc: "Ajax cameras, NVR, and DoorBell integrated with your alarm system.",
        href: "/systems/cctv",
    },
    {
        icon: Flame,
        label: "Fire",
        desc: "EN54-certified wireless fire detection with instant app alerts.",
        href: "/systems/fire-safety",
    },
    {
        icon: Zap,
        label: "Smart Automation",
        desc: "Smart lighting, water protection, and automation scenarios.",
        href: "/systems/smart-automation",
    },
]

export default function AjaxEcosystem() {
    return (
        <section className="py-20 bg-black text-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <img
                            src="/images/logo-ajax-authorized-installation-company-en-wh.png"
                            alt="Ajax Authorised Installation Company"
                            className="h-4"
                        />
                        Ajax Authorised · 4,500,000+ Protected Worldwide
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        The Ajax Smart Security Platform
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Ajax is our premium partner for smart, wireless security — covering intruder alarms, CCTV, fire protection, and automation in one app. We also install Hikvision, Texecom, Pyronix, Honeywell, and other leading brands where required.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
                    {categories.map((cat, i) => {
                        const Icon = cat.icon
                        return (
                            <Link key={i} href={cat.href} className="group">
                                <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-white/40 transition-all duration-300 hover:-translate-y-1 h-full">
                                    <div className="w-14 h-14 bg-white text-black rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                                        <Icon className="h-7 w-7" />
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">{cat.label}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-3">{cat.desc}</p>
                                    <div className="flex items-center justify-center gap-1 text-sm font-semibold text-white group-hover:gap-2 transition-all">
                                        Learn More <ArrowRight className="h-3 w-3" />
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>

                {/* Ecosystem benefits row */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-white text-black rounded-lg flex items-center justify-center flex-shrink-0">
                                <Smartphone className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-bold mb-1">One App</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">Manage every Ajax device — alarm, cameras, fire, and automation — from the Ajax Security System app on iOS or Android.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-white text-black rounded-lg flex items-center justify-center flex-shrink-0">
                                <Bell className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-bold mb-1">Instant Alerts</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">Real-time push notifications for every system event — intrusion, fire, leak, or device trigger — wherever you are in the world.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-white text-black rounded-lg flex items-center justify-center flex-shrink-0">
                                <Shield className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-bold mb-1">Grade 2 & 3 Certified</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">Ajax systems are EN50131 Grade 2 & 3 certified — recognised by insurers and police forces across the UK and Europe.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-10">
                    <Link href="/systems">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold px-8">
                            View All Systems <ArrowRight className="h-5 w-5 ml-2" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
