import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Info, ShieldCheck, Zap, Monitor, Award, Play, Sparkles } from "lucide-react";
import { Logo } from "@/components/brand/Logo";

export const metadata: Metadata = {
  title: "About Us | PixelCheck365",
  description:
    "Learn more about PixelCheck365, the free, client-side display and dead pixel diagnostic utility built for smartphones, monitors, and TVs.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold">
            <Info className="w-3.5 h-3.5" />
            <span>About PixelCheck365</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground">
            About PixelCheck365
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Free, fast, and privacy-first display diagnostic utility engineered to help users easily inspect screens for defects, stuck pixels, and backlight anomalies.
          </p>
        </div>

        {/* Mission Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-primary/10 text-primary">
              <Monitor className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-foreground">Our Mission</h2>
              <p className="text-xs text-muted-foreground font-mono">Precision display diagnostics for all</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            When buying a new smartphone, laptop, or gaming monitor, screen defects such as dead pixels, stuck bright dots, IPS glow, and backlight bleed often go unnoticed until retailer return windows have expired.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong>PixelCheck365</strong> was built to provide an instant, zero-install, 100% private solution that delivers pure, uncompressed hardware color output directly in your web browser. No accounts, no telemetry, and no heavy downloads required.
          </p>
        </div>

        {/* Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
          <div className="p-5 rounded-2xl bg-muted/30 border border-border space-y-2">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500 w-fit">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-foreground">100% Client-Side</h3>
            <p className="text-muted-foreground leading-relaxed">
              All testing logic executes entirely inside your browser viewport. No screen recording, camera data, or device fingerprints are sent to any server.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-muted/30 border border-border space-y-2">
            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-500 w-fit">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-foreground">Ultra-Fast &amp; Lightweight</h3>
            <p className="text-muted-foreground leading-relaxed">
              Zero bloat libraries or slow animations. Clean, direct sRGB color canvases that load and render instantaneously on any phone, tablet, or PC.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-muted/30 border border-border space-y-2">
            <div className="p-2 rounded-xl bg-purple-500/10 text-purple-500 w-fit">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-foreground">Hardware Standardized</h3>
            <p className="text-muted-foreground leading-relaxed">
              Follows international ISO 9241-307 visual test aid guidelines with subpixel magnification, alignment grid, and comprehensive color sequences.
            </p>
          </div>
        </div>

        {/* Action CTA */}
        <div className="p-8 rounded-3xl bg-primary/10 border border-primary/20 text-center space-y-4">
          <h2 className="text-2xl font-black text-foreground">
            Test Your Screen in Seconds
          </h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Launch the distraction-free full-screen diagnostic suite right now.
          </p>
          <Link
            href="/test"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm shadow-md hover:opacity-95 transition-all hover:scale-105"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Launch Screen Test</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
