import React from "react";
import type { Metadata } from "next";
import { TestLandingTemplate } from "@/components/seo/TestLandingTemplate";

export const metadata: Metadata = {
  title: "Dead Pixel Test Online — Free Browser Screen Checker | PixelCheck365",
  description:
    "Run a free dead pixel test online in your browser. PixelCheck365 provides high-contrast full-screen color inspection for monitors, laptops, iPhones, and Android displays.",
  keywords: [
    "pixelcheck365",
    "dead pixel test online",
    "dead pixel test",
    "dead pixel checker online",
    "pixel test",
    "check screen for dead pixels",
  ],
  alternates: {
    canonical: "/dead-pixel-test-online",
  },
};

export default function DeadPixelTestOnlinePage() {
  return (
    <TestLandingTemplate
      title="Dead Pixel Test Online"
      subtitle="Instantly check your monitor, laptop, or mobile screen for dead pixels online with pure full-screen solid color sequences."
      badge="Online Pixel Diagnostic"
      testMode="dead-pixel"
      colorSequenceNames={["Pure White", "Light Gray", "Medium Gray", "Pure Red", "Pure Green", "Pure Blue", "Yellow", "Cyan", "Magenta", "Pure Black"]}
      overview="Our online dead pixel test runs 100% inside your web browser with zero software downloads. It displays standardized primary and secondary sRGB color frames to make defective or inactive subpixel transistors immediately stand out against high-contrast backgrounds."
      whatToLookFor={[
        "Permanent dark or black spots visible against bright backgrounds like white, yellow, and cyan.",
        "Microscopic dark dots that do not wipe away with a cleaning cloth.",
        "Dead subpixels that fail to light up when cycling through primary red, green, and blue colors.",
        "Clusters of contiguous defective pixels affecting display uniformity.",
      ]}
      prepTips={[
        "Wipe your display gently with a dry microfiber cloth before running the online dead pixel test.",
        "Maximize browser brightness to 100% for highest visual contrast.",
        "Disable Night Shift, f.lux, or Blue Light Filter mode.",
        "Click Launch Test and enter true Fullscreen mode (press F11 or tap Fullscreen).",
      ]}
      faqs={[
        {
          q: "How does the online dead pixel test work?",
          a: "PixelCheck365 switches your screen between solid full-screen color canvases (white, black, red, green, blue, etc.). If a pixel or subpixel transistor has died, it will fail to illuminate and appear as an immovable black speck.",
        },
        {
          q: "Do I need to install any software or extensions?",
          a: "No. The dead pixel test online is 100% client-side and browser-based. It runs instantly on Google Chrome, Apple Safari, Microsoft Edge, Mozilla Firefox, and mobile browsers.",
        },
        {
          q: "Can a dead pixel be repaired online?",
          a: "A completely dead pixel (inactive transistor) is a hardware defect and cannot be fixed with software. However, if the subpixel is merely stuck, our Rapid Pixel Revive flasher may help unstick the liquid crystal.",
        },
      ]}
    />
  );
}
