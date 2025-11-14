"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";
import Amplitude from "@/analytics/amplitude";
import { EVENTS } from "@/analytics/analytics-keys";
import { useCallback } from "react";

const faqItems = [
  {
    key: "launchDate",
  },
  {
    key: "projectGoal",
  },
  {
    key: "plansAndPricing",
  },
  {
    key: "verification",
  },
  {
    key: "suggestions",
  },
];

const FAQContent = () => {
  const t = useTranslations("faq");

  const handleClick = useCallback((itemKey: string) => {
    Amplitude.track(EVENTS.CLICK_FAQ_CONTENT, {
      item: itemKey,
    });
  }, []);

  return (
    <section id="faq" className="py-10 md:py-16 px-4">
      <div className="md:w-[600px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          {t("title")}
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item) => (
            <AccordionItem key={item.key} value={item.key}>
              <AccordionTrigger
                className="text-left font-medium text-md"
                onClick={() => handleClick(item.key)}
              >
                {t(`${item.key}.question`)}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-regular">
                {t(`${item.key}.answer`)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export { FAQContent };
