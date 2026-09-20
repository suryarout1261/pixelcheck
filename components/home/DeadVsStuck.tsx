"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, HelpCircle, AlertTriangle, CheckCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export const DeadVsStuck: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"dead" | "stuck" | "dust">("dead");

  return (
    <section className="py-16 md:py-20 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-primary font-bold mb-2">
            {t.deadVsStuck.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
            {t.deadVsStuck.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">
            {t.deadVsStuck.subtitle}
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-xl bg-muted border border-border text-xs sm:text-sm font-medium">
            <button
              onClick={() => setActiveTab("dead")}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTab === "dead"
                  ? "bg-background text-foreground shadow-sm font-bold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.deadVsStuck.tabDead}
            </button>
            <button
              onClick={() => setActiveTab("stuck")}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTab === "stuck"
                  ? "bg-background text-foreground shadow-sm font-bold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.deadVsStuck.tabStuck}
            </button>
            <button
              onClick={() => setActiveTab("dust")}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTab === "dust"
                  ? "bg-background text-foreground shadow-sm font-bold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.deadVsStuck.tabDust}
            </button>
          </div>
        </div>

        {/* Comparison Showcase Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-card border border-border/80 shadow-md p-6 sm:p-10">
          {activeTab === "dead" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center animate-fade-in">
              {/* Visual Simulation */}
              <div className="relative aspect-video rounded-2xl bg-white border border-neutral-300 p-4 flex flex-col items-center justify-center shadow-inner overflow-hidden">
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-white">
                  {t.deadVsStuck.dead.simLabel}
                </div>
                {/* Simulated dead pixel */}
                <div className="relative flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border border-dashed border-red-500/70 flex items-center justify-center animate-pulse">
                    <div className="w-3.5 h-3.5 bg-black rounded-sm shadow-md" />
                  </div>
                  <span className="absolute -bottom-6 text-[11px] font-mono text-red-600 font-bold bg-white/90 px-1 rounded">
                    {t.deadVsStuck.dead.dotLabel}
                  </span>
                </div>
              </div>

              {/* Information */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-rose-500 bg-rose-500/10 px-2.5 py-1 rounded-full">
                  <span>{t.deadVsStuck.dead.tag}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  {t.deadVsStuck.dead.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t.deadVsStuck.dead.desc}
                </p>
                <div className="text-xs text-foreground/80 space-y-1.5 border-t border-border pt-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    <span><strong>{t.deadVsStuck.dead.visibility}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    <span><strong>{t.deadVsStuck.dead.fixability}</strong></span>
                  </div>
                </div>
                <div className="pt-2">
                  <Link
                    href="/test?mode=dead-pixel"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                  >
                    <span>{t.deadVsStuck.dead.action}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {activeTab === "stuck" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center animate-fade-in">
              {/* Visual Simulation */}
              <div className="relative aspect-video rounded-2xl bg-black border border-neutral-800 p-4 flex flex-col items-center justify-center shadow-inner overflow-hidden">
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-white/20 text-[10px] font-mono text-white">
                  {t.deadVsStuck.stuck.simLabel}
                </div>
                {/* Simulated stuck pixel */}
                <div className="relative flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border border-dashed border-emerald-400/80 flex items-center justify-center animate-pulse">
                    <div className="w-3.5 h-3.5 bg-emerald-400 rounded-sm shadow-[0_0_12px_#34d399]" />
                  </div>
                  <span className="absolute -bottom-6 text-[11px] font-mono text-emerald-400 font-bold bg-black/90 px-1 rounded">
                    {t.deadVsStuck.stuck.dotLabel}
                  </span>
                </div>
              </div>

              {/* Information */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-full">
                  <span>{t.deadVsStuck.stuck.tag}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  {t.deadVsStuck.stuck.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t.deadVsStuck.stuck.desc}
                </p>
                <div className="text-xs text-foreground/80 space-y-1.5 border-t border-border pt-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span><strong>{t.deadVsStuck.stuck.visibility}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span><strong>{t.deadVsStuck.stuck.fixability}</strong></span>
                  </div>
                </div>
                <div className="pt-2">
                  <Link
                    href="/test?mode=stuck-pixel"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                  >
                    <span>{t.deadVsStuck.stuck.action}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {activeTab === "dust" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center animate-fade-in">
              {/* Visual Simulation */}
              <div className="relative aspect-video rounded-2xl bg-neutral-100 dark:bg-neutral-800 border border-border p-4 flex flex-col items-center justify-center shadow-inner overflow-hidden">
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/60 text-[10px] font-mono text-white">
                  {t.deadVsStuck.dust.simLabel}
                </div>
                {/* Simulated dust speck */}
                <div className="relative flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border border-dashed border-amber-500 flex items-center justify-center">
                    <div className="w-2.5 h-3 bg-neutral-600 rounded-full rotate-12 opacity-80" />
                  </div>
                  <span className="absolute -bottom-6 text-[11px] font-mono text-amber-500 font-bold bg-background/90 px-1 rounded">
                    {t.deadVsStuck.dust.dotLabel}
                  </span>
                </div>
              </div>

              {/* Information */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded-full">
                  <span>{t.deadVsStuck.dust.tag}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  {t.deadVsStuck.dust.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t.deadVsStuck.dust.desc}
                </p>
                <div className="text-xs text-foreground/80 space-y-1.5 border-t border-border pt-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span><strong>{t.deadVsStuck.dust.shape}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span><strong>{t.deadVsStuck.dust.test}</strong></span>
                  </div>
                </div>
                <div className="pt-2">
                  <Link
                    href="/how-it-works"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                  >
                    <span>{t.deadVsStuck.dust.action}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
