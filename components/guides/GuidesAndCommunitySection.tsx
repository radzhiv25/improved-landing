"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { GUIDE_CARDS } from "@/data/guides-data";

export default function GuidesAndCommunitySection() {
  return (
    <section
      id="guides-and-community"
      className="flex w-full flex-col items-center px-4 py-14 xl:py-24"
      aria-label="Guides and community"
    >
      <div className="mx-auto w-full max-w-[var(--breakpoint-xl)]">
        {/* Header */}
        <div className="mb-10 flex flex-col items-center gap-2 text-center">
          <p className="text-sm font-normal leading-[1.35] text-primary">
            Join an exclusive club of empowered homebuyers
          </p>
          <h2 className="max-w-3xl text-2xl font-semibold leading-[1.35] text-primary-foreground xl:text-[2rem]">
            Empower yourself with our guides, hacks & resources
          </h2>
        </div>

        {/* Three guide cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {GUIDE_CARDS.map((card) => (
            <Link
              key={card.id}
              href={card.href ?? "#"}
              className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-neutral-200/80 transition-shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <div className="relative aspect-[5/3] w-full overflow-hidden bg-neutral-100">
                <Image
                  src={card.imageSrc}
                  alt=""
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
              </div>
              <div className="flex flex-col gap-2 p-5">
                <span className="text-sm font-medium text-primary">
                  {card.label}
                </span>
                <h3 className="text-lg font-semibold leading-tight text-primary-foreground">
                  {card.title}
                </h3>
                <p className="text-sm leading-[1.35] text-[#66677E]">
                  {card.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Community banner - Hometrust Collective (clear primary CTA, city choice secondary) */}
        <div
          className="mt-14 flex flex-col items-center justify-center gap-4 rounded-xl px-6 py-12 xl:mt-16 xl:gap-5 xl:py-16"
          style={{
            background:
              "linear-gradient(180deg, #fff 0%, rgba(255, 109, 51, 0.08) 40%, rgba(255, 109, 51, 0.22) 100%)",
          }}
        >
          <p className="text-sm font-medium leading-[1.35] text-violet-600">
            Community
          </p>
          <h3 className="text-center text-2xl font-semibold leading-[1.35] text-primary-foreground xl:text-3xl">
            Hometrust Collective
          </h3>
          <p className="max-w-2xl text-center text-sm leading-[1.35] text-[#66677E] xl:text-base">
            An exclusive community of buyers, owners & experts who help each other stay updated about the market. Get real advice, ask questions, and connect with verified homebuyers in your city.
          </p>
          <p className="mt-1 text-center text-sm font-medium text-primary-foreground">
            We have separate communities for each city. Choose yours to join:
          </p>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="#"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <MapPin className="h-4 w-4" />
              Join Bangalore community
            </Link>
            <Link
              href="#"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border-2 border-neutral-200 bg-white px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:border-primary/50 hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2"
            >
              <MapPin className="h-4 w-4 text-primary" />
              Join Mumbai community
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
