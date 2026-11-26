import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Source_Sans_3, Source_Serif_4 } from "next/font/google"
import Script from "next/script"
import { ChatLauncher } from "@/components/chat-launcher"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { site } from "@/lib/site"
import "./globals.css"

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "600", "700"],
})

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["600"],
  preload: false,
  display: "optional",
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Solar Installation in Chennai & Madipakkam | ZeroEB",
    template: "%s | ZeroEB",
  },
  description: site.description,
  keywords: [
    "Solar installation in Chennai",
    "Solar installation in Madipakkam",
    "Residential solar installation in Chennai",
    "home solar Chennai",
  ],
  verification: {
    google: "DdSMsgeonWvllyTmrgQyPhElO56RCUtj90oqqxkdIzs",
  },
  other: {
    "msvalidate.01": "C4A99867CCB96E4E591FC7BAAD72A99F",
  },
  openGraph: {
    title: "Solar Installation in Chennai & Madipakkam | ZeroEB",
    description: site.description,
    url: site.url,
    siteName: "ZeroEB",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/media/residential-solar-terrace-hero.jpg", width: 864, height: 640 }],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.legalName,
  image: `${site.url}/media/zeroeb-logo.png`,
  "@id": `${site.url}/#localbusiness`,
  url: site.url,
  telephone: site.phones[0].tel,
  email: site.email,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "40",
    bestRating: "5",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line,
    addressLocality: "Chennai",
    postalCode: site.address.postalCode,
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.address.lat,
    longitude: site.address.lng,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "19:00",
  },
  sameAs: site.social.map((item) => item.href),
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="min-h-screen bg-white text-ink antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
        <ChatLauncher />
        <Script id="ld-localbusiness" type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </Script>
        <Script id="gtag" strategy="lazyOnload">
          {`window.__loadGa=function(){if(window.__gaLoaded)return;window.__gaLoaded=1;var s=document.createElement("script");s.src="https://www.googletagmanager.com/gtag/js?id=${site.gaId}";s.async=true;document.head.appendChild(s);window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag("js",new Date());gtag("config","${site.gaId}");};addEventListener("pointerdown",window.__loadGa,{once:true,passive:true});addEventListener("keydown",window.__loadGa,{once:true});`}
        </Script>
      </body>
    </html>
  )
}
