"use client";

import {
  Home,
  FileCheck,
  Calculator,
  Award,
  Compass,
  PaintBucket,
} from "lucide-react";
import { ANCILLARY_SERVICES } from "@/data/ancillary-data";

const ICONS = [
  Home,
  FileCheck,
  Calculator,
  Award,
  Compass,
  PaintBucket,
] as const;

export default function AncillarySection() {
  return (
    <section
      id="ancillary-services"
      className="flex w-full flex-col items-center px-4 py-14 xl:py-24"
      aria-label="Ancillary services"
    >
      <div className="relative flex w-full max-w-[var(--breakpoint-xl)] flex-col items-center gap-4 overflow-hidden rounded-xl bg-neutral-100/90 p-8 shadow-sm xl:p-10">
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="max-w-[75%] text-center text-sm font-normal leading-[1.35] text-primary">
            That&apos;s not all, we&apos;re really with you every step of the way
          </p>
          <h2 className="max-w-[50%] text-center text-xl font-normal leading-[1.35] text-primary-foreground xl:text-[2rem]">
            From home loans, legal, taxes, interiors to printing housewarming invites, we&apos;ve got you covered
          </h2>
        </div>
        <div className="grid w-full grid-cols-2 gap-4 py-8 xl:grid-cols-6">
          {ANCILLARY_SERVICES.map((label, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={label}
                className="flex flex-col items-center gap-2 rounded-lg border border-white/60 bg-gradient-to-t from-white from-40% px-2 py-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] backdrop-blur-[24px] transition-transform duration-200 hover:scale-105"
              >
                <div className="flex flex-col items-center">
                  <Icon
                    className="h-12 w-12 text-primary xl:h-14 xl:w-14"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <p className="mt-2 text-center text-sm font-medium leading-[1.35] text-[#66677E] xl:text-base">
                    {label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
