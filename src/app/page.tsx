import { LangProvider } from "@/i18n/LangProvider";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Events from "@/components/Events";
import Projects from "@/components/Projects";
import Merch from "@/components/Merch";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <LangProvider>
      <main>
        <Nav />
        <Hero />
        <Events />
        <Projects />
        <Merch />
        <About />
        <Contact />
      </main>
    </LangProvider>
  );
}
