export type Lang = "ko" | "en" | "ja";

export function detectLang(): Lang {
  if (typeof window === "undefined") return "ko";
  const stored = window.localStorage.getItem("dgi-lang") as Lang | null;
  if (stored === "ko" || stored === "en" || stored === "ja") return stored;
  const nav = navigator.language?.toLowerCase() ?? "";
  if (nav.startsWith("ja")) return "ja";
  if (nav.startsWith("ko")) return "ko";
  return "en";
}
