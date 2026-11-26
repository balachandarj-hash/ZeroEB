"use client"

import { useState } from "react"

export function OfficeMap({ title, src, className }: { title: string; src: string; className?: string }) {
  const [open, setOpen] = useState(false)

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`flex h-full w-full items-center justify-center bg-[#16324a] px-4 text-center text-sm font-semibold text-white ${className ?? ""}`}
      >
        Show the office map
      </button>
    )
  }

  return (
    <iframe
      title={title}
      src={src}
      className={`h-full w-full border-0 ${className ?? ""}`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  )
}
