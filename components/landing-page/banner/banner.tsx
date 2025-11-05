import { getTranslations } from "next-intl/server";
import Image from "next/image";

export const Banner = async () => {
  const t = await getTranslations("home");

  return (
    <>
      <section className="hidden md:flex flex-row gap-6 mt-14 relative">
        <h3 className="text-lg font-bold flex-1">
          {t("desktop.shareYourTrip")}
        </h3>
        <div className="flex-2 relative">
          <div className="absolute -top-42 left-40 ">
            <Image
              src="/draw/Arrow_01.png"
              alt="Arrow pointing to hero"
              width={160}
              height={160}
            />
          </div>
          <p className="text-lg">
            {t.rich("desktop.premiumFeatures", {
              highlight: (chunks) => (
                <span className="underline decoration-wavy decoration-[#FFC107]">
                  {chunks}
                </span>
              ),
            })}
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-2 px-6 md:hidden mb-2">
        <h3 className="text-lg font-bold">{t("mobile.shareYourTrip")}</h3>
        <p className="text-md max-w-[260px]">
          {t.rich("mobile.premiumFeatures", {
            highlight: (chunks) => (
              <span className="underline decoration-wavy decoration-[#FFC107]">
                {chunks}
              </span>
            ),
          })}
        </p>
      </section>
    </>
  );
};
