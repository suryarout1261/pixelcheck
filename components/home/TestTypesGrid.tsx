"use client";

import React from "react";
import Link from "next/link";
import {
  Square,
  Sparkles,
  Palette,
  Maximize2,
  Sliders,
  Layers,
  ArrowRight,
  Play,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export const TestTypesGrid: React.FC = () => {
  const { t } = useLanguage();

  const tests = [
    {
      mode: "dead-pixel",
      title: t.testTypes.tests.deadPixel.title,
      description: t.testTypes.tests.deadPixel.desc,
      icon: Square,
      badge: t.testTypes.tests.deadPixel.badge,
      colorClass: "text-rose-500 bg-rose-500/10",
      testUrl: "/test?mode=dead-pixel",
      pageUrl: "/dead-pixel-test",
    },
    {
      mode: "stuck-pixel",
      title: t.testTypes.tests.stuckPixel.title,
      description: t.testTypes.tests.stuckPixel.desc,
      icon: Sparkles,
      badge: t.testTypes.tests.stuckPixel.badge,
      colorClass: "text-amber-500 bg-amber-500/10",
      testUrl: "/test?mode=stuck-pixel",
      pageUrl: "/stuck-pixel-test",
    },
    {
      mode: "color",
      title: t.testTypes.tests.color.title,
      description: t.testTypes.tests.color.desc,
      icon: Palette,
      badge: t.testTypes.tests.color.badge,
      colorClass: "text-emerald-500 bg-emerald-500/10",
      testUrl: "/test?mode=color",
      pageUrl: "/screen-color-test",
    },
    {
      mode: "uniformity",
      title: t.testTypes.tests.uniformity.title,
      description: t.testTypes.tests.uniformity.desc,
      icon: Sliders,
      badge: t.testTypes.tests.uniformity.badge,
      colorClass: "text-blue-500 bg-blue-500/10",
      testUrl: "/test?mode=uniformity",
      pageUrl: "/screen-uniformity-test",
    },
    {
      mode: "gradient",
      title: t.testTypes.tests.gradient.title,
      description: t.testTypes.tests.gradient.desc,
      icon: Layers,
      badge: t.testTypes.tests.gradient.badge,
      colorClass: "text-purple-500 bg-purple-500/10",
      testUrl: "/test?mode=gradient",
      pageUrl: "/gradient-test",
    },
    {
      mode: "fullscreen",
      title: t.testTypes.tests.fullscreen.title,
      description: t.testTypes.tests.fullscreen.desc,
      icon: Maximize2,
      badge: t.testTypes.tests.fullscreen.badge,
      colorClass: "text-sky-500 bg-sky-500/10",
      testUrl: "/test?mode=fullscreen",
      pageUrl: "/display-test",
    },
  ];

  return (
    <section className="py-16 md:py-20 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-primary font-bold mb-2">
            {t.testTypes.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
            {t.testTypes.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">
            {t.testTypes.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tests.map((tItem) => {
            const IconComponent = tItem.icon;
            return (
              <div
                key={tItem.mode}
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-card border border-border/80 hover:border-primary/50 hover:shadow-lg transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl ${tItem.colorClass}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-muted text-foreground/80">
                      {tItem.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {tItem.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {tItem.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between gap-3">
                  <Link
                    href={tItem.pageUrl}
                    className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t.testTypes.learnMore}
                  </Link>

                  <Link
                    href={tItem.testUrl}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold text-xs hover:opacity-95 shadow-sm transition-transform active:scale-95"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>{t.testTypes.startTest}</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
