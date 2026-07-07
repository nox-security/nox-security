"use client"

import Link from "next/link"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Essential Protect",
    headline: "Entry-level self monitoring and maintenance",
    featured: false,
    features: [
      "4G SIM connectivity",
      "App access (up to 2 users)",
      "1-year warranty",
      "Battery replacements",
      "Remote technical support",
      "Annual system health check",
      "SOS anywhere, anytime",
    ],
  },
  {
    name: "Advanced Shield",
    headline: "24/7 professionally monitored protection with verified response",
    featured: true,
    features: [
      "All Essential Protect benefits",
      "24/7 monitoring",
      "Image verification",
      "Police notification",
      "Unlimited app access",
      "No false alarms",
      "Lifetime warranty",
      "Unlimited battery replacements",
    ],
  },
  {
    name: "Total Guard",
    headline: "Maximum-level security with elite verification and post-incident cover",
    featured: false,
    features: [
      "All Advanced Shield benefits",
      "Video & audio verification",
      "Post-burglary maintenance",
      "Grade 3 anti-snap lock replacement",
      "Police notification",
      "Priority support",
      "Encrypted cloud storage",
      "AI smart technology",
    ],
  },
]

export default function ServicePlans() {
  return (
    <section className="bg-black py-16 md:py-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-balance">Choose Your Protection Level</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-pretty">
            From self-monitoring to 24/7 professional surveillance, we have a security solution that fits your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-lg border p-8 flex flex-col transition-colors ${plan.featured ? "border-white bg-white/10 shadow-lg scale-105" : "border-white/20 bg-black hover:border-white"
                }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-1 text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-bold text-2xl md:text-3xl mb-3">{plan.name}</h3>
                <p className="text-gray-300 font-regular leading-relaxed text-pretty">{plan.headline}</p>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 font-regular leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <Link href="/contact" className="block w-full">
                  <button
                    className={`w-full py-3.5 px-6 rounded-lg font-semibold transition-all duration-200 ${plan.featured
                      ? "bg-white text-black hover:bg-gray-200"
                      : "bg-transparent text-white border-2 border-white hover:bg-white hover:text-black"
                      }`}
                  >
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-300 font-regular mb-6">
            Not sure which plan is right for you? Our security experts can help.
          </p>
          <Link href="/contact">
            <button
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Speak to an Expert
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
