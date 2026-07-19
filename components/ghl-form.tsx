"use client"

import { useEffect } from "react"
import { site } from "@/lib/site"

export default function GHLForm({ compact = false }: { compact?: boolean }) {
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

  const formUrl = `https://api.leadconnectorhq.com/widget/form/${site.formId}`

  return (
    <div className={`embed-shell ${compact ? "embed-compact" : ""}`}>
      <iframe
        src={formUrl}
        id={`inline-${site.formId}`}
        className="ghl-frame"
        title="NOX Fire & Security website enquiry form"
        loading="lazy"
        allow="clipboard-write"
        referrerPolicy="strict-origin-when-cross-origin"
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-activation-type="alwaysActivated"
        data-deactivation-type="neverDeactivate"
        data-form-name="Website Enquiry"
        data-layout-iframe-id={`inline-${site.formId}`}
        data-form-id={site.formId}
      />
      <noscript><p className="embed-fallback">The form requires JavaScript. <a href={formUrl}>Open the Website Enquiry form directly.</a></p></noscript>
    </div>
  )
}
