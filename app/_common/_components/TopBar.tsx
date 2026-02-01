"use client";

import { useTranslation } from "../i18n/I18nProvider";
import { Heading } from "./Heading";
import { useEffect, useRef, useState } from "react";

/**
 * 共通のトップバー。ローカライズされたタイトルと言語切替ボタンを表示。
 */
export function TopBar() {
  const { t, locale, setLocale } = useTranslation();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleSelect = (next: "ja" | "en") => {
    setLocale(next);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="mb-6 flex items-center gap-3">
      <Heading level={1}>{t("hero.title")}</Heading>
      <div className="relative ml-auto" ref={menuRef}>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-sm font-medium text-zinc-700 shadow-sm transition hover:border-zinc-300 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-zinc-600"
          aria-haspopup="listbox"
          aria-expanded={open}
        >
          <span className="text-lg leading-none">🌐</span>
          <span className="text-xs uppercase tracking-wide">language</span>
        </button>
        {open ? (
          <div className="absolute right-0 z-20 mt-2 w-36 overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-lg dark:border-zinc-700 dark:bg-zinc-900">
            <button
              type="button"
              onClick={() => handleSelect("ja")}
              className={`flex w-full items-center justify-between px-4 py-2 text-sm ${
                locale === "ja"
                  ? "bg-zinc-100 font-semibold dark:bg-zinc-800"
                  : "hover:bg-zinc-50 dark:hover:bg-zinc-800/70"
              }`}
            >
              日本語
              <span className="text-xs text-zinc-500">JA</span>
            </button>
            <button
              type="button"
              onClick={() => handleSelect("en")}
              className={`flex w-full items-center justify-between px-4 py-2 text-sm ${
                locale === "en"
                  ? "bg-zinc-100 font-semibold dark:bg-zinc-800"
                  : "hover:bg-zinc-50 dark:hover:bg-zinc-800/70"
              }`}
            >
              English
              <span className="text-xs text-zinc-500">EN</span>
            </button>
          </div>
        ) : null}
      </div>
    </header>
  );
}
