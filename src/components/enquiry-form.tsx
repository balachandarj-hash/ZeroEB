"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

type TextField = {
  name: string
  label: string
  type?: "text" | "tel" | "email" | "date"
  placeholder?: string
  required?: boolean
}

type SelectField = {
  name: string
  label: string
  type: "select"
  options: string[]
  required?: boolean
}

type AreaField = {
  name: string
  label: string
  type: "textarea"
  placeholder?: string
  required?: boolean
}

type CheckField = {
  name: string
  label: string
  type: "checkbox"
  value: string
}

export type Field = TextField | SelectField | AreaField | CheckField

const control =
  "h-11 rounded-sm border-input bg-white px-3 text-base text-ink shadow-none md:text-[0.95rem]"

export function EnquiryForm({
  source,
  submitLabel,
  fields,
  note,
}: {
  source: string
  submitLabel: string
  fields: Array<Field | Field[]>
  note?: string
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [message, setMessage] = useState("")

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    setStatus("sending")
    setMessage("Sending your enquiry…")
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, source }),
      })
      const payload = (await response.json()) as { error?: string }
      if (!response.ok) throw new Error(payload.error || "Unable to send")
      form.reset()
      setStatus("sent")
      setMessage("Thank you. Your enquiry has been sent to ZeroEB. We will call you to confirm.")
    } catch (error) {
      setStatus("error")
      setMessage(
        error instanceof Error
          ? `${error.message} You can also call +91 90425 17415 or WhatsApp us.`
          : "Unable to send right now. Please call +91 90425 17415.",
      )
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate={false}>
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />
      {fields.map((row, index) => {
        const group = Array.isArray(row) ? row : [row]
        return (
          <div key={index} className={group.length > 1 ? "grid gap-4 sm:grid-cols-2" : "grid gap-4"}>
            {group.map((field) => (
              <FieldControl key={field.name} field={field} />
            ))}
          </div>
        )
      })}
      <Button
        type="submit"
        disabled={status === "sending"}
        className="h-11 rounded-sm bg-navy px-5 text-[0.92rem] font-semibold tracking-wide text-white hover:bg-green"
      >
        {status === "sending" ? "Sending…" : submitLabel}
      </Button>
      {note ? <p className="text-sm text-muted-foreground">{note}</p> : null}
      <p
        role="status"
        className={
          status === "error"
            ? "text-sm font-medium text-destructive"
            : status === "sent"
              ? "text-sm font-medium text-green"
              : "text-sm text-muted-foreground"
        }
      >
        {message}
      </p>
    </form>
  )
}

function FieldControl({ field }: { field: Field }) {
  const id = `field-${field.name}`
  if (field.type === "checkbox") {
    return (
      <label className="flex items-start gap-3 text-sm leading-snug text-ink">
        <input type="checkbox" name={field.name} value={field.value} className="mt-1 size-4 accent-green" />
        <span>{field.label}</span>
      </label>
    )
  }
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id} className="text-sm font-semibold text-navy">
        {field.label}
      </Label>
      {field.type === "textarea" ? (
        <Textarea
          id={id}
          name={field.name}
          required={field.required}
          placeholder={field.placeholder}
          className="min-h-28 rounded-sm border-input bg-white px-3 py-2.5 text-base shadow-none md:text-[0.95rem]"
        />
      ) : field.type === "select" ? (
        <select
          id={id}
          name={field.name}
          required={field.required}
          defaultValue=""
          className={`${control} w-full border bg-white`}
        >
          <option value="" disabled>
            Select
          </option>
          {field.options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      ) : (
        <Input
          id={id}
          name={field.name}
          type={field.type || "text"}
          required={field.required}
          placeholder={field.placeholder}
          className={control}
        />
      )}
    </div>
  )
}
