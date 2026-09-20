import React from "react";
import type { Metadata } from "next";
import { TestLandingTemplate } from "@/components/seo/TestLandingTemplate";

export const metadata: Metadata = {
  title: "Stuck Pixel Checker & Screen Test Online | PixelCheck365",
  description:
    "Free online stuck pixel checker. Identify bright red, green, and blue stuck pixels on OLED, IPS, VA, and TN displays with PixelCheck365.",
  keywords: [
    "pixelcheck365",
    "stuck pixel checker",
    "stuck pixel test",
    "pixel checker",
    "screen defect test",
    "LCD screen test",
  ],
  alternates: {
    canonical: "/stuck-pixel-checker",
  },
};

export default function StuckPixelCheckerPage() {
  return (
    <TestLandingTemplate
      title="Stuck Pixel Checker"
      subtitle="Find bright stuck subpixels frozen on red, green, blue, or yellow with our dark-field diagnostic test."
      badge="Stuck Pixel Diagnostic"
      testMode="stuck-pixel"
      colorSequenceNames={["Deep Black", "Dark Gray", "Charcoal", "Deep Blue", "Deep Red", "Deep Green"]}
      overview="A stuck pixel occurs when a liquid crystal subpixel transistor gets stuck in an 'open' or energized state, causing it to glow brightly as red, green, blue, or white against dark screens. Unlike dead pixels, stuck pixels can often be revived."
      whatToLookFor={[
        "Glowing red, green, cyan, or blue pinpoints visible against pure black backgrounds.",
        "Constant illumination that does not change as the surrounding background changes.",
        "Bright spots visible in movie letterbox bars or dark gaming scenes.",
      ]}
      prepTips={[
        "Dim room lighting to increase eye sensitivity to tiny bright subpixels.",
        "Trigger fullscreen mode to hide any lit browser toolbars.",
        "Observe the dark screen steadily from standard viewing distance (18–24 inches).",
      ]}
      faqs={[
        {
          q: "Can stuck pixels be fixed?",
          a: "Yes! Because the transistor still receives power, rapidly cycling high-speed color flashes can often unstick the liquid crystal. Use our integrated Screen Revive feature in the diagnostic tester.",
        },
        {
          q: "How does a stuck pixel differ from a hot pixel?",
          a: "A stuck pixel remains illuminated on a specific color (red, green, blue). A hot pixel is completely locked on pure white (all three subpixels active simultaneously).",
        },
      ]}
    />
  );
}
