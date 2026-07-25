import { MapPin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const coreAreas = [
  { name: "Chesterfield", slug: "chesterfield", note: "Our base" },
  { name: "Sheffield", slug: "sheffield" },
  { name: "Dronfield", slug: "dronfield" },
  { name: "Eckington", slug: "eckington" },
  { name: "Clay Cross", slug: "clay-cross" },
  { name: "Bolsover", slug: "bolsover" },
  { name: "Rotherham", slug: "rotherham" },
  { name: "Alfreton", slug: "alfreton" },
  { name: "Mansfield", slug: "mansfield" },
  { name: "Ripley", slug: "ripley" },
]

const derbyshireAreas = [
  { name: "Matlock", slug: "matlock" },
  { name: "Bakewell", slug: "bakewell" },
  { name: "Baslow", slug: "baslow" },
  { name: "Buxton", slug: "buxton" },
  { name: "Hathersage", slug: "hathersage" },
  { name: "Hope Valley", slug: "hope-valley" },
  { name: "Wirksworth", slug: "wirksworth" },
  { name: "Belper", slug: "belper" },
  { name: "Ashbourne", slug: "ashbourne" },
]

const widerAreas = [
  { name: "Derby", slug: "derby" },
  { name: "Nottingham", slug: "nottingham" },
  { name: "Doncaster", slug: "doncaster" },
  { name: "Retford", slug: "retford" },
  { name: "Newark-on-Trent", slug: "newark-on-trent" },
  { name: "Ilkeston", slug: "ilkeston" },
  { name: "Sutton-in-Ashfield", slug: "sutton-in-ashfield" },
  { name: "Long Eaton", slug: "long-eaton" },
]

export default function ServiceAreas() {
  return (
    <section id="areas" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="h-4 w-4" />
              Based in Chesterfield, Derbyshire
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              Areas We Cover
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Based in Chesterfield, NOX Fire &amp; Security installs smart intruder alarms, CCTV systems, fire alarms and commercial security systems across Chesterfield, Sheffield, Derbyshire and surrounding areas. We also cover the Peak District, Amber Valley, Erewash and selected South Yorkshire and Nottinghamshire locations for suitable commercial and larger residential projects.
            </p>
          </div>

          {/* Tier 1 — Core */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <span className="text-sm font-bold text-white uppercase tracking-widest">Core Coverage — Fast Response</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {coreAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className="group bg-white/10 border border-white/20 rounded-lg p-3 hover:bg-white hover:text-black transition-all"
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-semibold leading-tight">{area.name}</div>
                      {area.note && <div className="text-xs opacity-60">{area.note}</div>}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Tier 2 — Derbyshire */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-gray-400"></div>
              <span className="text-sm font-bold text-gray-300 uppercase tracking-widest">Peak District & Derbyshire</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {derbyshireAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className="group bg-white/5 border border-white/10 rounded-lg p-3 hover:border-white/40 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3 w-3 text-gray-400 group-hover:text-white transition-colors flex-shrink-0" />
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{area.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Tier 3 — Wider */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-gray-600"></div>
              <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Wider Growth Areas — Commercial &amp; Larger Projects</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {widerAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className="group bg-white/5 border border-white/10 rounded-lg p-3 hover:border-white/30 transition-all"
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3 w-3 text-gray-600 group-hover:text-gray-400 transition-colors flex-shrink-0" />
                    <span className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors">{area.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center border-t border-white/10 pt-10">
            <p className="text-gray-400 text-sm mb-5">
              Not sure if we cover your postcode? Send it and we'll confirm — usually within the hour.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/get-quote">
                <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold px-8">
                  <MapPin className="mr-2 h-4 w-4" /> Get a Fire & Security Quote
                </Button>
              </Link>
              <a href="https://wa.me/447882959297?text=Hi%20NOX%20%E2%80%94%20can%20you%20cover%20my%20postcode%3F" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="bg-transparent text-white border-white/30 hover:bg-white/10 font-bold px-8">
                  Send Your Postcode
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

