"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Grid, ShieldCheck, Zap, Monitor, Smartphone, Laptop, CheckCircle2 } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export const Footer: React.FC = () => {
  const pathname = usePathname();
  const { t } = useLanguage();

  if (pathname === "/test") {
    return null;
  }

  return (
    <footer className="w-full bg-background border-t border-border/80 text-foreground transition-colors mt-16">
      {/* Top Value Strip */}
      <div className="border-b border-border/40 bg-muted/20 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{t.footer.value1Title}</p>
                <p>{t.footer.value1Desc}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{t.footer.value2Title}</p>
                <p>{t.footer.value2Desc}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500 shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{t.footer.value3Title}</p>
                <p>{t.footer.value3Desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <Logo variant="full" size="md" href="/" />
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              {t.footer.brandDesc}
            </p>
            <div className="pt-2 text-xs text-muted-foreground/80 space-y-1">
              <p>{t.footer.domain} <span className="font-mono text-foreground">pixelcheck365.com</span></p>
              <p>{t.footer.standard}</p>
            </div>
          </div>

          {/* Diagnostic Tools */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-foreground font-semibold mb-3">
              {t.footer.diagnosticTools}
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/dead-pixel-test" className="hover:text-foreground transition-colors">
                  {t.nav.deadPixelTest}
                </Link>
              </li>
              <li>
                <Link href="/stuck-pixel-test" className="hover:text-foreground transition-colors">
                  {t.nav.stuckPixelTest}
                </Link>
              </li>
              <li>
                <Link href="/screen-color-test" className="hover:text-foreground transition-colors">
                  {t.testTypes.tests.color.title}
                </Link>
              </li>
              <li>
                <Link href="/screen-uniformity-test" className="hover:text-foreground transition-colors">
                  {t.nav.screenUniformity}
                </Link>
              </li>
              <li>
                <Link href="/gradient-test" className="hover:text-foreground transition-colors">
                  {t.nav.gradientTest}
                </Link>
              </li>
              <li>
                <Link href="/display-test" className="hover:text-foreground transition-colors">
                  {t.testTypes.tests.fullscreen.title}
                </Link>
              </li>
              <li>
                <Link href="/report" className="text-emerald-500 hover:text-emerald-400 font-medium transition-colors">
                  {t.nav.displayScore}
                </Link>
              </li>
            </ul>
          </div>

          {/* Device Tests */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-foreground font-semibold mb-3">
              {t.footer.deviceTesting}
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/iphone-screen-test" className="hover:text-foreground transition-colors">
                  iPhone Screen Test
                </Link>
              </li>
              <li>
                <Link href="/iphone-dead-pixel-test" className="hover:text-foreground transition-colors">
                  iPhone Dead Pixel Test
                </Link>
              </li>
              <li>
                <Link href="/android-screen-test" className="hover:text-foreground transition-colors">
                  Android Screen Test
                </Link>
              </li>
              <li>
                <Link href="/android-dead-pixel-test" className="hover:text-foreground transition-colors">
                  Android Dead Pixel Test
                </Link>
              </li>
              <li>
                <Link href="/macbook-screen-test" className="hover:text-foreground transition-colors">
                  MacBook Screen Test
                </Link>
              </li>
              <li>
                <Link href="/macbook-dead-pixel-test" className="hover:text-foreground transition-colors">
                  MacBook Dead Pixel Test
                </Link>
              </li>
              <li>
                <Link href="/windows-screen-test" className="hover:text-foreground transition-colors">
                  Windows Screen Test
                </Link>
              </li>
              <li>
                <Link href="/laptop-screen-test" className="hover:text-foreground transition-colors">
                  Laptop Screen Test
                </Link>
              </li>
            </ul>
          </div>

          {/* Information & Legal */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-foreground font-semibold mb-3">
              {t.footer.information}
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  {t.footer.aboutUs}
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-foreground transition-colors">
                  {t.footer.howItWorks}
                </Link>
              </li>
              <li>
                <Link href="/how-to-test-for-dead-pixels" className="hover:text-foreground transition-colors">
                  How to Test for Dead Pixels
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  {t.footer.contactUs}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-foreground transition-colors">
                  {t.footer.terms}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-foreground transition-colors">
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-foreground transition-colors">
                  {t.footer.disclaimer}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="mt-10 pt-6 border-t border-border/40 text-xs text-muted-foreground/80 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            © {new Date().getFullYear()} PixelCheck365. {t.footer.allRightsReserved}
          </p>
          <div className="flex items-center gap-4">
            <Link href="/disclaimer" className="hover:underline">
              {t.footer.disclaimer}
            </Link>
            <span>•</span>
            <Link href="/privacy" className="hover:underline">
              {t.footer.privacy}
            </Link>
            <span>•</span>
            <Link href="/how-it-works" className="hover:underline">
              {t.footer.guide}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
