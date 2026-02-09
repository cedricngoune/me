import { About } from "../components/About";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      {/* <Skills /> */}
      {/* <Footer />  */}
    </main>
  );
}
