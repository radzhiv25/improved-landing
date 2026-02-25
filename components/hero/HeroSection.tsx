"use client";

import Link from "next/link";
import { useState } from "react";

export default function HeroSection() {
  const [city, setCity] = useState<"Bangalore" | "Mumbai">("Bangalore");

  return (
    <section
      className="relative w-full overflow-hidden px-4 py-16 md:py-24 lg:py-28"
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 109, 51, 0.08) 0%, rgba(255, 109, 51, 0.02) 40%, transparent 100%)",
      }}
    >
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <p className="hero-headline-shimmer mb-3 text-sm font-medium uppercase tracking-wide md:text-base">
          Stop wasting countless weekends on irrelevant visits
        </p>
        <h1 className="hero-headline-shimmer mb-5 text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
          Visit curated homes, negotiate smarter & buy intelligently.
        </h1>
        <p className="mb-10 max-w-lg text-base leading-relaxed text-neutral-600 md:text-lg">
          Get end-to-end guidance from property wizards who&apos;ve helped intelligent homebuyers
          like you buy 200+ homes in the last year alone.
        </p>

        <div className="mb-10 w-full max-w-sm">
          <label className="mb-1.5 block text-sm font-medium text-neutral-700">
            Select your city
          </label>
          <p className="mb-3 text-xs text-neutral-500">
            We&apos;re currently available in these cities only.
          </p>
          <div className="relative flex rounded-xl border border-neutral-200 bg-neutral-100/80 p-1.5 transition-shadow duration-200 focus-within:ring-2 focus-within:ring-primary/20">
            <div
              className="absolute top-1.5 h-[calc(100%-12px)] w-[calc(50%-6px)] rounded-lg bg-primary shadow-sm transition-[left] duration-300 ease-out"
              style={{
                left: city === "Bangalore" ? "6px" : "calc(50% + 3px)",
              }}
            />
            <button
              type="button"
              onClick={() => setCity("Bangalore")}
              className="relative z-10 flex-1 rounded-lg py-3 text-sm font-medium transition-colors duration-200 active:scale-[0.99]"
            >
              <span className={city === "Bangalore" ? "text-white" : "text-neutral-600"}>
                Bangalore
              </span>
            </button>
            <button
              type="button"
              onClick={() => setCity("Mumbai")}
              className="relative z-10 flex-1 rounded-lg py-3 text-sm font-medium transition-colors duration-200 active:scale-[0.99]"
            >
              <span className={city === "Mumbai" ? "text-white" : "text-neutral-600"}>
                Mumbai
              </span>
            </button>
          </div>
        </div>

        <div className="mb-6 w-full max-w-sm rounded-2xl border border-primary/20 bg-primary/5 px-6 py-6">
          <p className="mb-3 text-sm font-medium text-neutral-700">
            Ready to find your home?
          </p>
          <p className="mb-4 text-xs text-neutral-500">
            Book a free appointment — we&apos;ll guide you through curated options in {city}.
          </p>
          <Link
            href="#"
            className="block w-full rounded-xl bg-primary px-6 py-3.5 text-center font-medium text-white transition-all duration-200 hover:bg-primary/90 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 active:scale-[0.98]"
          >
            Book An Appointment
          </Link>
        </div>

        <p className="text-sm text-neutral-500">
          Already a member?{" "}
          <Link
            href="#"
            className="font-medium text-primary underline-offset-2 transition-all duration-200 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}
