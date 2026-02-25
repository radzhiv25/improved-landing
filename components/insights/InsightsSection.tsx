"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { INSIGHTS } from "@/data/insights-data";

function CrossIcon({ className }: { className?: string }) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 49 48"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="m10.434 9.875 28.25 28.25m-28.25 0 28.25-28.25"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function InsightsSection() {
  const [openId, setOpenId] = useState<string>(INSIGHTS[0].id);
  const active = INSIGHTS.find((i) => i.id === openId) ?? INSIGHTS[0];

  return (
    <section
      id="insights"
      className="flex w-full flex-col gap-12 px-4 py-16 md:py-20"
      aria-label="Platform insights"
    >
      <div className="mx-auto flex w-full max-w-[var(--breakpoint-xl)] flex-col gap-12">
        {/* Header */}
        <div className="flex max-w-3xl flex-col gap-3">
          <p className="text-sm font-normal leading-[1.35] text-primary xl:text-lg">
            Meet India&apos;s most advanced real estate platform
          </p>
          <h2 className="text-2xl font-normal leading-[1.35] text-primary-foreground xl:text-[2.5rem]">
            We deliver deeply researched insights for every house till you call it your home
          </h2>
        </div>

        {/* Card: light gray, accordion + video, softly rounded */}
        <div className="rounded-xl bg-neutral-100 p-6 xl:p-8">
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2 xl:items-stretch">
            {/* Left: accordion – expanded = orange number & title, collapsed = dark gray */}
            <div className="order-2 flex min-h-0 flex-1 flex-col xl:order-1">
              <div className="flex min-h-0 flex-1 flex-col">
                {INSIGHTS.map((item) => {
                  const isOpen = openId === item.id;
                  return (
                    <div
                      key={item.id}
                      className="flex min-h-0 flex-1 flex-col border-b border-neutral-200 last:border-b-0"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenId(item.id)}
                        className="flex w-full shrink-0 items-center justify-between gap-4 py-3 text-left transition-colors hover:opacity-90 focus:outline-none rounded"
                        aria-expanded={isOpen}
                        aria-controls={`insight-content-${item.id}`}
                        id={`insight-trigger-${item.id}`}
                      >
                        <h3
                          className={`text-lg font-medium leading-normal transition-colors duration-200 ${
                            isOpen ? "text-primary" : "text-[#292D32]"
                          }`}
                        >
                          <span className={isOpen ? "text-primary" : "text-[#292D32]"}>
                            {item.number}.{" "}
                          </span>
                          {item.title}
                        </h3>
                        <span
                          className="flex shrink-0 transition-transform duration-200 ease-out"
                          aria-hidden
                        >
                          {isOpen ? (
                            <CrossIcon className="h-5 w-5 text-primary" />
                          ) : (
                            <Plus className="h-5 w-5 text-[#292D32]" />
                          )}
                        </span>
                      </button>
                      <div
                        id={`insight-content-${item.id}`}
                        role="region"
                        aria-labelledby={`insight-trigger-${item.id}`}
                        className="min-h-0 flex-1 overflow-hidden transition-[max-height] duration-200 ease-out"
                        style={{ maxHeight: isOpen ? 96 : 0 }}
                      >
                        <div className="pt-0 pb-4">
                          <p
                            className="ml-5 block max-w-[75%] text-sm leading-[1.35] text-[#66677E] transition-opacity duration-200 ease-out xl:max-w-[75%]"
                            style={{ opacity: isOpen ? 1 : 0 }}
                          >
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: floor plan / video panel */}
            <div className="order-1 flex overflow-hidden rounded-xl xl:order-2">
              <div
                key={active.id}
                className="flex w-full flex-col items-center justify-center"
                role="tabpanel"
                aria-labelledby={`insight-trigger-${active.id}`}
              >
                <video
                  key={active.id}
                  className="aspect-[16/12] h-full w-full rounded-xl object-cover"
                  width={500}
                  height={300}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={`Insight video for ${active.title}`}
                  title={active.title}
                >
                  <source src={active.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>

        {/* CTA banner: horizontal gradient (light purple → white), dark purple heading, purple border on secondary */}
        <div
          className="flex flex-col items-center gap-4 overflow-hidden rounded-xl p-6 xl:flex-row xl:justify-between xl:p-8"
          style={{
            background:
              "linear-gradient(90deg, rgba(238, 234, 255, 0.9) 0%, rgba(245, 243, 255, 0.5) 50%, rgba(255, 255, 255, 1) 100%)",
          }}
        >
          <div className="flex flex-col items-center gap-4 xl:flex-row xl:items-center">
            <div className="flex flex-col items-center gap-2 xl:items-start">
              <h2 className="text-center text-xl font-bold leading-[1.35] text-violet-900 xl:text-left xl:text-[2rem]">
                All this & lot more, for your peace of mind
              </h2>
              <p className="text-center text-sm leading-[1.35] text-[#66677E] xl:text-left">
                Insights you won&apos;t find anywhere else on locations, builders & projects
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col gap-4 pt-0 xl:w-auto xl:flex-row xl:items-center">
            <Link
              href="https://d1zk2x7mtoyb2b.cloudfront.net/websiteAssets/sample-report.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-full items-center justify-center rounded-lg bg-violet-600 px-4 py-2 text-xs font-semibold leading-[1.35] text-white shadow-sm transition-colors hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 xl:w-fit xl:text-sm"
            >
              See Sample Report
            </Link>
            <Link
              href="#"
              className="inline-flex h-9 w-full items-center justify-center rounded-lg border-2 border-violet-400 bg-white px-4 py-2 text-xs font-semibold leading-[1.35] text-primary-foreground shadow-sm transition-colors hover:bg-violet-50 focus:outline-none focus:ring-2 focus:ring-violet-300 focus:ring-offset-2 xl:w-fit xl:text-sm"
            >
              Book An Appointment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
