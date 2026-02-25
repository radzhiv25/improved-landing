"use client";

import { useState, useEffect, useRef } from "react";

const STATS = [
  { value: 2750, suffix: "+", label: "Hours of Advice" },
  { value: 520, suffix: "M+", label: "Sq. Feet Analyzed" },
  { value: 210, suffix: "+", label: "Partner Builders" },
  { value: 500, suffix: "+", label: "Projects Across Bangalore" },
] as const;

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

function AnimatedStat({
  value,
  suffix,
  label,
  inView,
}: {
  value: number;
  suffix: string;
  label: string;
  inView: boolean;
}) {
  const count = useCountUp(value, inView);

  return (
    <div className="flex flex-col items-center text-center">
      <div
        className="font-semibold tabular-nums tracking-tight text-primary-foreground transition-all duration-150 md:text-2xl lg:text-3xl"
        aria-hidden
      >
        <span>{count.toLocaleString()}</span>
        <span>{suffix}</span>
      </div>
      <p className="mt-1 text-sm text-neutral-500">{label}</p>
    </div>
  );
}

export default function StatsSection() {
  const { ref, inView } = useInView(0.15);

  return (
    <div ref={ref} className="w-full border-t border-neutral-200/80 bg-white px-4 py-12 md:py-16">
      <p className="mb-10 text-center text-sm text-neutral-500">
        Trusted by 1000+ intelligent homebuyers
      </p>
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
        {STATS.map((stat) => (
          <AnimatedStat
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            inView={inView}
          />
        ))}
      </div>
    </div>
  );
}
