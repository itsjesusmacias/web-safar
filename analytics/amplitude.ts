"use client";

import * as amplitude from "@amplitude/analytics-browser";

const AMPLITUDE_API_KEY = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY!;

function initAmplitude() {
  if (typeof window !== "undefined") {
    amplitude.init(AMPLITUDE_API_KEY, {
      autocapture: true,
      serverZone: "EU",
    });
  }
}

initAmplitude();

export const Amplitude = () => null;
export default amplitude;
