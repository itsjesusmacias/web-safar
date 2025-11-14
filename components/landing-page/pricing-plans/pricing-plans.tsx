import { getTranslations } from "next-intl/server";
import { PlanCard } from "@/components/landing-page/plan-card/plan-card";
import Image from "next/image";
import { plans } from "./contants";
import Amplitude from "@/analytics/amplitude";
import { EVENTS } from "@/analytics/analytics-keys";

const PricingPlans = async () => {
  const t = await getTranslations("pricing");

  return (
    <section
      id="pricing"
      className="my-10 md:my-16 flex flex-col items-center justify-center px-4"
    >
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-2xl font-semibold text-center md:text-2xl md:font-bold mb-0">
          {t("title")}
        </h2>

        <Image
          src="/draw/Underline_06.png"
          alt="Base"
          width={100}
          height={100}
          className="-mt-2 mx-auto"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {plans.map((plan) => (
          <PlanCard
            key={plan.key}
            name={t(`plans.${plan.key}.name`)}
            price={t(`plans.${plan.key}.price`)}
            pricePeriod={t(`plans.${plan.key}.pricePeriod`)}
            features={plan.features.map((feature) => ({
              text: t(`plans.${plan.key}.features.${feature.key}`),
              included: feature.included,
            }))}
            buttonText={t("buttonText")}
            isHighlighted={plan.isPro}
          />
        ))}
      </div>

      <p className="text-[12px] text-left md:text-right text-gray-500 mt-4 w-full ">
        {t("cancelText")}
      </p>
    </section>
  );
};

export { PricingPlans };
