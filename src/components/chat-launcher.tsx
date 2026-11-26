"use client"

import dynamic from "next/dynamic"
import { useState } from "react"

const ChatWidget = dynamic(() => import("@/components/chat-widget").then((mod) => mod.ChatWidget), {
  ssr: false,
})

export function ChatLauncher() {
  const [open, setOpen] = useState(false)

  if (open) return <ChatWidget startOpen />

  return (
    <button
      type="button"
      onClick={() => setOpen(true)}
      className="fixed right-4 bottom-4 z-50 grid size-14 place-items-center bg-navy text-white shadow-[0_12px_28px_rgba(11,28,44,0.28)] hover:bg-green sm:right-5 sm:bottom-5"
      aria-label="Open ZeroEB desk"
    >
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M5 6h14v9H8l-3 3z" />
      </svg>
      <span className="absolute -top-1 -right-1 size-3 border-2 border-white bg-gold" />
    </button>
  )
}
