"use client"

import { useEffect, useMemo, useState } from "react"
import { site } from "@/lib/site"

const EMBED_SCRIPT_ID = "ghl-form-embed-script"
const EMBED_SCRIPT_SRC = "https://link.msgsndr.com/js/form_embed.js"

function inferTrafficSource(url: URL, referrer: string) {
  if (url.searchParams.get("utm_source")) return url.searchParams.get("utm_source") ?? "campaign"
  if (!referrer) return "direct"
  try {
    const host = new URL(referrer).hostname.toLowerCase()
    if (host.includes("google.") || host.includes("bing.") || host.includes("yahoo.")) return "organic"
    if (["facebook.com", "instagram.com", "linkedin.com", "tiktok.com", "x.com", "twitter.com"].some(domain => host.includes(domain))) return "social"
    return "referral"
  } catch {
    return "referral"
  }
}

export default function GHLForm({ compact = false }: { compact?: boolean }) {
  const [pageContext, setPageContext] = useState("")

  useEffect(() => {
    if (!document.getElementById(EMBED_SCRIPT_ID)) {
      const script = document.createElement("script")
      script.id = EMBED_SCRIPT_ID
      script.src = EMBED_SCRIPT_SRC
      script.async = true
      document.body.appendChild(script)
    }

    const current = new URL(window.location.href)
    const context = new URLSearchParams(current.search)
    const referrer = document.referrer
    context.set("page_url", current.href)
    context.set("landing_page", current.pathname)
    context.set("page_title", document.title)
    if (referrer) context.set("referrer", referrer)
    context.set("traffic_source", inferTrafficSource(current, referrer))
    context.set("utm_source", context.get("utm_source") || inferTrafficSource(current, referrer))
    context.set("utm_medium", context.get("utm_medium") || "website")
    setPageContext(context.toString())
  }, [])

  const formUrl = useMemo(() => {
    const base = `https://api.leadconnectorhq.com/widget/form/${site.formId}`
    return pageContext ? `${base}?${pageContext}` : base
  }, [pageContext])
  const iframeId = `inline-${site.formId}`

  return (
    <div className={`embed-shell ${compact ? "embed-compact" : ""}`}>
      <iframe
        src={formUrl}
        style={{ width: "100%", height: "100%", border: "none", borderRadius: "8px" }}
        id={iframeId}
        className="ghl-frame"
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Website Enquiry"
        data-height="806"
        data-layout-iframe-id={iframeId}
        data-form-id={site.formId}
        title="Website Enquiry"
        loading="eager"
        allow="clipboard-write"
        referrerPolicy="strict-origin-when-cross-origin"
      />
      <noscript>
        <p className="embed-fallback">
          The form requires JavaScript. <a href={formUrl}>Open the Website Enquiry form directly.</a>
        </p>
      </noscript>
    </div>
  )
}
