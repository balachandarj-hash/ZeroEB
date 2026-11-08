"use client"

import { useState } from "react"
import type { Video } from "@/lib/content"
import { cn } from "cn"

const filters = [
  { id: "all", label: "All videos" },
  { id: "tips", label: "Solar tips" },
  { id: "choosing", label: "Choosing solar" },
  { id: "work", label: "Our installations" },
  { id: "fun", label: "Light-hearted" },
] as const

export function VideoGallery({ videos }: { videos: Video[] }) {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all")
  const visible = filter === "all" ? videos : videos.filter((video) => video.category === filter)

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter videos by topic">
        {filters.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={filter === item.id}
            onClick={() => setFilter(item.id)}
            className={cn(
              "border px-3 py-2 text-sm font-semibold",
              filter === item.id ? "border-navy bg-navy text-white" : "border-line bg-white text-navy",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((video) => (
          <article key={video.id} className="flex flex-col border border-line bg-white">
            <iframe
              src={`https://www.instagram.com/reel/${video.id}/embed/`}
              title={video.heading}
              className="h-[540px] w-full border-0 bg-cream"
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            />
            <div className="flex flex-1 flex-col p-5">
              <h2 className="font-serif text-2xl leading-snug text-navy">{video.heading}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#3c4d5c]">{video.description}</p>
              <a
                className="mt-4 text-sm font-semibold text-green"
                href={video.url}
                target="_blank"
                rel="noreferrer"
              >
                Watch on Instagram
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
