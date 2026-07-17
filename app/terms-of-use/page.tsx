import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for Fu Miao Pajama Factory website and inquiry service."
};

export default function TermsOfUsePage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clay">Terms of Use</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-cocoa">Terms of Use</h1>
        <div className="mt-8 space-y-6 text-sm leading-7 text-ink/75">
          <p>This website introduces pajama manufacturing, OEM/ODM service, private label support and related business information from {site.name}.</p>
          <p>Product photos, specifications, lead times, MOQ and customization information are for general reference. Final production details, prices, materials, delivery time and packaging are confirmed case by case according to the specific order.</p>
          <p>Website content should not be treated as a binding quotation. A formal quotation or proforma invoice is required before any order is confirmed.</p>
          <p>Visitors may submit inquiries through the website form, email or WhatsApp. Please do not submit false, misleading or unauthorized information.</p>
          <p>For questions, contact us at <a className="font-semibold text-cocoa" href={`mailto:${site.email}`}>{site.email}</a>.</p>
        </div>
      </div>
    </section>
  );
}
