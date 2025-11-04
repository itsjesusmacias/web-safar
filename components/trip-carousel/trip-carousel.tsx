"use client";

import { TripCard } from "@/components/trip-card/trip-card";
import { TRIP_IMAGES } from "@/components/float-trip/contants";
import "./trip-carousel.css";

const duplicatedTrips = [...TRIP_IMAGES, ...TRIP_IMAGES];

export const TripCarousel = () => {
  return (
    <div className="md:hidden overflow-hidden py-6 px-6">
      <div className="relative">
        <div className="flex gap-4 animate-scroll">
          {duplicatedTrips.map((trip, index) => (
            <div key={`${trip.src}-${index}`} className="shrink-0">
              <TripCard
                imageUrl={trip.src}
                title={trip.title}
                days={trip.days}
                ageRange={trip.ageRange}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
