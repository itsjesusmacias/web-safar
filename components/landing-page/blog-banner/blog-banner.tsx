"use client";

import { Button } from "../../ui/button";
import Amplitude from "@/analytics/amplitude";
import { EVENTS } from "@/analytics/analytics-keys";
import { useTranslations } from "next-intl";

const BlogBanner = async () => {
  const t = useTranslations("blogBanner");

  return (
    <section className="bg-primary py-10">
      <div className="px-4 md:px-0 md:w-[850px] mx-auto text-white">
        <div className="flex flex-row justify-between md:items-center md:mb-8 mb-4">
          <h3 className="text-2xl font-bold">{t("title")}</h3>
          <Button
            variant="link"
            className="hidden md:block bg-white text-black rounded-3xl hover:bg-accent hover:text-accent-foreground cursor-pointer"
            onClick={() =>
              Amplitude.track(EVENTS.CLICK_READ_MORE_BLOG_BANNER, {})
            }
          >
            {t("readMore")}
          </Button>
        </div>
        <p className="hidden md:block font-semibold text-lg">
          {t("desktop.description")}
        </p>
        <p className="block md:hidden font-medium text-regular">
          {t("mobile.descriptionPart1")}
        </p>
        <p className="block md:hidden font-medium text-regular mt-2">
          {t("mobile.descriptionPart2")}
        </p>
        <Button
          variant="link"
          className="block md:hidden mt-4 w-full bg-white text-black rounded-3xl hover:bg-accent hover:text-accent-foreground cursor-pointer"
        >
          {t("readMore")}
        </Button>
      </div>
    </section>
  );
};

export { BlogBanner };
