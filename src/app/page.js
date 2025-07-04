import Image from "next/image";
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero";
import About from "./Components/About"
import Services from "./Components/Services";
import Faq from "./Components/Faq";
import Testmonial from "./Components/Testmonial";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";
export default function Home() {

  return (

    <div>
      <Navbar />

      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="testimonials">
        <Testmonial />
      </section>

      <section id="faq">
        <Faq />
      </section>

      <section id="contact">
        <ContactForm />
      </section>

      <Footer />
    </div>
  );
}
