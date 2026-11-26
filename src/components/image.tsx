import NextImage, { type ImageProps } from "next/image"

const base = process.env.NEXT_PUBLIC_BASE_PATH || ""

/** Public images stay at /media locally. GitHub project Pages needs the /ZeroEB prefix in the src itself. */
export function Image({ src, priority, fetchPriority, decoding, ...props }: ImageProps) {
  const resolved =
    base && typeof src === "string" && src.startsWith("/") && !src.startsWith(`${base}/`)
      ? `${base}${src}`
      : src
  return (
    <NextImage
      src={resolved}
      priority={priority}
      fetchPriority={fetchPriority ?? (priority ? "high" : undefined)}
      decoding={decoding ?? (priority ? "sync" : "async")}
      {...props}
    />
  )
}
