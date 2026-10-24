import { Building2, Home, Warehouse, ShoppingBag, Factory, Tractor, Users, Key } from "lucide-react"
import Link from "next/link"

const residential = [
    { icon: Home, label: "Houses & Bungalows" },
    { icon: Key, label: "Rental Properties" },
    { icon: Users, label: "HMOs" },
    { icon: Key, label: "Airbnb & Holiday Lets" },
]

const commercial = [
    { icon: Building2, label: "Offices & Business Premises" },
    { icon: ShoppingBag, label: "Shops & Retail Units" },
    { icon: Warehouse, label: "Warehouses & Logistics" },
    { icon: Factory, label: "Industrial Units & Factories" },
    { icon: Tractor, label: "Farms & Rural Properties" },
    { icon: Building2, label: "Care Homes & Schools" },
]

export default function CommercialSectors() {
    return (
        <section className="py-16 bg-black border-y border-white/10 text-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">Residential &amp; Commercial Installation</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We install for homeowners, landlords, and businesses of all sizes — from a single-home alarm to a full multi-site commercial CCTV and fire safety system.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Residential */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-10 h-10 bg-white text-black rounded-lg flex items-center justify-center flex-shrink-0">
                                <Home className="h-5 w-5" />
                            </div>
                            <div>
                                <div className="font-bold text-lg">Residential</div>
                                <div className="text-gray-400 text-sm">Homes, rentals & landlords</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            {residential.map((item, i) => {
                                const Icon = item.icon
                                return (
                                    <div key={i} className="flex items-center gap-3 bg-black border border-white/10 rounded-lg px-4 py-3">
                                        <Icon className="h-4 w-4 text-gray-400 flex-shrink-0" />
                                        <span className="text-sm text-gray-300">{item.label}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Commercial */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-10 h-10 bg-white text-black rounded-lg flex items-center justify-center flex-shrink-0">
                                <Building2 className="h-5 w-5" />
                            </div>
                            <div>
                                <div className="font-bold text-lg">Commercial</div>
                                <div className="text-gray-400 text-sm">Businesses, premises & industrial</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            {commercial.map((item, i) => {
                                const Icon = item.icon
                                return (
                                    <div key={i} className="flex items-center gap-3 bg-black border border-white/10 rounded-lg px-4 py-3">
                                        <Icon className="h-4 w-4 text-gray-400 flex-shrink-0" />
                                        <span className="text-sm text-gray-300">{item.label}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <p className="text-center text-gray-500 text-sm mt-6">
                    Not sure what you need? <Link href="/get-quote" className="text-white underline hover:text-gray-300 transition-colors">Request a free site survey</Link> — we'll advise you honestly.
                </p>
            </div>
        </section>
    )
}
