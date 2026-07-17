import type { Metadata } from "next";
import { Header, Footer, WhatsAppFloat } from "@/components/Layout";
import { TrackingBeacon } from "@/components/Tracking";
import {
  organizationSchema,
  serviceSchema,
  site,
  targetKeywords,
  websiteSchema
} from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.metaTitle,
    template: "%s | Fu Miao Pajama Factory"
  },
  description: site.metaDescription,
  keywords: [
    "Fu Miao Pajamas",
    "Fu Miao E-commerce Co Ltd",
    ...targetKeywords,
    "OEM pajama manufacturer China",
    "ODM sleepwear factory China",
    "custom sleepwear supplier",
    "private label pajama manufacturer",
    "wholesale pajamas China"
  ],
  alternates: { canonical: "/" },
  icons: {
    icon: "/favicon.ico"
  },
  openGraph: {
    title: site.metaTitle,
    description: site.metaDescription,
    url: site.url,
    siteName: site.shortName,
    images: [{ url: site.image, width: 1200, height: 1200 }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: site.metaTitle,
    description: site.metaDescription,
    images: [site.image]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema, serviceSchema])
          }}
        />
        <TrackingBeacon />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
