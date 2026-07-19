"use client"

import { Card, CardContent } from "@/components/ui/card"
import HubSpotForm from "@/components/hubspot-form"

export default function QuickQuote() {
  return (
    <section id="quick-quote" className="py-20 !bg-black text-white relative z-10 transition-all duration-300 ease-in-out">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto border border-white/10 bg-black">
          <CardContent className="p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get a Free Quote</h2>
              <p className="text-lg text-gray-300">No obligation. Transparent pricing. Quick response.</p>
            </div>

            <HubSpotForm />

          </CardContent>
        </Card>
      </div>
    </section>
  )
}
