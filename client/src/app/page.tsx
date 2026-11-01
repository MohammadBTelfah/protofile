import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Terminal from "./components/sections/Terminal";
import Projects from "./components/sections/Projects";
export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Terminal />
        <Projects />
      </main>
    </>
  );
}