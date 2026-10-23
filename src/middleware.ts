import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const exact: Record<string, string> = {
  "/index.html": "/",
  "/about.html": "/about",
  "/services.html": "/services",
  "/contact.html": "/contact",
  "/solar-quote.html": "/quote",
  "/panel-cleaning.html": "/panel-cleaning",
  "/installation-services.html": "/installation-services",
  "/our-work.html": "/our-work",
  "/blog.html": "/blog",
  "/videos.html": "/videos",
  "/solar-installation-chennai.html": "/solar-installation-chennai",
  "/solar-panel-installation.html": "/solar-installation-chennai",
  "/solar-panel-and-price.html": "/quote",
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  if (!pathname.endsWith(".html")) return NextResponse.next()

  const destination = exact[pathname]
  const url = request.nextUrl.clone()
  if (destination) {
    url.pathname = destination
    return NextResponse.redirect(url, 308)
  }

  if (pathname.startsWith("/blog/")) {
    url.pathname = pathname.replace(/\.html$/, "")
    return NextResponse.redirect(url, 308)
  }

  const match = pathname.match(/-in-([a-z0-9-]+)\.html$/)
  if (match) {
    url.pathname = `/areas/${match[1]}`
    return NextResponse.redirect(url, 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next|api|media|favicon|icon).*)"],
}
