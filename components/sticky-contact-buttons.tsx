"use client"

import { Phone, MessageCircle, FileText } from "lucide-react"
import Link from "next/link"

export default function StickyContactButtons() {
  return (
    <>
      {/* Mobile Sticky Bottom Bar — always visible */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-black border-t-2 border-white/20 shadow-[0_-4px_30px_rgba(0,0,0,0.7)]" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
        <div className="flex items-stretch h-[64px]">
          <a
            href="tel:07882959297"
            className="flex-1 flex flex-col items-center justify-center gap-1.5 bg-black active:bg-white/10 transition-colors border-r border-white/20 touch-manipulation"
            onClick={() => {
              if (typeof window !== "undefined" && (window as any).gtag) {
                (window as any).gtag("event", "phone_click", { event_category: "cta", event_label: "mobile_sticky_bar" })
              }
            }}
          >
            <Phone className="h-5 w-5 text-white" />
            <span className="font-bold text-[11px] text-white tracking-wide">CALL</span>
          </a>
          <a
            href="https://wa.me/447882959297"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col items-center justify-center gap-1.5 bg-[#25D366] active:bg-[#128C7E] transition-colors border-r border-white/20 touch-manipulation"
            onClick={() => {
              if (typeof window !== "undefined" && (window as any).gtag) {
                (window as any).gtag("event", "whatsapp_click", { event_category: "cta", event_label: "mobile_sticky_bar" })
              }
            }}
          >
            <MessageCircle className="h-5 w-5 text-white" />
            <span className="font-bold text-[11px] text-white tracking-wide">WHATSAPP</span>
          </a>
          <Link
            href="/get-quote"
            className="flex-[1.4] flex flex-col items-center justify-center gap-1.5 bg-white active:bg-gray-200 transition-colors touch-manipulation"
          >
            <FileText className="h-5 w-5 text-black" />
            <span className="font-bold text-[11px] text-black tracking-wide leading-tight text-center">FREE SURVEY</span>
          </Link>
        </div>
      </div>

      {/* Desktop Floating Buttons */}
      <div className="hidden lg:flex lg:flex-col fixed left-6 bottom-6 z-50 gap-3">
        <a
          href="tel:07882959297"
          className="flex items-center gap-2 bg-black text-white border border-white/30 hover:bg-white hover:text-black shadow-xl font-bold px-5 py-3 rounded-xl transition-all"
          onClick={() => {
            if (typeof window !== "undefined" && (window as any).gtag) {
              (window as any).gtag("event", "phone_click", { event_category: "cta", event_label: "desktop_floating" })
            }
          }}
        >
          <Phone className="h-5 w-5" />
          Call Now
        </a>
        <a
          href="https://wa.me/447882959297"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white shadow-xl font-bold px-5 py-3 rounded-xl transition-all"
          onClick={() => {
            if (typeof window !== "undefined" && (window as any).gtag) {
              (window as any).gtag("event", "whatsapp_click", { event_category: "cta", event_label: "desktop_floating" })
            }
          }}
        >
          <MessageCircle className="h-5 w-5" />
          WhatsApp
        </a>
      </div>

      {/* Mobile bottom padding spacer so content isn't hidden behind sticky bar */}
      <div className="lg:hidden h-[64px]"></div>
    </>
  )
}
