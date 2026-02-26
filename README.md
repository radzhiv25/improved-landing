# Propsoch Landing Page (Improved)

An improved version of the [Propsoch](https://www.propsoch.com/) landing page, built with Next.js, TypeScript, and Tailwind CSS. The redesign is based on a UX/UI analysis of the original site—see **[Propsoch Landing Page Analysis](https://docs.google.com/document/d/1WlflT17DXphQcRQ-Gt2IGxAjZtgHyMTPuv8VTIn2xrU/edit?usp=sharing)** (Google Doc) and the summary below.

## What We Improved and Why

So far the improvements focus on **the hero section and animations**. The rest of the landing (sections below) already existed and has not been added as part of this redesign.

### Hero (redesigned)

- **Hero section**
  - Clear hierarchy: subline (“STOP WASTING…”) → main headline with shimmer → supporting copy and city selector.
  - **City selection (Issue #1):** Added microcopy (“Select your city”, “We’re currently available in these cities only”) so users understand why they’re choosing a city and what they get.
  - Primary CTA: “Book An Appointment”; secondary: “Already a member? Login.”
  - **Founder video:** “Hear from our founders” opens a centered dialog (60% viewport) with embedded video.
- **Stats strip** (“Trusted by 1000+…”) with count-up on scroll for social proof.
- **Value proposition** (dark section) with “Guided Home Buying” card, six benefit points, and clear CTAs.

### Animations and micro-interactions

- **Motion (Issue #5):** Hero headline shimmer; hover states on cards and buttons (scale, opacity) for clearer feedback.
- No new full-page sections have been added yet—improvements are hero + animations first.

### Landing page structure (existing sections)

The page already includes these sections (unchanged by the current redesign):

- **Testimonials** – Carousel with auto-advance and count-up in the headline.
- **Guided Home Buying (GHB) steps** – Horizontal carousel with stages, videos, and prev/next controls.
- **Comparison** – “What makes us different?” with toggle (Online Portals vs Local brokers) and comparison table.
- **Insights** – Accordion with video panel and light gray card; gradient CTA banner.
- **Ancillary services** – Six cards (Home Loan, Legal, Tax, etc.) with hover scale and gradient treatment.
- **CTA banner** – “Experience delightful home buying…” with Dream Home / Happy Family visuals and “Book An Appointment.”
- **Guides & Community** – Three blog-style cards plus Hometrust Collective block with a heavier peach/orange gradient; primary CTA “Join Bangalore community,” secondary outline “Join Mumbai community” with hover state.
- **FAQ** – Tabs, accordion answers, and “Still have questions?” banner with “Book Free Appointment.”
- **Propsoch overview** – Collapsible “More details about Bangalore & Mumbai Real estate from Propsoch” above the footer.
- **Footer** – Brand, intro line, links (developers, areas, filters), legal, social icons, and half-blended “Propsoch” watermark.

### Additional sections (possible future additions)

- **Fair price calculator** – A new section could be added to help users estimate a fair price for a property (e.g. input address or project, see a range or score).
- **Property reviews** – A section where buyers share their review along with an image of the property they bought using Propsoch, for stronger social proof and trust.

### Responsive design

- Layouts and typography tuned for mobile and desktop (breakpoints, stacking, spacing).
- Hide-scrollbar utility for horizontal tab strips (e.g. FAQ, city selector) so they scroll without a visible scrollbar on small screens.

### Performance and assets

- **Images:** `next/image` with CloudFront and placehold.co in `next.config` for optimized loading and correct domains.
- **Fonts:** Geist, Archivo, Pacifico loaded via Next.js for better performance.

### Accessibility and interaction

- **Navbar (Issue #2):** Icon buttons (Search, Share, Favorites) use `aria-label` and tooltips so purpose is clear without visible text.
- **Focus and outlines:** Focus rings removed from accordion triggers and secondary controls (FAQ, Insights, Propsoch overview) to avoid distracting outlines while keeping `focus:outline-none` for consistency.
- **Semantics:** FAQ uses proper tab/panel roles and `aria-expanded` on accordion triggers; sections use clear headings and landmarks.

### Visual and consistency

- **Theme:** Dark mode disabled so the app always uses the light theme and avoids contrast/readability issues from system dark mode (Issue #4).
- **Contrast:** Primary text uses darker neutrals (e.g. `#292D32`, `#66677E`, `primary-foreground`) for better readability; orange is used for accents and CTAs.
- **Motion (Issue #5):** Hero headline uses a subtle shimmer; cards and buttons use hover (e.g. scale, opacity) for feedback without heavy animation.

### Tech stack

- **Next.js 16** (App Router), **TypeScript**, **Tailwind CSS v4**
- Sections are componentized with shared data files for content (e.g. `data/faq-data.ts`, `data/footer-data.ts`, `data/guides-data.ts`).

---

## Propsoch Landing Page Analysis

**[Analysis document](https://docs.google.com/document/d/1WlflT17DXphQcRQ-Gt2IGxAjZtgHyMTPuv8VTIn2xrU/edit?usp=sharing)** (Google Doc)

**Lighthouse scores (original site):** Performance 99, Accessibility 77, Best Practices 54, SEO 100.

**Five UX/UI issues addressed:**

1. **Unclear city selection in hero** – Added explanatory microcopy and clearer hierarchy for the city selector.
2. **Navbar icons lack clear meaning** – Added `aria-label` and tooltips for Search, Saved, Share.
3. **Conflicting CTAs in community section** – Hometrust Collective has supporting copy; city CTAs are now primary (Bangalore) and secondary (Mumbai) with a clear hover state.
4. **Poor text contrast** – Light theme only; darker text colors for body and headings.
5. **Lack of meaningful animation** – Shimmer on hero headline; hover states on cards and buttons.

---

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
