"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

const CONSENT_KEY = "nox_analytics_consent"
type ConsentChoice = "granted" | "denied"

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      className="footer-cookie-settings"
      onClick={() => window.dispatchEvent(new Event("nox-open-cookie-settings"))}
    >
      Cookie settings
    </button>
  )
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(!localStorage.getItem(CONSENT_KEY))
    const openSettings = () => setVisible(true)
    window.addEventListener("nox-open-cookie-settings", openSettings)
    return () => window.removeEventListener("nox-open-cookie-settings", openSettings)
  }, [])

  const choose = (choice: ConsentChoice) => {
    localStorage.setItem(CONSENT_KEY, choice)
    window.dispatchEvent(new CustomEvent("nox-consent-updated", { detail: { choice } }))
    setVisible(false)
  }

  if (!visible) return null

  return (
    <aside className="cookie-consent" role="dialog" aria-modal="false" aria-labelledby="cookie-consent-title">
      <div className="cookie-consent-copy">
        <span className="eyebrow">Privacy choices</span>
        <h2 id="cookie-consent-title">Website analytics</h2>
        <p>NOX uses optional Google Analytics to understand which pages and enquiry routes are useful. The website and enquiry form still work when analytics is declined.</p>
        <Link href="/cookie-policy">Read the cookie policy</Link>
      </div>
      <div className="cookie-consent-actions">
        <button type="button" className="button button-light" onClick={() => choose("granted")}>Accept analytics</button>
        <button type="button" className="button button-outline" onClick={() => choose("denied")}>Essential only</button>
      </div>
    </aside>
  )
}
