import React from "react";
import type { Metadata } from "next";
import { TestLandingTemplate } from "@/components/seo/TestLandingTemplate";

export const metadata: Metadata = {
  title: "Stuck Pixel Test | Find Bright Red, Green, Blue Pixels",
  description:
    "Test your display for stuck pixels. Pinpoint subpixels permanently frozen on red, green, blue, cyan, or white with dark background diagnostics.",
  alternates: {
    canonical: "/stuck-pixel-test",
  },
};

export default function StuckPixelTestPage() {
  return (
    <TestLandingTemplate
      title="Stuck Pixel Test"
      subtitle="Detect subpixels permanently stuck in an active state against pure black, dark gray, and complementary color backdrops."
      badge="Subpixel Diagnostic"
      testMode="stuck-pixel"
      colorSequenceNames={["Black", "Dark Gray", "Red", "Green", "Blue", "Magenta", "Cyan", "Yellow", "White"]}
      overview="Unlike dead pixels which stay black, stuck pixels remain energized and glow continuously in a single color channel (red, green, blue, cyan, magenta, or white). They are most visible on dark screens in a dim room."
      whatToLookFor={[
        "Glowing red, green, or blue specks on pure black and dark gray screens.",
        "Bright dots that stand out when watching dark video scenes or using dark mode.",
        "Frozen subpixels that fail to switch off when complementary colors are displayed.",
        "Clusters of bright subpixels in gaming monitors or OLED panels.",
      ]}
      prepTips={[
        "Turn off the lights in your room to create a dark environment for high contrast.",
        "Set display brightness to 80-100%.",
        "Inspect each corner and center quadrant of the pure black canvas.",
        "Use the built-in Magnifier tool (press 'M') to examine subpixel arrangement.",
      ]}
      faqs={[
        {
          q: "How can I fix a stuck pixel?",
          a: "Stuck pixels can sometimes be unstuck by rapidly cycling contrasting color sequences (which stimulates the liquid crystal orientation) or gentle pressure with a microfiber cloth on LCD screens.",
        },
        {
          q: "Why do stuck pixels glow in different colors?",
          a: "Every display pixel consists of Red, Green, and Blue subpixels. If only the green transistor is stuck on, you will see a green dot; if Red and Blue are stuck, you will see magenta.",
        },
        {
          q: "What is a Zero Bright Dot warranty?",
          a: "Many monitor manufacturers offer Zero Bright Dot (ZBD) guarantees, replacing panels that have even a single stuck bright pixel within the initial return window.",
        },
      ]}
    />
  );
}
