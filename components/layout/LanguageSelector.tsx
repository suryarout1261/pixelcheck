"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Language } from "@/lib/i18n/types";
import { ChevronDown, Check, Globe } from "lucide-react";

interface LanguageSelectorProps {
  variant?: "header" | "mobile";
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  variant = "header",
}) => {
  const { language, setLanguage, languages, currentLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  if (variant === "mobile") {
    return (
      <div className="pt-2">
        <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2 px-2 flex items-center gap-1.5">
          <Globe className="w-3.5 h-3.5" />
          <span>Language / Idioma / 语言</span>
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          {languages.map((l) => {
            const isSelected = l.code === language;
            return (
              <button
                key={l.code}
                onClick={() => handleSelect(l.code)}
                className={`flex items-center justify-between p-2 rounded-lg text-xs transition-colors text-left ${
                  isSelected
                    ? "bg-primary text-primary-foreground font-bold shadow-sm"
                    : "bg-muted/40 hover:bg-muted text-foreground"
                }`}
              >
                <div className="flex items-center gap-2 truncate">
                  <span className="text-base leading-none">{l.flag}</span>
                  <span className="truncate">{l.nativeName}</span>
                </div>
                {isSelected && <Check className="w-3.5 h-3.5 shrink-0 ml-1" />}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="relative inline-block text-left" ref={containerRef}>
      {/* Dropdown Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label={`Select language. Current language: ${currentLanguage.nativeName}`}
        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-muted-foreground hover:text-foreground bg-muted/40 hover:bg-muted/80 border border-border/60 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-sm"
      >
        <span className="text-sm leading-none">{currentLanguage.flag}</span>
        <span className="hidden sm:inline font-medium">{currentLanguage.nativeName}</span>
        <span className="sm:hidden font-mono uppercase">{currentLanguage.shortLabel}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-muted-foreground transition-transform duration-200 ${
            isOpen ? "rotate-180 text-primary" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          role="menu"
          aria-orientation="vertical"
          className="absolute right-0 mt-2 w-52 origin-top-right rounded-2xl bg-card/95 backdrop-blur-md border border-border shadow-xl ring-1 ring-black/5 z-50 p-1.5 focus:outline-none animate-scale-in"
        >
          <div className="px-2.5 py-1.5 text-[11px] font-mono uppercase tracking-wider text-muted-foreground/80 border-b border-border/50 mb-1 flex items-center justify-between">
            <span>Select Language</span>
            <span className="text-[10px] bg-muted px-1.5 py-0.5 rounded font-bold text-foreground">
              8 Languages
            </span>
          </div>

          <div className="space-y-0.5 max-h-72 overflow-y-auto">
            {languages.map((l) => {
              const isSelected = l.code === language;
              return (
                <button
                  key={l.code}
                  role="menuitem"
                  onClick={() => handleSelect(l.code)}
                  className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs transition-colors text-left ${
                    isSelected
                      ? "bg-primary/10 text-primary font-bold"
                      : "text-foreground hover:bg-muted/80"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg leading-none">{l.flag}</span>
                    <div className="flex flex-col">
                      <span className="font-medium text-foreground">
                        {l.nativeName}
                      </span>
                      <span className="text-[10px] text-muted-foreground">
                        {l.name}
                      </span>
                    </div>
                  </div>

                  {isSelected && (
                    <Check className="w-4 h-4 text-primary shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
