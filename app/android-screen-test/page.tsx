import React from "react";
import type { Metadata } from "next";
import { TestLandingTemplate } from "@/components/seo/TestLandingTemplate";

export const metadata: Metadata = {
  title: "Android Screen Test | AMOLED, OLED & LCD Display Checker",
  description:
    "Test Samsung Galaxy, Google Pixel, Xiaomi, and OnePlus displays for dead pixels, green lines, AMOLED burn-in, and touch screen uniformity.",
  alternates: {
    canonical: "/android-screen-test",
  },
};

export default function AndroidScreenTestPage() {
  return (
    <TestLandingTemplate
      title="Android Screen Test"
      subtitle="Complete screen diagnostic suite for Samsung Dynamic AMOLED 2X, Google Pixel OLED, Xiaomi, OnePlus, and Android tablets."
      badge="Android Mobile & Tablet"
      testMode="fullscreen"
      device="android"
      colorSequenceNames={["All 11 Solid Colors + 4 High-Precision Gradients"]}
      overview="AMOLED and OLED displays on Android devices offer deep blacks and vibrant colors, but can suffer from subpixel degradation, burn-in around navigation buttons, or green-line defects. This browser-based test allows exhaustive hardware inspection."
      whatToLookFor={[
        "Vertical or horizontal line defects (such as the green line artifact on OLEDs).",
        "Burn-in ghosts of status bar icons, navigation bars, or keyboard outlines.",
        "Dead subpixels appearing on bright solid colors.",
        "Edge-to-edge color temperature uniformity and punch-hole camera perimeter health.",
      ]}
      prepTips={[
        "Disable Eye Comfort Shield, Reading Mode, or Night Light in Android Quick Settings.",
        "Switch display color mode to 'Natural' or 'Standard' to inspect true calibration.",
        "Enable fullscreen mode by tapping the Fullscreen button to hide the Android status bar and navigation bar.",
        "Clean screen with a dry cloth.",
      ]}
      faqs={[
        {
          q: "How to check for AMOLED burn-in on Samsung or Google Pixel?",
          a: "View the 50% Neutral Gray and Pure Red/Blue screens. Look closely at the top status bar area and bottom navigation bar area for faint ghost silhouettes of battery icons or keyboard keys.",
        },
        {
          q: "Does this require installing an APK or app?",
          a: "No! PixelCheck365 runs 100% in Chrome, Samsung Internet, or Firefox on your Android device.",
        },
      ]}
    />
  );
}
