import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Wrench, HeartHandshake, CheckCircle2, MapPin, Star, Phone, MessageCircle } from "lucide-react"
import CTASection from "@/components/cta-section"
import StickyContactButtons from "@/components/sticky-contact-buttons"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "Why Choose NOX Fire & Security | Chesterfield & Derbyshire",
    description: "No contracts, you own your system, local engineers, honest advice, clean installs, premium Ajax, Hikvision & professional security equipment. Serving Chesterfield, Sheffield & Derbyshire.",
    alternates: { canonical: "https://nox-security.co.uk/about-us" },
}

const reasons = [
    {
        icon: CheckCircle2,
        title: "No Unnecessary Contracts",
        desc: "We don't lock you in. You choose ongoing support — it's never forced.",
    },
    {
        icon: Shield,
        title: "You Own Your System",
        desc: "The equipment is yours from day one. No rental, no strings.",
    },
    {
        icon: MapPin,
        title: "Genuinely Local",
        desc: "Based in Chesterfield. We know the area, respond quickly where we can and stay close enough to support our customers properly.",
    },
    {
        icon: HeartHandshake,
        title: "Honest Advice",
        desc: "We tell you what you need — not what makes us the most money. No pressure, ever.",
    },
    {
        icon: Wrench,
        title: "Clean, Tidy Installs",
        desc: "Every cable hidden, every sensor placed properly, every job left spotless.",
    },
    {
        icon: Star,
        title: "Quality Equipment Only",
        desc: "Ajax alarms, professional CCTV and fire safety equipment specified properly around the building — not chosen because it is cheapest.",
    },
]

const testimonials = [
    { name: "James H.", location: "Chesterfield", text: "Absolutely superb service. The Ajax alarm installation was carried out to an excellent standard. Neat, tidy, and they explained everything on the app.", rating: 5 },
    { name: "Mark T.", location: "Sheffield", text: "Very professional from survey to installation. The CCTV works brilliantly. Highly recommend for any home security needs.", rating: 5 },
    { name: "Sarah W.", location: "Derbyshire", text: "Clear quote, no hidden extras. Engineers arrived on time and left no mess. A proper job from start to finish.", rating: 5 },
]

export default function WhyNOXPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Header />

            {/* Hero */}
            <section className="relative bg-black text-white py-20 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.04)_0%,transparent_60%)]" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
                            Founders Story
                        </h1>
                        <div className="text-lg md:text-xl text-gray-300 leading-relaxed space-y-6 text-left">
                            <p>
                                <strong>NOX Fire &amp; Security started with a simple idea.</strong>
                            </p>
                            <p>
                                After years working inside one of Europe's largest security companies, Joseph and James saw first-hand what customers actually wanted from a security company and where the industry was getting it wrong.
                            </p>
                            <p>
                                Too many people were being pushed into long contracts, overpriced subscription plans and systems that didn't truly suit their property or lifestyle. Over a combined 8 years within the security industry, we saw the focus shift from protecting people properly to simply selling monthly payments.
                            </p>
                            <p>
                                <strong>We built NOX to change that.</strong>
                            </p>
                            <p>
                                As a local independent company based in Chesterfield, our approach is simple: honest advice, modern systems, clean installations and security that genuinely works for the customer.
                            </p>
                            <p>
                                Joseph leads the sales and customer side of the business, working closely with homeowners and businesses to design the right solution for each property. James leads operations and installations, ensuring every system is installed properly, professionally and to the standard we would expect ourselves.
                            </p>
                            <p>
                                Together, we combine modern security technology with a more personal and flexible approach. No pressure selling. No unnecessary contracts. Just reliable protection tailored to each customer, property and budget.
                            </p>
                            <p>
                                From residential alarm upgrades to larger commercial installations, every project is approached with the same level of care, professionalism and attention to detail. We focus on practical protection that is reliable, compliant where required, tailored to the property and built around what genuinely works best for the customer.
                            </p>
                            <p className="text-white font-bold text-xl md:text-2xl pt-4">
                                We're not trying to be the biggest national company.<br />
                                We're focused on becoming the most trusted local security company across Chesterfield, Derbyshire and the surrounding areas.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3 justify-center pt-2">
                            <Link href="/get-quote">
                                <Button size="lg" className="h-14 px-8 bg-white text-black hover:bg-gray-200 font-bold animate-pulse-glow">
                                    Free Security Survey
                                </Button>
                            </Link>
                            <a href="tel:07882959297">
                                <Button size="lg" className="h-14 px-6 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold">
                                    <Phone className="h-5 w-5 mr-2" /> Call Now
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why NOX Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">What Makes Us Different</h2>
                        <p className="text-gray-300">A clear, local approach to fire and security for homes, landlords and businesses across Chesterfield and Derbyshire.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {reasons.map((r, i) => {
                            const Icon = r.icon
                            return (
                                <Card key={i} className="border border-white/10 bg-black text-white hover:border-white transition-colors hover-lift">
                                    <CardContent className="p-6 space-y-4">
                                        <div className="w-14 h-14 rounded-lg bg-white text-black flex items-center justify-center">
                                            <Icon className="h-7 w-7" />
                                        </div>
                                        <h3 className="text-xl font-bold">{r.title}</h3>
                                        <p className="text-gray-300 leading-relaxed">{r.desc}</p>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>

                    {/* Free installation banner */}
                    <div className="mt-12 bg-white text-black rounded-2xl p-8 text-center max-w-4xl mx-auto">
                        <div className="text-2xl font-bold mb-2">🎁 Free Standard Installation with Selected Service Plans</div>
                        <p className="text-gray-700 mb-4">Choose a suitable ongoing service plan and standard installation may be included. We’ll explain the equipment, plan and costs clearly before you commit.</p>
                        <Link href="/get-quote">
                            <Button size="lg" className="bg-black text-white hover:bg-gray-800 font-bold h-12">
                                Ask About This Offer
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-20 bg-white/5 border-y border-white/10">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Team</h2>
                        <p className="text-gray-300">Two directors who actually show up, do the work, and stand behind every installation.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <Card className="border border-white/10 shadow-lg bg-black overflow-hidden hover-lift transition-all duration-300">
                            <div className="aspect-[4/5] relative bg-neutral-900 border-b border-white/10 overflow-hidden">
                                <Image
                                    src="/images/team/E7DC4C2A-A4F8-4EC4-B483-2F49343BD8C7.webp"
                                    alt="James Rigby — Operations Director NOX Fire & Security"
                                    fill
                                    className="object-cover object-[50%_10%] scale-[1.95]"
                                />
                            </div>
                            <CardContent className="p-8 text-center bg-black">
                                <h3 className="text-2xl font-bold mb-2 text-white">James Rigby</h3>
                                <div className="text-sm font-semibold text-[#FBBC05] uppercase tracking-wider mb-6">Operations Director</div>
                                <p className="text-gray-300 leading-relaxed">
                                    James oversees installations, technical design, and compliance — ensuring every system is fitted safely, cleanly, and fully tested before we leave.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border border-white/10 shadow-lg bg-black overflow-hidden hover-lift transition-all duration-300">
                            <div className="aspect-[4/5] relative bg-neutral-900 border-b border-white/10">
                                <Image
                                    src="/images/team/124080D8-A51E-43FC-BD1D-991478E87DA9.jpeg"
                                    alt="Joseph Robb — Managing Director NOX Fire & Security"
                                    fill
                                    className="object-cover object-top"
                                />
                            </div>
                            <CardContent className="p-8 text-center bg-black">
                                <h3 className="text-2xl font-bold mb-2 text-white">Joseph Robb</h3>
                                <div className="text-sm font-semibold text-[#FBBC05] uppercase tracking-wider mb-6">Managing Director</div>
                                <p className="text-gray-300 leading-relaxed">
                                    Joseph leads consultations and designs the right system for each property. Honest recommendations, zero pressure — every time.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Reviews */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
                        <p className="text-gray-300">Real reviews from real customers across Chesterfield, Sheffield, and Derbyshire.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {testimonials.map((t, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 hover-lift">
                                <div className="flex gap-1 mb-3">
                                    {[...Array(t.rating)].map((_, j) => (
                                        <Star key={j} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-gray-300 italic mb-4 leading-relaxed">"{t.text}"</p>
                                <div className="font-bold text-white">{t.name}</div>
                                <div className="text-sm text-gray-400">{t.location}</div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <a href="https://g.page/r/CUdyqRh0RFeXEAE/review" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-black font-semibold">
                                Read All Google Reviews →
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
