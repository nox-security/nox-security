import Link from "next/link"
import { ArrowRight } from "lucide-react"

const installs = [
    "/images/resent-installation/0AED4F55-020E-40A5-8823-5BC499AA2015.png",
    "/images/resent-installation/0C77818F-3EB9-4DD9-8ECA-6003107DBA59.png",
    "/images/resent-installation/255452F4-9C11-41C6-AF2A-FC26E2285C8F.png",
    "/images/resent-installation/35A2E482-E431-4048-AE93-F138FEED7100.png",
    "/images/resent-installation/5076E57A-3580-4C83-A1EB-090B7AF05D14.png",
    "/images/resent-installation/54AC9D7E-E96B-4E59-AE60-11E901A196D9.png",
    "/images/resent-installation/5565AAD0-9F37-4C18-9E4A-1147A4389378.png",
    "/images/resent-installation/57E4FDA7-0863-4C16-B327-DD248E0E2D9C.png",
    "/images/resent-installation/5BA51E17-D26B-4EFC-8CAD-5C2B59F0613D.png",
    "/images/resent-installation/68645CDC-8A63-4436-AB11-64ED41EF816D.jpeg",
    "/images/resent-installation/6D03473F-95E6-4883-91F2-C24367A665B2.jpeg",
    "/images/resent-installation/74E13C7F-8EB7-41EC-B668-2426AE201EC1.png",
    "/images/resent-installation/7A22DFA9-C5DE-4E26-8B68-52E8E3CAB865.png",
    "/images/resent-installation/8DEEA5A9-CCAA-45D5-AD31-8414923CFB73.png",
    "/images/resent-installation/8F92B8AB-DE21-4FF1-B93F-EC455580264F.png",
    "/images/resent-installation/91461B8C-7135-4465-9374-2AC8701DDFBC.png",
    "/images/resent-installation/946499F0-C793-4BFE-B424-64D8D831C141.png",
    "/images/resent-installation/9EF0572E-18C2-4548-967A-D52B59CF05B5.png",
    "/images/resent-installation/AC7202A2-6B69-47F4-AD11-55CECD9E6C27.jpeg",
    "/images/resent-installation/B17CAA16-7E26-4342-BD6F-B777359E2BEB.png",
    "/images/resent-installation/B563DA1D-D64B-4DF3-8058-BC6E01154EC3.png",
    "/images/resent-installation/BAB905A6-69B6-4DDE-9709-0E4608429698.png",
    "/images/resent-installation/E11ABC2F-17E7-4198-A85F-872CDFDAFEA8.png",
    "/images/resent-installation/E6B4D998-0805-4B7E-8532-CC491C881B57.jpeg",
    "/images/resent-installation/E7888963-5290-4D35-B132-083BBBF2CEAD.png",
    "/images/resent-installation/F5B46861-7E5F-416A-BD90-69C544691E7A.png",
    "/images/resent-installation/FDE72BDA-DB18-4C67-B0F8-4FA80371D6EF.png",
]

export default function InstallGallery() {
    return (
        <section className="py-16 bg-black text-white border-t border-white/10">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-1">Recent Installs</h2>
                        <p className="text-gray-400 text-sm">Real systems. Real customers. Across Chesterfield, Sheffield &amp; Derbyshire.</p>
                    </div>
                    <Link href="/reviews" className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-gray-300 transition-colors">
                        See customer reviews <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                    {installs.map((imagePath, i) => (
                        <div key={i} className="relative group rounded-xl overflow-hidden aspect-[4/3] bg-gray-900 border border-white/10">
                            <img
                                src={imagePath}
                                alt={`Recent security installation ${i + 1}`}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
