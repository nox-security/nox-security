import Header from "@/components/header"
import Footer from "@/components/footer"
import StickyContactButtons from "@/components/sticky-contact-buttons"
import CTASection from "@/components/cta-section"
import { Shield } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Privacy Policy | Nox Fire & Security",
  description: "Privacy Policy for Nox Fire & Security. Last updated 8 January 2026.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      {/* Hero Section */}
        <section className="bg-black text-white pt-20 pb-2">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
                <Shield className="h-8 w-8" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Nox Fire & Security
              </p>
              <div className="text-sm text-gray-400">Last updated: 8 January 2026</div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-12 text-gray-300">

              {/* 1. Who we are */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Who we are</h2>
                <p className="mb-4">Nox Fire & Security is a UK-based fire and security company.</p>
                <div className="bg-white/5 p-6 rounded-lg border border-white/10 mb-4">
                  <h3 className="text-white font-semibold mb-2">Contact details:</h3>
                  <p>Email: <a href="mailto:info@nox-security.co.uk" className="text-white hover:underline">info@nox-security.co.uk</a></p>
                  <p>Phone: <a href="tel:07882959297" className="text-white hover:underline">07882 959 297</a></p>
                </div>
                <p>For data protection purposes, Nox Fire & Security is the data controller.</p>
              </section>

              {/* 2. What personal data we collect */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. What personal data we collect</h2>
                <p className="mb-4">We may collect and process the following types of personal data:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name</li>
                  <li>Address</li>
                  <li>Email address</li>
                  <li>Telephone number</li>
                  <li>Enquiry and quotation details</li>
                  <li>Customer account and installation information</li>
                  <li>Communication records (emails, calls, messages)</li>
                  <li>Website usage data (via cookies and analytics, where consent is given)</li>
                </ul>
                <p className="mt-4">We do not intentionally collect special category (sensitive) personal data.</p>
              </section>

              {/* 3. How we collect your data */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. How we collect your data</h2>
                <p className="mb-4">We collect personal data when you:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Submit an enquiry or request a quote</li>
                  <li>Contact us by phone, email, or via our website</li>
                  <li>Become a customer</li>
                  <li>Use our website (subject to cookie consent)</li>
                </ul>
              </section>

              {/* 4. How we use your data */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. How we use your data</h2>
                <p className="mb-4">We use your personal data to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Respond to enquiries and provide quotations</li>
                  <li>Deliver fire and security services</li>
                  <li>Arrange surveys, installations, and aftercare</li>
                  <li>Communicate with you about your enquiry or services</li>
                  <li>Manage customer records and accounts</li>
                  <li>Improve our website and services</li>
                  <li>Meet legal and regulatory obligations</li>
                </ul>
              </section>

              {/* 5. Lawful basis for processing */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Lawful basis for processing</h2>
                <p className="mb-4">Under UK GDPR, we process your personal data using the following lawful bases:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-white">Legitimate interests</strong> – to respond to enquiries, provide services, and operate our business</li>
                  <li><strong className="text-white">Contract</strong> – where processing is necessary to deliver services you have requested</li>
                  <li><strong className="text-white">Legal obligation</strong> – where we are required to do so by law</li>
                  <li><strong className="text-white">Consent</strong> – for analytics, marketing cookies, and electronic marketing where required</li>
                </ul>
              </section>

              {/* 6. Marketing communications */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Marketing communications</h2>
                <p className="mb-4">We may contact you with information relating to your enquiry or services.</p>
                <p className="mb-4">We will only send marketing communications where:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You have given consent, or</li>
                  <li>We are permitted to do so under legitimate interest rules</li>
                </ul>
                <p className="mt-4">You can opt out of marketing at any time by contacting us using the details above.</p>
              </section>

              {/* 7. Cookies and website analytics */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Cookies and website analytics</h2>
                <p className="mb-4">Our website uses cookies to ensure it functions correctly and, with your permission, to analyse website usage and support advertising.</p>
                <p className="mb-4">Full details are available in our <Link href="/cookie-policy" className="text-blue-400 hover:underline">Cookie Policy</Link>, which explains:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>What cookies we use</li>
                  <li>Why we use them</li>
                  <li>How you can manage your preferences</li>
                </ul>
              </section>

              {/* 8. Data sharing and processors */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Data sharing and processors</h2>
                <p className="mb-4">We may share your personal data with trusted third parties where necessary, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Website analytics and advertising providers (where consent is given)</li>
                  <li>Professional advisers (accountants, insurers)</li>
                  <li>Legal or regulatory authorities where required</li>
                </ul>
                <p className="mt-4">All third parties are required to handle your data securely and in accordance with data protection law.</p>
              </section>

              {/* 9. Data storage and security */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Data storage and security</h2>
                <p className="mb-4">We take appropriate technical and organisational measures to protect your personal data against loss, misuse, unauthorised access, or disclosure.</p>
                <p>Data is stored securely and access is limited to authorised personnel only.</p>
              </section>

              {/* 10. Data retention */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">10. Data retention</h2>
                <p className="mb-4">We retain personal data only for as long as necessary to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fulfil the purposes for which it was collected</li>
                  <li>Meet legal, accounting, or regulatory requirements</li>
                </ul>
                <p className="mt-4">When data is no longer required, it is securely deleted or anonymised.</p>
              </section>

              {/* 11. Your data protection rights */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">11. Your data protection rights</h2>
                <p className="mb-4">Under UK data protection law, you have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal data</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to or restrict processing</li>
                  <li>Request data portability</li>
                  <li>Withdraw consent at any time (where consent is relied upon)</li>
                </ul>
                <p className="mt-4">To exercise any of these rights, please contact us.</p>
              </section>

              {/* 12. Complaints */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">12. Complaints</h2>
                <p className="mb-4">If you have concerns about how we handle your personal data, please contact us first so we can try to resolve the issue.</p>
                <p>You also have the right to complain to the Information Commissioner’s Office (ICO):</p>
                <p className="mt-2">Website: <a href="https://www.ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">https://www.ico.org.uk</a></p>
              </section>

              {/* 13. Changes to this Privacy Policy */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">13. Changes to this Privacy Policy</h2>
                <p className="mb-4">We may update this Privacy Policy from time to time. Any changes will be published on this page, along with an updated revision date.</p>
                <p>This Privacy Policy is intended to be clear, transparent, and easy to understand, in line with UK GDPR requirements.</p>
              </section>

            </div>
          </div>
        </section>

        <CTASection />
        <Footer />
        <StickyContactButtons />
    </main>
  )
}
