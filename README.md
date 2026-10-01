# YASVEO

Website for YASVEO, a creator partnership business that connects brands and creators through relevance, authenticity and shared ambition.

It is a simple, conversion-focused campaign site: a neutral entry page that routes visitors to a Brands or a Creators landing page, each ending in a four-field form. The brand system is built on the YASVEO logo.

## Stack

- Next.js 16 (App Router, TypeScript, React 19)
- Tailwind CSS v4, with design tokens in `src/app/globals.css`
- React Hook Form for the enquiry and application forms
- `next/font` (Lexend Exa, Inter) and `next/image`

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

The site is a campaign-style conversion site. **One section = one message. One page = one conversion goal.**

| Route | Goal | Contents |
| --- | --- | --- |
| `/` | Send the visitor to the right funnel | One headline, one sentence and two routes: "I'm a Brand" and "I'm a Creator". Nothing else |
| `/brands` | A brand submits the enquiry form (`#enquire`) | Hero, "Followers don't tell the whole story", what we look for, three steps, the form, FAQ |
| `/creators` | A creator submits their details (`#join`) | Hero, "The right audience can matter more", why YASVEO, three steps, the form, FAQ |

Before adding a section, ask: does it help the visitor understand the proposition or move toward the form? If not, leave it out. SEO copy belongs on `/brands` and `/creators` (including their FAQs), not on the home page.

**Calls to action.** Each audience page uses one CTA phrase everywhere, set in `src/config/SiteConfig.ts`: **Find creators** on `/brands` and **Join YASVEO** on `/creators`. Both lead to that page's form. Don't introduce other labels ("Learn more", "Get started"). The brand form's submit button reads **Let's talk**.

**Forms.** Both forms have four fields only, to keep friction low. Budget, dates, platforms and similar detail are collected after the first conversation. The creator form deliberately doesn't ask for follower count, because the site's positioning is relevance over follower numbers.

**Copy rules.** No invented campaign figures: the large/smaller following comparison on `/brands` is labelled as an illustration. Nothing on `/creators` promises work, income or acceptance.

## Design system

**Colour tokens** (Tailwind classes such as `bg-mist` and `text-graphite`):

| Token | Value | Use |
| --- | --- | --- |
| `ink` | `#0A0A0A` | Primary text; the dark section on each audience page; the footer |
| `white` | `#FFFFFF` | Main background |
| `mist` | `#F4F4F3` | Light grey alternate section ("How it works") |
| `graphite` | `#3A3A3A` | Supporting copy |
| `muted` | `#5E5E5E` | Hints and captions |
| `accent` | `#AB4522` | Terracotta. Every primary CTA, plus focus rings, eyebrow rules and step numbers |
| `accent-hover` | `#8E3719` | Hover state for the accent |
| `accent-light` | `#E48A64` | The accent as text on ink |
| `accent-wash` | `#F9EEE9` | Pale accent behind the form section |
| `error` | `#B3261E` | Form errors |

The accent's job is to guide attention, so it stays off large areas other than the CTAs and the form wash.

**Type:** two faces only.

- **Lexend Exa** for headings, navigation, buttons and small labels (`display-*`, `heading-*`, `eyebrow`, `label-nav`, `label-button`). Its wide, geometric forms echo the logo's lettering.
- **Inter** for body copy and form fields (`body-lg` and the base text).

There is no serif and no italic emphasis device.

**Imagery:** one photo per audience page (the hero) and none on the home page. Don't add an image to fill space.

**Motion:** hover transitions only. There are no scroll reveals or entrance animations.

**Corners:** 2px throughout (`rounded-xs`), to match the logo's crisp geometry.

**Shared patterns:**

- `ButtonLink` / `Button`: the one CTA style, a solid terracotta button.
- `PageHero`: eyebrow, `h1`, one sentence, the CTA and the page's photo.
- `SectionIntro`: eyebrow, heading and optional copy.
- `PointsSection`: a heading and three plain points in a row. Used for "what we look for" and, with `numbered`, for "how it works".
- `FormLayout`: the intro beside the form card, on the accent wash.
- `Faq`: native `<details>` questions with `FAQPage` structured data.

## Project structure

```text
src/
  app/                   Routes, metadata, sitemap, robots, icons
  sections/<Page>/       Page-specific sections: Home/AudienceRouter, Brands/FollowerStory, Creators/RightAudience
  components/<Name>/     Shared UI: PageHero, Section, SectionIntro, PointsSection, Faq, Button, Photo, Logo,
                         FormLayout, FormControls, BrandEnquiryForm, CreatorApplicationForm
  layout/                Header and Footer
  content/               Page copy (points, steps, FAQs), the image catalogue, form fields
  config/SiteConfig.ts   Business name, tagline, domain, email, social links, navigation, CTA labels
  services/              Form submission boundary
  types/                 Shared types
  utils/Utils.ts         Pure helpers (metadata, paths, structured data)
public/brand/            Logo files (SVG mark and wordmark, original JPG)
```

## Common changes

- **Business details** (domain, email, social profiles): `src/config/SiteConfig.ts`. The footer and structured data pick up the email and social links automatically once they're set.
- **CTA labels and targets:** `brandAction` and `creatorAction` in `src/config/SiteConfig.ts`.
- **Page copy:** hero and section headings are in `src/app/brands/page.tsx` and `src/app/creators/page.tsx`; points, steps and FAQs are in `src/content/`.
- **Images:** the two photos are listed in `src/content/Images.ts`. Replace a `src` (for example `/images/hero.jpg` in `public/`) and update its `alt`. The current images are Unsplash placeholders.
- **Form fields:** labels, placeholders and validation are in `src/content/FormFields.ts`. Think twice before adding a field: add it to the values type in `src/types/forms.ts`, then to `FormFields.ts`, then render it in the form component. Submitted emails pick up the label automatically.
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
