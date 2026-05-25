import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Services from "./components/Services";
import Departments from "./components/Departments";
import Doctors from "./components/Doctors";
import Testimonials from "./components/Testimonials";
import EmergencyBanner from "./components/EmergencyBanner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Departments />
        <Doctors />
        <Testimonials />
        <EmergencyBanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
