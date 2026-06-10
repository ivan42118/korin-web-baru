# PT Korin Technomic — Website

Static company-profile website (English-first).
**Stack:** Astro + TypeScript + Tailwind CSS v4. No CMS, no database.
**Deploy:** Cloudflare Pages (or Netlify / Vercel).

## Develop
```bash
npm install
npm run dev      # http://localhost:4321
```

## Build
```bash
npm run build    # static output in dist/
npm run preview  # preview the build locally
```

## Structure
```
src/
  layouts/BaseLayout.astro   shared <head>, header, footer, scripts
  components/                Header, Footer, PageHeader
  pages/                     one file per route (index.astro = Home)
  styles/global.css          design system (brand tokens + components) + Tailwind
public/                      static assets (put real photos here)
```

## Notes
- Image areas are styled placeholders ("Photo" / "Map + photo"). Replace with real photography (drop files in `public/` and swap the placeholder blocks for `<img>`).
- Brand palette: navy base, blue = brand/trust, red = CTA (red+blue per the Korean identity).
- Home uses the full-bleed cinematic hero; inner pages use a compact page-header (`PageHeader.astro`) with a solid navbar.
- Machine/capacity figures are carried from the old site — re-validate with production before launch.

## Deploy on Cloudflare Pages
- Framework preset: **Astro**
- Build command: `npm run build`
- Output directory: `dist`

## Contact form (Web3Forms)
The contact form posts to [Web3Forms](https://web3forms.com) (free, no backend needed).
1. Create a free access key at https://web3forms.com (it is tied to the email that should receive inquiries).
2. In `src/pages/contact.astro`, replace `REPLACE_WITH_YOUR_WEB3FORMS_ACCESS_KEY` with your key.
That's it — submissions (including file attachments) are emailed to you.
