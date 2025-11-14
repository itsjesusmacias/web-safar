"use client";

import * as AmplitudeClient from "@amplitude/analytics-browser";
import { EVENTS } from "./analytics-keys";

const AMPLITUDE_API_KEY = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY!;

class Amplitude {
  constructor() {
    this.initAmplitude();
  }

  private initAmplitude() {
    if (typeof window !== "undefined") {
      AmplitudeClient.init(AMPLITUDE_API_KEY, {
        autocapture: true,
        serverZone: "EU",
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

export default new Amplitude();
