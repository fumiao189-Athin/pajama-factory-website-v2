import {
  Award,
  BadgeCheck,
  Boxes,
  ClipboardCheck,
  Factory,
  Globe,
  Handshake,
  MessageCircle,
  PackageCheck,
  PenTool,
  Ruler,
  Scissors,
  Search,
  Shirt,
  Truck,
  Users
} from "lucide-react";

/* ========================================
   COMPANY INFORMATION
======================================== */

export const site = {
  name: "Fu Miao E-commerce Co., Ltd.",
  shortName: "Fu Miao Pajama Factory",

  metaTitle:
    "Pajama Manufacturer China | Custom & Private Label Pajamas Supplier",

  metaDescription:
    "Professional pajama manufacturer in China offering OEM/ODM sleepwear production, custom pajamas, private label services, sampling, quality control, and global shipping support.",

  description: `
Fu Miao E-commerce Co., Ltd. is a professional pajama and loungewear manufacturer based in China.

We specialize in OEM and ODM sleepwear production for global brands, wholesalers, distributors, importers, and e-commerce sellers.

With more than 15 years of manufacturing experience, we provide complete production support, including design development, fabric sourcing, sampling, bulk production, quality control, private label packaging, and international shipping coordination.

Our main product categories include custom pajama sets, private label sleepwear, men's pajamas, women's pajamas, kids' pajamas, plus-size sleepwear, family matching pajamas, and loungewear.

We help customers build competitive sleepwear collections with reliable quality, flexible customization, stable production, and on-time delivery.
`,

  url: "https://www.fumiao-pajama.com",

  email: "fumiao189@gmail.com",

  phone: "+86 175 2045 2787",

  whatsappNumber: "8617520452787",

  whatsapp:
    "https://wa.me/8617520452787?text=Hello%20I%20want%20to%20inquire%20about%20pajama%20manufacturing",

  wechat: "+86 17520452787",

  experience: "15+ Years",

  address:
    "Unit B502, Tower A1, Bairui Da Building, Banxuegang Avenue, Vanke City Community, Bantian Subdistrict, Longgang District, Shenzhen, Guangdong Province, China",

  image:
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=80"
};

/* ========================================
   NAVIGATION
   label 和 title 同时保留，兼容现有组件
======================================== */

export const navItems = [
  {
    href: "/",
    label: "Home",
    title: "Home"
  },
  {
    href: "/about-us",
    label: "About Us",
    title: "About Us"
  },
  {
    href: "/products",
    label: "Products",
    title: "Products"
  },
  {
    href: "/oem-odm-service",
    label: "OEM/ODM Service",
    title: "OEM/ODM Service"
  },
  {
    href: "/factory-quality-control",
    label: "Factory & QC",
    title: "Factory & QC"
  },
  {
    href: "/certificates",
    label: "Certificates",
    title: "Certificates"
  },
  {
    href: "/contact-us",
    label: "Contact Us",
    title: "Contact Us"
  }
];

/* ========================================
   SERVICES
======================================== */

export const services = [
  "OEM Pajama Manufacturing",
  "ODM Pajama Design",
  "Private Label Sleepwear",
  "Custom Pajama Development",
  "Fabric and Trim Sourcing",
  "Sampling and Bulk Production",
  "Quality Inspection",
  "Packaging and Shipping Support"
];

/* ========================================
   CUSTOMER TYPES
======================================== */

export const customers = [
  "Pajama Brands",
  "Wholesalers",
  "Distributors",
  "Importers",
  "E-commerce Sellers",
  "Retail Chains",
  "Startup Brands"
];

/* ========================================
   SEO KEYWORDS
======================================== */

export const targetKeywords = [
  "pajama manufacturer",
  "pajama manufacturer China",
  "custom pajamas",
  "custom pajama factory",
  "private label pajamas",
  "private label sleepwear",
  "OEM pajama manufacturer",
  "ODM pajama factory",
  "sleepwear manufacturer",
  "pajama supplier China",
  "custom sleepwear manufacturer",
  "wholesale pajamas"
];

/* ========================================
   PRODUCTS
======================================== */

export const products = [
  {
    name: "Women Pajamas",
    text:
      "Custom women's pajama sets, robes, camisoles, sleep dresses, and loungewear for private label and wholesale collections.",
    image:
      "https://images.unsplash.com/photo-1532781909635-49b43e18b72b?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Men Pajamas",
    text:
      "Comfortable woven and knitted men's pajama sets with accurate sizing, clean finishing, and custom brand packaging.",
    image: "/images/products/menXY25319-1.jpg"
  },
  {
    name: "Kids Pajamas",
    text:
      "Soft and practical children's sleepwear with customizable fabrics, prints, sizes, labels, and packaging.",
    image:
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Family Matching Pajamas",
    text:
      "Coordinated family pajama collections for Christmas, holiday campaigns, online shops, and seasonal wholesale programs.",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Plus Size Pajamas",
    text:
      "Comfort-focused plus-size pajama and loungewear collections with flexible sizing and private label customization.",
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Satin Pajamas",
    text:
      "Premium satin pajama sets with refined piping, custom colors, personalized prints, labels, and gift-ready packaging.",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Cotton Pajamas",
    text:
      "Breathable cotton sleepwear designed for everyday comfort, wholesale programs, and private label collections.",
    image:
      "https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Loungewear",
    text:
      "Relaxed homewear sets, tops, joggers, robes, and lifestyle collections for modern sleepwear brands.",
    image:
      "https://images.unsplash.com/photo-1506629905607-d405d7d3b0d2?auto=format&fit=crop&w=900&q=80"
  }
];

/* ========================================
   COMPANY STRENGTHS
======================================== */

export const strengths = [
  {
    icon: Factory,
    title: "15+ Years Manufacturing Experience",
    text:
      "Experienced support for pajama development, sampling, cutting, sewing, finishing, inspection, packing, and shipment."
  },
  {
    icon: Scissors,
    title: "Custom OEM & ODM Service",
    text:
      "Flexible customization for fabrics, colors, prints, sizing, trims, labels, packaging, and construction details."
  },
  {
    icon: ClipboardCheck,
    title: "Strict Quality Control",
    text:
      "Inline inspection, measurement checks, workmanship review, final inspection, and packing verification."
  },
  {
    icon: Globe,
    title: "Export-Ready Support",
    text:
      "Support for global brands, wholesalers, distributors, importers, and e-commerce sellers."
  },
  {
    icon: PackageCheck,
    title: "Private Label Packaging",
    text:
      "Custom care labels, brand labels, hangtags, barcode stickers, polybags, cartons, and retail packaging."
  },
  {
    icon: Truck,
    title: "Stable Production & Delivery",
    text:
      "Practical production planning and international shipping coordination for repeat and seasonal orders."
  }
];

/* ========================================
   OEM / ODM PROCESS
======================================== */

export const oemSteps = [
  {
    icon: MessageCircle,
    title: "Inquiry & Product Brief",
    text:
      "Share your target market, product style, fabric preference, quantity, packaging requirements, and delivery schedule."
  },
  {
    icon: PenTool,
    title: "Design Development",
    text:
      "We support tech packs, size charts, trims, color matching, artwork, print placement, and construction details."
  },
  {
    icon: Ruler,
    title: "Sampling",
    text:
      "Fit samples, photo samples, revised samples, and pre-production samples can be arranged before bulk production."
  },
  {
    icon: Boxes,
    title: "Bulk Production",
    text:
      "Fabric preparation, cutting, sewing, finishing, labeling, and packing are managed according to approved specifications."
  },
  {
    icon: PackageCheck,
    title: "Quality Inspection",
    text:
      "Measurements, workmanship, appearance, labels, accessories, and packing are checked before shipment."
  },
  {
    icon: Truck,
    title: "Shipping",
    text:
      "We support carton preparation, export documents, freight coordination, and handover to your shipping partner."
  }
];

/* ========================================
   CERTIFICATES AND COMPLIANCE
======================================== */

export const certificates = [
  {
    icon: BadgeCheck,
    title: "OEKO-TEX Material Support",
    text:
      "Certified fabrics and trims can be sourced upon request for qualified customer programs."
  },
  {
    icon: Award,
    title: "BSCI and Social Compliance",
    text:
      "Factory compliance documentation can be prepared for qualified buyers and audit programs."
  },
  {
    icon: Search,
    title: "AQL Inspection Support",
    text:
      "Inspection reports can cover measurements, appearance, workmanship, labels, packing, and quantities."
  },
  {
    icon: Shirt,
    title: "Fabric Testing",
    text:
      "Composition, shrinkage, color fastness, pilling, and other textile tests can be arranged through testing laboratories."
  },
  {
    icon: Handshake,
    title: "Private Label Documentation",
    text:
      "Brand labels, care labels, hangtags, carton marks, barcode stickers, and packaging details can be customized."
  },
  {
    icon: Users,
    title: "Buyer Audit Cooperation",
    text:
      "We cooperate with customer audits, factory inspections, and third-party quality-control visits."
  }
];

/* ========================================
   ORGANIZATION SCHEMA
======================================== */

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.url}/#organization`,

  name: site.name,
  alternateName: site.shortName,

  url: site.url,
  image: site.image,

  description: site.metaDescription,

  email: site.email,
  telephone: site.phone,

  foundingDate: "2009",

  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Unit B502, Tower A1, Bairui Da Building, Banxuegang Avenue, Vanke City Community, Bantian Subdistrict",
    addressLocality: "Shenzhen",
    addressRegion: "Guangdong",
    addressCountry: "CN"
  },

  areaServed: "Worldwide",

  knowsAbout: targetKeywords,

  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: site.phone,
      contactType: "sales",
      availableLanguage: ["English", "Chinese"],
      areaServed: "Worldwide"
    }
  ],

  sameAs: [site.whatsapp]
};

/* ========================================
   WEBSITE SCHEMA
======================================== */

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,

  url: site.url,
  name: site.name,

  description: site.metaDescription,

  publisher: {
    "@id": `${site.url}/#organization`
  },

  inLanguage: "en"
};

/* ========================================
   SERVICE SCHEMA
======================================== */

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${site.url}/#pajama-manufacturing-service`,

  name:
    "Custom Pajama Manufacturing, OEM, ODM and Private Label Sleepwear Services",

  description: site.metaDescription,

  provider: {
    "@id": `${site.url}/#organization`
  },

  areaServed: "Worldwide",

  serviceType: [
    "Pajama Manufacturing",
    "Custom Pajamas",
    "Private Label Sleepwear",
    "OEM Pajama Manufacturing",
    "ODM Pajama Design",
    "Wholesale Pajamas"
  ],

  offers: {
    "@type": "OfferCatalog",
    name: "Pajama Manufacturing Services",

    itemListElement: services.map((service) => ({
      "@type": "Offer",

      itemOffered: {
        "@type": "Service",
        name: service
      }
    }))
  }
};