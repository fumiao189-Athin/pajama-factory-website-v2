# Fu Miao Pajama Factory Website - Decorated Build

## What changed
- Replaced the simple homepage with a full B2B pajama factory homepage.
- Added FM Pajamas logo, favicon, real product/factory/QC images.
- Added product category sections, OEM/ODM process, factory & QC sections, FAQ and inquiry CTA.
- Rebuilt Products, About, OEM/ODM, Factory & QC, Certificates, Contact pages.
- Added Privacy Policy and Terms of Use pages.
- Added social media links and Alibaba link.
- Kept the existing Google Apps Script CRM endpoint for form submissions and tracking.
- WhatsApp links use the verified full WhatsApp URL.
- Build tested successfully with `npm run build`.

## Next steps for deployment
1. Replace your local project files with this package, or copy these files into your existing repository.
2. Run `npm install` if `node_modules` is missing.
3. Run `npm run dev` to preview locally.
4. Run `npm run build` to verify.
5. Commit and push to GitHub.
6. Vercel will redeploy automatically.

## Notes
- Current production URL in `lib/site.ts` is `https://pajama-factory-website-v2.vercel.app`.
- After buying a custom domain, update `site.url` in `lib/site.ts`, then redeploy.
- The website uses tracking and CRM form submission through the existing Apps Script URL in `components/Tracking.tsx`.
