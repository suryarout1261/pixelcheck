import React from "react";
import type { Metadata } from "next";
import { TestLandingTemplate } from "@/components/seo/TestLandingTemplate";

export const metadata: Metadata = {
  title: "Gradient & Banding Test | Color Depth & Smoothness Check",
  description:
    "Test your display for color banding, posterization, and bit-depth smoothness. Inspect Black-White, Red-Green, and Blue-Green smooth gradients.",
  alternates: {
    canonical: "/gradient-test",
  },
};

export default function GradientTestPage() {
  return (
    <TestLandingTemplate
      title="Gradient & Banding Test"
      subtitle="Inspect smooth tonal transitions, 8-bit vs 10-bit color depth rendition, and gamma response across precision gradients."
      badge="Bit-Depth Diagnostic"
      testMode="gradient"
      colorSequenceNames={["Black to White", "Red to Green", "Blue to Green", "Red to Blue"]}
      overview="High-quality displays render smooth, continuous transitions between colors. Lower bit-depth panels (like 6-bit + FRC) or poorly calibrated gamma curves produce visible vertical step lines, known as color banding or posterization."
      whatToLookFor={[
        "Harsh vertical lines or 'steps' instead of a continuous smooth gradation.",
        "Color tinting in the neutral gray transitions of the monochrome gradient.",
        "Crushed blacks or blown-out highlights near the 0% and 100% gradient extremities.",
        "Dithering artifacts or shimmering noise in intermediate color zones.",
      ]}
      prepTips={[
        "Warning: Gradient appearance can vary between browsers and GPU color profiles. This test is intended as a visual inspection aid.",
        "Ensure your GPU control panel is set to 8-bit or 10-bit RGB Full Dynamic Range.",
        "Set monitor gamma to standard 2.2.",
        "Examine the midpoint transition (especially yellow on red-to-green and cyan on blue-to-green).",
      ]}
      faqs={[
        {
          q: "What causes color banding?",
          a: "Color banding occurs when there are not enough discrete color values available to represent a smooth blend, common in 6-bit panels, heavy image compression, or mismatched gamma settings.",
        },
        {
          q: "How can I improve gradient smoothness?",
          a: "Enable 10-bit color (if supported by your GPU and display), select RGB Full Range (0-255) instead of Limited (16-235), and use factory calibrated gamma settings.",
        },
      ]}
    />
  );
}
