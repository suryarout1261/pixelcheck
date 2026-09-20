"use client";

import React from "react";
import {
  Sparkles,
  Layers,
  Tv,
  Eye,
  Check,
  Zap,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export const SupportedDisplays: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-primary font-bold mb-2">
            {t.supportedDisplays.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
            {t.supportedDisplays.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">
            {t.supportedDisplays.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.supportedDisplays.panels.map((p) => (
            <div
              key={p.title}
              className="p-6 rounded-2xl bg-card border border-border/80 shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-primary font-bold">
                  {p.tech}
                </span>
                <h3 className="text-lg font-bold text-foreground mt-1 mb-2">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/40 space-y-1.5">
                <span className="text-[10px] font-mono uppercase text-muted-foreground block font-semibold">
                  {t.supportedDisplays.recommended}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {p.idealTests.map((testName) => (
                    <span
                      key={testName}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-muted text-foreground/80 font-medium"
                    >
                      {testName}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
