import React from "react";
import type { Metadata } from "next";
import { TestLandingTemplate } from "@/components/seo/TestLandingTemplate";

export const metadata: Metadata = {
  title: "iPhone Dead Pixel Test | Check iPhone & iPad for Dead Pixels",
  description:
    "Free iPhone dead pixel test. Inspect iPhone 16, 15, 14, 13, iPad Pro, and iPad Air for dead black pixels and stuck subpixels on Safari.",
  alternates: {
    canonical: "/iphone-dead-pixel-test",
  },
};

export default function iPhoneDeadPixelTestPage() {
  return (
    <TestLandingTemplate
      title="iPhone Dead Pixel Test"
      subtitle="Pinpoint dead, missing, or inactive pixels on iPhone OLED and iPad screens with high-contrast full-screen test fields."
      badge="iPhone & iPad Diagnostic"
      testMode="dead-pixel"
      device="iphone"
      colorSequenceNames={["White", "Light Gray", "Gray", "Red", "Green", "Blue", "Yellow", "Cyan", "Magenta", "Black"]}
      overview="High pixel density (460+ PPI) Retina screens make individual dead subpixels microscopic. Our dedicated iPhone dead pixel test projects clean solid colors to reveal any non-functional subpixels."
      whatToLookFor={[
        "Tiny black or dark dots against white, cyan, and yellow backgrounds.",
        "Missing subpixel elements in high-density text or status areas.",
        "Dark specks near screen edges or around the front camera cutout.",
        "Color distortion when viewing solid colors in portrait and landscape.",
      ]}
      prepTips={[
        "Disable True Tone and Night Shift in iOS Settings.",
        "Turn display brightness up to 100%.",
        "Thoroughly clean screen glass to prevent mistaking dust for a dead pixel.",
        "Rotate between portrait and landscape to inspect all edges.",
      ]}
      faqs={[
        {
          q: "How to tell if a dot on iPhone is dust or a dead pixel?",
          a: "Surface dust can be wiped off with a cloth. If the dot remains stationary beneath the glass when viewing from different angles, it is a dead pixel or trapped panel debris.",
        },
        {
          q: "Can iPhone dead pixels be repaired with an app?",
          a: "Hardware dead pixels cannot be fixed by software. You should take the device to an Apple Authorized Service Provider if under warranty.",
        },
      ]}
    />
  );
}
