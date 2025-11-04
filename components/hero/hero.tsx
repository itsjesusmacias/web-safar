import { getTranslations } from "next-intl/server";
import { BetaSignup } from "@/components/beta-signup/beta-signup";
import { FloatTrip } from "@/components/float-trip/float-trip";
import { TRIP_IMAGES } from "@/components/float-trip/contants";

export async function Hero() {
  const t = await getTranslations("hero");

  return (
    <div className="relative py-4 md:py-16">
      <section className="my-4 px-6 md:px-0 md:my-16 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-8 w-full md:w-[400px]">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-center">
            {t("title")}
          </h1>
          <BetaSignup />
        </div>
      </section>
      {TRIP_IMAGES.map((trip) => (
        <FloatTrip
          key={trip.src}
          imageUrl={trip.src}
          title={trip.title}
          days={trip.days}
          ageRange={trip.ageRange}
          position={trip.position}
        />
      ))}
    </div>
  );
}
