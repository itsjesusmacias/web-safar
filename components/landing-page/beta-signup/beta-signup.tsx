"use client";

import { useState, useRef, useEffect } from "react";
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
import { createClient } from "@/lib/supabase/client";
import { toast } from "sonner";
import JSConfetti from "js-confetti";
import { useLocalStorage } from "@/hooks/use-local-storage";

type SocialType = "instagram" | "tiktok" | "email";

export function BetaSignup() {
  const t = useTranslations("betaSignup");
  const [socialType, setSocialType] = useState<SocialType>("instagram");
  const [value, setValue] = useState("");
  const supabase = createClient();
  const jsConfettiRef = useRef<JSConfetti | null>(null);
  const [isBetaSignup, setIsBetaSignup, isBetaSignupLoading] = useLocalStorage(
    "isBetaSignup",
    false
  );

  useEffect(() => {
    jsConfettiRef.current = new JSConfetti();

    return () => {
      if (jsConfettiRef.current) {
        jsConfettiRef.current.clearCanvas();
      }
    };
  }, []);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isBetaSignup) {
      return;
    }

    if (!value.trim()) {
      toast.error(t("validationError"));
      return;
    }

    const { error } = await supabase.from("beta_signups").insert({
      social_type: socialType,
      value,
    });

    if (error) {
      console.error("Error inserting beta signup", error);
      toast.error(t("validationError"));
      return;
    }

    Amplitude.track(EVENTS.SEND_JOIN_THE_BETA_FORM, {
      socialType,
      value,
    });

    toast.success(t("successMessage", { socialType, value }));

    setIsBetaSignup(true);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      <div className="flex flex-row gap-2 md:gap-4">
        <Select
          disabled={isBetaSignup}
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
          disabled={isBetaSignup}
          type={socialType === "email" ? "email" : "text"}
          placeholder={getPlaceholder()}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="flex-1"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full cursor-pointer"
        disabled={isBetaSignup}
      >
        {t("button")}
      </Button>
    </form>
  );
}
