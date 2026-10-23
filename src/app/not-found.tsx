import Link from "next/link"
import { Container } from "@/components/section"

export default function NotFound() {
  return (
    <main className="bg-cream">
      <Container className="py-24">
        <p className="text-[0.72rem] font-bold tracking-[0.16em] text-green uppercase">404</p>
        <h1 className="mt-3 max-w-xl font-serif text-4xl text-navy">That page is not on this site.</h1>
        <p className="mt-4 max-w-lg text-muted-foreground">
          The address may have moved. Start from the home page, or send the Madipakkam office a note about your roof.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="inline-flex h-11 items-center bg-navy px-5 text-sm font-semibold text-white">
            Back home
          </Link>
          <Link href="/contact" className="inline-flex h-11 items-center border border-navy px-5 text-sm font-semibold text-navy">
            Contact
          </Link>
        </div>
      </Container>
    </main>
  )
}
