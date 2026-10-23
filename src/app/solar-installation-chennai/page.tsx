import type { Metadata } from "next"
import Link from "next/link"
import { Container, SectionHeading } from "@/components/section"
import { areas } from "@/lib/content"
import { faqs, site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Solar installation in Chennai",
  description:
    "Rooftop solar installation in Chennai by ZeroEB. Site survey, system design, TANGEDCO net metering help, and a local team based in Madipakkam.",
}

const steps = [
  ["Site survey", "Roof space, shade, orientation, and your electricity bill decide the plant size."],
  ["System design", "A proposal for panels, inverter, and structure that fits the home, written after the visit."],
  ["Installation", "Civil work, mounting, wiring, earthing, testing, and commissioning by our team."],
  ["Grid connection", "Help with TANGEDCO net metering and subsidy paperwork for eligible homes."],
]

const highlighted = [
  "madipakkam", "medavakkam", "nanganallur", "velachery", "pallikaranai", "keelkattalai",
  "adambakkam", "sholinganallur", "tambaram", "chromepet", "guindy", "anna-nagar",
]

export default function ChennaiPage() {
  const places = highlighted
    .map((slug) => areas.find((area) => area.slug === slug)?.name)
    .filter((name): name is string => Boolean(name))

  return (
    <main>
      <section className="bg-cream">
        <Container className="py-16 md:py-20">
          <p className="text-[0.72rem] font-bold tracking-[0.16em] text-green uppercase">Chennai</p>
          <h1 className="mt-3 max-w-3xl font-serif text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.12] text-navy">
            Solar installation in Chennai.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#3c4d5c]">
            ZeroEB designs and installs rooftop solar plants for Chennai homes, from the first roof survey to TANGEDCO net metering and switch-on. The office is in Madipakkam.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/quote" className="inline-flex h-11 items-center bg-navy px-5 text-sm font-semibold text-white">Get a free quote</Link>
            <a href={`tel:${site.phones[0].tel}`} className="inline-flex h-11 items-center border border-[#b8c4d0] px-5 text-sm font-semibold text-navy">
              {site.phones[0].display}
            </a>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="A local installer"
            title="The search should land on a team that works on Chennai roofs."
            lede="Eligible homeowners can receive a government subsidy of up to ₹78,000. We help with the application. Subsidy amount and approval follow current scheme rules."
          />
          <ol className="mt-10 grid gap-4 md:grid-cols-2">
            {steps.map(([title, text], index) => (
              <li key={title} className="border border-line p-6">
                <p className="text-xs font-bold tracking-[0.16em] text-gold uppercase">0{index + 1}</p>
                <h2 className="mt-2 text-xl font-semibold text-navy">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-navy py-16 text-white">
        <Container>
          <SectionHeading
            eyebrow="If you already own the equipment"
            title="A full plant is not the same job as labour-only fitting."
            lede="This page is the complete rooftop plant. If the modules and inverter are already bought, installation services start at ₹3,000 per kW."
            light
          />
          <Link href="/installation-services" className="mt-6 inline-flex h-11 items-center bg-white px-5 text-sm font-semibold text-navy">
            Labour-only installation
          </Link>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading eyebrow="Areas" title="South Chennai first, then the rest of the city." />
          <div className="mt-6 flex flex-wrap gap-2">
            {places.map((name) => {
              const area = areas.find((item) => item.name === name)
              if (!area) return null
              return (
                <Link key={area.slug} href={`/areas/${area.slug}`} className="border border-line px-3 py-2 text-sm font-semibold text-navy hover:border-navy">
                  {area.name}
                </Link>
              )
            })}
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Ask what happens if the terrace is smaller than the first sketch. A row that does not fit is redesigned. It is not forced against the parapet. The desk is at No.5, MSP Complex, F-3, Medavakkam Main Road, opposite Kumaran Theatre. {site.hours}.
          </p>
        </Container>
      </section>

      <section className="border-t border-line bg-cream py-16">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Questions" title="What homeowners ask before they sign." />
          <div className="mt-6 divide-y divide-line">
            {faqs.map((item) => (
              <details key={item.q} className="py-4">
                <summary className="cursor-pointer font-semibold text-navy">{item.q}</summary>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>
    </main>
  )
}
