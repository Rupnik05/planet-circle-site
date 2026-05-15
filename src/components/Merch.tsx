"use client";

import { useLang } from "@/i18n/LangProvider";

const ITEMS = [
  { label: "T-SHIRT", src: "/merch/tee.jpeg", rotate: "-rotate-2" },
  { label: "HOODIE", src: "/merch/hoodie.webp", rotate: "rotate-1" },
  { label: "CAP", src: "/merch/cap.webp", rotate: "-rotate-1" },
];

export default function Merch() {
  const { t } = useLang();
  return (
    <section id="merch" className="border-b-2 border-ink bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="font-mono text-xs uppercase text-paper/50">{t.merch.tag}</p>
            <h2 className="font-display text-6xl uppercase text-paper md:text-8xl">{t.merch.title}</h2>
          </div>
          <span className="shadow-brut-accent hidden border-2 border-accent px-3 py-2 font-mono text-sm uppercase text-accent md:inline-block">
            {t.merch.coming}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {ITEMS.map(({ label, src, rotate }) => (
            <div key={label} className="shadow-brut-accent relative aspect-[3/4] overflow-hidden border-2 border-ink/30 bg-paper">
              <div className={`absolute inset-0 ${rotate} scale-110`}>
                <img
                  src={src}
                  alt=""
                  aria-hidden
                  className="h-full w-full object-cover blur-[16px] saturate-90"
                />
              </div>
              <div className="absolute inset-0 bg-paper/25" />
              <div className="noise absolute inset-0 opacity-20 mix-blend-multiply" />
              <div className="absolute inset-0 border-[16px] border-paper/50 shadow-[inset_0_0_70px_rgba(244,241,234,0.55)]" />
              <div className="absolute left-4 top-4 border-2 border-ink/60 bg-paper/85 px-2 py-1 font-mono text-[10px] uppercase text-ink/80">
                Preview locked
              </div>
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between border-t border-ink/20 bg-paper/80 px-4 py-3 backdrop-blur-sm">
                <span className="font-display text-lg uppercase text-ink/80">{label}</span>
                <span className="font-mono text-[10px] uppercase text-accent">COMING SOON</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-xl">
          <p className="font-sans text-lg leading-relaxed text-paper/70">{t.merch.body}</p>
          <a
            href="https://instagram.com/planetcircle__"
            target="_blank"
            rel="noopener noreferrer"
            className="shadow-brut-accent mt-6 inline-block border-2 border-accent px-6 py-3 font-mono text-sm uppercase text-accent transition-colors hover:bg-accent hover:text-ink"
          >
            {t.merch.notify}
          </a>
        </div>
      </div>
    </section>
  );
}
