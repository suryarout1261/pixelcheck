import React from "react";
import type { Metadata } from "next";
import { TestLandingTemplate } from "@/components/seo/TestLandingTemplate";

export const metadata: Metadata = {
  title: "Dead Pixel Test | Free Full-Screen Pixel Checker",
  description:
    "Test your monitor, iPhone, Android, Mac, or Windows display for dead pixels. High-contrast pure white, cyan, and solid color inspection.",
  alternates: {
    canonical: "/dead-pixel-test",
  },
};

export default function DeadPixelTestPage() {
  return (
    <TestLandingTemplate
      title="Dead Pixel Test"
      subtitle="Identify permanently inactive or dark subpixels across your entire display with pure high-contrast color fields."
      badge="Defect Diagnostic"
      testMode="dead-pixel"
      colorSequenceNames={["White", "Light Gray", "Gray", "Red", "Green", "Blue", "Yellow", "Cyan", "Magenta", "Black"]}
      overview="A dead pixel occurs when the subpixel transistor fails to receive electric current, causing it to remain permanently dark or black. On high-resolution displays (like 4K monitors or Retina screens), a dead subpixel looks like a microscopic black speck."
      whatToLookFor={[
        "Permanent dark or black spots visible against bright backgrounds like white, yellow, or cyan.",
        "Tiny non-illuminated subpixel specks that do not disappear when cleaned.",
        "Dark clusters where multiple adjacent pixels have failed.",
        "Edge vignetting or corners with non-responsive subpixels.",
      ]}
      prepTips={[
        "Clean your screen thoroughly with a microfiber cloth to prevent confusing surface dust with dead pixels.",
        "Increase screen brightness to 100% to maximize subpixel illumination contrast.",
        "Turn off Night Shift, Night Light, and True Tone.",
        "Trigger fullscreen mode to hide browser bars and status tabs.",
      ]}
      faqs={[
        {
          q: "What causes a dead pixel?",
          a: "Dead pixels are typically caused by manufacturing flaws in the thin-film transistor (TFT) layer, physical impact, or transistor burnout over extended operation.",
        },
        {
          q: "Can a dead pixel spread?",
          a: "A single dead pixel does not spread on its own. However, physical pressure or panel damage can cause surrounding transistors to fail over time.",
        },
        {
          q: "Does warranty cover dead pixels?",
          a: "Under ISO 9241-307 Class II guidelines, most manufacturers require at least 2 to 5 dead pixels before approving a replacement.",
        },
      ]}
    />
  );
}
