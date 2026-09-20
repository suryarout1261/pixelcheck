import React from "react";
import type { Metadata } from "next";
import { TestLandingTemplate } from "@/components/seo/TestLandingTemplate";

export const metadata: Metadata = {
  title: "Test Monitor for Dead Pixels — Online Screen Checker | PixelCheck365",
  description:
    "Test monitor for dead pixels online with PixelCheck365. Full-screen color slides, subpixel magnifier, and ISO 9241-307 evaluation for PC monitors and gaming screens.",
  keywords: [
    "pixelcheck365",
    "test monitor for dead pixels",
    "monitor screen test",
    "dead pixel test online",
    "monitor test",
    "check screen for dead pixels",
  ],
  alternates: {
    canonical: "/test-monitor-for-dead-pixels",
  },
};

export default function TestMonitorForDeadPixelsPage() {
  return (
    <TestLandingTemplate
      title="Test Monitor for Dead Pixels"
      subtitle="The ultimate online test to inspect any computer monitor or external display for dead and stuck subpixels."
      badge="Monitor Inspection Suite"
      testMode="dead-pixel"
      colorSequenceNames={["Solid White", "Solid Black", "Solid Red", "Solid Green", "Solid Blue", "50% Gray"]}
      overview="Testing a new monitor for dead pixels is essential before manufacturer warranty and return policies expire. PixelCheck365 provides full-screen uncompressed sRGB color canvases to reveal defective subpixels instantly."
      whatToLookFor={[
        "Unlit black subpixels against solid white, cyan, and yellow screens.",
        "Bright stuck subpixels visible against dark screens.",
        "Cluster failures where adjacent pixels do not work.",
      ]}
      prepTips={[
        "Set monitor to native resolution and refresh rate.",
        "Clean monitor glass with an anti-static cloth.",
        "Press F11 for full-screen view.",
      ]}
      faqs={[
        {
          q: "How many dead pixels does a monitor warranty allow?",
          a: "Most manufacturers allow up to 2-5 dead subpixels under ISO 9241-307 Class II standards before approving a RMA warranty replacement.",
        },
      ]}
    />
  );
}
