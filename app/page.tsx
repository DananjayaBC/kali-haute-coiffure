import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Team from "./components/Team";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-cream text-ink overflow-x-hidden">
      <Nav />
      <Hero />
      <Services />
      <Team />
      <Gallery />
      <About />
      <Testimonials />
      <Footer />
    </main>
  );
}
