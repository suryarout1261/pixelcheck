import React from "react";
import type { Metadata } from "next";
import { TestLandingTemplate } from "@/components/seo/TestLandingTemplate";

export const metadata: Metadata = {
  title: "Monitor Screen Test Online — Test Monitor for Dead Pixels | PixelCheck365",
  description:
    "Test your computer monitor screen online with PixelCheck365. Free full-screen test for dead pixels, backlight bleed, and IPS/VA panel uniformity.",
  keywords: [
    "pixelcheck365",
    "monitor screen test",
    "monitor test",
    "test monitor for dead pixels",
    "LCD screen test",
    "screen defect test",
  ],
  alternates: {
    canonical: "/monitor-screen-test",
  },
};

export default function MonitorScreenTestPage() {
  return (
    <TestLandingTemplate
      title="Monitor Screen Test"
      subtitle="Online diagnostic tool to test monitor screens for dead pixels, stuck subpixels, and backlight abnormalities."
      badge="PC & Monitor Test"
      testMode="fullscreen"
      colorSequenceNames={["Solid White", "Solid Black", "Solid Red", "Solid Green", "Solid Blue", "50% Gray", "25% Dark Gray"]}
      overview="PixelCheck365 Monitor Screen Test generates full-screen test fields to assess monitor color balance, black level depth, and subpixel integrity."
      whatToLookFor={[
        "Tiny dead pixels appearing as dark dots on white, cyan, and yellow screens.",
        "Bright stuck pixels glowing against pure black backgrounds.",
        "Backlight bleed around the monitor bezel edges.",
        "Color tint shifts when viewed straight-on.",
      ]}
      prepTips={[
        "Maximize screen brightness.",
        "Press F11 for distraction-free full-screen testing.",
        "Take 1-2 minutes per color slide to inspect all four quadrants.",
      ]}
      faqs={[
        {
          q: "How to tell if a pixel on a monitor is dead or stuck?",
          a: "If the pixel is completely black on a white or colored screen, it is dead (unpowered transistor). If it glows red, green, or blue on a black screen, it is stuck.",
        },
      ]}
    />
  );
}
