import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import dgiLinkLogoUrl from "@/assets/dgi-link-logo.png";
import { LangSwitch } from "@/components/lang-switch";
import { detectLang, type Lang } from "@/lib/i18n";

const BACK_LABEL: Record<Lang, string> = {
  ko: "← 홈으로",
  en: "← Back to Home",
  ja: "← ホームへ",
};

export function LegalLayout({ children }: { children: (lang: Lang) => ReactNode }) {
  const [lang, setLang] = useState<Lang>("ko");

  useEffect(() => setLang(detectLang()), []);
  useEffect(() => {
    window.localStorage.setItem("dgi-lang", lang);
    document.documentElement.lang = lang === "ko" ? "ko" : lang === "ja" ? "ja" : "en";
  }, [lang]);

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <header className="border-b border-border bg-white">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2">
            <img src={dgiLinkLogoUrl} alt="DGI Link" className="block h-8 w-auto" />
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-sm text-muted-foreground transition-colors hover:text-[color:var(--navy)]">
              {BACK_LABEL[lang]}
            </Link>
            <LangSwitch lang={lang} onChange={setLang} />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">{children(lang)}</main>

      <footer className="border-t border-border bg-white py-8 text-center text-xs text-muted-foreground">
        © 2026 DGI Link (디지아이링크). All rights reserved.
      </footer>
    </div>
  );
}

export function LegalSection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section className="mb-11">
      <h2
        className="mb-3.5 border-l-[3px] border-[color:var(--brand-green)] pl-3 font-display text-lg font-bold text-[color:var(--navy-deep)]"
      >
        {heading}
      </h2>
      <div className="space-y-3 text-[15px] leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

export function LegalInfoBox({ rows }: { rows: Array<{ label: string; value: string }> }) {
  return (
    <div className="rounded-2xl border border-border bg-muted p-5">
      {rows.map((r, i) => (
        <div
          key={r.label}
          className={`flex flex-col gap-1 py-2.5 text-sm sm:flex-row sm:gap-4 ${
            i < rows.length - 1 ? "border-b border-border" : ""
          }`}
        >
          <span className="min-w-[160px] shrink-0 font-semibold text-[color:var(--brand-green)]">{r.label}</span>
          <span className="text-muted-foreground">{r.value}</span>
        </div>
      ))}
    </div>
  );
}
