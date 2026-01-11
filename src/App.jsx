import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-slate-950 text-slate-300 selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <Skills />
      <Projects />
      <Blog />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
