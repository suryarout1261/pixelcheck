"use client";

import React from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white min-h-screen flex items-center justify-center p-6 font-sans">
        <div className="max-w-md w-full bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center space-y-6 shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mx-auto">
            <span className="text-2xl font-black">!</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-black text-white">System Diagnostics Reset</h1>
            <p className="text-sm text-slate-400">
              A critical error was encountered. Click below to reload the diagnostic suite.
            </p>
          </div>

          <button
            onClick={() => reset()}
            className="w-full py-3 px-6 rounded-2xl bg-cyan-500 text-slate-950 font-bold text-sm hover:bg-cyan-400 transition-colors shadow-lg"
          >
            Reload Diagnostic App
          </button>
        </div>
      </body>
    </html>
  );
}
