import React from "react";
import type { Metadata } from "next";
import { TestLandingTemplate } from "@/components/seo/TestLandingTemplate";

export const metadata: Metadata = {
  title: "Display Test | Universal Monitor, TV & Phone Screen Checker",
  description:
    "Universal full-screen display test. Test Smart TVs, external monitors, laptops, Mac, and mobile displays for color uniformity and dead pixels.",
  alternates: {
    canonical: "/display-test",
  },
};

export default function DisplayTestPage() {
  return (
    <TestLandingTemplate
      title="Display Test"
      subtitle="Universal display diagnostics for 4K/8K monitors, Smart TVs, projectors, laptops, and mobile screens."
      badge="Universal Diagnostic"
      testMode="fullscreen"
      colorSequenceNames={["Complete 15-step color sequence"]}
      overview="Whether inspecting a massive 65-inch OLED TV, a 34-inch ultrawide gaming monitor, or a smartphone screen, this universal display test provides pure uncompressed color output to ensure your panel meets manufacturer standards."
      whatToLookFor={[
        "Dirty screen effect (DSE) and horizontal or vertical banding on large panels.",
        "Local dimming blooming or halo artifacts around high-contrast transitions.",
        "Dead subpixels and stuck bright points across high pixel-count displays.",
        "Backlight bleeding around panel bezels and mounting points.",
      ]}
      prepTips={[
        "Open your display's built-in web browser (e.g., Tizen, webOS, Chrome, Edge, Safari).",
        "Enable fullscreen mode in your browser to remove URL bars and browser controls.",
        "Ensure picture mode is set to 'Standard', 'Movie', or 'Filmmaker Mode' rather than oversaturated Vivid modes.",
        "View from your standard seating distance and then up-close for fine subpixel inspection.",
      ]}
      faqs={[
        {
          q: "Can I use this on a Smart TV?",
          a: "Yes! Open your TV's browser (LG webOS, Samsung Tizen, Sony Google TV), navigate to pixelcheck365.com/display-test, and click Start Test.",
        },
        {
          q: "What is Dirty Screen Effect (DSE)?",
          a: "DSE refers to blotchy, cloudy patches or vertical streaks visible when viewing panning shots of uniform color (like sports fields or blue sky). It is tested using 50% neutral gray.",
        },
      ]}
    />
  );
}
