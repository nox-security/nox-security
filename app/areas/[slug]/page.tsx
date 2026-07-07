import Header from "@/components/header"
import Footer from "@/components/footer"
import Services from "@/components/services"
import CTASection from "@/components/cta-section"
import StickyContactButtons from "@/components/sticky-contact-buttons"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MapPin, Phone, MessageCircle, Shield, CheckCircle2, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

const areaNames = [
  "Chesterfield", "Sheffield", "Dronfield", "Eckington", "Clay Cross", "Bolsover",
  "Matlock", "Darley Dale", "Rowsley", "Wirksworth", "Bakewell", "Baslow",
  "Ashford in the Water", "Hassop", "Tideswell", "Buxton", "Hathersage",
  "Hope Valley", "Derbyshire", "North Yorkshire", "South Yorkshire",
  "Nottinghamshire", "Mansfield", "Worksop", "Rotherham", "Doncaster"
];

// All coverage areas with unique SEO content
const areaData: Record<string, {
  name: string
  county: string
  description: string
  intro: string
  metaTitle: string
  metaDescription: string
}> = {};

areaNames.forEach(name => {
  const slug = name.toLowerCase().replace(/ /g, '-');
  areaData[slug] = {
    name,
    county: "the UK",
    description: `We cover ${name} and the surrounding areas. Our engineers are regularly on-site across ${name} for both domestic and commercial installations, ensuring complete security coverage.`,
    intro: `NOX Fire & Security provides expert security system installation across ${name}. From CCTV and intruder alarms to fire detection and smart home security, we deliver professional-grade protection to homes and businesses.`,
    metaTitle: `CCTV, Fire & Security Systems ${name} | NOX Fire & Security`,
    metaDescription: `Expert CCTV installation, alarm systems & fire safety across ${name}. Free surveys, no-obligation quotes. Free surveys. Call 07882 959 297.`,
  };
});

// Custom overrides for key markets
areaData['chesterfield'] = {
  name: "Chesterfield",
  county: "Derbyshire",
  description: "As our home base, Chesterfield receives our fastest response times and most comprehensive coverage. From the town centre to Brimington, Hasland, Brampton, Newbold, and Whittington Moor — we protect homes and businesses across every postcode.",
  intro: "NOX Fire & Security is proudly based in Chesterfield, Derbyshire. We provide expert CCTV installation, intruder alarm systems, fire safety solutions, and 24/7 monitoring to homes and businesses across the town and all surrounding villages.",
  metaTitle: "CCTV & Alarm Installation Chesterfield | NOX Fire & Security",
  metaDescription: "Professional CCTV, intruder alarms & fire safety in Chesterfield. Based locally. Ajax & Hikvision authorised installers. Free site survey. Call 07882 959 297.",
};

areaData['sheffield'] = {
  name: "Sheffield",
  county: "South Yorkshire",
  description: "Sheffield is one of our primary coverage areas, just 12 miles from our Chesterfield base. We regularly install intruder alarms, CCTV, fire alarms, and smart automation throughout Sheffield — from Hillsborough and Crookes to Woodseats, Dore, Beauchief, and the city centre.",
  intro: "NOX Fire & Security serves homes and businesses across Sheffield with professional-grade security installation. Based in Chesterfield, our engineers provide fast, reliable CCTV, Ajax alarm, and fire safety installations across Sheffield and its suburbs.",
  metaTitle: "CCTV & Alarm Installation Sheffield | NOX Fire & Security",
  metaDescription: "Professional CCTV, intruder alarms & fire safety across Sheffield. Ajax & Hikvision authorised. Chesterfield-based engineers — fast response. Free site survey. Call 07882 959 297.",
};

areaData['derbyshire'] = {
  name: "Derbyshire",
  county: "Derbyshire",
  description: "Derbyshire is our home county. Based in Chesterfield, we cover the full county — from the Peak District towns of Bakewell and Matlock to Bolsover, Clay Cross, Eckington, Wirksworth, Buxton, Belper, and all points in between. Both residential and commercial projects welcome across the county.",
  intro: "NOX Fire & Security is a Derbyshire-based security installer serving the county's homes, businesses, and commercial properties. From CCTV and intruder alarms to fire alarm systems and smart automation — installed by local engineers who know the area.",
  metaTitle: "CCTV, Alarms & Fire Safety Derbyshire | NOX Fire & Security",
  metaDescription: "Local Derbyshire security installer. CCTV, intruder alarms, fire alarms & smart automation across Derbyshire. Ajax & Hikvision authorised. Free site survey. Call 07882 959 297.",
};

areaData['dronfield'] = {
  name: "Dronfield",
  county: "Derbyshire",
  description: "Dronfield sits between Chesterfield and Sheffield — ideally positioned for our team. We regularly install security systems across the town, from Coal Aston and Holmesdale to Unstone, Gosforth Valley, and Dronfield Woodhouse.",
  intro: "NOX Fire & Security covers Dronfield and the surrounding area with professional CCTV, intruder alarm, and fire safety installation. Based minutes away in Chesterfield, we respond fast and install to the highest standard.",
  metaTitle: "CCTV & Alarm Installation Dronfield | NOX Fire & Security",
  metaDescription: "Professional CCTV, alarms & fire safety in Dronfield. Local Chesterfield-based engineers. Ajax & Hikvision systems. Free survey & no-obligation quote. Call 07882 959 297.",
};

areaData['rotherham'] = {
  name: "Rotherham",
  county: "South Yorkshire",
  description: "We cover Rotherham for both residential and commercial security projects. Our Ajax-certified engineers install intruder alarms, CCTV systems, and fire detection throughout Rotherham and surrounding areas — including Wickersley, Maltby, Wath-upon-Dearne, and Rawmarsh.",
  intro: "NOX Fire & Security provides professional security installation across Rotherham — CCTV, intruder alarms, fire safety, and smart automation. Available for residential and larger commercial projects across South Yorkshire.",
  metaTitle: "CCTV & Alarm Installation Rotherham | NOX Fire & Security",
  metaDescription: "Professional CCTV, intruder alarms & fire safety across Rotherham. Ajax & Hikvision authorised. Free site survey. No-obligation quote. Call 07882 959 297.",
};

areaData['matlock'] = {
  name: "Matlock",
  county: "Derbyshire",
  description: "Matlock and the Derwent Valley is well within our coverage area. We install intruder alarms, CCTV, and fire safety systems for homes and businesses across Matlock, Matlock Bath, Darley Dale, and the wider Amber Valley area.",
  intro: "NOX Fire & Security covers Matlock and the Derwent Valley with professional CCTV, alarm, and fire safety installation. Local Chesterfield-based engineers who respond fast and install to the highest standard.",
  metaTitle: "CCTV & Alarm Installation Matlock | NOX Fire & Security",
  metaDescription: "Professional CCTV, alarms & fire safety in Matlock & Derbyshire. Local engineers. Ajax & Hikvision authorised. Free site survey. Call 07882 959 297.",
};

areaData['bakewell'] = {
  name: "Bakewell",
  county: "Derbyshire",
  description: "We regularly cover Bakewell, Ashford in the Water, Baslow, Hassop, and the wider Peak District for residential and commercial security projects. Ajax wireless systems are ideal for listed buildings, rural properties, and holiday lets where cable runs are difficult.",
  intro: "NOX Fire & Security serves Bakewell and the Peak District with professional CCTV, Ajax wireless alarms, and fire safety installation. Our wireless-first approach is perfect for rural properties, listed buildings, and Peak District holiday lets.",
  metaTitle: "CCTV & Alarm Installation Bakewell & Peak District | NOX Fire & Security",
  metaDescription: "Professional CCTV, alarms & fire safety in Bakewell & the Peak District. Ajax wireless systems ideal for listed buildings & rural properties. Free survey. Call 07882 959 297.",
};

areaData['buxton'] = {
  name: "Buxton",
  county: "Derbyshire",
  description: "We serve Buxton and the High Peak for professional security installation. Ajax wireless systems work particularly well across the rural and semi-rural properties throughout the High Peak, with no complicated cable runs needed.",
  intro: "NOX Fire & Security covers Buxton and the High Peak for CCTV, intruder alarm, and fire safety installation. Based in Chesterfield, our team is experienced with both residential and commercial projects across the High Peak.",
  metaTitle: "CCTV & Alarm Installation Buxton | NOX Fire & Security",
  metaDescription: "CCTV, intruder alarms & fire safety in Buxton & High Peak, Derbyshire. Ajax wireless systems. Local Chesterfield-based engineers. Free site survey. Call 07882 959 297.",
};

areaData['mansfield'] = {
  name: "Mansfield",
  county: "Nottinghamshire",
  description: "We cover Mansfield and the wider Nottinghamshire area for residential installations and commercial security projects. Our team is available for larger contracts including commercial CCTV, fire alarm systems, and monitored alarm installations.",
  intro: "NOX Fire & Security covers Mansfield and Nottinghamshire for professional security installation. Available for commercial and residential projects — CCTV, intruder alarms, fire safety, and 24/7 monitoring.",
  metaTitle: "CCTV & Alarm Installation Mansfield | NOX Fire & Security",
  metaDescription: "Professional CCTV, alarms & fire safety in Mansfield & Nottinghamshire. Commercial & residential. Ajax & Hikvision authorised. Free site survey. Call 07882 959 297.",
};

areaData['worksop'] = {
  name: "Worksop",
  county: "Nottinghamshire",
  description: "We serve Worksop and the Bassetlaw area for security installation projects. Whether residential or commercial, our team delivers professional CCTV, intruder alarms, and fire safety across the area.",
  intro: "NOX Fire & Security serves Worksop and Bassetlaw with professional security systems. Available for commercial and residential projects — CCTV, alarms, fire detection, and smart automation.",
  metaTitle: "CCTV & Alarm Installation Worksop | NOX Fire & Security",
  metaDescription: "Professional CCTV, alarms & fire safety in Worksop & Bassetlaw. Ajax & Hikvision authorised. Free site survey. No-obligation quote. Call 07882 959 297.",
};

// Generate static params for all areas
export function generateStaticParams() {
  return Object.keys(areaData).map((slug) => ({ slug }))
}

// Generate metadata for each area page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const area = areaData[slug]
  if (!area) {
    return { title: "Area Not Found | NOX Fire & Security" }
  }
  return {
    title: area.metaTitle,
    description: area.metaDescription,
    keywords: `CCTV ${area.name}, alarm installation ${area.name}, security systems ${area.name}, fire alarms ${area.name}, intruder alarms ${area.name}, smart security ${area.name}, CCTV installation ${area.county}, security ${area.county}`,
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
      type: "website",
      locale: "en_GB",
      siteName: "NOX Fire & Security",
    },
    alternates: {
      canonical: `https://nox-security.co.uk/areas/${slug}`,
    },
  }
}

const services = [
  "Intruder Alarm Installation",
  "CCTV Systems & Installation",
  "Fire Safety & Detection",
  "24/7 Monitoring (Farsight)",
  "Smart Home Security & Automation",
  "Fire Alarm Servicing",
  "Emergency Lighting (EEL)",
  "Fire Risk Assessments",
  "Maintenance & Takeover Services",
]

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const area = areaData[slug]

  if (!area) {
    return (
      <main className="min-h-screen bg-black text-white">
        <Header />
        <div className="py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Area Not Found</h1>
          <Link href="/areas-we-serve">
            <Button className="bg-white text-black hover:bg-gray-200">View All Areas</Button>
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  // JSON-LD structured data for this area
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "NOX Fire & Security",
    description: area.metaDescription,
    telephone: "07882959297",
    email: "info@nox-security.co.uk",
    url: `https://nox-security.co.uk/areas/${slug}`,
    areaServed: {
      "@type": "City",
      name: area.name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: area.county,
      },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chesterfield",
      addressRegion: "Derbyshire",
      addressCountry: "GB",
    },
    priceRange: "$$",
    openingHours: "Mo-Fr 08:00-18:00, Sa 09:00-16:00",
    sameAs: [
      "https://www.facebook.com/61584482913639/",
      "https://www.instagram.com/noxsecuritychesterfield",
    ],
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.04)_0%,transparent_60%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/areas-we-serve" className="hover:text-white transition-colors">Areas We Cover</Link>
              <span>/</span>
              <span className="text-white">{area.name}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              CCTV, Alarms & Fire Security in {area.name}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl">
              {area.intro}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/get-quote">
                <Button size="lg" className="h-14 px-10 bg-white text-black hover:bg-gray-100 font-bold text-lg">
                  Request Your Free Security Survey <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <a href="tel:07882959297">
                <Button size="lg" className="h-14 px-8 bg-white/10 text-white hover:bg-white/20 border border-white/20 font-bold text-lg">
                  <Phone className="h-5 w-5 mr-2" /> 07882 959 297
                </Button>
              </a>
              <a href="https://wa.me/447882959297" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="h-14 px-8 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-lg">
                  <MessageCircle className="h-5 w-5 mr-2" /> WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Area Details */}
      <section className="py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-6 w-6 text-white" />
                <h2 className="text-2xl md:text-3xl font-bold">Security Services in {area.name}, {area.county}</h2>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">{area.description}</p>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 mt-6">
                <h3 className="font-bold text-lg mb-4">Services Available in {area.name}</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map((service, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle2 className="h-4 w-4 text-white flex-shrink-0" />
                      <span className="text-sm">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              {/* Quick contact card */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4">Get a Quote in {area.name}</h3>
                <p className="text-gray-300 mb-6 text-sm">
                  Free site survey, no-obligation quote. We respond within 2 hours.
                </p>
                <div className="space-y-3">
                  <Link href="/get-quote" className="block">
                    <Button size="lg" className="w-full h-12 bg-white text-black hover:bg-gray-100 font-bold">
                      Free Security Survey <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                  <a href="https://wa.me/447882959297" target="_blank" rel="noopener noreferrer" className="block">
                    <Button size="lg" className="w-full h-12 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold">
                      <MessageCircle className="h-4 w-4 mr-2" /> WhatsApp Us
                    </Button>
                  </a>
                  <a href="tel:07882959297" className="block">
                    <Button size="lg" className="w-full h-12 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold">
                      <Phone className="h-4 w-4 mr-2" /> Call 07882 959 297
                    </Button>
                  </a>
                </div>
              </div>

              {/* Trust indicators */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4 hover-lift">
                  <Shield className="h-6 w-6 mx-auto mb-2 text-white" />
                  <div className="text-xs text-gray-400">Monitoring Available</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4 hover-lift">
                  <div className="text-xl font-bold text-white mb-1">5.0</div>
                  <div className="text-xs text-gray-400">Google Rating</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4 hover-lift">
                  <div className="text-xl font-bold text-white mb-1">10+</div>
                  <div className="text-xs text-gray-400">Years Exp.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <Services />

      {/* Coverage info */}
      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 bg-white text-black rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Based in Chesterfield, Derbyshire</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  NOX Fire &amp; Security is headquartered in Chesterfield and covers Chesterfield, Sheffield, and Derbyshire as our primary service area.
                  We are also available for larger residential and commercial projects across a wider radius — including South Yorkshire, Nottinghamshire, and the East Midlands.
                  Not sure if we cover you? <a href="tel:07882959297" className="underline hover:text-white">Give us a call</a> or send your postcode on WhatsApp.
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 text-sm">
              <div className="bg-black border border-white/10 rounded-lg p-4">
                <div className="font-bold text-white mb-1">Core Area</div>
                <div className="text-gray-400 text-xs">Chesterfield · Sheffield · Dronfield · Clay Cross · Bolsover · Eckington</div>
              </div>
              <div className="bg-black border border-white/10 rounded-lg p-4">
                <div className="font-bold text-white mb-1">Derbyshire-wide</div>
                <div className="text-gray-400 text-xs">Matlock · Bakewell · Buxton · Hope Valley · Wirksworth · Darley Dale</div>
              </div>
              <div className="bg-black border border-white/10 rounded-lg p-4">
                <div className="font-bold text-white mb-1">Wider Projects</div>
                <div className="text-gray-400 text-xs">Rotherham · Mansfield · Worksop · Doncaster · South Yorkshire · Nottinghamshire</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
      <StickyContactButtons />
    </main>
  )
}
