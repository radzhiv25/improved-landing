import Header from "@/components/navbar/Header";
import HeroSection from "@/components/hero/HeroSection";
import StatsSection from "@/components/hero/StatsSection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import GHBStepsSection from "@/components/ghb-steps/GHBStepsSection";
import ComparisonSection from "@/components/comparison/ComparisonSection";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <TestimonialsSection />
        <GHBStepsSection />
        <ComparisonSection />
      </main>
    </div>
  );
}
