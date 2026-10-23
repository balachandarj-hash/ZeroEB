import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Container } from "@/components/section"
import { areas, getArea } from "@/lib/content"
import { site } from "@/lib/site"

type Props = { params: Promise<{ place: string }> }

export function generateStaticParams() {
  return areas.map((area) => ({ place: area.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { place } = await params
  const area = getArea(place)
  if (!area) return { title: "Area" }
  return {
    title: `Solar panels for your home in ${area.name}`,
    description: `Rooftop solar in ${area.name}, Chennai. ZeroEB surveys from the Madipakkam office and designs the plant around that terrace.`,
  }
}

export default async function AreaPage({ params }: Props) {
  const { place } = await params
  const area = getArea(place)
  if (!area) notFound()
  const index = areas.findIndex((item) => item.slug === area.slug)
  const nearby = [1, 2, 3, 4, 5, 6].map((offset) => areas[(index + offset) % areas.length])

  return (
    <main>
      <section className="bg-cream">
        <Container className="py-16">
          <p className="text-[0.72rem] font-bold tracking-[0.16em] text-green uppercase">From the Madipakkam office</p>
          <h1 className="mt-3 max-w-3xl font-serif text-[clamp(2.1rem,4.2vw,3.4rem)] leading-[1.12] text-navy">
            {area.headline}
          </h1>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/quote" className="inline-flex h-11 items-center bg-navy px-5 text-sm font-semibold text-white">Get a free quote</Link>
            <a href={`tel:${site.phones[0].tel}`} className="inline-flex h-11 items-center border border-[#b8c4d0] bg-white px-5 text-sm font-semibold text-navy">
              Call {site.phones[0].display}
            </a>
          </div>
        </Container>
      </section>
      <section className="py-14">
        <Container className="max-w-3xl space-y-4 text-[1.05rem] leading-relaxed">
          {area.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
          <p>
            A full plant for a Chennai home is described on the{" "}
            <Link href="/solar-installation-chennai" className="font-semibold text-green underline underline-offset-4">
              solar installation
            </Link>{" "}
            page. The visit is free, and nothing is ordered until you ask. The desk is open {site.hours.toLowerCase()}.
          </p>
        </Container>
      </section>
      <section className="border-t border-line bg-cream py-12">
        <Container>
          <h2 className="font-serif text-2xl text-navy">Nearby localities</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {nearby.map((item) => (
              <Link key={item.slug} href={`/areas/${item.slug}`} className="border border-line bg-white px-3 py-2 text-sm font-semibold text-navy">
                {item.name}
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  )
}
