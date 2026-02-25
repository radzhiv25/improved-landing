/**
 * Navigation structure for the main navbar.
 * Supports simple dropdowns (Properties, Services, Company) and grouped dropdowns (Resources).
 */

export interface NavSubItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface NavItemSimple {
  label: string;
  href?: string;
  subItems: NavSubItem[];
}

export interface NavSubGroup {
  heading: string;
  items: NavSubItem[];
}

export interface NavItemGrouped {
  label: string;
  href?: string;
  subGroups: NavSubGroup[];
}

export type NavItem = NavItemSimple | NavItemGrouped;

export function isGroupedNavItem(item: NavItem): item is NavItemGrouped {
  return "subGroups" in item && Array.isArray(item.subGroups);
}

export const navItems: NavItem[] = [
  {
    label: "Properties",
    subItems: [
      {
        label: "Search & Filter Properties",
        href: "#",
        description: "Search, filter and sort from 500+ RERA-approved properties in Bengaluru",
      },
      {
        label: "Compare Properties",
        href: "#",
        description: "Compare properties exhaustively on 40+ parameters you won't find elsewhere",
      },
      {
        label: "Sell Your Property",
        href: "#",
        description: "Share details & we'll match you with genuine homebuyers from our community",
      },
    ],
  },
  {
    label: "Services",
    subItems: [
      {
        label: "Guided Homebuying",
        href: "#",
        description: "Trusted by 1000+ intelligent buyers who bought their ideal homes confidently.",
      },
      {
        label: "Peace of Mind Report",
        href: "#",
        description: "India's most comprehensive report covering 80+ critical data points",
      },
      {
        label: "Home Loans",
        href: "#",
        description: "Compare lenders, get best offers & end-to-end guidance",
      },
      {
        label: "Legal Services",
        href: "#",
        description: "Get complete title due diligence, agreement reviews & advisory at pre-negotiated prices",
      },
    ],
  },
  {
    label: "Resources",
    subGroups: [
      {
        heading: "Learn",
        items: [
          {
            label: "Blog",
            href: "#",
            description: "Get in-depth insights, guides & updates on India's real estate every week",
          },
          {
            label: "Homebuying Guide 101",
            href: "#",
            description: "New to homebuying? This guide helps you navigate your journey with clarity",
          },
          {
            label: "Homebuying Checklist",
            href: "#",
            description: "See if your dream home checks all the boxes with our ultimate checklist",
          },
          {
            label: "Bangalore Real Estate 2025",
            href: "#",
            description: "See how the supply, demand & price trends are evolving in 2025",
          },
        ],
      },
      {
        heading: "Tools",
        items: [
          {
            label: "Loyalty Reward Calculator",
            href: "#",
            description: "See what you'll earn in money, time & sanity when you work with Propsoch",
          },
          {
            label: "Fair Price Calculator",
            href: "#",
            description:
              "Instantly check if your property's price is fair and discover its true market value.",
            badge: "New",
          },
        ],
      },
    ],
  },
  {
    label: "Company",
    subItems: [
      { label: "About Us", href: "#" },
      { label: "Customer Reviews", href: "#" },
      { label: "Careers", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "YouTube", href: "#" },
    ],
  },
];
