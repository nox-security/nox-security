"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, ChevronDown } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [systemsOpen, setSystemsOpen] = useState(false)
  const [plansOpen, setPlansOpen] = useState(false)

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-white/10 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/nox-logo-light.jpeg"
              alt="NOX Fire & Security"
              width={220}
              height={60}
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-white text-gray-300 transition-colors">
              Home
            </Link>

            {/* Security Systems Dropdown */}
            <div className="relative group">
              <Link
                href="/systems"
                className="flex items-center gap-1 text-sm font-medium hover:text-white text-gray-300 transition-colors py-2"
              >
                Security Systems <ChevronDown className="h-4 w-4" />
              </Link>
              <div className="absolute top-full left-0 w-64 bg-black border border-white/10 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col pt-2 pb-2 z-50">
                <Link href="/systems/intrusion-alarms" className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 text-left">
                  Intruder Alarms
                </Link>
                <Link href="/systems/cctv" className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 text-left">
                  CCTV Systems
                </Link>
                <Link href="/systems/fire-safety" className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 text-left">
                  Fire Alarm Systems
                </Link>
                <Link href="/systems/emergency-lighting" className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 text-left">
                  Emergency Lighting
                </Link>
                <Link href="/systems/fire-risk-assessment" className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 text-left">
                  Fire Risk Assessments
                </Link>
              </div>
            </div>

            {/* Service Plans Dropdown */}
            <div className="relative group">
              <Link
                href="/service-plans"
                className="flex items-center gap-1 text-sm font-medium hover:text-white text-gray-300 transition-colors py-2"
              >
                Service Plans <ChevronDown className="h-4 w-4" />
              </Link>
              <div className="absolute top-full left-0 w-64 bg-black border border-white/10 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col pt-2 pb-2 z-50">
                <Link href="/service-plans/alarm-maintenance" className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 text-left">
                  Alarm Maintenance
                </Link>
                <Link href="/service-plans/cctv-maintenance" className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 text-left">
                  CCTV Maintenance
                </Link>
                <Link href="/service-plans/fire-alarm-servicing" className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 text-left">
                  Fire Alarm Servicing
                </Link>
                <Link href="/service-plans/emergency-lighting-servicing" className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 text-left">
                  Emergency Lighting Servicing
                </Link>
                <Link href="/service-plans/alarm-monitoring" className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 text-left">
                  Alarm Monitoring
                </Link>
              </div>
            </div>

            <Link href="/areas-we-serve" className="text-sm font-medium hover:text-white text-gray-300 transition-colors">
              Areas
            </Link>
            <Link href="/about-us" className="text-sm font-medium hover:text-white text-gray-300 transition-colors">
              Why NOX
            </Link>
            <Link href="/reviews" className="text-sm font-medium hover:text-white text-gray-300 transition-colors">
              Reviews
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-white text-gray-300 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/get-quote">
              <Button
                size="default"
                className="bg-white text-black hover:bg-gray-200 whitespace-nowrap font-bold"
              >
                Free Security Survey
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="xl:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="xl:hidden py-4 border-t border-white/10 bg-black h-[calc(100vh-80px)] overflow-y-auto">
            <nav className="flex flex-col gap-1">
              <Link href="/" onClick={handleMobileLinkClick} className="px-2 py-3 text-base font-medium hover:text-white text-gray-300 transition-colors border-b border-white/5">
                Home
              </Link>

              {/* Mobile Security Systems */}
              <div className="border-b border-white/5">
                <button
                  onClick={() => setSystemsOpen(!systemsOpen)}
                  className="flex items-center justify-between w-full px-2 py-3 text-base font-medium hover:text-white text-gray-300 transition-colors"
                >
                  Security Systems <ChevronDown className={`h-4 w-4 transition-transform ${systemsOpen ? 'rotate-180' : ''}`} />
                </button>
                {systemsOpen && (
                  <div className="bg-white/5 pl-4 pb-2">
                    <Link href="/systems/intrusion-alarms" onClick={handleMobileLinkClick} className="block py-2 text-sm text-gray-300 hover:text-white">
                      Intruder Alarms
                    </Link>
                    <Link href="/systems/cctv" onClick={handleMobileLinkClick} className="block py-2 text-sm text-gray-300 hover:text-white">
                      CCTV Systems
                    </Link>
                    <Link href="/systems/fire-safety" onClick={handleMobileLinkClick} className="block py-2 text-sm text-gray-300 hover:text-white">
                      Fire Alarm Systems
                    </Link>
                    <Link href="/systems/emergency-lighting" onClick={handleMobileLinkClick} className="block py-2 text-sm text-gray-300 hover:text-white">
                      Emergency Lighting
                    </Link>
                    <Link href="/systems/fire-risk-assessment" onClick={handleMobileLinkClick} className="block py-2 text-sm text-gray-300 hover:text-white">
                      Fire Risk Assessments
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Service Plans */}
              <div className="border-b border-white/5">
                <button
                  onClick={() => setPlansOpen(!plansOpen)}
                  className="flex items-center justify-between w-full px-2 py-3 text-base font-medium hover:text-white text-gray-300 transition-colors"
                >
                  Service Plans <ChevronDown className={`h-4 w-4 transition-transform ${plansOpen ? 'rotate-180' : ''}`} />
                </button>
                {plansOpen && (
                  <div className="bg-white/5 pl-4 pb-2">
                    <Link href="/service-plans/alarm-maintenance" onClick={handleMobileLinkClick} className="block py-2 text-sm text-gray-300 hover:text-white">
                      Alarm Maintenance
                    </Link>
                    <Link href="/service-plans/cctv-maintenance" onClick={handleMobileLinkClick} className="block py-2 text-sm text-gray-300 hover:text-white">
                      CCTV Maintenance
                    </Link>
                    <Link href="/service-plans/fire-alarm-servicing" onClick={handleMobileLinkClick} className="block py-2 text-sm text-gray-300 hover:text-white">
                      Fire Alarm Servicing
                    </Link>
                    <Link href="/service-plans/emergency-lighting-servicing" onClick={handleMobileLinkClick} className="block py-2 text-sm text-gray-300 hover:text-white">
                      Emergency Lighting Servicing
                    </Link>
                    <Link href="/service-plans/alarm-monitoring" onClick={handleMobileLinkClick} className="block py-2 text-sm text-gray-300 hover:text-white">
                      Alarm Monitoring
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/areas-we-serve" onClick={handleMobileLinkClick} className="px-2 py-3 text-base font-medium hover:text-white text-gray-300 transition-colors border-b border-white/5">
                Areas
              </Link>
              <Link href="/about-us" onClick={handleMobileLinkClick} className="px-2 py-3 text-base font-medium hover:text-white text-gray-300 transition-colors border-b border-white/5">
                Why NOX
              </Link>
              <Link href="/reviews" onClick={handleMobileLinkClick} className="px-2 py-3 text-base font-medium hover:text-white text-gray-300 transition-colors border-b border-white/5">
                Reviews
              </Link>
              <Link href="/contact" onClick={handleMobileLinkClick} className="px-2 py-3 text-base font-medium hover:text-white text-gray-300 transition-colors border-b border-white/5">
                Contact
              </Link>

              <div className="flex flex-col gap-3 mt-6 px-2">
                <Link href="/get-quote" className="w-full">
                  <Button
                    size="lg"
                    className="bg-white text-black hover:bg-gray-200 w-full font-bold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Free Security Survey
                  </Button>
                </Link>
                <a
                  href="https://wa.me/447882959297"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-[#25D366] rounded-md text-sm font-semibold hover:bg-[#128C7E] transition-colors w-full text-white"
                >
                  WhatsApp Us
                </a>
                <a
                  href="tel:07882959297"
                  className="flex items-center justify-center gap-2 text-sm font-semibold text-gray-300 w-full py-2 border border-white/20 rounded-md hover:bg-white/10 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  Call: 07882 959 297
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
