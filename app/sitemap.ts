import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";
import { navItems, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const productsDirectory = path.join(process.cwd(), "public", "images", "products");
  const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);
  const productImages = fs.existsSync(productsDirectory)
    ? fs
        .readdirSync(productsDirectory)
        .filter((file) => imageExtensions.has(path.extname(file).toLowerCase()))
        .map((file) => `${site.url}/images/products/${file}`)
    : [];

  return navItems.map((item) => {
    const url = `${site.url}${item.href === "/" ? "" : item.href}`;
    const isHome = item.href === "/";
    const isProducts = item.href === "/products";

    return {
      url,
      lastModified: new Date(),
      changeFrequency: isHome || isProducts ? "weekly" : "monthly",
      priority: isHome ? 1 : isProducts ? 0.9 : 0.8,
      images: isProducts ? productImages : undefined
    };
  });
}
