"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
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
      <header className="border-b border-line bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex min-h-[76px] w-[min(1140px,calc(100%-2.5rem))] items-center justify-between gap-4">
          <Link href="/" className="shrink-0" aria-label="ZeroEB home">
            <Image src="/media/zeroeb-logo.png" alt="ZeroEB" width={142} height={46} priority />
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
            <Button
              render={<Link href="/quote" />}
              className="hidden h-11 rounded-sm bg-navy px-4 text-[0.88rem] font-semibold tracking-wide text-white hover:bg-green sm:inline-flex"
            >
              Free quote
            </Button>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                className="inline-flex size-11 items-center justify-center rounded-sm border border-line text-navy lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="size-5" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[min(100%,22rem)] bg-white">
                <SheetHeader>
                  <SheetTitle className="font-serif text-xl text-navy">ZeroEB</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-1 px-4">
                  {nav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="border-b border-line py-3 text-base font-semibold text-navy"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link
                    href="/quote"
                    onClick={() => setOpen(false)}
                    className="mt-4 inline-flex h-11 items-center justify-center rounded-sm bg-navy text-sm font-semibold text-white"
                  >
                    Get a free quote
                  </Link>
                  <a href={`tel:${phone.tel}`} className="py-3 text-sm font-semibold text-green">
                    Call {phone.display}
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  )
}
