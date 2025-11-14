"use client";

import * as AmplitudeClient from "@amplitude/unified";
import { EVENTS } from "./analytics-keys";

const AMPLITUDE_API_KEY = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY!;

class Amplitude {
  constructor() {
    this.initAmplitude();
  }

  private initAmplitude() {
    if (typeof window !== "undefined") {
      AmplitudeClient.initAll(AMPLITUDE_API_KEY, {
        serverZone: "EU",
        analytics: {
          autocapture: true,
        },
        sessionReplay: {
          sampleRate: 1,
        },
      });
    }
  }

  track(
    event: (typeof EVENTS)[keyof typeof EVENTS],
    properties: Record<string, any>
  ) {
    AmplitudeClient.track(event, properties);
  }
}

export const AmplitudeProvider = () => null;
export default new Amplitude();
