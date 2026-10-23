import type { Metadata } from "next"
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
        <Container className="grid gap-4 md:grid-cols-2">
          {videos.map((video, index) => (
            <a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noreferrer"
              className="flex gap-4 border border-line p-5 hover:border-navy"
            >
              <span className="font-serif text-2xl text-gold">{String(index + 1).padStart(2, "0")}</span>
              <span>
                <span className="block font-semibold text-navy">{video.title}</span>
                <span className="mt-1 block text-sm text-green">Watch on Instagram</span>
              </span>
            </a>
          ))}
        </Container>
      </section>
    </main>
  )
}
