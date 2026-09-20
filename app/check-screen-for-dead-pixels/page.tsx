import React from "react";
import type { Metadata } from "next";
import { TestLandingTemplate } from "@/components/seo/TestLandingTemplate";

export const metadata: Metadata = {
  title: "Check Screen for Dead Pixels — Instant Online Checker | PixelCheck365",
  description:
    "Check your screen for dead pixels in seconds. Free browser tool with high-contrast full-screen colors, magnifier, and instant defect report by PixelCheck365.",
  keywords: [
    "pixelcheck365",
    "check screen for dead pixels",
    "how to test for dead pixels",
    "dead pixel test online",
    "dead pixel checker",
    "pixel test",
  ],
  alternates: {
    canonical: "/check-screen-for-dead-pixels",
  },
};

export default function CheckScreenForDeadPixelsPage() {
  return (
    <TestLandingTemplate
      title="Check Screen for Dead Pixels"
      subtitle="Fast, free, and accurate way to check any phone, laptop, monitor, or TV screen for dead and stuck pixels."
      badge="Pixel Health Checker"
      testMode="dead-pixel"
      colorSequenceNames={["Solid White", "Solid Gray", "Solid Red", "Solid Green", "Solid Blue", "Solid Black"]}
      overview="PixelCheck365 makes checking your screen for dead pixels simple. With a single click, it fills your display with pure uncompressed sRGB color canvases to reveal missing or unresponsive subpixels instantly."
      whatToLookFor={[
        "Small black specks on white, yellow, cyan, or red slides (dead pixels).",
        "Persistent bright red, green, or blue dots on black slides (stuck pixels).",
        "Groups of multiple dead pixels clustered together.",
      ]}
      prepTips={[
        "Clean your screen gently with a microfiber cloth to avoid confusing dust for dead pixels.",
        "Set brightness to 100%.",
        "Press 'Launch Test' and switch to Fullscreen mode.",
      ]}
      faqs={[
        {
          q: "How long does it take to check a screen for dead pixels?",
          a: "The test takes less than 60 seconds. Simply cycle through the primary color slides and observe your display.",
        },
      ]}
    />
  );
}
