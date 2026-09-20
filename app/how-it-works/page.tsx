import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  HelpCircle,
  Play,
  CheckCircle2,
  AlertTriangle,
  Info,
  ShieldCheck,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works | Complete Screen & Dead Pixel Testing Guide",
  description:
    "Comprehensive guide on testing displays for dead pixels, stuck subpixels, backlight bleed, and screen uniformity. Learn how display technology works.",
  alternates: {
    canonical: "/how-it-works",
  },
};

export default function HowItWorksPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Display Testing Guide</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground">
            How Screen &amp; Dead Pixel Testing Works
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            A comprehensive, technically grounded guide to understanding display subpixels, identifying panel defects, and navigating warranty claims.
          </p>
        </div>

        {/* Quick Launch CTA */}
        <div className="p-6 rounded-3xl bg-primary/10 border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="font-bold text-base text-foreground">Ready to test your display now?</h2>
            <p className="text-xs text-muted-foreground">Jump directly into the full-screen diagnostic engine in one click.</p>
          </div>
          <Link
            href="/test"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-sm shadow-md hover:opacity-95 transition-all shrink-0"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Start Test</span>
          </Link>
        </div>

        {/* Section 1: What is a Pixel? */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2">
            1. What is a Pixel and How Do Displays Work?
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            A <strong>pixel</strong> (short for <em>picture element</em>) is the smallest addressable physical point on a display screen. On a standard 1080p Full HD display, there are over <strong>2 million pixels</strong> (1920 × 1080). On a 4K display, there are over <strong>8.3 million pixels</strong> (3840 × 2160).
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Each individual pixel is subdivided into three <strong>subpixels</strong>: <span className="text-red-500 font-semibold">Red</span>, <span className="text-green-500 font-semibold">Green</span>, and <span className="text-blue-500 font-semibold">Blue</span> (RGB). By varying the electrical voltage supplied to each subpixel, liquid crystals or OLED diodes modulate light to mix and produce over 16.7 million distinct color combinations (in standard 8-bit color).
          </p>
        </section>

        {/* Section 2: What is a Dead Pixel? */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2">
            2. What is a Dead Pixel?
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            A <strong>dead pixel</strong> is a display element where the thin-film transistor (TFT) powering the pixel has permanently failed to receive electrical current. Because the pixel cannot receive power to open its liquid crystal shutter or energize its OLED diode, it remains in a permanent <strong>off state</strong>.
          </p>
          <div className="p-4 rounded-2xl bg-card border border-border text-xs sm:text-sm text-foreground space-y-2">
            <p><strong>Key Characteristics of Dead Pixels:</strong></p>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Appears as a solid black or dark speck against bright backgrounds (White, Yellow, Cyan).</li>
              <li>Does not illuminate in any color mode.</li>
              <li>Caused by transistor hardware failure or broken circuit traces during manufacturing.</li>
              <li>Cannot be fixed via software cycling.</li>
            </ul>
          </div>
        </section>

        {/* Section 3: What is a Stuck Pixel? */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2">
            3. What is a Stuck Pixel?
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            A <strong>stuck pixel</strong> occurs when an electrical transistor is stuck in an <strong>on state</strong>, causing continuous electrical voltage to flow through one or more subpixel channels. As a result, the subpixel remains frozen, displaying a constant bright color.
          </p>
          <div className="p-4 rounded-2xl bg-card border border-border text-xs sm:text-sm text-foreground space-y-2">
            <p><strong>Key Characteristics of Stuck Pixels:</strong></p>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Appears as a bright red, green, blue, cyan, magenta, or white glowing dot.</li>
              <li>Highly visible on dark or pure black screens in a dim room.</li>
              <li>Liquid crystals may be temporarily misaligned or transistors latch-up.</li>
              <li>Occasionally responsive to rapid color cycling stimulation on LCD panels.</li>
            </ul>
          </div>
        </section>

        {/* Section 4: Dead vs Stuck Comparison Table */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2">
            4. Dead Pixel vs. Stuck Pixel Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse rounded-2xl overflow-hidden border border-border">
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3.5 border-b border-border">Feature</th>
                  <th className="p-3.5 border-b border-border">Dead Pixel</th>
                  <th className="p-3.5 border-b border-border">Stuck Pixel</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-muted-foreground">
                <tr>
                  <td className="p-3.5 font-medium text-foreground">Electrical State</td>
                  <td className="p-3.5">Permanently OFF (No current)</td>
                  <td className="p-3.5">Permanently ON (Continuous current)</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-medium text-foreground">Appearance</td>
                  <td className="p-3.5">Black or dark gray dot</td>
                  <td className="p-3.5">Bright Red, Green, Blue, or White dot</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-medium text-foreground">Best Detected On</td>
                  <td className="p-3.5">Pure White, Light Gray, Cyan</td>
                  <td className="p-3.5">Pure Black, Dark Gray, Magenta</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-medium text-foreground">Software Fixable?</td>
                  <td className="p-3.5">No (hardware transistor dead)</td>
                  <td className="p-3.5">Occasionally (liquid crystal stimulation)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5: Step-by-Step Testing Process */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2">
            5. Step-by-Step Display Inspection Process
          </h2>
          <ol className="space-y-4 text-xs sm:text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground font-bold text-xs flex items-center justify-center shrink-0">1</span>
              <div>
                <strong className="text-foreground">Wipe the Screen Surface:</strong> Use a dry microfiber cloth to eliminate smudges and dust that could create false positives.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground font-bold text-xs flex items-center justify-center shrink-0">2</span>
              <div>
                <strong className="text-foreground">Maximize Brightness:</strong> Boost display brightness to 80–100% to illuminate all subpixel channels.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground font-bold text-xs flex items-center justify-center shrink-0">3</span>
              <div>
                <strong className="text-foreground">Turn Off Color Filters:</strong> Disable True Tone, Night Shift, Eye Comfort Shield, and f.lux.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground font-bold text-xs flex items-center justify-center shrink-0">4</span>
              <div>
                <strong className="text-foreground">Enter Fullscreen Mode:</strong> Press 'F' on desktop or tap Fullscreen on mobile to eliminate distractions.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground font-bold text-xs flex items-center justify-center shrink-0">5</span>
              <div>
                <strong className="text-foreground">Inspect Each Solid Color:</strong> Spend 3-5 seconds scanning each quadrant of the screen. Look at corners and edges.
              </div>
            </li>
          </ol>
        </section>

        {/* Section 6: Warranty Standards (ISO 9241-307) */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2">
            6. What If You Find a Defective Pixel? Warranty &amp; ISO Standards
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Most manufacturers adhere to the international standard <strong>ISO 9241-307</strong> (which replaced ISO 13406-2). Under this standard, displays are categorized into classes based on the number of permissible defective pixels per 1 million pixels:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-muted-foreground">
            <li><strong>Class 0:</strong> Zero allowed defects (used in medical and critical military displays).</li>
            <li><strong>Class I:</strong> Zero permanently bright or dark pixels, up to 1 defective subpixel.</li>
            <li><strong>Class II (Standard Consumer):</strong> Allows up to 2 permanently bright pixels, 2 permanently dark pixels, and 5 defective subpixels per million pixels.</li>
          </ul>
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-foreground space-y-1.5">
            <p className="font-bold flex items-center gap-1.5 text-amber-500">
              <AlertTriangle className="w-4 h-4" />
              <span>Consumer Advice:</span>
            </p>
            <p className="text-muted-foreground">
              If you just bought a new monitor or device within the retailer's 14–30 day return window, return or exchange it directly with the store rather than filing a manufacturer warranty claim. Retailer return policies are generally much more lenient than ISO Class II warranty limits.
            </p>
          </div>
        </section>

        {/* Section 7: Limitations of Web Testing */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2">
            7. Limitations of Browser-Based Testing
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            PixelCheck365 delivers calibrated, unfiltered sRGB color surfaces to your browser viewport. However, web browsers have certain architectural boundaries:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-muted-foreground">
            <li>Web browsers cannot directly communicate with low-level display firmware or hardware controller ICs.</li>
            <li>Operating systems apply display scaling (DPI), meaning reported viewport CSS pixels differ from physical subpixel transistors.</li>
            <li>Visual testing relies on human visual acuity. Always perform tests in good viewing conditions.</li>
          </ul>
        </section>

        {/* Final CTA */}
        <div className="pt-8 text-center">
          <Link
            href="/test"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-base shadow-xl shadow-primary/25 hover:opacity-95 hover:scale-105 transition-all"
          >
            <Play className="w-5 h-5 fill-current" />
            <span>Launch Screen Test Now</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
