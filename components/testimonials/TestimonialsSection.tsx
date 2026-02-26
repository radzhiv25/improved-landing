"use client";

import { useRef, useEffect, useState } from "react";
import { testimonials } from "@/data/testimonials-data";
import TestimonialCard from "./TestimonialCard";

const AUTO_SCROLL_INTERVAL_MS = 4500;

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function useCountUp(end: number, inView: boolean, durationMs = 1800) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;
    const start = performance.now();
    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = easeOutExpo(progress);
      setCount(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [end, inView, durationMs]);

  return count;
}

function useInView(threshold = 0.2) {
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

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { ref: sectionRef, inView } = useInView(0.15);
  const count1000 = useCountUp(1000, inView, 1600);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const tick = () => {
      if (!el) return;
      const card = el.querySelector("[data-testimonial-card]") as HTMLElement | null;
      const cardWidth = card?.offsetWidth ?? 320;
      const gap = 24;
      const step = cardWidth + gap;
      const maxScroll = el.scrollWidth - el.clientWidth;

      if (maxScroll <= 0) return;

      const next = el.scrollLeft + step;
      if (next >= maxScroll - 1) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: step, behavior: "smooth" });
      }
    };

    const id = setInterval(tick, AUTO_SCROLL_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-neutral-50/50 px-4 py-14 md:py-18"
    >
      <div className="mx-auto max-w-[75vw] sm:max-w-[75%]">
        <p className="mb-3 text-center text-base font-medium text-primary md:text-lg">
          Hear from your fellow homeowners.
        </p>
        <p className="mb-10 max-w-4xl mx-auto text-center text-2xl font-regular leading-snug text-primary-foreground md:text-3xl lg:text-4xl">
          <span className="tabular-nums">{count1000.toLocaleString()}+</span> intelligent homebuyers
          trusted us with their biggest life decision because we helped them{" "}
          <span className="text-primary italic">know if</span> it was the right one.
        </p>

        <div className="relative">
          <div
            ref={scrollRef}
            className="hide-scrollbar flex gap-6 overflow-x-auto overflow-y-hidden pb-4 scroll-smooth"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {testimonials.map((t) => (
              <div
                key={t.name + t.title}
                data-testimonial-card
                className="w-[85vw] shrink-0 sm:w-[380px] xl:w-[calc(25%-18px)]"
                style={{ scrollSnapAlign: "start" }}
              >
                <div className="h-full">
                  <TestimonialCard testimonial={t} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
