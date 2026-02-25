"use client";

import Link from "next/link";
import Image from "next/image";

const CLOUD_FRONT = "https://d1zk2x7mtoyb2b.cloudfront.net/websiteAssets/landing-page";

export default function CTABannerSection() {
  return (
    <section
      id="cta-banner"
      className="flex w-full flex-col items-center py-12 xl:py-24"
      aria-label="Call to action"
    >
      <div className="w-full max-w-[1200px] px-4 pb-8 text-center xl:px-24 xl:pt-12 xl:pb-12">
        <h2 className="text-2xl font-normal leading-[1.35] text-primary-foreground xl:text-[2.5rem]">
          Experience delightful
          <br className="xl:hidden" />
          {" "}
          <span className="relative inline align-bottom">
            home buying
            <span className="relative ml-1 hidden xl:inline-block">
              <Image
                src={`${CLOUD_FRONT}/cta-banner-image-2.png`}
                alt=""
                width={150}
                height={117}
                className="inline align-bottom"
              />
              <span
                className="absolute -right-6 -top-5 z-10 font-normal text-[#A6ACBD] text-base leading-[1.35]"
                style={{ fontFamily: "var(--font-pacifico), cursive" }}
              >
                Dream Home
              </span>
            </span>
          </span>
          {" "}so your loved ones{" "}
          <span className="relative inline align-bottom">
            <span className="relative mx-1 hidden xl:inline-block">
              <Image
                src={`${CLOUD_FRONT}/cta-banner-image-3.png`}
                alt=""
                width={150}
                height={100}
                className="-mt-1 inline align-bottom"
              />
              <span
                className="absolute -left-4 top-24 z-10 font-normal text-[#A6ACBD] text-base leading-[1.35]"
                style={{ fontFamily: "var(--font-pacifico), cursive" }}
              >
                Happy Family
              </span>
            </span>
          </span>
          can say home sweet home.
        </h2>

        {/* Mobile: show images below headline */}
        <div className="mt-6 flex flex-col items-center gap-6 xl:hidden">
          <div className="relative">
            <Image
              src={`${CLOUD_FRONT}/cta-banner-image-2.png`}
              alt=""
              width={150}
              height={117}
              className="scale-75 align-bottom"
            />
            <span
              className="absolute right-2 top-0 font-normal text-[#A6ACBD] text-sm leading-[1.35] xl:text-lg"
              style={{ fontFamily: "var(--font-pacifico), cursive" }}
            >
              Dream Home
            </span>
          </div>
          <div className="relative">
            <Image
              src={`${CLOUD_FRONT}/cta-banner-image-3.png`}
              alt=""
              width={150}
              height={100}
              className="-mt-1 align-middle"
            />
            <span
              className="absolute left-0 top-28 font-normal text-[#A6ACBD] text-sm leading-[1.35] xl:text-base"
              style={{ fontFamily: "var(--font-pacifico), cursive" }}
            >
              Happy Family
            </span>
          </div>
        </div>
      </div>

      <div className="w-full max-w-screen-xl px-4 text-center">
        <Link
          href="#"
          className="inline-flex h-9 w-full items-center justify-center rounded-lg bg-primary px-4 py-2 text-xs font-semibold leading-[1.35] text-white shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 xl:w-auto xl:text-sm"
        >
          Book An Appointment
        </Link>
      </div>
    </section>
  );
}
