"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
    gtag?: (...args: unknown[]) => void
  }
}

function classifyLink(link: HTMLAnchorElement) {
  if (link.dataset.cta) return link.dataset.cta
  const href = link.getAttribute("href") ?? ""
  if (href.startsWith("tel:")) return "phone"
  if (href.includes("wa.me") || href.includes("whatsapp")) return "whatsapp"
  if (href.startsWith("/get-quote") || href.startsWith("/book-security-survey")) return "quote"
  return null
}

export default function CtaTracking() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target
      if (!(target instanceof Element)) return
      const link = target.closest("a")
      if (!(link instanceof HTMLAnchorElement)) return
      const ctaType = classifyLink(link)
      if (!ctaType) return

      const payload = {
        event: "nox_lead_intent",
        cta_type: ctaType,
        cta_text: link.textContent?.trim() ?? "",
        source_page: link.dataset.sourcePage ?? window.location.pathname,
        destination: link.getAttribute("href") ?? "",
      }

      window.dataLayer = window.dataLayer ?? []
      window.dataLayer.push(payload)
      window.gtag?.("event", "generate_lead_intent", {
        cta_type: payload.cta_type,
        cta_text: payload.cta_text,
        source_page: payload.source_page,
        destination: payload.destination,
      })
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  return null
}
