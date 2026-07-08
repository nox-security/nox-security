import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const caseStudies = [
  {
    title: "Retail Store Protection",
    location: "Chesterfield Town Centre",
    challenge: "Repeated break-in attempts at night",
    solution: "8-camera CCTV system + Ajax alarm + Professional alarm monitoring",
    result: "Clearer coverage, quicker awareness and a more practical escalation process when alarms trigger.",
    image: "/images/cctv-systems-image.png",
  },
  {
    title: "Family Home Security",
    location: "Sheffield Residential",
    challenge: "Needed smart security that's easy for elderly parents",
    solution: "Ajax smart alarm system + mobile app + key fob",
    result: "Simple operation. Parents feel confident and protected.",
    image: "/images/2Motioncam.jpg",
  },
  {
    title: "Industrial Warehouse",
    location: "Derbyshire Industrial Estate",
    challenge: "Large perimeter to secure with limited budget",
    solution: "16-camera system + motion detection + remote monitoring",
    result: "Stronger site coverage with clearer alerts and better visibility across vulnerable areas.",
    image: "/images/AjaxDualcurtain.jpg",
  },
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 !bg-black text-white relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Real Results for Real People</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            See how we've helped homes and businesses in your area stay protected.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="overflow-hidden border border-white/10 bg-black text-white hover:border-white transition-colors group">
              <div className="aspect-video bg-gray-900 border-b border-white/10">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{study.title}</h3>
                  <p className="text-sm text-gray-400">{study.location}</p>
                </div>

                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-semibold mb-1 text-gray-300">Challenge:</div>
                    <div className="text-gray-400">{study.challenge}</div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1 text-gray-300">Solution:</div>
                    <div className="text-gray-400">{study.solution}</div>
                  </div>
                  <div className="pt-2 border-t border-white/10">
                    <div className="font-semibold text-white">✓ Result:</div>
                    <div className="text-gray-300 mt-1">{study.result}</div>
                  </div>
                </div>
                <Link href="/contact" className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all cursor-pointer text-white">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
