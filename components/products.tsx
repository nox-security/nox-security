import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const products = [
  {
    name: "Ajax MotionProtect",
    category: "Intruder",
    description: "Advanced wireless PIR motion detector with pet immunity up to 20kg, helping reduce unwanted activations while keeping detection reliable.",
    image: "ajax-products/ajax-motioncam.webp",
  },
  {
    name: "Ajax MotionCam",
    category: "Intruder",
    description: "Motion sensor with photo verification. Takes a photo on trigger so you can quickly see what caused the alarm.",
    image: "ajax-products/ajax-motioncam.webp",
  },
  {
    name: "Ajax DoorProtect",
    category: "Intruder",
    description: "Ultra-compact wireless reed-switch sensor for doors and windows. Know immediately when they open.",
    image: "ajax-products/ajax-doorprotect.webp",
  },
  {
    name: "Ajax Hub 2 Plus",
    category: "Intruder",
    description: "Central control panel. Connects via Wi-Fi, Ethernet & dual SIM 4G. Supports up to 100 devices.",
    image: "ajax-products/ajax-hub.webp",
  },
  {
    name: "Ajax KeyPad",
    category: "Intruder",
    description: "Wireless touch keypad with encrypted protection. Arm & disarm with PIN, card, or key fob.",
    image: "ajax-products/ajax-keypad-plus.webp",
    link: "https://youtu.be/VN6aPF8a3Gc?si=TkpUGd717Sj5GlWE"
  },
  {
    name: "Ajax Camera",
    category: "CCTV",
    description: "Professional-grade Ajax IP camera with night vision and smart motion detection. App-integrated.",
    image: "ajax-products/ajax-camera.webp",
    link: "https://youtu.be/Mwxe-dN9QeM?si=ornNrce-emvseoNH"
  },
  {
    name: "Ajax DoorBell",
    category: "CCTV",
    description: "HD video doorbell with two-way audio. See and speak with visitors from anywhere via the Ajax app.",
    image: "ajax-products/ajax-doorbell.webp",
    link: "https://youtu.be/pbD3b2awVG0?si=mOupU2K4S7X0A4wl"
  },
  {
    name: "Hikvision Dome",
    category: "CCTV",
    description: "Professional Hikvision CCTV options including dome, turret and ColourVu cameras with full-colour night vision and smart human and vehicle detection.",
    image: "HikvisionDome.jpg",
    link: "https://youtu.be/Mwxe-dN9QeM?si=ornNrce-emvseoNH"
  },
  {
    name: "Ajax LightSwitch",
    category: "Automation",
    description: "Smart touch light switch integrated into your Ajax system. Remote control and automation scenarios.",
    image: "ajax-products/ajax-lightswitch.webp",
    link: "https://youtu.be/hdz927FypAE?si=HYIHZ4dn4z3FDafE"
  },
  {
    name: "Ajax WaterStop",
    category: "Automation",
    description: "Wireless remotely controlled water shutoff valve that can help limit water damage when used with Ajax leak detection.",
    image: "ajax-products/ajax-waterstop.webp",
    link: "https://youtu.be/a8jo0k222Qk?si=67RB5H7Zdx5ZQq4X"
  },
]

const categories = ["All", "Intruder", "CCTV", "Automation"]

export default function Products() {
  return (
    <section id="products" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <img src="/images/logo-ajax-authorized-installation-company-en-wh.png" alt="Ajax Authorised" className="h-4" />
            Ajax Authorised · Hikvision & Other CCTV Systems
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Professional Security Products</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            We only install equipment we trust. Ajax is our preferred platform for smart intruder, fire and automation systems, with Hikvision, Ajax and other professional CCTV options specified around the property.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden border border-white/10 bg-black hover:border-white/40 transition-colors">
              <div className="aspect-square bg-[#080808] p-3 flex items-center justify-center overflow-hidden">
                <img
                  src={`/images/${product.image}`}
                  alt={product.name}
                  className="w-full h-full object-contain object-center"
                />
              </div>
              <CardContent className="p-4 space-y-2 bg-black text-white border-t border-white/10">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{product.category}</div>
                <h3 className="text-sm font-bold leading-snug">{product.name}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{product.description}</p>
                {product.link ? (
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full h-9 px-3 py-2 rounded-md border border-white/20 bg-transparent text-white text-xs font-semibold hover:bg-white hover:text-black transition-colors mt-1"
                  >
                    View Video
                  </a>
                ) : (
                  <Button variant="outline" size="sm" className="w-full text-xs font-semibold bg-transparent border-white/20">
                    View Details
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/systems">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 px-8 font-bold">
              View All Systems <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}