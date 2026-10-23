import type { Metadata } from "next"
import Link from "next/link"
import { Container } from "@/components/section"

export const metadata: Metadata = {
  title: "Solar services in Chennai",
  description:
    "Residential solar plants, site survey and design, labour-only installation, and maintenance for homes in Chennai and Madipakkam.",
}

const services = [
  {
    href: "/solar-installation-chennai",
    title: "Residential solar plants",
    text: "We assess the roof and the electricity use, then install a grid-tied system that fits the home and performs after the monsoon. Eligible homeowners get help with the subsidy file.",
  },
  {
    href: "/quote",
    title: "Site survey and system design",
    text: "Roof area, shade, orientation, and a year of units if you have them. The proposal is written after that visit, not from a rate per panel.",
  },
  {
    href: "/installation-services",
    title: "Installation of equipment you already own",
    text: "Civil work, mounting, inverter fitting, wiring, testing, and commissioning from ₹3,000 per kW. Modules and the inverter are supplied by you.",
  },
  {
    href: "/panel-cleaning",
    title: "Commissioning and care",
    text: "Switch-on checks, panel cleaning by system size, and an annual maintenance contract that inspects more than the glass.",
  },
]

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-cream">
        <Container className="py-16 md:py-20">
          <p className="text-[0.72rem] font-bold tracking-[0.16em] text-green uppercase">Services</p>
          <h1 className="mt-3 max-w-3xl font-serif text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.12] text-navy">
            Everything a Chennai home needs to go solar.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-[#3c4d5c]">
            Practical work for residences in Chennai and Madipakkam: the plant, the papers, and the visits after the first units show up on the app.
          </p>
        </Container>
      </section>
      <section className="py-16">
        <Container className="grid gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <Link key={service.href + service.title} href={service.href} className="border border-line p-6 hover:border-navy">
              <p className="font-serif text-2xl text-gold">0{index + 1}</p>
              <h2 className="mt-2 text-xl font-semibold text-navy">{service.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.text}</p>
            </Link>
          ))}
        </Container>
      </section>
    </main>
  )
}
