"use client"

import { useEffect, useRef } from "react"

declare global {
    interface Window {
        hbspt: any
    }
}

export default function HubSpotForm() {
    const formContainerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const script = document.createElement("script")
        script.src = "//js-eu1.hsforms.net/forms/embed/v2.js"
        script.charset = "utf-8"
        script.type = "text/javascript"
        script.async = true

        script.onload = () => {
            if (window.hbspt) {
                // Clear any existing form in the container to avoid duplicates if re-rendered
                if (formContainerRef.current) {
                    formContainerRef.current.innerHTML = ""
                }

                window.hbspt.forms.create({
                    portalId: "147530653",
                    formId: "24dd911b-4452-4f7c-aeea-36a9a030a629",
                    region: "eu1",
                    target: "#hubspot-form-container"
                })
            }
        }

        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
    }, [])

    return (
        <div id="hubspot-form-container" ref={formContainerRef} className="w-full bg-white rounded-lg p-4 min-h-[500px]">
            {/* HubSpot form will be injected here */}
        </div>
    )
}
