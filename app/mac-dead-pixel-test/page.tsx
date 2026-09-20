import React from "react";
import type { Metadata } from "next";
import { TestLandingTemplate } from "@/components/seo/TestLandingTemplate";

export const metadata: Metadata = {
  title: "Mac Dead Pixel Test | Find Defective Pixels on MacBook & iMac",
  description:
    "Test your MacBook Pro, MacBook Air, iMac, or Apple Studio Display for dead pixels and stuck subpixels in full-screen Safari or Chrome.",
  alternates: {
    canonical: "/mac-dead-pixel-test",
  },
};

export default function MacDeadPixelTestPage() {
  return (
    <TestLandingTemplate
      title="Mac Dead Pixel Test"
      subtitle="Examine your Mac display for dead and defective subpixels with fullscreen high-contrast color fields."
      badge="macOS Pixel Inspection"
      testMode="dead-pixel"
      device="mac"
      colorSequenceNames={["White", "Light Gray", "Gray", "Red", "Green", "Blue", "Yellow", "Cyan", "Magenta", "Black"]}
      overview="Retina displays on Macs pack millions of pixels into a compact screen. Our Mac dead pixel test projects solid high-contrast fields that make even single dead subpixels clearly visible."
      whatToLookFor={[
        "Small black specks on pure white and solid bright backgrounds.",
        "Missing subpixel color channels (red, green, or blue).",
        "Stuck lit subpixels near the notch or menu bar area.",
        "Debris trapped behind the front glass vs. dead subpixel transistors.",
      ]}
      prepTips={[
        "Wipe your MacBook screen gently with a dry Apple polishing cloth or lint-free microfiber cloth.",
        "Turn off True Tone and Night Shift.",
        "Press 'F' for fullscreen mode.",
        "Use the built-in Magnifier tool (press 'M') to inspect suspected areas at 8x or 16x zoom.",
      ]}
      faqs={[
        {
          q: "How many dead pixels does Apple allow on a MacBook?",
          a: "Apple's internal policy generally considers 1 or more permanently bright stuck pixels (or 2-3 dark dead pixels) sufficient grounds for panel replacement under active warranty.",
        },
        {
          q: "Will this test work with an external Apple Studio Display or Pro Display XDR?",
          a: "Yes! Simply drag the browser window to your external display and click 'Launch Screen Test'.",
        },
      ]}
    />
  );
}
