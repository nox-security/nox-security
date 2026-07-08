import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, MapPin, HeartHandshake, Wrench, Star, Shield, Gift } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const reasons = [
  {
    icon: CheckCircle2,
    title: "No Unnecessary Contracts",
    description: "We don't lock you in. Ongoing support is your choice — never forced upon you.",
  },
  {
    icon: Shield,
    title: "You Own Your System",
    description: "The equipment is yours from day one. No rental fees, no ownership restrictions.",
  },
  {
    icon: MapPin,
    title: "Genuinely Local",
    description: "Based in Chesterfield. We know the area, respond fast, and we're always nearby.",
  },
  {
    icon: HeartHandshake,
    title: "Honest Advice",
    description: "We tell you what you actually need — not what earns us the most. Zero pressure, always.",
  },
  {
    icon: Wrench,
    title: "Clean, Tidy Installs",
    description: "Every cable hidden, every sensor placed correctly, every job left spotless before we leave.",
  },
  {
    icon: Star,
    title: "Quality Equipment Only",
    description: "Ajax alarms, professional CCTV and fire safety equipment specified properly around the building — not chosen because it is cheapest.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 !bg-black text-white relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Why Choose NOX?</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Local, honest, professional — protecting homes and businesses across Chesterfield, Sheffield, and Derbyshire properly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <Card key={index} className="border border-white/10 bg-black text-white hover:border-white transition-colors hover-lift">
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 rounded-lg bg-white text-black flex items-center justify-center">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold">{reason.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{reason.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Free installation promo */}
        <div className="mt-16 bg-white text-black rounded-2xl p-8 md:p-10 text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Gift className="h-8 w-8" />
            <h3 className="text-2xl md:text-3xl font-bold">Free Standard Installation with Selected Service Plans</h3>
          </div>
          <p className="text-gray-700 mb-6 text-lg">
            Choose a suitable ongoing service plan and standard installation may be included. We'll explain the plan, equipment and monthly costs clearly before you commit.
          </p>
          <Link href="/get-quote">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 font-bold h-12 px-8">
              Claim This Offer →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
