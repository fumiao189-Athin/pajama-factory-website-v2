import { Mail, MessageCircle, Send } from "lucide-react";
import { site } from "@/lib/site";

export function ContactForm() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clay">
            Send an inquiry
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-cocoa sm:text-4xl">
            Tell us about your pajama project.
          </h2>
          <p className="mt-5 text-base leading-8 text-ink/75">
            Share your product type, target quantity, fabric preference, size
            range, packaging needs, and expected delivery date. Our sales team
            will reply with practical sourcing advice and next steps.
          </p>
          <div className="mt-8 space-y-4 text-sm text-ink/75">
            <a className="flex items-center gap-3 hover:text-cocoa" href={`mailto:${site.email}`}>
              <Mail className="h-5 w-5 text-clay" aria-hidden="true" />
              {site.email}
            </a>
            <a
              className="flex items-center gap-3 hover:text-cocoa"
              href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}`}
            >
              <MessageCircle className="h-5 w-5 text-clay" aria-hidden="true" />
              WhatsApp: {site.whatsapp}
            </a>
            <p className="flex items-center gap-3">
              <MessageCircle className="h-5 w-5 text-clay" aria-hidden="true" />
              WeChat: {site.wechat}
            </p>
          </div>
        </div>
        <form
          action={`mailto:${site.email}`}
          method="post"
          encType="text/plain"
          className="grid gap-4 rounded-lg border border-cocoa/10 bg-linen/60 p-5 shadow-soft sm:grid-cols-2 sm:p-7"
        >
          <label className="grid gap-2 text-sm font-medium text-cocoa">
            Name
            <input className="min-h-12 rounded-md border border-cocoa/15 bg-white px-4 text-ink outline-none transition focus:border-clay" name="name" placeholder="Your name" required />
          </label>
          <label className="grid gap-2 text-sm font-medium text-cocoa">
            Company
            <input className="min-h-12 rounded-md border border-cocoa/15 bg-white px-4 text-ink outline-none transition focus:border-clay" name="company" placeholder="Company name" required />
          </label>
          <label className="grid gap-2 text-sm font-medium text-cocoa">
            Email
            <input className="min-h-12 rounded-md border border-cocoa/15 bg-white px-4 text-ink outline-none transition focus:border-clay" name="email" placeholder="name@company.com" type="email" required />
          </label>
          <label className="grid gap-2 text-sm font-medium text-cocoa">
            WhatsApp
            <input className="min-h-12 rounded-md border border-cocoa/15 bg-white px-4 text-ink outline-none transition focus:border-clay" name="whatsapp" placeholder="+1 000 000 0000" />
          </label>
          <label className="grid gap-2 text-sm font-medium text-cocoa sm:col-span-2">
            Product Interest
            <input className="min-h-12 rounded-md border border-cocoa/15 bg-white px-4 text-ink outline-none transition focus:border-clay" name="product" placeholder="Women pajamas, family matching pajamas, satin pajamas..." />
          </label>
          <label className="grid gap-2 text-sm font-medium text-cocoa sm:col-span-2">
            Message
            <textarea className="min-h-36 rounded-md border border-cocoa/15 bg-white px-4 py-3 text-ink outline-none transition focus:border-clay" name="message" placeholder="Tell us quantity, fabric, market, size range, packaging, and launch date." required />
          </label>
          <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-cocoa px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink sm:col-span-2" type="submit">
            <Send className="h-4 w-4" aria-hidden="true" />
            Submit Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}
