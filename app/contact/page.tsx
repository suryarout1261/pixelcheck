"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, MessageSquare, ShieldCheck, CheckCircle2, HelpCircle, Copy, Check, Send, Sparkles } from "lucide-react";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const communicationEmail = "suryaprasadrout1261@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(communicationEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold">
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
            Contact PixelCheck365
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            Have questions, display test feature suggestions, bug reports, or feedback? We&apos;d love to hear from you.
          </p>
        </div>

        {/* Primary Communication Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-card via-card to-primary/5 border border-border shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="p-3.5 rounded-2xl bg-primary/10 text-primary shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-bold text-foreground">Official Communication Email</h2>
                <p className="text-xs text-muted-foreground">Direct inbox for all inquiries, support, and feedback</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-medium w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Active Response
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-muted/40 border border-border/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 font-mono text-sm sm:text-base font-bold text-foreground break-all">
              <Mail className="w-4 h-4 text-primary shrink-0 hidden xs:block" />
              <span>{communicationEmail}</span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-card border border-border hover:bg-muted text-foreground text-xs font-semibold shadow-sm transition-all active:scale-95"
                title="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-500">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${communicationEmail}?subject=PixelCheck365%20Inquiry`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-bold shadow-sm hover:opacity-95 transition-all hover:scale-105 active:scale-95"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6 rounded-3xl bg-card border border-border shadow-sm space-y-3">
            <div className="p-3 rounded-2xl bg-primary/10 text-primary w-fit">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-foreground">General Support &amp; Feedback</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Questions regarding browser testing, feature suggestions, or reporting display irregularities:
            </p>
            <a
              href={`mailto:${communicationEmail}?subject=PixelCheck365%20Support`}
              className="inline-block text-xs font-mono font-bold text-primary hover:underline pt-1"
            >
              {communicationEmail}
            </a>
          </div>

          <div className="p-6 rounded-3xl bg-card border border-border shadow-sm space-y-3">
            <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-500 w-fit">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-foreground">Privacy &amp; Technical Queries</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Inquiries regarding client-side data privacy, terms of use, or hardware diagnostics standards:
            </p>
            <a
              href={`mailto:${communicationEmail}?subject=PixelCheck365%20Privacy%20Inquiry`}
              className="inline-block text-xs font-mono font-bold text-emerald-500 hover:underline pt-1"
            >
              {communicationEmail}
            </a>
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-muted/30 border border-border text-xs sm:text-sm text-muted-foreground space-y-3">
          <h3 className="font-bold text-foreground flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span>Frequently Asked Support Questions</span>
          </h3>
          <ul className="space-y-2 text-xs">
            <li>
              <strong>Need to test a phone screen?</strong> Open <Link href="/test" className="text-primary hover:underline font-semibold">pixelcheck365.com/test</Link> in Safari or Chrome and tap Fullscreen.
            </li>
            <li>
              <strong>Need information on warranty dead pixel thresholds?</strong> Read our detailed <Link href="/how-it-works" className="text-primary hover:underline font-semibold">Testing &amp; ISO 9241-307 Guide</Link>.
            </li>
          </ul>
        </div>

        <div className="pt-6 border-t border-border flex justify-between items-center text-xs">
          <Link href="/" className="text-primary hover:underline font-semibold">
            ← Back to Home
          </Link>
          <div className="flex gap-4">
            <Link href="/about" className="text-muted-foreground hover:text-foreground">
              About Us
            </Link>
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
