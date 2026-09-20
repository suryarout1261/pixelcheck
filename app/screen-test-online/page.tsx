import React from "react";
import type { Metadata } from "next";
import { TestLandingTemplate } from "@/components/seo/TestLandingTemplate";

export const metadata: Metadata = {
  title: "Screen Test Online — Free Monitor & Display Health Check | PixelCheck365",
  description:
    "Free screen test online with PixelCheck365. Test monitors, laptops, and phone screens for dead pixels, backlight bleed, color banding, and uniformity.",
  keywords: [
    "pixelcheck365",
    "screen test online",
    "screen test",
    "monitor screen test",
    "display test",
    "online display test",
  ],
  alternates: {
    canonical: "/screen-test-online",
  },
};

export default function ScreenTestOnlinePage() {
  return (
    <TestLandingTemplate
      title="Screen Test Online"
      subtitle="Complete display and screen testing suite right in your browser. Inspect for dead pixels, uniformity, backlight bleed, and color accuracy."
      badge="Display Health Suite"
      testMode="fullscreen"
      colorSequenceNames={["White", "Black", "Red", "Green", "Blue", "Cyan", "Magenta", "Yellow", "Grayscale 50%"]}
      overview="PixelCheck365 Screen Test Online offers a standardized full-screen evaluation suite to test display brightness, color purity, subpixel integrity, and contrast."
      whatToLookFor={[
        "Color uniformity and cloudy patches across gray and white fields.",
        "Edge backlight bleed and IPS glow visible on pure black screens in dark rooms.",
        "Dead, stuck, or flickering pixels across solid color slides.",
        "Smoothness of color transitions without harsh banding lines.",
      ]}
      prepTips={[
        "Turn off ambient room lighting for optimal contrast evaluation.",
        "Wipe your display clean with a microfiber cloth.",
        "Press Fullscreen to hide browser toolbars.",
      ]}
      faqs={[
        {
          q: "What does this screen test online check for?",
          a: "It tests for dead pixels, stuck subpixels, screen uniformity, gradient banding, backlight bleed, and color balance.",
        },
      ]}
    />
  );
}
