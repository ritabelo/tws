# The Wild Slice — Website

A first-draft website for The Wild Slice, a handmade dog nutrition brand from Lisboa.

## Stack

- **Next.js 14** (App Router, Static Export)
- **Tailwind CSS** (custom brand palette)
- **Local Fonts**: PoiretOne (display), Mulish (body), SUSEMono (labels)

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, philosophy, featured products, process, how-to-use, CTA |
| About | `/about` | Founder story, values, butcher partnership |
| Products | `/products` | Snack Packs + Bone Broth with ingredients, pricing, WhatsApp CTAs |
| Contact | `/contact` | WhatsApp, Instagram, email, pickup info |

## Design

- **Bilingual EN/PT**: Side-by-side on desktop, stacked on mobile. No language toggle — both languages visible simultaneously.
- **Color palette**: Warm off-white background, charcoal text, sage green accent, stone sections.
- **Photography**: Real butcher shop process photos from `photos raw/process_ingredients/`.

## Build

```bash
cd website
npm install
npm run build
```

Static files are exported to `out/` and ready for Vercel deployment.

## Next Steps

- [ ] Add actual WhatsApp Business number to `WhatsAppButton.tsx`
- [ ] Set up Prismic CMS for blog content
- [ ] Add Google Analytics / Vercel Analytics
- [ ] Optimize images (currently using unoptimized static export)
- [ ] Add Open Graph images for social sharing
