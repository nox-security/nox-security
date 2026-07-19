import Link from "next/link"

export default function MobileConversionBar() {
  return (
    <div className="mobile-conversion-bar" aria-label="Quick enquiry actions">
      <Link href="/get-quote">Free Quote</Link>
      <Link href="/book-security-survey">Book Survey</Link>
    </div>
  )
}
