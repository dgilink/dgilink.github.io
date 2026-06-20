import type { Lang } from "@/lib/i18n";

export function LangSwitch({ lang, onChange }: { lang: Lang; onChange: (l: Lang) => void }) {
  const opts: Lang[] = ["ko", "en", "ja"];
  return (
    <div role="tablist" aria-label="Language" className="flex items-center rounded-full border border-border bg-white p-0.5 text-xs">
      {opts.map((o) => (
        <button
          key={o}
          role="tab"
          aria-selected={lang === o}
          onClick={() => onChange(o)}
          className={`min-w-[2rem] rounded-full px-2.5 py-1 font-semibold uppercase tracking-wider transition-colors ${
            lang === o ? "bg-[color:var(--navy)] text-white" : "text-muted-foreground hover:text-[color:var(--navy)]"
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}
