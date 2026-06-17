import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { CheckCircle2, MessageCircle, Globe, Truck, Shield } from "lucide-react";
import { site, services } from "@/lib/site";

export default function HomePage() {
  return (
    <main className="bg-white text-black">

      {/* HERO - 高转化核心 */}
      <section className="relative bg-cocoa text-white overflow-hidden">
        <Image
          src={site.image}
          alt="Pajama Factory"
          fill
          className="object-cover opacity-40"
          priority
        />

        <div className="relative max-w-6xl mx-auto px-6 py-24">
          <p className="uppercase tracking-widest text-white/70 text-sm">
            OEM / ODM Pajama Manufacturer in China
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
            Custom Pajama Factory <br /> Built for Global Brands
          </h1>

          <p className="mt-6 text-lg text-white/80 max-w-2xl">
            We help brands, wholesalers and Amazon sellers build profitable sleepwear lines with fast sampling, stable production and strict QC.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact-us">
              <Button variant="light">📩 Request a Quote</Button>
            </Link>

            <Link href={site.whatsapp} target="_blank">
              <Button variant="secondary">💬 WhatsApp Us</Button>
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap gap-6 text-white/70 text-sm">
            <span>✔ 15+ Years Factory</span>
            <span>✔ OEM / ODM Support</span>
            <span>✔ Fast Sampling</span>
            <span>✔ Global Shipping</span>
          </div>
        </div>
      </section>

      {/* WHY US - 信任区 */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">Why Global Buyers Choose Us</h2>

        <div className="grid md:grid-cols-4 gap-6 mt-12">
          {[
            {
              icon: <Shield />,
              title: "Strict Quality Control",
              desc: "Every batch is checked before shipment"
            },
            {
              icon: <Globe />,
              title: "Global Clients",
              desc: "Serving US, EU, Middle East buyers"
            },
            {
              icon: <Truck />,
              title: "Fast Delivery",
              desc: "Stable production & on-time shipping"
            },
            {
              icon: <MessageCircle />,
              title: "Fast Response",
              desc: "Reply within 12 hours"
            },
          ].map((item, i) => (
            <div key={i} className="p-6 border rounded-xl">
              <div className="text-cocoa">{item.icon}</div>
              <h3 className="font-semibold mt-3">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES - 转化型展示 */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">Our Manufacturing Services</h2>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {services.map((service) => (
              <div key={service} className="bg-white p-6 rounded-xl border">
                <CheckCircle2 className="text-green-600" />
                <h3 className="font-semibold mt-3">{service}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Professional OEM/ODM support for your brand development.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACTORY STORY - 信任强化 */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-3xl font-bold">A Reliable Pajama Manufacturer in China</h2>
            <p className="mt-4 text-gray-600">
              With over 15 years of experience, we specialize in OEM/ODM sleepwear production for global brands.
              From fabric sourcing to final packaging, we support your full supply chain.
            </p>

            <div className="mt-6 space-y-2 text-sm text-gray-700">
              <p>✔ Custom pajama sets</p>
              <p>✔ Private label sleepwear</p>
              <p>✔ Men / Women / Plus-size collections</p>
              <p>✔ Small MOQ & fast sampling</p>
            </div>
          </div>

          <div className="bg-gray-200 h-80 rounded-xl flex items-center justify-center">
            Factory Image
          </div>

        </div>
      </section>

      {/* FINAL CTA - 强转化 */}
      <section className="bg-cocoa text-white py-20 text-center">
        <h2 className="text-3xl font-bold">Ready to Build Your Pajama Brand?</h2>
        <p className="mt-4 text-white/80">
          Get factory price & customization solution within 12 hours
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Link href="/contact-us">
            <Button variant="light">Get Quote</Button>
          </Link>

          <Link href={site.whatsapp} target="_blank">
            <Button variant="secondary">Chat on WhatsApp</Button>
          </Link>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 max-w-4xl mx-auto px-6">
        <ContactForm />
      </section>

    </main>
  );
}