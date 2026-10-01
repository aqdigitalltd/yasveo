# YASVEO

Website for YASVEO, a creator partnership business that connects brands and creators through relevance, authenticity and shared ambition.

It is a simple, conversion-focused campaign site: a neutral entry page that routes visitors to a Brands or a Creators landing page, each ending in a four-field form. The brand system is built on the YASVEO logo, with warm neutrals, one rust accent and no photography.

## Stack

- Next.js 16 (App Router, TypeScript, React 19)
- Tailwind CSS v4, with design tokens in `src/app/globals.css`
- React Hook Form for the enquiry and application forms
- `next/font` (Lexend Exa, Inter)

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
| `/` | Send the visitor to the right funnel | One headline, one sentence and two route buttons, one solid and one outlined: "I'm a Brand" and "I'm a Creator". Nothing else |
| `/brands` | A brand submits the enquiry form (`#enquire`) | Hero, "Followers don't tell the whole story", Audience / Attention / Relevance, three steps, the form, FAQ |
| `/creators` | A creator submits their details (`#join`) | Hero, "The right audience can matter more", "Work with brands that fit", three steps, the form, FAQ |

Before adding a section, ask: does it help the visitor understand the proposition or move toward the form? If not, leave it out. When a page feels thin, add useful copy **inside** an existing section rather than adding a section: five sections with substance beat nine with a sentence each. SEO copy belongs on `/brands` and `/creators` (including their FAQs), not on the home page.

**The home page is neutral.** It is the entry point before we know who the visitor is, so its headline and copy must speak to brands and creators equally. Test any change with both questions: "If I'm a brand, does this speak to me?" and "If I'm a creator, does this speak to me?"

**Calls to action.** Each audience page uses one CTA phrase everywhere, set in `src/config/SiteConfig.ts`: **Find creators** on `/brands` and **Join YASVEO** on `/creators`. Both lead to that page's form. Don't introduce other labels ("Learn more", "Get started"). The brand form's submit button reads **Let's talk**.

**Forms.** Both forms have four fields only, to keep friction low. Budget, dates, platforms and similar detail are collected after the first conversation. The creator form deliberately doesn't ask for follower count, because the site's positioning is relevance over follower numbers.

**Copy rules.** No invented campaign figures: the large/smaller following comparison on `/brands` is labelled as an illustration. Nothing on `/creators` promises work, income or acceptance.

## Design system

Warm neutrals with one accent. The hierarchy:

- **Near-black:** the logo, primary type, the dark section on each audience page and the footer.
- **Charcoal:** supporting text.
- **Warm bone and paper:** backgrounds and surfaces.
- **Rust:** interaction and emphasis (CTAs, borders, focus states, small highlights) and the background line work.

**Colour tokens** (Tailwind classes such as `bg-paper` and `text-charcoal`):

| Token | Value | Use |
| --- | --- | --- |
| `ink` | `#0A0A0A` | Primary text; the dark section; the footer |
| `charcoal` | `#343434` | Supporting copy |
| `muted` | `#5E5E5E` | Hints and captions |
| `bone` | `#F7F6F3` | The page background |
| `paper` | `#EFEEEA` | Warm alternate section ("How it works") |
| `white` | `#FFFFFF` | Form fields, the form card and outlined CTAs |
| `accent` | `#C24E22` | Rust: CTAs, button borders, focus, eyebrow and point rules, the line work |
| `accent-deep` | `#A8401A` | Hover on solid CTAs; small accent text on bone or paper (step numbers) |
| `accent-light` | `#F0936B` | The accent as text and rules on the dark section |
| `accent-soft` | `#FBEEE8` | Pale tint behind the form section |
| `error` | `#B3261E` | Form errors |

**One accent, and it belongs to YASVEO.** Brands and creators do not get their own colours. A darker terracotta (`#AB4522`), a deep navy, and separate creator colours in teal and indigo were all tried and dropped.

**Calls to action:**

- **Home page routes:** two large buttons, not cards. "I'm a Brand" is solid rust; "I'm a Creator" is white with a rust border and text, filling on hover.
- **Primary CTA** (both audience pages, identical): solid rust with white text; hover darkens to `accent-deep`.
- **Outline** (`variant="outline"`): only beside a solid button as the second choice (the home page and the 404). Don't add secondary buttons otherwise.
- **Form focus:** rust border with a faint rust ring.

**Type:** two faces only.

- **Lexend Exa** for headings, navigation, buttons and small labels (`display-*`, `heading-*`, `eyebrow`, `label-nav`, `label-button`). Its wide, geometric forms echo the logo's lettering.
- **Inter** for body copy and form fields (`body-lg` and the base text).

There is no serif and no italic emphasis device.

**Imagery:** there is no photography anywhere on the site, by client request. Personality comes from the type, the logo, the accent, spacing and the line work below.

**Line work:** `ConnectionLines` draws faint SVG curves in the accent behind selected light sections: lines that move toward each other and meet, for brands and creators coming together. It is used on the three heroes (`converge`) and in the bottom padding of "How it works" (`flow`). Keep it to those: it is decoration at watermark strength and must never sit behind body copy.

**Motion:** hover transitions only. There are no scroll reveals or entrance animations.

**Corners:** 4px on every CTA (`rounded-sm`: buttons and the home page routes); 2px on form fields and the form card (`rounded-xs`).

**Shared patterns:**

- `ButtonLink` / `Button`: the CTA, a solid rust button, with an `outline` variant and an `lg` size for the home page (see Calls to action).
- `PageHero`: centred eyebrow, `h1`, supporting copy, the CTA and a line of reassurance.
- `SectionIntro`: eyebrow, heading and optional copy.
- `FollowerComparison`: the dark section on each audience page, arguing that follower count isn't enough, with a two-column comparison.
- `PointsSection`: a heading and three points in a row, each with two or three sentences. Used for "what matters" and, with `numbered`, for "how it works".
- `FormLayout`: the intro beside the form card, on the soft accent tint.
- `Faq`: questions that slide open (`FaqItem`, a button and a grid-row transition), with `FAQPage` structured data. Answers are always in the HTML.

## Project structure

```text
src/
  app/                   Routes, metadata, sitemap, robots, icons
  sections/Home/         AudienceRouter, the home page's one section
  components/<Name>/     Shared UI: PageHero, Section, SectionIntro, FollowerComparison, PointsSection, Faq, Button,
                         ConnectionLines, Logo, FormLayout, FormControls, BrandEnquiryForm, CreatorApplicationForm
  layout/                Header and Footer
  content/               Page copy (comparisons, points, steps, FAQs) and form fields
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
- **Form fields:** labels, placeholders and validation are in `src/content/FormFields.ts`. Think twice before adding a field: add it to the values type in `src/types/forms.ts`, then to `FormFields.ts`, then render it in the form component. Submitted emails pick up the label automatically. Each field reserves one line for its error message so the form doesn't jump, so keep messages short enough to fit on a phone.
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

**Going live later:** run a plain `npm run build` with `NEXT_PUBLIC_SITE_URL` set to the real domain, leave `NEXT_PUBLIC_BASE_PATH` empty and set `NEXT_PUBLIC_ALLOW_INDEXING=true`. Then deploy `out/` to the chosen host.
