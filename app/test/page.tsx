import React, { Suspense } from "react";
import type { Metadata } from "next";
import { ScreenTester } from "@/components/tester/ScreenTester";

export const metadata: Metadata = {
  title: "Screen & Dead Pixel Diagnostic Engine | PixelCheck365",
  description:
    "Full-screen color diagnostic tester for dead pixels, stuck subpixels, screen uniformity, and color gradients. Clean distraction-free testing canvas.",
  robots: {
    index: true,
    follow: true,
  },
};

function TesterLoading() {
  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center text-white">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
        <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
          Initializing Screen Canvas...
        </span>
      </div>
    </div>
  );
}

export default function TestPage() {
  return (
    <div className="w-screen h-screen overflow-hidden bg-black">
      <Suspense fallback={<TesterLoading />}>
        <ScreenTester />
      </Suspense>
    </div>
  );
}
