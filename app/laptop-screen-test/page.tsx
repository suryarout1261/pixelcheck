import React from "react";
import type { Metadata } from "next";
import { TestLandingTemplate } from "@/components/seo/TestLandingTemplate";

export const metadata: Metadata = {
  title: "Laptop Screen Test — Test Laptop for Dead Pixels Online | PixelCheck365",
  description:
    "Free laptop screen test by PixelCheck365. Test Dell, HP, Lenovo, ASUS, Acer, MSI, and MacBook laptop screens for dead pixels, backlight bleed, and pressure spots.",
  keywords: [
    "pixelcheck365",
    "laptop screen test",
    "Windows screen test",
    "MacBook screen test",
    "dead pixel test online",
    "check screen for dead pixels",
  ],
  alternates: {
    canonical: "/laptop-screen-test",
  },
};

export default function LaptopScreenTestPage() {
  return (
    <TestLandingTemplate
      title="Laptop Screen Test"
      subtitle="Complete online display diagnostic for Windows laptops, Chromebooks, and MacBooks."
      badge="Laptop Display Diagnostic"
      testMode="fullscreen"
      colorSequenceNames={["White", "Black", "Red", "Green", "Blue", "50% Gray", "Gradient Bands"]}
      overview="Laptop screens are prone to transport pressure marks, dead pixels, and hinge-induced backlight bleed. PixelCheck365 Laptop Screen Test lets you test any laptop display directly in your browser."
      whatToLookFor={[
        "Keyboard pressure marks and white bruising spots visible on solid light backgrounds.",
        "Dead subpixels on 1080p, 1440p, 4K, and OLED laptop displays.",
        "Hinge and bezel backlight bleed on black screens.",
        "Uniformity drops between top and bottom halves of the screen.",
      ]}
      prepTips={[
        "Plug laptop into AC power for maximum display brightness.",
        "Disable battery saver display dimming and Night Light.",
        "Press F11 for true borderless fullscreen testing.",
      ]}
      faqs={[
        {
          q: "How do I check if my laptop screen has dead pixels?",
          a: "Run PixelCheck365 Laptop Screen Test in fullscreen mode. Cycle through solid white, red, green, and blue slides while scanning your screen closely.",
        },
      ]}
    />
  );
}
