import React from "react";
import type { Metadata } from "next";
import { TestLandingTemplate } from "@/components/seo/TestLandingTemplate";

export const metadata: Metadata = {
  title: "Screen Test | Online Display Health & Quality Checker",
  description:
    "Comprehensive online screen test for phones, monitors, laptops, and TVs. Check for color accuracy, backlight bleed, dead pixels, and screen uniformity.",
  alternates: {
    canonical: "/screen-test",
  },
};

export default function ScreenTestPage() {
  return (
    <TestLandingTemplate
      title="Online Screen Test"
      subtitle="Complete display quality evaluation checking color fidelity, subpixel health, backlight consistency, and panel defects."
      badge="Comprehensive Diagnostic"
      testMode="fullscreen"
      colorSequenceNames={["All 11 Solid Colors + 4 High-Precision Gradients"]}
      overview="PixelCheck365's Screen Test delivers a full-spectrum evaluation of your monitor or mobile display. It cycles through primary and secondary solid colors, neutral grays, and multi-step gradients to provide a complete picture of your display's health."
      whatToLookFor={[
        "Subpixel consistency across all color channels (Red, Green, Blue, Cyan, Magenta, Yellow).",
        "Edge-to-edge brightness uniformity without dark patches or hot spots.",
        "Color temperature consistency across the left, center, and right zones of the panel.",
        "Smoothness of color gradients without harsh stepping or posterization bands.",
      ]}
      prepTips={[
        "Set your monitor to factory default color profiles (sRGB or Standard).",
        "Ensure your room has ambient lighting that does not create glare on the panel surface.",
        "Press 'F' for full-screen view to remove all operating system UI elements.",
        "Adjust auto-test interval to 2 or 3 seconds to comfortably inspect each surface.",
      ]}
      faqs={[
        {
          q: "How often should I run a screen test?",
          a: "It is recommended to run a screen test immediately upon purchasing a new monitor, laptop, or phone, before the return/exchange policy expires, and periodically thereafter.",
        },
        {
          q: "Does this screen test work on high refresh rate displays (144Hz, 240Hz, 360Hz)?",
          a: "Yes. The diagnostic runs directly in your browser canvas and will render at your display's native refresh rate.",
        },
      ]}
    />
  );
}
