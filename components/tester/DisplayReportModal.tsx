"use client";

import React, { useState, useMemo } from "react";
import { DisplayInfo, TestMode } from "@/lib/types";
import {
  Award,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Copy,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Monitor,
  Check,
  ChevronRight,
  HelpCircle,
  X,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export interface DisplayEvaluationState {
  deadPixels: "none" | "one" | "multiple";
  stuckPixels: "none" | "one" | "multiple";
  uniformity: "perfect" | "minor_glow" | "severe_bleed";
  gradients: "smooth" | "minor_banding" | "severe_banding";
  colorBalance: "balanced" | "minor_tint" | "uneven";
}

interface DisplayReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRetest: () => void;
  displayInfo: DisplayInfo;
  testMode: TestMode;
  totalColorsTested: number;
}

export const DisplayReportModal: React.FC<DisplayReportModalProps> = ({
  isOpen,
  onClose,
  onRetest,
  displayInfo,
  testMode,
  totalColorsTested,
}) => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [evaluation, setEvaluation] = useState<DisplayEvaluationState>({
    deadPixels: "none",
    stuckPixels: "none",
    uniformity: "perfect",
    gradients: "smooth",
    colorBalance: "balanced",
  });

  // Calculate dynamic display score (0 - 100)
  const scoreData = useMemo(() => {
    let score = 100;
    const deductions: { reason: string; pts: number }[] = [];

    // Dead Pixels (Max 25 pts)
    if (evaluation.deadPixels === "one") {
      score -= 15;
      deductions.push({ reason: "1 Dead Pixel detected", pts: 15 });
    } else if (evaluation.deadPixels === "multiple") {
      score -= 30;
      deductions.push({ reason: "Multiple Dead Pixels detected", pts: 30 });
    }

    // Stuck Pixels (Max 25 pts)
    if (evaluation.stuckPixels === "one") {
      score -= 12;
      deductions.push({ reason: "1 Stuck Subpixel detected", pts: 12 });
    } else if (evaluation.stuckPixels === "multiple") {
      score -= 25;
      deductions.push({ reason: "Multiple Stuck Subpixels detected", pts: 25 });
    }

    // Uniformity & Backlight Bleed (Max 20 pts)
    if (evaluation.uniformity === "minor_glow") {
      score -= 5;
      deductions.push({ reason: "Minor corner glow / edge vignetting", pts: 5 });
    } else if (evaluation.uniformity === "severe_bleed") {
      score -= 18;
      deductions.push({ reason: "Severe backlight bleed or clouding", pts: 18 });
    }

    // Gradient & Banding (Max 15 pts)
    if (evaluation.gradients === "minor_banding") {
      score -= 4;
      deductions.push({ reason: "Subtle color banding in dark gradients", pts: 4 });
    } else if (evaluation.gradients === "severe_banding") {
      score -= 12;
      deductions.push({ reason: "Noticeable gradient stepping / posterization", pts: 12 });
    }

    // Color Balance (Max 15 pts)
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

  if (!isOpen) return null;

  const testDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const generateReportText = () => {
    return `=== PixelCheck365 Display Inspection Report ===
Date: ${testDate}
Test Mode: ${testMode.toUpperCase()} (${totalColorsTested} color patterns tested)
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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 select-text">
      <div className="bg-neutral-900 border border-neutral-700 text-white rounded-3xl max-w-2xl w-full p-5 sm:p-8 shadow-2xl space-y-6 animate-fade-in my-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-primary/20 text-primary border border-primary/30">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black tracking-tight">
                {t.report.title}
              </h2>
              <p className="text-xs text-neutral-400 font-mono">
                {t.report.badge}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors"
            aria-label="Close Report"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Score & Grade Hero Card */}
        <div className="p-5 rounded-2xl bg-neutral-800/60 border border-neutral-700/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            {/* Score Ring */}
            <div className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-neutral-900 border border-neutral-700 shadow-inner">
              <div className="flex flex-col items-center">
                <span className="text-2xl sm:text-3xl font-black font-mono text-primary leading-none">
                  {scoreData.score}
                </span>
                <span className="text-[10px] text-neutral-400 font-mono uppercase">
                  {t.report.scoreOutOf}
                </span>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span
                  className={`text-xs font-mono font-black uppercase px-2.5 py-0.5 rounded-md border ${scoreData.gradeColor}`}
                >
                  {scoreData.grade}
                </span>
                <span className="text-xs font-semibold text-neutral-200">
                  {scoreData.gradeLabel}
                </span>
              </div>
              <p className="text-xs text-neutral-400 flex items-center justify-center sm:justify-start gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>{scoreData.isoClass}</span>
              </p>
            </div>
          </div>

          <div className="text-xs text-neutral-400 text-center sm:text-right font-mono space-y-0.5">
            <div>{displayInfo.viewportWidth} × {displayInfo.viewportHeight} px</div>
            <div>{displayInfo.devicePixelRatio}x DPR • {displayInfo.colorDepth}-bit</div>
            <div className="text-[10px] text-neutral-500">{testDate}</div>
          </div>
        </div>

        {/* Interactive Observation Evaluator */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-300 font-bold">
              {t.report.findingsTitle}
            </h3>
            <span className="text-[11px] text-neutral-400">
              {t.report.findingsSubtitle}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
            {/* Dead Pixels */}
            <div className="p-3 rounded-xl bg-neutral-800/40 border border-neutral-800 space-y-2">
              <span className="font-semibold text-neutral-200 block">
                {t.report.deadPixelsTitle}
              </span>
              <div className="grid grid-cols-3 gap-1 font-mono text-[11px]">
                <button
                  onClick={() => setEvaluation((e) => ({ ...e, deadPixels: "none" }))}
                  className={`p-1.5 rounded-lg border transition-all ${
                    evaluation.deadPixels === "none"
                      ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40 font-bold"
                      : "bg-neutral-800 text-neutral-400 border-neutral-700"
                  }`}
                >
                  {t.report.none}
                </button>
                <button
                  onClick={() => setEvaluation((e) => ({ ...e, deadPixels: "one" }))}
                  className={`p-1.5 rounded-lg border transition-all ${
                    evaluation.deadPixels === "one"
                      ? "bg-amber-500/20 text-amber-300 border-amber-500/40 font-bold"
                      : "bg-neutral-800 text-neutral-400 border-neutral-700"
                  }`}
                >
                  {t.report.oneDead}
                </button>
                <button
                  onClick={() => setEvaluation((e) => ({ ...e, deadPixels: "multiple" }))}
                  className={`p-1.5 rounded-lg border transition-all ${
                    evaluation.deadPixels === "multiple"
                      ? "bg-rose-500/20 text-rose-300 border-rose-500/40 font-bold"
                      : "bg-neutral-800 text-neutral-400 border-neutral-700"
                  }`}
                >
                  {t.report.multipleDead}
                </button>
              </div>
            </div>

            {/* Stuck Subpixels */}
            <div className="p-3 rounded-xl bg-neutral-800/40 border border-neutral-800 space-y-2">
              <span className="font-semibold text-neutral-200 block">
                {t.report.stuckPixelsTitle}
              </span>
              <div className="grid grid-cols-3 gap-1 font-mono text-[11px]">
                <button
                  onClick={() => setEvaluation((e) => ({ ...e, stuckPixels: "none" }))}
                  className={`p-1.5 rounded-lg border transition-all ${
                    evaluation.stuckPixels === "none"
                      ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40 font-bold"
                      : "bg-neutral-800 text-neutral-400 border-neutral-700"
                  }`}
                >
                  {t.report.none}
                </button>
                <button
                  onClick={() => setEvaluation((e) => ({ ...e, stuckPixels: "one" }))}
                  className={`p-1.5 rounded-lg border transition-all ${
                    evaluation.stuckPixels === "one"
                      ? "bg-amber-500/20 text-amber-300 border-amber-500/40 font-bold"
                      : "bg-neutral-800 text-neutral-400 border-neutral-700"
                  }`}
                >
                  {t.report.oneStuck}
                </button>
                <button
                  onClick={() => setEvaluation((e) => ({ ...e, stuckPixels: "multiple" }))}
                  className={`p-1.5 rounded-lg border transition-all ${
                    evaluation.stuckPixels === "multiple"
                      ? "bg-rose-500/20 text-rose-300 border-rose-500/40 font-bold"
                      : "bg-neutral-800 text-neutral-400 border-neutral-700"
                  }`}
                >
                  {t.report.multipleStuck}
                </button>
              </div>
            </div>

            {/* Screen Uniformity & Bleed */}
            <div className="p-3 rounded-xl bg-neutral-800/40 border border-neutral-800 space-y-2">
              <span className="font-semibold text-neutral-200 block">
                {t.report.uniformityTitle}
              </span>
              <div className="grid grid-cols-3 gap-1 font-mono text-[11px]">
                <button
                  onClick={() => setEvaluation((e) => ({ ...e, uniformity: "perfect" }))}
                  className={`p-1.5 rounded-lg border transition-all ${
                    evaluation.uniformity === "perfect"
                      ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40 font-bold"
                      : "bg-neutral-800 text-neutral-400 border-neutral-700"
                  }`}
                >
                  {t.report.uniform}
                </button>
                <button
                  onClick={() => setEvaluation((e) => ({ ...e, uniformity: "minor_glow" }))}
                  className={`p-1.5 rounded-lg border transition-all ${
                    evaluation.uniformity === "minor_glow"
                      ? "bg-amber-500/20 text-amber-300 border-amber-500/40 font-bold"
                      : "bg-neutral-800 text-neutral-400 border-neutral-700"
                  }`}
                >
                  {t.report.minorGlow}
                </button>
                <button
                  onClick={() => setEvaluation((e) => ({ ...e, uniformity: "severe_bleed" }))}
                  className={`p-1.5 rounded-lg border transition-all ${
                    evaluation.uniformity === "severe_bleed"
                      ? "bg-rose-500/20 text-rose-300 border-rose-500/40 font-bold"
                      : "bg-neutral-800 text-neutral-400 border-neutral-700"
                  }`}
                >
                  {t.report.bleed}
                </button>
              </div>
            </div>

            {/* Gradient & Banding */}
            <div className="p-3 rounded-xl bg-neutral-800/40 border border-neutral-800 space-y-2">
              <span className="font-semibold text-neutral-200 block">
                {t.report.gradientsTitle}
              </span>
              <div className="grid grid-cols-3 gap-1 font-mono text-[11px]">
                <button
                  onClick={() => setEvaluation((e) => ({ ...e, gradients: "smooth" }))}
                  className={`p-1.5 rounded-lg border transition-all ${
                    evaluation.gradients === "smooth"
                      ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40 font-bold"
                      : "bg-neutral-800 text-neutral-400 border-neutral-700"
                  }`}
                >
                  {t.report.smooth}
                </button>
                <button
                  onClick={() => setEvaluation((e) => ({ ...e, gradients: "minor_banding" }))}
                  className={`p-1.5 rounded-lg border transition-all ${
                    evaluation.gradients === "minor_banding"
                      ? "bg-amber-500/20 text-amber-300 border-amber-500/40 font-bold"
                      : "bg-neutral-800 text-neutral-400 border-neutral-700"
                  }`}
                >
                  {t.report.minorBanding}
                </button>
                <button
                  onClick={() => setEvaluation((e) => ({ ...e, gradients: "severe_banding" }))}
                  className={`p-1.5 rounded-lg border transition-all ${
                    evaluation.gradients === "severe_banding"
                      ? "bg-rose-500/20 text-rose-300 border-rose-500/40 font-bold"
                      : "bg-neutral-800 text-neutral-400 border-neutral-700"
                  }`}
                >
                  {t.report.severeBanding}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons: Copy, Retest */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
          <button
            onClick={copyReport}
            className="p-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold flex items-center justify-center gap-1.5 border border-neutral-700 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">{t.report.copied}</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-neutral-400" />
                <span>{t.report.copyReport}</span>
              </>
            )}
          </button>

          <button
            onClick={() => {
              onClose();
              onRetest();
            }}
            className="p-3 rounded-xl bg-primary text-primary-foreground text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm hover:opacity-95 transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{t.report.restartDiagnostic}</span>
          </button>
        </div>

        {/* Responsible Disclaimer */}
        <p className="text-[10px] text-neutral-500 text-center leading-relaxed">
          PixelCheck365 visual evaluation certificate. Based on user observations and client-side browser display metrics. Not a legal laboratory hardware certification.
        </p>
      </div>
    </div>
  );
};
