import type { Metadata } from "next"
import Link from "next/link"
import ThankYouTracking from "@/components/thank-you-tracking"
import { pageMetadata, site } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Enquiry Received",
  "Your website enquiry has been received by NOX Fire & Security.",
  "/thank-you",
  { noIndex: true },
)

export default function ThankYouPage() {
  return (
    <section className="legal thank-you-page">
      <ThankYouTracking/>
      <div className="container thank-you-panel">
        <span className="eyebrow">Enquiry received</span>
        <h1>Thank you. We have your details.</h1>
        <p className="lead">NOX will review the information you supplied and contact you directly to confirm the right next step.</p>
        <div className="thank-you-details">
          <div><strong>Urgent question?</strong><span>Call {site.phone} or message NOX on WhatsApp.</span></div>
          <div><strong>What happens next?</strong><span>We will clarify the requirement and arrange a survey where the system needs to be designed around the property or site.</span></div>
        </div>
        <div className="button-row">
          <Link className="button button-light" href="/">Return to the homepage</Link>
          <a className="button button-outline" href={site.phoneHref}>Call NOX</a>
        </div>
      </div>
    </section>
  )
}
