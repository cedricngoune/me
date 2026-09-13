import { Effects } from "@/src/components/effects";
import { Footer } from "@/src/components/footer";
import { About } from "@/src/components/sections/about";
import { Contact } from "@/src/components/sections/contact";
import { Hero } from "@/src/components/sections/hero";
import { Projects } from "@/src/components/sections/projects";
import { Services } from "@/src/components/sections/services";
import { Stack } from "@/src/components/sections/stack";
import { Header } from "@/src/components/header";

export default function Home() {
  return (
    <>
      <Effects />
      <a
        href="#profil"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-surface focus:px-4 focus:py-3 focus:shadow-haute"
      >
        Aller au contenu
      </a>

      <Header />

      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Stack />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
