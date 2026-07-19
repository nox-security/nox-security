import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, MessageCircle, ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Subtle radial glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">Let's Design the Right System for Your Property</h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Tell us what you need protecting and we'll recommend the right alarm, CCTV, fire or maintenance solution without the sales pressure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link href="/get-quote">
              <Button size="lg" className="h-14 bg-white text-black hover:bg-gray-100 px-10 text-base font-bold">
                Request a Free Security Survey <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <a href="tel:07882959297">
              <Button size="lg" className="h-14 bg-white/10 text-white hover:bg-white/20 border border-white/20 px-8 text-base font-bold">
                <Phone className="h-5 w-5 mr-2" />
                07882 959 297
              </Button>
            </a>
            <a
              href="https://wa.me/447882959297"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="h-14 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 text-base font-bold"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp Us
              </Button>
            </a>
          </div>

          <p className="text-sm text-gray-400 pt-4">Available Mon-Fri 8am-6pm, Sat 9am-4pm • Emergency callouts 24/7</p>
        </div>
      </div>
    </section>
  )
}
