import { getTranslations } from "next-intl/server";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";

export default async function PrivacyPage() {
  const t = await getTranslations("privacy");

  return (
    <div className="flex min-h-screen flex-col bg-diamond">
      <div className="relative md:w-[850px] mx-auto w-full flex-1">
        <Navbar />
        <section className="py-10 md:py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">
              {t("title")}
            </h1>

            <div className="space-y-6 text-muted-foreground">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  {t("section1.title")}
                </h2>
                <p>{t("section1.content")}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  {t("section2.title")}
                </h2>
                <p>{t("section2.content")}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  {t("section3.title")}
                </h2>
                <p>{t("section3.content")}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  {t("section4.title")}
                </h2>
                <p>{t("section4.content")}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  {t("section5.title")}
                </h2>
                <p>{t("section5.content")}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
