import React from "react";
import type { Metadata } from "next";
import { TestLandingTemplate } from "@/components/seo/TestLandingTemplate";

export const metadata: Metadata = {
  title: "LED Screen Test — Free LED & OLED Display Checker | PixelCheck365",
  description:
    "Test LED, Mini-LED, and OLED screens for dead pixels, burn-in, color degradation, and uniformity with PixelCheck365 free online display diagnostic tool.",
  keywords: [
    "pixelcheck365",
    "LED screen test",
    "LCD screen test",
    "dead pixel test online",
    "screen defect test",
    "display test",
  ],
  alternates: {
    canonical: "/led-screen-test",
  },
};

export default function LedScreenTestPage() {
  return (
    <TestLandingTemplate
      title="LED Screen Test"
      subtitle="Full-spectrum diagnostic test for LED-backlit, Mini-LED, QLED, and OLED displays."
      badge="LED & OLED Testing"
      testMode="fullscreen"
      colorSequenceNames={["Solid White", "Solid Black", "Solid Red", "Solid Green", "Solid Blue", "Gray 50%", "Gray 25%"]}
      overview="PixelCheck365 LED Screen Test tests modern LED and emissive OLED panels for dead diodes, stuck emitter subpixels, burn-in retention, and color uniformity."
      whatToLookFor={[
        "Individual dead LED/OLED subpixels failing to produce light.",
        "Static image retention or permanent burn-in silhouettes on solid gray screens.",
        "Uneven brightness across LED backlight local dimming zones.",
        "Color tinting on pure white and gray test slides.",
      ]}
      prepTips={[
        "Set device brightness to maximum.",
        "Trigger fullscreen to hide navigation buttons.",
        "Check 50% and 25% gray slides to spot image retention or burn-in.",
      ]}
      faqs={[
        {
          q: "How to check OLED/LED screens for burn-in?",
          a: "View our solid 50% Gray and Red test slides in fullscreen. If permanent ghost images of taskbars, status icons, or logos appear, the panel exhibits burn-in.",
        },
      ]}
    />
  );
}
