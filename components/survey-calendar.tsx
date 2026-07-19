"use client"

import { useEffect } from "react"
import { site } from "@/lib/site"

export default function SurveyCalendar() {
  useEffect(() => {
    const id = "ghl-embed-script"
    if (!document.getElementById(id)) {
      const script = document.createElement("script")
      script.id = id
      script.src = "https://link.msgsndr.com/js/form_embed.js"
      script.async = true
      script.defer = true
      document.body.appendChild(script)
    }
  }, [])

  return (
    <div className="embed-shell calendar-shell">
      <iframe
        src={site.surveyUrl}
        className="calendar-frame"
        title="Book a free NOX security survey"
        loading="lazy"
        allow="geolocation; microphone; camera; clipboard-write"
        referrerPolicy="strict-origin-when-cross-origin"
      />
      <noscript><p className="embed-fallback">The calendar requires JavaScript. <a href={site.surveyUrl}>Open the Security Survey calendar directly.</a></p></noscript>
    </div>
  )
}
