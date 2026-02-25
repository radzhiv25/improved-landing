import Header from "@/components/navbar/Header";
import HeroSection from "@/components/hero/HeroSection";
import InsightsSection from "@/components/insights/InsightsSection";
import AncillarySection from "@/components/ancillary/AncillarySection";
import CTABannerSection from "@/components/cta-banner/CTABannerSection";
import GuidesAndCommunitySection from "@/components/guides/GuidesAndCommunitySection";
import FAQSection from "@/components/faq/FAQSection";
import PropsochOverviewSection from "@/components/propsoch-overview/PropsochOverviewSection";
import Footer from "@/components/footer/Footer";
import StatsSection from "@/components/hero/StatsSection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import GHBStepsSection from "@/components/ghb-steps/GHBStepsSection";
import ComparisonSection from "@/components/comparison/ComparisonSection";
import ValuePropositionSection from "@/components/hero/ValuePropositionSection";

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
        <ValuePropositionSection />
        <InsightsSection />
        <AncillarySection />
        <CTABannerSection />
        <GuidesAndCommunitySection />
        <FAQSection />
        <PropsochOverviewSection />
      </main>
      <Footer />
    </div>
  );
}
