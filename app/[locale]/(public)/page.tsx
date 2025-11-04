import { getTranslations } from "next-intl/server";
import { Navbar } from "@/components/navbar/navbar";
import { Hero } from "@/components/hero/hero";
import { Banner } from "@/components/banner/banner";

export default async function Home() {
  const t = await getTranslations("home");

  return (
    <div className="w-full min-h-screen bg-diamond">
      <div className="relative md:w-[850px] mx-auto">
        <Navbar />
        <Hero />
        <Banner />
      </div>
    </div>
  );
}
