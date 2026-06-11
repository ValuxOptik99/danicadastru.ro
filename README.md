# DANI Cadastru — Website Cadastru & Topografie

Next.js 14 website for DANI Cadastru (VIBE DESIGN GLOW SRL), an ANCPI-accredited Romanian surveying company.

## Stack
- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** with custom brand palette
- **Framer Motion** for scroll animations
- **shadcn/ui** components (Radix primitives)
- **react-hook-form + zod** for form validation
- **lucide-react** for icons

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint    # ESLint
```

## Project structure

```
app/
  layout.tsx                      # Root layout, Inter font, JSON-LD
  page.tsx                        # Homepage
  servicii/                       # Services pages
  localitati/                     # All 42 county capitals (tab UI)
  proiecte/                       # Projects portfolio
  despre-noi/                     # About page
  contact/                        # Contact page
  obtine-cadastru-ancpi/          # ANCPI integration (coming soon)
  actions/contact.ts              # Server action stub for form
  sitemap.ts / robots.ts          # Auto-generated SEO files

components/
  layout/   Navbar + Footer
  sections/ All homepage sections
  ui/       shadcn/ui primitives
  shared/   SectionHeading, GradientText, AccreditedBadge

lib/
  data/     services.ts, projects.ts, counties.ts
  utils.ts  cn() helper

public/
  logo/VDlogo.png
```

## What can be added later
- **Form backend** — wire `submitContactForm` in `app/actions/contact.ts` to Resend / SendGrid / Nodemailer
- **ANCPI integration** — replace the "coming soon" card with real API calls to ANCPI / eRol
- **CMS for projects** — connect to Sanity / Contentful for project data
- **Per-city dynamic routes** — `/localitati/[slug]/page.tsx` ready for full SSG at scale
- **Analytics** — add GA4 or Plausible in `app/layout.tsx`
- **WhatsApp floating button** — add a fixed `<a href="https://wa.me/...">` component
- **Testimoniale** — static data file in `/lib/data/testimonials.ts`
