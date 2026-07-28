"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

function classifyLink(link: HTMLAnchorElement) {
  if (link.dataset.cta) return link.dataset.cta
  const href = link.getAttribute("href") ?? ""
  if (href.startsWith("tel:")) return "phone"
  if (href.includes("wa.me") || href.includes("whatsapp")) return "whatsapp"
  if (href.startsWith("mailto:")) return "email"
  if (href.startsWith("/get-quote") || href.startsWith("/book-security-survey")) return "quote"
  return null
}

const eventNames: Record<string, string> = {
  phone: "phone_click",
  whatsapp: "whatsapp_click",
  email: "email_click",
  quote: "quote_click",
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
        cta_type: ctaType,
        cta_text: link.textContent?.trim() ?? "",
        source_page: link.dataset.sourcePage ?? window.location.pathname,
        destination: link.getAttribute("href") ?? "",
      }

      if (ctaType === "quote") {
        sessionStorage.setItem("nox_quote_context", JSON.stringify({
          source_page: payload.source_page,
          cta_text: payload.cta_text,
          recorded_at: new Date().toISOString(),
        }))
      }

      if (localStorage.getItem("nox_analytics_consent") !== "granted" || !window.gtag) return
      window.gtag("event", eventNames[ctaType] ?? "lead_intent", { ...payload, transport_type: "beacon" })
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  return null
}
