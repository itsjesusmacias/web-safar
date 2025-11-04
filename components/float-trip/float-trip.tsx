import Image from "next/image";
import { HTMLAttributes } from "react";
import { useTranslations } from "next-intl";

export type Position =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "middle-left"
  | "middle-right";

interface FloatCircleProps extends HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  title: string;
  days: number;
  ageRange: string;
  position: Position;
  className?: string;
}

type Props = FloatCircleProps;

const positionStyles: Record<Position, string> = {
  "top-left": "top-10 left-0 -translate-x-0 -translate-y-2",
  "top-right": "top-10 right-0 translate-x-0 -translate-y-2",
  "bottom-left": "bottom-0 left-0 -translate-x-0 translate-y-1",
  "bottom-right": "bottom-0 right-0 translate-x-0 translate-y-1",
  "middle-left": "top-1/2 left-0 -translate-x-50 -translate-y-1/2",
  "middle-right": "top-1/2 right-0 translate-x-50 -translate-y-1/2",
};

export const FloatTrip = ({
  imageUrl,
  title,
  days,
  ageRange,
  position,
  className,
  ...attrs
}: Props) => {
  const t = useTranslations("home");

  return (
    <div
      className={`absolute hidden lg:block ${positionStyles[position]} ${
        className ?? ""
      }`}
      {...attrs}
    >
      <div className="flex flex-col">
        {/* Card con imagen */}
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
    </div>
  );
};
