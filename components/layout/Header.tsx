"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "../theme/ThemeProvider";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { LanguageSelector } from "./LanguageSelector";
import {
  Monitor,
  Smartphone,
  Layers,
  Sun,
  Moon,
  Laptop,
  Menu,
  X,
  Play,
  HelpCircle,
  ShieldCheck,
  Grid,
} from "lucide-react";
import { Logo } from "@/components/brand/Logo";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const { theme, resolvedTheme, setTheme } = useTheme();
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Hide standard header if we are directly in /test
  const isTestingPage = pathname === "/test";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  if (isTestingPage) {
    return null;
  }

  const cycleTheme = () => {
    if (theme === "system") setTheme("dark");
    else if (theme === "dark") setTheme("light");
    else setTheme("system");
  };

  const navLinks = [
    { name: t.nav.deadPixelTest, href: "/dead-pixel-test" },
    { name: t.nav.stuckPixelTest, href: "/stuck-pixel-test" },
    { name: t.nav.screenUniformity, href: "/screen-uniformity-test" },
    { name: t.nav.gradientTest, href: "/gradient-test" },
    { name: t.nav.displayScore, href: "/report" },
    { name: t.nav.howItWorks, href: "/how-it-works" },
  ];

  // Dynamically calculate optimal font size, padding, and gap for nav plates based on language text lengths
  const totalNavChars = navLinks.reduce((sum, link) => sum + link.name.length, 0);
  const maxLabelLen = Math.max(...navLinks.map((link) => link.name.length));

  let navItemClass = "text-xs xl:text-sm px-2.5 py-1.5 xl:px-3";
  let navGapClass = "gap-1 xl:gap-1.5";
  let ctaClass = "text-xs sm:text-sm px-3.5 sm:px-4 py-2";

  if (totalNavChars >= 65 || maxLabelLen >= 14) {
    // Languages with longer text (e.g., German, Spanish, Portuguese)
    navItemClass = "text-[11px] lg:text-[11.5px] xl:text-xs 2xl:text-[13px] px-1.5 py-1 lg:px-2 lg:py-1.5 xl:px-2.5 tracking-tight";
    navGapClass = "gap-0.5 lg:gap-1 xl:gap-1.5";
    ctaClass = "text-xs xl:text-sm px-2.5 py-1.5 xl:px-3.5 xl:py-2";
  } else if (totalNavChars >= 48 || maxLabelLen >= 10) {
    // Moderate length languages (e.g., French, Italian)
    navItemClass = "text-xs lg:text-[12px] xl:text-[13px] px-2 py-1 lg:px-2.5 lg:py-1.5 xl:px-3 tracking-tight";
    navGapClass = "gap-1 lg:gap-1 xl:gap-1.5";
    ctaClass = "text-xs sm:text-sm px-3 py-1.5 xl:px-3.5 xl:py-2";
  }

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background/60 backdrop-blur-sm border-b border-border/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-2 sm:gap-4">
          {/* Logo */}
          <div className="shrink-0">
            <Logo variant="full" size="md" href="/" />
          </div>

          {/* Desktop Dynamic Navigation Button Plates */}
          <nav className={`hidden md:flex items-center ${navGapClass} max-w-full overflow-hidden transition-all duration-300`}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${navItemClass} ${
                    isActive
                      ? "text-primary bg-primary/10 shadow-xs border border-primary/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/70 active:scale-95"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Language Dropdown Selector */}
            <LanguageSelector variant="header" />

            {/* Theme Toggle Button */}
            <button
              onClick={cycleTheme}
              aria-label={`Current theme: ${theme}. Click to switch theme.`}
              title={`Theme: ${theme} (Click to toggle)`}
              className="p-1.5 sm:p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary border border-border/60"
            >
              {resolvedTheme === "dark" ? (
                <Moon className="w-4 h-4 text-sky-400" />
              ) : (
                <Sun className="w-4 h-4 text-amber-500" />
              )}
            </button>

            {/* Start Test CTA with Dynamic Font Size */}
            <Link
              href="/test"
              className={`hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-primary text-primary-foreground font-bold shadow-sm hover:opacity-95 transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 whitespace-nowrap shrink-0 ${ctaClass}`}
            >
              <Play className="w-3.5 h-3.5 fill-current shrink-0" />
              <span>{t.nav.startTest}</span>
            </Link>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary border border-border/60"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-background/95 backdrop-blur-lg px-4 pt-2 pb-6 space-y-3 animate-fade-in">
          <div className="grid grid-cols-1 gap-1">
            <Link
              href="/test"
              className="flex items-center justify-between p-3 rounded-xl bg-primary/10 text-primary font-semibold text-sm"
            >
              <div className="flex items-center gap-2">
                <Play className="w-4 h-4 fill-current" />
                <span>{t.nav.launchTester}</span>
              </div>
              <span className="text-xs font-mono uppercase bg-primary text-primary-foreground px-2 py-0.5 rounded">
                {t.nav.instant}
              </span>
            </Link>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2.5 p-2.5 rounded-lg text-sm text-foreground hover:bg-muted/60 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                <span>{link.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Language Selector */}
          <div className="pt-2 border-t border-border/60">
            <LanguageSelector variant="mobile" />
          </div>

          {/* Device Diagnostics */}
          <div className="pt-2 border-t border-border/60">
            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2 px-2">
              {t.nav.deviceDiagnostics}
            </div>
            <div className="grid grid-cols-2 gap-1.5 text-xs">
              <Link
                href="/iphone-screen-test"
                className="flex items-center gap-1.5 p-2 rounded-md bg-muted/40 hover:bg-muted text-foreground"
              >
                <Smartphone className="w-3.5 h-3.5 text-primary" />
                <span>{t.nav.iphone}</span>
              </Link>
              <Link
                href="/android-screen-test"
                className="flex items-center gap-1.5 p-2 rounded-md bg-muted/40 hover:bg-muted text-foreground"
              >
                <Smartphone className="w-3.5 h-3.5 text-emerald-500" />
                <span>{t.nav.android}</span>
              </Link>
              <Link
                href="/mac-screen-test"
                className="flex items-center gap-1.5 p-2 rounded-md bg-muted/40 hover:bg-muted text-foreground"
              >
                <Laptop className="w-3.5 h-3.5 text-purple-500" />
                <span>{t.nav.mac}</span>
              </Link>
              <Link
                href="/windows-screen-test"
                className="flex items-center gap-1.5 p-2 rounded-md bg-muted/40 hover:bg-muted text-foreground"
              >
                <Monitor className="w-3.5 h-3.5 text-blue-500" />
                <span>{t.nav.windows}</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
