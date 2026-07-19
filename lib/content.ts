export type LinkItem = { href: string; label: string }
export type TextItem = { title: string; text: string }
export type FAQItem = { q: string; a: string }
export type ProductItem = { name: string; description: string; image: string; imageAlt: string }
export type VideoItem = { title: string; text: string; youtubeId: string }

export type ServicePageData = {
  slug: string
  eyebrow: string
  title: string
  metaTitle: string
  metaDescription: string
  intro: string
  image: string
  imageAlt: string
  problemTitle: string
  problemText: string
  benefits: string[]
  suitableFor: string[]
  process: TextItem[]
  details: TextItem[]
  faq: FAQItem[]
  related: LinkItem[]
  caseStudySlugs: string[]
  products?: ProductItem[]
  videos?: VideoItem[]
  platformTitle?: string
  platformText?: string
}

export type PlanPageData = {
  slug: string
  eyebrow: string
  title: string
  metaTitle: string
  metaDescription: string
  intro: string
  image: string
  imageAlt: string
  residentialPrice?: string
  commercialPrice?: string
  priceNote?: string
  included: string[]
  suitableFor: string[]
  process: TextItem[]
  details: TextItem[]
  faq: FAQItem[]
  related: LinkItem[]
}

export type VerifiedReview = {
  name: string
  rating: number
  service: string
  text: string
}

export const verifiedReviews: VerifiedReview[] = [
  {
    name: "Rory Stirland",
    rating: 5,
    service: "Commercial Fire Alarm & Intruder Alarm",
    text: "We had NOX Fire & Security install our commercial fire alarm system alongside an intruder alarm, and the whole experience was spot on from start to finish. Clean, professional installation, everything clearly explained, and the system is easy to manage through the app with instant alerts. The fire system is clear, reliable and easy for the team to manage without overcomplicating things. No pushy sales, no unnecessary contracts — just honest advice and proper workmanship. You can tell they care about doing things right. Highly recommend NOX for any business looking for fire or security systems in Chesterfield / Sheffield."
  },
  {
    name: "Ryan Hargreaves",
    rating: 5,
    service: "Ajax Alarm System",
    text: "Brilliant service from NOX. Super professional, knowledgeable, and they went out of their way to be helpful. Everything was explained clearly and in detail. The install was tidy, and the whole process was smooth from start to finish. We were thinking about getting a security system for a while and now we're so glad we went with NOX. Would 100% recommend to anyone."
  },
  {
    name: "Nathan De La Rosa",
    rating: 5,
    service: "Commercial CCTV, Alarms & Smoke Screens",
    text: "We recently had NOX install cameras, smoke screens, and alarms at our office and the whole experience has been spot on from start to finish. From the very first phone call with Isaac, everything felt straightforward and reassuring. He took the time to explain our options, answered all our questions, and helped design a system that made sense for our building and our budget. No pushy sales tactics at all, which was refreshing. The installation was smooth, the team were professional, and even after everything was fitted, Isaac has been on hand to help with any follow-up questions. A really great service and a company I'd happily recommend."
  },
  {
    name: "Sasha Brailsford",
    rating: 5,
    service: "Ajax Smart Security & Automation",
    text: "Really impressed with NOX Fire & Security. Isaac, Joe and James made everything super easy from start to finish — no pressure, just honest advice and a system tailored exactly to what I needed. Love how personalised it is, and being able to control my heating, washing machine and lights all from the same security app is a game changer. The lads were friendly, tidy, and took the time to show me how everything worked before they left. Feels good knowing it's all been done properly. Would definitely recommend."
  },
  {
    name: "Jeremy Bunting",
    rating: 5,
    service: "Security System Installation",
    text: "Seamless journey from start to finish! I filled in the simple form and was soon contacted by the team. They were very knowledgeable, professional and really listened to my needs. I have since had a system installed. The price was much less than I had expected and so far the aftercare has been great. I can't recommend them enough!"
  },
  {
    name: "Jez S",
    rating: 5,
    service: "Commercial CCTV",
    text: "Professional, friendly and sensible pricing. From first contact to completion the process was smooth and stress-free. The team clearly know their stuff and the system is exactly what we needed. Would have no hesitation recommending NOX to other businesses."
  }
]

export type CaseStudy = {
  slug: string
  title: string
  location: string
  category: string
  image: string
  alt: string
  summary: string
  story?: string
  requirement: string
  delivery: string
  systems: string[]
  gallery?: { src: string; alt: string }[]
  metaTitle?: string
  metaDescription?: string
  searchKeywords?: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "bottle-and-thyme-commercial-cctv-chesterfield",
    title: "Commercial CCTV installation at Bottle & Thyme",
    location: "Chesterfield, Derbyshire",
    category: "Hospitality CCTV",
    image: "/images/projects/bottle-thyme-exterior-2.jpg",
    alt: "Bottle and Thyme in Chesterfield protected by a NOX commercial CCTV system",
    summary: "A professional CCTV installation for a distinctive hospitality venue in Chesterfield town centre.",
    story: "Bottle & Thyme is a prominent hospitality property in Chesterfield. NOX installed and commissioned a professional recorded CCTV system, configured the live-view display and completed a clear customer handover. The project demonstrates how commercial security can be designed around a working venue without detracting from the character of the building.",
    requirement: "Provide dependable recorded CCTV coverage for a busy hospitality premises, with practical live viewing for the customer.",
    delivery: "NOX completed the camera, recorder and viewing setup, tested the system and handed it over to the customer.",
    systems: ["Commercial CCTV", "Network video recorder", "Live viewing", "Hospitality security"],
    gallery: [
      { src: "/images/projects/bottle-thyme-exterior-1.jpg", alt: "Exterior of Bottle and Thyme in Chesterfield" },
      { src: "/images/projects/bottle-thyme-bellbox.jpg", alt: "NOX Fire and Security warning device at Bottle and Thyme" },
      { src: "/images/projects/bottle-thyme-nvr.jpg", alt: "Commercial CCTV recorder installed at Bottle and Thyme" },
      { src: "/images/projects/bottle-thyme-monitor-wide.jpg", alt: "Bottle and Thyme CCTV live-view monitor" },
      { src: "/images/projects/bottle-thyme-vehicles.jpg", alt: "NOX Fire and Security vehicles outside a Chesterfield commercial project" }
    ],
    metaTitle: "Commercial CCTV Installation Chesterfield | Bottle & Thyme",
    metaDescription: "See NOX Fire & Security's commercial CCTV installation at Bottle & Thyme in Chesterfield, including recording, live viewing and professional handover.",
    searchKeywords: ["commercial CCTV installation Chesterfield", "hospitality CCTV Chesterfield", "CCTV installer Chesterfield", "business security systems Derbyshire"]
  },
  {
    slug: "tan-station-fire-security-brimington",
    title: "Black CCTV and fire first-fix at The Tan Station",
    location: "Brimington, Chesterfield",
    category: "Commercial Fire & Security",
    image: "/images/projects/tan-station-exterior.jpg",
    alt: "The Tan Station in Brimington during a NOX Fire and Security installation",
    summary: "A coordinated commercial project combining discreet black CCTV equipment with fire-alarm first-fix work.",
    story: "The Tan Station was developed around a modern, premium interior and exterior finish. NOX coordinated black CCTV equipment with the property design and completed fire-alarm first-fix work during the fit-out stage, helping the different systems sit naturally within the wider project.",
    requirement: "Plan CCTV and fire infrastructure around an active commercial fit-out while keeping the visible equipment consistent with the black interior and exterior design.",
    delivery: "NOX completed fire-alarm first-fix work and installed black internal and external CCTV cameras in positions selected around the premises.",
    systems: ["Commercial CCTV", "Black turret cameras", "Fire alarm first fix", "Commercial fit-out"],
    gallery: [
      { src: "/images/projects/tan-station-fire-first-fix.jpg", alt: "Fire alarm cable first fix at The Tan Station in Brimington" },
      { src: "/images/projects/tan-station-camera-internal-1.jpg", alt: "Black internal CCTV camera at The Tan Station" },
      { src: "/images/projects/tan-station-camera-external-1.jpg", alt: "Black external CCTV camera at The Tan Station" },
      { src: "/images/projects/tan-station-camera-internal-2.jpg", alt: "Discreet black CCTV camera inside The Tan Station" },
      { src: "/images/projects/tan-station-camera-external-2.jpg", alt: "Commercial CCTV camera installed on the black exterior of The Tan Station" }
    ],
    metaTitle: "Commercial Fire & CCTV Installation Brimington | NOX",
    metaDescription: "Commercial CCTV and fire-alarm first-fix project at The Tan Station in Brimington, Chesterfield, delivered by NOX Fire & Security.",
    searchKeywords: ["commercial CCTV Brimington", "fire alarm installation Chesterfield", "commercial fire and security systems", "CCTV installation Derbyshire"]
  },
  {
    slug: "retford-former-bank-cctv",
    title: "Ten-camera Hikvision CCTV system at a former bank",
    location: "Retford, DN22",
    category: "Commercial CCTV",
    image: "/images/projects/retford-building.jpg",
    alt: "Former bank in Retford fitted with a ten-camera Hikvision CCTV system",
    summary: "A ten-camera Hikvision CCTV upgrade covering the internal and external areas of a former bank in Retford.",
    story: "This substantial commercial property required recorded coverage across entrances, corridors, internal rooms and the external approach. NOX installed ten Hikvision cameras and a new recorder, configured the viewing monitor and commissioned the system for straightforward day-to-day use.",
    requirement: "Replace and improve the CCTV coverage across a multi-room former bank premises in Retford.",
    delivery: "NOX installed ten Hikvision cameras, a Hikvision recorder and a dedicated live-view display before testing and handing over the system.",
    systems: ["Ten Hikvision cameras", "Hikvision recorder", "Commercial live viewing", "Internal and external CCTV"],
    gallery: [
      { src: "/images/projects/retford-equipment.jpg", alt: "Hikvision ColorVu cameras and AcuSense recorder prepared for the Retford installation" },
      { src: "/images/projects/retford-camera-close-1.jpg", alt: "Hikvision ColorVu turret camera installed at the former bank" },
      { src: "/images/projects/retford-camera-fire-bell.jpg", alt: "Hikvision camera positioned inside the Retford commercial property" },
      { src: "/images/projects/retford-monitor-grid.jpg", alt: "Ten-camera CCTV coverage displayed at the Retford former bank" },
      { src: "/images/projects/retford-monitor-detail.jpg", alt: "Detailed CCTV image from the Retford Hikvision system" }
    ],
    metaTitle: "Hikvision CCTV Installation Retford | 10-Camera Project",
    metaDescription: "A ten-camera Hikvision CCTV installation for a former bank in Retford DN22, including ColorVu cameras, recording and live viewing.",
    searchKeywords: ["CCTV installation Retford", "Hikvision installer Retford", "commercial CCTV DN22", "business CCTV Nottinghamshire", "ColorVu CCTV installation"]
  },
  {
    slug: "chesterfield-home-ajax-cctv-intruder",
    title: "Ajax intruder and black CCTV for a Chesterfield home",
    location: "Chesterfield, Derbyshire",
    category: "Residential Fire & Security",
    image: "/images/projects/chesterfield-home-exterior.jpg",
    alt: "Chesterfield home protected by a NOX Ajax intruder alarm and black CCTV cameras",
    summary: "A property-led residential installation combining Ajax intruder protection, black CCTV cameras and a NOX external warning device.",
    story: "The property was being renovated and needed a modern security system that would remain discreet against the finished brickwork. NOX combined app-controlled intruder protection with black external CCTV cameras, a keypad and a branded external warning device.",
    requirement: "Protect the home, garage and external approaches with equipment that suited the appearance of the renovated property.",
    delivery: "NOX installed the intruder controls, external warning device, recording equipment and black CCTV cameras, then configured the system for the customer.",
    systems: ["Ajax intruder alarm", "Black CCTV cameras", "Ajax keypad", "NOX external warning device"],
    gallery: [
      { src: "/images/projects/chesterfield-home-cameras.jpg", alt: "Two black external CCTV cameras installed on a Chesterfield home" },
      { src: "/images/projects/chesterfield-home-camera-close.jpg", alt: "Black Ajax-style CCTV camera installed beneath the roofline" },
      { src: "/images/projects/chesterfield-home-bellbox.jpg", alt: "NOX branded external alarm warning device on a Chesterfield home" },
      { src: "/images/projects/chesterfield-home-recorder.jpg", alt: "Residential CCTV recorder installed at the Chesterfield property" },
      { src: "/images/projects/chesterfield-home-keypad.jpg", alt: "Black Ajax keypad installed inside a Chesterfield home" }
    ],
    metaTitle: "Ajax Alarm & CCTV Installation Chesterfield | Residential",
    metaDescription: "Residential Ajax intruder alarm and black CCTV installation in Chesterfield, including keypad, recording and external warning device.",
    searchKeywords: ["Ajax alarm installation Chesterfield", "home security Chesterfield", "intruder alarm installer Chesterfield", "residential CCTV Derbyshire", "smart home security Chesterfield"]
  },
  {
    slug: "eufy-smart-home-cctv-chesterfield",
    title: "Solar and floodlight smart-home CCTV",
    location: "Chesterfield, Derbyshire",
    category: "Smart-home CCTV",
    image: "/images/projects/eufy-home-exterior.jpg",
    alt: "Chesterfield home with smart solar and floodlight CCTV installed by NOX",
    summary: "A residential smart-camera project using solar and floodlight camera options around the property.",
    story: "Not every home requires a full wired CCTV recorder. For this Chesterfield property, NOX installed a selection of Eufy solar and floodlight cameras around key external areas, providing a practical smart-home CCTV option based on the customer's property and requirements.",
    requirement: "Add external camera coverage around the home using a lower-disruption smart-camera approach.",
    delivery: "NOX positioned and configured the solar and floodlight cameras, completed the associated smart setup and demonstrated the system to the customer.",
    systems: ["Eufy solar CCTV", "Floodlight cameras", "Smart-home app", "Residential external coverage"],
    gallery: [
      { src: "/images/projects/eufy-solar-camera-1.jpg", alt: "Eufy solar security camera installed in Chesterfield" },
      { src: "/images/projects/eufy-solar-camera-2.jpg", alt: "Solar-powered smart CCTV camera on a Chesterfield home" },
      { src: "/images/projects/eufy-equipment.jpg", alt: "Eufy smart-home CCTV equipment prepared for installation" },
      { src: "/images/projects/eufy-floodlight-camera-1.jpg", alt: "Eufy floodlight CCTV camera installed above a rear entrance" },
      { src: "/images/projects/eufy-roof-camera.jpg", alt: "Smart CCTV camera installed at roof level on a Chesterfield property" }
    ],
    metaTitle: "Solar & Smart Home CCTV Chesterfield | Eufy Installation",
    metaDescription: "Smart-home CCTV installation in Chesterfield using Eufy solar and floodlight cameras, professionally positioned and configured by NOX.",
    searchKeywords: ["solar CCTV Chesterfield", "wireless CCTV installation Chesterfield", "Eufy installer Chesterfield", "smart home security cameras Derbyshire"]
  },
  {
    slug: "dronfield-timber-perimeter",
    title: "External Ajax detection at a Dronfield industrial site",
    location: "Dronfield, Derbyshire",
    category: "Industrial perimeter protection",
    image: "/images/resent-installation/B563DA1D-D64B-4DF3-8058-BC6E01154EC3.png",
    alt: "External Ajax detection protecting an industrial timber site in Dronfield",
    summary: "Five outdoor Ajax detectors and external sirens creating an earlier warning layer around a working industrial site.",
    story: "The Dronfield site needed protection around its external approaches rather than relying only on detection inside the building. NOX designed a perimeter layer using five outdoor Ajax detectors and external sirens around the key routes into the premises.",
    requirement: "Provide external warning around a working industrial site with valuable stock and several vulnerable approaches.",
    delivery: "NOX installed five Ajax outdoor detectors and external warning sirens, then tested the detection zones and completed the system handover.",
    systems: ["Five Ajax outdoor detectors", "External sirens", "Industrial perimeter protection", "Dronfield installation"],
    metaTitle: "Industrial Perimeter Protection Dronfield | Ajax Detection",
    metaDescription: "External Ajax perimeter protection for an industrial site in Dronfield, using five outdoor detectors and external warning sirens.",
    searchKeywords: ["industrial security Dronfield", "Ajax perimeter protection Dronfield", "commercial intruder alarm Derbyshire", "outdoor detection Dronfield"]
  },
  {
    slug: "buxton-industrial-security",
    title: "Industrial alarm and nine-camera CCTV system",
    location: "Buxton, Derbyshire",
    category: "Industrial Fire & Security",
    image: "/images/resent-installation/F5B46861-7E5F-416A-BD90-69C544691E7A.png",
    alt: "NOX commercial CCTV installation at an industrial site in Buxton",
    summary: "A joined-up intruder and nine-camera CCTV installation for an industrial premises in Buxton.",
    story: "A busy industrial site in Buxton required one joined-up security approach. NOX combined an Ajax intruder alarm with a nine-camera CCTV system planned around the premises and its working areas.",
    requirement: "Provide intruder protection and a nine-camera CCTV system for the industrial site.",
    delivery: "NOX installed the Ajax intruder alarm and nine-camera CCTV system within the confirmed project scope.",
    systems: ["Ajax intruder alarm", "Nine-camera CCTV system", "Industrial premises"],
    searchKeywords: ["industrial CCTV Buxton", "commercial alarm installation Buxton", "security systems Derbyshire"]
  },
  {
    slug: "chesterfield-scrapyard-cctv",
    title: "Thirteen-camera commercial CCTV installation",
    location: "Chesterfield, Derbyshire",
    category: "Commercial CCTV",
    image: "/images/resent-installation/5565AAD0-9F37-4C18-9E4A-1147A4389378.png",
    alt: "8MP AI turret CCTV cameras installed at a Chesterfield scrapyard",
    summary: "A higher-camera-count CCTV installation across a commercial yard in Chesterfield.",
    story: "Thirteen 8MP AI turret cameras were positioned across a working scrapyard to cover vehicle routes, operational areas and the wider site with a clearer recorded view.",
    requirement: "Install wider CCTV coverage using thirteen cameras across the scrapyard site.",
    delivery: "NOX installed thirteen 8MP AI turret cameras as the confirmed project scope.",
    systems: ["Thirteen CCTV cameras", "8MP AI turret cameras", "Commercial yard"],
    searchKeywords: ["commercial CCTV Chesterfield", "scrapyard CCTV", "13 camera CCTV installation"]
  },
  {
    slug: "peak-electronic-security",
    title: "Intruder and nine-camera CCTV installation",
    location: "Derbyshire",
    category: "Commercial alarm & CCTV",
    image: "/images/resent-installation/7A22DFA9-C5DE-4E26-8B68-52E8E3CAB865.png",
    alt: "Ajax intruder alarm and CCTV installation for Peak Electronic",
    summary: "A combined Ajax intruder and nine-camera CCTV installation for Peak Electronic.",
    story: "Ajax intruder protection and nine CCTV cameras were brought together for Peak Electronic, giving the commercial property one joined-up security approach with recording and live viewing.",
    requirement: "Provide intruder protection and nine CCTV cameras for Peak Electronic.",
    delivery: "NOX installed the Ajax intruder system and nine-camera CCTV system within the agreed project.",
    systems: ["Ajax intruder system", "Nine CCTV cameras", "Commercial installation"],
    searchKeywords: ["commercial CCTV Derbyshire", "Ajax intruder alarm business", "nine camera CCTV system"]
  },
  {
    slug: "sheffield-residential-security",
    title: "Residential CCTV and intruder protection",
    location: "Sheffield, South Yorkshire",
    category: "Residential security",
    image: "/images/resent-installation/B17CAA16-7E26-4342-BD6F-B777359E2BEB.png",
    alt: "Residential CCTV and Ajax intruder alarm installed in Sheffield",
    summary: "A combined CCTV and intruder installation for a residential property in Sheffield.",
    story: "A Sheffield home received both CCTV and intruder protection, planned as one residential project and configured for straightforward everyday control.",
    requirement: "Provide CCTV and intruder protection for the residential property.",
    delivery: "NOX installed the confirmed CCTV and intruder alarm systems and completed the customer handover.",
    systems: ["Residential CCTV", "Intruder alarm", "Sheffield installation"],
    searchKeywords: ["home CCTV Sheffield", "intruder alarm Sheffield", "residential security South Yorkshire"]
  },
  {
    slug: "chesterfield-kitchen-showroom",
    title: "Intruder alarm and CCTV for a kitchen showroom",
    location: "Chesterfield, Derbyshire",
    category: "Retail & showroom security",
    image: "/images/resent-installation/54AC9D7E-E96B-4E59-AE60-11E901A196D9.png",
    alt: "Ajax intruder alarm and CCTV in a Chesterfield kitchen showroom",
    summary: "A joined-up intruder and CCTV installation for a premium kitchen showroom.",
    story: "The showroom required security that supported the property without disrupting its customer-facing design. NOX combined intruder protection and CCTV within one coordinated installation.",
    requirement: "Protect the showroom with CCTV and intruder detection.",
    delivery: "NOX installed and configured the intruder and CCTV systems within the confirmed scope.",
    systems: ["Ajax intruder alarm", "Commercial CCTV", "Showroom security"],
    searchKeywords: ["retail security Chesterfield", "showroom CCTV", "commercial alarm Chesterfield"]
  },
  {
    slug: "banana-industries-fire-security",
    title: "Intruder and fire protection for Banana Industries",
    location: "Derbyshire",
    category: "Commercial Fire & Security",
    image: "/images/fire-safety.png",
    alt: "NOX intruder and fire protection installation for Banana Industries",
    summary: "A commercial project bringing intruder and fire protection together.",
    story: "NOX delivered a coordinated intruder and fire project for Banana Industries, keeping the installation and handover within one local team.",
    requirement: "Provide intruder and fire protection for the commercial premises.",
    delivery: "NOX installed the confirmed intruder and fire systems.",
    systems: ["Commercial intruder alarm", "Fire protection", "Joined-up installation"],
    searchKeywords: ["commercial fire and security Derbyshire", "fire alarm installation", "business intruder alarm"]
  },
  {
    slug: "chatsworth-estate-cctv-upgrade",
    title: "Ten-camera CCTV upgrade",
    location: "Chatsworth Estate, Derbyshire",
    category: "Estate CCTV",
    image: "/images/resent-installation/0AED4F55-020E-40A5-8823-5BC499AA2015.png",
    alt: "Ten-camera CCTV upgrade completed at Chatsworth Estate",
    summary: "A ten-camera CCTV upgrade with a new recorder at Chatsworth Estate.",
    story: "NOX upgraded a ten-camera system and installed a new recorder, retaining a clear focus on practical recording and ongoing access.",
    requirement: "Upgrade the existing ten-camera CCTV system and recorder.",
    delivery: "NOX completed the confirmed ten-camera upgrade and new recorder installation.",
    systems: ["Ten-camera CCTV upgrade", "New recorder", "Estate security"],
    searchKeywords: ["CCTV upgrade Derbyshire", "estate CCTV", "commercial CCTV recorder replacement"]
  }
]

export const areas = {
  chesterfield: {
    name: "Chesterfield", county: "Derbyshire",
    intro: "Local alarm, CCTV and fire safety support from NOX's Chesterfield base, covering homes, businesses, yards and larger multi-system sites.",
    focus: "Chesterfield customers can arrange a security survey, installation, system takeover or annual service directly with the local NOX team.",
    commercial: "Commercial support includes CCTV, intruder alarms, fire alarm work, emergency lighting, monitoring and maintenance for shops, offices, garages, industrial units and hospitality venues.",
    nearby: "Hasland, Brimington, Wingerworth, Clay Cross and Staveley"
  },
  sheffield: {
    name: "Sheffield", county: "South Yorkshire",
    intro: "Residential and commercial security systems across Sheffield, from home alarms and driveway CCTV to joined-up protection for offices, retail and industrial premises.",
    focus: "NOX surveys the property first, then designs the alarm, CCTV or fire solution around access points, working areas and the way the site is used.",
    commercial: "Sheffield businesses can combine commercial CCTV, intruder protection, monitoring, servicing and fire safety support through one local contractor.",
    nearby: "Dore, Totley, Ecclesall, Handsworth and surrounding Sheffield districts"
  },
  derbyshire: {
    name: "Derbyshire", county: "Derbyshire",
    intro: "Professional fire and security installation, maintenance and takeovers across Derbyshire's towns, villages, rural properties and commercial sites.",
    focus: "Coverage includes modern alarm systems, CCTV, perimeter protection, fire alarms, emergency lighting and ongoing service plans.",
    commercial: "For larger Derbyshire sites, NOX can coordinate multiple systems, planned servicing and a clearer annual renewal structure.",
    nearby: "Chesterfield, Matlock, Bakewell, Buxton, Dronfield and the Peak District"
  },
  dronfield: {
    name: "Dronfield", county: "Derbyshire",
    intro: "Intruder alarms, CCTV and external detection for homes, outbuildings, commercial premises and timber or yard environments around Dronfield.",
    focus: "NOX can design internal and perimeter protection, app control and suitable camera coverage around the property rather than relying on a fixed kit.",
    commercial: "Commercial options include external detection, sirens, CCTV recording, monitoring, maintenance and takeover of suitable existing systems.",
    nearby: "Coal Aston, Holmesfield, Unstone and the Sheffield border"
  },
  matlock: {
    name: "Matlock", county: "Derbyshire",
    intro: "Tailored CCTV, alarms and fire safety support for homes, hospitality venues, rural properties and businesses around Matlock.",
    focus: "Surveys consider access, terrain, outbuildings, connectivity and the day-to-day use of the property before equipment is selected.",
    commercial: "NOX supports shops, accommodation, offices and operational sites with installation, monitoring, annual servicing and sensible upgrades.",
    nearby: "Matlock Bath, Darley Dale, Tansley and surrounding Peak District villages"
  },
  bakewell: {
    name: "Bakewell", county: "Derbyshire",
    intro: "Discreet, professionally installed alarms, CCTV and fire safety systems for homes, hospitality, retail and commercial properties in Bakewell.",
    focus: "The design can balance appearance, reliable coverage and simple control across older buildings, extensions, outbuildings and busy customer areas.",
    commercial: "Hospitality and retail sites can combine fire alarm servicing, emergency lighting, CCTV, intruder protection and planned support.",
    nearby: "Baslow, Ashford-in-the-Water, Chatsworth and nearby Peak District villages"
  },
  baslow: {
    name: "Baslow", county: "Derbyshire",
    intro: "Home, estate and hospitality security systems around Baslow, including alarms, CCTV, perimeter protection and ongoing support.",
    focus: "NOX designs around the property first, with careful attention to entrances, driveways, outbuildings and the appearance of the finished installation.",
    commercial: "Local hospitality and commercial premises can access fire, emergency lighting, alarm and CCTV services through one team.",
    nearby: "Chatsworth, Calver, Curbar and Bakewell"
  },
  buxton: {
    name: "Buxton", county: "Derbyshire",
    intro: "CCTV, intruder alarms, monitoring and maintenance for Buxton homes, hospitality venues, industrial premises and wider commercial sites.",
    focus: "NOX has delivered combined alarm and nine-camera CCTV work at a Buxton industrial site and supports projects of different sizes across the area.",
    commercial: "Commercial work can include system installation, takeover, fault resolution, planned servicing and coordinated fire and security support.",
    nearby: "Harpur Hill, Fairfield, Dove Holes and the High Peak"
  },
  "hope-valley": {
    name: "Hope Valley", county: "Derbyshire",
    intro: "Security systems for rural homes, holiday properties, hospitality venues, outbuildings and businesses throughout Hope Valley.",
    focus: "Surveys consider long driveways, detached buildings, external approaches and communication range before the system is designed.",
    commercial: "NOX can support hospitality and commercial sites with CCTV, alarms, fire safety, monitoring and maintenance.",
    nearby: "Hope, Castleton, Edale, Bamford and Hathersage"
  },
  hathersage: {
    name: "Hathersage", county: "Derbyshire",
    intro: "Tailored alarms, CCTV and perimeter protection for homes, rural properties, accommodation and businesses in Hathersage.",
    focus: "NOX keeps systems easy to use while planning reliable coverage around entrances, driveways, gardens and detached buildings.",
    commercial: "Business support includes security installation, fire safety services, takeovers and annual maintenance.",
    nearby: "Hope Valley, Bamford, Grindleford and Sheffield"
  },
  "darley-dale": {
    name: "Darley Dale", county: "Derbyshire",
    intro: "Residential and commercial alarm, CCTV and fire safety services around Darley Dale and the wider Matlock area.",
    focus: "Systems can cover homes, garages, workshops, driveways and small business premises with straightforward app and keypad control.",
    commercial: "Commercial customers can add monitoring, planned maintenance, fire alarm servicing and emergency lighting testing.",
    nearby: "Matlock, Rowsley, Two Dales and Bakewell"
  },
  ashover: {
    name: "Ashover", county: "Derbyshire",
    intro: "Security surveys and tailored systems for village homes, rural properties, farms, outbuildings and local businesses around Ashover.",
    focus: "NOX can combine internal protection, external detection and CCTV where the layout and communication range make it suitable.",
    commercial: "Local commercial and rural sites can access takeovers, maintenance, monitoring and upgrades without being forced into a fixed package.",
    nearby: "Kelstedge, Clay Cross, Matlock and Chesterfield"
  },
  mansfield: {
    name: "Mansfield", county: "Nottinghamshire",
    intro: "Residential and commercial CCTV, alarm and fire safety projects across Mansfield and nearby Nottinghamshire areas.",
    focus: "NOX provides surveys, tailored quotations, professional installation and ongoing support for suitable projects outside the core Chesterfield area.",
    commercial: "Shops, offices, garages, yards and industrial units can combine security and fire services through one point of contact.",
    nearby: "Sutton-in-Ashfield, Kirkby-in-Ashfield, Shirebrook and Worksop"
  },
  worksop: {
    name: "Worksop", county: "Nottinghamshire",
    intro: "Professional CCTV, intruder alarms, servicing and system takeovers for homes and businesses around Worksop.",
    focus: "NOX can assess existing equipment, resolve faults and recommend a sensible upgrade route where replacement is not automatically required.",
    commercial: "Commercial services include camera systems, alarms, monitoring, maintenance, fire alarm work and emergency lighting.",
    nearby: "Retford, Barlborough, Clowne and north Nottinghamshire"
  },
  rotherham: {
    name: "Rotherham", county: "South Yorkshire",
    intro: "Security surveys, CCTV and alarm installation for homes, commercial units and industrial sites across Rotherham.",
    focus: "Systems are planned around access points, vehicle areas, boundaries and operating routines, with app control and monitoring options where suitable.",
    commercial: "NOX supports retail, offices, workshops, warehouses and yards with installation, takeovers and annual service plans.",
    nearby: "Wickersley, Maltby, Brinsworth and Sheffield"
  },
  doncaster: {
    name: "Doncaster", county: "South Yorkshire",
    intro: "Commercial and larger residential fire and security projects across Doncaster and surrounding areas.",
    focus: "NOX can provide a clear route from survey and quotation through installation, handover, monitoring and planned maintenance.",
    commercial: "Joined-up commercial support can cover CCTV, intruder alarms, fire alarms, emergency lighting and recurring service arrangements.",
    nearby: "Balby, Bessacarr, Armthorpe and South Yorkshire"
  },
  barnsley: {
    name: "Barnsley", county: "South Yorkshire",
    intro: "Alarm, CCTV and fire safety services for homes, commercial premises and larger operational sites across Barnsley.",
    focus: "NOX designs around the building and the customer requirement, selecting appropriate equipment rather than forcing every site onto one platform.",
    commercial: "Commercial customers can combine installation, monitoring, annual maintenance and fire compliance support.",
    nearby: "Wombwell, Hoyland, Penistone and Sheffield"
  },
  retford: {
    name: "Retford", county: "Nottinghamshire",
    intro: "CCTV, intruder alarm and ongoing service support for residential and commercial properties around Retford.",
    focus: "NOX has completed a ten-camera CCTV installation at a former bank in Retford and supports further suitable projects in the area.",
    commercial: "Commercial options include high-coverage CCTV, alarms, takeovers, maintenance and fire safety services.",
    nearby: "Worksop, Tuxford, Bawtry and north Nottinghamshire"
  },
  nottinghamshire: {
    name: "Nottinghamshire", county: "Nottinghamshire",
    intro: "Larger residential and commercial CCTV, alarm and fire safety projects across Nottinghamshire where the scope suits the NOX service area.",
    focus: "NOX provides direct communication from survey and quotation through to installation and ongoing support.",
    commercial: "Portfolio and multi-system work can combine CCTV, intruder alarms, fire alarms, emergency lighting, monitoring and maintenance.",
    nearby: "Mansfield, Worksop, Retford and surrounding Nottinghamshire areas"
  }
} as const

export const systemPages: Record<string, ServicePageData> = {
  "intrusion-alarms": {
    slug: "intrusion-alarms",
    eyebrow: "Ajax intruder alarm installation",
    title: "Intruder alarms that put you in control of your space",
    metaTitle: "Ajax Intruder Alarm Installation Chesterfield | NOX",
    metaDescription: "Ajax intruder alarm installation across Chesterfield, Sheffield and Derbyshire with MotionCam, app control, keypads, sirens, monitoring, maintenance and system takeovers.",
    intro: "Rule Your Space with a professionally designed intruder alarm for your home or business. NOX is an Ajax Authorised Installation Company, using Ajax as our preferred smart security platform while still designing every system around the property first.",
    image: "/images/intrusion-alarms.png",
    imageAlt: "Black Ajax intruder alarm system with hub keypad and detectors installed by NOX",
    problemTitle: "The right alarm is more than a hub and a few sensors",
    problemText: "A useful system needs the correct mix of door protection, internal detection, photo verification, sirens, control devices and carefully selected external protection. NOX assesses entrances, movement routes, bedrooms, garages, outbuildings and daily routines before recommending equipment.",
    benefits: ["Ajax wireless and hybrid alarm options", "MotionCam photo verification where suitable", "DoorProtect and internal movement detection", "KeyPad TouchScreen, KeyPad Plus, fobs and tags", "StreetSiren and internal siren options", "Night mode and part-setting", "Professional alarm monitoring", "Maintenance for new and suitable existing systems"],
    suitableFor: ["Homes and family properties", "Garages and outbuildings", "Landlords and HMOs", "Retail and offices", "Warehouses and industrial units", "Hospitality and multi-site businesses"],
    process: [
      { title: "Security survey", text: "We assess entry points, routines, risks, existing equipment and how you want to control the alarm." },
      { title: "System design", text: "The quotation explains each recommended Ajax or alternative device, installation position and optional ongoing service." },
      { title: "Professional installation", text: "Devices are positioned carefully, communication is tested and the system is configured around the property." },
      { title: "Handover and support", text: "Users, app access, night mode, notifications and practical operation are explained before monitoring or maintenance is activated." }
    ],
    details: [
      { title: "MotionCam and visual verification", text: "Ajax MotionCam can provide a sequence of still images following an alarm event, helping authorised users or monitoring operators understand what triggered the system where the chosen device and service support it." },
      { title: "Control that fits the customer", text: "Use the Ajax app, keypad, tags or fobs depending on the people using the property. Individual users and operating modes can be configured during handover." },
      { title: "Monitoring and maintenance", text: "Professional alarm handling, keyholder contact, system health checks, battery review, firmware updates and annual service records are available." },
      { title: "Traditional and existing systems", text: "NOX also services and assesses suitable wired, hybrid and established alarm systems. A takeover inspection confirms condition, access and the sensible route forward." }
    ],
    faq: [
      { q: "Are you Ajax authorised installers?", a: "NOX operates as an Ajax Authorised Installation Company and uses Ajax as its preferred smart security platform. The property and requirement still come before the product choice." },
      { q: "What is Ajax MotionCam?", a: "MotionCam is an Ajax motion detector with a built-in camera for photo verification. The exact photo features depend on the selected model, hub, permissions and system configuration." },
      { q: "Can the alarm include external protection?", a: "Yes. External detection can be added where the site layout and survey support it, but perimeter protection is designed as its own layer rather than copied from the internal alarm layout." },
      { q: "Can you maintain an older alarm?", a: "Yes. NOX can inspect many traditional wired, wireless and hybrid systems, subject to condition, access, parts availability and compatibility." }
    ],
    related: [{ href: "/systems/perimeter-protection", label: "Perimeter protection" }, { href: "/service-plans/alarm-monitoring", label: "Alarm monitoring" }, { href: "/service-plans/alarm-maintenance", label: "Alarm maintenance" }, { href: "/commercial/intruder-alarms", label: "Commercial intruder alarms" }],
    caseStudySlugs: ["chesterfield-home-ajax-cctv-intruder", "peak-electronic-security", "sheffield-residential-security"],
    platformTitle: "Rule Your Space with Ajax",
    platformText: "Ajax brings the alarm, visual verification, sirens, user controls, automation and selected video devices into one connected platform where suitable. NOX handles the survey, design, installation, configuration and ongoing support.",
    products: [
      { name: "Ajax Hub", description: "The control centre that connects devices, users, communication channels and the Ajax app. The hub is selected around the system size and required features.", image: "/images/Ajax-Hub-2-Plus.webp", imageAlt: "Ajax Hub 2 Plus smart alarm control panel" },
      { name: "MotionCam", description: "Indoor motion detection with photo verification capabilities on suitable Ajax systems, helping provide visual context after an alarm event.", image: "/images/MotionCam.jpeg", imageAlt: "Ajax MotionCam detector with photo verification" },
      { name: "DoorProtect", description: "Opening detection for doors and windows, positioned around the actual entry routes and part-setting requirements of the property.", image: "/images/Doorprotect.jpeg", imageAlt: "Ajax DoorProtect door and window detector" },
      { name: "KeyPad & user controls", description: "Touchscreen or button keypads, tags, fobs and app control make the system straightforward for families, staff and authorised users.", image: "/images/Ajax-KeyPad.jpeg", imageAlt: "Ajax KeyPad for controlling an intruder alarm" },
      { name: "StreetSiren", description: "An external audible and visual deterrent configured as part of the alarm design, with placement considered during the survey.", image: "/images/StreetSiren.jpeg", imageAlt: "Ajax StreetSiren external alarm sounder" },
      { name: "Monitoring-ready design", description: "Where monitoring is selected, the system can support professional alarm handling, keyholder contact and agreed escalation procedures.", image: "/images/editorial/home-monitoring.jpg", imageAlt: "Real NOX CCTV display and system equipment supporting professional alarm monitoring" }
    ],
    videos: [
      { title: "Ajax intruder protection", text: "See how the Ajax platform brings detection, control and app management together.", youtubeId: "9ffQhBwXUDg" },
      { title: "Perimeter protection", text: "See how external detection can add an earlier layer around the building.", youtubeId: "Nm0HIK8vjso" }
    ]
  },
  "perimeter-protection": {
    slug: "perimeter-protection",
    eyebrow: "Ajax perimeter and external detection",
    title: "Perimeter protection that detects movement before the building is entered",
    metaTitle: "Ajax Perimeter Protection Chesterfield | Outdoor Detection",
    metaDescription: "Ajax perimeter protection across Chesterfield, Sheffield and Derbyshire with Curtain Outdoor, MotionCam Outdoor, external sirens, photo verification and maintenance.",
    intro: "External protection is a separate security layer for driveways, side access, yards, boundaries, windows, doors and outbuildings. NOX designs it around the approach routes and environment rather than copying the internal alarm system outside.",
    image: "/images/editorial/home-perimeter.jpg",
    imageAlt: "Ajax outdoor perimeter detector protecting a property boundary",
    problemTitle: "Outdoor detection needs precise design and testing",
    problemText: "Sunlight, vegetation, animals, traffic, gates, paths, installation height and the direction of travel can all influence performance. The survey identifies where an early warning layer adds value and which device pattern suits each approach.",
    benefits: ["Curtain Outdoor narrow-beam detection", "MotionCam Outdoor photo verification", "High-mount outdoor detection options", "Driveway and side-access coverage", "External sirens and app alerts", "Protection for yards and outbuildings", "Integration with Ajax intruder alarms", "Ongoing maintenance and adjustment"],
    suitableFor: ["Driveways and side access", "Detached garages and outbuildings", "Rural properties", "Commercial yards", "Industrial boundaries", "Timber, storage and operational sites"],
    process: [
      { title: "Perimeter survey", text: "We walk the external approaches, identify likely routes and consider environmental movement or obstructions." },
      { title: "Device and detection pattern", text: "Curtain, wide-area, camera-assisted or high-mount detection is chosen around the exact approach." },
      { title: "Installation and testing", text: "Mounting height, angle, range, signal and detection zones are tested and adjusted on site." },
      { title: "Handover and maintenance", text: "Users are shown external zones, notifications and operating modes, with periodic cleaning and testing available." }
    ],
    details: [
      { title: "Curtain Outdoor", text: "A narrow curtain-style detection pattern can protect windows, doors, passages and boundary lines without treating the whole outside area as one zone." },
      { title: "MotionCam Outdoor", text: "Wide-area outdoor detection with photo verification options can provide visual context following a detected event on suitable systems." },
      { title: "High-mount detection", text: "Selected high-mount devices can protect wider commercial or residential approaches where the correct mounting position and field of view are available." },
      { title: "Separate from the internal alarm", text: "The external layer can be armed, zoned and managed around how the property is used rather than simply mirroring internal movement detectors." }
    ],
    faq: [
      { q: "Is perimeter protection the same as an intruder alarm?", a: "It connects to the wider security system, but it is designed as a separate external layer with its own devices, detection patterns and environmental considerations." },
      { q: "Can it protect a driveway or side path?", a: "Yes, subject to survey. Curtain or wider-area detectors can be selected around the route, mounting positions and surrounding movement." },
      { q: "Can outdoor detectors take photos?", a: "Selected Ajax MotionCam Outdoor and CurtainCam models can support photo verification features when paired with compatible equipment and correctly configured permissions." },
      { q: "Does external detection need maintenance?", a: "Yes. Outdoor devices benefit from periodic testing, cleaning, battery checks, firmware review and adjustment if the environment changes." }
    ],
    related: [{ href: "/systems/intrusion-alarms", label: "Intruder alarms" }, { href: "/service-plans/alarm-maintenance", label: "Alarm maintenance" }, { href: "/service-plans/alarm-monitoring", label: "Alarm monitoring" }],
    caseStudySlugs: ["dronfield-timber-perimeter", "chesterfield-residential-ajax"],
    platformTitle: "An earlier warning layer around the property",
    platformText: "Ajax external detection can protect approaches, windows, doors, yards and outbuildings before an intruder reaches the internal alarm zones. Device selection and positioning are confirmed through a dedicated perimeter survey.",
    products: [
      { name: "Curtain Outdoor", description: "Narrow curtain-style outdoor detection for windows, doorways, passages and selected boundary lines.", image: "/images/SingleCurtain.jpeg", imageAlt: "Ajax Curtain Outdoor perimeter detector" },
      { name: "DualCurtain Outdoor", description: "Two opposing detection curtains can cover longer boundary runs or approaches from a central mounting point where suitable.", image: "/images/DualCurtain.jpeg", imageAlt: "Ajax DualCurtain Outdoor detector" },
      { name: "MotionCam Outdoor", description: "Outdoor motion detection with camera-assisted verification options, anti-masking features and adjustable detection on suitable Ajax systems.", image: "/images/2Motioncam.jpg", imageAlt: "Ajax MotionCam outdoor detector for perimeter protection" },
      { name: "StreetSiren", description: "External audible and visual indication can reinforce the perimeter layer and wider intruder alarm system.", image: "/images/StreetSiren.jpeg", imageAlt: "Ajax external StreetSiren" },
      { name: "Outbuilding protection", description: "Garages, workshops, stores and detached buildings can be brought into the wider Ajax system subject to survey and communication range.", image: "/images/editorial/home-perimeter.jpg", imageAlt: "External security protecting a garage and outbuilding" },
      { name: "Maintenance and adjustment", description: "Outdoor systems need cleaning, signal checks, battery review, firmware updates and retesting as the environment changes.", image: "/images/editorial/home-maintenance.jpg", imageAlt: "Real security system maintenance and panel inspection by NOX" }
    ],
    videos: [{ title: "Ajax outdoor protection", text: "See how external detection can create an earlier warning layer around a property.", youtubeId: "Nm0HIK8vjso" }]
  },
  cctv: {
    slug: "cctv",
    eyebrow: "Ajax and professional CCTV installation",
    title: "CCTV planned around the view, detail and evidence you need",
    metaTitle: "CCTV Installation Chesterfield & Derbyshire | Ajax & Hikvision",
    metaDescription: "Professional CCTV installation in Chesterfield, Sheffield and Derbyshire with Ajax cameras, NVR recording, Hikvision ColourVu, smart detection, remote viewing and maintenance.",
    intro: "NOX installs Ajax CCTV, Hikvision ColourVu and other professional systems for homes and businesses. Camera choice follows the scene, lighting, recording requirement and network — not a fixed camera package.",
    image: "/images/cctv-systems.png",
    imageAlt: "Professional Ajax and CCTV camera system installed by NOX",
    problemTitle: "Useful CCTV starts with the image you need to recover later",
    problemText: "Camera height, lens choice, lighting, overlap, network design, recorder capacity and playback all matter. NOX plans what each view must show, then configures recording, remote access and smart event detection properly.",
    benefits: ["Ajax 5MP and 8MP camera options", "Ajax NVR integration", "Hikvision ColourVu and other professional cameras", "NVR and PoE recording", "Human and vehicle event filtering", "Full-colour night viewing options", "Secure app and remote viewing", "Maintenance, takeovers and recorder upgrades"],
    suitableFor: ["Homes and driveways", "Retail and showrooms", "Hospitality venues", "Garages and yards", "Warehouses and industrial sites", "Rural and multi-site properties"],
    process: [
      { title: "Coverage survey", text: "We review required views, lighting, mounting positions, cable routes, network access and recording needs." },
      { title: "Camera and recorder plan", text: "The quotation explains camera positions, intended views, recorder size and optional monitoring or maintenance." },
      { title: "Clean installation", text: "Cables are routed carefully, cameras are aligned properly and the recorder or NVR is configured for practical playback." },
      { title: "Handover and aftercare", text: "We demonstrate live view, playback, event search and remote access, then offer annual maintenance for new or suitable existing systems." }
    ],
    details: [
      { title: "Ajax CCTV", text: "Ajax cameras and NVRs can bring video into the wider Ajax ecosystem, giving suitable customers one app for alarms, cameras and selected automation." },
      { title: "Hikvision ColourVu", text: "ColourVu and other professional camera options remain available where they better suit the lighting, required image or existing infrastructure." },
      { title: "CCTV maintenance", text: "Camera cleaning, image checks, recorder and hard-drive review, playback testing, firmware and remote-viewing checks help keep systems useful." },
      { title: "Traditional and existing CCTV", text: "NOX can assess suitable coax, IP and networked systems for faults, lost access, camera replacement, recorder upgrades or phased improvement." }
    ],
    faq: [
      { q: "Do you install Ajax CCTV and Hikvision?", a: "Yes. NOX works with Ajax CCTV, Hikvision ColourVu and other professional systems, selecting equipment around the site and required coverage." },
      { q: "What does an Ajax NVR do?", a: "An Ajax NVR records compatible IP camera footage and can integrate suitable video into the Ajax platform. Channel capacity and storage are selected around the project." },
      { q: "Can you maintain an older CCTV system?", a: "Yes. Suitable analogue, coax, IP and networked CCTV can be inspected and serviced, subject to condition, access, compatibility and parts availability." },
      { q: "Do commercial systems need a survey?", a: "A survey is strongly recommended so views, lighting, cabling, network capacity, recorder channels and storage can be assessed properly." }
    ],
    related: [{ href: "/service-plans/cctv-maintenance", label: "CCTV maintenance" }, { href: "/commercial/cctv", label: "Commercial CCTV" }, { href: "/case-studies", label: "CCTV case studies" }],
    caseStudySlugs: ["bottle-and-thyme-commercial-cctv-chesterfield", "retford-former-bank-cctv", "tan-station-fire-security-brimington", "chesterfield-scrapyard-cctv"],
    platformTitle: "Ajax CCTV inside the wider security platform",
    platformText: "For suitable projects, Ajax cameras and NVR recording can sit alongside the intruder alarm in one platform. NOX also continues to specify Hikvision ColourVu and other professional CCTV where they are the better technical fit.",
    products: [
      { name: "Ajax cameras", description: "Professional IP cameras available in different resolutions and formats, selected around the view and lighting requirement.", image: "/images/ajax-cameras.jpg", imageAlt: "Ajax professional CCTV cameras" },
      { name: "Ajax NVR", description: "Network video recording for compatible IP cameras, with channel and storage options selected around the system size.", image: "/images/AjaxNVR.jpeg", imageAlt: "Ajax NVR network video recorder" },
      { name: "Hikvision ColourVu", description: "Full-colour night imaging options for suitable scenes where useful detail after dark is a key requirement.", image: "/images/HikvisionDome.jpg", imageAlt: "Hikvision ColourVu CCTV dome camera" },
      { name: "PoE network design", description: "Power and data through structured cabling, planned around recorder location, switch capacity, cable routes and future expansion.", image: "/images/cctv-systems-image.png", imageAlt: "Professional PoE CCTV installation equipment" },
      { name: "Remote viewing", description: "Secure app access for live view, playback and event search, configured and demonstrated during handover.", image: "/images/ajax-camera.webp", imageAlt: "Ajax camera viewed through a mobile security app" },
      { name: "Annual maintenance", description: "Cleaning, image review, recording checks, playback tests and system-health checks for new and suitable traditional CCTV systems.", image: "/images/editorial/home-maintenance.jpg", imageAlt: "Real CCTV and security system maintenance by NOX" }
    ]
  },
  "smart-home-cctv": {
    slug: "smart-home-cctv",
    eyebrow: "Solar, wireless and app-controlled cameras",
    title: "Smart-home CCTV for properties that need a simpler camera solution",
    metaTitle: "Smart Home & Solar CCTV Installation Chesterfield | NOX",
    metaDescription: "Professional smart-home, solar and wireless CCTV installation in Chesterfield and Derbyshire, including Eufy camera positioning, setup and app handover.",
    intro: "Some homes need a professionally planned smart-camera system rather than a full recorder-based CCTV installation. NOX can install and configure suitable solar, wireless and floodlight cameras around the property while keeping the main premium CCTV route available for customers who need continuous recording and larger coverage.",
    image: "/images/projects/eufy-solar-camera-1.jpg",
    imageAlt: "Eufy solar smart-home CCTV camera professionally installed in Chesterfield",
    problemTitle: "Smart cameras still need the right position, power strategy and app setup",
    problemText: "A wireless camera is only useful when the view, detection zone, mounting height, charging or solar exposure and notification settings all suit the property. NOX surveys the requirement and explains when a smart camera is suitable and when a professional NVR system is the better route.",
    benefits: ["Solar and battery camera options", "Floodlight cameras", "App alerts and live viewing", "Professional positioning", "HomeBase and network setup", "Lower-disruption installation", "Clear customer handover", "Upgrade path to professional CCTV"],
    suitableFor: ["Homes and bungalows", "Garages and gardens", "Rear access and side passages", "Properties with limited cable routes", "Customers wanting app-led viewing", "Selected outbuildings"],
    process: [
      { title: "Property review", text: "We review the entrances, approaches, Wi-Fi coverage, available sunlight and the image the customer needs." },
      { title: "Honest system choice", text: "NOX explains whether smart cameras will meet the requirement or whether a recorder-based Ajax or Hikvision system is more appropriate." },
      { title: "Installation and setup", text: "Cameras, solar panels or floodlights are positioned and the supporting app or HomeBase is configured." },
      { title: "Handover", text: "Notifications, live view, charging expectations, privacy zones and everyday operation are demonstrated." }
    ],
    details: [
      { title: "Solar camera positioning", text: "Solar exposure and the required camera view both matter. Panels and cameras are positioned to balance charging performance with useful coverage." },
      { title: "Floodlight cameras", text: "A combined light and camera can suit entrances, gardens and external working areas where active illumination is useful." },
      { title: "When to choose an NVR", text: "For continuous recording, larger properties, multiple users or commercial evidence requirements, NOX will normally recommend a professional recorder-based CCTV system." },
      { title: "One local installer", text: "Customers can start with smart-home CCTV and return to NOX for alarms, perimeter protection, servicing or a future professional CCTV upgrade." }
    ],
    faq: [
      { q: "Do you install Eufy cameras?", a: "Yes. NOX can install and configure suitable Eufy solar, battery and floodlight cameras where they match the property and customer requirement." },
      { q: "Are wireless cameras the same as professional CCTV?", a: "No. Smart cameras are useful for selected residential applications, while professional NVR systems generally provide stronger continuous recording, storage and larger-system capability." },
      { q: "Can you improve my existing smart-camera layout?", a: "Yes. NOX can review positioning, detection zones, network coverage and app setup, although compatibility and account access need to be confirmed." },
      { q: "Can smart cameras work with an Ajax alarm?", a: "They remain separate platforms in most cases. NOX can explain the practical options and recommend a more integrated Ajax CCTV route when one-app control is important." }
    ],
    related: [{ href: "/systems/cctv", label: "Professional CCTV" }, { href: "/systems/intrusion-alarms", label: "Ajax intruder alarms" }, { href: "/residential", label: "Residential security" }],
    caseStudySlugs: ["eufy-smart-home-cctv-chesterfield", "chesterfield-home-ajax-cctv-intruder"],
    platformTitle: "A practical alternative where a full CCTV recorder is not required",
    platformText: "NOX does not force every property onto one brand or one system type. Smart-home CCTV is offered where it is genuinely suitable, with professional Ajax and Hikvision CCTV available for more demanding requirements.",
    products: [
      { name: "Solar smart cameras", description: "Battery-powered cameras supported by solar charging for suitable external areas and lower-disruption residential installations.", image: "/images/projects/eufy-solar-camera-2.jpg", imageAlt: "Solar smart security camera installed on a Chesterfield home" },
      { name: "Floodlight cameras", description: "Combined lighting, detection and video for selected entrances, gardens and rear access points.", image: "/images/projects/eufy-floodlight-camera-2.jpg", imageAlt: "Smart floodlight CCTV camera installed in Chesterfield" },
      { name: "HomeBase and app setup", description: "Connection, user access, notification settings and practical app operation configured and explained during handover.", image: "/images/projects/eufy-equipment.jpg", imageAlt: "Eufy smart-home CCTV equipment prepared for installation" },
      { name: "Professional CCTV upgrade", description: "Where continuous recording or broader coverage is needed, NOX can design an Ajax, Hikvision or other professional NVR-based system.", image: "/images/projects/retford-monitor-final.jpg", imageAlt: "Professional multi-camera CCTV system configured by NOX" }
    ]
  },
  "fire-safety": {
    slug: "fire-safety",
    eyebrow: "Fire alarm installation, EN54 systems and servicing",
    title: "Fire alarm systems supported from installation through annual maintenance",
    metaTitle: "Fire Alarm Installation & Servicing Chesterfield | EN54",
    metaDescription: "Fire alarm installation and servicing in Chesterfield, Sheffield and Derbyshire, including Ajax EN54 Fire Hub systems, traditional fire alarms, takeovers and maintenance.",
    intro: "NOX installs and services modern wireless and traditional fire alarm systems for commercial premises, landlords and HMOs. The service includes new Ajax EN54 options, established conventional or addressable systems, takeovers, defect reporting and planned maintenance.",
    image: "/images/ajax-en54-fire.webp",
    imageAlt: "Ajax EN54 fire alarm system including Fire Hub and wireless devices",
    problemTitle: "A fire alarm needs ongoing attention, not just an installation date",
    problemText: "The building, occupancy, fire strategy, existing equipment, records and ongoing testing requirements all influence the right solution. NOX separates new installation, routine servicing, faults and remedial work clearly so the responsible person knows what has been completed and what needs attention next.",
    benefits: ["Ajax EN54 wireless fire alarm options", "EN54 Fire Hub and compatible line devices", "Conventional and addressable fire alarm servicing", "Existing-system takeovers", "Panel, detector and sounder testing", "Fault finding and remedial quotations", "Emergency lighting coordination", "Annual Fire Compliance Packages"],
    suitableFor: ["Shops and retail", "Offices", "Warehouses and industrial units", "Hospitality", "HMOs and landlords", "Multi-site property portfolios"],
    process: [
      { title: "Building and system review", text: "We review the premises, use, available fire information, existing panel, device quantities, records and access." },
      { title: "Clear installation or service scope", text: "New installation, routine service, takeover work and defects are separated clearly in the quotation." },
      { title: "Engineer attendance", text: "The agreed installation or maintenance is completed with the relevant standards and property requirements in mind." },
      { title: "Records and recurring support", text: "Service information and identified defects are issued, with the next inspection and any remedials explained clearly." }
    ],
    details: [
      { title: "Ajax EN54 Fire Hub", text: "The EN54 Fire Hub is the control and indicating equipment for Ajax EN54 fire systems and can support a joined-up Ajax environment on suitable commercial projects." },
      { title: "Traditional fire alarm servicing", text: "NOX services many conventional, addressable, wired and established fire alarm systems, subject to access, condition, documentation and device compatibility." },
      { title: "Takeovers and defect resolution", text: "An initial inspection can establish panel access, system condition, device quantities, outstanding faults and the sensible maintenance route." },
      { title: "Fire Compliance Packages", text: "Fire alarm servicing can be coordinated with emergency lighting and other agreed fire-safety services under a clearer annual arrangement." }
    ],
    faq: [
      { q: "What is the Ajax EN54 Fire Hub?", a: "It is Ajax control and indicating equipment for its EN54 fire line, with a touchscreen interface and support for compatible wireless fire devices. The full system design still depends on the building and agreed fire requirements." },
      { q: "Do you service traditional fire alarms?", a: "Yes. NOX can service many conventional, addressable and established systems, subject to condition, access, records and parts availability." },
      { q: "Can you take over an existing fire alarm?", a: "Yes. A takeover inspection can establish the system condition, access, documentation, faults and future service scope." },
      { q: "Can servicing include emergency lighting?", a: "Yes. Fire alarm servicing and emergency lighting can be coordinated where included in the written service package." }
    ],
    related: [{ href: "/service-plans/fire-alarm-servicing", label: "Fire alarm servicing" }, { href: "/service-plans/fire-compliance", label: "Fire Compliance Package" }, { href: "/systems/emergency-lighting", label: "Emergency lighting" }, { href: "/systems/fire-risk-assessment", label: "Fire risk assessments" }],
    caseStudySlugs: ["tan-station-fire-security-brimington", "banana-industries-fire-security", "chesterfield-kitchen-showroom"],
    platformTitle: "Modern Ajax EN54 fire protection and traditional-system expertise",
    platformText: "NOX can introduce Ajax EN54 wireless fire technology where it suits the building while continuing to service and support established wired, conventional and addressable fire alarm systems.",
    products: [
      { name: "EN54 Fire Hub Jeweller", description: "Touchscreen control and indicating equipment for the Ajax EN54 fire line, selected and configured as part of a complete fire-system design.", image: "/images/EN54FireHub.jpeg", imageAlt: "Ajax EN54 Fire Hub Jeweller touchscreen fire alarm panel" },
      { name: "EN54 fire detection", description: "Compatible wireless detection devices are selected around rooms, risks, zones and the agreed fire-alarm design.", image: "/images/ajax-en54-fire.webp", imageAlt: "Ajax EN54 wireless fire alarm detectors and devices" },
      { name: "Manual call points", description: "Manual activation devices are positioned within the fire-alarm design and included in routine testing and service records.", image: "/images/ManualCallPointFireAlarm.jpeg", imageAlt: "Fire alarm manual call point" },
      { name: "Traditional fire panels", description: "NOX also services suitable conventional, addressable and established systems rather than limiting maintenance to new Ajax installations.", image: "/images/FireAlaramServicingImage.jpeg", imageAlt: "Engineer servicing a traditional commercial fire alarm panel" },
      { name: "Routine servicing", description: "Panel checks, detector and sounder testing, battery review, logbook information and defect reporting within the agreed service scope.", image: "/images/fire-servicing.jpeg", imageAlt: "Professional fire alarm servicing and testing" },
      { name: "Compliance support", description: "Fire-alarm maintenance can be coordinated with emergency lighting and agreed annual fire-safety services.", image: "/images/fire-safety.png", imageAlt: "Commercial fire safety and compliance support" }
    ],
    videos: [
      { title: "Ajax fire protection", text: "Explore how Ajax fire devices and control equipment can support a modern connected fire system.", youtubeId: "XZDNd3ud-ck" }
    ]
  },
  "emergency-lighting": {
    slug: "emergency-lighting",
    eyebrow: "Emergency lighting",
    title: "Emergency lighting installation and testing for commercial premises",
    metaTitle: "Emergency Lighting Testing Derbyshire | Installation & Servicing",
    metaDescription: "Emergency lighting installation, testing and servicing across Chesterfield, Sheffield and Derbyshire for commercial premises, landlords and multi-site portfolios.",
    intro: "NOX installs, tests and services emergency lighting for commercial premises, landlords, HMOs and larger property portfolios, with clear records and defect reporting.",
    image: "/images/emergency-lighting.jpeg",
    imageAlt: "Emergency lighting fitting for installation and testing in Derbyshire",
    problemTitle: "Emergency lighting needs planned testing, clear records and prompt defect attention",
    problemText: "NOX can assess existing fittings, complete agreed tests, identify defects and plan remedial or replacement work. Visits can be coordinated with other fire safety services where useful.",
    benefits: ["Emergency lighting installation", "Routine testing and servicing", "Fitting condition checks", "Battery and operation checks", "Defect reporting", "Remedial and replacement work", "Multi-site coordination", "Combined fire service visits"],
    suitableFor: ["Retail", "Offices", "Warehouses", "Hospitality", "HMOs and landlords", "Property portfolios"],
    process: [
      { title: "Site and asset review", text: "We confirm the premises, number and type of fittings, access requirements and available records." },
      { title: "Testing or installation scope", text: "The planned work and any exclusions are stated clearly before attendance." },
      { title: "Engineer visit", text: "Fittings are installed or tested against the agreed scope, with defects and access limitations recorded." },
      { title: "Records and next steps", text: "Documentation is issued and any repair, replacement or recurring service recommendation is explained." }
    ],
    details: [
      { title: "New installations", text: "Emergency lighting can be installed as part of wider fire safety work or as a focused project." },
      { title: "Existing-system testing", text: "Suitable existing fittings can be inspected and tested, with failed or damaged assets identified." },
      { title: "Annual planning", text: "Commercial customers can place emergency lighting into a coordinated annual servicing schedule." },
      { title: "Portfolio support", text: "Multi-site visits can be grouped to simplify access, records and renewal dates where the package allows." }
    ],
    faq: [
      { q: "Do you test existing emergency lighting?", a: "Yes. NOX can test suitable existing emergency lighting systems and record identified defects." },
      { q: "Can failed fittings be replaced?", a: "Repair or replacement work can be quoted after testing or included in an agreed remedial scope." },
      { q: "Can visits be combined with fire alarm servicing?", a: "Yes, where practical and included in the quotation, visits can be coordinated with fire alarm servicing and other agreed fire safety work." }
    ],
    related: [{ href: "/service-plans/emergency-lighting-servicing", label: "Emergency lighting servicing" }, { href: "/service-plans/fire-compliance", label: "Fire compliance packages" }, { href: "/systems/fire-safety", label: "Fire alarm systems" }],
    caseStudySlugs: ["banana-industries-fire-security"]
  },
  "fire-risk-assessment": {
    slug: "fire-risk-assessment",
    eyebrow: "Fire risk assessments",
    title: "Fire risk assessment support for commercial and rented properties",
    metaTitle: "Fire Risk Assessment Chesterfield & Derbyshire",
    metaDescription: "Arrange a fire risk assessment in Chesterfield, Sheffield and Derbyshire for commercial premises, landlords, HMOs and property portfolios.",
    intro: "Arrange fire risk assessment support for commercial premises, landlords, HMOs and multi-site properties, with findings and priorities presented clearly.",
    image: "/images/fire-servicing.jpeg",
    imageAlt: "Fire safety inspection and risk assessment support in Chesterfield",
    problemTitle: "A useful assessment should make responsibilities and priorities clearer",
    problemText: "The assessment should reflect the building, occupancy, activities and available fire safety arrangements. NOX coordinates the service and can separately support relevant fire alarm, emergency lighting and remedial work where required.",
    benefits: ["Commercial premises", "Landlords and HMOs", "Hospitality", "Warehouses and industrial units", "Multi-site portfolios", "Clear findings and priorities", "Separate remedial quotations", "Ongoing fire service options"],
    suitableFor: ["Shops", "Offices", "Hospitality", "HMOs", "Industrial premises", "Property portfolios"],
    process: [
      { title: "Confirm the property", text: "We gather the property type, use, occupancy and available documentation before arranging the assessment." },
      { title: "Site assessment", text: "The assessor reviews the premises and the relevant fire safety arrangements within the agreed scope." },
      { title: "Report", text: "Findings, risks and recommended actions are recorded in the assessment documentation." },
      { title: "Support", text: "Where required, NOX can quote separately for relevant fire alarm, emergency lighting or remedial work." }
    ],
    details: [
      { title: "Independent starting point", text: "The assessment helps the responsible person understand the building risks and priorities before deciding what work is required." },
      { title: "Clear separation of scope", text: "Assessment findings and any later installation or remedial quotation remain clearly separated." },
      { title: "Commercial coordination", text: "For business customers, the assessment can sit alongside planned fire alarm and emergency lighting service arrangements." }
    ],
    faq: [
      { q: "Who is a fire risk assessment suitable for?", a: "It is commonly required for commercial premises, landlords, HMOs, hospitality sites and other non-domestic or shared properties." },
      { q: "Does the assessment include remedial work?", a: "No. Any installation, repair or remedial work is quoted separately after the findings are known." },
      { q: "Can NOX help with actions identified in the report?", a: "NOX can support relevant fire alarm, emergency lighting and agreed fire safety work within its service scope." }
    ],
    related: [{ href: "/systems/fire-safety", label: "Fire alarm systems" }, { href: "/systems/emergency-lighting", label: "Emergency lighting" }, { href: "/service-plans/fire-compliance", label: "Fire compliance packages" }],
    caseStudySlugs: ["banana-industries-fire-security"]
  }
}

export const planPages: Record<string, PlanPageData> = {
  "alarm-maintenance": {
    slug: "alarm-maintenance",
    eyebrow: "Alarm maintenance",
    title: "Annual intruder alarm servicing and system health checks",
    metaTitle: "Alarm Maintenance Chesterfield | Annual Intruder Alarm Service",
    metaDescription: "Annual alarm maintenance in Chesterfield, Sheffield and Derbyshire. Engineer servicing, device tests, battery checks, cleaning, firmware updates and service records.",
    intro: "Keep a NOX installation or suitable existing intruder alarm healthy, current and ready to use with planned annual engineer servicing.",
    image: "/images/editorial/home-maintenance.jpg",
    imageAlt: "Real alarm panels inspected during NOX maintenance and takeover work",
    residentialPrice: "£225 per year",
    commercialPrice: "From £295 per year",
    priceNote: "Final commercial pricing depends on system size, access, device count and condition.",
    included: ["Annual engineer service", "Full system health check", "Device testing", "Sensor cleaning", "Battery health checks", "Firmware updates where supported", "Service record or certificate", "Defect and recommendation reporting"],
    suitableFor: ["NOX-installed alarms", "Suitable existing systems", "Homes and landlords", "Retail and offices", "Warehouses and industrial sites", "Commercial portfolios"],
    process: [
      { title: "Confirm the system", text: "We record the panel, approximate device count, site type and any known faults." },
      { title: "Engineer service", text: "The agreed devices and system functions are tested, cleaned and reviewed." },
      { title: "Report", text: "The completed service and any identified defects or recommendations are documented." },
      { title: "Renewal", text: "The next annual service can be scheduled under one clear renewal date." }
    ],
    details: [
      { title: "Residential servicing", text: "A straightforward annual health check for the alarm, devices, batteries, app connection and operating modes." },
      { title: "Commercial servicing", text: "Pricing scales around the panel, device count, site access and operating requirements." },
      { title: "Takeover inspection", text: "Suitable existing systems may require an initial inspection or remedial work before ongoing maintenance begins." }
    ],
    faq: [
      { q: "Can you service an alarm you did not install?", a: "Often yes, subject to the system make, condition, access and compatibility. An initial inspection may be required." },
      { q: "Are replacement batteries and parts included?", a: "Unless specifically stated in the quotation, replacement parts, batteries and remedial work are charged separately." },
      { q: "Can maintenance be combined with monitoring?", a: "Yes. Monitoring and maintenance can be combined within a confirmed annual package." }
    ],
    related: [{ href: "/service-plans/alarm-monitoring", label: "Alarm monitoring" }, { href: "/service-plans/total-security", label: "Total Security Package" }, { href: "/systems/intrusion-alarms", label: "New intruder alarms" }]
  },
  "alarm-monitoring": {
    slug: "alarm-monitoring",
    eyebrow: "Professional alarm monitoring",
    title: "Alarm monitoring with keyholder contact and agreed escalation",
    metaTitle: "Alarm Monitoring Derbyshire | Professional Keyholder Contact",
    metaDescription: "Professional alarm monitoring across Chesterfield, Sheffield and Derbyshire, including alarm handling, keyholder contact and agreed escalation procedures.",
    intro: "Add professional alarm handling to a suitable intruder alarm, with keyholder contact, system supervision and visual or image verification where available.",
    image: "/images/editorial/home-monitoring.jpg",
    imageAlt: "Real NOX CCTV display and installed equipment supporting a monitored security system",
    residentialPrice: "£595 per year",
    commercialPrice: "From £695 per year",
    priceNote: "Compatibility, signalling equipment and the agreed monitoring setup are confirmed before activation.",
    included: ["Professional alarm monitoring", "Alarm signalling", "Keyholder contact", "System supervision where supported", "Visual or image verification where available", "Agreed escalation procedures", "Monitoring setup and testing", "Annual renewal"],
    suitableFor: ["Homes", "Landlords", "Retail and offices", "Warehouses", "Industrial sites", "Commercial portfolios"],
    process: [
      { title: "Compatibility check", text: "We confirm the alarm, signalling route, keyholders and the monitoring requirement." },
      { title: "Setup", text: "The monitoring account and agreed contacts are configured and checked." },
      { title: "Testing", text: "Signals and agreed procedures are tested before the service is treated as active." },
      { title: "Ongoing review", text: "Keyholder and contact details should be kept current and can be reviewed at service or renewal." }
    ],
    details: [
      { title: "Keyholder contact", text: "When the agreed alarm event is received, the monitoring process follows the confirmed keyholder and escalation instructions." },
      { title: "Verification where available", text: "Compatible systems may support image or visual information that assists with alarm handling." },
      { title: "Clear service boundaries", text: "The written setup confirms the alarm handling, keyholder contacts and agreed escalation procedure without making unsupported response guarantees." }
    ],
    faq: [
      { q: "What happens when an alarm signal is received?", a: "The agreed monitoring process covers professional alarm handling, keyholder contact and the confirmed escalation procedure." },
      { q: "Can an existing alarm be monitored?", a: "Possibly. The system and signalling route must first be checked for compatibility and condition." },
      { q: "Is maintenance included?", a: "Maintenance is separate unless the confirmed package specifically includes it." }
    ],
    related: [{ href: "/service-plans/alarm-maintenance", label: "Alarm maintenance" }, { href: "/service-plans/total-security", label: "Total Security Package" }, { href: "/systems/intrusion-alarms", label: "Intruder alarm installation" }]
  },
  "cctv-maintenance": {
    slug: "cctv-maintenance",
    eyebrow: "CCTV maintenance",
    title: "Planned CCTV servicing for reliable recording and playback",
    metaTitle: "CCTV Maintenance Chesterfield | Camera & Recorder Servicing",
    metaDescription: "Annual CCTV maintenance in Chesterfield, Sheffield and Derbyshire. Camera cleaning, recorder and hard-drive checks, playback tests, firmware and remote-viewing checks.",
    intro: "Keep cameras clean, recording healthy and remote access working with an annual CCTV maintenance visit for NOX installations and suitable existing systems.",
    image: "/images/editorial/blog-servicing.jpg",
    imageAlt: "Real CCTV and alarm servicing work completed by NOX",
    residentialPrice: "£225 per year",
    commercialPrice: "From £295 per year",
    priceNote: "Final commercial pricing depends on camera count, access, recorder configuration and site size.",
    included: ["Annual engineer maintenance", "Camera cleaning", "Recorder health check", "Hard-drive health review", "Playback test", "Firmware updates where supported", "Remote-viewing check", "Service report"],
    suitableFor: ["Home CCTV", "Retail and hospitality", "Showrooms", "Garages and yards", "Industrial CCTV", "Multi-camera commercial sites"],
    process: [
      { title: "System review", text: "We confirm camera count, recorder, access method and any known faults." },
      { title: "Maintenance visit", text: "Cameras, recording, playback and remote access are checked within the agreed scope." },
      { title: "Defect report", text: "Problems with cameras, cabling, storage or remote access are recorded clearly." },
      { title: "Repair or renewal", text: "Any remedial work is quoted separately and the next service date can be planned." }
    ],
    details: [
      { title: "Image quality", text: "Dirty lenses, movement, glare and changed surroundings can reduce the usefulness of an otherwise working camera." },
      { title: "Recording health", text: "Recorder and storage checks help identify issues before footage is needed." },
      { title: "Existing-system takeover", text: "Suitable coax and IP systems can be inspected for service, remote access recovery and sensible upgrades." }
    ],
    faq: [
      { q: "Can you service CCTV installed by another company?", a: "Often yes, subject to access, credentials, system condition and compatibility." },
      { q: "Are replacement hard drives included?", a: "No, unless specifically included in the written quotation. Parts and repair work are normally separate." },
      { q: "Is residential CCTV monitoring included?", a: "Residential CCTV monitoring is not listed as a standard separate product. Any specialist option would need to be specifically confirmed in writing." }
    ],
    related: [{ href: "/systems/cctv", label: "CCTV installation" }, { href: "/service-plans/total-security", label: "Total Security Package" }, { href: "/case-studies", label: "CCTV case studies" }]
  },
  "fire-alarm-servicing": {
    slug: "fire-alarm-servicing",
    eyebrow: "Fire alarm servicing",
    title: "Planned fire alarm servicing with clear records and defects",
    metaTitle: "Fire Alarm Servicing Chesterfield | Commercial Fire Maintenance",
    metaDescription: "Fire alarm servicing in Chesterfield, Sheffield and Derbyshire for commercial premises, landlords and portfolios, with test records and defect reporting.",
    intro: "Routine fire alarm servicing for commercial premises, landlords, HMOs and larger portfolios, with the agreed system checks and findings documented clearly.",
    image: "/images/fire-servicing.jpeg",
    imageAlt: "Engineer servicing a commercial fire alarm system in Chesterfield",
    priceNote: "Pricing is quoted to the property, system type, device quantity, service frequency and access requirements.",
    included: ["Panel and system checks", "Device testing within the agreed scope", "Sounder and function checks", "Logbook and record review where available", "Defect reporting", "Service records", "Remedial quotation where requested", "Planned renewal scheduling"],
    suitableFor: ["Retail", "Offices", "Hospitality", "Warehouses", "HMOs and landlords", "Property portfolios"],
    process: [
      { title: "System information", text: "We gather panel, device, site and existing service information before quotation." },
      { title: "Planned visit", text: "Access, testing and any disruption considerations are agreed in advance." },
      { title: "Service and test", text: "The system is serviced against the agreed scope with relevant requirements in mind." },
      { title: "Records and defects", text: "Completed work, limitations and identified defects are documented." }
    ],
    details: [
      { title: "Existing systems", text: "NOX can service many existing fire alarms, subject to panel access, condition, compatibility and available records." },
      { title: "Remedial work", text: "Defects and recommended actions are separated from the service and quoted clearly where requested." },
      { title: "Combined visits", text: "Fire alarm servicing can be coordinated with emergency lighting and other agreed fire safety work." }
    ],
    faq: [
      { q: "How much does fire alarm servicing cost?", a: "It is quoted to the property, system type, device quantity, service frequency and access requirements." },
      { q: "Can you take over an existing fire alarm?", a: "Yes, subject to an inspection of the system, documentation, access and condition." },
      { q: "Are repairs included?", a: "Repairs, parts and remedial work are separate unless specifically included in the written quotation." }
    ],
    related: [{ href: "/systems/fire-safety", label: "Fire alarm systems" }, { href: "/service-plans/emergency-lighting-servicing", label: "Emergency lighting servicing" }, { href: "/service-plans/fire-compliance", label: "Fire compliance package" }]
  },
  "emergency-lighting-servicing": {
    slug: "emergency-lighting-servicing",
    eyebrow: "Emergency lighting servicing",
    title: "Emergency lighting testing and planned maintenance",
    metaTitle: "Emergency Lighting Servicing Derbyshire | Testing & Records",
    metaDescription: "Emergency lighting servicing and testing across Chesterfield, Sheffield and Derbyshire with fitting checks, test records, defect reporting and remedial quotations.",
    intro: "Planned emergency lighting testing for commercial premises, landlords, HMOs and multi-site properties, with defects and required follow-up recorded clearly.",
    image: "/images/emergency-lighting.jpeg",
    imageAlt: "Emergency lighting testing at a Derbyshire commercial property",
    priceNote: "Pricing is quoted to fitting quantities, site access, required testing and service frequency.",
    included: ["Fitting condition checks", "Functional testing", "Battery operation checks", "Identification of failed fittings", "Test records", "Defect reporting", "Remedial quotations", "Planned renewal scheduling"],
    suitableFor: ["Retail", "Offices", "Hospitality", "Warehouses", "HMOs", "Property portfolios"],
    process: [
      { title: "Asset information", text: "We confirm approximate fitting quantities, site access and available records." },
      { title: "Testing plan", text: "The required visit and testing scope are agreed before attendance." },
      { title: "Engineer service", text: "Fittings are checked and tested within the agreed scope." },
      { title: "Report and remedials", text: "Defects are recorded and any repair or replacement work is quoted separately." }
    ],
    details: [
      { title: "Clear asset records", text: "Consistent records make it easier to see failed fittings, completed remedials and upcoming service dates." },
      { title: "Coordinated attendance", text: "Emergency lighting visits can be grouped with fire alarm service work where practical." },
      { title: "Portfolio servicing", text: "Multi-site schedules can reduce administration and support a clearer annual renewal structure." }
    ],
    faq: [
      { q: "Are replacement fittings included?", a: "Replacement fittings and remedial work are separate unless specifically included in the quotation." },
      { q: "Can you test emergency lighting at several sites?", a: "Yes. Multi-site visits can be coordinated around access and the agreed service schedule." },
      { q: "Can this be combined with fire alarm servicing?", a: "Yes, where practical and confirmed in the package." }
    ],
    related: [{ href: "/systems/emergency-lighting", label: "Emergency lighting installation" }, { href: "/service-plans/fire-alarm-servicing", label: "Fire alarm servicing" }, { href: "/service-plans/fire-compliance", label: "Fire compliance package" }]
  },
  "total-security": {
    slug: "total-security",
    eyebrow: "Total Security Package",
    title: "One annual package for alarm monitoring, servicing and CCTV maintenance",
    metaTitle: "Total Security Package | Alarm Monitoring & CCTV Maintenance",
    metaDescription: "A coordinated annual security package for residential and commercial customers across Chesterfield and Derbyshire, with monitoring, servicing and one renewal date.",
    intro: "Bring the agreed intruder alarm monitoring, alarm maintenance and CCTV maintenance services under one annual arrangement with one point of contact.",
    image: "/images/resent-installation/E6B4D998-0805-4B7E-8532-CC491C881B57.jpeg",
    imageAlt: "Coordinated alarm monitoring and CCTV maintenance package from NOX",
    residentialPrice: "From £795 per year",
    priceNote: "The exact included services, system eligibility and price are confirmed in writing. Commercial packages are quoted to site.",
    included: ["Agreed intruder alarm servicing", "Agreed professional alarm monitoring", "Agreed CCTV maintenance", "Annual system review", "One renewal date", "One point of contact", "Priority support where stated in the agreement", "Discounted labour or preferential repair pricing only where written into the package"],
    suitableFor: ["Homes with alarm and CCTV", "Landlords", "Retail", "Offices", "Commercial premises", "Customers wanting one renewal date"],
    process: [
      { title: "Review the systems", text: "We confirm the alarm, CCTV, monitoring compatibility and current system condition." },
      { title: "Confirm the package", text: "The included services, exclusions, renewal price and any initial takeover work are stated in writing." },
      { title: "Activate and service", text: "Monitoring and maintenance are set up and the annual service schedule is confirmed." },
      { title: "Annual review", text: "Systems, contacts and future support requirements can be reviewed at renewal." }
    ],
    details: [
      { title: "One point of contact", text: "The package reduces separate renewal dates and fragmented support across the agreed security systems." },
      { title: "Clear boundaries", text: "Replacement parts, repairs and specialist services remain excluded unless the written agreement specifically includes them." },
      { title: "Commercial packages", text: "Commercial arrangements are tailored around system size, camera count, monitoring and site access." }
    ],
    faq: [
      { q: "What is included in the £795 package?", a: "It is a starting price. The exact combination of alarm servicing, professional monitoring and CCTV maintenance is confirmed in the written quotation for the property." },
      { q: "Is CCTV monitoring included?", a: "Residential CCTV monitoring is not presented as a standard separate product. Any specialist option must be specifically confirmed in writing." },
      { q: "Are all repairs included?", a: "No. Repairs, replacement equipment and parts are separate unless the agreement specifically states otherwise." }
    ],
    related: [{ href: "/service-plans/alarm-maintenance", label: "Alarm maintenance" }, { href: "/service-plans/alarm-monitoring", label: "Alarm monitoring" }, { href: "/service-plans/cctv-maintenance", label: "CCTV maintenance" }]
  },
  "fire-compliance": {
    slug: "fire-compliance",
    eyebrow: "Fire Compliance Package",
    title: "Coordinated fire alarm, emergency lighting and compliance support",
    metaTitle: "Fire Compliance Package Chesterfield | Commercial Annual Servicing",
    metaDescription: "Tailored fire compliance packages across Chesterfield, Sheffield and Derbyshire, coordinating fire alarm servicing, emergency lighting and agreed fire safety services.",
    intro: "Bring agreed fire alarm servicing, emergency lighting, extinguisher servicing and fire risk assessment support into a clearer commercial service arrangement.",
    image: "/images/fire-safety.png",
    imageAlt: "Commercial fire alarm and emergency lighting compliance package",
    priceNote: "Packages are quoted to the property portfolio, system quantities, visit frequency and included services.",
    included: ["Agreed fire alarm servicing", "Agreed emergency lighting servicing", "Fire extinguisher servicing where included", "Fire risk assessment support where included", "Digital service records", "Defect reporting", "One renewal date where agreed", "Coordinated engineer scheduling"],
    suitableFor: ["Retail", "Offices", "Hospitality", "Warehouses", "Landlords and HMOs", "Multi-site portfolios"],
    process: [
      { title: "Asset schedule", text: "We gather the sites, systems, device or fitting quantities, service frequencies and available records." },
      { title: "Package design", text: "The included services, visit schedule, exclusions and annual cost are presented clearly." },
      { title: "Coordinated servicing", text: "Visits are planned to reduce disruption and keep documentation consistent." },
      { title: "Renewal and defects", text: "Outstanding defects, completed remedials and the next annual schedule can be reviewed together." }
    ],
    details: [
      { title: "Single-site support", text: "Smaller commercial premises can combine the key annual fire safety services they actually need." },
      { title: "Portfolio management", text: "Larger customers can coordinate service dates, reporting and one point of communication across several sites." },
      { title: "Transparent scope", text: "The package lists exactly which services are included. Repairs, parts and unlisted work remain separate." }
    ],
    faq: [
      { q: "Is every fire service automatically included?", a: "No. The package only includes the services and frequencies confirmed in the written quotation." },
      { q: "Can several sites share one renewal date?", a: "Yes, where agreed and operationally practical, multi-site servicing can be placed under one coordinated renewal structure." },
      { q: "Are repairs included in the annual price?", a: "Not unless specifically stated. Defects, parts and remedial work are normally quoted separately." }
    ],
    related: [{ href: "/service-plans/fire-alarm-servicing", label: "Fire alarm servicing" }, { href: "/service-plans/emergency-lighting-servicing", label: "Emergency lighting servicing" }, { href: "/systems/fire-risk-assessment", label: "Fire risk assessment" }]
  }
}
