import { NextResponse } from "next/server"
import { site } from "@/lib/site"

const FIELDS = [
  "name",
  "phone",
  "email",
  "message",
  "location",
  "preferred_date",
  "preferred_time",
  "address",
  "annual_maintenance_contract",
  "project_type",
  "system_size",
  "source",
] as const

const SUBJECTS: Record<string, string> = {
  quote: "New ZeroEB solar quote request",
  contact: "New ZeroEB contact enquiry",
  cleaning: "New ZeroEB panel cleaning request",
  installation: "New ZeroEB labour-only installation request",
  chat: "New ZeroEB chat enquiry",
}

export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    body = (await request.json()) as Record<string, unknown>
  } catch {
    return NextResponse.json({ error: "Please check the form and try again." }, { status: 400 })
  }

  if (typeof body.company === "string" && body.company.trim()) {
    return NextResponse.json({ ok: true })
  }

  const name = clean(body.name)
  const phone = clean(body.phone)
  if (name.length < 2 || phone.replace(/\D/g, "").length < 10) {
    return NextResponse.json(
      { error: "Please enter your name and a 10-digit phone number." },
      { status: 400 },
    )
  }

  const source = clean(body.source) || "contact"
  const payload: Record<string, string> = {
    _subject: SUBJECTS[source] || `New ZeroEB enquiry from ${name}`,
    _template: "table",
    _captcha: "false",
    name,
    phone,
  }
  const email = clean(body.email)
  if (email) payload._replyto = email

  for (const key of FIELDS) {
    if (key === "name" || key === "phone" || key === "source") continue
    const value = clean(body[key])
    if (value) payload[key] = value
  }

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    })
    if (!response.ok) {
      return NextResponse.json(
        { error: "The enquiry desk is unavailable right now." },
        { status: 502 },
      )
    }
  } catch {
    return NextResponse.json(
      { error: "The enquiry desk is unavailable right now." },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true })
}

function clean(value: unknown) {
  if (typeof value !== "string") return ""
  return value.replace(/\s+/g, " ").trim().slice(0, 2000)
}
