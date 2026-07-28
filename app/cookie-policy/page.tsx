import type { Metadata } from "next"
import { CookieSettingsButton } from "@/components/cookie-consent"
import { pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata("Cookie Policy", "Cookie and embedded-tool information for the NOX Fire & Security website.", "/cookie-policy")

export default function CookiePage() {
  return (
    <section className="legal">
      <div className="container">
        <span className="eyebrow">Legal</span>
        <h1>Cookie Policy</h1>
        <p>The NOX website uses essential browser storage required for website operation and optional analytics that help us understand how visitors use the site.</p>
        <h2>Google Analytics</h2>
        <p>Google Analytics is loaded only after you select “Accept analytics”. It helps NOX understand page visits, enquiry journeys and interactions such as quotation, telephone and WhatsApp selections. Advertising storage and personalised advertising signals are disabled.</p>
        <h2>Embedded GoHighLevel form</h2>
        <p>The Website Enquiry form is provided through GoHighLevel. The embedded form may use cookies or local storage needed to display the form, retain session information and process a submission.</p>
        <h2>Your choice</h2>
        <p>You can accept optional analytics or continue with essential website functions only. Your choice is stored in this browser and can be changed at any time.</p>
        <div className="button-row"><CookieSettingsButton/></div>
        <h2>Browser controls</h2>
        <p>You can also use browser settings to block or remove cookies and stored website data. Blocking storage used by the embedded enquiry form may prevent parts of the form from working correctly.</p>
      </div>
    </section>
  )
}
