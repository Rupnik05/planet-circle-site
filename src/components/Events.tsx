"use client";

import { upcomingEvents } from "@/data/events";
import EventCard from "./EventCard";
import { useLang } from "@/i18n/LangProvider";

export default function Events() {
  const { t } = useLang();
  return (
    <section id="events" className="border-b-2 border-ink">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="font-mono text-xs uppercase">{t.events.tag}</p>
            <h2 className="font-display text-6xl uppercase md:text-8xl">{t.events.title}</h2>
          </div>
          <span className="shadow-brut-sm hidden border-2 border-ink bg-accent px-3 py-2 font-mono text-sm uppercase text-paper md:inline-block">
            {upcomingEvents.length} {t.events.count}
          </span>
        </div>

        <div className={upcomingEvents.length === 1 ? "" : "grid grid-cols-1 gap-8 md:grid-cols-2"}>
          {upcomingEvents.map((e, i) => (
            <EventCard key={e.id} event={e} index={i} featured={upcomingEvents.length === 1} />
          ))}
        </div>

      </div>
    </section>
  );
}
