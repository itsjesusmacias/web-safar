import { useTranslations } from "next-intl";
import Image from "next/image";

interface TripCardProps {
  imageUrl: string;
  title: string;
  days: number;
  ageRange: string;
}

const TripCard = ({ imageUrl, title, days, ageRange }: TripCardProps) => {
  const t = useTranslations("home");

  return (
    <div className="flex flex-col">
      <div className="relative w-[150px] h-[150px] rounded-lg overflow-hidden shadow-lg">
        <Image
          src={imageUrl}
          alt={title}
          width={150}
          height={150}
          className="w-full h-full object-cover"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent">
          <div className="absolute bottom-4 left-3">
            <span className="text-white text-xs font-semibold">
              {days} {t("days")}
            </span>
          </div>

          <div className="absolute bottom-4 right-2">
            <span className="bg-white text-gray-800 px-1.5 py-1 rounded-full text-[8px] font-medium">
              {ageRange}
            </span>
          </div>
        </div>
      </div>

      <h3 className="mt-2 text-sm font-bold text-foreground max-w-[150px] line-clamp-2">
        {title}
      </h3>
    </div>
  );
};

export { TripCard };
