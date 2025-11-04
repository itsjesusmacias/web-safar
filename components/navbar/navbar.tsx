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

const NAV_LINKS = [
  { key: "faq", href: "/" },
  { key: "pricing", href: "/" },
  { key: "howItWorks", href: "/" },
  { key: "blog", href: "/" },
];

const NavbarDesktop = () => {
  const t = useTranslations("navbar");

  return (
    <div className="hidden w-full items-center justify-center gap-4 md:flex mr-[40px]">
      <Link
        href="/"
        className="text-sm font-small transition-colors hover:text-primary max-w-[155px]"
      >
        {t("faq")}
      </Link>
      <Link
        href="/"
        className="text-sm font-small transition-colors hover:text-primary max-w-[155px]"
      >
        {t("pricing")}
      </Link>

      <Link href="/" className="flex items-center mx-6 max-w-[155px]">
        <Image
          src="/safar-logo.png"
          alt="Safar"
          width={80}
          height={40}
          priority
        />
      </Link>

      <Link
        href="/"
        className="text-sm font-small transition-colors hover:text-primary max-w-[155px]"
      >
        {t("howItWorks")}
      </Link>
      <Link
        href="/"
        className="text-sm font-small transition-colors hover:text-primary max-w-[155px]"
      >
        {t("blog")}
      </Link>
    </div>
  );
};

const NavbarMobile = () => {
  const t = useTranslations("navbar");

  return (
    <div className="flex w-full items-center justify-between md:hidden">
      <Link href="/" className="flex items-center">
        <Image
          src="/safar-logo.png"
          alt="Safar"
          width={60}
          height={30}
          priority
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
              <Link href={link.href} className="cursor-pointer">
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
  return (
    <nav className="w-full">
      <div className="mx-auto px-[14px] md:max-w-[900px] md:px-0">
        <div className="flex h-16 items-center justify-between">
          <NavbarMobile />
          <NavbarDesktop />
        </div>
      </div>
    </nav>
  );
}
