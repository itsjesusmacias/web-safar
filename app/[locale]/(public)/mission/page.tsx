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
              <p className="text-lg text-muted-foreground">{t("intro")}</p>
            </div>

            <div className="space-y-8 text-muted-foreground">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  {t("aboutMe.title")}
                </h2>
                <div className="space-y-3">
                  {t("aboutMe.content")
                    .split("\n")
                    .filter((line) => line.trim())
                    .map((line, index) => (
                      <p key={index}>{line.trim()}</p>
                    ))}
                  <p className="italic font-medium text-foreground">
                    {t("aboutMe.quote")}
                  </p>
                  {t("aboutMe.contentAfterQuote")
                    .split("\n")
                    .filter((line) => line.trim())
                    .map((line, index) => (
                      <p key={index}>{line.trim()}</p>
                    ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  {t("theIdea.title")}
                </h2>
                <div className="space-y-3">
                  {t("theIdea.content")
                    .split("\n")
                    .filter((line) => line.trim())
                    .map((line, index) => (
                      <p key={index}>{line.trim()}</p>
                    ))}
                  <p className="font-medium text-foreground">
                    {t("theIdea.launchDate")}
                  </p>
                </div>
              </div>

              <div className="pt-8 border-t">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  {t("beta.title")}
                </h2>
                <p className="mb-6">
                  {t.rich("beta.description", {
                    highlight: (chunks) => (
                      <span className="underline decoration-wavy decoration-[#FFC107]">
                        {chunks}
                      </span>
                    ),
                  })}
                </p>
                <BetaSignup />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
