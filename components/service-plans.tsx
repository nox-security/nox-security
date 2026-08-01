"use client"

import Link from "next/link"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Essential Protect",
    headline: "A simple aftercare plan for homes and smaller businesses that want the system kept reliable, connected and looked after.",
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
    headline: "Professional alarm handling and extra support for customers who want more than app alerts when they cannot respond themselves.",
    featured: true,
    features: [
      "All Essential Protect benefits",
      "Professional alarm monitoring",
      "Image verification where available",
      "Keyholder notification",
      "Unlimited app access",
      "Helps reduce unwanted alarm activations",
      "Extended warranty support",
      "Unlimited battery replacements",
    ],
  },
  {
    name: "Total Guard",
    headline: "A higher level of aftercare for commercial sites, higher-risk properties and customers who want stronger support across alarm and CCTV.",
    featured: false,
    features: [
      "All Advanced Shield benefits",
      "Video verification where suitable",
      "Post-burglary maintenance",
      "Existing door and entry security review",
      "Keyholder notification",
      "Priority support",
      "Cloud storage options where suitable",
      "AI smart technology",
    ],
  },
]

export default function ServicePlans() {
  return (
    <section className="bg-black py-16 md:py-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-balance">Choose the Right Support Level</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-pretty">
            From simple maintenance to professional alarm monitoring, we help you choose the level of support that suits your property and how you want to manage it.
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
                    Request a Support Quote
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-300 font-regular mb-6">
            Not sure which plan is right? We'll explain the options clearly and only recommend what makes sense for your property.
          </p>
          <Link href="/contact">
            <button
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Speak to NOX
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
