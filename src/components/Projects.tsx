"use client";

import { projects, pastProjects } from "@/data/projects";
import { pastEvents } from "@/data/events";
import type { Project } from "@/data/projects";
import { useLang } from "@/i18n/LangProvider";

const pastEventsAsProjects: Project[] = pastEvents.map((e) => ({
  id: e.id,
  title: e.title,
  status: e.date,
  blurb: e.blurb,
  image: e.image,
  imageFit: e.imageFit,
  tag: e.tag,
  href: e.href,
}));

const allPast: Project[] = [...pastEventsAsProjects, ...pastProjects];

export default function Projects() {
  const { lang, t } = useLang();
  return (
    <section id="projects" className="border-b-2 border-ink bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12">
          <p className="font-mono text-xs uppercase text-paper/70">{t.projects.tag}</p>
          <h2 className="font-display text-6xl uppercase md:text-8xl">{t.projects.title}</h2>
          <p className="mt-3 max-w-xl font-sans text-paper/70">{t.projects.subtitle}</p>
        </div>

        <div className={projects.length === 1 ? "" : "grid grid-cols-1 gap-8 md:grid-cols-3"}>
          {projects.map((p, i) => {
            const featured = projects.length === 1;
            return (
              <a
                key={p.id}
                href={p.href ?? "#"}
                target={p.href ? "_blank" : undefined}
                rel={p.href ? "noopener noreferrer" : undefined}
                className={`group block border-2 border-paper bg-ink transition-transform hover:-translate-x-1 hover:-translate-y-1 ${
                  featured
                    ? "md:grid md:min-h-[560px] md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:-rotate-1"
                    : i % 2 === 0 ? "md:-rotate-1" : "md:rotate-1"
                }`}
                style={{ boxShadow: "6px 6px 0 0 var(--color-accent)" }}
              >
                <div
                  className={`relative overflow-hidden border-b-2 border-paper bg-ink ${
                    featured ? "aspect-[3/4] md:aspect-auto md:h-full md:border-b-0 md:border-r-2" : "aspect-[3/4]"
                  }`}
                >
                  {p.image ? (
                    <>
                      <div
                        className="absolute inset-0 scale-110 blur-lg brightness-60"
                        style={{ backgroundImage: `url(${p.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
                      />
                      <div
                        className="absolute inset-0 bg-center bg-no-repeat"
                        style={{
                          backgroundImage: `url(${p.image})`,
                          backgroundSize: p.imageFit === "contain" ? "contain" : "cover",
                        }}
                      />
                    </>
                  ) : (
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#1f1a14_0%,#0a0807_70%)]">
                      <div className="noise absolute inset-0 opacity-30 mix-blend-overlay" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
                        {(p.posterText?.[lang] ?? []).map((line, idx) => (
                          <span
                            key={idx}
                            className={`font-display uppercase leading-none ${
                              idx === 0
                                ? "text-5xl text-paper md:text-7xl"
                                : idx === 1
                                ? "text-3xl text-accent md:text-5xl"
                                : "text-2xl text-paper/80 md:text-4xl"
                            }`}
                          >
                            {line}
                          </span>
                        ))}
                      </div>
                      <div className="absolute inset-x-4 bottom-3 border-t border-paper/30 pt-2 font-mono text-[10px] uppercase text-paper/50">
                        Planet Circle · {p.id}
                      </div>
                    </div>
                  )}
                  <span className="absolute left-2 top-2 z-10 border-2 border-paper bg-ink px-2 py-1 font-mono text-[10px] uppercase">
                    {p.tag[lang]}
                  </span>
                </div>
                <div className={featured ? "flex flex-col justify-center p-6 md:p-10" : "p-4"}>
                  <h3 className={`font-display uppercase leading-tight ${featured ? "text-3xl md:text-5xl" : "text-2xl"}`}>{p.title}</h3>
                  <p className={`mt-1 font-mono uppercase text-accent ${featured ? "text-sm" : "text-xs"}`}>{p.status[lang]}</p>
                  <p className={`mt-3 font-sans leading-snug text-paper/80 ${featured ? "text-base md:text-lg" : "text-sm"}`}>{p.blurb[lang]}</p>
                </div>
              </a>
            );
          })}
        </div>

        {allPast.length > 0 && (
          <div className="mt-24">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-[2px] w-12 bg-paper" />
              <h3 className="font-display text-2xl uppercase md:text-3xl">{t.projects.past}</h3>
            </div>
            {(() => {
              const renderCard = (p: Project, i: number) => (
                <a
                  key={p.id}
                  href={p.href ?? "#"}
                  target={p.href ? "_blank" : undefined}
                  rel={p.href ? "noopener noreferrer" : undefined}
                  className={`group block h-full border-2 border-paper bg-ink opacity-80 transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:opacity-100 ${
                    i % 2 === 0 ? "md:-rotate-1" : "md:rotate-1"
                  }`}
                  style={{ boxShadow: "6px 6px 0 0 var(--color-accent)" }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden border-b-2 border-paper bg-ink">
                    <div
                      className="absolute inset-0 scale-110 blur-lg brightness-60"
                      style={{ backgroundImage: `url(${p.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
                    />
                    <div
                      className="absolute inset-0 bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url(${p.image})`,
                        backgroundSize: p.imageFit === "contain" ? "contain" : "cover",
                      }}
                    />
                    <span className="absolute left-2 top-2 border-2 border-paper bg-ink px-2 py-1 font-mono text-[10px] uppercase">
                      {p.tag[lang]}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-xl uppercase leading-tight">{p.title}</h3>
                    <p className="mt-1 font-mono text-xs uppercase text-accent">{p.status[lang]}</p>
                    <p className="mt-3 font-sans text-sm leading-snug text-paper/80">{p.blurb[lang]}</p>
                  </div>
                </a>
              );

              return (
                <>
                  {/* Mobile: swipeable */}
                  <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 md:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {allPast.map((p, i) => (
                      <div key={p.id} className="w-[85%] flex-none snap-center">
                        {renderCard(p, i)}
                      </div>
                    ))}
                  </div>
                  <p className="-mt-2 mb-2 text-center font-mono text-[10px] uppercase text-paper/50 md:hidden">
                    ← drsaj →
                  </p>

                  {/* Desktop: grid */}
                  <div className="hidden gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">
                    {allPast.map((p, i) => renderCard(p, i))}
                  </div>
                </>
              );
            })()}
          </div>
        )}
      </div>
    </section>
  );
}
