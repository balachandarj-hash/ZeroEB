import type { Metadata } from "next"
import Link from "next/link"
import { Container } from "@/components/section"
import { areas } from "@/lib/content"

export const metadata: Metadata = {
  title: "Solar installation areas in Chennai",
  description: "ZeroEB installs rooftop solar across Chennai from the Madipakkam office. Find your locality.",
}

export default function AreasPage() {
  const groups = new Map<string, typeof areas>()
  for (const area of areas) {
    const letter = area.name[0]?.toUpperCase() || "#"
    const list = groups.get(letter) || []
    list.push(area)
    groups.set(letter, list)
  }

  return (
    <main>
      <section className="bg-cream">
        <Container className="py-16">
          <p className="text-[0.72rem] font-bold tracking-[0.16em] text-green uppercase">Areas</p>
          <h1 className="mt-3 max-w-3xl font-serif text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.12] text-navy">
            Chennai localities we install in.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[#3c4d5c]">
            The office is in Madipakkam. Each page below is the local note for that neighbourhood: the terrace constraints we actually see, not a second copy of the city page.
          </p>
        </Container>
      </section>
      <section className="py-12">
        <Container className="space-y-8">
          {[...groups.entries()].map(([letter, list]) => (
            <div key={letter}>
              <h2 className="font-serif text-2xl text-gold">{letter}</h2>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((area) => (
                  <li key={area.slug}>
                    <Link href={`/areas/${area.slug}`} className="block border border-line px-3 py-2 text-sm font-semibold text-navy hover:border-navy">
                      Solar in {area.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Container>
      </section>
    </main>
  )
}
