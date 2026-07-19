import { ShieldCheck, Home, Package, Wrench, Bell, MessageSquare, BadgeCheck } from "lucide-react"

const signals = [
    {
        icon: ShieldCheck,
        title: "No Unnecessary Contracts",
        desc: "You own your system outright. We only recommend ongoing plans when they genuinely add value.",
    },
    {
        icon: Home,
        title: "Local Company",
        desc: "Chesterfield-based engineers with a reputation built on neat work, honest advice and reliable aftercare.",
    },
    {
        icon: Package,
        title: "Quality Equipment",
        desc: "We install equipment we would trust in our own homes and businesses: reliable, proven and built to last.",
    },
    {
        icon: Wrench,
        title: "Installed Properly",
        desc: "Clean installations, attention to detail and systems designed to work reliably from day one.",
    },
    {
        icon: Bell,
        title: "Alarm Monitoring",
        desc: "Optional professional monitoring for customers who want alarms handled quickly when they cannot respond themselves.",
    },
    {
        icon: MessageSquare,
        title: "Honest Advice",
        desc: "No pressure and no padding. We recommend what genuinely suits the property, risk and budget.",
    },
    {
        icon: BadgeCheck,
        title: "5-Star Rated",
        desc: "Genuine Google reviews from homeowners and businesses across Derbyshire.",
    },
]

export default function TrustSignals() {
    return (
        <section className="py-16 bg-black border-y border-white/10 text-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">Why Customers Choose NOX</h2>
                    <p className="text-gray-400">Straight advice, proper installation and systems built around the way your property actually works.</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                    {signals.slice(0, 4).map((s, i) => {
                        const Icon = s.icon
                        return (
                            <div key={i} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-5 hover:border-white/30 transition-colors">
                                <div className="w-10 h-10 bg-white text-black rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Icon className="h-5 w-5" />
                                </div>
                                <div>
                                    <div className="font-bold text-white text-sm mb-0.5">{s.title}</div>
                                    <div className="text-gray-400 text-xs leading-relaxed">{s.desc}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="grid sm:grid-cols-3 gap-4 max-w-6xl mx-auto mt-4">
                    {signals.slice(4).map((s, i) => {
                        const Icon = s.icon
                        return (
                            <div key={i} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-5 hover:border-white/30 transition-colors">
                                <div className="w-10 h-10 bg-white text-black rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Icon className="h-5 w-5" />
                                </div>
                                <div>
                                    <div className="font-bold text-white text-sm mb-0.5">{s.title}</div>
                                    <div className="text-gray-400 text-xs leading-relaxed">{s.desc}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
