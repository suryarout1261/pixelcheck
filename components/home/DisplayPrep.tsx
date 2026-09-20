"use client";

import React from "react";
import {
  Sparkles,
  Sun,
  EyeOff,
  Maximize,
  Eye,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export const DisplayPrep: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    {
      step: "01",
      title: t.displayPrep.steps.step1.title,
      desc: t.displayPrep.steps.step1.desc,
      icon: Sparkles,
    },
    {
      step: "02",
      title: t.displayPrep.steps.step2.title,
      desc: t.displayPrep.steps.step2.desc,
      icon: Sun,
    },
    {
      step: "03",
      title: t.displayPrep.steps.step3.title,
      desc: t.displayPrep.steps.step3.desc,
      icon: EyeOff,
    },
    {
      step: "04",
      title: t.displayPrep.steps.step4.title,
      desc: t.displayPrep.steps.step4.desc,
      icon: Eye,
    },
    {
      step: "05",
      title: t.displayPrep.steps.step5.title,
      desc: t.displayPrep.steps.step5.desc,
      icon: Maximize,
    },
    {
      step: "06",
      title: t.displayPrep.steps.step6.title,
      desc: t.displayPrep.steps.step6.desc,
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-20 bg-muted/20 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-primary font-bold mb-2">
            {t.displayPrep.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
            {t.displayPrep.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">
            {t.displayPrep.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s) => {
            const IconComponent = s.icon;
            return (
              <div
                key={s.step}
                className="p-6 rounded-2xl bg-card border border-border/80 shadow-sm relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-black font-mono text-muted-foreground/30">
                    {s.step}
                  </span>
                </div>

                <h3 className="text-base font-bold text-foreground mb-2">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Pro Tip Box */}
        <div className="mt-8 p-4 rounded-xl bg-primary/5 border border-primary/20 flex items-start gap-3 max-w-2xl mx-auto text-xs sm:text-sm text-foreground/90">
          <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <p>
            <strong>{t.displayPrep.proTip.label}</strong> {t.displayPrep.proTip.text}
          </p>
        </div>
      </div>
    </section>
  );
};
