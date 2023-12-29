import Link from "next/link";
import Image from "next/image";
import Navbar from "./Sections/Navbar";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Features from "./Sections/Features";
import Requirements from "./Sections/Requirements";
import Newsletter from "./Sections/Newsletter";
import Footer from "./Sections/Footer";
import Quote from "./Sections/Quote";
const Home = () => {
  return (
    <main>
      <section className="w-full h-[960px] bg-[url('/assets/hero.png')] relative ">
        <div className="overlay"></div>
        <Navbar />
        <Hero />
      </section>
      <About />
      <Features />
      <Requirements />
      <Quote />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default Home;
