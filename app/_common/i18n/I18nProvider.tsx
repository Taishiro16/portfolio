"use client";

import en from "../locales/en.json";
import ja from "../locales/ja.json";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type Locale = "ja" | "en";

type Messages = typeof en;

type I18nContextValue = {
  locale: Locale;
  t: (path: string) => string;
  setLocale: (next: Locale) => void;
};

const resources: Record<Locale, Messages> = { en, ja };

const I18nContext = createContext<I18nContextValue | null>(null);

/**
 * 翻訳関数とロケール状態をクライアントコンポーネントへ提供するプロバイダ。
 */
export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("ja");

  const t = useCallback(
    (path: string) => {
      const parts = path.split(".");
      let current: any = resources[locale];
      for (const part of parts) {
        if (current && typeof current === "object" && part in current) {
          current = current[part];
        } else {
          return path; // fallback: return the key
        }
      }
      return typeof current === "string" ? current : path;
    },
    [locale],
  );

  const value = useMemo(
    () => ({
      locale,
      t,
      setLocale,
    }),
    [locale, t],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

/**
 * 翻訳関数と現在のロケールにアクセスするためのフック。
 */
export function useTranslation() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useTranslation must be used within I18nProvider");
  }
  return ctx;
}
