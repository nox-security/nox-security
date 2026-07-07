import Link from "next/link"
import Image from "next/image"
import { Home, Search, Phone, ArrowLeft } from "lucide-react"

export const metadata = {
  title: "404 - Page Not Found | NOX Fire & Security",
  description: "The page you're looking for doesn't exist.",
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <Image src="/images/nox-logo-light.jpeg" alt="NOX Fire & Security" width={200} height={60} className="h-12 w-auto" />
        </div>

        {/* 404 Visual */}
        <div className="mb-8">
          <div className="relative">
            <div className="text-[180px] md:text-[240px] font-bold leading-none text-white/5 select-none">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                <Search className="h-16 w-16 md:h-20 md:w-20 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Page Not Found</h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-2">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <p className="text-gray-400">Let's get you back to safety.</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors w-full sm:w-auto"
          >
            <Home className="h-5 w-5" />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-lg border border-white hover:bg-white/10 transition-colors w-full sm:w-auto"
          >
            <Phone className="h-5 w-5" />
            Contact Us
          </Link>
        </div>

        {/* Quick Links */}
        <div className="border-t border-white/10 pt-8">
          <h2 className="text-sm font-semibold mb-4 text-gray-400">POPULAR PAGES</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <Link
              href="/systems"
              className="text-gray-400 hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Security Systems
            </Link>
            <Link
              href="/service-plans"
              className="text-gray-400 hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Service Plans
            </Link>
            <Link
              href="/reviews"
              className="text-gray-400 hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Reviews
            </Link>
            <Link
              href="/get-quote"
              className="text-gray-400 hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Get Quote
            </Link>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-12 bg-white/5 border border-white/10 p-8 rounded-lg">
          <h2 className="text-xl font-bold mb-2 text-white">Need Immediate Security Assistance?</h2>
          <p className="text-gray-300 mb-4">Our team is available 24/7 for emergencies</p>
          <a
            href="tel:07882959297"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Phone className="h-5 w-5" />
            Call: 07882 959 297
          </a>
        </div>
      </div>
    </div>
  )
}
