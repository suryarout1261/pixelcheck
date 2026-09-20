import React from "react";
import type { Metadata } from "next";
import { TestLandingTemplate } from "@/components/seo/TestLandingTemplate";

export const metadata: Metadata = {
  title: "Screen Color Test | RGB & CMY Solid Color Diagnostic",
  description:
    "Test your display's primary and secondary color reproduction. Pure Red, Green, Blue, Cyan, Magenta, Yellow, White, and Black solid color screens.",
  alternates: {
    canonical: "/screen-color-test",
  },
};

export default function ScreenColorTestPage() {
  return (
    <TestLandingTemplate
      title="Screen Color Test"
      subtitle="Pure sRGB color diagnostics testing individual subpixel channels and primary/secondary color balance."
      badge="Color Accuracy"
      testMode="color"
      colorSequenceNames={["Red", "Green", "Blue", "Yellow", "Cyan", "Magenta", "White", "Black"]}
      overview="Every physical pixel on your screen is composed of individual subpixels. This test illuminates pure Red (#FF0000), Green (#00FF00), Blue (#0000FF), Yellow (#FFFF00), Cyan (#00FFFF), and Magenta (#FF00FF) fields to verify each channel operates at full intensity."
      whatToLookFor={[
        "Subpixel dropouts where a specific color channel fails to illuminate.",
        "Color tinting or uneven hue across different sectors of the screen.",
        "Warm or cool color shifts between top and bottom edges.",
        "Color saturation and purity without unwanted desaturation or artifacts.",
      ]}
      prepTips={[
        "Turn off any blue-light filter or warm color temperature adjustments.",
        "Ensure your graphics card driver is outputting full dynamic range (0-255 RGB).",
        "Inspect each solid color field for uniform luminance.",
        "Use keyboard arrows to step through colors at your own pace.",
      ]}
      faqs={[
        {
          q: "Why are Red, Green, and Blue tested separately?",
          a: "Since modern displays mix red, green, and blue light to create all colors, isolating each color channel lets you pinpoint which specific subpixel transistor is defective.",
        },
        {
          q: "What do Cyan, Magenta, and Yellow test?",
          a: "These secondary colors combine two primary subpixel channels (e.g. Cyan = Green + Blue). They reveal whether subpixel pairs blend correctly.",
        },
      ]}
    />
  );
}
