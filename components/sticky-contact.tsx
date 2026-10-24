"use client"

import { useState, useEffect } from "react"
import { Phone, MessageCircle } from "lucide-react"

export default function StickyContact() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky buttons after scrolling 300px
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Mobile - Bottom Sticky Bar */}
      <div
        className={`lg:hidden fixed bottom-0 left-0 right-0 bg-black text-white z-50 transition-transform duration-300 ${isVisible ? "translate-y-0" : "translate-y-full"
          }`}
      >
        <div className="flex items-stretch">
          <a
            href="tel:+447882959297"
            className="flex-1 flex items-center justify-center gap-2 py-4 hover:bg-gray-90 transition-colors border-r border-white/20"
          >
            <Phone className="h-5 w-5" />
            <span className="font-semibold text-sm">Call Now</span>
          </a>
          <a
            href="https://wa.me/447882959297"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-4 hover:bg-gray-90 transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="font-semibold text-sm">WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Desktop - Floating Right Side Buttons */}
      <div
        className={`hidden lg:block fixed right-6 bottom-6 z-50 transition-all duration-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}
      >
        <div className="flex flex-col gap-3">
          {/* Phone Button */}
          <a
            href="tel:+447882959297"
            className="group relative bg-black text-white w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-lg hover:shadow-xl"
            aria-label="Call us"
          >
            <Phone className="h-6 w-6" />
            <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Call: +447882959297
            </span>
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/447882959297"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-black text-white w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-lg hover:shadow-xl"
            aria-label="WhatsApp us"
          >
            <MessageCircle className="h-6 w-6" />
            <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              WhatsApp Us
            </span>
          </a>
        </div>
      </div>
    </>
  )
}
