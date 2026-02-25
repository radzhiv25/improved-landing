export interface GuideCard {
  id: string;
  label: string;
  title: string;
  description: string;
  imageSrc: string;
  href?: string;
}

/** Replace imageSrc with your CloudFront or CMS URLs when available */
export const GUIDE_CARDS: GuideCard[] = [
  {
    id: "1",
    label: "Blog",
    title: "2025 Bangalore Real Estate",
    description:
      "Explore micro-markets, price trends & upcoming hotspots.",
    imageSrc: "https://placehold.co/400x240/f0f4f0/666?text=2025+Bangalore",
  },
  {
    id: "2",
    label: "Blog",
    title: "Home Buying Checklist",
    description:
      "Navigate the home buying journey with confidence - from property search to final paperwork.",
    imageSrc: "https://placehold.co/400x240/f5f5f5/666?text=Checklist",
  },
  {
    id: "3",
    label: "Blog",
    title: "Home Buying Guide 101",
    description:
      "Track your purchase journey with an essential checklist of documents, inspections, and key milestones",
    imageSrc: "https://placehold.co/400x240/fff8f0/666?text=Guide+101",
  },
];
