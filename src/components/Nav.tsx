"use client";

import { useLang } from "@/i18n/LangProvider";

export default function Nav() {
  const { lang, setLang, t } = useLang();
  return (
    <nav className="sticky top-0 z-50 border-b-2 border-ink bg-paper">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-xl tracking-tight md:text-2xl">
          PLANET<span className="text-accent">·</span>CIRCLE
        </a>
        <ul className="hidden gap-6 font-mono text-sm uppercase md:flex">
          <li><a href="#events" className="hover:text-accent">{t.nav.events}</a></li>
          <li><a href="#projects" className="hover:text-accent">{t.nav.projects}</a></li>
          <li><a href="#merch" className="hover:text-accent">{t.nav.merch}</a></li>
          <li><a href="#about" className="hover:text-accent">{t.nav.about}</a></li>
          <li><a href="#contact" className="hover:text-accent">{t.nav.contact}</a></li>
        </ul>
        <div className="flex items-center gap-2 font-mono text-xs uppercase">
          <button
            onClick={() => setLang("sl")}
            className={`border-2 border-ink px-2 py-1 ${lang === "sl" ? "bg-ink text-paper" : "bg-paper"}`}
          >
            SL
          </button>
          <button
            onClick={() => setLang("en")}
            className={`border-2 border-ink px-2 py-1 ${lang === "en" ? "bg-ink text-paper" : "bg-paper"}`}
          >
            EN
          </button>
        </div>
      </div>
    </nav>
  );
}
