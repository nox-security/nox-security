import Link from "next/link"
import { site } from "@/lib/site"

export default function MobileConversionBar() {
  return (
    <div className="mobile-conversion-bar" aria-label="Quick enquiry actions">
      <Link href="/get-quote#quote-form">Get a Quote</Link>
      <a href={site.whatsapp}>WhatsApp</a>
      <a href={site.phoneHref}>Call</a>
    </div>
  )
}
