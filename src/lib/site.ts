export const site = {
  name: "ZeroEB",
  legalName: "Zero EB",
  url: "https://zeroeb.com",
  description:
    "Solar installation in Chennai by ZeroEB. Rooftop solar for homes in Madipakkam and across the city—site survey, design, TANGEDCO support, and installation.",
  email: "ecopower2026@gmail.com",
  phones: [
    { display: "+91 90425 17415", tel: "+919042517415" },
    { display: "+91 63854 67892", tel: "+916385467892" },
  ],
  whatsapp: "919042517415",
  hours: "Monday to Saturday, 9:00 am – 7:00 pm",
  address: {
    line: "No.5, MSP Complex, F-3, Medavakkam Main Rd, opposite Kumaran Theatre, Vigneshwar Nagar, Balaji Nagar, Madipakkam, Chennai, Tamil Nadu 600091",
    locality: "Madipakkam, Chennai",
    postalCode: "600091",
    lat: 12.9721511,
    lng: 80.1911484,
  },
  social: [
    { label: "Facebook", href: "https://www.facebook.com/zeroebdotcom" },
    { label: "Instagram", href: "https://www.instagram.com/zeroebdotcom/" },
    { label: "YouTube", href: "https://www.youtube.com/@zero_eb" },
  ],
  gaId: "G-HM2L5ZZCHR",
} as const

export const nav = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/solar-installation-chennai", label: "Chennai" },
  { href: "/our-work", label: "Our work" },
  { href: "/panel-cleaning", label: "Cleaning" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const

export const reviews = [
  {
    name: "KIRAN BAUS",
    text: "Zero EB installed 5 Kwh solar system for me. Very good installation. Very supportive company. All best for Zero EB and team.",
  },
  {
    name: "Nithya Asai",
    text: "I am very satisfied with the solar energy system. The service provided was excellent and the staff member was professional, polite, and helpful throughout the process.",
  },
  {
    name: "Trytrytry Always",
    text: "We got our home 3kW solar installation done by them recently and the experience was excellent. The team handled everything end-to-end — subsidy process, paperwork, civil work, and the final installation.",
  },
  {
    name: "Sathyanarayana Pothuru",
    text: "Very informative on all aspects, friendly vibes to share concerns and patient explanation from them, methodically in their action.",
  },
  {
    name: "SWAMINATHAN THIAGARAJAN",
    text: "Excellent service. Knowledgeable technicians, prompt service. Strongly recommend to others.",
  },
  {
    name: "vincent s",
    text: "Good service and neat installation. The team was professional and completed the solar installation on time.",
  },
] as const

export const cleaningTiers = [
  { size: "Up to 3 kW", price: "₹750 per kW" },
  { size: "Up to 5 kW", price: "₹600 per kW" },
  { size: "Up to 10 kW", price: "₹500 per kW" },
  { size: "Above 10 kW", price: "₹450 per kW" },
] as const

export const maintenanceChecks: { title: string; points: string[] }[] = [
  {
    title: "Solar panel cleaning",
    points: [
      "Foam wash using a soft, non-abrasive cleaning solution",
      "Remove dust, bird droppings, leaves, and debris",
      "Clean panel surfaces with purified water",
      "Spot-clean stubborn stains and complete a final visual inspection",
    ],
  },
  {
    title: "Solar panel health inspection",
    points: [
      "Inspect for cracks, broken glass, and discoloration or hot spots",
      "Check the panel frame condition and mounting stability",
      "Check for moisture or water ingress",
      "Inspect the backsheet for damage",
    ],
  },
  {
    title: "Mounting structure inspection",
    points: [
      "Tighten loose nuts and bolts",
      "Inspect rails for corrosion and roof anchor points",
      "Verify overall structural stability",
      "Inspect for rust; repainting is available as an optional service",
    ],
  },
  {
    title: "DC cable inspection",
    points: [
      "Check cable insulation and UV damage",
      "Verify cable routing and tighten cable ties",
      "Check MC4 connectors",
      "Replace damaged connectors if required",
    ],
  },
  {
    title: "Earthing system verification",
    points: [
      "Check earth-pit connections and earthing continuity",
      "Inspect earth-wire condition and tighten terminals",
      "Measure earth resistance where applicable",
    ],
  },
  {
    title: "Lightning protection inspection",
    points: [
      "Inspect the lightning arrestor",
      "Verify grounding connection and physical condition",
      "Tighten all connections",
    ],
  },
  {
    title: "Inverter health check",
    points: [
      "Clean the inverter exterior, cooling fans, and ventilation area",
      "Review inverter error logs and firmware version",
      "Confirm normal operation and test emergency shutdown where applicable",
    ],
  },
  {
    title: "Electrical safety inspection",
    points: [
      "Inspect AC/DC isolators, MCBs, breakers, and SPD",
      "Tighten electrical terminals",
      "Check for overheating marks and inspect the distribution board",
    ],
  },
  {
    title: "Performance testing",
    points: [
      "Measure system voltage and current output",
      "Verify inverter efficiency against expected performance",
      "Identify underperforming strings and abnormal power loss",
    ],
  },
  {
    title: "Monitoring system verification",
    points: [
      "Check Wi-Fi connectivity and mobile-app monitoring",
      "Confirm live data reporting",
      "Test alerts and notifications",
    ],
  },
  {
    title: "Roof safety inspection",
    points: [
      "Check mounting points and roof waterproofing near brackets",
      "Verify no water leakage",
      "Inspect cable entry points and safe access pathways",
    ],
  },
  {
    title: "Vegetation and shading assessment",
    points: [
      "Identify new shading from trees or nearby obstructions",
      "Recommend trimming where required",
      "Verify sunlight exposure",
    ],
  },
  {
    title: "Bird protection inspection",
    points: [
      "Check bird-mesh condition and remove nesting material",
      "Clean bird droppings beneath panels",
      "Inspect for pest-related damage",
    ],
  },
  {
    title: "System documentation",
    points: [
      "Record maintenance activities and inspection findings",
      "Capture before-and-after photos",
      "Document power generation and recommendations",
    ],
  },
  {
    title: "Customer report",
    points: [
      "Cleaning completed and system health status",
      "Energy-generation performance and safety-inspection results",
      "Recommended repairs, if any, and technician observations",
      "Before-and-after photos",
    ],
  },
]

export const faqs = [
  {
    q: "How do I know what system size I need?",
    a: "We review your electricity consumption, roof space, shading, and future energy needs during a site survey. Capacity comes from the units you use while the sun is up, not from counting air conditioners.",
  },
  {
    q: "Will solar work during Chennai’s monsoon season?",
    a: "Production varies with sunlight, but a well-designed system continues to generate through the year. We size the plant with local weather, heat, and shade in mind.",
  },
  {
    q: "How long does a residential installation take?",
    a: "Timing depends on system size, roof condition, and approvals. After the survey, most residential plants are installed and commissioned by the same local team.",
  },
  {
    q: "Do I lose my EB connection?",
    a: "No. A typical home plant is grid-tied. Daytime use is served by the panels first. After sunset, and during a power cut on an on-grid inverter, the EB line still supplies the home.",
  },
  {
    q: "Do you provide support after installation?",
    a: "Yes. ZeroEB stays available for guidance, panel cleaning, and maintenance once the plant is operating. The office is in Madipakkam.",
  },
] as const
