import React from "react";
import type { Metadata } from "next";
import { TestLandingTemplate } from "@/components/seo/TestLandingTemplate";

export const metadata: Metadata = {
  title: "MacBook Screen Test — Retina & Liquid Retina XDR Display Check | PixelCheck365",
  description:
    "Free MacBook screen test by PixelCheck365. Test MacBook Pro, MacBook Air, and iMac Liquid Retina XDR displays for dead pixels, Mini-LED blooming, and uniformity.",
  keywords: [
    "pixelcheck365",
    "MacBook screen test",
    "MacBook dead pixel test",
    "laptop screen test",
    "dead pixel test online",
    "monitor screen test",
  ],
  alternates: {
    canonical: "/macbook-screen-test",
  },
};

export default function MacBookScreenTestPage() {
  return (
    <TestLandingTemplate
      title="MacBook Screen Test"
      subtitle="Optimized diagnostic testing suite for MacBook Pro, MacBook Air, iMac, and Apple Studio Displays."
      badge="Apple Mac Diagnostic"
      testMode="fullscreen"
      device="mac"
      colorSequenceNames={["Retina White", "Deep Black", "Pure Red", "Pure Green", "Pure Blue", "50% Gray", "XDR Gradient"]}
      overview="PixelCheck365 MacBook Screen Test is calibrated for Apple Retina, Liquid Retina, and Mini-LED XDR displays. It tests for subpixel failures, notch area border alignment, Mini-LED local dimming blooming, and True Tone color shifts."
      whatToLookFor={[
        "Microscopic dead subpixels on ultra-dense 220+ PPI Retina screens.",
        "Mini-LED local dimming haloing / blooming around high-contrast edges.",
        "Uniformity discrepancies around the top camera notch cut-out.",
        "Color temperature shifts across the 100% P3 wide color gamut.",
      ]}
      prepTips={[
        "Disable True Tone and Night Shift in macOS System Settings > Displays.",
        "Clean the anti-reflective display coating with a dry microfiber cloth.",
        "Enter Safari / Chrome fullscreen mode (Control + Command + F).",
      ]}
      faqs={[
        {
          q: "Does Apple replace MacBooks for dead pixels under warranty?",
          a: "Apple follows strict quality tolerances. Under AppleCare+ and standard 1-year limited warranty, even a single dead subpixel in the central viewing area of a MacBook Pro often qualifies for display panel replacement.",
        },
      ]}
    />
  );
}
