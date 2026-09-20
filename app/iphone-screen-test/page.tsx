import React from "react";
import type { Metadata } from "next";
import { TestLandingTemplate } from "@/components/seo/TestLandingTemplate";

export const metadata: Metadata = {
  title: "iPhone Screen Test | Test Super Retina OLED & Liquid Retina",
  description:
    "Test your iPhone and iPad screen for dead pixels, stuck subpixels, OLED burn-in, and touch screen uniformity. Free online Safari screen test.",
  alternates: {
    canonical: "/iphone-screen-test",
  },
};

export default function iPhoneScreenTestPage() {
  return (
    <TestLandingTemplate
      title="iPhone & iPad Screen Test"
      subtitle="Full-screen color diagnostics specifically tailored for Apple Super Retina XDR OLED and Liquid Retina displays."
      badge="Apple iOS & iPadOS"
      testMode="fullscreen"
      device="iphone"
      colorSequenceNames={["All Diagnostic Colors & Gradients"]}
      overview="From iPhone 16 Pro and iPhone 15 Super Retina XDR OLEDs to iPad Pro Liquid Retina XDR displays, this mobile-optimized test helps you verify pixel health, notch/Dynamic Island edge uniformity, and OLED subpixel longevity."
      whatToLookFor={[
        "Stuck bright subpixels near the Dynamic Island / notch or home indicator bar.",
        "OLED burn-in remnants from battery icons, signal bars, or keyboard outlines.",
        "Dead black dots on pure white or light gray screens.",
        "Uniformity around curved display corners and ProMotion 120Hz smooth transitions.",
      ]}
      prepTips={[
        "Turn off True Tone & Night Shift (Settings > Display & Brightness).",
        "Set brightness slider to 80-100%.",
        "Wipe surface dust and fingerprints with a clean microfiber cloth.",
        "Tap the screen to hide Safari navigation toolbars for complete full-screen view.",
      ]}
      faqs={[
        {
          q: "Does this test work on iOS Safari?",
          a: "Yes! The test runs directly in Safari. Tap 'Start Test' and tap once to hide toolbars. You can swipe left and right to navigate colors.",
        },
        {
          q: "Does Apple warranty cover dead pixels on iPhone?",
          a: "Apple has strict display quality standards. If your iPhone or iPad has defective pixels within the 1-year warranty or AppleCare+ period, Apple will typically repair or replace the display.",
        },
      ]}
    />
  );
}
