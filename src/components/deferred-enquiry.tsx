"use client"

import { useEffect, useRef, useState } from "react"
import type { ComponentProps } from "react"
import type { EnquiryForm } from "@/components/enquiry-form"

type FormProps = ComponentProps<typeof EnquiryForm>

export function DeferredEnquiry(props: FormProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [Form, setForm] = useState<typeof EnquiryForm | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        observer.disconnect()
        void import("@/components/enquiry-form").then((mod) => setForm(() => mod.EnquiryForm))
      },
      { rootMargin: "400px" },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="min-h-72">
      {Form ? <Form {...props} /> : <p className="text-sm text-muted-foreground">The quote form loads as you reach it.</p>}
    </div>
  )
}
