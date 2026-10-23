import type { ReactNode } from "react"
import { cn } from "cn"

export function Container({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return <div className={cn("mx-auto w-[min(1140px,calc(100%-2.5rem))]", className)}>{children}</div>
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-[0.72rem] font-bold tracking-[0.16em] text-green uppercase">{children}</p>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  light = false,
}: {
  eyebrow: string
  title: string
  lede?: string
  light?: boolean
}) {
  return (
    <div className="max-w-2xl">
      <p
        className={cn(
          "mb-3 text-[0.72rem] font-bold tracking-[0.16em] uppercase",
          light ? "text-gold" : "text-green",
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "font-serif text-[clamp(1.7rem,3.2vw,2.55rem)] leading-[1.18] font-semibold tracking-tight",
          light ? "text-white" : "text-navy",
        )}
      >
        {title}
      </h2>
      {lede ? (
        <p className={cn("mt-4 text-[1.05rem] leading-relaxed", light ? "text-white/75" : "text-muted-foreground")}>
          {lede}
        </p>
      ) : null}
    </div>
  )
}
