import { Phone, CalendarCheck, Wrench } from "lucide-react"

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Call or Book Online",
    description:
      "Get in touch via phone, WhatsApp, or our quick quote form. We respond within 2 hours during business hours.",
  },
  {
    icon: CalendarCheck,
    number: "02",
    title: "Free Site Survey",
    description:
      "Our expert visits your property, assesses your needs, and provides a transparent, no-obligation quote.",
  },
  {
    icon: Wrench,
    number: "03",
    title: "Professional Install",
    description:
      "Trained engineers install your system with minimal disruption. We test everything properly and show you how to use it before we leave.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">How It Works</h2>
          <p className="text-lg text-gray-30 leading-relaxed">
            Three simple steps to complete security. No hassle, no confusion—just protection.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative text-center">
                <div className="inline-flex w-20 h-20 rounded-full bg-white text-black items-center justify-center mb-6">
                  <Icon className="h-10 w-10" />
                </div>
                <div className="absolute top-10 left-1/2 -translate-x-1/2 text-8xl font-bold text-gray-90 opacity-20 -z-10">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-30 leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
