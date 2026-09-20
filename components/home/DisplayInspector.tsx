"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Monitor,
  Maximize2,
  Smartphone,
  CheckCircle,
  Play,
  RotateCw,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export const DisplayInspector: React.FC = () => {
  const { t } = useLanguage();
  const [metrics, setMetrics] = useState({
    viewport: "Loading...",
    dpr: "1.0",
    dprDescription: "Standard 1x",
    orientation: "Landscape",
    colorDepth: "24-bit",
    touchSupport: "No",
    touchPoints: "0",
  });

  const updateMetrics = () => {
    if (typeof window === "undefined") return;
    const dpr = window.devicePixelRatio || 1;
    let dprDesc = "1x Standard";
    if (dpr >= 3) dprDesc = "3x Ultra Retina / High-DPI";
    else if (dpr >= 2) dprDesc = "2x Retina / HiDPI";
    else if (dpr > 1) dprDesc = `${dpr.toFixed(2)}x Scaling`;

    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const orient =
      window.screen?.orientation?.type?.replace("-", " ") ||
      (window.innerWidth > window.innerHeight ? "Landscape" : "Portrait");

    setMetrics({
      viewport: `${window.innerWidth} × ${window.innerHeight} px`,
      dpr: `${dpr.toFixed(2)}`,
      dprDescription: dprDesc,
      orientation: orient,
      colorDepth: `${window.screen?.colorDepth || 24}-bit`,
      touchSupport: isTouch ? "Touchscreen Detected" : "Mouse / Trackpad",
      touchPoints: `${navigator.maxTouchPoints || 0}`,
    });
  };

  useEffect(() => {
    updateMetrics();
    window.addEventListener("resize", updateMetrics);
    window.addEventListener("orientationchange", updateMetrics);
    return () => {
      window.removeEventListener("resize", updateMetrics);
      window.removeEventListener("orientationchange", updateMetrics);
    };
  }, []);

  return (
    <section className="py-16 md:py-20 bg-muted/20 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-primary font-bold mb-2">
            {t.displayInspector.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
            {t.displayInspector.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">
            {t.displayInspector.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-3xl bg-card border border-border/80 shadow-md p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-border/60">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                <Monitor className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  {t.displayInspector.cardTitle}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {t.displayInspector.cardSubtitle}
                </p>
              </div>
            </div>

            <button
              onClick={updateMetrics}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted text-xs font-medium text-foreground hover:bg-muted/80 transition-colors"
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span>{t.displayInspector.refresh}</span>
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
            <div className="p-4 rounded-2xl bg-muted/40 border border-border/40 space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                {t.displayInspector.viewport}
              </span>
              <p className="text-base sm:text-lg font-black text-foreground font-mono">
                {metrics.viewport}
              </p>
              <span className="text-[11px] text-muted-foreground block">
                {t.displayInspector.viewportDesc}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-muted/40 border border-border/40 space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                {t.displayInspector.dpr}
              </span>
              <p className="text-base sm:text-lg font-black text-primary font-mono">
                {metrics.dpr} DPR
              </p>
              <span className="text-[11px] text-muted-foreground block truncate">
                {metrics.dprDescription}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-muted/40 border border-border/40 space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                {t.displayInspector.orientation}
              </span>
              <p className="text-base sm:text-lg font-black text-foreground capitalize">
                {metrics.orientation}
              </p>
              <span className="text-[11px] text-muted-foreground block">
                {t.displayInspector.orientationDesc}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-muted/40 border border-border/40 space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                {t.displayInspector.colorDepth}
              </span>
              <p className="text-base sm:text-lg font-black text-foreground font-mono">
                {metrics.colorDepth}
              </p>
              <span className="text-[11px] text-muted-foreground block">
                {t.displayInspector.colorDepthDesc}
              </span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-muted/20 border border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>{t.displayInspector.ctaHint}</span>
            </div>
            <Link
              href="/test?mode=fullscreen"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-95 transition-all shadow-sm shrink-0"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{t.displayInspector.ctaButton}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
