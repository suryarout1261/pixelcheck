import React from "react";
import type { Metadata } from "next";
import { TestLandingTemplate } from "@/components/seo/TestLandingTemplate";

export const metadata: Metadata = {
  title: "Windows Screen Test | PC Monitor & Laptop Display Checker",
  description:
    "Test Windows PC gaming monitors, laptops, and ultra-wide screens for dead pixels, backlight bleed, IPS glow, and refresh rate smoothness.",
  alternates: {
    canonical: "/windows-screen-test",
  },
};

export default function WindowsScreenTestPage() {
  return (
    <TestLandingTemplate
      title="Windows PC & Monitor Screen Test"
      subtitle="Comprehensive display evaluation for Dell, ASUS ROG, LG UltraGear, Samsung Odyssey, Alienware, and Lenovo monitors."
      badge="Windows 11 / 10 PC & Laptop"
      testMode="fullscreen"
      device="windows"
      colorSequenceNames={["All 11 Solid Colors + 4 High-Precision Gradients"]}
      overview="Whether testing a 240Hz Fast-IPS gaming monitor, a 4K QD-OLED panel, or a Windows laptop screen, this test provides full-screen diagnostic patterns to check for dead pixels, IPS glow, and color calibration."
      whatToLookFor={[
        "IPS glow in bezel corners when viewing black screens at an angle.",
        "Backlight bleeding along top and bottom frame mounting points.",
        "Dead or stuck subpixels on pure color fields.",
        "Gamma and color banding in gradient transitions.",
      ]}
      prepTips={[
        "Turn off Windows Night Light in Settings > System > Display.",
        "Ensure GPU output dynamic range is set to Full RGB (0-255) in NVIDIA Control Panel or AMD Radeon Software.",
        "Press 'F' or F11 to enter browser fullscreen mode.",
        "Inspect in a dimly lit room to detect subtle backlight bleed.",
      ]}
      faqs={[
        {
          q: "What is the ISO 9241-307 standard for Windows monitors?",
          a: "Most consumer and gaming monitors are Class II displays, which permit up to 2 permanently bright pixels, 2 permanently dark pixels, and 5 defective subpixels per million pixels before qualifying for standard warranty replacement.",
        },
        {
          q: "Does HDR mode affect this screen test?",
          a: "For checking standard SDR sRGB subpixel accuracy, we recommend temporarily disabling Windows Auto HDR.",
        },
      ]}
    />
  );
}
