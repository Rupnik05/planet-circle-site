export type Project = {
  id: string;
  title: string;
  status: { sl: string; en: string };
  blurb: { sl: string; en: string };
  image?: string;
  imageFit?: "cover" | "contain";
  posterText?: { sl: string[]; en: string[] };
  tag: { sl: string; en: string };
  href?: string;
};

export const projects: Project[] = [
  {
    id: "yugo-balkan",
    title: "Yugo Trip 2026",
    status: { sl: "Start: september 2026", en: "Starts: September 2026" },
    blurb: {
      sl: "Normalni ljudje gredo na dopust z avionom… mi gremo z Jugoti čez Balkan. 9 ljudi, 3 Zastave Yugo Koral 55. Septembra štartamo.",
      en: "Normal people fly on holiday… we're crossing the Balkans in Yugos. 9 people, 3 Zastava Yugo Koral 55s. Leaving September.",
    },
    posterText: {
      sl: ["3 YUGOTI", "9 LJUDI", "1 BALKAN", "SEP 2026"],
      en: ["3 YUGOS", "9 PEOPLE", "1 BALKAN", "SEP 2026"],
    },
    tag: { sl: "POT", en: "TRIP" },
    href: "https://www.instagram.com/planetcircle__/reel/DVBrcw8iI2o/",
  },
];

export const pastProjects: Project[] = [
  {
    id: "polkatres-kovk-2026",
    title: "Polkatres · pred-Kovk žur",
    status: { sl: "Sob · 30. avg 2026 · 19:00 · Športni park Budanje", en: "Sat · 30 Aug 2026 · 19:00 · Športni park Budanje" },
    blurb: {
      sl: "Pred tradicionalnim pohodom Budanjcev na Kovk vabljeni na Ravne. Za noro zabavo poskrbi skupina POLKATRES — vas drži na nogah do polnoči. Pridite ogret noge, da bo v nedeljo pot do Kovka lažja 😉",
      en: "Before the traditional Budanje hike up Kovk, come over to Ravne. POLKATRES brings the wild energy and keeps you on your feet. Warm the legs up Saturday — Sunday's climb will be easier 😉",
    },
    image: "/img/polkatres-2026.jpg",
    imageFit: "cover",
    tag: { sl: "ŽUR", en: "PARTY" },
  },
  {
    id: "malo-za-zenske-moske-2026",
    title: "Malo za ženske, malo za moške",
    status: { sl: "1. marec 2026", en: "1 Mar 2026" },
    blurb: {
      sl: "Večer v Dvorani KS Budanje. Stand-up vajb, glasba, koktajli. Malo za ene, malo za druge.",
      en: "A night at Dvorana KS Budanje. Stand-up vibes, music, cocktails. A bit for everyone.",
    },
    image: "/img/malo-za-zenske-moske-2026.jpg",
    imageFit: "cover",
    tag: { sl: "STRAN", en: "SIDE" },
  },
];
