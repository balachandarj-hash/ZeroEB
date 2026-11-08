import Link from "next/link"
import { site } from "@/lib/site"

export function SiteFooter() {
  const mapQuery = encodeURIComponent(site.address.line)
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`
  const mapEmbed = `https://www.google.com/maps?q=${mapQuery}&output=embed`

  return (
    <footer className="bg-navy text-[#c5d0da]">
      <div className="mx-auto grid w-[min(1140px,calc(100%-2.5rem))] gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-serif text-2xl text-white">ZeroEB</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed">
            Rooftop solar for Chennai homes, from a Madipakkam office. Site survey, design, installation, and care after switch-on.
          </p>
          <a className="mt-4 block max-w-md text-sm text-white hover:text-gold" href={mapLink} target="_blank" rel="noreferrer">
            {site.address.line}
          </a>
          <div className="mt-4 h-44 max-w-lg overflow-hidden border border-white/15">
            <iframe
              title="ZeroEB office in Madipakkam"
              src={mapEmbed}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div>
          <p className="text-xs font-bold tracking-[0.16em] text-gold uppercase">Visit</p>
          <ul className="mt-3 space-y-2 text-sm">
            {site.phones.map((phone) => (
              <li key={phone.tel}>
                <a className="text-white hover:text-gold" href={`tel:${phone.tel}`}>
                  {phone.display}
                </a>
              </li>
            ))}
            <li>
              <a className="text-white hover:text-gold" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li>{site.hours}</li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold tracking-[0.16em] text-gold uppercase">Explore</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link className="hover:text-white" href="/solar-installation-chennai">Solar installation in Chennai</Link></li>
            <li><Link className="hover:text-white" href="/installation-services">Labour-only installation</Link></li>
            <li><Link className="hover:text-white" href="/panel-cleaning">Panel cleaning</Link></li>
            <li><Link className="hover:text-white" href="/areas">Areas we cover</Link></li>
            <li><Link className="hover:text-white" href="/videos">Videos</Link></li>
            <li><Link className="hover:text-white" href="/quote">Free quote</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-[min(1140px,calc(100%-2.5rem))] flex-col gap-3 py-5 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ZeroEB. Residential solar, Madipakkam.</p>
          <div className="flex gap-4">
            {site.social.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-white" target="_blank" rel="noreferrer">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
