import type { Metadata } from "next"
import { Image } from "@/components/image"
import Link from "next/link"
import { Container } from "@/components/section"
import { work } from "@/lib/content"

export const metadata: Metadata = {
  title: "Our work",
  description: "Residential rooftop solar installations by ZeroEB across Chennai, from structure work to completed plants.",
}

export default function WorkPage() {
  return (
    <main>
      <section className="bg-cream">
        <Container className="py-16">
          <p className="text-[0.72rem] font-bold tracking-[0.16em] text-green uppercase">Our work</p>
          <h1 className="mt-3 max-w-3xl font-serif text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.12] text-navy">
            Solar solutions made for real homes.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[#3c4d5c]">
            A selection of residential systems across Chennai: completed plants, mounting frames, and the cable work that keeps a terrace usable.
          </p>
        </Container>
      </section>
      <section className="py-12">
        <Container>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {work.map((photo) => (
              <figure key={photo.src} className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-cream">
                  <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="(min-width: 1024px) 25vw, 50vw" />
                </div>
                <figcaption className="mt-2 text-xs leading-snug text-muted-foreground">{photo.alt}</figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-12 border border-line bg-navy p-8 text-white">
            <h2 className="font-serif text-3xl">Want a plant like these on your terrace?</h2>
            <Link href="/quote" className="mt-5 inline-flex h-11 items-center bg-white px-5 text-sm font-semibold text-navy">
              Start with a free visit
            </Link>
          </div>
        </Container>
      </section>
    </main>
  )
}
