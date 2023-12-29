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
      <section className="w-full h-full max-lg:object-contain max-widescreen:bg-left-bottom  xl:h-[960px] bg-[url('/assets/hero.png')] relative pb-12 overflow-hidden">
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
