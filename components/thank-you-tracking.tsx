"use client"

import { useEffect } from "react"

function readFirstTouch() {
  try {
    return JSON.parse(localStorage.getItem("nox_first_touch") || "{}") as Record<string, string>
  } catch {
    return {}
  }
}

export default function ThankYouTracking() {
  useEffect(() => {
    const sendLead = () => {
      if (localStorage.getItem("nox_analytics_consent") !== "granted" || !window.gtag) return
      const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined
      if (navigation?.type === "reload" && sessionStorage.getItem("nox_lead_recorded")) return

      const firstTouch = readFirstTouch()
      const storedQuoteContext = sessionStorage.getItem("nox_quote_context")
      const referrer = document.referrer.toLowerCase()
      const cameFromForm = Boolean(storedQuoteContext) || referrer.includes("leadconnectorhq.com") || referrer.includes("msgsndr.com")
      if (!cameFromForm) return

      let quoteContext: Record<string, string> = {}
      try {
        quoteContext = JSON.parse(storedQuoteContext || "{}")
      } catch {}

      window.gtag("event", "generate_lead", {
        form_name: "Website Enquiry",
        lead_source: "website",
        source_page: quoteContext.source_page || firstTouch.landing_page || "/get-quote",
        landing_page: firstTouch.landing_page || "",
        utm_source: firstTouch.utm_source || "",
        utm_medium: firstTouch.utm_medium || "",
        utm_campaign: firstTouch.utm_campaign || "",
      })
      sessionStorage.setItem("nox_lead_recorded", new Date().toISOString())
      sessionStorage.removeItem("nox_quote_context")
    }

    sendLead()
    window.addEventListener("nox-analytics-ready", sendLead)
    return () => window.removeEventListener("nox-analytics-ready", sendLead)
  }, [])

  return null
}
