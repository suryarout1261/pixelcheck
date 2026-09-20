"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Monitor, Home, Play, ArrowLeft, HelpCircle, Search, RefreshCw } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between selection:bg-primary selection:text-white">
      {/* Simple Header */}
      <header className="w-full border-b border-border/40 py-4 px-4 sm:px-8 bg-card/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Logo variant="full" size="md" href="/" />
          <Link
            href="/test"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-sm"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Launch Screen Test</span>
          </Link>
        </div>
      </header>

      {/* Main 404 Content */}
      <main className="flex-1 flex items-center justify-center p-6 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-2xl" />
        </div>

        <div className="max-w-2xl w-full text-center relative z-10 space-y-8 py-12">
          {/* 404 Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-destructive/10 border border-destructive/20 text-destructive text-xs font-mono font-bold uppercase tracking-widest animate-pulse">
            <span className="w-2 h-2 rounded-full bg-destructive" />
            <span>Error 404 • Page Not Found</span>
          </div>

          {/* Big Number Illustration */}
          <div className="relative">
            <h1 className="text-7xl sm:text-9xl font-black tracking-tighter text-foreground/10 select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="p-4 rounded-3xl bg-card border border-border shadow-2xl backdrop-blur-xl">
                <Monitor className="w-16 h-16 sm:w-20 sm:h-20 text-primary animate-bounce" />
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-3 max-w-lg mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground">
              Oops! Misnavigated to an Offline Pixel
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              The page or resource you are looking for has been moved, renamed, or does not exist. Let&apos;s get your display test back on track!
            </p>
          </div>

          {/* Navigation Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-all shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              <Home className="w-4 h-4" />
              <span>Return to Homepage</span>
            </Link>

            <Link
              href="/test"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-card border border-border/80 hover:border-primary/50 text-foreground font-bold text-sm transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98]"
            >
              <Play className="w-4 h-4 text-emerald-500 fill-emerald-500" />
              <span>Start Screen Diagnostic</span>
            </Link>
          </div>

          {/* Quick Helpful Links Grid */}
          <div className="pt-8 border-t border-border/40 max-w-xl mx-auto">
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-bold mb-4">
              Popular Screen Diagnostic Tools
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs font-medium">
              <Link
                href="/dead-pixel-test"
                className="p-2.5 rounded-xl bg-card/60 border border-border/60 hover:border-primary/40 hover:text-primary transition-all text-muted-foreground text-center"
              >
                Dead Pixel Test
              </Link>
              <Link
                href="/stuck-pixel-test"
                className="p-2.5 rounded-xl bg-card/60 border border-border/60 hover:border-primary/40 hover:text-primary transition-all text-muted-foreground text-center"
              >
                Stuck Pixel Test
              </Link>
              <Link
                href="/screen-uniformity-test"
                className="p-2.5 rounded-xl bg-card/60 border border-border/60 hover:border-primary/40 hover:text-primary transition-all text-muted-foreground text-center"
              >
                Screen Uniformity
              </Link>
              <Link
                href="/gradient-test"
                className="p-2.5 rounded-xl bg-card/60 border border-border/60 hover:border-primary/40 hover:text-primary transition-all text-muted-foreground text-center"
              >
                Gradient Test
              </Link>
              <Link
                href="/report"
                className="p-2.5 rounded-xl bg-card/60 border border-border/60 hover:border-primary/40 hover:text-primary transition-all text-muted-foreground text-center"
              >
                Display Score
              </Link>
              <Link
                href="/contact"
                className="p-2.5 rounded-xl bg-card/60 border border-border/60 hover:border-primary/40 hover:text-primary transition-all text-muted-foreground text-center"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="w-full border-t border-border/40 py-4 px-4 text-center text-xs text-muted-foreground bg-card/20">
        <p>© {new Date().getFullYear()} PixelCheck365. Free Client-Side Display Diagnostics.</p>
      </footer>
    </div>
  );
}
