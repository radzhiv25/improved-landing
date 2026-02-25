"use client";

import Link from "next/link";
import { Home, Instagram, Linkedin, Youtube, Mail } from "lucide-react";
import { Logo } from "@/components/Logo";
import {
  FOOTER_INTRO,
  FOOTER_CTA_LINKS,
  FOOTER_DESCRIPTION,
  FOOTER_SOCIAL,
  FOOTER_LEGAL,
  FOOTER_TOP_DEVELOPERS,
  FOOTER_TOP_AREAS,
  FOOTER_TOP_FILTERS,
  FOOTER_BOTTOM_LINKS,
  FOOTER_COPYRIGHT,
} from "@/data/footer-data";

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
  email: Mail,
};

export default function Footer() {
  return (
    <footer className="relative w-full bg-black">
      {/* Main footer content */}
      <div className="relative z-10 mx-auto max-w-[var(--breakpoint-xl)] px-4 pt-8 pb-24 xl:px-8 xl:pt-10 xl:pb-32">
        {/* Breadcrumb */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black"
        >
          <Home className="h-4 w-4" aria-hidden />
          Home
        </Link>
        <div className="mt-4 border-t border-neutral-700" aria-hidden />

        {/* Grid: brand + columns */}
        <div className="mt-8 grid grid-cols-1 gap-10 xl:grid-cols-4 xl:gap-8">
          {/* Left: logo, description, social, legal */}
          <div className="flex flex-col gap-6">
            <div
              className="[--color-primary:white] [--color-primary-foreground:white]"
              aria-hidden
            >
              <Logo width={140} height={34} />
            </div>
            <p className="max-w-xs text-sm leading-[1.35] text-neutral-400">
              {FOOTER_DESCRIPTION}
            </p>
            <div className="flex gap-2">
              {FOOTER_SOCIAL.map((item) => {
                const Icon = socialIcons[item.icon];
                return (
                  <a
                    key={item.icon}
                    href={item.href}
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-800 text-white transition-colors hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black"
                    aria-label={item.label}
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                  </a>
                );
              })}
            </div>
            <div className="flex flex-col gap-1 text-xs leading-[1.35] text-neutral-500">
              <span>{FOOTER_LEGAL.company}</span>
              <span>{FOOTER_LEGAL.rera}</span>
              <span>{FOOTER_LEGAL.gstin}</span>
              <span>{FOOTER_LEGAL.cin}</span>
            </div>
          </div>

          {/* Top Developers */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Top Developers in Bengaluru
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              {FOOTER_TOP_DEVELOPERS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm leading-[1.35] text-neutral-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Areas */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Top Areas in Bengaluru
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              {FOOTER_TOP_AREAS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm leading-[1.35] text-neutral-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Filters */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Top Filters
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              {FOOTER_TOP_FILTERS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm leading-[1.35] text-neutral-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom row: Privacy, Terms | Copyright */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-neutral-800 pt-8 xl:flex-row">
          <div className="flex gap-6">
            {FOOTER_BOTTOM_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-neutral-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-sm text-neutral-500">{FOOTER_COPYRIGHT}</p>
        </div>
      </div>

      {/* Soft orange/brown overlay at bottom – fades into dark (half blended) */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(255,109,51,0.08) 30%, rgba(180,80,40,0.2) 100%)",
        }}
        aria-hidden
      />
      {/* Large "Propsoch" watermark – half blended (visible at top of word, fades at bottom) */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 overflow-hidden"
        style={{ height: "clamp(140px, 22vw, 240px)" }}
        aria-hidden
      >
        <span
          className="absolute md:-bottom-20 -bottom-5 left-1/2 whitespace-nowrap text-[clamp(5rem,20vw,18rem)] font-bold leading-none tracking-tight"
          style={{
            transform: "translateX(-50%)",
            background:
              "linear-gradient(180deg, rgba(255,109,51,0.5) 0%, rgba(255,109,51,0.2) 40%, transparent 75%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Propsoch
        </span>
      </div>
    </footer>
  );
}
