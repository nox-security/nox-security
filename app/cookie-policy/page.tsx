import Header from "@/components/header"
import Footer from "@/components/footer"
import StickyContactButtons from "@/components/sticky-contact-buttons"
import Link from "next/link"
import { Cookie, Eye, BarChart3, Target, Settings } from "lucide-react"
import CTASection from "@/components/cta-section"

export const metadata = {
  title: "Cookie Policy | NOX Fire & Security",
  description: "Learn about how NOX Fire & Security uses cookies and tracking technologies.",
}

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      {/* Hero Section */}
        <section className="bg-black text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
                <Cookie className="h-8 w-8" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Understanding how we use cookies to improve your experience.
              </p>
              <div className="mt-6 text-sm text-gray-400">Last updated: 8 January 2026</div>
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="border-b border-white/10 sticky top-0 bg-black/95 backdrop-blur z-10 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex overflow-x-auto gap-6 py-4 text-sm">
              <a href="#what-are" className="whitespace-nowrap hover:text-white text-gray-400 transition-colors">
                What Are Cookies
              </a>
              <a href="#types" className="whitespace-nowrap hover:text-white text-gray-400 transition-colors">
                Types of Cookies
              </a>
              <a href="#usage" className="whitespace-nowrap hover:text-white text-gray-400 transition-colors">
                How We Use Cookies
              </a>
              <a href="#control" className="whitespace-nowrap hover:text-white text-gray-400 transition-colors">
                Cookie Control
              </a>
              <a href="#updates" className="whitespace-nowrap hover:text-white text-gray-400 transition-colors">
                Policy Updates
              </a>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <div className="mb-16">
                <div className="bg-white/5 border border-white/10 p-8 rounded-lg">
                  <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    This Cookie Policy explains how NOX Fire & Security uses cookies and similar tracking technologies
                    when you visit our website. We believe in transparency and want you to understand what information
                    we collect and how we use it.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    By continuing to use our website, you consent to our use of cookies in accordance with this policy.
                  </p>
                </div>
              </div>

              {/* What Are Cookies */}
              <div id="what-are" className="mb-16 scroll-mt-24">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-white text-black rounded-lg flex-shrink-0">
                    <Cookie className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-2">What Are Cookies?</h2>
                    <p className="text-gray-300">Understanding web cookies</p>
                  </div>
                </div>

                <div className="space-y-6 pl-16">
                  <p className="text-gray-300 leading-relaxed">
                    Cookies are small text files that are stored on your device (computer, tablet, or smartphone) when
                    you visit a website. They help websites remember your preferences and understand how you use the
                    site.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
                      <h3 className="font-bold mb-3">Session Cookies</h3>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        Temporary cookies that are deleted when you close your browser. They help with site navigation
                        and form completion.
                      </p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
                      <h3 className="font-bold mb-3">Persistent Cookies</h3>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        Remain on your device for a set period or until you delete them. They remember your preferences
                        across visits.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Types of Cookies */}
              <div id="types" className="mb-16 scroll-mt-24">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-white text-black rounded-lg flex-shrink-0">
                    <Target className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-2">Types of Cookies We Use</h2>
                    <p className="text-gray-300">Categorized by purpose</p>
                  </div>
                </div>

                <div className="space-y-6 pl-16">
                  <div className="border-l-4 border-white pl-6 py-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-white text-black rounded-lg flex items-center justify-center flex-shrink-0">
                        <Settings className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-bold">Essential Cookies</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      These cookies are necessary for the website to function properly. They enable core functionality
                      such as security, network management, and accessibility.
                    </p>
                    <div className="bg-white/5 border border-white/10 p-4 rounded-lg">
                      <p className="text-sm text-gray-300 mb-2">
                        <strong>Examples:</strong>
                      </p>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Authentication and security cookies</li>
                        <li>• Load balancing cookies</li>
                        <li>• These cookies are "always on" and do not require consent</li>
                      </ul>
                    </div>
                    <div className="mt-3 inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-sm">
                      <span className="font-semibold">Cannot be disabled</span>
                    </div>
                  </div>

                  <div className="border-l-4 border-white pl-6 py-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-white text-black rounded-lg flex items-center justify-center flex-shrink-0">
                        <BarChart3 className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-bold">Analytics Cookies</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      These cookies help us understand how visitors interact with our website by collecting and
                      reporting information anonymously.
                    </p>
                    <div className="bg-white/5 border border-white/10 p-4 rounded-lg">
                      <p className="text-sm text-gray-300 mb-2">
                        <strong>What we track:</strong>
                      </p>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Number of visitors and page views (Google Analytics)</li>
                        <li>• How visitors navigate through the site</li>
                        <li>• Site performance metrics</li>
                        <li>• These cookies will not load until you explicitly opt in</li>
                      </ul>
                    </div>
                    <div className="mt-3 inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-lg text-sm">
                      <span className="font-semibold">Can be disabled in settings</span>
                    </div>
                  </div>

                  <div className="border-l-4 border-white pl-6 py-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-white text-black rounded-lg flex items-center justify-center flex-shrink-0">
                        <Eye className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-bold">Functional Cookies</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      These cookies enable enhanced functionality and personalization, such as remembering your
                      preferences and choices.
                    </p>
                    <div className="bg-white/5 border border-white/10 p-4 rounded-lg">
                      <p className="text-sm text-gray-300 mb-2">
                        <strong>Features enabled:</strong>
                      </p>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Remembering your quote form information</li>
                        <li>• Saving your location preferences for service areas</li>
                        <li>• Customizing content based on your interests</li>
                        <li>• Providing live chat support functionality</li>
                      </ul>
                    </div>
                    <div className="mt-3 inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-lg text-sm">
                      <span className="font-semibold">Can be disabled in settings</span>
                    </div>
                  </div>

                  <div className="border-l-4 border-white pl-6 py-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-white text-black rounded-lg flex items-center justify-center flex-shrink-0">
                        <Target className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-bold">Marketing Cookies</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      These cookies track your online activity to help us deliver more relevant advertising and measure
                      the effectiveness of our marketing campaigns.
                    </p>
                    <div className="bg-white/5 border border-white/10 p-4 rounded-lg">
                      <p className="text-sm text-gray-300 mb-2">
                        <strong>Used for:</strong>
                      </p>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Meta Pixel (Facebook/Instagram tracking)</li>
                        <li>• Google Ads conversion tracking</li>
                        <li>• HubSpot CRM tracking</li>
                        <li>• These cookies will not load until you explicitly opt in</li>
                      </ul>
                    </div>
                    <div className="mt-3 inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-lg text-sm">
                      <span className="font-semibold">Can be disabled in settings</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* How We Use Cookies */}
              <div id="usage" className="mb-16 scroll-mt-24">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-white text-black rounded-lg flex-shrink-0">
                    <Eye className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-2">How We Use Cookies</h2>
                    <p className="text-gray-300">Specific applications on our website</p>
                  </div>
                </div>

                <div className="space-y-6 pl-16">
                  <div className="bg-white/5 border border-white/10 p-8 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Third-Party Services</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      We use cookies from trusted third-party services to enhance website functionality:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white/10 p-4 rounded-lg">
                        <h4 className="font-bold mb-2">Google Analytics</h4>
                        <p className="text-sm text-gray-300">To analyze website traffic and user behavior patterns.</p>
                      </div>
                      <div className="bg-white/10 p-4 rounded-lg">
                        <h4 className="font-bold mb-2">Meta Ads (Pixel)</h4>
                        <p className="text-sm text-gray-300">For advertising effectiveness and retargeting on Facebook/Instagram.</p>
                      </div>
                      <div className="bg-white/10 p-4 rounded-lg">
                        <h4 className="font-bold mb-2">Google Ads</h4>
                        <p className="text-sm text-gray-300">To measure ad performance and conversion tracking.</p>
                      </div>
                      <div className="bg-white/10 p-4 rounded-lg">
                        <h4 className="font-bold mb-2">Meta Pixel (Instagram)</h4>
                        <p className="text-sm text-gray-300">For advertising effectiveness and retargeting on Facebook/Instagram.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
                    <h3 className="font-bold mb-3">Data Collected</h3>
                    <p className="text-gray-300 leading-relaxed">
                      The information collected through cookies may include your IP address, browser type, operating
                      system, referring URLs, pages visited, time spent on pages, and interaction with site elements.
                      This data is used solely to improve our services and user experience.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cookie Control */}
              <div id="control" className="mb-16 scroll-mt-24">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-white text-black rounded-lg flex-shrink-0">
                    <Settings className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-2">Managing Your Cookie Preferences</h2>
                    <p className="text-gray-300">Take control of your data</p>
                  </div>
                </div>

                <div className="space-y-6 pl-16">
                  <p className="text-gray-300 leading-relaxed">You have several options to manage or disable cookies:</p>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Browser Settings</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Most web browsers allow you to control cookies through their settings. You can typically:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
                        <h4 className="font-bold mb-2">Block All Cookies</h4>
                        <p className="text-sm text-gray-300 leading-relaxed">
                          Prevent your browser from accepting any cookies. Note: This may affect website functionality.
                        </p>
                      </div>
                      <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
                        <h4 className="font-bold mb-2">Delete Cookies</h4>
                        <p className="text-sm text-gray-300 leading-relaxed">
                          Remove cookies that have already been set on your device through browser history settings.
                        </p>
                      </div>
                      <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
                        <h4 className="font-bold mb-2">Block Third-Party Cookies</h4>
                        <p className="text-sm text-gray-300 leading-relaxed">
                          Allow first-party cookies while blocking those from external services.
                        </p>
                      </div>
                      <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
                        <h4 className="font-bold mb-2">Get Notifications</h4>
                        <p className="text-sm text-gray-300 leading-relaxed">
                          Receive alerts each time a cookie is set, allowing you to accept or reject individually.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
                    <h3 className="font-bold mb-3">Browser-Specific Instructions</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      For detailed instructions on managing cookies in your specific browser:
                    </p>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-center gap-3">
                        <span className="font-semibold w-24">Chrome:</span>
                        <span>Settings → Privacy and Security → Cookies and other site data</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="font-semibold w-24">Firefox:</span>
                        <span>Settings → Privacy & Security → Cookies and Site Data</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="font-semibold w-24">Safari:</span>
                        <span>Preferences → Privacy → Cookies and website data</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="font-semibold w-24">Edge:</span>
                        <span>Settings → Cookies and site permissions → Cookies and data stored</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Opt-Out Options</h3>
                    <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
                      <p className="text-gray-300 leading-relaxed mb-4">
                        To opt out of analytics and advertising cookies from specific services:
                      </p>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            <strong>Google Analytics:</strong> Install the{" "}
                            <a
                              href="https://tools.google.com/dlpage/gaoptout"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white underline hover:no-underline"
                            >
                              Google Analytics Opt-out Browser Add-on
                            </a>
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            <strong>Facebook:</strong> Manage ad preferences in your{" "}
                            <a
                              href="https://www.facebook.com/ads/preferences"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white underline hover:no-underline"
                            >
                              Facebook Ad Settings
                            </a>
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            <strong>Network Advertising:</strong> Opt out of multiple ad networks at{" "}
                            <a
                              href="https://www.networkadvertising.org/choices/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white underline hover:no-underline"
                            >
                              NAI Opt-Out Page
                            </a>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Policy Updates */}
              <div id="updates" className="mb-16 scroll-mt-24">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-white text-black rounded-lg flex-shrink-0">
                    <Settings className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-2">Changes to This Policy</h2>
                    <p className="text-gray-300">Keeping you informed</p>
                  </div>
                </div>

                <div className="space-y-6 pl-16">
                  <p className="text-gray-300 leading-relaxed">
                    We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or
                    our business operations. We will notify you of any significant changes by:
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></div>
                      <span>Posting a prominent notice on our website</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></div>
                      <span>Updating the "Last Updated" date at the top of this policy</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></div>
                      <span>Sending an email notification if you have subscribed to our communications</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Questions About Cookies?</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  If you have any questions about our use of cookies or this policy, please contact us:
                </p>
                <div className="space-y-2 text-sm text-gray-300">
                  <div>
                    <span className="font-semibold text-white">Email:</span>{" "}
                    <a href="mailto:info@nox-security.co.uk" className="text-white underline hover:no-underline">
                      info@nox-security.co.uk
                    </a>
                  </div>
                  <div>
                    <span className="font-semibold text-white">Phone:</span>{" "}
                    <a href="tel:07882959297" className="text-white underline hover:no-underline">
                      07882 959 297
                    </a>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm text-gray-300">
                    For more information about your privacy rights, see our{" "}
                    <Link href="/privacy-policy" className="font-semibold text-white underline hover:no-underline">
                      Privacy Policy
                    </Link>
                    .
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
