import React from "react";
import type { Metadata } from "next";
import { TestLandingTemplate } from "@/components/seo/TestLandingTemplate";

export const metadata: Metadata = {
  title: "Pixel Test Online — Screen & Pixel Health Check | PixelCheck365",
  description:
    "Run a free pixel test online with PixelCheck365. Comprehensive subpixel diagnostics, solid color screens, and screen uniformity evaluation for all displays.",
  keywords: [
    "pixelcheck365",
    "pixel test",
    "pixel checker",
    "dead pixel test online",
    "screen test online",
    "display test",
  ],
  alternates: {
    canonical: "/pixel-test",
  },
};

export default function PixelTestPage() {
  return (
    <TestLandingTemplate
      title="Pixel Test Online"
      subtitle="Complete screen pixel health test for computer monitors, laptops, tablets, and smartphones."
      badge="Full Pixel Test"
      testMode="fullscreen"
      colorSequenceNames={["White", "Black", "Red", "Green", "Blue", "Cyan", "Magenta", "Yellow", "Gray 50%", "Gray 25%"]}
      overview="PixelCheck365 Pixel Test is an all-in-one diagnostic utility that tests every subpixel across primary, secondary, and grayscale spectrums to uncover pixel abnormalities, brightness drops, and color tinting."
      whatToLookFor={[
        "Inactive black dots (dead pixels) on bright screens.",
        "Brightly glowing colored dots (stuck pixels) on black screens.",
        "Subpixel color imbalance or tinting across panel regions.",
        "Backlight bleeding around screen borders.",
      ]}
      prepTips={[
        "Maximize screen brightness and clean screen with a soft cloth.",
        "Use arrow keys or touch gestures to cycle through test colors.",
        "Inspect from multiple angles to check panel color shift.",
      ]}
      faqs={[
        {
          q: "What devices can run this pixel test?",
          a: "Any device with a modern web browser, including Windows 10/11 PCs, MacBooks, iMacs, iPhones, iPads, Android smartphones, Chromebooks, and Smart TVs.",
        },
      ]}
    />
  );
}
