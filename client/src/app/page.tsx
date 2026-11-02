import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Terminal from "./components/sections/Terminal";
import Projects from "./components/sections/Projects";
import Principles from "./components/sections/Principles";
import Experience from "./components/sections/Experience";
import Support from "./components/sections/Support";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Terminal />
        <Projects />
        <Principles />
        <Experience />
        <Support />
        <Footer />
        <Navbar />
      </main>
    </>
  );
}