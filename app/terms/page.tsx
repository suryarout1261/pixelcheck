import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | PixelCheck365",
  description:
    "Terms of Service and conditions of use for PixelCheck365 free display diagnostic tools and services.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-muted text-foreground text-xs font-semibold">
            <FileText className="w-3.5 h-3.5 text-primary" />
            <span>Legal Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
            Terms of Service
          </h1>
          <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
            Last updated: September 2026
          </p>
        </div>

        <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using <strong>PixelCheck365</strong> (pixelcheck365.com), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the website or its testing tools.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">
              2. Permitted Use &amp; Service Scope
            </h2>
            <p>
              PixelCheck365 provides free, client-side visual testing utilities designed to assist users in inspecting computer monitors, phone displays, tablets, and televisions for visual defects such as dead pixels, stuck subpixels, and screen uniformity issues.
            </p>
            <p>
              You agree to use this service only for lawful, personal, or non-commercial display evaluation purposes.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">
              3. Visual Testing Disclaimer
            </h2>
            <p>
              PixelCheck365 is a visual inspection aid and does not provide certified hardware lab diagnostics, warranty guarantee certificates, or repair recommendations. For official warranty evaluations, always contact your device manufacturer or retailer.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">
              4. Intellectual Property
            </h2>
            <p>
              All trademarks, branding logos, user interface designs, and text content on PixelCheck365 are the property of PixelCheck365. All other third-party trademarks and brand names (e.g. Apple, iPhone, Mac, Windows, Android) are the property of their respective owners and used strictly for compatibility identification.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">
              5. Modifications to Service
            </h2>
            <p>
              We reserve the right to modify or discontinue any part of the service with or without notice at any time.
            </p>
          </section>
        </div>

        <div className="pt-6 border-t border-border flex justify-between items-center text-xs">
          <Link href="/" className="text-primary hover:underline font-semibold">
            ← Back to Home
          </Link>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/disclaimer" className="text-muted-foreground hover:text-foreground">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
