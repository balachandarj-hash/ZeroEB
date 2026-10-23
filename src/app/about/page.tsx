import type { Metadata } from "next"
import Link from "next/link"
import { Container, SectionHeading } from "@/components/section"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "About ZeroEB",
  description:
    "ZeroEB is a Madipakkam solar installer for Chennai homes. Honest sizing, careful workmanship, and a team you can call after switch-on.",
}

const principles = [
  ["01", "Listen first", "The roof, the bill, and what the family wants the terrace to still do decide the recommendation."],
  ["02", "Plan precisely", "Shade, the tank, the stair, and the cable path come off the drawing before a kilowatt is quoted."],
  ["03", "Install carefully", "Neat structure work, tested connections, and a plant that is commissioned rather than left half-explained."],
  ["04", "Stay available", "Cleaning, checks, and questions stay with the Madipakkam office after the system is live."],
]

export default function AboutPage() {
  return (
    <main>
      <section className="bg-cream">
        <Container className="py-16 md:py-20">
          <p className="text-[0.72rem] font-bold tracking-[0.16em] text-green uppercase">About</p>
          <h1 className="mt-3 max-w-3xl font-serif text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.12] text-navy">
            Making clean energy feel at home.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#3c4d5c]">
            ZeroEB was started so solar would be a clear choice for a Chennai household: honest answers, a design that fits the roof, and workmanship that lasts. The office is in Madipakkam. The work is residential first.
          </p>
        </Container>
      </section>
      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4 text-[1.05rem] leading-relaxed text-ink">
            <p>
              Choosing solar can feel complicated. Brochures quote a payback year before anyone has stood on the terrace. We start the other way around. A free visit records the open strip, the shade, and a year of units if you have the statements.
            </p>
            <p>
              From Madipakkam to homes across the city, the same crew surveys, installs, and stays reachable. Residential specialists, local to Chennai, with advice you can check against your own bill.
            </p>
            <p>
              The desk is open {site.hours.toLowerCase()}, at {site.address.line}.
            </p>
            <Link href="/contact" className="inline-flex h-11 items-center bg-navy px-5 text-sm font-semibold text-white">
              Talk to the office
            </Link>
          </div>
          <div className="bg-navy p-8 text-white">
            <p className="text-xs font-bold tracking-[0.16em] text-gold uppercase">Office</p>
            <p className="mt-4 font-serif text-3xl">Madipakkam</p>
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              Opposite Kumaran Theatre, Medavakkam Main Road. Walk in, or send the bill first. Nothing is ordered at the counter.
            </p>
          </div>
        </Container>
      </section>
      <section className="border-t border-line bg-cream py-16">
        <Container>
          <SectionHeading eyebrow="How we work" title="Every suitable rooftop, treated as a house first." />
          <ol className="mt-10 grid gap-6 md:grid-cols-2">
            {principles.map(([n, title, text]) => (
              <li key={n} className="bg-white p-6">
                <p className="font-serif text-2xl text-gold">{n}</p>
                <h2 className="mt-2 text-xl font-semibold text-navy">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </main>
  )
}
