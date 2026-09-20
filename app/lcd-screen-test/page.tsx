import React from "react";
import type { Metadata } from "next";
import { TestLandingTemplate } from "@/components/seo/TestLandingTemplate";

export const metadata: Metadata = {
  title: "LCD Screen Test — Free LCD Monitor & Display Checker | PixelCheck365",
  description:
    "Test any LCD screen for dead pixels, stuck crystals, backlight bleeding, and IPS/VA uniformity issues with PixelCheck365 free online diagnostic tool.",
  keywords: [
    "pixelcheck365",
    "LCD screen test",
    "LED screen test",
    "dead pixel test",
    "stuck pixel test",
    "screen test online",
  ],
  alternates: {
    canonical: "/lcd-screen-test",
  },
};

export default function LcdScreenTestPage() {
  return (
    <TestLandingTemplate
      title="LCD Screen Test"
      subtitle="Calibrated visual test suite engineered specifically for LCD, IPS, VA, and TN display panels."
      badge="LCD Diagnostics"
      testMode="fullscreen"
      colorSequenceNames={["Pure White", "50% Gray", "Pure Black", "Pure Red", "Pure Green", "Pure Blue", "Cyan", "Magenta", "Yellow"]}
      overview="Liquid Crystal Displays (LCDs) rely on CCFL or LED backlights passing through liquid crystal color filters. PixelCheck365 LCD Screen Test isolates each liquid crystal layer to test for stuck subpixels, dead transistors, and pressure bruising."
      whatToLookFor={[
        "Stuck liquid crystals that fail to block light on dark backgrounds.",
        "Dead transistors appearing as non-responsive dark specks.",
        "Pressure marks or 'bruising' appearing as localized discoloration on laptop and monitor panels.",
        "Backlight bleeding along the perimeter edges.",
      ]}
      prepTips={[
        "Disable dynamic contrast or ambient light sensors.",
        "Allow the monitor to warm up for 10 minutes before testing.",
        "Clean the outer polarizing filter with a clean microfiber cloth.",
      ]}
      faqs={[
        {
          q: "What causes defects in LCD screens?",
          a: "LCD defects can stem from microscopic transistor imperfections during manufacturing, electrical surges, or mechanical pressure applied to the panel.",
        },
      ]}
    />
  );
}
