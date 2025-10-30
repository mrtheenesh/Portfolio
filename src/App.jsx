import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Bg from "./components/bg";
import Showcase from "./components/portfolio";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 400,
      once: false,
    });
  }, []);

  return (
    <>
      <div>
        <Bg />
      </div>
      <section className="relative z-10 text-white">
        <Navbar />
        <Hero />
        <About />
        <Showcase />
        <Skills />
        <Contact />
        <Footer />
      </section>
    </>
  );
}
