"use client";

import Link from "next/link";
import { Check } from "lucide-react";

const FEATURES = [
  "Work with trained architects",
  "Check builders, areas & projects",
  "See pros & cons exhaustively",
  "Assess livability & financial risks",
  "Lowest price negotiations",
  "Get rewarded handsomely",
] as const;

export default function ValuePropositionSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0f0f0f] px-4 py-12 md:py-16 lg:py-18">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14 lg:items-center">
        <div className="flex flex-col">
          <h2 className="mb-4 text-3xl font-semibold leading-none text-white md:text-4xl lg:text-[2.75rem]">
            Choose the smart way to save ~₹4.78 L & 3 months of your life.
          </h2>
          <p className="mb-10 max-w-lg text-base leading-relaxed text-white/90 md:text-lg">
            You&apos;re about to make the biggest purchase of your life. We make sure you do it intelligently.
          </p>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-4">
            {FEATURES.map((label) => (
              <li key={label} className="flex items-center gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary">
                  <Check className="h-3 w-3 text-white" strokeWidth={3} />
                </span>
                <span className="text-sm font-medium text-white md:text-base">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-ghb-card relative rounded-2xl border border-white/[0.18] bg-black p-6 md:p-8">
          <h3 className="mb-3 text-xl font-semibold text-white md:text-2xl">
            Guided Home Buying
          </h3>
          <p className="mb-6 text-sm leading-relaxed text-white/85 md:text-base">
            9 in 10 homebuyers have bought a home via us within 25 days. Trusted by 1000+ buyers from Google, Amazon, Peak XV etc.
          </p>
          <p className="mb-2 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Save ₹4,78,125/-
          </p>
          <p className="mb-8 text-sm text-white/80">
            Experience truly unbiased advisory & get total peace of mind
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black"
            >
              Book An Appointment
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-xl border-2 border-white bg-transparent px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
            >
              See How You Will Save
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
