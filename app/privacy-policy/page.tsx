import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Fu Miao Pajama Factory website inquiries and CRM tracking."
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clay">Privacy Policy</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-cocoa">Privacy Policy</h1>
        <div className="mt-8 space-y-6 text-sm leading-7 text-ink/75">
          <p>{site.name} collects information that visitors submit through inquiry forms, including name, company, country, email, WhatsApp number, product interest, quantity and project requirements.</p>
          <p>We may also record basic website activity such as page visits, referral source, UTM campaign information, device information and form submissions to help us respond to buyer inquiries and improve our marketing performance.</p>
          <p>We use this information to reply to inquiries, prepare quotations, follow up with potential customers, improve our website and measure marketing channels. We do not sell visitor or customer data to advertisers.</p>
          <p>Information may be stored in Google Sheets, Apps Script, Gmail and website hosting tools used to operate our inquiry and CRM workflow. Access is limited to people responsible for sales, support and website operation.</p>
          <p>You may contact us at <a className="font-semibold text-cocoa" href={`mailto:${site.email}`}>{site.email}</a> to request correction or deletion of inquiry information where applicable.</p>
        </div>
      </div>
    </section>
  );
}
