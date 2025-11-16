import { getTranslations } from "next-intl/server";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { BetaSignup } from "@/components/landing-page/beta-signup/beta-signup";

export default async function MissionPage() {
  const t = await getTranslations("mission");

  return (
    <div className="w-full min-h-screen bg-diamond">
      <div className="relative md:w-[850px] mx-auto">
        <Navbar />
        <section className="py-10 md:py-16 px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {t("title")}
              </h1>
            </div>

            <div className="space-y-8 text-muted-foreground">
              <div className="space-y-3 whitespace-pre-line">
                {t.rich("content", {
                  highlight: (chunks) => (
                    <span className="underline decoration-wavy decoration-[#FFC107]">
                      {chunks}
                    </span>
                  ),
                })}
              </div>

              <BetaSignup />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
