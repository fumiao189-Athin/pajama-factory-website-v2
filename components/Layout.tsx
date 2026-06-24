import Image from "next/image";
import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { navItems, site } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-cocoa/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Home">
          <span className="grid h-11 w-11 place-items-center rounded-md bg-cocoa text-sm font-bold text-white">
            FM
          </span>

          <span className="max-w-48 text-sm font-bold leading-5 text-cocoa sm:max-w-64">
            {site.name}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink/75 transition hover:text-cocoa"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            className="inline-flex min-h-11 items-center gap-2 rounded-md bg-[#1FAF64] px-4 text-sm font-semibold text-white transition hover:bg-[#16894e]"
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-cocoa/10 px-4 py-3 lg:hidden">
        <nav
          className="mx-auto flex max-w-7xl gap-4 overflow-x-auto text-sm font-medium text-ink/75"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 hover:text-cocoa"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-cocoa text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <p className="text-lg font-bold">{site.shortName}</p>

          <p className="mt-4 max-w-xl text-sm leading-7 text-white/75">
            Fu Miao E-commerce Co., Ltd. is a China-based B2B pajama
            manufacturer supporting brands, wholesalers, distributors,
            importers, and e-commerce sellers with OEM pajama manufacturing,
            ODM pajama design, and private label service.
          </p>
        </div>

        <div>
          <p className="font-semibold">Pages</p>

          <div className="mt-4 grid gap-3 text-sm text-white/75">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="font-semibold">Contact</p>

          <div className="mt-4 grid gap-3 text-sm text-white/75">
            <a
              className="flex items-center gap-2 hover:text-white"
              href={`tel:${site.phone}`}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {site.phone}
            </a>

            <a
              className="flex items-center gap-2 hover:text-white"
              href={`mailto:${site.email}`}
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {site.email}
            </a>

            <a
              className="flex items-center gap-2 hover:text-white"
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp Inquiry
            </a>

            <span className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WeChat: {site.wechat}
            </span>

            <span>{site.address}</span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#1FAF64] text-white shadow-soft transition hover:scale-105"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  image
}: {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
}) {
  return (
    <section className="relative isolate min-h-[420px] overflow-hidden bg-cocoa text-white">
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover opacity-45"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-cocoa/45" />

      <div className="relative mx-auto flex min-h-[420px] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
          {eyebrow}
        </p>

        <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
          {title}
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
          {text}
        </p>
      </div>
    </section>
  );
}