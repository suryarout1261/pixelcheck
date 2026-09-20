import React from "react";
import type { Metadata } from "next";
import { TestLandingTemplate } from "@/components/seo/TestLandingTemplate";

export const metadata: Metadata = {
  title: "MacBook Dead Pixel Test — Free Apple Retina Pixel Checker | PixelCheck365",
  description:
    "Test your MacBook Pro, MacBook Air, or iMac for dead pixels online with PixelCheck365. Fullscreen high-contrast Retina inspection.",
  keywords: [
    "pixelcheck365",
    "MacBook dead pixel test",
    "MacBook screen test",
    "dead pixel checker online",
    "laptop screen test",
    "check screen for dead pixels",
  ],
  alternates: {
    canonical: "/macbook-dead-pixel-test",
  },
};

export default function MacBookDeadPixelTestPage() {
  return (
    <TestLandingTemplate
      title="MacBook Dead Pixel Test"
      subtitle="High-density Retina screen dead pixel checker for MacBook Pro, MacBook Air, and iMac displays."
      badge="Retina Pixel Diagnostic"
      testMode="dead-pixel"
      device="mac"
      colorSequenceNames={["Solid White", "Light Gray", "Medium Gray", "Solid Red", "Solid Green", "Solid Blue", "Solid Black"]}
      overview="High-resolution Apple Retina displays pack over 5 million pixels. Finding a single dead subpixel requires pure solid color backgrounds and subpixel magnification."
      whatToLookFor={[
        "Tiny dark subpixels on bright solid backgrounds.",
        "Edge defects around MacBook display bezels.",
        "Color uniformity drops across the Retina panel.",
      ]}
      prepTips={[
        "Disable True Tone in macOS Display Settings.",
        "Wipe screen clean with a dry lint-free cloth.",
        "Use Safari or Chrome in Fullscreen mode.",
      ]}
      faqs={[
        {
          q: "How do I check my new MacBook for dead pixels?",
          a: "Open PixelCheck365, click Launch MacBook Test, press Fullscreen, and cycle through the pure White, Red, Green, and Blue slides.",
        },
      ]}
    />
  );
}
