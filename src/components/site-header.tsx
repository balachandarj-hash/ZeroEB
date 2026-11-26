"use client"

import { Image } from "@/components/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { nav, site } from "@/lib/site"
import { cn } from "cn"

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const phone = site.phones[0]

  return (
    <div className="sticky top-0 z-40">
      <div className="bg-navy text-[0.8rem] text-[#c5d0da]">
        <div className="mx-auto flex w-[min(1140px,calc(100%-2.5rem))] items-center justify-between gap-4 py-2">
          <p className="hidden sm:block">{site.hours}</p>
          <p className="sm:hidden">Madipakkam · Chennai</p>
          <div className="flex items-center gap-4">
            <a className="font-semibold text-white hover:text-gold" href={`tel:${phone.tel}`}>
              {phone.display}
            </a>
            <a className="hidden font-semibold text-white hover:text-gold md:inline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
        </div>
      </div>
      <header className="border-b border-line bg-white">
        <div className="mx-auto flex min-h-[76px] w-[min(1140px,calc(100%-2.5rem))] items-center justify-between gap-4">
          <Link href="/" className="shrink-0" aria-label="ZeroEB home">
            <Image src="/media/zeroeb-logo.png" alt="ZeroEB" width={142} height={46} loading="eager" fetchPriority="low" />
          </Link>
          <nav className="hidden items-center gap-5 text-[0.92rem] font-semibold text-[#3c4d5c] lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "hover:text-navy",
                  pathname === item.href || pathname.startsWith(`${item.href}/`) ? "text-navy" : "",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link
              href="/quote"
              className="hidden h-11 items-center rounded-sm bg-navy px-4 text-[0.88rem] font-semibold tracking-wide text-white hover:bg-green sm:inline-flex"
            >
              Free quote
            </Link>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-sm border border-line text-navy lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>
        {open ? (
          <nav className="border-t border-line bg-white px-5 py-2 lg:hidden">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b border-line py-3 text-base font-semibold text-navy"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/quote"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex h-11 items-center justify-center rounded-sm bg-navy px-4 text-sm font-semibold text-white"
            >
              Get a free quote
            </Link>
            <a href={`tel:${phone.tel}`} className="block py-3 text-sm font-semibold text-green">
              Call {phone.display}
            </a>
          </nav>
        ) : null}
      </header>
    </div>
  )
}
