import React from "react";
import type { Metadata } from "next";
import { TestLandingTemplate } from "@/components/seo/TestLandingTemplate";

export const metadata: Metadata = {
  title: "Pixel Checker Online — Free Screen Pixel Inspector | PixelCheck365",
  description:
    "Free pixel checker online by PixelCheck365. Detect dead, stuck, and hot pixels with calibrated high-contrast sRGB color slides and magnifier.",
  keywords: [
    "pixelcheck365",
    "pixel checker",
    "pixel checker online",
    "dead pixel checker",
    "screen defect test",
    "monitor test",
  ],
  alternates: {
    canonical: "/pixel-checker",
  },
};

export default function PixelCheckerPage() {
  return (
    <TestLandingTemplate
      title="Pixel Checker Online"
      subtitle="Fast, lightweight, and accurate browser-based display pixel inspector for desktops, laptops, and mobile devices."
      badge="Pixel Checker Tool"
      testMode="dead-pixel"
      colorSequenceNames={["Solid White", "Solid Gray", "Solid Red", "Solid Green", "Solid Blue", "Solid Black"]}
      overview="PixelCheck365 Pixel Checker empowers users to test newly purchased monitors and mobile devices for display anomalies before return windows close."
      whatToLookFor={[
        "Unlit dark pixels on bright backgrounds.",
        "Stuck colored dots on dark screens.",
        "Color reproduction accuracy across pure sRGB color steps.",
      ]}
      prepTips={[
        "Clean the monitor glass to remove dust and fingerprint smudges.",
        "Enter full-screen mode by pressing F11.",
        "Cycle slowly through each color slide.",
      ]}
      faqs={[
        {
          q: "How fast is the pixel checker?",
          a: "The test loads in under 1 second with 0 external tracking scripts or bloat.",
        },
      ]}
    />
  );
}
