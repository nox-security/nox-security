import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Camera, Bell, Shield, Smartphone, Lock, Eye, Wrench, Lightbulb, ClipboardCheck, Settings } from "lucide-react"

const services = [
  {
    icon: Bell,
    title: "Intruder Alarms",
    description: "Grade 2 & 3 wireless or hybrid systems. Smart app control with no monthly contracts necessary.",
    image: "/images/intrusion-alarms.png",
    link: "/systems/intrusion-alarms"
  },
  {
    icon: Camera,
    title: "CCTV",
    description: "4K ColorVu technology. Full color night vision with smart human and vehicle detection.",
    image: "/images/cctv-systems-image.png",
    link: "/systems/cctv"
  },
  {
    icon: Shield,
    title: "Fire Safety",
    description: "Professional fire detection for homes and businesses. Interlinked smoke, heat, and CO sensors.",
    image: "/images/fire-life-safety.png",
    link: "/systems/fire-safety"
  },
  {
    icon: Eye,
    title: "Monitoring",
    description: "Farsight monitored systems with visual verification for police response.",
    image: "/images/Monitoring.png",
    link: "/service-plans"
  },
  {
    icon: Lock,
    title: "Perimeter Protection",
    description: "Stop intruders before they reach the building. Outdoor motion sensors, beams, and external sirens for early detection.",
    image: "/images/AjaxDualcurtain.jpg",
    link: "/systems/intrusion-alarms"
  },
  {
    icon: Wrench,
    title: "Fire Alarm Servicing",
    description: "Routine maintenance and testing to ensure your fire systems comply with all regulations.",
    image: "/images/FireAlaramServicingImage.jpeg",
    link: "/service-plans/fire-alarm-servicing"
  },
  {
    icon: Lightbulb,
    title: "Emergency Lighting (EEL)",
    description: "Installation and testing of emergency lighting systems to guide safe evacuation.",
    image: "/images/EmergencyLighting.jpeg",
    link: "/systems/emergency-lighting"
  },
  {
    icon: ClipboardCheck,
    title: "Fire Risk Assessments",
    description: "Comprehensive risk assessments to identify hazards and ensure full legal compliance.",
    image: "/images/FireAlaramServicingImage.jpeg",
    link: "/systems/fire-risk-assessment"
  },
  {
    icon: Settings,
    title: "Maintenance / Takeover",
    description: "We can take over, fix, and maintain existing security and fire systems smoothly.",
    image: "/images/Maintenence.png",
    link: "/service-plans"
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Everything We Install &amp; Maintain</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Residential &amp; commercial security across Chesterfield, Sheffield &amp; Derbyshire. CCTV · Intruder Alarms · Fire Alarms · Emergency Lighting · Fire Risk Assessments · Monitoring · Maintenance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border border-white/10 bg-black hover:border-white transition-colors duration-300 hover-lift">
                <CardContent className="p-6 space-y-4">
                  <div className="w-full aspect-video rounded-lg overflow-hidden bg-gray-900 mb-4 border border-white/10 relative">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-white text-black flex items-center justify-center">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed min-h-[48px]">{service.description}</p>
                  <Link href={service.link} className="w-full block pt-2">
                    <Button variant="outline" className="w-full font-semibold bg-transparent text-white border-white hover:bg-white hover:text-black">
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Link href="/get-quote">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 px-8">
              Free Security Servey
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
