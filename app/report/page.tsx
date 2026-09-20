"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { DisplayInfo } from "@/lib/types";
import {
  Award,
  CheckCircle2,
  AlertTriangle,
  Copy,
  ShieldCheck,
  Sparkles,
  Monitor,
  Check,
  Play,
  RotateCcw,
  Sliders,
  HelpCircle,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export interface DisplayEvaluationState {
  deadPixels: "none" | "one" | "multiple";
  stuckPixels: "none" | "one" | "multiple";
  uniformity: "perfect" | "minor_glow" | "severe_bleed";
  gradients: "smooth" | "minor_banding" | "severe_banding";
  colorBalance: "balanced" | "minor_tint" | "uneven";
}

export default function ReportPage() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [evaluation, setEvaluation] = useState<DisplayEvaluationState>({
    deadPixels: "none",
    stuckPixels: "none",
    uniformity: "perfect",
    gradients: "smooth",
    colorBalance: "balanced",
  });

  const [displayInfo, setDisplayInfo] = useState<DisplayInfo>({
    viewportWidth: 1920,
    viewportHeight: 1080,
    devicePixelRatio: 1,
    orientation: "landscape",
    colorDepth: 24,
    touchSupported: false,
    maxTouchPoints: 0,
    pixelRatioCategory: "1x Standard",
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const dpr = window.devicePixelRatio || 1;
    let dprCat = "1x Standard";
    if (dpr >= 3) dprCat = "3x Ultra Retina / High-DPI";
    else if (dpr >= 2) dprCat = "2x Retina / High-DPI";
    else if (dpr > 1) dprCat = `${dpr.toFixed(2)}x Scaling`;

    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const orient =
      window.screen?.orientation?.type?.replace("-", " ") ||
      (window.innerWidth > window.innerHeight ? "Landscape" : "Portrait");

    setDisplayInfo({
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight,
      devicePixelRatio: dpr,
      orientation: orient,
      colorDepth: window.screen?.colorDepth || 24,
      touchSupported: isTouch,
      maxTouchPoints: navigator.maxTouchPoints || 0,
      pixelRatioCategory: dprCat,
    });
  }, []);

  // Calculate dynamic display score (0 - 100)
  const scoreData = useMemo(() => {
    let score = 100;
    const deductions: { reason: string; pts: number }[] = [];

    // Dead Pixels
    if (evaluation.deadPixels === "one") {
      score -= 15;
      deductions.push({ reason: "1 Dead Pixel detected", pts: 15 });
    } else if (evaluation.deadPixels === "multiple") {
      score -= 30;
      deductions.push({ reason: "Multiple Dead Pixels detected", pts: 30 });
    }

    // Stuck Pixels
    if (evaluation.stuckPixels === "one") {
      score -= 12;
      deductions.push({ reason: "1 Stuck Subpixel detected", pts: 12 });
    } else if (evaluation.stuckPixels === "multiple") {
      score -= 25;
      deductions.push({ reason: "Multiple Stuck Subpixels detected", pts: 25 });
    }

    // Uniformity & Backlight Bleed
    if (evaluation.uniformity === "minor_glow") {
      score -= 5;
      deductions.push({ reason: "Minor corner glow / edge vignetting", pts: 5 });
    } else if (evaluation.uniformity === "severe_bleed") {
      score -= 18;
      deductions.push({ reason: "Severe backlight bleed or clouding", pts: 18 });
    }

    // Gradient & Banding
    if (evaluation.gradients === "minor_banding") {
      score -= 4;
      deductions.push({ reason: "Subtle color banding in dark gradients", pts: 4 });
    } else if (evaluation.gradients === "severe_banding") {
      score -= 12;
      deductions.push({ reason: "Noticeable gradient stepping / posterization", pts: 12 });
    }

    // Color Balance
    if (evaluation.colorBalance === "minor_tint") {
      score -= 4;
      deductions.push({ reason: "Slight panel color temperature shift", pts: 4 });
    } else if (evaluation.colorBalance === "uneven") {
      score -= 10;
      deductions.push({ reason: "Uneven color saturation across panel", pts: 10 });
    }

    score = Math.max(0, score);

    let grade = "A+";
    let gradeLabel = t.report.gradeAplusLabel;
    let gradeColor = "text-emerald-400 bg-emerald-500/10 border-emerald-500/30";
    let isoClass = t.report.isoPassed;

    if (score >= 95) {
      grade = "A+";
      gradeLabel = t.report.gradeAplusLabel;
      gradeColor = "text-emerald-400 bg-emerald-500/10 border-emerald-500/30";
      isoClass = t.report.isoPassed;
    } else if (score >= 85) {
      grade = "A";
      gradeLabel = t.report.gradeALabel;
      gradeColor = "text-emerald-400 bg-emerald-500/10 border-emerald-500/30";
      isoClass = t.report.isoStandard;
    } else if (score >= 70) {
      grade = "B";
      gradeLabel = t.report.gradeBLabel;
      gradeColor = "text-amber-400 bg-amber-500/10 border-amber-500/30";
      isoClass = t.report.isoTolerable;
    } else if (score >= 50) {
      grade = "C";
      gradeLabel = t.report.gradeCLabel;
      gradeColor = "text-orange-400 bg-orange-500/10 border-orange-500/30";
      isoClass = t.report.isoWarranty;
    } else {
      grade = "D";
      gradeLabel = t.report.gradeDLabel;
      gradeColor = "text-rose-400 bg-rose-500/10 border-rose-500/30";
      isoClass = t.report.isoAction;
    }

    return { score, grade, gradeLabel, gradeColor, isoClass, deductions };
  }, [evaluation, t]);

  const testDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const generateReportText = () => {
    return `=== PixelCheck365 Display Inspection Certificate ===
Date: ${testDate}
Overall Score: ${scoreData.score} / 100 (${scoreData.grade} - ${scoreData.gradeLabel})
Compliance: ${scoreData.isoClass}

--- Display & Viewport Metrics ---
Viewport: ${displayInfo.viewportWidth} × ${displayInfo.viewportHeight} px
Device Pixel Ratio: ${displayInfo.devicePixelRatio} (${displayInfo.pixelRatioCategory})
Orientation: ${displayInfo.orientation}
Color Depth: ${displayInfo.colorDepth}-bit

--- Findings Summary ---
- Dead Pixels: ${evaluation.deadPixels === "none" ? t.report.none : evaluation.deadPixels === "one" ? t.report.oneDead : t.report.multipleDead}
- Stuck Subpixels: ${evaluation.stuckPixels === "none" ? t.report.none : evaluation.stuckPixels === "one" ? t.report.oneStuck : t.report.multipleStuck}
- Panel Uniformity: ${evaluation.uniformity === "perfect" ? t.report.uniform : evaluation.uniformity === "minor_glow" ? t.report.minorGlow : t.report.bleed}
- Gradient Rendition: ${evaluation.gradients === "smooth" ? t.report.smooth : evaluation.gradients === "minor_banding" ? t.report.minorBanding : t.report.severeBanding}
- Subpixel Balance: ${evaluation.colorBalance === "balanced" ? t.report.balanced : evaluation.colorBalance === "minor_tint" ? t.report.minorTint : t.report.uneven}

Visual inspection generated via https://pixelcheck365.com`;
  };

  const copyReport = async () => {
    try {
      await navigator.clipboard.writeText(generateReportText());
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // ignore
    }
  };

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide">
            <Award className="w-3.5 h-3.5" />
            <span>{t.report.badge}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground">
            {t.report.title}
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            {t.report.subtitle}
          </p>
        </div>

        {/* Score & Grade Hero Showcase */}
        <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            {/* Score Ring */}
            <div className="relative flex items-center justify-center w-28 h-28 rounded-3xl bg-muted/60 border-2 border-primary/30 shadow-inner">
              <div className="flex flex-col items-center">
                <span className="text-4xl font-black font-mono text-primary leading-none">
                  {scoreData.score}
                </span>
                <span className="text-xs text-muted-foreground font-mono uppercase mt-1">
                  {t.report.scoreOutOf}
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-center sm:justify-start gap-2.5">
                <span
                  className={`text-sm font-mono font-black uppercase px-3 py-1 rounded-lg border ${scoreData.gradeColor}`}
                >
                  {scoreData.grade}
                </span>
                <span className="text-base font-bold text-foreground">
                  {scoreData.gradeLabel}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground flex items-center justify-center sm:justify-start gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{scoreData.isoClass}</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full md:w-auto">
            <Link
              href="/test?mode=fullscreen"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-sm shadow-md hover:opacity-95 transition-all"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>{t.report.launchTest}</span>
            </Link>

            <button
              onClick={copyReport}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-xs border border-border transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span className="text-emerald-500">{t.report.copied}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-muted-foreground" />
                  <span>{t.report.copyReport}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Observation Log Form */}
        <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-border/60 pb-3">
            <h2 className="text-sm font-mono uppercase tracking-wider text-foreground font-bold flex items-center gap-2">
              <Sliders className="w-4 h-4 text-primary" />
              <span>{t.report.findingsTitle}</span>
            </h2>
            <span className="text-xs text-muted-foreground">{t.report.findingsSubtitle}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {/* 1. Dead Pixels */}
            <div className="p-4 rounded-2xl bg-muted/30 border border-border/60 space-y-2.5">
              <span className="font-bold text-foreground text-sm block">
                {t.report.deadPixelsTitle}
              </span>
              <div className="grid grid-cols-3 gap-1.5 font-mono text-xs">
                <button
                  onClick={() => setEvaluation((e) => ({ ...e, deadPixels: "none" }))}
                  className={`p-2 rounded-xl border transition-all ${
                    evaluation.deadPixels === "none"
                      ? "bg-emerald-500/20 text-emerald-500 border-emerald-500/40 font-bold"
                      : "bg-card text-muted-foreground border-border hover:text-foreground"
                  }`}
                >
                  {t.report.none}
                </button>
                <button
                  onClick={() => setEvaluation((e) => ({ ...e, deadPixels: "one" }))}
                  className={`p-2 rounded-xl border transition-all ${
                    evaluation.deadPixels === "one"
                      ? "bg-amber-500/20 text-amber-500 border-amber-500/40 font-bold"
                      : "bg-card text-muted-foreground border-border hover:text-foreground"
                  }`}
                >
                  {t.report.oneDead}
                </button>
                <button
                  onClick={() => setEvaluation((e) => ({ ...e, deadPixels: "multiple" }))}
                  className={`p-2 rounded-xl border transition-all ${
                    evaluation.deadPixels === "multiple"
                      ? "bg-rose-500/20 text-rose-500 border-rose-500/40 font-bold"
                      : "bg-card text-muted-foreground border-border hover:text-foreground"
                  }`}
                >
                  {t.report.multipleDead}
                </button>
              </div>
            </div>

            {/* 2. Stuck Subpixels */}
            <div className="p-4 rounded-2xl bg-muted/30 border border-border/60 space-y-2.5">
              <span className="font-bold text-foreground text-sm block">
                {t.report.stuckPixelsTitle}
              </span>
              <div className="grid grid-cols-3 gap-1.5 font-mono text-xs">
                <button
                  onClick={() => setEvaluation((e) => ({ ...e, stuckPixels: "none" }))}
                  className={`p-2 rounded-xl border transition-all ${
                    evaluation.stuckPixels === "none"
                      ? "bg-emerald-500/20 text-emerald-500 border-emerald-500/40 font-bold"
                      : "bg-card text-muted-foreground border-border hover:text-foreground"
                  }`}
                >
                  {t.report.none}
                </button>
                <button
                  onClick={() => setEvaluation((e) => ({ ...e, stuckPixels: "one" }))}
                  className={`p-2 rounded-xl border transition-all ${
                    evaluation.stuckPixels === "one"
                      ? "bg-amber-500/20 text-amber-500 border-amber-500/40 font-bold"
                      : "bg-card text-muted-foreground border-border hover:text-foreground"
                  }`}
                >
                  {t.report.oneStuck}
                </button>
                <button
                  onClick={() => setEvaluation((e) => ({ ...e, stuckPixels: "multiple" }))}
                  className={`p-2 rounded-xl border transition-all ${
                    evaluation.stuckPixels === "multiple"
                      ? "bg-rose-500/20 text-rose-500 border-rose-500/40 font-bold"
                      : "bg-card text-muted-foreground border-border hover:text-foreground"
                  }`}
                >
                  {t.report.multipleStuck}
                </button>
              </div>
            </div>

            {/* 3. Screen Uniformity */}
            <div className="p-4 rounded-2xl bg-muted/30 border border-border/60 space-y-2.5">
              <span className="font-bold text-foreground text-sm block">
                {t.report.uniformityTitle}
              </span>
              <div className="grid grid-cols-3 gap-1.5 font-mono text-xs">
                <button
                  onClick={() => setEvaluation((e) => ({ ...e, uniformity: "perfect" }))}
                  className={`p-2 rounded-xl border transition-all ${
                    evaluation.uniformity === "perfect"
                      ? "bg-emerald-500/20 text-emerald-500 border-emerald-500/40 font-bold"
                      : "bg-card text-muted-foreground border-border hover:text-foreground"
                  }`}
                >
                  {t.report.uniform}
                </button>
                <button
                  onClick={() => setEvaluation((e) => ({ ...e, uniformity: "minor_glow" }))}
                  className={`p-2 rounded-xl border transition-all ${
                    evaluation.uniformity === "minor_glow"
                      ? "bg-amber-500/20 text-amber-500 border-amber-500/40 font-bold"
                      : "bg-card text-muted-foreground border-border hover:text-foreground"
                  }`}
                >
                  {t.report.minorGlow}
                </button>
                <button
                  onClick={() => setEvaluation((e) => ({ ...e, uniformity: "severe_bleed" }))}
                  className={`p-2 rounded-xl border transition-all ${
                    evaluation.uniformity === "severe_bleed"
                      ? "bg-rose-500/20 text-rose-500 border-rose-500/40 font-bold"
                      : "bg-card text-muted-foreground border-border hover:text-foreground"
                  }`}
                >
                  {t.report.bleed}
                </button>
              </div>
            </div>

            {/* 4. Gradient Rendition */}
            <div className="p-4 rounded-2xl bg-muted/30 border border-border/60 space-y-2.5">
              <span className="font-bold text-foreground text-sm block">
                {t.report.gradientsTitle}
              </span>
              <div className="grid grid-cols-3 gap-1.5 font-mono text-xs">
                <button
                  onClick={() => setEvaluation((e) => ({ ...e, gradients: "smooth" }))}
                  className={`p-2 rounded-xl border transition-all ${
                    evaluation.gradients === "smooth"
                      ? "bg-emerald-500/20 text-emerald-500 border-emerald-500/40 font-bold"
                      : "bg-card text-muted-foreground border-border hover:text-foreground"
                  }`}
                >
                  {t.report.smooth}
                </button>
                <button
                  onClick={() => setEvaluation((e) => ({ ...e, gradients: "minor_banding" }))}
                  className={`p-2 rounded-xl border transition-all ${
                    evaluation.gradients === "minor_banding"
                      ? "bg-amber-500/20 text-amber-500 border-amber-500/40 font-bold"
                      : "bg-card text-muted-foreground border-border hover:text-foreground"
                  }`}
                >
                  {t.report.minorBanding}
                </button>
                <button
                  onClick={() => setEvaluation((e) => ({ ...e, gradients: "severe_banding" }))}
                  className={`p-2 rounded-xl border transition-all ${
                    evaluation.gradients === "severe_banding"
                      ? "bg-rose-500/20 text-rose-500 border-rose-500/40 font-bold"
                      : "bg-card text-muted-foreground border-border hover:text-foreground"
                  }`}
                >
                  {t.report.severeBanding}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Display Metrics Hardware Box */}
        <div className="p-6 rounded-2xl bg-muted/20 border border-border text-xs space-y-3">
          <div className="flex items-center justify-between text-muted-foreground font-mono uppercase text-[11px]">
            <span>{t.report.hardwareBoxTitle}</span>
            <span>{testDate}</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center sm:text-left">
            <div className="p-3 rounded-xl bg-card border border-border">
              <span className="text-[10px] text-muted-foreground block uppercase font-mono">{t.report.viewport}</span>
              <p className="font-bold font-mono text-foreground">{displayInfo.viewportWidth} × {displayInfo.viewportHeight}</p>
            </div>
            <div className="p-3 rounded-xl bg-card border border-border">
              <span className="text-[10px] text-muted-foreground block uppercase font-mono">{t.report.dprScaling}</span>
              <p className="font-bold font-mono text-foreground">{displayInfo.devicePixelRatio}x ({displayInfo.pixelRatioCategory})</p>
            </div>
            <div className="p-3 rounded-xl bg-card border border-border">
              <span className="text-[10px] text-muted-foreground block uppercase font-mono">{t.report.orientation}</span>
              <p className="font-bold capitalize text-foreground">{displayInfo.orientation}</p>
            </div>
            <div className="p-3 rounded-xl bg-card border border-border">
              <span className="text-[10px] text-muted-foreground block uppercase font-mono">{t.report.colorDepth}</span>
              <p className="font-bold font-mono text-foreground">{displayInfo.colorDepth}-bit sRGB</p>
            </div>
          </div>
        </div>

        {/* Diagnostic Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/test"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs flex items-center justify-center gap-2 shadow-md hover:opacity-95 transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{t.report.restartDiagnostic}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
