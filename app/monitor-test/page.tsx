import React from "react";
import type { Metadata } from "next";
import { TestLandingTemplate } from "@/components/seo/TestLandingTemplate";

export const metadata: Metadata = {
  title: "Monitor Test & Screen Checker — Test Monitor for Dead Pixels | PixelCheck365",
  description:
    "Free monitor test by PixelCheck365. Test PC monitors, gaming screens, and ultrawide displays for dead pixels, backlight bleed, color uniformity, and gradient smoothness.",
  keywords: [
    "pixelcheck365",
    "monitor test",
    "test monitor for dead pixels",
    "monitor screen test",
    "LCD screen test",
    "LED screen test",
  ],
  alternates: {
    canonical: "/monitor-test",
  },
};

export default function MonitorTestPage() {
  return (
    <TestLandingTemplate
      title="Monitor Test & Screen Checker"
      subtitle="Comprehensive display evaluation utility for gaming monitors, 4K/1440p screens, OLED, IPS, and VA panels."
      badge="Monitor Diagnostic"
      testMode="fullscreen"
      colorSequenceNames={["Pure White", "Pure Black", "Red", "Green", "Blue", "Gray 50%", "Cyan", "Magenta", "Yellow"]}
      overview="PixelCheck365 Monitor Test evaluates desktop monitors and external displays for panel defects, subpixel failures, backlight uniformity issues, and color reproduction accuracy."
      whatToLookFor={[
        "Subpixel defects on high-refresh-rate gaming monitors.",
        "IPS glow and corner backlight bleeding on dark backgrounds.",
        "Dirty Screen Effect (DSE) and vignetting on large 27-inch, 32-inch, and ultrawide screens.",
        "Color temperature consistency between left and right sides of the panel.",
      ]}
      prepTips={[
        "Set monitor to native resolution and maximum refresh rate (e.g. 144Hz, 240Hz).",
        "Disable HDR temporarily if testing standard sRGB color uniformity.",
        "Clean the monitor surface thoroughly with screen cleaner.",
        "Enter full-screen mode by pressing F11.",
      ]}
      faqs={[
        {
          q: "How do I test a new monitor for dead pixels?",
          a: "Open PixelCheck365 Monitor Test, enter Fullscreen, and cycle through the solid color screens (White, Black, Red, Green, Blue). Scan every quadrant carefully with your eyes 12-18 inches from the screen.",
        },
        {
          q: "Does PixelCheck365 support 144Hz, 240Hz, and 360Hz gaming monitors?",
          a: "Yes, PixelCheck365 renders natively at your monitor's full hardware refresh rate with zero latency or frame drops.",
        },
      ]}
    />
  );
}
