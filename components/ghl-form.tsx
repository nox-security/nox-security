"use client"

import { useEffect } from "react"
import { site } from "@/lib/site"

const EMBED_SCRIPT_ID = "ghl-form-embed-script"
const EMBED_SCRIPT_SRC = "https://link.msgsndr.com/js/form_embed.js"

export default function GHLForm({ compact = false }: { compact?: boolean }) {
  useEffect(() => {
    if (document.getElementById(EMBED_SCRIPT_ID)) return

    const script = document.createElement("script")
    script.id = EMBED_SCRIPT_ID
    script.src = EMBED_SCRIPT_SRC
    script.async = true
    document.body.appendChild(script)
  }, [])

  const formUrl = `https://api.leadconnectorhq.com/widget/form/${site.formId}`
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
