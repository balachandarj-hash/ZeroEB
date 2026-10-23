"use client"

import { useState } from "react"
import { MessageSquare, X } from "lucide-react"
import { site } from "@/lib/site"

const prompts = [
  {
    q: "What size plant do I need?",
    a: "Size comes from your daytime units and the unshaded roof, not from counting ACs. Bring a recent EB bill and we will say what the terrace can cover. The visit is free.",
  },
  {
    q: "Is there a subsidy?",
    a: "Eligible homeowners can receive a government subsidy of up to ₹78,000 when the modules are DCR and the file is approved. Amount and approval follow the current scheme. It is not a discount already sitting in every quote.",
  },
  {
    q: "I already bought the panels",
    a: "Labour-only installation starts at ₹3,000 per kW. That covers civil work, mounting, wiring, testing, and commissioning. Panels, inverter, structure steel, and cables stay with you unless we agree otherwise.",
  },
  {
    q: "Panel cleaning price",
    a: "Cleaning is priced per kW: ₹750 up to 3 kW, ₹600 up to 5 kW, ₹500 up to 10 kW, and ₹450 above that. An annual maintenance contract saves 25% on each visit.",
  },
  {
    q: "Where is the office?",
    a: "No.5, MSP Complex, F-3, Medavakkam Main Road, opposite Kumaran Theatre, Madipakkam. Monday to Saturday, 9 am to 7 pm. Call +91 90425 17415.",
  },
]

type Turn = { from: "desk" | "you"; text: string }

export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [turns, setTurns] = useState<Turn[]>([
    {
      from: "desk",
      text: "ZeroEB desk in Madipakkam. These are short answers from the site. For a figure on your roof, use the quote form or call us.",
    },
  ])

  function ask(prompt: (typeof prompts)[number]) {
    setTurns((current) => [
      ...current,
      { from: "you", text: prompt.q },
      { from: "desk", text: prompt.a },
    ])
  }

  const whatsapp = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello ZeroEB, I would like to talk about rooftop solar.")}`

  return (
    <div className="fixed bottom-5 left-5 z-50">
      {open ? (
        <div className="mb-3 flex h-[min(560px,calc(100vh-8rem))] w-[min(380px,calc(100vw-2.5rem))] flex-col border border-line bg-white shadow-[0_20px_50px_rgba(11,28,44,0.18)]">
          <div className="flex items-center justify-between bg-navy px-4 py-3 text-white">
            <div>
              <p className="text-sm font-semibold">ZeroEB desk</p>
              <p className="text-xs text-white/70">Madipakkam · Mon–Sat</p>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close chat" className="text-white">
              <X className="size-4" />
            </button>
          </div>
          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {turns.map((turn, index) => (
              <p
                key={index}
                className={
                  turn.from === "you"
                    ? "ml-8 bg-cream px-3 py-2 text-sm text-navy"
                    : "mr-6 border border-line px-3 py-2 text-sm leading-relaxed text-ink"
                }
              >
                {turn.text}
              </p>
            ))}
          </div>
          <div className="border-t border-line p-3">
            <div className="flex flex-wrap gap-2">
              {prompts.map((prompt) => (
                <button
                  key={prompt.q}
                  type="button"
                  onClick={() => ask(prompt)}
                  className="border border-line px-2.5 py-1.5 text-left text-xs font-semibold text-navy hover:border-navy"
                >
                  {prompt.q}
                </button>
              ))}
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <a href={`tel:${site.phones[0].tel}`} className="bg-navy py-2 text-center text-xs font-semibold text-white">
                Call
              </a>
              <a href={whatsapp} className="bg-green py-2 text-center text-xs font-semibold text-white" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      ) : null}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="relative grid size-14 place-items-center bg-navy text-white shadow-[0_12px_28px_rgba(11,28,44,0.28)] hover:bg-green"
        aria-label={open ? "Close ZeroEB desk" : "Open ZeroEB desk"}
      >
        <MessageSquare className="size-6" />
        <span className="absolute -top-1 -right-1 size-3 border-2 border-white bg-gold" />
      </button>
    </div>
  )
}
