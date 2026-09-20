import React from "react";
import type { Metadata } from "next";
import { TestLandingTemplate } from "@/components/seo/TestLandingTemplate";

export const metadata: Metadata = {
  title: "Online Display Test — Free Screen & Monitor Health Check | PixelCheck365",
  description:
    "Run an online display test for any monitor, phone, or TV with PixelCheck365. Free full-screen test for dead pixels, screen uniformity, and color accuracy.",
  keywords: [
    "pixelcheck365",
    "online display test",
    "display test",
    "screen test online",
    "monitor test",
    "LCD screen test",
  ],
  alternates: {
    canonical: "/online-display-test",
  },
};

export default function OnlineDisplayTestPage() {
  return (
    <TestLandingTemplate
      title="Online Display Test"
      subtitle="Universal browser-based display test for smartphones, laptops, monitors, tablets, and Smart TVs."
      badge="Universal Display Test"
      testMode="fullscreen"
      colorSequenceNames={["Solid White", "Solid Black", "Solid Red", "Solid Green", "Solid Blue", "Gray 50%", "Rainbow Gradient"]}
      overview="PixelCheck365 Online Display Test gives you a reliable, zero-download web app to diagnose panel defects, verify color reproduction, and test subpixel health across any modern display."
      whatToLookFor={[
        "Subpixel failure and dead pixels on solid fields.",
        "Backlight bleeding and IPS glow in dark rooms.",
        "Screen uniformity, tinting, and color banding.",
      ]}
      prepTips={[
        "Maximize brightness to 100%.",
        "Disable auto-dimming and True Tone/Night Light.",
        "Trigger Fullscreen mode to inspect the entire panel edge-to-edge.",
      ]}
      faqs={[
        {
          q: "What devices work with the online display test?",
          a: "All modern devices including iPhone, Android, Mac, Windows, Chromebooks, and Smart TVs.",
        },
      ]}
    />
  );
}
