# Caltech Design Studio — Website

A bespoke website for **Caltech Design Studio**, Kolkata — covering modern interior design (residential, commercial, office, café, hospitality) and heritage restoration practice.

Built with **Next.js 14 · React 18 · TypeScript · Tailwind CSS · Framer Motion · GSAP (ScrollTrigger) · React Three Fiber · Lenis (smooth scroll)**.

---

## Quick start

```bash
# install
npm install

# dev server (http://localhost:3000)
npm run dev

# production build
npm run build && npm start
```

## Project structure

```
app/
  layout.tsx              — root layout, fonts, nav, footer, smooth scroll
  page.tsx                — home (hero · marquee · services · slider · heritage strip · philosophy · CTA)
  interiors/              — interior practice + horizontal work slider
  heritage/               — heritage restoration + horizontal timeline of crafts
  gallery/                — filterable masonry gallery + lightbox
  about/                  — studio story, team, equipment
  contact/                — contact form (Web3Forms)
components/               — Hero, Nav, Footer, Marquee, ServicesDuo, SignatureSlider,
                            HeritageStrip, Philosophy, CTA, AmbientCanvas (Three.js),
                            PageHero, SmoothScroll, SectionHeader
data/
  gallery.json            — auto-generated image manifest (paths, dims, category)
public/
  brand/                  — logo (full + small)
  gallery/                — 36 curated, optimized interior photos
  heritage/               — 6 heritage notebook spreads (from C_profile.pdf)
```

## Contact form (Web3Forms)

The contact form posts to **[Web3Forms](https://web3forms.com)** — no backend needed.

1. Sign up at https://web3forms.com (free).
2. Create an access key.
3. Add it to `.env.local`:

   ```
   NEXT_PUBLIC_WEB3FORMS_KEY=your_access_key_here
   ```

4. Add the same env var on Vercel: **Project → Settings → Environment Variables**.

If the key is not set, the form runs in **preview mode** — it shows the success state without actually delivering, so you can demo the site safely.

## Deploying to Vercel

```bash
# from inside caltech-design-studio/
npx vercel
```

Or push the `caltech-design-studio` folder to GitHub and import the repo at https://vercel.com/new. Vercel auto-detects Next.js — no config needed.

After the first deploy:

- Add the **NEXT_PUBLIC_WEB3FORMS_KEY** environment variable.
- (Optional) attach a custom domain.

## Design system

| Token        | Value                              |
|--------------|------------------------------------|
| Background   | `#0a0a0a` (ink-900)                |
| Foreground   | `#faf7f2` (bone-50)                |
| Accent gold  | `#c9a14a` → `#dfbe5b` (gradient)   |
| Heritage red | `#c25b3a` (terracotta-500)         |
| Display font | **Fraunces** (serif, variable)     |
| Body font    | **Inter** (sans)                   |

## Animation stack

- **GSAP + ScrollTrigger** — pinned horizontal slider (home + heritage timeline), text reveal, philosophy line opacity scrub.
- **Framer Motion** — page-level entrance animations, mobile menu, lightbox transitions, gallery layout shifts.
- **React Three Fiber** — ambient gold particles + slow-spinning torus behind the hero.
- **Lenis** — buttery smooth scroll across the whole site.

## Editing content

- **Gallery images** → drop new optimised JPGs (≤2000px, ≤500KB) into `public/gallery/` and add an entry to `data/gallery.json`.
- **Heritage register / team / works lists** → edit the inline arrays in `app/heritage/page.tsx` and `app/about/page.tsx`.
- **Hero copy** → `components/Hero.tsx` (the four-line headline is split intentionally for line-by-line reveal).

## Performance notes

- All gallery images are pre-optimised (max 2000px, progressive JPEG).
- Next.js `<Image>` handles responsive sizes + AVIF/WebP fallback.
- The Three.js ambient layer is dynamically imported (no SSR), and uses ~280 particles with `dpr: [1, 1.5]` to stay light on mobile.
- Production bundle: home page ≈ 400 kB total JS (first load).

---

Crafted with care in Kolkata.
