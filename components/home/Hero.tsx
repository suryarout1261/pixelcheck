"use client";

import React from "react";
import Link from "next/link";
import {
  Play,
  HelpCircle,
  ShieldCheck,
  Zap,
  Sparkles,
  Maximize2,
  CheckCircle2,
  FileText,
  Mail,
  Info,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const quickColors = [
    { name: t.hero.colors.white, hex: "#FFFFFF", border: true },
    { name: t.hero.colors.red, hex: "#FF0000" },
    { name: t.hero.colors.green, hex: "#00FF00" },
    { name: t.hero.colors.blue, hex: "#0000FF" },
    { name: t.hero.colors.black, hex: "#000000", border: true },
    { name: t.hero.colors.yellow, hex: "#FFFF00" },
    { name: t.hero.colors.cyan, hex: "#00FFFF" },
    { name: t.hero.colors.magenta, hex: "#FF00FF" },
  ];

  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 border-b border-border/40">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/10 blur-[130px] -z-10 rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Quick Navigation Buttons: Privacy, Terms, Contact, About */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6 animate-fade-in">
          <Link
            href="/privacy"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-card hover:bg-muted text-foreground text-xs font-semibold border border-border/80 shadow-sm hover:border-primary/40 transition-all hover:scale-105"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>{t.hero.privacyPill}</span>
          </Link>

          <Link
            href="/terms"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-card hover:bg-muted text-foreground text-xs font-semibold border border-border/80 shadow-sm hover:border-primary/40 transition-all hover:scale-105"
          >
            <FileText className="w-3.5 h-3.5 text-blue-500" />
            <span>{t.hero.termsPill}</span>
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-card hover:bg-muted text-foreground text-xs font-semibold border border-border/80 shadow-sm hover:border-primary/40 transition-all hover:scale-105"
          >
            <Mail className="w-3.5 h-3.5 text-purple-500" />
            <span>{t.hero.contactPill}</span>
          </Link>

          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-card hover:bg-muted text-foreground text-xs font-semibold border border-border/80 shadow-sm hover:border-primary/40 transition-all hover:scale-105"
          >
            <Info className="w-3.5 h-3.5 text-amber-500" />
            <span>{t.hero.aboutPill}</span>
          </Link>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-foreground text-balance">
          {t.hero.titleStart} <span className="text-primary">{t.hero.titleHighlight}</span>
        </h1>

        {/* Hero Subtitle */}
        <p className="mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-foreground/80 tracking-tight">
          {t.hero.subtitle}
        </p>

        {/* Supporting Text */}
        <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {t.hero.description}
        </p>

        {/* Call to Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/test"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-base shadow-lg shadow-primary/25 hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Play className="w-5 h-5 fill-current" />
            <span>{t.hero.startTestCta}</span>
          </Link>

          <Link
            href="#how-it-works"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-secondary hover:bg-muted text-foreground font-semibold text-sm border border-border/60 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <HelpCircle className="w-4 h-4 text-muted-foreground" />
            <span>{t.hero.howItWorksCta}</span>
          </Link>
        </div>

        {/* Quick Color Swatches Bar */}
        <div className="mt-12 p-4 rounded-2xl bg-card border border-border/80 shadow-sm max-w-xl mx-auto">
          <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3 flex items-center justify-between">
            <span>{t.hero.swatchesTitle}</span>
            <span className="text-[11px] text-primary font-sans font-medium">{t.hero.swatchesHint}</span>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
            {quickColors.map((c) => (
              <Link
                key={c.name}
                href={`/test?mode=color`}
                className="group relative flex flex-col items-center gap-1.5 p-2 rounded-xl bg-muted/40 hover:bg-muted transition-all hover:scale-105"
                title={`Launch test with ${c.name}`}
              >
                <span
                  className={`w-7 h-7 rounded-lg shadow-sm transition-transform group-hover:scale-110 ${
                    c.border ? "border border-border" : ""
                  }`}
                  style={{ backgroundColor: c.hex }}
                />
                <span className="text-[10px] font-medium text-muted-foreground group-hover:text-foreground">
                  {c.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-3xl mx-auto">
          <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>{t.hero.features.pureColors}</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>{t.hero.features.fullscreenApi}</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>{t.hero.features.autoCycle}</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>{t.hero.features.magnifierGrid}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
