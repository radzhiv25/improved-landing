const VIDEO_BASE =
  "https://d1zk2x7mtoyb2b.cloudfront.net/websiteAssets/landing-page";

export interface InsightItem {
  id: string;
  number: number;
  title: string;
  description: string;
  videoSrc: string;
}

export const INSIGHTS: InsightItem[] = [
  {
    id: "1",
    number: 1,
    title: "Floor Plan Analysis",
    description:
      "See every floor plan's design, privacy, efficiency & compare with peer projects",
    videoSrc: `${VIDEO_BASE}/insights-video-1.mp4`,
  },
  {
    id: "2",
    number: 2,
    title: "Lighting & Ventilation",
    description:
      "Understand natural light, airflow and livability across layouts",
    videoSrc: `${VIDEO_BASE}/insights-video-1.mp4`,
  },
  {
    id: "3",
    number: 3,
    title: "Flood & Air Quality Risk",
    description:
      "Location-based risk insights for floods and air quality",
    videoSrc: `${VIDEO_BASE}/insights-video-1.mp4`,
  },
  {
    id: "4",
    number: 4,
    title: "Future Development",
    description:
      "Planned infrastructure and development impact on your property",
    videoSrc: `${VIDEO_BASE}/insights-video-1.mp4`,
  },
  {
    id: "5",
    number: 5,
    title: "Investment Potential",
    description:
      "Data-driven view on appreciation and rental potential",
    videoSrc: `${VIDEO_BASE}/insights-video-1.mp4`,
  },
  {
    id: "6",
    number: 6,
    title: "Cost Sheet Breakdown",
    description:
      "Transparent cost breakdown and comparison with market",
    videoSrc: `${VIDEO_BASE}/insights-video-1.mp4`,
  },
];
