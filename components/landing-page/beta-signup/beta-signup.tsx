"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Amplitude from "@/analytics/amplitude";
import { EVENTS } from "@/analytics/analytics-keys";

type SocialType = "instagram" | "tiktok" | "email";

export function BetaSignup() {
  const t = useTranslations("betaSignup");
  const [socialType, setSocialType] = useState<SocialType>("instagram");
  const [value, setValue] = useState("");

  const getPlaceholder = () => {
    switch (socialType) {
      case "instagram":
        return t("instagramPlaceholder");
      case "tiktok":
        return t("tiktokPlaceholder");
      case "email":
        return t("emailPlaceholder");
      default:
        return "";
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!value.trim()) {
      //alert(t("validationError"));
      return;
    }

    // TODO toast y confetti

    Amplitude.track(EVENTS.SEND_JOIN_THE_BETA_FORM, {
      socialType,
      value,
    });

    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      <div className="flex flex-row gap-2 md:gap-4">
        <Select
          value={socialType}
          onValueChange={(value) => setSocialType(value as SocialType)}
        >
          <SelectTrigger className="md:w-[35%]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="instagram">
              {t("socialTypes.instagram")}
            </SelectItem>
            <SelectItem value="tiktok">{t("socialTypes.tiktok")}</SelectItem>
            <SelectItem value="email">{t("socialTypes.email")}</SelectItem>
          </SelectContent>
        </Select>

        <Input
          type={socialType === "email" ? "email" : "text"}
          placeholder={getPlaceholder()}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="flex-1"
        />
      </div>

      <Button
        id="confetti-button"
        type="submit"
        size="lg"
        className="w-full cursor-pointer"
      >
        {t("button")}
      </Button>
    </form>
  );
}
