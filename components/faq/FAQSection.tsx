"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FAQ_TABS } from "@/data/faq-data";
import type { FAQItem } from "@/data/faq-data";

const SUPPORT_IMAGE =
  "https://d1zk2x7mtoyb2b.cloudfront.net/websiteAssets/landing-page/support-image.png";

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

function FAQAccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-xl border border-neutral-200">
      <h3 className="flex">
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`faq-content-${item.id}`}
          id={`faq-trigger-${item.id}`}
          className="flex flex-1 items-center justify-between gap-4 p-6 text-left transition-all [&[data-state=open]>svg]:rotate-90 focus:outline-none rounded-xl"
          data-state={isOpen ? "open" : "closed"}
        >
          <span className="block text-left text-sm font-normal leading-[1.35] text-primary-foreground xl:text-base">
            {item.question}
          </span>
          <CrossIcon
            className={`shrink-0 transition-transform duration-200 ${
              isOpen ? "rotate-90" : "rotate-45"
            }`}
            style={{ color: "#292D32" }}
          />
        </button>
      </h3>
      <div
        id={`faq-content-${item.id}`}
        role="region"
        aria-labelledby={`faq-trigger-${item.id}`}
        className="overflow-hidden transition-[max-height] duration-200 ease-out"
        style={{ maxHeight: isOpen ? 400 : 0 }}
      >
        <div className="px-6 pb-6 pt-0">
          <p className="text-sm leading-[1.35] text-[#66677E]">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [activeTabId, setActiveTabId] = useState(FAQ_TABS[0].id);
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  const activeTab = FAQ_TABS.find((t) => t.id === activeTabId) ?? FAQ_TABS[0];

  return (
    <section
      id="faq"
      className="flex w-full flex-col items-center gap-14 px-4 py-14 xl:py-24"
      aria-label="Frequently asked questions"
    >
      <div className="mx-auto flex w-full max-w-[var(--breakpoint-xl)] flex-col items-center gap-14">
        {/* Header */}
        <div className="flex flex-col items-center gap-6">
          <span className="inline text-sm font-normal leading-[1.35] text-primary xl:text-base">
            Frequently Asked Questions
          </span>
          <h2 className="max-w-4xl text-center text-2xl font-normal leading-[1.35] text-primary-foreground xl:text-[2.5rem]">
            99% of your queries should get answered here, for others, you can
            always talk to us
          </h2>
        </div>

        {/* Tabs */}
        <div
          dir="ltr"
          className="flex w-full flex-col items-center gap-2"
          role="tablist"
          aria-orientation="horizontal"
        >
          <div className="hide-scrollbar w-full overflow-x-auto xl:w-fit">
            <div
              role="tablist"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-100 px-2 py-2 text-[#66677E]"
            >
              {FAQ_TABS.map((tab) => {
                const isActive = activeTabId === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`faq-panel-${tab.id}`}
                    id={`faq-tab-${tab.id}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => {
                      setActiveTabId(tab.id);
                      setOpenItemId(null);
                    }}
                    className={`inline-flex min-w-max shrink-0 items-center justify-start whitespace-nowrap rounded-lg px-6 py-3 font-medium transition-all focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                      isActive
                        ? "bg-white text-primary-foreground shadow-sm"
                        : "bg-transparent"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab panels */}
          {FAQ_TABS.map((tab) => (
            <div
              key={tab.id}
              id={`faq-panel-${tab.id}`}
              role="tabpanel"
              aria-labelledby={`faq-tab-${tab.id}`}
              tabIndex={0}
              className="mt-0 flex w-full flex-col items-center focus:outline-none"
              hidden={activeTabId !== tab.id}
            >
              <div className="mt-4 flex w-full max-w-4xl flex-col gap-4">
                {tab.items.map((item) => (
                  <FAQAccordionItem
                    key={item.id}
                    item={item}
                    isOpen={openItemId === item.id}
                    onToggle={() =>
                      setOpenItemId((prev) =>
                        prev === item.id ? null : item.id
                      )
                    }
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions? banner */}
        <div className="relative flex w-full max-w-4xl flex-col items-center gap-4 overflow-hidden rounded-xl bg-neutral-100/90 p-8 xl:flex-row xl:justify-between xl:p-8">
          <div className="z-10 flex flex-col items-center gap-4 xl:flex-row">
            <div className="pointer-events-none shrink-0">
              <Image
                src={SUPPORT_IMAGE}
                alt=""
                width={84}
                height={84}
                className="aspect-square object-contain"
              />
            </div>
            <div className="flex flex-col items-center gap-2 xl:items-start">
              <h2 className="text-center text-xl font-semibold leading-[1.35] text-primary-foreground xl:text-left xl:text-[2rem]">
                Still have questions?
              </h2>
              <p className="text-center text-sm font-normal leading-[1.35] text-[#66677E] xl:text-left">
                Can&apos;t find the answer you are looking for? We are always
                here for you
              </p>
            </div>
          </div>
          <div className="flex justify-start pt-0">
            <Link
              href="#"
              className="inline-flex h-9 w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-primary/90 focus:outline-none xl:w-auto"
            >
              Book Free Appointment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
