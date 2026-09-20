import React from "react";
import type { Metadata } from "next";
import { TestLandingTemplate } from "@/components/seo/TestLandingTemplate";

export const metadata: Metadata = {
  title: "Screen Uniformity Test | Check Backlight Bleed & IPS Glow",
  description:
    "Test your monitor and display for backlight bleeding, IPS glow, dirty screen effect (DSE), and brightness uniformity across dark and gray fields.",
  alternates: {
    canonical: "/screen-uniformity-test",
  },
};

export default function ScreenUniformityTestPage() {
  return (
    <TestLandingTemplate
      title="Screen Uniformity Test"
      subtitle="Examine brightness consistency, edge backlight bleed, corner IPS glow, and gray field uniformity across your panel."
      badge="Uniformity Diagnostic"
      testMode="uniformity"
      colorSequenceNames={["White", "Light Gray", "50% Gray", "Dark Gray", "Black", "Red", "Green", "Blue"]}
      overview="No display panel has 100% perfect lighting, but excessive backlight bleed, severe clouding, or heavy vignetting can ruin dark movies and gaming. This test uses varying levels of neutral gray and black to reveal panel lighting defects."
      whatToLookFor={[
        "Backlight bleeding: Bright yellow or white light leaking from bezel corners on black/dark screens.",
        "IPS Glow: A natural shimmering glow on IPS panels that changes intensity as you shift your head.",
        "Dirty Screen Effect (DSE): Cloudy patches or vertical banding on 50% neutral gray.",
        "Vignetting: Noticeable darkening around the corners and outer perimeters on white and light gray screens.",
      ]}
      prepTips={[
        "Dim the ambient lights in your room for dark gray and black uniformity inspection.",
        "Sit directly in front of the screen at standard viewing distance.",
        "Notice whether corner glow shifts when you move your head (IPS glow changes, backlight bleed remains fixed).",
        "Inspect 50% gray carefully for panel clouding or banding.",
      ]}
      faqs={[
        {
          q: "What is the difference between IPS glow and backlight bleed?",
          a: "IPS glow shifts in brightness and position as you change your viewing angle. Backlight bleed is caused by physical pressure or imperfect bezel seals and remains constant regardless of angle.",
        },
        {
          q: "Is backlight bleed covered under warranty?",
          a: "Minor backlight bleed is normal on edge-lit LCD panels. However, severe bleed that is clearly visible during normal content playback is often eligible for replacement.",
        },
      ]}
    />
  );
}
