"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useCallback } from "react";
import { EVENTS } from "@/analytics/analytics-keys";
import Amplitude from "@/analytics/amplitude";

const Footer = () => {
  const t = useTranslations("footer");

  const handleClickInstagram = useCallback(() => {
    Amplitude.track(EVENTS.CLICK_INSTAGRAM, {});
  }, []);

  const handleClickPrivacyPolicy = useCallback(() => {
    Amplitude.track(EVENTS.CLICK_PRIVACY_POLICY, {});
  }, []);

  return (
    <section className="md:py-0 px-4 bg-gray-200">
      <div className="md:w-[850px] mx-auto">
        <div className="flex flex-row justify-between items-center md:py-4 py-2 md:text-sm text-xs">
          <div className="flex items-center gap-1">
            <p>
              © {new Date().getFullYear()} {t("copyright")}
            </p>
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-foreground transition-colors"
              onClick={handleClickPrivacyPolicy}
            >
              {t("privacyPolicy")}
            </Link>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:bg-accent p-2 rounded-full transition-colors"
            aria-label="Instagram"
            onClick={handleClickInstagram}
          >
            <Image
              src="/instagram.svg"
              alt="Instagram"
              width={20}
              height={20}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export { Footer };
