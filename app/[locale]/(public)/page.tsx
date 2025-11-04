import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar/navbar";

export default async function Home() {
  const t = await getTranslations("home");

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="mx-auto w-full px-[14px] md:max-w-[900px] md:px-0">
          <div className="flex min-h-screen flex-col items-center justify-between py-32 sm:items-start">
            <h1 className="text-4xl font-bold">{t("title")}</h1>
            <p className="text-lg text-gray-500">{t("description")}</p>
            <Button>{t("button")}</Button>
          </div>
        </main>
      </div>
    </>
  );
}
