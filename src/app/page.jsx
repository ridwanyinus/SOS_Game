import Navbar from "./Sections/Navbar";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Features from "./Sections/Features";
import Requirements from "./Sections/Requirements";
import Newsletter from "./Sections/Newsletter";
import Footer from "./Sections/Footer";
import Quote from "./Sections/Quote";
import scrolldown from "public/assets/scrolldown.svg";
import Image from "next/image";
const Home = () => {
  return (
    <main>
      <section className="w-full h-screen sm:h-[110vh]   max-lg:object-contain max-widescreen:bg-left-bottom  xl:h-[960px] bg-[url('/assets/hero.png')] relative max-lg:pb-12 overflow-hidden">
        <div className="overlay"></div>
        <Navbar />
        <Hero />
        <div className="absolute bottom-5 xl:bottom-10 max-md:right-[45%]  xl:right-[50%] block w-fit mx-auto place-content-center">
          <a href="#about" className="text-white font-open text-xs leading-[22px] uppercase font-bold text-center flex flex-col justify-center items-center space-y-1 ">
            <button type="button" className="uppercase">
              the story
            </button>
            <Image src={scrolldown} alt="scrolldown" />
          </a>
        </div>
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
