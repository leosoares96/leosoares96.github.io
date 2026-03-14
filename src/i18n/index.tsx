import { createContext, useContext, useState, ReactNode } from "react";
import { en } from "./en";
import { pt } from "./pt";

type Lang = "en" | "pt";
type Translations = typeof en;

interface I18nContextType {
  t: Translations;
  lang: Lang;
  toggleLang: () => void;
}

const I18nContext = createContext<I18nContextType | null>(null);

const translations: Record<Lang, Translations> = { en, pt: pt as unknown as Translations };

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const toggleLang = () => setLang((l) => (l === "en" ? "pt" : "en"));
  return (
    <I18nContext.Provider value={{ t: translations[lang], lang, toggleLang }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
