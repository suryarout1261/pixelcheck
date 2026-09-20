"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { Language, LanguageOption, Translations } from "./types";
import { LANGUAGES, DEFAULT_LANGUAGE } from "./languages";
import { DICTIONARIES } from "./dictionaries";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translations;
  languages: LanguageOption[];
  currentLanguage: LanguageOption;
}

const LanguageContext = createContext<LanguageContextType>({
  language: DEFAULT_LANGUAGE,
  setLanguage: () => null,
  t: DICTIONARIES[DEFAULT_LANGUAGE],
  languages: LANGUAGES,
  currentLanguage: LANGUAGES[0],
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("pixelcheck_language") as Language | null;
      if (stored && DICTIONARIES[stored]) {
        setLanguageState(stored);
      } else {
        // Try to detect user's browser language
        const navLang = navigator.language?.split("-")[0]?.toLowerCase() as Language;
        if (navLang && DICTIONARIES[navLang]) {
          setLanguageState(navLang);
        }
      }
    } catch {
      // ignore localStorage errors in private browsing
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }
  }, [language]);

  const setLanguage = useCallback((newLang: Language) => {
    if (!DICTIONARIES[newLang]) return;
    setLanguageState(newLang);
    try {
      localStorage.setItem("pixelcheck_language", newLang);
    } catch {
      // ignore
    }
  }, []);

  const currentLangOption = useMemo(() => {
    return LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];
  }, [language]);

  const activeTranslations = useMemo(() => {
    return DICTIONARIES[language] || DICTIONARIES[DEFAULT_LANGUAGE];
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: activeTranslations,
      languages: LANGUAGES,
      currentLanguage: currentLangOption,
    }),
    [language, setLanguage, activeTranslations, currentLangOption]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
