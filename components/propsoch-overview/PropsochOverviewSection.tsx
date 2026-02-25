"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const BANGALORE_LISTING =
  "/buy/property-for-sale-in-bengaluru?minBudget=15000000&maxBudget=50000000&sortType=popularity&sortOrder=desc&possession=any&currentPage=1&apartments=5%2C7%2C8%2C10%2C11%2C73%2C12%2C13&entry_point=footer-copy&cta=apartment-for-sale-in-bangalore";
const BANGALORE_LISTING_SIMPLE =
  "/buy/property-for-sale-in-bengaluru?minBudget=15000000&maxBudget=50000000&sortType=popularity&sortOrder=desc&possession=any&currentPage=1&entry_point=footer-copy";

export default function PropsochOverviewSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mx-auto flex w-full max-w-screen-xl flex-col px-4 py-8">
      <button
        type="button"
        onClick={() => setIsOpen((o) => !o)}
        className="mx-auto flex w-full items-center justify-start gap-2 rounded-lg px-0 py-2 text-left text-sm font-medium text-[#66677E] transition-colors hover:bg-transparent hover:text-primary-foreground focus:outline-none"
        aria-expanded={isOpen}
      >
        <ChevronDown
          className={`size-6 shrink-0 transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-180" : ""
          }`}
          style={{ stroke: "#292D32" }}
          aria-hidden
        />
        <span className="w-full whitespace-normal px-1">
          More details about Bangalore & Mumbai Real estate from Propsoch
        </span>
      </button>

      <div
        className="mx-auto mb-6 flex flex-col gap-6 overflow-hidden px-2 text-sm text-[#66677E] xl:px-0"
        style={{
          maxHeight: isOpen ? 5000 : 0,
          opacity: isOpen ? 1 : 0,
          transition:
            "max-height 0.4s ease-in-out, opacity 0.25s ease-in-out",
        }}
      >
        <section className="mt-4 flex flex-col gap-2">
          <h2 className="text-base font-bold uppercase text-primary-foreground">
            Introduction to Propsoch
          </h2>
          <p>
            Propsoch is an intelligent homebuyer&apos;s concierge and their true
            friend. Propsoch is designed to eliminate stress and bring
            transparency to your homebuying journey. Whether you&apos;re
            exploring an{" "}
            <Link
              href={BANGALORE_LISTING}
              className="font-semibold underline hover:text-primary"
            >
              apartment for sale in Bangalore
            </Link>{" "}
            or checking the <strong>Mumbai real estate prices</strong> before a
            big decision, we offer personalized property recommendations,
            verified insights, and end-to-end guidance. Discover handpicked{" "}
            <strong>flats for sale in Mumbai</strong>, affordable{" "}
            <strong>apartments in Bangalore</strong>, or luxury homes in top
            neighborhoods — all tailored for you.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h3 className="text-base font-bold uppercase text-primary-foreground">
            Why Propsoch?
          </h3>
          <p>Buy your next home with confidence. Here&apos;s why thousands have trusted Propsoch:</p>
          <ul className="mt-2 list-inside list-disc space-y-2">
            <li>
              <strong>AI-Powered Property Matchmaking</strong> based on your
              lifestyle, goals & budget with human experts to guide you at every
              step.
            </li>
            <li>
              <strong>80+ data Points per property</strong> in our{" "}
              <Link
                href="/peace-of-mind?entry_point=footer-copy&cta=peace-of-mind-report"
                className="font-semibold underline hover:text-primary"
              >
                Peace of Mind report
              </Link>{" "}
              — India&apos;s most comprehensive property report for homebuyers.
            </li>
            <li>Zero-Bias Advice from expert advisors.</li>
            <li>End-to-End Support from shortlisting to closing of property.</li>
            <li>
              Transparent info for first-time buyers looking for{" "}
              <Link
                href={BANGALORE_LISTING_SIMPLE}
                className="font-semibold underline hover:text-primary"
              >
                flats for sale in Bangalore
              </Link>{" "}
              or <strong>Mumbai real estate</strong>.
            </li>
            <li>
              <Link
                href="/compare-properties/bengaluru?entry_point=footer-copy&cta=compare-projects"
                className="font-semibold underline hover:text-primary"
              >
                Compare projects
              </Link>{" "}
              across developers and localities.
            </li>
            <li>
              Intelligent filters like construction stage, rare amenities, vastu
              direction & more.
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-2">
          <h3 className="text-base font-bold uppercase text-primary-foreground">
            Top Locations We Cover
          </h3>
          <p>
            <strong>Bangalore:</strong> Whitefield, HSR Layout, Sarjapur,
            Electronic City, JP Nagar, Yelahanka, Begur Road, Hosur Road,
            Marathalli, Bellandur, Koramangala, Indiranagar, Bannerghatta &
            more.
          </p>
          <p>
            <strong>Mumbai:</strong> Andheri, Bandra, BKC, Khar, Santacruz, Vile
            Parle, Eastern Suburb, Central Suburbs, Navi Mumbai & beyond.
          </p>
          <p>
            From ready-to-move homes to new launches, find the perfect{" "}
            <strong>apartment in Mumbai</strong> or an{" "}
            <Link
              href={BANGALORE_LISTING}
              className="font-semibold underline hover:text-primary"
            >
              apartment for sale in Bangalore
            </Link>{" "}
            with Propsoch.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h3 className="text-base font-bold uppercase text-primary-foreground">
            Tools & Filters
          </h3>
          <div className="flex flex-col gap-2">
            <h4 className="font-medium text-primary-foreground">
              Intelligent Filters
            </h4>
            <ul className="list-inside list-disc space-y-1">
              <li>Budget filters: under ₹1 Cr, ₹1-3 Cr, ₹5 Cr+, etc.</li>
              <li>
                Unit configuration: Apartment, Villa, Plot, Studio to 5 BHK.
              </li>
              <li>
                Construction status: Ready-to-move or under construction.
              </li>
              <li>
                Community size: small (&lt;5 acres), medium (5-15), large (&gt;15).
              </li>
              <li>
                Property efficiency, balconies, bathrooms & unit entrance
                direction.
              </li>
              <li>Rare amenities like squash courts, pet parks & clinics.</li>
              <li>Sort by possession date, popularity, price & PropScore.</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="mt-4 font-medium text-primary-foreground">
              Smart Tools
            </h4>
            <ul className="list-inside list-disc space-y-1">
              <li>
                <Link
                  href="/loyalty-reward-calculator?entry_point=footer-copy"
                  className="font-semibold underline hover:text-primary"
                >
                  Loyalty Reward Calculator
                </Link>
                : Find out how much cashback or exclusive rewards you can get
                before you book.
              </li>
            </ul>
          </div>
          <p>
            Use filters to shortlist. Use tools to decide. That&apos;s how
            Propsoch helps you buy smarter especially in dynamic markets like{" "}
            <strong>Mumbai real estate</strong> or when hunting for the perfect{" "}
            <Link
              href={BANGALORE_LISTING}
              className="font-semibold underline hover:text-primary"
            >
              apartment for sale in Bangalore
            </Link>
            .
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h3 className="text-base font-bold uppercase text-primary-foreground">
            Compare Before You Commit
          </h3>
          <p>
            Use our{" "}
            <Link
              href="/compare-properties/bengaluru?entry_point=footer-copy&cta=property-comparison-tool"
              className="font-semibold underline hover:text-primary"
            >
              Property Comparison Tool
            </Link>{" "}
            to evaluate up to 3 properties side by side. Get clarity on pricing,
            builder reputation, timeline, amenities, floor plans, and more. Make
            an informed decision by{" "}
            <Link
              href="/compare-properties/bengaluru?entry_point=footer-copy&cta=compare-properties"
              className="font-semibold underline hover:text-primary"
            >
              comparing properties
            </Link>{" "}
            in bangalore, understanding <strong>mumbai flat price</strong>{" "}
            trends, and more.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-lg font-bold uppercase text-primary-foreground">
            Services
          </h2>
          <h3 className="text-base font-semibold text-primary-foreground">
            Guided Home Buying (GHB)
          </h3>
          <ul className="list-inside list-disc space-y-1">
            <li>Personalized shortlisting</li>
            <li>Site visit bookings with verified developers</li>
            <li>Property comparison with unbiased help</li>
            <li>Expert negotiation advice</li>
            <li>
              Understand legal documents, RERA approval, and due diligence
            </li>
          </ul>
          <h3 className="mt-4 text-base font-semibold text-primary-foreground">
            Peace of Mind (POM)
          </h3>
          <p>
            Our{" "}
            <Link
              href="/peace-of-mind?entry_point=footer-copy"
              className="font-semibold underline hover:text-primary"
            >
              Peace of Mind
            </Link>{" "}
            (POM) reports ensure you&apos;re technically, financially, and
            emotionally ready to buy or sell your property confidently. It
            covers:
          </p>
          <ul className="list-inside list-disc space-y-1">
            <li>
              Connectivity, location and investment potential assessment
            </li>
            <li>Design assessment of the master, tower and floor plans</li>
            <li>
              Current state of litigations & next steps to secure yourself
              legally
            </li>
            <li>Builder&apos;s track record and credibility assessment</li>
            <li>Final decision support with zero guesswork</li>
          </ul>
        </section>

        <section className="flex flex-col gap-2">
          <h3 className="text-base font-bold uppercase text-primary-foreground">
            Resources to Buy Better
          </h3>
          <ul className="list-inside list-disc space-y-1">
            <li>
              <Link
                href="/blogs/homebuying-checklist"
                className="font-semibold underline hover:text-primary"
              >
                How to <strong className="font-bold underline">Buy a House in Bangalore</strong>
              </Link>{" "}
              - Step by Step Checklist
            </li>
            <li>
              <Link
                href="/blogs/buying-a-home-in-mumbai-read-this-before-you-regret-it"
                className="font-bold underline hover:text-primary"
              >
                Mumbai Real Estate
              </Link>
            </li>
            <li>
              <Link
                href="/blogs/legal-your-guide-to-safe-homebuying"
                className="font-semibold underline hover:text-primary"
              >
                Legal Document Checklist for First-Time Buyers
              </Link>
            </li>
            <li>
              Compare 2-4 properties in Bangalore with our{" "}
              <Link
                href="/compare-properties/bengaluru?entry_point=footer-copy"
                className="font-semibold underline hover:text-primary"
              >
                Compare Tool
              </Link>
            </li>
            <li>
              Compare 2-4 properties in Mumbai with our{" "}
              <Link
                href="/compare-properties/mumbai?entry_point=footer-copy"
                className="font-semibold underline hover:text-primary"
              >
                Compare Tool
              </Link>
            </li>
            <li>
              Explore Our{" "}
              <Link
                href="/blogs"
                className="font-semibold underline hover:text-primary"
              >
                Blog & Knowledge Hub
              </Link>
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-2">
          <h3 className="text-base font-bold uppercase text-primary-foreground">
            Popular Searches
          </h3>
          <ul className="flex flex-wrap gap-2">
            {[
              "Apartment in Bangalore",
              "Buy flat in Mumbai",
              "Buy house in Mumbai",
              "Flats for sale in Bangalore",
              "Mumbai real estate",
              "Property in Mumbai",
              "House in Bangalore",
              "Flat in Bangalore",
              "Apartment in Mumbai",
              "Properties in Bangalore",
            ].map((term) => (
              <li key={term} className="inline-block font-semibold">
                {term}
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col gap-2">
          <h3 className="text-base font-bold uppercase text-primary-foreground">
            Join the Propsoch Community
          </h3>
          <p>
            Looking to <strong>buy a house in Bangalore</strong> or explore the{" "}
            <strong>Mumbai real estate</strong> market? Don&apos;t do it alone.
            Join 1,000+ intelligent families who&apos;ve used Propsoch to find
            the right{" "}
            <Link
              href={BANGALORE_LISTING}
              className="font-semibold underline hover:text-primary"
            >
              apartment for sale in Bangalore
            </Link>
            , discover <strong>flats for sale in Mumbai</strong>, and make
            confident, data-backed decisions.
          </p>
          <p>
            Ask questions, get real advice, and connect with verified buyers
            navigating the same journey. Whether you&apos;re searching for a
            luxury <strong>apartment in Mumbai</strong> or a ready-to-move{" "}
            <strong>flat in Bangalore</strong>.
          </p>
          <ul className="list-inside list-disc">
            <li>
              <Link
                href="https://chat.whatsapp.com/KnN3ba2gh8OJJJgmLW2PsA"
                className="font-bold underline hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join the Bangalore Community
              </Link>
            </li>
            <li>
              <Link
                href="https://chat.whatsapp.com/Dt9txXW4tftA1Kv2NEPkpN"
                className="font-bold underline hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join the Mumbai Community
              </Link>
            </li>
          </ul>
        </section>

        <section className="mb-12 flex flex-col gap-2">
          <h3 className="text-base font-bold uppercase text-primary-foreground">
            Start Your Search
          </h3>
        </section>
      </div>
    </div>
  );
}
