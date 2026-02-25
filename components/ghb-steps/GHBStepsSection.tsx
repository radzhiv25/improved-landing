"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { GHB_STEPS, type GHBStep } from "@/data/ghb-steps-data";

function useInView(threshold = 0.1) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, inView };
}

function StepCard({ step }: { step: GHBStep }) {
  return (
    <article
      className="text-card-foreground relative w-full rounded-xl bg-background shadow-none xl:bg-card border border-neutral-200"
      aria-label={step.stage}
    >
      <div className="grid grid-cols-1 gap-6 p-0 xl:grid-cols-2 xl:p-12">
        <div className="order-2 flex size-full flex-col justify-end gap-5 xl:order-1">
          <span className="inline-block w-fit rounded-full border border-transparent bg-secondary px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-secondary/80">
            {step.stage}
          </span>
          <h3 className="text-xl font-normal leading-[1.35] text-primary-foreground xl:text-[2rem]">
            {step.title}
          </h3>
          <ul className="flex flex-col gap-3">
            {step.bullets.map((b) => (
              <li key={b} className="flex items-center gap-2.5">
                <Star className="h-4 w-4 shrink-0 fill-primary text-primary" />
                <span className="text-sm font-normal leading-[1.35] text-[#66677E] xl:text-lg">
                  {b}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="order-1 flex size-full flex-col items-start xl:order-2 xl:items-end">
          <video
            width={370}
            height={510}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="flex aspect-[4/5] size-full max-w-[370px] rounded-xl object-cover object-bottom"
            aria-label={`${step.title} step video`}
          >
            <source src={step.videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </article>
  );
}

const CAROUSEL_SLIDES = GHB_STEPS;

export default function GHBStepsSection() {
  const [index, setIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(400);
  const { ref: sectionRef } = useInView(0.08);
  const viewportRef = useRef<HTMLDivElement>(null);

  const total = CAROUSEL_SLIDES.length;
  const goPrev = () => setIndex((i) => (i <= 0 ? i : i - 1));
  const goNext = () => setIndex((i) => (i >= total - 1 ? i : i + 1));

  // Measure viewport and compute slide width (basis-5/6 + pl-4)
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const update = () => {
      const w = viewport.clientWidth;
      setSlideWidth(w * (5 / 6) + 16);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(viewport);
    return () => ro.disconnect();
  }, []);

  const offset = -index * slideWidth;

  return (
    <section
      id="guided-homebuying-steps"
      ref={sectionRef}
      className="flex w-full flex-col items-center gap-8 px-4 py-20 md:py-28"
      aria-label="Guided homebuying steps"
    >
      <div className="flex w-full max-w-[var(--breakpoint-xl)] flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex w-full max-w-[var(--breakpoint-xl)] flex-col px-0">
          <p className="inline text-sm font-normal leading-[1.35] text-primary xl:text-lg">
            We&apos;re with you every step of the journey
          </p>
          <h2 className="inline text-2xl font-normal leading-[1.35] text-primary-foreground xl:text-[2.5rem]">
            Lost souls fall prey to FOMO, spam & deceit.
            <br className="hidden xl:inline" /> Not you. Our experts will guide you home.
          </h2>
        </div>
        <Link
          href="#"
          className="flex h-9 shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-xs font-semibold leading-[1.35] text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 xl:text-sm w-full xl:w-auto"
        >
          Book An Appointment
        </Link>
      </div>

      <div
        className="relative flex w-full max-w-[var(--breakpoint-xl)] flex-col xl:w-full"
        role="region"
        aria-roledescription="carousel"
        aria-label="Guided homebuying steps carousel"
      >
        <div ref={viewportRef} className="overflow-hidden">
          <div
            className="flex -ml-4 items-start transition-transform duration-300 ease-out"
            style={{ transform: `translate3d(${offset}px, 0, 0)` }}
          >
            {CAROUSEL_SLIDES.map((step) => (
              <div
                key={step.id}
                role="group"
                aria-roledescription="slide"
                aria-label={step.stage}
                className="min-w-0 shrink-0 grow-0 pl-4 w-full max-w-[var(--breakpoint-xl)] basis-5/6 xl:basis-5/6"
              >
                <StepCard step={step} />
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4 flex w-full flex-col items-center py-4 pt-8 pr-4 xl:mb-0 xl:py-16">
          <div className="relative z-10 flex items-center gap-4">
            <button
              type="button"
              onClick={goPrev}
              disabled={index === 0}
              className="absolute -left-12 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-card text-xs font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-30 disabled:hover:cursor-not-allowed"
              aria-label="Previous step"
            >
              <ChevronLeft className="h-5 w-5 text-neutral-500" strokeWidth={2.5} />
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={index === total - 1}
              className="absolute -right-12 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-card text-xs font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-30 disabled:hover:cursor-not-allowed"
              aria-label="Next step"
            >
              <ChevronRight className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>

      <div className="flex w-full px-0 xl:hidden">
        <Link
          href="#"
          className="inline-flex h-9 w-full items-center justify-center rounded-lg bg-primary px-4 py-2 text-xs font-semibold leading-[1.35] text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 xl:text-sm"
        >
          Book An Appointment
        </Link>
      </div>
    </section>
  );
}
