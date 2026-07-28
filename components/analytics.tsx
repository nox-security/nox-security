"use client"

import { useEffect, useState } from "react"
import { usePathname, useSearchParams } from "next/navigation"

const MEASUREMENT_ID = "G-Q51KGWJ7TG"
const CONSENT_KEY = "nox_analytics_consent"
const SCRIPT_ID = "nox-google-analytics"

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

function initialiseDataLayer() {
  window.dataLayer = window.dataLayer ?? []
  window.gtag = window.gtag ?? function gtag(...args: unknown[]) {
    window.dataLayer?.push(args)
  }
}

function clearAnalyticsCookies() {
  const names = document.cookie.split(";").map(cookie => cookie.split("=")[0].trim()).filter(name => name === "_ga" || name.startsWith("_ga_"))
  for (const name of names) {
    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`
    document.cookie = `${name}=; Max-Age=0; path=/; domain=.nox-security.co.uk; SameSite=Lax`
  }
}

function storeFirstTouch() {
  if (localStorage.getItem("nox_first_touch")) return
  const url = new URL(window.location.href)
  const attribution = {
    landing_page: url.pathname,
    landing_url: url.href,
    referrer: document.referrer || "direct",
    utm_source: url.searchParams.get("utm_source") || "",
    utm_medium: url.searchParams.get("utm_medium") || "",
    utm_campaign: url.searchParams.get("utm_campaign") || "",
    utm_term: url.searchParams.get("utm_term") || "",
    utm_content: url.searchParams.get("utm_content") || "",
    gclid: url.searchParams.get("gclid") || "",
    msclkid: url.searchParams.get("msclkid") || "",
  }
  localStorage.setItem("nox_first_touch", JSON.stringify(attribution))
}

export default function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const loadAnalytics = () => {
      if (localStorage.getItem(CONSENT_KEY) !== "granted") return

      initialiseDataLayer()
      window.gtag?.("consent", "default", {
        analytics_storage: "granted",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      })
      window.gtag?.("set", "ads_data_redaction", true)
      window.gtag?.("set", "url_passthrough", false)

      if (!document.getElementById(SCRIPT_ID)) {
        const script = document.createElement("script")
        script.id = SCRIPT_ID
        script.async = true
        script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`
        document.head.appendChild(script)
        window.gtag?.("js", new Date())
        window.gtag?.("config", MEASUREMENT_ID, {
          send_page_view: false,
          allow_google_signals: false,
          allow_ad_personalization_signals: false,
        })
      }

      storeFirstTouch()
      setReady(true)
      window.dispatchEvent(new CustomEvent("nox-analytics-ready"))
    }

    loadAnalytics()
    const handleConsent = (event: Event) => {
      const detail = (event as CustomEvent<{ choice?: string }>).detail
      if (detail?.choice === "granted") {
        loadAnalytics()
        return
      }
      if (detail?.choice === "denied") {
        window.gtag?.("consent", "update", {
          analytics_storage: "denied",
          ad_storage: "denied",
          ad_user_data: "denied",
          ad_personalization: "denied",
        })
        clearAnalyticsCookies()
        setReady(false)
      }
    }
    window.addEventListener("nox-consent-updated", handleConsent)
    return () => window.removeEventListener("nox-consent-updated", handleConsent)
  }, [])

  useEffect(() => {
    if (!ready || !window.gtag) return
    const query = searchParams.toString()
    const pagePath = query ? `${pathname}?${query}` : pathname
    window.gtag("event", "page_view", {
      page_title: document.title,
      page_location: window.location.href,
      page_path: pagePath,
    })
  }, [pathname, searchParams, ready])

  return null
}
