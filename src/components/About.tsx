"use client";

import { useLang } from "@/i18n/LangProvider";

export default function About() {
  const { t } = useLang();
  return (
    <section id="about" className="border-b-2 border-ink">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <p className="font-mono text-xs uppercase">{t.about.tag}</p>

        <div className="mt-2 grid gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:items-start">
          <div>
            <h2 className="font-display text-6xl uppercase md:text-8xl">{t.about.title}</h2>
            <p className="mt-8 font-sans text-lg leading-relaxed md:text-xl">{t.about.p1}</p>
            <p className="mt-4 font-sans text-lg leading-relaxed md:text-xl">{t.about.p2}</p>
            <div className="mt-8 inline-block border-2 border-ink bg-ink p-4 font-mono text-xs uppercase text-paper">
              {t.about.based}
            </div>
          </div>

          <figure className="shadow-brut-accent relative overflow-hidden border-2 border-ink md:mt-12 md:rotate-1">
            <img src="/img/crew.jpg" alt="Planet Circle crew" className="block aspect-[16/9] h-auto w-full object-cover" />
            <figcaption className="border-t-2 border-ink bg-paper px-3 py-2 font-mono text-xs uppercase text-ink/80">
              The crew
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
