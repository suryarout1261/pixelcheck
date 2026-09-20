import React from "react";
import type { Metadata } from "next";
import { TestLandingTemplate } from "@/components/seo/TestLandingTemplate";

export const metadata: Metadata = {
  title: "Android Dead Pixel Test | Find Dead & Stuck Pixels on Android",
  description:
    "Free Android dead pixel checker. Find black dots and frozen subpixels on Samsung Galaxy, Pixel, OnePlus, and Xiaomi phones.",
  alternates: {
    canonical: "/android-dead-pixel-test",
  },
};

export default function AndroidDeadPixelTestPage() {
  return (
    <TestLandingTemplate
      title="Android Dead Pixel Test"
      subtitle="Find missing, black, or inactive subpixels on Android smartphone and tablet displays with fullscreen color cycling."
      badge="Android Pixel Diagnostic"
      testMode="dead-pixel"
      device="android"
      colorSequenceNames={["White", "Light Gray", "Gray", "Red", "Green", "Blue", "Yellow", "Cyan", "Magenta", "Black"]}
      overview="Inspect your Android device for missing subpixels. This test projects pure uncompressed color fields to immediately expose dead black dots or stuck subpixels."
      whatToLookFor={[
        "Small black specks on white and bright solid backgrounds.",
        "Dead subpixels around the punch-hole selfie camera cutout.",
        "Stuck bright green or red subpixels on dark gray backgrounds.",
        "Uniformity along the curved glass borders on curved-edge displays.",
      ]}
      prepTips={[
        "Turn off adaptive brightness and set display brightness to 100%.",
        "Disable Eye Comfort / Reading Mode.",
        "Tap the Fullscreen button to hide the bottom gesture pill and top camera bar.",
        "Swipe left/right to step through all 10 diagnostic colors.",
      ]}
      faqs={[
        {
          q: "What is the warranty policy for dead pixels on Samsung and Pixel phones?",
          a: "Most Android manufacturers will replace the display under warranty if 2 or more defective pixels are found within the standard warranty period.",
        },
        {
          q: "Can high refresh rates (120Hz) mask dead pixels?",
          a: "No. A dead pixel is a physical hardware fault that remains defective regardless of refresh rate.",
        },
      ]}
    />
  );
}
