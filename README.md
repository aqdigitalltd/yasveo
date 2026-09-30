# YASVEO

Website for YASVEO, a creator partnership business that connects brands and creators through relevance, authenticity and shared ambition.

The visual direction is the approved **Concept 2 (Premium Minimal)** from `influence-agency-concepts`, developed into a brand system built on the YASVEO logo.

## Stack

- Next.js 16 (App Router, TypeScript, React 19)
- Tailwind CSS v4, with design tokens in `src/app/globals.css`
- React Hook Form for the enquiry and application forms
- `next/font` (Urbanist, Lexend Exa, Instrument Serif) and `next/image`

## Getting started

```bash
npm install
cp .env.example .env.local   # optional locally
npm run dev                  # http://localhost:3000
```

| Script | Purpose |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Static export to `out/` |
| `npm run build:pages` | GitHub Pages preview build to `docs/` |
| `npm run preview` | Serve `out/` locally (build first) |
| `npm run lint` | ESLint |

### Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Full public address, including any GitHub Pages path, for canonical URLs, the sitemap, robots and structured data. Defaults to `https://www.yasveo.com`. |
| `NEXT_PUBLIC_BASE_PATH` | Path the site is served from (`/yasveo` for the GitHub Pages preview; empty for a custom domain). |
| `NEXT_PUBLIC_ALLOW_INDEXING` | `false` adds `noindex` and disallows crawling. `npm run build:pages` sets this. |

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home: what we do, the fit proposition, the Brand and Creator routes, how it works, and a final CTA |
| `/brands` | Why fit matters, how it works, what we handle, and the enquiry form (`#enquire`) |
| `/creators` | What we look for, how it works, our promise, and the application form (`#apply`) |

## Design system

The site keeps Concept 2's premium feel but puts comprehension first. Each section answers one question: an eyebrow, one heading, short copy and, where it makes sense, one action.

**Colour tokens** (Tailwind classes such as `bg-mist` and `text-graphite`):

| Token | Value | Use |
| --- | --- | --- |
| `ink` | `#0A0A0A` | Primary text; dark sections, the footer |
| `charcoal` | `#1E1E1E` | Dark hover states; an alternate dark section |
| `white` | `#FFFFFF` | Main background |
| `mist` | `#F4F4F3` | Light grey alternate sections and cards |
| `graphite` | `#3A3A3A` | Supporting copy |
| `muted` | `#5E5E5E` | Hints and captions |
| `accent` | `#AB4522` | Muted terracotta, used sparingly: CTA underlines, eyebrow dashes, checks, focus |
| `accent-hover` | `#8E3719` | Hover state for the accent |
| `accent-light` | `#E48A64` | The accent on ink and charcoal |
| `error` / `success` | `#B3261E` / `#3D6B3A` | Form states |

**Type:**

- **Headings:** Lexend Exa Light (`display-*`, `heading-*`). Its wide, geometric forms echo the logo's lettering.
- **Body copy:** Urbanist (`body-lg` and the base text), for readability.
- **Labels, navigation and buttons:** Lexend Exa, via `eyebrow`, `label-nav` and `label-button`.
- **Emphasis:** Instrument Serif italic stays as the Concept 2 device. Wrap the key phrase of a heading in `<em>`, at most once per heading:

```tsx
<h2 className="display-md">
  A bigger audience isn&apos;t always <em>a better one.</em>
</h2>
```

**Calls to action:**

- **Links:** Concept 2's underlined links (`ButtonLink`). A 2px terracotta underline sweeps away on hover while the arrow moves on. `variant="secondary"` gives a grey underline, and `size="sm"` is the header version.
- **Form submits:** these stay solid black rectangles (`Button`), so they read unmistakably as buttons.
- **Corners:** 2px throughout (`rounded-xs`), to match the logo's crisp geometry.

**Shared patterns:**

- `PageHero`: copy and actions beside Concept 2's overlapping photo pair (main and inset) with a "Fig. 0x" caption. The serif line of the headline is indented on desktop.
- `SectionIntro`: eyebrow, heading and copy. Left-aligned intros carry Concept 2's hairline across the row.
- `HowItWorks`: three steps with serif italic numerals (i. ii. iii.), identical on every page.
- `CheckList`
- `FormLayout`: a grey section with the form in a white card.

**Motion** is limited to the hero entrance and a curtain lift on a few key photos (hero pair, route cards, "What we look after"). It's disabled for reduced motion.

## Project structure

```text
src/
  app/                   Routes, metadata, sitemap, robots, icons, social images
  sections/<Page>/       Page-specific editorial compositions (Home, Brands, Creators)
  components/<Name>/     Shared UI: PageHero, Section, SectionIntro, HowItWorks, CheckList, Button,
                         Photo, Logo, FormLayout, FormControls, BrandEnquiryForm, CreatorApplicationForm
  layout/                Header (with mobile menu) and Footer
  content/               Copy lists, image catalogue, form fields (labels, options, validation)
  config/SiteConfig.ts   Business name, tagline, domain, email, social links, navigation
  services/              Form submission boundary
  hooks/Hooks.tsx        Custom hooks
  types/                 Shared types
  utils/Utils.ts         Pure helpers (metadata, paths, numbering)
public/brand/            Logo files (SVG mark and wordmark, original JPG)
```

## Common changes

- **Business details** (domain, email, social profiles): `src/config/SiteConfig.ts`. The footer and structured data pick up the email and social links automatically once they're set.
- **Images:** all photography is listed in `src/content/Images.ts`. Replace a `src` (for example `/images/hero.jpg` in `public/`) and update its `alt`. The current images are Unsplash placeholders.
- **Form fields:** add the field to the values type in `src/types/forms.ts`, add its label, default and rule in `src/content/FormFields.ts`, then render it in the form component. Submitted emails pick up the label automatically.
- **Connecting the forms:** replace the mock in `src/services/FormDelivery.ts`, the only file that talks to a provider. It receives `{ form, subject, replyTo, fields: [{ label, value }] }`. The comments there sketch EmailJS and server-side alternatives.

## Deployment (GitHub Pages client preview)

The site builds to plain static files (`output: "export"` in `next.config.ts`). For client previews it's published from the `docs/` folder on `main`:

1. Run `npm run build:pages`. This builds the site for `https://ibrahimaq.github.io/yasveo/` and writes it to `docs/`.
2. Commit and push `docs/` along with your changes.
3. First time only: in the repository, go to **Settings → Pages → Build and deployment**, set **Source** to **Deploy from a branch**, then choose **main** and **/docs**.

Re-run `npm run build:pages` and push whenever the preview should update.

What the build does:

- **Base path:** it builds for the `/yasveo/` subpath, so links, fonts and icons work on a project site. If the repository has a different name or owner, update `NEXT_PUBLIC_BASE_PATH` and `NEXT_PUBLIC_SITE_URL` in the `build:pages` script.
- **Hidden from search:** the preview carries `noindex, nofollow` and a disallowing `robots.txt`.
- **`.nojekyll`:** this is included in `docs/` (from `public/`), so GitHub doesn't hide the `_next/` folder.
- **Images:** they use a custom loader (`src/utils/ImageLoader.ts`), because a static host has no image server. Unsplash resizes images through URL parameters.

**Going live later:** run a plain `npm run build` with `NEXT_PUBLIC_SITE_URL` set to the real domain, leave `NEXT_PUBLIC_BASE_PATH` empty and set `NEXT_PUBLIC_ALLOW_INDEXING=true`. Then deploy `out/` to the chosen host.
