"use client";

import { useLang } from "@/i18n/LangProvider";

export default function Contact() {
  const { t } = useLang();
  return (
    <section id="contact" className="bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <p className="font-mono text-xs uppercase">{t.contact.tag}</p>
        <h2 className="font-display text-[14vw] leading-[0.85] uppercase md:text-[10rem]">
          {t.contact.titleA}<br />
          <span className="text-accent">{t.contact.titleB}</span>
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <a
            href="https://instagram.com/planetcircle__"
            target="_blank"
            rel="noopener noreferrer"
            className="shadow-brut border-2 border-ink bg-paper p-6 transition-all hover:bg-accent hover:text-paper"
          >
            <p className="font-mono text-xs uppercase opacity-70">{t.contact.igLabel}</p>
            <p className="mt-2 font-display text-2xl uppercase">@planetcircle__</p>
          </a>
          <a
            href="mailto:circle.planetv1@gmail.com"
            className="shadow-brut border-2 border-ink bg-paper p-6 transition-all hover:bg-accent hover:text-paper"
          >
            <p className="font-mono text-xs uppercase opacity-70">{t.contact.emailLabel}</p>
            <p className="mt-2 whitespace-nowrap font-display text-sm uppercase md:text-base">circle.planetv1@gmail.com</p>
          </a>
          <a
            href="https://linktr.ee/planetcircle__"
            target="_blank"
            rel="noopener noreferrer"
            className="shadow-brut border-2 border-ink bg-paper p-6 transition-all hover:bg-accent hover:text-paper"
          >
            <p className="font-mono text-xs uppercase opacity-70">{t.contact.bookingLabel}</p>
            <p className="mt-2 font-display text-2xl uppercase">{t.contact.bookingValue}</p>
          </a>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t-2 border-ink/30 pt-6 font-mono text-xs uppercase text-ink/60 md:flex-row">
          <p>© {new Date().getFullYear()} Planet Circle</p>
          <p>{t.contact.footer}</p>
        </div>
      </div>
    </section>
  );
}
