"use client";

import React from "react";
import Link from "next/link";
import { Smartphone, Laptop, Monitor, Tv, ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export const DeviceSelector: React.FC = () => {
  const { t } = useLanguage();

  const devices = [
    {
      id: "iphone",
      title: t.deviceSelector.devices.iphone.title,
      tag: t.deviceSelector.devices.iphone.tag,
      desc: t.deviceSelector.devices.iphone.desc,
      icon: Smartphone,
      color: "text-rose-500 bg-rose-500/10 border-rose-500/20",
      testUrl: "/test?device=iphone&mode=dead-pixel",
      pageUrl: "/iphone-screen-test",
    },
    {
      id: "android",
      title: t.deviceSelector.devices.android.title,
      tag: t.deviceSelector.devices.android.tag,
      desc: t.deviceSelector.devices.android.desc,
      icon: Smartphone,
      color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
      testUrl: "/test?device=android&mode=dead-pixel",
      pageUrl: "/android-screen-test",
    },
    {
      id: "mac",
      title: t.deviceSelector.devices.mac.title,
      tag: t.deviceSelector.devices.mac.tag,
      desc: t.deviceSelector.devices.mac.desc,
      icon: Laptop,
      color: "text-purple-500 bg-purple-500/10 border-purple-500/20",
      testUrl: "/test?device=mac&mode=dead-pixel",
      pageUrl: "/mac-screen-test",
    },
    {
      id: "windows",
      title: t.deviceSelector.devices.windows.title,
      tag: t.deviceSelector.devices.windows.tag,
      desc: t.deviceSelector.devices.windows.desc,
      icon: Monitor,
      color: "text-blue-500 bg-blue-500/10 border-blue-500/20",
      testUrl: "/test?device=windows&mode=dead-pixel",
      pageUrl: "/windows-screen-test",
    },
  ];

  return (
    <section className="py-16 bg-muted/20 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            {t.deviceSelector.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">
            {t.deviceSelector.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {devices.map((d) => {
            const IconComponent = d.icon;
            return (
              <div
                key={d.id}
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-card border border-border/80 hover:border-primary/40 hover:shadow-lg transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl border ${d.color}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                      {d.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {d.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between text-xs">
                  <Link
                    href={d.pageUrl}
                    className="font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t.deviceSelector.viewGuide}
                  </Link>

                  <Link
                    href={d.testUrl}
                    className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
                  >
                    <span>{t.deviceSelector.testNow}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Other / Smart TV callout */}
        <div className="mt-8 p-4 rounded-xl bg-card border border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3 text-muted-foreground">
            <div className="p-2 rounded-lg bg-muted text-foreground shrink-0">
              <Tv className="w-4 h-4" />
            </div>
            <div>
              <span className="font-semibold text-foreground">{t.deviceSelector.tvCallout.title}</span>
              <p className="text-muted-foreground">{t.deviceSelector.tvCallout.desc}</p>
            </div>
          </div>
          <Link
            href="/test?mode=fullscreen"
            className="px-4 py-2 rounded-lg bg-secondary hover:bg-muted font-semibold text-foreground shrink-0 transition-colors"
          >
            {t.deviceSelector.tvCallout.button}
          </Link>
        </div>
      </div>
    </section>
  );
};
