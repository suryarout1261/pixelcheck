"use client";

import React from "react";
import Link from "next/link";
import { TestMode, DeviceCategory } from "@/lib/types";
import { TEST_SEQUENCES } from "@/lib/test-data";
import { Play, Sparkles, CheckCircle2, Eye, HelpCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface TestLandingProps {
  title: string;
  subtitle: string;
  badge: string;
  testMode: TestMode;
  device?: DeviceCategory;
  overview: string;
  whatToLookFor: string[];
  prepTips: string[];
  faqs: { q: string; a: string }[];
  colorSequenceNames: string[];
}

export const TestLandingTemplate: React.FC<TestLandingProps> = ({
  title,
  subtitle,
  badge,
  testMode,
  device,
  overview,
  whatToLookFor,
  prepTips,
  faqs,
}) => {
  const { t } = useLanguage();
  const sequence = TEST_SEQUENCES[testMode] || TEST_SEQUENCES.fullscreen;
  const launchUrl = device
    ? `/test?mode=${testMode}&device=${device}`
    : `/test?mode=${testMode}`;

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-foreground">
            {t.landingTemplate.home}
          </Link>
          <span>/</span>
          <span className="text-foreground font-medium">{title}</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{badge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground">
            {title}
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            {subtitle}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href={launchUrl}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-base shadow-lg shadow-primary/25 hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Play className="w-5 h-5 fill-current" />
              <span>{t.landingTemplate.launch} {title}</span>
            </Link>

            <Link
              href="#instructions"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-secondary hover:bg-muted text-foreground font-semibold text-sm border border-border/60 transition-all"
            >
              <span>{t.landingTemplate.instructions}</span>
            </Link>
          </div>
        </div>

        {/* Color Sequence Swatches Preview */}
        <div className="mt-12 p-6 rounded-3xl bg-card border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="space-y-0.5">
              <h2 className="text-sm font-bold text-foreground font-mono uppercase tracking-wider">
                {t.landingTemplate.previewTitle}
              </h2>
              <p className="text-xs text-muted-foreground">
                {t.landingTemplate.previewSubtitle}
              </p>
            </div>
            <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-muted text-foreground font-semibold">
              {sequence.colors.length} {t.landingTemplate.stepsCount}
            </span>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-8 gap-2.5">
            {sequence.colors.map((c, idx) => (
              <div
                key={c.id + idx}
                className="flex flex-col items-center p-2 rounded-xl bg-muted/40 border border-border/40 text-center"
              >
                <div
                  className="w-10 h-10 rounded-lg shadow-inner mb-1.5 border border-border/60"
                  style={{
                    backgroundColor: c.type === "solid" ? c.hex : "#000000",
                    backgroundImage: c.type === "gradient" ? c.gradientCss : undefined,
                  }}
                />
                <span className="text-[11px] font-medium text-foreground truncate w-full">
                  {c.name}
                </span>
                <span className="text-[9px] font-mono text-muted-foreground">
                  {t.tester.step} {idx + 1}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Content Overview */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8" id="instructions">
          {/* Left Column: What to Look For */}
          <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border space-y-4">
            <div className="flex items-center gap-2 text-primary font-bold text-base">
              <Eye className="w-5 h-5" />
              <h3>{t.landingTemplate.whatToLookFor}</h3>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {overview}
            </p>
            <ul className="space-y-2.5 pt-2">
              {whatToLookFor.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Display Prep */}
          <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border space-y-4">
            <div className="flex items-center gap-2 text-primary font-bold text-base">
              <Sparkles className="w-5 h-5" />
              <h3>{t.landingTemplate.prepTipsTitle}</h3>
            </div>
            <ul className="space-y-3 pt-2">
              {prepTips.map((tip, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-muted-foreground">
                  <span className="w-5 h-5 rounded-full bg-muted text-foreground flex items-center justify-center text-[10px] font-mono font-bold shrink-0">
                    {i + 1}
                  </span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* FAQs Section */}
        {faqs.length > 0 && (
          <div className="mt-16 space-y-6">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-black tracking-tight text-foreground">
                {t.landingTemplate.faqTitle}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {faqs.map((f, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-card border border-border space-y-2">
                  <h3 className="font-bold text-sm text-foreground flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-primary shrink-0" />
                    <span>{f.q}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-6">
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Launcher Bar */}
        <div className="mt-16 p-8 rounded-3xl bg-primary/10 border border-primary/20 text-center space-y-4">
          <h2 className="text-2xl font-black text-foreground">
            {t.finalCta.title}
          </h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            {t.finalCta.subtitle}
          </p>
          <Link
            href={launchUrl}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:opacity-95 shadow-md shadow-primary/20 transition-all hover:scale-105"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>{t.finalCta.startButton}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
