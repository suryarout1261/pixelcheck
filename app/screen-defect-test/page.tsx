import React from "react";
import type { Metadata } from "next";
import { TestLandingTemplate } from "@/components/seo/TestLandingTemplate";

export const metadata: Metadata = {
  title: "Screen Defect Test — Find Dead Pixels, Backlight Bleed & Uniformity Defects | PixelCheck365",
  description:
    "Comprehensive screen defect test by PixelCheck365. Find dead pixels, stuck subpixels, backlight bleed, IPS glow, dirty screen effect, and color abnormalities.",
  keywords: [
    "pixelcheck365",
    "screen defect test",
    "screen uniformity test",
    "dead pixel test",
    "stuck pixel test",
    "monitor test",
  ],
  alternates: {
    canonical: "/screen-defect-test",
  },
};

export default function ScreenDefectTestPage() {
  return (
    <TestLandingTemplate
      title="Screen Defect Test"
      subtitle="Complete diagnostic suite to detect dead pixels, stuck subpixels, backlight bleed, banding, and display panel abnormalities."
      badge="Comprehensive Defect Suite"
      testMode="fullscreen"
      colorSequenceNames={["White", "50% Gray", "Black", "Red", "Green", "Blue", "Cyan", "Magenta", "Yellow", "Smooth Gradient"]}
      overview="PixelCheck365 Screen Defect Test covers all major categories of display panel defects: subpixel failure, backlight nonuniformity, Dirty Screen Effect (DSE), color tint shifts, and color banding."
      whatToLookFor={[
        "Dead and stuck pixels on solid color backgrounds.",
        "Cloudy, splotchy areas (backlight nonuniformity / DSE).",
        "Edge backlight bleed leaking through monitor frames on black slides.",
        "Color gradient banding indicating low bit-depth or poor color processing.",
      ]}
      prepTips={[
        "Darken the room to inspect black slides for backlight bleeding.",
        "Examine screen from a perpendicular (90-degree) viewing angle.",
        "Test across both bright solid slides (White/Yellow) and dark slides (Black/Dark Gray).",
      ]}
      faqs={[
        {
          q: "What types of screen defects can PixelCheck365 detect?",
          a: "It detects dead pixels, stuck pixels, hot pixels, backlight bleed, IPS glow, Dirty Screen Effect, color banding, and brightness nonuniformity.",
        },
      ]}
    />
  );
}
