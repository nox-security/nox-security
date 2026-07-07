import Header from "@/components/header"
import Footer from "@/components/footer"
import StickyContactButtons from "@/components/sticky-contact-buttons"
import { FileText } from "lucide-react"
import CTASection from "@/components/cta-section"

export const metadata = {
  title: "Terms & Conditions | NOX Fire & Security",
  description: "Terms and conditions for using NOX Fire & Security services.",
}

export default function TermsConditionsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      {/* Hero Section */}
        <section className="bg-black text-white pt-20 pb-2">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
                <FileText className="h-8 w-8" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                The terms governing your use of NOX Fire & Security services.
              </p>
              <div className="mt-6 text-sm text-gray-400">Last updated: 8 January 2026</div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-invert max-w-none text-gray-300 space-y-8">
                {/* Company Info */}
                <div className="bg-white/5 border border-white/10 p-8 rounded-lg">
                  <h2 className="text-2xl font-bold text-white mb-4">Nox Fire & Security</h2>
                  <p className="mb-2">(Trading name of JJI Group Limited)</p>
                  <p className="mb-2">
                    <strong>Address:</strong> 3 Oak Tree Cottages, Dark Lane, S44 5UX
                  </p>
                  <p>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:info@nox-security.co.uk" className="text-white hover:underline">
                      info@nox-security.co.uk
                    </a>
                  </p>
                </div>

                {/* 1. Definitions */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">1. Definitions</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>“Company”, “we”, “us”, or “our”</strong> refers to Nox Fire & Security,
                      a trading name of JJI Group Limited.
                    </li>
                    <li>
                      <strong>“Customer”, “you”, or “your”</strong> refers to the person or
                      organisation purchasing services from us.
                    </li>
                    <li>
                      <strong>“Services”</strong> refers to the supply, installation, maintenance, or
                      monitoring of fire and security systems including intruder alarms, CCTV, fire
                      alarms, access control, and associated works.
                    </li>
                    <li>
                      <strong>“Contract”</strong> means the agreement formed when you accept our
                      quotation.
                    </li>
                  </ul>
                </div>

                {/* 2. Scope of Services */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">2. Scope of Services</h3>
                  <p className="mb-4">
                    We provide fire and security services to domestic (B2C) and commercial (B2B)
                    customers, including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Intruder alarm systems</li>
                    <li>CCTV systems</li>
                    <li>Fire alarm systems</li>
                    <li>Access control systems</li>
                    <li>Maintenance and servicing</li>
                    <li>
                      Monitoring services (provided via a third-party monitoring provider)
                    </li>
                  </ul>
                  <p>Details of the Services are set out in your quotation.</p>
                </div>

                {/* 3. Quotations & Acceptance */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    3. Quotations & Acceptance
                  </h3>
                  <p className="mb-4">
                    All quotations are valid for 30 days unless stated otherwise.
                  </p>
                  <p className="mb-4">
                    A Contract is formed when you accept our quotation by:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Signing a paper or digital quote</li>
                    <li>Providing written confirmation by email</li>
                  </ul>
                  <p className="mb-4">
                    We sell and contract through in-home consultations, door-to-door sales, online
                    enquiries, distance sales, and business-to-business engagements.
                  </p>
                  <p>
                    We reserve the right to amend quotations where site conditions differ from those
                    reasonably anticipated at the time of survey or quotation.
                  </p>
                </div>

                {/* 4. Deposits & Payment Terms */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    4. Deposits & Payment Terms
                  </h3>
                  <p className="mb-4">
                    We may require a deposit prior to installation. Deposits will be:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>A minimum of £100, or</li>
                    <li>Up to 50% of the total contract value</li>
                  </ul>
                  <p className="mb-4">
                    The balance is payable on completion of installation, unless otherwise agreed in
                    writing.
                  </p>
                  <p>
                    Late payment may result in delays to commissioning, handover, or ongoing
                    services.
                  </p>
                </div>

                {/* 5. Installation & Access */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">5. Installation & Access</h3>
                  <p className="mb-4">
                    You must provide safe, clear, and reasonable access to the property at the
                    agreed date and time.
                  </p>
                  <p className="mb-4">
                    We are not responsible for delays caused by restricted access, unsafe working
                    conditions, or unforeseen site issues.
                  </p>
                  <p>
                    Any additional works required due to site conditions may be charged separately.
                  </p>
                </div>

                {/* 6. Cancellation & Cooling-Off Rights */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    6. Cancellation & Cooling-Off Rights
                  </h3>
                  <h4 className="font-bold text-white mb-2">6.1 Statutory Cooling-Off Period</h4>
                  <p className="mb-4">
                    Where the Contract is agreed in your home, following door-to-door sales, online,
                    or by distance means, you have a 14-day cooling-off period during which you may
                    cancel the Contract without giving a reason.
                  </p>
                  <p className="mb-4">
                    To cancel, you must notify us in writing by email to{" "}
                    <a
                      href="mailto:info@nox-security.co.uk"
                      className="text-white hover:underline"
                    >
                      info@nox-security.co.uk
                    </a>
                    .
                  </p>

                  <h4 className="font-bold text-white mb-2">
                    6.2 Early Start of Work Within the Cooling-Off Period
                  </h4>
                  <p className="mb-4">
                    Where you request that we begin work within the 14-day cooling-off period, you
                    expressly acknowledge and agree that:
                  </p>
                  <blockquote className="border-l-4 border-white pl-4 italic mb-4">
                    “By requesting work to start within the statutory 14-day cooling-off period,
                    you acknowledge that your right to cancel may be reduced once work has
                    commenced.”
                  </blockquote>

                  <h4 className="font-bold text-white mb-2">
                    6.3 Cancellation After Work Has Started
                  </h4>
                  <p className="mb-4">
                    If you cancel the Contract after work has commenced, you agree that we may charge
                    for:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Labour already carried out</li>
                    <li>Materials supplied</li>
                    <li>Equipment installed</li>
                    <li>Non-returnable, bespoke, or configured items</li>
                  </ul>
                  <p>
                    Any refund due will be calculated on a pro-rata basis, less reasonable costs
                    already incurred.
                  </p>
                </div>

                {/* 7. Non-Returnable & Bespoke Materials */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    7. Non-Returnable & Bespoke Materials
                  </h3>
                  <p className="mb-4">
                    Certain equipment and materials, including but not limited to alarm panels, CCTV
                    devices, cabling, fixings, and configured systems, may become non-returnable or
                    unsuitable for reuse once installed or commissioned.
                  </p>
                  <p>
                    Where such items have been used or configured, their cost may be deducted from
                    any refund following cancellation.
                  </p>
                </div>

                {/* 8. Warranties */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">8. Warranties</h3>
                  <p className="mb-4">
                    All equipment supplied is covered by the manufacturer’s warranty only.
                  </p>
                  <p className="mb-4">
                    We do not provide additional labour warranties unless expressly stated in
                    writing.
                  </p>
                  <p>Warranty claims are subject to manufacturer terms and exclusions.</p>
                </div>

                {/* 9. Monitoring Services */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">9. Monitoring Services</h3>
                  <p className="mb-4">
                    Where monitoring services are provided, these are supplied via a third-party
                    monitoring provider.
                  </p>
                  <p className="mb-4">
                    We are not responsible for failures or interruptions caused by:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Monitoring providers</li>
                    <li>Telecommunications networks</li>
                    <li>Internet or power outages</li>
                  </ul>
                </div>

                {/* 10. Limitations & Exclusions of Liability */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    10. Limitations & Exclusions of Liability
                  </h3>
                  <p className="mb-4">
                    Fire and security systems are designed to reduce risk but do not guarantee
                    prevention of loss, damage, or intrusion.
                  </p>
                  <p className="mb-4">We are not liable for:</p>
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Pre-existing faults or wiring issues</li>
                    <li>Failure of customer-provided internet, power, or infrastructure</li>
                    <li>Third-party equipment or services</li>
                    <li>Acts outside our reasonable control</li>
                  </ul>
                </div>

                {/* 11. Liability Cap */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">11. Liability Cap</h3>
                  <p className="mb-4">
                    To the fullest extent permitted by law, our total liability arising under or in
                    connection with the Contract shall be limited to the total contract value.
                  </p>
                  <p>
                    Nothing in these Terms limits liability for death or personal injury caused by
                    negligence, fraud, or any matter which cannot be excluded by law.
                  </p>
                </div>

                {/* 12. Complaints & Dispute Resolution */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    12. Complaints & Dispute Resolution
                  </h3>
                  <p>
                    If you have a complaint, please contact us in the first instance so we can
                    attempt to resolve the issue promptly and fairly.
                  </p>
                </div>

                {/* 13. Governing Law */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">13. Governing Law</h3>
                  <p className="mb-4">
                    These Terms & Conditions are governed by and construed in accordance with the
                    laws of England and Wales.
                  </p>
                  <p>
                    By accepting our quotation, you confirm that you have read, understood, and
                    agree to these Terms & Conditions, including the Cancellation & Cooling-Off
                    provisions above.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      <Footer />
      <StickyContactButtons />
    </main>
  )
}
