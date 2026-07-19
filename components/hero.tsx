"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Clock, Award, X, CheckCircle2, Zap, Building2, Phone, MessageCircle, Star } from "lucide-react"

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <>
      <section className="relative bg-black text-white py-16 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-7 animate-fade-in-up">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-sm text-gray-300 font-medium">
                  <Shield className="h-4 w-4" />
                  Fire & Security Specialists Across Chesterfield & Derbyshire
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                  Professional Fire & Security Systems Designed Around Your Property
                </h1>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-medium">
                  Designed properly. Installed properly. Supported properly.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="/get-quote">
                  <Button
                    size="lg"
                    className="h-14 px-8 bg-white text-black hover:bg-gray-200 font-bold text-base"
                  >
                    Free Security Survey →
                  </Button>
                </Link>
                <a href="tel:07882959297">
                  <Button
                    size="lg"
                    className="h-14 px-6 bg-transparent text-white border-2 border-white hover:bg-white hover:text-black font-bold text-base"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now
                  </Button>
                </a>
                <a href="https://wa.me/447882959297" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="h-14 px-6 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-base"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    WhatsApp
                  </Button>
                </a>
                <Link href="/reviews">
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-14 px-6 bg-transparent text-white border-white/40 hover:bg-white/10 font-bold text-base"
                  >
                    <Star className="h-5 w-5 mr-2 text-yellow-400" />
                    Reviews
                  </Button>
                </Link>
              </div>

            </div>

            {/* Hero Image/Video */}
            <div className="relative">
              <div
                className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-90 relative group cursor-pointer"
                onClick={() => setVideoOpen(true)}
              >
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors z-10">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/50 group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                  </div>
                </div>
                <img
                  src="/images/House-Full-HD-1024x602.webp"
                  alt="Professional Security Installation by NOX Fire & Security Chesterfield"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Trust Strip */}
          <div className="flex flex-col xl:flex-row gap-6 pt-12 items-center justify-center w-full border-t border-white/10 mt-12">
            <div className="flex items-center gap-3 whitespace-nowrap">
              <div className="p-2 rounded-full bg-white/10 border border-white/20">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <span className="text-gray-200 font-medium text-base">Designed around your property</span>
            </div>
            <div className="hidden xl:block w-px h-8 bg-white/10 mx-4"></div>
            <div className="flex items-center gap-3 whitespace-nowrap">
              <div className="p-2 rounded-full bg-white/10 border border-white/20">
                <CheckCircle2 className="h-5 w-5 text-white" />
              </div>
              <span className="text-gray-200 font-medium text-base">No unnecessary contracts</span>
            </div>
            <div className="hidden xl:block w-px h-8 bg-white/10 mx-4"></div>
            <div className="flex items-center gap-3 whitespace-nowrap">
              <div className="p-2 rounded-full bg-white/10 border border-white/20">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-gray-200 font-medium text-base">Smart alerts & app control</span>
            </div>
            <div className="hidden xl:block w-px h-8 bg-white/10 mx-4"></div>
            <div className="flex items-center gap-3 whitespace-nowrap">
              <div className="p-2 rounded-full bg-white/10 border border-white/20">
                <Building2 className="h-5 w-5 text-white" />
              </div>
              <span className="text-gray-200 font-medium text-base">Homes, businesses & commercial sites</span>
            </div>
            <div className="hidden xl:block w-px h-8 bg-white/10 mx-4"></div>
            <div className="flex items-center gap-3 whitespace-nowrap">
              <div className="p-2 rounded-full bg-white/10 border border-white/20">
                <Award className="h-5 w-5 text-white" />
              </div>
              <span className="text-gray-200 font-medium text-base">Free install with selected service plans</span>
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {videoOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
              <button
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
                onClick={() => setVideoOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/9ffQhBwXUDg?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </section>

      {/* Reviews Under Hero */}
      <section className="bg-black border-t border-white/10 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <div className="text-white font-bold text-lg">5.0 Google Rating</div>
              <div className="text-gray-400 text-sm">Verified reviews</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/10"></div>
            <div className="text-center">
              <div className="text-white font-bold text-xl">James H. — Chesterfield</div>
              <div className="text-gray-400 text-sm max-w-sm">"Absolutely superb service. The Ajax alarm installation was excellent. Neat, tidy, and they took time to explain everything."</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/10"></div>
            <div className="text-center">
              <div className="text-white font-bold text-xl">Sarah W. — Derbyshire</div>
              <div className="text-gray-400 text-sm max-w-sm">"Clear quote, no hidden extras. Engineers arrived on time and left no mess. A proper job from start to finish."</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/10"></div>
            <Link href="/reviews" className="flex-shrink-0">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-black font-semibold">
                Read All Reviews →
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
