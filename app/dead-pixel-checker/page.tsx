import React from "react";
import type { Metadata } from "next";
import { TestLandingTemplate } from "@/components/seo/TestLandingTemplate";

export const metadata: Metadata = {
  title: "Dead Pixel Checker Online — Free Screen Inspector | PixelCheck365",
  description:
    "Free dead pixel checker online. Inspect PC monitors, MacBooks, laptops, iPhones, and Android displays for defective pixels and subpixel anomalies with PixelCheck365.",
  keywords: [
    "pixelcheck365",
    "dead pixel checker",
    "dead pixel checker online",
    "dead pixel test",
    "pixel checker",
    "monitor test",
  ],
  alternates: {
    canonical: "/dead-pixel-checker",
  },
};

export default function DeadPixelCheckerPage() {
  return (
    <TestLandingTemplate
      title="Dead Pixel Checker Online"
      subtitle="Precision browser tool to detect dead pixels, subpixel defects, and screen blemishes across all display panels."
      badge="Pixel Checker Utility"
      testMode="dead-pixel"
      colorSequenceNames={["White", "Gray", "Red", "Green", "Blue", "Yellow", "Cyan", "Magenta", "Black"]}
      overview="The PixelCheck365 Dead Pixel Checker Online isolates individual subpixel matrices using ISO 9241-307 visual test aid patterns. Use our built-in 4x subpixel magnifier and grid alignment overlay for microscopic precision."
      whatToLookFor={[
        "Subpixel-level black specks visible against solid white, cyan, and yellow test patterns.",
        "Partial subpixel dropouts (e.g., Red or Green subpixel dead while Blue works).",
        "Contiguous pixel clusters where multiple adjacent cells are dead.",
        "Edge-to-edge backlight uniformity variations.",
      ]}
      prepTips={[
        "Clean your screen surface to eliminate misleading dust specks.",
        "Set display scaling to 100% (or native resolution).",
        "Use the keyboard arrow keys or tap screen to cycle through all test slides.",
        "Press 'M' during the test to activate the interactive 4x subpixel magnifier.",
      ]}
      faqs={[
        {
          q: "What is the difference between a dead pixel checker and a stuck pixel checker?",
          a: "A dead pixel checker looks for permanently unpowered, black pixels that fail to light up on bright screens. A stuck pixel checker searches for pixels frozen on a bright primary color (red, green, or blue) that remain visible on black screens.",
        },
        {
          q: "How many dead pixels are considered acceptable under warranty?",
          a: "Most consumer monitors and laptops fall under ISO 9241-307 Class II, which permits up to 2 permanently bright or 5 permanently dark pixels per million pixels before qualifying for warranty replacement.",
        },
      ]}
    />
  );
}
