"use client";

import { useState } from "react";
import { Logo } from "@/components/Logo";
import {
  ONLINE_PORTALS_ROWS,
  LOCAL_BROKERS_ROWS,
  type CompareWith,
} from "@/data/comparison-data";

const TAB_CONFIG: { id: CompareWith; label: string }[] = [
  { id: "online-portals", label: "Online Portals" },
  { id: "local-brokers", label: "Local brokers" },
];

export default function ComparisonSection() {
  const [compareWith, setCompareWith] = useState<CompareWith>("online-portals");

  const rows =
    compareWith === "online-portals" ? ONLINE_PORTALS_ROWS : LOCAL_BROKERS_ROWS;
  const otherColumnLabel =
    compareWith === "online-portals"
      ? "Online portals (Housing/99Acres/Magicbricks)"
      : "Local brokers";

  return (
    <section
      id="what-makes-us-different"
      className="flex w-full flex-col items-center px-4 py-20 md:py-28"
      aria-label="What makes us different - comparison"
    >
      <div className="mx-auto w-full sm:w-[75%] sm:max-w-[75vw]">
        {/* Heading + Toggle row */}
        <div className="mb-10 flex flex-col gap-8 xl:flex-row xl:items-start xl:justify-between xl:gap-12">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-normal leading-[1.35] text-primary xl:text-base">
              What makes us different?
            </p>
            <h2 className="max-w-2xl text-2xl font-semibold leading-tight text-primary-foreground xl:text-[2rem]">
              Our homebuyers say we&apos;re refreshing, intelligent and supportive. Here&apos;s why.
            </h2>
          </div>
          <div className="flex shrink-0 flex-col gap-2">
            <p className="text-sm font-normal leading-[1.35] text-neutral-600">
              Compare our services with
            </p>
            <div className="flex rounded-full border border-neutral-200 bg-neutral-100/80 p-1">
              {TAB_CONFIG.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setCompareWith(tab.id)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                    compareWith === tab.id
                      ? "bg-primary text-white shadow-sm"
                      : "text-neutral-600 hover:bg-neutral-200/80 hover:text-neutral-800"
                  }`}
                  aria-pressed={compareWith === tab.id}
                  aria-label={`Compare with ${tab.label}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
          <table className="w-full border-collapse text-left" role="table">
            <thead>
              <tr className="border-b border-neutral-200">
                <th
                  scope="col"
                  className="bg-neutral-100 px-4 py-4 text-sm font-semibold text-primary-foreground md:px-6 md:py-5 md:text-base"
                >
                  What you care about
                </th>
                <th
                  scope="col"
                  className="bg-white px-4 py-4 text-sm font-semibold text-primary-foreground md:px-6 md:py-5 md:text-base"
                >
                  <span className="flex items-center gap-2">
                    <Logo className="h-5 w-14 text-primary md:h-8 md:w-20" />
                    {/* <span>Propsoch</span> */}
                  </span>
                </th>
                <th
                  scope="col"
                  className="bg-neutral-100 px-4 py-4 text-sm font-semibold text-primary-foreground md:px-6 md:py-5 md:text-base"
                >
                  {otherColumnLabel}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.criteria}
                  className={`border-b border-neutral-100 last:border-b-0 ${
                    i % 2 === 0 ? "bg-neutral-50/70" : "bg-white"
                  }`}
                >
                  <td className="px-4 py-3 text-sm text-primary-foreground md:px-6 md:py-4 md:text-base">
                    {row.criteria}
                  </td>
                  <td className="px-4 py-3 text-sm text-primary-foreground md:px-6 md:py-4 md:text-base">
                    {row.propsoch}
                  </td>
                  <td className="px-4 py-3 text-sm text-primary-foreground md:px-6 md:py-4 md:text-base">
                    {row.other}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
