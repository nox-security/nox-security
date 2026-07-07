"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="!bg-black border-t border-white/10 pt-16 pb-8 text-white relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Image
              src="/images/nox-logo-dark.png"
              alt="NOX Fire & Security"
              width={180}
              height={50}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-sm text-gray-300 leading-relaxed">
              Smart security systems for homes and businesses across Chesterfield, Sheffield & Derbyshire. Free installation with any service plan.
            </p>
            <div className="flex items-start gap-2 text-sm text-gray-400">
              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>Based in <strong className="text-white">Chesterfield, Derbyshire</strong><br />Serving Chesterfield · Sheffield · Derbyshire<br />& wider areas for commercial projects</span>
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/noxsecuritychesterfield"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors"
                aria-label="NOX Security Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/447882959297"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:bg-[#128C7E] transition-colors"
                aria-label="WhatsApp NOX Security"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Security Systems */}
          <div>
            <h3 className="font-bold text-lg mb-6">Security Systems</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/systems/intrusion-alarms" className="text-gray-300 hover:text-white transition-colors">Intruder Alarms</Link></li>
              <li><Link href="/systems/cctv" className="text-gray-300 hover:text-white transition-colors">CCTV Systems</Link></li>
              <li><Link href="/systems/fire-safety" className="text-gray-300 hover:text-white transition-colors">Fire Alarm Systems</Link></li>
              <li><Link href="/systems/emergency-lighting" className="text-gray-300 hover:text-white transition-colors">Emergency Lighting</Link></li>
              <li><Link href="/systems/fire-risk-assessment" className="text-gray-300 hover:text-white transition-colors">Fire Risk Assessments</Link></li>
            </ul>
            <h3 className="font-bold text-lg mt-8 mb-4">Service Plans</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/service-plans/alarm-maintenance" className="text-gray-300 hover:text-white transition-colors">Alarm Maintenance</Link></li>
              <li><Link href="/service-plans/cctv-maintenance" className="text-gray-300 hover:text-white transition-colors">CCTV Maintenance</Link></li>
              <li><Link href="/service-plans/fire-alarm-servicing" className="text-gray-300 hover:text-white transition-colors">Fire Alarm Servicing</Link></li>
              <li><Link href="/service-plans/emergency-lighting-servicing" className="text-gray-300 hover:text-white transition-colors">Emergency Lighting Servicing</Link></li>
              <li><Link href="/service-plans/police-monitoring" className="text-gray-300 hover:text-white transition-colors">Police Monitoring</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about-us" className="text-gray-300 hover:text-white transition-colors">Why NOX</Link></li>
              <li><Link href="/reviews" className="text-gray-300 hover:text-white transition-colors">Reviews</Link></li>
              <li><Link href="/areas-we-serve" className="text-gray-300 hover:text-white transition-colors">Areas We Cover</Link></li>
              <li><Link href="/get-quote" className="text-gray-300 hover:text-white transition-colors">Free Security Survey</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>

            <h3 className="font-bold text-sm mt-8 mb-3 text-gray-400 uppercase tracking-widest">Key Areas</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/areas/chesterfield" className="text-gray-400 hover:text-white transition-colors">Chesterfield</Link></li>
              <li><Link href="/areas/sheffield" className="text-gray-400 hover:text-white transition-colors">Sheffield</Link></li>
              <li><Link href="/areas/derbyshire" className="text-gray-400 hover:text-white transition-colors">Derbyshire</Link></li>
              <li><Link href="/areas/dronfield" className="text-gray-400 hover:text-white transition-colors">Dronfield</Link></li>
              <li><Link href="/areas/matlock" className="text-gray-400 hover:text-white transition-colors">Matlock</Link></li>
              <li><Link href="/areas/bakewell" className="text-gray-400 hover:text-white transition-colors">Bakewell</Link></li>
            </ul>

            {/* Free install promo */}
            <div className="mt-8 bg-white/10 border border-white/20 rounded-lg p-4">
              <div className="text-sm font-bold text-white mb-1">🎁 Free Installation</div>
              <div className="text-xs text-gray-300">With any service plan. No catches.</div>
              <Link href="/get-quote" className="text-xs text-white underline mt-2 block hover:text-gray-300 transition-colors">
                Claim this offer →
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div id="contact">
            <h3 className="font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 text-gray-400" />
                <div>
                  <div className="font-semibold mb-1">Phone</div>
                  <a href="tel:07882959297" className="text-gray-300 hover:text-white transition-colors text-base font-bold">
                    07882 959 297
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-[#25D366]" />
                <div>
                  <div className="font-semibold mb-1">WhatsApp</div>
                  <a
                    href="https://wa.me/447882959297"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Message Us Now
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 text-gray-400" />
                <div>
                  <div className="font-semibold mb-1">Email</div>
                  <a href="mailto:info@nox-security.co.uk" className="text-gray-300 hover:text-white transition-colors">
                    info@nox-security.co.uk
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-gray-400" />
                <div>
                  <div className="font-semibold mb-1">Location</div>
                  <div className="text-gray-300">Chesterfield, Derbyshire</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Areas We Cover — SEO Internal Links */}
        <div className="border-t border-white/10 py-8">
          <h3 className="font-bold text-lg mb-4">Areas We Cover</h3>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {[
              "Chesterfield", "Sheffield", "Dronfield", "Eckington", "Clay Cross", "Bolsover",
              "Matlock", "Darley Dale", "Rowsley", "Wirksworth", "Bakewell", "Baslow",
              "Ashford in the Water", "Hassop", "Tideswell", "Buxton", "Hathersage",
              "Hope Valley", "Derbyshire", "North Yorkshire", "South Yorkshire",
              "Nottinghamshire", "Mansfield", "Worksop", "Rotherham", "Doncaster"
            ].map((area) => (
              <Link key={area} href={`/areas/${area.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-400 hover:text-white transition-colors">
                {area}
              </Link>
            ))}
          </div>
        </div>

        {/* Accreditations */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="text-center">
              <img
                src="/images/logo-ajax-authorized-installation-company-en-wh.png"
                alt="Ajax Authorized Installation Company"
                className="h-16 w-auto object-contain p-2 rounded"
              />
            </div>
            <div className="text-center">
              <a href="https://www.farsight.co.uk/" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                <img
                  src="/images/farshight-logo.png"
                  alt="Farsight Monitoring Partner"
                  className="h-16 w-auto object-contain p-2 rounded bg-white"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
            <div>© {new Date().getFullYear()} NOX Fire & Security. All rights reserved.</div>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
              <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
            <div>
              Website by <a href="https://hamzakhaliq.com" className="hover:text-white transition-colors">Hamza Khaliq</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
