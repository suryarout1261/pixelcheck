import React from "react";
import type { Metadata } from "next";
import { TestLandingTemplate } from "@/components/seo/TestLandingTemplate";

export const metadata: Metadata = {
  title: "Mac Screen Test | MacBook Pro, Air, iMac & Studio Display",
  description:
    "Test MacBook Pro Liquid Retina XDR, MacBook Air, iMac, and Apple Studio Display for dead pixels, Mini-LED backlight bleed, and color accuracy.",
  alternates: {
    canonical: "/mac-screen-test",
  },
};

export default function MacScreenTestPage() {
  return (
    <TestLandingTemplate
      title="Mac Screen & Display Test"
      subtitle="Calibrated display testing for MacBook Pro Liquid Retina XDR Mini-LED, MacBook Air, iMac 4.5K, and Apple Studio Display 5K."
      badge="Apple macOS Diagnostics"
      testMode="fullscreen"
      device="mac"
      colorSequenceNames={["All 11 Solid Colors + 4 High-Precision Gradients"]}
      overview="MacBook Pro and Apple Studio displays are engineered for professional color grading and design work. This test verifies uniform backlight distribution, examines Mini-LED local dimming zones, and tests for stuck or dead subpixels."
      whatToLookFor={[
        "Subpixel consistency across ultra-dense Retina matrices (220+ PPI).",
        "Mini-LED local dimming blooming around high-contrast edges.",
        "Color temperature shifts between the left and right sides of the MacBook panel.",
        "Backlight bleeding around the camera notch and display bezels.",
      ]}
      prepTips={[
        "Disable True Tone and Night Shift in macOS System Settings > Displays.",
        "Set display preset to standard 'Apple Display (P3-500 nits)' or 'Liquid Retina XDR (P3-1600 nits)'.",
        "Press 'F' or click Fullscreen to hide macOS Menu Bar and Dock.",
        "Use keyboard arrows (← / →) to step through diagnostic colors.",
      ]}
      faqs={[
        {
          q: "How does Apple handle dead pixels under AppleCare+?",
          a: "MacBook displays with dead pixels or stuck bright subpixels are covered for repair or panel replacement under the standard 1-year warranty and AppleCare+.",
        },
        {
          q: "What is Mini-LED blooming on MacBook Pro?",
          a: "Liquid Retina XDR MacBook Pros use thousands of Mini-LED dimming zones. High-contrast white objects on black may show slight haloing (blooming), which is normal for local dimming technology.",
        },
      ]}
    />
  );
}
