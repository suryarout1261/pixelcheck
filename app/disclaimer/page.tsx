import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { AlertCircle, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Disclaimer | PixelCheck365",
  description:
    "Medical, hardware, and warranty disclaimer for PixelCheck365. Understand the scope and intended use of our display diagnostic tools.",
  alternates: {
    canonical: "/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-muted text-foreground text-xs font-semibold">
            <AlertCircle className="w-3.5 h-3.5 text-primary" />
            <span>Legal &amp; Hardware Notice</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
            Disclaimer
          </h1>
          <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
            Last updated: September 2026
          </p>
        </div>

        <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">
              1. Visual Inspection Aid Only
            </h2>
            <p>
              <strong>PixelCheck365</strong> (pixelcheck365.com) is an online visual testing utility designed to display solid color fields, neutral grayscale backgrounds, and diagnostic gradients to assist users in visually inspecting computer monitors, smartphone screens, tablets, televisions, and other digital displays.
            </p>
            <p>
              PixelCheck365 does not perform automated hardware diagnostics, physical panel certification, or low-level firmware measurements. All defect evaluations depend on the user&apos;s personal visual observation.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">
              2. No Warranty or Manufacturer Endorsement
            </h2>
            <p>
              PixelCheck365 is an independent tool and is not affiliated with, endorsed by, or sponsored by Apple Inc., Google LLC, Microsoft Corporation, Samsung Electronics, LG Electronics, Dell, ASUS, Sony, or any other display manufacturer.
            </p>
            <p>
              Use of this website does not guarantee or certify that your display qualifies for warranty repair, return, or replacement under manufacturer terms or ISO 9241-307 guidelines. Always consult your device manufacturer or retailer for authoritative warranty determinations.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">
              3. Photosensitivity and Visual Comfort
            </h2>
            <p>
              Certain test modes, including Auto-Test cycling or high-contrast switching between dark and bright solid colors, may cause temporary visual fatigue or discomfort in sensitive individuals.
            </p>
            <p>
              If you experience eye strain, dizziness, or have a history of photosensitive reactions, pause the test immediately, reduce ambient brightness, and look away from the display.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">
              4. Limitation of Liability
            </h2>
            <p>
              The tools, scripts, and educational content on PixelCheck365 are provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, whether express or implied. Under no circumstances shall PixelCheck365 or its operators be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use this service.
            </p>
          </section>
        </div>

        <div className="pt-6 border-t border-border flex justify-between items-center text-xs">
          <Link href="/" className="text-primary hover:underline font-semibold">
            ← Back to Home
          </Link>
          <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
