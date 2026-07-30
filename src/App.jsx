import Navbar from "./components/navigation/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import QuickProfile from "./components/sections/QuickProfile";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Journey from "./components/sections/Journey";
import Education from "./components/sections/Education";
import HowIWork from "./components/sections/HowIWork";
import BlogPreview from "./components/sections/BlogPreview";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QuickProfile />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Education />
        <HowIWork />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
