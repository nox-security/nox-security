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
  ctaLabel?: string
  audience?: "Residential" | "Commercial" | "Residential & Commercial"
  serviceCategory?: string
  enquiryType?: "Installation" | "Servicing" | "Repair" | "Monitoring" | "Takeover" | "General"
  pricingFactors?: string[]
  guide?: LinkItem
  serviceAreaText?: string
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
  ctaLabel?: string
  audience?: "Residential" | "Commercial" | "Residential & Commercial"
  serviceCategory?: string
  enquiryType?: "Installation" | "Servicing" | "Repair" | "Monitoring" | "Takeover" | "General"
  pricingFactors?: string[]
  guide?: LinkItem
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
  gallery?: { src: string; alt: string; caption?: string }[]
  metaTitle?: string
  metaDescription?: string
  searchKeywords?: string[]
  designPriorities?: string[]
  outcome?: string
  localContext?: string
  faq?: FAQItem[]
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
    searchKeywords: ["commercial CCTV installation Chesterfield", "hospitality CCTV Chesterfield", "CCTV installer Chesterfield", "business security systems Derbyshire"],
    designPriorities: [
      "Cover customer entrances, circulation areas and operational spaces without making the system feel intrusive inside a character-led hospitality venue.",
      "Position cameras and recording equipment around lighting, customer movement and the practical need to review footage when the venue is busy.",
      "Configure a clear live-view display and complete a handover that lets the customer find cameras and recorded events without unnecessary complexity.",
    ],
    outcome: "The completed system provided dependable recorded coverage, a practical live view and a clear handover for the customer. The installation was planned around the working hospitality environment and the appearance of the Chesterfield property.",
    localContext: "Hospitality CCTV in Chesterfield needs to account for customer areas, entrances, variable lighting, opening hours and where staff can safely view or retrieve footage. A site survey confirms the camera count, recorder capacity and installation route for each venue.",
    faq: [
      { q: "What should a Chesterfield hospitality venue consider before a CCTV quote?", a: "Useful details include the number of entrances, customer and staff areas, opening hours, current network or recorder, known blind spots and how long footage may need to be retained." },
      { q: "Can CCTV be installed without spoiling the appearance of a restaurant or bar?", a: "Yes. Camera style, colour, mounting position and cable routes can be planned around the building, although reliable coverage and lawful use must remain the priority." },
    ]
  },
  {
    slug: "continue-arcade-commercial-cctv-derby",
    title: "Ajax CCTV installation at Continue Arcade",
    location: "Derby, Derbyshire",
    category: "Commercial CCTV",
    image: "/images/revisions/continue-arcade-derby-exterior.jpg",
    alt: "Continue Arcade in Derby protected by a professional CCTV system installed by NOX",
    summary: "A recorded multi-camera CCTV installation for a busy retro gaming arcade in Derby.",
    story: "Continue Arcade required clear recorded coverage across a distinctive leisure venue with multiple gaming, customer and circulation areas. NOX installed and commissioned a professional CCTV system, configured the live-view display and completed the handover for the site team.",
    requirement: "Provide practical recorded CCTV coverage across the arcade, customer areas and key routes through the premises.",
    delivery: "NOX supplied, installed and configured the Ajax CCTV equipment and NVR, tested the live view and recording, and completed the customer handover.",
    systems: ["Ajax CCTV", "Network video recorder", "Multi-camera live view", "Commercial leisure venue"],
    gallery: [
      { src: "/images/revisions/continue-arcade-cctv-live-view.jpg", alt: "Live multi-camera CCTV display at Continue Arcade in Derby" },
      { src: "/images/revisions/continue-arcade-ajax-cctv-equipment.jpg", alt: "Ajax CCTV cameras and NVR prepared for the Continue Arcade installation" }
    ],
    metaTitle: "Arcade CCTV Installation Derby | Continue Arcade Case Study",
    metaDescription: "Commercial Ajax CCTV installation at Continue Arcade in Derby, including multi-camera coverage, NVR recording, live viewing and professional handover.",
    searchKeywords: ["commercial CCTV installation Derby", "arcade CCTV Derby", "Ajax CCTV installer Derbyshire", "business CCTV systems Derby"],
    designPriorities: [
      "Plan coverage across gaming areas, customer routes and key entrances rather than treating the arcade as one open room.",
      "Allow for bright screens, changing light levels and busy movement when selecting camera positions and reviewing the recorded image.",
      "Give the site team a usable multi-camera live view and straightforward access to the recorder after installation.",
    ],
    outcome: "NOX delivered a commissioned Ajax CCTV system with multi-camera recording and live viewing across the Derby arcade. The site team received a practical handover for normal operation and footage review.",
    localContext: "Commercial CCTV projects in Derby often need to balance customer experience with reliable evidence across several rooms or activity zones. The survey should establish routes, lighting, network availability, recording requirements and how managers will access the system.",
    faq: [
      { q: "How many CCTV cameras does a leisure venue in Derby need?", a: "The number depends on entrances, circulation routes, tills, customer areas, blind spots and the level of detail required. A survey is more reliable than estimating from floor area alone." },
      { q: "Can managers view several cameras on one screen?", a: "Yes. Suitable recorders can provide a multi-camera live view, with user permissions and remote access configured around the business requirement." },
    ]
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
      { src: "/images/projects/tan-station-camera-external-2.jpg", alt: "Commercial CCTV camera installed on the black exterior of The Tan Station" },
      { src: "/images/revisions/tan-station-black-cctv-camera.jpg", alt: "Black CCTV camera installed inside The Tan Station" },
      { src: "/images/revisions/tan-station-ajax-keypad.jpg", alt: "NOX branded Ajax keypad installed at The Tan Station" }
    ],
    metaTitle: "Commercial Fire & CCTV Installation Brimington | NOX",
    metaDescription: "Commercial CCTV and fire-alarm first-fix project at The Tan Station in Brimington, Chesterfield, delivered by NOX Fire & Security.",
    searchKeywords: ["commercial CCTV Brimington", "fire alarm installation Chesterfield", "commercial fire and security systems", "CCTV installation Derbyshire"],
    designPriorities: [
      "Coordinate fire-alarm first-fix work with the commercial fit-out so cable routes and device positions are considered before finishes are complete.",
      "Use black CCTV equipment in visible areas where it supports the interior and exterior design without compromising the required camera view.",
      "Keep the fire and CCTV scopes clearly separated while coordinating access, sequencing and communication through one project team.",
    ],
    outcome: "The project combined fire-alarm first-fix work with carefully positioned black CCTV equipment, supporting the visual finish of the Brimington premises while keeping each system scope clear.",
    localContext: "Commercial fit-outs around Chesterfield benefit from early fire and security planning. Confirming ceilings, cable routes, finishes, other trades and the intended use of each area before second fix reduces avoidable changes later.",
    faq: [
      { q: "When should fire and CCTV contractors be involved in a commercial fit-out?", a: "As early as practical. Early drawings and site access help coordinate cable routes, ceilings, power, network points, device positions and the programme with other trades." },
      { q: "Can visible CCTV equipment match a dark interior?", a: "Often yes. Suitable black camera models and considered mounting positions can support the design, provided the selected equipment still delivers the required coverage." },
    ]
  },
  {
    slug: "telesis-hitachi-fire-intruder-system",
    title: "Industrial EN54 fire and intruder system at Telesis Hitachi",
    location: "Derbyshire",
    category: "Industrial Fire & Security",
    image: "/images/revisions/telesis-hitachi-exterior.jpg",
    alt: "Telesis industrial premises with Fire and intruder systems installed by NOX",
    summary: "A joined-up industrial Fire and intruder installation using an Ajax EN54 Fire Hub and clearly positioned warning devices.",
    story: "The Telesis Hitachi premises required a modern Fire and intruder solution suited to an operational industrial environment. NOX installed the system around the building, configured the Ajax EN54 Fire Hub, tested manual activation and evacuation functions, and completed the system handover.",
    requirement: "Provide a modern industrial Fire and intruder system with clear control, manual activation, warning and evacuation functions.",
    delivery: "NOX installed and commissioned the Ajax EN54 Fire Hub, manual call points, warning devices and the associated intruder equipment, then tested normal and alarm operation.",
    systems: ["Ajax EN54 Fire Hub", "Manual call points", "Visual and audible warning", "Commercial intruder alarm"],
    gallery: [
      { src: "/images/revisions/telesis-en54-fire-hub-normal.jpg", alt: "Ajax EN54 Fire Hub showing normal system operation at Telesis" },
      { src: "/images/revisions/telesis-en54-fire-hub-alarm.jpg", alt: "Ajax EN54 Fire Hub showing an evacuation alarm during testing" },
      { src: "/images/image-refresh/en54-manual-call-point.webp", alt: "Fire alarm manual call point installed at the Telesis industrial premises" },
      { src: "/images/revisions/telesis-nox-alarm-sounder.jpg", alt: "NOX branded external intruder alarm sounder at Telesis" },
      { src: "/images/revisions/telesis-fire-visual-indicator.jpg", alt: "Visual fire alarm indicator operating during the Telesis test" },
      { src: "/images/image-refresh/green-manual-call-point.webp", alt: "Close view of a manual fire call point at Telesis" }
    ],
    metaTitle: "Industrial EN54 Fire Alarm Installation Derbyshire | Telesis",
    metaDescription: "Industrial Ajax EN54 Fire Hub and intruder alarm installation at Telesis Hitachi, with manual call points, warning devices, testing and handover.",
    searchKeywords: ["industrial fire alarm installation Derbyshire", "Ajax EN54 Fire Hub installer", "warehouse fire alarm system", "commercial intruder alarm Derbyshire"],
    designPriorities: [
      "Keep the EN54 fire-alarm functions and commercial intruder protection clearly defined while coordinating installation across one industrial premises.",
      "Position the fire control, manual activation and warning devices so authorised users can understand normal, test and alarm conditions.",
      "Test activation, warning and evacuation functions and complete a handover suited to an operational industrial environment.",
    ],
    outcome: "The industrial premises received a modern Ajax EN54 fire system alongside commercial intruder protection, with normal and alarm functions tested and the controls explained at handover.",
    localContext: "Industrial fire and security projects in Derbyshire need to consider building use, operating areas, environmental conditions, access, existing records and how staff will respond to an event. Fire and intruder systems can be coordinated without blurring their separate purposes.",
    faq: [
      { q: "Can an industrial premises install fire and intruder systems in one project?", a: "Yes. Surveys, access and installation can be coordinated, but the fire alarm and intruder alarm remain separate systems with their own design, commissioning and ongoing service requirements." },
      { q: "What information helps prepare an industrial fire-alarm quotation?", a: "Building plans, fire-risk information, existing system details, zone or device information, known faults, access restrictions and the intended programme all help define the survey and quotation scope." },
    ]
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
    searchKeywords: ["CCTV installation Retford", "Hikvision installer Retford", "commercial CCTV DN22", "business CCTV Nottinghamshire", "ColorVu CCTV installation"],
    designPriorities: [
      "Cover entrances, internal rooms, corridors and the external approach across a substantial former bank rather than relying on a small number of wide views.",
      "Use a ten-camera layout and new recorder to provide a clearer, more manageable recorded system across the multi-room property.",
      "Configure a dedicated display and handover so the customer can move between live view and recorded footage confidently.",
    ],
    outcome: "The Retford property received ten Hikvision cameras, a new recorder and dedicated live viewing, creating a more practical CCTV system across internal and external areas.",
    localContext: "Larger commercial properties in Retford can contain several separated rooms, corridors and entrances. A useful CCTV design needs a room-by-room survey, clear evidence objectives and enough recorder capacity for the final camera specification.",
    faq: [
      { q: "Can an older commercial CCTV system in Retford be upgraded?", a: "Often yes. The survey checks the existing cameras, cabling, recorder, power, network and image quality before confirming what can be retained and what should be replaced." },
      { q: "Is ten cameras excessive for a former bank or multi-room building?", a: "Not necessarily. Camera quantity should follow the number of entrances, routes, rooms and external areas that need identifiable coverage rather than a fixed rule for every building." },
    ]
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
    searchKeywords: ["Ajax alarm installation Chesterfield", "home security Chesterfield", "intruder alarm installer Chesterfield", "residential CCTV Derbyshire", "smart home security Chesterfield"],
    designPriorities: [
      "Combine intruder protection and CCTV around the home, garage and external approaches instead of treating each system as a separate afterthought.",
      "Use black external cameras and considered device positions so the equipment sits naturally against the renovated brickwork.",
      "Configure app control, keypad use, recording and the external warning device around straightforward everyday operation.",
    ],
    outcome: "The Chesterfield home received coordinated Ajax intruder protection and black CCTV, with the equipment selected and positioned around both security performance and the finished appearance of the property.",
    localContext: "Residential security in Chesterfield should consider driveways, side access, garages, outbuildings, night mode, family routines and how visible equipment will look on the home. A property survey creates a more reliable design than a fixed online package.",
    faq: [
      { q: "Can a home alarm and CCTV system work together?", a: "They can be planned together and may share app or user workflows depending on the selected platforms. They still perform different roles: the alarm detects and warns, while CCTV records and helps verify activity." },
      { q: "Can black CCTV cameras be used on a residential property?", a: "Yes. Black cameras can suit darker frames, soffits or brickwork, but the final model and position must still provide the required image and safe installation route." },
    ]
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
      { src: "/images/projects/eufy-roof-camera.jpg", alt: "Smart CCTV camera installed at roof level on a Chesterfield property" },
      { src: "/images/revisions/eufy-smart-home-security-camera.jpg", alt: "Eufy dual-lens smart-home camera installed on a Chesterfield property" }
    ],
    metaTitle: "Solar & Smart Home CCTV Chesterfield | Eufy Installation",
    metaDescription: "Smart-home CCTV installation in Chesterfield using Eufy solar and floodlight cameras, professionally positioned and configured by NOX.",
    searchKeywords: ["solar CCTV Chesterfield", "wireless CCTV installation Chesterfield", "Eufy installer Chesterfield", "smart home security cameras Derbyshire"],
    designPriorities: [
      "Use a lower-disruption smart-camera approach where the property did not require a conventional wired recorder and full professional CCTV layout.",
      "Position solar and floodlight cameras around key external areas with attention to charging, wireless communication, lighting and the intended view.",
      "Complete the app setup and customer demonstration so alerts, live view and normal day-to-day controls are understood.",
    ],
    outcome: "The customer received solar and floodlight smart-camera coverage around the Chesterfield property with the devices positioned, configured and demonstrated by NOX.",
    localContext: "Smart-home CCTV can suit some Chesterfield properties, particularly where lower disruption is important. It still needs realistic planning around Wi-Fi, charging, detection zones, subscriptions or local storage, night performance and the difference between smart cameras and a recorder-based system.",
    faq: [
      { q: "Is smart-home CCTV suitable for every house?", a: "No. It can be a good fit for selected homes, but larger properties, poor wireless coverage, continuous recording requirements or higher evidence needs may be better served by a professional recorder-based system." },
      { q: "Do solar cameras still need careful positioning?", a: "Yes. The camera needs the required view, suitable wireless communication and enough useful light for charging, while avoiding positions that create excessive alerts or poor identification." },
    ]
  },
  {
    slug: "dronfield-timber-perimeter",
    title: "External Ajax detection at a Dronfield industrial site",
    location: "Dronfield, Derbyshire",
    category: "Industrial perimeter protection",
    image: "/images/v4-13-9/dronfield-perimeter-main.jpg",
    alt: "NOX Fire and Security van at a Dronfield industrial site protected with Ajax perimeter detection",
    summary: "Perimeter alarm protection for a working industrial site near Dronfield, using Ajax outdoor detection and external warning across key approach routes.",
    story: "This working industrial site near Dronfield required earlier warning around its external approaches rather than relying only on internal alarm detection. NOX designed and installed a dedicated Ajax perimeter layer using five outdoor detectors and an external warning siren around the areas most exposed to approach, stock movement and day-to-day site activity.",
    requirement: "Create a dependable external warning layer around a busy industrial site with open approaches, stored materials and several vulnerable routes into the premises.",
    delivery: "NOX installed five Ajax outdoor detectors and an external warning siren, positioned the devices around the practical approach routes, then tested the perimeter zones and completed the final system handover.",
    systems: ["Five Ajax outdoor detectors", "External warning siren", "Industrial perimeter protection", "Dronfield installation"],
    gallery: [
      { src: "/images/v4-13-9/dronfield-perimeter-detector-close.jpg", alt: "Close-up of an Ajax outdoor detector installed on a concrete post at the Dronfield site" },
      { src: "/images/v4-13-9/dronfield-perimeter-engineer.jpg", alt: "NOX engineer positioning external perimeter protection at the Dronfield industrial site" },
      { src: "/images/v4-13-9/dronfield-perimeter-covered-yard.jpg", alt: "Ajax outdoor detector covering a sheltered external area with stored timber at the Dronfield site" },
      { src: "/images/v4-13-9/dronfield-perimeter-siren.jpg", alt: "NOX external warning siren installed high on the industrial unit at the Dronfield site" },
      { src: "/images/v4-13-9/dronfield-perimeter-wide.jpg", alt: "Wide view showing an Ajax perimeter detector protecting a site approach at the Dronfield industrial premises" }
    ],
    metaTitle: "Industrial Perimeter Protection Dronfield | Ajax Detection",
    metaDescription: "External Ajax perimeter protection for an industrial site in Dronfield, using five outdoor detectors and an external warning siren.",
    searchKeywords: ["industrial security Dronfield", "Ajax perimeter protection Dronfield", "commercial intruder alarm Derbyshire", "outdoor detection Dronfield"],
    designPriorities: [
      "Create earlier warning around the exposed approaches to the site rather than relying only on internal detection after entry has already taken place.",
      "Position the outdoor detectors around genuine routes of approach, stored materials and working areas so the perimeter layer supports day-to-day operations rather than fighting against them.",
      "Use a clear external warning point and complete a practical handover so the perimeter system supports the wider site response without being mistaken for a standalone physical barrier.",
    ],
    outcome: "Five Ajax outdoor detectors and an external warning siren were installed and tested around the Dronfield industrial site, creating a dedicated perimeter-warning layer across the key exposed approaches.",
    localContext: "Industrial and yard security around Dronfield often involves open boundaries, stored stock, vehicles, covered external areas and regular daily movement. External detection has to be surveyed around the site layout, vegetation, wildlife, working routines and likely approach routes to reduce avoidable activations.",
    faq: [
      { q: "Can Ajax outdoor detectors protect a commercial yard?", a: "Yes, where the survey confirms suitable positions, communication range and detection routes. External detection should be designed as a separate layer and tested around the way the yard operates." },
      { q: "Does perimeter detection replace CCTV or physical security?", a: "No. It adds earlier warning. CCTV, lighting, gates, locks, fencing, response procedures and internal detection may still be required as part of the wider site strategy." },
    ]
  },
  {
    slug: "buxton-industrial-security",
    title: "Industrial alarm and nine-camera CCTV system",
    location: "Buxton, Derbyshire",
    category: "Industrial Fire & Security",
    image: "/images/resent-installation/F5B46861-7E5F-416A-BD90-69C544691E7A.png",
    alt: "NOX commercial CCTV installation at an industrial site in Buxton",
    summary: "A joined-up intruder and nine-camera CCTV installation for an industrial premises in Buxton.",
    metaTitle: "Industrial CCTV & Intruder Alarm Buxton | NOX",
    metaDescription: "A nine-camera CCTV and Ajax intruder alarm installation for an industrial premises in Buxton, Derbyshire, planned and delivered by NOX.",
    story: "A busy industrial site in Buxton required one joined-up security approach. NOX combined an Ajax intruder alarm with a nine-camera CCTV system planned around the premises and its working areas.",
    requirement: "Provide intruder protection and a nine-camera CCTV system for the industrial site.",
    delivery: "NOX installed the Ajax intruder alarm and nine-camera CCTV system within the confirmed project scope.",
    systems: ["Ajax intruder alarm", "Nine-camera CCTV system", "Industrial premises"],
    gallery: [
      { src: "/images/image-refresh/commercial-cctv-buxton-monitor.webp", alt: "Nine-camera CCTV live view at an industrial premises in Buxton" }
    ],
    searchKeywords: ["industrial CCTV Buxton", "commercial alarm installation Buxton", "security systems Derbyshire"],
    designPriorities: [
      "Plan the nine-camera CCTV layout around working areas and access routes across the industrial premises.",
      "Coordinate the Ajax intruder alarm with the CCTV project so users receive a clearer joined-up security handover.",
      "Allow for the site layout, network, operating conditions and future maintenance when selecting positions and recording equipment.",
    ],
    outcome: "The Buxton premises received a nine-camera CCTV system and Ajax intruder alarm as one coordinated industrial security project.",
    localContext: "Industrial security in Buxton and the High Peak can involve larger plots, external approaches, challenging weather and separated working areas. The survey should confirm cable routes, wireless range, lighting, camera detail and access for future servicing.",
    faq: [
      { q: "Can CCTV and an intruder alarm be installed together at an industrial site?", a: "Yes. Coordinating the surveys and installation can improve camera coverage, detector planning, user setup and the final handover while keeping each system function clear." },
      { q: "What affects the cost of industrial CCTV in Buxton?", a: "Camera quantity, image requirement, cable distances, access equipment, network, recorder storage, lighting, working restrictions and any existing equipment all affect the quotation." },
    ]
  },
  {
    slug: "chesterfield-scrapyard-cctv",
    title: "Thirteen-camera commercial CCTV installation",
    location: "Chesterfield, Derbyshire",
    category: "Commercial CCTV",
    image: "/images/resent-installation/5565AAD0-9F37-4C18-9E4A-1147A4389378.png",
    alt: "8MP AI turret CCTV cameras installed at a Chesterfield scrapyard",
    summary: "A higher-camera-count CCTV installation across a commercial yard in Chesterfield.",
    metaTitle: "Commercial CCTV Installation Chesterfield Yard | NOX",
    metaDescription: "Thirteen 8MP AI turret cameras installed across a Chesterfield scrapyard to improve recorded coverage of vehicle routes and operational areas.",
    story: "Thirteen 8MP AI turret cameras were positioned across a working scrapyard to cover vehicle routes, operational areas and the wider site with a clearer recorded view.",
    requirement: "Install wider CCTV coverage using thirteen cameras across the scrapyard site.",
    delivery: "NOX installed thirteen 8MP AI turret cameras as the confirmed project scope.",
    systems: ["Thirteen CCTV cameras", "8MP AI turret cameras", "Commercial yard"],
    searchKeywords: ["commercial CCTV Chesterfield", "scrapyard CCTV", "13 camera CCTV installation"],
    designPriorities: [
      "Use a higher camera count to cover vehicle routes, operational areas and the wider yard instead of relying on a few cameras with overly broad views.",
      "Position 8MP AI turret cameras around the real movement and evidence requirements of a working commercial site.",
      "Plan recording, access and future maintenance around an exposed yard environment and the daily operation of the business.",
    ],
    outcome: "NOX installed thirteen 8MP AI turret cameras across the Chesterfield scrapyard, creating wider recorded coverage of the yard and its operational routes.",
    localContext: "Commercial yards in Chesterfield often need cameras across gates, vehicle routes, stock areas and building approaches. Camera quantity should follow the required evidence and site layout, with attention to lighting, weather, mounting height and recorder storage.",
    faq: [
      { q: "How many cameras does a commercial yard need?", a: "There is no fixed number. Gates, vehicle routes, stock areas, buildings, blind spots and the required identification detail determine the design. Larger yards commonly need more cameras than expected from the boundary size alone." },
      { q: "Are 8MP cameras always the best choice?", a: "Resolution is only one factor. Lens, position, lighting, compression, recorder settings and the distance to the subject all affect whether the footage is useful." },
    ]
  },
  {
    slug: "peak-electronic-security",
    title: "Intruder and nine-camera CCTV installation",
    location: "Derbyshire",
    category: "Commercial alarm & CCTV",
    image: "/images/v4-13-10/peak-electronic/main.jpg",
    alt: "Peak Electronic premises protected by a NOX intruder alarm and nine-camera CCTV system",
    summary: "A coordinated Ajax intruder alarm and nine-camera CCTV installation for Peak Electronic, replacing an older security setup with clearer control, recording and live viewing.",
    metaTitle: "Peak Electronic CCTV & Intruder Alarm | NOX",
    metaDescription: "Ajax intruder protection and a nine-camera CCTV system installed for Peak Electronic, including upgraded control, external cameras, recording and live viewing.",
    story: "Peak Electronic had older CCTV and alarm equipment that no longer reflected the level of control and coverage required across the premises. NOX assessed the existing setup, installed a modern Ajax intruder system and delivered nine-camera CCTV coverage with a clearer recording and live-viewing arrangement.",
    requirement: "Upgrade the existing commercial security setup with reliable intruder protection, nine-camera CCTV coverage and straightforward day-to-day control for the team.",
    delivery: "NOX installed the Ajax intruder system, upgraded the customer controls, routed the required cabling through the premises and commissioned a nine-camera CCTV system with live and recorded viewing.",
    systems: ["Ajax commercial intruder alarm", "Nine-camera CCTV system", "External CCTV coverage", "Live viewing and recording", "Commercial system upgrade"],
    gallery: [
      { src: "/images/v4-13-10/peak-electronic/legacy-cctv.jpg", alt: "Older Xvision CCTV recorder and camera equipment at Peak Electronic before the security upgrade", caption: "The existing Xvision recording equipment was assessed before the new nine-camera system was commissioned." },
      { src: "/images/v4-13-10/peak-electronic/roof-space-installation.jpg", alt: "NOX engineer routing security cabling through the roof space at Peak Electronic", caption: "Cabling was routed through the roof space to support the camera layout while keeping the installation practical and serviceable." },
      { src: "/images/v4-13-10/peak-electronic/ajax-keypad-upgrade.jpg", alt: "New Ajax keypad installed beside the previous alarm control at Peak Electronic", caption: "A modern Ajax keypad introduced clearer everyday control alongside the existing legacy alarm position." },
      { src: "/images/v4-13-10/peak-electronic/external-camera-gate.jpg", alt: "External CCTV cameras protecting a gate and approach at Peak Electronic", caption: "External cameras were positioned around vulnerable approaches and access routes rather than relying on broad overview images." },
      { src: "/images/v4-13-10/peak-electronic/front-camera-siren.jpg", alt: "NOX external siren and CCTV camera installed at the front corner of Peak Electronic", caption: "The front elevation combines visible deterrence with recorded coverage of the main approach." },
      { src: "/images/v4-13-10/peak-electronic/front-security-detail.jpg", alt: "Close view of a NOX siren and external CCTV camera at Peak Electronic", caption: "Equipment positions were selected around the building structure, signage and the areas requiring useful identification detail." },
      { src: "/images/v4-13-10/peak-electronic/nine-camera-live-view.jpg", alt: "Nine-camera CCTV live view displayed inside Peak Electronic", caption: "The completed system gives the team one clear live view across the car park, entrances, road, gates and rear areas." }
    ],
    searchKeywords: ["Peak Electronic security", "commercial CCTV Derbyshire", "Ajax intruder alarm business", "nine camera CCTV system"],
    designPriorities: [
      "Replace the limitations of the older alarm and CCTV arrangement with a clearer joined-up system for detection, recording and everyday control.",
      "Plan nine camera views around entrances, vehicle areas, gates, rear approaches and the evidence the business would need after an event.",
      "Route the installation around the existing building and roof space, then complete a practical handover covering the Ajax controls, live view and recorded playback.",
    ],
    outcome: "Peak Electronic received a modern Ajax intruder alarm and nine-camera CCTV system with upgraded user control, external coverage, recording and a clear multi-camera live view for the team.",
    localContext: "Commercial system upgrades across Derbyshire often begin with a mixture of older recorders, inherited alarm controls and cabling that may still be useful. A proper survey identifies what can be retained, what needs replacing and how new equipment can be installed without unnecessary disruption.",
    faq: [
      { q: "Can an older commercial CCTV system be upgraded rather than completely rewired?", a: "Sometimes. Existing cable routes, cameras, recorder technology, power, network and image quality must be assessed before deciding what can be retained or reused." },
      { q: "Why combine CCTV and an intruder alarm for a business?", a: "The alarm provides detection and warning while CCTV provides live and recorded visibility. Planning them together can improve coverage, verification and user handover." },
      { q: "Can NOX maintain the systems after installation?", a: "Yes. Suitable CCTV and intruder systems can move into planned maintenance, monitoring or future upgrade support under a clearly defined service scope." },
    ]
  },
  {
    slug: "sheffield-residential-security",
    title: "Residential CCTV and intruder protection",
    location: "Sheffield, South Yorkshire",
    category: "Residential security",
    image: "/images/v4-13-10/sheffield-residential/main.jpg",
    alt: "NOX van outside a Sheffield home during a residential CCTV and Ajax intruder alarm installation",
    summary: "A coordinated residential CCTV and Ajax intruder alarm installation for a Sheffield home, covering the main approach, entrances and everyday app-based control.",
    metaTitle: "Home CCTV & Ajax Intruder Alarm Sheffield | NOX",
    metaDescription: "Residential CCTV and Ajax intruder protection installed at a Sheffield home, including external cameras, door protection, an external siren and app-based control.",
    story: "This Sheffield home required CCTV and intruder protection to work together around the front approach, driveway and main access points. NOX installed external cameras alongside an Ajax alarm system, using a visible external siren, door protection and a centrally connected hub for straightforward everyday control.",
    requirement: "Protect the home, driveway and principal access points with coordinated CCTV and intruder detection while keeping the system simple for the household to use.",
    delivery: "NOX installed the external CCTV coverage, Ajax control hub, door protection and external warning siren, then configured the system and completed the homeowner handover.",
    systems: ["Residential CCTV", "Ajax intruder alarm", "External cameras", "Door protection", "External warning siren", "Sheffield installation"],
    gallery: [
      { src: "/images/v4-13-10/sheffield-residential/front-cameras-siren.jpg", alt: "Two black external CCTV cameras and a NOX siren installed on the Sheffield home", caption: "The front elevation combines camera coverage of the approach with a clearly visible external alarm siren." },
      { src: "/images/v4-13-10/sheffield-residential/ajax-siren.jpg", alt: "White Ajax external siren installed on the stone exterior of the Sheffield property", caption: "The external siren provides local warning and visible deterrence without overpowering the appearance of the property." },
      { src: "/images/v4-13-10/sheffield-residential/ajax-hub.jpg", alt: "Black Ajax alarm hub connected inside the Sheffield home", caption: "The Ajax hub provides the central communication and app connection for the residential alarm system." },
      { src: "/images/v4-13-10/sheffield-residential/engineer-siren-install.jpg", alt: "NOX engineer installing the external alarm siren above the CCTV cameras at a Sheffield home", caption: "The siren and cameras were positioned around the front approach while keeping the finished installation tidy." },
      { src: "/images/v4-13-10/sheffield-residential/door-protection.jpg", alt: "Black Ajax door contact installed on the main entrance door of the Sheffield home", caption: "Door protection adds an immediate alert at the main entrance before relying on movement detection deeper inside the property." }
    ],
    searchKeywords: ["home CCTV Sheffield", "Ajax intruder alarm Sheffield", "residential security South Yorkshire", "house alarm and CCTV Sheffield"],
    designPriorities: [
      "Plan CCTV and intruder protection around the same Sheffield home so the driveway, front approach and principal entrance are covered as complementary security layers.",
      "Use external cameras, door protection and a visible siren in positions that provide useful performance without making the property look over-equipped.",
      "Connect the Ajax system through one central hub and complete a clear handover so alerts, arming and normal day-to-day use remain straightforward for the household.",
    ],
    outcome: "The Sheffield property received coordinated residential CCTV and Ajax intruder protection, including external camera coverage, door protection, a connected hub and a professionally positioned warning siren.",
    localContext: "Home security in Sheffield varies considerably between terraces, semis, detached homes and properties with garages or side access. A survey helps identify the right camera views, alarm zones, communication range and control method without adding equipment that does not improve the finished system.",
    faq: [
      { q: "Do Sheffield homes need both CCTV and an intruder alarm?", a: "Not every property needs both, but they serve different purposes. CCTV provides live and recorded visibility, while the alarm provides detection and warning around protected doors and internal areas." },
      { q: "Can a home security system send alerts to a phone?", a: "Yes. Suitable alarm and CCTV systems can provide app notifications, subject to the selected equipment, internet or cellular connection, permissions and configuration." },
      { q: "Can CCTV cameras and the alarm siren be installed neatly on the same elevation?", a: "Yes. Positions can be planned around the property finish, cable routes and required coverage so the equipment remains effective without looking cluttered." },
    ]
  },
  {
    slug: "chesterfield-kitchen-showroom",
    title: "Intruder alarm and CCTV for a kitchen showroom",
    location: "Chesterfield, Derbyshire",
    category: "Retail & showroom security",
    image: "/images/v4-13-9/kitchen-showroom/main.jpg",
    alt: "NOX Fire and Security vehicles outside a Chesterfield kitchen showroom protected by CCTV and an intruder alarm",
    summary: "A joined-up intruder and CCTV installation for a premium kitchen showroom.",
    metaTitle: "Showroom CCTV & Intruder Alarm Chesterfield | NOX",
    metaDescription: "A coordinated CCTV and intruder alarm installation for a Chesterfield kitchen showroom, planned around security and the customer-facing finish.",
    story: "The showroom required security that supported the property without disrupting its customer-facing design. NOX combined intruder protection and CCTV within one coordinated installation.",
    requirement: "Protect the showroom with CCTV and intruder detection.",
    delivery: "NOX installed and configured the intruder and CCTV systems within the confirmed scope.",
    systems: ["Ajax intruder alarm", "Commercial CCTV", "Showroom security"],
    gallery: [
      { src: "/images/v4-13-9/kitchen-showroom/exterior.jpg", alt: "NOX vehicles outside the Chesterfield kitchen showroom during the security installation" },
      { src: "/images/v4-13-9/kitchen-showroom/nox-siren.jpg", alt: "Black NOX branded Ajax external siren installed on the kitchen showroom" },
      { src: "/images/v4-13-9/kitchen-showroom/ajax-keypad.jpg", alt: "Black Ajax keypad installed inside the kitchen showroom for everyday alarm control" },
      { src: "/images/v4-13-9/kitchen-showroom/siren-ready.jpg", alt: "NOX branded external siren prepared during the kitchen showroom installation" }
    ],
    searchKeywords: ["retail security Chesterfield", "showroom CCTV", "commercial alarm Chesterfield"],
    designPriorities: [
      "Protect the showroom without allowing visible security equipment to dominate the customer-facing design.",
      "Coordinate intruder detection and CCTV around entrances, display areas and the way staff open, close and use the premises.",
      "Complete a clear handover so the business can operate both systems confidently after installation.",
    ],
    outcome: "The Chesterfield showroom received coordinated Ajax intruder protection and commercial CCTV within a carefully presented customer-facing environment.",
    localContext: "Retail and showroom security in Chesterfield needs to balance evidence, deterrence and reliable detection with the appearance and daily operation of the premises. Opening routines, public areas, stock, tills and rear access should all be considered.",
    faq: [
      { q: "Can CCTV and alarm equipment be discreet in a showroom?", a: "Yes. Equipment colour, position and cable routes can be planned around the interior, while still keeping the required coverage and detector performance." },
      { q: "What should a showroom security survey include?", a: "Entrances, public and staff areas, valuable displays, stock rooms, tills, opening procedures, network, lighting and the required response should be reviewed." },
    ]
  },
  {
    slug: "banana-industries-fire-security",
    title: "Intruder and fire protection for Banana Industries",
    location: "Derbyshire",
    category: "Commercial Fire & Security",
    image: "/images/image-refresh/banana-industries-exterior.webp",
    alt: "Actual Banana Industries premises with the NOX van and installed external security equipment",
    summary: "A commercial project bringing intruder and fire protection together.",
    metaTitle: "Commercial Fire & Intruder Installation Derbyshire | NOX",
    metaDescription: "A coordinated commercial fire and intruder installation for Banana Industries in Derbyshire, delivered and handed over by the local NOX team.",
    story: "NOX delivered a coordinated intruder and fire project for Banana Industries, keeping the installation and handover within one local team.",
    requirement: "Provide intruder and fire protection for the commercial premises.",
    delivery: "NOX installed the confirmed intruder and fire systems.",
    systems: ["Commercial intruder alarm", "Fire protection", "Joined-up installation"],
    searchKeywords: ["commercial fire and security Derbyshire", "fire alarm installation", "business intruder alarm"],
    designPriorities: [
      "Coordinate commercial intruder and fire protection through one project while retaining clear functions and records for each system.",
      "Plan installation and handover around the operational premises and the people responsible for day-to-day control.",
      "Create a route from installation into future servicing, faults and support without hiding the separate fire and security requirements.",
    ],
    outcome: "Banana Industries received coordinated commercial intruder and fire protection delivered through the same local NOX project team.",
    localContext: "Businesses across Derbyshire often need fire and security work at the same premises. Coordinated surveys can reduce duplicated access and improve project planning, while fire alarms and intruder alarms remain separate systems with their own testing and service needs.",
    faq: [
      { q: "Can one contractor coordinate fire and intruder work?", a: "Yes. NOX can coordinate suitable projects through one team, while keeping the design, commissioning, operation and future servicing of each system clearly defined." },
      { q: "Can the systems be serviced after installation?", a: "Yes. Fire-alarm servicing, intruder maintenance and monitoring can be quoted as clear ongoing services following handover." },
    ]
  },
  {
    slug: "chatsworth-estate-cctv-upgrade",
    title: "Ten-camera CCTV upgrade",
    location: "Chatsworth Estate, Derbyshire",
    category: "Estate CCTV",
    image: "/images/v4-13-7/chatsworth-estate-main.jpg",
    alt: "NOX engineer on a ladder at Chatsworth Estate during a CCTV project",
    summary: "A ten-camera CCTV upgrade with a new recorder at Chatsworth Estate.",
    metaTitle: "CCTV System Upgrade Chatsworth Estate | NOX",
    metaDescription: "A ten-camera CCTV system upgrade with a new recorder at Chatsworth Estate, improving recording and ongoing access to the installed system.",
    story: "NOX upgraded a ten-camera system and installed a new recorder, retaining a clear focus on practical recording and ongoing access.",
    requirement: "Upgrade the existing ten-camera CCTV system and recorder.",
    delivery: "NOX completed the confirmed ten-camera upgrade and new recorder installation.",
    systems: ["Ten-camera CCTV upgrade", "New recorder", "Estate security"],
    searchKeywords: ["CCTV upgrade Derbyshire", "estate CCTV", "commercial CCTV recorder replacement"],
    designPriorities: [
      "Assess the existing ten-camera system and recorder before confirming the practical upgrade scope.",
      "Install a new recorder and retain a clear route to live view, playback and ongoing access for the customer.",
      "Plan the upgrade around an established estate environment where existing equipment, cable routes and future support all matter.",
    ],
    outcome: "The Chatsworth Estate system was upgraded across ten cameras with a new recorder, improving the ongoing recording and access arrangement within the confirmed project scope.",
    localContext: "CCTV upgrades at estates and larger Derbyshire properties should begin with an audit of cameras, cabling, power, recorder capacity, network and the evidence required. Replacement is not automatically necessary for every component.",
    faq: [
      { q: "Can an existing CCTV system be upgraded without replacing every camera?", a: "Sometimes. Compatibility, image quality, cabling, power and recorder support determine what can be retained. A takeover or upgrade survey should confirm this before quotation." },
      { q: "What information helps with a CCTV upgrade quote?", a: "The recorder make, camera quantity, sample images, known faults, remote-access requirements, retention period and any plans to add cameras are useful starting details." },
    ]
  }
]

const projectTitleUpdates: Record<string, string> = {
  "bottle-and-thyme-commercial-cctv-chesterfield": "Commercial CCTV Installation for a Chesterfield Hospitality Venue",
  "continue-arcade-commercial-cctv-derby": "Commercial CCTV Installation for a Derby Retro Gaming Arcade",
  "telesis-hitachi-fire-intruder-system": "Industrial Fire and Intruder Installation for a Derbyshire Warehouse",
  "chesterfield-home-ajax-cctv-intruder": "Ajax Alarm and CCTV Installation for a Chesterfield Home",
  "dronfield-timber-perimeter": "Perimeter Alarm Protection for an Industrial Site near Dronfield",
  "buxton-industrial-security": "Industrial CCTV and Intruder Protection in Buxton",
  "banana-industries-fire-security": "Commercial Fire and Intruder Installation for Banana Industries",
}

for (const project of caseStudies) {
  project.title = projectTitleUpdates[project.slug] ?? project.title
}


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
    nearby: "Sutton-in-Ashfield, Kirkby-in-Ashfield, Shirebrook and Ripley"
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
  retford: {
    name: "Retford", county: "Nottinghamshire",
    intro: "CCTV, intruder alarm and ongoing service support for residential and commercial properties around Retford.",
    focus: "NOX has completed a ten-camera CCTV installation at a former bank in Retford and supports further suitable projects in the area.",
    commercial: "Commercial options include high-coverage CCTV, alarms, takeovers, maintenance and fire safety services.",
    nearby: "Tuxford, Bawtry, Newark-on-Trent and north Nottinghamshire"
  },
  nottinghamshire: {
    name: "Nottinghamshire", county: "Nottinghamshire",
    intro: "Larger residential and commercial CCTV, alarm and fire safety projects across Nottinghamshire where the scope suits the NOX service area.",
    focus: "NOX provides direct communication from survey and quotation through to installation and ongoing support.",
    commercial: "Portfolio and multi-system work can combine CCTV, intruder alarms, fire alarms, emergency lighting, monitoring and maintenance.",
    nearby: "Mansfield, Retford, Newark-on-Trent and surrounding Nottinghamshire areas"
  },
  eckington: {
    name: "Eckington", county: "Derbyshire",
    intro: "Local CCTV, intruder alarm and fire-safety support for homes, shops, offices and commercial premises around Eckington.",
    focus: "NOX surveys entrances, driveways, garages, external approaches and existing equipment before confirming the right installation or takeover route.",
    commercial: "Businesses can arrange CCTV, alarm, fire-alarm servicing, emergency-lighting testing, monitoring and maintenance from the Chesterfield-based team.",
    nearby: "Mosborough, Killamarsh, Renishaw, Dronfield and the Sheffield border"
  },
  "clay-cross": {
    name: "Clay Cross", county: "Derbyshire",
    intro: "Fire and security systems for homes, landlords, shops, offices and commercial sites across Clay Cross and the surrounding villages.",
    focus: "System design considers the property layout, existing alarms or cameras, driveways, outbuildings and the preferred method of app, keypad or monitored control.",
    commercial: "Commercial services include CCTV, intruder alarms, fire alarms, emergency lighting, system takeovers and planned annual support.",
    nearby: "North Wingfield, Tupton, Wingerworth, Ashover and Chesterfield"
  },
  bolsover: {
    name: "Bolsover", county: "Derbyshire",
    intro: "CCTV, intruder alarms and fire-safety services for homes, retail, industrial units and commercial premises around Bolsover.",
    focus: "NOX provides surveys for new systems, upgrades and takeovers, with equipment selected around access, external areas, operating routines and future support.",
    commercial: "Warehouses, workshops, shops and yards can combine recorded CCTV, alarms, fire work, emergency lighting, monitoring and servicing.",
    nearby: "Clowne, Shirebrook, Staveley, Barlborough and Chesterfield"
  },
  alfreton: {
    name: "Alfreton", county: "Derbyshire",
    intro: "Professionally installed CCTV, intruder alarms, fire alarms and maintenance for homes and businesses around Alfreton.",
    focus: "The survey reviews entrances, yards, customer or staff areas, existing systems, network and the ongoing response or service arrangement required.",
    commercial: "Retail, offices, industrial estates and operational sites can access CCTV, alarms, fire-alarm servicing, emergency lighting and suitable takeovers.",
    nearby: "Somercotes, Swanwick, South Normanton, Ripley and the Amber Valley"
  },
  wirksworth: {
    name: "Wirksworth", county: "Derbyshire",
    intro: "CCTV, intruder alarms and fire-safety support for homes, independent businesses, hospitality and rural properties around Wirksworth.",
    focus: "NOX surveys access, older building construction, outbuildings, connectivity and the appearance of visible equipment before recommending the system.",
    commercial: "Local businesses can arrange CCTV, alarm, fire-alarm servicing, emergency-lighting testing and suitable system takeovers through one team.",
    nearby: "Matlock, Cromford, Carsington and the Derbyshire Dales"
  },
  belper: {
    name: "Belper", county: "Derbyshire",
    intro: "Professionally installed CCTV, intruder alarms and fire-safety systems for homes, retail, hospitality and commercial premises around Belper.",
    focus: "Property-led surveys consider entrances, driveways, older buildings, customer areas, lighting, network and the preferred method of control.",
    commercial: "NOX supports shops, offices, hospitality and operational sites with installation, servicing, takeovers, monitoring and planned upgrades.",
    nearby: "Duffield, Milford, Heage and the Amber Valley"
  },
  ashbourne: {
    name: "Ashbourne", county: "Derbyshire",
    intro: "Tailored fire and security systems for homes, rural properties, hospitality, retail and commercial premises in and around Ashbourne.",
    focus: "Surveys can account for longer driveways, detached buildings, older property construction, external approaches and reliable app or monitoring communication.",
    commercial: "Hospitality and business customers can combine CCTV, alarms, fire-alarm work, emergency lighting and ongoing service support.",
    nearby: "Hulland Ward, Brailsford, Carsington and the southern Peak District"
  },
  ripley: {
    name: "Ripley", county: "Derbyshire",
    intro: "CCTV, intruder alarms, fire alarms and ongoing maintenance for homes, shops, offices and industrial premises around Ripley.",
    focus: "NOX provides a direct survey and quotation route from Chesterfield, with systems designed around access, external areas, existing equipment and everyday use.",
    commercial: "Commercial support includes CCTV installation, intruder protection, fire-alarm servicing, emergency-lighting testing, monitoring and takeovers.",
    nearby: "Swanwick, Codnor, Heanor, Alfreton and the Amber Valley"
  },
  derby: {
    name: "Derby", county: "Derbyshire",
    intro: "Commercial CCTV, intruder alarms, fire alarms and larger residential security projects across Derby and surrounding business areas.",
    focus: "NOX has delivered a multi-camera Ajax CCTV installation at Continue Arcade in Derby and supports suitable installations, upgrades and service work across the city.",
    commercial: "Offices, retail, leisure, industrial and multi-site customers can arrange surveys for CCTV, alarms, fire safety, monitoring and planned maintenance.",
    nearby: "Pride Park, Chaddesden, Mickleover, Allestree and surrounding Derby districts"
  },
  nottingham: {
    name: "Nottingham", county: "Nottinghamshire",
    intro: "Commercial and larger residential fire and security projects across Nottingham where the site, programme and ongoing support requirements suit the NOX service area.",
    focus: "Surveys focus on the property, system scale, existing equipment, network, access and the outcome the customer needs rather than a fixed product package.",
    commercial: "Suitable work includes commercial CCTV, intruder alarms, fire systems, emergency lighting, takeovers, monitoring and coordinated multi-site support.",
    nearby: "West Bridgford, Arnold, Beeston, Hucknall and wider Nottingham"
  },
  "newark-on-trent": {
    name: "Newark-on-Trent", county: "Nottinghamshire",
    intro: "CCTV, alarm and fire-safety support for suitable homes, businesses, warehouses and larger commercial premises around Newark-on-Trent.",
    focus: "NOX can assess new and existing systems, confirm the practical survey route and provide a clear quotation for installation, takeover or recurring support.",
    commercial: "Commercial services include recorded CCTV, intruder protection, fire-alarm work, emergency lighting, monitoring and planned maintenance.",
    nearby: "Balderton, Southwell, Tuxford and the A1 corridor"
  },
  ilkeston: {
    name: "Ilkeston", county: "Derbyshire",
    intro: "Fire and security systems for homes, town-centre businesses, industrial premises and commercial developments around Ilkeston.",
    focus: "NOX plans CCTV, alarms and fire work around the property, operating routine, existing systems and the level of ongoing support required.",
    commercial: "Retail, offices, manufacturing and industrial customers can arrange CCTV, intruder alarms, fire alarms, emergency lighting and service takeovers.",
    nearby: "Kirk Hallam, West Hallam, Sandiacre, Long Eaton and the Erewash area"
  },
  "sutton-in-ashfield": {
    name: "Sutton-in-Ashfield", county: "Nottinghamshire",
    intro: "CCTV, intruder alarms and fire-safety services for homes, shops, offices and commercial sites around Sutton-in-Ashfield.",
    focus: "NOX provides property-led surveys for suitable projects, with clear consideration of entrances, public areas, stock, yards, existing equipment and future servicing.",
    commercial: "Businesses can combine CCTV, alarms, fire-alarm work, emergency lighting, monitoring and planned maintenance through one regional contractor.",
    nearby: "Kirkby-in-Ashfield, Mansfield, Huthwaite and the wider Ashfield district"
  },
  "long-eaton": {
    name: "Long Eaton", county: "Derbyshire",
    intro: "Commercial CCTV, intruder alarms and fire-safety support for businesses, landlords and larger residential projects around Long Eaton.",
    focus: "Surveys establish the building layout, entrances, network, existing systems and the correct route for installation, takeover, repair or servicing.",
    commercial: "Suitable projects include retail, offices, industrial units, hospitality, landlords and multi-site customers needing coordinated ongoing support.",
    nearby: "Sandiacre, Sawley, Breaston, Ilkeston and the Nottingham-Derby corridor"
  },
} as const

export const systemPages: Record<string, ServicePageData> = {
  "intrusion-alarms": {
    slug: "intrusion-alarms",
    eyebrow: "Ajax intruder alarm installation",
    title: "Intruder alarms that put you in control of your space",
    metaTitle: "Ajax Intruder Alarm Installation Chesterfield | NOX",
    metaDescription: "Ajax Intruder Alarm Installation across Chesterfield, Sheffield, Derbyshire and South Yorkshire with MotionCam, app control, keypads, sirens, monitoring and maintenance.",
    intro: "Rule Your Space with professional Intruder Alarm Installation across Chesterfield, Sheffield, Derbyshire and South Yorkshire. NOX is an Ajax Authorised Installation Company, using Ajax as our preferred smart security platform while designing every system around the property first.",
    image: "/images/v4-12-9/residential-intruder-main.jpg",
    imageAlt: "Black Ajax outdoor detector shown as the main image for residential intruder alarms",
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
      { title: "MotionCam and visual verification", text: "Suitable Ajax MotionCam models combine motion detection with photo verification, helping authorised users or a monitoring service understand what caused an alarm. Device choice, permissions and image features are confirmed during system design." },
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
    related: [{ href: "/services/intruder-alarm-installation-chesterfield", label: "Intruder Alarm Installation in Chesterfield" }, { href: "/systems/perimeter-protection", label: "Perimeter protection" }, { href: "/service-plans/alarm-monitoring", label: "Alarm monitoring" }, { href: "/service-plans/alarm-maintenance", label: "Intruder alarm servicing" }],
    caseStudySlugs: ["chesterfield-home-ajax-cctv-intruder", "peak-electronic-security", "sheffield-residential-security"],
    platformTitle: "Rule Your Space with Ajax",
    platformText: "Ajax brings the alarm, visual verification, sirens, user controls, automation and selected video devices into one connected platform where suitable. NOX handles the survey, design, installation, configuration and ongoing support.",
    products: [
      { name: "Ajax Hub and simple control", description: "The control centre and user setup are configured around the property, users and daily routine.", image: "/images/image-refresh/intruder-simple-control.webp", imageAlt: "Ajax hub providing simple day-to-day alarm control" },
      { name: "MotionCam photo verification", description: "Motion detection with image verification helps users and monitoring staff understand what caused an alarm.", image: "/images/image-refresh/intruder-motioncam-verification.webp", imageAlt: "Ajax MotionCam detector with photo verification" },
      { name: "Door and window protection", description: "Slim opening detectors protect the entry points that matter and support night mode or part-setting.", image: "/images/image-refresh/intruder-doorprotect.webp", imageAlt: "Ajax DoorProtect on a dark door frame" },
      { name: "Touchscreen keypad control", description: "Clear visual controls, individual areas and user-friendly arming reduce mistakes at entry and exit.", image: "/images/image-refresh/intruder-keypad-touchscreen.webp", imageAlt: "Ajax touchscreen keypad with clear visual controls" },
      { name: "Outdoor detection", description: "Suitable external detectors add earlier warning while smart processing helps reduce false alarms.", image: "/images/image-refresh/intruder-outdoor-false-alarm.webp", imageAlt: "Ajax outdoor detector with photo verification" },
      { name: "App alerts", description: "Instant app notifications provide clear information about alarm events and the area or camera involved.", image: "/images/image-refresh/intruder-app-alerts.webp", imageAlt: "Ajax app alert displayed on a smartphone" },
      { name: "Scheduled arming", description: "Suitable Ajax systems can follow schedules and scenarios so protection remains consistent without relying on memory.", image: "/images/image-refresh/intruder-scheduled-arming.webp", imageAlt: "Ajax scheduled arming notification" },
      { name: "NOX external siren", description: "A professionally positioned external siren adds a visible deterrent and clear local warning.", image: "/images/image-refresh/residential-bellbox.webp", imageAlt: "NOX branded Ajax external siren" }
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
    metaDescription: "Perimeter alarm systems across Chesterfield, Sheffield, Derbyshire and South Yorkshire for driveways, gates, boundaries, garages, yards and outbuildings.",
    intro: "External protection is a separate security layer for driveways, side access, yards, boundaries, windows, doors and outbuildings. NOX designs it around the approach routes and environment rather than copying the internal alarm system outside.",
    image: "/images/v4-12-6/perimeter-main-white-devices.png",
    imageAlt: "Ajax perimeter protection devices shown in a premium product presentation",
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
    caseStudySlugs: ["dronfield-timber-perimeter", "chesterfield-home-ajax-cctv-intruder"],
    platformTitle: "An earlier warning layer around the property",
    platformText: "Ajax external detection can protect approaches, windows, doors, yards and outbuildings before an intruder reaches the internal alarm zones. Device selection and positioning are confirmed through a dedicated perimeter survey.",
    products: [
      { name: "Curtain Outdoor", description: "Narrow curtain-style outdoor detection for windows, doorways, passages and selected boundary lines.", image: "/images/SingleCurtain.jpeg", imageAlt: "Ajax Curtain Outdoor detector shown in a premium product setting" },
      { name: "DualCurtain Outdoor", description: "Two opposing detection curtains can cover longer boundary runs or approaches from a central mounting point where suitable.", image: "/images/AjaxDualcurtain.jpg", imageAlt: "Ajax DualCurtain Outdoor detection pattern protecting an entrance" },
      { name: "MotionCam Outdoor", description: "Outdoor motion detection with camera-assisted verification options, anti-masking features and adjustable detection on suitable Ajax systems.", image: "/images/image-refresh/intruder-outdoor-false-alarm.webp", imageAlt: "Ajax MotionCam Outdoor detector installed on a commercial property" },
      { name: "StreetSiren", description: "External audible and visual indication can reinforce the perimeter layer and wider intruder alarm system.", image: "/images/image-refresh/residential-nox-siren.webp", imageAlt: "NOX branded Ajax external StreetSiren" },
      { name: "Outbuilding protection", description: "Garages, workshops, stores and detached buildings can be brought into the wider Ajax system subject to survey and communication range.", image: "/images/image-refresh/garages-outbuildings-engineer.webp", imageAlt: "NOX engineer installing Ajax protection on an outbuilding" },
      { name: "Maintenance and adjustment", description: "Outdoor systems need cleaning, signal checks, battery review, firmware updates and retesting as the environment changes.", image: "/images/revisions/intruder-maintenance-system-takeover.jpg", imageAlt: "Engineer carrying out maintenance and system checks on Ajax equipment" }
    ],
    videos: [{ title: "Ajax outdoor protection", text: "See how external detection can create an earlier warning layer around a property.", youtubeId: "Nm0HIK8vjso" }]
  },
  cctv: {
    slug: "cctv",
    eyebrow: "Professional recorder-based CCTV installation",
    title: "CCTV Installation in Chesterfield, Sheffield and Derbyshire",
    metaTitle: "CCTV Installation Chesterfield & Sheffield | NOX",
    metaDescription: "Professional CCTV installation across Chesterfield, Sheffield, Derbyshire and South Yorkshire, with Ajax, Hikvision, NVR recording, remote viewing and maintenance.",
    intro: "NOX provides professional CCTV installation across Chesterfield, Sheffield, Derbyshire and South Yorkshire. Fixed cameras, NVR or DVR recording, playback and remote viewing are designed around the scene, lighting, network and evidence required.",
    image: "/images/revisions/ajax-cctv-system-nvr-cameras.jpg",
    imageAlt: "Ajax CCTV cameras and NVR for professional recorded security",
    problemTitle: "CCTV installation should start with the footage you may need to recover later",
    problemText: "Camera height, lens choice, lighting, overlap, network design, recorder capacity and playback all matter. NOX plans what each view must show, then configures recording, remote access and smart event detection properly.",
    benefits: ["Ajax 5MP and 8MP camera options", "Ajax NVR integration", "Hikvision ColourVu and other professional cameras", "NVR and PoE recording", "Human and vehicle event filtering", "Full-colour night viewing options", "Secure app and remote viewing", "Maintenance, takeovers and recorder upgrades"],
    suitableFor: ["Homes needing full-property coverage", "Driveways, gardens and outbuildings", "Retail and showrooms", "Hospitality venues", "Garages, yards and warehouses", "Rural and multi-site properties"],
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
      { q: "What does an Ajax NVR do?", a: "An Ajax NVR records compatible IP camera footage and integrates suitable video into the Ajax platform. Ajax offers 8- and 16-channel options, with compatible storage selected around the project and recorder specification." },
      { q: "Can you maintain an older CCTV system?", a: "Yes. Suitable analogue, coax, IP and networked CCTV can be inspected and serviced, subject to condition, access, compatibility and parts availability." },
      { q: "Do commercial systems need a survey?", a: "A survey is strongly recommended so views, lighting, cabling, network capacity, recorder channels and storage can be assessed properly." }
    ],
    related: [{ href: "/services/cctv-installation-chesterfield", label: "CCTV installation in Chesterfield" }, { href: "/commercial/cctv", label: "Commercial CCTV installation" }, { href: "/service-plans/cctv-maintenance", label: "CCTV maintenance" }, { href: "/areas/sheffield", label: "CCTV and security in Sheffield" }],
    caseStudySlugs: ["bottle-and-thyme-commercial-cctv-chesterfield", "retford-former-bank-cctv", "tan-station-fire-security-brimington", "chesterfield-scrapyard-cctv"],
    platformTitle: "Ajax CCTV inside the wider security platform",
    platformText: "For suitable projects, Ajax cameras and NVR recording can sit alongside the intruder alarm in one platform. NOX also continues to specify Hikvision ColourVu and other professional CCTV where they are the better technical fit.",
    products: [
      { name: "Ajax cameras", description: "Professional IP cameras in different resolutions and formats, selected around the required view, lighting, mounting position and evidence standard.", image: "/images/ajax-products/ajax-cctv-system.webp", imageAlt: "Official Ajax CCTV cameras and NVR product image" },
      { name: "Ajax NVR and recording", description: "Ajax NVR is available in 8- and 16-channel versions. Storage, recording mode and retention are selected around camera count, resolution and the project requirement.", image: "/images/ajax-products/ajax-nvr.webp", imageAlt: "Official Ajax NVR product image for professional CCTV recording" },
      { name: "Ajax video ecosystem", description: "Ajax cameras, compatible third-party IP cameras and video entry can be brought into the wider Ajax platform where network, permissions and recording requirements support it.", image: "/images/ajax-products/ajax-camera.webp", imageAlt: "Black Ajax professional video camera" },
      { name: "Hikvision ColourVu", description: "Full-colour night-imaging options for suitable scenes where useful detail after dark is a central requirement.", image: "/images/projects/retford-camera-close-1.jpg", imageAlt: "Hikvision ColourVu camera installed at a former bank in Retford" },
      { name: "Recorder and remote viewing", description: "NVR or DVR recording, secure app access, playback and event search are configured and demonstrated during handover.", image: "/images/projects/retford-monitor-final.jpg", imageAlt: "Ten-camera CCTV live-view display at a Retford commercial property" },
      { name: "Annual CCTV maintenance", description: "Camera cleaning, image review, recorder and hard-drive checks, playback tests, firmware review and remote-access checks for new and suitable existing systems.", image: "/images/editorial/blog-servicing.jpg", imageAlt: "CCTV and alarm system maintenance work completed by NOX" }
    ]
  },
  "smart-home-cctv": {
    slug: "smart-home-cctv",
    eyebrow: "App-connected solar, wireless and floodlight cameras",
    title: "Smart-home CCTV for convenient everyday monitoring",
    metaTitle: "Smart Home CCTV Installation Chesterfield | Eufy Systems",
    metaDescription: "Smart Home CCTV installation in Chesterfield, Sheffield and Derbyshire, including Eufy cameras, video doorbells, floodlight cameras and app setup.",
    intro: "Smart-home CCTV is the simpler, app-led route for customers who want useful notifications, live viewing, video doorbells, floodlight cameras or solar-powered coverage without a full recorder-based system. NOX installs and configures suitable smart cameras, then considers garages, outbuildings, entrances and future alarm or perimeter protection so the wider property plan remains clear without pretending separate platforms are one system.",
    image: "/images/image-refresh/smart-home-eufy-installed.webp",
    imageAlt: "Eufy dual-lens smart-home CCTV camera professionally installed on a residential property",
    problemTitle: "Convenient smart cameras still need the right position, power strategy and app setup",
    problemText: "A wireless camera is only useful when the view, detection zone, mounting height, charging or solar exposure and notification settings all suit the property. NOX surveys the requirement and explains when a smart camera is suitable and when a professional NVR system is the better route.",
    benefits: ["Solar and battery camera options", "Floodlight cameras and video doorbells", "App alerts and live viewing", "Professional positioning", "HomeBase and network setup", "Garages and outbuilding options", "Clear customer handover", "Future alarm, perimeter or professional CCTV route"],
    suitableFor: ["Homes and bungalows", "Garages and gardens", "Rear access and side passages", "Properties with limited cable routes", "Customers wanting app-led viewing", "Selected outbuildings"],
    process: [
      { title: "Whole-property review", text: "We review entrances, approaches, garages, outbuildings, Wi-Fi coverage, available sunlight and the image the customer needs." },
      { title: "Honest system choice", text: "NOX explains whether smart cameras will meet the requirement or whether a recorder-based Ajax or Hikvision system is more appropriate." },
      { title: "Installation and setup", text: "Cameras, solar panels, doorbells or floodlights are positioned and the supporting app or HomeBase is configured." },
      { title: "Handover and future plan", text: "Notifications, live view, charging expectations, privacy zones and the route into future alarm, perimeter or professional CCTV work are explained." }
    ],
    details: [
      { title: "Solar camera positioning", text: "Solar exposure and the required camera view both matter. Panels and cameras are positioned to balance charging performance with useful coverage." },
      { title: "Floodlight cameras", text: "A combined light and camera can suit entrances, gardens and external working areas where active illumination is useful." },
      { title: "When to choose an NVR", text: "For continuous recording, larger properties, multiple users or commercial evidence requirements, NOX will normally recommend a professional recorder-based CCTV system." },
      { title: "Coordinated property planning", text: "Smart cameras can be planned alongside separately scoped Ajax alarms, perimeter detection, garages and outbuildings without creating unnecessary duplication." },
      { title: "Future expansion", text: "Likely camera positions, external areas and upgrade routes can be considered from the start even when the work is delivered in phases." }
    ],
    faq: [
      { q: "Do you install Eufy cameras?", a: "Yes. NOX can install and configure suitable Eufy solar, battery and floodlight cameras where they match the property and customer requirement." },
      { q: "What is the difference between smart-home CCTV and professional residential CCTV?", a: "Smart-home CCTV is app-led and suited to simpler solar, battery, doorbell or floodlight-camera requirements. Professional residential CCTV uses fixed cameras with a dedicated recorder for stronger whole-property coverage, continuous or scheduled recording and more capable playback." },
      { q: "Can you improve my existing smart-camera layout?", a: "Yes. NOX can review positioning, detection zones, network coverage and app setup, although compatibility and account access need to be confirmed." },
      { q: "Can smart cameras work with an Ajax alarm?", a: "They remain separate platforms in most cases. NOX can explain the practical options and recommend a more integrated Ajax CCTV route when one-app control is important." },
      { q: "Can I start with smart cameras and add an alarm or perimeter protection later?", a: "Yes. The initial survey can consider future alarm devices, external detection, garages, outbuildings and professional CCTV routes so later work is easier to plan." }
    ],
    related: [{ href: "/systems/cctv", label: "Professional recorder-based CCTV" }, { href: "/systems/intrusion-alarms", label: "Ajax intruder alarms" }, { href: "/systems/perimeter-protection", label: "Perimeter protection" }, { href: "/service-plans/alarm-maintenance", label: "Intruder alarm servicing" }],
    caseStudySlugs: ["eufy-smart-home-cctv-chesterfield", "chesterfield-home-ajax-cctv-intruder"],
    platformTitle: "App-connected security without presenting it as a budget option",
    platformText: "Smart-home security can combine Eufy cameras, solar products, floodlight cameras, video doorbells and local recording around convenient everyday control.",
    products: [
      { name: "Dual-lens smart camera", description: "Fixed and tracking views can cover a wider area while keeping control and notifications inside the app.", image: "/images/image-refresh/smart-home-eufy-installed.webp", imageAlt: "Eufy dual-lens smart security camera installed on a home" },
      { name: "Floodlight camera", description: "Lighting, video and app alerts can be combined at entrances, rear gardens and external approaches.", image: "/images/image-refresh/eufy-floodlight-camera.webp", imageAlt: "Eufy floodlight camera installed above a residential door" },
      { name: "Solar-powered camera", description: "A solar option can support suitable locations where a conventional cable route is not practical.", image: "/images/image-refresh/smart-home-solar-camera.webp", imageAlt: "Solar-powered smart security camera installed on brickwork" },
      { name: "Ajax video doorbell", description: "A premium connected doorbell adds live conversation, notifications and entry-point video within the wider security journey.", image: "/images/image-refresh/ajax-video-doorbell.webp", imageAlt: "Black Ajax video doorbell installed beside a home entrance" },
      { name: "Coordinated smart-home package", description: "Cameras, lighting, door contacts, motion detection and a NOX external warning device can be planned as one clear package.", image: "/images/image-refresh/smart-home-package.webp", imageAlt: "Smart-home security equipment prepared as one coordinated package" }
    ],
  },
  "fire-safety": {
    slug: "fire-safety",
    eyebrow: "Commercial fire alarm installation and Ajax EN54 systems",
    title: "Commercial Fire Alarm Installation in Chesterfield, Sheffield and Derbyshire",
    metaTitle: "Commercial Fire Alarm Installation | Chesterfield & Sheffield",
    metaDescription: "Commercial fire alarm installation across Chesterfield, Sheffield and Derbyshire, including conventional, addressable and suitable Ajax EN54 systems.",
    intro: "NOX designs and installs commercial fire alarm systems across Chesterfield, Sheffield, Derbyshire and South Yorkshire. Conventional, addressable and suitable Ajax EN54 wireless solutions are specified around the building, fire strategy, zones, warning coverage, connectivity, standby power and future servicing.",
    image: "/images/v4-10/fire-alarm-installation-hero.jpeg",
    imageAlt: "Ajax EN54 fire alarm control panel installed beside a fire alarm zone plan and manual call point",
    problemTitle: "A commercial fire alarm is a complete life-safety system",
    problemText: "Control equipment, detection, manual activation, sounders, visual alarm devices, fire zones, communications, standby power and records must work together as one design. NOX reviews the premises and available fire information before recommending Ajax EN54, a wired addressable system or a conventional solution.",
    benefits: ["New commercial fire alarm installations", "Suitable Ajax EN54 wireless addressable systems", "10.1-inch touchscreen EN54 Fire Hub", "Smoke, heat, sounder and VAD device options", "Manual call points and clearly defined fire zones", "Fire ReX and I/O options for larger sites", "Conventional and wired addressable alternatives", "Commissioning, handover and future servicing route"],
    suitableFor: ["Shops and retail", "Offices", "Warehouses and industrial units", "Hospitality", "HMOs and landlords", "Multi-site and multi-building premises"],
    process: [
      { title: "Survey and fire-system brief", text: "We review the building, use, available fire information, escape routes, existing equipment, access and any operational restrictions." },
      { title: "System design and specification", text: "Control equipment, zones, detectors, manual call points, warning devices, communications and standby power are specified as one system." },
      { title: "Installation and commissioning", text: "Devices are installed, labelled, configured and tested, with radio and network design confirmed where Ajax EN54 is selected." },
      { title: "Handover and service planning", text: "The responsible person receives a clear handover, system information and the proposed route for inspection, servicing and remedial work." }
    ],
    details: [
      { title: "EN54 Fire Hub control", text: "Ajax EN54 Fire Hub is wireless control and indicating equipment with a 10.1-inch touchscreen. It supports Ethernet, Wi-Fi and two SIM cards for communication, with compatible 24- or 72-hour standby battery options." },
      { title: "Addressable detection and warning", text: "The EN54 Line includes wireless smoke and heat detection, combined detector and sounder options, separate sounders, visual alarm devices and sounder/VAD units." },
      { title: "Manual activation and fire zones", text: "Resettable manual call points can be assigned to defined fire zones, with alarms presented clearly at the control equipment and through the agreed notification route." },
      { title: "Coverage and integration", text: "EN54 Fire ReX and I/O modules can support larger or more complex sites. On suitable projects, the Fire Hub can also support compatible intrusion, automation and video devices while the fire scope remains clearly defined." }
    ],
    faq: [
      { q: "Is Ajax EN54 a fully wireless fire alarm system?", a: "The Ajax EN54 Line is a wireless addressable commercial fire system. The Fire Hub still needs mains power and connectivity, and Ethernet may be used for range extension or site design where required. Suitability is confirmed through the survey and system design." },
      { q: "Can Ajax EN54 combine fire and intruder protection?", a: "EN54 Fire Hub can support compatible intrusion, automation and video devices on suitable projects. The fire alarm design, zones, warning coverage and servicing scope still remain clearly defined as a life-safety system." },
      { q: "Is Ajax EN54 suitable for every commercial building?", a: "No single platform suits every premises. NOX also installs or supports suitable conventional and wired addressable systems, depending on the building, fire strategy, access and project requirements." },
      { q: "Can NOX service the system after installation?", a: "Yes. The future inspection and servicing route is planned from the installation stage, with defects and remedial work recorded separately." }
    ],
    related: [{ href: "/service-plans/fire-alarm-servicing", label: "Fire alarm servicing" }, { href: "/service-plans/fire-compliance", label: "Fire Compliance Package" }, { href: "/systems/emergency-lighting", label: "Emergency lighting" }, { href: "/systems/fire-risk-assessment", label: "Fire risk assessments" }],
    caseStudySlugs: ["telesis-hitachi-fire-intruder-system", "tan-station-fire-security-brimington", "banana-industries-fire-security"],
    platformTitle: "Ajax EN54 devices selected as one coordinated fire system",
    platformText: "The Fire Hub, addressable detection, manual call points, sounders, visual alarm devices, range extension and integration modules are selected around the complete fire-system design. NOX also continues to support suitable conventional and wired addressable systems.",
    products: [
      { name: "Manual call point", description: "Resettable manual activation positioned on escape routes and assigned to the correct fire zone as part of the agreed design.", image: "/images/v4-10/fire-manual-call-point.jpeg", imageAlt: "Ajax EN54 manual fire alarm call point installed beside fire safety signage" },
      { name: "Fire alarm sounder", description: "Audible warning equipment selected and positioned to support the required alarm coverage throughout the premises.", image: "/images/v4-10/fire-sounder.jpeg", imageAlt: "Ajax EN54 fire alarm sounder installed above a doorway" },
      { name: "Smoke detector", description: "Addressable smoke detection selected around room use, ceiling conditions, fire zones and the wider cause-and-effect strategy.", image: "/images/v4-10/fire-smoke-detector.jpeg", imageAlt: "Ajax EN54 smoke detector installed on a ceiling" }
    ],
    videos: [
      { title: "Ajax fire protection", text: "See how Ajax control equipment and line devices can form part of a connected commercial fire system.", youtubeId: "XZDNd3ud-ck" }
    ],
    ctaLabel: "Request a Fire Alarm Quote",
    audience: "Commercial",
    serviceCategory: "Fire Alarm Installation",
    enquiryType: "Installation",
    pricingFactors: ["Building size and use", "Available fire strategy or risk information", "Number of zones and devices", "Detection, sounder and VAD requirements", "Manual call point positions", "Access, working hours and installation method", "Connectivity and standby-power requirement", "Commissioning, records and future service scope"],
    guide: { href: "/blog/what-information-is-needed-for-a-fire-alarm-quote", label: "What information is needed for a fire alarm quote?" },
    serviceAreaText: "Commercial fire alarm installation is available across Chesterfield, Sheffield, Derbyshire and South Yorkshire, with wider travel for suitable industrial and multi-site projects."
  },
  
  "emergency-lighting": {
    slug: "emergency-lighting",
    eyebrow: "Emergency lighting",
    title: "Emergency Lighting Installation in Chesterfield, Sheffield and Derbyshire",
    metaTitle: "Emergency Lighting Installation Chesterfield & Sheffield | NOX",
    metaDescription: "Emergency Lighting Installation across Chesterfield, Sheffield, Derbyshire and South Yorkshire for commercial premises, landlords, HMOs and multi-site properties.",
    intro: "NOX provides Emergency Lighting Installation across Chesterfield, Sheffield, Derbyshire and South Yorkshire, with suitable fittings planned around escape routes, property layout and future testing requirements.",
    image: "/images/image-refresh/emergency-lighting-modern.webp",
    imageAlt: "Modern emergency exit lighting installed along a commercial escape route",
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
    intro: "Arrange fire risk assessment support for commercial premises, landlords, HMOs and multi-site properties, coordinated through a competent specialist where required, with findings and priorities presented clearly.",
    image: "/images/revisions/telesis-hitachi-exterior.jpg",
    imageAlt: "Commercial premises considered during a fire risk assessment",
    problemTitle: "A useful assessment should make responsibilities and priorities clearer",
    problemText: "The assessment should reflect the building, occupancy, activities and available fire safety arrangements. NOX coordinates the assessment through a competent specialist where required and can separately support relevant fire alarm, emergency lighting and remedial work.",
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
      { q: "Can NOX help with actions identified in the report?", a: "NOX can support relevant fire alarm, emergency lighting and agreed fire safety work within its service scope." },
      { q: "Who carries out the fire risk assessment?", a: "NOX coordinates the assessment through a competent specialist where required and keeps any later installation or remedial quotation separate." }
    ],
    related: [{ href: "/systems/fire-safety", label: "Fire alarm systems" }, { href: "/systems/emergency-lighting", label: "Emergency lighting" }, { href: "/service-plans/fire-compliance", label: "Fire compliance packages" }],
    caseStudySlugs: ["banana-industries-fire-security"]
  },
  "home-cctv": {
    slug: "home-cctv",
    eyebrow: "Home CCTV installation",
    title: "Home CCTV Installation in Chesterfield, Sheffield and Derbyshire",
    metaTitle: "Home CCTV Installation Chesterfield & Sheffield | NOX",
    metaDescription: "Home CCTV installation across Chesterfield, Sheffield and Derbyshire for driveways, entrances, gardens and outbuildings, with recording and remote viewing.",
    intro: "NOX installs home CCTV across Chesterfield, Sheffield, Derbyshire and South Yorkshire, designing each system around the driveway, entrances, gardens, garages and outbuildings that need clear recorded coverage.",
    image: "/images/image-refresh/home-cctv-live-view.webp",
    imageAlt: "Residential CCTV live view showing multiple recorded property areas",
    problemTitle: "Useful home CCTV is about evidence quality and coverage, not simply camera count",
    problemText: "Driveways, doors, side access, vehicles, gardens, garages and outbuildings each need a clear purpose. Camera position, lighting, recording, privacy, network access and the appearance of the installation are considered together.",
    benefits: ["Driveway and vehicle coverage", "Front and rear entrance views", "Garden, side-access and boundary coverage", "Garage and outbuilding options", "Night image performance considered during design", "Dedicated recording and playback where required", "Remote viewing and user setup", "Combined alarm and CCTV design"],
    suitableFor: ["Semi-detached and detached homes", "Larger residential properties", "Homes with garages or outbuildings", "Driveways and gated approaches", "Renovations and extensions", "Customers upgrading older CCTV"],
    process: [
      { title: "Property survey", text: "We identify the views that need to be captured, likely lighting conditions, cable routes and how footage will be used." },
      { title: "Camera and recording design", text: "The quotation explains camera positions, image resolution, recorder capacity, remote access and any network work." },
      { title: "Careful installation", text: "Cameras and cabling are positioned to balance useful coverage, appearance, access and future maintenance." },
      { title: "Playback handover", text: "Live view, recorded playback, app access, alerts and maintenance options are demonstrated clearly." }
    ],
    details: [
      { title: "Recorder-based CCTV", text: "Professional IP or suitable hybrid systems provide dependable recording, playback and scalable coverage for the whole property." },
      { title: "Night performance", text: "Lighting, reflections, mounting position and camera technology all affect the detail available after dark." },
      { title: "Privacy and positioning", text: "The design should focus on the property requirement while avoiding unnecessary views into neighbouring areas." },
      { title: "Maintenance and upgrades", text: "Camera cleaning, recorder health, storage, playback and remote access can be checked through planned maintenance." }
    ],
    faq: [
      { q: "How many CCTV cameras does a house need?", a: "It depends on the entrances, driveway, gardens, side access, garages and the level of detail required. A survey identifies the minimum useful coverage rather than choosing a number first." },
      { q: "Can CCTV cover a detached garage or outbuilding?", a: "Often yes. Cable routes, power, network availability, distance and the required recording method need to be checked." },
      { q: "Do home CCTV cameras record continuously?", a: "A recorder-based system can be configured for continuous, scheduled or event-led recording. App-connected products may use a different recording method depending on the platform." },
      { q: "Can I view the cameras on my phone?", a: "Yes, suitable systems support remote viewing. The app, user permissions and secure account setup are included in the handover." },
      { q: "Can you upgrade existing home CCTV?", a: "Yes, where the cameras, cabling, recorder and access can be assessed. NOX will explain what can sensibly be retained and what would improve the system." },
      { q: "What affects home CCTV cost?", a: "Camera quantity, resolution, recorder and storage, cable routes, access, network work, outbuildings, existing equipment and installation time all affect the quotation." }
    ],
    related: [
      { href: "/systems/intrusion-alarms", label: "Ajax intruder alarms" },
      { href: "/systems/smart-home-cctv", label: "Smart Security" },
      { href: "/service-plans/cctv-maintenance", label: "CCTV maintenance" },
      { href: "/service-plans/alarm-maintenance", label: "Intruder alarm servicing" }
    ],
    caseStudySlugs: ["chesterfield-home-ajax-cctv-intruder", "sheffield-residential-security", "eufy-smart-home-cctv-chesterfield"],
    platformTitle: "Home CCTV selected around the views that matter",
    platformText: "The strongest result normally combines real installation positions, dependable recording and clear app or monitor access rather than relying on one camera style.",
    products: [
      { name: "Full-property live view", description: "A recorder-based system brings the key entrances, driveways, gardens and external areas into one clear live and recorded view.", image: "/images/image-refresh/home-cctv-live-view.webp", imageAlt: "Residential CCTV live view covering several external areas" },
      { name: "Discreet installed cameras", description: "Camera position and finish are planned around useful coverage and the appearance of the property.", image: "/images/image-refresh/home-cctv-installed-white.webp", imageAlt: "White home CCTV camera installed beneath a roofline" },
      { name: "Premium camera options", description: "Ajax, Hikvision, VIGI and other suitable professional camera options are selected around image quality, recording and the site.", image: "/images/image-refresh/ajax-black-camera-range.webp", imageAlt: "Premium black Ajax CCTV camera range" },
      { name: "Close identification views", description: "Specific cameras can be positioned for entrances, vehicles and vulnerable approaches where useful detail matters.", image: "/images/image-refresh/home-cctv-camera-close.webp", imageAlt: "Close view of a professionally installed home CCTV camera" },
      { name: "Black Ajax home camera", description: "A darker camera finish can sit discreetly beneath rooflines and around premium residential exteriors.", image: "/images/image-refresh/ajax-home-camera-black.webp", imageAlt: "Black Ajax home CCTV camera installed beneath a roofline" }
    ],
    ctaLabel: "Get a Home CCTV Recommendation",
    audience: "Residential",
    serviceCategory: "Home CCTV",
    enquiryType: "Installation",
    pricingFactors: ["Number and position of cameras", "Required image detail and night performance", "Recorder capacity and footage retention", "Cable routes and access", "Network and remote-viewing requirements", "Garages, gates or separate buildings", "Existing cameras, recorder or cabling"],
    guide: { href: "/blog/how-many-cctv-cameras-does-a-house-need", label: "How many CCTV cameras does a house need?" },
    serviceAreaText: "Home CCTV installation is available across Chesterfield, Sheffield and Derbyshire, with wider travel for suitable larger residential projects."
  },
  "garages-outbuildings": {
    slug: "garages-outbuildings",
    eyebrow: "Garage and outbuilding security",
    title: "Security for garages, outbuildings, gates and detached areas",
    metaTitle: "Garage & Outbuilding Security Chesterfield | Alarms & CCTV",
    metaDescription: "Alarm, CCTV and perimeter protection for garages, workshops, gates and outbuildings across Chesterfield, Sheffield and Derbyshire.",
    intro: "Detached garages, workshops, garden buildings and longer driveways often need more than a standard house-alarm layout. NOX assesses distance, communication, power, access and the value or activity within each area before designing the protection.",
    image: "/images/image-refresh/garages-outbuildings-engineer.webp",
    imageAlt: "NOX engineer installing a branded external siren on a stone outbuilding",
    problemTitle: "Separate buildings need reliable communication and the right detection method",
    problemText: "The design may use door protection, movement detection, MotionCam, external detection, CCTV, sirens or a combination. Signal range, construction, power, weather exposure and how the space is used determine the sensible route.",
    benefits: ["Detached garage alarm protection", "Workshop and garden-building coverage", "Gate and driveway approaches", "CCTV for vehicles and external areas", "External detection where suitable", "Signal and power assessment", "Night-mode and part-arm options", "One app or joined-up handover where compatible"],
    suitableFor: ["Detached garages", "Workshops and garden rooms", "Rural and larger properties", "Gated driveways", "Vehicle and tool storage", "Properties with several buildings"],
    process: [
      { title: "Site and distance review", text: "We inspect the main house, detached spaces, boundaries, routes, construction and likely communication obstacles." },
      { title: "Layered design", text: "Alarm detection, CCTV, external protection and control are selected around each area rather than treated as one room." },
      { title: "Range and installation checks", text: "Power, network, radio range, cable routes, mounting positions and weather exposure are confirmed." },
      { title: "Handover by area", text: "Users are shown how to arm, view and manage the house and external spaces without making daily use complicated." }
    ],
    details: [
      { title: "Alarm protection", text: "Door contacts, movement detection and photo verification can protect the building before or after entry depending on the design." },
      { title: "Perimeter warning", text: "Suitable external detectors can identify movement around driveways, gates or approaches before the main building is reached." },
      { title: "CCTV evidence", text: "Cameras can provide live and recorded views of vehicles, access points, paths and vulnerable external areas." },
      { title: "Phased expansion", text: "Larger properties can be delivered in stages where the core system, coverage and future capacity are planned properly from the start." }
    ],
    faq: [
      { q: "Can an Ajax alarm protect a detached garage?", a: "Often yes, but distance, construction, signal conditions and hub capacity must be checked at the property." },
      { q: "Can a garage have its own keypad or controls?", a: "Suitable Ajax systems can use additional control devices, tags or app permissions depending on the final design." },
      { q: "Can CCTV and an alarm cover the same outbuilding?", a: "Yes. Alarm detection and CCTV solve different parts of the requirement and can be designed together." },
      { q: "What if there is no internet in the outbuilding?", a: "The answer depends on the system type. Some alarm devices communicate with the main hub, while CCTV may need cabling, wireless bridging or another network solution." },
      { q: "Can you protect gates and driveways?", a: "Yes, using suitable CCTV, external detection or a combination after the approach, boundaries, animals and normal movement have been considered." }
    ],
    related: [
      { href: "/systems/perimeter-protection", label: "Perimeter protection" },
      { href: "/systems/intrusion-alarms", label: "Ajax intruder alarms" },
      { href: "/systems/home-cctv", label: "Home CCTV" },
      { href: "/service-plans/alarm-maintenance", label: "Intruder alarm servicing" }
    ],
    caseStudySlugs: ["chesterfield-home-ajax-cctv-intruder", "dronfield-timber-perimeter", "buxton-industrial-security"],
    ctaLabel: "Protect a Garage or Outbuilding",
    audience: "Residential",
    serviceCategory: "Garage and outbuilding security",
    enquiryType: "Installation",
    pricingFactors: ["Distance from the main property", "Construction and radio conditions", "Power and network availability", "Number of doors, rooms and external areas", "Required CCTV recording", "Gates, boundaries and vehicle approaches"],
    guide: { href: "/blog/can-an-alarm-protect-a-garage-or-outbuilding", label: "Can an alarm protect a garage or outbuilding?" },
    serviceAreaText: "NOX designs garage and outbuilding security across Chesterfield, Sheffield, Derbyshire and nearby rural areas."
  }

}

export const planPages: Record<string, PlanPageData> = {
  "alarm-maintenance": {
    slug: "alarm-maintenance",
    eyebrow: "Alarm maintenance",
    title: "Intruder Alarm Servicing in Chesterfield, Sheffield and Derbyshire",
    metaTitle: "Intruder Alarm Servicing Chesterfield & Sheffield | NOX",
    metaDescription: "Intruder Alarm Servicing across Chesterfield, Sheffield, Derbyshire and South Yorkshire, including device tests, battery checks, communication, sirens and service records.",
    intro: "NOX provides planned Intruder Alarm Servicing for its own installations and suitable wired, wireless and hybrid systems across Chesterfield, Sheffield, Derbyshire and South Yorkshire.",
    image: "/images/v4-10/intruder-alarm-servicing.jpeg",
    imageAlt: "Intruder alarm external siren inspected during a residential service visit",
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
    image: "/images/v4-13-2/alarm-monitoring-operator.jpg",
    imageAlt: "Professional monitoring operator supporting intruder alarm signals and keyholder contact",
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
    title: "CCTV Maintenance in Chesterfield, Sheffield and Derbyshire",
    metaTitle: "CCTV Maintenance Chesterfield & Sheffield | NOX",
    metaDescription: "CCTV maintenance across Chesterfield, Sheffield, Derbyshire and South Yorkshire, including camera cleaning, recorder and hard-drive checks, playback and remote-viewing tests.",
    intro: "NOX provides CCTV maintenance for its own installations and suitable existing systems across Chesterfield, Sheffield, Derbyshire and South Yorkshire, checking cameras, recording, playback and remote access.",
    image: "/images/v4-10/cctv-maintenance.jpeg",
    imageAlt: "Older external CCTV camera assessed during a maintenance visit",
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
    title: "Fire Alarm Servicing in Chesterfield, Sheffield and Derbyshire",
    metaTitle: "Fire Alarm Servicing Chesterfield & Sheffield | NOX",
    metaDescription: "Fire Alarm Servicing across Chesterfield, Sheffield, Derbyshire and South Yorkshire for commercial premises, landlords and portfolios, with test records and defect reporting.",
    intro: "NOX provides planned Fire Alarm Servicing for commercial premises, landlords, HMOs and property portfolios across Chesterfield, Sheffield, Derbyshire and South Yorkshire.",
    image: "/images/v4-10/fire-alarm-servicing.jpeg",
    imageAlt: "Commercial fire alarm control panel inspected during planned servicing",
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
    title: "Emergency Lighting Testing & Servicing in Derbyshire",
    metaTitle: "Emergency Lighting Testing Derbyshire & Sheffield | NOX",
    metaDescription: "Emergency Lighting Testing and Servicing across Chesterfield, Sheffield, Derbyshire and South Yorkshire with fitting checks, records, defect reporting and remedial quotations.",
    intro: "NOX provides Emergency Lighting Testing and Servicing for commercial premises, landlords, HMOs and multi-site properties across Chesterfield, Sheffield, Derbyshire and South Yorkshire.",
    image: "/images/v4-12-3/emergency-lighting-testing-servicing.jpg",
    imageAlt: "Emergency exit light tested during planned servicing",
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
      { q: "What can a Total Security Package include?", a: "The package can combine eligible alarm servicing, professional monitoring and CCTV maintenance. The exact services, system eligibility and quotation are confirmed in writing for the property." },
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
    image: "/images/image-refresh/fire-risk-assessment.webp",
    imageAlt: "Fire action notice and manual call point reviewed as part of commercial fire compliance",
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
      { q: "Are repairs included in the annual agreement?", a: "Not unless specifically stated. Defects, parts and remedial work are normally quoted separately." }
    ],
    related: [{ href: "/service-plans/fire-alarm-servicing", label: "Fire alarm servicing" }, { href: "/service-plans/emergency-lighting-servicing", label: "Emergency lighting servicing" }, { href: "/systems/fire-risk-assessment", label: "Fire risk assessment" }]
  },
  "residential-security-packages": {
    slug: "residential-security-packages",
    eyebrow: "Residential alarm and CCTV packages",
    title: "Residential security packages built around the property",
    metaTitle: "Residential Alarm & CCTV Packages | NOX Fire & Security",
    metaDescription: "Combined Ajax alarm, home CCTV, perimeter and ongoing-support packages designed around homes across Chesterfield, Sheffield and Derbyshire.",
    intro: "A residential package brings the agreed alarm, CCTV and optional ongoing support into one coordinated design. It is not a fixed equipment bundle: the property, coverage and customer priorities still decide what is included.",
    image: "/images/image-refresh/smart-home-package.webp",
    imageAlt: "Complete alarm, camera and smart-home security package prepared for a residential installation",
    included: ["Property-led Ajax alarm design", "Home CCTV where required", "Garage, gate or outbuilding options", "Perimeter detection where suitable", "App and user setup", "Clear installation handover", "Optional alarm monitoring", "Optional alarm and CCTV maintenance"],
    suitableFor: ["Homes wanting alarm and CCTV together", "Larger properties", "Garages and outbuildings", "Driveways and gated approaches", "Renovations", "Customers replacing several older systems"],
    process: [
      { title: "Whole-property survey", text: "We review the home, external areas, vehicles, access, routines and existing equipment as one requirement." },
      { title: "Coordinated design", text: "Alarm, CCTV and perimeter options are selected to complement one another without unnecessary duplication." },
      { title: "Clear installation quotation", text: "Equipment and labour are shown separately from monitoring, servicing or annual package costs." },
      { title: "Handover and support choice", text: "Users are shown the apps and controls, then choose the ongoing support that suits the systems installed." }
    ],
    details: [
      { title: "One design conversation", text: "The customer does not need separate surveys for each system when the alarm and CCTV are being planned together." },
      { title: "Consistent coverage", text: "The alarm protects the property and alerts users; CCTV provides visual context and recorded evidence where required." },
      { title: "Future expansion", text: "Capacity, cable routes and likely future areas can be considered at the start even where the work is delivered in phases." }
    ],
    faq: [
      { q: "Is this a fixed alarm and CCTV kit?", a: "No. The package is a coordinated route, but the devices, cameras and support are still selected around the property." },
      { q: "Can I install the alarm first and add CCTV later?", a: "Yes. The survey can consider future camera positions, cabling and system capacity even when the project is phased." },
      { q: "Is monitoring included in the installation price?", a: "No. Installation and recurring monitoring or maintenance are stated separately unless the written quotation says otherwise." },
      { q: "Can garages and gates be included?", a: "Yes, subject to distance, communication, power, access and the final system design." },
      { q: "Do you offer packages for normal family homes?", a: "Yes. The package is based on the requirement, not the size or status of the house." }
    ],
    related: [
      { href: "/systems/intrusion-alarms", label: "Ajax intruder alarms" },
      { href: "/systems/home-cctv", label: "Home CCTV" },
      { href: "/systems/perimeter-protection", label: "Perimeter protection" },
      { href: "/service-plans/total-security", label: "Total Security Plan" }
    ],
    ctaLabel: "Discuss My Property",
    audience: "Residential",
    serviceCategory: "Residential alarm and CCTV package",
    enquiryType: "Installation",
    pricingFactors: ["Alarm device quantities", "Camera count and recording", "Perimeter and outbuilding coverage", "Cable routes and access", "Monitoring requirements", "Annual maintenance options"],
    guide: { href: "/blog/how-many-cctv-cameras-does-a-house-need", label: "Plan the CCTV coverage first" }
  }

}

// V3.7 intent-led refinements. The established intrusion-alarm pillar is
// deliberately excluded from these overrides so its URL, metadata, H1 and
// main content structure remain protected pending Search Console review.
// Fire alarm installation content is defined in the main systemPages object above.
Object.assign(systemPages["emergency-lighting"], {
  eyebrow: "Emergency lighting installation",
  title: "Emergency lighting installation and replacement for commercial premises",
  metaTitle: "Emergency Lighting Installation Chesterfield | NOX",
  metaDescription: "Emergency lighting installation and upgrades across Chesterfield, Sheffield and Derbyshire, planned around escape routes, final exits and the premises.",
  intro: "NOX installs new emergency lighting, replaces failed or unsuitable fittings and upgrades existing arrangements for commercial premises, landlords and HMOs. Routine testing is covered separately so installation and recurring maintenance remain clear.",
  problemTitle: "Escape routes, changes in level, exits and higher-risk areas need the right fittings in the right positions",
  problemText: "The property layout, use, available fire information, existing circuits, mounting positions and future testing route all affect the installation. NOX plans the work around the premises rather than simply replacing fittings one for one without review.",
  benefits: ["New emergency lighting installation", "Replacement of failed or unsuitable fittings", "Escape-route and open-area fittings", "Exit signs and directional indication", "Upgrades during refurbishment", "Installation around operational premises", "Commissioning and handover records", "Future testing and servicing route"],
  process: [
    { title: "Layout and existing-system review", text: "We inspect routes, exits, changes in level, existing fittings, circuits, access and any available fire information." },
    { title: "Fitting and installation design", text: "Suitable maintained or non-maintained fittings, signs, positions and cable routes are proposed for the actual property." },
    { title: "Installation and testing", text: "The agreed fittings and circuits are installed, labelled where required and tested before handover." },
    { title: "Records and recurring tests", text: "The customer receives clear next steps for routine checks, annual duration testing and remedial support." }
  ],
  ctaLabel: "Request an Emergency Lighting Quote",
  audience: "Commercial",
  serviceCategory: "Emergency lighting installation",
  enquiryType: "Installation",
  pricingFactors: ["Property layout and escape routes", "Number and type of fittings", "Existing circuits and condition", "Mounting height and access", "Cable routes and decoration", "Operational or out-of-hours working", "Required remedials and replacement fittings"],
  guide: { href: "/blog/when-should-emergency-lighting-fittings-be-replaced", label: "When should emergency-lighting fittings be replaced?" },
  serviceAreaText: "Emergency lighting installation is available across Chesterfield, Sheffield and Derbyshire for commercial premises, landlords, HMOs and suitable multi-site portfolios."
} satisfies Partial<ServicePageData>)

Object.assign(planPages["fire-alarm-servicing"], {
  title: "Fire alarm servicing and maintenance for commercial premises",
  metaTitle: "Fire Alarm Servicing Chesterfield & Sheffield",
  metaDescription: "Fire alarm servicing across Chesterfield, Sheffield and Derbyshire, including testing, takeover inspections, records, defect reports and remedial quotations.",
  intro: "NOX services suitable conventional, addressable, wireless and Ajax EN54 fire alarm systems. The visit scope, available records, system condition, faults and future service schedule are reviewed clearly before an ongoing arrangement is accepted.",
  ctaLabel: "Arrange Fire Alarm Servicing",
  audience: "Commercial",
  serviceCategory: "Fire alarm servicing",
  enquiryType: "Servicing",
  pricingFactors: ["Panel and system type", "Approximate device quantities and zones", "Number of buildings or sites", "Access and operational restrictions", "Available records and service history", "Known faults or disabled devices", "Required visit frequency", "Remedial work identified during service"],
  guide: { href: "/blog/how-often-should-a-commercial-fire-alarm-be-serviced", label: "How often should a commercial fire alarm be serviced?" }
} satisfies Partial<PlanPageData>)

Object.assign(planPages["emergency-lighting-servicing"], {
  title: "Emergency lighting testing and servicing for commercial premises",
  metaTitle: "Emergency Lighting Testing Chesterfield | Servicing & Records",
  metaDescription: "Emergency lighting testing across Chesterfield, Sheffield and Derbyshire, including functional checks, duration tests, records, defect reporting and remedials.",
  intro: "NOX provides planned emergency-lighting testing for commercial premises, landlords, HMOs and multi-site customers, with failed fittings, battery issues, access limitations and required remedials recorded clearly.",
  ctaLabel: "Book Emergency Lighting Testing",
  audience: "Commercial",
  serviceCategory: "Emergency lighting testing and servicing",
  enquiryType: "Servicing",
  pricingFactors: ["Number and type of fittings", "Monthly functional or annual duration testing", "Building access and operating hours", "Available asset records", "Multiple buildings or sites", "Failed fittings and remedial requirements"],
  guide: { href: "/blog/what-is-a-three-hour-emergency-lighting-test", label: "What is a three-hour emergency-lighting test?" }
} satisfies Partial<PlanPageData>)

Object.assign(planPages["alarm-maintenance"], {
  title: "Intruder alarm servicing for wired, wireless and hybrid systems",
  metaTitle: "Intruder Alarm Servicing Chesterfield",
  metaDescription: "Intruder alarm servicing across Chesterfield, Sheffield and Derbyshire, including device tests, batteries, communications, sirens, records and suitable takeovers.",
  intro: "NOX services suitable Ajax and established wired, wireless or hybrid intruder alarms. The system health, device condition, communication, batteries, event history and any known faults are reviewed before the ongoing scope is confirmed.",
  ctaLabel: "Arrange an Alarm Service",
  audience: "Residential & Commercial",
  serviceCategory: "Intruder alarm servicing",
  enquiryType: "Servicing",
  pricingFactors: ["Panel and system type", "Number of devices and buildings", "Battery quantities and condition", "Communication and monitoring route", "Existing faults or missing access", "Service history and documentation", "Commercial access restrictions"],
  guide: { href: "/blog/how-often-should-an-intruder-alarm-be-serviced", label: "How often should an intruder alarm be serviced?" }
} satisfies Partial<PlanPageData>)

Object.assign(planPages["alarm-monitoring"], {
  title: "Professional intruder alarm monitoring and keyholder signalling",
  metaTitle: "Alarm Monitoring Chesterfield & Derbyshire | NOX",
  metaDescription: "Professional intruder alarm monitoring across Chesterfield and Derbyshire with alarm signalling, keyholder communication, system supervision and suitable takeover assessments.",
  intro: "Professional monitoring is different from receiving an app notification. A suitable alarm sends agreed events through a monitored signalling route so keyholders can be contacted under the confirmed response plan.",
  ctaLabel: "Request a Monitoring Quote",
  audience: "Residential & Commercial",
  serviceCategory: "Intruder alarm monitoring",
  enquiryType: "Monitoring",
  pricingFactors: ["Alarm panel and signalling compatibility", "Residential or commercial property", "Required signalling path", "Keyholder and contact requirements", "Initial takeover or communication equipment", "Maintenance requirements", "Number of sites"],
  guide: { href: "/blog/app-alerts-versus-professional-alarm-monitoring", label: "App alerts versus professional monitoring" }
} satisfies Partial<PlanPageData>)

Object.assign(planPages["cctv-maintenance"], {
  title: "CCTV maintenance, recording checks and system upgrades",
  metaTitle: "CCTV Maintenance Chesterfield | Commercial & Home Systems",
  metaDescription: "CCTV maintenance across Chesterfield, Sheffield and Derbyshire including camera cleaning, image checks, recorder and storage health, playback, remote access and upgrades.",
  intro: "NOX maintains suitable residential and commercial CCTV systems, including camera cleaning, image and night-view checks, recorder and storage review, playback testing, remote access and practical upgrade recommendations.",
  ctaLabel: "Get a CCTV Maintenance Quote",
  audience: "Residential & Commercial",
  serviceCategory: "CCTV maintenance",
  enquiryType: "Servicing",
  pricingFactors: ["Camera count and site size", "Analogue, hybrid or IP platform", "Recorder and storage configuration", "Access equipment and camera height", "Multiple buildings or sites", "Known image, recording or remote-access faults", "Required visit frequency"],
  guide: { href: "/blog/how-often-should-cctv-be-maintained", label: "How often should CCTV be maintained?" }
} satisfies Partial<PlanPageData>)

Object.assign(planPages["total-security"], {
  eyebrow: "Total Security Plans",
  title: "Coordinated alarm, monitoring and CCTV support under one plan",
  ctaLabel: "Request a Total Security Quote",
  audience: "Residential & Commercial",
  serviceCategory: "Total Security Plan",
  enquiryType: "Servicing",
  pricingFactors: ["Systems included in the plan", "Alarm monitoring compatibility", "Alarm device and CCTV camera quantities", "Site access and number of properties", "Initial takeover or remedial work", "Agreed service frequency and exclusions"]
} satisfies Partial<PlanPageData>)

Object.assign(planPages["fire-compliance"], {
  eyebrow: "Fire Compliance Plans",
  title: "Coordinated fire alarm, emergency lighting and annual compliance support",
  ctaLabel: "Get a Fire Compliance Quote",
  audience: "Commercial",
  serviceCategory: "Fire Compliance Plan",
  enquiryType: "Servicing",
  pricingFactors: ["Number of premises and systems", "Fire alarm device quantities", "Emergency-lighting fitting quantities", "Included extinguisher or risk-assessment services", "Visit frequencies and access", "Existing defects and remedial work", "Reporting and portfolio coordination"]
} satisfies Partial<PlanPageData>)
