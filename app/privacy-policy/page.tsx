import type { Metadata } from "next"
import { pageMetadata, site } from "@/lib/site"

export const metadata: Metadata = pageMetadata("Privacy Policy", "Privacy information for visitors and customers using the NOX Fire & Security website.", "/privacy-policy")

export default function PrivacyPage() {
  return (
    <section className="legal">
      <div className="container">
        <span className="eyebrow">Legal</span>
        <h1>Privacy Policy</h1>
        <p>NOX Fire & Security uses the information supplied through the website enquiry form, telephone, email and WhatsApp to respond to enquiries, arrange appointments, prepare quotations and support customers.</p>
        <h2>Information collected</h2>
        <p>This may include contact details, property or business information, appointment details, system requirements and information you choose to provide about existing equipment.</p>
        <h2>GoHighLevel Website Enquiry form</h2>
        <p>The website embeds a GoHighLevel Website Enquiry form. Information entered into that form is processed through the connected NOX customer relationship system.</p>
        <h2>Website analytics</h2>
        <p>Where analytics consent is provided, NOX uses Google Analytics to understand website usage, traffic sources and completed enquiry journeys. Analytics is used to improve the website and measure which pages contribute to genuine customer enquiries.</p>
        <h2>How information is used</h2>
        <p>Information is used for enquiry handling, scheduling, quotations, installation, service delivery, customer support, legitimate business administration and legal obligations.</p>
        <h2>Contact</h2>
        <p>Questions about website privacy can be sent to <a className="text-link" href={`mailto:${site.email}`}>{site.email}</a>.</p>
      </div>
    </section>
  )
}
