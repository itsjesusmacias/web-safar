import { getTranslations } from "next-intl/server";
import { Navbar } from "@/components/navbar/navbar";
import { Hero } from "@/components/landing-page/hero/hero";
import { Banner } from "@/components/landing-page/banner/banner";
import { TripCarousel } from "@/components/landing-page/trip-carousel/trip-carousel";
import { HowItWorks } from "@/components/landing-page/how-it-works/how-it-works";
import { PricingPlans } from "@/components/landing-page/pricing-plans/pricing-plans";
import { MissionBanner } from "@/components/landing-page/mission-banner/mission-banner";
import { FAQContent } from "@/components/landing-page/faq/faq";
import { Footer } from "@/components/footer/footer";

export default async function Home() {
  const t = await getTranslations("home");

  return (
    <div className="w-full min-h-screen bg-diamond">
      <div className="relative md:w-[850px] mx-auto">
        <Navbar />
        <Hero />
        <Banner />
        <TripCarousel />
        <HowItWorks />
        <PricingPlans />
      </div>
      <MissionBanner />
      <div className="md:w-[850px] mx-auto">
        <FAQContent />
      </div>
      <Footer />
    </div>
  );
}
