import React from "react";
import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { DeviceSelector } from "@/components/home/DeviceSelector";
import { TestTypesGrid } from "@/components/home/TestTypesGrid";
import { DisplayPrep } from "@/components/home/DisplayPrep";
import { DeadVsStuck } from "@/components/home/DeadVsStuck";
import { DisplayInspector } from "@/components/home/DisplayInspector";
import { SupportedDisplays } from "@/components/home/SupportedDisplays";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCta } from "@/components/home/FinalCta";

export const metadata: Metadata = {
  title: "PixelCheck365 — Free Dead Pixel Test & Online Screen Checker",
  description:
    "PixelCheck365: Free online dead pixel test, stuck pixel checker, monitor test, and display diagnostic tool. Test iPhone, Android, MacBook, Windows PC & TV screens in full-screen sRGB colors.",
  keywords: [
    "pixelcheck365",
    "dead pixel test",
    "dead pixel test online",
    "screen test",
    "screen test online",
    "dead pixel checker",
    "dead pixel checker online",
    "stuck pixel test",
    "stuck pixel checker",
    "pixel test",
    "pixel checker",
    "monitor test",
    "monitor screen test",
    "display test",
    "LCD screen test",
    "LED screen test",
    "screen color test",
    "screen uniformity test",
    "screen defect test",
    "check screen for dead pixels",
    "how to test for dead pixels",
    "iPhone dead pixel test",
    "iPhone screen test",
    "Android dead pixel test",
    "Android screen test",
    "MacBook screen test",
    "MacBook dead pixel test",
    "Windows screen test",
    "laptop screen test",
    "test monitor for dead pixels",
    "online display test",
  ],
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <DeviceSelector />
      <TestTypesGrid />
      <DisplayPrep />
      <DeadVsStuck />
      <DisplayInspector />
      <SupportedDisplays />
      <FaqSection />
      <FinalCta />
    </div>
  );
}
