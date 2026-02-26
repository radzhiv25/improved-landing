"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Play, X } from "lucide-react";

/** Replace with your founder message video URL (YouTube, Vimeo, or direct MP4). */
const FOUNDER_VIDEO_URL = "https://youtu.be/RqBYQJRqUXs";

/** Convert YouTube watch/short URL to embed URL, or return as-is for other URLs. */
function getEmbedVideoUrl(url: string): string {
  try {
    const u = new URL(url);
    if (u.hostname === "www.youtube.com" && u.searchParams.get("v")) {
      return `https://www.youtube.com/embed/${u.searchParams.get("v")}?autoplay=1`;
    }
    if (u.hostname === "youtu.be") {
      return `https://www.youtube.com/embed/${u.pathname.slice(1)}?autoplay=1`;
    }
    if (u.hostname === "vimeo.com") {
      const id = u.pathname.replace(/\D/g, "") || u.pathname.split("/").pop();
      return `https://player.vimeo.com/video/${id}?autoplay=1`;
    }
  } catch {
    // ignore
  }
  return url;
}

export default function HeroSection() {
  const [city, setCity] = useState<"Bangalore" | "Mumbai">("Bangalore");
  const [videoOpen, setVideoOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openVideo = () => setVideoOpen(true);
  const closeVideo = () => {
    setVideoOpen(false);
    dialogRef.current?.close();
  };

  // Only open the dialog after it's mounted (so it never opens on page load)
  useEffect(() => {
    if (videoOpen && dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, [videoOpen]);

  const embedUrl = getEmbedVideoUrl(FOUNDER_VIDEO_URL);
  const isEmbed = embedUrl !== FOUNDER_VIDEO_URL;

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
        <p className="mb-6 max-w-lg text-base leading-relaxed text-neutral-600 md:text-lg">
          Get end-to-end guidance from property wizards who&apos;ve helped intelligent homebuyers
          like you buy 200+ homes in the last year alone.
        </p>

        <button
          type="button"
          onClick={openVideo}
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/10 hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
            <Play className="h-4 w-4 fill-primary text-primary" />
          </span>
          Hear from our founder
        </button>

        {videoOpen && (
          <dialog
            ref={dialogRef}
            onCancel={closeVideo}
            onClick={(e) => e.target === dialogRef.current && closeVideo()}
            className="fixed left-0 top-0 z-50 h-full w-full max-w-none border-0 bg-transparent p-0 shadow-none backdrop:bg-black/50 [&::backdrop]:bg-black/50"
            style={{ margin: 0 }}
            aria-modal
            aria-labelledby="founder-video-title"
          >
            <div className="flex min-h-full w-full items-center justify-center p-4">
              <div className="relative flex max-h-[60vh] w-[60vw] max-w-full flex-col overflow-hidden rounded-xl bg-neutral-900 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between gap-2 border-b border-neutral-700 px-4 py-3">
              <h2 id="founder-video-title" className="text-sm font-semibold text-white">
                Hear from our founder
              </h2>
              <button
                type="button"
                onClick={closeVideo}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-neutral-400 transition-colors hover:bg-neutral-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="min-h-0 flex-1 bg-black">
              <div className="aspect-video h-full w-full">
              {isEmbed ? (
                <iframe
                  src={videoOpen ? embedUrl : undefined}
                  title="Founder message"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  src={FOUNDER_VIDEO_URL}
                  controls
                  autoPlay
                  className="h-full w-full"
                  title="Founder message"
                />
              )}
            </div>
              </div>
            </div>
            </div>
        </dialog>
        )}

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
