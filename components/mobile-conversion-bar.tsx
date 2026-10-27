"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { getPageCtaContext } from "@/lib/cta-context"
import { site } from "@/lib/site"

export default function MobileConversionBar() {
  const pathname = usePathname()
  const context = getPageCtaContext(pathname)

  return (
    <div className="mobile-conversion-bar" aria-label="Quick enquiry actions">
      <Link
        className="mobile-conversion-primary"
        href={context.href}
        data-cta="quote"
        data-source-page={`mobile-bar:${pathname}`}
      >
        <span>{context.fullLabel}</span>
      </Link>
      <a href={site.whatsapp} data-cta="whatsapp" data-source-page={`mobile-bar:${pathname}`}>WhatsApp</a>
      <a href={site.phoneHref} data-cta="phone" data-source-page={`mobile-bar:${pathname}`}>Call</a>
    </div>
  )
}
