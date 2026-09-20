import React from "react";
import type { Metadata } from "next";
import { TestLandingTemplate } from "@/components/seo/TestLandingTemplate";

export const metadata: Metadata = {
  title: "Windows Dead Pixel Test | Check PC Monitor for Dead Pixels",
  description:
    "Test your Windows monitor, gaming screen, and laptop for dead pixels. Free full-screen browser test for Chrome, Edge, and Firefox.",
  alternates: {
    canonical: "/windows-dead-pixel-test",
  },
};

export default function WindowsDeadPixelTestPage() {
  return (
    <TestLandingTemplate
      title="Windows Dead Pixel Test"
      subtitle="Examine your Windows PC monitor, gaming display, or laptop for dead pixels with pure high-contrast test screens."
      badge="PC Monitor Diagnostic"
      testMode="dead-pixel"
      device="windows"
      colorSequenceNames={["White", "Light Gray", "Gray", "Red", "Green", "Blue", "Yellow", "Cyan", "Magenta", "Black"]}
      overview="Dead pixels are a common defect on newly unboxed monitors. This full-screen diagnostic lets you inspect every quadrant of your display to detect dead pixels before your retailer's return window closes."
      whatToLookFor={[
        "Small black specks visible against bright backgrounds like white and light gray.",
        "Missing subpixel channels (e.g. green subpixel dead making magenta appear).",
        "Dead subpixel clusters on high-resolution 1440p or 4K panels.",
        "Stuck lit subpixels on black screens.",
      ]}
      prepTips={[
        "Wipe your monitor screen with a clean, dry microfiber cloth to remove dust.",
        "Press 'F' or F11 for full-screen mode.",
        "Use keyboard Arrow Keys (← / →) to step through all 10 diagnostic colors.",
        "Press 'M' to enable the built-in 8x / 16x pixel magnifier.",
      ]}
      faqs={[
        {
          q: "What should I do if I find a dead pixel on a new monitor?",
          a: "If you purchased the monitor recently (usually within 14-30 days), contact the retailer for a direct no-questions-asked replacement, rather than going through the manufacturer's RMA process.",
        },
        {
          q: "Can a dead pixel be unstuck?",
          a: "True dead pixels (where the transistor has failed) cannot be unstuck. If the pixel is stuck on a color (red/green/blue), it might respond to rapid cycling.",
        },
      ]}
    />
  );
}
