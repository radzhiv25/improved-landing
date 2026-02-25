import Image from "next/image";
import type { Testimonial } from "@/data/testimonials-data";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { name, title, quote, image, fallbackLetter } = testimonial;

  return (
    <article className="flex h-auto flex-col rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-4 flex shrink-0">
        <div className="relative flex h-14 w-14 overflow-hidden">
          {image ? (
            <Image
              src={image}
              alt=""
              width={56}
              height={56}
              className="object-cover"
            />
          ) : (
            <span className="flex size-full items-center justify-center font-medium text-primary">
              {fallbackLetter ?? name.charAt(0)}
            </span>
          )}
        </div>
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm leading-relaxed text-primary-foreground md:text-base">
          {quote}
        </p>
      </div>
      <footer className="mt-4 shrink-0 border-t border-neutral-100 pt-4">
        <p className="font-semibold text-primary-foreground">{name}</p>
        <p className="text-sm text-primary">{title}</p>
      </footer>
    </article>
  );
}
