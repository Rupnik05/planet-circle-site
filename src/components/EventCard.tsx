"use client";

import type { CollectiveEvent } from "@/data/events";
import { useLang } from "@/i18n/LangProvider";

export default function EventCard({ event, index: _index, featured = false }: { event: CollectiveEvent; index: number; featured?: boolean }) {
  const { lang } = useLang();

  const mediaAspect = featured ? "md:aspect-auto md:h-full aspect-[3/4]" : "aspect-[4/3]";

  return (
    <a
      href={event.href ?? "#"}
      target={event.href ? "_blank" : undefined}
      rel={event.href ? "noopener noreferrer" : undefined}
      className={`group shadow-brut block border-2 border-ink bg-paper transition-transform hover:-translate-x-1 hover:-translate-y-1 ${featured ? "md:grid md:min-h-[560px] md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]" : ""}`}
    >
      <div className={`relative overflow-hidden border-b-2 border-ink ${mediaAspect} ${featured ? "md:border-b-0 md:border-r-2" : ""}`}>
        <div
          className="absolute inset-0 scale-110 blur-lg brightness-75"
          style={{ backgroundImage: `url(${event.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div
          className="absolute inset-0 bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${event.image})`,
            backgroundSize: event.imageFit === "contain" ? "contain" : "cover",
          }}
        />
        <span className="absolute left-2 top-2 border-2 border-ink bg-paper px-2 py-1 font-mono text-[10px] uppercase">
          {event.tag[lang]}
        </span>
        <span className="absolute bottom-2 right-2 border-2 border-ink bg-accent px-2 py-1 font-mono text-xs uppercase text-paper">
          {event.date[lang]}
        </span>
      </div>
      <div className={featured ? "flex flex-col justify-center p-6 md:p-10" : "p-4"}>
        <h3 className={`font-display uppercase leading-tight ${featured ? "text-3xl md:text-5xl" : "text-2xl"}`}>{event.title}</h3>
        <p className={`mt-1 font-mono uppercase text-ink/70 ${featured ? "text-sm" : "text-xs"}`}>{event.venue[lang]}</p>
        <p className={`mt-3 font-sans leading-snug ${featured ? "text-base md:text-lg" : "text-sm"}`}>{event.blurb[lang]}</p>
        <p className={`mt-4 font-mono uppercase group-hover:text-accent ${featured ? "text-sm" : "text-xs"}`}>
          {event.href ? "→ " + new URL(event.href).hostname : "→"}
        </p>
      </div>
    </a>
  );
}
