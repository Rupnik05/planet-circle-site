import type { Lang } from "@/i18n/dict";

export type CollectiveEvent = {
  id: string;
  title: string;
  date: { sl: string; en: string };
  venue: { sl: string; en: string };
  blurb: { sl: string; en: string };
  image: string;
  imageFit?: "cover" | "contain";
  tag: { sl: string; en: string };
  href?: string;
  status: "upcoming" | "past";
};

export const upcomingEvents: CollectiveEvent[] = [
  {
    id: "cao-poletje-2026",
    title: "Čao Poletje",
    date: { sl: "24. jun 2026 · 20:00", en: "24 Jun 2026 · 20:00" },
    venue: { sl: "Športni park Budanje · Ravne", en: "Športni park Budanje · Ravne" },
    blurb: {
      sl: "Pred dvejmi leti je biu vajb brutaln — letos vračamo. Tambura Team (akustika, lokalc, brez filtra) + DJ Janko (vinilke, stari maček). Mi se preuč veselimo, pridite začet poletje ku se spodwbi.",
      en: "Two years ago the vibe was brutal — we're bringing it back. Tambura Team (acoustic, locals, no filter) + DJ Janko (vinyl veteran). Come start the summer the right way.",
    },
    image: "/img/cao-poletje-2026.jpg",
    imageFit: "contain",
    tag: { sl: "PRIHAJAJOČE", en: "UPCOMING" },
    href: "https://fb.me/e/95DVgiyVs",
    status: "upcoming",
  },
  {
    id: "techno-volley-2026",
    title: "Techno Volley 2026",
    date: { sl: "22. avg 2026 · 13:00", en: "22 Aug 2026 · 13:00" },
    venue: { sl: "Športni park Budanje · Planet Circle × KAŠ", en: "Športni park Budanje · Planet Circle × KAŠ" },
    blurb: {
      sl: "Lani je blu bolanu, letos bo za si vrtat lukno u koleno. Odbojka na mivki + elektronska glasba. 16 ekip × 3 (15€/ekipa). Brezplačen vstop za gledalce. Dva odra, šank, hrana, parking.",
      en: "Last year was washed out — this year you'll want to drill your own kneecap. Beach volleyball + electronic music. 16 teams × 3 (15€/team). Free entry for spectators. Two stages, bar, food, parking.",
    },
    image: "/img/tv26-promo.jpg",
    imageFit: "contain",
    tag: { sl: "PRIHAJAJOČE", en: "UPCOMING" },
    status: "upcoming",
  },
];

export const pastEvents: CollectiveEvent[] = [
  {
    id: "uno-dos-dance-2026",
    title: "Uno Dos Dance",
    date: { sl: "Sob · 17.01.2026 · 19:00→05:00", en: "Sat · 17.01.2026 · 19:00→05:00" },
    venue: { sl: "Edicija 2026 · Planet Circle", en: "2026 Edition · Planet Circle" },
    blurb: {
      sl: "Ob 19h se začne z legendarnim DJ Jankom, pole denskmo globoku u nouč. Pokal šanka se lwti že ob 18h, kjer bo konkurenca še hujša ku na enki. Degrees · Kajs · DJ Janko · tZaha",
      en: "Kicks off at 7pm with the legendary DJ Janko, then deep into the night. Bar competition starts at 6. Degrees · Kajs · DJ Janko · tZaha",
    },
    image: "/img/uno-dos-dance-poster.jpg",
    imageFit: "contain",
    tag: { sl: "ARHIV", en: "ARCHIVE" },
    href: "https://uno1dos2dance.netlify.app/",
    status: "past",
  },
  {
    id: "techno-volley-2025",
    title: "Techno Volley 2025",
    date: { sl: "Poletje 2025 · Vol. 01", en: "Summer 2025 · Vol. 01" },
    venue: { sl: "Športni park Budanje", en: "Športni park Budanje" },
    blurb: {
      sl: "Prva edicija. 200–300 obiskovalcev. Odbojka na mivki + elektronska glasba na svežem zraku. Degrees · Brose · Alex Mar · Eskape · Wakne",
      en: "First edition. 200–300 people. Beach volleyball + open-air electronic music. Degrees · Brose · Alex Mar · Eskape · Wakne",
    },
    image: "/img/tv25-poster.jpg",
    imageFit: "contain",
    tag: { sl: "ARHIV", en: "ARCHIVE" },
    status: "past",
  },
];

export const tr = <T extends Record<Lang, unknown>>(field: T, lang: Lang) => field[lang];
