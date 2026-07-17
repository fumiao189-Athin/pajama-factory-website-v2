"use client";

import { type FormEvent, useState } from "react";
import { Mail, MessageCircle, Send } from "lucide-react";
import { products, site } from "@/lib/site";
import { sendCrmEvent, TrackedWhatsAppLink } from "@/components/Tracking";

type LeadForm = {
  name: string;
  company: string;
  country: string;
  email: string;
  whatsapp: string;
  product: string;
  quantity: string;
  message: string;
};

const initialForm: LeadForm = {
  name: "",
  company: "",
  country: "",
  email: "",
  whatsapp: "",
  product: "",
  quantity: "",
  message: ""
};

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState<LeadForm>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  function updateField(field: keyof LeadForm, value: string) {
    setForm((currentForm) => ({ ...currentForm, [field]: value }));
  }

  async function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setStatus(null);

    try {
      await sendCrmEvent("inquiry_submit", {
        name: form.name.trim(),
        company: form.company.trim(),
        country: form.country.trim(),
        email: form.email.trim(),
        whatsapp: form.whatsapp.trim(),
        product: form.product,
        quantity: form.quantity.trim(),
        message: form.message.trim()
      });

      setForm(initialForm);
      setStatus("success");
    } catch (error) {
      console.error("Inquiry submission failed:", error);
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="inquiry-form" className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clay">
            Send an inquiry
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-cocoa sm:text-4xl">
            Tell us about your pajama project.
          </h2>
          <p className="mt-5 text-base leading-8 text-ink/75">
            Share product style, target quantity, fabric preference, logo and
            packaging needs. We will review your request and reply with practical
            sampling or production next steps.
          </p>

          <div className="mt-8 grid gap-4 rounded-2xl border border-cocoa/10 bg-linen p-6 text-sm text-ink/75">
            <p><strong className="text-cocoa">MOQ:</strong> {site.moq}</p>
            <p><strong className="text-cocoa">Sample time:</strong> {site.sampleTime}</p>
            <p><strong className="text-cocoa">Bulk lead time:</strong> {site.bulkLeadTime}</p>
            <p><strong className="text-cocoa">Fabrics:</strong> {site.fabrics}</p>
          </div>

          {!compact && (
            <div className="mt-8 space-y-4 text-sm text-ink/75">
              <a className="flex items-center gap-3 hover:text-cocoa" href={`mailto:${site.email}`}>
                <Mail className="h-5 w-5 text-clay" aria-hidden="true" />
                {site.email}
              </a>
              <TrackedWhatsAppLink className="flex items-center gap-3 hover:text-cocoa" label="Contact form side link">
                <MessageCircle className="h-5 w-5 text-clay" aria-hidden="true" />
                WhatsApp: {site.phone}
              </TrackedWhatsAppLink>
            </div>
          )}
        </div>

        <form
          onSubmit={submitInquiry}
          className="grid gap-4 rounded-2xl border border-cocoa/10 bg-linen/70 p-5 shadow-soft sm:grid-cols-2 sm:p-7"
        >
          <label className="grid gap-2 text-sm font-medium text-cocoa">
            Your Name *
            <input
              className="min-h-12 rounded-md border border-cocoa/15 bg-white px-4 text-ink outline-none transition focus:border-clay"
              value={form.name}
              onChange={(event) => updateField("name", event.target.value)}
              placeholder="Your name"
              required
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-cocoa">
            Company Name
            <input
              className="min-h-12 rounded-md border border-cocoa/15 bg-white px-4 text-ink outline-none transition focus:border-clay"
              value={form.company}
              onChange={(event) => updateField("company", event.target.value)}
              placeholder="Company or brand"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-cocoa">
            Country *
            <input
              className="min-h-12 rounded-md border border-cocoa/15 bg-white px-4 text-ink outline-none transition focus:border-clay"
              value={form.country}
              onChange={(event) => updateField("country", event.target.value)}
              placeholder="Country"
              required
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-cocoa">
            Email *
            <input
              className="min-h-12 rounded-md border border-cocoa/15 bg-white px-4 text-ink outline-none transition focus:border-clay"
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              placeholder="name@company.com"
              type="email"
              required
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-cocoa">
            WhatsApp
            <input
              className="min-h-12 rounded-md border border-cocoa/15 bg-white px-4 text-ink outline-none transition focus:border-clay"
              value={form.whatsapp}
              onChange={(event) => updateField("whatsapp", event.target.value)}
              placeholder="+1 000 000 0000"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-cocoa">
            Product *
            <select
              className="min-h-12 rounded-md border border-cocoa/15 bg-white px-4 text-ink outline-none transition focus:border-clay"
              value={form.product}
              onChange={(event) => updateField("product", event.target.value)}
              required
            >
              <option value="">Select a product</option>
              {products.map((product) => (
                <option key={product.name} value={product.name}>{product.name}</option>
              ))}
              <option value="Other Custom Sleepwear">Other Custom Sleepwear</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm font-medium text-cocoa sm:col-span-2">
            Estimated Quantity *
            <input
              className="min-h-12 rounded-md border border-cocoa/15 bg-white px-4 text-ink outline-none transition focus:border-clay"
              value={form.quantity}
              onChange={(event) => updateField("quantity", event.target.value)}
              placeholder="Example: 500 sets"
              required
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-cocoa sm:col-span-2">
            Project Requirements *
            <textarea
              className="min-h-36 rounded-md border border-cocoa/15 bg-white px-4 py-3 text-ink outline-none transition focus:border-clay"
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              placeholder="Tell us fabric, style, size range, logo, labels, packaging and delivery requirements."
              required
            />
          </label>
          <button
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-cocoa px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink disabled:cursor-not-allowed disabled:bg-cocoa/60 sm:col-span-2"
            type="submit"
            disabled={submitting}
          >
            <Send className="h-4 w-4" aria-hidden="true" />
            {submitting ? "Submitting..." : "Send Inquiry"}
          </button>
          {status === "success" && (
            <p className="rounded-md bg-green-50 px-4 py-3 text-sm font-semibold text-green-700 sm:col-span-2">
              Thank you. Your inquiry has been submitted successfully.
            </p>
          )}
          {status === "error" && (
            <p className="rounded-md bg-red-50 px-4 py-3 text-sm font-semibold text-red-700 sm:col-span-2">
              Submission failed. Please contact us through WhatsApp.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
