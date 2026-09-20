import React from "react";
import type { Metadata } from "next";
import { TestLandingTemplate } from "@/components/seo/TestLandingTemplate";

export const metadata: Metadata = {
  title: "How to Test for Dead Pixels — Step-by-Step Display Guide | PixelCheck365",
  description:
    "Learn how to test for dead pixels on monitors, laptops, iPhones, and Android devices. Complete step-by-step tutorial and free full-screen testing utility.",
  keywords: [
    "pixelcheck365",
    "how to test for dead pixels",
    "check screen for dead pixels",
    "dead pixel test online",
    "test monitor for dead pixels",
    "stuck pixel test",
  ],
  alternates: {
    canonical: "/how-to-test-for-dead-pixels",
  },
};

export default function HowToTestForDeadPixelsPage() {
  return (
    <TestLandingTemplate
      title="How to Test for Dead Pixels"
      subtitle="Follow our simple 4-step guide to thoroughly inspect and test any display for dead pixels, stuck subpixels, and screen flaws."
      badge="Testing Tutorial & Guide"
      testMode="fullscreen"
      colorSequenceNames={["Step 1: White", "Step 2: Black", "Step 3: Red", "Step 4: Green", "Step 5: Blue", "Step 6: Gray"]}
      overview="Testing for dead pixels involves 4 essential steps: 1. Cleaning the screen surface, 2. Maximizing brightness and disabling color filters, 3. Entering full-screen solid color mode, and 4. Methodically scanning screen quadrants for unlit or frozen subpixels."
      whatToLookFor={[
        "Step 1 (White Screen): Scan for black specks indicating dead subpixels.",
        "Step 2 (Black Screen): Scan for bright colored pinpoints indicating stuck subpixels.",
        "Step 3 (RGB Slides): Verify red, green, and blue subpixel channels illuminate uniformly.",
        "Step 4 (Gray Slides): Check for backlight cloudiness and Dirty Screen Effect.",
      ]}
      prepTips={[
        "Clean your screen with a soft microfiber cloth before starting.",
        "Turn off Night Light, Night Shift, and True Tone.",
        "Sit 18–24 inches away and scan quadrant by quadrant.",
      ]}
      faqs={[
        {
          q: "When should I test for dead pixels?",
          a: "Always test immediately after unboxing a new phone, laptop, monitor, or TV while you are still within the retailer's 14-30 day hassle-free return or exchange window.",
        },
      ]}
    />
  );
}
