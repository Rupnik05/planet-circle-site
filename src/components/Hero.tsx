"use client";

import { useLang } from "@/i18n/LangProvider";

export default function Hero() {
  const { t } = useLang();
  const ticker = t.hero.ticker;
  return (
    <section id="top" className="relative overflow-hidden border-b-2 border-ink">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-8">
          <p className="mb-4 inline-block border-2 border-ink bg-accent px-2 py-1 font-mono text-xs uppercase text-paper">
            {t.hero.kicker}
          </p>
          <h1 className="font-display text-[12vw] leading-[0.85] uppercase md:text-[8.5rem]">
            {t.hero.lineA}<br />
            {t.hero.lineB} <span className="text-accent">{t.hero.lineC.split(",")[0]},</span><br />
            {t.hero.lineC.split(",").slice(1).join(",").trim()}
          </h1>
          <p className="mt-8 max-w-xl font-sans text-lg leading-relaxed md:text-xl">
            {t.hero.body}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#events"
              className="shadow-brut inline-block border-2 border-ink bg-ink px-6 py-3 font-mono text-sm uppercase text-paper transition-transform hover:-translate-x-1 hover:-translate-y-1"
            >
              {t.hero.ctaEvents}
            </a>
            <a
              href="#about"
              className="shadow-brut-sm inline-block border-2 border-ink bg-paper px-6 py-3 font-mono text-sm uppercase transition-transform hover:-translate-x-1 hover:-translate-y-1"
            >
              {t.hero.ctaAbout}
            </a>
          </div>
        </div>

        <div className="md:col-span-4 md:pt-8">
          <div className="shadow-brut-accent relative aspect-[3/4] -rotate-2 overflow-hidden border-2 border-ink bg-ink">
            <img
              src="/img/hero-tv26.jpg"
              alt="Planet Circle crew · 22 Avgust"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="noise absolute inset-0 opacity-25 mix-blend-overlay" />
            <div className="absolute bottom-3 left-3 right-3 border-2 border-paper bg-ink/85 p-3 font-mono text-xs uppercase text-paper backdrop-blur-sm">
              {t.hero.poster}
            </div>
          </div>
        </div>
      </div>

      <div className="marquee border-t-2 border-ink bg-ink py-3 text-paper">
        <div className="marquee-track font-display text-2xl uppercase">
          {[...ticker, ...ticker, ...ticker].map((s, i) => (
            <span key={i} className="flex items-center gap-12">
              {s} <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
