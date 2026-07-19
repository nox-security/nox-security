import Link from "next/link"

export default function MobileConversionBar() {
  return (
    <div className="mobile-conversion-bar" aria-label="Quick enquiry action">
      <Link href="/get-quote">Get a Free Quote</Link>
    </div>
  )
}
