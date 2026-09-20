"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error for diagnostic tracking
    console.error("Application Runtime Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between p-6">
      <header className="w-full max-w-7xl mx-auto flex items-center justify-between py-4">
        <Logo variant="full" size="md" href="/" />
      </header>

      <main className="flex-1 flex items-center justify-center py-12">
        <div className="max-w-md w-full bg-card border border-border p-8 rounded-3xl shadow-xl text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mx-auto">
            <AlertTriangle className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-black tracking-tight text-foreground">
              Temporary Display Glitch
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed">
              An unexpected error occurred while rendering this page. You can try refreshing the page state or returning home.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => reset()}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-all shadow-sm"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Try Again</span>
            </button>

            <Link
              href="/"
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-muted text-foreground font-bold text-sm hover:bg-muted/80 transition-all"
            >
              <Home className="w-4 h-4" />
              <span>Go Home</span>
            </Link>
          </div>
        </div>
      </main>

      <footer className="w-full text-center text-xs text-muted-foreground py-4">
        <p>© {new Date().getFullYear()} PixelCheck365. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
