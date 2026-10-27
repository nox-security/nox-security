import { Shield, Clock, Award, CheckCircle2, Star } from "lucide-react"

export default function TrustBar() {
  return (
    <section className="!bg-black py-8 border-y border-white/10 text-white relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          <div className="flex items-center gap-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <div>
              <div className="font-bold text-white text-sm">5.0 Google Rating</div>
              <div className="text-xs text-gray-400">Verified reviews</div>
            </div>
          </div>
          <div className="hidden md:block w-px h-8 bg-white/10"></div>
          <div className="flex items-center gap-3">
            <div className="text-2xl font-bold text-white">10+</div>
            <div>
              <div className="text-sm font-medium text-white">Years Experience</div>
              <div className="text-xs text-gray-400">In the industry</div>
            </div>
          </div>
          <div className="hidden md:block w-px h-8 bg-white/10"></div>
          <div className="flex items-center gap-3">
            <Clock className="h-6 w-6 text-white" />
            <div>
              <div className="text-sm font-medium text-white">24/7 Monitoring</div>
              <div className="text-xs text-gray-400">optional support</div>
            </div>
          </div>
          <div className="hidden md:block w-px h-8 bg-white/10"></div>
          <div className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-white" />
            <div>
              <div className="text-sm font-medium text-white">Risk-Based Design</div>
              <div className="text-xs text-gray-400">homes & businesses</div>
            </div>
          </div>
          <div className="hidden md:block w-px h-8 bg-white/10"></div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-6 w-6 text-white" />
            <div>
              <div className="text-sm font-medium text-white">Free Standard Install</div>
              <div className="text-xs text-gray-400">selected support plans</div>
            </div>
          </div>
          <div className="hidden md:block w-px h-8 bg-white/10"></div>
          <div className="flex items-center gap-3">
            <Award className="h-6 w-6 text-white" />
            <div>
              <div className="text-sm font-medium text-white">Authorised Installers</div>
              <div className="text-xs text-gray-400">Ajax · CCTV · Fire</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
