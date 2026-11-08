import type { Metadata } from "next"
import Link from "next/link"
import { VideoGallery } from "@/components/video-gallery"
import { Container } from "@/components/section"
import { videos } from "@/lib/content"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Solar videos",
  description: "Short ZeroEB videos on subsidy, sizing, damaged panels, and what a Chennai rooftop installation actually involves.",
}

export default function VideosPage() {
  return (
    <main>
      <section className="bg-cream">
        <Container className="py-16">
          <p className="text-[0.72rem] font-bold tracking-[0.16em] text-green uppercase">Videos</p>
          <h1 className="mt-3 max-w-3xl font-serif text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.12] text-navy">
            Solar, explained in a minute.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[#3c4d5c]">
            Tips, myths, and real rooftops. These shorts live on the ZeroEB Instagram. Longer clips are on YouTube.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
            <a className="text-green underline underline-offset-4" href="https://www.instagram.com/zeroebdotcom/" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a className="text-green underline underline-offset-4" href={site.social[2].href} target="_blank" rel="noreferrer">
              YouTube
            </a>
          </div>
        </Container>
      </section>
      <section className="py-12">
        <Container>
          <VideoGallery videos={videos} />
          <Link href="/quote" className="mt-10 inline-flex h-11 items-center bg-navy px-5 text-sm font-semibold text-white">
            Book a free rooftop site inspection
          </Link>
        </Container>
      </section>
    </main>
  )
}
