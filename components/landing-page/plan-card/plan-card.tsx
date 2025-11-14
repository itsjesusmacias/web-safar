"use client";

import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Amplitude from "@/analytics/amplitude";
import { EVENTS } from "@/analytics/analytics-keys";
import { useCallback } from "react";

interface Feature {
  text: string;
  included: boolean;
}

interface PlanCardProps {
  name: string;
  price: string;
  pricePeriod: string;
  features: Feature[];
  buttonText: string;
  isHighlighted?: boolean;
}

export const PlanCard = ({
  name,
  price,
  pricePeriod,
  features,
  buttonText,
  isHighlighted = false,
}: PlanCardProps) => {
  const handleClick = useCallback(
    (planKey: string) => {
      Amplitude.track(EVENTS.CLICK_PRICING_PLAN, {
        plan: planKey,
      });
    },
    [name]
  );

  return (
    <div
      className={cn(
        "rounded-lg p-6 bg-white shadow-md border-2 flex flex-col",
        isHighlighted ? "border-primary" : "border-gray-200"
      )}
    >
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-sm text-gray-500">{pricePeriod}</span>
        </div>
      </div>

      <ul className="flex-1 space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            {feature.included ? (
              <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            ) : (
              <X className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
            )}
            <span
              className={cn(
                "text-sm",
                feature.included ? "text-gray-900" : "text-gray-400"
              )}
            >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      <div className="space-y-2">
        <Button
          className="w-full cursor-pointer"
          variant="default"
          onClick={() => handleClick(name)}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};
