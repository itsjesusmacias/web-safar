"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Amplitude from "@/analytics/amplitude";
import { EVENTS } from "@/analytics/analytics-keys";

const NAV_LINKS = [
  { key: "faq", href: "/#faq" },
  { key: "pricing", href: "/#pricing" },
  { key: "howItWorks", href: "/#how-it-works" },
  { key: "mission", href: "/mission" },
];

interface NavbarProps {
  handleClickFAQ: () => void;
  handleClickPricing: () => void;
  handleClickHowItWorks: () => void;
  handleClickBlog: () => void;
  handleClickLogo: () => void;
}

const NavbarDesktop = ({
  handleClickFAQ,
  handleClickPricing,
  handleClickHowItWorks,
  handleClickBlog,
  handleClickLogo,
}: NavbarProps) => {
  const t = useTranslations("navbar");

  return (
    <div className="hidden w-full items-center md:flex">
      <div className="flex w-1/3 justify-end gap-6">
        <Link
          href={NAV_LINKS[0].href}
          className="text-sm font-medium transition-colors hover:text-primary"
          onClick={handleClickFAQ}
        >
          {t("faq")}
        </Link>
        <Link
          href={NAV_LINKS[1].href}
          className="text-sm font-medium transition-colors hover:text-primary"
          onClick={handleClickPricing}
        >
          {t("pricing")}
        </Link>
      </div>

      <Link
        href="/"
        className="flex w-1/3 items-center justify-center"
        onClick={handleClickLogo}
      >
        <Image
          src="/safar-logo.png"
          alt="Safar"
          width={80}
          height={40}
          priority
        />
      </Link>

      <div className="flex w-1/3 justify-start gap-6">
        <Link
          href={NAV_LINKS[2].href}
          className="text-sm font-medium transition-colors hover:text-primary"
          onClick={handleClickHowItWorks}
        >
          {t("howItWorks")}
        </Link>
        <Link
          href={NAV_LINKS[3].href}
          className="text-sm font-medium transition-colors hover:text-primary"
          onClick={handleClickBlog}
        >
          {t("mission")}
        </Link>
      </div>
    </div>
  );
};

const NavbarMobile = ({
  handleClickFAQ,
  handleClickPricing,
  handleClickHowItWorks,
  handleClickBlog,
  handleClickLogo,
}: NavbarProps) => {
  const t = useTranslations("navbar");

  const handleClickDictionary: Record<string, () => void> = {
    faq: handleClickFAQ,
    pricing: handleClickPricing,
    howItWorks: handleClickHowItWorks,
    blog: handleClickBlog,
    logo: handleClickLogo,
  };

  return (
    <div className="flex w-full items-center justify-between md:hidden">
      <Link href="/" className="flex items-center">
        <Image
          src="/safar-logo.png"
          alt="Safar"
          width={60}
          height={30}
          priority
          onClick={handleClickLogo}
        />
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-52 p-4 border-gray-100">
          {NAV_LINKS.map((link) => (
            <DropdownMenuItem key={link.key} asChild>
              <Link
                href={link.href}
                className="cursor-pointer"
                onClick={handleClickDictionary[link.key]}
              >
                {t(link.key)}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export function Navbar() {
  const handleClickFAQ = () => {
    Amplitude.track(EVENTS.CLICK_FAQ, {});
  };
  const handleClickPricing = () => {
    Amplitude.track(EVENTS.CLICK_PRICING, {});
  };
  const handleClickHowItWorks = () => {
    Amplitude.track(EVENTS.CLICK_HOW_IT_WORKS, {});
  };
  const handleClickBlog = () => {
    Amplitude.track(EVENTS.CLICK_BLOG, {});
  };

  const handleClickLogo = () => {
    Amplitude.track(EVENTS.CLICK_LOGO, {});
  };

  return (
    <nav className="w-full">
      <div className="mx-auto px-[14px] md:max-w-[900px] md:px-0">
        <div className="flex h-16 items-center justify-between">
          <NavbarMobile
            handleClickFAQ={handleClickFAQ}
            handleClickPricing={handleClickPricing}
            handleClickHowItWorks={handleClickHowItWorks}
            handleClickBlog={handleClickBlog}
            handleClickLogo={handleClickLogo}
          />
          <NavbarDesktop
            handleClickFAQ={handleClickFAQ}
            handleClickPricing={handleClickPricing}
            handleClickHowItWorks={handleClickHowItWorks}
            handleClickBlog={handleClickBlog}
            handleClickLogo={handleClickLogo}
          />
        </div>
      </div>
    </nav>
  );
}
