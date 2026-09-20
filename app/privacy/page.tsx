import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | PixelCheck365",
  description:
    "Privacy Policy for PixelCheck365. Learn how our client-side display testing protects your privacy with zero screen recording or data collection.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Client-Side Privacy</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
            Last updated: September 2026
          </p>
        </div>

        <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
          <div className="p-4 rounded-2xl bg-card border border-border text-foreground space-y-1 text-xs sm:text-sm">
            <p className="font-bold flex items-center gap-1.5 text-primary">
              <Lock className="w-4 h-4" />
              <span>Core Privacy Commitment:</span>
            </p>
            <p className="text-muted-foreground">
              PixelCheck365 executes all display diagnostics directly in your web browser. We do not capture, record, store, or transmit your screen contents, camera feed, or personal files to any server.
            </p>
          </div>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">
              1. Information We Do Not Collect
            </h2>
            <p>
              When you use our display testing tools, the test runs entirely client-side. We do not:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Request camera, microphone, or file storage permissions.</li>
              <li>Take screenshots or record your browser screen.</li>
              <li>Require user accounts, logins, email addresses, or phone numbers.</li>
              <li>Collect hardware serial numbers or MAC addresses.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">
              2. Browser Storage (LocalStorage)
            </h2>
            <p>
              PixelCheck365 uses standard browser <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded text-foreground">localStorage</code> solely to remember your harmless UI theme preference (Light, Dark, or System mode). No tracking IDs, personal data, or sensitive tokens are stored.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">
              3. Server Logs &amp; Anonymous Metrics
            </h2>
            <p>
              Like virtually all web services, our web hosting servers may record standard anonymous web server logs (such as IP address, browser user-agent header, referring URL, and access timestamps) for security, DDoS mitigation, and operational health. These logs are not combined with personal profiles.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">
              4. Third-Party Services &amp; Future Advertising
            </h2>
            <p>
              If advertising networks (e.g. Google AdSense) or privacy-preserving analytics are enabled on informational sections of this site in the future, they may use cookies or web beacons in accordance with their respective privacy policies. Advertising will never appear over or interrupt the active fullscreen testing interface.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">
              5. Contact Us
            </h2>
            <p>
              If you have any questions or feedback regarding this Privacy Policy or our display diagnostic tools, please contact us at: <a href="mailto:suryaprasadrout1261@gmail.com" className="font-mono text-primary font-semibold hover:underline">suryaprasadrout1261@gmail.com</a>.
            </p>
          </section>
        </div>

        <div className="pt-6 border-t border-border flex justify-between items-center text-xs">
          <Link href="/" className="text-primary hover:underline font-semibold">
            ← Back to Home
          </Link>
          <Link href="/disclaimer" className="text-muted-foreground hover:text-foreground">
            Disclaimer
          </Link>
        </div>
      </div>
    </div>
  );
}
