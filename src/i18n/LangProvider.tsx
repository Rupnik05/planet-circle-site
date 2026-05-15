"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { dict, type Lang, type Dict } from "./dict";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };

const defaultCtx: Ctx = {
  lang: "sl",
  setLang: () => {},
  t: dict.sl,
};

const LangCtx = createContext<Ctx>(defaultCtx);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("sl");
  return (
    <LangCtx.Provider value={{ lang, setLang, t: dict[lang] }}>
      {children}
    </LangCtx.Provider>
  );
}

export function useLang() {
  return useContext(LangCtx);
}
