const VIDEO_BASE =
  "https://d1zk2x7mtoyb2b.cloudfront.net/websiteAssets/product-page";

export interface GHBStep {
  id: string;
  stage: string;
  title: string;
  bullets: string[];
  videoSrc: string;
}

export interface CheckingFactor {
  label: string;
  value: string;
  /** If set, value is numeric and we animate to this number; suffix shown after (e.g. "K Sqft", "%") */
  animateValue?: number;
  suffix?: string;
}

export const GHB_STEPS: GHBStep[] = [
  {
    id: "1",
    stage: "Stage 1 - Discovery",
    title: "Tell us about you & your ideal home",
    bullets: [
      "You can start with the location, budget & purpose",
      "We'll help prioritise your family's top deal-breakers",
      "We'll dig deeper on past homes to tailor the search",
    ],
    videoSrc: `${VIDEO_BASE}/ghb-1.mp4`,
  },
  {
    id: "2",
    stage: "Stage 2 - Shortlisting",
    title: "Cherry-pick from curated options",
    bullets: [
      "Explore homes sorted by location, builder & budget",
      "Get insights on areas, return potential & floor plans",
      "Cherry-pick the ones you like & book guided visits",
    ],
    videoSrc: `${VIDEO_BASE}/ghb-2.mp4`,
  },
  {
    id: "3",
    stage: "Stage 3 - Site visits",
    title: "Visit sites with our market wizards",
    bullets: [
      "Assess the project, builder & areas with our wizards",
      "Get latest pricing, availability, offers & legal terms",
    ],
    videoSrc: `${VIDEO_BASE}/ghb-3.mp4`,
  },
  {
    id: "4",
    stage: "Stage 4 - Analysis",
    title: "Foresee design, legal & financial risks",
    bullets: [
      "Lighting & Ventilation / Vastu Analysis",
      "Builder Pedigree / Construction Delays",
      "Hidden Costs / Legal Troubles",
    ],
    videoSrc: `${VIDEO_BASE}/ghb-4.mp4`,
  },
  {
    id: "5",
    stage: "Stage 5 - Negotiation",
    title: "Negotiate & seal the deal confidently",
    bullets: [
      "Negotiate on your behalf.",
      "Secure the best possible offer.",
      "Ensure you book with total peace of mind.",
    ],
    videoSrc: `${VIDEO_BASE}/ghb-5.mp4`,
  },
  {
    id: "6",
    stage: "Stage 6 - Home sweet Home",
    title: "Connect with financial & legal experts",
    bullets: [
      "Title and encumbrance checks",
      "Agreement reviews",
      "Loan offers & more",
    ],
    videoSrc: `${VIDEO_BASE}/ghb-6.mp4`,
  },
];

export const CHECKING_FACTORS: CheckingFactor[] = [
  { label: "Scale of project", value: "Large" },
  { label: "Carpet area efficiency", value: "High" },
  { label: "Investment potential", value: "Medium" },
  { label: "Clubhouse size", value: "50K Sqft", animateValue: 50, suffix: "K Sqft" },
  { label: "Vastu compliance", value: "50%", animateValue: 50, suffix: "%" },
  { label: "Metro connectivity", value: "—" },
];
