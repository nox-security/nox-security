"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export interface FAQItem {
    q: string
    a: string
}

interface ServiceFAQProps {
    faqs: FAQItem[]
    title?: string
}

export default function ServiceFAQ({ faqs, title = "Frequently Asked Questions" }: ServiceFAQProps) {
    const [open, setOpen] = useState<number | null>(null)

    return (
        <section className="py-16 border-t border-white/10">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">{title}</h2>
                <div className="space-y-3">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border border-white/10 rounded-xl overflow-hidden">
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white/5 hover:bg-white/10 transition-colors"
                                aria-expanded={open === i}
                            >
                                <span className="font-semibold text-white">{faq.q}</span>
                                <ChevronDown
                                    className={`h-5 w-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                                />
                            </button>
                            {open === i && (
                                <div className="px-6 py-5 bg-black border-t border-white/10">
                                    <p className="text-gray-300 leading-relaxed text-sm">{faq.a}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
