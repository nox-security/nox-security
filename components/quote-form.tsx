"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Shield, CheckCircle2, Send, Phone, MessageCircle } from "lucide-react"

type FormState = "idle" | "submitting" | "success" | "error"

export default function QuoteForm() {
  const [formState, setFormState] = useState<FormState>("idle")
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    postcode: "",
    requirement: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("submitting")

    // Track form submission
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "form_submit", {
        event_category: "lead",
        event_label: "quote_form",
      })
    }

    try {
      const res = await fetch("https://formsubmit.co/ajax/info@nox-security.co.uk", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New Quote Request from ${formData.name} — ${formData.postcode}`,
          name: formData.name,
          phone: formData.phone,
          postcode: formData.postcode,
          requirement: formData.requirement,
          _template: "table",
        }),
      })

      if (res.ok) {
        setFormState("success")
        setFormData({ name: "", phone: "", postcode: "", requirement: "" })
      } else {
        setFormState("error")
      }
    } catch {
      setFormState("error")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  if (formState === "success") {
    return (
      <div className="text-center py-12 space-y-4">
        <CheckCircle2 className="h-16 w-16 text-green-400 mx-auto" />
        <h3 className="text-2xl font-bold text-white">Quote Request Received!</h3>
        <p className="text-gray-300 max-w-md mx-auto">
          Thanks {formData.name || ""}! We'll be in touch within 2 hours during business hours.
          Prefer faster? WhatsApp us directly.
        </p>
        <a
          href="https://wa.me/447882959297?text=Hi%20NOX%20%E2%80%94%20I%20just%20submitted%20a%20quote%20request!"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-lg font-semibold transition-colors mt-2"
        >
          <MessageCircle className="h-5 w-5" />
          WhatsApp Us
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="quote-name" className="block text-sm font-semibold text-gray-200 mb-2">
          Your Name *
        </label>
        <input
          id="quote-name"
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. John Smith"
          className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-500 rounded-xl px-5 py-4 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all text-base"
        />
      </div>

      <div>
        <label htmlFor="quote-phone" className="block text-sm font-semibold text-gray-200 mb-2">
          Phone Number *
        </label>
        <input
          id="quote-phone"
          type="tel"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          placeholder="e.g. 07700 900000"
          className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-500 rounded-xl px-5 py-4 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all text-base"
        />
      </div>

      <div>
        <label htmlFor="quote-postcode" className="block text-sm font-semibold text-gray-200 mb-2">
          Postcode *
        </label>
        <input
          id="quote-postcode"
          type="text"
          name="postcode"
          required
          value={formData.postcode}
          onChange={handleChange}
          placeholder="e.g. S40 1AB"
          className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-500 rounded-xl px-5 py-4 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all text-base uppercase"
        />
      </div>

      <div>
        <label htmlFor="quote-requirement" className="block text-sm font-semibold text-gray-200 mb-2">
          What Do You Need? *
        </label>
        <select
          id="quote-requirement"
          name="requirement"
          required
          value={formData.requirement}
          onChange={handleChange}
          className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-5 py-4 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all text-base appearance-none"
        >
          <option value="" className="bg-black text-gray-400">Select a service...</option>
          <option value="Intruder Alarm" className="bg-black">Intruder Alarm</option>
          <option value="CCTV System" className="bg-black">CCTV System</option>
          <option value="Fire Alarm System" className="bg-black">Fire Alarm System</option>
          <option value="Emergency Lighting" className="bg-black">Emergency Lighting</option>
          <option value="Fire Risk Assessment" className="bg-black">Fire Risk Assessment</option>
          <option value="Alarm Maintenance Plan" className="bg-black">Alarm Maintenance Plan</option>
          <option value="CCTV Maintenance Plan" className="bg-black">CCTV Maintenance Plan</option>
          <option value="Alarm Monitoring" className="bg-black">Alarm Monitoring</option>
          <option value="Multiple Services" className="bg-black">Multiple Services</option>
          <option value="Other / Not Sure" className="bg-black">Other / Not Sure</option>
        </select>
      </div>

      {formState === "error" && (
        <p className="text-red-400 text-sm">
          Something went wrong. Please try again or call us directly on{" "}
          <a href="tel:07882959297" className="underline">07882 959 297</a>.
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={formState === "submitting"}
        className="w-full h-16 bg-white text-black hover:bg-gray-100 font-bold text-base rounded-xl shadow-lg disabled:opacity-50 transition-all"
      >
        {formState === "submitting" ? (
          "Sending your request..."
        ) : (
          <>
            <Send className="h-5 w-5 mr-2" />
            Request a Free Security Survey
          </>
        )}
      </Button>

      <div className="grid grid-cols-3 gap-2 pt-2">
        <div className="flex flex-col items-center gap-1 text-center bg-white/5 rounded-lg p-3">
          <Shield className="h-4 w-4 text-white" />
          <span className="text-xs text-gray-300 font-medium">No Obligation</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-center bg-white/5 rounded-lg p-3">
          <CheckCircle2 className="h-4 w-4 text-white" />
          <span className="text-xs text-gray-300 font-medium">2hr Response</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-center bg-white/5 rounded-lg p-3">
          <Phone className="h-4 w-4 text-white" />
          <span className="text-xs text-gray-300 font-medium">Free Survey</span>
        </div>
      </div>
    </form>
  )
}
