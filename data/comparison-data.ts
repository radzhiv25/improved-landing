export interface ComparisonRow {
  criteria: string;
  propsoch: string;
  other: string;
}

/** Rows when "Online Portals" tab is selected */
export const ONLINE_PORTALS_ROWS: ComparisonRow[] = [
  { criteria: "Information Depth", propsoch: "80+ data points", other: "20-40 data points" },
  { criteria: "Transparency", propsoch: "Detailed pros & cons", other: "Only pros highlighted" },
  { criteria: "Data Accuracy", propsoch: "Verified by architects", other: "Loose verification" },
  { criteria: "Service Validity", propsoch: "Till you find your home", other: "Based on no. of contacts" },
  { criteria: "Data Sources", propsoch: "RERA, GMaps, CDP etc.", other: "Added by developer & broker" },
];

/** Rows when "Local brokers" tab is selected */
export const LOCAL_BROKERS_ROWS: ComparisonRow[] = [
  { criteria: "Sales Practices", propsoch: "Consultative, no pressure", other: "High pressure sales tactics" },
  { criteria: "Transparency", propsoch: "Detailed pros & cons", other: "Only pros highlighted" },
  { criteria: "Project Curation", propsoch: "Based on 20+ factors", other: "Not curated" },
  { criteria: "Spam", propsoch: "No spam", other: "High spamming until closure" },
  { criteria: "Post sales support", propsoch: "End-to-end support", other: "None" },
  { criteria: "Site Visits", propsoch: "Assisted by on-ground market experts", other: "No market expertise" },
  { criteria: "Negotiation", propsoch: "High leverage via insights", other: "No insights to leverage" },
  { criteria: "In-Depth Reports", propsoch: "2 complimentary Peace of Mind Reports", other: "None" },
  { criteria: "Advisor", propsoch: "Trained architects", other: "Local sales people" },
];

export type CompareWith = "online-portals" | "local-brokers";
